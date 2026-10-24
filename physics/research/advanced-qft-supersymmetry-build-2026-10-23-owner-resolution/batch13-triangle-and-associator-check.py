exec(open('research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/batch13-consistency-sign-check.py').read().split("assert add")[0])
from itertools import product
h=[(i,) for i in range(8,12)]
def inv(p):return tuple(-n for n in reversed(p))
c={ij:w(h[ij[0]],aij,inv(h[ij[1]])) for ij,aij in b.items()}
hg=[w(h[i],g[i]) for i in range(4)]
def zz(q,old,new,i,j,k):return add((-1,beta(q[i],old[i,j],old[j,k])),(1,beta(new[i,j],q[j],old[j,k])),(-1,beta(new[i,j],new[j,k],q[k])))
def tau(i,j):return add((1,beta(h[i],g[i],a[i,j])),(-1,beta(h[i],b[i,j],g[j])),(1,beta(c[i,j],h[j],g[j])))
L=add((1,act(h[0],zz(g,a,b,0,1,2))),(1,zz(h,b,c,0,1,2)),(-1,zz(hg,a,c,0,1,2)))
dt=add((1,act(c[0,1],tau(1,2))),(-1,tau(0,2)),(1,tau(0,1)))
R=add((1,L),(-1,dt))
Qs=[(h[0],g[0],x,y),(h[0],b[0,1],g[1],y),(h[0],b[0,1],b[1,2],g[2]),(c[0,1],h[1],g[1],y),(c[0,1],h[1],b[1,2],g[2]),(c[0,1],c[1,2],h[2],g[2])]
S=add(*[(sign,D(*q)) for sign,q in zip((-1,1,-1,-1,1,-1),Qs)])
assert not add((1,R),(-1,S))
print('PASS: triangle-coherence discrepancy equals the six displayed signed cocycle terms.')
k=[(i,) for i in range(12,16)]
d={ij:w(k[ij[0]],aij,inv(k[ij[1]])) for ij,aij in c.items()}
def tt(second,first,old,mid,new,i,j):return add((1,beta(second[i],first[i],old[i,j])),(-1,beta(second[i],mid[i,j],first[j])),(1,beta(new[i,j],second[j],first[j])))
kh=[w(k[i],h[i]) for i in range(4)]
assoc=add((1,tt(k,h,b,c,d,0,1)),(1,tt(kh,g,a,b,d,0,1)),(-1,act(k[0],tt(h,g,a,b,c,0,1))),(-1,tt(k,hg,a,c,d,0,1)))
sigma=add((1,beta(k[1],h[1],g[1],d[0,1])),(-1,beta(k[0],h[0],g[0])))
Qs=[(k[0],h[0],g[0],x),(k[0],h[0],b[0,1],g[1]),(k[0],c[0,1],h[1],g[1]),(d[0,1],k[1],h[1],g[1])]
R=add((1,assoc),(1,sigma))
S=add(*[(sign,D(*q)) for sign,q in zip((-1,1,-1,1),Qs)])
assert not add((1,R),(-1,S))
print('PASS: raw associativity defect L-R equals -delta(sigma) modulo the four displayed cocycle terms.')
