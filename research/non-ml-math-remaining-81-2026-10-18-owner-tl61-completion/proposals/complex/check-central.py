# Exact bounded arithmetic check; this does not prove the general identities.
from fractions import Fraction as F
from functools import lru_cache
from pathlib import Path
import json
@lru_cache(None)
def diagrams(n):
 if not n:return ((),)
 out=[]
 for j in range(1,n,2):
  for a in diagrams(j-1):
   for b in diagrams(n-j-1):out.append(tuple(sorted(((0,j),)+tuple((u+1,v+1) for u,v in a)+tuple((u+j+1,v+j+1) for u,v in b))))
 return tuple(out)
def identity(n):return tuple((j,2*n-1-j) for j in range(n))
def gen(n,i):return tuple(sorted(tuple(sorted(e)) for e in [(i,i+1),(2*n-2-i,2*n-1-i)]+[(j,2*n-1-j) for j in range(n) if j not in (i,i+1)]))
def glue(edges,ext,count):
 parent=list(range(count))
 def root(a):
  while parent[a]!=a:parent[a]=parent[parent[a]];a=parent[a]
  return a
 for a,b in edges:parent[root(a)]=root(b)
 comps={}
 for i in range(count):comps.setdefault(root(i),[]).append(i)
 result=[];loops=0
 for c in comps.values():
  ends=sorted(ext[x] for x in c if x in ext)
  if ends:assert len(ends)==2;result.append(tuple(ends))
  else:loops+=1
 return tuple(sorted(result)),loops
@lru_cache(None)
def mul(n,a,b):
 return glue(list(a)+[(x+2*n,y+2*n) for x,y in b]+[(2*n-1-j,2*n+j) for j in range(n)],{**{i:i for i in range(n)},**{4*n-1-j:2*n-1-j for j in range(n)}},4*n)
def close(n,a):
 # input TL_(n+1), close last strand, output TL_n
 m=n+1
 return glue(list(a)+[(n,m)],{**{i:i for i in range(n)},**{2*m-1-j:2*n-1-j for j in range(n)}},2*m)
def product(n,a,b,delta):
 c={}
 for x,u in a.items():
  for y,v in b.items():
   z,k=mul(n,x,y);c[z]=c.get(z,0)+u*v*delta**k
 return {z:v for z,v in c.items() if v}
def central(n,q):
 delta=q+1/q;sqrtq={F(4):F(2),F(9):F(3)}[q];m=n+1;c={identity(m):F(1)}
 for i in list(range(n-1,-1,-1))+list(range(n)):
  c=product(m,c,{identity(m):sqrtq,gen(m,i):-1/sqrtq},delta)
 d={}
 for a,v in c.items():
  b,k=close(n,a);d[b]=d.get(b,0)+v*delta**k
 return {z:v for z,v in d.items() if v}
@lru_cache(None)
def states(n,p):
 # Dyck prefixes: 1 opens arc/defect, -1 closes arc; unmatched opens are defects
 out=[]
 def rec(pos,stack,pairs,closes):
  if pos==n:
   if closes==p:out.append(tuple(sorted(pairs)))
   return
  if n-pos>p-closes:rec(pos+1,stack+(pos,),pairs,closes)
  if stack and closes<p:rec(pos+1,stack[:-1],pairs+((stack[-1],pos),),closes+1)
 rec(0,(),(),0)
 return tuple(out)
def apply_diag(n,a,state,nsites,delta):
 # TL_n acting on first n sites of a state on nsites, via glued graph.
 partner={v:u for u,v in state};partner.update({u:v for u,v in state})
 defects=[i for i in range(nsites) if i not in partner];t=len(defects)
 # rectangular upper state indices first nsites sites, external defect ends after
 edges=list(state)+[(site,nsites+j) for j,site in enumerate(defects)]
 offset=nsites+t
 edges += [(x+offset,y+offset) for x,y in a]
 edges += [(j,offset+j) for j in range(n)]
 # keep the other state sites as vertical unchanged
 ext={nsites+j:nsites+j for j in range(t)}
 ext.update({offset+2*n-1-j:j for j in range(n)})
 ext.update({j:j for j in range(n,nsites)})
 z,k=glue(edges,ext,offset+2*n)
 if any(u>=nsites and v>=nsites for u,v in z):return None,F(0)
 return tuple((u,v) for u,v in z if v<nsites),delta**k
def action(n,c,state,nsites,delta):
 out={}
 for a,v in c.items():
  s,w=apply_diag(n,a,state,nsites,delta)
  if s is not None:out[s]=out.get(s,0)+v*w
 return {s:v for s,v in out.items() if v}
rows=[]
for q in (F(4),F(9)):
 delta=q+1/q
 for n in range(1,6):
  c=central(n,q)
  # centrality checked in diagram algebra
  for i in range(n-1):assert product(n,c,{gen(n,i):F(1)},delta)==product(n,{gen(n,i):F(1)},c,delta)
  for p in range(n//2+1):
   expected=q**(n-2*p+1)+q**(-(n-2*p+1))
   for state in states(n,p):assert action(n,c,state,n,delta)=={state:expected},(q,n,p,state)
  if n>=2:
   # here n=N+1 for induced input rank N
   N=n-1
   for p in range((N-1)//2+1):
    z=tuple((2*j,2*j+1) for j in range(p))
    lifted=z+((N,N+1),)
    # target Phi(h_(2p+1) tensor z): apply d_N...d_(2p+1) to lift
    v={lifted:F(1)}
    for i in range(N-1,2*p-1,-1):
     out={}
     for state,a in v.items():
      for s,b in action(n,{gen(n,i):F(1)},state,N+2,delta).items():out[s]=out.get(s,0)+a*b
     v=out
    assert len(v)==1 and next(iter(v.values()))==1
    target=next(iter(v));observed=action(n,c,lifted,N+2,delta).get(target,F(0));wanted=(-1)**N*(delta**2-4)
    assert observed==wanted,(q,N,p,target,observed,wanted)
    rows.append({'q':str(q),'input_rank':N,'arc_count':p,'coefficient':str(observed)})
result={'kind':'bounded-exact-check-not-general-proof-or-native-gate','scope':'q=4,9, central element ranks1..5, every link state; induced off-diagonal coefficients input ranks1..4 with positive defect number','off_diagonal_cases':rows,'failures':0}
Path(__file__).with_suffix('.json').write_text(json.dumps(result,indent=2)+'\n');print('Exact centrality, all standard scalar actions, and induced coefficients pass at q=4,9 through rank5.')
