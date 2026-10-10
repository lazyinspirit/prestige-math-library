import json,copy,hashlib,datetime
from pathlib import Path
r=Path(__file__).parent;run='physics-em-sr-40-2026-10-08';archive=json.loads((r/f'{run}-reconciliation4.before.json').read_text());sha=lambda t:hashlib.sha256(t.encode()).hexdigest()
# Exact archived stable metadata must still be present before any production mutation.
for f in archive['files']:
 if f['path'].endswith('.pages.json') or f['path']=='research/plan-spec.json':assert sha((Path('physics')/f['path']).read_text())==f['sha256'],f['path']
files={p:json.loads(p.read_text()) for p in r.glob(run+'-batch-*.pages.json')};loc={x['id']:(p,page,x) for p,ps in files.items() for page in ps for x in page['items']};repairs=[]
for name in ['newtonian-core','newtonian-galilean','continuum-scalar','continuum-observer','continuum-flux-hodge','continuum-physical-reading','current-normalization','flat-connection','boost-zero','bell-earlier-interface','accelerated-rindler','accelerated-ring','accelerated-bell']:
 path=r/f'{run}-{name}-proposal.json';d=json.loads(path.read_text());rows=[]
 if 'subjects' in d:rows=d['subjects']
 elif 'exact_metadata_changes' in d:rows=d['exact_metadata_changes']
 elif 'changes' in d:rows=d['changes']
 elif 'proposed_subjects' in d:
  before={x['id']:x for x in d['before_objects']};rows=[{'id':x['id'],'before':before[x['id']],'after':x} for x in d['proposed_subjects']]
 elif 'subject' in d:rows=[d['subject']]
 else:raise Exception('Unknown proposal shape '+name)
 for row in rows:
  id=row['id'];p,page,current=loc[id]
  assert current==row['before'],('Final native receipt differs from provisional before-object; review required',name,id)
  assert row['after']['id']==id
  repairs.append({'proposal':path.name,'id':id,'path':str(p),'page':page['id'],'before':current,'after':copy.deepcopy(row['after'])})
assert len({x['id'] for x in repairs})==len(repairs),'Overlap'
# Suppliers first, with current mathematical dependency levels as stable ordering.
repairs.sort(key=lambda row:(row['before']['dependency_level'],row['id']))
for row in repairs:
 p,page,current=loc[row['id']];page['items'][page['items'].index(current)]=row['after']
changed=[]
for p,ps in files.items():
 if json.loads(p.read_text())!=ps:
  text=json.dumps(ps,ensure_ascii=False,indent=2)+'\n';p.write_text(text);changed.append({'path':'research/'+p.name,'after_raw_sha256':sha(text)})
current={x['id']:(page['id'],x) for ps in files.values() for page in ps for x in page['items']};assert len(current)==282
for row in repairs:
 row['before_item_sha256']=sha(json.dumps(row['before'],sort_keys=True,separators=(',',':')));row['after_item_sha256']=sha(json.dumps(row['after'],sort_keys=True,separators=(',',':')));row['before_statement_sha256']=sha(row['before']['statement']);row['after_statement_sha256']=sha(row['after']['statement']);row['changed_fields']=[k for k in set(row['before'])|set(row['after']) if row['before'].get(k)!=row['after'].get(k)]
report={'run':run,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'rootreviewedproposals integrated onstable282baseline; nativelevels/plan/sync/coverage/evidencechecks follow; readinessstillheldforrootexactdiffreview','baseline_manifest_before_object_comparison':'Every44 proposal before-object matchesfinalworkerreceipt exactly; workerexistingHilbertpositive metric sign/contraction selfrepairs retained.','items':282,'existing_metadata_repairs':repairs,'changed_manifests':changed,'new_item_ids':[],'removed_item_ids':[],'source_provenance_physical_scopes_preserved':'Allsources/provenance/scopes preserved except deliberate mathematicalphysicalreading migration into existingpostulate/conditionalphysicaldeduction asrootreviewed; no rawhistoricalresearch edit.','no_readiness_refresh':True,'controller_remains_paused':True}
(r/f'{run}-reconciliation4.integration-initial.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print(json.dumps({'items':282,'repairs':len(repairs),'changed_manifests':len(changed),'all_before_objects_match':True},indent=2))
