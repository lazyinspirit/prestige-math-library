from pathlib import Path
from collections import defaultdict,deque
import json,hashlib,re,yaml,datetime
root=Path('.');run='physics-cm-qm-gr-79-2026-10-11';base=Path('research')/(run+'-resumed-orchestration');out=base/'gr-geometric-consumer3-research/mechanical-union'
seeds=['lem-gr-maximal-geodesics-and-extension','lem-gr-cauchy-set-topology-and-graph','lem-gr-dominating-cone-bounds','lem-gr-causal-curve-conventions','lem-gr-strong-causality-escape-sequence','lem-gr-strong-causality-compact-length-bound','thm-gr-volume-time-function']
observations=[];file_records={};failures=[];bodies={};metadata_text=[];current_paths={};current_ownership=defaultdict(list)
def record(p):
 raw=p.read_bytes();file_records[str(p)]={'path':str(p),'raw_sha256':hashlib.sha256(raw).hexdigest(),'bytes':len(raw)};return raw.decode()
def norm(value):return [str(x) for x in value] if isinstance(value,list) else []
def md(p,era):
 text=record(p);match=re.match(r'^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)',text)
 if not match:return
 try:fm=yaml.safe_load(match.group(1))
 except Exception as e:failures.append({'path':str(p),'error':str(e)});return
 if not isinstance(fm,dict) or not fm.get('id'):return
 id=str(fm['id']);observations.append({'id':id,'deps':norm(fm.get('deps')),'aliases':norm(fm.get('aliases')),'justified_by':norm(fm.get('justified_by')),'forward_refs':norm(fm.get('forward_refs')),'path':str(p),'era':era,'origin':'carrier','raw_sha256':file_records[str(p)]['raw_sha256']});bodies[str(p)]=(id,text)
 if era=='current':current_paths[id]=str(p)
def archived(p):
 return any(seg.startswith('before') or seg in ['archive','archives','observed','snapshot','snapshots'] for seg in p.parts) or p.name.endswith('.before')
for p in sorted(Path('items').glob('*.md')):md(p,'current')
archive_md=[p for p in Path('research').rglob('*.md') if run in str(p) and archived(p) and out not in p.parents]
for p in sorted(archive_md):md(p,'old')
manifest_paths=[]
for p in Path('research').rglob('*.json'):
 if run not in str(p) or out in p.parents:continue
 if re.search(r'batch-\d+\.(pages|coverage|proof-contracts|cross-batch-dependencies)\.json$',p.name) and (archived(p) or p.parent==Path('research')):manifest_paths.append(p)
seen_meta=set()
def visit(value,path,era,loc,batch,ownerpage=None):
 if isinstance(value,list):
  for i,v in enumerate(value):visit(v,path,era,f'{loc}/{i}',batch,ownerpage)
 elif isinstance(value,dict):
  id=value.get('id') or value.get('item_id');page=ownerpage
  if value.get('kind') in ['A','B','P'] and isinstance(value.get('items'),list):page=value.get('id')
  if id and isinstance(value.get('deps'),list):
   sig=(str(path),loc,str(id))
   if sig not in seen_meta:
    seen_meta.add(sig);observations.append({'id':str(id),'deps':norm(value.get('deps')),'aliases':norm(value.get('aliases')),'justified_by':norm(value.get('justified_by')),'forward_refs':norm(value.get('forward_refs')),'path':str(path),'pointer':loc,'era':era,'origin':'metadata','raw_sha256':file_records[str(path)]['raw_sha256']})
   if era=='current' and page:current_ownership[str(id)].append({'batch':batch,'page':page,'manifest':str(path),'pointer':loc})
  for key,v in value.items():
   if isinstance(v,str):metadata_text.append({'id':str(id) if id else ownerpage,'path':str(path),'pointer':loc+'/'+key,'text':v,'era':era})
   elif isinstance(v,(list,dict)):visit(v,path,era,loc+'/'+key,batch,page)
for p in sorted(manifest_paths):
 try:d=json.loads(record(p))
 except Exception as e:failures.append({'path':str(p),'error':str(e)});continue
 batch=int(re.search(r'batch-(\d+)',p.name)[1]);visit(d,p,'old' if archived(p) else 'current','',batch)
known=set(o['id'] for o in observations);aliases=defaultdict(set)
for o in observations:
 for alias in o['aliases']:aliases[alias].add(o['id'])
def resolve(dep):return sorted(({dep} if dep in known else set())|aliases.get(dep,set())) or [dep]
edges=defaultdict(list);reverse=defaultdict(set);rawdeps=defaultdict(set)
for o in observations:
 for raw in o['deps']:
  rawdeps[o['id']].add(raw)
  for supplier in resolve(raw):
   edge=(supplier,o['id']);edges[edge].append({'path':o['path'],'era':o['era'],'origin':o['origin'],'raw_dep':raw,'pointer':o.get('pointer'),'alias_resolved':raw!=supplier});reverse[supplier].add(o['id'])
closures={};distances={}
for seed in seeds:
 reached={seed};depth={seed:0};queue=deque([seed])
 while queue:
  cur=queue.popleft()
  for target in sorted(reverse[cur]):
   if target not in reached:reached.add(target);depth[target]=depth[cur]+1;queue.append(target)
 closures[seed]=sorted(reached-{seed});distances[seed]=depth
scope=set(seeds)|set().union(*(set(x) for x in closures.values()))
scoped_edges=[{'supplier':a,'consumer':b,'evidence':e} for (a,b),e in sorted(edges.items()) if a in scope and b in scope]
scoped_obs=[o for o in observations if o['id'] in scope]
terms={seed:set([seed])|{a for a,ids in aliases.items() if seed in ids} for seed in seeds};excerpts=[]
for path,(id,text) in bodies.items():
 if id not in scope:continue
 lines=text.splitlines();infront=False;heading=None;fm_end=0
 if lines and lines[0]=='---':
  fm_end=next((i for i in range(1,len(lines)) if lines[i]=='---'),0)
 for i,line in enumerate(lines):
  if i<=fm_end:continue
  if line.startswith('## '):heading=line[3:].strip()
  hit=[seed for seed,spellings in terms.items() if any(re.search(r'\[\['+re.escape(term)+r'(?:\||\]\])',line) for term in spellings)]
  if hit:
   excerpts.append({'consumer':id,'source':path,'era':'current' if path.startswith('items/') else 'old','line':i+1,'section':heading,'seeds':hit,'text':line,'context':'\n'.join(lines[max(fm_end+1,i-1):min(len(lines),i+2)]),'scope':'Citation/use excerpt only; no semantic adequacy verdict'})
meta_excerpts=[]
for row in metadata_text:
 hit=[seed for seed,spellings in terms.items() if any('[['+term in row['text'] for term in spellings)]
 if hit and (row['id'] in scope or row['id'] is None):meta_excerpts.append({**row,'seeds':hit})
final79_path=Path('research')/(run+'-batch-79.pages.json');final79=json.loads(final79_path.read_text());items79=[]
for page in final79:
 for kind in ['items','examples']:
  for item in page.get(kind,[]):
   id=item['id'] if isinstance(item,dict) else item;items79.append({'id':id,'page':page['id'],'list':kind,'path':current_paths.get(id),'raw_sha256':file_records.get(current_paths.get(id,''),{}).get('raw_sha256'),'in_union_scope':id in scope,'seed_paths':{seed:distances[seed][id] for seed in seeds if id in distances[seed]},'current_deps':next((o['deps'] for o in observations if o['id']==id and o['era']=='current' and o['origin']=='carrier'),[])})
unique79={x['id'] for x in items79};assert len(unique79)==29,len(unique79)
missing79=[x['id'] for x in items79 if not x['path']];assert not missing79,missing79
current_byid={o['id']:o for o in observations if o['origin']=='carrier' and o['era']=='current'}
report={'version':1,'created_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'Mechanical extraction only; no semantic certification, audit, readiness or gate status','seeds':seeds,'current_inventory_count':len(current_paths),'archived_carrier_observations':sum(o['era']=='old' and o['origin']=='carrier' for o in observations),'archived_metadata_observations':sum(o['era']=='old' and o['origin']=='metadata' for o in observations),'alias_union':{a:sorted(ids) for a,ids in aliases.items()},'alias_collisions':{a:sorted(ids) for a,ids in aliases.items() if len(ids)>1},'cones':closures,'scope_ids':sorted(scope),'edges':scoped_edges,'observations':scoped_obs,'current_ownership':{id:current_ownership[id] for id in sorted(scope)},'final79_inventory':items79,'parse_failures':failures,'nonlogical_context_rule':'justified_by and forward_refs retained as metadata context, not converted to deps edges; body citations retained separately','history_rule':'Old observations union all retained before/archive/observed carrier and manifest snapshots from this run; candidates/proposed copies excluded unless they are inside a historical archive. Old metadata unions are routing evidence, not current authority.'}
(out/'union-old-current-alias-graph.json').write_text(json.dumps(report,indent=2)+'\n');(out/'direct-use-excerpts.json').write_text(json.dumps({'scope':'Actual old/current body citation excerpts, not mathematical acceptance','carrier_excerpts':excerpts,'archived_current_metadata_quotations':meta_excerpts},indent=2)+'\n')
needed_paths={o['path'] for o in scoped_obs}|{x['path'] for x in items79}|{e['source'] for e in excerpts}|{x['path'] for x in meta_excerpts}|{str(final79_path)}
guards=[file_records[p] for p in sorted(needed_paths) if p in file_records]
all_guards={row['path']:row for row in guards}
for p in current_paths.values():all_guards[p]=file_records[p]
drift=[row['path'] for row in all_guards.values() if hashlib.sha256(Path(row['path']).read_bytes()).hexdigest()!=row['raw_sha256']]
(out/'guards.json').write_text(json.dumps({'scope':'Raw extraction input guards, not currency certification after future edits','created_at':report['created_at'],'inputs':guards,'final_recheck_drift':drift,'all_current_inventory_alias_guard_hashes':[file_records[p] for p in sorted(current_paths.values())]},indent=2)+'\n')
summary={'scope_count':len(scope),'consumer_union_count':len(scope-set(seeds)),'scoped_edges':len(scoped_edges),'body_excerpts':len(excerpts),'metadata_quote_excerpts':len(meta_excerpts),'old_carrier_observations':report['archived_carrier_observations'],'old_metadata_observations':report['archived_metadata_observations'],'final79_unique':len(unique79),'final79_affected':sum(x['in_union_scope'] for x in items79),'parse_failures':len(failures),'guard_drift':len(drift),'seed_cone_counts':{s:len(c) for s,c in closures.items()}}
(out/'summary.json').write_text(json.dumps(summary,indent=2)+'\n')
(out/'REPORT.md').write_text('# Mechanical geometric dependency extraction\n\nRead-only extraction for the seven specified suppliers/consumers. No semantic certification or production/state/readiness edits. The graph unions declared old/current `deps`, resolving the union of old/current aliases; each edge retains its exact carrier/metadata provenance and raw dependency spelling. `justified_by` and `forward_refs` are preserved as separate context. Actual body citation/use excerpts and archived metadata quotations are separate from declared edges.\n\nAll 29 final native79 manifest IDs are included with current carrier hashes, exact page placement and seed-path distances, including any outside the affected union. No item was dropped for lacking earlier manifest ownership. Historical candidates are not treated as old production unless explicitly archived.\n\n`union-old-current-alias-graph.json` contains the scoped union, observations, ownership and final79 inventory. `direct-use-excerpts.json` contains exact carrier lines and metadata quotations. `guards.json` binds raw inputs and the current inventory used for alias resolution; `summary.json` records counts and limitations. Existing history and repair cycles remain unchanged.\n\nExtraction summary:\n\n```json\n'+json.dumps(summary,indent=2)+'\n```\n\nThe integrator owns mathematical/physical proof review, actual-use classification, hypothesis propagation, old/current/alias consumer closure and final source synchronization. A dependency or citation excerpt is not evidence that its hypothesis is satisfied.\n')
print(json.dumps(summary,indent=2))
