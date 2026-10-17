from pathlib import Path
import json,copy,re
P=Path(__file__).resolve().parent;R='numerical-optimization-dynamics-2026-10-16'
notes=json.loads((P/'template-item-notes.json').read_text());diag=json.loads(Path('research',R+'-owner-boundary-diagnostic-recovery-20261016T111149897777Z/full-report.json').read_text());flagged={(r['id'],r['case']) for t in diag['templates'] for r in t['rows']}
operations=[];covered=[];carriers=[]
for b in range(29,43):
 path=Path('research',R+f'-batch-{b}.proof-contracts.json');before=path.read_bytes();doc=json.loads(before);pro=copy.deepcopy(doc)
 for id,c in doc['contracts'].items():
  if id not in notes:continue
  source=Path('items',id+'.md');dst=P/'template-source-context'/source;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(source.read_bytes())
  for i,row in enumerate(c.get('boundaries',[])):
   if (id,row['case']) not in flagged:continue
   # One complete case-group mapping is explicitly permitted; retain status and record concrete outcomes/limits in that item-specific mapping.
   after=copy.deepcopy(row);field='evidence' if row['status']=='checked' else 'reason';after[field]=row['case']+' case: '+notes[id]
   for key in ['reviewed','template_review']:after.pop(key,None)
   pro['contracts'][id]['boundaries'][i]=after
   operations.append(dict(file=str(path),pointer=['contracts',id,'boundaries',i],before=row,after=after,source=str(source),item_specific_case_group=notes[id],root_binding_required=False));covered.append((id,row['case']))
 if pro!=doc:
  carriers.append(str(path))
  for prefix,data in [('before',before),('proposed',(json.dumps(pro,indent=2,ensure_ascii=False)+'\n').encode())]:
   dst=P/'templates'/prefix/path;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(data)
(P/'templates').mkdir(exist_ok=True)
(P/'templates/proposal.json').write_text(json.dumps(dict(run=R,status='research-template-proposal-partial',reviewed_items=list(notes),covered_template_rows=len(covered),total_assigned_template_rows=957,field_operations=operations,carriers=carriers,source_writes=False,canonical_applied=False,adjudication_hashes=False,limits='Only listed source-read item groups are prepared. Every unlisted template row remains pending; no full template-closure claim. Preserve full before/history; root will independently review and reconcile after final source phase numbering.'),indent=2)+'\n')
print(dict(items=len(notes),template_rows=len(covered),carriers=len(carriers)))
