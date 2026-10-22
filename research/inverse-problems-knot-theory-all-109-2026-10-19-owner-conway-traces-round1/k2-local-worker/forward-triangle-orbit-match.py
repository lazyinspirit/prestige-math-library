exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
s=open('/tmp/conway109/K2L-all-states.py').read();exec('def code(rows):'+s.split('def code(rows):')[1].split('specs=')[0])
import gzip,pathlib,gc
root=pathlib.Path('/tmp/conway109');out=pathlib.Path('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/k2-local-worker');db={};t=time.monotonic()
for fp in sorted((root/'K2L-all-movies').glob('L-all-*.json.gz')):
 with gzip.open(fp,'rt') as f:d=json.load(f)
 for i,g in enumerate([d['initial']]+[m['after'] for m in d['movie']]):
  if len(g)<=125:db.setdefault(code(g),(str(fp),i))
print('reused actualK state keys',len(db),round(time.monotonic()-t,1),flush=True)


from collections import deque
for name in ['K2-sequential-1-0']:
 with gzip.open(out/(name+'-best-movie.json.gz'),'rt') as f:base=json.load(f)
 started=time.monotonic();nodes=[(base['final'],-1,[])];queue=deque([0]);seen={code(base['final'])};done=0
 while queue and done<2000 and time.monotonic()-started<120:
  ni=queue.popleft();bg,_,_=nodes[ni];LL=loadgraph(bg);bg=snap(LL);tris=[[[LL.crossings.index(c.crossing),c.strand_index] for c in t] for t in S.possible_type_III_moves(LL)]
  for tt in tris:
   L=loadgraph(bg);movie=[];triple(L,[CrossingStrand(L.crossings[i],(j+L.original_rotations[i])%4) for i,j in tt]);S.basic_simplify(L)
   g=snap(L)
   assert all(g[d]['adj'][j]==[i,k] for i,r in enumerate(g) for k,(d,j) in enumerate(r['adj']))
   try:k=code(g)
   except AssertionError:continue
   if k in seen:continue
   seen.add(k);nodes.append((g,ni,list(movie)));newi=len(nodes)-1
   if k in db:
    fp,oi=db[k]
    with gzip.open(fp,'rt') as f:old=json.load(f)
    og=([old['initial']]+[m['after'] for m in old['movie']])[oi]
    pieces=[];idx=newi
    while nodes[idx][1]>=0:pieces.append(nodes[idx][2]);idx=nodes[idx][1]
    used=base['movie']+[m for part in reversed(pieces) for m in part]
    json.dump({'first':'L-all','first_movie':old['movie'][:oi],'first_initial':old['initial'],'first_final':og,'second':name,'second_initial':base['initial'],'second_movie':used,'second_final':g},open(out/'K2-forward-triangle-common-marked-movie.json','w'));print('MATCH',name,done,len(nodes),oi,len(used),len(g),flush=True);raise SystemExit
   queue.append(newi)
  done+=1
  if done%50==0:print(name,'triangle orbit',done,'seen',len(seen),'frontier',len(queue),flush=True)
 print('BOUNDED ORBIT END',name,done,len(seen),len(queue),flush=True)
print('NO MATCH IN TWO BOUNDED TRIANGLE ORBITS',flush=True)
