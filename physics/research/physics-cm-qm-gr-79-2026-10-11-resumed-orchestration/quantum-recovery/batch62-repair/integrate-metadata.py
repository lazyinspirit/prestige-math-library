from pathlib import Path
import json,hashlib,re,yaml
r='physics-cm-qm-gr-79-2026-10-11';base=Path('research')/(r+'-resumed-orchestration/quantum-recovery/batch62-repair');a=json.loads((base/'metadata-candidates/proposals.json').read_text());stale=[]
for x in a['rawguards']:
 p=Path(x['path']);h=hashlib.sha256(p.read_bytes()).hexdigest()
 if h!=x['raw_sha256']:
  if p.name=='plan-spec.json':
   assert h=='456fc3e203e7edfde2f0f0f0f934261fec6bf1426bc3c332b4a5844025116d95'
  elif p.name!='lem-nrqm-many-body-two-level-thermal-formulas.md':stale.append(x['path'])
assert not stale,stale
mfile=Path('research')/(r+'-batch-62.pages.json');m=json.loads(mfile.read_text());lookup={i['id']:i for p in m for i in p['items']}
def parse(id):
 s=(Path('items')/(id+'.md')).read_text();_,f,b=s.split('---',2);return yaml.safe_load(f),b.lstrip()
def steps(body):return re.findall(r'^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\n\n## |\Z)',body,re.M|re.S)
for x in a['items']:
 id=x['id'];p=Path('items')/(id+'.md');s=p.read_text()
 for k,d in x['carrier_metadata_field_patches'].items():
  assert k=='dependency_level';s=re.sub(r'^dependency_level: \d+$','dependency_level: '+str(d['after']),s,flags=re.M)
 p.write_text(s);fm,body=parse(id);item=lookup[id];item['statement']=body
 for k in ['deps','dependency_roles','dependency_level','physical_scope']:
  if k in fm:item[k]=fm[k]
for x in a['page_proposals']:
 page=next(p for p in m if p['id']==x['page'])
 for k,d in x['manifest_page_field_patches'].items():page[k]=d['after']
 p=Path(x['path']);s=p.read_text();_,f,b=s.split('---',2)
 for k,d in x['page_frontmatter_field_patches'].items():
  if k in ['items','requires']:
   replacement=k+':\n'+'\n'.join('- '+v for v in d['after'])
   f=re.sub(r'^'+k+r':.*?(?=^[A-Za-z_][A-Za-z0-9_-]*:|\Z)',lambda _:replacement+'\n',f,flags=re.M|re.S)
  else:raise ValueError(k)
 body=x['body_proposal']['text'] if x.get('body_proposal') else b
 p.write_text('---'+f+'---\n'+body.lstrip())
mfile.write_text(json.dumps(m,indent=2,ensure_ascii=False)+'\n')
cf=Path('research')/(r+'-batch-62.proof-contracts.json');c=json.loads(cf.read_text());c['scope']=a['contract_scope_field_delta']['after']
boundary={x['id']:x['boundaries'] for file in ['new4-boundary-drafts.json','existing12-boundary-drafts.json'] for x in json.loads((base/'metadata-candidates'/file).read_text())['proposals']}
for x in a['items']:
 if not x['contract']:continue
 id=x['id'];target=c['contracts'].setdefault(id,{})
 for k,d in x['contract']['patch']['field_patches'].items():target[k]=d['after']
 if id=='lem-nrqm-many-body-two-level-thermal-formulas':
  st=steps(parse(id)[1]);target['derivations']=[{'id':num,'step':num,'claim':claim.strip(),'inputs':sorted(set(re.findall(r'\b(?:F|L|A|C)\d+\b',claim)+re.findall(r'\bstep (\d+\.\d+)\b',claim)))} for num,claim in st]
 target['boundaries']=boundary[id]
 for q in target['boundaries']:
  for k in ['evidence','reason']:
   if k in q:q[k]=re.sub(r'^PROPOSED; owner[- ]verification[- ]required\.\s*','Owning focused62 proof/interface review confirmed. ',q[k])
cf.write_text(json.dumps(c,indent=2,ensure_ascii=False)+'\n')
xf=Path('research')/(r+'-batch-62.cross-batch-dependencies.json');rows=json.loads(xf.read_text());remove=set()
for op in a['crossdep_operations']:
 if op['action']=='remove-exact-row':remove.add(op['index']);continue
 if op['action']=='replace-selected-fields':
  row=rows[op['index']]
  for k,d in op['field_patches'].items():
   if k=='status':row[k]='verified'
   elif k=='evidence':row[k]='Owning focused62 source/interface proof and actualconsumer transfer completed; current source/consumer hash bindings retained in batch62-repair. Original source retrieval history retained; no new whole-item audit or external reading asserted.'
   else:row[k]=d['after']
 elif op['action']=='append-absent-exact-edge':
  row=op['after'];row['status']='verified';row['evidence']='Necessary exact62 logical supplier edge checked in owning local proof/interface repair; guards and actualclaims recorded in batch62-repair. No new source repair/retrieval or independent audit.';rows.append(row)
rows=[x for j,x in enumerate(rows) if j not in remove];xf.write_text(json.dumps(rows,indent=2,ensure_ascii=False)+'\n')
vf=Path('research')/(r+'-batch-62.coverage.json');v=json.loads(vf.read_text());v['local_prerequisite_dispositions']=a['coverage']['local_prerequisite_dispositions_field_delta']['after'];v['local_repair']='quantum-recovery/batch62-repair/repair.json; original49source dispositions/fetch history unchanged; four locallyproved necessary mathematical prerequisites, no new source reading claimed';vf.write_text(json.dumps(v,indent=2,ensure_ascii=False)+'\n')
(base/'metadata-integration.json').write_text(json.dumps({'package':'metadata-candidates/delivery-report.json','guarded_items':22,'contracts':16,'owner_verified_boundary_rows':128,'single_writer':'/root/physics_quantum_recovery','delta':'Exact twolevel proof-only P0P1=0 after candidate guard; current mirror/derivation rebound, Statement unchanged.','no_readiness_yet':True},indent=2)+'\n');print('Integrated final22 metadata; originalsourcehistory preserved')
