exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
from pathlib import Path
import contextlib,io
base=Path('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1');b=base/'lm-local-worker';k=base/'k2-local-worker'
# Reconstruct ONLY the new two-band model; suppress its final on-disk write.
src=(k/'K2-nested-1.py').read_text();src=src[:src.rfind("json.dump(")]+"assert pd==json.load(open(nested_worker_path/'K2-nested-1-pd.json'))['PD']\n"
ns={'nested_worker_path':k};buf=io.StringIO()
with contextlib.redirect_stdout(buf):exec(src,ns)
print('PASS actual new band model reconstruction',buf.getvalue().strip(),flush=True)
p=json.load(open(b/'nested1-actual-cancellation-candidate.json'));start=init(json.load(open(k/'K2-nested-1-pd.json'))['PD'],['G','R','B']);assert canon(start)==key(p['initial'])
def replay(ms,start):
 now=start
 for m in ms:
  assert key(now)==key(m['before']);checkmove(m);now=m['after']
 return now
final=replay(p['movie'],p['initial']);assert key(final)==key(p['final']);L=loadgraph(final);typ=collections.Counter(''.join(sorted(c.mark))for c in L.crossings);assert typ=={'GG':56,'BG':12,'BR':2}
br=[c for c in L.crossings if set(c.mark)=={'B','R'}];assert {c.mark for c in br}=={('B','R'),('R','B')}and br[0].sign==br[1].sign
fs=L.faces();of={(q.crossing,q.strand_index):i for i,f in enumerate(fs)for q in f};adj=[set()for f in fs];gf=set()
for c in L.crossings:
 for j,(a,h)in enumerate(c.adjacent):
  u,v=of[c,j],of[a,h]
  if c.mark[j%2]!='R':adj[u].add(v);adj[v].add(u)
  if c.mark[j%2]=='G':gf.update([u,v])
left=set(range(len(fs)));parts=[]
while left:
 todo=[left.pop()];part=set(todo)
 for a in todo:
  for z in adj[a]:
   if z in left:left.remove(z);todo.append(z);part.add(z)
 parts.append(part)
empty=[a for a in parts if not a&gf];assert len(parts)==2 and len(empty)==1
ids=[i for i,c in enumerate(L.link_components)if c[0].crossing.mark[c[0].strand_index%2]=='G'];green=L.sublink(ids)
for c in green.crossings:c.mark=('G','G')
g=init(json.load(open(b/'nested1-green-candidate-pd.json'))['PD'],['G']);assert canon(green)==canon(g)
lp=json.load(open(b/'L-fixed-green-local-pd.json'));literal=init(json.load(open('/tmp/conway109/L-pd.json'))['PD'],['G']);assert canon(literal)==key(lp['initial']);last=replay(lp['movie'],lp['initial']);assert key(last)==key(lp['final'])
sweeps=json.load(open(b/'nested1-L-guided-passenger-sweeps.json'));assert canon(g)==key(sweeps['nested1']['initial']);assert key(last)==key(sweeps['L']['initial'])
for name in ['nested1','L']:
 last=replay(sweeps[name]['movie'],sweeps[name]['initial']);assert key(last)==key(sweeps[name]['final'])
assert key(sweeps['nested1']['final'])==key(sweeps['L']['final'])
witness={'crossing_types':dict(typ),'G_empty_R_disk_faces':sorted(empty[0]),'new_checked_moves':len(p['movie'])+len(lp['movie'])+sum(len(v['movie'])for v in sweeps.values()),'scope':'Only new nested two-band/cancellation and literal-L green identification; no accepted Q replay or named MN/LM claim.'}
json.dump(witness,open(b/'nested1-L-local-witness.json','w'),indent=2)
print('PASS NEW NESTED TWO BAND MODEL, ALL',witness['new_checked_moves'],'NEW MOVES, EMPTY RED DISK',sorted(empty[0]),'AND EXACT L GREEN IDENTIFICATION',flush=True)
