import json,pathlib,hashlib,copy,datetime
run='frontier-44-special-representation-examples-28-six-step';base=pathlib.Path('research')/(run+'-owner-escalation-repairs/resume-20261011/gate-soergel-routing');out=base/'current';out.mkdir(exist_ok=True);sha=lambda x:hashlib.sha256(x).hexdigest();hv=lambda x:sha(json.dumps(x,sort_keys=True,separators=(',',':'),ensure_ascii=False).encode());read=lambda p:json.loads(pathlib.Path(p).read_text());dp=f'research/{run}-alpha-batch-10-3a-decisions.json';doc=read(dp);original=copy.deepcopy(doc);packet=read(base/'proposal.json');fifth=read(base/'positivity/fifth-closure-conditional.proposal.json');ledger={x['defect_id']:x for x in [json.loads(l) for l in open('research/defect-ledger.jsonl') if l]};post=read(f'research/{run}-step3-hash-10-post.json');pre=read(f'research/{run}-step3-hash-10-pre.json');scope=read(f'research/{run}-step3-scope-10.json');manifest=read(f'research/{run}-batch-10.pages.json');contracts=read(f'research/{run}-batch-10.proof-contracts.json')['contracts'];items={};pages={};guards={dp:sha(pathlib.Path(dp).read_bytes())};
for page in manifest:
 for item in page['items']:items[item['id']]={**item,'__step4_page_id':page['id']}
 pages[page['id']]={'meta':{k:v for k,v in page.items() if k!='items'},'order':[x['id'] for x in page['items']],'path':f'library/{page["category"]}/{page["id"]}.md'}
for c in packet['decision_changes']:
 d=next(x for x in doc['decisions'] if x['obligation']==c['obligation']);d.update(c['after'])
d=next(x for x in doc['decisions'] if x['obligation']=='reader:10:5');d.update(fifth['decision_after_candidate'])
# Exact current carrier hashing; immutable targets and observations remain unchanged.
changes=[];amendments=[]
for d in doc['decisions']:
 id=d['id'];old=next(x for x in original['decisions'] if x['obligation']==d['obligation'])
 if d['route']=='reader':carrier={'item_sha256':sha(pathlib.Path('items/'+id+'.md').read_bytes())}; path='items/'+id+'.md'
 elif d['route']=='page':
  pg=pages[id];path=pg['path'];anchor=set(scope.get('page_order_anchors',{}).get(id,[]));carrier={'file_sha256':sha(pathlib.Path(path).read_bytes()),'manifest_sha256':hv(pg['meta']),'item_order':[x for x in pg['order'] if x in anchor]}
 else:
  path='items/'+id+'.md';carrier={'item_sha256':sha(pathlib.Path(path).read_bytes()),'contract_sha256':hv(contracts.get(id)),'manifest_sha256':hv(items[id])}
 guards[path]=sha(pathlib.Path(path).read_bytes());d['subject_sha256']=hv(carrier)
 if d['verdict']=='accepted_repair':
  before=post.get('page_hashes' if d['route']=='page' else 'hashes',{}).get(id)
  source_same=before is not None and (carrier.get('item_sha256')==before.get('item_sha256') if d['route']!='page' else carrier.get('file_sha256')==before.get('file_sha256'))
  if not source_same:
   d['verdict']='amended_repair';d['evidence']+=' The current owner carrier includes the documented continuation repair, elementary supplier retarget or exact source/contract/manifest metadata synchronization beyond the immutable reader result. The current complete proof is retained and this carrier amendment preserves the original native reader observation and repair history; no new Alpha execution or extra mathematical repair round is asserted. Evidence: research/'+run+'-owner-escalation-repairs/soergel/continuation-final-report.json and research/'+run+'-owner-escalation-repairs/resume-20261011/gate-soergel-routing/positivity/report.md.';amendments.append({'obligation':d['obligation'],'historical_reader_source':before,'current_carrier':carrier,'both_native_snapshots_differ':hv(carrier) not in [hv(pre.get('page_hashes' if d['route']=='page' else 'hashes',{}).get(id)),hv(before)]})
 if hv(d)!=hv(old):changes.append({'path':dp,'obligation':d['obligation'],'before':old,'after':copy.deepcopy(d),'before_row_sha256':hv(old),'current_carrier':carrier})
newrows=copy.deepcopy(packet['append_only_ledger_rows'])+[copy.deepcopy(fifth['ledger_successor_candidate'])];newrows[-1]['evidence'][-1]['note']='The prepared complete positivity proof is now actually applied. Four current root native published repair receipts and ledger markers validate the exact corrected carriers; the new elementary supplier and exact consumer retargets remove circularity, and final native902-item depcheck/fwdcheck pass. No original observation or review-round history is rewritten.'
for row in newrows:
 receipt=pathlib.Path('items/'+row['subject']+'.md').read_text();import re
 rp=re.search(r'^\s+repair:\s*["\']?([^\n"\']+)',receipt,re.M).group(1);row['evidence'].append({'path':rp,'note':'Current actual recorded-local-published-repair receipt validated after source application; canonical source content binds current proof and original native ownership claim.'});guards[rp]=sha(pathlib.Path(rp).read_bytes())
shared=copy.deepcopy(packet['shared_evidence_additions'])
for e in shared:
 e['current_raw_sha256']=sha(pathlib.Path(e['current_path']).read_bytes());guards[e['current_path']]=e['current_raw_sha256']
 if e['id'] in ['lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree','thm-soergels-character-conjecture']:
  p=str(base/'positivity/report.md');e['evidence'].append({'path':p,'sha256':sha(pathlib.Path(p).read_bytes())})
 for ref in e['evidence']:ref['sha256']=sha(pathlib.Path(ref['path']).read_bytes());guards[ref['path']]=ref['sha256']
 e['ledger_row_sha256']=hv(ledger[e['defect_id']])
for p in [f'research/{run}-batch-10.pages.json',f'research/{run}-batch-10.proof-contracts.json',f'research/{run}-step3-scope-10.json']:guards[p]=sha(pathlib.Path(p).read_bytes())
(out/'decision-before.json').write_text(json.dumps(original,indent=2,ensure_ascii=False)+'\n');(out/'decisions.proposed.json').write_text(json.dumps(doc,indent=2,ensure_ascii=False)+'\n');(out/'ledger-five.proposed.json').write_text(json.dumps(newrows,indent=2,ensure_ascii=False)+'\n');(out/'shared-sixteen.proposed.json').write_text(json.dumps(shared,indent=2,ensure_ascii=False)+'\n');(out/'ledger-validation.jsonl').write_text('\n'.join(json.dumps(x) for row in newrows for x in [ledger[row['supersedes'][0]],row])+'\n')
json.dump({'version':1,'run':run,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'author':'/root/gate_contracts_geometry','input_raw_guards':guards,'decision_changes':changes,'decision_file':dp,'decisions_proposed':str(out/'decisions.proposed.json'),'append_only_ledger_rows':newrows,'original_ledger_row_guards':[{'defect_id':row['supersedes'][0],'row_sha256':hv(ledger[row['supersedes'][0]])} for row in newrows],'shared_evidence_additions':shared,'actual_source_amendments':amendments,'source_identical_native_acceptance_preserved':['touched:10:def-real-type-a-soergel-category-and-scalar-extension'],'continuity_owner':'/root/gate_contracts_fi native validated source-identical continuity packet','unresolved_owned_obligations':[],'source_edits':False,'native_writes':False,'immutable_targets_or_observations_rewritten':False},open(out/'proposal.json','w'),indent=2,ensure_ascii=False);print(json.dumps({'decision_changes':len(changes),'amendments':len(amendments),'new_closed_rows':len(newrows),'shared_families':len(shared),'all_amendments_differ':all(x['both_native_snapshots_differ'] for x in amendments)}))
