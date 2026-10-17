#!/usr/bin/env python3
"""Root structural home/context admission; scientific supplier report stays immutable."""
from pathlib import Path
import json,yaml,hashlib,re,os,datetime
r=Path(__file__).resolve().parents[1];run='physics-remaining-80-2026-10-17';id='def-emg-causal-solution-and-horizon-vocabulary';out=r/'research'/f'{run}-owner-causal-home-17';assert not (out/'completion.json').exists()
sha=lambda b:hashlib.sha256(b).hexdigest();j=lambda p:json.loads(p.read_text());dump=lambda x:json.dumps(x,ensure_ascii=False,indent=2)+'\n'
report=j(r/'research'/f'{run}-owner-causal-vocabulary-round1-nonvacuity.json');source=r/'items'/f'{id}.md';raw=source.read_bytes();assert sha(raw)==report['source']['raw_sha256'];fm=yaml.safe_load(raw.decode().split('---',2)[1]);body=raw.decode().split('---',2)[2]
state=j(r/'.physics-autopilot'/run/'state.json');d=state['dispatches']['1-scaffold:batch-6'];assert d.get('endedAt') and d['lastExitOk'] is True
manifest=r/'research'/f'{run}-batch-6.pages.json';rows=j(manifest);a=next(p for p in rows if p['kind']=='A');assert a['id']=='emg-cp01' and all(i['id']!=id for p in rows for i in p['items'])
planpath=r/'research/plan-spec.json';plan=j(planpath);pages={p['id']:p for p in plan['pages']};planA=pages[a['id']];wanted=set(fm['deps']);candidates={i:[] for i in wanted}
imports=j(r/'research/math-imports.json');pins={x['path']:x for x in imports['files']}
for p in r.glob('library/*/*.md'):
 if p.name=='_category.md':continue
 text=p.read_text()
 if not any(i in text.split('---',2)[1] for i in wanted) if text.startswith('---') else True:continue
 try:m=yaml.safe_load(text.split('---',2)[1])
 except yaml.YAMLError:continue
 if not isinstance(m,dict) or m.get('status')!='published':continue
 ids={x if isinstance(x,str) else x.get('id') for x in (m.get('items') or [])+(m.get('examples') or [])}
 for i in wanted&ids:candidates[i].append((p,m))
homes={};contexts=[];requires=list(a['requires']);newP=[]
for dep,choices in candidates.items():
 assert choices,('Missing actual published prerequisite home',dep)
 choices.sort(key=lambda pm:(pm[1]['page'] not in requires,pm[1]['page'] not in pages,str(pm[0])))
 p,m=choices[0];home=m['page'];relative=str(p.relative_to(r));content=p.read_bytes();pin=pins.get(relative)
 if pin:
  assert sha(content)==pin['sha256'];original=Path(imports['source_root'])/pin.get('source_path',relative);assert original.read_bytes()==content
 homes[dep]=home;contexts.append({'item':dep,'page':home,'path':relative,'sha256':sha(content),'import_pinned':pin is not None})
 if home not in pages:
  row={'id':home,'title':m['title'],'kind':'P','category':p.parent.name,'library':'mathematics','requires':[],'items':[],'order':0};plan['pages'].append(row);pages[home]=row;newP.append(home)
 assert pages[home]['kind']!='B' and pages[home]['order']<a['order']
 if home not in requires:requires.append(home)
claim={k:fm[k] for k in ['id','kind','title','domain','library','deps','dependency_roles','physical_scope','provenance','sources']};claim['statement']=re.search(r'^## Definition\s*\n([\s\S]*?)(?=^## |\Z)',body,re.M).group(1).strip()
# Numeric labels remain the next explicit mechanical step.
a['items'].insert(1,claim);a['requires']=requires;planA['requires']=requires
pagepath=r/'library'/a['category']/(a['id']+'.md');oldpage=pagepath.read_text();assert oldpage.count('  - def-emg-electrovacuum-cauchy-system\n')==1
nextpage=oldpage.replace('  - def-emg-electrovacuum-cauchy-system\n','  - def-emg-electrovacuum-cauchy-system\n  - '+id+'\n')
pagefm=yaml.safe_load(nextpage.split('---',2)[1]);pagefm['requires']=requires;nextpage='---\n'+yaml.safe_dump(pagefm,sort_keys=False,allow_unicode=True).rstrip()+'\n---'+nextpage.split('---',2)[2]
nextpage=nextpage.rstrip()+'\n\nThe causal vocabulary fixes global causal and Cauchy conventions, signed Killing-horizon normalization, section area, selected-model escape and approached metric extensions.\n'
writes={manifest:dump(rows),planpath:dump(plan),pagepath:nextpage};before={p:p.read_bytes() for p in writes}
assert source.read_bytes()==raw;assert all(p.read_bytes()==v for p,v in before.items());out.mkdir(parents=True,exist_ok=True)
for p,text in writes.items():
 archive=out/'before'/p.relative_to(r);archive.parent.mkdir(parents=True,exist_ok=True);archive.write_bytes(before[p]);temp=p.with_name(p.name+'.owner-temp');temp.write_text(text);os.replace(temp,p)
(out/'completion.json').write_text(dump({'run':run,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'qualification':'Source-backed home and published prerequisite-context admission only; numeric labels/readiness/gates remain separate. Exact80pairs unchanged.','item':id,'batch':6,'source_raw_sha256':sha(raw),'new_P_context':newP,'requires':requires,'contexts':contexts,'files':[{'path':str(p.relative_to(r)),'before':sha(before[p]),'after':sha(p.read_bytes())} for p in writes]}));print(dump({'item':id,'batch':6,'new_P_context':newP,'requires':requires}))
