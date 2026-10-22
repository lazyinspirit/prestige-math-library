from collections import defaultdict

def cocycle(tri):
    if 0 in tri:
        return {tri:1}
    i,j,k=tri
    return {(0,j,k):1,(0,i,k):-1,(0,i,j):1}

def product(a,b,sign=1):
    return {(x,y):sign*i*j for x,i in cocycle(a).items() for y,j in cocycle(b).items()}
residual=defaultdict(int)
for omitted in range(5):
    i,j,k,l=[v for v in range(5) if v!=omitted]
    for a,b,sign in [((i,j,l),(j,k,l),1),((i,k,l),(i,j,k),-1)]:
        for monomial,c in product(a,b,(-1)**omitted*sign).items():
            residual[monomial]+=c
for a,b,sign in [((0,1,2),(2,3,4),-1),((2,3,4),(0,1,2),1)]:
    for monomial,c in product(a,b,sign).items():
        residual[monomial]+=c
nonzero={str(k):v for k,v in residual.items() if v}
assert not nonzero,nonzero
print('PASS: every integer coefficient in the ordered alpha-face/bar-beta-face bilinear cup-one residual is zero; no coefficient-factor commutation used.')
