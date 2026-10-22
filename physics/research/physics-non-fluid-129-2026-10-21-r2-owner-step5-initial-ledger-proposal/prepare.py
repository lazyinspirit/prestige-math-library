from pathlib import Path
import json,hashlib,shutil,datetime,collections
RUN='physics-non-fluid-129-2026-10-21-r2'
BASE=Path(f'research/{RUN}-owner-step5-initial-ledger-proposal')
WF=Path(f'research/{RUN}-step5-v2')
hashb=lambda b:hashlib.sha256(b).hexdigest()
hashp=lambda p:hashb(p.read_bytes())
def dump(name,obj): (BASE/name).write_text(json.dumps(obj,indent=2,ensure_ascii=False)+'\n')
guards={}
def archive(path):
 p=Path(path); target=BASE/'preimages'/p
 target.parent.mkdir(parents=True,exist_ok=True);data=p.read_bytes();target.write_bytes(data)
 guards[str(p)]={'sha256':hashb(data),'archive':str(target),'archive_sha256':hashp(target)}
 return guards[str(p)]
def walk(x,p):
 if isinstance(x,list):
  for i,v in enumerate(x):yield from walk(v,f'{p}/{i}')
 elif isinstance(x,dict):
  if any(k in x for k in ['ledger','subject','id','defect_id','supplier','consumer','item','ids','subjects']):yield p,x
  else:
   for k,v in x.items():yield from walk(v,f'{p}/{k}')
# Proposed canonical taxonomy is explicit mechanical normalization of native prose,
# not a native scientific finding or independent review. Each mapping is flagged.
MAP={}
def add(unit,entries):
 for i,sub,loc in entries:MAP[(str(unit),i)]=(sub,loc)
add(2,[(0,'undefined-notation','proof-step')])
add(4,[(0,'missing-hypothesis','definition'),(1,'invalid-inference','proof-step'),(2,'citation-inaccurate','remark')])
add(5,[(0,'citation-missing','proof-step'),(1,'citation-inaccurate','facts-block')])
add(6,[(0,'missing-hypothesis','definition')])
add(7,[(0,'missing-choice-scope','facts-block'),(1,'ill-typed-construction','statement')])
add(8,[(0,'citation-inflated','facts-block'),(1,'missing-hypothesis','statement')])
add(10,[(0,'ill-typed-claim','proof-step')]);add(12,[(0,'citation-truncated','facts-block')]);add(15,[(0,'missing-hypothesis','statement')])
add(17,[(3,'missing-choice-scope','statement'),(4,'citation-missing','proof-step')])
add(18,[(0,'false-or-overstrong-statement','definition'),(2,'ill-typed-claim','definition')]);add(25,[(0,'ill-typed-construction','definition')]);add(26,[(1,'citation-truncated','facts-block')]);add(27,[(0,'missing-hypothesis','definition'),(1,'false-or-overstrong-statement','remark')]);add(28,[(0,'ill-typed-claim','statement')])
add(29,[(0,'missing-hypothesis','definition'),(1,'citation-inaccurate','facts-block'),(3,'citation-truncated','facts-block')]);add(33,[(0,'undefined-notation','definition')]);add(34,[(0,'citation-inaccurate','facts-block'),(1,'citation-inflated','facts-block')]);add(35,[(0,'missing-hypothesis','proof-step'),(1,'missing-hypothesis','statement'),(2,'citation-inflated','facts-block'),(3,'undefined-notation','remark'),(5,'false-or-overstrong-title','title')]);add(36,[(0,'citation-inaccurate','facts-block'),(1,'undefined-notation','proof-step')]);add(37,[(0,'missing-hypothesis','statement')])
add(42,[(1,'citation-inaccurate','facts-block'),(2,'missing-hypothesis','definition'),(3,'citation-missing','proof-step'),(4,'citation-inflated','facts-block'),(5,'citation-missing','proof-step')]);add(43,[(0,'citation-inflated','facts-block')]);add(44,[(0,'citation-inaccurate','facts-block')]);add(47,[(0,'citation-truncated','definition'),(1,'citation-inflated','facts-block')]);add(48,[(0,'citation-inaccurate','facts-block')]);add(50,[(0,'citation-inflated','facts-block')]);add(52,[(0,'citation-inaccurate','facts-block'),(2,'invalid-inference','proof-step')]);add(55,[(0,'missing-hypothesis','statement')]);add(56,[(0,'citation-inaccurate','proof-step')]);add(58,[(0,'missing-hypothesis','definition'),(1,'citation-inaccurate','facts-block')]);add(59,[(0,'citation-inaccurate','proof-step'),(1,'missing-hypothesis','statement')]);add(60,[(1,'undefined-notation','definition'),(2,'missing-hypothesis','proof-step')]);add(63,[(0,'ill-typed-construction','definition')]);add(64,[(0,'missing-hypothesis','proof-step')]);add(68,[(0,'invalid-inference','proof-step')]);add(69,[(0,'missing-hypothesis','definition')]);add(71,[(0,'missing-choice-scope','facts-block')]);add(73,[(0,'citation-truncated','facts-block')]);add(75,[(0,'false-or-overstrong-title','title'),(1,'missing-hypothesis','statement')]);add(81,[(0,'citation-inaccurate','facts-block')]);add(85,[(0,'citation-inaccurate','facts-block'),(1,'invalid-inference','proof-step')]);add(86,[(0,'false-or-overstrong-title','title'),(1,'missing-hypothesis','statement')]);add(89,[(0,'invalid-inference','proof-step')]);add(90,[(0,'missing-hypothesis','statement')]);add(91,[(0,'citation-inaccurate','facts-block')]);add(92,[(0,'invalid-inference','proof-step')]);add(93,[(0,'undefined-notation','definition'),(1,'false-or-overstrong-title','title')]);add(94,[(0,'missing-hypothesis','definition'),(1,'invalid-inference','proof-step')]);add(95,[(0,'other','remark'),(1,'false-or-overstrong-statement','statement')]);add(96,[(0,'ill-typed-claim','definition'),(1,'citation-inflated','facts-block')]);add(97,[(1,'citation-truncated','facts-block'),(2,'citation-inaccurate','proof-step')]);add(98,[(0,'ill-typed-construction','definition')]);add(99,[(0,'citation-inaccurate','remark'),(1,'citation-inaccurate','facts-block')]);add(100,[(0,'citation-missing','facts-block')]);add(103,[(0,'ill-typed-construction','definition')]);add(104,[(0,'undefined-notation','definition')]);add(105,[(0,'false-or-overstrong-statement','remark')]);add(111,[(0,'invalid-inference','proof-step'),(1,'citation-inflated','facts-block')]);add(115,[(1,'false-or-overstrong-title','title'),(2,'citation-truncated','facts-block')]);add(116,[(0,'citation-inflated','facts-block'),(1,'false-or-overstrong-title','title')]);add(117,[(0,'undefined-notation','definition')]);add(120,[(0,'missing-hypothesis','statement')]);add(121,[(0,'citation-inflated','definition'),(1,'missing-hypothesis','definition'),(2,'invalid-inference','proof-step')]);add(128,[(0,'arithmetic-error','remark')])
statepath=Path(f'.physics-autopilot/{RUN}/state.json');archive(statepath);state=json.loads(statepath.read_text())
packpath=WF/'initial-1.json';archive(packpath);pack=json.loads(packpath.read_text())
ledgerpath=Path('research/defect-ledger.jsonl');archive(ledgerpath);oldledger=[json.loads(l) for l in ledgerpath.read_text().splitlines() if l]
archive('tools/physics-support/defect-ledger.mjs');archive('tools/physics-support/step5-workflow.mjs')
reports=[];canonical=[];normalization=[];published=[];rawupdates=[];extra=[];errors=[];counts=collections.Counter();allprior=[]
for unit in sorted(pack['units'],key=int):
 p=WF/f'step5-v2-initial-r1-u{unit}.json'
 if not p.exists():errors.append({'unit':unit,'error':'missing_report'});continue
 v=json.loads(p.read_text());label=f'step5-v2-initial-r1-u{unit}';zero=v.get('completion')=='mechanical-zero-work'
 statekey=f'5.1-adjudicate:{"step5-v2-empty-initial-r1-u"+unit if zero else label}'
 dstate=state['dispatches'].get(statekey)
 if not dstate or not dstate.get('lastExitOk') or not dstate.get('endedAt'):errors.append({'unit':unit,'error':'dispatch_not_completed_successfully'});continue
 dg=archive(p);dispatch=None;dispatchpath=None
 if not zero:
  dispatchpath=Path(f'research/{RUN}-dispatch/alpha-adjudicate-{label}.result.json')
  if not dispatchpath.exists():errors.append({'unit':unit,'error':'missing_dispatch_result'});continue
  dispatch=json.loads(dispatchpath.read_text());archive(dispatchpath)
  if not dispatch.get('ok') or dispatch.get('exit_code')!=0 or dispatch.get('timed_out') or dispatch.get('label')!=label:errors.append({'unit':unit,'error':'unsuccessful_dispatch_result'});continue
  if dispatch.get('attempt')!=dstate.get('attempt'):errors.append({'unit':unit,'error':'dispatch_attempt_mismatch'});continue
 counts['zero_work' if zero else 'substantive']+=1;counts['reports']+=1
 props=list(walk(v.get('ledger_updates',[]),'/ledger_updates'))
 for pointer,raw in props:
  record={'unit':unit,'report':str(p),'report_sha256':dg['sha256'],'json_pointer':pointer,'native_proposal':raw}
  rawupdates.append(record)
  if 'publish' in pointer.lower() or 'publish' in ' '.join(str(raw.get(k,'')) for k in ['ledger','ledger_path','ledger_file','target']).lower():published.append(record)
  elif not any(raw.get(k) in [a['id'] for a in v['decisions'] if a['outcome'].startswith('confirmed')] for k in ['id','subject','item','item_id']):extra.append(record)
 entry={'unit':unit,'zero_work':zero,'report':str(p),'report_sha256':dg['sha256'],'state_key':statekey,'dispatch_state':dstate,'dispatch_result':str(dispatchpath) if dispatchpath else None,'dispatch_result_sha256':hashp(dispatchpath) if dispatchpath else None,'decision_count':len(v['decisions'])}
 reports.append(entry)
 for i,dec in enumerate(v['decisions']):
  counts[dec['outcome']]+=1
  if not dec['outcome'].startswith('confirmed'):continue
  sid=dec['id'];sourcepath=Path(f'items/{sid}.md');sg=archive(sourcepath) if sourcepath.exists() else None
  matches=[r for r in pack['assignments'][unit] if r['id']==sid and r['model']==dec['model'] and r['context_sha256']==dec['context_sha256']]
  if len(matches)!=1:errors.append({'unit':unit,'id':sid,'error':'not_exactly_one_original_judge_tuple'})
  nprops=[{'pointer':ptr,'proposal':prop} for ptr,prop in props if any(prop.get(k)==sid for k in ['id','subject','item','item_id']) and not 'publish' in ' '.join(str(prop.get(k,'')) for k in ['ledger','target']).lower() and not 'publish' in ptr.lower()]
  explicit=[x for x in nprops if x['proposal'].get('class') and x['proposal'].get('subclass')]
  prior=[r for r in oldledger if r.get('run')==RUN and r.get('subject')==sid]
  sub,loc=MAP.get((unit,i),(None,None));flags=[]
  if sub is None:flags.append('missing_taxonomy_mapping')
  if not explicit:flags.append('native_canonical_taxonomy_missing_proposed_mapping_requires_root_adoption')
  else:
   subs={a['proposal']['subclass'] for a in explicit};classes={a['proposal']['class'] for a in explicit}
   if len(subs)==1 and len(classes)==1:sub=next(iter(subs))
   else:flags.append('conflicting_native_taxonomy')
  if prior:flags.append('same_subject_prior_rows_require_same_issue_review')
  if len(nprops)>1:flags.append('multiple_native_proposals_same_subject_preserve_separate_issues')
  review=[r for r in v.get('reviews',[]) if r['id']==sid]
  if len(review)!=1 or review[0].get('disposition')!='repaired':flags.append('native_repaired_review_missing_or_ambiguous')
  if dec.get('uncertain') is not False:flags.append('native_uncertainty')
  future_ref={'path':f'research/{RUN}-judge-adjudications.jsonl','id':sid,'model':dec['model'],'context_sha256':dec['context_sha256'],'item_sha256':pack['before'][sid],'step5_round':1,'step5_phase':'initial'}
  row={'defect_id':f'{RUN}-step5-initial-r1-u{unit}-d{i+1}-{sid}','run':RUN,'at':dispatch['ended_at'],'class':'accuracy','subclass':sub,'severity':'fatal' if dec['outcome']=='confirmed_fatal' else 'nonfatal','location':loc,'subject':sid,'caught_at_stage':'5-adjudicate','caught_by_role':'final-adjudicator','disposition':'fixed','batch':unit,'detail':dec['reason'],'evidence':[{'path':str(p),'note':f'Native decision /decisions/{i}; original observation preserved verbatim. This ledger proposal performs no independent scientific audit.'}],'adjudication_ref':[future_ref],'item_sha256':pack['before'][sid],'step5_round':1,'step5_phase':'initial','native_report_ref':{'path':str(p),'sha256':dg['sha256'],'json_pointer':f'/decisions/{i}'},'native_repair_author':dispatch['model'],'native_repair_profile':dispatch['profile']}
  if sub=='other':row['subclass_note']='Native nonfatal schema/exposition defect: redundant algorithm property asserted in Remarks without a separate result; exact native reason is in detail. Root taxonomy adoption required.'
  canonical.append(row)
  rec={'candidate_defect_id':row['defect_id'],'unit':unit,'decision_pointer':f'/decisions/{i}','native_decision':dec,'native_review':review,'raw_matching_proposals':nprops,'taxonomy':{'class':'accuracy','subclass':sub,'location':loc,'basis':'exact-native-canonical-subclass' if explicit else 'proposed normalization of the quoted native defect; not a native taxonomy assertion','requires_root_adoption':True},'flags':flags,'source_guard':{'path':str(sourcepath),'raw_sha256':sg['sha256'] if sg else None},'report_guard':{'path':str(p),'raw_sha256':dg['sha256']},'original_judge_tuple':matches[0] if len(matches)==1 else matches,'original_pack_before_item_sha256':pack['before'][sid],'future_adjudication_ref':future_ref,'future_reference_status':'not_created_yet' if not Path(future_ref['path']).exists() else 'exists_requires_collection_entry_verification','same_subject_prior_records':prior,'same_issue_status':'root_review_required_no_automatic_dedup' if prior else 'no_prior_same_subject_row_in_this_run'}
  normalization.append(rec)
  if prior:allprior.append({'subject':sid,'candidate_defect_id':row['defect_id'],'prior_records':prior,'classification':'same-subject candidate only; no claim of same actual defect; do not supersede or duplicate without Root review'})
(BASE/'canonical-candidates.jsonl').write_text(''.join(json.dumps(x,ensure_ascii=False)+'\n' for x in canonical))
dump('normalization-proposal.json',normalization);dump('raw-native-ledger-proposals.json',rawupdates);dump('published-maintenance-appendix.json',published);dump('other-native-referrals.json',extra);dump('same-subject-prior-records.json',allprior)
complete=counts['substantive']==88 and counts['zero_work']==41 and counts['reports']==129 and not errors
summary={'version':1,'run':RUN,'preparer':'/root/step5_noether_referral','scope':'mechanical native-report transcription and proposed canonical normalization only','observed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'stage':state['stage'],'partial':not complete,'coverage_complete':complete,'native_dispatches_complete':sum(bool(v.get('endedAt') and v.get('lastExitOk')) for v in state['dispatches'].values() if v['stage']=='5.1-adjudicate'),'counts':dict(counts),'canonical_candidates':len(canonical),'raw_native_ledger_proposals':len(rawupdates),'published_maintenance_appendix_records':len(published),'other_unmatched_native_referral_records':len(extra),'same_subject_prior_candidates':len(allprior),'prior_records_in_same_subject_candidates':sum(len(x['prior_records']) for x in allprior),'flag_counts':dict(collections.Counter(f for x in normalization for f in x['flags'])),'reports':reports,'errors':errors,'source_applied':False,'canonical_ledger_appended':False,'scientific_review':False,'native_acceptance':False,'collection_reference_status':'Judge-adjudications entries are future collection products; no invented line numbers, timestamps or raw hashes. Exact tuple identity and pack.before guard retained; Root must verify created entries after collection.','adoption_holds':['Root adopts canonical taxonomy/location proposals or supplies an append-only existing-row normalization.','Root resolves same-actual-defect ownership against all same-subject prior rows; originals remain immutable.','Root verifies genuine native collection judge-adjudications entries match each exact model/context/run/phase/round/item tuple.','Root reconciles current raw source guards and current actual repair. Native repair reviews are copied as observations, not independently refreshed.','Compound decisions and multiple same-subject raw proposals remain flagged; no extra judge tuple or confirmation is invented.']}
dump('report.json',summary);dump('evidence-guards.json',guards)
print(json.dumps({k:v for k,v in summary.items() if k not in ['reports','adoption_holds']},indent=2))
