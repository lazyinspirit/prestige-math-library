from itertools import product
from collections import defaultdict
import json

def parts(n,cap=None):
 if n==0: return [()]
 cap=n if cap is None else cap
 return [(k,)+p for k in range(min(n,cap),0,-1) for p in parts(n-k,k)]
N=6
ps=[p for n in range(5) for p in parts(n)]
def beta(p):return tuple((p[i] if i<len(p) else 0)+N-i-1 for i in range(N))
def det(a):
 a=[list(map(int,row)) for row in a];sign=1;den=1
 for k in range(len(a)-1):
  nz=next((r for r in range(k,len(a)) if a[r][k]),None)
  if nz is None:return 0
  if nz!=k:a[nz],a[k]=a[k],a[nz];sign=-sign
  pivot=a[k][k]
  for i in range(k+1,len(a)):
   for j in range(k+1,len(a)):a[i][j]=(a[i][j]*pivot-a[i][k]*a[k][j])//den
  den=pivot
 return sign*a[-1][-1]
def hd(q,p):
 if min(q)<0 or min(p)<0 or len(set(q))<N or len(set(p))<N:return 0
 return det([[x>=y for y in p] for x in q])
def move(q,i,v):
 q=list(q);q[i]=v;return tuple(q)
def mm(q,i,j,v,w):return move(move(q,i,v),j,w)
def same(q,p):
 out=defaultdict(int)
 for i in range(N):
  for j in range(i+1,N):
   for h in range(1,q[i]-q[j]):out[q[i]-q[j]-h]+=hd(mm(q,i,j,q[i]-h,q[j]+h),p)
   for h in range(1,p[j]+1):
    d=hd(q,mm(p,i,j,p[i]+h,p[j]-h));out[p[i]-p[j]+h]-=d;out[h]+=d
 return {k:v for k,v in out.items() if v}
def same_norm(q,p):
 out=defaultdict(int)
 def S(r,s):
  for k in range(1,r+1):out[k]+=s
 for i in range(N):
  S(q[i],1);S(p[i],-1);S(q[i]-p[i],-1)
  for j in range(i+1,N):
   for u in range(p[i],q[i]):out[u-q[j]]+=1;out[u-p[j]+1]-=1
 return {k:v for k,v in out.items() if v}
def cross(q,p,r,s):
 out=defaultdict(int)
 for i,j in product(range(N),repeat=2):
  for h in range(1,q[i]+1):
   d=hd(move(q,i,q[i]-h),p)*hd(move(r,j,r[j]+h),s)
   out[q[i]-h-r[j]]+=d
  for h in range(1,s[j]+1):
   d=hd(q,move(p,i,p[i]+h))*hd(r,move(s,j,s[j]-h))
   out[p[i]-s[j]+h]-=d
 return {k:v for k,v in out.items() if v}
def cross_norm(q,p,r,s):
 out=defaultdict(int)
 for i in range(N):
  for u in range(p[i],q[i]):
   out[u+1]+=1
   for j in range(N):out[u-r[j]]+=1;out[u-s[j]+1]-=1
 return {k:v for k,v in out.items() if v}
checks={'same_on':0,'same_off':0,'cross_on':0,'cross_off':0};fail=[]
for lam,rho in product(ps,repeat=2):
 if sum(lam)<sum(rho):continue
 q,p=beta(lam),beta(rho);on=hd(q,p)
 actual=same(q,p);expect=same_norm(q,p) if on else {}
 checks['same_on' if on else 'same_off']+=1
 if actual!=expect:fail.append({'kind':'same','lambda':lam,'rho':rho,'actual':actual,'expected':expect})
for la,lb,ra,rb in product(ps,repeat=4):
 if sum(la)+sum(lb)>4 or sum(ra)+sum(rb)>sum(la)+sum(lb):continue
 q,p,r,s=beta(la),beta(ra),beta(lb),beta(rb);on=hd(q,p)*hd(r,s)
 actual=cross(q,p,r,s);expect=cross_norm(q,p,r,s) if on else {}
 checks['cross_on' if on else 'cross_off']+=1
 if actual!=expect:fail.append({'kind':'cross','lambda':[la,lb],'rho':[ra,rb],'actual':actual,'expected':expect})
print(json.dumps({'checks':checks,'failure_count':len(fail),'first_failures':fail[:5]},indent=2))
