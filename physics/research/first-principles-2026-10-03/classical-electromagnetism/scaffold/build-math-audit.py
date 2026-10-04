import json,re,hashlib
from pathlib import Path
root=Path.cwd(); out=Path(__file__).parent
inspected='''def-ck-euclidean-maps-and-diffeomorphisms def-cross-product-in-r3 def-euclidean-inner-product def-jacobian-matrix-and-gradient def-laplacian-of-a-c2-function def-divergence-and-curl-of-a-c1-vector-field cor-the-curl-of-a-curl-of-a-c2-field lem-the-divergence-and-curl-of-a-cross-product thm-the-divergence-of-a-curl-vanishes thm-the-curl-of-a-gradient-vanishes thm-divergence-theorem-for-bounded-piecewise-c-one-domains cor-classical-three-dimensional-stokes-theorem thm-the-classical-stokes-theorem-for-a-c2-surface-patch thm-poincare-lemma-for-star-shaped-domains thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential def-distribution def-distributional-derivative def-dirac-delta-and-its-derivatives def-regular-distribution-from-a-locally-integrable-function def-test-function-space-d-of-an-open-set def-bounded-piecewise-c-one-euclidean-domain def-bounded-c-one-domain-boundary-charts-and-outward-normal cor-first-green-identity-on-a-bounded-c-one-domain cor-second-green-identity-on-a-bounded-c-one-domain thm-differentiation-under-the-integral-sign-on-a-compact-rectangle thm-minus-laplacian-of-the-fundamental-solution-is-dirac thm-newtonian-potential-solves-poisson-distributionally cor-classical-dirichlet-and-poisson-problems-are-unique cor-neumann-solutions-are-unique-modulo-componentwise-constants lem-neumann-compatibility-from-the-divergence-theorem thm-distributional-differentiation-is-continuous-and-commutes thm-decay-of-the-newtonian-potential-of-compactly-supported-data thm-chain-rule-for-total-derivatives thm-algebra-of-total-derivatives thm-algebra-of-derivatives thm-clairaut-schwarz-mixed-partials def-scalar-and-vector-line-integrals-along-piecewise-c1-paths def-oriented-unit-normal-and-flux-of-a-surface-patch def-vector-potential-of-a-c1-vector-field def-star-shaped-open-subset-of-rn def-countable-choice'''.split()
partial=['thm-newtonian-potential-for-holder-data-is-classical']
imports={r['path']:r['sha256'] for r in json.load(open(root/'physics/research/math-imports.json'))['files']}
def section(s,name):
 m=re.search(r'^## '+name+r'\s*\n(.*?)(?=^## |\Z)',s,re.M|re.S)
 return m.group(1).strip() if m else None
def deps(s):
 fm=s.split('---')[1]
 # dependency arrays or YAML block lists, restricted to canonical id strings
 m=re.search(r'^deps:\s*(\[[^\]]*\]|\n(?:  -[^\n]*\n)+)',fm,re.M)
 return re.findall(r'\b(?:def|lem|thm|prop|cor|ex|cex|rem|fs)-[a-z0-9-]+',m.group(1)) if m else []
seen={}; missing=[]
def walk(id):
 if id in seen:return
 p=root/'items'/f'{id}.md'
 if not p.exists():missing.append(id);return
 s=p.read_text(); status=re.search(r'^status:\s*([a-z-]+)',s,re.M)
 d=deps(s); raw=hashlib.sha256(p.read_bytes()).hexdigest(); rel='items/'+p.name
 ip=root/'physics'/rel
 seen[id]=dict(id=id,canonical_path=str(p.relative_to(root)),physics_snapshot_path=str(ip.relative_to(root)) if ip.exists() else None,status=status.group(1) if status else 'not-declared',pinned_import=rel in imports,canonical_matches_pin=raw==imports.get(rel),snapshot_matches_pin=ip.exists() and hashlib.sha256(ip.read_bytes()).hexdigest()==imports.get(rel),read_statement=id in inspected or id in partial,read_proof=id in inspected and section(s,'Proof') is not None,read_definition=id in inspected and section(s,'Definition') is not None,reading_scope='Full Statement/Definition, Facts and complete proof inspected in this design session' if id in inspected else 'Statement and portions of proof inspected only; do not consume before full audit' if id in partial else 'Exact transitive published candidate identified from dependency arrays; statement/proof not read in this session',exact_public_claim=section(s,'Statement') or section(s,'Definition'),deps=d,suitability='Direct interface considered with restrictions in mathematics-audit.md; no independent audit or full transitive closure claimed' if id in inspected else 'OPEN inspection obligation; publication alone is insufficient',use='Direct mathematical vocabulary/calculus/kernel/boundary supplier' if id in inspected else 'Transitive dependency of direct candidate; exact mathematical use must be checked in parent proof',has_proof=section(s,'Proof') is not None)
 for x in d:walk(x)
design=json.load(open(out/'proposed-inventory.json'))
local={r['id'] for r in design['items']}|{r['id'] for pg in design['mathematical_pages'] for r in pg['A_inventory']+pg['B_inventory']}
extra={x for r in design['items']+[r for pg in design['mathematical_pages'] for r in pg['A_inventory']+pg['B_inventory']] for x in r['deps'] if x not in local}
extra.update(['lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound','thm-derivative-of-exponential','thm-picard-lindelof-local-existence-and-uniqueness','thm-euclidean-inverse-function-theorem','thm-fourier-inversion-on-schwartz-space','thm-l-two-fourier-inversion'])
for id in inspected+partial+sorted(extra):walk(id)
for id in extra:
 if id in seen:
  seen[id]['use']='Direct prerequisite of named physical/local-mathematical design item; exact role from proposed-inventory.json, or additional candidate named in mathematics-audit.md'
  if id not in inspected and id not in partial:seen[id]['suitability']='OPEN direct statement/proof inspection, not eligible merely from publication'

json.dump(dict(design_only=True,direct_fully_read=inspected,partial_read=partial,all_candidate_records=list(seen.values()),missing_targets=sorted(set(missing)),transitive_closure_audited=False),open(out/'mathematical-supplier-records.json','w'),indent=2)
print('Fully read direct IDs',len(inspected),'reachable candidates',len(seen),'missing',len(set(missing)),'pin mismatches',sum(not r['canonical_matches_pin'] or not r['snapshot_matches_pin'] for r in seen.values()))
