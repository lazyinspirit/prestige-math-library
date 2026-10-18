import pathlib,json,collections,hashlib,shutil
R='non-ml-math-remaining-81-2026-10-18';O=pathlib.Path('research/'+R+'-owner-step5-original-finding-inventory')/'refresh-81-units';original=json.load(open(O/'original-concern-alert-inventory.json'));native=json.load(open(O/'native-outside-finding-pointers.json'));inputs=json.load(open(O/'successful-native-and-digest-inputs.json'));summary=json.load(open(O/'summary.json'));by=collections.defaultdict(lambda:{'original_observation_references':[],'native_outside_references':[]})
for n,x in enumerate(original):
 v=by[x['id']];v['original_observation_references'].append({'inventory_pointer':'/'+str(n),'digest':x['digest'],'pointer':x['digest_pointer'],'batch':x['source_batch'],'group':x['source_group'],'routing':x['routing']})
 for k in ['current_owning_batch','current_status_from_structured_source_observation','frozen_judge_verdicts','original_initial_assignments','formal_successful_native_item_reviews','ordinary_downstream_targets','source_guards_from_structured_evidence','existing_owner_work','reader_concern_admission_candidate']:v[k]=x[k]
for n,x in enumerate(native):
 ids=[x['id']] if x.get('id') else x.get('ids',[])
 for i in ids:
  v=by[i];v['native_outside_references'].append({'inventory_pointer':'/'+str(n),'report':x['report'],'receipt':x['receipt'],'pointer':x['pointer'],'unit':x['unit'],'kind':x['kind']})
  data=x if x.get('id')==i else x.get('named_object_statuses',{}).get(i,{})
  for k in ['current_owning_batch','current_status_from_structured_source_observation','frozen_judge_verdicts','original_initial_assignments','formal_successful_native_item_reviews','ordinary_downstream_targets','source_guards_from_structured_evidence','existing_owner_work','reader_concern_admission_candidate']:
   if k in data:v[k]=data[k]
objects=[]
for i,v in by.items():
 v={'id':i,**v};pub=(v.get('current_status_from_structured_source_observation') or {}).get('record') or {};status=pub.get('status');ordinary=v.get('ordinary_downstream_targets',[]);formal=v.get('formal_successful_native_item_reviews',[])
 if v.get('existing_owner_work') and not ordinary:v['next_owner_action']='Use existing named owner/proposal; do not duplicate.'
 elif ordinary and not formal:v['next_owner_action']='Retain exact findings for ordinary 5.2 target review; target presence is not closure.'
 elif formal:v['next_owner_action']='Assess actual native review against each exact original finding; item-review presence is not finding-specific closure.'
 elif status=='published':v['next_owner_action']='Focused ordinary published-owner review, not draft adjudication admission.'
 elif v.get('reader_concern_admission_candidate'):v['next_owner_action']='Potential existing kept-reader-concern admission after current unchanged-source guard and exact original inventory check; independent review first.'
 elif i in [x['id'] for x in original if x['subject_kind']=='run-page']:v['next_owner_action']='Root page/prose metadata review; no item queue inference.'
 elif v['native_outside_references']:v['next_owner_action']='Root independently assess actual native finding and strict v2 outside-object work admission if required; no scope or defect status is granted here.'
 else:v['next_owner_action']='Retain original observation while its assigned native initial work completes; owner checks finding coverage.'
 v['confirmed_defect_by_inventory']=False;objects.append(v)
notes=[]
def scan(v,ptr,report,receipt):
 if isinstance(v,dict):
  for k,w in v.items():scan(w,ptr+'/'+str(k),report,receipt)
 elif isinstance(v,list):
  for j,w in enumerate(v):scan(w,ptr+'/'+str(j),report,receipt)
 elif isinstance(v,str) and any(k in v.lower() for k in ['unassigned','reader concern','digest concern','outside-lane','outside lane']):notes.append({'report':report,'receipt':receipt,'pointer':ptr,'actual_note':v,'meaning':'Exact successful native structured note; no defect or closure is inferred.'})
for rr in inputs['initial']:
 a=json.load(open(rr['report']['path']));scan(a.get('repair_notes'),'/repair_notes',rr['report'],rr['receipt']);scan(a.get('ledger_updates'),'/ledger_updates',rr['report'],rr['receipt'])
pageids={x['id'] for x in original if x['subject_kind']=='run-page'}|{x['id'] for x in native if x.get('id') in ['affine-current-algebras-virasoro-and-sugawara']};pending=[x for x in objects if any(r['routing']=='kept-true-unassigned-reader-concern-admission-candidate-guard-required' for r in x['original_observation_references']) and not x.get('existing_owner_work') and not x.get('ordinary_downstream_targets')];pages=[x for x in objects if x['id'] in pageids];outside=[x for x in objects if x['native_outside_references']]
(O/'concise-owner-worklist.json').write_text(json.dumps({'run':R,'as_of':summary['observed_at'],'potential_new_kept_draft_reader_concern_admissions':pending,'page_concerns':pages,'native_outside_objects':outside,'all_observation_objects':objects,'ten_selected_published_negative_worklist':'research/'+R+'-owner-step5-original-finding-inventory/ten-selected-published-negative-owner-worklist.json','note':'All original observations and exact successful native pointers remain visible. No finding is confirmed and no routing target is treated as defect closure. Current source guards are structured observations; conditional admission requires root current comparison.'},indent=2,ensure_ascii=False)+'\n');(O/'native-deferred-reader-concern-notes.json').write_text(json.dumps(notes,indent=2,ensure_ascii=False)+'\n');(O/'build-inventory.py').write_text(pathlib.Path('/tmp/step5-finding-inventory.py').read_text());(O/'build-concise-worklist.py').write_text(pathlib.Path('/tmp/step5-inventory-concise.py').read_text());print({'observation_objects':len(objects),'potential_new_draft_admission_objects_excluding_existing_owners_and_downstream':len(pending),'page_objects':len(pages),'native_outside_objects':len(outside),'exact_native_deferred_note_pointers':len(notes)})
