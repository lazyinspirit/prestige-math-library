"""Prepare a dependency-closed proposal; --apply requires owner audit completion.
Does not dispatch or advance the native build engine.
"""
import json, pathlib, hashlib, math, sys, copy, subprocess
ROOT=pathlib.Path.cwd(); E=ROOT/'research/numerical-analysis-four-category-scaffolds-2026-10-16'; R='numerical-optimization-dynamics-2026-10-16'; O=ROOT/'research'/f'{R}-owner'
load=lambda p:json.loads(pathlib.Path(p).read_text())
sha=lambda b:hashlib.sha256(b).hexdigest()
records=load(ROOT/'research/numerical-analysis-comprehensive-2026-10-16-intake/inventory.json')['pairs']; by={r['key']:r for r in records}; rank={r['key']:i for i,r in enumerate(records)}; namespace={r['a_page']:r['key'] for r in records};namespace.update({k:k for k in by})
partition=load(E/'partition.json')['assignments']; override=load(E/'dependency-overrides.json')
requires={k:set(namespace.get(d,d) for d in r['requires']) for k,r in by.items()}
for row in override['added']:requires[row['consumer']].add(row['supplier'])
for row in override['removed']:requires[row['consumer']].discard(row['supplier'])
visited=set(); active=[]; ordered=[]
def visit(k):
 if k in active:raise RuntimeError('pair cycle: '+' -> '.join(active+[k]))
 if k in visited:return
 active.append(k)
 for d in sorted(requires[k],key=lambda x:(rank.get(x,-1),x)):
  if d in by:visit(d)
 active.pop();visited.add(k);ordered.append(k)
for k in by:visit(k)
all_order=ordered[:]; selected=set()
def include(k):
 if k in selected:return
 selected.add(k)
 for d in requires[k]:
  if d in by:include(d)
for k,g in partition.items():
 if g in ['optimization','dynamics']:include(k)
ordered=[k for k in all_order if k in selected]
preview={r['id']:r for r in load(ROOT/'research/numerical-analysis-comprehensive-2026-10-16-intake/root-canonical-rows.json')}
slugs={'linear':'numerical-linear-algebra-and-approximation','dynamics':'numerical-differential-equations-and-stochastic-dynamics','spatial':'numerical-pdes-and-spatial-discretization','optimization':'numerical-optimization-inverse-problems-and-uncertainty-quantification'}
raw=(ROOT/'research/plan-spec.json').read_bytes();plan=json.loads(raw); current={r['id']:r for r in plan['pages']}; rows=[]; next_order=math.floor(max(r['order'] for r in plan['pages']))+1
for k in ordered:
 r=by[k]; group=partition[k]; scaffold=f'research/plan-numerical-{group}-track.md'
 for page in [r['a_page'],r['b_page']]:
  if page in current:raise RuntimeError(f'Proposed page already in canonical plan: {page}')
  if list((ROOT/'library').glob('*/'+page+'.md')):raise RuntimeError(f'Proposed page already authored: {page}')
  row=copy.deepcopy(preview[page]);row['order']=next_order;next_order+=1;row['category']=slugs[group];row['scaffold']=scaffold
  row['requires']=[by[d]['a_page'] if d in by else d for d in sorted(requires[k],key=lambda x:(rank.get(x,-1),x))] if row['kind']=='A' else [r['a_page']]
  for d in row['requires']:
   if d not in current and d not in {by[x]['a_page'] for x in selected}:raise RuntimeError(f'Unresolved page prerequisite {page}: {d}')
  row['description']=f'Controlling repaired prose: {scaffold}, pair {k}, and its exact incorporated mathematical-contract appendix. Read the complete repaired contract, preserved scope/amendments/examples, and actual supplier restrictions before authoring. Canonical statistics/linear algebra methods remain at their published homes; only new numerical variants/results and missing typed prerequisites are authored here.\n\n'+row.get('description','')
  rows.append(row)
category_counts={g:sum(partition[k]==g for k in ordered) for g in slugs}
guards={str(p.relative_to(ROOT)):sha(p.read_bytes()) for p in [E/'partition.json',E/'dependency-overrides.json',ROOT/'research/numerical-analysis-comprehensive-2026-10-16-intake/inventory.json']}
proposal={'run':R,'status':'proposal-only until guarded canonical intake and native plan','category_pairs':72,'pairs':len(ordered),'pages':len(rows),'category_counts':category_counts,'keys':ordered,'a_pages':[by[k]['a_page'] for k in ordered],'plan_before_sha256':sha(raw),'input_guards':guards,'rows':rows}
(O/'frontier-proposal.json').write_text(json.dumps(proposal,indent=2)+'\n')
(E/'effective-dependency-observation.json').write_text(json.dumps({'scope':'Structural proposal observation only; not mathematical acceptance or engine coverage','all_pairs':len(by),'full_pair_graph_acyclic':True,'selected_pairs':len(ordered),'selected_categories':['optimization','dynamics'],'category_counts':category_counts,'internal_edges':[{'supplier':d,'consumer':k} for k in all_order for d in sorted(requires[k]) if d in by],'external_page_context':{k:sorted(d for d in requires[k] if d not in by) for k in ordered}},indent=2)+'\n')
print(json.dumps({k:proposal[k] for k in ['run','pairs','pages','category_counts','plan_before_sha256']},indent=2))
if '--apply' in sys.argv:
 done=load(E/'audit-completion.json')
 if done.get('complete_categories')!=['linear','dynamics','spatial','optimization']:raise RuntimeError('All four prose audits must finish before intake')
 if done.get('authorized_selected_categories')!=['optimization','dynamics']:raise RuntimeError('Wrong selected categories')
 for p,h in done['final_prose_sha256'].items():
  if sha((ROOT/p).read_bytes())!=h:raise RuntimeError('Prose changed since final audit: '+p)
 # Same short shared-metadata lock used by native repair writers. Other session
 # source/staging is preserved, and canonical bytes are compare-and-swapped.
 lock=ROOT/'.autopilot/step5-shared-write.lock';lock.mkdir()
 (lock/'owner.json').write_text(json.dumps({'owner':R+'-intake','purpose':'append selected dependency-closed page metadata'})+'\n')
 try:
  if (ROOT/'research/plan-spec.json').read_bytes()!=raw:raise RuntimeError('Concurrent plan mutation')
  for p,h in guards.items():
   if sha((ROOT/p).read_bytes())!=h:raise RuntimeError('Intake input changed: '+p)
  archive=ROOT/'.autopilot'/R/'plan-before-intake.json'
  if archive.exists():raise RuntimeError('Intake already archived; inspect current state before repeating')
  archive.write_bytes(raw);plan['pages'].extend(rows);next_raw=(json.dumps(plan,indent=2)+'\n').encode();(ROOT/'research/plan-spec.json').write_bytes(next_raw)
  (O/'canonical-intake.json').write_text(json.dumps({'run':R,'pairs':len(ordered),'pages':len(rows),'before_sha256':sha(raw),'after_sha256':sha(next_raw),'existing_rows_preserved':len(current),'prior_rows_identical':plan['pages'][:-len(rows)]==json.loads(raw)['pages'],'category_counts':category_counts,'native_execution_coverage':False},indent=2)+'\n')
 finally:
  (lock/'owner.json').unlink();lock.rmdir()
