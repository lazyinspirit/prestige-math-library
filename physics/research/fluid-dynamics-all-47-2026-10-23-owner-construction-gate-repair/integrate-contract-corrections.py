import json,pathlib,copy,datetime,hashlib
r='fluid-dynamics-all-47-2026-10-23';b=pathlib.Path('research')/(r+'-owner-construction-gate-repair');out=b/'contract-corrections-integration.json'
if out.exists():raise Exception('Already applied')
read=lambda p:json.loads(pathlib.Path(p).read_text());docs={};ops=[]
def doc(p):
 if p not in docs:docs[p]=read(p)
 return docs[p]
w=read(b/'balances-weak-review.json')
for x in w['citation_contract_exact_patches']:
 c=doc(x['file'])['contracts'][x['item']];row=next(v for v in c['citations']if v.get('fact')==x['fact'])
 for key in ['quote','uses']:
  if 'after_'+key not in x:continue
  if row[key]!=x['before_'+key]:raise Exception('Wrong exact citation preimage')
  row[key]=x['after_'+key];ops.append({'file':x['file'],'item':x['item'],'fact':x['fact'],'field':key})
a=read(b/'coverage-completed-review.json')
for x in a['proof_contract_exact_repairs']:
 c=doc(x['file'])['contracts'][x['item']];array,selector,field=x['path'].split('/');k,value=selector.split('=');row=next(v for v in c[array]if v[k]==value);row[field]=x.get('new_value',x.get('new_inputs'));ops.append({'file':x['file'],'item':x['item'],'path':x['path']})
p=f'research/{r}-batch-10.proof-contracts.json';c=doc(p)['contracts']['lem-fd-newtonian-admissibility'];assert not c.get('finite_smoke');c['finite_smoke']=[{'check':'fd-newtonian-stress-admissibility','asserts':'Then $\\mathcal Q(D,g,T)\\ge0$ for every symmetric $D$, every $g\\in\\mathbb R^3$, and every $T>0$ if and only if\n$$\\mu\\ge0,\\qquad \\zeta\\ge0,\\qquad x^T(\\operatorname{sym}K)x\\ge0\\quad\\text{for every }x\\in\\mathbb R^3.$$'}];ops.append({'file':p,'item':'lem-fd-newtonian-admissibility','field':'finite_smoke','limited_family':'K=0,g=0,T=1 stress slice,729 symmetric integer matrices x42 coefficients, no general proof or empirical claim'})
archive=b/'before-contract-corrections';archive.mkdir();before=[]
for p,d in docs.items():
 path=pathlib.Path(p);dest=archive/str(path).replace('/','__');dest.write_bytes(path.read_bytes());before.append({'path':p,'archive':str(dest),'sha256':hashlib.sha256(path.read_bytes()).hexdigest()});path.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
out.write_text(json.dumps({'run':r,'owner':'/root','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'before':before,'operations':ops,'boundary_template_reviews':'Separate exhaustive selected-row reports, not applied here.','gates_attempted':0,'complete':True},indent=2)+'\n');print(json.dumps({'files':len(docs),'corrections':len(ops),'gates':0}))
