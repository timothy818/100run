from PIL import Image, ImageDraw, ImageFont
import os

def make_icon(size, path):
    img = Image.new('RGB', (size, size), '#0d0d0d')
    d = ImageDraw.Draw(img)
    # orange circle
    margin = size * 0.15
    d.ellipse([margin, margin, size-margin, size-margin], fill='#e8571a')
    # text
    font_size = int(size * 0.32)
    try:
        font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', font_size)
    except:
        font = ImageFont.load_default()
    text = "100"
    bbox = d.textbbox((0,0), text, font=font)
    tw, th = bbox[2]-bbox[0], bbox[3]-bbox[1]
    d.text(((size-tw)/2, (size-th)/2 - size*0.04), text, fill='white', font=font)
    img.save(path)

make_icon(192, '/home/claude/fitness_pwa/icons/icon-192.png')
make_icon(512, '/home/claude/fitness_pwa/icons/icon-512.png')
print("Icons generated")
