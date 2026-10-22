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

