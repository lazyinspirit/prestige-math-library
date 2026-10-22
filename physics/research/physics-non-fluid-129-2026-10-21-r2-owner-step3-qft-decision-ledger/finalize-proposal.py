import json,hashlib
from pathlib import Path
D=Path('research/physics-non-fluid-129-2026-10-21-r2-owner-step3-qft-decision-ledger');p=D/'proposal.json';d=json.loads(p.read_text())
for k in ['exact_new','add_fact']:
 d['pending_scientific_source_proposal'][k]=d['pending_scientific_source_proposal'][k].replace('\\\\','\\')
for id in d['pending_scientific_source_proposal']['root_metadata_proposal']['add_deps_roles_mathematical_premise']:
 q=Path('items')/(id+'.md');raw=q.read_bytes();d['guards'][str(q)]=hashlib.sha256(raw).hexdigest();a=D/'evidence'/q;a.parent.mkdir(parents=True,exist_ok=True);a.write_bytes(raw)
for row in d['new_observation_ledger_rows_proposed']:
 if row['row']['batch']=='67':row['row']['same_repair_as']=row['row'].pop('recurrence_of')
p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
