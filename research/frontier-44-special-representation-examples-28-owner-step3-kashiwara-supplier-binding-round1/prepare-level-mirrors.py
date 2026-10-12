import pathlib,json,yaml,re,hashlib,datetime
R='frontier-44-special-representation-examples-28';D=pathlib.Path('research/'+R+'-owner-step3-kashiwara-supplier-binding-round1');pack=json.loads((D/'guarded-successor-packet.json').read_text());loader=getattr(yaml,'CSafeLoader',yaml.SafeLoader);inventory={};manifests={}
for p in pathlib.Path('research').glob(R+'-batch-*.pages.json'):
 manifests[str(p)]=json.loads(p.read_text())
 for page in manifests[str(p)]:
  for item in page.get('items',[]):inventory[item['id']]={'item':item,'manifest_path':str(p),'page':page['id']}
before={};after={};candidates={x['id']:x for x in pack['candidates']}
for i,x in inventory.items():
 p=pathlib.Path('items/'+i+'.md');ds=x['item'].get('deps',[])
 if p.exists():
  try:ds=yaml.load(p.read_text().split('---',2)[1],Loader=loader).get('deps',[])
  except:pass
 before[i]=[s for s in ds if s in inventory]
 if i in candidates:ds=yaml.load(pathlib.Path(candidates[i]['candidate_path']).read_text().split('---',2)[1],Loader=loader).get('deps',[])
 after[i]=[s for s in ds if s in inventory]
def levels(g):
 out={};active=[]
 def f(i):
  if i in out:return out[i]
  if i in active:raise ValueError('Cycle '+','.join(active[active.index(i):]+[i]))
  active.append(i);out[i]=max((f(s)+1 for s in g[i]),default=0);active.pop();return out[i]
 for i in g:f(i)
 return out
try:b=levels(before);a=levels(after)
except Exception as e:
 (D/'dependency-level-mirror-proposal.json').write_text(json.dumps({'run':R,'status':'blocked by actual observed graph','reason':str(e)},indent=2)+'\n');raise
changes=[];metadata=[]
for i in inventory:
 if a[i]==b[i]:continue
 x=inventory[i];p=pathlib.Path('items/'+i+'.md');rec={'id':i,'old_computed_level':b[i],'successor_computed_level':a[i],'manifest_path':x['manifest_path'],'manifest_record_level':x['item'].get('dependency_level'),'canonical_present':p.exists()};changes.append(rec)
 if p.exists():
  text=pathlib.Path(candidates[i]['candidate_path']).read_text() if i in candidates else p.read_text();new=re.sub(r'^dependency_level:.*$',f'dependency_level: {a[i]}',text,count=1,flags=re.M)
  if new==text:continue
  q=D/'successors'/(i+'.md');q.write_text(new);raw=p.read_bytes();metadata.append({'id':i,'canonical_path':str(p),'before_raw_sha256':hashlib.sha256(raw).hexdigest(),'candidate_path':str(q),'candidate_raw_sha256':hashlib.sha256(q.read_bytes()).hexdigest(),'successor_level':a[i],'interface_changed':i in pack['changed_interfaces'],'change_kind':'mechanical level mirror accompanying necessary actual supplier edge'})
  if i in candidates:
   candidates[i]['candidate_raw_sha256']=hashlib.sha256(q.read_bytes()).hexdigest();candidates[i]['edits'][0]['after']=new
# Preserve existing literal claim/dependency mirrors before merging level-only changes.
for row in pack['manifest_mirrors']:manifests[row['canonical_path']]=json.loads(pathlib.Path(row['candidate_path']).read_text())
changedman=[]
for path,data in manifests.items():
 touched=[]
 for page in data:
  for item in page.get('items',[]):
   if any(x['id']==item['id'] for x in changes):item['dependency_level']=a[item['id']];touched.append(item['id'])
 if not touched:continue
 p=pathlib.Path(path);q=D/'successors'/p.name;q.write_text(json.dumps(data,indent=2)+'\n');entry={'canonical_path':path,'before_raw_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'candidate_path':str(q),'candidate_raw_sha256':hashlib.sha256(q.read_bytes()).hexdigest(),'level_mirror_ids':touched};changedman.append(entry)
 prior=next((x for x in pack['manifest_mirrors'] if x['canonical_path']==path),None)
 if prior:prior['candidate_raw_sha256']=entry['candidate_raw_sha256'];prior['level_mirror_ids']=touched
 else:pack['manifest_mirrors'].append(entry)
pack['candidates']=list(candidates.values());pack['mechanical_level_mirror_candidates']=metadata;pack['mechanical_level_mirror_evidence']=str(D/'dependency-level-mirror-proposal.json');(D/'guarded-successor-packet.json').write_text(json.dumps(pack,indent=2)+'\n')
obj={'version':1,'run':R,'round':1,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'policy':'Compare actual current in-run dependency graph before/after only proposed necessary supplier edges; preserve external supplier context but external levels are outside these run-local labels','selected_inventory_count':len(inventory),'actual_delta_count':len(changes),'item_level_changes':changes,'canonical_metadata_successors':metadata,'manifest_level_successors':changedman,'live_application':False,'root_final_recompute_required':True}
(D/'dependency-level-mirror-proposal.json').write_text(json.dumps(obj,indent=2)+'\n');print(len(changes),'graph level deltas',len(metadata),'canonical metadata successors',len(changedman),'manifest level successors')
