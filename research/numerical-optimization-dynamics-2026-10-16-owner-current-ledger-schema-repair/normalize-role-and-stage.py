import json,re,os,time,shutil
from pathlib import Path
from datetime import datetime,timezone
R='numerical-optimization-dynamics-2026-10-16';O=Path('research/'+R+'-owner-current-ledger-schema-repair');ledger=Path('research/defect-ledger.jsonl');lock=Path(str(ledger)+'.append-lock');at=datetime.now(timezone.utc).isoformat();receipt=str(O/'receipt.json')
ids=['numerical-optimization-dynamics-2026-10-16-3a-batch-93-D001','numerical-optimization-dynamics-2026-10-16-3a-batch-93-D002','nod-b76-3a-vector-driver-citation','nod-b76-3a-initial-boundary','nod-b106-3a-drift-ito-regularity'];mapping={id:id+'-schema-successor' for id in ids}
decpaths=[Path(f'research/{R}-alpha-batch-{b}-3a-decisions.json') for b in [76,93,106]];decraw={str(p):p.read_text() for p in decpaths};decisions={p:json.loads(t) for p,t in decraw.items()};refs={id:[] for id in ids}
for path,d in decisions.items():
 for decision in d['decisions']:
  for id in decision.get('defect_ids',[]):
   if id in refs:refs[id].append({'path':path,'obligation':decision['obligation']})
assert all(refs.values())
started=time.monotonic()
while True:
 try:lock.mkdir();break
 except FileExistsError:
  if time.monotonic()-started>30:raise RuntimeError('native ledger append lock remained occupied; no mutation')
  time.sleep(.1)
try:
 (lock/'owner.json').write_text(json.dumps({'pid':os.getpid(),'at':at,'purpose':'root-approved seven existing schema errors only'}))
 before=ledger.read_bytes();assert not (O/'before/research/defect-ledger.jsonl').exists(),'preserve prior application history'
 lines=before.decode().splitlines(keepends=True);rows=[json.loads(l) for l in lines if l.strip()];allids={r['defect_id'] for r in rows};assert not set(mapping.values())&allids
 found={r['defect_id']:r for r in rows if r['defect_id'] in ids};assert len(found)==5
 assert not any(set(r.get('supersedes',[]))&set(ids) for r in rows),'new native successor already present; stop'
 dest=O/'before/research/defect-ledger.jsonl';dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(before)
 for p,raw in decraw.items():
  dest=O/'before'/p;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(raw)
 changes=[]
 for i,line in enumerate(lines):
  r=json.loads(line)
  if r['defect_id'] not in ids[:2]:continue
  assert r['caught_by_role']=='alpha-batch-93'
  dest=O/'before/role-rows'/f'{r["defect_id"]}.jsonl';dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(line)
  new,n=re.subn(r'("caught_by_role"\s*:\s*)"alpha-batch-93"',r'\1"group-alpha"',line);assert n==1
  provenance={'at':at,'authority':'Root explicit mechanical schema normalization instruction','original_role':'alpha-batch-93','receipt':receipt,'note':'Original native ledger row bytes are retained verbatim in the before archive. This changes only the schema role label and adds explicit historical provenance; no historical author, severity, evidence or disposition is changed.'}
  extra=',"historical_caught_by_role":"alpha-batch-93","root_mechanical_schema_normalization":'+json.dumps(provenance,separators=(',',':'))
  m=re.search(r'}\s*$',new);assert m;new=new[:m.start()]+extra+new[m.start():]
  nr=json.loads(new);assert {k:v for k,v in nr.items() if k not in ['historical_caught_by_role','root_mechanical_schema_normalization']}==dict(r,caught_by_role='group-alpha')
  lines[i]=new;changes.append({'defect_id':r['defect_id'],'line':i+1,'before_role':'alpha-batch-93','after_role':'group-alpha'})
 assert len(changes)==2;after=''.join(lines).encode();ledger.write_bytes(after)
 (O/'after-role-normalization.json').write_text(json.dumps({'at':at,'ledger':str(ledger),'role_changes':changes,'all_other_ledger_lines_byteidentical':True,'full_before':str(O/'before/research/defect-ledger.jsonl')},indent=2)+'\n')
finally:
 shutil.rmtree(lock)
changespec={ids[0]:('location','facts-block','Original location was Facts & Assumptions [F1]; the detailed F1 locus remains recorded here. This is the same original inaccurate initialization citation.'),ids[1]:('location','facts-block','Original location was Facts & Assumptions [F5] and Verification 1.1; both precise loci remain recorded here. The defect was the inflated F5 integrability citation used in Verification 1.1.'),ids[2]:('subclass','citation-inflated','Original subclass was citation-mismatch. Its recorded evidence attributes a scalar-Brownian-driver Ito supplier to arbitrary vector-driver coordinates, so citation-inflated is the supported precise closed-enum label.'),ids[3]:('subclass','missing-case','Original subclass was boundary-case. Its recorded evidence omits the initial-outside-ball case |xi|>R where tau_R=0, making the original asserted exit equality unjustified. The closed-enum label missing-case preserves this same physical defect.'),ids[4]:('location','proof-step','Original location was proof:2.2 and F6; both precise loci remain recorded here. The same original regularity inference in proof 2.2 and cited F6 is retained.')}
successors=[]
for id in ids:
 r=json.loads(json.dumps(found[id]));field,value,note=changespec[id];r['defect_id']=mapping[id];r['at']=at;r[field]=value;r['supersedes']=[id];r['caught_by_role']='group-alpha';r['adjudication_ref']=refs[id]
 r['subclass_note']=(r.get('subclass_note','')+'\n\n' if r.get('subclass_note') else '')+'Mechanical schema successor only. '+note
 r['schema_correction_provenance']={'original_defect_id':id,'original_field':field,'original_value':found[id][field],'same_physical_defect':True,'original_at':found[id]['at'],'original_caught_by_role':found[id]['caught_by_role'],'receipt':receipt}
 for key in ['severity','disposition','evidence','subject','class','caught_at_stage']:
  assert r.get(key)==found[id].get(key),(id,key)
 successors.append(r)
(O/'successors.json').write_text(json.dumps(successors,indent=2,ensure_ascii=False)+'\n');(O/'decision-rebase-plan.json').write_text(json.dumps({'mapping':mapping,'files':list(decraw),'original_decision_files_archived':True,'typed_refs':refs},indent=2)+'\n')
print(json.dumps({'role_rows_normalized':len(changes),'successors_staged':len(successors),'decision_rebase_not_yet_applied':True}))
