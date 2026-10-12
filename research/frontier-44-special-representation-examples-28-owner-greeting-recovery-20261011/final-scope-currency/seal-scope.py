import pathlib,json,hashlib,copy,datetime,re
R='frontier-44-special-representation-examples-28';O=pathlib.Path('research/'+R+'-owner-greeting-recovery-20261011/final-scope-currency');sha=lambda b:hashlib.sha256(b if isinstance(b,bytes) else b.encode()).hexdigest();canon=lambda x:json.dumps(x,ensure_ascii=False,sort_keys=True,separators=(',',':'));read=lambda p:json.loads(pathlib.Path(p).read_text());actual=read(O/'current-declines.json');by={x['decline_id']:x for x in actual['rows']};carriers=[];continuations=[];risks=[];count=0;guards=[];inv=[]
for p in sorted(pathlib.Path('research').glob(R+'-alpha-*-scope-decisions.json')):
 doc=read(p);edits=[];proposed=copy.deepcopy(doc)
 for i,old in enumerate(doc['decisions']):
  count+=1;new=by[old['decline_id']]
  for k in ['decline_id','batch','page','source_kind','source_url','name','disposition','destination','reason','group']:assert old.get(k)==new.get(k),(p,k)
  assert old['decision'] in ['stands','owner-decision'] and old['evidence']
  if old['context_sha256']!=new['context_sha256'] or old['row_sha256']!=new['row_sha256']:
   inverse=copy.deepcopy(new['actual_context'])
   def inverseorder(x):
    if isinstance(x,dict):
     if x.get('id')=='the-degenerate-ariki-categorification-theorem' and x.get('order')==1841.25:x['order']=1792
     for v in x.values():inverseorder(v)
    elif isinstance(x,list):
     for v in x:inverseorder(v)
   inverseorder(inverse);order_only=new['reconstructed_prior_order_context_sha256']==old['context_sha256'];assert order_only,'unexpected context change'
   assert old['row_sha256']==new['row_sha256'],'row changed'
   if new['actual_context']['destination']['kind']=='missing':risks.append({'decline_id':old['decline_id'],'risk':'missing current destination','destination':old['destination']})
   for field in ['row_sha256','context_sha256']:
    if old[field]!=new[field]:edits.append({'pointer':f'/decisions/{i}/{field}','before':old[field],'after':new[field]});proposed['decisions'][i][field]=new[field]
   continuations.append({'decline_id':old['decline_id'],'page':old['page'],'destination':old['destination'],'decision_preserved':old['decision'],'evidence_preserved':old['evidence'],'old_context_sha256':old['context_sha256'],'current_context_sha256':new['context_sha256'],'context_inverse_order_only_hash_matches_prior':order_only,'current_context':new['actual_context'],'continuation':'Owner scope-placement continuation under root authorization: preserve original disposition, destination, decision and original evidence; refresh only closure hash for the same page/inventory after the authorized degenerate-Ariki A-page order1792 to1841.25 correction; no source rereading or mathematical acceptance is asserted'})
 if edits:
  dest=O/(p.name+'.proposed.json');dest.write_text(json.dumps(proposed,indent=2)+'\n');carriers.append({'path':str(p),'before_raw_sha256':sha(p.read_bytes()),'proposal_path':str(dest),'proposal_raw_sha256':sha(dest.read_bytes()),'edits':edits,'integration_mode':'exact guarded JSON-field edits only'})
assert count==len(by)==454
# Bind only actual affected closure/destination plan projections, affected coverage carriers and current native-stale pairs.
context_projection=[{'decline_id':x['decline_id'],'context':x['current_context']} for x in continuations];(O/'relevant-plan-context-projection.json').write_text(json.dumps(context_projection,indent=2)+'\n')
for batch in sorted({by[x['decline_id']]['batch'] for x in continuations}):
 p=pathlib.Path('research/'+R+'-batch-'+batch+'.coverage.json');guards.append({'path':str(p),'raw_sha256':sha(p.read_bytes()),'role':'actual affected coverage rows'})
sc=read(O/'step3-scope-currency.json');stale=[x for x in sc['rows'] if x['stale']]
for x in stale:
 p=pathlib.Path(x['owner_receipt']);guards.append({'path':str(p),'raw_sha256':sha(p.read_bytes()),'role':'original stale native owner scope receipt'})
for p in pathlib.Path('research').glob(R+'-batch-*.pages.json'):
 obj=read(p)
 for page in obj:
  inv += [{'id':i['id'],'page':page['id'],'kind':i['kind']} for i in page['items']]
 if any(page['id']==x['page'] for page in obj for x in stale):guards.append({'path':str(p),'raw_sha256':sha(p.read_bytes()),'role':'actual stale native pair manifest'})
assert len(inv)==875 and len({x['id'] for x in inv})==875
origin='research/'+R+'-owner-one-time-exhausted-exception-20261011/exception_semiregular_ringel_constructor/scope-decisions-FIRST1/guarded-proposal-packet.json';guards.append({'path':origin,'raw_sha256':sha(pathlib.Path(origin).read_bytes()),'role':'immutable original author packet'})
evidence={'version':1,'run':R,'author':'/root/prepare_gate_metadata','owner':'/root','original_author':'/root/exception_semiregular_ringel_constructor','original_approval_packet':origin,'original_decisions_and_evidence_retained':True,'approval_basis':'Root instruction explicitly authorizes existing owner scope decisions and exact scope-preserving order repair','scope':{'inventory':875,'pairs':50,'declines':454},'mechanical_delta':{'page':'the-degenerate-ariki-categorification-theorem','field':'order','before':1792,'after':1841.25},'continuations':continuations,'placement_risks':risks,'source_reading_performed':False,'new_math_acceptance':False,'native_decision_changes':False,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat()};ep=O/'owner-scope-placement-continuation-evidence.json';ep.write_text(json.dumps(evidence,indent=2)+'\n')
plan={'version':1,'run':R,'readiness':'READY FOR ROOT GUARDED HASH-ONLY INTEGRATION','canonical_writes':False,'native_writes':False,'gates_attempted':False,'math_audit':False,'declines_checked_mechanically':454,'unchanged_declines':454-len(continuations),'stale_declines':len(continuations),'carriers':carriers,'guards':guards,'evidence_path':str(ep),'evidence_raw_sha256':sha(ep.read_bytes()),'relevant_plan_context_projection':{'path':str(O/'relevant-plan-context-projection.json'),'raw_sha256':sha((O/'relevant-plan-context-projection.json').read_bytes()),'compare_against':'current authoritative currentDeclines adapter output for affected18decline IDs'},'authority':{'path':'tools/scope-decisions.mjs','raw_sha256':sha(pathlib.Path('tools/scope-decisions.mjs').read_bytes()),'adapter':str(O/'current-declines-readonly-adapter.mjs'),'adapter_raw_sha256':sha((O/'current-declines-readonly-adapter.mjs').read_bytes())},'stale_native_step3_scope_owner_receipts':stale,'native_scope_readiness':'Two original owner scope receipts stale; root must explicitly resolve current scope hashes using original claim-correction authorization; no native record made here','placement_risks':risks,'preserved_fields':['disposition','destination','decision','evidence','group','decline_id','source_url','name','reason'],'inventory_projection_sha256':sha(canon(sorted(inv,key=lambda x:x['id'])))}
p=O/'guarded-current-scope-metadata-plan.json';p.write_text(json.dumps(plan,indent=2)+'\n');print(json.dumps({'path':str(p),'sha256':sha(p.read_bytes()),'stale_declines':len(continuations),'carrier_files':len(carriers),'hash_field_edits':sum(len(c['edits']) for c in carriers),'native_stale':[x['page'] for x in stale],'risks':risks}))
