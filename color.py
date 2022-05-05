from PIL import Image
from os import listdir
from os.path import isfile, join
onlyfiles = [f for f in listdir("pics") if isfile(join("pics", f))]



# function to get unique values
def unique(list1):
 
    # initialize a null list
    unique_list = []
     
    # traverse for all elements
    for x in list1:
        # check if exists in unique_list or not
        if x not in unique_list:
            unique_list.append(x)
    return unique_list

def filterMore(list):
    items = {}
    for x in list:
        if x not in items:
            items[x] = 1
        else:
            items[x] = items[x] + 1
    moreList = []
    for y in items:
        if items[y] > 60:
            moreList.append(y.upper())
    return moreList

for file in onlyfiles:
    img = Image.open("pics/"+file)
    pixels = img.load() 
    width, height = img.size

    color = []
    for y in range(height):      # this row
        for x in range(width):   # and this row was exchanged
            # r, g, b = pixels[x, y]
            
            # in case your image has an alpha channel
            r, g, b, a = pixels[x, y]

            # print(x, y, f"#{r:02x}{g:02x}{b:02x}")
            color.append(f"#{r:02x}{g:02x}{b:02x}")

    color = filterMore(color)
    color = unique(color)

    color.remove("#1c1c1e".upper())
    if "#010101" in color:
        color.remove("#010101")

    file = file.replace('.png', '')
    i = {"id": file.lower(), "name": file, "colors": color}
    print(i)

