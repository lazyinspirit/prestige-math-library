from pathlib import Path
import json,re,yaml
b=Path(__file__).parent
fm=lambda p:yaml.safe_load(re.match(r'^---\n(.*?)\n---',Path(p).read_text(),re.S)[1])
pages={p['id']:list(p['requires']) for p in json.load(open('research/plan-spec.json'))['pages']}
for p in json.load(open(b/'pair-inventory.json'))['pairs']:
 pages[p['a_page_id']]=p['requires_new_a_pages']+p['requires_existing_a_pages'];pages[p['b_page_id']]=p['b_requires']
recorded_homes=json.load(open(b/'final-item-homes.json'));page_ids={p:fm(p)['page'] for p in {p for hs in recorded_homes.values() for p in hs}};homes={i:[page_ids[p] for p in hs] for i,hs in recorded_homes.items()}
group= fm('library/group-theory/socles-and-the-onan-scott-landscape.md')['items'][:12]
graph=['def-bull-graph','def-bull-free-graph','prop-bull-free-graphs-are-complement-invariant','def-hole-antihole-and-odd-hole','def-perfect-graph-for-the-bull-route','lem-replicating-a-vertex-of-a-perfect-graph-preserves-perfection','thm-lovasz-perfect-graph-criterion-and-complement-invariance']
moves={**dict.fromkeys(group,'primitive-minimal-normal-socle-foundations'),**dict.fromkeys(graph,'bull-hole-and-perfection-interfaces'),'ex-affine-type-agl-one-p':'primitive-minimal-normal-socle-foundations-examples','ex-two-regular-minimal-normal-subgroups':'primitive-minimal-normal-socle-foundations-examples','cex-the-five-cycle-is-bull-free-but-not-perfect':'bull-hole-and-perfection-interfaces-examples'}
for i,h in moves.items():homes[i]=[h]
cache={}
def closure(h,stack=()):
 assert h not in stack,('cycle',h,stack)
 if h in cache:return cache[h]
 c={h}
 for dep in pages[h]:c|=closure(dep,stack+(h,))
 cache[h]=c;return c
errors=[]
for i,h in moves.items():
 allowed=closure(h)
 for dep in fm('items/'+i+'.md').get('deps',[]):
  if not allowed.intersection(homes[dep]):errors.append({'item':i,'future_home':h,'dep':dep,'dep_homes':homes[dep]})
out={'simulated_rehomes':len(moves),'errors':errors,'scope':'Checks declared item dependency homes for the exact 22 proposed existing-item rehomes against listed future and current page prerequisites; makes no live moves or complete source-gated proof claim.'};(b/'rehome-plan-check.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out));assert not errors
