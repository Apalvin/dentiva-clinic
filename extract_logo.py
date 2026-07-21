import zlib, struct, os

def decode_png(path):
    with open(path, 'rb') as f:
        data = f.read()
    pos = 8
    idat = b''
    while pos < len(data):
        length, type = struct.unpack('>I4s', data[pos:pos+8])
        pos += 8
        chunk_data = data[pos:pos+length]
        pos += length + 4
        if type == b'IHDR':
            w, h, bitd, colort, comp, filt, inter = struct.unpack('>IIBBBBB', chunk_data)
        elif type == b'IDAT':
            idat += chunk_data
    decomp = zlib.decompress(idat)
    bpp = 4
    stride = w * bpp
    raw = bytearray(h * stride)
    def paeth(a, b, c):
        p = a + b - c
        pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
        if pa <= pb and pa <= pc: return a
        elif pb <= pc: return b
        else: return c

    src_pos = 0
    for y in range(h):
        filter_type = decomp[src_pos]
        src_pos += 1
        line_start = y * stride
        for x in range(stride):
            filt_val = decomp[src_pos]
            src_pos += 1
            left = raw[line_start + x - bpp] if x >= bpp else 0
            up = raw[line_start + x - stride] if y > 0 else 0
            up_left = raw[line_start + x - stride - bpp] if (y > 0 and x >= bpp) else 0
            if filter_type == 0: val = filt_val
            elif filter_type == 1: val = (filt_val + left) & 0xFF
            elif filter_type == 2: val = (filt_val + up) & 0xFF
            elif filter_type == 3: val = (filt_val + ((left + up) >> 1)) & 0xFF
            elif filter_type == 4: val = (filt_val + paeth(left, up, up_left)) & 0xFF
            else: val = filt_val
            raw[line_start + x] = val

    return w, h, raw

w, h, raw = decode_png('extracted_favicon/android-chrome-512x512.png')

# Find all green pixels for each Y row
row_data = {}
for y in range(h):
    xs = []
    for x in range(w):
        idx = (y * w + x) * 4
        if raw[idx+1] > 150: # Green channel > 150
            xs.append(x)
    if xs:
        row_data[y] = xs

min_y = min(row_data.keys())
max_y = max(row_data.keys())

# Step 1: Extract Left Outer Contour & Right Outer Contour
left_outer = []
right_outer = []

# Step 2: Extract Inner Crotch Contour (where two separate roots exist)
crotch_left = []
crotch_right = []

for y in range(min_y, max_y + 1):
    if y not in row_data:
        continue
    xs = row_data[y]
    min_x = min(xs)
    max_x = max(xs)
    
    left_outer.append((min_x, y))
    right_outer.append((max_x, y))
    
    # Check if there's a split (gap > 10 pixels between pixels in the row)
    gaps = []
    for i in range(len(xs) - 1):
        if xs[i+1] - xs[i] > 10:
            gaps.append((xs[i], xs[i+1]))
    
    # Only treat as crotch split if it's in the lower half of the tooth (y > min_y + 120)
    if gaps and y > min_y + 120:
        crotch_left.append((gaps[0][0], y))
        crotch_right.append((gaps[0][1], y))

# Downsample for smooth curves
step = 3
p_left = left_outer[::step]
p_right = right_outer[::step]
p_crotch_l = crotch_left[::step]
p_crotch_r = crotch_right[::step]

# Build smooth unbroken SVG path
path_d = f"M {p_left[0][0]} {p_left[0][1]}"

# 1. Outer left side going down
for x, y in p_left[1:]:
    path_d += f" L {x} {y}"

# 2. Inner crotch left going UP to crotch apex
for x, y in reversed(p_crotch_l):
    path_d += f" L {x} {y}"

# 3. Inner crotch right going DOWN right root
for x, y in p_crotch_r:
    path_d += f" L {x} {y}"

# 4. Outer right side going UP to top right
for x, y in reversed(p_right):
    path_d += f" L {x} {y}"

path_d += " Z"

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- Rounded Corner Card (Matching Previous Brand Style rx=140) -->
  <rect width="512" height="512" rx="140" fill="#162420"/>
  
  <!-- Solid Unbroken Whole Tooth Path traced from favicon_io.zip -->
  <path fill="#CEF149" d="{path_d}" />
</svg>'''

with open('assets/images/logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

with open('favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print('Successfully generated solid unbroken tooth SVG logo and favicon!')
