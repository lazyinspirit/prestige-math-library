#!/usr/bin/env python3
"""Research-only proposed plan projection. Never writes shared registries/carriers."""
from pathlib import Path
import re,json,hashlib,yaml
ROOT=Path(__file__).resolve().parents[3]
BASE=ROOT/'research/inverse-problems-planning-2026-10-18'
PROSE=ROOT/'research/plan-inverse-problems-track.md'
def sha(p): return hashlib.sha256(p.read_bytes()).hexdigest()
def fm(p):
 try: return yaml.safe_load(re.split(r'^---\s*$',p.read_text(),maxsplit=2,flags=re.M)[1])
 except Exception as e: raise ValueError(str(p)) from e
old=json.loads((BASE/'proposed-registration-delta.json').read_text())
oldrows={x['id']:x for x in old['page_rows']}
oldpairs={x['a_page'] if isinstance(x['a_page'],str) else x['a_page']['id']:x for x in old['pair_projection']}
plan=json.loads((ROOT/'research/plan-spec.json').read_text()); existing={x['id']:x for x in plan['pages']}
# Exact current carrier homes, read only. Existing plan's inventory does not establish status.
homes={}
for page in plan['pages']:
 for item in page.get('items',[]):
  iid=item if isinstance(item,str) else item['id'];homes.setdefault(iid,page['id'])
# Exact named imports per pair, in addition to explicit backticked carrier IDs in prose.
E={
1:'def-hilbert-space thm-cauchy-schwarz-in-an-inner-product-space',
2:'thm-singular-value-decomposition-for-compact-operators lem-kernel-range-orthogonality-for-hilbert-adjoints thm-orthogonal-decomposition-by-a-closed-subspace',
3:'lem-real-complex-hilbert-source-powers-and-tikhonov-filter-bounds',
4:'thm-tikhonov-error-chain-with-discretization-and-residual',
5:'thm-morozov-discrepancy-choice-converges',
6:'def-compact-spectral-filter-and-qualification',
7:'def-statistical-experiment def-negative-sobolev-space-for-white-noise lem-white-noise-is-borel-gaussian-on-negative-sobolev-space',
8:'def-standard-normal-and-normal-laws thm-fourier-basis-and-parseval-on-the-n-torus lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution',9:'thm-two-point-le-cam-risk-bound thm-assouad-hypercube',
10:'thm-two-point-le-cam-risk-bound',11:'def-compact-spectral-filter-and-qualification',
12:'thm-finite-gaussian-process-posterior-and-predictive-laws thm-riesz-representation-for-hilbert-space',
13:'alg-expectation-maximization thm-em-observed-log-likelihood-is-nondecreasing',14:'def-loss-function-and-risk',
15:'def-borel-gaussian-random-element-on-a-separable-banach-space thm-fernique-integrability-for-separable-banach-gaussian-law thm-support-of-banach-gaussian-is-closure-of-rkhs',
16:'def-bayesian-model-as-prior-and-sampling-kernel thm-bayes-formula-for-dominated-kernels thm-disintegration-of-a-joint-law-on-standard-borel-spaces',
17:'def-hellinger-distance-for-dominated-laws thm-hellinger-tv-comparison-under-library-convention',
18:'thm-finite-gaussian-process-posterior-and-predictive-laws thm-moore-penrose-pseudoinverse-exists-and-is-unique',
19:'thm-cameron-martin-translation-for-separable-banach-gaussian-law lem-banach-gaussian-rkhs-unit-ball-is-compact thm-fernique-integrability-for-separable-banach-gaussian-law',
20:'thm-finite-gaussian-process-posterior-and-predictive-laws',
21:'thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails',
22:'def-general-state-reversibility-by-symmetric-flow-measure thm-general-state-reversibility-implies-invariance',
23:'def-total-variation-distance-for-probability-laws',24:'thm-disintegration-of-a-joint-law-on-standard-borel-spaces',
25:'def-hilbert-space-adjoint',
26:'lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence thm-hilbert-spaces-are-reflexive-by-riesz-representation cor-weak-convergence-implies-lower-semicontinuity-of-the-norm',
27:'def-proper-closed-convex-function-on-rn',28:'def-hilbert-space-adjoint',
29:'alg-safeguarded-levenberg-marquardt thm-irlgnm-local-source-condition-discrepancy-convergence',
30:'thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems',
31:'def-tempered-distribution',32:'def-proximal-mapping',33:'lem-prox-l1-is-soft-thresholding',
34:'alg-pdhg-primal-dual-hybrid-gradient',35:'def-hilbert-space-adjoint',
36:'def-fourier-transform-of-a-tempered-distribution thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms',
37:'thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions',
38:'def-hilbert-space',39:'thm-compactly-supported-distributions-are-tempered',
40:'thm-energy-continuous-dependence-for-the-forced-wave-equation thm-sobolev-gauss-green-formula-on-c-one-domains',
41:'thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems thm-lp-trace-operator-on-a-bounded-c-one-domain',
42:'thm-sobolev-gauss-green-formula-on-c-one-domains',43:'def-volume-integral-scattering-model lem-outgoing-helmholtz-kernel-is-a-fundamental-solution thm-volume-integral-scattering-fredholm-stability',
44:'def-hilbert-space-adjoint',45:'thm-lp-trace-operator-on-a-bounded-c-one-domain',
46:'def-loss-function-and-risk thm-conditional-integration-through-a-regular-conditional-law',
47:'thm-singular-value-decomposition-for-compact-operators',
48:'alg-landweber-iteration-with-discrepancy-stopping',49:'def-proximal-mapping lem-l-smoothness-descent-inequality',50:'def-standard-normal-and-normal-laws',51:'def-loss-function-and-risk',52:'def-loss-function-and-risk',
53:'thm-singular-value-decomposition thm-moore-penrose-pseudoinverse-exists-and-is-unique thm-orthogonal-decomposition-by-a-closed-subspace',
54:'def-kullback-leibler-divergence thm-disintegration-of-a-joint-law-on-standard-borel-spaces thm-finite-gaussian-process-posterior-and-predictive-laws',
55:'thm-singular-value-decomposition thm-moore-penrose-pseudoinverse-exists-and-is-unique'
}
# New stable pairs preserve all old IDs. Proposed relative placement is after original 52.
P={53:[1,2],54:[12,16,18,23],55:[1,2,4,14,25]}
text=PROSE.read_text();parts=[]
for m in re.finditer(r'^### IP-(\d+) — ([^\n]+)\n(.*?)(?=^<a id=|^### IP-\d+ —|^## |\Z)',text,re.M|re.S):
 n=int(m[1]);body=m[0].strip(); pages=re.search(r'\*\*Pages:\*\* `([^`]+)` /\s*`([^`]+)`',body);assert pages,n
 inv=re.search(r'\*\*A items:\*\* (.*?)\.\n',body,re.S);assert inv,n
 ids=re.findall(r'`((?:def|lem|thm|cor|prop|alg|op|rem)-ip-[^`]+)`',inv[1]); assert len(ids)==len(set(ids)),n
 if n<53:
  r=oldrows[pages[1]]; req=list(r['requires']); prior=[int(x[-2:]) for x in r.get('requires_pair_ids',oldpairs[pages[1]].get('requires_pair_ids',[]))]
  if n==41:req=[x for x in req if x!='analytic-double-fibration-and-bolker-visibility'];prior=[x for x in prior if x!=39]
 else:req=[];prior=P[n]
 ext=set(E.get(n,'').split())
 ext.update(i for i in re.findall(r'`((?:def|lem|thm|cor|prop|alg|op|rem)-[a-z0-9-]+)`',body) if '-ip-' not in i and i!='def-finite-hypothesis-testing-beta')
 parts.append(dict(n=n,title=m[2],body=body,a=pages[1],b=pages[2],ids=ids,requires=req,prior=prior,external=sorted(ext)))
assert len(parts)==55
by={p['n']:p for p in parts}
# Reuse current registry exact home; fallback reads exact current page lists for new imports not inventoried in plan.
suppliers={}
for p in parts:
 for iid in p['external']:
  f=ROOT/'items'/f'{iid}.md';assert f.exists(),iid
  d=fm(f);assert d['status']=='published',(iid,d.get('status'))
  home=homes.get(iid)
  if not home:
   for lp in (ROOT/'library').glob('*/*.md'):
    if iid in lp.read_text():
     ld=fm(lp)
     if iid in ld.get('items',[]):home=ld['page'];break
  assert home,(iid,'missing home')
  page=existing.get(home)
  assert page,home
  paths=list((ROOT/'library').glob('*/'+home+'.md'));assert len(paths)==1,home
  assert fm(paths[0]).get('status')=='published',home
  suppliers[iid]={'id':iid,'path':str(f.relative_to(ROOT)),'page':home,'page_path':str(paths[0].relative_to(ROOT)),'status':'published','raw_sha256':sha(f),'interface_basis':'Current exact carrier; mathematical scope limited to Statement/Definition, with reader/author inspection plus targeted reviewer checks. No re-audit of published numerical frontier.'}
  if home not in p['requires']:p['requires'].append(home)
# Proposed item dependencies: declared conservative page interface imports, definitions, and local proof modules.
# No op/B export is admitted. This is a full proposed design, not an authored manifest.
kind={'def':'definition','lem':'lemma','thm':'theorem','cor':'corollary','prop':'proposition','alg':'algorithm','op':'open-problem','rem':'remark'}
items={}
for p in parts:
 base=list(p['external'])
 for q in p['prior']:
  assert q<p['n'];base.extend(x for x in by[q]['ids'] if not x.startswith(('op-','rem-')))
  if by[q]['a'] not in p['requires']:p['requires'].append(by[q]['a'])
 defs=[x for x in p['ids'] if x.startswith('def-')]
 previous=[]
 for iid in p['ids']:
  local=defs[:defs.index(iid)] if iid in defs else defs+previous
  deps=list(dict.fromkeys(base+[x for x in local if x!=iid and not x.startswith(('op-','rem-'))]))
  items[iid]={'id':iid,'kind':kind[iid.split('-')[0]],'page':p['a'],'pair':f"IP-{p['n']:02d}",'deps':deps,'status':'proposed-unbuilt','dependency_status':'candidate-overapproximation-for-author-refinement-not-authored-or-minimal','contract':'See full pair projection and audit prerequisite contracts; definition/proof design only.','contract_pointer':f'research/plan-inverse-problems-track.md#ip-{p["n"]:02d}'}
  if not iid.startswith(('def-','op-','rem-')):previous.append(iid)
# Candidate overapproximation does not impose Hilbert premises on metric-space IP01.
for iid in by[1]['ids']:
 items[iid]['deps']=[x for x in items[iid]['deps'] if x not in by[1]['external']]
# Replace local portion for packages whose conceptual order differs from inventory order.
def local(i,*ds):
 assert i in items,i
 row=items[i]; row['deps']=[x for x in row['deps'] if x not in by[int(row['pair'][-2:])]['ids']]+list(ds)
# Explicit inverse-PDE and geometry chains; all external/cross-pair assumptions remain visible.
local('def-ip-unbounded-hilbert-moore-penrose-inverse','def-ip-compact-linear-inverse-model')
local('def-ip-compact-linear-inverse-model')
local('lem-ip-gaussian-shift-small-ball-ratio')
local('def-ip-small-ball-map-estimator')
local('lem-ip-banach-fenchel-duality-for-regularization','def-ip-banach-convex-subgradient-and-dual-pairing')
local('lem-ip-bv-extension-translation-and-coarea','def-ip-spatial-bv-and-distributional-tv','def-ip-boundary-tv-conventions')
local('lem-ip-finite-perimeter-relative-isoperimetry','def-ip-spatial-bv-and-distributional-tv','def-ip-boundary-tv-conventions','lem-ip-bv-extension-translation-and-coarea')
local('lem-ip-bv-compactness-lower-semicontinuity','def-ip-spatial-bv-and-distributional-tv','lem-ip-bv-extension-translation-and-coarea')
local('lem-ip-tv-dual-attainment-and-certificate-limit','def-ip-tv-dual-source-certificate')
local('lem-ip-tv-level-set-uniform-density-and-hausdorff','def-ip-tv-dual-source-certificate','lem-ip-tv-dual-attainment-and-certificate-limit')
local('lem-ip-robust-nsp-block-tail-estimate','def-ip-robust-nullspace-property')
local('lem-ip-surface-geodesic-flow-index-form-and-transport','def-ip-simple-surface-and-geodesic-xray-transform')
local('def-ip-distributions-conormal-kernels-and-cotangent-relation')
local('def-ip-analytic-double-fibration-transform','def-ip-distributions-conormal-kernels-and-cotangent-relation')
local('def-ip-bolker-condition','def-ip-analytic-double-fibration-transform')
local('def-ip-analytic-wavefront-fbi-transform','def-ip-distributions-conormal-kernels-and-cotangent-relation')
local('lem-ip-analytic-cutoff-sequence-and-fbi-invariance','def-ip-analytic-wavefront-fbi-transform')
local('lem-ip-holomorphic-morse-normalization-and-gaussian-contour')
local('lem-ip-double-fibration-conormal-kernel','def-ip-analytic-double-fibration-transform','def-ip-distributions-conormal-kernels-and-cotangent-relation')
local('lem-ip-bolker-geometric-criteria','def-ip-bolker-condition','lem-ip-double-fibration-conormal-kernel')
local('thm-ip-analytic-stationary-phase-with-exponential-remainder','lem-ip-analytic-cutoff-sequence-and-fbi-invariance','lem-ip-holomorphic-morse-normalization-and-gaussian-contour')
local('thm-ip-analytic-wavefront-recovery-under-bolker','lem-ip-double-fibration-conormal-kernel','lem-ip-bolker-geometric-criteria','thm-ip-analytic-stationary-phase-with-exponential-remainder','lem-ip-analytic-cutoff-sequence-and-fbi-invariance')
local('lem-ip-one-sided-analytic-support-continuation','lem-ip-analytic-cutoff-sequence-and-fbi-invariance')
local('thm-ip-local-support-from-one-sided-vanishing','thm-ip-analytic-wavefront-recovery-under-bolker','lem-ip-one-sided-analytic-support-continuation')
local('lem-ip-riemannian-green-boundary-traces-and-wave-lifting')
local('lem-ip-simple-geodesic-polar-extension')
local('lem-ip-borel-jet-realization-and-beam-patching')
local('thm-ip-variable-metric-wave-ibvp-energy-wellposedness','lem-ip-riemannian-green-boundary-traces-and-wave-lifting')
local('lem-ip-variable-metric-domain-of-dependence','thm-ip-variable-metric-wave-ibvp-energy-wellposedness')
local('def-ip-hyperbolic-dirichlet-to-neumann-map','thm-ip-variable-metric-wave-ibvp-energy-wellposedness')
local('lem-ip-wave-alessandrini-identity','def-ip-hyperbolic-dirichlet-to-neumann-map','lem-ip-riemannian-green-boundary-traces-and-wave-lifting')
local('lem-ip-simple-geometry-global-eikonal-geometric-optics','lem-ip-simple-geodesic-polar-extension','thm-ip-variable-metric-wave-ibvp-energy-wellposedness')
local('lem-ip-gaussian-beam-null-bicharacteristic','lem-ip-borel-jet-realization-and-beam-patching','thm-ip-variable-metric-wave-ibvp-energy-wellposedness')
local('lem-ip-smooth-manifold-elliptic-nonresonant-regularity')
local('def-ip-conductivity-dirichlet-to-neumann-map','lem-ip-smooth-manifold-elliptic-nonresonant-regularity')
local('lem-ip-boundary-quasimode-jets-and-borel-correction','lem-ip-smooth-manifold-elliptic-nonresonant-regularity')
local('lem-ip-conductivity-liouville-transform-and-dn-conjugacy','def-ip-conductivity-dirichlet-to-neumann-map')
local('lem-ip-alessandrini-identity','def-ip-conductivity-dirichlet-to-neumann-map','lem-ip-smooth-manifold-elliptic-nonresonant-regularity')
local('lem-ip-limiting-carleman-estimate-on-product','lem-ip-smooth-manifold-elliptic-nonresonant-regularity')
local('thm-ip-cgo-solvability-and-remainder-bound','lem-ip-limiting-carleman-estimate-on-product')
local('thm-ip-boundary-determination-of-scalar-conductivity','lem-ip-boundary-quasimode-jets-and-borel-correction','def-ip-conductivity-dirichlet-to-neumann-map')
local('lem-ip-cubic-dn-small-data-differentiability','lem-ip-smooth-manifold-elliptic-nonresonant-regularity')
local('thm-ip-transversely-anisotropic-calderon-uniqueness','lem-ip-alessandrini-identity','thm-ip-cgo-solvability-and-remainder-bound','lem-ip-conductivity-liouville-transform-and-dn-conjugacy','thm-ip-boundary-determination-of-scalar-conductivity')
local('thm-ip-semilinear-cubic-dn-identification','lem-ip-cubic-dn-small-data-differentiability','thm-ip-cgo-solvability-and-remainder-bound')
local('def-ip-calderon-admissible-conductivity-class')
local('lem-ip-bv-translation-modulus-for-conductivity','def-ip-calderon-admissible-conductivity-class')
local('lem-ip-planar-beltrami-dbar-logarithmic-stability','def-ip-calderon-admissible-conductivity-class','lem-ip-bv-translation-modulus-for-conductivity')
local('lem-ip-higher-dimensional-cgo-fourier-logarithmic-stability','def-ip-calderon-admissible-conductivity-class')
local('lem-ip-boundary-spectral-counting-and-sobolev-scale')
local('def-ip-mean-zero-ntd-and-smoothed-kernel-observation','lem-ip-boundary-spectral-counting-and-sobolev-scale')
local('def-ip-generalized-fourier-neural-operator')
local('lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound','def-ip-mean-zero-ntd-and-smoothed-kernel-observation')
local('lem-ip-eit-forward-continuity-and-class-compactness','lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound')
local('thm-ip-hilbert-map-extension-with-concave-modulus')
local('lem-ip-boundary-chart-lifting-and-fourier-projection')
local('thm-ip-generalized-fno-uniform-approximation-on-compact-sets','def-ip-generalized-fourier-neural-operator','lem-ip-boundary-chart-lifting-and-fourier-projection')
local('lem-ip-stable-extension-of-the-eit-inverse-map','thm-ip-hilbert-map-extension-with-concave-modulus','lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound')
local('thm-ip-eit-fno-noise-robust-existence','lem-ip-stable-extension-of-the-eit-inverse-map','lem-ip-eit-forward-continuity-and-class-compactness','thm-ip-generalized-fno-uniform-approximation-on-compact-sets')
local('lem-ip-tweedie-mmse-jacobian-and-prox-potential','def-ip-pnp-ista-with-denoiser')
local('def-ip-pnp-ista-with-denoiser')
local('lem-ip-conditional-score-and-tweedie-identities','def-ip-diffusion-prior-score-and-measurement-score')
local('def-ip-diffusion-prior-score-and-measurement-score')
# Full dependency closure checks for the proposed design only (not tests/gates).
levels={};active=set()
def level(i):
 if i in levels:return levels[i]
 assert i not in active,('cycle',i);active.add(i)
 row=items[i]
 for dep in row['deps']:
  assert dep in items or dep in suppliers,(i,dep)
  assert not dep.startswith('op-'),(i,'open supplier',dep)
 z=[level(d) for d in row['deps'] if d in items]
 active.remove(i);levels[i]=0 if not z else max(z)+1;return levels[i]
for i in items:items[i]['dependency_level']=level(i)
# B leaves: explicit bundle IDs prevent implied reusable exports; heat is its own additional example.
for p in parts:
 iid=f"ex-ip-{p['n']:02d}-scope-and-boundary-cases"
 deps=[x for x in p['ids'] if not x.startswith(('op-','rem-'))]
 items[iid]={'id':iid,'kind':'example','page':p['b'],'pair':f"IP-{p['n']:02d}",'deps':deps,'status':'proposed-unbuilt','dependency_level':1+max((levels[x] for x in deps),default=-1),'contract':'Work every B-leaf case in the pair design; split into smaller leaf items at actual authoring if needed.','leaf':True}
 if p['n']==8:
  iid='ex-ip-deconvolution-and-backward-heat-spectral-budgets';items[iid]={'id':iid,'kind':'example','page':p['b'],'pair':'IP-08','deps':deps+['thm-fourier-basis-and-parseval-on-the-n-torus','lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution'],'status':'proposed-unbuilt','dependency_level':1+max(levels[x] for x in deps),'contract':text.split('### Explicit severely ill-posed imaging demonstrations')[1],'leaf':True}
# Schema-ready rows have empty inventories because no carrier exists; detailed proposals remain separate.
rows=[];pairs=[];start=max(x['order'] for x in plan['pages'])+1
for p in parts:
 for k,pid,comp in [('A',p['a'],p['b']),('B',p['b'],p['a'])]:
  req=p['requires'] if k=='A' else [p['a']]
  rows.append({'id':pid,'title':p['title']+(' — Examples and Counterexamples' if k=='B' else ''),'kind':k,'category':'inverse-problems','label':f"IP-{p['n']:02d}-{k}",'companion':comp,'description':('Design and prove the stated contracts. ' if k=='A' else 'Work the explicit examples and boundary cases as leaves. ')+p['title']+'.','scaffold':'research/plan-inverse-problems-track.md','requires':list(dict.fromkeys(req)),'order':start+len(rows),'items':[]})
 pairs.append({'pair':f"IP-{p['n']:02d}",'heading':p['title'],'a_page':p['a'],'b_page':p['b'],'requires_pair_ids':[f'IP-{x:02d}' for x in p['prior']],'proposed_item_ids':[x for x,v in items.items() if v['pair']==f"IP-{p['n']:02d}"],'complete_prose':p['body']})
# Every direct item supplier has its home explicitly represented as a page prerequisite.
for row in rows:
 for item in (v for v in items.values() if v['page']==row['id']):
  for dep in item['deps']:
   h=items[dep]['page'] if dep in items else suppliers[dep]['page']
   if h!=row['id'] and h not in row['requires']:row['requires'].append(h)
assert len({x['id'] for x in rows})==110
assert len(items)==len(set(items))
# Validate resolution and page-order direction of every proposed supplier edge.
pageorders={**{x['id']:x['order'] for x in plan['pages']},**{x['id']:x['order'] for x in rows}}
for row in rows:
 for dep in row['requires']:assert dep in pageorders and pageorders[dep]<row['order'],(row['id'],dep)
for i,r in items.items():
 for dep in r['deps']:
  h=items[dep]['page'] if dep in items else suppliers[dep]['page']
  if h!=r['page']:assert pageorders[h]<pageorders[r['page']],(i,dep)
category=old['category_registration'];category.update(page_count=110,pair_count=55)
category['pathway_parts'].append({'part':7,'title':'Phaseless data, information design, and dynamical identification','pairs':['IP-53','IP-54','IP-55']}) if len(category['pathway_parts'])==6 else None
for pp in category['pathway_parts']:
 pp['pages']=[by[int(x[-2:])]['a'] for x in pp['pairs']]
 pp['brief']='Follow the named pairs in order; all logical suppliers occur in this or an earlier part. Preserve the exact data model, admissible class, noise convention and proof limitations stated by each design.'
delta={'schema':'inverse-problems-proposed-registration-delta/v2','status':'Audit-repaired research-only proposal; unbuilt. Root must splice/rebase orders serially; no authored-carrier or proof acceptance.','source_scaffold':str(PROSE.relative_to(ROOT)),'source_sha256':sha(PROSE),'prerequisite_contracts_prose':text.split('## Audit-added prerequisite contracts and proof architecture')[1].split('## Planning integrity')[0],'order_base_snapshot':{'next_order':start,'plan_raw_sha256':sha(ROOT/'research/plan-spec.json'),'instruction':'Rebase these consecutive proposed orders after prior authorized scaffold splices, preserving relative order and all requires.'},'category_registration':category,'page_rows':rows,'pair_projection':pairs,'proposed_items':list(items.values()),'published_suppliers':list(suppliers.values()),'dependency_projection_notes':['All new canonical page items arrays intentionally empty until actual authoring. Full proposed IDs/deps are separate, not claims of existing carriers.','Declared conservative imports include the non-open interfaces of each logical prerequisite pair; local modules have explicit acyclic edges. These are candidate overapproximations for future author refinement, not actual authored or minimal dependency claims; candidate imports add no unstated hypotheses.','No B/example or open-problem supplier is used. Every op proposal owes formulation-specific dated status review.','Established but unauthored advanced foundations remain blocked-until-authored dependencies, not external proof fallbacks.'],'source_reports':[{'reader':n,'markdown':f'research/inverse-problems-planning-2026-10-18/sources/reader-{n}.md','json':f'research/inverse-problems-planning-2026-10-18/sources/reader-{n}.json'} for n in range(1,7)],'source_coverage':old['source_coverage'],'counts':{'pairs':55,'pages':110,'A_item_proposals':sum(not x['page'].endswith('-examples') for x in items.values()),'B_item_proposals':sum(x['page'].endswith('-examples') for x in items.values()),'open_problem_proposals':sum(x['kind']=='open-problem' for x in items.values()),'published_suppliers':len(suppliers),'proposed_item_dependency_edges':sum(len(x['deps']) for x in items.values()),'pair_dependency_edges':sum(len(p['prior']) for p in parts)}}
(BASE/'proposed-registration-delta.json').write_text(json.dumps(delta,ensure_ascii=False,indent=2)+'\n')
(BASE/'audit/proposed-item-dependencies.json').write_text(json.dumps({'schema':'inverse-item-dependency-design/v1','source_sha256':sha(PROSE),'note':delta['dependency_projection_notes'],'items':list(items.values()),'published_suppliers':list(suppliers.values())},ensure_ascii=False,indent=2)+'\n')
(BASE/'audit/structural-verification.json').write_text(json.dumps({'date':'2026-10-18','scope':'Research-only proposed inverse graph','counts':delta['counts'],'checks':['all55pair IDs and110page IDs unique','every row has exact canonical id/title/kind/category/label/companion/description/scaffold/requires/order/items fields','all existing selected suppliers present/published with exact home/path/hash','proposed item graph resolved/acyclic; every new item level computed','no open/B supplier targets; all cross-page imports earlier','all requires resolve to current or proposed pages; consecutive rebasable order'],'not_claimed':['tests','engine checks','mathematical acceptance','complete independent full-text rereading']},ensure_ascii=False,indent=2)+'\n')
print(json.dumps(delta['counts']))
