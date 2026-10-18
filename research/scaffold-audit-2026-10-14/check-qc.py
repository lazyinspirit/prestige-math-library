"""Read-only QC proposal consistency check; writes only this category's audit receipt."""
import pathlib,json,yaml
base=pathlib.Path('research/quantum-computing-planning');items=json.loads((base/'proposed-items.json').read_text())['items'];pages=json.loads((base/'pages.json').read_text())['pages'];by={i['id']:i for i in items};pb={p['page']:p for p in pages};root={};homes={};errors=[]
for f in pathlib.Path('items').glob('*.md'):
 try:d=yaml.safe_load(f.read_text().split('---',2)[1])
 except Exception:continue
 if isinstance(d,dict) and d.get('id'):root[d['id']]=d
for f in sorted(pathlib.Path('library').glob('*/*.md')):
 try:d=yaml.safe_load(f.read_text().split('---',2)[1])
 except Exception:continue
 if isinstance(d,dict) and d.get('page'):
  for id in (d.get('items') or [])+(d.get('examples') or []):homes.setdefault(id,d['page'])
assert len(by)==len(items);assert len(pb)==len(pages)
for i in items:
 for d in i['deps']:
  if d not in by and d not in root:errors.append(['missing supplier',i['id'],d]);continue
  s=by.get(d,root.get(d))
  if s['kind'] in ['remark','open-problem','physics-theorem','postulate','experiment','observation']:errors.append(['forbidden supplier',i['id'],d])
  h=by[d]['page'] if d in by else homes.get(d)
  if h and h!=i['page'] and h not in pb[i['page']]['requires']:errors.append(['page edge',i['id'],h])
  if d in by and by[d]['page']==i['page'] and pb[i['page']]['items'].index(d)>=pb[i['page']]['items'].index(i['id']):errors.append(['order',i['id'],d])
 for j in i['justified_by']:
  if i['id'] not in by[j]['deps']:errors.append(['justified_by',i['id'],j])
for p in pages:
 if len(p['items'])>(60 if p['kind']=='A' else 100):errors.append(['cap',p['page']])
 for d in p['requires']:
  if d in pb and pb[d]['kind']=='B':errors.append(['B prerequisite',p['page'],d])
def dag(nodes,dependencies):
 levels={};active=set()
 def visit(id):
  if id in levels:return levels[id]
  if id in active:raise ValueError('cycle '+id)
  active.add(id);v=max([visit(d)+1 for d in dependencies(nodes[id]) if d in nodes]+[0]);active.remove(id);levels[id]=v;return v
 for id in nodes:visit(id)
 return levels
levels=dag(by,lambda i:i['deps']);dag(pb,lambda p:p['requires'])
for i in items:
 if levels[i['id']]!=i['dependency_level']:errors.append(['level',i['id']])
receipt={'status':'fail' if errors else 'pass','scope':'QC draft inventory/page structural consistency ONLY; no proof acceptance and not the actual transitive root closure checker','proposed_items':len(items),'proposed_pages':len(pages),'errors':errors,'max_level':max(levels.values())}
pathlib.Path('research/scaffold-audit-2026-10-14/quantum-computing-structural-check.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps(receipt,indent=2));raise SystemExit(bool(errors))
