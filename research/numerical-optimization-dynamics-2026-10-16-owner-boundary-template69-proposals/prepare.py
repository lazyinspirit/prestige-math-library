import json,copy,difflib,sys
from pathlib import Path
D=Path(__file__).parent;ROOT=Path.cwd();sys.path.insert(0,str(D));from groundings import G
p=Path('research/numerical-optimization-dynamics-2026-10-16-batch-69.proof-contracts.json');raw=p.read_text();x=json.loads(raw);y=copy.deepcopy(x)
native=json.load(open('research/numerical-optimization-dynamics-2026-10-16-owner-boundary-diagnostic-recovery-20261016T111149897777Z/full-report.json'))
keys={(r['id'],r['case']) for c in native['templates'] for r in c['rows'] if r['id'] in x['contracts']};skip=('alg-lipschitz-midpoint-box-lower-bound','empty')
ops=[];observations=[];guards=[]
# An explicit scalar instance/general scalar restriction is admitted in each of these,
# so replace the generic no-dimension-one row by an actual source-grounded check.
scalar_exclusions={'def-mccormick-bilinear-box-envelope','lem-mccormick-envelope-equals-graph-convex-hull'}
for id,c in y['contracts'].items():
 assert id in G
 source=Path('items')/(id+'.md');snap=D/'source-before'/source
 assert source.read_bytes()==snap.read_bytes(),f'STALE {source}'
 guards.append({'id':id,'source':str(source),'snapshot':str(snap),'raw_bytes':len(source.read_bytes()),'exact_pre_read_snapshot_equals_current':True,'hashes_computed':False})
 observations.append({'id':id,'source':str(source),'entire_current_body_read':True,'case_mapping':G[id],'native_template_cases':sorted(case for who,case in keys if who==id)})
 for i,row in enumerate(c.get('boundaries',[])):
  k=(id,row['case'])
  if k not in keys or k==skip:continue
  before=copy.deepcopy(row)
  checked=(row['case']=='one' and id not in scalar_exclusions) or (id=='lem-mccormick-envelope-equals-graph-convex-hull' and row['case']=='zero') or (id=='thm-uniform-constraint-margin-enables-empty-box-detection' and row['case'].startswith('iff-')) or (row['case']=='empty' and id in {'alg-finite-candidate-gp-acquisition-search','thm-adaptive-finite-candidate-gp-search-posterior-correct','thm-finite-candidate-gp-search-terminates'})
  if checked:
   row['status']='checked';row.pop('reason',None);field='evidence'
  else:field='reason' if row['status']=='not_applicable' else 'evidence'
  row[field]=f"{row['case']} case in {id}: {G[id]}"
  ops.append({'file':str(p),'path':['contracts',id,'boundaries',i],'before':before,'proposed':copy.deepcopy(row),'research_origin':str(D),'source':str(source)})
(D/'before').mkdir(exist_ok=True);(D/'proposed').mkdir(exist_ok=True)
(D/'before'/p.name).write_text(raw);new=json.dumps(y,indent=2,ensure_ascii=False)+'\n';(D/'proposed'/p.name).write_text(new)
(D/'batch69.diff').write_text(''.join(difflib.unified_diff(raw.splitlines(True),new.splitlines(True),fromfile='before/'+p.name,tofile='proposed/'+p.name)))
(D/'operations.json').write_text(json.dumps(ops,indent=2,ensure_ascii=False)+'\n');(D/'item-case-review.json').write_text(json.dumps(observations,indent=2,ensure_ascii=False)+'\n');(D/'rawguards.json').write_text(json.dumps(guards,indent=2,ensure_ascii=False)+'\n')
(D/'completion.json').write_text(json.dumps({'status':'research-proposal-ready-unapplied','batch':69,'source_subjects_read':len(observations),'native_template_rows':len(keys),'proposed_template_rows':len(ops),'status_corrections':sum(o['before']['status']!=o['proposed']['status'] for o in ops),'excluded_keys':[{'id':skip[0],'case':skip[1],'owner':'/root/num_ledger_91_99','reason':'Already source-read contradiction/anchor operation retained in owner-step2-boundaries-57-70/proposal-templates-progress-r8.json; do not duplicate.'}],'preserved_other_boundary_rows':sum(len(c.get('boundaries',[])) for c in x['contracts'].values())-len(ops),'unresolved_source_gaps_found':[],'new_native_acceptance_claim':False,'canonical_writes':0,'hashes_computed':0,'adjudication_bindings':0,'gates_run':0,'root_actions':['Independently read exact proposed rows and source observations','Integrate disjoint same-owner contradiction row','Apply accepted per-row guards without replacing unrelated fields','Own current hashes/adjudication and actual diagnostics']},indent=2)+'\n')
assert len(ops)==114
print(json.dumps({'subjects_read':len(observations),'template_rows':len(keys),'row_operations':len(ops),'status_corrections':sum(o['before']['status']!=o['proposed']['status'] for o in ops),'owned_elsewhere':list(skip)}))
