"""Exact rational checks of finite SR algebra; not independent proof review."""
from fractions import Fraction as F
from itertools import permutations
import json
from pathlib import Path

def transpose(a): return [list(x) for x in zip(*a)]
def mul(a,b): return [[sum(x*y for x,y in zip(row,col)) for col in zip(*b)] for row in a]
def scale(a,k): return [[k*x for x in row] for row in a]
def sign(p): return (-1)**sum(p[i]>p[j] for i in range(len(p)) for j in range(i+1,len(p)))
eta=[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
beta=F(3,5); gamma=F(5,4)
boost=[[gamma,-gamma*beta,0,0],[-gamma*beta,gamma,0,0],[0,0,1,0],[0,0,0,1]]
assert mul(mul(transpose(boost),eta),boost)==eta
inverse=[[gamma,gamma*beta,0,0],[gamma*beta,gamma,0,0],[0,0,1,0],[0,0,0,1]]
assert mul(boost,inverse)==[[int(i==j) for j in range(4)] for i in range(4)]

epsilon={p:sign(p) for p in permutations(range(4))}
signature=[-1,1,1,1]
def star(f):
 return [[sum(F(1,2)*epsilon.get((a,b,c,d),0)*signature[c]*signature[d]*f[c][d] for c in range(4) for d in range(4)) for b in range(4)] for a in range(4)]
def wedge(a,b): return [[a[i]*b[j]-a[j]*b[i] for j in range(4)] for i in range(4)]
for a in range(4):
 for b in range(a+1,4):
  f=[[F(0) for j in range(4)] for i in range(4)]
  f[a][b]=1;f[b][a]=-1
  assert star(star(f))==scale(f,-1)
  e=[f[i][0] for i in range(4)]
  sf=star(f);mag=[sf[i][0] for i in range(4)]
  we=wedge([-1,0,0,0],e);wb=star(wedge([-1,0,0,0],mag))
  assert [[we[i][j]-wb[i][j] for j in range(4)] for i in range(4)]==f

# c=1 here purely for this algebra check; source restores SI c.
electric=[F(2),F(3),F(5)];magnetic=[F(7),F(11),F(13)]
upper=[[F(0) for j in range(4)] for i in range(4)]
for i in range(3): upper[i+1][0]=electric[i];upper[0][i+1]=-electric[i]
for i in range(3):
 for j in range(3): upper[i+1][j+1]=-sum(epsilon.get((0,i+1,j+1,k+1),0)*magnetic[k] for k in range(3))
transformed=mul(mul(boost,upper),transpose(boost))
observed_e=[transformed[i+1][0] for i in range(3)]
observed_b=[-transformed[2][3],-transformed[3][1],-transformed[1][2]]
assert observed_e==[electric[0],gamma*(electric[1]-beta*magnetic[2]),gamma*(electric[2]+beta*magnetic[1])]
assert observed_b==[magnetic[0],gamma*(magnetic[1]+beta*electric[2]),gamma*(magnetic[2]-beta*electric[1])]
def square(v):return sum(x*x for x in v)
assert square(observed_b)-square(observed_e)==square(magnetic)-square(electric)
assert sum(x*y for x,y in zip(observed_e,observed_b))==sum(x*y for x,y in zip(electric,magnetic))

result={'date':'2026-10-03','command':'python3 physics/research/first-principles-2026-10-03/relativity/check-supplier-algebra.py','exit_code':0,'checks':['exact rational boost metric/inverse','Hodge square on all six basis two-forms','observer reconstruction on all six basis two-forms','SI-c-restored field transformation signs (algebra evaluated c=1)','both field invariants'],'qualification':'local finite algebra checks only; no independent audit, PDE check or physical evidence'}
Path(__file__).with_name('supplier-algebra-check.json').write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps(result))
