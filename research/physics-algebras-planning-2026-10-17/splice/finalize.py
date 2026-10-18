"""Reduce only new reading edges; preserve the entire prerequisite closure."""
import json,hashlib
from pathlib import Path
S=Path(__file__).resolve().parent;R=S.parents[2]
ids=set(json.loads((S/'pages.json').read_text()))
planpath=R/'research/plan-spec.json';p=json.loads(planpath.read_text());by={x['id']:x for x in p['pages']}
def closure(i):
 seen=set();todo=list(by[i].get('requires',[]))
 while todo:
  j=todo.pop()
  if j not in seen:seen.add(j);todo+=by[j].get('requires',[])
 return seen
before={i:closure(i) for i in ids}
removed=0
for i in ids:
 page=by[i];req=page.get('requires',[])
 reduced=[j for j in req if not any(j in closure(k) for k in req if k!=j)]
 removed+=len(req)-len(reduced);page['requires']=reduced
assert all(closure(i)==before[i] for i in ids)
planpath.write_text(json.dumps(p,indent=2,ensure_ascii=False)+'\n')
# Combine the algebraic Clifford foundations and finite CAR comparison in one branch.
path=R/'library/quantum-algebra-and-representation-theory/_pathway.md'
t=path.read_text();start=t.index('  - part: branch-3');end=t.index('  - part: branch-4',start)
car='car-algebras-majorana-generators-and-clifford-comparison'
block=t[start:end];t=t[:start]+t[end:]
old='"pin-spin-and-clifford-module-representations"]'
assert old in t;t=t.replace(old,'"pin-spin-and-clifford-module-representations", "'+car+'"]')
start=t.index('\n## branch-3');end=t.index('\n## branch-4',start);t=t[:start]+t[end:]
path.write_text(t)
(S/'reading-edge-reduction.json').write_text(json.dumps({'removed_redundant_direct_edges':removed,'all_100_prerequisite_closures_preserved':True},indent=2)+'\n')
print('Removed',removed,'redundant reading edges; prerequisite closures preserved.')
