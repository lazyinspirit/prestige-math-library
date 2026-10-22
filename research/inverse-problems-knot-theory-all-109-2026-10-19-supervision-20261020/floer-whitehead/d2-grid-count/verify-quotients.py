"""Separate exact verification of NEW high-A quotient matrices and their H0 ranks."""
from pathlib import Path
import sys,json,resource,math,gc
from collections import defaultdict,Counter
resource.setrlimit(resource.RLIMIT_AS,(6<<30,6<<30))
B=Path(__file__).parent

def verify(inp,cert):
 g=json.loads(inp.read_text());O=g['O_columns_by_row'];X=g['X_columns_by_row'];n=len(O)
 assert sorted(O)==sorted(X)==list(range(n)) and all(a!=b for a,b in zip(O,X))
 invO={c:r for r,c in enumerate(O)};seen=set();r=0
 while r not in seen:seen.add(r);r=invO[X[r]]
 assert r==0 and len(seen)==n
 z=json.loads(cert.read_text());states=z['states'];cols=z['columns'];N=len(states)
 oo=sum(O[i]<O[j] for i in range(n) for j in range(i+1,n));xx=sum(X[i]<X[j] for i in range(n) for j in range(i+1,n))
 wm=[[-sum(c<=O[k] for k in range(r,n))-sum(O[k]<c for k in range(r)) for c in range(n)] for r in range(n)]
 wa=[[sum((c<=X[k])-(c<=O[k]) for k in range(r,n))+sum((X[k]<c)-(O[k]<c) for k in range(r)) for c in range(n)] for r in range(n)]
 # Complete joint polynomial permanent, with no max/min pruning or state list.
 P=[None]*(1<<n);P[0]={(oo+1,oo-xx-n+1):1}
 for mask in range((1<<n)-1):
  row=mask.bit_count()
  for c in range(n):
   bit=1<<c
   if mask&bit:continue
   target=mask|bit
   if P[target] is None:P[target]=defaultdict(int)
   dp=P[target];dm=(mask&(bit-1)).bit_count()+wm[row][c];da=wa[row][c]
   for (m,a),ct in P[mask].items():dp[m+dm,a+da]+=ct
 full=P[-1];assert sum(full.values())==math.factorial(n)
 expected={(m,a//2):ct for (m,a),ct in full.items() if m in [-1,0,1] and a>0}
 assert all(a%2==0 for (m,a) in full)
 assert sum(expected.values())==N==z['state_count']
 del P,full;gc.collect()
 ps=[];M=[];A=[];inventory=Counter();last=None
 def grades(p):
  ip=sum(p[i]<p[j] for i in range(n) for j in range(i+1,n))
  def mu(V,iv):return ip-sum(p[r]<=V[k] for r in range(n) for k in range(r,n))-sum(V[k]<p[r] for r in range(n) for k in range(r))+iv+1
  mo=mu(O,oo);mx=mu(X,xx);assert (mo-mx-n+1)%2==0
  return mo,(mo-mx-n+1)//2
 for code,m,a in states:
  p=tuple((code>>(4*r))&15 for r in range(n));assert sorted(p)==list(range(n))
  assert last is None or last<p
  last=p;assert grades(p)==(m,a);assert m in [-1,0,1] and a>0
  ps.append(p);M.append(m);A.append(a);inventory[m,a]+=1
 assert inventory==Counter(expected)
 idx={p:i for i,p in enumerate(ps)}
 def inside2(v,start,end):return 0<(v-2*start)%(2*n)<(2*end-2*start)%(2*n)
 orbits=positive=edges=0
 for i,p in enumerate(ps):
  out=set()
  if M[i]>=0:
   for r in range(n):
    for s in range(n):
     if r==s:continue
     a,b=p[r],p[s]
     if any(inside2(2*k+1,r,s) and inside2(2*O[k]+1,a,b) for k in range(n)):continue
     if any(inside2(2*k,r,s) and inside2(2*p[k],a,b) for k in range(n)):continue
     nx=sum(inside2(2*k+1,r,s) and inside2(2*X[k]+1,a,b) for k in range(n))
     if A[i]-nx<=0:continue
     q=list(p);q[r],q[s]=q[s],q[r];j=idx[tuple(q)]
     assert M[i]-M[j]==1 and A[i]-A[j]==nx
     orbits+=1;positive+=nx>0
     if j in out:out.remove(j)
     else:out.add(j)
  assert sorted(out)==cols[i]
  edges+=len(out)
 assert orbits==z['rectangle_orbits'] and positive==z['positive_X_orbits'] and edges==z['F2_edges']
 for i,c in enumerate(cols):
  sq=set()
  for j in c:sq.symmetric_difference_update(cols[j])
  assert not sq
 ranks={}
 for m in [0,1]:
  targets=[i for i in range(N) if M[i]==m-1];row={i:r for r,i in enumerate(targets)};basis={}
  for i in range(N):
   if M[i]!=m:continue
   v=sum(1<<row[j] for j in cols[i])
   while v:
    p=v.bit_length()-1
    if p in basis:v^=basis[p]
    else:basis[p]=v;break
  ranks[m]=len(basis)
 assert ranks[0]==z['d0_rank'] and ranks[1]==z['d1_rank']
 dim0=sum(m==0 for m in M);assert dim0-ranks[0]-ranks[1]==0
 result={'grid_file':inp.name,'quotient_file':cert.name,'all_joint_permutation_weights':True,'all_quotient_states_and_J_gradings':True,'all_literal_O_empty_positive_X_rectangle_columns':True,'actual_square_zero':True,'state_count':N,'rectangle_orbits':orbits,'positive_X_orbits':positive,'F2_edges':edges,'chain_dimensions':dict(Counter(M)),'d0_rank':ranks[0],'d1_rank':ranks[1],'H0_dimension':0}
 print(json.dumps(result),flush=True)
 return result
results=[]
for a,b in [('input.json','positive-quotient.json'),('mirror-input.json','mirror-quotient.json')]:results.append(verify(B/a,B/b));gc.collect()
(B/'quotient-verification.json').write_text(json.dumps({'scope':'new D2 filtered quotient computations only; no repaired-source review','address_space_cap_bytes':6<<30,'results':results},indent=2)+'\n')
