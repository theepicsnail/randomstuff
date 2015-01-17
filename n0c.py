data = [
    ['S','R','Qu','A'],
    ['A','S','I','T'],
    ['I','D','E','N'],
    ['F','S','A','P'],
]#data[row][col]
WIDTH,HEIGHT=4,4

def neighbors(r,c):
    global WIDTH,HEIGHT
    for nr in xrange(max(0,r-1),min(WIDTH,r+2)):
        for nc in xrange(max(0,c-1),min(WIDTH,c+2)):
            if nr==r and nc==c: continue
            yield nr,nc

for i in neighbors(2,2):
    print i






