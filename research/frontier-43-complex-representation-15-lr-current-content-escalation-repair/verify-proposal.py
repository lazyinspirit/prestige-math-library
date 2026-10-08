import json,pathlib,hashlib,copy
D=pathlib.Path(__file__).resolve().parent
load=lambda p:json.loads(pathlib.Path(p).read_text())
sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
e=load(D/'evidence.json');ids={s['id'] for s in e['exact_six_carriers']}
for p,h in {**e['integration_raw_guards'],**e['canonical_metadata_raw_guards']}.items():assert sha(p)==h,p+' changed'
for p,a in e['original_archives'].items():assert sha(a['archive'])==a['sha256'],p+' archive changed'
old=load(D/'original/frontier-43-complex-representation-15-alpha-batch-8-5a-decisions.json');new=load(D/'proposed-decisions.json')
assert set(d['id'] for d in new['decisions'])==ids and len(new['decisions'])==6
for a,b in zip(old['decisions'],new['decisions']):
 assert a['id']==b['id'] and a['verdict']=='escalated'
 assert b['verdict']=='reviewed_no_defect' and b['change_kind']=='current_content_review' and b['historical_delta_unknown'] is True and not b['defect_ids'] and len(b['owner_resolution'])>=40
 for k in ['obligation','id','route']:assert a[k]==b[k]
ca=load(D/'original/frontier-43-complex-representation-15-batch-8.proof-contracts.json');cb=load(D/'proposed-proof-contracts.json')
for i in ids:
 assert ca['contracts'][i]['risk_review']['status']=='open'
 assert cb['contracts'][i]['risk_review']['status']=='complete' and cb['contracts'][i]['risk_review']['historical_delta_unknown'] is True
 cb['contracts'][i]['risk_review']=copy.deepcopy(ca['contracts'][i]['risk_review'])
assert ca==cb,'Change outside six risk_review records'
print('PASS: 6 exact decisions, 6 risk-only changes, 67 mathematical raw guards, native archives and canonical metadata guards unchanged.')
