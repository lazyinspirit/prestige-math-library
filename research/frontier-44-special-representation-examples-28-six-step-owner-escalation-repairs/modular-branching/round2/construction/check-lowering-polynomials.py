from functools import lru_cache
from itertools import combinations, permutations
from collections import defaultdict
import json
N=10
zero=(0,)*N
one={zero:1}
def add(a,b):
 d=defaultdict(int,a)
 for e,c in b.items():d[e]+=c
 return {e:c for e,c in d.items() if c}
def neg(a):return {e:-c for e,c in a.items()}
def mul(a,b):
 d=defaultdict(int)
 for e,c in a.items():
  for f,v in b.items():d[tuple(x+y for x,y in zip(e,f))]+=c*v
 return {e:c for e,c in d.items() if c}
def var(i):
 e=list(zero);e[i]=1;return {tuple(e):1}
x=[var(i) for i in range(5)];y={i:var(i+4) for i in range(1,6)}
def dd(p,i,h):
 # [P(x_i)-P(x_h)]/(x_h-x_i), with no h-variable in P.
 out=defaultdict(int)
 for e,c in p.items():
  assert e[h]==0
  m=e[i]
  for a in range(m):
   f=list(e);f[i]=a;f[h]=m-1-a;out[tuple(f)]-=c
 return {e:c for e,c in out.items() if c}
def subsets(xs):
 for k in range(len(xs)+1):yield from combinations(xs,k)
@lru_cache(None)
def H(i,j,A,B):
 A=set(A);B=set(B);C=A&B;A-=C;B-=C
 if not A and not B:return one
 h=min(A|B)
 if h in A:return mul(add(x[h],neg(x[i])),H(i,j,tuple(sorted(A-{h})),tuple(sorted(B))))
 return dd(H(i,j,tuple(sorted(A)),tuple(sorted(B-{h}))),i,h)
def K(i,j,A):
 out={}
 for B in subsets(tuple(range(i+1,j))):
  p=one
  for t in (i,)+B:p=mul(p,add(y[t+1],neg(x[t])))
  out=add(out,mul(H(i,j,A,B),p))
 return out

def subst(p,mapping):
 out=defaultdict(int)
 for e,c in p.items():
  f=list(e)
  for old,new in mapping.items():
   f[new]+=f[old];f[old]=0
  out[tuple(f)]+=c
 return {e:c for e,c in out.items() if c}
rows=[]
for j in range(1,6):
 I=tuple(range(1,j));n=0
 for C in subsets(I):
  A=tuple(t for t in I if t not in C);ka=K(0,j,A)
  for targets in permutations(I,len(C)):
   if any(b<c for c,b in zip(C,targets)):continue
   B=set(targets);mapping={b+5:c for c,b in zip(C,targets)}
   p=one
   for t in range(j):
    if t not in B:p=mul(p,add(y[t+1],neg(x[0])))
   assert subst(ka,mapping)==subst(p,mapping),(j,C,targets)
   n+=1
 rows.append({'interval_length':j,'all_compensation_maps_checked':n,'matched_identity':True})
print(json.dumps({'coefficient_ring':'Z','symbolic_matching_checks':rows},indent=2))
