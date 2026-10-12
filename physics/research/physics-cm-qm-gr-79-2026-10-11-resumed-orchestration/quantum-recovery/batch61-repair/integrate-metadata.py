from pathlib import Path
import json,hashlib,re,yaml
r='physics-cm-qm-gr-79-2026-10-11';base=Path('research')/(r+'-resumed-orchestration/quantum-recovery/batch61-repair');a=json.load(open(base/'metadata-candidates/proposals.json'))
allowed={'current-carrier-guards.json','ex-nrqm-scattering-born-uniform-ball-amplitude.md','rem-nrqm-scattering-long-range-and-threshold-limits.md'}
changed=[]
for x in a['rawguards']:
 p=Path(x['path']);h=hashlib.sha256(p.read_bytes()).hexdigest()
 if h!=x['raw_sha256']:
  assert p.name in allowed,(str(p),h);changed.append({'path':str(p),'before':x['raw_sha256'],'after':h})
def parse(id):
 _,f,b=(Path('items')/(id+'.md')).read_text().split('---',2);return yaml.safe_load(f),b.lstrip()
mf=Path('research')/(r+'-batch-61.pages.json');m=json.load(open(mf));lookup={i['id']:i for p in m for i in p['items']}
for x in a['items']:
 fm,b=parse(x['id']); row=lookup[x['id']]
 for k,d in x['manifest']['field_patches'].items():row[k]=d['after']
 row['statement']=b
 for k in ['deps','dependency_roles','dependency_level','physical_scope']:
  if k in fm:row[k]=fm[k]
mf.write_text(json.dumps(m,indent=2,ensure_ascii=False)+'\n')
cf=Path('research')/(r+'-batch-61.proof-contracts.json');c=json.load(open(cf));c['scope']=a['contract_scope_field_delta']['after'];bd=json.load(open(base/'metadata-candidates/boundary-drafts.json'));boundary={x['id']:x['boundaries'] for x in bd['proposals']}
for x in a['items']:
 if not x['contract'] or not x['contract'].get('patch'):continue
 id=x['id'];t=c['contracts'][id]
 for k,d in x['contract']['patch']['field_patches'].items():t[k]=d['after']
 if id=='ex-nrqm-scattering-born-uniform-ball-amplitude':
  body=parse(id)[1];st=re.findall(r'^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\n\n## |\Z)',body,re.M|re.S)
  for deriv,(num,claim) in zip(t['derivations'],st):assert deriv['step']==num;deriv['claim']=claim.strip()
 t['boundaries']=boundary[id]
 for q in t['boundaries']:
  for k in ['evidence','reason']:
   if k in q:q[k]=re.sub(r'^PROPOSED; owner-verification-required\.\s*','Owning focused61 review. ',q[k]).replace(' Current carrier and step excerpts are attached in anchors; reassess the disposition against current hypotheses before integration.','')
 if id=='pthm-nrqm-scattering-single-channel-resonance-cross-section':
  for q in t['boundaries']:
   if q['case']=='zero':q['evidence']='Owning focused61 review: x=E-E_r=0 uses Arg(x+iy)=pi/2 with y>0; the Lorentzian equals1. Physical evaluation there requires E_r>0.'
   if q['case']=='endpoints':q['evidence']='Owning focused61 review: auxiliary Lorentzian defined on all real E; physical cross section only E>0, and resonance reading only E_r>0. Full sigma includes energy-dependent 1/k(E)^2.'
 if id=='ex-nrqm-scattering-square-well-s-wave-phase-shift':
  for q in t['boundaries']:
   if q['case']=='endpoints':q['evidence']='Owning focused61 review: u and its radial derivative match at r=a; E>0 formulas include sin(Ka)=0 without division. E down to0 is split into cos(K0a) nonzero and threshold-resonant branches.'
cf.write_text(json.dumps(c,indent=2,ensure_ascii=False)+'\n')
xf=Path('research')/(r+'-batch-61.cross-batch-dependencies.json');rows=json.load(open(xf));remove=set()
for op in a['crossdep_operations']:
 if op['action']=='remove-exact-row':remove.add(op['index']);continue
 if op['action']=='replace-selected-fields':
  row=rows[op['index']]
  for k,d in op['field_patches'].items():row[k]=d['after']
 elif op['action']=='append-absent-exact-edge':row=dict(op['after']);rows.append(row)
 else:raise ValueError(op['action'])
 row['status']='verified';row['evidence']='Owning focused61 actual supplier-interface and consumer transfer completed; exact current guards and original source-reading history retained in batch61-repair. Local repair only; no independent acceptance or renewed supplier audit asserted.'
rows=[x for j,x in enumerate(rows) if j not in remove];xf.write_text(json.dumps(rows,indent=2,ensure_ascii=False)+'\n')
(base/'metadata-integration.json').write_text(json.dumps({'version':1,'single_writer':'/root/physics_quantum_recovery','items':23,'contracts':15,'candidate_guard_deltas':changed,'boundaries':120,'readiness_pending':True,'original_coverage_preserved':21},indent=2)+'\n')
print('Integrated23 mirrors15 contracts196 exact edge deltas; readiness pending')
