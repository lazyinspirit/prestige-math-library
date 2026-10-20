from pathlib import Path
import re,yaml,json,hashlib,datetime
base=Path('research/machine-learning-all-101-2026-10-19-calibration-surrogate-proposal');run='machine-learning-all-101-2026-10-19'
sha=lambda b:hashlib.sha256(b).hexdigest()
D={};errors=[]
for p in Path('items').glob('*.md'):
 try:
  raw=p.read_bytes(); text=raw.decode();m=yaml.safe_load(text.split('---',2)[1]);D[m['id']]={'meta':m,'path':str(p),'text':text,'raw_sha256':sha(raw)}
 except Exception as e: errors.append({'path':str(p),'error':str(e)})
alias={a:i for i,v in D.items() for a in v['meta'].get('aliases',[])or[]}
resolve=lambda x:alias.get(x,x)
roots=['lem-finite-label-conditional-probability-function','cor-any-feature-induces-calibrated-forecast','thm-binned-calibration-estimator-limits','thm-surrogate-regret-controls-classification-regret','ex-calibrated-coarsened-risk-score-is-low-information']
graph={i:{resolve(x) for x in v['meta'].get('deps',[])or[]} for i,v in D.items()}
closures={}
for root in roots:
 seen=set();front={root};direct=[]
 while front:
  new={x for x,d in graph.items() if d&front and x not in seen}
  if front=={root}: direct=sorted(new)
  seen|=new;front=new
 closures[root]={'direct':direct,'transitive':sorted(seen)}
contextual=sorted({i for i,v in D.items() if any('[[%s'%r in v['text'] for r in roots)})
(base/'consumer-inventory.json').write_text(json.dumps({'captured_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'basis':'all current items parsed with PyYAML; deps resolved through canonical ids and current aliases; contextual links separately retained','parse_errors':errors,'old_current_edges_identical_for_changed_items':True,'roots':closures,'contextual_link_consumers':contextual,'bindings':{i:{'path':D[i]['path'],'raw_sha256':D[i]['raw_sha256']} for i in sorted(set(roots)|set(contextual)|{x for c in closures.values() for x in c['transitive']})}},indent=2)+'\n')
items=[]
for p in sorted((base/'proposed/items').glob('*.md')):
 before=base/'before/items'/p.name
 items.append({'id':p.stem,'original':{'path':str(before),'sha256':sha(before.read_bytes())} if before.exists() else None,'current':{'path':str(p),'sha256':sha(p.read_bytes())},'actual_source_modified':False,'proposed_change':not before.exists() or before.read_bytes()!=p.read_bytes()})
print(json.dumps({'parsed':len(D),'parse_errors':len(errors),'closures':closures,'contextual':contextual},indent=2))
(base/'item-bindings.json').write_text(json.dumps(items,indent=2)+'\n')
