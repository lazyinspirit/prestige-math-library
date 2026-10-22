exec(open('/tmp/conway109/marked-movie-search.py').read().split("if __name__=='__main__':")[0])
s=open('/tmp/conway109/K2L-all-states.py').read();exec('def code(rows):'+s.split('def code(rows):')[1].split('specs=')[0])
import gzip,pathlib,gc
root=pathlib.Path('/tmp/conway109');out=pathlib.Path('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/k2-local-worker');db={};t=time.monotonic()
for fp in sorted((root/'L2K-all-movies').glob('K-all-*.json.gz')):
 with gzip.open(fp,'rt') as f:d=json.load(f)
 for i,g in enumerate([d['initial']]+[m['after'] for m in d['movie']]):
  if len(g)<=125:db.setdefault(code(g),(str(fp),i))
print('reused actualK state keys',len(db),round(time.monotonic()-t,1),flush=True)
for name in ['L2-leftnew--1-0','L2-leftnew--1-1','L2-leftnew-1-0','L2-leftnew-1-1']:
 for seed in range(2):
  random.seed(seed);movie=[];L=init(json.load(open(out/(name+'-pd.json')))['PD'],['G','R','B']);initial=snap(L);L.simplify('global',type_III_limit=50)
  states=[initial]+[m['after'] for m in movie]
  for i,g in enumerate(states):
   if len(g)>125:continue
   k=code(g)
   if k in db:
    fp,oi=db[k]
    with gzip.open(fp,'rt') as f:old=json.load(f)
    og=([old['initial']]+[m['after'] for m in old['movie']])[oi]
    json.dump({'first':'K-all','first_movie':old['movie'][:oi],'first_initial':old['initial'],'first_final':og,'second':name,'second_initial':initial,'second_movie':movie[:i],'second_final':g},open(out/'K2-leftnew-common-marked-movie.json','w'));print('MATCH',name,seed,oi,i,len(g),flush=True);raise SystemExit
  print('checked',name,seed,len(L.crossings),len(movie),flush=True);gc.collect()
print('NO MATCH IN EIGHT NEW GEOMETRY PASSES',flush=True)
