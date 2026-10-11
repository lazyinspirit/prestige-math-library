from pathlib import Path
exec(Path(__file__).with_name('finite-cut-generic-chain.py').read_text().split('for J in map')[0])
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
 print('J',J,flush=True);c=Periodic(J);g=c.solve();print('size',len(g),flush=True)
 for j in range(J+1):
  t=(j,0,j,c.n[j]);x=g.get(t,0);print('endpoint',j,s.factor(x),flush=True)
