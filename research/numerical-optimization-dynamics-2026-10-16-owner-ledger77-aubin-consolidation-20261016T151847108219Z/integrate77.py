from pathlib import Path
import json,datetime,subprocess,copy
P=Path(__file__).parent
R='numerical-optimization-dynamics-2026-10-16'
ledger=Path('research/defect-ledger.jsonl')
raw=ledger.read_bytes(); rows=[json.loads(l) for l in raw.splitlines()]; by={x['defect_id']:x for x in rows}
packet_path=Path('research')/(R+'-owner-native-created-inventory-watch/20261016T144855751425Z-native77-attempt2/integration-requests.native77.json')
packet=json.loads(packet_path.read_text())
decision_path=Path('research')/(R+'-alpha-batch-77-3a-decisions.json')
before_dec=decision_path.read_bytes(); dec=json.loads(before_dec)
now=datetime.datetime.now(datetime.timezone.utc).isoformat()
append=[]; mapping={}
for request in packet['shared_history_requests']:
 old=request['defect_id']; prior=by[old]; new=old+'-causal-current'
 assert new not in by
 assert prior['subject']==request['subject'] and prior['disposition']=='fixed'
 assert not any(old in row.get('supersedes',[]) for row in rows)
 row=copy.deepcopy(prior); row['defect_id']=new; row['at']=now;row['supersedes']=[old]
 row['adjudication_ref']=copy.deepcopy(prior.get('adjudication_ref',[]))
 refs=request['required_adjudication_ref']
 if refs is None: raise RuntimeError('Inspect packet keys: '+str(request.keys()))
 for ref in refs:
  if ref not in row['adjudication_ref']:row['adjudication_ref'].append(ref)
 row['integration_note']='Mechanical append-only causal-reference integration of completed independent native77 attempt2; original row, native verdicts, evidence and confidence remain historical. Same-subject procedure repair and distinct added proof helper retain their native same_defect_as/causal_subject linkage; no owner mathematical acceptance.'
 append.append(row);mapping[old]=new
schedule=packet['closed_schedule_row_for_root_append']
if schedule['defect_id'] not in by:append.append(schedule)
else: assert by[schedule['defect_id']]==schedule
changes=[]
for d in dec['decisions']:
 old=d.get('defect_ids',[]);new=[mapping.get(x,x) for x in old]
 if new!=old:changes.append({'obligation':d['obligation'],'before':old,'after':new});d['defect_ids']=new
assert len(changes)==9,changes
(P/'before/defect-ledger.jsonl').write_bytes(raw)
(P/'before'/decision_path.name).write_bytes(before_dec)
(P/'native77-append.json').write_text(json.dumps(append,indent=2,ensure_ascii=False)+'\n')
assert ledger.read_bytes().startswith(raw) and decision_path.read_bytes()==before_dec
cmd=['node','tools/defect-ledger.mjs','append','--file',str(P/'native77-append.json'),'--no-render']
result=subprocess.run(cmd,capture_output=True,text=True)
(P/'native77-append-command.json').write_text(json.dumps({'command':cmd,'exit_code':result.returncode,'stdout':result.stdout,'stderr':result.stderr},indent=2)+'\n')
assert result.returncode==0,result.stderr
assert ledger.read_bytes().startswith(raw)
assert decision_path.read_bytes()==before_dec
text=json.dumps(dec,indent=2,ensure_ascii=False)+'\n'
decision_path.write_text(text)
# Verify only current defect_ids changed. Nested prior history untouched.
verify=json.loads(text)
for a,b in zip(json.loads(before_dec)['decisions'],verify['decisions']):
 a=copy.deepcopy(a);b=copy.deepcopy(b);a.pop('defect_ids',None);b.pop('defect_ids',None);assert a==b
(P/'after'/decision_path.name).write_bytes(decision_path.read_bytes())
(P/'native77-receipt.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'kind':'mechanical-ledger-integration-only','native_result':'research/'+R+'-dispatch/alpha-3a-batch-77.attempt-2.result.json','packet':str(packet_path),'appended_ids':[r['defect_id'] for r in append],'current_decision_pointer_changes':changes,'original_ledger_bytes_preserved_as_prefix':True,'other_decision_fields_unchanged':True,'no_render':True,'no_gates_or_hash_refresh':True},indent=2)+'\n')
print(result.stdout.strip());print(str(P/'native77-receipt.json'))
