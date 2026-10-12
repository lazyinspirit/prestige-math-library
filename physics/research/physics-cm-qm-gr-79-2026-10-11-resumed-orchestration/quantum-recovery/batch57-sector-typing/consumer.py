from pathlib import Path
import json,re,yaml,hashlib,collections
r='physics-cm-qm-gr-79-2026-10-11';base=Path('research')/f'{r}-resumed-orchestration/quantum-recovery';old=json.loads((base.parent/'spectral-lead/graph-current-old-alias.json').read_text());nodes=old['nodes'];aliases=old['aliases'];owners={};routes=[]
for p in Path('research').glob(f'{r}-batch-*.pages.json'):
 n=int(re.search(r'batch-(\d+)',p.name)[1])
 for page in json.loads(p.read_text()):
  for i in page['items']:
   id=i['id'];owners[id]=n;carrier=Path('items')/f'{id}.md'
   if not carrier.exists():continue
   s=carrier.read_text();_,front,body=s.split('---',2);fm=yaml.safe_load(front);aliases.update({a:id for a in fm.get('aliases',[])})
   current=set(fm.get('deps',[])+fm.get('justified_by',[])+i.get('deps',[])+i.get('justified_by',[])+re.findall(r'\[\[([^]|]+)',body));prior=set(nodes.get(id,{}).get('edges',[]));nodes[id]={'path':str(carrier),'raw_sha256':hashlib.sha256(carrier.read_bytes()).hexdigest(),'edges':sorted(current|prior),'current_edges':sorted(current),'owner_batch':n}
rev=collections.defaultdict(set)
for i,v in nodes.items():
 for d in v['edges']:rev[aliases.get(d,d)].add(i)
sources=['def-nrqm-identical-particles-framework-species-sectors-and-preparations','lem-nrqm-identical-particles-two-particle-exchange-operator','ex-nrqm-identical-particles-exchange-versus-coulomb-terms','ex-nrqm-central-hydrogen-radial-distributions-and-moments'];cones={}
for source in sources:
 q=collections.deque([source]);seen={source};paths={source:[source]}
 while q:
  a=q.popleft()
  for b in sorted(rev[a]):
   if b not in seen:seen.add(b);q.append(b);paths[b]=paths[a]+[b]
 cones[source]=[{'id':i,'batch':owners.get(i),'route':paths[i],'raw_sha256':nodes[i].get('raw_sha256')} for i in sorted(seen-{source})]
# Exact corrected supplier routes in freshly drained batches, from current direct graph.
changed=set()
for n in [35,37,39,40,41,54,55]:
 for p in json.loads((Path('research')/f'{r}-batch-{n}.pages.json').read_text()):
  for i in p['items']:changed.add(i['id'])
for i,v in nodes.items():
 if owners.get(i) in [56,57,58]:
  ds=sorted(d for d in v.get('current_edges',[]) if aliases.get(d,d) in changed)
  if ds:routes.append({'consumer':i,'batch':owners[i],'suppliers':[aliases.get(d,d) for d in ds],'raw_sha256':v['raw_sha256']})
result={'scope':'Graph extraction only; not a broad audit. Old/current/alias union; lead must inspect every actual changed-public-interface route.','cones':cones,'exact_supplier_uses':routes}
(base/'batch57-sector-typing/consumer-union.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps({'cones':cones,'routes_count':len(routes)},indent=2))
