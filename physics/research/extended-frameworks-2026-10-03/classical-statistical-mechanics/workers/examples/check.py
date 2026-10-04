from pathlib import Path
import json,math,itertools,hashlib,datetime
b=Path(__file__).parent;inv=json.loads((b/'inventory.json').read_text());external={x['key']:x for x in json.loads((b/'supplier-map.json').read_text())};items={r['id']:r for r in inv['items']};assert len(items)==len(inv['items'])
seen=set();active=set();order=[]
def visit(k):
 if k in external:return
 assert k in items,k
 if k in seen:return
 assert k not in active,k
 active.add(k)
 for d in items[k]['deps']:
  if d not in external:assert items[d]['side']!='B'
  if items[k]['domain']=='mathematics':assert (external[d]['domain'] if d in external else items[d]['domain'])=='mathematics'
  visit(d)
 active.remove(k);seen.add(k);order.append(k)
for k in items:visit(k)
counts={}
for r in items.values():
 assert r['scope'] and r['proof_module'];counts[r['page']]=counts.get(r['page'],0)+1
 assert counts[r['page']]<=100
checks=['Unique IDs, resolved DAG, mathematical-only helper dependencies, B-leaf and <=100/page checks pass']
for N in range(2,9):
 for K in [0.,.17,1.,2.]:
  states=list(itertools.product([-1,1],repeat=N));ws=[math.exp(K*sum(x[i]*x[(i+1)%N] for i in range(N))) for x in states];Z=sum(ws);t=math.tanh(K)
  assert abs(Z-((2*math.cosh(K))**N+(2*math.sinh(K))**N))<1e-10*Z
  for r in range(1,N):
   actual=sum(w*x[0]*x[r] for w,x in zip(ws,states))/Z;pred=(t**r+t**(N-r))/(1+t**N)
   assert abs(actual-pred)<1e-12
checks.append('Exhaustive finite-ring Ising partition and all pair correlations N=2..8 at four dimensionless couplings pass')
for D in [2,3,4,7,12]:
 C=math.gamma(D/2)/(math.gamma((D-1)/2)*math.sqrt(math.pi));n=10000
 integral=sum(C*math.cos(-math.pi/2+(i+.5)*math.pi/n)**(D-2)*math.pi/n for i in range(n))
 assert abs(integral-1)<1e-7,(D,integral)
checks.append('Exact k=1 spherical marginal normalization checked by endpoint-regularized quadrature at five dimensions')
for x in [.05,.3,.7,.95]:
 for M in [1,3,8,20]:
  truncated=sum(x**j for j in range(M));remainder=x**M/(1-x)
  assert abs(truncated+remainder-1/(1-x))<1e-12
checks.append('Tonks geometric virial truncation/remainder diagnostics pass')
for n in range(2,25):
 for p in [.17,.5,.9]:
  for k in range(1,n):
   a=k/n;D=a*math.log(a/p)+(1-a)*math.log((1-a)/(1-p));prob=math.comb(n,k)*p**k*(1-p)**(n-k);bound=math.exp(-n*D)
   assert bound/(n+1)-1e-14<=prob<=bound+1e-14
checks.append('Binomial type-probability upper/lower bounds exhaustively checked n=2..24, three declared sampling parameters')
for N in range(1,13):
 for beta in [-2.,0.,.3,1.,2.]:
  logs=[0.,-beta*N,N*math.log(4)-2*beta*N];a=max(logs);ws=[math.exp(x-a) for x in logs];middle=ws[1]/sum(ws)
  assert middle<=1/(2*2**N+1)+1e-15
checks.append('Three-sector uniform canonical exclusion bound checked at twelve sizes and five beta values')
p=[.5,.5,0.,0.];coarse=[]
for _ in range(3):
 a=[p[0]+p[1],p[2]+p[3]];coarse.append(-sum(x*math.log(x) for x in a if x));p=[p[3],p[0],p[1],p[2]]
assert all(abs(x-y)<1e-14 for x,y in zip(coarse,[0.,math.log(2),0.]))
checks.append('Finite coarse-entropy reversal calculated exactly up to floating logarithm')
receipt={'recorded_utc':datetime.datetime.now(datetime.timezone.utc).isoformat(),'kind':'local-research-structure-and-model-diagnostic','items':len(items),'topological_order':order,'page_counts':counts,'checks':checks,'not_claimed':['independent proof acceptance','empirical observations','production readiness'],'artifact_hashes':{p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in b.iterdir() if p.is_file() and p.name!='check-receipt.json'}}
(b/'check-receipt.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps({'items':len(items),'checks':checks},indent=2))
