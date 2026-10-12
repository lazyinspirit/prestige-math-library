#!/usr/bin/env python3
"""Compare literal matching definitions with both derived count recurrences."""
from itertools import product,combinations
from functools import lru_cache
import json

def subsets(a):
 for k in range(len(a)+1):
  yield from combinations(a,k)

def matched(choices):
 choices=sorted(choices,key=len)
 def go(j,used):
  if j==len(choices):return True
  return any(go(j+1,used|{v}) for v in choices[j] if v not in used)
 return go(0,set())

@lru_cache(None)
def data(lam,p,r,s):
 def B(a,b):return (b-a+sum(lam[a-1:b]))%p
 def C(a,b):return (b-a+sum(lam[a-1:b-1]))%p
 def normal(a,b):
  if a>b:return True
  if lam[a-1]%p==0:return False
  M=[m for m in range(a+1,b+1) if B(a,m)==0]
  return matched([[z for z in range(a+1,m+1) if B(z,m)==0] for m in M])
 def essential(J):
  J=set(J)
  for t,u in combinations([x for x in range(r,s+2) if x not in J],2):
   D=[t]+[j for j in J if t<j<u]
   if matched([[d for d in range(x,u) if B(x,d)==0] for x in D]):return False
  return True
 E=sum(essential(J) for J in subsets(tuple(range(r+1,s+1))))
 N=tuple(a for a in range(r,s+1) if C(r,a)==0 and normal(a,s)) if normal(r,s) else ()
 S=sum(all(normal(a,b) for a,b in zip((r,)+J,tuple(x-2 for x in J)+(s,))) for J in subsets(tuple(range(r+1,s+1))))
 assert E==S,(lam,p,r,s,'sigma-bijection-cardinality',E,S)
 return E,len(N),N

def prime(lam,p,r,s):
 a=list(lam);a[s-1]+=1
 return data(tuple(a),p,r,s)

cases=bridges=consecutive=0
for p in [2,3,5]:
 for n in range(1,5):
  for lam in product(range(p),repeat=n):
   for r in range(1,n+1):
    for s in range(r,n+1):
     E,V,N=data(lam,p,r,s)
     first=V+sum(prime(lam,p,r,u-1)[1]*data(lam,p,u,s)[0] for u in range(r+1,s+1))
     wanted=V+sum(prime(lam,p,r,u-1)[0]*data(lam,p,u,s)[1] for u in range(r+1,s+1))
     assert E==first==wanted,(lam,p,r,s,E,first,wanted)
     cases+=1
     for a,b in zip(N,N[1:]):
      pre=1 if b==a+1 else data(lam,p,a,b-2)[1]
      assert pre>0 and prime(lam,p,a,b-1)[1]==0,(lam,p,'consecutive',N,a,b)
      consecutive+=1
     for y in range(r+1,s+1):
      pre=1 if y==r+1 else data(lam,p,r,y-2)[1]
      if pre and prime(lam,p,r,y-1)[1]==0 and data(lam,p,y,s)[1]>0:
       assert N==(r,)+data(lam,p,y,s)[2],(lam,p,'bridge',r,y,s,N)
       bridges+=1
print(json.dumps({'status':'pass','literal_matching_weight_interval_cases':cases,'prime_zero_bridges_checked':bridges,'consecutive_normals_checked':consecutive,'scope':{'primes':[2,3,5],'ranks':[1,4],'fundamental_coordinates':'all residue representatives modulo p; endpoint shifts may equal p'},'claims_checked':['essential-count equals sigma-path-count','epsilon=nu+sum(nu-prime*epsilon-tail)','epsilon=nu+sum(epsilon-prime*nu-tail)','prime-zero bridge','consecutive-normal bridge'],'scope_limit':'finite check, not the general proof'},indent=2))
