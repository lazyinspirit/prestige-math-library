from pathlib import Path
import json,math,itertools,hashlib,datetime
b=Path(__file__).parent;inv=json.loads((b/'inventory.json').read_text());ext={r['key']:r for r in json.loads((b/'supplier-map.json').read_text())};items={r['id']:r for r in inv['items']};assert len(items)==len(inv['items'])
seen=set();active=set();order=[]
def visit(k):
 if k in ext:return
 assert k in items,k
 if k in seen:return
 assert k not in active,k
 active.add(k)
 for d in items[k]['deps']:
  assert d in ext or items[d]['side']!='B'
  if items[k]['domain']=='mathematics':assert (ext[d]['domain'] if d in ext else items[d]['domain'])=='mathematics'
  assert d in items[k]['dependency_roles']
  visit(d)
 active.remove(k);seen.add(k);order.append(k)
for k in items:visit(k)
counts={}
for r in items.values():
 assert r['scope'] and r['proof_module'];counts[r['page']]=counts.get(r['page'],0)+1;assert counts[r['page']]<=100
 module=r['proof_module'].split('#')[1];assert f'id="{module}"' in (b/'proofs.md').read_text()
for page in counts:
 rows=[r for r in items.values() if r['page']==page]
 assert len({r['domain'] for r in rows})==1 and len({r['side'] for r in rows})==1
checks=['Inventory IDs/dependency roles/resolved acyclic DAG, mathematical-only dependencies, homogeneous A/B pages, B leaves, exact module anchors and100/page cap pass']
for q in [.17,.5,.9]:
 M=max(100,math.ceil(math.log(1e-22)/math.log(q)));ps=[(1-q)*q**n for n in range(M)]
 norm=sum(ps);mean=sum(n*p for n,p in enumerate(ps));second=sum(n*n*p for n,p in enumerate(ps))
 assert abs(norm-1)<1e-12 and abs(mean-q/(1-q))<1e-10 and abs(second-mean*mean-q/(1-q)**2)<1e-9
checks.append('Boson geometric probabilities/moments and fluctuation formula checked with rigorously small geometric tails')
for qs in [[.2,.3],[.1,.4,.7]]:
 states=list(itertools.product([0,1],repeat=len(qs)));ws=[math.prod(q**n for q,n in zip(qs,x)) for x in states];Z=sum(ws)
 assert abs(Z-math.prod(1+q for q in qs))<1e-13
 for j,q in enumerate(qs):assert abs(sum(w*x[j] for w,x in zip(ws,states))/Z-q/(1+q))<1e-13
checks.append('Exact finite CAR occupation trace/means verified by exhaustive configurations')
for x in [.05,.5,1.,2.]:
 C=[[1,0,0,0],[0,-1,2,0],[0,2,-1,0],[0,0,0,1]]
 sing=[0,1/math.sqrt(2),-1/math.sqrt(2),0];trip=[0,1/math.sqrt(2),1/math.sqrt(2),0]
 for v,e in [(sing,-3),(trip,1),([1,0,0,0],1),([0,0,0,1],1)]:assert all(abs(sum(C[i][j]*v[j] for j in range(4))-e*v[i])<1e-13 for i in range(4))
 corr=3*(1-math.exp(4*x))/(math.exp(4*x)+3)
 assert (corr < -1)==(x>math.log(3)/4)
checks.append('Explicit Heisenberg-dimer spectrum and separable-witness threshold checked at four dimensionless betaJ values')
for U in [0.,.3,2.]:
 for h in [-.7,0.,.5]:
  a=.4;ws=[1.,math.exp(-(a-h)),math.exp(-(a+h)),math.exp(-(2*a+U))];Z=sum(ws)
  up=(ws[1]+ws[3])/Z;down=(ws[2]+ws[3])/Z;cov=ws[3]/Z-up*down;expected=math.exp(-2*a)*(math.exp(-U)-1)/Z**2
  assert abs(cov-expected)<1e-13 and cov<1e-13
checks.append('Finite interacting Hubbard-atom negative covariance identity checked across stated parameter values')
# These are dimensionless mathematical diagnostics, not measured densities.
N=20000;partial=sum(n**-1.5 for n in range(1,N+1));zeta_interval=[partial+2/math.sqrt(N+1),partial+2/math.sqrt(N)];rho_interval=[z/(4*math.pi)**1.5 for z in zeta_interval];est=[]
for h in [1.,.5,.25]:
 M=math.ceil(5/h);total=0.
 for k in itertools.product(range(-M,M+1),repeat=3):
  r2=h*h*sum(x*x for x in k)
  if r2:total+=1/math.expm1(r2)
 est.append(h**3*total/(2*math.pi)**3)
assert all(0<x<rho_interval[1] for x in est) and est[0]<est[1]<est[2]
checks.append('3D missing-origin Bose lattice estimates approach the independently bounded critical integral; numerical check supplements written singular-limit proof')
receipt={'recorded_utc':datetime.datetime.now(datetime.timezone.utc).isoformat(),'kind':'local-research-structural-and-model-diagnostic','items':len(items),'topological_order':order,'page_counts':counts,'checks':checks,'dimensionless_bose_estimates':est,'critical_density_interval':rho_interval,'not_claimed':['experimental observations','proof by finite numerical samples','independent acceptance','production gate'],'artifact_hashes':{p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in b.iterdir() if p.is_file() and p.name!='check-receipt.json'}}
(b/'check-receipt.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps({'items':len(items),'checks':checks,'bose_estimates':est,'critical_interval':rho_interval},indent=2))
