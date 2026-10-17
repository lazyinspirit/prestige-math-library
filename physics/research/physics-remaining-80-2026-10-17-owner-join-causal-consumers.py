from pathlib import Path
import json,yaml,hashlib,datetime,os
r=Path(__file__).resolve().parents[1];run='physics-remaining-80-2026-10-17';out=r/'research'/f'{run}-owner-causal-consumer-home-19';assert not (out/'completion.json').exists();j=lambda p:json.loads(p.read_text());sha=lambda b:hashlib.sha256(b).hexdigest();dump=lambda x:json.dumps(x,ensure_ascii=False,indent=2)+'\n'
s=j(r/'.physics-autopilot'/run/'state.json')['dispatches']['1-scaffold:batch-22'];assert s.get('endedAt') and s['lastExitOk'] is True
report=j(r/'research'/f'{run}-owner-batch22-scientific-round1.json')
for row in report['items']:assert sha((r/row['source_binding']['path']).read_bytes())==row['source_binding']['raw_sha256']
m=r/'research'/f'{run}-batch-22.pages.json';rows=j(m);a=next(p for p in rows if p['kind']=='A');assert a['id']=='emg-ms02';requires=list(dict.fromkeys(a['requires']+['emg-cp01']));a['requires']=requires
planpath=r/'research/plan-spec.json';plan=j(planpath);page=next(p for p in plan['pages'] if p['id']==a['id']);parent=next(p for p in plan['pages'] if p['id']=='emg-cp01');assert parent['kind']=='A' and parent['order']<page['order'];page['requires']=requires
p=r/'library'/a['category']/(a['id']+'.md');raw=p.read_text();fm=yaml.safe_load(raw.split('---',2)[1]);fm['requires']=requires;body=raw.split('---',2)[2];body=body.replace('record exact supplier statements and unresolved prerequisites; draft status\nis not acceptance.','record exact supplier statements and current draft qualifications;\nindependent review remains pending.')
nextpage='---\n'+yaml.safe_dump(fm,sort_keys=False,allow_unicode=True).rstrip()+'\n---'+body
b=r/'library'/a['category']/(a['companion']+'.md');oldb=b.read_text();newb=oldb.replace('the planned causal-vocabulary interface where cited.','the current causal-vocabulary interface where cited.');assert oldb!=newb
writes={m:dump(rows),planpath:dump(plan),p:nextpage,b:newb};before={x:x.read_bytes() for x in writes};out.mkdir(parents=True,exist_ok=True)
for x,raw in writes.items():
 assert x.read_bytes()==before[x];archive=out/'before'/x.relative_to(r);archive.parent.mkdir(parents=True,exist_ok=True);archive.write_bytes(before[x]);temp=x.with_name(x.name+'.owner-temp');temp.write_text(raw);os.replace(temp,x)
(out/'completion.json').write_text(dump({'run':run,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'qualification':'Exact existing producer6/consumer22 prerequisite-home link and stale page-status transcription; no scientific acceptance or gate.','requires':requires,'files':[{'path':str(x.relative_to(r)),'before':sha(before[x]),'after':sha(x.read_bytes())} for x in writes]}));print('Joined exact earlier CP01 producer into MS02 canonical/manifest/page context')
