from pathlib import Path
import json,re,hashlib
W=Path(__file__).resolve().parent;R=Path.cwd()
rs=json.loads((W/'inventory.json').read_text())['records']; reg=json.loads((W/'sources-and-suppliers.json').read_text())['external_registry']; by={r['id']:r for r in rs};assert len(by)==len(rs)
pages={};item_edges={i:[] for i in by};page_edges={};text=(W/'proofs.md').read_text()
for r in rs:
 assert all(k in r for k in ['id','title','domain','kind','deps','roles','page','side','proof_module','scope','status'])
 assert '<a id="'+r['proof_module'].split('#')[1]+'"></a>' in text
 p=r['page']+r['side'];pages.setdefault(p,[]).append(r);page_edges.setdefault(p,set())
 for d in r['deps']:
  assert d in by or d in reg,(r['id'],d)
  src=by.get(d,reg.get(d));assert r['domain']!='mathematics' or src['domain']=='mathematics',(r['id'],d)
  r['roles'][d]='physical-premise' if src['domain']=='physics' else 'mathematical-premise'
  if d in by:
   assert by[d]['side']!='B',('B is not a supplier',d)
   item_edges[r['id']].append(d)
   q=by[d]['page']+by[d]['side']
   if p!=q:page_edges[p].add(q)
for p,x in pages.items():assert len(x)<100 and len({r['domain'] for r in x})==1
order=[]
def dag(edges):
 visiting=set();done=set();o=[]
 def visit(n):
  assert n not in visiting,('cycle',n)
  if n in done:return
  visiting.add(n)
  for x in edges[n]:visit(x)
  visiting.remove(n);done.add(n);o.append(n)
 for n in edges:visit(n)
 return o
order=dag(item_edges);po=dag(page_edges)
ledger=json.loads((W/'sources-and-suppliers.json').read_text())
for x in ledger['local_suppliers']:assert hashlib.sha256((R/x['path']).read_bytes()).hexdigest()==x['sha256'],('source changed',x['path'])
(W/'inventory.json').write_text(json.dumps({'records':rs},ensure_ascii=False,indent=2)+'\n')
report=dict(result='pass',checks=['unique IDs','required fields','exact HTML anchors','external dependency registration','mathematics-only supplier DAG','B leaves','homogeneous side pages','under100 items per side page','item and side-page acyclicity','supplier hashes current'],items=len(rs),side_pages={p:len(x) for p,x in pages.items()},supplier_first_order=order,side_page_supplier_first_order=po,independent_acceptance=False)
(W/'checks.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print(json.dumps({'result':'pass','items':len(rs),'side_pages':len(pages)}))
