import json,yaml,re
from pathlib import Path
r='frontier-43-complex-representation-15'
paths=[Path(f'research/{r}-batch-{b}.pages.json') for b in [13]]
owned=[p for path in paths for p in json.loads(path.read_text())];ownedids={i['id'] for p in owned for i in p['items']}
items={}
def load(p):
 s=p.read_text();_,f,b=s.split('---',2);return yaml.safe_load(f),b
for p in Path('items').glob('*.md'):
 try:items[p.stem]=load(p)[0]
 except Exception:pass
runids={i['id'] for p in Path('research').glob(r+'-batch-*.pages.json') for page in json.loads(p.read_text()) for i in page['items']}
levels={};active=set()
def level(i):
 if i in levels:return levels[i]
 if i in active:raise Exception('item cycle '+i)
 active.add(i);v=1+max((level(d) for d in items.get(i,{}).get('deps',[]) if d in runids),default=-1);active.remove(i);levels[i]=v;return v
for i in ownedids:level(i)
for i in ownedids:
 p=Path('items')/(i+'.md');s=p.read_text();s=re.sub(r'^dependency_level:.*$',f'dependency_level: {levels[i]}',s,flags=re.M);p.write_text(s);items[i]['dependency_level']=levels[i]
allpages=[]
for p in Path('library').rglob('*.md'):
 try:
  f,b=load(p)
  if f and f.get('page') and isinstance(f.get('items'),list):allpages.append({**f,'id':f['page']})
 except Exception:pass
for p in Path('research').glob(r+'-batch-*.pages.json'):allpages.extend(json.loads(p.read_text()))
allpages.extend(json.loads(Path('research/plan-spec.json').read_text())['pages'])
allpages.extend(owned)
homes={}
for p in allpages:
 for i in p.get('items',[])+p.get('examples',[]):homes[i if isinstance(i,str) else i['id']]=p['id']
pagemap={p['id']:p for p in allpages};pagemap.update({p['id']:p for p in owned})
def ancestors(p,seen=None):
 seen=set() if seen is None else seen
 for q in pagemap.get(p,{}).get('requires',[]):
  if q not in seen:seen.add(q);ancestors(q,seen)
 return seen
for p in owned:
 before=next(x for b in [13] for x in json.loads(Path(f'research/{r}-complex-phase2-round1-before/research/{r}-batch-{b}.pages.json').read_text()) if x['id']==p['id'])
 p['requires']=before['requires'][:]
 pending=p['items'][:];done=[];same={i['id'] for i in pending}
 while pending:
  ready=next((i for i in pending if not(set(items[i['id']].get('deps',[]))&same-set(x['id'] for x in done))),None)
  if ready is None:raise Exception('page order cycle '+p['id'])
  pending.remove(ready);done.append(ready)
 p['items']=done
 for i in done:
  f=items[i['id']];b=load(Path('items')/(i['id']+'.md'))[1]
  for k in ['kind','title','deps','justified_by','proof_strategy','provenance','sources','dependency_level']:
   if k in f:i[k]=f[k]
  section='Definition' if '## Definition\n' in b else 'Statement';m=re.search(r'^## '+section+r'\s*\n(.*?)(?=^## |\Z)',b,re.M|re.S)
  if m:i['statement']=m.group(1).strip()
 for i in done:
  for d in items[i['id']].get('deps',[]):
   h=homes.get(d)
   if h and h!=p['id'] and h not in ancestors(p['id']):p.setdefault('requires',[]).append(h)
 for q in p['requires'][:]:
  if any(q in ancestors(other) for other in p['requires'] if other!=q):p['requires'].remove(q)
 lp=next(Path('library').rglob(p['id']+'.md'));f,b=load(lp);f['items']=[i['id'] for i in done] if p['kind']=='A' else [];f['examples']=[i['id'] for i in done] if p['kind']=='B' else [];f['requires']=p['requires'];lp.write_text('---\n'+yaml.safe_dump(f,sort_keys=False,allow_unicode=True)+'---'+b)
for path in paths:
 old=json.loads(path.read_text());path.write_text(json.dumps([next(p for p in owned if p['id']==x['id']) for x in old],indent=2,ensure_ascii=False)+'\n')
print('Owned items',len(ownedids),'supplier-first page synchronization complete')
