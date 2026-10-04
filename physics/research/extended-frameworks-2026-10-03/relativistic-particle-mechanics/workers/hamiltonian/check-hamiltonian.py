#!/usr/bin/env python3
"""Scoped structural and exact finite algebra checks; no independent proof audit."""
from pathlib import Path
from fractions import Fraction as F
from itertools import combinations,permutations
import json,re
R=Path(__file__).resolve().parent
inv=json.loads((R/'inventory.json').read_text());sup=json.loads((R/'supplier-map.json').read_text())
items={i['id']:i for i in inv['items']};external={s['id']:s for s in sup['external_suppliers']};assert len(items)==len(inv['items'])
for p in R.glob('*.json'):json.loads(p.read_text())
for i in items.values():
 for key in ['id','title','domain','kind','deps','proof_module','proof_section','scope','page','side']:assert key in i
 assert (R/i['proof_module']).is_file()
 for section in i['proof_section'].split('/'):
  if section=='example':continue
  assert re.search(r'^## '+section+r'\b',(R/i['proof_module']).read_text(),re.M),(i['id'],section)
 for d in i['deps']:
  assert d in items or d in external,(i['id'],d)
  v=items.get(d,external.get(d))
  if i['domain']=='mathematics':assert v['domain']=='mathematics',(i['id'],d)
  if d in items:assert items[d]['side']=='A',(i['id'],d)
 if i['kind'] in ['postulate','physics-theorem','thought-experiment','experiment']:assert i['domain']=='physics'
 if i['kind'] in ['theorem','lemma','proposition','corollary']:assert i['domain']=='mathematics'
for p in inv['pages']:assert p['reserved_budget']<=100
order=[];done=set(external)
while len(order)<len(items):
 ready=[k for k,v in items.items() if k not in done and set(v['deps'])<=done]
 assert ready,'unresolved/cyclic local DAG'
 done.update(ready);order.extend(ready)
for p in R.glob('*.md'):
 assert not any(c<32 and c not in [9,10] for c in p.read_bytes()),p
 for n,line in enumerate(p.read_text().splitlines(),1):assert line.count('$')%2==0,(p,n,'split math delimiters')
# Exact polynomial canonical bracket on four cotangent coordinate pairs.
zero=(0,)*8
def var(i):
 a=list(zero);a[i]=1;return {tuple(a):F(1)}
def plus(a,b):
 r=dict(a)
 for k,v in b.items():r[k]=r.get(k,F(0))+v
 return {k:v for k,v in r.items() if v}
def scale(a,v):return {k:x*v for k,x in a.items() if x*v}
def mul(a,b):
 r={}
 for k,v in a.items():
  for l,w in b.items():
   n=tuple(x+y for x,y in zip(k,l));r[n]=r.get(n,F(0))+v*w
 return {k:v for k,v in r.items() if v}
def deriv(a,i):
 r={}
 for k,v in a.items():
  if k[i]:
   l=list(k);l[i]-=1;r[tuple(l)]=v*k[i]
 return r
def bracket(a,b):
 r={}
 for i in range(4):r=plus(r,plus(mul(deriv(a,i),deriv(b,i+4)),scale(mul(deriv(a,i+4),deriv(b,i)),-1)))
 return r
eta=[-1,1,1,1];x=[var(i) for i in range(4)];pc=[var(i+4) for i in range(4)];P=[scale(pc[i],eta[i]) for i in range(4)]
J={(a,b):plus(mul(x[a],P[b]),scale(mul(x[b],P[a]),-1)) for a in range(4) for b in range(4)}
def metric(a,b):return F(eta[a] if a==b else 0)
for a,b in combinations(range(4),2):
 for c in range(4):assert bracket(J[a,b],P[c])==plus(scale(P[b],metric(a,c)),scale(P[a],-metric(b,c)))
 for c,d in combinations(range(4),2):
  expected=plus(plus(scale(J[b,d],metric(a,c)),scale(J[b,c],-metric(a,d))),plus(scale(J[a,d],-metric(b,c)),scale(J[a,c],metric(b,d))))
  assert bracket(J[a,b],J[c,d])==expected
for a in range(4):
 W={}
 for b,c,d in permutations([i for i in range(4) if i!=a]):
  seq=[a,b,c,d];inversions=sum(seq[i]>seq[j] for i in range(4) for j in range(i+1,4));eps=-(-1)**inversions
  W=plus(W,scale(mul(pc[b],J[c,d]),F(eps*eta[c]*eta[d],2)))
 assert not W,'orbital Pauli-Lubanski must vanish'
# Numeric exact Dirac projection and boost identities, m=3,c=1,p=(4,0,0),E=5.
def pb(a,b):return sum(a[i]*b[i+4]-a[i+4]*b[i] for i in range(4))
def basis(i):return [F(int(j==i)) for j in range(8)]
dC=[F(0)]*4+[F(5),F(4),F(0),F(0)];dpsi=basis(0);ci=[[F(0),F(1,5)],[F(-1,5),F(0)]];ch=[dC,dpsi]
def db(a,b):return pb(a,b)-sum(pb(a,ch[i])*ci[i][j]*pb(ch[j],b) for i in range(2) for j in range(2))
for i in range(1,4):
 for j in range(1,4):
  assert db(basis(i),basis(j+4))==int(i==j)
  assert db(basis(i),basis(j))==0
for c in ch:
 for i in range(8):assert db(c,basis(i))==0
q=[F(2),F(-1),F(3)];p=[F(4),F(0),F(0)];E=F(5);t=F(2)
B=[]
for i in range(3):B.append([F(0)]+[-E*int(i==j) for j in range(3)]+[F(0)]+[t*int(i==j)-q[i]*p[j]/E for j in range(3)])
dE=[F(0)]*5+[v/E for v in p]
for i in range(3):
 assert pb(B[i],dE)==-p[i]
 for j in range(3):
  assert pb(B[i],basis(j+5))==-E*int(i==j)
  assert pb(B[i],B[j])==-(q[i]*p[j]-q[j]*p[i])
# Exact rank/velocity kernel of square-root fibre Hessian at V=(5,4,0,0),s=3.
V=[F(5),F(4),F(0),F(0)];vf=[V[i]*eta[i] for i in range(4)];A=[[F(eta[i] if i==j else 0)+vf[i]*vf[j]/9 for j in range(4)] for i in range(4)]
assert all(sum(A[i][j]*V[j] for j in range(4))==0 for i in range(4))
rank=0
for col in range(4):
 pivot=next((row for row in range(rank,4) if A[row][col]),None)
 if pivot is None:continue
 A[rank],A[pivot]=A[pivot],A[rank];z=A[rank][col];A[rank]=[v/z for v in A[rank]]
 for row in range(4):
  if row!=rank:
   z=A[row][col];A[row]=[a-z*b for a,b in zip(A[row],A[rank])]
 rank+=1
assert rank==3
result=dict(research_allocation_date='2026-10-03',date='2026-10-04',exit_code=0,items=len(items),A_items=sum(i['side']=='A' for i in items.values()),B_items=sum(i['side']=='B' for i in items.values()),pairs=4,max_reserved_page_budget=max(p['reserved_budget'] for p in inv['pages']),external_suppliers=len(external),checks=['required inventory fields/paths/sections','local DAG resolves/acyclic','all mathematics dependencies mathematical','B items remain leaves; budgets<=100','no control characters or line-split math delimiters','exact polynomial Poincare brackets and orbital W=0','exact finite Dirac canonical projection/constraint Casimirs','exact boost energy/bracket signs','exact square-root Hessian rank/kernel'],item_supplier_first_order=order,qualification='Local structural/finite algebra checks only; not independent mathematical acceptance, empirical evidence, publication or production gates')
(R/'check-result.json').write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n');print(json.dumps({k:result[k] for k in ['exit_code','items','A_items','B_items','pairs','max_reserved_page_budget','external_suppliers']}))
