import json,pathlib
run='numerical-optimization-dynamics-2026-10-16';base=pathlib.Path('research/'+run+'-ROOT-step4-kept-low-math');p=base/'proposal.json';report=json.loads(p.read_text())
consumer_evidence={
16:{
 'thm-nested-dissection-grid-work-and-storage-bounds':'F4 uses sums over vertices, not the erroneous one-based positions. Proof 1.2 handles one pivot; Proof 2.1-2.2 sum each separator pivot once. Corrected zero-based front sums give exactly those same bounds; no repair.',
 'ex-two-dimensional-poisson-nested-dissection-cost':'F2 and Verification 2.1 instantiate dimension-two grid bounds at k>=2; k=1 is handled directly. No use of an indexing endpoint; no repair.'},
17:{
 'lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence':'Statement is exact-arithmetic sweep; Definition addition explicitly preserves exact shift. Proof 1.1 is a structural bulge induction, 1.2 multiplies unitary factors, 2.1 records actual deflations. These do not depend on shift accuracy; no repair.',
 'thm-bidiagonal-svd-backward-error-under-local-stability':'Statement assumes actual local unitary-update error bounds and recorded discarded entries. Proof 4.1 expressly says shift rounding affects which rotation is chosen, not its certificate. Every successful added schedule yields exactly that existing local rotation interface; range failures are outside successful guarantees. No repair.',
 'cor-computed-singular-values-absolute-error-from-backward-stability':'Statement conditions on a successful diagonal final matrix and exact represented factors; Proof 1.1-2.1 uses nearby-factorization plus Lipschitz singular-value bound, Proof 3.1 handles separate modulus readout. Deflation/sweep schedule addition changes neither these hypotheses nor readout; no repair.',
 'alg-rank-thresholded-least-squares-by-svd':'First Definition paragraph returns inconclusive on any QR failure or budget exhaustion. New shift-stage range failures go through this existing branch. Exact arithmetic branch is unchanged and finite precision remains an unverified candidate; no repair.',
 'thm-svd-thresholded-least-squares-minimum-norm-model':'Statement assumes an exact SVD; Proof 1.1 and 2.1 use its truncated pseudoinverse. Supplier schedule preserves exact arithmetic and cannot turn an unsuccessful finite run into a certified SVD. No repair.',
 'thm-computed-pseudospectrum-membership-enclosure':'Statement requires certified absolute-error pair; A1 explicitly requires all arithmetic/deflation/readout/input allowances and treats budget exhaustion or unavailable bounds as undecided. Proof 1.1-2.1 only uses the supplied interval. New finite shift selection/failure does not alter certificate conditions; no repair.'},
39:{'ex-damped-newton-halves-step-before-local-phase':'Actual scalar dimension is d=1. Verification 1.1 supplies global bounds m=1,M=11; 2.1 directly verifies rho=10^-6,C=10; 3.1 checks epsilon below m^2 rho^2/(2M). Statement extension only adds d=0 convention and existing stationary exit; every invoked positive-dimensional bound remains identical. No repair.'}}
(base/'consumer-context').mkdir(exist_ok=True)
for case in report['cases']:
 b=case['batch'];id=case['id'];case['consumer_review_scope']='All actual direct/indirect deps consumers and source-text uses for changed Statement/Definition; no blanket rereview for Facts/Proof-only changes.' if b in consumer_evidence else 'No Statement/Definition change; no consumer proof rereview triggered.'
 case['consumer_dispositions']=[]
 for cid,evidence in consumer_evidence.get(b,{}).items():
  src=pathlib.Path('items/'+cid+'.md');snap=base/'consumer-context'/src.name;snap.write_bytes(src.read_bytes())
  case['consumer_dispositions'].append({'id':cid,'path':str(src),'source_snapshot':str(snap),'assessment':'unaffected-no-edit','actual_use_evidence':evidence})
 case['future_mirrors']=[{'path':f'research/{run}-batch-{b}.proof-contracts.json','pointer':f'/contracts/{id}','action':'Owner refresh changed step derivation text/inputs and boundary analysis against proposed source, preserving independent-review history; leave unchanged external supplier quotes intact.'}]
 if case['statement_or_definition_changed']:
  case['future_mirrors'].append({'path':f'research/{run}-batch-{b}.pages.json','action':'Refresh only owning item Statement/Definition mirror against admitted source; root owns current raw/canonical hashes and manifest bindings.'})
 # Actual current source-quote references in run contracts, not historical frozen evidence.
 for cp in sorted(pathlib.Path('research').glob(run+'-batch-*.proof-contracts.json')):
  try: contracts=json.loads(cp.read_text()).get('contracts',{})
  except Exception: continue
  for cid,c in contracts.items():
   for k,cit in enumerate(c.get('citations',[])):
    if cit.get('source')==id:
     sec=cit.get('source_section','')
     if case['statement_or_definition_changed'] or sec in ['Proof','Facts & Assumptions']:
      case['future_mirrors'].append({'path':str(cp),'pointer':f'/contracts/{cid}/citations/{k}','source_section':sec,'action':'After formal admission only: mirror exact corrected source section if changed; preserve existing historical receipts and recertify current contexts natively.'})
 if b==13: case['future_mirrors'][0]['specific']='Own derivations/0 (step1.1); boundary worksheet must cover p=0 and m=0.'
 if b==18: case['future_mirrors'][0]['specific']='Own derivation for step2.2 now quantifies nonzero e0; preserve zero initial-error stationary case as valid convergence input.'
 if b==38: case['future_mirrors'][0]['specific']='F2 interpretation now includes m=r+1 for the same moment polynomial; no supplier quote alteration required because its Statement already has this range.'
 if b==39: case['future_mirrors'][0]['specific']='Step1.1 boundary branch and d=0 norm/rho/C/procedure conventions; external local theorem and algorithm quotes keep d>=1 and are only invoked in that branch.'
report['consumer_discovery']={'method':'Parsed current items frontmatter deps and followed transitive reverse edges; searched source text for changed suppliers and subsequent consumers. Changed roots have no aliases. Canonical IDs, direct and indirect consumers recorded above. This is source-interface review, not a validator or certification run.','logical_counts':{'batch16':2,'batch17':6,'batch39':1},'justified_by_note':'QR algorithm justified_by lemma is also direct deps consumer and is included; no reverse scheduling edge invented.'}
report['execution']='Only source/instruction/evidence reads and writes under the named research directory. No canonical item, metadata, ledger, runtime, tool or native history edits. No hashes, tests, gates, formatting commands, native dispatch or commits.'
p.write_text(json.dumps(report,indent=2)+'\n')
