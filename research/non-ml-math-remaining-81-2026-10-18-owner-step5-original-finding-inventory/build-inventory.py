import pathlib,json,hashlib,re,collections,datetime
R='non-ml-math-remaining-81-2026-10-18';P=pathlib.Path('research');V=P/(R+'-step5-v2');O=P/(R+'-owner-step5-original-finding-inventory');O.mkdir(exist_ok=True)
def load(p):return json.load(open(p))
def ref(p):p=pathlib.Path(p);return {'path':str(p),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()}
I=load(V/'initial-1.json');F=load(V/'frontier.json');verdicts=load(V/'step4-verdicts.json');judges=collections.defaultdict(list)
for n,x in enumerate(verdicts):judges[x['id']].append({'pointer':'/'+str(n),'verdict':x})
MP=P/(R+'-owner-step4-judge-preparation-round2/actual-metadata-and-inputs.json');M=load(MP);metadata={x['id']:x for x in M['items']}
S=load(P/(R+'-step5-scope.json'));B=load(P/(R+'-step5-auditor-baseline.json'));before=B['item_carriers'];owners={i:str(b['id']) for b in F['batches'] for i in b['items']};frontier=set(F['ids']);pageowners={p:str(u) for u,ps in I['home_pages'].items() for p in ps};assigned=collections.defaultdict(list)
for u,rs in I['assignments'].items():
 for j,x in enumerate(rs):assigned[x['id']].append({'unit':str(u),'pointer':f'/assignments/{u}/{j}','original_assignment':x})
# Only actual successful stable native initial outputs. A report by itself is not a completion.
reports=[];excluded=[];formal=collections.defaultdict(list);ordinary=collections.defaultdict(list)
for p in V.glob('step5-v2-initial-r1-u*.json'):
 m=re.fullmatch('step5-v2-initial-r1-u([0-9]+)\\.json',p.name)
 if not m:continue
 u=m.group(1);rp=P/(R+'-dispatch')/('alpha-adjudicate-step5-v2-initial-r1-u'+u+'.result.json');tool=P/(R+'-dispatch')/('tool-step5-v2-empty-initial-r1-u'+u+'.result.json');rp=rp if rp.exists() else tool
 if not rp.exists():excluded.append({'report':str(p),'reason':'No stable successful native completion receipt yet.'});continue
 rec=load(rp)
 if rec.get('run')!=R or rec.get('ok') is not True or not (rec.get('exit_code')==0 or rec.get('role')=='tool' and rec.get('written_by')=='autopilot' and rec.get('exit_code') is None) or [str(x) for x in rec.get('covers',[])]!=[u]:excluded.append({'report':str(p),'receipt':str(rp),'reason':'Native receipt does not establish successful exact-unit completion.'});continue
 a=load(p)
 if a.get('run')!=R or a.get('phase')!='initial' or str(a.get('round'))!='1' or str(a.get('unit'))!=u:excluded.append({'report':str(p),'reason':'Report run/phase/round/unit does not match exact initial assignment.'});continue
 rr={'unit':u,'report':ref(p),'receipt':ref(rp),'native':{k:rec.get(k) for k in ['role','label','covers','attempt','ok','exit_code','started_at','ended_at','model','requested_effort','sandbox']},'input_sha256_reported':a.get('input_sha256'),'mechanical_empty':rec.get('role')=='tool','data':a};reports.append(rr)
 for j,x in enumerate(a.get('reviews',[])):formal[x['id']].append({'unit':u,'report':str(p),'report_sha256':rr['report']['sha256'],'pointer':'/reviews/'+str(j),'native_review':x})
 for j,x in enumerate(a.get('downstream',[])):
  i=x if isinstance(x,str) else x.get('id');ordinary[i].append({'unit':u,'report':str(p),'report_sha256':rr['report']['sha256'],'pointer':'/downstream/'+str(j),'target':x,'meaning':'Ordinary 5.2 review target only; does not close any particular original concern or outside finding.'})
routefile=P/(R+'-step4-published-alert-routes.json');routes=load(routefile).get('routes',[]) if routefile.exists() else []
known={
'cex-it-expected-random-code-error-does-not-give-maximal-error':'B14 presentation proposal already ready; root integrates, do not duplicate.',
'ex-it-dmc-one-shot-error-bound':'B14 presentation proposal already ready; root integrates, do not duplicate.',
'ex-it-meta-converse-binary-channel':'B14 presentation proposal already ready; root integrates, do not duplicate.',
'lem-it-classical-wiretap-auxiliary-cardinality':'B20 cardinality proposal already ready; root integrates, do not duplicate.',
'def-discrete-memoryless-channel':'Existing Frattini/source and code-agent assignment; do not duplicate.',
'def-it-two-user-discrete-memoryless-mac-code':'Existing classical-high MAC no-feedback owner assignment is open; do not duplicate.',
'quantum-relative-entropy-data-processing-and-strong-subadditivity':'Existing mid/page22 introductory-prose proposal is ready; root integrates, do not duplicate.',
'lem-qc-tqc-fusion-tree-dimension':'Already an ordinary downstream target from u28; target routing is not closure of either original dimension concern.',
'thm-qc-tqc-braid-action-unitary-and-artin':'Already an ordinary downstream target from u28; target routing is not closure of the Hom-action finding.',
'lem-filtered-l-infinity-taylor-map-extends-to-completed-coalgebra':'Already an ordinary downstream target from u43; target routing is not closure of the Taylor ideal terminology finding.'}
def status(i):
 vs=judges.get(i,[]);asgn=assigned.get(i,[]);rs=formal.get(i,[]);old=I.get('before',{}).get(i);posts=[{'unit':x['unit'],'report':x['report'],'pointer':x['pointer'],'post_sha256':x['native_review'].get('post_sha256')} for x in rs];hashstate='unknown-with-JSON-only-evidence' if not posts else 'latest-successful-native-review-post-equals-frozen-before' if posts[-1]['post_sha256']==old else 'latest-successful-native-review-post-differs-from-frozen-before'
 return {'current_owning_batch':owners.get(i,pageowners.get(i,metadata.get(i,{}).get('batch'))),'current_status_from_structured_source_observation':{'path':str(MP),'at':M['at'],'record':metadata.get(i)},'subject_kind':'in-run-item' if i in owners else 'run-page' if i in pageowners else 'outside-run-item-or-page','frozen_judge_verdicts':vs,'original_initial_assignments':asgn,'formal_successful_native_item_reviews':rs,'ordinary_downstream_targets':ordinary.get(i,[]),'original_finding_closed':False,'closure_qualification':'No finding-specific closure inferred from an item review, severity label, downstream target or worker self-assessment. Root independently assesses actual concern/finding.','source_guards_from_structured_evidence':{'frozen_step4_verdict_item_sha256':[x['verdict'].get('item_sha256') for x in vs],'frozen_initial_before_guard_sha256':old,'step5_auditor_baseline':before.get(i),'successful_native_review_post_guards':posts,'current_identity_status':hashstate,'limit':'Source bodies are not read or hashed in this JSON-only inventory. If no current post guard is recorded, root must compare actual current guard before reader-concern admission.'},'reader_concern_admission_candidate':bool(i in frontier and metadata.get(i,{}).get('status')=='draft' and vs and all(x['verdict'].get('keep') is True for x in vs) and not asgn and not rs),'admission_qualification':'Existing reader-concern admission is only potentially eligible after actual current source unchanged guard and exact frozen judge inventory checks; this inventory grants no authority.','existing_owner_work':known.get(i),'independent_owner_review_needed':True}
original=[];digestrefs=[];unverified=[]
for b in range(1,82):
 p=P/(R+f'-batch-{b}-step5-context.json');a=load(p);rp=P/(R+'-dispatch')/f'alpha-batch-read-{b}.result.json';rec=load(rp) if rp.exists() else {};valid=rec.get('run')==R and rec.get('ok') is True and rec.get('exit_code')==0 and str(b) in [str(x) for x in rec.get('covers',[])];digestrefs.append({'batch':str(b),'digest':ref(p),'native_reader_receipt':ref(rp) if rp.exists() else None,'successful_native_reader':valid,'group':a.get('group')})
 if not valid:unverified.append(str(b));continue
 for kind in ['concerns','alerts']:
  for j,x in enumerate(a.get(kind,[])):
   i=x.get('id',x.get('item'));row={'origin':'original-Step4-reader-'+kind[:-1],'digest':ref(p),'digest_pointer':'/'+kind+'/'+str(j),'digest_index':j,'source_batch':str(b),'source_group':a.get('group'),'id':i,'original_observation':x,**status(i)}
   matches=[(n,v) for n,v in enumerate(routes) if str(v.get('source_batch'))==str(b) and v.get('alert_index')==j and kind=='alerts' and v.get('alert')==x]
   row['existing_Step4_owner_alert_dispositions']=[{'file':str(routefile),'pointer':'/routes/'+str(n),'record':v,'meaning':'Existing explicit root disposition, not newly inferred from severity or native output.'} for n,v in matches]
   if matches:row['routing']='existing-Step4-owner-disposition-recorded'
   elif i in pageowners:row['routing']='root-page-metadata-review'
   elif metadata.get(i,{}).get('status')=='published':row['routing']='selected-published-reader-concern-ordinary-owner-policy-not-draft-queue'
   elif row['ordinary_downstream_targets'] and not row['formal_successful_native_item_reviews']:row['routing']='ordinary-5.2-target-only-original-finding-still-visible'
   elif row['reader_concern_admission_candidate']:row['routing']='kept-true-unassigned-reader-concern-admission-candidate-guard-required'
   elif row['formal_successful_native_item_reviews']:row['routing']='actual-native-item-review-recorded-original-finding-closure-needs-owner-assessment'
   elif row['ordinary_downstream_targets']:row['routing']='ordinary-5.2-target-only-original-finding-still-visible'
   elif row['original_initial_assignments']:row['routing']='assigned-initial-lane-await-successful-native-item-review'
   else:row['routing']='strict-v2-outside-work-admission-or-owner-routing-needed'
   original.append(row)
# Exact unresolved outside report pointers: successful reports only, raw structured entries retained.
outside=[]
def walk(v,pointer,rr,outside_context=False):
 if isinstance(v,dict):
  action=str(v.get('action',''));direct=('open' in action or action=='route-outside-lane-finding')
  if direct:
   i=v.get('id',v.get('item'));outside.append({'report':rr['report'],'receipt':rr['receipt'],'unit':rr['unit'],'pointer':pointer,'kind':'native-open-ledger-finding','id':i,'actual':v,**(status(i) if i else {}),'routing':'strict-v2-work-admission-for-actual-outside-object-or-ordinary-5.2-target','confirmed_defect_by_this_inventory':False})
  for k,w in v.items():
   flag=outside_context or any(q in k.lower() for q in ['outside','other_reader_routes','owner_handoff','published_consumer_findings','published_consumer_alerts','existing_digest_concern','unresolved_reader'])
   if flag and w not in (None,[],{},'') and k not in ['source_urls']:
    ids=[]
    if isinstance(w,dict):ids=[w.get('id',w.get('item'))] if w.get('id',w.get('item')) else []
    if isinstance(w,list):ids=[z.get('id',z.get('item')) for z in w if isinstance(z,dict) and z.get('id',z.get('item'))]
    outside.append({'report':rr['report'],'receipt':rr['receipt'],'unit':rr['unit'],'pointer':pointer+'/'+k,'kind':'native-outside-lane-note','ids':ids,'actual':w,'confirmed_defect_by_this_inventory':False,'named_object_statuses':{i:status(i) for i in ids},'meaning':'Original native observation retained. Any independent current review or closure must be established separately; this note alone grants no scope.'})
    # Keep the exact original aggregate pointer once; do not invent individual free-text object bindings.
   elif isinstance(w,(list,dict)):walk(w,pointer+'/'+str(k),rr,flag)
 elif isinstance(v,list):
  for j,w in enumerate(v):walk(w,pointer+'/'+str(j),rr,outside_context)
for rr in reports:walk(rr['data'],'',rr)
# Record every successful decision/review inventory; no report-only file can supply native coverage.
reportrefs=[{k:v for k,v in rr.items() if k!='data'} for rr in reports]
byroute=collections.Counter(x['routing'] for x in original);unassigned=[x for x in original if x['reader_concern_admission_candidate'] and not x['existing_Step4_owner_alert_dispositions']]
summary={'run':R,'observed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'contexts_scanned':81,'genuine_successful_original_reader_contexts':81-len(unverified),'unverified_context_batches':unverified,'frozen_judge_verdict_count':len(verdicts),'frozen_frontier_count':len(frontier),'original_initial_rejection_assignments':sum(map(len,I['assignments'].values())),'raw_original_Luna_negative_verdicts':sum(v.get('keep') is False for v in verdicts),'selected_published_negatives_excluded_from_draft_assignments':10,'successful_initial_reports':len(reports),'mechanical_empty_reports':sum(x['mechanical_empty'] for x in reports),'report_files_not_yet_backed_by_successful_native_receipt':excluded,'original_concerns':sum(x['origin'].endswith('concern') for x in original),'original_alerts':sum(x['origin'].endswith('alert') for x in original),'original_observations_by_route':dict(byroute),'unassigned_kept_reader_concern_candidates':len(unassigned),'unresolved_native_outside_pointer_records':len(outside),'frozen_inputs':{'initial':ref(V/'initial-1.json'),'frontier':ref(V/'frontier.json'),'step4_verdicts':ref(V/'step4-verdicts.json'),'auditor_baseline':ref(P/(R+'-step5-auditor-baseline.json'))},'limits':'Structured JSON only. No worker journals/log payloads, source mathematical reading, canonical edits, authoring or gates. No finding is independently confirmed by this inventory; a downstream target is not defect closure. Current guard eligibility remains explicitly conditional where no current structured guard exists.'}
(O/'summary.json').write_text(json.dumps(summary,indent=2)+'\n');(O/'original-concern-alert-inventory.json').write_text(json.dumps(original,indent=2,ensure_ascii=False)+'\n');(O/'native-outside-finding-pointers.json').write_text(json.dumps(outside,indent=2,ensure_ascii=False)+'\n');(O/'successful-native-and-digest-inputs.json').write_text(json.dumps({'initial':reportrefs,'original_step4_digests':digestrefs},indent=2)+'\n');(O/'reader-concern-admission-candidates.json').write_text(json.dumps(unassigned,indent=2,ensure_ascii=False)+'\n');
print(json.dumps({k:v for k,v in summary.items() if k not in ['report_files_not_yet_backed_by_successful_native_receipt','frozen_inputs']},indent=2));print('candidate unique IDs',sorted({x['id'] for x in unassigned}));print('native outside objects',sorted({x.get('id') for x in outside if x.get('id')}))
