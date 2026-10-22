"""Bounded exploration only; a negative result proves no non-isotopy claim."""
from pathlib import Path
ROOT=Path(__file__).resolve().parent
exec(open(ROOT/'inputs/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
import pathlib,time,collections
root=ROOT
p=json.load(open(root/'head-three-returns-prefix.json'))
# Prefix before the latest five body-exit moves.
p['movie']=p['movie'][:34];p['final']=p['movie'][-1]['after'];p['labels']=[i for i in range(59)if i!=21]+list(range(100,106))
target=canon(init(json.load(open(ROOT/'inputs/N-pd.json'))['PD'],['G']))
def restore(g,labs):
 L=loadgraph(g)
 for c,lab in zip(L.crossings,labs):c.label=lab
 return L
queue=collections.deque();seen=set();start=time.monotonic()
for opt in range(4):
 L=restore(p['final'],p['labels']);f=next(f for f in L.faces()if{q.crossing.label for q in f}=={38,18,19,37})
 a,b=f[opt%2],f[opt%2+2];a,b=(a,b)if opt<2 else(b,a);movie.clear();depth=0
 S.reverse_type_II(L,a,b,106,107);L._rebuild(True)
 queue.append((snap(L),[c.label for c in L.crossings],movie.copy(),opt))
count=0;best=1000
while queue and count<2500 and time.monotonic()-start<45:
 g,labs,path,opt=queue.popleft();L=restore(g,labs);k=canon(L)
 if k in seen:continue
 seen.add(k);count+=1
 if len(L.crossings)<best:best=len(L.crossings);print('BEST',count,opt,len(path),best,flush=True)
 if k==target:
  json.dump({'initial':p['initial'],'movie':p['movie']+path,'final':snap(L),'labels':[c.label for c in L.crossings]},open(root/'body-exit-target-movie.json','w'));print('MATCH',count,opt,flush=True);sys.exit(0)
 if len(path)>22:continue
 moves=[]
 for tr in S.possible_type_III_moves(L):
  if any(q.crossing.label in {106,107}for q in tr):moves.append(('R3',[[L.crossings.index(q.crossing),q.strand_index]for q in tr]))
 for i in range(len(L.crossings)):
  Q=restore(g,labs);movie.clear();depth=0
  S.reidemeister_I_and_II(Q,Q.crossings[i])
  if movie:queue.appendleft((snap(Q),[c.label for c in Q.crossings],path+movie.copy(),opt))
 for typ,ports in moves:
  Q=restore(g,labs);movie.clear();depth=0;tr=[CrossingStrand(Q.crossings[i],j)for i,j in ports]
  S.reidemeister_III(Q,tr);Q._rebuild(True)
  queue.append((snap(Q),[c.label for c in Q.crossings],path+movie.copy(),opt))
print('BOUNDED NO MATCH',count,'queue',len(queue),'best',best,'elapsed',time.monotonic()-start,flush=True)
