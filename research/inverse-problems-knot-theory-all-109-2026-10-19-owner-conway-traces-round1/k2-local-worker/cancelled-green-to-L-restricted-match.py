exec(open('/tmp/conway109/marked-movie-search.py').read().split("if __name__=='__main__':")[0])
import gzip,pathlib,gc
def code(rows):
 n=len(rows);c,p=0,0;seq=[];incoming={}
 for i in range(2*n):
  seq.append((c,p%2));incoming[(c,p%2)]=p;c,p=rows[c]['adj'][(p+2)%4]
 assert (c,p)==(0,0) and len(incoming)==2*n
 chi={c:(incoming[(c,1)]-incoming[(c,0)])%4 for c in range(n)};best=None
 for rev in [seq,seq[::-1]]:
  for k in range(len(seq)):
   if rev[k][1]:continue
   ids={};r=[];relation=0
   for c,o in rev[k:]+rev[:k]:
    if c not in ids:ids[c]=len(ids)
    for v in (ids[c],o,chi[c]):
     j=len(r)
     if relation==0 and best is not None:
      if v>best[j]:relation=1;break
      if v<best[j]:relation=-1
     r.append(v)
    if relation==1:break
   if relation!=1:best=r
 return bytes(best)

out=pathlib.Path('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/k2-local-worker');root=pathlib.Path('/tmp/conway109');db={};started=time.monotonic()

def green(g):
 kept=[i for i,r in enumerate(g) if list(r['mark'])==['G','G']];ids={n:i for i,n in enumerate(kept)};out=[]
 for i in kept:
  adj=[]
  for c,k in g[i]['adj']:
   while c not in ids:
    assert g[c]['mark'][k%2]=='G';c,k=g[c]['adj'][(k+2)%4]
   adj.append([ids[c],k])
  out.append({'mark':['G','G'],'adj':adj})
 return out
for fp in sorted((root/'K2L-all-movies').glob('L-all-*.json.gz')):
 with gzip.open(fp,'rt') as f:d=json.load(f)
 for i,g in enumerate([d['initial']]+[m['after'] for m in d['movie']]):
  gg=green(g);db.setdefault(code(gg),(str(fp),i))
print('REUSED O ACTUAL GRAPH STATES',len(db),round(time.monotonic()-started,1),flush=True)
for seed in range(2):
 random.seed(seed);movie=[];L=init(json.load(open(out/'K2-cancelled-green-pd.json'))['PD'],['G']);initial=snap(L)
 if seed: L.simplify('global',type_III_limit=80)
 states=[initial]+[m['after'] for m in movie]
 for i,g in enumerate(states):
  k=code(g)
  if k in db:
   fp,oi=db[k]
   with gzip.open(fp,'rt') as f:old=json.load(f)
   def recolor(z):
    if isinstance(z,dict):return {k: (['G','G'] if k=='mark' else recolor(v)) for k,v in z.items()}
    if isinstance(z,list):return [recolor(v) for v in z]
    return z
   ogfull=([old['initial']]+[m['after'] for m in old['movie']])[oi];og=green(ogfull)
   json.dump({'first':'L-all-restricted-to-green','first_initial':green(old['initial']),'first_whole_initial':old['initial'],'first_whole_final':ogfull,'first_movie':old['movie'][:oi],'first_final':og,'second':'K2-cancelled-green','second_initial':initial,'second_movie':movie[:i],'second_final':g},open(out/'K2-cancelled-green-to-L-restricted-common-movie.json','w'));print('EXACT GRAPH MATCH',seed,oi,i,len(g),flush=True);raise SystemExit
 print('bounded green pass',seed,len(L.crossings),len(movie),flush=True);gc.collect()
print('NO MATCH IN BOUNDED DIRECT GREEN TEST',flush=True)
