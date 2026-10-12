from pathlib import Path
import re,yaml,json,hashlib,shutil
r=Path('physics'); out=r/'research/physics-cm-qm-gr-79-2026-10-11-qm-composites-repair';run='physics-cm-qm-gr-79-2026-10-11'; prefix=r/'research'/f'{run}-batch-35'
def front(s):return yaml.safe_load(re.split(r'^---\s*$',s,flags=re.M)[1])
def sections(s):return {a:b.strip() for a,b in re.findall(r'^## ([^\n]+)\n([\s\S]*?)(?=^## |\Z)',s,re.M)}
items={p.stem:(p,p.read_text(),front(p.read_text())) for p in (r/'items').glob('*nrqm-composites*.md')}
levels={}
def level(i,trail=()):
 if i in levels:return levels[i]
 if i in trail:raise Exception('cycle '+i)
 ds=[d for d in items[i][2]['deps'] if d in items]
 levels[i]=max([level(d,trail+(i,))+1 for d in ds],default=0);return levels[i]
for i in items:level(i)
for i,(p,s,f) in items.items():
 s=re.sub(r'^dependency_level: .*$',f'dependency_level: {levels[i]}',s,flags=re.M);p.write_text(s);items[i]=(p,s,front(s))
for suffix in ['.pages.json','.proof-contracts.json','.coverage.json']:
 p=Path(str(prefix)+suffix)
 if not (out/'before'/p.name).exists():shutil.copy2(p,out/'before'/p.name)
pages=json.loads(Path(str(prefix)+'.pages.json').read_text());plan=json.loads((r/'research/plan-spec.json').read_text()); pp={p['id']:p for p in plan['pages']}
for page in pages:
 page['requires']=pp[page['id']]['requires']
 for claim in page['items']:
  i=claim['id'];p,s,f=items[i]; sec=sections(s)
  claim['aliases']=f.get('aliases',[]);claim['deps']=f['deps'];claim['dependency_roles']=f['dependency_roles'];claim['dependency_level']=levels[i]
  claim['statement']=sec.get('Statement',sec.get('Example',sec.get('Statement refuted','')))
  claim['sources']=f['sources'];claim['provenance']=f['provenance']
 path=r/'library'/page['category']/(page['id']+'.md');s=path.read_text()
 if not (out/'before'/path.name).exists():shutil.copy2(path,out/'before'/path.name)
 if '\nrequires:' in s:s=re.sub(r'^requires:.*(?:\n  -.*)*$', 'requires: ['+', '.join(page['requires'])+']',s,flags=re.M)
 else:s=s.replace('\nexamples:', '\nrequires: ['+', '.join(page['requires'])+']\nexamples:',1)
 path.write_text(s)
Path(str(prefix)+'.pages.json').write_text(json.dumps(pages,indent=2)+'\n')
contracts=json.loads(Path(str(prefix)+'.proof-contracts.json').read_text())
# Refresh only actual changed contracts; these remain local worksheets, not audits.
for i,(p,s,f) in items.items():
 c=contracts['contracts'][i]; sec=sections(s); proof=next((sec[k] for k in ['Proof','Verification','Counterexample'] if k in sec),'')
 steps=re.findall(r'^(\d+\.\d+) ([\s\S]*?)(?=^\d+\.\d+ |\Z)',proof,re.M)
 c['derivations']=[{'id':'step-'+step.replace('.','-'),'step':step,'claim':txt.strip(),'inputs':list(dict.fromkeys(re.findall(r'(?:F|A|L)\d+|step \d+\.\d+',txt.split(']')[-2] if ']' in txt else '')))} for step,txt in steps]
 facts=re.findall(r'^\[([FAL]\d+)\] ([\s\S]*?)(?=^\[[FAL]\d+\]|\Z)',sec.get('Facts & Assumptions',''),re.M)
 citations=[]
 for fact,txt in facts:
  for source in dict.fromkeys(re.findall(r'\[\[([^]|]+)',txt)):
   sourcepath=r/'items'/(source+'.md')
   if not sourcepath.exists():raise Exception('missing '+source)
   source_sec=sections(sourcepath.read_text()); heading=next((h for h in ['Statement','Definition','Example'] if h in source_sec),None)
   if heading is None:continue
   quote=source_sec[heading].split('\n\n')[0]
   uses=[step for step,txt in steps if re.search(r'\b'+fact+r'\b',txt)]
   citations.append({'fact':fact,'source':source,'source_section':heading,'quote':quote,'uses':uses})
 c['citations']=citations
 # Preserve native review narratives/history; add a clearly attributed local update.
 c['local_repair']={'cycle':1,'reviewer':'qm_composites_supplier_repair','evidence':'research/'+out.name+'/repair-receipt.json','scope':'Current proof derivations/citations and dependency metadata; no independent acceptance stamp'}
Path(str(prefix)+'.proof-contracts.json').write_text(json.dumps(contracts,indent=2)+'\n')
coverage=json.loads(Path(str(prefix)+'.coverage.json').read_text());coverage['local_repair']={'cycle':1,'evidence':'research/'+out.name+'/repair-receipt.json','statement_changes':[i for i,(_,s,_) in items.items() if (out/'before'/(i+'.md')).exists() and sections(s).get('Statement')!=sections((out/'before'/(i+'.md')).read_text()).get('Statement')],'status':'Focused defects repaired; native independent review remains pending'}
# Correct only the stale rank-one source locator, preserving actual native fetch evidence.
for p in coverage['pages']:
 for source in p.get('sources',[]):
  if 'Topics in Real and Functional Analysis (2019)' in source.get('title',''):
   source['title']=source['title'].replace('Topics in Real and Functional Analysis (2019), §3.6 pp. 97-104','Topics in Real and Functional Analysis (November 17, 2017), §3.6, Lemmas 3.27–3.29, printed pp. 96–98')
   source['locator']=source['title']
Path(str(prefix)+'.coverage.json').write_text(json.dumps(coverage,indent=2)+'\n')
(out/'dependency-levels.json').write_text(json.dumps(levels,indent=2)+'\n')
print(json.dumps({'items':len(items),'levels':levels,'statement_changes':coverage['local_repair']['statement_changes']},indent=2))
