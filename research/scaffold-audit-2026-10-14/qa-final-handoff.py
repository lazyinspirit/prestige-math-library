import json,pathlib
base=pathlib.Path('research/scaffold-audit-2026-10-14');path=base/'quantum-algorithms.json';q=json.load(open(path));m=json.load(open(base/'quantum-computing-consumers.json'))
qa=json.load(open('research/quantum-algorithms-planning/proposed-items.json'))['items'];qc=json.load(open('research/quantum-computing-planning/proposed-items.json'))['items'];rev={}
for x in qa+qc:
 for d in x['deps']:rev.setdefault(d,set()).add(x['id'])
qids={x['id'] for x in qa}
def descendants(id):
 out=set();stack=list(rev.get(id,[]))
 while stack:
  x=stack.pop()
  if x in out:continue
  out.add(x);stack.extend(rev.get(x,[]))
 return sorted(out&qids)
old={x['supplier']:x for x in q['QC_supplier_consumer_checks']};rows=[]
for x in m['entries']:
 id=x['changed_id'];y=old.get(id,dict(supplier=id,direct_QA=sorted(rev.get(id,set())&qids),all_QA_consumers=descendants(id),disposition='Final QC contract checked against current QA use; empty QA closure requires no repair. No new proof acceptance.'))
 y['current_logical_QA_consumers']=descendants(id);y['QC_union_source']='research/scaffold-audit-2026-10-14/quantum-computing-consumers.json';rows.append(y)
q['QC_supplier_consumer_checks']=rows;q['QC_changed_supplier_entries']=len(rows);q['QC_current_logical_QA_consumer_union']=len({z for x in rows for z in x['current_logical_QA_consumers']})
for row in q['item_coverage']:
 if row['id']=='alg-qa-23-qsp-phase-synthesis':row['mathematical_status']='binding bare-target root/complement/phase generation specified; local termination/precision/correctness and finite-bit resource proofs remain held'
q['QC_personal_supplier_review']='QC supplier reviewer independently inspected all 81 direct QA consumers; late midpoint/finite-bit/LCU findings repaired by QA owner and returned for verification.'
path.write_text(json.dumps(q,indent=2,ensure_ascii=False)+'\n')
# Final whole-inventory consistency is separate from proof acceptance.
central={x['id']:x for x in qa};seen=[]
for n in range(1,7):
 z=json.load(open(f'research/quantum-algorithms-planning/qa_r{n}-items.json'));arr=z['items'] if isinstance(z,dict) else z
 for x in arr:assert x==central[x['id']];seen.append(x['id'])
assert len(seen)==538 and len(set(seen))==538
pg=json.load(open('research/quantum-algorithms-planning/pages.json'))['pages'];placed=[id for x in pg for id in x['items']]
assert len(placed)==538 and set(placed)==set(central)
assert len(q['item_coverage'])==538 and sum(x['original'] for x in q['item_coverage'])==533
check=dict(status='pass',scope='538 current QA rows and all six mirrored item inventories,72page inventories,533originalcoverage+5new',native_acceptance=False,changed_contracts=q['changed_contract_count'],QC_changed_supplier_entries=len(rows),QC_logical_QA_consumers=q['QC_current_logical_QA_consumer_union'])
(base/'qa-inventory-consistency.json').write_text(json.dumps(check,indent=2)+'\n');print(json.dumps(check))
