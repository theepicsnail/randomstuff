from PIL import Image
im = Image.open("ss.png")

letterWidth = 146
letterHeight= 145


for i in xrange(16):
    r = i/4
    c = i%4
    x = 100+letterWidth*c
    y = 300+letterHeight*r
    tmp = im.crop((x,y,x+letterWidth,y+letterHeight))
    tmp.save(file("%i.png"%i,"w"))
