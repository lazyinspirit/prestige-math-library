from pathlib import Path
import json,re,hashlib,datetime,shutil
r='machine-learning-all-101-2026-10-19';b=Path('research/'+r+'-owner-native-smoke-calibration/your-proposal');(b/'before').mkdir(exist_ok=True);(b/'before/items').mkdir(exist_ok=True)
configs={
'def-proper-scoring-rule':('ml101-finite-proper-scoring',['binary-boundary'],'Definition','The logarithmic loss is'),
'lem-jensen-for-simplex-pairs':('ml101-simplex-pair-jensen',['constant-vector'],'Statement',r'\psi(\mathbb E U'),
'lem-negative-root-power-is-convex':('ml101-negative-root-power',['s=1','s=2'],'Statement','For every real'),
'def-probability-calibration':('ml101-forecast-event-calibration',['truthful-prior'],'Definition',r'\mathbb P(Y=j,\ G\in B)'),
'lem-finite-label-conditional-probability-function':('ml101-finite-label-conditioning',['singleton-feature'],'Statement',r'P(X\in A,\ Y=y_j)'),
 'thm-log-and-brier-strict-propriety':('ml101-finite-proper-scoring',['binary-boundary','truthful-equality'],'Statement','For every'),
'cor-any-feature-induces-calibrated-forecast':('ml101-forecast-event-calibration',['constant-feature'],'Statement','Assume AC.'),
 'thm-posterior-forecast-minimizes-scoring-risk':('ml101-posterior-brier-vector',['binary-vector'],'Statement','Assume AC.'),
'def-classification-calibration-of-a-surrogate':('ml101-logistic-margin',['positive-label-endpoint'],'Definition',r'L_\Phi(x,u)'),
 'thm-binned-calibration-estimator-limits':('ml101-binned-calibration',['one-bin-cancellation'],'Statement',r'E_{\mathcal P}=\sum'),
 'lem-binary-zero-one-risk-excess-with-zero-tie':('ml101-zero-score-risk',['fair-label','positive-label'],'Statement',r'R_{01}(h)-R_{01}^*='),
 'fs-unadjusted-surrogate-regret-bound':('ml101-surrogate-regret-witness',['hinge-scale','hinge-tie'],'Refutation','1.1 Give'),
 'thm-surrogate-regret-controls-classification-regret':('ml101-surrogate-regret-witness',['logistic-scale','logistic-tie'],'Source notes','Mohri'),
 'ex-multiclass-calibration-notions-differ':('ml101-multiclass-calibration',['A','B','C'],'Example','Use the smallest-index'),
 'ex-calibrated-constant-prior-forecast':('ml101-forecast-event-calibration',['truthful-prior'],'Example','Give $X'),
 'ex-fixed-bin-ece-underestimates-calibration-error':('ml101-binned-calibration',['one-bin-cancellation'],'Example','Give $X'),
 'ex-calibrated-coarsened-risk-score-is-low-information':('ml101-coarsened-forecast',['merge-a-b'],'Example','Give $X'),
 'alg-split-conformal-set-for-classification':('ml101-split-conformal-threshold',['zero-calibration','one-calibration'],'Definition','If $k\\le m$'),
 'def-top-label-calibration':('ml101-top-label-events',['overconfident','truthful'],'Definition',r'\mathbb P(Y=\widehat Y'),
 'alg-validation-temperature-scaling':('ml101-temperature-validation',['four-labels'],'Definition','compute'),
 'def-binned-expected-calibration-error':('ml101-binned-top-error',['three-quarter-overconfident','three-quarter-matched'],'Definition',r'\operatorname{ECE}_{'),
 'thm-positive-temperature-scaling-preserves-argmax':('ml101-temperature-argmax',['T1','T2','all-tied'],'Statement','Then'),
 'ex-calibration-degradation-under-shift':('ml101-calibration-shift',['accurate-overconfident','four-point-validation','rare-subgroup','source-target'],'Example','Four finite cases')}
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();ops=[];bindings=[];rows=[]
for batch in[8,72]:
 path=Path('research')/(r+f'-batch-{batch}.proof-contracts.json');shutil.copyfile(path,b/'before'/path.name);doc=json.loads(path.read_text())
 for id,c in doc['contracts'].items():
  before=c['finite_smoke'];check,fixtures,heading,needle=configs[id];assert len(fixtures)==len(before),(id,fixtures,before)
  source=Path('items')/(id+'.md');raw=source.read_text();shutil.copyfile(source,b/'before/items'/source.name)
  match=re.search(r'^## '+re.escape(heading)+r'\n([\s\S]*?)(?=^## |\Z)',raw,re.M);assert match,id
  paras=[p.strip()for p in re.split(r'\n\s*\n',match[1])if p.strip()];hits=[p for p in paras if needle in p]
  # Source-note witness paragraph may start with another source attribution;
  # take its complete current paragraph rather than inventing an excerpt.
  assert hits,(id,heading,needle)
  assertion=hits[0];assert assertion in raw
  after=[]
  for index,(old,fixture)in enumerate(zip(before,fixtures)):
   selected=assertion
   if id=='fs-unadjusted-surrogate-regret-bound':
    selected=next(p for p in paras if p.startswith('1.1 Give' if fixture=='hinge-scale' else '2.1 Independently'))
   if id=='ex-calibration-degradation-under-shift':
    prefix={'accurate-overconfident':'First,','four-point-validation':'Second,','rare-subgroup':'Third,','source-target':'Fourth,'}[fixture]
    selected=next(p for p in paras if p.startswith(prefix))
   row={**old,'check':check,'parameters':{'fixture':fixture},'asserts':selected}
   if id=='thm-posterior-forecast-minimizes-scoring-risk':
    row['historical_result']=row['result'];row['result']='For binary probability vectors P=(p,1-p) and Q=(q,1-q), direct Brier expected-loss excess is ||Q-P||_2^2=2(q-p)^2; equality forces Q=P.'
   after.append(row);rows.append({'batch':batch,'id':id,'index':index,'smoke':row})
  assert len(after)==len(before)
  ops.append({'operation':'replace-exact-finite-smoke-field','path':str(path),'contract_key':id,'field':'finite_smoke','before':before,'after':after,'source_guard':{'path':str(source),'raw_sha256':sha(source)},'cas':'Require exact current finite_smoke array equality under this contract key; replace only that field and preserve every other contract key/property. Source raw hash and current assertion excerpt must still match.'})
  bindings.append({'path':str(source),'raw_sha256':sha(source)})
failedpath=Path('research/'+r+'-owner-step2-native-full-failures/smoke-failed-rows.json');nativepath=failedpath.with_name('native-original.json');failed=[x for x in json.loads(failedpath.read_text())if int(x['batch'])in[8,72]];assert len(failed)==38==len(rows)
(b/'scoped-native-failed-rows.json').write_text(json.dumps(failed,indent=2)+'\n')
proposal={'version':1,'kind':'staged-bounded-calibration-finite-smoke-proposal','run':r,'cycle':1,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope_batches':[8,72],'module':{'path':str(b/'finite-smoke-calibration-ml.mjs'),'export':'calibrationMLChecks','sha256':sha(b/'finite-smoke-calibration-ml.mjs')},'obligations_before':38,'obligations_after':38,'operations':ops,'source_bindings':bindings,'source_proof_changes':[],'metadata_correction':[{'id':'thm-posterior-forecast-minimizes-scoring-risk','field':'finite_smoke[0].result','reason':'The binary scalar square coefficient1 in the old finite-smoke prose does not match the actual two-coordinate Brier definition. Full-vector regret is squared Euclidean distance=2(q-p)^2. Actual theorem/proof unchanged; complete original row archived and historical_result retained.'}],'existing_fixture_reuse':'No current registered fixture matches these finite categorical/calibration/temperature/conformal obligations. Existing normal working-model calibration is a different continuous coverage model and is not substituted.','native_failure_evidence':[{'path':str(failedpath),'sha256':sha(failedpath)},{'path':str(nativepath),'sha256':sha(nativepath)}],'root_integration':['Root reviews/copies staged self-contained module and merges calibrationMLChecks into production CHECKS; guard against name collisions.','Apply exact per-contract finite_smoke field CAS only; preserve old obligation count and all unrelated contract properties.','Accept the explicit Brier finite-metadata correction; do not change actual source claims/proofs.','Root executes ordinary current native battery. Focused staged callback results confer no general proof, native execution or gate credit.'],'actual_repo_or_contract_mutations':False}
(b/'field-cas.json').write_text(json.dumps(proposal,indent=2)+'\n');(b/'focused-rows.json').write_text(json.dumps(rows,indent=2)+'\n');print('prepared',len(ops),'fieldCASoperations;',len(rows),'boundedobligations')
