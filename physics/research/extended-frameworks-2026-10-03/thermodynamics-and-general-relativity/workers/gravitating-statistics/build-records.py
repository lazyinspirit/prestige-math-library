#!/usr/bin/env python3
"""Research inventory and exact source receipts. Structural checks are not proof certification."""
import json,hashlib,re
from pathlib import Path
B=Path(__file__).resolve().parent
ROOT=B.parents[5]
# ROOT is repository root (check stable explicit marker).
while not (ROOT/'CLAUDE.md').exists(): ROOT=ROOT.parent
rows=[]
def add(id,title,page,side,domain,kind,deps,anchor,scope):
    rows.append(dict(id=id,title=title,page=page,side=side,domain=domain,kind=kind,deps=deps,dependency_roles={d:('mathematical-premise' if domain=='mathematics' or d.startswith(('lem-','thm-','def-gr-','TGRGS','lem-qsm')) else 'model-or-definition-premise') for d in deps},proof_module=('proofs.md' if domain=='mathematics' else 'physical-models.md')+'#'+anchor,scope=scope,status='complete local conditional argument; unpublished research only',**({'empirical_premises':[],'physical_scope':scope} if domain=='physics' else {})))
M1='TGR-MG01';M2='TGR-MG02';P1='TGR-G01';P2='TGR-G02'
def m(id,title,kind,deps,anchor,scope,page=M1,side='A'):add(id,title,page,side,'mathematics',kind,deps,anchor,scope)
def p(id,title,kind,deps,anchor,scope,page=P1,side='A'):add(id,title,page,side,'physics',kind,deps,anchor,scope)
m('def-tgr-gravitating-phase-reference','Finite gravitational phase and entropy reference','definition',[],'GS0','Explicit finite phase measure, SI dimensions, classical action reference, entropy convention and primitive inputs.')
m('def-tgr-softened-gravity-finite-phase','Finite softened gravitational Hamiltonian and domain','definition',['def-tgr-gravitating-phase-reference'],'GS1','Bounded positive finite-volume box, fixed N,m,a>0, measurable phase B^N×R^{3N}, bounded softened potential.')
m('lem-tgr-finite-gravitational-gibbs','Finite gravitational Gibbs normalization and differentiable moments','lemma',['def-tgr-softened-gravity-finite-phase','TGRGS-TD17','TGRGS-TD27'],'GS1','All fixed energy moments and beta derivatives on compact beta>0 intervals; fixed Hamiltonian and regulator.')
m('thm-tgr-gravitational-canonical-response','Nonnegative fixed-Hamiltonian canonical heat capacity','theorem',['lem-tgr-finite-gravitational-gibbs'],'GS1','C=kB beta² VarH≥0; no changing-background response identification.')
m('thm-tgr-finite-gravitational-entropy-optimum','Unique finite gravitational Gibbs variational optimum','theorem',['lem-tgr-finite-gravitational-gibbs'],'GS1','Density class has finite absolute energy and p logp integrals; complete relative entropy proof and bounded relative second variation.')
m('thm-tgr-gravity-collapse-nonextensivity','Point collapse and unscaled gravity nonextensivity','theorem',['def-tgr-gravitating-phase-reference'],'GS2','Finite-box point canonical divergence; softened N² and hard-core N^(5/3) lower bounds on logZ; model-family counterexamples, not every possible gravity limit.')
m('def-tgr-regulated-kepler-shell-law','Regulated relative Kepler phase volume and shell probability','definition',['def-tgr-gravitating-phase-reference'],'GS3','r0>0,R>16r0,A/R<e≤A/(16r0); actual normalized shell measure, COM deliberately absent.')
m('lem-tgr-relative-shell-canonical-response','Exact relative-shell canonical normalization and response','lemma',['def-tgr-regulated-kepler-shell-law','TGRGS-TD17','TGRGS-TD27'],'GS3a','Exact Q×R³ relative Kepler Hamiltonian; bounded potential, finite shell, Gaussian bounds and all moments, C=kB beta² Varh≥0 at fixed Hamiltonian.')
m('thm-tgr-regulated-kepler-negative-capacity','Negative Gibbs-volume capacity in a finite regulated shell','theorem',['def-tgr-regulated-kepler-shell-law'],'GS3','J(delta) exact integral; delta≤1/16 gives B−delta Bprime≥1 and C<0; explicit declared Gibbs-volume entropy.')
m('lem-tgr-static-gas-finite-normalization','Static relativistic finite gas normalization and hydrostatics','lemma',['def-tgr-gravitating-phase-reference','TGRGS-TD27'],'GS3b','Prescribed smooth static metric in finite box, bounded nondegenerate h and positive lapse lower bound; positive classical Gibbs law, ideal pressure and exact conservation identity.')
m('lem-tgr-static-finite-fermi-occupations','Supplied static finite-mode Fermi occupation identity','lemma',['lem-qsm-models-diagonal-occupation-trace'],'GS3b','Explicit finite supplied E_j=N_j sqrt(m²c⁴+c²p_j²), finite CAR Hilbert space, exact trace; no curved Dirac spectral theorem.')
m('lem-tgr-finite-bath-exchange-stability','Finite-bath entropy curvature and specified exchange stability','lemma',['thm-tgr-regulated-kepler-negative-capacity','TGRGS-NRE2'],'GS8','C² entropies, positive T, finite nonzero C; actual logarithmic bath and separately specified scalar gradient exchange ODE.')
for id,title,deps,a,s in [
('ex-tgr-softened-box-normalization','Finite softened two-body box',[ 'lem-tgr-finite-gravitational-gibbs'],'GS1','Any beta>0 with a>0; exact positivity and bound.'),
('cex-tgr-point-box-collapse','Finite box fails to cure point gravitational collapse',['thm-tgr-gravity-collapse-nonextensivity'],'GS2','Two particles, r²exp(beta A/r) integral diverges.'),
('cex-tgr-softened-nonlinear-free-energy','Softened fixed-density gravity free energy is not extensive',['thm-tgr-gravity-collapse-nonextensivity'],'GS2','All positions in fixed small ball, beta cN² exceeds NlogN.'),
('cex-tgr-hardcore-long-range-limit','Hard-core packing still fails unscaled extensive gravity limit',['thm-tgr-gravity-collapse-nonextensivity'],'GS2','Cubic N=n³ packing, attraction at least order N^(5/3).'),
('ex-tgr-regulated-negative-response','Regulated Kepler branch has negative volume response',['thm-tgr-regulated-kepler-negative-capacity'],'GS3','0<delta≤1/16 finite actual shell law; no point-singularity reliance.'),
('cex-tgr-volume-surface-entropy-response','Finite volume and surface entropy capacities differ',['def-tgr-regulated-kepler-shell-law'],'GS3','Explicit mathematical bound-energy scaling gives −3kB/2 versus −5kB/2 with declared conventions.'),
('ex-tgr-finite-bath-stabilization','Finite bath can stabilize negative heat capacity exchange',['lem-tgr-finite-bath-exchange-stability'],'GS8','Cb<|CG| strict local entropy maximum; scalar effective ODE exponentially stable.')]:m(id,title,'counterexample' if id.startswith('cex') else 'example',deps,a,s,side='B')
m('def-tgr-spherical-static-state-domain','Smooth static spherical geometry and state domain','definition',['def-gr-smooth-lorentzian-objects'],'GS4','r>0,phi,b smooth,b>0,isotropic diagonal tensor; units and pressure/EOS inputs explicit.',M2)
m('lem-tgr-spherical-einstein-tov-reduction','Complete spherical Einstein and conservation reduction','lemma',['def-tgr-spherical-static-state-domain','thm-gr-lorentz-curvature-bianchi-and-jacobi'],'GS4','All16 mixed components independently checked exact rational algebra; equivalence to mass/lapse/TOV, smooth r>0.',M2)
m('thm-tgr-tov-regular-center-local-existence','Regular-center TOV local existence and dependence','theorem',['lem-tgr-spherical-einstein-tov-reduction','TGRGS-NRE2'],'GS5','Smooth positive epsilon(p) near pc>0; integral contraction, even bootstrap, C² Cartesian metric center, continuation only compact inside EOS and b>0.',M2)
m('thm-tgr-constant-density-star-verified','Exact regular constant-density star with verified matching','theorem',['lem-tgr-spherical-einstein-tov-reduction'],'GS6','0<u<8/9 explicit branch, C¹ piecewise C² matching, no thin layer; incompressible noncausal static EOS.',M2)
m('def-tgr-spherical-entropy-constraint-functional','Proper spherical entropy and particle constrained functionals','definition',['def-tgr-spherical-static-state-domain'],'GS7','Fixed R,positive b,C² local entropy chart, Einstein mass constraint, proper S/N and E=c²M(R); no generic gravitational energy.',M2)
m('thm-tgr-constrained-entropy-tov-criticality','Constrained entropy criticality and TOV equivalence','theorem',['def-tgr-spherical-entropy-constraint-functional','lem-tgr-spherical-einstein-tov-reduction','lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space'],'GS7','Complete first variation, surjective two constraints and finite three-variable IFT correction, Tolman/Klein normalization; no maximum or generic dynamical stability.',M2)
for id,title,deps,a,s in [
('ex-tgr-regular-central-pressure-family','Local regular-center central-pressure family',['thm-tgr-tov-regular-center-local-existence'],'GS5','Actual compact-data uniform radius and static continuous dependence.'),
('ex-tgr-constant-density-positive-branch','Positive regular constant-density branch',['thm-tgr-constant-density-star-verified'],'GS6','u=1/2 regular pressure/lapse and Schwarzschild exterior.'),
('cex-tgr-constant-density-critical-center','Constant-density limiting center loses regularity',['thm-tgr-constant-density-star-verified'],'GS6','u↑8/9 implies diverging pc and vanishing center lapse; no general Buchdahl theorem.'),
('cex-tgr-incompressible-causal-transport','Static exact star need not give causal transport EOS',['thm-tgr-constant-density-star-verified'],'GS6','d epsilon/dp=0 not finite-sound-speed material dynamics.')]:m(id,title,'counterexample' if id.startswith('cex') else 'example',deps,a,s,M2,'B')
unit='def-tgr-framework-units';material='post-tgr-local-material-thermodynamics'
p('post-tgr-finite-newton-gravity-preparation','Finite regulated Newtonian gravitational canonical preparation','postulate',[unit],'GP0','Primitive regulator/boundary and classical phase counting; effective Newtonian applicability and no thermalization assertion.')
p('pthm-tgr-regulated-gravity-canonical-equilibrium','Constructed finite canonical gravitational equilibrium','physics-theorem',['post-tgr-finite-newton-gravity-preparation','lem-tgr-finite-gravitational-gibbs','thm-tgr-finite-gravitational-entropy-optimum','thm-tgr-gravitational-canonical-response'],'GP0','Fixed effective Hamiltonian; positive normalized law and proved variational optimum/canonical response, no dynamical theorem.')
p('post-tgr-unregulated-point-attempt','Distinct unregulated point-gravity attempted sampling','postulate',[unit],'GP0u','Two point masses finite box, unregulated off-diagonal Hamiltonian, attempted positive beta weight; no normalized probability existence postulated.')
p('post-tgr-kepler-canonical-preparation','Relative-shell canonical comparison preparation','postulate',[unit],'GP1c','Exact fixed relative Hamiltonian and shell, canonical beta>0 and effective Newtonian momentum tails; no microcanonical entropy convention.')
p('post-tgr-kepler-microcanonical-volume-preparation','Confined relative Kepler shell and volume entropy preparation','postulate',[unit],'GP1','Declared shell law and volume entropy; weak potential and bounded low speeds; COM absent.')
p('pthm-tgr-regulated-ensemble-response-inequivalence','Regulated gravitational preparations have different responses','physics-theorem',['post-tgr-kepler-microcanonical-volume-preparation','post-tgr-kepler-canonical-preparation','thm-tgr-regulated-kepler-negative-capacity','lem-tgr-relative-shell-canonical-response'],'GP1','Negative volume microcanonical capacity and nonnegative canonical response for same fixed regulated relative Hamiltonian.')
p('post-tgr-fixed-static-gas-preparation','Fixed static ideal gas or finite fermion regulator preparation','postulate',[unit],'GP2','Prescribed finite geometry, positive lapse lower bound, ideal classical or explicit finite fermion modes; no Einstein backreaction.')
p('pthm-tgr-static-gas-local-equilibrium','Constructed static gas redshift and hydrostatics','physics-theorem',['post-tgr-fixed-static-gas-preparation','lem-tgr-static-gas-finite-normalization','lem-tgr-static-finite-fermi-occupations'],'GP2','Exact selected classical law and finite fermion occupation rewrite; no generic curved trace or selfgravitating star.')
p('post-tgr-static-spherical-fluid-preparation','Static isotropic Einstein-fluid and supplied EOS model','postulate',[unit],'GP3','Lambda0,positive b,regular center, smooth positive epsilon(p); equation-based static model with no thermodynamic state-function premise.',P2)
p('pthm-tgr-static-tov-local-branch','Constructed self-consistent local static TOV branch','physics-theorem',['post-tgr-static-spherical-fluid-preparation','lem-tgr-spherical-einstein-tov-reduction','thm-tgr-tov-regular-center-local-existence'],'GP3','Verified classical static branch with actual C² center; no everyEOSglobal-surface or stability theorem.',P2)
p('post-tgr-incompressible-star-preparation','Specific incompressible star and vacuum boundary model','postulate',['post-tgr-static-spherical-fluid-preparation'],'GP4','epsilon(p)=epsilon0, prescribed R and0<u<8/9,p(R)=0 and explicit vacuum exterior; incompressible static model, no causal dynamical EOS.',P2)
p('post-tgr-gravitating-entropy-variational-preparation','Thermodynamic chart and gravitational entropy variational preparation','postulate',[unit,material],'GP5','Supplied compatible C²e and s chart with first-law/Euler, fixedR, positiveb, Einsteinmass constraint, properS/N, E=c²M(R), constraint variations and boundary clock; no entropy maximum/matching assertion.',P2)
p('pthm-tgr-static-constant-density-star','Verified incompressible static star and exterior','physics-theorem',['post-tgr-incompressible-star-preparation','thm-tgr-constant-density-star-verified'],'GP4','Explicit 0<u<8/9 family and scoped matching; no observed/causal EOS or generic radial stability.',P2)
p('pthm-tgr-gravitating-entropy-criticality','Scoped thermodynamic entropy criticality gives hydrostatic equilibrium','physics-theorem',['post-tgr-gravitating-entropy-variational-preparation','thm-tgr-constrained-entropy-tov-criticality'],'GP5','Fixed spherical mass constraint and boundary lapse normalization; first variation only, not entropy maximum.',P2)
p('post-tgr-finite-bath-exchange-preparation','Selected finite bath and effective exchange dynamics','postulate',[unit,'post-tgr-kepler-microcanonical-volume-preparation'],'GP6','Specified logarithmic bath,conserved totalE,xprime=L Sprime; no causal relativistic transport claim.',P2)
p('pthm-tgr-negative-capacity-exchange-stability','Proved finite-bath stability in selected scalar exchange model','physics-theorem',['post-tgr-finite-bath-exchange-preparation','lem-tgr-finite-bath-exchange-stability'],'GP6','Cb<|CG|, actual common-temperature point, local entropy maximum and exponential attraction only for specified effectiveODE.',P2)
for id,title,deps,s,page in [
('ex-tgr-physical-finite-softened-box','Prepared finite softened two-body ensemble',['pthm-tgr-regulated-gravity-canonical-equilibrium'],'Explicit finite box beta>0 normalized effective Newtonian law.',P1),
('cex-tgr-physical-unregulated-collapse','Point-particle preparation has no finite-box canonical law',['post-tgr-unregulated-point-attempt','thm-tgr-gravity-collapse-nonextensivity'],'Distinct unregulated attempted weight diverges; no normalization or positive-a preparation premise.',P1),
('ex-tgr-physical-negative-kepler-capacity','Confined negative-capacity Kepler preparation',['pthm-tgr-regulated-ensemble-response-inequivalence'],'delta1/32,R>32r0 and controlled bounded speeds; declared volume entropy.',P1),
('ex-tgr-physical-static-lapse-two','Fixed lapse two gas normalization',['pthm-tgr-static-gas-local-equilibrium'],'N=2 finite flat box gives Tlocal=TK/2; Killing normalization explicit.',P1),
('ex-tgr-physical-star-half-compactness','Half-compactness static Einstein star',['pthm-tgr-static-constant-density-star'],'u1/2 explicit pressure/lapse and exterior; not observed EOS.',P2),
('cex-tgr-physical-critical-star-limit','Finite-pressure regular star hypotheses fail at critical limit',['pthm-tgr-static-constant-density-star'],'u approaches8/9 center pressure diverges; family-specific.',P2),
('ex-tgr-physical-finite-bath-attraction','Selected half-capacity bath exchange is stable',['pthm-tgr-negative-capacity-exchange-stability'],'Cb=|CG|/2 gives strictly negative entropy curvature and local exponentialODEattraction.',P2)]:p(id,title,'counterexample' if id.startswith('cex') else 'example',deps,'GP7',s,page,'B')
by={r['id']:r for r in rows}
for r in rows:
    r['dependency_roles']={d:('mathematical-premise' if d in by and by[d]['domain']=='mathematics' or d.startswith(('TGRGS','lem-qsm','lem-choice','thm-gr','def-gr')) else 'physical-assumption' if d in by and by[d]['kind']=='postulate' or d.startswith('post-') else 'physical-result' if d in by and by[d]['kind']=='physics-theorem' else 'formulation-prerequisite') for d in r['deps']}
# Exact read source carriers, preserving published versus research status.
def src(id,path,locator,reading,scope,status='unpublished research interface'):
    q=ROOT/path
    return dict(id=id,domain='mathematics',path=path,locator=locator,sha256=hashlib.sha256(q.read_bytes()).hexdigest(),reading_status=reading,exact_statement=scope,status=status)
S=[src('TGRGS-TD17','physics/research/first-principles-2026-10-03/thermodynamics/scaffold/completed-developments.md','M17','Full M17 Gaussian normalization argument read; same actual carrier retained from earlier team.','Finite-dimensional Gaussian integration and moments under beta>0.'),src('TGRGS-TD27','physics/research/first-principles-2026-10-03/thermodynamics/scaffold/completed-developments.md','M27','Full M27 dominated parameter-integral argument read in previous team; retained exact scope.','Differentiation under an actual integrable local majorant.'),src('TGRGS-NRE2','physics/research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/expansion-proofs.md','E2','Complete E2 local contraction, dependence and compact continuation read current task.','Smooth finite-dimensional vector field local solution and continuation in compact interior.'),src('thm-gr-lorentz-curvature-bianchi-and-jacobi','physics/research/first-principles-2026-10-03/relativity/scaffold/gr-local-proofs.md','G3','Complete G0–G4/G6 read in prior EMGR assignment; signed curvature/Bianchi proof retained.','Smooth signed Lorentz curvature and contracted Bianchi; not arbitrary weak metrics.'),src('def-gr-smooth-lorentzian-objects','physics/research/first-principles-2026-10-03/relativity/scaffold/gr-local-proofs.md','G0','Full G0 definition/carrier read prior assignment.','Smooth Lorentz metric and signed local objects.'),src('lem-qsm-models-diagonal-occupation-trace','physics/research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/workers/models-examples/proofs.md','M0','M0 complete diagonal occupation/domain/trace proof read current task; only finite-mode specialization consumed.','Explicit occupation basis and trace factorization; current consumer uses finite fermion regulator.'),src('lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space','items/lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space.md','Proof','Entire published statement, F1–F5 supplier list and proof1.1–6.1 read current task.','Smooth Euclidean finite-dimensional inverse theorem; GS7 three-variable correction map is smooth independently of C² entropy.','published; audited metadata pass 2026-09-13')]
(B/'supplier-map.json').write_text(json.dumps({'suppliers':S,'supplier_order':['finite phase/geometry definitions','Gaussian/dominated finite normalization','relative entropy/response','regulated Kepler shell and negative response','full Einstein tensor reduction','center integral contraction','verified star matching','mass-constrained entropy variation + finite IFT','specified finite-bath exchange stability'],'excluded_imports':['CSM superstable/integrably tempered thermodynamic limits: hypotheses fail for unscaled gravity','QS continuum curved trace: not constructed','general Buchdahl and nonlinear Einstein-fluid stability by source citation: not consumed']},indent=2)+'\n')
(B/'inventory.json').write_text(json.dumps({'records':rows,'external_suppliers':{s['id']:s for s in S}},indent=2)+'\n')
ids={r['id'] for r in rows}; assert len(ids)==len(rows)
for r in rows:
    body=(B/r['proof_module'].split('#')[0]).read_text(); assert 'id="'+r['proof_module'].split('#')[1]+'"' in body
    for d in r['deps']:
        if d in ids:
            dr=next(t for t in rows if t['id']==d);assert dr['side']=='A';assert not(r['domain']=='mathematics' and dr['domain']=='physics')
seen=set();stack=set()
def walk(id):
    if id in seen:return
    assert id not in stack;stack.add(id)
    for d in next(r for r in rows if r['id']==id)['deps']:
        if d in ids:walk(d)
    stack.remove(id);seen.add(id)
for id in ids:walk(id)
pages={}
for r in rows:
    pages.setdefault(r['page'],[]).append(r)
for page,rr in pages.items():assert len(rr)<=100 and len({r['domain'] for r in rr})==1 and {r['side'] for r in rr}=={'A','B'}
page_edges={p:set() for p in pages}
for r in rows:
    for d in r['deps']:
        if d in by and by[d]['page']!=r['page']:page_edges[r['page']].add(by[d]['page'])
page_done=set();page_active=set()
def page_walk(p):
    if p in page_done:return
    assert p not in page_active;page_active.add(p)
    for q in page_edges[p]:page_walk(q)
    page_active.remove(p);page_done.add(p)
for p in pages:page_walk(p)
receipt={'status':'pass','items':len(rows),'pairs':len(pages),'pages':{p:{'A':sum(r['side']=='A' for r in rr),'B':sum(r['side']=='B' for r in rr)} for p,rr in pages.items()},'checks':['unique ids','complete module anchors','local item and page DAGs acyclic','B leaves','homogeneous domains','populated A/B companions','100-item caps'],'limits':'Structural checks do not certify proofs; full local reading review required.'}
(B/'inventory-check.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps(receipt))
