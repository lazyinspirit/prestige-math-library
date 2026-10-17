import json,hashlib,pathlib,datetime
P=pathlib.Path('physics');run='physics-remaining-80-2026-10-17';R=P/'research'; now=datetime.datetime.now(datetime.timezone.utc).isoformat()
def load(p):return json.loads(p.read_text())
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def save(p,d):p.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
def check(p,h):assert sha(p)==h,(str(p),sha(p),h)
def archive(d,p):
 q=d/'root-before-adoption'/p.name;q.parent.mkdir(parents=True,exist_ok=True);assert not q.exists(),q;q.write_bytes(p.read_bytes())
s=load(P/f'.physics-autopilot/{run}/state.json');assert not any(not x.get('endedAt') and set(x.get('covers',[]))&{'19','70','72'} for x in s['dispatches'].values())
d19=R/f'{run}-owner-step3-alert16-duality19';report=load(d19/'resolution.json')
check(d19/'resolution.json','d1cb7e2cdac830d1144699e92d92f932105694de2e7e02a087ce89991728a764')
for x in report['source_and_use_bindings']:check(pathlib.Path(x['current']['path']),x['current']['raw_sha256'])
for key in ['supplier_bindings','native_history','check_logs']:
 for x in report[key]:check(pathlib.Path(x['path']),x['raw_sha256'])
for key in ['actual_use_closure','worksheet_current','exact_hodge_sanity_check']:
 x=report[key];check(pathlib.Path(x['path']),x['raw_sha256'])
for batch,d in [('19',d19),('70',R/f'{run}-owner-step3-batch70-historical')]:
 for ext in ['.md','-decisions.json']:archive(d,R/f'{run}-alpha-batch-{batch}-3a{ext}')
rows=load(d19/'proposed-defect-ledger-rows.json');dec=load(d19/'proposed-native19-supplemental-decisions.json')['decisions']
for x,y in zip(rows,dec):
 x['caught_by_role']='owner';x['adjudication_ref']=[{'path':f'research/{run}-alpha-batch-19-3a-decisions.json','obligation':'gate:'+x['defect_id']}]
 y['obligation']='gate:'+x['defect_id'];y['route']='gate';y['verdict']='confirmed_nonfatal'
save(d19/'root-adopted-ledger-rows.json',rows);save(d19/'root-adopted-supplemental-decisions.json',dec)
d70=R/f'{run}-owner-step3-batch70-historical';check(d70/'resolution-report.json','b4fd166ffed48be3fb5d0dd748548de9865effd4c779230053b6d7ed9cbf5ad3');check(d70/'distribution-precision/successor-report.json','530f0205ca59357ccb797946e830872fb22232448b20c1a55fd20b77d77e39ad')
a=load(d70/'reconstruction-attempt.json')
for i in a['items']:
 check(d70/i['candidate_path'],i['expected_pre_sha256']);check(d70/i['base'],i['base_raw_sha256']);check(d70/i['archive'],i['archive_raw_sha256'])
for x in load(d70/'distribution-precision/successor-report.json')['actual_seven_item_compatibility']:check(P/x['path'],x['current_raw_sha256'])
rows=load(d70/'proposed-ledger-rows.json');dec=load(d70/'proposed-decisions.json')['decisions']; precision=rows[2];dec[0]['defect_ids'].remove(precision['defect_id'])
dec.append({'obligation':'gate:'+precision['defect_id'],'id':precision['subject'],'route':'gate','verdict':'confirmed_nonfatal','evidence':precision['correction']+' Distinct owner repair after native post; full exact-current source and consumer review in '+precision['evidence'][0]['path']+'. Original historical report retained unchanged.','defect_ids':[precision['defect_id']],'repair_confidence':1})
for i,x in enumerate(rows):
 x['caught_at_stage']='3a-adjudicate';x['caught_by_role']='owner';x['repair_confidence']=1
 if i==0:x['subclass']='missing-case'
 if i==2:x['location']='statement-and-proof'
 x['adjudication_ref']=[{'path':f'research/{run}-alpha-batch-70-3a-decisions.json','obligation':dec[i]['obligation']}]
 if i<2:
  x['evidence'][0]['note']='Exact full reconstructed pre and saved native post hashes authenticated; later current theorem precision is separately recorded.'
  x['evidence'][1]['note']='Authenticated full pre-to-native-post delta; not a claim current theorem still equals native post.'
save(d70/'root-adopted-ledger-rows.json',rows);save(d70/'root-adopted-decisions.json',dec)
print('Authenticated current19 suppliers/history/checks and70 reconstructed pre/native post/current seven-item bindings; archived canonical reports/decisions; prepared 5 canonical rows and supplemental/replacement decisions. No canonical decisions changed yet.')
