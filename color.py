from PIL import Image

img = Image.open('img.png')
pixels = img.load() 
width, height = img.size

for y in range(height):      # this row
    for x in range(width):   # and this row was exchanged
        r, g, b = pixels[x, y]
        
        # in case your image has an alpha channel
        # r, g, b, a = pixels[x, y]

        print(x, y, f"#{r:02x}{g:02x}{b:02x}")

