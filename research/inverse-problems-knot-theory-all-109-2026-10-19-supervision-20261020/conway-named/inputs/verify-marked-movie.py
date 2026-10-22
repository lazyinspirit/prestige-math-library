import json,sys,collections
exec(open('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/conway-named/inputs/marked-movie-backtrack.py').read().split('db={};t=time.monotonic()')[0])
from spherogram.links.links_base import Crossing,CrossingStrand,CrossingEntryPoint

def loadgraph(g):
 cs=[Crossing(i) for i in range(len(g))]
 for c,row in zip(cs,g):
  c.mark=tuple(row['mark'])
  for k,(i,j) in enumerate(row['adj']):c[k]=cs[i][j]
 oldorient=Crossing.orient;rotated=set()
 def orient(c):
  if (2,0) in c.directions:
   if c in rotated:rotated.remove(c)
   else:rotated.add(c)
  return oldorient(c)
 Crossing.orient=orient
 try:L=Link(cs)
 finally:Crossing.orient=oldorient
 L.original_rotations={i:2 if c in rotated else 0 for i,c in enumerate(cs)}
 assert all(c.mark[i%2]==d.mark[j%2] for c in cs for i,(d,j) in enumerate(c.adjacent))
 return L

cache={}
def key(g):
 s=json.dumps(g,separators=(',',':'))
 if s not in cache:cache[s]=canon(loadgraph(g))
 return cache[s]

def compress(ms):
 initial=key(ms[0]['before']);ks=[initial];where={initial:0};out=[]
 for n,m in enumerate(ms):
  assert key(m['before'])==ks[-1],('chain',n)
  k=key(m['after'])
  if k in where:
   i=where[k]
   for q in ks[i+1:]:del where[q]
   ks=ks[:i+1];out=out[:i]
  else:
   where[k]=len(ks);ks.append(k);out.append(m)
 return out

def checkmove(m):
 global depth
 L=loadgraph(m['before']);typ=m['move'];depth=1
 def port(i,j):return (j+L.original_rotations[i])%4
 if typ=='R1/R2':
  e,c=origI(L,L.crossings[m['at']]);assert e
 elif typ=='R3':
  tr=[CrossingStrand(L.crossings[i],port(i,j)) for i,j in m['triangle']]
  assert any(set(x)==set(tr) for x in S.possible_type_III_moves(L))
  origIII(L,tr)
 elif typ=='inverse-R1':
  i,j=m['at'];j=port(i,j);c=L.crossings[i];mark=c.mark[j%2];oRI(L,CrossingStrand(c,j),'n',m['hand']);L.crossings[-1].mark=(mark,mark)
 elif typ=='inverse-R2':
  (a,i),(b,j)=m['at'];i=port(a,i);j=port(b,j);c=CrossingStrand(L.crossings[a],i);d=CrossingStrand(L.crossings[b],j)
  assert any(c in f and d in f for f in L.faces())
  mc,md=c.crossing.mark[i%2],d.crossing.mark[j%2];oRII(L,c,d,'n1','n2')
  for x in L.crossings[-2:]:x.mark=(md,mc)
 elif typ.startswith('constant-'):
  kind='over' if 'over' in typ else 'under';saved_shortest=S.nx.shortest_path;saved_all=S.nx.all_shortest_paths
  wanted=key(m['after']);found=False
  for attempt in range(128):
   L=loadgraph(m['before']);chosen=[]
   st=[CrossingEntryPoint(L.crossings[i],(j+L.original_rotations[i])%4) for i,j in m['strand']]
   if not st[0].crossing.is_incoming(st[0].strand_index):st=[CrossingEntryPoint(q.crossing,(q.strand_index+2)%4) for q in reversed(st)]
   assert all((x.strand_index%2==1)==(kind=='over') for x in st)
   assert all(st[i].next()==st[i+1] for i in range(len(st)-1))
   def shortest(G,a,b,weight=None):
    paths=list(saved_all(G,a,b,weight=weight));path=paths[attempt%len(paths)];chosen.append(path);return path
   S.nx.shortest_path=shortest
   try:result=origPickup(L,S.dual_graph_as_nx(L),kind,st)
   finally:S.nx.shortest_path=saved_shortest
   assert result>0
   if canon(L)==wanted:
    m['replayed_shortest_path_choice']=attempt;m['replayed_face_paths']=chosen;found=True;break
  assert found,('no exact pickup path replay',len(m['before']),len(m['after']))
 else:raise ValueError(typ)
 assert canon(L)==key(m['after']),typ
 depth=0

