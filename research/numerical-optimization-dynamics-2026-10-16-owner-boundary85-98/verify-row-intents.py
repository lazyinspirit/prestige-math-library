import json,re
from pathlib import Path
O=Path(__file__).parent
files=['contradictions/operations-final.json','templates96-98/operations.json','template-status-supplement-b91.json'];ops=[x for f in files for x in json.loads((O/f).read_text())];keys=set();issues=[]
for x in ops:
 k=(x['batch'],x['id'],x['case']);assert k not in keys,k;keys.add(k)
 file=Path(f'research/numerical-optimization-dynamics-2026-10-16-batch-{x["batch"]}.proof-contracts.json');d=json.loads(file.read_text());before=next(r for r in d['contracts'][x['id']]['boundaries'] if r['case']==x['case']);assert before==x['before'],('stale row',k)
 t=Path('items/'+x['id']+'.md').read_text();steps=set(re.findall(r'^\s*(\d+\.\d+)\s',t,re.M));a=x['after'];ev=a.get('evidence','')
 if a['status']=='checked':
  refs=[m.group(1) for m in re.finditer(r'\b(?:steps?\s+)?(\d+\.\d+)\b',ev,re.I) if re.match(r'steps?\s',m.group(0),re.I) or m.group(1) in steps]
  if not refs and not re.search('statement|definition|example|counterexample',ev,re.I):issues.append((k,'anchor absent'))
  for r in refs:
   if r not in steps:issues.append((k,'missing step',r))
for sub,guard in [('contradictions','source-final.json'),('templates96-98','source-fullbefore.json')]:
 for id,t in json.loads((O/sub/guard).read_text()).items():assert Path('items/'+id+'.md').read_text()==t,('stale source',id)
report={'rows':len(ops),'unique_keys':len(keys),'exact_current_row_preimages':len(ops),'literal_reference_issues':issues,'source_guard_sets':'Both final source guard sets exactly current at this invocation.','scope':'Read-only JSON/source equality and literal step existence only, not native proof acceptance or a gate; no hashes computed.'}
(O/'readonly-row-guard-inspection-final.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report));assert not issues
