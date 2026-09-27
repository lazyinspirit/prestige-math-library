from pathlib import Path
import json,re,yaml
b=Path(__file__).parent; ids=set(json.loads((b/'ownership.json').read_text()))|{r['id'] for r in json.loads((b/'new-item-registry.json').read_text())}|{'lem-pasted-squares-commute'}
p=Path('research/plan-spec.json');s=p.read_text();edits=[];changes=[]
for m in re.finditer(r'^        \{\n          "id": "([^"]+)"',s,re.M):
 id=m[1]
 if id not in ids:continue
 q=Path('items')/(id+'.md')
 if not q.exists():continue
 t=q.read_text();fm=yaml.safe_load(re.match(r'^---\n(.*?)\n---',t,re.S)[1]);old,n=json.JSONDecoder().raw_decode(s[m.start():].lstrip());rec=dict(old)
 for k in ['title','kind','deps']:
  if k in fm:rec[k]=fm[k]
 for k in ['justified_by','forward_refs','external_refs','provenance','sources','proved_here','axiom_strength']:
  if k in rec or k in fm:
   if k in fm:rec[k]=fm[k]
   else:rec.pop(k,None)
 if 'strategy' in rec:
  strategy=fm.get('proof_strategy')
  if strategy and strategy not in ['direct','induction','contradiction','construction']:rec['strategy']=strategy
  else:
   pm=re.search(r'(?ms)^\*\*Proof technique:\*\*\s*(.*?)(?:\n\n|\n\d)',t)
   if pm:rec['strategy']=pm[1].strip()
 if 'statement' in rec:
  sm=re.search(r'(?ms)^## (?:Statement(?: refuted)?|Definition|Example|Remark)\s*\n(.*?)(?=^## |\Z)',t)
  if sm:rec['statement']=sm[1].strip()
 if rec!=old:
  start=m.start();end=start+8+n;edits.append((start,end,'\n'.join('        '+line for line in json.dumps(rec,ensure_ascii=False,indent=2).splitlines())));changes.append({'id':id,'fields':[k for k in set(old)|set(rec) if old.get(k)!=rec.get(k)]})
for start,end,v in reversed(edits):s=s[:start]+v+s[end:]
d=json.loads(s)
reqs={'pure-pairs-forests-and-path-antipath-classes':['modules-substitution-and-prime-graphs'],'kolmogorov-complexity-and-algorithmic-randomness':['measure-preserving-transformations-and-poincare-recurrence'],'stable-unstable-manifolds-and-morse-smale-transversality':['the-spectral-theorem-and-singular-value-decomposition'],'geodesics-the-exponential-map-completeness-and-hopf-rinow':['geometric-actions-svarc-milnor-and-growth-examples','classification-of-covering-spaces'],'geodesics-the-exponential-map-completeness-and-hopf-rinow-examples':['hyperbolic-spaces-and-hyperbolic-groups']}
lookup={x['id']:x for x in d['pages']}
for id,needs in reqs.items():
 page=lookup[id]
 for need in needs:
  if need not in lookup:print('UNKNOWN page',need);continue
  if need not in page['requires']:
   at=s.index('"id": "'+id+'"');m=re.search(r'"requires": \[.*?\]',s[at:],re.S);assert m;old=m[0];arr=json.loads(old.split(':',1)[1]);arr.append(need);v='"requires": '+json.dumps(arr,ensure_ascii=False);s=s[:at+m.start()]+v+s[at+m.end():]
json.loads(s);p.write_text(s);(b/'plan-sync-changes.json').write_text(json.dumps(changes,indent=2)+'\n');print('synced',len(changes),'item records')
