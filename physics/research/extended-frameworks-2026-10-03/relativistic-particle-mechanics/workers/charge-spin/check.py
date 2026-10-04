from pathlib import Path
import json
p=Path(__file__).parent
d=json.loads((p/'inventory.json').read_text()); rows=d['items']; local={r['id']:r for r in rows}; order={r['id']:i for i,r in enumerate(rows)}
assert len(local)==len(rows)
for r in rows:
 assert r['domain'] in ['mathematics','physics']
 assert set(r['deps'])==set(r['dependency_roles'])
 fragment=r['proof_module'].split('#')[1]
 assert f'id="{fragment}"' in (p/'proof-modules.md').read_text()
 for x in r['deps']:
  if x in local:
   assert order[x]<order[r['id']],(r['id'],x,'supplier order')
   assert local[x]['page']!='B',(r['id'],x,'B consumer')
   assert r['domain']!='mathematics' or local[x]['domain']=='mathematics',(r['id'],x,'math boundary')
assert all(len([r for r in rows if r['page']==page])<=100 for page in ['A','B'])
report={'items':len(rows),'A':sum(r['page']=='A' for r in rows),'B':sum(r['page']=='B' for r in rows),'local_dag_supplier_first':True,'local_mathematical_boundary':True,'B_leaves':True,'proof_module_anchors':True,'limitations':'Structural checks and author local proof review only; external ID resolution/status supplied by canonical integrator; no production engine gate or independent acceptance.'}
(p/'check-results.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report))
