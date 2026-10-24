from fractions import Fraction as F
from itertools import combinations,product
import json

def dot(a,b): return sum(x*y for x,y in zip(a,b))
def solve(basis,v):
 a=[[F(b[i]) for b in basis]+[F(v[i])] for i in range(len(v))];r=0
 for j in range(len(basis)):
  k=next(k for k in range(r,len(a)) if a[k][j]);a[r],a[k]=a[k],a[r];u=a[r][j];a[r]=[x/u for x in a[r]]
  for k in range(len(a)):
   if k!=r:
    u=a[k][j];a[k]=[x-u*y for x,y in zip(a[k],a[r])]
  r+=1
 assert all(not any(row[:-1]) and not row[-1] for row in a[r:])
 return [a[i][-1] for i in range(r)]
def vec(n,*terms):
 v=[F(0)]*n
 for i,x in terms:v[i-1]=F(x)
 return v
R=[]
for i,j in combinations(range(8),2):
 for s,t in product([-1,1],repeat=2):R.append(vec(8,(i+1,s),(j+1,t)))
for signs in product([-1,1],repeat=8):
 if signs.count(-1)%2==0:R.append([F(x,2) for x in signs])
base=[[F(x,2) for x in [1,-1,-1,-1,-1,-1,-1,1]],vec(8,(1,1),(2,1))]+[vec(8,(j-1,1),(j-2,-1)) for j in range(3,9)]
results=[]
for r in [6,7,8]:
 roots=[x for x in R if (r==8 or x[6]+x[7]==0) and (r!=6 or x[5]+x[7]==0)]
 b=base[:r];assert all(x in roots for x in b)
 coords=[solve(b,x) for x in roots];assert all(all(c.denominator==1 for c in cs) and (all(c>=0 for c in cs) or all(c<=0 for c in cs)) for cs in coords)
 edges=[(i+1,j+1,dot(b[i],b[j])) for i,j in combinations(range(r),2) if dot(b[i],b[j])]
 results.append(dict(type='E'+str(r),rank=r,roots=len(roots),squared_lengths=[str(dot(x,x)) for x in b],nonzero_inner_products=[list(map(str,e)) for e in edges],all_roots_integral_one_sign=True))
b=[vec(4,(2,1),(3,-1)),vec(4,(3,1),(4,-1)),vec(4,(4,1)),[F(x,2) for x in [1,-1,-1,-1]]]
roots=[vec(4,(i,s)) for i in range(1,5) for s in [-1,1]]
for i,j in combinations(range(1,5),2):
 for s,t in product([-1,1],repeat=2):roots.append(vec(4,(i,s),(j,t)))
roots += [[F(x,2) for x in signs] for signs in product([-1,1],repeat=4)]
coords=[solve(b,x) for x in roots];assert all(all(c.denominator==1 for c in cs) and (all(c>=0 for c in cs) or all(c<=0 for c in cs)) for cs in coords)
results.append(dict(type='F4',rank=4,roots=len(roots),squared_lengths=[str(dot(x,x)) for x in b],nonzero_inner_products=[[i+1,j+1,str(dot(b[i],b[j]))] for i,j in combinations(range(4),2) if dot(b[i],b[j])],all_roots_integral_one_sign=True))
print(json.dumps(results,indent=2))
