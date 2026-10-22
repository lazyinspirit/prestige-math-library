from pathlib import Path
import json,hashlib,datetime,shutil
R='physics-non-fluid-129-2026-10-21-r2'; B=Path(f'research/{R}-owner-step5-initial-ledger-proposal'); D=B/'same-issue-review'; guards={}
h=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
def bind(p,copy=True):
 p=Path(p); rec={'path':str(p),'sha256':h(p)}
 if copy:
  target=D/'preimages'/p;target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,target);rec.update({'archive':str(target),'archive_sha256':h(target)})
 guards[str(p)]=rec;return rec
subjects={'85':'lem-csm-frontier-finite-chain-martingale','93':'def-csm-frontier-boltzmann-grad-scaling','69':'def-qftx-euclidean-limit-data','120':'post-tgrx-free-collapse-scattering'}
original_candidates_sha=h(B/'canonical-candidates.jsonl');bind(B/'canonical-candidates.jsonl',False)
pack=json.loads(Path(f'research/{R}-step5-v2/initial-1.json').read_text());bind(f'research/{R}-step5-v2/initial-1.json')
rows=[json.loads(x) for x in Path('research/defect-ledger.jsonl').read_text().splitlines() if x];bind('research/defect-ledger.jsonl')
normal=json.loads((B/'normalization-proposal.json').read_text());candidates=[json.loads(x) for x in (B/'canonical-candidates.jsonl').read_text().splitlines()]
records=[];adoption=[];selected=[]
for u,sid in subjects.items():
 n=next(n for n in normal if n['native_decision']['id']==sid);new=next(x for x in candidates if x['subject']==sid);selected.append(new)
 prior=[x for x in rows if x.get('run')==R and x.get('subject')==sid]
 current=bind(f'items/{sid}.md');native=bind(f'research/{R}-step5-v2/step5-v2-initial-r1-u{u}.json')
 for suffix in [f'step3-scope-{u}.json',f'alpha-batch-{u}-3a-decisions.json',f'alpha-batch-{u}-3a.md',f'step3-hash-{u}-pre.json',f'step3-hash-{u}-post.json']:bind(f'research/{R}-{suffix}')
 originals=[]
 for uu in [u]+(['121'] if u=='120' else []):
  sp=Path(f'research/{R}-step3-scope-{uu}.json');bind(sp);scope=json.loads(sp.read_text())
  for lane in ['reader_findings','refuter_findings']:
   for finding in scope[lane]:
    if finding.get('id')==sid:originals.append({'scope':str(sp),'lane':lane,'finding':finding})
 before=(D/'recovered-pre-step5'/f'{sid}.md') if u!='120' else Path(f'research/{R}-owner-step5-tgr-referrals/observed/pre-native-u120-postulate.md')
 bind(before,False)
 assert h(before)==next(x['item_sha256'] for x in pack['assignments'][u] if x['id']==sid)
 records.append({'unit':u,'subject':sid,'classification':'distinct-actual-defect','action':'append-distinct-closed-row-after-genuine-native-collection','supersedes':[],'current_source':current,'native_report':native,'before_step5':{'path':str(before),'raw_sha256':h(before),'authenticated_against':'exact original frozen judge tuple item_sha256'},'original_observations':originals,'prior_rows':prior,'new_native_decision':n['native_decision'],'new_native_review':n['native_review'],'new_adjudication_ref_expected':n['future_adjudication_ref'],'reasoning':'review.md, section u'+u,'ambiguities':[],'acceptance_limit':'Exact defect comparison and local current-repair mechanism only; original whole-item acceptance not inferred.'})
 adoption.append({'unit':u,'subject':sid,'action':'append-distinct-closed-row','candidate_defect_id':new['defect_id'],'source_candidate_file':str(B/'canonical-candidates.jsonl'),'source_candidate_file_sha256':original_candidates_sha,'proposed_row':new,'do_not_supersede':[x['defect_id'] for x in prior],'old_obligations_remain_owned_by_existing_rows':[{'defect_id':x['defect_id'],'adjudication_ref':x.get('adjudication_ref',[])} for x in prior],'root_conditions':['Verify actual collected judge-adjudications entry has exact model/context/initial/round1/pack.before fingerprint.','Reconcile exact current source/report guards and adopt taxonomy.','Keep old rows and observations byte-for-byte; do not copy old distinct obligation ownership into this new row.']})
for p in [f'research/{R}-owner-step2-baseline/items/def-qftx-euclidean-limit-data.md',f'research/{R}-owner-step2-csm84-85-99/current/lem-csm-frontier-finite-chain-martingale.md',f'research/{R}-owner-step2-csm90-93/final/items/def-csm-frontier-boltzmann-grad-scaling.md']:
 bind(p)
for p in ['items/def-continuous-time-adapted-process-and-martingale.md','items/thm-taking-out-what-is-known.md','items/thm-tower-property-of-conditional-expectation.md','items/def-csm-frontier-finite-generator-chain.md','items/lem-csm-frontier-finite-generator-chain-existence.md','items/def-qft-positive-tempered-moments.md','items/cex-qftx-positive-not-reflection-positive.md','items/lem-qft-fock-ccr-car.md','tools/defect-ledger-ownership.mjs','tools/physics-support/defect-ledger.mjs','tools/physics-support/defect-ledger-taxonomy.mjs']:bind(p)
T=Path(f'research/{R}-owner-step5-tgr-referrals')
for p in ['pre-native-source-recovery.json','consumer-reviews.json','source-guards.json','final-current-guard-check.json','review.md','observed/u120-actual-delta.diff','sources/reading-receipt.json']:bind(T/p)
use=json.loads((T/'consumer-reviews.json').read_text());currency=[]
for item in use['reviews']:
 p=Path(item['path']);currency.append({'id':item['id'],'path':str(p),'reviewed_raw_sha256':item['raw_sha256'],'current_raw_sha256':h(p),'same':h(p)==item['raw_sha256']})
(D/'attributed-tgr-consumer-currency.json').write_text(json.dumps({'scientific_owner':'/root/step5_tgr_referrals','scope':'Currency check of actual owner eleven-use evidence only; not a duplicated independent audit','reviews':currency},indent=2)+'\n')
(D/'report.json').write_text(json.dumps({'version':1,'run':R,'scientific_owner':'/root/step5_noether_referral','cycle':1,'review_scope':'four exact same-issue comparisons only','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'decisions':records,'classification_counts':{'distinct_actual_defect':4,'same_actual_defect':0,'ambiguous':0},'candidate_104_unchanged_sha256':original_candidates_sha,'tgr_scientific_owner':'/root/step5_tgr_referrals','tgr_evidence_currency_matches':all(x['same'] for x in currency),'source_edits':False,'ledger_edits':False,'native_acceptance':False,'fresh_reading_limits':'Complete four current carriers; authentic pre-Step5 u69/u85/u93 and complete native diffs; exact pre-u120 field-quantization paragraph and its genuine native diff; exact prior ledger rows/scopes/decisions/reviews and named local suppliers. Only relevant themes in authenticated pre-Step3 sources. No new external retrieval; actual TGR owner eleven-use review reused with attribution and currency checks.'},indent=2,ensure_ascii=False)+'\n')
(D/'adoption-proposal.json').write_text(json.dumps({'version':1,'run':R,'proposal_only':True,'records':adoption},indent=2,ensure_ascii=False)+'\n')
(D/'distinct-new-row-candidates.jsonl').write_text(''.join(json.dumps(x,ensure_ascii=False)+'\n' for x in selected))
(D/'evidence-guards.json').write_text(json.dumps(guards,indent=2)+'\n')
assert h(B/'canonical-candidates.jsonl')==original_candidates_sha
print('4 distinct actual defects; original candidate SHA256',original_candidates_sha,'; TGR eleven-use guards current:',all(x['same'] for x in currency))
