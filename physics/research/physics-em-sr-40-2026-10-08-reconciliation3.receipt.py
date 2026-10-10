import json,hashlib,copy,datetime
from pathlib import Path
r=Path(__file__).parent;run='physics-em-sr-40-2026-10-08';hash=lambda x:hashlib.sha256(x.encode()).hexdigest();a=json.loads((r/f'{run}-reconciliation3.before.json').read_text());original={};expected={};before_raw={}
for f in a['files']:
 if '-batch-' in f['path'] and f['path'].endswith('.pages.json'):
  before_raw[f['path']]=f['sha256']
  for page in json.loads(f['raw']):
   expected[page['id']]=copy.deepcopy(page)
   for x in page['items']:original[x['id']]=(page['id'],x)
for row in json.loads((r/f'{run}-reconciliation3.integration-stage1.json').read_text())['changes']:
 page=expected[row['home_after']];idx=next(i for i,x in enumerate(page['items']) if x['id']==row['id']);page['items'][idx]=row['after']
weak=json.loads((r/f'{run}-piecewise-proper-time-proposal.json').read_text())['exact_metadata_changes'];new={}
for row in weak:
 id=row['id'];home=row['after_home']['page'];before=row['before_home'];x=row['after']
 if before:
  page=expected[before['page']];idx=next(i for i,v in enumerate(page['items']) if v['id']==id)
  if home==before['page']:page['items'][idx]=x
  else:page['items'].pop(idx);new[id]=x
 else:new[id]=x
page=expected['sr-worldlines-and-clocks']
for id,after in [('lem-sr-weak-piecewise-causal-integrability','def-sr-regular-causal-curve-and-worldline'),('def-sr-piecewise-proper-time','def-sr-proper-time'),('lem-sr-piecewise-proper-time-reparametrization-invariance','def-sr-piecewise-proper-time')]:
 idx=next(i for i,v in enumerate(page['items']) if v['id']==after);page['items'].insert(idx+1,new.pop(id))
for row in json.loads((r/f'{run}-reconciliation3.levels.json').read_text())['changes']:
 for page in expected.values():
  for x in page['items']:
   if x['id']==row['item']:x['dependency_level']=row['after']
current={};raw=[];arrayguards=[]
for p in sorted(r.glob(run+'-batch-*.pages.json')):
 text=p.read_text();raw.append({'path':'research/'+p.name,'before_sha256':before_raw['research/'+p.name],'after_sha256':hash(text)})
 for page in json.loads(text):
  assert page['order']==expected[page['id']]['order']
  assert page['items']==expected[page['id']]['items'],page['id']
  arrayguards.append({'page':page['id'],'original_order_preserved':True,'integration_recipe_items_equal_native_synced_items':True,'item_array_sha256':hash(json.dumps(page['items'],sort_keys=True,separators=(',',':')))})
  for x in page['items']:current[x['id']]=(page['id'],x)
assert set(original)<=set(current)
changes=[]
for id,(home,x) in current.items():
 if id in original:
  oldhome,b=original[id]
  if b!=x or oldhome!=home:changes.append({'id':id,'home_before':oldhome,'home_after':home,'before':b,'after':x,'before_item_sha256':hash(json.dumps(b,sort_keys=True,separators=(',',':'))),'after_item_sha256':hash(json.dumps(x,sort_keys=True,separators=(',',':'))),'before_statement_sha256':hash(b['statement']),'after_statement_sha256':hash(x['statement']),'changed_fields':[k for k in set(b)|set(x) if b.get(k)!=x.get(k)]})
new=[{'id':id,'home':home,'item':x} for id,(home,x) in current.items() if id not in original]
report={'run':run,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'stable content integrated and native same-scope synced; readiness refresh held for root exact-diff review','original_items':len(original),'current_items':len(current),'original_item_ids_retained':True,'new_local_items':new,'existing_item_changes':changes,'manifest_raw_hashes':raw,'all80page_array_guards':arrayguards,'presync_capture_limitation':'A dedicated immediately-presync raw snapshot command failed from a wrong cwd; native drift-apply did execute. Preservation is verified above by exact reconstruction from archived original raw item arrays plus the durable full applied stage1/weak-piecewise objects and exact native level changes, compared with every post-sync array. No nonexistent presync raw hashes are claimed.','plan_repair_receipt':run+'-reconciliation3.plan.json','no_readiness_refresh':True,'no_imports_or_originals_edited':True,'no_independent_audit_claim':True}
(r/f'{run}-reconciliation3.integration.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print(json.dumps({'items':len(current),'existing_changed':len(changes),'new':len(new),'array_guards':len(arrayguards)},indent=2))
