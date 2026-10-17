import re,json,pathlib,hashlib,collections,yaml
R=pathlib.Path('/home/lazyinspirit/Projects/prestige-math-library');P=R/'physics';run='physics-remaining-80-2026-10-17';O=P/'research'/(run+'-owner-step2-batch36-cycle1');old=P/'research'/(run+'-owner-step2-source-preimages-60/items')
def read(p):
 t=p.read_text();m=re.match(r'\A---\s*\n(.*?)\n---\s*(?:\n|$)',t,re.S);f=yaml.load(m[1],Loader=yaml.CSafeLoader) if m else {};return t,f or {}
current={};past={};aliases={}
for directory,table in [(R/'items',current),(P/'items',current),(old,past)]:
 for p in directory.glob('*.md'):
  t,f=read(p);id=f.get('id',p.stem);table[id]=(p,t,f)
  for a in f.get('aliases',[]) or []:aliases[a]=id
canon=lambda x:aliases.get(x,x)
def edges(t,f):
 out=set()
 for k in ['deps','justified_by']:
  v=f.get(k,[]);v=[v] if isinstance(v,str) else v or [];out.update(canon(x) for x in v if isinstance(x,str) and x)
 out.update(canon(x.split('|')[0].split('#')[0]) for x in re.findall(r'\[\[([^\]]+)\]\]',t));return out
public=lambda t: {m[1]:m[2].strip() for m in re.finditer(r'^## (Statement|Definition|Postulate|Example)\s*\n(.*?)(?=^## |\Z)',t,re.S|re.M)}
seeds=[]
manifest=json.loads((P/'research'/(run+'-batch-36.pages.json')).read_text());inventory36=[i['id'] if isinstance(i,dict) else i for page in manifest for i in page.get('items',[])]
for id in inventory36:
 if public(current[id][1])!=public(past[id][1]):seeds.append(id)
rev=collections.defaultdict(set);edgechanges={}
for id in set(current)|set(past):
 ce=edges(*current[id][1:]) if id in current else set();oe=edges(*past[id][1:]) if id in past else set()
 for dep in ce|oe:rev[dep].add(id)
 if ce!=oe:edgechanges[id]={'old':sorted(oe),'current':sorted(ce)}
seen=set(seeds);parent={x:None for x in seeds};queue=collections.deque(seeds)
while queue:
 a=queue.popleft()
 for b in sorted(rev[a]):
  if b not in seen:seen.add(b);parent[b]=a;queue.append(b)
batch={};pages={}
for i in range(1,81):
 for page in json.loads((P/'research'/(run+f'-batch-{i}.pages.json')).read_text()):
  for item in page.get('items',[]):
   id=item['id'] if isinstance(item,dict) else item;batch[id]=i;pages[id]=page.get('path',page.get('id'))
rep=json.loads((P/'research'/(run+'-scope-review/batch-36/repair-1.json')).read_text());native={x['id']:x for x in rep['consumer_checks']}
def path(id):
 out=[id]
 while parent.get(out[-1]):out.append(parent[out[-1]])
 return out[::-1]
bind=lambda p:{'path':str(p.relative_to(R)),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()}
rows=[]
for id in sorted(seen):
 p,t,f=current[id];rows.append({'id':id,'batch':batch.get(id),'binding':bind(p),'preimage_binding':bind(past[id][0]) if id in past else None,'path':path(id),'changed_public_section':id in seeds,'current_affected_direct_links':sorted(edges(t,f)&seen),'native_consumer_check':native.get(id)})
out={'method':'Authenticated Step1 preimages60 and current complete root+physics items; structured YAML deps and every nonempty justified_by, declared aliases, all wikilinks including proof/Remarks nonlogical references; old/current edge union reverse closure. Exact case-sensitive IDs, no research-token aliases.','inventory':len(batch),'old_preimages':len(past),'seeds':seeds,'affected':len(seen),'outside_run':sorted(seen-set(batch)),'native_seed_or_consumer_coverage_equals_derived':seen==set(seeds)|set(native),'rows':rows,'changed_edges_in_cone':{k:v for k,v in edgechanges.items() if k in seen}}
(O/'closure-graph.json').write_text(json.dumps(out,indent=2)+'\n');print('seeds',len(seeds),'cone',len(seen),'nativecoverage',out['native_seed_or_consumer_coverage_equals_derived']);print(collections.Counter(batch.get(x) for x in seen))
