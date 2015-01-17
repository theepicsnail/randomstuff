from math import sqrt
a=(1+sqrt(5))/2
b=1-a
def fibRecurance(n):
    return int((a**n-b**n)/(a-b)+.5)

def fibIterative(n):
    a,b=0,1
    for i in xrange(n):
        a,b=b,a+b
    return a

def fibRecursive(n):
    if n < 2:
        return n
    return fibRecursive(n-1)+fibRecursive(n-2)

def fibRecursive2(n,cache=[]):
    if n < 2:
        return n
    if n<len(cache):
        return cache[n]
    
    out = fibRecursive2(n-1) + fibRecursive2(n-2)
    cache.append(out)
    return out





f = fibIterative


for r in xrange(10):
    print f(r)


