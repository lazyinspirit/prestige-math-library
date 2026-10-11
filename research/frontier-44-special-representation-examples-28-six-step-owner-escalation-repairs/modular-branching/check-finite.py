from collections import Counter
from itertools import permutations
import json

def parts(d,cap=None):
 if not d: yield ();return
 for a in range(min(d,cap or d),0,-1):
  for tail in parts(d-a,a):yield (a,)+tail

def compose(p,q):return tuple(p[q[i]] for i in range(len(p)))
def mul(a,b):
 c=Counter()
 for p,x in a.items():
  for q,y in b.items():c[compose(p,q)]+=x*y
 return c

def typ(p):
 seen=set();out=[]
 for i in range(len(p)):
  if i in seen:continue
  j=i;s=0
  while j not in seen:seen.add(j);s+=1;j=p[j]
  if s>1:out.append(s-1)
 return tuple(sorted(out,reverse=True))

def coarsen(rho):
 ans={rho}
 for i in range(len(rho)):
  for j in range(i+1,len(rho)):
   z=tuple(sorted([rho[k] for k in range(len(rho)) if k not in (i,j)]+[rho[i]+rho[j]],reverse=True));ans |= coarsen(z)
 return ans
rows=[]
for n in range(0,7):
 identity=tuple(range(n));types=[r for d in range(n) for r in parts(d) if sum(r)+len(r)<=n] or [()]
 powers={}
 for r in range(n):
  L=Counter()
  for a in range(r):
   p=list(identity);p[a],p[r]=p[r],p[a];L[tuple(p)]+=1
  powers[r,0]=Counter({identity:1})
  for d in range(1,n):powers[r,d]=mul(powers[r,d-1],L)
 for rho in types:
  val=Counter()
  for assignment in set(permutations(rho+(0,)*(n-len(rho)))):
   term=Counter({identity:1})
   for r,d in enumerate(assignment):
    if d:term=mul(term,powers[r,d])
   val.update(term)
  coeff={}
  for p,x in val.items():
   t=typ(p);assert t not in coeff or coeff[t]==x,(n,rho,t,'not central');coeff[t]=x
   assert sum(t)<sum(rho) or t in coarsen(rho),(n,rho,t,'not triangular')
  assert coeff[rho]==1,(n,rho,'diagonal')
  rows.append({'n':n,'type':rho,'diagonal':coeff[rho]})
lambda_=[6,4,4,3,2,0];R=[1,3,4,5];tables=[]
for ell in [3,4]:
 for i in R:
  a=(i-lambda_[i-1])%ell
  B=[k for k in R if i<=k<6 and (k-lambda_[k])%ell==a]
  C=[k for k in R if i<k<6 and (k-lambda_[k-1])%ell==a]
  tables.append({'ell':ell,'row':i,'B':B,'C':C})
print(json.dumps({'integral_center_finite_checks':rows,'large_partition_tables':tables},indent=2))
