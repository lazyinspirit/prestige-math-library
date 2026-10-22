import pathlib,json,hashlib,datetime
P=pathlib.Path;r='physics-non-fluid-129-2026-10-21-r2';sha=lambda b:hashlib.sha256(b).hexdigest()
def canon(x):return json.dumps(x,sort_keys=True,separators=(',',':'),ensure_ascii=False)
def hashv(x):return sha(canon(x).encode())
read=lambda p:json.loads(P(p).read_text())
out=P(f'research/{r}-owner-step3-root-adoption/current-decision-successors');assert not out.exists()
s=read(f'.physics-autopilot/{r}/state.json');assert all(d.get('endedAt') for d in s['dispatches'].values()) and not P(f'.physics-autopilot/{r}/controller.lock').exists()
changes=[];pending=[]
for batch in range(1,130):
 dp=P(f'research/{r}-alpha-batch-{batch}-3a-decisions.json')
 if not dp.exists():continue
 db=dp.read_bytes();doc=json.loads(db);manifest=read(f'research/{r}-batch-{batch}.pages.json');contracts=read(f'research/{r}-batch-{batch}.proof-contracts.json');scope=read(f'research/{r}-step3-scope-{batch}.json');pre=read(f'research/{r}-step3-hash-{batch}-pre.json');post=read(f'research/{r}-step3-hash-{batch}-post.json')
 items={i['id']:{'item_sha256':sha(P('items',i['id']+'.md').read_bytes()),'contract_sha256':hashv(contracts['contracts'].get(i['id'])),'manifest_sha256':hashv(dict(i,__step4_page_id=p['id']))} for p in manifest for i in p['items']}
 for d in doc['decisions']:
  if d['verdict']!='accepted_repair':continue
  if d['route']=='touched':
   cur=items[d['id']];before=pre['hashes'].get(d['id']);after=post['hashes'].get(d['id'])
  elif d['route']=='page':
   page=next(p for p in manifest if p['id']==d['id']);anchor=set(scope.get('page_order_anchors',{}).get(d['id'],[]));cur={'file_sha256':sha(P('library',page['category'],page['id']+'.md').read_bytes()),'manifest_sha256':hashv({k:v for k,v in page.items() if k!='items'}),'item_order':[i['id'] for i in page['items'] if i['id'] in anchor]}
   def project(x):
    y=dict(x);y['item_order']=[i for i in y.get('item_order',[]) if i in anchor];return y
   before=project(pre['page_hashes'][d['id']]);after=project(post['page_hashes'][d['id']])
  else:raise Exception('Unknown accepted repair route '+str(d))
  if hashv(cur)==hashv(after):continue
  assert hashv(cur)!=hashv(before),(d['id'],'Current unexpectedly equals pre-reader')
  assert d['defect_ids'],d['id']
  original=dict(d);d['verdict']='amended_repair';d['owner_current_carrier_successor']={'prior_verdict':'accepted_repair','current_carrier_sha256':hashv(cur),'reader_post_carrier_sha256':hashv(after),'evidence':'research/'+r+'-owner-step3-root-adoption/contracts-current-round2/production-application/receipt.json'}
  d['evidence']+=' Root current-carrier successor: the retained repaired defect and original native finding remain unchanged. Current source/manifest metadata and exact worksheet transcription or individually released semantic cases are adopted in root Step3 receipts. The current full carrier differs from both frozen pre-reader and reader-result carriers, so amended_repair accurately replaces accepted_repair. Original decision is archived; no native reread or new proof acceptance is claimed.'
  changes.append({'batch':batch,'obligation':d['obligation'],'id':d['id'],'before':original,'after':d})
 if json.dumps(doc)!=json.dumps(json.loads(db)):pending.append((dp,db,(json.dumps(doc,indent=2)+'\n').encode()))
out.mkdir()
for p,b,a in pending:(out/p.name).write_bytes(b)
for p,b,a in pending:assert p.read_bytes()==b
for p,b,a in pending:p.write_bytes(a)
(out/'receipt.json').write_text(json.dumps({'run':r,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'changes':changes,'files':len(pending),'original_observations_preserved':True,'native_gate_success':False},indent=2)+'\n')
print('Recorded',len(changes),'accurate amended current-carrier successors in',len(pending),'decision files')
