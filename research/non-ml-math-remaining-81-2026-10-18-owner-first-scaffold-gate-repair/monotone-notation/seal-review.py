from pathlib import Path
import json,re,hashlib
root=Path.cwd();R='non-ml-math-remaining-81-2026-10-18';out=root/f'research/{R}-owner-first-scaffold-gate-repair/monotone-notation';inv=json.load(open(out/'consumer-inventory.json'));ix=json.load(open(out/'proposal-index.json'));changed={r['id'] for r in ix['proposals']};aff={r['id'] for r in inv['consumers']};write=lambda p,d:p.write_text(json.dumps(d,indent=2)+'\n');H=lambda s:hashlib.sha256(s).hexdigest()
inv['aliases']={a:id for a,id in inv['aliases'].items() if id in aff};write(out/'consumer-inventory.json',inv)
records=[]
for row in inv['consumers']+inv['textual_only_contexts']:
 id=row['id'];p=root/row['file'];raw=p.read_bytes();arc=out/'before'/row['file'];arc.parent.mkdir(parents=True,exist_ok=True);arc.write_bytes(raw)
 record={**row,'before_sha256':H(raw),'proposed_source':str((out/'proposals'/row['file']).relative_to(root)) if id in changed else None,'disposition':'notation-only proposal' if id in changed else 'checked unchanged: exported mathematical claims and hypotheses are preserved under the same canonical-copy identification','review_extent':'Complete actual item body, including Statement/Definition/Example, facts, proof and remarks; notation-only scientific preservation check.' if id in changed else 'Actual dependency/alias edges and every affected-supplier citation context shown here; not a fresh full-proof audit of this descendant.','reason':'All cited rational homogeneity, continuity/oscillation sets, values/positivity and relative-domain conclusions retain their exact mathematical meaning; no descendant hypothesis or proof inference needs to change.'}
 if not row['references']:record['reason']='Declared dependency retained; actual item independently spells out the indicator-of-irrationals values and uses countability/density for its own argument. The natural-embedding notation does not occur in its body.'
 records.append(record)
checks=[]
for r in ix['proposals']:
 a=(out/'before'/r['path']).read_text();b=(out/'proposals'/r['path']).read_text()
 def steps(s):return [(m[1],m[2]) for m in re.finditer(r'^(\d+\.\d+) .*?\[([^\[\]\n]*)\](?:\s*∎)?\s*$',s,re.M)]
 assert a.split('---',2)[1]==b.split('---',2)[1]
 assert steps(a)==steps(b),(r['id'],'step tags differ')
 assert sorted(re.findall(r'\[\[([^\]]+)\]\]',a))==sorted(re.findall(r'\[\[([^\]]+)\]\]',b)),r['id']
 assert not re.search(r'\\iota\s*\(',b.split('---',2)[2])
 checks.append({'id':r['id'],'frontmatter_byte_identical':True,'numbered_step_labels_and_input_tags_identical':True,'wikilink_multiset_identical':True,'proposed_body_applied_iota_count':0,'canonical_before_guard':(root/r['path']).read_bytes()==(out/'before'/r['path']).read_bytes()})
write(out/'consumer-dispositions.json',{'scope':'13 subjects,77 declared descendants,21 additional textual contexts; no new proof audit of unchanged descendants','records':records});write(out/'preservation-checks.json',checks)
rawrows={r['id']:r for r in inv['consumers']+inv['textual_only_contexts']};pending=set(changed);order=[]
while pending:
 ready=sorted(id for id in pending if not (set(rawrows[id].get('all_declared_dependencies',[]))&pending));assert ready,'cycle';order+=ready;pending-=set(ready)
write(out/'supplier-first-order.json',order)
inputs=[f'research/{R}-batch-2.pages.json',f'research/{R}-batch-2.proof-contracts.json',f'research/{R}-batch-2.notes.md']+[f'items/{id}.md' for id in ['def-canonical-natural','lem-nat-embeds-int','lem-int-embeds-rat','lem-rat-embeds-dense','lem-of-naturals-positive','lem-integer-multiples-agree-with-canonical-natural','cor-archimedean-reciprocal','thm-of-archimedean']]
for rel in inputs:
 raw=(root/rel).read_bytes();p=out/'before'/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(raw)
(out/'native-findings.txt').write_bytes((root/f'.autopilot/{R}/first-scaffold-gate-failures/content-policy-scaffold.txt').read_bytes())
mirrors=[]
for p in (root/'research').glob(R+'-batch-*.proof-contracts.json'):
 matches=[id for id in changed if id in p.read_text()]
 if matches:mirrors.append({'path':str(p.relative_to(root)),'sha256':H(p.read_bytes()),'mentioned_changed_items':sorted(matches),'disposition':'Root owns exact current quote/claim mirror refresh after source integration; no canonical contract edit supplied.'})
write(out/'contract-mirror-inventory.json',mirrors)
print('dispositions',len(records),'preservation invariants pass',len(checks),'mirrors',len(mirrors),'order',len(order))
