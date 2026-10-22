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


source=init(json.load(open(root/'N-pd.json'))['PD'],['G']);sourcekey=code(snap(source));checked={}
for folder in ['NO-all-movies','NO-new-runs']:
 for fp in sorted((root/folder).glob('N-*.json.gz')):
  try:
   with gzip.open(fp,'rt') as f:d=json.load(f)
  except (json.JSONDecodeError,EOFError):
   print('SKIP INCOMPLETE SEARCH SCRATCH',fp,flush=True);continue
  sig=json.dumps(d['initial'],separators=(',',':'))
  if sig not in checked:checked[sig]=code(d['initial'])==sourcekey
  if not checked[sig]:continue
  for i,g in enumerate([d['initial']]+[m['after'] for m in d['movie']]):db.setdefault(code(g),('cache',str(fp),i))
accepted=json.load(open(root/'prime-NO-verified-movie.json'));assert code(accepted['first_initial'])==sourcekey
for i,g in enumerate([accepted['first_initial']]+[m['after'] for m in accepted['first_movie']]):db.setdefault(code(g),('accepted',str(root/'prime-NO-verified-movie.json'),i))
print('ACTUAL N + ACCEPTED NO STATES',len(db),flush=True)
for name in ['K2-cancelled-green','K2-sequential-1-0-raw-green','K2-11-banded-raw-green']:
 for seed in range(4):
  random.seed(seed);movie=[];L=init(json.load(open(out/(name+'-pd.json')))['PD'],['G']);initial=snap(L)
  if seed:L.simplify('global',type_III_limit=80)
  for mi,g in enumerate([initial]+[m['after'] for m in movie]):
   k=code(g)
   if k not in db:continue
   kind,fp,oi=db[k]
   if kind=='cache':
    with gzip.open(fp,'rt') as f:old=json.load(f)
   else:old={'initial':accepted['first_initial'],'movie':accepted['first_movie']}
   def recolor(z):
    if isinstance(z,dict):return {k: (['G','G'] if k=='mark' else recolor(v)) for k,v in z.items()}
    if isinstance(z,list):return [recolor(v) for v in z]
    return z
   old=recolor(old);og=([old['initial']]+[m['after'] for m in old['movie']])[oi]
   json.dump({'first':'N','first_initial':old['initial'],'first_movie':old['movie'][:oi],'first_final':og,'second':name,'second_initial':initial,'second_movie':movie[:mi],'second_final':g,'accepted_NO_reference':'/tmp/conway109/prime-NO-verified-movie.json'},open(out/'K2-green-to-N-common-movie.json','w'));print('EXACT N GRAPH MATCH',name,seed,oi,mi,len(g),kind,flush=True);raise SystemExit
  print('bounded N comparison',name,seed,len(L.crossings),len(movie),flush=True);gc.collect()
print('NO EXACT MATCH IN N/ACCEPTED-NO COMPARISON',flush=True)
