from pathlib import Path
import shutil,json,yaml,re,os
r='physics-non-fluid-129-2026-10-21-r2';b=Path(f'research/{r}-owner-hawking-metadata')
for id in ['def-qftx-wavefront-hadamard','post-tgrx-free-collapse-scattering']:
 p=Path('items',id+'.md');d=b/'relation-before'/p;d.parent.mkdir(parents=True,exist_ok=True)
 if d.exists():raise RuntimeError('preimage exists')
 shutil.copyfile(p,d)
for batch in [58,120]:
 for suffix in ['pages.json','proof-contracts.json']:
  p=Path(f'research/{r}-batch-{batch}.{suffix}');d=b/'relation-before'/p;d.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,d)
p=Path('items/def-qftx-wavefront-hadamard.md');s=p.read_text();old='Two nonzero future-null cotangent vectors $(p,\\xi)$ and $(q,\\zeta)$ are related, written $(p,\\xi)\\sim(q,\\zeta)$, if a future-directed affinely parametrized null geodesic from $p$ to $q$ carries $\\xi$ to $\\zeta$ by the induced parallel transport on covectors; for $p=q$ the zero-length segment has $\\zeta=\\xi$.'
new=r'''Two nonzero future-null cotangent vectors $(p,\xi)$ and $(q,\zeta)$ are related, written $(p,\xi)\sim(q,\zeta)$, if $p=q$ and $\zeta=\xi$, or if there are a nonconstant future-directed affinely parametrized null geodesic $\gamma:I\to M$, parameters $s,t\in I$ in either order, and a common scale $\lambda>0$ such that
$$p=\gamma(s),\qquad q=\gamma(t),\qquad \xi=\lambda g_p(\dot\gamma(s),\cdot),\qquad \zeta=\lambda g_q(\dot\gamma(t),\cdot).$$
These covectors are the metric-dual tangents to that geodesic and are related by induced covector parallel transport. There is no requirement $s\le t$: the future-frequency choice concerns the covectors, not an ordering of the two base points. The coincident case includes every nonzero future-null covector with $\zeta=\xi$.'''
assert old in s;s=s.replace(old,new);p.write_text(s)
p=Path('items/post-tgrx-free-collapse-scattering.md');s=p.read_text();old='the positive-frequency null relation obtained by parallel transport along future-directed null geodesics.';new='the positive-frequency null relation whose pairs $(x,\\xi;y,-\\eta)$ have nonzero future-null covectors $\\xi,\\eta$ equal to a common positive multiple of the metric-dual tangent of one affinely parametrized future null geodesic at the two endpoints, with covector parallel transport and either endpoint parameter order; coincident endpoints have $\\eta=\\xi$.';assert old in s;s=s.replace(old,new);p.write_text(s)
for batch in [58,120]:
 p=Path(f'research/{r}-batch-{batch}.pages.json');doc=json.loads(p.read_text())
 for page in doc:
  for row in page.get('items',[])+page.get('examples',[]):
   if not isinstance(row,dict) or row['id'] not in ['def-qftx-wavefront-hadamard','post-tgrx-free-collapse-scattering']:continue
   _,fm,body=Path('items',row['id']+'.md').read_text().split('---',2);heading='Postulate' if row['id'].startswith('post-') else 'Definition';row['statement']=re.search(r'^## '+heading+r'\n\n(.*?)(?=\n## |\Z)',body,re.M|re.S).group(1).strip()
 tmp=p.with_suffix('.new');tmp.write_text(json.dumps(doc,indent=2,ensure_ascii=False)+'\n');os.replace(tmp,p)
 # Only stage exact contract source quotations, not acceptance stamps.
 shutil.copyfile(Path(f'research/{r}-batch-{batch}.proof-contracts.json'),b/f'contracts-{batch}.staged.json')
print('Corrected definition58 and postulate120 with exact preimages/manifests; owning contracts staged.')
