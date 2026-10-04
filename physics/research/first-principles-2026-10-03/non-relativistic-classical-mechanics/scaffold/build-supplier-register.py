from pathlib import Path
import yaml,json,hashlib,csv,re
root=Path.cwd(); out=Path(__file__).resolve().parent
groups={
'CM10,17/M8 integral definitions': ['def-measure','def-nonnegative-lebesgue-integral','def-integrable-real-and-complex-functions-and-their-integrals','thm-linearity-of-the-lebesgue-integral-on-l-one'],
'CM01–03/M1,M2': ['def-euclidean-inner-product','def-cross-product-in-r3','def-total-derivative-in-euclidean-space','def-jacobian-matrix-and-gradient','thm-chain-rule-for-total-derivatives'],
'CM01,06,07,10,12–14/M3,M6': ['def-smooth-manifold','def-derivation-at-a-point-and-tangent-space','def-tangent-bundle-as-a-disjoint-union','thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure','def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union','thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure','thm-a-regular-level-set-is-an-embedded-submanifold','lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple','thm-lagrange-multipliers-for-regular-level-set-constraints','def-countable-choice'],
'CM02,04,09,11,16/M7,M10': ['def-first-order-ode-initial-value-problem-and-solution','def-locally-lipschitz-in-the-state-variable','thm-picard-lindelof-local-existence-and-uniqueness','thm-gronwall-integral-inequality','thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves','cor-second-order-taylor-expansion-with-the-hessian'],
'CM07,08,12/M3–M5': ['def-lagrangian-action-functional-on-curves','thm-integration-by-parts','thm-differentiation-under-the-integral-sign-on-a-compact-rectangle','thm-euler-lagrange-equations','def-fibre-derivative-and-legendre-transform-of-a-lagrangian','def-regular-and-hyperregular-lagrangian','thm-euclidean-inverse-function-theorem','def-energy-and-hamiltonian-of-a-hyperregular-lagrangian','thm-equivalence-of-euler-lagrange-and-hamilton-equations-for-hyperregular-lagrangians'],
'CM09–11/M7,M8': ['cor-real-spectral-theorem-for-self-adjoint-endomorphisms'],
'CM08,12–14,16': ['def-symplectic-form-and-symplectic-manifold','thm-the-canonical-cotangent-two-form-is-symplectic','def-hamiltonian-vector-field-and-hamiltonian-function','thm-hamilton-equations-in-canonical-cotangent-coordinates','def-poisson-bracket-on-a-symplectic-manifold','thm-poisson-bracket-satisfies-the-jacobi-identity','thm-hamiltonian-flows-preserve-the-symplectic-form','prop-time-dependent-hamiltonian-evolution-is-symplectic','thm-liouville-volume-preservation','cor-hamiltonian-flow-has-zero-divergence-with-respect-to-symplectic-volume','thm-noether-conservation-law-for-hamiltonian-actions','thm-liouville-arnold-action-angle-theorem']}
seeds={i:c for c,ids in groups.items() for i in ids}
pin={e['path']:e['sha256'] for e in json.loads((root/'physics/research/math-imports.json').read_text())['files']}
seen={};pending=list(seeds)
while pending:
 i=pending.pop()
 if i in seen:continue
 p=root/'items'/f'{i}.md'
 if not p.exists():raise RuntimeError(i)
 raw=p.read_text(); meta=yaml.safe_load(raw.split('---',2)[1]); body=raw.split('---',2)[2]
 deps=meta.get('deps') or []
 statements=[]
 for section in re.split(r'(?m)^## ',body)[1:]:
  if section.split('\n',1)[0] in ('Statement','Definition'):statements.append(section.split('\n',1)[1].strip())
 rel=f'items/{i}.md'; snap=root/'physics'/rel
 original=hashlib.sha256(p.read_bytes()).hexdigest(); snapshot=hashlib.sha256(snap.read_bytes()).hexdigest() if snap.exists() else None
 seen[i]={'id':i,'path':rel,'status':meta.get('status','draft'),'statement_definition':'\n\n'.join(statements),'deps':deps,'review':'direct-complete-statement-and-argument-read' if i in seeds else 'inherited-not-independently-reaudited','consumer':seeds.get(i,'inherited prerequisite of direct interface'),'pinned_match':pin.get(rel)==original==snapshot,'sha256':original}
 pending+=deps
with (out/'published-supplier-register.tsv').open('w') as f:
 w=csv.DictWriter(f,fieldnames=list(next(iter(seen.values()))),delimiter='\t');w.writeheader();w.writerows(seen.values())
summary={'direct_reviewed':len(seeds),'transitive_registered':len(seen),'all_published':all(x['status']=='published' for x in seen.values()),'all_pinned_match':all(x['pinned_match'] for x in seen.values()),'direct_proof_reading':'Prior 47-direct-interface reading baseline retained; current relevant inspections in expansion-supplier-review.json; inherited nodes registered, not blanket reaudited.','not_an_engine_receipt':True}
(out/'supplier-check-summary.json').write_text(json.dumps(summary,indent=2)+'\n');print(json.dumps(summary))
