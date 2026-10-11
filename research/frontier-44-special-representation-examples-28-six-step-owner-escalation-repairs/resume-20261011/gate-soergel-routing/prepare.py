import json,hashlib,pathlib,copy,datetime
R=pathlib.Path('.');run='frontier-44-special-representation-examples-28-six-step';base=R/'research'/f'{run}-owner-escalation-repairs';out=base/'resume-20261011/gate-soergel-routing';out.mkdir(exist_ok=True);(out/'before').mkdir(exist_ok=True)
sha=lambda x:hashlib.sha256(x).hexdigest(); hv=lambda x:sha(json.dumps(x,sort_keys=True,separators=(',',':'),ensure_ascii=False).encode());read=lambda p:json.loads(pathlib.Path(p).read_text());stamp=datetime.datetime.now(datetime.timezone.utc).isoformat();dp=f'research/{run}-alpha-batch-10-3a-decisions.json';doc=read(dp);rows=[json.loads(l) for l in open('research/defect-ledger.jsonl')];ledger={x['defect_id']:x for x in rows};guards={dp:sha(pathlib.Path(dp).read_bytes())};(out/'before'/pathlib.Path(dp).name).write_bytes(pathlib.Path(dp).read_bytes());refs=[base/'soergel/escalation-resolution-summary.md',base/'soergel/escalation-resolution-packet.json',base/'soergel/continuation-final-report.json',base/'soergel/round-2-final-delta.json',base/'soergel/round-2-consumer-checks.json'];ref=[{'path':str(p),'sha256':sha(p.read_bytes())} for p in refs];changes=[];newrows=[];shared=[]
for n in range(1,5):
 d=next(x for x in doc['decisions'] if x['obligation']==f'reader:10:{n}');before=copy.deepcopy(d);old=ledger[f'f44six-b10-published-reader-{n}'];row=copy.deepcopy(old);row.update(defect_id=f'{old["defect_id"]}-owner-repaired-20261011',supersedes=[old['defect_id']],at=stamp,disposition='fixed',repair_confidence=1);receipt=f'{base}/soergel/receipts/{d["id"]}.json';row['evidence']+= [{'path':str(base/'soergel/continuation-final-report.json'),'note':'Same retained source owner completed actual local support/Hom construction; current published repair has a durable preimage, native ownership claim and receipt.'},{'path':receipt,'note':'Recorded local published repair binds corrected source to original native claim and actual local checks; no whole-item audit or independent worker acceptance is invented.'}];d['defect_ids']=[row['defect_id']];d['repair_confidence']=1;d['evidence']='Historically true missing local proof retained. The same owner supplied the constructive local graph/support and special/full Hom proofs, recorded with current published repair receipt '+receipt+'. Original observed_source=null and historical_delta_unknown remain unchanged; no historical observed bytes are invented.';d['owner_resolution']=before['owner_resolution']+' Subsequent genuine local source-owner repair is now bound by the recorded published receipt; the original observation remains unbound.';newrows.append(row);changes.append({'path':dp,'obligation':d['obligation'],'before':before,'after':copy.deepcopy(d),'before_row_sha256':hv(before)});guards[receipt]=sha(pathlib.Path(receipt).read_bytes()); guards['items/'+d['id']+'.md']=sha(pathlib.Path('items/'+d['id']+'.md').read_bytes())
# Every owner-soergel row family includes its actual same-subject immutable targets; no new finding is made.
families={}
for p in pathlib.Path('research').glob(f'{run}-alpha-*-3a-decisions.json'):
 dd=doc if str(p)==dp else read(p)
 for d in dd['decisions']:
  for di in d.get('defect_ids',[]):
   if 'owner-soergel-native-refuter10-' in di:families.setdefault(di,[]).append((str(p),d))
for di,family in families.items():
 if len(family)<2:continue
 local=[d for p,d in family if p==dp]; anchor=next((d for d in local if d['obligation'].startswith('touched:')),None)
 if not anchor:continue
 targets=[]
 for p,d in family:
  b=d['obligation'].split(':')[1];scopepath=f'research/{run}-step3-scope-{b}.json';s=read(scopepath);guards[scopepath]=sha(pathlib.Path(scopepath).read_bytes());o=d['obligation']
  if o.startswith('touched:'):t={'obligation':o,'id':d['id'],'batch':b,'route':'touched','added':d['id'] in s.get('added',[])}
  elif o.startswith('reader:'):t={**next(x for x in s['reader_findings'] if x['obligation']==o),'route':'reader'}
  elif o.startswith('refuter:'):t={**next(x for x in s['refuter_findings'] if x['obligation']==o),'route':'flagged'}
  else:raise Exception(o)
  targets.append({'obligation':o,'target_sha256':hv(t),'target':t})
 for d in local:
  if d is anchor:continue
  before=copy.deepcopy(d);d['same_defect_as']=anchor['obligation'];d['same_defect_evidence']='The touched reconstruction and this original flagged observation describe the same historical physical defect on this exact source subject. The retained Soergel source-owner repair packet identifies its completed constructive repair; this explicit bridge adds no new finding or audit.';changes.append({'path':dp,'obligation':d['obligation'],'before':before,'after':copy.deepcopy(d),'before_row_sha256':hv(before)})
 row=ledger[di];path='items/'+row['subject']+'.md';guards[path]=sha(pathlib.Path(path).read_bytes());shared.append({'id':row['subject'],'defect_id':di,'ledger_row_sha256':hv(row),'reason':'The actual same-subject original refuter observation and touched source reconstruction refer to this one historical physical defect, with the exact already-fixed row. Completed owner construction and retained round-1/round-2 receipts repair it; no observations or review rounds are changed. Cross-batch original observations, when present, report this same producer defect.','current_path':path,'current_raw_sha256':guards[path],'evidence':ref,'obligations':targets})
# Deduplicate sequential changes by obligation into one guarded final replacement.
merged={}
for c in changes:
 if c['obligation'] not in merged:merged[c['obligation']]=c
 else:merged[c['obligation']]['after']=c['after']
for p in refs:guards[str(p)]=sha(p.read_bytes())
json.dump({'version':1,'run':run,'author':'/root/gate_contracts_geometry','at':stamp,'guards':guards,'decision_changes':list(merged.values()),'append_only_ledger_rows':newrows,'shared_evidence_additions':shared,'unresolved_obligations':['reader:10:5'],'metadata_hash_refresh':'Root final freeze after mathematical repairs; no immutable scope mutation.'},open(out/'proposal.json','w'),indent=2,ensure_ascii=False);print(len(merged),len(newrows),len(shared))
