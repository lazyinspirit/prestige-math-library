#!/usr/bin/env python3
"""Local interface and inventory checks; does not certify mathematical correctness."""
import json,re,hashlib
from pathlib import Path
P=Path(__file__).resolve().parent
O=json.loads((P/'inventory.json').read_text()); rows=O['records']; external=O['external_suppliers']; by={r['id']:r for r in rows}; errors=[]
if len(by)!=len(rows):errors.append('duplicate local ID')
pages={}
for r in rows:
 pages.setdefault(r['page'],[]).append(r)
 fp,sep,anchor=r['proof_module'].partition('#'); f=P/fp
 if not f.is_file() or not sep or f'<a id="{anchor}"></a>' not in f.read_text():errors.append('missing exact anchor '+r['id'])
 for dep in r['deps']:
  q=by.get(dep,external.get(dep))
  if q is None:errors.append('unresolved '+dep);continue
  if q.get('side')=='B':errors.append('B supplier '+dep)
  if r['domain']=='mathematics' and q['domain']!='mathematics':errors.append('nonmath premise '+r['id']+' '+dep)
for name,rs in pages.items():
 if len({r['domain'] for r in rs})!=1:errors.append('mixed domain '+name)
 for side in ['A','B']:
  n=sum(r['side']==side for r in rs)
  if n==0 or n>100:errors.append('pair cap/empty '+name+' '+side)
seen=set(); visiting=set(); order=[]
def visit(i):
 if i in visiting:errors.append('cycle '+i);return
 if i in seen:return
 visiting.add(i)
 for d in by[i]['deps']:
  if d in by:visit(d)
 visiting.remove(i);seen.add(i);order.append(i)
for i in by:visit(i)
result={'status':'pass' if not errors else 'fail','items':len(rows),'A_items':sum(r['side']=='A' for r in rows),'B_items':sum(r['side']=='B' for r in rows),'pairs':len(pages),'external_suppliers':len(external),'errors':errors,'checks':['exact HTML anchors','unique IDs','resolved typed deps','mathematical-only prerequisite DAG','homogeneous A/B pairs','B leaves','below100 items per page','acyclic local dependency order'],'independent_audit':False,'mathematical_proof_certification':False,'files_sha256':{f.name:hashlib.sha256(f.read_bytes()).hexdigest() for f in sorted([*P.glob('*.md'),P/'inventory.json',P/'supplier-map.json',P/'check.py'])},'local_topological_order':order}
(P/'check-result.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps({k:v for k,v in result.items() if k not in ['files_sha256','local_topological_order']}));raise SystemExit(bool(errors))
