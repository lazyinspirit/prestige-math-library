import json,pathlib,hashlib,datetime,copy
run='inverse-problems-knot-theory-all-109-2026-10-19'; base=pathlib.Path('research')/(run+'-supervision-20261020/step3-supervision');sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest(); now=datetime.datetime.now(datetime.timezone.utc).isoformat()
state=json.loads(pathlib.Path('.autopilot',run,'state.json').read_text());assert state['paused'] is True
b=base/'gate-r2-page83-continuity';d=json.loads((b/'diagnosis-and-checks.json').read_text());writes=[]
for key in ['registry','scope']:
 p=pathlib.Path(d['old_'+key]['path']); assert sha(p)==d['old_'+key]['sha256'];old=json.loads(p.read_text());new=copy.deepcopy(old)
 for patch in d['proposed_field_changes'][key]:
  node=new
  for part in patch['path'][:-1]:node=node[int(part)] if isinstance(node,list) else node[part]
  part=patch['path'][-1];assert node[part]==patch['before'];node[part]=patch['after']
 candidate=b/'candidate'/p;assert json.loads(candidate.read_text())==new
 writes.append((p,new))
for p,obj in writes:p.write_text(json.dumps(obj,indent=2)+'\n')
receipt=json.loads((b/'root-reconciliation.template.json').read_text());receipt['recorded_at']=now;receipt['reason']=receipt['reason'].replace('ROOT: ','Root applied: ')
for key in ['registry','scope']:receipt['successor_'+key]['sha256']=sha(receipt['successor_'+key]['path'])
(b/'root-reconciliation.json').write_text(json.dumps(receipt,indent=2)+'\n')
b=base/'gate-r2-ten-empty-refs';patches=json.loads((b/'field-beforeguards.json').read_text());docs={}
for patch in patches:
 p=pathlib.Path(patch['file']);doc=docs.setdefault(str(p),json.loads(p.read_text())); matches=[x for x in doc['decisions'] if x['obligation']==patch['obligation']];assert len(matches)==1
 assert matches[0]==patch['before_full_decision'];before=matches[0];after=patch['after_full_decision'];assert set(k for k in set(before)|set(after) if before.get(k)!=after.get(k))=={'verdict','change_kind','owner_resolution'}
 assert after['verdict']=='reviewed_no_defect' and after['defect_ids']==[] and after['repair_confidence']==1
 doc['decisions'][doc['decisions'].index(before)]=after
for p,doc in docs.items():pathlib.Path(p).write_text(json.dumps(doc,indent=2)+'\n')
(b/'root-application.json').write_text(json.dumps({'run':run,'owner':'/root','at':now,'changes':len(patches),'files':[{ 'path':p,'sha256':sha(p)} for p in docs],'source_changes':False,'native_history_rewritten':False,'new_mathematical_review':False},indent=2)+'\n')
print('Applied exact page83 reference successor and 10 clean classifications; no source edits')
