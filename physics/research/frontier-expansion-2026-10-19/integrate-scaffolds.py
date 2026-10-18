#!/usr/bin/env python3
"""Preview/guardedly register the eight owner-authorized successor designs.

Never dispatch workers, modify run history, import suppliers, author content, or
publish. Requires all authors to be finished. Root performs focused validation
on the preview before --apply; registration grants no proof acceptance.
"""
import argparse, collections, copy, hashlib, json, os, pathlib, re
import yaml

ROOT=pathlib.Path(__file__).resolve().parents[3]
BASE=ROOT/'physics/research/frontier-expansion-2026-10-19'
RUNTIME=ROOT/'.autopilot/physics-frontier-expansion-2026-10-19'
PHYS=ROOT/'physics'
SUBJECTS=['classical-electromagnetism','einstein-maxwell-models','general-relativity',
'non-relativistic-quantum-mechanics','quantum-field-theory','classical-statistical-mechanics',
'quantum-statistical-mechanics','thermodynamics-and-general-relativity']

def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def load(p):return json.loads(p.read_text())
def encoded(v):return (json.dumps(v,indent=2,ensure_ascii=False)+'\n').encode()
def atomic(p,b):
 t=p.with_name(p.name+'.physics-expansion.tmp');t.write_bytes(b);os.replace(t,p)
def fm(p):
 m=re.match(r'^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)',p.read_text())
 if not m:raise ValueError('Missing frontmatter: '+str(p))
 d=yaml.safe_load(m[1]);assert isinstance(d,dict),str(p);return d

def topo(graph):
 seen=set();pending=set();out=[]
 def visit(k):
  if k in seen:return
  if k in pending:raise ValueError('Dependency cycle: '+k)
  pending.add(k)
  for dep in graph[k]:
   if dep in graph:visit(dep)
  pending.remove(k);seen.add(k);out.append(k)
 for k in graph:visit(k)
 return out

parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--apply',action='store_true');args=parser.parse_args()
baseline=load(RUNTIME/'baseline.json')
planpath=PHYS/'research/plan-spec.json';regpath=PHYS/'research/prose-scaffold-splice.json'
for p in [planpath,regpath]:
 assert sha(p)==baseline[str(p.relative_to(ROOT))]['sha256'],'Shared registry changed; rebase before proceeding.'
plan=load(planpath);registry=load(regpath);oldpages=copy.deepcopy(plan['pages']);byid={p['id']:p for p in plan['pages']}
assert len(byid)==len(oldpages)
newpairs={};candidate={};itemhome={};itemsubject={};sources={};counts={};updates=[]
for subject in SUBJECTS:
 folder=BASE/subject
 for name in ['inventory.json','prose-scaffold.md','baseline.json','suppliers.json','sources.md','sources.json','coverage-and-closure.md','splice-support.json']:
  assert (folder/name).is_file(),str(folder/name)
 track=PHYS/f'research/plan-{subject}-frontier-expansion-track.md';assert track.is_file(),str(track)
 source=str(track.relative_to(PHYS))
 for p in [track,*sorted(folder.rglob('*.md')),*sorted(folder.rglob('*.json'))]:
  sources[str(p.relative_to(PHYS))]=sha(p)
 inv=load(folder/'inventory.json');assert inv['subject']==subject
 pairs=inv['pairs'];assert pairs
 counts[subject]={'new_pairs':len(pairs),'new_items':0,'retained_pairs':0,'new_physics_pairs':0,'new_mathematics_pairs':0}
 for p in plan['pages']:
  if p.get('category') not in [subject,subject+'-mathematics']:continue
  oldsource=p.get('scaffold');p['scaffold']=source
  updates.append({'id':p['id'],'previous_scaffold':oldsource,'scaffold':source})
  if p['kind']=='A':counts[subject]['retained_pairs']+=1
 for pair in pairs:
  a,b=pair['a_page'],pair['b_page'];assert a!=b and a not in byid and b not in byid
  assert a not in newpairs and b not in newpairs
  assert pair['category'] in [subject,subject+'-mathematics'],pair['category']
  lib=pair['library'];assert lib in ['physics','mathematics']
  category=PHYS/'library'/pair['category']/'_category.md'
  assert category.is_file(),'Category metadata missing: '+str(category)
  assert fm(category).get('library')==lib,'Category classification mismatch: '+str(category)
  counts[subject]['new_'+lib+'_pairs']+=1
  for kind,pid,companion,req in [('A',a,b,pair['requires']),('B',b,a,[a])]:
   row={'id':pid,'title':pair['title']+(' — Examples' if kind=='B' else ''),'kind':kind,
   'category':pair['category'],'library':lib,'companion':companion,'requires':list(dict.fromkeys(req)),
   'items':[],'scaffold':source}
   byid[pid]=row
   for it in pair[kind]:
    assert isinstance(it,dict) and it.get('id') and it.get('statement'),pid
    iid=it['id'];assert iid not in candidate,'Duplicate item '+iid
    assert not (ROOT/'items'/f'{iid}.md').exists() and not (PHYS/'items'/f'{iid}.md').exists(),'Existing item '+iid
    assert isinstance(it.get('deps'),list) and isinstance(it.get('justified_by',[]),list),iid
    assert it.get('domain') in ['mathematics','physics'],'Missing domain: '+iid
    prefix={'definition':'def','algorithm':'alg','theorem':'thm','lemma':'lem','proposition':'prop','corollary':'cor','example':'ex','counterexample':'cex','false-statement':'fs','remark':'rem','open-problem':'op','postulate':'post','physics-theorem':'pthm','thought-experiment':'texp','experiment':'exp'}
    assert it.get('kind') in prefix and iid.startswith(prefix[it['kind']]+'-'),'Kind/prefix mismatch: '+iid
    assert it.get('proof_route'),'Missing definition/proof/source route: '+iid
    plain=re.sub(r'\$\$[\s\S]*?\$\$|\$[^$]*\$','',it['statement'])
    assert not re.search(r'\[\[[a-z][a-z0-9-]*(?:\||\]\])|https?://|\]\(',plain),'Interrupted statement: '+iid
    candidate[iid]=it;itemhome[iid]=pid;itemsubject[iid]=subject
    counts[subject]['new_items']+=1
  newpairs[a]={'subject':subject,'pair':pair,'A':byid[a],'B':byid[b]}
# Actual carrier inventory is identity context, never whole-corpus audit scope.
homes={};rootpages={}
for libraryroot in [ROOT,PHYS]:
 for p in (libraryroot/'library').glob('*/*.md'):
  if p.name.startswith('_'):continue
  try:d=fm(p)
  except Exception:continue
  pid=d.get('page')
  if not pid:continue
  if libraryroot==ROOT:rootpages[pid]=(p,d)
  for iid in (d.get('items') or [])+(d.get('examples') or []):
   if isinstance(iid,str):homes.setdefault(iid,[]).append((pid,p,libraryroot))
actual={};bindings={};addedP=[];inferred=[]
def external(iid):
 if iid in actual:return actual[iid]
 for libraryroot in [PHYS,ROOT]:
  p=libraryroot/'items'/f'{iid}.md'
  if p.is_file():
   d=fm(p);assert d.get('id')==iid
   actual[iid]=d
   bindings[str(p.relative_to(ROOT))]={'sha256':sha(p),'status':d.get('status','draft'),'id':iid}
   return d
 raise ValueError('No new or actual supplier: '+iid)
def domain(iid,it):
 if it.get('domain'):return it['domain']
 if it.get('kind') in ['theorem','lemma','proposition','corollary']:return 'mathematics'
 if it.get('kind') in ['postulate','physics-theorem','thought-experiment','experiment']:return 'physics'
 if iid in itemhome:return byid[itemhome[iid]]['library']
 return 'mathematics' if (ROOT/'items'/f'{iid}.md').exists() else None

def ensure_root_page(pid):
 if pid in byid:return
 assert pid in rootpages,'Unknown prerequisite page: '+pid
 p,d=rootpages[pid]
 byid[pid]={'id':pid,'title':d['title'],'kind':'P','category':p.parent.name,'library':'mathematics',
 'requires':[],'items':[],'order':0,'source_path':str(p.relative_to(ROOT)),'source_status':d.get('status','draft')}
 addedP.append(byid[pid]);bindings[str(p.relative_to(ROOT))]={'sha256':sha(p),'status':d.get('status','draft'),'page':pid}

def supplier_home(iid):
 if iid in itemhome:return itemhome[iid]
 candidates=homes.get(iid,[])
 # Prefer an existing unique local physics home, then canonical root home.
 local=[r for r in candidates if r[2]==PHYS and r[0] in byid]
 if local:
  unique={r[0] for r in local};assert len(unique)==1,'Ambiguous physics home '+iid
  return local[0][0]
 root=[r for r in candidates if r[2]==ROOT]
 assert len({r[0] for r in root})==1,'Missing or ambiguous root home: '+iid
 pid=root[0][0];ensure_root_page(pid);return pid

for iid,it in candidate.items():
 for target in it['deps']:
  t=candidate.get(target) or external(target)
  assert t.get('kind')!='open-problem','Open problem used as supplier: '+iid
  assert not(domain(iid,it)=='mathematics' and domain(target,t)=='physics'),'Mathematics uses physical premise: '+iid+' -> '+target
  home=supplier_home(target);own=itemhome[iid]
  assert byid[home]['kind']!='B' or home==own,'B-page supplier: '+iid+' -> '+target
  if home!=own and home not in byid[own]['requires']:
   byid[own]['requires'].append(home);inferred.append({'consumer_page':own,'supplier_page':home,'via':[iid,target]})
 for target in it.get('justified_by',[]):
  t=candidate.get(target) or external(target)
  assert iid in t.get('deps',[]),'Missing justification backlink: '+iid
  assert t.get('kind')!='open-problem'
  assert not(domain(iid,it)=='mathematics' and domain(target,t)=='physics')
# Cross-page B dependencies are forbidden, but B can depend on earlier local B items.
for entry in newpairs.values():
 for row in [entry['A'],entry['B']]:
  for req in row['requires']:
   ensure_root_page(req);assert byid[req]['kind']!='B','B prerequisite: '+req
 for kind in ['A','B']:
  ids=[i['id'] for i in entry['pair'][kind]];pos={i:k for k,i in enumerate(ids)}
  for iid in ids:
   for dep in candidate[iid]['deps']:
    if dep in pos:assert pos[dep]<pos[iid],'Same-page forward supplier: '+iid+' -> '+dep
itemorder=topo({i:it['deps'] for i,it in candidate.items()})
graph={a:[d for d in newpairs[a]['A']['requires']+newpairs[a]['B']['requires'] if d!=a] for a in newpairs};pageorder=topo(graph)
nextorder=max(p.get('order',0) for p in oldpages)+1
for p in addedP:plan['pages'].append(p)
for a in pageorder:
 entry=newpairs[a]
 for row in [entry['A'],entry['B']]:
  row['order']=nextorder;nextorder+=1
  assert all(byid[req]['order']<row['order'] for req in row['requires']),row['id']
  plan['pages'].append(row)
# Preserve every old field byte-equivalent as JSON data, except scoped pointers.
for old in oldpages:
 now=byid[old['id']];expected=copy.deepcopy(old)
 if any(old.get('category') in [s,s+'-mathematics'] for s in SUBJECTS):expected['scaffold']=now['scaffold']
 assert now==expected,'Old page interface changed: '+old['id']
plan['generated']='2026-10-19'
plan['note']=plan.get('note','')+' Eight owner-authorized physics frontier expansions registered 2026-10-19; existing item interfaces preserved; new inventories remain research authoring obligations.'
registry.setdefault('source_sha256_at_original_splice',copy.deepcopy(registry.get('source_sha256',{})))
registry.setdefault('source_sha256',{}).update(sources)
for s in SUBJECTS:
 rows=[p for p in plan['pages'] if p.get('category') in [s,s+'-mathematics'] and p['kind']=='A']
 registry['subjects'][s]={'physics_pairs':sum(p['library']=='physics' for p in rows),'mathematics_pairs':sum(p['library']=='mathematics' for p in rows)}
registry['pairs']=sum(p['kind']=='A' for p in plan['pages'])
registry['root_mathematical_prerequisite_pages']=sum(p['kind']=='P' and p.get('library')=='mathematics' for p in plan['pages'])
rootP=[p for p in plan['pages'] if p['kind']=='P' and p.get('library')=='mathematics']
registry['published_math_prerequisite_pages']=sum(rootpages.get(p['id'],(None,{}))[1].get('status')=='published' for p in rootP)
registry['draft_math_prerequisite_pages']=sum(rootpages.get(p['id'],(None,{}))[1].get('status')=='draft' for p in rootP)
registry['math_prerequisite_status_unknown']=len(rootP)-registry['published_math_prerequisite_pages']-registry['draft_math_prerequisite_pages']
registry.setdefault('proposed_item_homes',{}).update(itemhome)
registry['source_expansion_2026_10_19']={'status':'Owner-authorized planning registration; no item authoring or proof acceptance',
'subjects':counts,'source_sha256':sources,'new_root_prerequisite_pages':[p['id'] for p in addedP],
'new_A_pages':pageorder,'draft_supplier_policy':'Published and stable draft mathematics are exact qualified planning inputs, never newly accepted by this splice.',
'evidence':'research/frontier-expansion-2026-10-19/integration-review.md'}
registry['plan_sha256']=hashlib.sha256(encoded(plan)).hexdigest()
report={'version':1,'mode':'canonical-applied' if args.apply else 'preview','subjects':counts,
'new_pairs':len(newpairs),'new_items':len(candidate),'new_P_pages':len(addedP),'old_rows_preserved_except_scaffold':len(oldpages),
'scoped_pointer_updates':len(updates),'inferred_page_dependencies':inferred,'page_order':pageorder,'item_order':itemorder,
'current_external_bindings':bindings,'source_sha256':sources,'plan_sha256':registry['plan_sha256'],
'canonical_registry_inputs':baseline,'engine_commands':False,'production_content_edits':False,'publication':False}
# Source/run-specific checks are performed externally on these complete previews.
RUNTIME.mkdir(exist_ok=True)
if args.apply:
 # Shared physics planning inputs may change only while no physics controller
 # has unfinished dispatch activity. Inspect events read-only; never control it.
 for eventfile in (PHYS/'.physics-autopilot').glob('*/events.jsonl'):
  events=[json.loads(line) for line in eventfile.read_text().splitlines() if line.strip()]
  finishes=[i for i,e in enumerate(events) if e.get('type')=='finish']
  if any(e.get('type') in ['dispatch','stage','exec'] for e in events):
   assert finishes and events[finishes[-1]].get('message')=='run loop exited: done','Physics run is not concluded: '+str(eventfile)
   assert not any(e.get('type') in ['dispatch','stage','exec'] for e in events[finishes[-1]+1:]),'Resumed physics activity: '+str(eventfile)
 receipt=load(RUNTIME/'preview-review.json')
 assert receipt['plan_sha256']==registry['plan_sha256'] and receipt['verdict']=='pass','Fresh explicit preview review required.'
 for p in [planpath,regpath]:assert sha(p)==baseline[str(p.relative_to(ROOT))]['sha256']
 for p,h in sources.items():assert sha(PHYS/p)==h,'Scaffold changed before write: '+p
 for p,b in bindings.items():assert sha(ROOT/p)==b['sha256'],'Supplier changed before write: '+p
 atomic(planpath,encoded(plan));atomic(regpath,encoded(registry))
 atomic(BASE/'splice-execution.json',encoded(report))
else:
 atomic(RUNTIME/'plan-preview.json',encoded(plan));atomic(RUNTIME/'registry-preview.json',encoded(registry))
 atomic(RUNTIME/'splice-preview.json',encoded(report))
 atomic(RUNTIME/'selected-pages.json',encoded([p['id'] for p in plan['pages'] if p['kind'] in ['A','B'] and p['id'] not in {o['id'] for o in oldpages}]))
print(json.dumps({k:report[k] for k in ['mode','new_pairs','new_items','new_P_pages','scoped_pointer_updates','plan_sha256']},indent=2))
