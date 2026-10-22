exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
s=open('/tmp/conway109/K2L-all-states.py').read();exec('def code(rows):'+s.split('def code(rows):')[1].split('specs=')[0])
import gzip,pathlib,gc
root=pathlib.Path('/tmp/conway109');out=pathlib.Path('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/k2-local-worker');db={};t=time.monotonic()
for fp in sorted((root/'K2L-all-movies').glob('L-all-*.json.gz')):
 with gzip.open(fp,'rt') as f:d=json.load(f)
 for i,g in enumerate([d['initial']]+[m['after'] for m in d['movie']]):
  if len(g)<=125:db.setdefault(code(g),(str(fp),i))
print('reused actualK state keys',len(db),round(time.monotonic()-t,1),flush=True)



name='K2-sequential-1-0'
with gzip.open(out/(name+'-best-movie.json.gz'),'rt') as f:base=json.load(f)
started=time.monotonic()
for seed in range(24):
 if time.monotonic()-started>120:break
 random.seed(seed);movie=[];L=loadgraph(base['final']);L.backtrack(steps=8,prob_type_1=.1,prob_type_2=.6);L.simplify('global',type_III_limit=50)
 for mi,g in enumerate([base['final']]+[m['after'] for m in movie]):
  try:k=code(g)
  except AssertionError:continue
  if k in db:
   fp,oi=db[k]
   with gzip.open(fp,'rt') as f:old=json.load(f)
   og=([old['initial']]+[m['after'] for m in old['movie']])[oi]
   used=base['movie']+movie[:mi]
   json.dump({'first':'L-all','first_movie':old['movie'][:oi],'first_initial':old['initial'],'first_final':og,'second':name,'second_initial':base['initial'],'second_movie':used,'second_final':g},open(out/'K2-sequential-backtrack-common-marked-movie.json','w'));print('MATCH',seed,oi,len(used),len(g),flush=True);raise SystemExit
 print('bounded inverse moves',seed,'final',len(L.crossings),'moves',len(movie),flush=True);gc.collect()
print('BOUNDED SEQUENTIAL INVERSE-MOVE TEST ENDED WITHOUT MATCH',flush=True)
