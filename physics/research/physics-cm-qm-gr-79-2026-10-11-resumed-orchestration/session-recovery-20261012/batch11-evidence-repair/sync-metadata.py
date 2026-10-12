import pathlib,re,yaml,json
run='physics-cm-qm-gr-79-2026-10-11'; new='lem-cm-finite-iid-sample-mean-bound'; manifests={}; allrows={}
for f in pathlib.Path('research').glob(f'{run}-batch-*.pages.json'):
 d=json.load(open(f));manifests[str(f)]=d
 for page in d:
  for row in page['items']:allrows[row['id']]=row
cache={}
def carrier(id):
 if id not in cache:
  s=pathlib.Path(f'items/{id}.md').read_text();chunks=re.split(r'^---\s*$',s,flags=re.M);cache[id]=(yaml.safe_load(chunks[1]),chunks[2].strip(),s)
 return cache[id]
owned={row['id'] for b in [11,34] for page in manifests[f'research/{run}-batch-{b}.pages.json'] for row in page['items']}|{new};allrows[new]={}
levels={}
def level(id,trail=()):
 if id not in allrows:return -1
 if id in levels:return levels[id]
 if id in trail:raise Exception('cycle '+id)
 try:m=carrier(id)[0]
 except FileNotFoundError:m=allrows[id]
 ds=[level(d,trail+(id,)) for d in m.get('deps',[]) if d in allrows];levels[id]=max(ds,default=-1)+1;return levels[id]
for id in sorted(owned):
 m,body,s=carrier(id);l=level(id)
 if m.get('dependency_level')!=l:
  s=re.sub(r'^dependency_level: .*$',f'dependency_level: {l}',s,flags=re.M);pathlib.Path(f'items/{id}.md').write_text(s);cache.pop(id);print('level',id,l)
for b in [11,34]:
 f=f'research/{run}-batch-{b}.pages.json';d=manifests[f]
 if b==11:
  d[0]['items']=[r for r in d[0]['items'] if r['id']!=new]
  d[0]['items'].insert(next(i for i,r in enumerate(d[0]['items']) if r['id']=='def-cm-iid-sampling-model')+1,{'id':new})
 for page in d:
  for row in page['items']:
   m,body,s=carrier(row['id']);old=row.get('statement','');heading={'definition':'Definition','lemma':'Statement','corollary':'Statement','example':'Example','counterexample':'Statement refuted','remark':None}.get(m['kind'])
   if heading:
    match=re.search(r'^## '+re.escape(heading)+r'\s*\n([\s\S]*?)(?=^## |\Z)',body,re.M);claim=match[1].strip() if match else body
   else:claim=body
   row['statement']=('## '+heading+'\n\n'+claim) if heading and old.startswith('## ') else claim
   for key in ['kind','domain','title','deps','dependency_roles','dependency_level','provenance','sources','physical_scope','generation']:
    if key in m:row[key]=m[key]
  # Preserve pair identity and requires unchanged; update lists only.
 json.dump(d,open(f,'w'),indent=2,ensure_ascii=False);pathlib.Path(f).write_text(pathlib.Path(f).read_text()+'\n')
f=f'research/{run}-batch-11.coverage.json';d=json.load(open(f));c=d['pages'][0]['canonical'];c[:]=[r for r in c if r.get('item')!=new and not r.get('name','').startswith('Explicit full vector covariance')];c.append({'name':'Finite-family IID sample-mean variance and Chebyshev bound, without an infinite-sequence extension','disposition':'included','item':new});c.append({'name':'Explicit full vector covariance-error bound from component Hessian bounds and finite fourth moment','disposition':'included','item':'cor-cm-linearization-error-bounds'});next(x for x in c if x.get('item')=='ex-cm-math-evidence-pendulum-propagation')['name']='Worked symbolic correlated pendulum propagation with explicit local Hessian remainder and variance-error correction';json.dump(d,open(f,'w'),indent=2,ensure_ascii=False);pathlib.Path(f).write_text(pathlib.Path(f).read_text()+'\n')
f=f'research/{run}-batch-34.cross-batch-dependencies.json';d=json.load(open(f));d=[r for r in d if not(r.get('kind')=='item' and r.get('consumer') in ['def-cm18-sampling-model','ex-cm18-uniform-motion-sampling-check'] and r.get('supplier') in ['cor-iid-finite-variance-weak-law',new])]
for id in ['def-cm18-sampling-model','ex-cm18-uniform-motion-sampling-check']:d.append({'kind':'item','consumer':id,'supplier':new,'status':'verified','evidence':'Local focused prerequisite repair: finite-family mean-variance/Chebyshev proof supplies the exact n-variable use; no infinite extension or independent native acceptance claimed.'})
json.dump(d,open(f,'w'),indent=2,ensure_ascii=False);pathlib.Path(f).write_text(pathlib.Path(f).read_text()+'\n')
