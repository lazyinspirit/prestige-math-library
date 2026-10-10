import json,copy
from pathlib import Path
r=Path(__file__).parent;run='physics-em-sr-40-2026-10-08';proposal=json.loads((r/f'{run}-piecewise-proper-time-proposal.json').read_text());files={p:json.loads(p.read_text()) for p in r.glob(run+'-batch-*.pages.json')};pages={page['id']:(p,page) for p,ps in files.items() for page in ps};items={x['id']:(page,x) for _,page in pages.values() for x in page['items']};new={}
for row in proposal['exact_metadata_changes']:
 id=row['id'];x=copy.deepcopy(row['after']);home=row['after_home']['page'];page=pages[home][1]
 if id in items:
  oldpage,old=items[id]
  if oldpage['id']==home:oldpage['items'][oldpage['items'].index(old)]=x
  else:oldpage['items'].remove(old);new[id]=x
 else:new[id]=x
page=pages['sr-worldlines-and-clocks'][1]
def insert(id,after):
 x=new.pop(id);idx=next(i for i,v in enumerate(page['items']) if v['id']==after);page['items'].insert(idx+1,x)
insert('lem-sr-weak-piecewise-causal-integrability','def-sr-regular-causal-curve-and-worldline')
insert('def-sr-piecewise-proper-time','def-sr-proper-time')
insert('lem-sr-piecewise-proper-time-reparametrization-invariance','def-sr-piecewise-proper-time')
assert not new,new
for p,ps in files.items():
 if json.loads(p.read_text())!=ps:p.write_text(json.dumps(ps,ensure_ascii=False,indent=2)+'\n')
print('integrated weak-piecewise suppliers/home move and nine existing interfaces; readiness untouched')
