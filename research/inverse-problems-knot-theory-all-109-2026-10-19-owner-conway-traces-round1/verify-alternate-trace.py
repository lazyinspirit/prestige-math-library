import json,random,sys,time
from spherogram import Link
from spherogram.links import simplify as S

# The cyclic order, under/over parity, and component names are retained.
def canon(L):
 def rooted(root,anchor):
  ids={root:0};anchors={root:anchor};queue=[root];out=[]
  for c in queue:
   a=anchors[c];row=[]
   for k in range(4):
    d,j=c.adjacent[(a+k)%4]
    if d not in ids:
     ids[d]=len(ids);queue.append(d);anchors[d]=j-j%2
    row.append((c.mark[k%2],ids[d],(j-anchors[d])%4))
   out.append(tuple(row))
  assert len(ids)==len(L.crossings)
  return tuple(out)
 return min(rooted(c,a) for c in L.crossings for a in [0,2])

def init(pd,marks):
 L=Link(pd)
 for c in L.crossings:c.mark=tuple(marks[x] for x in list(c.strand_components)[:2])
 return L

def snap(L):
 ids={c:i for i,c in enumerate(L.crossings)}
 return [{'adj':[[ids[d],j] for d,j in c.adjacent],'mark':c.mark} for c in L.crossings]

ocross=S.cross

def cross(L,cep,kind,loose,label):
 under=cep.crossing.mark[cep.strand_index%2];moving=loose.crossing.mark[loose.strand_index%2]
 c,l=ocross(L,cep,kind,loose,label);c.mark=(under,moving) if kind=='over' else (moving,under)
 return c,l
S.cross=cross
# Disable the optional twist shortcut; all recorded operations are standard R1/R2/R3 or constant-height arc pickup.
S.untwist_diagram=lambda L:0
origI=S.reidemeister_I_and_II;origIII=S.reidemeister_III;origPickup=S.pickup_strand
movie=[];depth=0

def simple(L,c):
 b=snap(L) if depth==0 else None;idx=L.crossings.index(c);result=origI(L,c)
 if depth==0 and result[0]:movie.append({'move':'R1/R2','at':idx,'before':b,'after':snap(L)})
 return result

def triple(L,t):
 b=snap(L) if depth==0 else None;idx=[[L.crossings.index(q.crossing),q.strand_index] for q in t];r=origIII(L,t)
 if depth==0:movie.append({'move':'R3','triangle':idx,'before':b,'after':snap(L)})
 return r

def pickup(L,G,kind,strand):
 global depth
 b=snap(L) if depth==0 else None;idx=[[L.crossings.index(q.crossing),q.strand_index] for q in strand];depth+=1
 try:r=origPickup(L,G,kind,strand)
 finally:depth-=1
 if depth==0 and r:movie.append({'move':'constant-'+kind+'-arc-pickup','strand':idx,'before':b,'after':snap(L)})
 return r
S.reidemeister_I_and_II=simple;S.reidemeister_III=triple;S.pickup_strand=pickup


oRI=S.reverse_type_I;oRII=S.reverse_type_II

def rI(L,cs,label,hand,rebuild=False):
 b=snap(L);idx=[L.crossings.index(cs.crossing),cs.strand_index];mark=cs.crossing.mark[cs.strand_index%2]
 r=oRI(L,cs,label,hand,rebuild);L.crossings[-1].mark=(mark,mark)
 movie.append({'move':'inverse-R1','at':idx,'hand':hand,'before':b,'after':snap(L)})
 return r

def rII(L,c,d,l1,l2,rebuild=False):
 b=snap(L);idx=[[L.crossings.index(q.crossing),q.strand_index] for q in [c,d]];mc=c.crossing.mark[c.strand_index%2];md=d.crossing.mark[d.strand_index%2]
 r=oRII(L,c,d,l1,l2,rebuild)
 for x in L.crossings[-2:]:x.mark=(md,mc)
 movie.append({'move':'inverse-R2','at':idx,'before':b,'after':snap(L)})
 return r
S.reverse_type_I=rI;S.reverse_type_II=rII


import json,sys,collections
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


if __name__=='__main__':
 import gzip,pathlib,hashlib
 p=pathlib.Path(__file__).with_name('alternate-trace-certificate.json.gz');d=json.load(gzip.open(p,'rt'))
 for n,s in d['essential_local_data'].items():assert hashlib.sha256(s.encode()).hexdigest()==d['raw_sha256'][n]
 def source(n):
  z=d['diagrams'][n];return init(z['PD'],z['marks'])
 total=0
 for n,packet in d['movies'].items():
  if n=='K2':
   assert canon(source('K2'))==key(packet['initial'])==key(packet['movie'][0]['before']);ms=packet['movie']
   for i,m in enumerate(ms):
    if i:assert key(ms[i-1]['after'])==key(m['before'])
    checkmove(m)
   assert key(ms[-1]['after'])==key(packet['final']);total+=len(ms)
  else:
   for side in ['first','second']:
    ms=packet[side+'_movie'];start=ms[0]['before']if ms else packet[side+'_initial'];end=ms[-1]['after']if ms else start
    assert canon(source(packet[side]))==key(start)
    if side+'_initial'in packet:assert key(start)==key(packet[side+'_initial'])
    for i,m in enumerate(ms):
     if i:assert key(ms[i-1]['after'])==key(m['before'])
     checkmove(m)
    assert key(end)==key(packet[side+'_final']);total+=len(ms)
   assert key(packet['first_final'])==key(packet['second_final'])
  print('PASS actual input-bound movie',n,flush=True);cache.clear()
 for name,count in [('H-all',7),('K-all',6)]:
  T=source(name);assert collections.Counter(c.sign for c in T.crossings if set(c.mark)=={'G','B'})=={1:count,-1:count}
 assert canon(source('A'))==canon(source('conway-pd-candidate'))
 F=source('F-all');G=F.sublink([2]);
 for c in G.crossings:c.mark=('K','K')
 assert canon(G)==canon(source('Fblue'))
 final=loadgraph(d['movies']['K2']['final']);typ=collections.Counter(''.join(sorted(c.mark))for c in final.crossings);assert typ=={'GG':55,'BG':12,'BR':2}
 br=[c for c in final.crossings if set(c.mark)=={'B','R'}];assert{c.mark for c in br}=={('R','B'),('B','R')}and br[0].sign==br[1].sign
 fs=final.faces();of={(q.crossing,q.strand_index):i for i,f in enumerate(fs)for q in f};adj=[set()for f in fs];gfaces=set()
 for c in final.crossings:
  for j,(a,h)in enumerate(c.adjacent):
   u,v=of[c,j],of[a,h]
   if c.mark[j%2]!='R':adj[u].add(v);adj[v].add(u)
   if c.mark[j%2]=='G':gfaces.update([u,v])
 left=set(range(len(fs)));parts=[]
 while left:
  q=[left.pop()];part=set(q)
  for a in q:
   for b in adj[a]:
    if b in left:left.remove(b);q.append(b);part.add(b)
  parts.append(part)
 empty=[a for a in parts if not a&gfaces];assert len(parts)==2 and len(empty)==1
 assert sorted(empty[0])==d['movies']['K2']['meridian_witness']['G_empty_R_disk_faces']
 ids=[i for i,comp in enumerate(final.link_components)if comp[0].crossing.mark[comp[0].strand_index%2]=='G'];G=final.sublink(ids)
 for c in G.crossings:c.mark=('G','G')
 assert canon(G)==canon(source('Q'));Q=source('Q');assert collections.Counter(c.sign for c in Q.crossings)=={1:32,-1:23}
 inp='PD['+','.join('X['+','.join(str(a+1)for a in c)+']'for c in d['diagrams']['Q']['PD'])+']\n'
 assert inp.replace('\\n','\n')==d['essential_local_data']['alternate-G55-knotjob.txt']
 print('PASS meridian disk and exact Q normalization; total checked moves',total,flush=True)
 print('Scope: finite geometry/normalization checks; the local strip/cap proofs and exact BigRat rank calculation are separately supplied in the same original-facing proof.')
