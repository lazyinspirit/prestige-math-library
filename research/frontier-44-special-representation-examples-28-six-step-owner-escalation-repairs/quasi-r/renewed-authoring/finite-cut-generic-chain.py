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
for J in map(int,sys.argv[1:]):
 print('J',J,flush=True);c=Chain(J);g=c.solve();print('size',len(g),flush=True)
 for t,x in g.items():
  if x!=0 and (t[1]==0 and t[3]==c.n[t[2]] or t[0]==J or t[2]==J):print(t,s.factor(x),flush=True)
