import runpy,json
from pathlib import Path
D=runpy.run_path(str(Path(__file__).with_name('check-balanced-weight-one.py')))
parts,J=D['parts'],D['J'];checked=bridges=0
for e in range(2,7):
 for n in range(1,13):
  for mu in parts(n):
   cols=[sum(x>=c for x in mu) for c in range(1,mu[0]+1)]
   hooks=[[row-c+cols[c-1]-i+1 for c in range(1,row+1)] for i,row in enumerate(mu,1)]
   binary=all(len({h%e==0 for h in r})==1 for r in hooks)
   if not J(mu,e):assert binary,(e,mu,hooks)
   checked+=1
   if not binary:continue
   hits=[(i,r) for i,r in enumerate(hooks) if r[-1]%e==0]
   if not hits:continue
   i,r=hits[0];j=mu[i];h=r[-1]
   if j==1:continue
   sig=list(mu)
   for k in range(i,i+h):sig[k]-=1
   assert min(sig)>0
   nu=tuple([sig[0]+h]+sig[1:]);eta=tuple(sig+[1]*h)
   assert J(nu,e).get(mu,0)!=0,(e,mu,nu,J(nu,e))
   assert J(nu,e).get(eta,0)!=0,(e,mu,eta,nu,J(nu,e))
   bridges+=1
out={'checked_partitions':checked,'checked_binary_Carter_bridges':bridges,'e_range':[2,6],'n_max':12,'limitations':'Bounded check of the local no-outgoing implication and both bridge coefficients using indicator valuations; does not replace the written proof'}
Path(__file__).with_suffix('.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
