from pathlib import Path
import json,hashlib,re
D=Path('physics/research/frontier-expansion-2026-10-19/classical-electromagnetism');I=json.loads((D/'inventory.json').read_text());S=json.loads((D/'suppliers.json').read_text());P=json.loads((D/'splice-support.json').read_text());B=json.loads((D/'baseline.json').read_text());errors=[]
items={};homes={};kinds={};pages={}
for p in I['pairs']:
 for k in ('A','B'):
  pid=p['a_page'] if k=='A' else p['b_page'];pages[pid]=dict(library=p['library'],kind=k,requires=p['requires'] if k=='A' else [p['a_page']])
  for x in p[k]:
   if x['id'] in items:errors.append('duplicate item '+x['id'])
   items[x['id']]=x;homes[x['id']]=pid;kinds[x['id']]=k
ext={x['id']:x for x in S['external_items']}
for id,x in items.items():
 if any((Path(b)/(id+'.md')).exists() for b in ['items','physics/items']):errors.append('production ID collision '+id)
 if not all(x.get(k) for k in ['statement','proof_route','source_refs']):errors.append('incomplete interface '+id)
 prefix={'definition':'def-','algorithm':'alg-','lemma':'lem-','theorem':'thm-','corollary':'cor-','postulate':'post-','physics-theorem':'pthm-','example':'ex-','counterexample':'cex-'}[x['kind']]
 if not id.startswith(prefix):errors.append('kind prefix '+id)
 if re.search(r'\[\[|https?://|\]\(',x['statement']):errors.append('interrupted statement '+id)
 for dep in x['deps']:
  y=items.get(dep) or ext.get(dep)
  if not y:errors.append('missing supplier '+id+' '+dep);continue
  if dep.startswith('op-'):errors.append('open problem supplier '+dep)
  if x['domain']=='mathematics' and y['domain']!='mathematics':errors.append('math physical supplier '+id+' '+dep)
  if dep in kinds and kinds[dep]=='B' and homes[dep]!=homes[id]:errors.append('cross-page B supplier '+id+' '+dep)
  hp=homes.get(dep) or ext.get(dep,{}).get('page')
  if kinds[id]=='A' and hp!=homes[id] and hp not in pages[homes[id]]['requires']:errors.append('missing page requirement '+hp+' for '+id)
 for k in ['deps','justified_by']:
  if len(x[k])!=len(set(x[k])):errors.append('duplicate deps '+id)
for x in ext.values():
 p=Path(x['path'])
 if hashlib.sha256(p.read_bytes()).hexdigest()!=x['sha256']:errors.append('stale supplier '+x['id'])
for x in P['required_root_P_pages']:
 if hashlib.sha256(Path(x['source_path']).read_bytes()).hexdigest()!=x['source_sha256']:errors.append('stale P '+x['id'])
# Check new-item DAG and new-page DAG; old source graph is retained context, not reaudited.
def dag(graph):
 active=set();done=set();order=[]
 def visit(x):
  if x in active:errors.append('cycle '+x);return
  if x in done:return
  active.add(x)
  for dep in graph.get(x,[]):
   if dep in graph:visit(dep)
  active.remove(x);done.add(x);order.append(x)
 for x in graph:visit(x)
 return order
io=dag({id:x['deps'] for id,x in items.items()});po=dag({pid:p['requires'] for pid,p in pages.items()})
rootplan=json.loads(Path('physics/research/plan-spec.json').read_text());oldpages={p['id']:p for p in rootplan['pages']}
for pid,p in pages.items():
 if pid in oldpages:errors.append('page ID collision '+pid)
 for dep in p['requires']:
  y=pages.get(dep) or oldpages.get(dep) or next((x for x in P['required_root_P_pages'] if x['id']==dep),None)
  if not y:errors.append('missing prerequisite page '+dep)
  elif p['library']=='mathematics' and y.get('library')!='mathematics':errors.append('math page physical prerequisite '+pid+' '+dep)
for x in B['existing_page_rows']:
 row=x['row'];now=oldpages[row['id']]
 # Root may apply the authorized scaffold-only splice after worker captures baseline.
 now=dict(now);now['scaffold']=row.get('scaffold')
 if now!=row:errors.append('legacy non-pointer drift '+row['id'])
 if hashlib.sha256(json.dumps(row,sort_keys=True,separators=(',',':')).encode()).hexdigest()!=x['identity_sha256']:errors.append('bad baseline identity '+row['id'])
for x in B['current_authored_items']:
 if hashlib.sha256(Path(x['path']).read_bytes()).hexdigest()!=x['sha256']:errors.append('production carrier changed '+x['id'])
for row in P['new_rows']:
 if row['items']!=[]:errors.append('nonempty native future row '+row['id'])
source=json.loads((D/'sources.json').read_text());sourcekeys={x['id'] for x in source['sources']}
for x in items.values():
 for key in x['source_refs']:
  if key not in sourcekeys:errors.append('unknown source key '+key)
report=dict(scope='classical-electromagnetism successor planning only',new_pairs=len(I['pairs']),new_items=len(items),new_A_items=sum(len(p['A']) for p in I['pairs']),new_B_items=sum(len(p['B']) for p in I['pairs']),external_items=len(ext),retained_pair_identities=len(B['existing_page_rows'])//2,retained_original_interfaces=len(B['retained_claims']),retained_current_item_placements=len(B['current_authored_items']),root_P_homes=len(P['required_root_P_pages']),checks=['JSON shape and complete interfaces','globally unused new production IDs/pages','kind prefixes','uninterrupted statements','exact supplier hashes','new item/page DAGs','page requires contain every external A-item home','math-only dependency and page direction','B cross-page leaves','all old row identity hashes and non-pointer fields retained','all current old carrier hashes unchanged','native empty items rows','source-use keys resolve'],item_dependency_order=io,page_dependency_order=po,errors=errors,passed=not errors,not_run='No engine, content gate, corpus audit, import mutation or production proof acceptance.')
(D/'scoped-checks.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:v for k,v in report.items() if k not in ['item_dependency_order','page_dependency_order','checks']}))
raise SystemExit(bool(errors))
