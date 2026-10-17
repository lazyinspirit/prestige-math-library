from pathlib import Path
import json,re,difflib,hashlib
base=Path(__file__).parent; target='pthm-emg-weak-slow-test-motion'; run='physics-remaining-80-2026-10-17'
source=base/'archive/items'/f'{target}.md'; old=source.read_text();new=old
replacements=[
('existing trajectories, common compact containment and finite scaled duration.', 'existing trajectories, common compact convex state containment in K x R3 and finite scaled duration.'),
('on a compact convex state set containing both trajectories.', 'on a compact convex state set $\\mathcal Q\\subseteq\\mathcal K\\times\\mathbb R^3$ containing both scaled trajectories throughout $[0,S_*]$.'),
('remains in that common state set, and has the same initial scaled data', 'has its scaled state remain in $\\mathcal Q$, and has the same initial scaled data'),
("both trajectories' existence, compact containment and matched initial data on $[0,S_*]$.", "both scaled trajectories' existence and containment in the compact convex set $\\mathcal Q\\subseteq\\mathcal K\\times\\mathbb R^3$ with matched initial data on $[0,S_*]$."),
('speed bound, Lipschitz bound, and existing common-contained trajectories with matched initial data stated there,', 'speed bound, derivative bound on a compact convex $\\mathcal Q\\subseteq\\mathcal K\\times\\mathbb R^3$, and existing scaled trajectories contained in $\\mathcal Q$ with matched initial data stated there,'),
('All uniform bounds, proper-time curve hypotheses, and finite-interval existence and containment conditions in the Statement are assumptions.', 'All uniform bounds, proper-time curve hypotheses, and finite-interval existence and containment in $\\mathcal Q\\subseteq\\mathcal K\\times\\mathbb R^3$ in the Statement are assumptions.'),
('speed bound, compact-state derivative bound, and existence/containment assumptions in [A1] match the hypotheses of [F2] exactly;', 'speed bound, derivative bound on the compact convex state set $\\mathcal Q$, and existence/containment assumptions in [A1] match the hypotheses of [F2] exactly: because $\\mathcal Q\\subseteq\\mathcal K\\times\\mathbb R^3$, both scaled positions stay in $\\mathcal K$, where the uniform metric and field bounds apply;'),
('both curves remain in the common compact set,', 'both scaled curves remain in the compact convex set $\\mathcal Q\\subseteq\\mathcal K\\times\\mathbb R^3$,')]
for a,b in replacements:
 assert new.count(a)==1,(a,new.count(a));new=new.replace(a,b)
(base/'proposed-source.md').write_text(new)
(base/'unapplied-source.diff').write_text(''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile=f'a/physics/items/{target}.md',tofile=f'b/physics/items/{target}.md')))
statement=lambda s:s.split('## Statement\n\n',1)[1].split('\n\n## ',1)[0].strip()
supplier=(base/'archive/items/thm-emg-weak-slow-test-lorentz-limit.md').read_text()
q_paragraph=next(p for p in statement(supplier).split('\n\n') if 'compact convex state set' in p)
contracts=json.loads((base/'archive/research'/f'{run}-batch-19.proof-contracts.json').read_text());c=contracts['contracts'][target]
manifest=json.loads((base/'archive/research'/f'{run}-batch-19.pages.json').read_text())
ops=[]
def op(path,before,after,owner):
 assert before!=after
 ops.append({'path':path,'expected_before':before,'proposed_after':after,'native_owner_scope':owner})
op('/contracts/'+target+'/citations/1/quote',c['citations'][1]['quote'],q_paragraph,target)
for i in range(2):
 step=c['derivations'][i]['step']
 paragraph=next(p for p in new.split('\n\n') if p.startswith(step+' '))
 claim=re.sub(r' \[[^\[\]\n]*\](?: ∎)?$','',paragraph[len(step)+1:])
 op('/contracts/'+target+f'/derivations/{i}/claim',c['derivations'][i]['claim'],claim,target)
# Full-statement quotes in the consumer must follow the source, without changing its claim.
consumer='ex-emg-ml-b08'
for i in range(2):
 cc=contracts['contracts'][consumer]['citations'][i]
 assert cc['source']==target and cc['quote']==statement(old)
 op('/contracts/'+consumer+f'/citations/{i}/quote',cc['quote'],statement(new),consumer+' consumer owner')
proposal={'version':1,'run':run,'scientific_owner':'/root/step5_containment_science','status':'UNAPPLIED_PROPOSAL','canonical_writes':False,'native_transition':False,'acceptance':False,'contract_file':f'research/{run}-batch-19.proof-contracts.json','operations':ops,'native_review_required':{'theorem_risk_review':'The native repair owner must replace the stale risk_review (currently says no defect found) after its actual current repaired review; do not transplant an outside approval stamp. Check local action equivalence, exact Q subset K x R3, speed/cutoff/scalings, both proof steps, and finite-interval conclusions.','consumer_context':'The native consumer owner must confirm ex-emg-ml-b08 exact rotations fit Q=K x closed_ball(0, |W0|), K=closed_ball(X0, 1+Sstar |W0|), update its two full-statement quotes, and retain the direct proof on the full displayed epsilon range.','source_precheck':'Any pre-existing precheck marker in proposed-source.md is copied historical metadata; this proposal claims no check or acceptance of proposed bytes.'}}
(base/'unapplied-contract-fields.json').write_text(json.dumps(proposal,indent=2)+'\n')
manifest_ops=[]
for i,p in enumerate(manifest):
 for j,row in enumerate(p.get('items',[])):
  if row['id']==target:
   assert row['statement']==statement(old)
   manifest_ops += [{'path':f'/{i}/items/{j}/statement','expected_before':row['statement'],'proposed_after':statement(new)}, {'path':f'/{i}/items/{j}/physical_scope','expected_before':row['physical_scope'],'proposed_after':re.search(r'^physical_scope: "(.*)"$',new,re.M)[1]}]
assert len(manifest_ops)==2
(base/'unapplied-manifest-fields.json').write_text(json.dumps({'version':1,'run':run,'scientific_owner':'/root/step5_containment_science','status':'UNAPPLIED_PROPOSAL','canonical_writes':False,'manifest_file':f'research/{run}-batch-19.pages.json','operations':manifest_ops,'unchanged':'Identity, class, sources, dependencies, dependency roles, levels, inventory and placement remain unchanged; no new logical supplier is needed.'},indent=2)+'\n')
print('Created source preview/diff and exact contract+manifest field proposals; canonical inputs untouched.')
