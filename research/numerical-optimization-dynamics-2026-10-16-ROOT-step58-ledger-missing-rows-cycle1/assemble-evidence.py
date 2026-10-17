# Research-only evidence projection; no hashes, validators or canonical writes.
from pathlib import Path
import json,re,datetime,collections
run='numerical-optimization-dynamics-2026-10-16';base=Path('research/'+run+'-step5-v2');out=Path('research/'+run+'-ROOT-step58-ledger-missing-rows-cycle1')
def read(p):return json.loads(Path(p).read_text())
def lines(p):return [json.loads(s)for s in Path(p).read_text().splitlines()if s]
def samekey(a,b):return all(a.get(k)==b.get(k)for k in ['id','model','context_sha256'])
cert=read(base/'certification.json');certitems={x['id']:x for x in cert['items']}
ledger=lines('research/defect-ledger.jsonl');adjudications=lines('research/'+run+'-judge-adjudications.jsonl')
fatals=[x for x in adjudications if x.get('outcome')=='confirmed_fatal']
reports=[];review_sources=[]
for file in base.iterdir():
 if re.fullmatch(r'step5-v2-(initial|repeat)-r\d+-u[^.]+\.json',file.name):reports.append((str(file),read(file)))
 if file.name.endswith('-collected.json'):
  d=read(file)
  for field in ['reviews','root_current_reviews']:
   for row in d.get(field,[]):review_sources.append((str(file),field,row))
current_judge=read(base/'judge-3.json')
entries=[];rows=[]
for seq,a in enumerate(fatals,1):
 phase=a['step5_phase'];rd=a['step5_round'];packpath=base/f'{phase}-{rd}.json';colpath=base/f'{phase}-{rd}-collected.json';pack=read(packpath);col=read(colpath)
 matches=[(path,d)for path,d in reports if d.get('phase')==phase and d.get('round')==rd and any(samekey(x,a)and x.get('outcome')=='confirmed_fatal'for x in d.get('decisions',[]))]
 if len(matches)!=1:raise ValueError('ambiguous original report identity')
 reportpath,report=matches[0];unit=str(report['unit']);judged=[x for x in pack['assignments'][unit]if samekey(x,a)]
 if len(judged)!=1:raise ValueError('ambiguous actual rejected tuple')
 verdict=judged[0]
 native_reviews=[x for x in report['reviews']if x['id']==a['id']and x.get('disposition')=='repaired']
 if len(native_reviews)!=1:raise ValueError('ambiguous actual repair review')
 native=native_reviews[0]
 original_proposals=[x for x in report.get('ledger_updates',[])if x.get('id',x.get('subject'))==a['id']]
 current_review=[{'path':path,'field':field,'review':row}for path,field,row in review_sources if row.get('id')==a['id']and row.get('post_sha256')==certitems[a['id']]['guard_sha256']]
 root_review=[x for x in col.get('root_current_reviews',[])if x['id']==a['id']]
 rootspecial=next((x for x in col.get('native_current_repair_origins',[])if x['id']==a['id']and x.get('origin_kind')=='assigned-scope-preservation'),None)
 role='judge-sol'if a['model']=='gpt-6.1-sol'else'unknown'
 locus=next((str(x.get('location')or x.get('locus')or x.get('section')or x.get('proposed_row',{}).get('location'))for x in original_proposals if x.get('location')or x.get('locus')or x.get('section')or x.get('proposed_row',{}).get('location')),None)
 text=(locus or verdict.get('reason','')).lower()
 location='facts-block'if 'fact' in text or re.search(r'\bf[0-9]\b',text)else 'definition'if'definition'in text else'proof-step'if'proof'in text or'verification'in text else'statement'
 if locus in ['title','statement','definition','proof-step','facts-block','remark','frontmatter']:location=locus
 subclass='other';note='Original native confirmed-fatal classification '+str(a.get('defect_type'))+'. Exact original adjudicator finding: '+a['reason']
 native_dispatch='research/'+run+'-dispatch/alpha-adjudicate-step5-v2-'+phase+'-r'+str(rd)+'-u'+unit+'.result.json'
 ref={k:a[k]for k in ['id','model','context_sha256','item_sha256']}
 owners=[x for x in ledger if x.get('run')==run and any(isinstance(v,dict)and v.get('item_sha256')==a['item_sha256']and v.get('id',a['id'])==a['id']and v.get('model')==a['model']and v.get('context_sha256')==a['context_sha256']for v in x.get('adjudication_ref',[]))]
 currentverdict=[x for x in current_judge['verdicts']if x['id']==a['id']]
 evidence=[{'path':'research/'+run+'-judge-adjudications.jsonl','note':'Exact historical confirmed-fatal tuple; original adjudication remains immutable. '+a['reason']}, {'path':str(packpath),'note':'Actual native frozen assignment and pre-repair guard '+pack['before'][a['id']]+'. Original rejected judge item/context fields are separate and preserved in the evidence packet.'},{'path':reportpath,'note':'Genuine native repair author review, historical post guard '+native['post_sha256']+'. '+native['reason']},{'path':native_dispatch,'note':'Original successful native adjudication/repair result; root must authenticate exact result/attempt/prompt through the collected/certified evidence before adoption.'},{'path':str(colpath),'note':'Actual collection records this subject changed and repaired, with original report/dispatch bindings; no repair is inferred from the decision alone.'},{'path':str(base/'certification-impact-repeat-3.json'),'note':'Existing current certification at proposal preparation: guard '+certitems[a['id']]['guard_sha256']+', normalized judge item '+certitems[a['id']]['item_sha256']+', context '+certitems[a['id']]['context_sha256']+'. Root must verify current source/context again after actual gate owners drain.'}]
 if rootspecial:
  evidence.append({'path':col.get('owner_current_repairs'),'note':'Separate root scope-preservation successor, not the original native repair. '+str(col.get('root_current_repair_resolution'))})
 row={'defect_id':'nod-step5-historical-fatal-'+str(seq).zfill(3)+'-'+a['id'],'run':run,'at':datetime.datetime.now(datetime.timezone.utc).date().isoformat(),'class':'accuracy','subclass':subclass,'subclass_note':note,'severity':'fatal','location':location,'subject':a['id'],'caught_at_stage':'4-judge'if phase=='initial'else'5-rejudge','caught_by_role':role,'caught_by_model':a['model'],'original_detected_at':verdict.get('at'),'original_confirmed_at':a.get('at'),'disposition':'fixed','adjudication_ref':[ref],'evidence':evidence,'repair_cost':'repair+rejudge','recording_note':'Retrospectively recorded from preserved native evidence; original detection and confirmation dates are separate fields. No original report, decision or repair history is rewritten.'}
 entries.append({'tuple':ref,'adjudication':a,'original_verdict':verdict,'pack':str(packpath),'collection':str(colpath),'original_report':reportpath,'original_dispatch':native_dispatch,'original_native_review':native,'original_ledger_update_proposals':original_proposals,'current_certificate_item':certitems[a['id']],'matching_current_collected_reviews':current_review,'latest_judge_observation':currentverdict,'separate_root_current_correction':{'origin':rootspecial,'current_reviews':root_review,'resolution':col.get('root_current_repair_resolution'),'receipt':col.get('owner_current_repairs')}if rootspecial else None,'already_exact_owned_by':[x['defect_id']for x in owners],'proposed_location_source':locus or 'original rejected verdict text; broad canonical projection requires root review','candidate_row':row,'adoption_requires':['after actual native u2 completes, recompute exact/legacy ownership against live ledger; skip genuinely owned tuples','authenticate original native report, successful result/attempt/prompt, collected repair and certified evidence','verify latest genuine current certification, helper/source/context currency and final current review/keep where required; do not treat threshold fatal0 as repair evidence','root review proposed broad location/classification; preserve exact original findings and separate root corrections','root append under existing native shared ledger lock/API, preserve all original bytes; refresh generated view; ordinary real gate rerun']})
 if not owners:rows.append(row)
(out/'evidence-and-candidates.json').write_text(json.dumps({'run':run,'research_only':True,'status':'Unadopted candidates; no canonical ledger or code changed, no hashes or validators executed. Native u2 may independently settle these while active.','original_fatal_tuple_count':len(fatals),'distinct_subject_count':len({x['id']for x in fatals}),'snapshot_exact_unowned_candidate_count':len(rows),'entries':entries},indent=2)+'\n')
(out/'rows.proposed-not-approved.json').write_text(json.dumps(rows,indent=2)+'\n')
(out/'diagnosis.json').write_text(json.dumps({'run':run,'captured_errors':153,'missing_exact_owners':152,'original_initial_luna':132,'repeat1_sol':19,'repeat2_sol':1,'other_captured_errors':['render-stale'],'no_other_captured_schema_or_Step3_closure_error':True,'proposal_exact_unowned_snapshot':len(rows),'native_owner_u2_may_supersede_entire_proposal':True},indent=2)+'\n')
