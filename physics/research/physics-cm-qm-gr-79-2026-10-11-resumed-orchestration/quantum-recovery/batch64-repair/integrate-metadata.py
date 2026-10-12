from pathlib import Path
import json,hashlib,re,yaml
r='physics-cm-qm-gr-79-2026-10-11';b=Path('research')/(r+'-resumed-orchestration/quantum-recovery/batch64-repair');packs=[json.load(open(b/'metadata-candidates'/n)) for n in ['settled11-proposals.json','final-three-proposals.json']];delta=json.load(open(b/'metadata-candidates/final-context-delta.json'));allowed={'items/'+i+'.md' for i in delta['changed_carriers']};guard_deltas=[]
for x in delta['final_rawguards']:
 assert hashlib.sha256(Path(x['path']).read_bytes()).hexdigest()==x['raw_sha256'],x['path']
for a in packs:
 for x in a['rawguards']:
  h=hashlib.sha256(Path(x['path']).read_bytes()).hexdigest()
  if h!=x['raw_sha256']:
   assert x['path'] in allowed,x['path'];guard_deltas.append({'path':x['path'],'before':x['raw_sha256'],'after':h})
def parse(id):
 _,f,body=(Path('items')/(id+'.md')).read_text().split('---',2);return yaml.safe_load(f),body.lstrip()
mf=Path('research')/(r+'-batch-64.pages.json');m=json.load(open(mf));lookup={i['id']:i for p in m for i in p['items']};cf=Path('research')/(r+'-batch-64.proof-contracts.json');c=json.load(open(cf));xf=Path('research')/(r+'-batch-64.cross-batch-dependencies.json');rows=json.load(open(xf));remove=set()
boundary={x['id']:x['boundaries'] for n in ['settled11-boundary-drafts.json','final-three-boundary-drafts.json'] for x in json.load(open(b/'metadata-candidates'/n))['proposals']}
for a in packs:
 for x in a['items']:
  id=x['id'];fm,body=parse(id);row=lookup[id]
  for k,d in x['manifest']['field_patches'].items():row[k]=d['after']
  row['statement']=body
  for k in ['deps','dependency_roles','dependency_level','physical_scope']:
   if k in fm:row[k]=fm[k]
  if x['contract'] and x['contract'].get('patch'):
   t=c['contracts'][id]
   for k,d in x['contract']['patch']['field_patches'].items():t[k]=d['after']
   t['boundaries']=boundary[id]
 for op in a['crossdep_operations']:
  if op['action']=='remove-exact-row':remove.add(op['index']);continue
  if op['action']=='replace-selected-fields':
   row=rows[op['index']]
   for k,d in op['field_patches'].items():row[k]=d['after']
  elif op['action']=='append-absent-exact-edge':row=dict(op['after']);rows.append(row)
  else:raise ValueError(op['action'])
  row['status']='verified';row['evidence']='Owning focused64 actual supplier-interface and old/current/alias consumer transfer completed; exact final guards and original source-reading history retained in batch64-repair. Local repair only; no independent acceptance or renewed exhausted-source audit.'
for x in delta['contract_deltas']:
 t=c['contracts'][x['id']]
 for op in x['citation_operations']:
  matches=[j for j,v in enumerate(t['citations']) if all(v.get(k)==val for k,val in op['selector'].items())];assert len(matches)==1,(x['id'],op['selector']);t['citations'][matches[0]]=op['after']
 if x.get('derivations_field_delta'):t['derivations']=x['derivations_field_delta']['after']
for id,t in c['contracts'].items():
 for q in t['boundaries']:
  for k in ['evidence','reason']:
   if k in q:q[k]='Owning focused64 review: '+q[k].removeprefix('PROPOSED; owner-verification-required. ')
 if id=='lem-nrqm-light-matter-first-order-photon-energy-law':
  for q in t['boundaries']:
   if q['case']=='zero':q['evidence']='Statement(a) and current proof1.1: M=0 or eta_0=0 makes the unnormalized vector zero; K_t(0)=t^2/hbar^2. Normalized(b)-(e) require M!=0,t>0; formal law independent of coupling.'
   if q['case']=='endpoints':q.update(status='checked',evidence='Statement(a) includes t=0 with zero vector; normalized law requires t>0. Concentration requires0<Delta<Lambda and positive continuous density; cutoff endpoint is not asserted.');q.pop('reason',None)
 if id=='texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison':
  for q in t['boundaries']:
   for k in ['evidence','reason']:
    if k in q:q[k]=q[k].replace('Step 2.1','Step 1.3')
   if q['case']=='zero':q['evidence']='Statement and proof1.1,1.3: eta_0=0 gives both rate coefficients zero, but formal normalized spectral laws still compare. Physical single-vertex normalized preparations require eta_0!=0. Sharp-line law assigns zero away fromDelta.'
 if id=='pthm-nrqm-light-matter-dipole-selection-rules':
  for q in t['boundaries']:
   for k in ['evidence','reason']:
    if k in q:q[k]=q[k].replace('step 3.1 evaluates the compression','step 4.1 evaluates the compression').replace('Steps 2.1 and 2.1','Steps 2.1 and 3.2')
 if id=='ex-nrqm-light-matter-two-level-dipole-drive-check':
  for q in t['boundaries']:
   if q['case']=='one':q['evidence']='Step2.1 expands the averaged signal as tau tends to0 through positive times; Statement declares tau>0 and unit-norm basis. Formulas have zero-time limits, but no degenerate source interval is invoked.'
   if q['case']=='zero':q['evidence']='Statement declares d,E0,omega>0, so coupling is nonzero here. Step1.2 full amplitude and co-component tend to zero as tau down to0; no zero coupling asserted beyond cited supplier family.'
   if q['case']=='degenerate':q['evidence']='Statement and step1.2 treat resonanceDelta=hbar omega using the continuous co-rotating quotient; delta=omega0-omega=0 is a frequency, distinct from energyDelta. Full/co coefficients remain distinct.'
c['scope']=packs[-1]['contract_scope_field_delta']['after'];mf.write_text(json.dumps(m,indent=2,ensure_ascii=False)+'\n');cf.write_text(json.dumps(c,indent=2,ensure_ascii=False)+'\n');xf.write_text(json.dumps([v for j,v in enumerate(rows) if j not in remove],indent=2,ensure_ascii=False)+'\n');(b/'metadata-integration.json').write_text(json.dumps({'version':1,'packages':['settled11-proposals.json','final-three-proposals.json','final-context-delta.json'],'items':14,'contracts':8,'guarded_context_deltas':guard_deltas,'boundaries':64,'original_coverage_preserved':26,'sole_writer':'/root/physics_quantum_recovery','ready_pending':True},indent=2)+'\n');print('Integrated14 mirrors8contracts; authenticready pending')
