from pathlib import Path
import json,hashlib
b=Path(__file__).parent
r=[]
def add(id,title,kind,deps,sec,scope,page,side='A',domain='mathematics'):
 r.append(dict(id=id,title=title,domain=domain,kind=kind,deps=deps,roles={d:('physical-assumption' if d.startswith('post-') else 'physical-result' if d.startswith('pthm-') else 'formulation-prerequisite' if d=='def-emg-geometry-units' else 'mathematical-premise') for d in deps},page=page,side=side,proof_module='workers/coupled-pde/proofs.md#'+sec,scope=scope,status='proposed-research',proof_status=('defined' if kind=='definition' else 'source-and-scope' if kind in ['postulate','remark'] else 'complete-conditional-argument'),empirical_premises=[]))
a='EMG-CP01';d='EMG-CP02';f='EMG-CP03';pa='EMG-PCP01';pb='EMG-PCP02'
add('def-emg-electrovacuum-cauchy-system','Electrovacuum tensor Cauchy system','definition',[],'cp00','oriented −+++ smooth manifold; K=+Lnh/2; F∈Λ2Tstar; actual tensor equations',a)
add('def-emg-periodic-high-sobolev-state','Periodic high-Sobolev state spaces','definition',['def-axiom-of-choice','thm-fourier-basis-and-parseval-on-the-n-torus'],'cp00','integer s≥5; torus coefficient completion and derivative variables',a)
add('thm-emg-symmetric-hyperbolic-research-supplier','Exact periodic positive symmetric-hyperbolic supplier','theorem',['def-emg-periodic-high-sobolev-state'],'cp00','exact E0 reuse; smooth coefficients; compact admissible state; L∞Hs∩CHs−1 topology; full proof in mapped GR E0 research supplier',a)
add('lem-emg-maxwell-stress-conservation','Maxwell stress algebra and covariant conservation','lemma',['def-emg-electrovacuum-cauchy-system'],'cp01','tracefree symmetric Q; source sign divTEM=−Fj; sourcefree conservation',a)
add('prop-emg-potential-ricci-wave-identity','Lorenz potential wave contains Ricci coupling','proposition',['def-emg-electrovacuum-cauchy-system'],'cp01','□Ab−∇b divA−Ric_b^cAc; not silently scalar metric waves',a)
add('lem-emg-local-potential-gauge','Local potential homotopy and Lorenz gauge reachability','lemma',['prop-emg-potential-ricci-wave-identity','thm-emg-symmetric-hyperbolic-research-supplier'],'cp01','closed two-form on star-shaped chart; scalar wave for gauge; no global A assertion',a)
add('def-emg-constrained-electrovacuum-data','Constrained electrovacuum initial data','definition',['def-emg-electrovacuum-cauchy-system','def-emg-periodic-high-sobolev-state'],'cp02','h Hs+1 positive, K/e/b Hs; four constraints; smooth manifold analogue',a)
add('thm-emg-gauss-codazzi-maxwell-constraints','Gauss–Codazzi and Maxwell initial constraints','theorem',['def-emg-constrained-electrovacuum-data','lem-emg-maxwell-stress-conservation'],'cp02','Hamiltonian and momentum exact K sign and SI stress; De=Db=0',a)
add('lem-emg-fixed-smooth-background-harmonic-data','Harmonic initial data relative to a fixed smooth background','lemma',['def-emg-constrained-electrovacuum-data'],'cp02','Q spatial connection difference; g0i time derivative=hijQj; repairs finite-regularity background',a)
add('lem-emg-fieldstrength-positive-symmetric-reduction','Positive symmetric Maxwell field-strength reduction','lemma',['def-emg-electrovacuum-cauchy-system'],'cp03','six e/b variables; lapse positive and h positive; block C(xi) skew; only ∂g lower coupling',d)
add('thm-emg-maxwell-gauss-propagation','Maxwell Gauss constraints propagate by form transport','theorem',['lem-emg-fieldstrength-positive-symmetric-reduction'],'cp03','evolution i_n dF=i_n dstarF=0; residual 3forms scalar·i_nvol; homogeneous normal ODE',d)
add('lem-emg-coupled-reduced-einstein-evolution','Coupled reduced Einstein–Maxwell local evolution','lemma',['thm-emg-symmetric-hyperbolic-research-supplier','lem-emg-fieldstrength-positive-symmetric-reduction','lem-emg-fixed-smooth-background-harmonic-data'],'cp04','block-diagonal principal matrices; compact Lorentz and positive inverse-spatial block; derivative constraints',d)
add('thm-emg-einstein-gauge-propagation','Einstein harmonic gauge propagation with Maxwell on shell','theorem',['lem-emg-coupled-reduced-einstein-evolution','thm-emg-maxwell-gauss-propagation','lem-emg-maxwell-stress-conservation','thm-emg-gauss-codazzi-maxwell-constraints'],'cp04','Bianchi gives □H+RicH=0; initial H and normal derivative vanish',d)
add('thm-emg-local-high-sobolev-electrovacuum','Local high-Sobolev and smooth electrovacuum','theorem',['thm-emg-einstein-gauge-propagation'],'cp04','torus s≥5; metric L∞Hs+1∩CHs, first metric/F L∞Hs∩CHs−1; smooth common time',d)
add('prop-emg-local-sobolev-stability-continuation','Gauge Sobolev stability and admissible-state continuation','proposition',['thm-emg-local-high-sobolev-electrovacuum'],'cp04','bounded-set common time; CHs−1 stability; finite Hs + compact admissibility continuation',d)
add('thm-emg-smooth-local-geometric-uniqueness','Smooth local geometric uniqueness and localization','theorem',['thm-emg-local-high-sobolev-electrovacuum','thm-euclidean-inverse-function-theorem'],'cp05','harmonic-map diffeomorphisms; isometry fixes data and carries F; smooth only geometric statement',d)
add('def-emg-strict-charged-barotropic-system','Strict charged barotropic tensor system','definition',['def-emg-electrovacuum-cauchy-system'],'cp06','ε+p>0 0<pprime<1; N exponential; j=cNZ u; Z advected; normalized timelike u',f)
add('lem-emg-charged-fluid-current-conservation','Charged-fluid current and total stress conservation','lemma',['def-emg-strict-charged-barotropic-system','lem-emg-maxwell-stress-conservation'],'cp06','energy equation⇒div(Nu)=0; uZ=0⇒divj=0; force cancellation',f)
add('lem-emg-charged-fluid-positive-symmetric-reduction','Strict charged-fluid symmetric reduction','lemma',['def-emg-strict-charged-barotropic-system'],'cp06','r sound-speed variable; hyperboloid velocity; independent Z transport; Lorentz force algebraic',f)
add('thm-emg-local-charged-barotropic-development','Local charged Einstein–Maxwell–barotropic development','theorem',['lem-emg-charged-fluid-current-conservation','lem-emg-charged-fluid-positive-symmetric-reduction','thm-emg-local-high-sobolev-electrovacuum','thm-emg-smooth-local-geometric-uniqueness'],'cp06','strict interior compatible smooth/highSobolev states; sourced form residual propagation; no shock/vacuum/dust',f)
add('prop-emg-compact-charge-compatibility','Compact no-boundary normal charge compatibility','proposition',['def-emg-strict-charged-barotropic-system'],'cp07','integrated sourced Gauss forces total normal charge zero',f)
add('ex-emg-flat-zero-field-data','Flat zero-field data and Minkowski development','example',['def-emg-electrovacuum-cauchy-system'],'cp07','flat h K=0 F=0 Λ=0 exact solution',a,side='B')
add('ex-emg-nonzero-parallel-field-data','Nonzero parallel fields with compatible expanding initial data','example',['thm-emg-gauss-codazzi-maxwell-constraints','thm-emg-local-high-sobolev-electrovacuum'],'cp07','flat torus K=Hh H²=κ(e²+b²)/(6µ0); no later isotropic assertion',d,side='B')
add('cex-emg-test-field-not-coupled-flat-solution','Nonzero flat test field is not a coupled flat solution','counterexample',['thm-emg-gauss-codazzi-maxwell-constraints'],'cp07','flat h K=0 Λ=0 violates Hamiltonian for nonzero e,b',a,side='B')
add('ex-emg-nontrivial-magnetic-period','Magnetic period obstructs a global potential','example',['lem-emg-local-potential-gauge'],'cp07','uniform b on torus, nonzero 2-cycle period',a,side='B')
add('ex-emg-linear-eos-variables','Explicit subluminal linear EOS variables','example',['lem-emg-charged-fluid-positive-symmetric-reduction'],'cp07','p=wε ε>0 0<w<1; exact N/r functions',f,side='B')
add('cex-emg-uniform-one-sign-torus-charge','Uniform one-sign torus charge violates Gauss','counterexample',['prop-emg-compact-charge-compatibility'],'cp07','no-boundary compact data with nonzero total normal charge impossible',f,side='B')
add('rem-emg-maximal-is-not-complete','Maximal Cauchy development is not completeness','remark',[],'cp05','exact H4 global gluing supplier conditionally available; not newly externally proof-audited here',d,side='B')
add('post-emg-strict-charged-fluid-model','Adopted strict charged barotropic fluid model','postulate',['def-emg-strict-charged-barotropic-system','def-emg-geometry-units'],'cp06','the explicit EOS/current/stress/charge-advection laws; material model adoption additional to vacuum action',pb,domain='physics')
add('pthm-emg-local-electrovacuum-model','Local evolution of the adopted electrovacuum model','physics-theorem',['post-emg-einstein-maxwell-action','def-emg-geometry-units','thm-emg-local-high-sobolev-electrovacuum','thm-emg-smooth-local-geometric-uniqueness'],'cp07','SI adopted action/model; compatible data; highSobolev gauge or smooth geometric uniqueness',pa,domain='physics')
add('pthm-emg-on-shell-electromagnetic-conservation','Electromagnetic conservation in source-free curved spacetime','physics-theorem',['post-emg-einstein-maxwell-action','lem-emg-maxwell-stress-conservation'],'cp07','sourcefree smooth classical sector; no singular self-field',pa,domain='physics')
add('pthm-emg-local-charged-fluid-model','Local evolution of the adopted strict charged-fluid model','physics-theorem',['post-emg-einstein-maxwell-equations','post-emg-strict-charged-fluid-model','thm-emg-local-charged-barotropic-development'],'cp07','equation-based adopted Einstein–Maxwell with strict interior fluid EOS/current/advection; no matter action asserted; empty empirical premises',pb,domain='physics')
add('ex-emg-adopted-parallel-field-model','Adopted parallel-field initial state','example',['pthm-emg-local-electrovacuum-model'],'cp07','CP07 nontrivial compatible electromagnetic data interpreted conditionally',pa,side='B',domain='physics')
add('ex-emg-adopted-linear-eos-model','Adopted subluminal linear EOS sector','example',['pthm-emg-local-charged-fluid-model'],'cp07','p=wε strict interior and compatible constraints; Z=0 neutral sector example',pb,side='B',domain='physics')
add('lem-emg-smooth-geometric-causal-research-suppliers','Exact smooth causal tools for development gluing','lemma',['def-axiom-of-choice'],'cp08','H0–H3 full inspected research arguments: normal/limit/Cauchy/time-separation/flow interfaces',d)
add('thm-emg-sourcefree-smooth-maximal-development','Source-free smooth maximal globally hyperbolic development','theorem',['thm-emg-smooth-local-geometric-uniqueness','lem-emg-smooth-geometric-causal-research-suppliers'],'cp08','connected smooth constrained data; universal smooth GHD extension carrying F; no completeness/rough maximality',d)
add('def-emg-trivial-potential-charged-scalar-system','Trivial-potential classical charged scalar system','definition',['def-emg-electrovacuum-cauchy-system'],'cp09','global real A; complex scalar; classical lambda independent of Planck constant; exact magnetic sector','EMG-CP04')
add('lem-emg-temporal-scalar-positive-symmetric-reduction','Temporal-potential charged-scalar symmetric reduction','lemma',['def-emg-trivial-potential-charged-scalar-system','lem-emg-charged-scalar-variation'],'cp09','independent gauge-covariant pi variables; algebraic commutator Fphi; no derivatives of A in wave source','EMG-CP04')
add('lem-emg-charged-scalar-subsidiary-chain','Charged-scalar derivative, current and gauge subsidiaries','lemma',['lem-emg-temporal-scalar-positive-symmetric-reduction','thm-emg-maxwell-gauss-propagation','lem-emg-charged-scalar-variation'],'cp09','pi=Dphi then magnetic dF then F=dA then divj then sourced Gauss then total stress then H','EMG-CP04')
add('thm-emg-local-classical-charged-scalar-development','Local classical Einstein–Maxwell–charged-scalar development','theorem',['lem-emg-charged-scalar-subsidiary-chain','thm-emg-symmetric-hyperbolic-research-supplier','thm-emg-smooth-local-geometric-uniqueness'],'cp09','highSobolev chosen gauge / smooth geometric+gauge uniqueness; trivial exact-potential sector; arbitrary smooth V compact states','EMG-CP04')
add('ex-emg-zero-scalar-controlled-reduction','Zero scalar with V(0)=0 reduces to electrovacuum','example',['thm-emg-local-classical-charged-scalar-development'],'cp09','phi=pi=0 implies current/scalar stress0; lambda0 neutral sector separate','EMG-CP04',side='B')
add('rem-emg-classical-scalar-bundle-limit','Classical scalar trivial sector and bundle limitation','remark',[],'cp09','arbitrary real lambda only global trivial real-potential branch; nontrivial U1 representation not asserted','EMG-CP04',side='B')
add('pthm-emg-smooth-electrovacuum-maximal-model','Maximal smooth Cauchy development of adopted electrovacuum','physics-theorem',['post-emg-einstein-maxwell-action','thm-emg-sourcefree-smooth-maximal-development'],'cp08','conditional universal smooth GHD model; no geodesic completeness or censorship',pa,domain='physics')
add('post-emg-trivial-classical-charged-scalar-model','Adopted trivial-potential classical charged scalar model','postulate',['def-emg-trivial-potential-charged-scalar-system','lem-emg-charged-scalar-variation','def-emg-geometry-units'],'cp09','adopt explicit Sscalar closure constants K>0 lambda V; exact-potential sector; not quantum','EMG-PCP03',domain='physics')
add('pthm-emg-classical-charged-scalar-model-evolution','Local evolution of the adopted classical charged scalar model','physics-theorem',['post-emg-einstein-maxwell-action','post-emg-trivial-classical-charged-scalar-model','thm-emg-local-classical-charged-scalar-development'],'cp09','compatible smooth or specified highSobolev initial data; scalar/current/stress units and no empirical premises','EMG-PCP03',domain='physics')
add('ex-emg-adopted-zero-classical-scalar','Adopted zero-scalar model sector','example',['pthm-emg-classical-charged-scalar-model-evolution'],'cp09','V0=0 and scalar0 exact electrovacuum reduction in potential sector','EMG-PCP03',side='B',domain='physics')

extmath=['def-axiom-of-choice','thm-fourier-basis-and-parseval-on-the-n-torus','thm-euclidean-inverse-function-theorem','lem-emg-charged-scalar-variation'];extphys=['post-emg-einstein-maxwell-action','post-emg-einstein-maxwell-equations','def-emg-geometry-units']
pages=[dict(page=p,domain='physics' if p.startswith('EMG-PCP') else 'mathematics',A=[x['id'] for x in r if x['page']==p and x['side']=='A'],B=[x['id'] for x in r if x['page']==p and x['side']=='B'],B_leaf=True) for p in [a,d,f,'EMG-CP04',pa,pb,'EMG-PCP03']]
for x in r:
 if x['domain']=='physics':x['physical_scope']=x['scope']
(b/'inventory.json').write_text(json.dumps(dict(records=r,pages=pages,external_mathematics=extmath,external_physics=extphys),indent=2)+'\n')
sources=[]
root='physics/research/first-principles-2026-10-03/'
for file,extent,uses in [
 ('relativity/scaffold/einstein-pde-proofs.md','entire E0–E3 file, all statements and actual arguments',['CP00/CP04 generic local highSobolev proof','CP02/CP04 reduction and gauge subsidiary','CP05 harmonic-map geometric uniqueness','CP06 strict barotropic fluid principal matrices']),
 ('relativity/scaffold/gr-local-proofs.md','G0–G4 fully; G5–G7 not read in this assignment',['CP00 geometry conventions','CP01 curvature/divergence','CP03 volume residual transport']),
 ('relativity/scaffold/global-lorentz-proofs.md','H0–H4 fully; earlier truncated H4 tail recovered by separate read; cited external originals not re-read here',['CP05 causal localization/gluing status only; no new maximal theorem']),
 ('classical-electromagnetism/scaffold/completed-expansion-arguments.md','W1–W4, C1–C2, C5 and W7 entire arguments; other sections not read in this assignment',['CP00 EM sign/SI convention','CP01 full flat algebra rechecked covariantly','CP03/CP04 constrained Cauchy comparison; flat-wave theorem not consumed as variable-metric existence'])]:
 p=Path(root+file);sources.append(dict(path=str(p),sha256=hashlib.sha256(p.read_bytes()).hexdigest(),status='completed-research-argument-not-production-acceptance',reading_extent=extent,consumer_uses=uses,independent_transitive_audit=False))
for id in [x for x in extmath if x!='lem-emg-charged-scalar-variation']:
 p=Path('items')/(id+'.md');txt=p.read_text();sources.append(dict(path=str(p),id=id,status='published' if 'status: published' in txt else 'draft',sha256=hashlib.sha256(p.read_bytes()).hexdigest(),reading_extent='entire current item statement/definition, assumptions and proof (where supplied) read; full transitive dependencies not reread',consumer_uses=['CP00/CP04 mathematical interfaces'],independent_transitive_audit=False))
p=b/'sources/raw/friedrich-rendall.pdf'
sources.append(dict(title='Friedrich and Rendall, The Cauchy Problem for the Einstein Equations, arXiv gr-qc/0002074v1',url='https://arxiv.org/pdf/gr-qc/0002074',raw_path=str(p),sha256=hashlib.sha256(p.read_bytes()).hexdigest(),retrieval='HTTP success via curl; extracted with installed Python3 fitz; 97 PDF pages retained locally ignored',reading_extent='PDF/printed pp10,21–34,83–85 fully displayed/read; targeted full PDE approximation/energy/limit section pp21–33 plus additional p34 context; not whole manuscript',use='source check for constraints, symmetric-hyperbolic approximation architecture, sourcefree F equations and field topology; CP03/CP04 supply actual absent coupled proof',limitations=['p26 formula φε=ε^−nφ(ξ/ε) cannot have asserted norm1/approach identity; use Fourier projections as E0 instead','p29 composition bound as printed is false in general; E0 uses direct integer derivative estimates at s≥5','p30 Alaoglu alone does not give asserted uniform-time weak convergence; E0 gives finite-mode equicontinuity plus Fourier tails','pp83–84 outline Maxwell/Yang–Mills gauge evolution but explicitly omit steps; not a checked complete Einstein–Maxwell proof supplier'],license='No redistribution permission inferred; raw ignored'))
p=b/'sources/raw/sbierski-mghd.pdf'
sources.append(dict(title='Jan Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations',url='https://arxiv.org/pdf/1309.7591',raw_path=str(p),sha256=hashlib.sha256(p.read_bytes()).hexdigest(),retrieval='HTTP success via curl; 25-page PDF and full extracted text locally retained ignored',reading_extent='PDF/printed pp9–24 completely read; main smooth definitions, matter extension, all theorem2.7/2.8 proof steps §§3.1–3.3 including boundary/hyperboloid/Hausdorff/set quotient; introductory pp1–8 and bibliography p25 not read',use='CP08 checked complete external MGHD proof chain with actual (g,F) local theorem replacing vacuum assumption and local second-countability proof replacing p23 cited Geroch theorem',unconsumed='low-regularity introductory claims and unread cited papers; no whole-book reading',license='Raw locally retained ignored; no redistribution permission inferred'))
sources.append(dict(id='lem-emg-charged-scalar-variation',path='physics/research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/geometry-actions/proof-modules.md#GA9',status='completed-concurrent-research-supplier-not-production-acceptance',sha256=hashlib.sha256(Path('physics/research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/geometry-actions/proof-modules.md').read_bytes()).hexdigest(),exact_interface='D=∇−iλA, Sscalar=−Kφ/(2c)(|Dφ|²+V); j=+KφλIm; stress and scalar Euler–Lagrange identity',reading_extent='GA9 entire actual definition, compact variations, gauge transformation, on/off-shell current/stress divergence and B calculation read; CP09 independently derives the consumed formulas',use='CP09 variational current/stress/EL supplier; stable canonical ID confirmed by peer and coordinator'))
sources.append(dict(paths=['research/plan-pde-track.md','research/plan-fourier-analysis-track.md','research/plan-functional-analysis-track.md'],status='planned-prose-not-proof',reading_extent='Track summaries/targeted supplier discovery already read in previous fluid assignment; no whole-track or source-book reading claimed',use='E0 exact Fourier/Galerkin estimates used instead of treating planned titles as proved fluid/Einstein results'))
(b/'sources-and-suppliers.json').write_text(json.dumps(sources,indent=2)+'\n');(b/'sources/.gitignore').write_text('raw/\n')
ids={x['id']:x for x in r};external=set(extmath+extphys);color={}
assert len(ids)==len(r)
def visit(i):
 assert color.get(i)!=1,i
 if color.get(i)==2:return
 color[i]=1
 for k in ids[i]['deps']:
  assert k in ids or k in external,(i,k)
  if k in ids:
   assert ids[k]['side']=='A',(i,k)
   if ids[i]['domain']=='mathematics':assert ids[k]['domain']=='mathematics',(i,k)
   visit(k)
  elif ids[i]['domain']=='mathematics':assert k in extmath
 color[i]=2
for i in ids:visit(i)
s=(b/'proofs.md').read_text()
for x in r:assert 'id="'+x['proof_module'].split('#')[1]+'"' in s,x['id']
for p in pages:
 assert len(p['A'])<100 and len(p['B'])<100
 assert all(ids[i]['domain']==p['domain'] for i in p['A']+p['B'])
page_edges={}
for x in r:
 key=(x['page'],x['side']);page_edges.setdefault(key,set())
 for dep in x['deps']:
  if dep in ids:
   target=(ids[dep]['page'],ids[dep]['side'])
   if target!=key:page_edges[key].add(target)
page_color={}
def page_visit(k):
 assert page_color.get(k)!=1,k
 if page_color.get(k)==2:return
 page_color[k]=1
 for v in page_edges.get(k,[]):page_visit(v)
 page_color[k]=2
for k in page_edges:page_visit(k)
report=dict(local_checks_only=True,independent_acceptance=False,items=len(r),unique_ids=True,resolved_local_external_deps=True,acyclic=True,pure_math_supplier_boundary=True,homogeneous_pages=True,B_leaves=True,under_100_per_page=True,proof_anchors=True,side_specific_page_DAG=True,counts={p['page']:{'A':len(p['A']),'B':len(p['B'])} for p in pages})
(b/'structural-checks.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report))
