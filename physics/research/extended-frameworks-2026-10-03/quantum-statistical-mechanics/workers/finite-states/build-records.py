from pathlib import Path
import json,hashlib
p=Path(__file__).parent;rows=[];sup=[]
def s(id,path,section,claim,hyp,use,status):
 sup.append(dict(id=id,path=path,section=section,statement=claim,hypotheses=hyp,consumer_use=use,status=status,actual_reading='complete relevant definition/statement/proof text read',sha256=hashlib.sha256(Path(path).read_bytes()).hexdigest()))
root=[
 ('def-trace-class-operator','Compact operator with summable singular values','Countable Choice; Hilbert spaces; compact operator','Q1 trace-class definition'),
 ('def-trace-of-a-trace-class-operator','Absolute diagonal trace on supplied basis','Countable Choice; trace-class; basis supplied as data','Q1 trace definition'),
 ('thm-trace-is-absolutely-convergent-and-basis-independent','Nuclear trace is absolutely defined, basis independent and trace-norm continuous','Countable Choice; summable nuclear representation; trace-class operator','Q1,Q5 trace expansion'),
 ('thm-trace-class-is-a-two-sided-banach-operator-ideal','S1 completeness and bounded two-sided ideal estimate','Countable Choice; bounded factors; trace-class middle operator','Q1 cyclicity/mixtures/expectations'),
 ('thm-spectral-theorem-for-compact-self-adjoint-operators','Countable nonzero spectral eigenspaces span support, no ambient kernel basis required','Countable Choice; compact self-adjoint operator','Q1,Q4 density spectrum; Q5 injective compact Gibbs spectrum'),
 ('thm-bounded-borel-pvm-integral','Bounded measurable PVM integration pairing and norm identities','Countable Choice; nonzero complex Hilbert/PVM; bounded Borel function','Q1 moment probabilities; Q5 Gibbs exponential and spectral concentration'),
 ('thm-spectral-theorem-for-unbounded-self-adjoint-operators','Regular real spectral PVM and exact second-moment operator domain','AC; self-adjoint densely defined operator','Q1 unbounded moments/form domains; Q5 self-adjoint Gibbs')]
for id,claim,hyp,use in root:
 s(id,'items/'+id+'.md','Definition' if id.startswith('def-') else 'Statement and Proof',claim,hyp,use,'published; recorded audited2026-09-22')
qm='physics/research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/mathematical-prerequisites.md';th='physics/research/first-principles-2026-10-03/thermodynamics/scaffold/completed-developments.md'
for id,path,section,claim,hyp,use in [
 ('supplier-nrqm-M2',qm,'M2','Density spectral probabilities and scalar observable moments','nonzero separable Hilbert; positive trace-class density; PVM; first/second moment domain','Q1 normal states/measurement interface'),
 ('supplier-nrqm-M3',qm,'M3','Finite partial trace and its expectation pairing','finite Hilbert tensor product; positive density','Q3 finite subadditivity; B3'),
 ('supplier-nrqm-M9',qm,'M9','Nuclear cyclicity and separable partial trace','separable Hilbert spaces; nuclear summability; bounded test factors','Q1 bounded cyclicity'),
 ('supplier-nrqm-M25',qm,'M25','Finite Gibbs entropy optimization','finite Hermitian H; density matrices; scalar Jensen/KL; physical preparation separate','Q3 finite variational comparison'),
 ('supplier-thermo-M16',th,'M16','Countable canonical differentiation and spectral entropy','compact-beta summable exponential energy second-moment envelope','Q5 dominated trace-Gibbs derivatives'),
 ('supplier-thermo-M27',th,'M27','Measure convergence and density KL inequality','specified measure; integrable dominating functions; same reference','Q4 countable entropy/KL; Q5 moment derivatives'),
 ('supplier-thermo-M33',th,'M33','Self-adjoint trace-Gibbs spectral normalization','AC; H bounded below; Gibbs exponential trace class on open interval; exact spectral/trace suppliers','Q5 general normal Gibbs existence/eigenbasis/entropy'),
 ('supplier-thermo-M36',th,'M36','Grand covariance coordinate identities','commuting energy/count scalar laws; finite or uniform summable joint moment envelopes','Q5 qualified commuting grand derivatives')]:
 s(id,path,section,claim,hyp,use,'completed-scoped-research-proof; not-production')
s('qsm-contract-td-M32',th,'M32','Every bounded real finite-dimensional sequence has a convergent subsequence; closed bounded sets contain limits; deterministic nested-box proof','Finite real dimension; real completeness; coordinate bisection; no infinite-dimensional compactness','Q0 unit-sphere maximum in finite Hermitian spectral induction','completed research-prose supplier; not production/published item')
(p/'supplier-map.json').write_text(json.dumps({'version':1,'suppliers':sup,'choice':'AC for unbounded spectral theorem; Countable Choice for trace/compact interfaces; no physical premise','unproved_plans_consumed':[]},indent=2)+'\n')
def i(id,title,kind,domain,deps,sec,scope,side='A'):
 rows.append(dict(id=id,title=title,kind=kind,domain=domain,deps=deps,dependency_roles={j:('mathematical-premise' if domain=='mathematics' or not j.startswith('post-') else 'physical-assumption') for j in deps},proof_module='state-proofs.md',proof_section=sec,proof_anchor='state-proofs.md#'+sec,scope=scope,side=side,page='qsm-states-ensembles'+('-examples' if side=='B' else ''),status='proposed-research-interface'))
i('lem-qsm-matrix-state-calculus','Finite matrix spectral and state calculus','lemma','mathematics',['qsm-contract-td-M32'],'q0','Finite complex dimension positive; explicit spectral proof, trace, Cauchy-Schwarz, purity/extremality')
i('def-qsm-density-trace-state','Normal density states and spectral moments','definition','mathematics',['def-trace-class-operator','def-trace-of-a-trace-class-operator','thm-spectral-theorem-for-unbounded-self-adjoint-operators'],'q1','Nonzero separable Hilbert; trace-class normal states; explicit observable moment/form domains')
i('lem-qsm-trace-state-calculus','Trace-state cyclicity and spectral probability calculus','lemma','mathematics',['def-qsm-density-trace-state','thm-trace-is-absolutely-convergent-and-basis-independent','thm-trace-class-is-a-two-sided-banach-operator-ideal','thm-spectral-theorem-for-compact-self-adjoint-operators','thm-bounded-borel-pvm-integral','supplier-nrqm-M2','supplier-nrqm-M9'],'q1','Bounded factors only; trace-norm mixtures; PVM probability; entropy may diverge')
i('lem-qsm-matrix-exponential-response','Duhamel derivative, Kubo–Mori response and log-trace bound','lemma','mathematics',['lem-qsm-matrix-state-calculus'],'q2','Finite matrices; C1 paths/C2 controls; static noncommuting covariance; norm Lipschitz')
i('def-qsm-relative-entropy-domain','Quantum spectral entropy and relative-entropy domains','definition','mathematics',['lem-qsm-matrix-state-calculus','def-qsm-density-trace-state','lem-qsm-trace-state-calculus'],'q3','Finite support inclusion; trace cross-log extension Q4 excludes undefined infinity subtraction')
i('thm-qsm-finite-gibbs-variational','Finite Gibbs free-energy and entropy optimization','theorem','mathematics',['lem-qsm-matrix-state-calculus','def-qsm-relative-entropy-domain','supplier-nrqm-M25'],'q3','Rank-deficient competitors; faithful finite Gibbs; exact equality case')
i('thm-qsm-finite-entropy-composition','Finite mixing, product entropy and bipartite subadditivity','theorem','mathematics',['thm-qsm-finite-gibbs-variational','supplier-nrqm-M3'],'q3','Finite densities including kernels; partial-trace support inclusion; no SSA or general DPI')
i('thm-qsm-trace-cross-log-inequality','Trace-class cross-log entropy inequality','theorem','mathematics',['lem-qsm-trace-state-calculus','def-qsm-relative-entropy-domain','supplier-thermo-M27'],'q4','Finite cross-log moment forces finite entropy; full equality case; no infinity-minus-infinity')
i('thm-qsm-trace-gibbs-variational','Self-adjoint trace-Gibbs normalization and form-energy optimization','theorem','mathematics',['thm-qsm-trace-cross-log-inequality','supplier-thermo-M33','supplier-thermo-M16','thm-spectral-theorem-for-unbounded-self-adjoint-operators','thm-bounded-borel-pvm-integral'],'q5','Bounded-below self-adjoint H; trace exponential on open beta interval; all finite-form-energy normal competitors')
i('lem-qsm-finite-gibbs-kms','Finite unitary, stationarity and Gibbs KMS identities','lemma','mathematics',['lem-qsm-matrix-state-calculus','lem-qsm-matrix-exponential-response'],'q6','Finite H; exact strip of height beta*hbar; no infinite-volume existence or relaxation')
i('post-qsm-normal-measurement-state','Normal-state quantum measurement interpretation','postulate','physics',['def-qsm-density-trace-state','lem-qsm-matrix-state-calculus'],'q7','Adopted Hilbert/density/PVM-Born interpretation; infinite algebraic states distinct')
i('post-qsm-thermal-gibbs-preparation','Canonical quantum thermal preparation','postulate','physics',['post-qsm-normal-measurement-state','thm-qsm-finite-gibbs-variational','thm-qsm-trace-gibbs-variational'],'q7','Finite or actual trace-Gibbs hypothesis; beta=1/kBT; not a thermalization theorem')
i('post-qsm-band-and-grand-preparation','Energy-band and grand quantum preparations','postulate','physics',['post-qsm-normal-measurement-state','thm-qsm-finite-gibbs-variational','thm-qsm-trace-gibbs-variational'],'q7','Finite-rank nonzero band or exact common-basis/joint-PVM grand domain and summability')
i('pthm-qsm-gibbs-energy-entropy','Gibbs energy, entropy and potential identities','physics-theorem','physics',['post-qsm-thermal-gibbs-preparation','thm-qsm-finite-gibbs-variational','thm-qsm-trace-gibbs-variational'],'q5','Actual trace/moment domain; finite or justified self-adjoint trace model')
i('pthm-qsm-static-quantum-response','Static finite quantum response and covariance','physics-theorem','physics',['post-qsm-thermal-gibbs-preparation','lem-qsm-matrix-exponential-response'],'q2','Finite noncommuting controls use Kubo–Mori; ordinary variance only commuting case')
i('pthm-qsm-commuting-grand-response','Commuting quantum grand responses','physics-theorem','physics',['post-qsm-band-and-grand-preparation','thm-qsm-trace-gibbs-variational','supplier-thermo-M36'],'q5','Actual common energy-number eigenbasis/joint domain and joint summable envelopes')
i('pthm-qsm-equilibrium-unitary-entropy','Unitary entropy and Gibbs equilibrium identities','physics-theorem','physics',['post-qsm-normal-measurement-state','post-qsm-thermal-gibbs-preparation','lem-qsm-trace-state-calculus','lem-qsm-finite-gibbs-kms'],'q6','Normal-unitary spectral entropy invariance; strip identity finite only; no irreversible approach')
for id,title,deps,sec in [
 ('ex-qsm-two-level-noncommuting','Two-level Gibbs and noncommuting susceptibility',['pthm-qsm-static-quantum-response'],'b1'),
 ('ex-qsm-oscillator-trace-gibbs','Oscillator trace Gibbs and divergent normalization',['thm-qsm-trace-gibbs-variational','post-qsm-thermal-gibbs-preparation'],'b2'),
 ('ex-qsm-entanglement-mixture','Pure entanglement and correlated mixtures',['thm-qsm-finite-entropy-composition','post-qsm-normal-measurement-state'],'b3')]:
 i(id,title,'example','physics',deps,sec,'Complete specified-model calculation; no empirical result','B')
role_lookup={r['id']:r for r in rows}
for row in rows:
 for target in row['deps']:
  if row['domain']=='mathematics':role='mathematical-premise'
  elif row['kind']=='postulate':role='formulation-prerequisite'
  elif target in role_lookup and role_lookup[target]['domain']=='physics':role='physical-assumption' if role_lookup[target]['kind']=='postulate' else 'physical-result'
  else:role='mathematical-premise'
  row['dependency_roles'][target]=role
(p/'inventory.json').write_text(json.dumps({'version':1,'items':rows},indent=2)+'\n')
local={x['id']:x for x in rows};ext={x['id'] for x in sup};done=set();active=set();body=(p/'state-proofs.md').read_text()
def visit(a):
 assert a not in active,('cycle',a)
 if a in done:return
 active.add(a)
 for b in local[a]['deps']:
  assert b in local or b in ext,('unresolved',a,b)
  if b in local:
   assert local[b]['side']=='A',('B dependency',a,b)
   assert not(local[a]['domain']=='mathematics' and local[b]['domain']=='physics'),('math boundary',a,b)
   visit(b)
 active.remove(a);done.add(a)
for x in rows:
 visit(x['id']);assert 'id="'+x['proof_section']+'"' in body
counts={a:sum(x['side']==a for x in rows) for a in ['A','B']};assert max(counts.values())<=100
report={'date':'2026-10-04','local_DAG':'pass','dependency_resolution':'pass','mathematics_boundary':'pass','B_leaves':'pass','proof_anchors':'pass','page_caps':'pass','counts':counts,'proof_status':'author complete-argument review and bounded peer source use; no production acceptance','required_residuals':[],'limitations':['No general Umegaki DPI/strong subadditivity asserted','No general infinite noncommuting response','No infinite-energy infinite-entropy subtraction','No interacting continuum existence or general ensemble equivalence','No empirical observations used'],'body_sha256':hashlib.sha256(body.encode()).hexdigest()}
(p/'checks-and-closure.json').write_text(json.dumps(report,indent=2)+'\n');print(report)
(p/'retrieval.json').write_text(json.dumps({'date':'2026-10-04','url':'https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf','http_status':200,'pdf_pages':598,'sha256':hashlib.sha256((p/'.raw/watrous-tqi.pdf').read_bytes()).hexdigest(),'TLS_certificate_verified':False,'failed_retrievals':[],'actual_reading':'source-reading.md'},indent=2)+'\n')
