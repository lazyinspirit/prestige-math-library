#!/usr/bin/env python3
"""Research graph and exact finite fixtures; not independent proof certification."""
from pathlib import Path
from fractions import Fraction as F
import json,re
R=Path(__file__).resolve().parent
inv=json.loads((R/'inventory.json').read_text());sup=json.loads((R/'supplier-map.json').read_text());ledger=json.loads((R/'closure-ledger.json').read_text())
items={i['id']:i for i in inv['items']};external={e['id']:e for e in sup['external_suppliers']};assert len(items)==len(inv['items'])
for p in R.glob('*.json'):json.loads(p.read_text())
for i in items.values():
 for key in ['id','title','domain','kind','deps','proof_module','scope','side']:assert key in i
 file,sec=i['proof_module'].split('#');p=R/file;assert p.is_file()
 assert f'<a id="{sec}"></a>' in p.read_text()
 for d in i['deps']:
  assert d in items or d in external,(i['id'],d)
  v=items.get(d,external.get(d))
  if i['domain']=='mathematics':assert v['domain']=='mathematics',(i['id'],d)
  if d in items:assert items[d]['side']=='A',(i['id'],d)
 if i['kind'] in ['postulate','physics-theorem','thought-experiment','experiment']:assert i['domain']=='physics'
 if i['kind'] in ['theorem','lemma','proposition','corollary']:assert i['domain']=='mathematics'
order=[];done=set(external)
while len(order)<len(items):
 ready=[k for k,v in items.items() if k not in done and set(v['deps'])<=done]
 assert ready,'cycle/unresolved dependency'
 done.update(ready);order.extend(ready)
assert ledger['complete_exact_asserted_interfaces'] and not ledger['required_unresolved_prerequisites']
assert {e['section'] for e in ledger['entries']}=={f'D{i}' for i in range(20)}
assert all(p['reserved_budget']<=100 for p in inv['pages'])
for p in R.glob('*.md'):
 assert not any(c<32 and c not in [9,10] for c in p.read_bytes()),p
 for line in p.read_text().splitlines():assert line.count('$')%2==0,(p,line)
# Exact elastic reflection pair conservation, involution and Jacobian orthogonality.
n=[F(3,5),F(4,5),F(0)];nn=[[a*b for b in n] for a in n];Id=[[F(int(i==j)) for j in range(3)] for i in range(3)]
A=[[Id[i][j]-nn[i][j] for j in range(3)] for i in range(3)];T=[[F(0)]*6 for _ in range(6)]
for i in range(3):
 for j in range(3):T[i][j]=T[i+3][j+3]=A[i][j];T[i][j+3]=T[i+3][j]=nn[i][j]
for i in range(6):
 for j in range(6):
  assert sum(T[i][k]*T[k][j] for k in range(6))==int(i==j)
  assert sum(T[k][i]*T[k][j] for k in range(6))==int(i==j)
z=[F(1),F(2),F(3),F(-2),F(0),F(4)];zp=[sum(T[i][j]*z[j] for j in range(6)) for i in range(6)]
assert all(z[i]+z[i+3]==zp[i]+zp[i+3] for i in range(3))
assert sum(v*v for v in z)==sum(v*v for v in zp)
# Exact reversible two-state Green-Kubo and perturbation signs.
pi=[F(3,5),F(2,5)];L=[[F(-2),F(2)],[F(3),F(-3)]];obs=[F(-2,5),F(3,5)]
LA=[sum(L[i][j]*obs[j] for j in range(2)) for i in range(2)]
assert all(LA[i]==-5*obs[i] for i in range(2))
assert sum(pi[i]*obs[i] for i in range(2))==0
var=sum(pi[i]*obs[i]**2 for i in range(2));assert var==F(6,25)
K=[[F(-1),F(1)],[F(-3,2),F(3,2)]];piK=[sum(pi[i]*K[i][j] for i in range(2)) for j in range(2)]
assert all(piK[j]==-pi[j]*LA[j] for j in range(2))
assert -sum(pi[i]*obs[i]*LA[i] for i in range(2))==F(6,5)
assert var/5==F(6,125)
# Exact without-replacement union bound and BBGKY combinatorial coefficients.
for N in range(2,15):
 for k in range(1,N+1):
  success=F(1)
  for j in range(k):success*=F(N-j,N)
  assert 1-success<=F(k*(k-1),2*N)
  pairs=[(i,j) for i in range(N) for j in range(i+1,N)]
  assert sum(i<k<=j for i,j in pairs)==k*(N-k)
  assert sum(i<k and j<k for i,j in pairs)==k*(k-1)//2
# OU thermal normalization, response and diffusion relation in one numeric SI-scaled fixture.
beta=F(1,5);mass=F(3);gamma=F(2);C0=1/(beta*mass);mobility=1/(mass*gamma)
assert beta*C0==1/mass and C0/gamma==mobility/beta
result=dict(date='2026-10-04',exit_code=0,items=len(items),A_items=sum(i['side']=='A' for i in items.values()),B_items=sum(i['side']=='B' for i in items.values()),pairs=4,max_reserved_budget=max(p['reserved_budget'] for p in inv['pages']),external_suppliers=len(external),sections=20,checks=['all owned JSON parses','inventory modules/anchors/class boundaries resolve','local DAG acyclic; B items leaves; all budgets<=100','all D0–D19 preserved; no required unresolved asserted prerequisite','no control characters/split math delimiters','exact collision reflection involution/orthogonality/momentum-energy conservation','exact reversible finite-rate response/Green-Kubo sign fixture','exact chaos sampling union bound and BBGKY pair coefficients','OU response/diffusion normalization fixture'],supplier_first_order=order,qualification='Bounded local structural and finite algebra diagnostics only; no independent theorem acceptance, primary measurements, production gates or general kinetic-limit certification')
(R/'check-result.json').write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n');print(json.dumps({k:result[k] for k in ['exit_code','items','A_items','B_items','pairs','max_reserved_budget','external_suppliers','sections']}))
