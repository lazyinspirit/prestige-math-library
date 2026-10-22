exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
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
for target,folder,pat,source in [('O','NO-all-movies','O-*.json.gz','O-pd.json'),('M','MN-new-runs','M-*.json.gz','M-pd.json'),('L','K2L-all-movies','L-all-*.json.gz','L-all-pd.json')]:
 sourcekey=None;checked={}
 for fp in sorted((root/folder).glob(pat)):
  with gzip.open(fp,'rt') as f:d=json.load(f)
  sig=json.dumps(d['initial'],separators=(',',':'))
  if sig not in checked:
   initg=green(d['initial']) if target=='L' else d['initial']
   if sourcekey is None:
    src=init(json.load(open(root/source))['PD'],['G','B','R'] if target=='L' else ['G']);sourcekey=code(green(snap(src)) if target=='L' else snap(src))
   checked[sig]=(code(initg)==sourcekey)
  if not checked[sig]:print('SKIP STALE TARGET',fp,flush=True);continue
  for i,g in enumerate([d['initial']]+[m['after'] for m in d['movie']]):
   gg=green(g) if target=='L' else g;db.setdefault(code(gg),(target,str(fp),i))
 print('CACHED TARGET',target,len(db),flush=True)
checked={};scanned=0
for pat in ['K2-10-banded-*.json.gz','K2-11-banded-*.json.gz']:
 name=pat.split('-*.json.gz')[0];source=init(json.load(open(root/(name+'-pd.json')))['PD'],['G','R','B']);sourcekey=canon(source)
 for fp in sorted((root/'K2L-all-movies').glob(pat)):
  with gzip.open(fp,'rt') as f:d=json.load(f)
  sig=json.dumps(d['initial'],separators=(',',':'))
  if sig not in checked:checked[sig]=canon(loadgraph(d['initial']))==sourcekey
  if not checked[sig]:print('SKIP STALE BAND',fp,flush=True);continue
  for i,g in enumerate([d['initial']]+[m['after'] for m in d['movie']]):
   types=[''.join(sorted(r['mark'])) for r in g]
   if any(x in types for x in ['RR','BB','GR']) or types.count('BR')!=2:continue
   gg=green(g);k=code(gg)
   if k not in db:continue
   target,tf,ti=db[k]
   with gzip.open(tf,'rt') as f:t=json.load(f)
   tg=([t['initial']]+[m['after'] for m in t['movie']])[ti]
   json.dump({'band_source':name,'band_initial':d['initial'],'band_movie':d['movie'][:i],'band_final':g,'cancelled_green':gg,'target':target,'target_initial':t['initial'],'target_movie':t['movie'][:ti],'target_final':tg,'target_green':green(tg) if target=='L' else tg},open(out/'K2-cached-cancellation-trace-match.json','w'));print('EXACT POST-CANCELLATION MATCH',name,fp.name,i,target,tf,ti,len(gg),flush=True);raise SystemExit
  scanned+=1
  if scanned%10==0:print('CACHED BAND FILES',scanned,flush=True)
print('NO MATCH IN EXISTING SAFE-COPY-ORDER CANCELLABLE STATES',flush=True)
