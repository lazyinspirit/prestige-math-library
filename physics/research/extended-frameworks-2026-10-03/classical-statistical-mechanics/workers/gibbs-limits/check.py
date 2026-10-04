from pathlib import Path
import json
p=Path(__file__).parent;d=json.loads((p/'inventory.json').read_text());rows=d['items'];local={r['id']:r for r in rows};ext={r['id']:r for r in json.loads((p/'supplier-map.json').read_text())['suppliers']};order={r['id']:i for i,r in enumerate(rows)};pages={r['page'] for r in rows};edges={x:set() for x in pages}
assert len(local)==len(rows)
for r in rows:
 assert {'id','title','domain','kind','deps','proof_module','scope','side','page'}<=r.keys()
 assert set(r['deps'])==set(r['dependency_roles'])
 frag=r['proof_module'].split('#')[1];assert f'id="{frag}"' in (p/'proof-modules.md').read_text()
 for x in r['deps']:
  s=local.get(x,ext.get(x));assert s is not None,(r['id'],x,'supplier unresolved')
  if r['domain']=='mathematics':assert s['domain']=='mathematics',(r['id'],x,'math boundary')
  if x in local:
   assert order[x]<order[r['id']],(r['id'],x,'not supplier first')
   assert s['side']=='A',(r['id'],x,'B used as supplier')
   if s['page']!=r['page']:edges[r['page']].add(s['page'])
for page in pages:assert sum(r['page']==page for r in rows)<=100
seen=set();active=set()
def visit(x):
 assert x not in active,('page cycle',x)
 if x in seen:return
 active.add(x)
 for y in edges[x]:visit(y)
 active.remove(x);seen.add(x)
for x in pages:visit(x)
report={'items':len(rows),'A':sum(r['side']=='A' for r in rows),'B':sum(r['side']=='B' for r in rows),'pages':{x:sum(r['page']==x for r in rows) for x in sorted(pages)},'all_supplier_ids_resolved':True,'item_supplier_first':True,'page_dag':True,'math_boundary':True,'B_leaves':True,'anchors':True,'page_max100':True,'scope':'Author local structural check and present proof reread; no independent mathematical acceptance or production-engine gate.'};(p/'check-results.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report))
