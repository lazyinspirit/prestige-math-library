from pathlib import Path
import json,hashlib
p=Path(__file__).parent;root=Path.cwd();d=json.loads((p/'inventory.json').read_text());rows=d['items'];local={r['id']:r for r in rows};ext={r['id']:r for r in json.loads((p/'supplier-map.json').read_text())['suppliers']};order={r['id']:i for i,r in enumerate(rows)};pages={r['page'] for r in rows};edges={x:set() for x in pages}
assert len(rows)==len(local)
for r in rows:
 assert {'id','title','domain','kind','deps','proof_module','scope','page','side','dependency_roles'}<=r.keys()
 assert set(r['deps'])==set(r['dependency_roles'])
 assert f'id="{r["proof_module"].split("#")[1]}"' in (p/'proof-modules.md').read_text()
 for x in r['deps']:
  s=local.get(x,ext.get(x));assert s is not None,(r['id'],x,'unresolved supplier')
  if r['domain']=='mathematics':assert s['domain']=='mathematics',(r['id'],x,'math boundary')
  if x in local:
   assert order[x]<order[r['id']],(r['id'],x,'supplier order')
   assert s['side']=='A',(r['id'],x,'B supplier')
   if s['page']!=r['page']:edges[r['page']].add(s['page'])
for x in pages:
 assert sum(r['page']==x for r in rows)<=100
 assert len({r['domain'] for r in rows if r['page']==x})==1,('mixed-domain page',x)
seen=set();active=set()
def visit(x):
 assert x not in active,('page cycle',x)
 if x in seen:return
 active.add(x)
 for y in edges[x]:visit(y)
 active.remove(x);seen.add(x)
for x in pages:visit(x)
for r in ext.values():assert hashlib.sha256((root/r['path']).read_bytes()).hexdigest()==r['raw_sha256'],(r['id'],'supplier hash stale')
report={'items':len(rows),'A':sum(r['side']=='A' for r in rows),'B':sum(r['side']=='B' for r in rows),'pages':{x:sum(r['page']==x for r in rows) for x in sorted(pages)},'supplier_ids_and_hashes':True,'item_supplier_first':True,'page_dag':True,'homogeneous_domains':True,'math_boundary':True,'B_leaves':True,'proof_anchors':True,'page_max100':True,'qualification':'Local structural checks and author arguments; no independent whole-proof acceptance, production gate or publication receipt.'};(p/'check-results.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report))
