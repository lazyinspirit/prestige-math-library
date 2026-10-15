from pathlib import Path
from datetime import datetime,timezone
import json,re
run='physics-td-qft-rpm-62-2026-10-14';r=Path('research');out=r/(run+'-owner-step4-td-round1');native=r/(run+'-step5-v2')
m=json.loads((out/'final-released-classification-and-proposals.json').read_text());scope=json.loads((r/(run+'-step5-scope.json')).read_text());groups=json.loads((r/(run+'-alpha-groups.json')).read_text());closure=json.loads((out/'expanded-released-consumer-dispositions.json').read_text());statepath=Path('.physics-autopilot')/run/'state.json';state=json.loads(statepath.read_text())
by={};pageby={}
for f in sorted(r.glob(run+'-batch-*.pages.json')):
 batch=f.name.removeprefix(run+'-batch-').removesuffix('.pages.json')
 for page in json.loads(f.read_text()):
  home={'batch':batch,'page':page['id'],'manifest':str(f),'stable_group':next((g['label'] for g in groups if batch in list(map(str,g['covers']))),None)};pageby[page['id']]=home
  for item in page.get('items',[])+page.get('examples',[]):
   id=item['id'] if isinstance(item,dict) else item;by.setdefault(id,[]).append(home)
frontier=json.loads((native/'frontier.json').read_text()) if (native/'frontier.json').exists() else None
packs=[]
if native.exists():
 for f in sorted(native.glob('*.json')):
  if not re.fullmatch(r'(initial|repeat|impact-(initial|repeat)(-pass-[0-9]+)?)-[0-9]+\.json',f.name):continue
  d=json.loads(f.read_text())
  if 'assignments' not in d:continue
  if d.get('run')!=run:continue
  assignments={str(u):[(x if isinstance(x,str) else x['id']) for x in ids] for u,ids in d['assignments'].items()}
  packs.append({'path':str(f),'phase':d['phase'],'round':d['round'],'assignment_ids':assignments,'closed_collection':(native/(f.stem+'-collected.json')).exists(),'certified':(native/('certification-'+d['phase']+'-'+str(d['round'])+'.json')).exists(),'frontier_ids':d.get('frontier_ids',[]),'tasks':{u:str(native/('step5-v2-'+d['phase']+'-r'+str(d['round'])+'-u'+u+'.task.md')) for u in assignments}})
def route(id):
 rows=[]
 for pack in packs:
  assigned=[u for u,ids in pack['assignment_ids'].items() if id in ids]
  isimpact=pack['phase'].startswith('impact-')
  eligible=isimpact and not assigned and id in pack['frontier_ids'] and frontier is not None and id in frontier['ids'] and not pack['closed_collection'] and not pack['certified']
  rows.append({'pack':pack['path'],'phase':pack['phase'],'round':pack['round'],'assigned_units':assigned,'task_files':[pack['tasks'][u] for u in assigned],'outside_authorship_pack_candidate':eligible,'permission_note':'Pack membership/unassigned status alone does not authorize writes: exact root grant, writer absence/nonoverlap and deferred collection still required.' if eligible else 'Assigned native owner or unavailable/unlicensed intake; private evidence only.'})
 return rows
ids=sorted(set(m['actual_rejected_ids'])|set(m['proposed_ids']))
entries=[]
for id in ids:
 homes=by.get(id,[]);p=out/'proposed'/(id+'.md');before=out/'observed-current'/(id+'.md');actual=id in m['actual_rejected_ids'];routes=route(id)
 entries.append({'id':id,'actual_rejected':actual,'role':'actual-rejected-subject' if actual else 'necessary-affected-consumer-edit','stable_manifest_homes':homes,'historical_group_reference':scope['by_item'].get(id),'round_native_ownership':routes,'current_native_round_assignment_known':bool(routes),'classification':m['classifications'].get(id),'private_candidate':str(p) if p.exists() else None,'preserved_before_source':str(before) if before.exists() else None,'preserved_before_basis':'Genuine Step4 frozen observations; not asserted identical to later native pack.before. Root must preserve exact legal-pack before bytes at handoff.', 'before_source_hash':None,'hash_note':'No hash computed by this owner; current original-carrier hash binding belongs to root/native engine. Judge ledger hash fields are preserved as judge observations only, not asserted as hashes of these archived bytes.','scientific_disposition':'false-positive-no-source-repair' if id in m['false_positive_ids'] else 'supplier-domain-repair-only' if id=='def-td-adiabatic-accessibility' else 'existing-frontier-candidate-no-new-item-required','native_creation_required':False,'proposal_entry_route':'native assigned adjudicator/impact owner must own and independently review, or exact root-authorized unassigned deferred impact intake when such a pack exists','evidence':{'actual_rows':str(out/'actual-judge-rows.json') if actual else None,'classification':str(out/'final-released-classification-and-proposals.json'),'consumer_dispositions':str(out/'expanded-released-consumer-dispositions.json'),'consumer_graph':str(out/'expanded-old-proposed-consumer-scope.json'),'source_reading':str(out/'primary-source-reading-receipt.json')}})
consumers=[{'id':x['id'],'manifest_homes':by.get(x['id'],[]),'native_ownership':route(x['id']),'scientific_disposition':x['disposition'],'evidence':str(out/'expanded-released-consumer-dispositions.json'),'same_owner_scientific_review_complete':True} for x in closure['items']]
pages=[{'path':x['path'],'home':pageby.get(Path(x['path']).stem),'evidence':str(out/'expanded-released-consumer-dispositions.json'),'review_complete':True} for x in closure['pages']]
observation={'observed_at_utc':datetime.now(timezone.utc).isoformat(),'state_source':str(statepath),'stage':state['stage'],'active_step5_dispatches':{k:v for k,v in state['dispatches'].items() if k.startswith('5') and not v.get('endedAt')},'step5_native_directory_exists':native.exists(),'frontier_source':str(native/'frontier.json') if frontier else None,'round_packs':[x['path'] for x in packs],'legal_intake_window_confirmed':False,'legal_window_reason':'No exact root handoff, writer-absence attestation and deferred collection state supplied. Unassigned pack candidates, if any, are conditional only.'}
index={'version':1,'run':run,'owner':'/root/resolve_step4_td','purpose':'Private exact manifest/native-pack routing, no new adjudication or scientific reaudit','observation':observation,'authority_sources':['WORKFLOW.md:203-239','briefs/step5-adjudicator.md:35','tools/physics-support/step5-workflow.mjs:270','tools/physics-support/step5-workflow.mjs:704','tools/physics-support/step5-owner-repair-handoffs.mjs'],'stable_group_source':str(r/(run+'-alpha-groups.json')),'stable_scope_source':str(r/(run+'-step5-scope.json')),'historical_tasks_are_round_authority':False,'native_batch_adjudication_note':'5.1 initial assignments are rejected rows partitioned by actual frozen frontier batch, with exact task per batch; alpha groups are only stable routing references. 5.2 impact has3 engine-generated disjoint lanes, not alpha-group ownership.','subjects_and_consumer_edits':entries,'affected_consumers':consumers,'affected_pages':pages,'currently_authorized_external_source_repairs':[],'private_proposals_existing_manifest_count':sum(bool(e['stable_manifest_homes']) and bool(e['private_candidate']) for e in entries),'native_new_item_creations_required':[],'root_must_bind_actual_hashes':True,'source_writes':False,'shared_writes':False,'hashes_computed':False,'native_files_mutated':False,'tests_run':False,'gates_run':False}
(out/'native-step5-routing-index.json').write_text(json.dumps(index,indent=2)+'\n')
print(json.dumps({'stage':state['stage'],'native_directory':native.exists(),'packs':observation['round_packs'],'mapped_subjects_and_consumer_edits':len(entries),'actual_rejected':sum(e['actual_rejected'] for e in entries),'private_candidates':sum(bool(e['private_candidate']) for e in entries),'consumer_count':len(consumers),'page_count':len(pages),'groups':sorted(set(h['stable_group'] for e in entries for h in e['stable_manifest_homes'])),'external_authorized_now':0}))
