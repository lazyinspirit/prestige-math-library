from pathlib import Path
import json,re
p=Path(__file__).parent
o=json.loads((p/'inventory.json').read_text()); items=o['items']; ids={r['id'] for r in items}; errors=[]
if len(ids)!=len(items):errors.append('duplicate ID')
bids={r['id'] for r in items if r['page'].endswith('B')}
for r in items:
 if set(r['deps'])!=set(r['dependency_roles']):errors.append(r['id']+' role mismatch')
 if set(r['deps'])&bids:errors.append(r['id']+' consumes B leaf')
 if r['domain']=='mathematics' and any(d.startswith(('post-','pthm-','texp-','exp-')) for d in r['deps']):errors.append(r['id']+' math/physics boundary')
 module,anchor=r['proof_module'].split('#')
 if '<a id="'+anchor+'"></a>' not in (p/module).read_text():errors.append(r['id']+' module anchor missing')
seen=set(); active=set()
byid={r['id']:r for r in items}
def visit(i):
 if i in active: errors.append(i+' cycle');return
 if i in seen:return
 active.add(i)
 for d in byid[i]['deps']:
  if d in ids:visit(d)
 active.remove(i);seen.add(i)
for i in ids:visit(i)
counts={pg:sum(r['page']==pg for r in items) for pg in {r['page'] for r in items}}
if any(n>100 for n in counts.values()):errors.append('page overflow')
for pg in {r['page'] for r in items}:
 if len({r['domain'] for r in items if r['page']==pg})!=1:errors.append(pg+' mixed domain')
for pair in o['page_pairs']:
 if len({r['domain'] for r in items if r['page'] in [pair['a'],pair['b']]})!=1:errors.append(pair['a']+' mixed pair domain')
external=sorted({d for r in items for d in r['deps'] if d not in ids})
result={'research_only':True,'command':'python3 '+str(p/'check.py'),'items':len(items),'page_counts':counts,'external_supplier_ids':external,'module_anchors':True,'mathematics_boundary':True,'B_leaves':True,'local_DAG':True,'errors':errors,'not_independent_acceptance':True}
(p/'structural-check.json').write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps(result,indent=2));raise SystemExit(bool(errors))
