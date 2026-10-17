import json,pathlib,yaml,re,collections,hashlib
base=pathlib.Path(__file__).parent;run='physics-remaining-80-2026-10-17';pre=pathlib.Path('research')/(run+'-owner-step2-source-preimages-60');ids=json.load(open(pathlib.Path('research')/(run+'-scope-review/batch-45/review-0.json')))['reviewed_items']
def fm(t):return yaml.load(re.match(r'^---\n(.*?)\n---(?:\n|$)',t,re.S)[1],Loader=yaml.CSafeLoader) or {}
def pub(t):
 d=fm(t);return {'sections':{m[1]:m[2] for m in re.finditer(r'^## (Statement|Definition|Example|Statement refuted|Postulate|Setup|Procedure|Observations|Uncertainty|Interpretation)\n(.*?)(?=^## |\Z)',t,re.M|re.S)},'physical_scope':d.get('physical_scope'),'empirical_premises':d.get('empirical_premises'),'empirical_result':d.get('empirical_result')}
current={p.stem:(p.read_text()) for p in pathlib.Path('items').glob('*.md')};old=dict(current)
for p in (pre/'items').glob('*.md'):old[p.stem]=p.read_text()
publicseeds=[id for id in ids if pub(old[id])!=pub(current[id])];seeds=publicseeds+['lem-qsm-models-diagonal-occupation-trace','pthm-qsm-onsite-interacting-atoms','ex-qsm-onsite-interacting-atoms']
outputs={}
for name,alltext in [('old',old),('current',current)]:
 data={id:fm(t) for id,t in alltext.items()};alias={a:id for id,d in data.items() for a in d.get('aliases',[]) or []};rev=collections.defaultdict(set);edges=[]
 for id,d in data.items():
  for typ in ['deps','justified_by']:
   for raw in d.get(typ,[]) or []:
    s=alias.get(raw,raw);rev[s].add(id);edges.append({'supplier':s,'consumer':id,'field':typ,'spelling':raw})
 reach=set(seeds);paths={s:[s] for s in seeds};q=collections.deque(seeds)
 while q:
  s=q.popleft()
  for c in rev[s]:
   if c not in reach:reach.add(c);paths[c]=paths[s]+[c];q.append(c)
 links=[]
 for id,t in alltext.items():
  logical={alias.get(s,s) for typ in ['deps','justified_by'] for s in data[id].get(typ,[]) or []}
  for raw in set(re.findall(r'\[\[([^\]|]+)',t)):
   s=alias.get(raw,raw)
   if s in reach and s not in logical:links.append({'item':id,'target':s,'spelling':raw,'classification':'nonlogical-or-unlisted-link','in_logical_closure':id in reach})
 for p in pathlib.Path('library').glob('*/*.md'):
  t=p.read_text();d=fm(t)
  matched=sorted(set(d.get('items',[]) or [])|set(d.get('examples',[]) or []));matched=[x for x in matched if alias.get(x,x) in reach]
  bodytargets=sorted({alias.get(s,s) for s in re.findall(r'\[\[([^\]|]+)',t)}&reach)
  if matched or bodytargets:links.append({'page':str(p),'homed_items':matched,'bodytargets':bodytargets,'classification':'placement-or-prose'})
 outputs[name]={'changed45_public_seeds':publicseeds,'additional_obligation_seeds':[s for s in seeds if s not in publicseeds],'closure':sorted(reach),'paths':paths,'edges':[e for e in edges if e['supplier'] in reach and e['consumer'] in reach],'nonlogical_and_page_checks':links,'seed_aliases':{a:id for a,id in alias.items() if id in reach}}
(base/'closure-preparation.json').write_text(json.dumps(outputs,indent=2)+'\n')
print('Changed45publicseeds',seeds)
for name,v in outputs.items():print(name,'logicalclosure',len(v['closure']),'outside45',sorted(set(v['closure'])-set(ids)),'nonlogical/page rows',len(v['nonlogical_and_page_checks']))
