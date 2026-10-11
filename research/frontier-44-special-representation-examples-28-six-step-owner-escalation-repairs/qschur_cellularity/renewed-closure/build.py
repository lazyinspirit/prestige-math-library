from pathlib import Path
import json,hashlib,datetime
base=Path('research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/qschur_cellularity');out=base/'renewed-closure';packet=json.load(open(base/'escalation-resolution-packet.json'));run=packet['run'];now=datetime.datetime.now(datetime.timezone.utc).isoformat();mapping={'f44-six-b13-3a-finding-def-type-a-q-schur-algebra-and-weyl-modules':'f44-six-b13-owner-integral-qschur-cellularity-fixed','f44-six-b14-3a-schur-cellularity':'f44-six-b14-owner-integral-qschur-cellularity-fixed','f44-six-step-b15-3a-q-schur-foundation':'f44-six-b15-owner-integral-qschur-cellularity-fixed'}
ledger=[json.loads(l) for l in open('research/defect-ledger.jsonl') if l.strip()];seen={r['defect_id'] for r in ledger};assert not (set(mapping.values()) & seen)
for old,new in mapping.items():
 matches=[r for r in ledger if r['defect_id']==old];assert matches;assert all(r['run']==run and r['subject']=='def-type-a-q-schur-algebra-and-weyl-modules' for r in matches)
# reuse source/construction/consumer guards; compare hashes only, no mathematical tests
checks=json.load(open(base/'consumer-checks.json'));assert len(checks['rows'])==68
sourceguards=json.load(open(base/'closure-current-hashes.json'));currency=[]
for r in sourceguards:
 h=hashlib.sha256(Path(r['path']).read_bytes()).hexdigest();currency.append({'path':r['path'],'recorded_raw_sha256':r['raw_sha256'],'current_raw_sha256':h,'unchanged':h==r['raw_sha256']})
consumercurrency=[{'id':r['id'],'path':r['path'],'recorded_raw_sha256':r['raw_sha256'],'current_raw_sha256':hashlib.sha256(Path(r['path']).read_bytes()).hexdigest()} for r in checks['rows']]
# Native/root metadata edits can change hashes; preserve original guards and disclose stale instead of silently recertifying
batch={};decisions=[]
for r in packet['obligations']:
 d=json.loads(json.dumps(r['proposed_native_decision']));d['defect_ids']=[mapping.get(i,i) for i in d.get('defect_ids',[])];d['owner_resolution']+=' Metadata-only followup uses a new unique fixed ledger ID superseding the earlier same-run/same-subject open row; every original frozen observation is unchanged. repair_confidence1 records the actual previously completed specific construction, not probability1 or a new independent audit.';decisions.append(d);g=batch.setdefault(str(r['batch']),{'version':1,'run':run,'group':'batch-'+str(r['batch']),'decisions':[]});g['decisions'].append(d)
newrows=[]
for r in packet['ledger_proposals']:
 old=r['defect_id'];row=json.loads(json.dumps(r['proposed_append_only_closed_row']));row['defect_id']=mapping[old];row['supersedes']=[old];row['at']=now;row['adjudication_ref']=[{'path':x['original_decision_file'],'obligation':x['obligation']} for x in packet['obligations'] if mapping[old] in next(d['defect_ids'] for d in decisions if d['obligation']==x['obligation'])];row['notes']=row.get('notes','')+' Metadata-only unique-ID correction. Original true omitted-construction finding and complete historical row are preserved via supersedes. Existing repair_confidence1 expresses completed actual integral construction, not epistemic probability1.';newrows.append(row)
# inspect mandatory append schema keys and exact links without running a gate
mandatory=['defect_id','run','at','class','subclass','severity','location','subject','caught_at_stage','caught_by_role','disposition']
for row in newrows:assert all(row.get(k) not in [None,''] for k in mandatory);assert row['supersedes']==[next(k for k,v in mapping.items() if v==row['defect_id'])];assert row['disposition']=='fixed'
for row in newrows:
 referenced={d['obligation'] for d in decisions if row['defect_id'] in d['defect_ids']};assert referenced=={r['obligation'] for r in row['adjudication_ref']}
result={'version':1,'run':run,'group':'qschur_cellularity','recorded_at':now,'mapping':mapping,'new_ledger_rows':newrows,'batch_decision_proposals':batch,'all_11_decisions':decisions,'original_packet':str(base/'escalation-resolution-packet.json'),'preserve_existing_rows':True,'preserve_frozen_native_observation_fields':True,'no_source_or_mathematical_change':True,'no_retests_or_new_logical_round':True,'confidence_semantics':'Existing1 retained only as completed actual specific integral Hom/intersection/cellularity/norm1 construction status; no probability1, fresh worker receipt, independent acceptance or arbitrary-root quantum realization claim.','original_source_guards':sourceguards,'current_source_currency':currency,'same_owner_68_consumer_checks':str(base/'consumer-checks.json'),'consumer_currency':consumercurrency,'schema_metadata_checks':{'new_ids_absent_from_current_ledger':True,'supersedes_nonempty_string_arrays':True,'supersedes_existing_same_run_subject':True,'mandatory_fields_present':True,'adjudication_ref_exact_inverse_of_decision_defect_ids':True,'all_11_preserved':len(decisions)==11},'integration_requirement':'ROOT ONLY append new rows and replace candidate decisions/refs; preserve existing ledger/native histories. Any separately changed source guard requires root recertification; no guard silently updated here.'}
(out/'ledger-id-disposition-correction.json').write_text(json.dumps(result,indent=2)+'\n');(out/'proposed-fixed-ledger-rows.json').write_text(json.dumps({'version':1,'run':run,'rows':newrows},indent=2)+'\n');(out/'proposed-native-decisions.json').write_text(json.dumps({'version':1,'run':run,'groups':batch},indent=2)+'\n');(out/'SUMMARY.md').write_text('''# Unique ledger-ID correction

The three existing OPEN native physical IDs are preserved. Three new unique FIXED row IDs supersede those earlier same-run/same-subject rows through the schema-required nonempty string arrays. All eleven candidate native decisions are retained; their referenced defect IDs and ledger adjudication references now agree exactly. Frozen producer snapshots, observations and original findings are unchanged.

This is an evidence-only metadata correction to actual previously completed integral cellularity construction. It changes no mathematical source, adds no repair round, reruns no proof test and claims no acceptance. Existing repair_confidence1 means completed specific construction, not probability1. Original complete source guards and all68 same-owner consumer checks remain referenced; current hash differences are disclosed in the JSON instead of silently recertified.

Root alone may append/apply the proposals. Separate arbitrary-root quantum foundations remain the work of their actual constructor owners.
''')
print(json.dumps({'mapping':mapping,'decisions':len(decisions),'rows':len(newrows),'changed_source_guards':[r['path'] for r in currency if not r['unchanged']],'changed_consumer_guards':[r['id'] for r in consumercurrency if r['recorded_raw_sha256']!=r['current_raw_sha256']]}))
