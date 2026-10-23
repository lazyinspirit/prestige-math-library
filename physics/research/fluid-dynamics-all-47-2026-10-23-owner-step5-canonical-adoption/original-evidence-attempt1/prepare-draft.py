from pathlib import Path
import json, hashlib, shutil, datetime, collections

RUN='fluid-dynamics-all-47-2026-10-23'
base=Path(__file__).resolve().parent
root=base.parent.parent
work=root/'research'/(RUN+'-step5-v2')
def sha(p): return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def read(p): return json.loads(Path(p).read_text())
def rel(p): return str(Path(p).relative_to(root))
def ref(p): return {'path':rel(p),'sha256':sha(p)}
def write(name,obj):
 p=base/name
 with p.open('x') as f: f.write(json.dumps(obj,indent=2,ensure_ascii=False)+'\n')
def key(x): return tuple(x.get(k) for k in ['id','model','context_sha256','item_sha256'])
def scientific_key(x): return tuple(x.get(k) for k in ['id','model','context_sha256'])
def lines(p): return [json.loads(x) for x in Path(p).read_text().splitlines() if x]
archive=base/'original-evidence';archive.mkdir()
bindings={}
def retain(p,name=None):
 p=Path(p);bindings[rel(p)]=sha(p)
 out=archive/(name or p.name)
 if out.exists(): assert out.read_bytes()==p.read_bytes()
 else: shutil.copyfile(p,out)
 return ref(p)
collection_path=work/'initial-1-collected.json';pack_path=work/'initial-1.json'
journal_path=root/'research'/(RUN+'-judge-adjudications.jsonl')
ledger_path=root/'research/defect-ledger.jsonl'
collection=read(collection_path);pack=read(pack_path)
assert collection['run']==RUN and collection['phase']=='initial' and collection['round']==1 and collection['errors']==[]
assert pack['run']==RUN and pack['phase']=='initial' and pack['round']==1 and pack['version']==2
for p in [collection_path,pack_path,journal_path,ledger_path]:retain(p)
journal=[x for x in lines(journal_path)if x.get('run')==RUN and x.get('step5_phase')=='initial' and x.get('step5_round')==1]
assert len(journal)==67 and len({key(x)for x in journal})==67
ledger=lines(ledger_path);classifications=read(base/'classifications.json')
retain(base/'classifications.json');retain(Path(__file__))
pack_digest=hashlib.sha256(json.dumps(pack,ensure_ascii=False,separators=(',',':')).encode()).hexdigest()
reports={};unit_index=[];authored={};zero=[]
for n in range(1,48):
 unit=str(n);label='step5-v2-initial-r1-u'+unit;rp=work/(label+'.json');report=read(rp);retain(rp)
 assert report['run']==RUN and report['phase']=='initial' and report['round']==1 and str(report['unit'])==unit
 # Use the actual JS-created input seal from the immutable native report/collection.
 assert report['input_sha256']==next(iter(reports.values()))['input_sha256'] if reports else True
 assert collection['evidence'][str(rp)]==sha(rp)
 mechanical=report.get('completion')=='mechanical-zero-work'
 dispatch=root/'research'/(RUN+'-dispatch')/((('tool-step5-v2-empty-initial-r1-u'+unit)if mechanical else 'alpha-adjudicate-'+label)+'.result.json')
 d=read(dispatch);retain(dispatch)
 assert d['ok'] is True and d['run']==RUN and d['covers']==[unit] and d.get('ended_at')
 assert collection['evidence'][str(dispatch)]==sha(dispatch)
 if mechanical:
  assert report['mathematical_review'] is False and report['decisions']==[] and report['reviews']==[] and d['role']=='tool';zero.append(unit)
 else:
  assert d['role']=='alpha-adjudicate' and d['label']==label and d['model']=='gpt-6.1-sol' and d['provider_effort']=='high'
  task=work/(label+'.task.md');retain(task);assert collection['evidence'][str(task)]==sha(task)
  assert str(pack_path)in task.read_text()
  for z in report['decisions']:
   k=scientific_key(z);assert k not in authored;authored[k]=(unit,z)
 reports[unit]=report
 unit_index.append({'unit':unit,'completion':'mechanical-zero-work' if mechanical else 'completed-native-final-adjudication','report':ref(rp),'dispatch':ref(dispatch),'original_assignment_count':len(pack['assignments'][unit]),'decision_count':len(report['decisions']),'review_count':len(report['reviews']),'source_reading_claim':'No mathematical reading credited to zero-work units.' if mechanical else 'Original report is the attributed source for its own scientific reading/repair; this draft claims no independent audit.'})

compound={
 'lem-fd-conformation-storage':['Primary rejected F10/C2-motion applicability issue.','Native reason also repairs a separately uncited FTC use by MVT in proof 4.1.'],
 'lem-fd-finite-mode-compactness':['Primary exceptional-time alteration of the actual Cw limit.','Native reason also replaces unspecified dependent diagonal choices by canonical extraction.'],
 'rem-fd-compressible-stability-distinctions':['Primary original objection is uniform-mesh/common-ratio conservation.','Native review additionally repairs a digest limiter closed-convex-domain/maximal-feasible-scaling gap.'],
 'thm-fd-stratified-linear-energy':['Primary original objection is the false necessity of N>0 for positivity.','Native review additionally repairs a digest pressure-regularity/time-integration gap by fixed-time flux cancellation.'],
 'pthm-fd-cauchy-momentum-angular':['Primary original objection is unsupported thermal-supplier invocation from mechanical data.','Native adjudication also adds the distinct missing same-motion velocity premise, with an explicit countermodel.'],
 'pthm-fd-energy-decomposition':['Primary original objection is the missing same-motion velocity premise.','Native adjudication also confirms/adds the distinct missing C1 regularity of current density.'],
 'pthm-fd-no-slip-cfd-observations':['Primary original objection is time-first versus space-first model typing.','Native reason also corrects an undefined physical time-node conversion.'],
 'prop-fd-maxwellian-moments':['Primary original objection is omitted inherited Countable Choice in F6/public premises.','Native reason also restores compact-truncation Riemann-integrability hypotheses in the same supplier restatement; Root decides whether this is one truncated quote or separate finding.']
}
now=datetime.datetime.now(datetime.timezone.utc).isoformat()
rows=[];mapping=[];falsepositives=[];ambiguities=[];source_guards=[]
runledger=[x for x in ledger if x.get('run')==RUN]
owner_rows=[x for x in runledger if x['defect_id'].startswith(RUN+'-owner-precollection-')]
owner_ids=sorted({x['defect_id'] for x in owner_rows})
assert len(owner_ids)==13
for line_no,a in enumerate(journal,1):
 unit,native=authored[scientific_key(a)]
 original=next(x for x in pack['assignments'][unit]if scientific_key(x)==scientific_key(a))
 collected=next(x for x in collection['decisions']if scientific_key(x)==scientific_key(a))
 assert a['item_sha256']==pack['before'][a['id']]
 assert collected['outcome']==a['outcome']==native['outcome']
 exact=[r for r in runledger if any(isinstance(z,dict)and key(z)==key(a)for z in r.get('adjudication_ref',[]))]
 legacy=[r for r in runledger if any(isinstance(z,dict)and z.get('item_sha256')==a['item_sha256'] and (not z.get('id')or z['id']==a['id'])and(not z.get('model')or not z.get('context_sha256'))for z in r.get('adjudication_ref',[]))]
 prior=[{'defect_id':r['defect_id'],'stage':r['caught_at_stage'],'disposition':r['disposition'],'subclass':r['subclass']}for r in runledger if r['subject']==a['id']]
 binding={'id':a['id'],'model':a['model'],'context_sha256':a['context_sha256'],'item_sha256':a['item_sha256']}
 if a['outcome']=='false_positive':
  falsepositives.append({'adjudication':a,'original_native_decision':native,'frozen_original_tuple':original,'canonical_row_proposed':False,'existing_subject_rows':prior,'note':'No defect or source coverage is claimed from this false-positive original. Separate owner-discovery rows, if any, retain their own identity.'});continue
 assert a['outcome']in ['confirmed_fatal','confirmed_nonfatal']
 # These confirmed original decisions are unchanged by the separate owner queue.
 assert all(a.get(k)==native.get(k) for k in ['id','model','context_sha256','outcome','reason','uncertain'])
 assert collected==native and native['uncertain'] is False
 report=reports[unit];review=next(x for x in report['reviews']if x['id']==a['id'])
 assert review['disposition']=='repaired' and review['uncertain'] is False
 assert review['post_sha256']==collection['post'][a['id']]
 assert a['id']in collection['changed']
 assert not any(x['subject']==a['id']for x in owner_rows)
 sub,loc,locus=classifications[a['id']]
 identifier=RUN+'-step5-initial-u'+unit+'-'+a['id']
 entry={'id':a['id'],'unit':unit,'outcome':a['outcome'],'adjudication_ref':binding,'original_raw_step4_tuple_sha256':original['item_sha256'],'exact_existing_owner_ids':[x['defect_id']for x in exact],'legacy_existing_owner_ids':[x['defect_id']for x in legacy],'prior_subject_ledger_rows':prior,'proposed_defect_id':None,'classification_provisional':{'class':'accuracy','subclass':sub,'location':loc,'locus':locus},'native_original_objection':original['reason'],'native_adjudication_reason':a['reason'],'native_repair_review':review,'compound_reason_review':compound.get(a['id'],[])}
 if exact or legacy:
  entry['disposition']='existing-owned-preserved';mapping.append(entry);continue
 assert not any(x['defect_id']==identifier for x in ledger)
 rp=work/('step5-v2-initial-r1-u'+unit+'.json')
 dp=root/'research'/(RUN+'-dispatch')/('alpha-adjudicate-step5-v2-initial-r1-u'+unit+'.result.json')
 decision_index=next(i for i,z in enumerate(report['decisions'])if scientific_key(z)==scientific_key(a))
 review_index=next(i for i,z in enumerate(report['reviews'])if z['id']==a['id'])
 row={'defect_id':identifier,'run':RUN,'at':now,'class':'accuracy','subclass':sub,'severity':'fatal' if a['outcome']=='confirmed_fatal' else 'nonfatal','location':loc,'subject':a['id'],'caught_at_stage':'5-adjudicate','caught_by_role':'final-adjudicator','disposition':'fixed','item_sha256':a['item_sha256'],'description':original['reason'],'correction':a['reason'],'location_detail':locus,'adjudication_ref':[binding],'native_adjudicator':{'unit':unit,'label':'step5-v2-initial-r1-u'+unit,'model':'gpt-6.1-sol','provider_effort':'high'},'native_repair_snapshot':{'collected_post_sha256':collection['post'][a['id']],'native_review_context_sha256':review['review_context_sha256']},'attribution':'Root adoption draft of the authentic completed initial native final-adjudication and its own repair review; no independent audit or current impact-source acceptance is claimed.','evidence':[dict(ref(journal_path),line=line_no,note='Exact actual initial adjudication journal tuple, including normalized original item guard.'),dict(ref(rp),json_pointer='/decisions/'+str(decision_index),note='Authentic native final-adjudication and reported source repair.'),dict(ref(rp),json_pointer='/reviews/'+str(review_index),note='Authentic repaired review at its frozen initial post/context hashes.'),dict(ref(dp),note='Actual completed native Sol 6.1 high final-adjudicator identity.'),dict(ref(collection_path),note='Frozen successful initial collection retains the exact native decision/review and repaired post snapshot; not a current impact review.')]}
 if a['id']in compound:row['adoption_review_required']={'primary_exact_reference_owner':True,'compound_scope':compound[a['id']],'instruction':'One exact original adjudication owner only. Root must assess separately evidenced additional findings; any secondary row must carry no duplicate adjudication_ref.'}
 rows.append(row);entry['proposed_defect_id']=identifier;entry['disposition']='provisional-fixed-native-adoption';mapping.append(entry)
 source_guards.append({'id':a['id'],'unit':unit,'exact_adjudication_ref':binding,'frozen_step4_raw_or_judge_hash':original['item_sha256'],'initial_pack_before_content_sha256':pack['before'][a['id']],'frozen_initial_repaired_post_content_sha256':collection['post'][a['id']],'original_native_review_context_sha256':review['review_context_sha256'],'native_report':ref(rp),'native_dispatch':ref(dp),'current_source_rehashed':False,'current_source_scientifically_reviewed':False})
 if a['id']in compound: ambiguities.append({'subject':a['id'],'kind':'compound-native-reason-or-additional-repair','primary_provisional_defect_id':identifier,'scope':compound[a['id']],'required_root_action':'Inspect actual initial repair and original objection; choose primary plus separately evidenced secondary finding accounting. Never duplicate this exact original adjudication_ref.'})

assert len(mapping)==55 and len(falsepositives)==12
assert len(rows)==55 and sum(x['severity']=='fatal'for x in rows)==27
assert len({key(x['adjudication_ref'][0])for x in rows})==55
assert all(x['item_sha256']!=next(z for z in pack['rejected']if z['id']==x['subject'])['item_sha256']for x in rows)
proposed_ids={r['subject']for r in rows}
assert proposed_ids==set(classifications)
state=read(root/'.physics-autopilot'/RUN/'state.json')
active=[{'key':k,'stage':v['stage'],'label':v['label']}for k,v in state['dispatches'].items()if v.get('startedAt')and not v.get('endedAt')]
write('provisional-fixed-rows.json',rows)
write('mapping.json',mapping)
write('false-positive-exclusions.json',falsepositives)
write('compound-review-required.json',ambiguities)
write('source-native-guards.json',source_guards)
write('original-unit-index.json',unit_index)
write('separate-owner-findings.json',{'canonical_distinct_defect_ids':owner_ids,'canonical_rows_observed':owner_rows,'original_confirmed_subject_overlap':[],'coverage_or_closure_claimed':False})
summary={'journal_original_decisions':67,'confirmed_fatal':27,'confirmed_nonfatal':28,'false_positive_excluded':12,'existing_exact_confirmed_reference_owners':0,'existing_legacy_confirmed_reference_owners':0,'missing_fatal_exact_coverage':27,'missing_nonfatal_exact_coverage':28,'provisional_primary_rows':55,'primary_rows_are_not_a_count_of_distinct_mathematical_defects':True,'compound_reasons_requiring_root_classification':len(ambiguities),'separate_canonical_owner_findings':13,'original_units':47,'completed_scientific_native_units':47-len(zero),'mechanical_zero_work_units':zero}
write('plan.json',{'version':1,'run':RUN,'prepared_by':'/root/fluid_step4_statistics','kind':'immutable-unapplied-native-canonical-adoption-draft','created_at':now,'native_review':False,'independent_audit':False,'live_mutations':False,'apply_script_supplied':False,'summary':summary,'historical_evidence_bindings':bindings,'observed_live_stage':state['stage'],'inflight_dispatches_excluded_from_scientific_adoption':active,'root_required_actions':['Inspect each provisional taxonomy/location and actual native source repair.','Resolve compound reason accounting without duplicating an exact original adjudication_ref.','After writers drain, reread canonical ownership to avoid racing later appends or closures.','Append only genuine missing adopted rows through the native ledger tool; no row is automatically adopted by this draft.','Retain all 12 false-positive originals and the 13 independent owner-discovery findings without fabricated coverage.','Current impact/inherited source repairs require their own actual native evidence; do not rehash this historical initial adoption into current acceptance.']})
table=['| Subject | Unit | Native outcome | Provisional classification | Exact original journal item guard | Proposed owner |','|---|---:|---|---|---|---|']
for m in mapping:table.append('| '+m['id']+' | '+m['unit']+' | '+m['outcome']+' | '+m['classification_provisional']['subclass']+'; '+m['classification_provisional']['location']+' | `'+m['adjudication_ref']['item_sha256']+'` | '+str(m['proposed_defect_id'])+' |')
(base/'mapping-table.md').write_text('\n'.join(table)+'\n')
# Exact immutable initial evidence must still match; mutable ledger snapshot is an observation, not an ongoing freeze.
for p,digest in bindings.items():
 if p!='research/defect-ledger.jsonl': assert sha(root/p)==digest,p
print(json.dumps(summary,indent=2))
