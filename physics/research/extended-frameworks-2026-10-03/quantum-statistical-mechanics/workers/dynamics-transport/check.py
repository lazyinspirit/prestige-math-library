#!/usr/bin/env python3
"""Bounded author diagnostics: inventory contracts and small exact algebra fixtures."""
import json,re,hashlib
from pathlib import Path
from fractions import Fraction as F
p=Path(__file__).resolve().parent;r=next(a for a in p.parents if (a/'CLAUDE.md').is_file() and (a/'PHYSICS-CONTENT-MODEL.md').is_file())
a=json.loads((p/'inventory.json').read_text())['items'];s=json.loads((p/'supplier-map.json').read_text())['suppliers'];ids={x['id']:x for x in a};ex={x['id']:x for x in s};assert len(ids)==len(a);assert len(ex)==len(s)
seen=set();counts={}
for x in a:
 assert set(x['dependency_roles'])==set(x['deps'])
 file,anchor=x['proof_module'].split('#');text=(p/file).read_text();assert f'id="{anchor}"' in text
 assert not any(ord(c)<32 and c not in '\n\t\r' for c in text)
 counts[x['page']]=counts.get(x['page'],0)+1
 for d in x['deps']:
  assert d in ids or d in ex,(x['id'],d)
  if d in ids:assert d in seen,(x['id'],d,'ordering');assert ids[d]['side']=='A'
  if x['domain']=='mathematics':assert (ids.get(d) or ex[d])['domain']=='mathematics';assert x['dependency_roles'][d]=='mathematical-premise'
 seen.add(x['id'])
assert max(counts.values())<=100
for x in s:
 assert hashlib.sha256((r/x['path']).read_bytes()).hexdigest()==x['sha256'],x['id']
 assert set(x['actual_use'])=={i['id'] for i in a if x['id'] in i['deps']},x['id']
def mul(a,b):return [[sum(a[i][k]*b[k][j] for k in range(len(b))) for j in range(len(b[0]))] for i in range(len(a))]
def tr(a):return sum(a[i][i] for i in range(len(a)))
def adj(a):return [[a[j][i].conjugate() if hasattr(a[j][i],'conjugate') else a[j][i] for j in range(len(a))] for i in range(len(a[0]))]
def add(a,b):return [[x+y for x,y in zip(ar,br)] for ar,br in zip(a,b)]
def sc(c,a):return [[c*x for x in ar] for ar in a]
I=[[F(1),F(0)],[F(0),F(1)]];K0=[[F(3,5),F(0)],[F(0),F(1)]];K1=[[F(0),F(0)],[F(4,5),F(0)]]
assert add(mul(adj(K0),K0),mul(adj(K1),K1))==I
rho=sc(F(1,2),I);out=add(mul(mul(K0,rho),adj(K0)),mul(mul(K1,rho),adj(K1)));assert out==[[F(9,50),0],[0,F(41,50)]];assert tr(out)==1
flip=[[0]*4 for _ in range(4)]
for i in range(2):
 for j in range(2):flip[2*j+i][2*i+j]=1
v=[[0],[1],[-1],[0]];assert mul(flip,v)==sc(-1,v)
# Pauli commutator at omega*t=pi/2: A(t)=-Y; i[A(t),X]=-2Z.
X=[[0,1],[1,0]];Y=[[0,-1j],[1j,0]];Z=[[1,0],[0,-1]];comm=add(mul(sc(-1,Y),X),sc(-1,mul(X,sc(-1,Y))));assert sc(1j,comm)==sc(-2,Z)
# Classical thermal rates upper->lower2, lower->upper1, pi=(1/3,2/3).
W=[[-F(2),F(2)],[F(1),-F(1)]];pi=[[F(1,3),F(2,3)]];assert mul(pi,W)==[[0,0]];assert pi[0][0]*W[0][1]==pi[0][1]*W[1][0]
v=[[F(4,3)],[-F(2,3)]];assert mul(W,v)==sc(-3,v);variance=sum(pi[0][i]*v[i][0]**2 for i in range(2));assert variance==F(8,9);assert variance/F(3)==F(8,27)
# Coherence damping gamma2=2 and omega=1 gives GammaX=2/5.
assert F(2)/(F(2)**2+F(1)**2)==F(2,5)
result={'status':'pass','command':'python3 '+str(p.relative_to(r)/'check.py'),'interfaces':len(a),'A':sum(x['side']=='A' for x in a),'B':sum(x['side']=='B' for x in a),'suggested_pairs':len(counts)//2,'max_page_items':max(counts.values()),'external_contracts':len(s),'diagnostics':['supplier-first DAG/external resolution','math/physics dependency boundary and roles','B leaves and page caps','module anchors/control characters','exact current supplier hashes and actual uses','rational amplitude-damping normalization/state','flip negative eigenspace','finite Pauli response sign','reversible rates and centered-chain coefficient','qubit correlation integral rational fixture'],'limitation':'Bounded author diagnostics, not independent proof acceptance, production renderer/gate, source authentication or empirical certification.'}
(p/'check-result.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result))
