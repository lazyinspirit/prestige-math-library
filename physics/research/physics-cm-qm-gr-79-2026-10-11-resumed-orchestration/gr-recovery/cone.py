from pathlib import Path
import yaml,json,hashlib,datetime
b=Path('research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration');out=b/'gr-recovery';run='physics-cm-qm-gr-79-2026-10-11'
rows={};aliases={};owners={}
for p in Path('items').glob('*.md'):
 try:d=yaml.safe_load(p.read_text().split('---',2)[1])
 except Exception:continue
 if not isinstance(d,dict):continue
 rows[d.get('id',p.stem)]=d
 for a in d.get('aliases',[]) or []:aliases[a]=d.get('id',p.stem)
for p in Path('research').glob(run+'-batch-*.pages.json'):
 n=int(p.name.split('-batch-')[1].split('.')[0]);m=json.loads(p.read_text())
 for page in m:
  for i in page.get('items',[]):owners[i['id']]=n
old=[]
for p in b.glob('gr*/**/*.md'):
 if '/before' not in str(p):continue
 try:d=yaml.safe_load(p.read_text().split('---',2)[1])
 except Exception:continue
 if isinstance(d,dict) and d.get('id'):old.append(d)
for p in list(Path('research').glob(run+'-batch-*.pages.json'))+list(b.glob('gr*/**/*batch-*.pages.json')):
 for page in json.loads(p.read_text()):old+=page.get('items',[])
for d in old:
 for a in d.get('aliases',[]) or []:aliases.setdefault(a,d['id'])
graph={i:set() for i in rows}
for d in list(rows.values())+old:
 for dep in d.get('deps',[]) or []:graph.setdefault(aliases.get(dep,dep),set()).add(d.get('id'))
seeds=['lem-gr-compact-variation-coefficient-vanishing','def-gr-scalar-field-matter-model','ex-gr-null-gradient-scalar-field-conservation','lem-gr-periodic-fourier-differentiation-and-norm-equivalence','lem-gr-galerkin-projection-properties','lem-gr-rational-diagonal-extraction','lem-gr-galerkin-compactness','lem-gr-reduced-einstein-principal-part','thm-gr-reduced-einstein-local-existence','thm-gr-local-symmetric-hyperbolic-well-posedness','prop-gr-scalar-field-stress-energy-conservation','lem-gr-barotropic-fluid-symmetric-hyperbolic-system','lem-gr-scalar-einstein-symmetric-hyperbolic-reduction','lem-gr-smooth-composition-and-commutator-estimates','lem-gr-galerkin-second-time-derivative-bound','lem-gr-galerkin-limit-is-classical-solution','lem-gr-periodic-sobolev-embedding','lem-gr-periodic-sobolev-algebra','lem-gr-local-cauchy-neighborhood','thm-gr-constraint-equations-in-normal-frame','def-gr-dust-reduction-variables-and-gauge','def-gr-dust-electric-magnetic-weyl-variables-and-schouten','def-gr-dust-torsion-and-curvature-residuals','lem-gr-dust-reduced-evolution-equations','thm-gr-dust-subsidiary-and-residual-vanishing','lem-gr-dust-initial-data-and-tilted-initialization','lem-gr-dust-weyl-reconstruction-from-electric-magnetic','lem-gr-dust-symmetric-hyperbolic-reduction','thm-gr-local-geometric-uniqueness','thm-gr-local-geometric-development','lem-gr-einstein-residual-and-subsidiary-identity','lem-gr-harmonic-initial-data-construction','thm-gr-periodic-symmetric-hyperbolic-existence','thm-gr-periodic-symmetric-hyperbolic-smooth-persistence','thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability','lem-gr-finite-speed-independence-of-extension','lem-gr-galerkin-ode-local-solution','lem-gr-galerkin-energy-inequality','lem-gr-galerkin-time-derivative-bound']
cones={}
for seed in seeds:
 seen=set();queue=[seed]
 while queue:
  i=queue.pop()
  for c in graph.get(i,[]):
   if c and c not in seen:seen.add(c);queue.append(c)
 cones[seed]=sorted(seen)
union=sorted(set(seeds).union(*(set(x) for x in cones.values())))
report={'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'cycle':1,'cap':2,'scope':'Current carriers + archived old GR interfaces + unchanged original run manifests, aliases resolved; coverage records describe actual pending checks and grant no acceptance.','seeds':seeds,'cones':cones,'union':[{'id':i,'batch':owners.get(i),'raw_sha256':hashlib.sha256((Path('items')/(i+'.md')).read_bytes()).hexdigest() if (Path('items')/(i+'.md')).exists() else None,'status':'pending-owning-focused-check','writer_protection':owners.get(i)==79 or owners.get(i) is None,'pending_native79_observed_carrier':owners.get(i) is None} for i in union]}
(out/'old-current-alias-cones.json').write_text(json.dumps(report,indent=2)+'\n')
print('union',len(union),'batches',sorted({owners[i] for i in union if i in owners}));print('79 consumers',[i for i in union if owners.get(i)==79])
