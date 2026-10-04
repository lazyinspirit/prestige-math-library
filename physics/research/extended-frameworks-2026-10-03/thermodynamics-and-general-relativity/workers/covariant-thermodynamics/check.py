import pathlib,json,re,hashlib,subprocess
p=pathlib.Path(__file__).resolve().parent
root=next(q for q in p.parents if (q/'.git').exists())
data=json.loads((p/'inventory.json').read_text());rows=data['items'];ext=data['external_suppliers'];by={r['id']:r for r in rows};errors=[]
def require(c,s):
 if not c:errors.append(s)
require(len(by)==len(rows),'duplicate IDs')
text=(p/'proof-modules.md').read_text();anchors=set(re.findall(r'<a id="([^"]+)"></a>',text));pages={}
for r in rows:
 for k in ['title','domain','kind','deps','dependency_roles','page','side','proof_module','scope','proof_status']:require(k in r,r['id']+' missing '+k)
 file,anchor=r['proof_module'].split('#');require((p/file).exists() and anchor in anchors,r['id']+' unresolved proof anchor')
 require(set(r['deps'])==set(r['dependency_roles']),r['id']+' roles do not cover edges')
 require(r['empirical_premises']==[],r['id']+' undeclared evidence')
 require(not r['production_ready'],r['id']+' production flag')
 pages.setdefault(r['page'],[]).append(r)
 for d in r['deps']:
  require(d in by or d in ext,r['id']+' unknown supplier '+d)
  if d in by or d in ext:
   sup=by.get(d,ext.get(d));require(not(r['domain']=='mathematics' and sup['domain']!='mathematics'),r['id']+' physical-to-math edge')
   require(not(d in by and by[d]['side']=='B'),r['id']+' consumes B leaf')
for page,rs in pages.items():
 require(len(rs)<100,page+' exceeds cap');require(len({r['domain'] for r in rs})==1,page+' mixed domain')
 require(len({r['side'] for r in rs})==1,page+' mixed side')
 base=page.removesuffix('-examples');require(base in pages and base+'-examples' in pages,page+' missing populated companion')
state={};order=[]
def visit(i):
 if state.get(i)==1:errors.append('cycle '+i);return
 if state.get(i)==2:return
 state[i]=1
 for d in by[i]['deps']:
  if d in by:visit(d)
 state[i]=2;order.append(i)
for i in by:visit(i)
for i,r in ext.items():
 file=r['path'].split('#')[0];require((root/file).exists(),i+' external carrier missing')
 if '#' in r['path']:
  a=r['path'].split('#')[1];require('id="'+a+'"' in (root/file).read_text(),i+' canonical anchor missing')
for file in ['source-supplier-record.md','source-provenance.json','README.md','closure-ledger.json']:require((p/file).exists(),'missing '+file)
raw=list((p/'sources').glob('*.pdf'))
for f in raw:
 r=subprocess.run(['git','check-ignore','-q',str(f)],cwd=root)
 require(r.returncode==0,'raw PDF not ignored: '+f.name)
receipt=dict(date='2026-10-04',worker='covariant-thermodynamics',status='pass' if not errors else 'fail',contracts=len(rows),pages=len(pages),anchors=sorted(anchors),topological_order=order,errors=errors,checks=['unique contracts and exact anchors','complete dependency roles and registered carriers','acyclic supplier DAG','no physics-to-math edges','B leaves; homogeneous populated A/B companions; cap below100','empty empirical premise sets; research-only flags','retrieved full raw PDF carriers ignored'],proof_sha256=hashlib.sha256((p/'proof-modules.md').read_bytes()).hexdigest(),inventory_sha256=hashlib.sha256((p/'inventory.json').read_bytes()).hexdigest(),limitation='Local structural checks and author proof review; not independent mathematical acceptance or production publication.')
(p/'checks.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps({k:receipt[k] for k in ['status','contracts','pages','errors']}));raise SystemExit(bool(errors))
