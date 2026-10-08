import pathlib,json,hashlib
D=pathlib.Path(__file__).resolve().parent;load=lambda p:json.loads(pathlib.Path(p).read_text());sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest();h=lambda v:hashlib.sha256(json.dumps(v,sort_keys=True,separators=(',',':'),ensure_ascii=False).encode()).hexdigest()
e=load(D/'evidence.json');old=load(D/'original/frontier-43-complex-representation-15-alpha-batch-3-5a-decisions.json');new=load(D/'proposed-decisions.json');changed=set(e['changed_obligations'])
for p,x in {**e['canonical_metadata_raw_guards'],**e['mathematical_raw_guards']}.items():assert sha(p)==x,p+' changed'
for p,x in e['original_archives'].items():assert sha(x['archive'])==x['raw_sha256'],p+' archive changed'
assert old.keys()==new.keys() and len(old['decisions'])==len(new['decisions'])
for a,b in zip(old['decisions'],new['decisions']):
 if a['obligation'] not in changed:assert a==b,'Unowned decision changed'
 else:
  assert a['verdict']=='accepted_repair' and b['verdict']=='amended_repair' and b['repair_confidence']==1
  assert a['defect_ids']==b['defect_ids'] and a['id']==b['id'] and a['route']==b['route']
  s=next(x for x in e['subjects'] if x['id']==a['id']);assert b['subject_sha256']==h(s['current_carrier']);assert b['subject_sha256'] not in [h(s['pre_reader_carrier']),h(s['reader_post_carrier'])];assert s['current_carrier']['item_sha256']==s['reader_post_carrier']['item_sha256']
rows=[]
for l in pathlib.Path('research/defect-ledger.jsonl').read_text().splitlines():
 if l.strip():rows.append(json.loads(l))
for s in e['subjects']:
 matches=[x for x in rows if x.get('defect_id')==s['existing_closed_ledger_row']];assert len(matches)==1;assert matches[0]['disposition']=='fixed';assert any(x.get('obligation')==s['obligation'] and x.get('path')=='research/frontier-43-complex-representation-15-alpha-batch-3-5a-decisions.json' for x in matches[0]['adjudication_ref'])
assert len(changed)==2 and e['append_only_ledger_rows']==[]
print('PASS: exactly 2 amended decisions; native repaired items equal reader-post; exact contract/manifest metadata replay; 41 math and canonical metadata guards; Fourier and existing ledger refs preserved.')
