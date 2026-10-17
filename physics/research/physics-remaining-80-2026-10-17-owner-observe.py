#!/usr/bin/env python3
"""Owner progress observation only. Never writes native state or acceptance."""
import pathlib,json,collections,datetime,hashlib,subprocess
root=pathlib.Path(__file__).resolve().parents[1];run='physics-remaining-80-2026-10-17';state=root/'.physics-autopilot'/run;data=json.loads((state/'state.json').read_text());cache=state/'owner-supervision-observation.json';old=json.loads(cache.read_text()) if cache.exists() else {};completed={k for k,v in data['dispatches'].items() if k.startswith('1-scaffold:') and v.get('lastExitOk') is True};new=sorted(completed-set(old.get('completed',completed)));escalations={};decisions={};groups=collections.Counter();declared=set();malformed=[]
for f in (root/'research').glob(run+'-step1-*.json'):
 try:
  x=json.loads(f.read_text())
  if x.get('decision'):
   decisions[f.name]=x['decision']
   if x['decision']=='escalated':
    groups[x.get('reason','')[:100]]+=1;escalations[f.name]=x.get('reason','')
 except (ValueError,OSError):pass
for f in (root/'research').glob(run+'-batch-*.pages.json'):
 try:
  for p in json.loads(f.read_text()):
   for i in p.get('items',[]):
    if isinstance(i,dict) and i.get('id'):declared.add(i['id'])
 except (ValueError,OSError):malformed.append(f.name)
processes=subprocess.run(['ps','-eo','comm,args'],capture_output=True,text=True).stdout.splitlines();native=[x for x in processes if x.lstrip().startswith('node ') and 'physics-support/dispatch.mjs --role beta' in x and '--run '+run in x];summary={'observed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'stage':data.get('stage'),'scope_pairs':80,'successful_initial_author_handoffs':len(completed),'active_native_author_wrappers':len(native),'manifest_declared_items':len(declared),'declared_item_files_present':sum((root/'items'/f'{i}.md').exists() for i in declared),'declared_item_files_missing':sorted(i for i in declared if not (root/'items'/f'{i}.md').exists()),'readiness':dict(collections.Counter(decisions.values())),'malformed_inflight_manifests':malformed,'native_blockers':[x.get('message') for x in data.get('blockers',[])]}
for name,reason in escalations.items():
 if 'escalations' in old and old['escalations'].get(name)!=reason:print('NEW_ESCALATION',name,reason)
for k in new:
 n=k.split(':')[1];p=root/'research'/f'{run}-dispatch'/f'beta-{n}.result.json'
 try:x=json.loads(p.read_text());print('NEW_HANDOFF',n,str(x.get('tail',''))[-2400:])
 except (ValueError,OSError):print('NEW_HANDOFF',n,'result pending read')
print(json.dumps(summary));cache.write_text(json.dumps({'completed':sorted(completed),'summary':summary,'escalation_groups':dict(groups),'escalations':escalations},indent=2)+'\n')
