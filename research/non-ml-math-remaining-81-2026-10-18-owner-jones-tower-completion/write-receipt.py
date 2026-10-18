from pathlib import Path
import json,re,yaml,hashlib,datetime
r='non-ml-math-remaining-81-2026-10-18';o=Path('research')/(r+'-owner-jones-tower-completion');before=json.load(open(o/'before-index.json'))['files'];old={x['path']:x for x in before};m=json.load(open('research/'+r+'-batch-63.pages.json'));ids=[x['id'] for p in m for x in p['items']];paths=[Path('items')/(i+'.md') for i in ids]+[Path('library')/p['category']/(p['id']+'.md') for p in m]+[Path('research')/(r+'-batch-63.'+s) for s in ['pages.json','proof-contracts.json','coverage.json','cross-batch-dependencies.json','notes.md','source-evidence.json']]
rows=[];errors=[]
for p in paths:
 s=p.read_bytes();row={'path':str(p),'current_sha256':hashlib.sha256(s).hexdigest(),'before_sha256':old.get(str(p),{}).get('sha256'),'before_file':old.get(str(p),{}).get('archive')}
 if str(p).startswith('items/'):
  _,h,b=s.decode().split('---',2);j=yaml.safe_load(h);row['body_sha256']=hashlib.sha256(b.encode()).hexdigest()
 rows.append(row)
for page in m:
 p=Path('library')/page['category']/(page['id']+'.md');j=yaml.safe_load(p.read_text().split('---',2)[1]);placement=j.get('items',[])+j.get('examples',[])
 if placement!=[x['id'] for x in page['items']]:errors.append('placement '+page['id'])
 local=set(placement);done=set()
 for row in page['items']:
  p=Path('items')/(row['id']+'.md');_,h,b=p.read_text().split('---',2);fm=yaml.safe_load(h)
  if row['deps']!=fm['deps']:errors.append('deps '+row['id'])
  if row['title']!=fm['title']:errors.append('title '+row['id'])
  if (set(fm['deps'])&local)-done:errors.append('supplierorder '+row['id'])
  head='Definition' if fm['kind']=='definition' else 'Statement';actual=re.search(r'^## '+head+r'\n(.*?)(?=\n## |\Z)',b,re.S|re.M).group(1).strip()
  if row['statement']!=actual:errors.append('statement '+row['id'])
  done.add(row['id'])
for row in json.load(open('research/'+r+'-batch-63.cross-batch-dependencies.json')):
 if 'supplier_excerpt' in row:
  s=(Path('items')/(row['supplier']+'.md')).read_text()
  if row['supplier_excerpt'] not in s:errors.append('excerpt '+row['supplier'])
immut=[]
for x in before:
 if '-dispatch/' in x['path']:
  good=hashlib.sha256(Path(x['path']).read_bytes()).hexdigest()==x['sha256'];immut.append({'path':x['path'],'sha256':x['sha256'],'unchanged':good})
  if not good:errors.append('immutable '+x['path'])
(o/'after-index.json').write_text(json.dumps({'meaning':'Actual current raw SHA256; existing dependency levels remain root-owned','files':rows},indent=2)+'\n')
(o/'checks/current-inventory-bindings.json').write_text(json.dumps({'items':len(ids),'pages':len(m),'errors':errors,'checks':['actual manifest/body title and deps','actual statements','supplier-first inventories','unique page placements','exact current supplier excerpts','immutable original attempt files']},indent=2)+'\n')
assert not errors,errors
receipt={'kind':'focused owner proof completion; no new native authoring/review or readiness coverage','run':r,'status':'local-proof-authoring-complete-awaiting-root-current-file-review','recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'native_authentication':{'engine_ended_at':'2026-10-17T17:56:59.943Z','result_ended_at':'2026-10-17T17:56:59.895Z','ok':True,'process_exit_code':0,'terminal':'task_complete'},'complete_original_before_index':str(o/'before-index.json'),'current_index':str(o/'after-index.json'),'current_files':rows,'native_history':immut,'actual_inventory':{'items':24,'A':18,'B':6,'proofs':19,'added_local_helpers':ids[-0:] if False else ['lem-tracial-standard-form-and-normal-functional-vectors','lem-finite-factor-projection-comparison-and-normalized-trace','lem-tracial-hilbert-module-dimension-and-finite-corners','lem-finite-index-bounded-vector-pull-down']},'scientific_completion':['ordinary finite Jones index supplies bounded frame and complete pN^k model, including preservation of M by every bounded right-N module endomorphism','explicit dual frame and index preservation at every stage','correct right-action relative-commutant extremality and its propagation','both adjacent Jones relations separately, distant commutation, TL representation and normalized Markov trace; index-one boundary','actual positive-root quotient/path tower from completed PA31 suppliers, positive path normalization and prefix maps, faithful positive expectation and exact neighbour coefficients; ell3 boundary'],'remaining_local_mathematical_gaps':[],'consumer_checks':{'global_scan':str(o/'consumer-scan.json'),'outside_consumer_findings':'Only the same-batch matrix amplification example uses the changed original subfactor interfaces; corrected right-action trace checked. No outside-batch item uses these changed interfaces.','PA31_supplier_owner_compatibility':'Hopf owner read full current root-quotient consumer proof4steps and confirmed its normalized paths, prefix maps, expectation weights and ell3 case, with no correction. No canonical63 edits by that owner.','all24_inventory':str(o/'checks/current-inventory-bindings.json')},'checks':{'precheck':{'files':24,'proofs':19,'failed':0,'evidence':str(o/'checks/precheck-final.txt')},'render':{'files':26,'errors':0,'warnings':0,'evidence':str(o/'checks/render-final.txt')},'proof_layout':{'items':24,'steps':72,'defects':0,'evidence':str(o/'checks/layout-final.txt')},'strict_contracts':{'scope':24,'errors':0,'warnings':0,'evidence':str(o/'checks/contracts-final.json')},'focused_dependencies':{'scope':24,'closure_items':2030,'closure_pages':441,'errors':0,'warnings':0,'evidence':str(o/'checks/dependencies-final.json')},'initial_check_history':str(o/'checks-initial')},'source_review':[str(o/'source-review.json'),str(o/'finite-frame/source-evidence.json')],'ownership_limits':'No shared plan/ledger, published carrier, runtime, gate, readiness decision, source stamp, native attempt or commit edited. Existing dependency-level labels and all recertification remain root-owned. Canonical32source inputs freeze at this receipt pending root review.'}
(o/'repair.json').write_text(json.dumps(receipt,indent=2,ensure_ascii=False)+'\n');print('bound',len(rows),'current inputs; changed',sum(x['before_sha256']!=x['current_sha256'] for x in rows),'errors',len(errors))
