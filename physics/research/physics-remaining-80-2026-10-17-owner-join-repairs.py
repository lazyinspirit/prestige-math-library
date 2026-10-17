#!/usr/bin/env python3
"""Exact drained repair transcription only; no approval, level or gate seals."""
import pathlib,json,yaml,hashlib,re,datetime,os
r=pathlib.Path(__file__).resolve().parents[1];run='physics-remaining-80-2026-10-17';assert not (r/f'research/{run}-owner-repair-join-3.json').exists(), 'Join already recorded; use a new explicit amendment rather than overwriting historical evidence';state=json.loads((r/'.physics-autopilot'/run/'state.json').read_text());sh=lambda b:hashlib.sha256(b).hexdigest();writes={};before={};joins=[]
def put(p,raw):
 if isinstance(raw,str):raw=raw.encode()
 before[p]=p.read_bytes();writes[p]=raw
def dump(x):return json.dumps(x,ensure_ascii=False,indent=2)+'\n'
def fm(p):return yaml.safe_load(p.read_text().split('---',2)[1])
def pagefile(p):return r/f'library/{p["category"]}/{p["id"]}.md'
planpath=r/'research/plan-spec.json';plan=json.loads(planpath.read_text());pages={x['id']:x for x in plan['pages']};imports=json.loads((r/'research/math-imports.json').read_text());pins={x['path']:x['sha256'] for x in imports['files']};homes={};info={};wanted=set();batches={};localpages={}
for n in [2,3,4,21,36,38,74]:
 d=state['dispatches'][f'1-scaffold:batch-{n}'];assert d.get('endedAt') and d.get('lastExitOk') is True
 p=r/f'research/{run}-batch-{n}.pages.json';rows=json.loads(p.read_text());batches[n]=(p,rows)
 for page in rows:
  source=pagefile(page);meta=fm(source);ids=list(meta.get('items') or [])+list(meta.get('examples') or [])
  if n==36 and page['kind']=='A':
   new='lem-qsm-finite-matrix-cstar-and-state-duality'
   if new not in ids:ids.insert(ids.index('lem-qsm-matrix-state-calculus')+1,new);meta['items']=ids;raw=source.read_text();body=raw.split('---',2)[2];put(source,'---\n'+yaml.safe_dump(meta,sort_keys=False,allow_unicode=True).rstrip()+'\n---'+body)
  old={i['id']:i for i in page['items']};newrows=[]
  for id in ids:
   raw=(r/f'items/{id}.md').read_text();m=yaml.safe_load(raw.split('---',2)[1]);assert m['id']==id and m['status']=='draft'
   item=old.get(id,{'id':id,'kind':m['kind'],'domain':m.get('domain','mathematics'),'title':m['title'],'library':page['library']})
   for k in ['kind','title','domain','deps','dependency_roles','physical_scope','empirical_premises','provenance','sources','external_refs','forward_refs','justified_by']:
    if k in m:item[k]=m[k]
    elif k in item and k in ['external_refs','forward_refs','justified_by']:del item[k]
   body=raw.split('---',2)[2];match=re.search(r'^## (Statement(?: refuted)?|Definition|Postulate|Example|Algorithm|Remark)\s*\n([\s\S]*?)(?=^## |\Z)',body,re.M)
   assert match,id;item['statement']=match.group(2).strip();newrows.append(item);wanted.update(m.get('deps',[]));homes[id]=page['id']
  assert set(old)<=set(ids),'lostinventory';page['items']=newrows;localpages[page['id']]=(page,source,meta)
for p in plan['pages']:
 for i in p.get('items',[])+p.get('examples',[]):
  id=i if isinstance(i,str) else i.get('id')
  if id in wanted:homes.setdefault(id,p['id'])
for path,pin in pins.items():
 if not path.startswith('library/') or path.endswith('/_category.md'):continue
 p=r/path;raw=p.read_bytes();m=yaml.safe_load(raw.decode().split('---',2)[1]);ids=[i if isinstance(i,str) else i.get('id') for i in (m.get('items') or [])+(m.get('examples') or [])];hits=wanted.intersection(ids)
 if not hits:continue
 assert sh(raw)==pin;id=m['page'];info[id]=(path,pin,m)
 for i in hits:
  if i not in homes:homes[i]=id
# Only add exact known published homes, never guessed pages.
for id,(page,source,meta) in localpages.items():
 if page['kind']!='A':continue
 req=[x for x in page.get('requires',[]) if x!='compact-self-adjoint-hilbert-schmidt-and-trace-class']
 if id=='qsm-states-ensembles':req=list(dict.fromkeys(req+pages[id]['requires']+['qm-composites-entanglement-and-reduced-states']))
 for item in page['items']:
  for d in item.get('deps',[]):
   home=homes.get(d)
   if home and home!=id and home not in req:req.append(home)
 for home in req:
  if home not in pages:
   path,pin,m=info[home];assert m.get('status')=='published';assert (pathlib.Path(imports['source_root'])/path).read_bytes()==(r/path).read_bytes();row={'id':home,'title':m['title'],'kind':'P','category':path.split('/')[1],'library':'mathematics','requires':[],'items':[],'order':0};plan['pages'].append(row);pages[home]=row
  assert pages[home]['kind']!='B' and pages[home]['order']<page['order'],(id,home)
 page['requires']=req;meta['requires']=req;pages[id]['requires']=req
 raw=writes.get(source,source.read_bytes()).decode();body=raw.split('---',2)[2];put(source,'---\n'+yaml.safe_dump(meta,sort_keys=False,allow_unicode=True).rstrip()+'\n---'+body);joins.append({'page':id,'order':page['order'],'items':len(page['items']),'requires':req})
for n,(p,rows) in batches.items():put(p,dump(rows))
put(planpath,dump(plan))
for p,raw in writes.items():assert p.read_bytes()==before[p],f'concurrentwrite{p}'
for p,raw in writes.items():
 temp=p.with_name(p.name+'.owner-temp');temp.write_bytes(raw);os.replace(temp,p)
report={'version':1,'run':run,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'kind':'mechanical-repair-inventory-and-prerequisite-transcription','qualification':'No scientific acceptance or current level/hash/readiness/gate seals; immutable native evidence untouched. All seven native source scopes successfully drained. Exact80pairs unchanged.','pages':joins,'inputs':{str(p.relative_to(r)):{'before':sh(before[p]),'after':sh(raw)} for p,raw in writes.items()}}
(r/f'research/{run}-owner-repair-join-3.json').write_text(dump(report));print('Joined',len(joins),'A pages;',len(writes),'files;',sum(len(rows[0]['items']) for p,rows in batches.values()),'A item rows; no gates attempted')
