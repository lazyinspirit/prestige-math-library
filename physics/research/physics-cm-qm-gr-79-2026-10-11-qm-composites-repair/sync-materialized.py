from pathlib import Path
import json,re,yaml,shutil
r=Path('physics');o=r/'research/physics-cm-qm-gr-79-2026-10-11-qm-composites-repair';run='physics-cm-qm-gr-79-2026-10-11';report=json.load(open(o/'materialized-consumer-review.json'));ids={i['id'] for i in report['items']};backup=o/'before-materialized'
def front(s):return yaml.safe_load(re.split(r'^---\s*$',s,flags=re.M)[1])
def sections(s):return {h:b.strip() for h,b in re.findall(r'^## ([^\n]+)\n([\s\S]*?)(?=^## |\Z)',s,re.M)}
new_requires={37:['sine-cosine-and-the-definition-of-pi'],42:['the-lp-spaces-holder-minkowski-and-riesz-fischer','product-measures-and-the-fubini-tonelli-theorems','unbounded-self-adjoint-operators-and-stones-theorem']}
for n in [37,42]:
 base=r/'research'/f'{run}-batch-{n}'
 for suffix in ['.pages.json','.proof-contracts.json','.coverage.json']:
  p=Path(str(base)+suffix)
  if not (backup/p.name).exists():shutil.copy2(p,backup/p.name)
 pages=json.load(open(str(base)+'.pages.json'))
 for page in pages:
  path=r/'library'/page['category']/(page['id']+'.md');s=path.read_text();f=front(s)
  if page['kind']=='A':
   union=list(dict.fromkeys(page.get('requires',[])+f.get('requires',[])+new_requires[n]));page['requires']=union
   if not (backup/path.name).exists():shutil.copy2(path,backup/path.name)
   if '\nrequires:' in s:s=re.sub(r'^requires:.*(?:\n  -.*)*$','requires: ['+', '.join(union)+']',s,flags=re.M)
   else:s=s.replace('\nitems:','\nrequires: ['+', '.join(union)+']\nitems:',1)
   path.write_text(s)
  for claim in page['items']:
   if claim['id'] not in ids:continue
   text=(r/'items'/(claim['id']+'.md')).read_text();f=front(text);sec=sections(text)
   for key in ['deps','dependency_roles','dependency_level','aliases','provenance','sources']:
    if key in f:claim[key]=f[key]
   claim['statement']=sec.get('Statement',sec.get('Example',''))
 Path(str(base)+'.pages.json').write_text(json.dumps(pages,indent=2)+'\n')
 scoped=[{**p,'items':[it for it in p['items'] if it['id'] in ids]} for p in pages]
 (o/f'materialized-batch-{n}.scope.pages.json').write_text(json.dumps(scoped,indent=2)+'\n')
 doc=json.load(open(str(base)+'.proof-contracts.json'))
 for i in ids:
  if i not in doc['contracts']:continue
  c=doc['contracts'][i];s=(r/'items'/(i+'.md')).read_text();sec=sections(s);proof=sec.get('Proof',sec.get('Verification',''))
  steps=re.findall(r'^(\d+\.\d+) ([\s\S]*?)(?=^\d+\.\d+ |\Z)',proof,re.M)
  c['derivations']=[{'id':'step-'+step.replace('.','-'),'step':step,'claim':txt.strip(),'inputs':list(dict.fromkeys(re.findall(r'\b[FAL]\d+\b|\b\d+\.\d+\b',txt))) or ['given']} for step,txt in steps]
  c['routine_steps']=[]
  facts=sec.get('Facts & Assumptions','')
  if not facts:facts=proof[:re.search(r'^\d+\.\d+ ',proof,re.M).start()]
  citations=[]
  for fact,txt in re.findall(r'^\[([FAL]\d+)\] ([\s\S]*?)(?=^\[[FAL]\d+\]|\Z)',facts,re.M):
   for source in dict.fromkeys(re.findall(r'\[\[([^]|]+)',txt)):
    source_s=sections((r/'items'/(source+'.md')).read_text());h=next(k for k in ['Statement','Definition','Example'] if k in source_s)
    quote=source_s[h].split('\n\n')[0];uses=[step for step,txt in steps if re.search(r'\b'+fact+r'\b',txt)]
    citations.append({'fact':fact,'source':source,'source_section':h,'quote':quote,'uses':uses})
  c['citations']=citations
  c['local_consumer_repair']={'cycle':1,'reviewer':'qm_composites_supplier_repair','evidence':'research/'+o.name+'/materialized-consumer-repair.json','scope':'Confirmed local consumer defects and exact proof/dependency metadata; native independent review remains pending'}
 Path(str(base)+'.proof-contracts.json').write_text(json.dumps(doc,indent=2)+'\n')
 coverage=json.load(open(str(base)+'.coverage.json'));coverage['local_consumer_repair']={'cycle':1,'items':[i['id'] for i in report['items'] if i['batch']==n],'evidence':'research/'+o.name+'/materialized-consumer-repair.json','scope':'Focused confirmed consumer defects; existing source fetch and native boundary annotation preserved'}
 Path(str(base)+'.coverage.json').write_text(json.dumps(coverage,indent=2)+'\n')
(o/'materialized-items.json').write_text(json.dumps(sorted(ids),indent=2)+'\n')
print('Synced nine consumer claims/contracts and preserved authored requires union/native annotation')
