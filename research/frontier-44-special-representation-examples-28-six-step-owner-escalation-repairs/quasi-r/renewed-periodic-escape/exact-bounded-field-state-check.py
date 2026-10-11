import sys, functools
sys.path.insert(0,'/tmp/quasi-r-python-deps')
import sympy as s
q=s.Symbol('q')
@functools.lru_cache(None)
def ub(n,k):
 if k<0 or k>n:return s.Integer(0)
 if k==0 or k==n:return s.Integer(1)
 return s.expand(ub(n-1,k-1)+q**(2*k)*ub(n-1,k))
@functools.lru_cache(None)
def qb(n,k):return s.expand(q**(-k*(n-k))*ub(n,k))
@functools.lru_cache(None)
def a(r):return s.expand(q**(-r)*s.prod(q**(2*h)-1 for h in range(1,r+1)))
def cancel(x):return s.cancel(x)
def bar(x):return x.subs(q,1/q)
def pp(x):
 x=s.expand(cancel(x));ans=0
 for t in s.Add.make_args(x):
  c,e=t.as_coeff_exponent(q)
  if not e.is_Integer:raise ValueError(('NONLAURENT',x))
  if e>0:ans+=t
 return ans
class Chain:
 def __init__(self,J):
  self.J=J;self.n=[j*(j+3) for j in range(J+1)]
  self.p=[]
  for j in range(J):
   z=s.cyclotomic_poly(2*(j+3),q);self.p.append(z/q**(s.degree(z)//2))
 def cv(self,j,k,sgn=1):
  z=[(j,k,s.Integer(1))]
  if j<self.J and k%(j+3)==0:
   t=k//(j+3);z.append((j+1,k+j+2,sgn*(-1)**(t*(j+2))/self.p[j]))
  return z
 @functools.lru_cache(None)
 def bc(self,tup):
  j,k,l,h=tup;out={}
  for jj,kk,c in self.cv(j,k):
   for ll,hh,d in self.cv(l,h):
    for r in range(min(kk,self.n[ll]-hh)+1):
     z=c*d*a(r)*qb(self.n[jj]-kk+r,r)*qb(hh+r,r)
     for v,w,e in self.cv(jj,kk-r,-1):
      for x,y,f in self.cv(ll,hh+r,-1):
       key=(v,w,x,y);out[key]=out.get(key,0)+z*e*f
  return {t:cancel(v) for t,v in out.items() if cancel(v)!=0}
 def weight(self,t):return self.n[t[0]]-2*t[1]
 def solve(self):
  seed=(0,0,0,0);g={seed:s.Integer(1)};res=self.bc(seed).copy();res[seed]-=1
  while True:
   nz=[t for t,x in res.items() if x!=0]
   if not nz:return g
   wt=min(self.weight(t) for t in nz);ts=[t for t in nz if self.weight(t)==wt]
   print('weight',wt,'vertices',len(ts),flush=True)
   for t in ts:
    f=pp(res[t]);g[t]=g.get(t,0)+f;res[t]-=f
    for u,z in self.bc(t).items():res[u]=cancel(res.get(u,0)+bar(f)*z)
   for t in ts:
    if res[t]!=0:raise ValueError(('residue',t,res[t]))
class Periodic(Chain):
 def __init__(self,J):
  self.J=J;self.n=[8*(j//2)+(2 if j%2==0 else 4) for j in range(J+1)]
  self.p=[q+1/q if j%2==0 else q*q+1/(q*q) for j in range(J)]
 def cv(self,j,k,sgn=1):
  z=[(j,k,s.Integer(1))];ell=2 if j%2==0 else 4;rr=ell-1
  if j<self.J and k%ell==0:z.append((j+1,k+rr,sgn*(-1)**(k//ell)/self.p[j]))
  return z
 def solve(self):
  seed=(0,0,0,2);g={seed:s.Integer(1)};res=self.bc(seed).copy();res[seed]-=1
  while True:
   nz=[t for t,x in res.items() if x!=0]
   if not nz:return g
   wt=min(self.weight(t) for t in nz);ts=[t for t in nz if self.weight(t)==wt]
   print('weight',wt,'vertices',len(ts),flush=True)
   for t in ts:
    f=pp(res[t]);g[t]=g.get(t,0)+f;res[t]-=f
    for u,z in self.bc(t).items():res[u]=cancel(res.get(u,0)+bar(f)*z)
   for t in ts:
    if res[t]!=0:raise ValueError(('residue',t,res[t]))
for J in map(int,sys.argv[1:]):
 c=Periodic(J);g=c.solve();out={}
 for (j,apos,l,b),x in g.items():
  for jj,aa,y in c.cv(j,apos):
   for ll,bb,z in c.cv(l,b):
    key=(jj,aa,ll,bb);out[key]=cancel(out.get(key,0)+x*y*z)
 zz={}
 for j,l in sorted(set((j,l) for j,apos,l,b in out)):
  aa=range(3,-1,-1)
  for a0 in aa:
   h=(c.n[j]+c.n[l])//2-a0
   if h<0 or h>c.n[l]:continue
   x=out.get((j,a0,l,h),0)
   if not x:continue
   zz[j,a0,l,h]=x
   for t in range(a0+1):
    key=(j,a0-t,l,h+t)
    if h+t>c.n[l]:continue
    if c.n[j]>=c.n[l]:coef=q**(t*(c.n[j]-a0+t))*qb(h+t,t)
    else:coef=q**(t*(h+t))*qb(c.n[j]-a0+t,t)
    out[key]=cancel(out.get(key,0)-x*coef)
 print('J',J,'states',len(zz))
 for key,x in zz.items():
  if key[0]==J or key[2]==J: print(key,s.factor(x))
 print('remaining',sum(x!=0 for x in out.values()))
