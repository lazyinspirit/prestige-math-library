from pathlib import Path
import json, hashlib
base=Path(__file__).parent
records=[]
def add(id,title,kind,deps,module,scope,pair,domain='mathematics',side='A'):
 records.append(dict(id=id,title=title,domain=domain,kind=kind,deps=deps,dependency_roles={d:'mathematical-premise' for d in deps},proof_module='workers/smooth-pde/proofs.md#'+module,scope=scope,pair=pair,side=side,status='proposed-research',proof_status='complete-local-argument' if kind not in ['definition','remark','postulate'] else ('defined' if kind=='definition' else 'non-theorem'),consumer_restrictions='B-leaf' if side=='B' else 'exact stated scope'))
s1='FD-S01';s2='FD-S02';s3='FD-S03'
add('def-fd-periodic-fourier-sobolev-spaces','Periodic fluid Fourier Sobolev spaces','definition',['def-countable-choice'],'s01','T^d d≤3; normalized measure; coefficient completion; conjugation symmetry',s1)
add('lem-fd-periodic-fourier-embedding-products','Periodic Fourier embeddings and products','lemma',['def-fd-periodic-fourier-sobolev-spaces'],'s01','H^σ→C^j for σ>j+d/2; H^σ algebra for σ>d/2',s1)
add('lem-fd-periodic-tame-transport-commutator','Tame transport commutator','lemma',['lem-fd-periodic-fourier-embedding-products'],'s01','integers m≥s≥4; d≤3; two-factor estimate',s1)
add('def-fd-periodic-leray-pressure-maps','Periodic Leray and pressure maps','definition',['def-fd-periodic-fourier-sobolev-spaces'],'s01','P_0=I; k≠0 orthogonal projection; mean-zero pressure',s1)
add('thm-fd-periodic-pressure-recovery','Pressure recovery for smooth periodic incompressible velocity','theorem',['def-fd-periodic-leray-pressure-maps','lem-fd-periodic-fourier-embedding-products'],'s01','π pressure per density; uniqueness after spatial mean zero',s1)
add('def-fd-projected-no-slip-stokes-space','Projected no-slip Stokes Hilbert space','definition',['thm-sobolev-spaces-are-banach-spaces','def-axiom-of-choice'],'s05','V=distributionally divergence-free H1_0 on bounded open Ω',s1)
add('lem-fd-zero-trace-directional-poincare','Directional Poincare bound for zero trace','lemma',['def-fd-projected-no-slip-stokes-space'],'s05','Ω⊂(−R,R)^d; norm≤2R gradient norm',s1)
add('thm-fd-projected-stationary-stokes','Projected stationary weak Stokes solvability','theorem',['lem-fd-zero-trace-directional-poincare','thm-riesz-representation-for-hilbert-space'],'s05','μ>0 f∈L2; unique V velocity; no pressure regularity assertion',s1)
add('ex-fd-single-mode-pressure','Shear mode has zero periodic pressure','example',['thm-fd-periodic-pressure-recovery'],'s07','u=(A sin y,0,0), convection zero, π=0',s1,side='B')
add('rem-fd-stokes-pressure-prerequisite','Full wall Stokes pressure requires a divergence inverse','remark',[],'s05','unconsumed missing de Rham/inf-sup chain, not theorem',s1,side='B')
add('thm-fd-smooth-periodic-incompressible-ivp','Local smooth periodic Euler and Navier–Stokes','theorem',['lem-fd-periodic-tame-transport-commutator','thm-fd-periodic-pressure-recovery','def-countable-choice'],'s02','smooth div-free data; ν≥0; common all-order lifespan controlled by Hs',s2)
add('def-fd-polytropic-symmetric-variables','Polytropic sound-speed symmetric variables','definition',['def-fd-periodic-fourier-sobolev-spaces'],'s03','κ>0 γ>1 ρ>0; r=2c/(γ−1); explicit symmetric A_j',s2)
add('thm-fd-smooth-polytropic-euler-ivp','Local smooth positive-density polytropic Euler','theorem',['def-fd-polytropic-symmetric-variables','lem-fd-periodic-tame-transport-commutator','def-countable-choice'],'s03','periodic smooth positive density; γ>1; no shock/vacuum/viscosity',s2)
add('def-fd-smooth-wall-exterior-solution-domains','Smooth wall and exterior solution domains','definition',[],'s06','fixed bounded C2 or exterior compact-obstacle domain; regularity and boundary data defined',s2)
add('thm-fd-global-linear-acoustics','Global smooth periodic linear acoustics','theorem',['lem-fd-periodic-fourier-embedding-products'],'s08','ρ*>0 c*>0; exact constant-coefficient tangent model',s2)
add('thm-fd-compatible-wall-shear-heat','Global compatible no-slip shear evolution','theorem',['lem-fd-periodic-fourier-embedding-products'],'s07','smooth odd 2h-periodic initial extension; heat-mode representation; exact shear subspace',s2)
add('ex-fd-compressible-viscous-shear','Exact constant-density compressible viscous shear','example',['thm-fd-compatible-wall-shear-heat'],'s07','ρ*>0, constant p, η>0; bulk term vanishes',s2,side='B')
add('ex-fd-periodic-poiseuille-body-force','Periodic channel Poiseuille flow uses a body force','example',['def-fd-smooth-wall-exterior-solution-domains'],'s07','pressure must be periodic; use G/ρ force; infinite channel allows −Gx',s2,side='B')
add('ex-fd-couette-vorticity','Couette shear and nonzero vorticity','example',['def-fd-smooth-wall-exterior-solution-domains'],'s07','moving top wall V; v=Vy/h; ωz=−V/h',s2,side='B')
add('rem-fd-general-viscous-wall-ivp-gaps','General compressible viscous and wall IVPs need further suppliers','remark',[],'required-and-prospective-coverage-boundaries','no generic nonlinear wall/exterior or nonuniform-density viscosity theorem consumed',s2,side='B')
add('thm-fd-periodic-smooth-incompressible-energy','Periodic smooth incompressible energy identity','theorem',['thm-fd-smooth-periodic-incompressible-ivp'],'s04','exact lifespan energy; exponential mean-zero decay ν>0',s3)
add('thm-fd-periodic-smooth-stability','Smooth incompressible and symmetric-system uniqueness/stability','theorem',['thm-fd-smooth-periodic-incompressible-ivp','thm-fd-smooth-polytropic-euler-ivp'],'s04','L2 Gronwall; bounded Hs→C H(s−1) dependence',s3)
add('thm-fd-smooth-sobolev-continuation','Smooth Sobolev continuation criterion','theorem',['thm-fd-smooth-periodic-incompressible-ivp','thm-fd-smooth-polytropic-euler-ivp'],'s02','uniform Hs bound; compressible additionally uniform positive r',s3)
add('thm-fd-periodic-inviscid-limit','Controlled periodic smooth inviscid limit','theorem',['thm-fd-periodic-smooth-stability'],'s04','identical data; fixed local time; L2 error O(ν)',s3)
add('thm-fd-smooth-vorticity-identities','Smooth vorticity evolution and 2D norms','theorem',['thm-fd-smooth-periodic-incompressible-ivp'],'s04','3D stretching identity; 2D L2 dissipation, L∞ maximum bound; no global conclusion',s3)
add('thm-fd-polytropic-energy','Smooth polytropic energy conservation','theorem',['def-fd-polytropic-symmetric-variables','thm-fd-smooth-polytropic-euler-ivp'],'s04','U=κρ^γ/(γ−1); smooth positive periodic flow',s3)
add('thm-fd-smooth-wall-energy-uniqueness','Conditional wall energy and smooth uniqueness','theorem',['def-fd-smooth-wall-exterior-solution-domains','thm-divergence-theorem-for-bounded-c-one-euclidean-domains','thm-picard-lindelof-local-existence-and-uniqueness'],'s06','no-slip or Navier slip β≥0; prescribed C1tC2x solution; exterior flux assumptions',s3)
add('prop-fd-fluid-equation-scaling','Fluid equation scalings and dimensionless numbers','proposition',['def-fd-periodic-leray-pressure-maps','def-fd-polytropic-symmetric-variables'],'s08','chain-rule identities; changed domains under scaling; no continuum limit theorem',s3)
add('ex-fd-acoustic-energy-mode','An acoustic Fourier mode conserves its weighted energy','example',['thm-fd-global-linear-acoustics'],'s08','longitudinal oscillation, constant transverse mode',s3,side='B')
add('rem-fd-global-regularity-open','Three-dimensional global smooth regularity is open','remark',[],'required-and-prospective-coverage-boundaries','NS Clay problem and unrestricted Euler; never a supplier',s3,side='B')
add('rem-fd-boundary-layer-low-mach-status','Boundary inviscid and nonlinear low-Mach limits require estimates','remark',[],'s08','only periodic smooth inviscid limit proved; acoustics/scaling not nonlinear limit',s3,side='B')
add('lem-fd-given-smooth-solutions-difference-energy','Difference energy for given smooth incompressible and symmetric solutions','lemma',['lem-fd-periodic-fourier-embedding-products','def-fd-periodic-leray-pressure-maps'],'s01','given solutions only; no existence premise; L2 Gronwall and interpolation','FD-S01')
add('thm-fd-global-two-dimensional-periodic-navier-stokes','Global smooth two-dimensional periodic Navier–Stokes','theorem',['thm-fd-smooth-sobolev-continuation','thm-fd-smooth-vorticity-identities','lem-fd-periodic-tame-transport-commutator'],'s09','ν>0; d=2; arbitrary smooth divergence-free periodic data; log/enstrophy closure','FD-S03')
add('lem-fd-rectangular-test-divergence-inverse','Rectangular continuous divergence inverse on mean-zero tests','lemma',[],'s10','Cc∞ mean-zero scalar tests → compactly supported smooth vector tests; seminorm continuity','FD-S01')
add('thm-fd-rectangular-no-slip-stokes-velocity-pressure','Rectangular no-slip Stokes velocity and distribution pressure','theorem',['thm-fd-projected-stationary-stokes','lem-fd-rectangular-test-divergence-inverse'],'s10','arbitrary L2 forcing; u∈H1_0 divfree; p∈Hminus1 dual H1_0 mod constants; genuine equation','FD-S01')
phys_ext=['post-fd-continuum-balances','post-fd-local-equilibrium','post-fd-newtonian-fourier','post-fd-boundary-data','def-fd-incompressible-newtonian-model','def-fd-barotropic-euler-model','def-fd-quantity-and-frame-conventions']
add('pthm-fd-local-periodic-incompressible-model-evolution','Local periodic incompressible model evolution','physics-theorem',['post-fd-continuum-balances','post-fd-newtonian-fourier','def-fd-incompressible-newtonian-model','thm-fd-smooth-periodic-incompressible-ivp','thm-fd-periodic-pressure-recovery'],'ps01','adopted constant-density Newtonian periodic model; η>0 or inviscid stress','FD-PS01',domain='physics')
add('pthm-fd-local-polytropic-model-evolution','Local positive-density polytropic model evolution','physics-theorem',['post-fd-continuum-balances','def-fd-barotropic-euler-model','thm-fd-smooth-polytropic-euler-ivp','thm-fd-polytropic-energy'],'ps01','additional explicitly restricted common κ>0 γ>1; no vacuum or shock; no variable entropy κ labels','FD-PS01',domain='physics')
add('pthm-fd-two-dimensional-viscous-model-globality','Global two-dimensional periodic viscous model evolution','physics-theorem',['post-fd-continuum-balances','post-fd-newtonian-fourier','def-fd-incompressible-newtonian-model','thm-fd-global-two-dimensional-periodic-navier-stokes'],'ps01','two-dimensional model adopted; ν>0; mathematical globality does not establish applicability','FD-PS01',domain='physics')
add('pthm-fd-wall-mechanical-power-balance','Mechanical power balance under adopted wall laws','physics-theorem',['post-fd-continuum-balances','post-fd-newtonian-fourier','post-fd-boundary-data','def-fd-incompressible-newtonian-model','thm-fd-smooth-wall-energy-uniqueness'],'ps02','given smooth no-slip or Navier-slip solution; β≥0; wall constitutive applicability separate','FD-PS02',domain='physics')
add('pthm-fd-linear-acoustic-model-prediction','Linear acoustic model prediction','physics-theorem',['def-fd-barotropic-euler-model','thm-fd-global-linear-acoustics'],'ps02','p prime(ρ*)>0; exact tangent model; no finite-amplitude approximation bound','FD-PS02',domain='physics')
add('ex-fd-homogeneous-polytropic-model','Homogeneous translating polytropic fluid','example',['pthm-fd-local-polytropic-model-evolution'],'ps01','constant positive density and velocity exactly solve the adopted polytropic model','FD-PS01',domain='physics',side='B')
add('ex-fd-adopted-poiseuille-couette','Adopted Poiseuille and Couette channel predictions','example',['pthm-fd-wall-mechanical-power-balance'],'ps02','explicit no-slip model profiles; streamwise periodic pressure repaired by body force','FD-PS02',domain='physics',side='B')
for r in records:
 if r['id'] in ['thm-fd-smooth-periodic-incompressible-ivp','thm-fd-smooth-polytropic-euler-ivp']:
  r['deps'] += ['lem-fd-given-smooth-solutions-difference-energy','thm-picard-lindelof-local-existence-and-uniqueness']
 if r['id']=='thm-fd-periodic-smooth-stability':r['deps'] += ['lem-fd-given-smooth-solutions-difference-energy']
 r['dependency_roles']={d:('physical-assumption' if d.startswith('post-') else 'physical-result' if d.startswith('pthm-') else 'formulation-prerequisite' if d in phys_ext else 'mathematical-premise') for d in r['deps']}
 if r['domain']=='physics':
  r['empirical_premises']=[]
  r['physical_scope']=r['scope']

# Mathematical prerequisites that exist are pinned by exact file and interface.
external=['def-countable-choice','def-axiom-of-choice','thm-sobolev-spaces-are-banach-spaces','thm-riesz-representation-for-hilbert-space','thm-divergence-theorem-for-bounded-c-one-euclidean-domains','thm-picard-lindelof-local-existence-and-uniqueness']
pairs=[dict(pair=p,A=[r['id'] for r in records if r['pair']==p and r['side']=='A'],B=[r['id'] for r in records if r['pair']==p and r['side']=='B'],library=('physics' if p.startswith('FD-PS') else 'mathematics'),B_leaf=True) for p in [s1,s2,s3,'FD-PS01','FD-PS02']]
(base/'inventory.json').write_text(json.dumps(dict(records=records,pairs=pairs,external_mathematical_suppliers=external,external_physics_supplier_ids=phys_ext,physical_consumer_rule='Coordinator creates physical conditional-use items depending on these mathematics and its explicit continuum/constitutive postulates; none of the mathematics depends on those physical items.'),indent=2)+'\n')
paths={
 'nr-E30':'physics/research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/local-fluid-wellposedness.md',
 'nr-E13-E14-E23-E24':'physics/research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/expansion-proofs.md',
 'td-M34':'physics/research/first-principles-2026-10-03/thermodynamics/scaffold/completed-developments.md'}
sup=[]
for key,path in paths.items():
 extent={'nr-E30':'entire file','nr-E13-E14-E23-E24':'E2 fully; E13 and E14 fully; E23 and E24 fully; E16–E22 incidental displayed context, not all development','td-M34':'M34 fully; M22 heading/search only, not full proof'}[key]
 uses={'nr-E30':['S01','S02','S04'],'nr-E13-E14-E23-E24':['S01 Fourier completeness via E24','S06 balances via E13','S07 channel via E23','S08 linear-wave comparison via E14'],'td-M34':['S07 heat comparison: compatible reflected data and uniqueness; not universal heat or fluid theorem']}[key]
 sup.append(dict(key=key,path=path,sha256=hashlib.sha256(Path(path).read_bytes()).hexdigest(),status='completed-research-argument-not-production-item',reading_extent=extent,consumer_uses=uses,transitive_independent_certification=False))
for id in external[2:]+['thm-local-linear-transport-cauchy-problem','thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form','thm-heat-cauchy-solution-for-bounded-continuous-data','lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients']:
 path=Path('items')/(id+'.md');txt=path.read_text();status='published' if 'status: published' in txt else 'draft'
 use={'thm-sobolev-spaces-are-banach-spaces':['S05 completeness, AC inherited'], 'thm-riesz-representation-for-hilbert-space':['S05 Hilbert representation, countable choice'], 'thm-picard-lindelof-local-existence-and-uniqueness':['S02/S03 finite Galerkin coefficient ODEs; polynomial Lipschitz on compact balls'], 'thm-divergence-theorem-for-bounded-c-one-euclidean-domains':['S06 boundary integration, ACω'], 'thm-local-linear-transport-cauchy-problem':['S04 transport scope comparison; smooth prescribed coefficients only'], 'thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form':['comparison only: analytic germ theorem not smooth IVP supplier'], 'thm-heat-cauchy-solution-for-bounded-continuous-data':['comparison/M34 exact kernel branch, draft, not needed by local Fourier proof'], 'lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients':['S01 Fourier uniqueness cross-check; local Fejér proof used']}[id]
 sup.append(dict(key=id,path=str(path),sha256=hashlib.sha256(path.read_bytes()).hexdigest(),status=status,reading_extent='entire statement, assumptions and proof; dependency full proofs not all independently re-read',consumer_uses=use,transitive_independent_certification=False))
raw=base/'sources/raw/fefferman-navierstokes.pdf'
sup.append(dict(key='Fefferman-Clay-NS',path=str(raw),source_url='https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf',sha256=hashlib.sha256(raw.read_bytes()).hexdigest(),status='authoritative-problem-description-not-proof-chain',reading_extent='all six PDF pages including errata, extracted with installed fitz; bibliography references not retrieved/read',consumer_uses=['named 3D global smooth NS open problem','restrictions to smooth whole-space decaying or periodic data; not proof of partial-results paragraphs'],retrieval='curl HTTP success 2026-10-03; pdftotext unavailable; recovered with Python3 fitz; no failed source URL',license='No redistribution license determined; raw retained locally and ignored'))
sup.append(dict(key='root-planned-analysis-map',paths=['research/plan-pde-track.md','research/plan-fourier-analysis-track.md','research/plan-functional-analysis-track.md'],status='planned-prose-not-proof',reading_extent='PDE lines 1–160, Fourier 1–110, FA 1–105; targeted text search for Euler/Stokes/commutators/Lax–Milgram/Poincare and relevant mapping. Not whole books, whole plans, or complete transitive DAG reading.',consumer_uses=['scope discovery: root PDE explicitly excludes Navier–Stokes and systems; PDE-14/PDE-16 and FA-13 planned supplier architecture do not certify absent specialized fluid results','local S01 and S05 supply actually used specialized estimates rather than consuming plans as theorems']))
(base/'sources-and-suppliers.json').write_text(json.dumps(sup,indent=2)+'\n')
(base/'sources/.gitignore').write_text('raw/\n')
# Check only graph/format facts that this script actually establishes.
ids={r['id'] for r in records};ext=set(external)|set(phys_ext)
assert len(ids)==len(records)
for r in records:
 assert r['domain'] in ['mathematics','physics']
 if r['domain']=='mathematics':
  assert not(set(r['deps']) & set(phys_ext))
  assert all(next(x for x in records if x['id']==d)['domain']=='mathematics' for d in r['deps'] if d in ids)
 assert set(r['deps'])<=ids|ext
 for d in r['deps']:
  if d in ids: assert next(x for x in records if x['id']==d)['side']=='A'
colors={}
def visit(i):
 assert colors.get(i)!=1, i
 if colors.get(i)==2:return
 colors[i]=1
 for d in next(r for r in records if r['id']==i)['deps']:
  if d in ids:visit(d)
 colors[i]=2
for i in ids:visit(i)
assert all(len(p[x])<100 for p in pairs for x in ['A','B'])
report=dict(local_only=True,proof_audit=False,command='python3 workers/smooth-pde/build-records.py from repository root via full path',checks={'unique_ids':True,'resolved_local_or_exact_external_deps':True,'acyclic':True,'mathematics_only_dag':True,'B_leaf':True,'under_100_each_page':True},items=len(records),page_counts={p['pair']:{x:len(p[x]) for x in ['A','B']} for p in pairs})
(base/'structural-checks.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report))
