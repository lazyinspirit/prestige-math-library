from pathlib import Path
import hashlib,json,datetime
base=Path(__file__).resolve().parent
baseline=json.loads((base/'gate-observation-baseline.json').read_text())
repo=Path.cwd(); events=repo/baseline['events_path']; data=events.read_bytes(); cut=baseline['events_size_bytes']
if len(data)<cut or hashlib.sha256(data[:cut]).hexdigest()!=baseline['events_prefix_sha256']:
    raise RuntimeError('event prefix changed; no observation can adopt a new baseline')
plan_path=repo/baseline['descriptor_plan']['path']; plan_data=plan_path.read_bytes()
if hashlib.sha256(plan_data).hexdigest()!=baseline['descriptor_plan']['raw_sha256']:
    raise RuntimeError('bound descriptor plan changed')
plan=json.loads(plan_data); gates=plan['gates']; expected=[g['id'] for g in gates]
rows=[]
for line in data[cut:].splitlines():
    try: rows.append(json.loads(line))
    except json.JSONDecodeError: break
starts=[i for i,r in enumerate(rows) if r.get('type')=='gates' and r.get('message','').startswith('3b-author: running 74 gate(s)')]
if not starts:
    print(json.dumps({'status':'waiting-for-current-battery-announcement','appended_events':len(rows)}));raise SystemExit(0)
start=starts[0]; stop=next((i for i in range(start+1,len(rows)) if rows[i].get('type')=='gates'),len(rows))
attempt=rows[start:stop]
outcomes=[r for r in attempt if r.get('type') in ('gate','gate-advisory') and 'ok' in r and 'id' in r]
ids=[r['id'] for r in outcomes]
if ids != expected[:len(ids)]:
    raise RuntimeError('current gate outcomes differ from actual bound descriptor order: '+json.dumps(ids))
if len(outcomes)<len(gates):
    print(json.dumps({'status':'battery-incomplete','completed':len(outcomes),'expected':len(gates),'failed_observed':[r['id'] for r in outcomes if not r['ok']]}));raise SystemExit(0)
if len(outcomes)!=len(gates):raise RuntimeError('extra current battery outcomes')
results=[]
for descriptor,event in zip(gates,outcomes):
    output=event.get('output','')
    results.append({'order':descriptor['order'],'id':descriptor['id'],'argv':descriptor['argv'],'liveness':descriptor.get('liveness'),'authority':'authoritative-gate' if event['type']=='gate' else 'advisory-not-stage-passage','at':event['at'],'ok':event['ok'],'code':event.get('code'),'why':event.get('why'),'checked':event.get('checked'),'output':output,'output_raw_sha256':hashlib.sha256(output.encode()).hexdigest(),'output_truncated_in_native_event':'characters omitted from event' in output,'native_event':event})
failures=[r for r in results if not r['ok']]
j={'version':1,'run':baseline['run'],'scope':'one-current-native3b-author74gate-attempt','recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseline':{'path':str(base/'gate-observation-baseline.json'),'sha256':hashlib.sha256((base/'gate-observation-baseline.json').read_bytes()).hexdigest()},'gate_announcement':attempt[0],'events_observation':{'path':str(events.relative_to(repo)),'observed_bytes':len(data),'observed_sha256':hashlib.sha256(data).hexdigest(),'baseline_prefix_verified':True},'counts':{'expected':74,'observed':len(results),'passed':len(results)-len(failures),'failed':len(failures),'authoritative':sum(r['authority']=='authoritative-gate' for r in results),'advisory':sum(r['authority']!='authoritative-gate' for r in results),'truncated_outputs':sum(r['output_truncated_in_native_event'] for r in results)},'failed_ids':[r['id'] for r in failures],'failures':failures,'results':results,'interpretation':'Native authoritative initial pass governs passage; advisory outcomes complete grouped diagnostic coverage but cannot stamp a stage. No mathematics reviewed. No controls or gates executed by observer. Root owns10minute live checks and any owner pause/repair.'}
p=base/'gate-observation-packet.json'
if p.exists():
    old=json.loads(p.read_text())
    if old['gate_announcement']!=j['gate_announcement']:raise RuntimeError('existing packet is another attempt; retain history')
else:p.write_text(json.dumps(j,indent=2)+'\n')
print(json.dumps({'status':'complete','packet':str(p.relative_to(repo)),'counts':j['counts'],'failed_ids':j['failed_ids']},indent=2))
