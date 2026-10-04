from pathlib import Path
from itertools import product
import math,json
p=Path(__file__).parent
K,b=.4,.3
T=[[math.exp(K*s*t+b*(s+t)/2) for t in [1,-1]] for s in [1,-1]]
lp=math.exp(K)*math.cosh(b)+math.sqrt(math.exp(2*K)*math.sinh(b)**2+math.exp(-2*K))
r=[T[0][1],lp-T[0][0]];norm=math.sqrt(sum(x*x for x in r));r=[x/norm for x in r]
Q=[[T[i][j]*r[j]/(lp*r[i]) for j in range(2)] for i in range(2)];pi=[x*x for x in r]
assert max(abs(sum(row)-1) for row in Q)<1e-12
assert max(abs(sum(pi[i]*Q[i][j] for i in range(2))-pi[j]) for j in range(2))<1e-12
# Independent 3x3 plus-boundary spin enumeration at K=2.
verts=list(product(range(-1,2),repeat=2));idx={v:i for i,v in enumerate(verts)}
weights=[];mags=[]
for spins in product([-1,1],repeat=len(verts)):
 val=0
 for v in verts:
  for dx,dy in [(1,0),(0,1),(-1,0),(0,-1)]:
   w=(v[0]+dx,v[1]+dy)
   if w in idx:
    if idx[v]<idx[w]:val+=spins[idx[v]]*spins[idx[w]]
   else:val+=spins[idx[v]]
 weights.append(math.exp(2*val));mags.append(spins[idx[(0,0)]])
mag=sum(w*s for w,s in zip(weights,mags))/sum(weights)
rho=3*math.exp(-4);delta=(4/3)*rho**4*(5-4*rho)/(1-rho)**2
assert delta<.5 and mag>=1-2*delta
# Endpoint marginal of 3-site open chain from direct enumeration.
w=[(s,math.exp(K*(s[0]*s[1]+s[1]*s[2]))) for s in product([-1,1],repeat=3)]
corr=sum(s[0]*s[2]*z for s,z in w)/sum(z for s,z in w)
assert abs(corr-math.tanh(K)**2)<1e-12
report={'markov_rows_and_stationarity':'pass','independent_3x3_peierls_sufficient_bound':'pass','betaJ':2,'peierls_delta':delta,'direct_box_magnetization':mag,'endpoint_marginal_formula':'pass','qualification':'Numerical spot checks of independent finite enumerations, not mathematical proof or independent audit.'}
(p/'algebra-check-results.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report))
