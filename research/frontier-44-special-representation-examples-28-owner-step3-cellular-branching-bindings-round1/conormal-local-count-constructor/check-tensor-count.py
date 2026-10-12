from functools import lru_cache
from itertools import combinations
import json

def partitions(n,m=None):
 if n==0:yield ();return
 for a in range(min(n,n if m is None else m),0,-1):
  for b in partitions(n-a,a):yield(a,)+b

def matched(C):
 C=sorted(C,key=len)
 def f(k,used):
  if k==len(C):return True
  return any(f(k+1,used|{x}) for x in C[k] if x not in used)
 return f(0,set())

@lru_cache(None)
def E(a,p):
 n=len(a)
 def B(j,k):return(k-j+sum(a[j-1:k]))%p
 total=0
 for bits in range(1<<(n-1)):
  J={j for j in range(2,n+1) if bits&(1<<(j-2))}
  ok=True
  for t,u in combinations([x for x in range(1,n+2) if x not in J],2):
   sources=[t]+[j for j in J if t<j<u]
   if matched([[d for d in range(j,u) if B(j,d)==0] for j in sources]):ok=False;break
  total+=ok
 return total

def conormal(mu,p):
 nodes=[]
 for r,c in enumerate(mu,1):
  if r==len(mu) or c>mu[r]:nodes.append((r,c,'-'))
  if r==1 or mu[r-2]>c:nodes.append((r,c+1,'+'))
 nodes.append((len(mu)+1,1,'+'))
 ans={}
 for residue in range(p):
  st=[]
  for node in sorted([x for x in nodes if(x[1]-x[0])%p==residue]):
   if node[2]=='+' and st and st[-1][2]=='-':st.pop()
   else:st.append(node)
  adds=[x for x in st if x[2]=='+']
  for x in nodes:
   if x[2]=='+' and(x[1]-x[0])%p==residue:ans[x[0]]=sum(y[0]<=x[0] for y in adds) if x in adds else 0
 return ans

cases=0
for p in [2,3,5]:
 for n in range(0,9):
  for mu in partitions(n):
   if any(mu[r]-(mu[r+1] if r+1<len(mu) else 0)>=p for r in range(len(mu))):continue
   N=len(mu)+1;a=tuple(mu[r]-(mu[r+1] if r+1<len(mu) else 0) for r in range(len(mu)))
   b=[]
   for i in range(1,N+1):
    d=1+sum(E(a[j-1:i-1],p) for j in range(1,i))
    z=d
    for u in range(1,i):
     shifted=list(a[u-1:i-1]);shifted[0]+=1
     z-=b[u-1]*E(tuple(shifted),p)
    b.append(z)
   expected=conormal(mu,p)
   for i,z in enumerate(b,1):
    assert z==expected.get(i,0),(p,mu,a,i,b,expected)
    cases+=1
print(json.dumps({'status':'pass','checked_row_counts':cases,'primes':[2,3,5],'partition_sizes':[0,8],'assertion':'literal-essential-count tensor-character reverse substitution equals direct reduced-signature piecewise conormal weak-above count','scope_limit':'finite smoke, not general proof'},indent=2))
