#!/usr/bin/env python3
"""Scoped research structure checks; does not certify mathematical proofs."""
import json
import re
from pathlib import Path
R=Path(__file__).resolve().parent
for p in R.rglob('*.json'):
    json.loads(p.read_text())
page=json.loads((R/'scaffold/proposed-inventory-and-checks.json').read_text())
rows=page['pages']; by={p['page']:p for p in rows}
assert len(by)==len(rows)
assert all(0<p['budget']<=100 for p in rows)
assert all(dep in by and by[dep]['role']=='A' for p in rows for dep in p['requires'])
def topo(nodes,dependencies):
    done=set(); order=[]
    while len(done)<len(nodes):
        ready=[n for n in nodes if n not in done and set(dependencies[n])<=done]
        assert ready, 'unresolved target or cyclic dependency'
        done.update(ready);order+=ready
    return order
page_order=topo(list(by),{k:v['requires'] for k,v in by.items()})
anc={}
for k in page_order:
    anc[k]=set(by[k]['requires'])
    for dep in by[k]['requires']:anc[k]|=anc[dep]
inv=json.loads((R/'scaffold/expanded-item-inventory.json').read_text());items={i['id']:i for i in inv['items']}
assert len(items)==inv['count']==len(inv['items'])
for i in items.values():
    assert i['home'] in by and by[i['home']]['role']=='A'
    assert (R/i['argument'].split('#')[0]).is_file()
    for dep in i.get('deps',[]):
        assert dep in items
        if i['domain']=='mathematics':assert items[dep]['domain']=='mathematics', (i['id'],dep)
        assert items[dep]['home']==i['home'] or items[dep]['home'] in anc[i['home']], (i['id'],i['home'],dep,items[dep]['home'])
item_order=topo(list(items),{k:v.get('deps',[]) for k,v in items.items()})
c=json.loads((R/'sr-em-supplier-contract.json').read_text());sup={s['id']:s for s in c['suppliers']};position={s:i for i,s in enumerate(c['supplier_first_order'])}
assert set(position)==set(sup)
for s in sup.values():
    assert s['id'] in items
    assert s['deps']==items[s['id']]['deps']
    assert f"## {s['section']} " in (R/s['argument'].split('#')[0]).read_text()
    for dep in s['deps']:
        assert position[dep]<position[s['id']]
        if s['domain']=='mathematics':assert sup[dep]['domain']=='mathematics'
ledger=json.loads((R/'closure-ledger.json').read_text())
assert {e['label'] for e in ledger['entries']}=={f'M{i:02}' for i in range(1,27)}
assert not ledger['required_residuals'] and ledger['complete'] and inv['overall_complete'] and page['complete']
canonical_markdown=[R/'README.md',R/'audit-expansion-report.md',*(R/'scaffold').glob('*.md')]
for p in canonical_markdown:
    for target in re.findall(r'\]\(([^)]+)\)',p.read_text()):
        if target.startswith(('http:','https:','#')):continue
        target=target.split('#')[0]
        assert not target or (p.parent/target).exists(), (p,target)
result=dict(date='2026-10-03',scope='Research JSON/page and item supplier DAG/cap/contract/coverage only; no proof certification',exit_code=0,pages=len(rows),A=sum(p['role']=='A' for p in rows),B=sum(p['role']=='B' for p in rows),max_budget=max(p['budget'] for p in rows),expanded_interfaces=len(items),closure_labels=len(ledger['entries']),contract_suppliers=len(sup),checks=['all owned JSON parses','page and explicit item dependencies resolve/acyclic','no B suppliers; all budgets<=100','every local item supplier home is same or earlier prerequisite A page','mathematical suppliers have no physical postulate dependencies','contract supplier-first order/exact item agreement/S sections resolve','all M01–M26 preserved; no required unresolved prerequisite IDs','all local canonical/current Markdown links resolve'],not_checked=['independent whole-framework proof certification','production item gates','primary empirical measurements'],page_topological_order=page_order,item_topological_order=item_order)
(R/'research-structure-check.json').write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n')
print(json.dumps({k:result[k] for k in ['exit_code','pages','A','B','max_budget','expanded_interfaces','closure_labels','contract_suppliers']}))
