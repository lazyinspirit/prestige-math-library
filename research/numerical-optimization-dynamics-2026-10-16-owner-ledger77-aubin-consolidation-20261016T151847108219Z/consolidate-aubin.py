from pathlib import Path
import json,datetime,copy,subprocess
P=Path(__file__).parent;R='numerical-optimization-dynamics-2026-10-16'
ledger=Path('research/defect-ledger.jsonl');raw=ledger.read_bytes();rows=[json.loads(l) for l in raw.splitlines()];by={r['defect_id']:r for r in rows}
oldids=['nod-b38-3a-aubin-endpoint-current','nod-b101-3a-aubin-nitsche-endpoint-fixed'];newid='nod-b38-b101-3a-aubin-endpoint-consolidated'
assert newid not in by
for old in oldids:
 assert not any(old in r.get('supersedes',[]) for r in rows)
 assert by[old]['disposition']=='fixed'
assert by[oldids[0]]['subject']==by[oldids[1]]['subject']
row=copy.deepcopy(by[oldids[0]]);row['defect_id']=newid;row['at']=datetime.datetime.now(datetime.timezone.utc).isoformat();row['supersedes']=oldids
for ev in by[oldids[1]]['evidence']:
 if ev not in row['evidence']:row['evidence'].append(copy.deepcopy(ev))
for ref in by[oldids[1]]['adjudication_ref']:
 if ref not in row['adjudication_ref']:row['adjudication_ref'].append(copy.deepcopy(ref))
assert len(row['adjudication_ref'])==3
row['historical_defect_ids']=['nod-b101-3a-aubin-nitsche-endpoint',*oldids]
row['integration_note']='Owner-authorized mechanical consolidation of two completed independent native reviews of the same endpoint Statement defect. Both fixed predecessors remain immutable ledger history. Three actual decision references are retained; no new verdict, confidence, source repair or owner mathematical acceptance is supplied.'
paths=[Path('research')/(R+f'-alpha-batch-{b}-3a-decisions.json') for b in [38,101]]
befores={str(path):path.read_bytes() for path in paths};proposed={};changes=[]
for path in paths:
 original=json.loads(befores[str(path)]);d=copy.deepcopy(original)
 for decision in d['decisions']:
  old=decision.get('defect_ids',[]);new=[newid if x in oldids else x for x in old]
  if new!=old:
   assert decision['id']==row['subject'];changes.append({'path':str(path),'obligation':decision['obligation'],'before':old,'after':new});decision['defect_ids']=new
 for a,b in zip(original['decisions'],d['decisions']):
  a=copy.deepcopy(a);b=copy.deepcopy(b);a.pop('defect_ids',None);b.pop('defect_ids',None);assert a==b
 proposed[str(path)]=json.dumps(d,indent=2,ensure_ascii=False)+'\n'
assert len(changes)==3
(P/'before/defect-ledger-before-aubin.jsonl').write_bytes(raw)
for path in paths:(P/'before'/path.name).write_bytes(befores[str(path)])
(P/'aubin-append.json').write_text(json.dumps([row],indent=2,ensure_ascii=False)+'\n')
for path in paths:assert path.read_bytes()==befores[str(path)]
assert ledger.read_bytes().startswith(raw)
cmd=['node','tools/defect-ledger.mjs','append','--file',str(P/'aubin-append.json'),'--no-render'];result=subprocess.run(cmd,capture_output=True,text=True)
(P/'aubin-append-command.json').write_text(json.dumps({'command':cmd,'exit_code':result.returncode,'stdout':result.stdout,'stderr':result.stderr},indent=2)+'\n')
assert result.returncode==0,result.stderr
assert ledger.read_bytes().startswith(raw)
for path in paths:assert path.read_bytes()==befores[str(path)]
for path in paths:
 path.write_text(proposed[str(path)]);(P/'after'/path.name).write_bytes(path.read_bytes())
receipt={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'kind':'mechanical-same-physical-defect-consolidation-only','appended_ids':[newid],'supersedes':oldids,'native_results':['research/'+R+'-dispatch/alpha-3a-batch-38.attempt-2.result.json','research/'+R+'-dispatch/alpha-3a-batch-101.attempt-1.result.json'],'current_decision_pointer_changes':changes,'all_other_decision_fields_unchanged':True,'original_ledger_bytes_preserved_as_prefix':True,'adjudication_refs':row['adjudication_ref'],'no_new_acceptance_or_confidence':True,'no_render':True,'no_gates_or_hash_refresh':True}
(P/'aubin-receipt.json').write_text(json.dumps(receipt,indent=2)+'\n');print(result.stdout.strip());print(P/'aubin-receipt.json')
