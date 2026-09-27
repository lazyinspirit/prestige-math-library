from pathlib import Path
import json,collections
b=Path(__file__).parent;d=json.loads((b/'pair-inventory.json').read_text());pairs=d['pairs'];live={p['id']:p for p in json.load(open('research/plan-spec.json'))['pages']};nodes={}
for p in pairs:
 a=p['a_page_id'];bb=p['b_page_id'];assert a not in nodes and bb not in nodes and a not in live and bb not in live,(a,bb)
 nodes[a]=p['requires_new_a_pages'];nodes[bb]=p['b_requires'];assert p['b_requires']==[a]
 for q in p['requires_existing_a_pages']:assert q in live,(a,q)
for a,deps in nodes.items():
 for q in deps:assert q in nodes,(a,q)
seen=set();active=set()
def visit(a):
 assert a not in active,('cycle',a)
 if a in seen:return
 active.add(a)
 for q in nodes[a]:visit(q)
 active.remove(a);seen.add(a)
for a in nodes:visit(a)
# Full-SPGT alternative adds this edge instead of changing the restricted route.
nodes['bull-free-berge-perfection'].append('berge-decomposition-and-strong-perfect-graph-theorem');seen.clear();active.clear()
for a in nodes:visit(a)
out={'pairs':len(pairs),'new_page_ids':len(nodes),'categories':dict(collections.Counter(p['category'] for p in pairs)),'states':dict(collections.Counter(p['state'] for p in pairs)),'new_id_collisions':0,'unknown_listed_existing_pages':0,'abstract_pair_cycles':0,'full_spgt_alternative_cycles':0,'scope':'Checks the explicitly listed pair graph and existing-page IDs only. Incomplete internal prerequisite inventories and future rehome implementation remain gates; not a complete augmented-library dependency validation.'};(b/'pair-inventory-check.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
