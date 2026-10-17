import json
from pathlib import Path
from datetime import datetime,timezone
O=Path('research/numerical-optimization-dynamics-2026-10-16-owner-current-ledger-schema-repair');plan=json.loads((O/'decision-rebase-plan.json').read_text());mapping=plan['mapping'];successors=json.loads((O/'successors.json').read_text());currentlines=Path('research/defect-ledger.jsonl').read_text().splitlines();rows=[json.loads(l) for l in currentlines];byid={r['defect_id']:r for r in rows}
for r in successors:assert byid[r['defect_id']]==r,('native append not exact',r['defect_id'])
replacements=[]
for file in plan['files']:
 p=Path(file);before=(O/'before'/p).read_text();assert p.read_text()==before,('concurrent decision change',file)
 old=json.loads(before);new=json.loads(before);count=0
 for d in new['decisions']:
  ids=d.get('defect_ids',[]);d['defect_ids']=[mapping.get(x,x) for x in ids];count+=sum(x in mapping for x in ids)
 raw=before
 for oldid,newid in mapping.items():raw=raw.replace(json.dumps(oldid),json.dumps(newid))
 assert json.loads(raw)==new,'replacement escaped defect_ids'
 # Verify every field except defect_ids is identical, including evidence/verdict/confidence.
 for a,b in zip(old['decisions'],new['decisions']):assert {k:v for k,v in a.items() if k!='defect_ids'}=={k:v for k,v in b.items() if k!='defect_ids'}
 p.write_text(raw);dest=O/'after'/p;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(raw)
 replacements.append({'path':file,'defect_id_replacements':count,'only_defect_ids_changed':True})
# Exact pre-existing bytes stay intact except the two explicitly authorized role normalizations.
original=(O/'before/research/defect-ledger.jsonl').read_text().splitlines();changed=[]
for n,line in enumerate(original):
 if line==currentlines[n]:continue
 a=json.loads(line);b=json.loads(currentlines[n]);assert a['defect_id'] in list(mapping)[:2]
 stripped={k:v for k,v in b.items() if k not in ['historical_caught_by_role','root_mechanical_schema_normalization']}
 assert stripped==dict(a,caught_by_role='group-alpha');assert b['historical_caught_by_role']==a['caught_by_role'];changed.append(a['defect_id'])
assert len(changed)==2
superseded={id for r in rows for id in r.get('supersedes',[])}
for r in successors:
 oldid=r['supersedes'][0];assert oldid in superseded and r['defect_id'] not in superseded;assert r['run']==byid[oldid]['run'] and r['subject']==byid[oldid]['subject'];assert r['caught_by_role']=='group-alpha'
receipt={'at':datetime.now(timezone.utc).isoformat(),'authority':'Root explicit mechanical route approval','ledger':'research/defect-ledger.jsonl','full_before':str(O/'before/research/defect-ledger.jsonl'),'original_rows_changed':changed,'role_change_only':'caught_by_role alpha-batch-93 -> group-alpha; historical_caught_by_role and root mechanical provenance added. Exact original native row bytes retained in before/role-rows.','successors':[{'old':r['supersedes'][0],'new':r['defect_id'],'subject':r['subject'],'subclass':r['subclass'],'location':r['location']} for r in successors],'native_append':{'command':'node tools/defect-ledger.mjs append --file '+str(O/'successors.json')+' --ledger research/defect-ledger.jsonl --no-render','exit_code':0,'stdout':'defect-ledger: appended 5 row(s) to research/defect-ledger.jsonl (18990 total)','serialized_native_append':True,'rendered':False},'decision_files':replacements,'six_exact_decision_id_references_updated':sum(x['defect_id_replacements'] for x in replacements)==6,'severity_disposition_evidence_preserved':True,'all_other_original_ledger_lines_byteidentical':True,'successors_active_same_run_subject':True,'hashes_computed':False,'gates_run':False,'reports_modified':False,'source_items_modified':False,'native92_yaml_diagnostic':{'path':'items/thm-cir-lamperti-scheme-converges-in-probability.md','currently_resolved':True,'verification':'Repository pathway-lib split/yaml parse succeeded on current frontmatter; locator is single-quoted. No YAML/source edit made.'},'remaining_root_work':'Generated ledger view deliberately unchanged by --no-render; root owns any required later render/bindings/checks.'}
(O/'receipt.json').write_text(json.dumps(receipt,indent=2,ensure_ascii=False)+'\n');print(json.dumps({'normalized_roles':2,'appended_successors':5,'decision_files':len(replacements),'id_references':sum(x['defect_id_replacements'] for x in replacements),'receipt':str(O/'receipt.json')}))
