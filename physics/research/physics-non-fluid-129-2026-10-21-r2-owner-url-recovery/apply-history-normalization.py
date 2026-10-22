from pathlib import Path
import json,hashlib,datetime,copy
run='physics-non-fluid-129-2026-10-21-r2';b=Path('research')/(run+'-owner-url-recovery');rows=[]
for n in [47,49,52,54,75]:
 p=Path('research')/(run+f'-batch-{n}.coverage.json');raw=p.read_bytes();a=b/'before'/p;a.parent.mkdir(parents=True,exist_ok=True);assert not a.exists();a.write_bytes(raw);old=json.loads(raw);d=copy.deepcopy(old);operations=[]
 if n==47:d['historical_source_search_history']=d.pop('source_search_history');operations.append({'kind':'history-field-rename','before':'source_search_history','current':'historical_source_search_history'})
 if n==54:d['historical_source_resolution_history']=d.pop('source_resolution_history');operations.append({'kind':'history-field-rename','before':'source_resolution_history','current':'historical_source_resolution_history'})
 if n in [49,52,75]:
  index=1 if n==49 else 0;c=d['candidate_dispositions'][index];before=c['disposition'];new={49:'not-selected-retrieval-failed',52:'not-selected-incomplete-access',75:'not-selected-alternate-copy'}[n];assert before.startswith('not-used-');c['historical_disposition']=before;c['disposition']=new;operations.append({'kind':'unused-candidate-enum-normalization','candidate_index':index,'before':before,'current':new,'prior_descriptor_retained_as':'historical_disposition'})
 assert old['pages']==d['pages'],'active source/page/harvest changed'
 reverse=copy.deepcopy(d)
 for op in reversed(operations):
  if op['kind']=='history-field-rename':reverse[op['before']]=reverse.pop(op['current'])
  else:
   c=reverse['candidate_dispositions'][op['candidate_index']];c['disposition']=c.pop('historical_disposition')
 assert reverse==old,'any historical information changed'
 # Every attempted URL, outcome, search, source attribution and descriptor is retained.
 out=json.dumps(d,indent=2)+'\n';tmp=p.with_name(p.name+'.owner-url-tmp');assert hashlib.sha256(p.read_bytes()).hexdigest()==hashlib.sha256(raw).hexdigest();tmp.write_text(out);tmp.replace(p)
 rows.append({'batch':n,'path':str(p),'before':{'path':str(a),'sha256':hashlib.sha256(raw).hexdigest()},'current_sha256':hashlib.sha256(out.encode()).hexdigest(),'operations':operations,'all_active_source_and_harvest_objects_identical':True,'exact_full_metadata_reconstruction_by_reversing_only_the_recorded_key_enum_normalizations':True})
(b/'applied-history-normalization-bindings.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'root_authorization':'Root explicitly authorized5coverage files47/49/52/54/75; native stopped and lock gone; source52child proof/contracts disjoint.','files':rows},indent=2)+'\n');print('Normalized5history-only metadata files; all active sources/harvests byte-value unchanged.')
