from pathlib import Path
import json,re,hashlib
p=Path(__file__).parent
maps=[]
def supplier(id,path,section,statement,hypotheses,uses,status):
 maps.append(dict(id=id,path=path,section=section,statement=statement,hypotheses=hypotheses,status=status,actual_review='statement, hypotheses and complete relevant argument read',consumer_use=uses))
t='physics/research/first-principles-2026-10-03/thermodynamics/scaffold/'
n='physics/research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/'
for id,file,section,stmt,hyp,uses in [
 ('supplier-thermo-M16','completed-developments.md','M16','Countable canonical normalization and two derivatives','compact-parameter summable energy-second-moment exponential envelope','F5 reference/canonical status'),
 ('supplier-thermo-M17','completed-developments.md','M17','Continuous classical Gaussian product normalization','bounded rectangular position region, bounded continuous potential, m>0,beta>0; positive action reference','F4,F7,B1 Gaussian tail/product example'),
 ('supplier-thermo-M25','completed-developments.md','M25','Finite entropy invariance and correlation nonadditivity','finite distributions; reference/calibration fixed','F0 distinguishes coarse state from Gibbs entropy; no independence assumption'),
 ('supplier-thermo-M27','completed-developments.md','M27','MCT, Fatou, dominated differentiation and density KL inequality','measure space; integrable common envelope; same reference measure','F1,F2,F5,F6 complete measure manipulations'),
 ('supplier-thermo-M36','completed-developments.md','M36','General exponential covariance and grand derivatives','finite space or compact-parameter second-moment summable/integrable envelope','F5 exact grand coordinates, field-control covariance'),
 ('supplier-thermo-L17','ly-closure-developments.md','L17','Hamiltonian volume, fine-grained entropy, conditional recurrence/ergodicity','smooth symplectic flow on invariant actual domain; integral rho log rho; AC for inherited suppliers; no completeness','F1 entropy conservation and scope'),
 ('supplier-thermo-L20','ly-closure-developments.md','L20','Regular coarea shell and invariant shell probability','H C2, compact inverse bands, nonzero gradient, nonempty levels; full-band volume-preserving energy flow','F2; dimensionless coordinate scales explicit'),
 ]:
 supplier(id,t+file,section,stmt,hyp,uses,'completed-conditional-research-proof; not-production')
supplier('supplier-nrcm-E7',n+'expansion-proofs.md','E7','Canonical symplectic calculus and local Hamiltonian flow volume','H C2; actual local smooth flow/variational derivative; coordinate COV','F0,F1','completed-conditional-research-proof; not-production')
for id,stmt,hyp,uses,status in [
 ('thm-tonelli-theorem-for-sigma-finite-product-spaces','Nonnegative product integral equals iterated integrals','sigma-finite factors; product measurable nonnegative f','F2,F3,F4,F7,B1','published; bounded local review2026-09-23'),
 ('thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions','C1 diffeomorphism Jacobian integral formula','open domains; C1 diffeo; nonnegative Lebesgue measurable f; Countable Choice','F0,F1,F2,F3','published; bounded local review2026-09-23'),
 ('thm-dominated-convergence','Common integrable majorant yields L1 and integral convergence','a.e. measurable convergence; one nonnegative integrable dominating function','F2,F5','published; bounded local review2026-09-23'),
 ('thm-gaussian-integral','Integral exp(-x^2) equals sqrt(pi)','one-dimensional improper integral; prior plane/polar compact-Jordan chain','F3,F7,B1','published; audited2026-08-21'),
 ('thm-hamiltonian-flows-preserve-the-symplectic-form','Actual local Hamiltonian flow preserves symplectic form','smooth symplectic manifold and local Hamiltonian flow; no completeness','F1','published; audited2026-09-14'),
 ('thm-liouville-volume-preservation','Hamiltonian local flow preserves omega^n/n!','smooth 2n-dimensional symplectic manifold; actual local flow','F1','published; audited2026-09-14')]:
 supplier(id,'items/'+id+'.md','Statement; Facts & Assumptions; Proof',stmt,hyp,uses,status)
(p/'supplier-map.json').write_text(json.dumps({'version':1,'suppliers':maps,'contextual_not_load_bearing':[{'path':t+'ly-closure-developments.md','section':'L12','use':'collision H theorem is different model, not equilibrium preparation'},{'path':t+'prose-scaffold.md','section':'Entropy and energy representations; Legendre potentials','use':'valid smooth state-chart thermodynamic identification only'}],'choice':'Countable Choice inherited from Lebesgue COV; AC allowed where supplier L17 carries it, never physical postulate','unproved_plans_consumed':[]},indent=2)+'\n')
rows=[]
def item(id,title,kind,domain,deps,sec,scope,side='A'):
 rows.append(dict(id=id,title=title,kind=kind,domain=domain,deps=deps,proof_module='ensemble-proofs.md#'+sec,scope=scope,side=side,page='csm-foundations-ensembles'+('-examples' if side=='B' else ''),status='proposed-research-interface'))
item('def-csm-phase-space-reference','Classical configuration, phase and reference spaces','definition','mathematics',['supplier-nrcm-E7'],'f0','Smooth cotangent phase geometry; positive mathematical action scale; quotient measurable convention')
item('def-csm-statistical-state-observable','Statistical state, density and observables','definition','mathematics',['def-csm-phase-space-reference'],'f0','Probability measures; reference density distinct from singular states; finite moments when used')
item('post-csm-counting-and-physical-observables','Classical particle counting and physical observables','postulate','physics',['def-csm-phase-space-reference','def-csm-statistical-state-observable'],'f0','Operational species resolution; adopted a0 and 1/product factorial; SI identifications')
item('thm-csm-liouville-entropy-transport','Liouville transport and fine-grained entropy invariance','theorem','mathematics',['def-csm-phase-space-reference','def-csm-statistical-state-observable','supplier-nrcm-E7','supplier-thermo-L17','thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions'],'f1','Actual invertible invariant-domain flow; finite absolute entropy integral; no relaxation')
item('thm-csm-regular-shell-coarea','Regular full-energy-shell coarea and invariance','theorem','mathematics',['def-csm-phase-space-reference','supplier-thermo-L20','thm-tonelli-theorem-for-sigma-finite-product-spaces','thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions','supplier-thermo-M27'],'f2','Compact nonempty regular levels/bands; dimensionless geometric coordinates; full-band flow for invariance')
item('thm-csm-kinetic-potential-shell-marginals','Kinetic-plus-potential shell marginals and moments','theorem','mathematics',['thm-csm-regular-shell-coarea','thm-gaussian-integral','thm-tonelli-theorem-for-sigma-finite-product-spaces'],'f3','Compact flat configuration torus; n>=3; bounded smooth U; regular E; all q and p retained')
for s,title in [('microcanonical','Accessible shell or band preparation'),('canonical','Canonical thermal preparation'),('grand','Grand canonical particle-exchange preparation'),('isobaric','Isothermal-isobaric joint preparation')]:
 deps=['post-csm-counting-and-physical-observables','def-csm-statistical-state-observable']
 if s=='microcanonical':deps+=['thm-csm-regular-shell-coarea']
 item('post-csm-'+s+'-preparation',title,'postulate','physics',deps,'f4','Explicit reservoir/accessibility/counting assumptions; normalized law only when finite; independent of deterministic dynamics')
item('thm-csm-exponential-normalization-covariance','Dominated exponential normalization and covariance','theorem','mathematics',['def-csm-statistical-state-observable','supplier-thermo-M27','supplier-thermo-M36','thm-dominated-convergence'],'f5','Compact-parameter integrable second-moment envelope; observables require additional product envelopes')
item('pthm-csm-canonical-response-identities','Canonical energy and fluctuation responses','physics-theorem','physics',['post-csm-canonical-preparation','thm-csm-exponential-normalization-covariance'],'f5','Fixed N, domain, Hamiltonian and reference; finite dominated derivatives')
item('pthm-csm-grand-response-identities','Grand responses in beta and chemical potential','physics-theorem','physics',['post-csm-grand-preparation','thm-csm-exponential-normalization-covariance'],'f5','Uniform H,N second moments over whole sector sum; fixed mu derivative concerns H-muN')
item('pthm-csm-isobaric-response-identities','Isobaric volume and enthalpy fluctuations','physics-theorem','physics',['post-csm-isobaric-preparation','thm-csm-exponential-normalization-covariance'],'f5','Named volume reference/prior; finite enthalpy and volume moments; finite-ensemble response')
item('thm-csm-relative-gibbs-variational-principle','Reference-relative entropy and Gibbs variational inequality','theorem','mathematics',['def-csm-statistical-state-observable','supplier-thermo-M27','thm-csm-exponential-normalization-covariance'],'f6','Same reference; finite energy/entropy for equality expansion; KL may be infinite')
item('pthm-csm-ensemble-potentials','Ensemble entropy and potential differentials','physics-theorem','physics',['post-csm-canonical-preparation','post-csm-grand-preparation','post-csm-isobaric-preparation','thm-csm-relative-gibbs-variational-principle','thm-csm-exponential-normalization-covariance'],'f6','Valid smooth controls; reference and moving-domain corrections; no derivative in integer N')
item('thm-csm-equipartition-boundary-lemma','Equipartition with explicit boundary terms','theorem','mathematics',['thm-tonelli-theorem-for-sigma-finite-product-spaces','supplier-thermo-M27'],'f7','Product coordinates, absolute derivative integrability and vanishing integrated boundary terms')
item('pthm-csm-canonical-momentum-equipartition','Canonical momentum distribution and equipartition','physics-theorem','physics',['post-csm-canonical-preparation','thm-csm-equipartition-boundary-lemma','thm-gaussian-integral'],'f7','Unconstrained momentum components; bounded U and finite Q or verified tails')
for id,title,deps,sec in [
 ('ex-csm-ideal-canonical-grand','Exact ideal-gas canonical and grand laws',['pthm-csm-canonical-response-identities','pthm-csm-grand-response-identities','thm-gaussian-integral'],'b1'),
 ('ex-csm-ideal-full-shell','Full ideal-gas shell moments and entropy conventions',['post-csm-microcanonical-preparation','thm-csm-kinetic-potential-shell-marginals'],'b2'),
 ('ex-csm-ideal-isobaric','Exact finite ideal-gas volume fluctuations',['pthm-csm-isobaric-response-identities','thm-gaussian-integral'],'b3'),
 ('ex-csm-finite-mixing-count','Finite-size mixing and distinguishability conventions',['post-csm-counting-and-physical-observables','thm-csm-relative-gibbs-variational-principle','thm-gaussian-integral'],'b4')]:
 item(id,title,'example','physics',deps,sec,'Exact conditional calculation; no fabricated empirical observations','B')
(p/'inventory.json').write_text(json.dumps({'version':1,'items':rows,'external_resolution':'supplier-map.json; supplier labels are research contracts, not invented production IDs'},indent=2)+'\n')
local={r['id']:r for r in rows};ext={r['id'] for r in maps};done=set();stack=set()
def visit(i):
 assert i not in stack,('cycle',i)
 if i in done:return
 stack.add(i)
 for j in local[i]['deps']:
  assert j in local or j in ext,('unresolved',i,j)
  if j in local:
   assert local[j]['side']=='A',('B supplier',i,j)
   assert not(local[i]['domain']=='mathematics' and local[j]['domain']=='physics'),('physics-to-math',i,j)
   visit(j)
 stack.remove(i);done.add(i)
for i in local:visit(i)
body=(p/'ensemble-proofs.md').read_text()
for row in rows:assert 'id="'+row['proof_module'].split('#')[1]+'"' in body,row
count={s:sum(r['side']==s for r in rows) for s in ['A','B']};assert max(count.values())<=100
report={'date':'2026-10-04','local_dag':'pass','all_dependency_refs_resolve_to_local_or_exact_supplier_map':'pass','mathematics_boundary':'pass','B_leaves':'pass','anchors':'pass','page_counts':count,'required_residuals':[],'checks_scope':'reproducible structural self-check; author proof review, not independent acceptance','scope_limits':['Regular compact full-energy shells only, no critical-shell normalization','Ensemble probability preparation is adopted, not derived from deterministic mechanics','No unrestricted ensemble equivalence or continuum thermodynamic limit','NPT volume-reference convention explicit; finite-N corrections retained','No empirical report authored or precision invented'],'primary_body_sha256':hashlib.sha256(body.encode()).hexdigest()}
(p/'checks.json').write_text(json.dumps(report,indent=2)+'\n');print(report)
