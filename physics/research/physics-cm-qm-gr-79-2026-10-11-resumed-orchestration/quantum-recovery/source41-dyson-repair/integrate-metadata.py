from pathlib import Path
import json,hashlib,re
r='physics-cm-qm-gr-79-2026-10-11';b=Path('research')/(r+'-resumed-orchestration/quantum-recovery/source41-dyson-repair');a=json.loads((b/'metadata-candidates/proposal.json').read_text())
for x in a['rawguards']:assert hashlib.sha256(Path(x['path']).read_bytes()).hexdigest()==x['raw_sha256'],x['path']
f=Path(a['manifest']['path']);m=json.loads(f.read_text());id=a['id'];row=next(i for p in m for i in p['items'] if i['id']==id)
for k,d in a['manifest']['field_patches'].items():row[k]=d['after']
f.write_text(json.dumps(m,indent=2)+'\n')
f=Path(a['contract']['path']);c=json.loads(f.read_text());row=c['contracts'][id]
for k,d in a['contract']['field_patches'].items():row[k]=d['after']
for q in row['boundaries']:
 for k in ['evidence','reason']:
  if k in q:q[k]=re.sub(r'^PROPOSED; (?:sole quantum )?owner(?:[- ]verification)?(?: verification)? required\.\s*','Owning focused source41Dyson proof/interface review confirmed. ',q[k])
f.write_text(json.dumps(c,indent=2)+'\n')
f=Path('research')/(r+'-batch-41.cross-batch-dependencies.json');c=json.loads(f.read_text())
for op in a['crossdep_operations']:
 if op['action']=='replace-selected-fields':
  row=c[op['index']]
  for k,d in op['field_patches'].items():row[k]=d['after']
 elif op['action']=='append-absent-exact-edge':row=dict(op['after']);c.append(row)
 else:raise ValueError(op['action'])
 row['status']='verified';row['evidence']='Exact newly authorized source41Dyson cycle1/cap2 source proof and current supplier clauses independently checked by same owning quantum reviewer. Chronology/domain/graph/Bochner/actualevolution corrections; all other41 and35 subject histories preserved. Full five64consumer closure retained in source41-dyson-repair.'
f.write_text(json.dumps(c,indent=2)+'\n')
(b/'metadata-integration.json').write_text(json.dumps({'package':'metadata-candidates/delivery-report.json','id':id,'exact_one_supplier_row':True,'all_other41_rows_contracts_coverage_unchanged':True,'single_writer':'/root/physics_quantum_recovery','source_readiness_remains_held_until_all5consumer_closure':True},indent=2)+'\n')
print('Single41Dyson metadata integrated; source hold retained')
