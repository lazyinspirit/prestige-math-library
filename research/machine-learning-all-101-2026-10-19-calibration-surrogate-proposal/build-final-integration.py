from pathlib import Path
import json,hashlib,datetime
b=Path('research/machine-learning-all-101-2026-10-19-calibration-surrogate-proposal');r='machine-learning-all-101-2026-10-19';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();now=datetime.datetime.now(datetime.timezone.utc).isoformat()
oldcov=json.loads((b/'before'/(r+'-batch-8.coverage.json')).read_text());newcov=json.loads((b/'proposed'/(r+'-batch-8.coverage.json')).read_text())
source_map=[]
for oldp,newp in zip(oldcov['pages'],newcov['pages']):
 for olds in oldp['sources']:
  if 'Gneiting' not in olds.get('title',''):continue
  news=next(s for s in newp['sources'] if s['url']==olds['url'])
  assert olds.get('recovery_attempts')==news.get('recovery_attempts')
  assert olds['source_resolution']==news['historical_source_resolution']
  assert olds['contents']==news['contents']
  source_map.append({'page':oldp['page'],'url':olds['url'],'old_source_sha256':hashlib.sha256(json.dumps(olds,sort_keys=True).encode()).hexdigest(),'proposed_source_sha256':hashlib.sha256(json.dumps(news,sort_keys=True).encode()).hexdigest(),'old_fetch_verified':olds.get('fetch_verified'),'new_fetch_verified':news.get('fetch_verified'),'persisted_recovery_history_identical':True,'prior_resolution_preserved_exactly':True,'harvested_contents_identical':True,'replacement_source_resolution':news['source_resolution']})
source_evidence={'version':1,'kind':'staged-owner-source-resolution-addendum','run':r,'batch':'8','recorded_at':now,'status':'for-root-owner-integration-not-a-native-report','original_native_evidence':{'path':'research/'+r+'-batch-8.source-evidence.json','sha256':sha(Path('research/'+r+'-batch-8.source-evidence.json')),'unchanged':True},'original_notes':{'path':'research/'+r+'-batch-8.notes.md','sha256':sha(Path('research/'+r+'-batch-8.notes.md')),'unchanged':True},'original_pdf':{'available':True,'staged_path':str(b/'source-disposition/recovered-gneiting-raftery-2007.pdf'),'bytes':530000,'sha256':'2d10f1552e922bfcb37b040bc47ed5eb0ab91c5596182887be637e438300c566','original_native_fetch_stamp':False},'per_page_integration':source_map,'new_distinct_work':json.loads((b/'source-disposition/independent-scoring-rule.coverage.json').read_text())['pages'][0]['sources'][0],'result_semantics':{'source_objects':10,'actual_native_fetch_stamps':8,'documented_local_alternative_dispositions':2,'all10_fetched':False,'new_gr_retries':0,'attempt_reset':False,'native_execution_or_mathematical_approval_supplied':False}}
p=b/'proposed'/(r+'-batch-8.owner-source-resolution.json');p.write_text(json.dumps(source_evidence,indent=2)+'\n')
entries=[]
def entry(actual,proposed,mode='replace'):
 a=Path(actual);p=Path(proposed)
 entries.append({'destination':actual,'operation':mode,'before_exists':a.exists(),'before_raw_sha256':sha(a) if a.exists() else None,'proposed_file':str(p),'proposed_raw_sha256':sha(p),'root_guard':'Require current destination raw bytes equal before_raw_sha256, or still absent for new files; otherwise stop and reconcile. After copying verify proposed hash exactly.'})
for p in sorted((b/'proposed/items').glob('*.md')):
 actual=Path('items')/p.name
 if not actual.exists() or p.read_bytes()!=actual.read_bytes():entry(str(actual),str(p),'create' if not actual.exists() else 'replace')
for suffix in ['pages.json','proof-contracts.json','coverage.json']:
 p=b/'proposed'/(r+'-batch-8.'+suffix);entry('research/'+p.name,str(p))
entry('library/machine-learning/calibration-proper-losses-and-surrogate-classification.md',str(b/'proposed/calibration-proper-losses-and-surrogate-classification.md'))
for suffix in ['owner-addendum.md','owner-source-resolution.json']:
 p=b/'proposed'/(r+'-batch-8.'+suffix);entry('research/'+p.name,str(p),'create')
plan=Path('research/plan-machine-learning-track.md');text=plan.read_text();section=text[text.index('### ML-07'):text.index('### ML-08')];before=b/'before/ML-07.md';assert section==before.read_text()
map={'version':1,'kind':'guarded-staged-replacement-map','run':r,'batch':'8','cycle':2,'final_review_repair_cycle':True,'recorded_at':now,'entries':entries,'canonical_plan_stanza':{'destination':str(plan),'operation':'replace-exact-stanza-only','current_full_raw_sha256':sha(plan),'before_stanza_file':str(before),'before_stanza_sha256':sha(before),'replacement_stanza_file':str(b/'proposed/ML-07.md'),'replacement_stanza_sha256':sha(b/'proposed/ML-07.md'),'guard':'Require exactly one occurrence of the complete archived ML-07 stanza and replace it literally; preserve every other byte. Root separately owns all111description-pointer/plan-spec/binding mirrors and their current guards.'},'preserve_native_files':[source_evidence['original_native_evidence'],source_evidence['original_notes']],'staged_strict_preview':{'result_file':str(b/'strict-contract-preview.json'),'actual_run_gate':False,'method':'Byte-identical native checker/modules relocated under isolated staged root; full17staged carriers and only their actual current quoted suppliers selected.'},'root_required':'Make actual owner source-disposition decision and current-input acceptance, integrate exact replacements, refresh actual source/plan mirrors and hashes, run normal strict current contract/source/formatting readiness recertification. No original native artifact is rewritten.'}
(b/'integration-map.json').write_text(json.dumps(map,indent=2)+'\n')
print('guarded',len(entries),'concrete replacements/creations plus exact canonical stanza; native notes/evidence preserved')
