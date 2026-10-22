exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
s=open('/tmp/conway109/K2L-all-states.py').read();exec('def code(rows):'+s.split('def code(rows):')[1].split('specs=')[0])
import gzip,pathlib,gc
root=pathlib.Path('/tmp/conway109');out=pathlib.Path('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/k2-local-worker');db={};t=time.monotonic()
for fp in sorted((root/'L2K-all-movies').glob('K-all-*.json.gz')):
 with gzip.open(fp,'rt') as f:d=json.load(f)
 for i,g in enumerate([d['initial']]+[m['after'] for m in d['movie']]):
  if len(g)<=125:db.setdefault(code(g),(str(fp),i))
print('reused actualK state keys',len(db),round(time.monotonic()-t,1),flush=True)

for name in ['L2-newcopies-u0-swapends','L2-newcopies-o0-swapends']:
 with gzip.open(out/(name+'-best-movie.json.gz'),'rt') as f:base=json.load(f)
 LL=loadgraph(base['final']);bg=snap(LL);cases=[]
 for face in LL.faces():
  for a in face:
   if a.crossing.mark[a.strand_index%2]!='R':continue
   for b in face:
    if b.crossing.mark[b.strand_index%2]!='G':continue
    aa=[LL.crossings.index(a.crossing),a.strand_index];bb=[LL.crossings.index(b.crossing),b.strand_index]
    for pair in [(aa,bb),(bb,aa)]:
     if pair not in cases:cases.append(pair)
 print('PASSENGER FACE CASES',name,len(cases),flush=True)
 for ci,((a,i),(b,j)) in enumerate(cases[:32]):
  random.seed(ci);movie=[];L=loadgraph(bg)
  i=(i+L.original_rotations[a])%4;j=(j+L.original_rotations[b])%4
  rII(L,CrossingStrand(L.crossings[a],i),CrossingStrand(L.crossings[b],j),'q1','q2',rebuild=True)
  fg=snap(L);prefix=list(movie);newids=set([len(L.crossings)-1,len(L.crossings)-2]);trs=[]
  for tri in S.possible_type_III_moves(L):
   tt=[[L.crossings.index(c.crossing),c.strand_index] for c in tri]
   if any(i in newids for i,j in tt):trs.append(tt)
  for ti,tt in enumerate(trs):
   L=loadgraph(fg);movie=list(prefix)
   tr=[CrossingStrand(L.crossings[i],(j+L.original_rotations[i])%4) for i,j in tt];triple(L,tr)
   L.simplify('global',type_III_limit=30)
   states=[fg]+[m['after'] for m in movie]
   for mi,g in enumerate(states):
    k=code(g)
    if k in db:
     fp,oi=db[k]
     with gzip.open(fp,'rt') as f:old=json.load(f)
     og=([old['initial']]+[m['after'] for m in old['movie']])[oi]
     # states[0]=fg is after prefix; exclude the unmatched indexing shortcut there.
     used=movie[:mi] if mi else prefix
     json.dump({'first':'K-all','first_movie':old['movie'][:oi],'first_initial':old['initial'],'first_final':og,'second':name,'second_initial':base['initial'],'second_movie':base['movie']+used,'second_final':g},open(out/'K2-finger-common-marked-movie.json','w'));print('MATCH',name,ci,ti,oi,mi,len(g),flush=True);raise SystemExit
  print('face',ci,'new-triangles',len(trs),flush=True)
  gc.collect()
print('NO MATCH IN FINITE PASSENGER-FACE CASES',flush=True)
