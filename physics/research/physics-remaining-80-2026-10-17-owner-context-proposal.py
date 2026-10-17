#!/usr/bin/env python3
"""Read-only exact prerequisite-home proposal for repaired drained pages."""
import pathlib,json,yaml,collections,hashlib
r=pathlib.Path(__file__).resolve().parents[1];run='physics-remaining-80-2026-10-17';plan=json.loads((r/'research/plan-spec.json').read_text());byid={p['id']:p for p in plan['pages']};imports=json.loads((r/'research/math-imports.json').read_text());targets={};wanted=set()
for n in [2,3,4,21,36,38,74]:
 rows=json.loads((r/f'research/{run}-batch-{n}.pages.json').read_text())
 for p in rows:
  if p['kind']!='A':continue
  deps=set()
  for i in p['items']:
   source=r/f'items/{i["id"]}.md';fm=yaml.safe_load(source.read_text().split('---',2)[1]);deps.update(fm.get('deps',[]))
  targets[p['id']]={'batch':n,'deps':deps,'requires':p.get('requires',[])};wanted.update(deps)
homes=collections.defaultdict(list); info={}
for p in plan['pages']:
 for x in p.get('items',[])+p.get('examples',[]):
  id=x if isinstance(x,str) else x.get('id')
  if id in wanted:homes[id].append(p['id'])
for f in imports['files']:
 if not f['path'].startswith('library/') or f['path'].endswith('/_category.md'):continue
 raw=(r/f['path']).read_bytes();fm=yaml.safe_load(raw.decode().split('---',2)[1]);page=fm.get('page');items=(fm.get('items') or [])+(fm.get('examples') or []);matches=wanted.intersection(x if isinstance(x,str) else x.get('id') for x in items)
 if not matches:continue
 assert hashlib.sha256(raw).hexdigest()==f['sha256']
 info[page]={'path':f['path'],'title':fm['title'],'status':fm.get('status'),'sha256':f['sha256']}
 for id in matches:
  if page not in homes[id]:homes[id].append(page)
for f in (r/'research').glob(run+'-batch-*.pages.json'):
 try:rows=json.loads(f.read_text())
 except ValueError:continue
 for p in rows:
  for i in p.get('items',[]):
   id=i if isinstance(i,str) else i['id']
   if id in wanted and p['id'] not in homes[id]:homes[id].append(p['id'])
for id,x in targets.items():
 additions=collections.defaultdict(list);unowned=[]
 for d in sorted(x['deps']):
  hs=homes.get(d,[])
  if not hs:unowned.append(d)
  elif len(hs)==1 and hs[0]!=id and hs[0] not in x['requires']:additions[hs[0]].append(d)
  elif len(hs)>1:print('AMBIGUOUS',d,hs)
 print(id,'additionalhomes',json.dumps(dict(additions)),'unowned',unowned)
for id,x in info.items():
 if id not in byid:print('MISSING_P',id,x)
