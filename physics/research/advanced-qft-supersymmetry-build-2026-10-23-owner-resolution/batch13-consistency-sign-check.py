from collections import Counter

def w(*a):
 out=[]
 for part in a:
  for v in part:
   if out and out[-1]==-v:out.pop()
   else:out.append(v)
 return tuple(out)
def add(*terms):
 c=Counter()
 for k,t in terms:
  for mon,v in t.items():c[mon]+=k*v
 return {m:v for m,v in c.items() if v}
def beta(a,b,c,r=()):return {(r,a,b,c):1}
def act(r,c):return {(w(r,m[0]),*m[1:]):v for m,v in c.items()}
def D(a,b,c,d):return add((1,beta(b,c,d,a)),(-1,beta(w(a,b),c,d)),(1,beta(a,w(b,c),d)),(-1,beta(a,b,w(c,d))),(1,beta(a,b,c)))
g=[(i,) for i in range(1,5)];x,y,z=(5,),(6,),(7,)
a={(0,1):x,(1,2):y,(2,3):z,(0,2):w(x,y),(1,3):w(y,z),(0,3):w(x,y,z)}
b={ij:w(g[ij[0]],v,tuple(-n for n in reversed(g[ij[1]]))) for ij,v in a.items()}
def zeta(i,j,k):return add((-1,beta(g[i],a[i,j],a[j,k])),(1,beta(b[i,j],g[j],a[j,k])),(-1,beta(b[i,j],b[j,k],g[k])))
dz=add((1,act(b[0,1],zeta(1,2,3))),(-1,zeta(0,2,3)),(1,zeta(0,1,3)),(-1,zeta(0,1,2)))
u,v,t=b[0,1],b[1,2],b[2,3]
S=add((-1,D(g[0],x,y,z)),(1,D(u,g[1],y,z)),(-1,D(u,v,g[2],z)),(1,D(u,v,t,g[3])))
needed=add((1,dz),(1,beta(x,y,z,g[0])),(-1,beta(u,v,t)))
wrong=add((1,dz),(-1,beta(x,y,z,g[0])),(1,beta(u,v,t)))
assert add((1,S),(1,needed)) == {}
assert add((1,S),(1,wrong)) != {}
print('PASS: corrected step 1.3 expands identically in the free-group bar-cochain module; original equality does not.')
