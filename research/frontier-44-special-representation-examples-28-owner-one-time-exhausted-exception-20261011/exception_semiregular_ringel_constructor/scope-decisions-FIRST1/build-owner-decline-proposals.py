from pathlib import Path
import json,hashlib,datetime,collections,copy
RUN='frontier-44-special-representation-examples-28'
BASE=Path('research')/(RUN+'-owner-one-time-exhausted-exception-20261011')
OUT=BASE/'exception_semiregular_ringel_constructor/scope-decisions-FIRST1'
H=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
REF=lambda p,pointer=None:dict(path=str(p),raw_sha256=H(p),**({'pointer':pointer} if pointer else {}))
LOAD=lambda p:json.loads(Path(p).read_text())
D=LOAD(OUT/'current-declines-full.json');S=LOAD(OUT/'current-approved-pair-scope-evidence.json')
AT=datetime.datetime.now(datetime.timezone.utc).isoformat()
assert len(D['current'])==454 and len(D['errors'])==458
assert len(S['rows'])==50 and all(r['current_scope_decision']['closed'] for r in S['rows'])
page_to_scope={p['id']:(i,row,p) for i,row in enumerate(S['rows']) for p in row['decline_pages']}
assert set(r['page'] for r in D['current'])<=page_to_scope.keys()
plan=LOAD('research/plan-spec.json');planned={p['id']:p for p in plan['pages']};item_homes={i if isinstance(i,str) else i['id']:p['id'] for p in plan['pages'] for i in p.get('items',[])}
missing=[r for r in D['current'] if r['destination'] not in [None,'owner-decision'] and r['destination'] not in planned and r['destination'] not in item_homes]
assert not missing
old_by_id={r['decline_id']:r for r in D['recorded']}
# These route resolutions do not invent source retrieval or theorem acceptance.
owner_cases={
 ('cyclotomic-klr-algebras-and-highest-weight-categorification','Sections 9.1-9.2'):('Keep the type-A survey treatment as optional corroboration. Preserve the approved general-Cartan categorification and normalized symmetric characteristic-zero global-basis contracts; the survey does not substitute for their local suppliers.',[]),
 ('cyclotomic-klr-algebras-and-highest-weight-categorification-examples','Section 9.2'):('Keep this survey result as optional type-A corroboration for the examples; do not narrow the declared local K0/G0 and parameter contracts.',[]),
 ('ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison','The remaining body of the paper (the Dipper-James'):('Preserve the recorded access limitation and retry history. The owner-approved batch50 independent ordinary polytabloid, integral Murphy and perfect-pairing construction supplies the selected comparison route; no full reading of the inaccessible original paper is claimed.', ['research/'+RUN+'-step3a-review-ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison.json']),
 ('ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison',"The remaining body of the paper (Murphy"):('Preserve the recorded original-paper access limitation. Retain the independent integral Murphy/cell and exact pairing local route approved for batch50; this decision neither claims the original paper was read nor makes its unread body a supplier.', ['research/'+RUN+'-step3a-review-ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison.json']),
 ('cyclotomic-hecke-and-quiver-hecke-algebras','Corollary 2:'):('Keep the historical full-source e0/A-infinity treatment deferred from this cyclic blockwise pair. Preserve the actual approved generic comparison through the bounded-rank local inverse/support/tower suppliers; do not interpret this harvest decline as removal of the current generic claim.', [str(BASE/'repair_klr_global_basis/consolidated-seventeen-actual-afterbinding-and-decision-eligibility.json')]),
 ('projective-functors-and-the-soergel-functor-in-category-o','Sections 4.1-4.4'):('Keep the extra Kostant-type and integral-closure source results outside the selected functor pair. Preserve its current local endomorphism/functor claims; no new page or source theorem is promised by this owner placement decision.',[]),
 ('cyclotomic-hecke-and-quiver-hecke-algebras','Diagram (4.10)'):('Retain the blockwise-page harvest deferral. The current tower compatibility obligation belongs to the approved generic local dictionaries and actual residue/Ariki consumers; preserve those claims rather than importing an unproved source diagram as a fallback.',[str(BASE/'repair_klr_global_basis/consolidated-seventeen-actual-afterbinding-and-decision-eligibility.json')])}
rows=[];by_group=collections.defaultdict(list);preserved=0;fresh=0
for idx,current in enumerate(D['current']):
 prior=old_by_id.get(current['decline_id']);exact=prior and prior.get('row_sha256')==current['row_sha256'] and prior.get('context_sha256')==current['context_sha256'] and prior.get('decision') in ['stands','owner-decision'] and bool(prior.get('evidence','').strip())
 si,scope,page=page_to_scope[current['page']]
 reason=current['reason'];assert reason.strip()
 route=None;route_refs=[]
 if current['destination']=='owner-decision':
  found=[value for (pg,prefix),value in owner_cases.items() if current['page']==pg and current['name'].startswith(prefix)]
  assert len(found)==1,(current['page'],current['name']);route,paths=found[0];route_refs=[REF(p) for p in paths]
 if exact:
  successor=copy.deepcopy(prior);preserved+=1;operation='preserve exact prior decision and evidence'
 else:
  successor=copy.deepcopy(current);successor['decision']='owner-decision';fresh+=1;operation='owner resolves missing or pending decline placement'
  dest=current['destination'];placement=('retain its recorded deferral to '+dest) if dest and dest!='owner-decision' else ('retain its recorded out-of-scope classification' if current['disposition']=='out-of-scope' else 'retain the recorded source-access/route deferral under the owner resolution')
  successor['evidence']='Owner authoring-scope decision: '+placement+' for '+current['page']+', preserving the current approved claim inventory. '+(' '+route if route else ' The recorded coverage reason is retained. This is scope placement, not new source-reading or proof acceptance.')+' Exact row and scope binding: '+str(OUT/'owner-decline-evidence.json')+'#/rows/'+str(idx)
 by_group[current['group']].append(successor)
 rows.append({'decline_id':current['decline_id'],'group':current['group'],'operation':operation,'unchanged_coverage_row':current,'recorded_scope_reason':reason,'destination_state':{'kind':'none'} if not current['destination'] else {'kind':'owner-decision'} if current['destination']=='owner-decision' else {'kind':'page','id':current['destination']} if current['destination'] in planned else {'kind':'item','id':current['destination'],'page':item_homes[current['destination']]},'scope_binding':{'evidence':REF(OUT/'current-approved-pair-scope-evidence.json','/rows/'+str(si)),'a_page':scope['a_page'],'native_scope_sha256':scope['scope_sha256'],'current_scope_closed':True,'claim_inventory_preserved':True},'actual_owner_route_resolution':route,'route_evidence':route_refs,'new_fulltext_reading_claimed':False,'new_mathematical_acceptance_claimed':False})
assert preserved==22 and fresh==432
# Explicit schema-based native decisions are the supported write model: refresh/check has no record mutator.
api={'authoritative_tool':REF('tools/scope-decisions.mjs'),'write_schema':'research/RUN-alpha-GROUP-scope-decisions.json: {version:1,run,group,decisions:[current identity/row/context fields,decision,evidence]}','allowed_decisions':['stands','owner-decision'],'guard_fields':['decline_id','row_sha256','context_sha256'],'native_commands':'refresh and check only; refresh creates pending rows and cannot invent evidence. No record CLI or exported mutation API exists. Root integrates the reviewed exact-schema records, then native check/refresh will retain them while their hashes remain exact.','scope_API_used':'tools/step3-decisions.mjs loadStep3,scopeDecision,scopeHash used read-only; no recordStep3 call'}
evidence={'version':1,'run':RUN,'recorded_at':AT,'author':'/root/exception_semiregular_ringel_constructor','authority':'Root delegated owner authoring-scope decline resolution for the complete current failed scope-decisions diagnostic; owner request to resolve all escalations within approved scope','original_owner_authoring_direction':REF('research/'+RUN+'-owner-authoring-direction.md'),'original_native_scope_gate_history':REF('research/'+RUN+'-owner-step3a-native-gates-and-before3b-pause.json'),'actual_gate_observation':REF(BASE/'exception_prefix_projectivity_constructor/gate-observation-packet.json'),'failure_summary':{'current_declines':454,'missing':406,'pending':26,'empty_evidence':26,'errors':458,'native_event_truncated':True,'diagnostic_readonly_retry_authorized':True},'full_readonly_diagnostic':REF(OUT/'full-readonly-diagnostic.txt'),'authoritative_algorithm_current_rows':REF(OUT/'current-declines-full.json'),'approved_native_pairs':50,'decline_pages':75,'current_native_scope_all_closed':True,'native_decline_API':api,'rows':rows,'preservation':{'coverage_rows_changed':0,'dispositions_changed':0,'destinations_changed':0,'stable_decline_ids_changed':0,'approved_claims_dropped':0,'existing_exact_decisions_preserved':22,'owner_resolutions':432},'boundary':'No new proof audit, full-text retrieval, external source reading, published change, native state/control write or gate passage is asserted; all mathematics and scope inventories remain intact; source access history remains historical evidence'}
(OUT/'owner-decline-evidence.json').write_text(json.dumps(evidence,indent=2,ensure_ascii=False)+'\n')
(OUT/'before').mkdir(exist_ok=True);(OUT/'proposed').mkdir(exist_ok=True)
writes=[]
for group,decisions in sorted(by_group.items()):
 canonical=Path('research')/(RUN+'-alpha-'+group+'-scope-decisions.json');proposal=OUT/'proposed'/canonical.name;beforefile=None
 if canonical.exists():
  beforefile=OUT/'before'/canonical.name
  if beforefile.exists():assert beforefile.read_bytes()==canonical.read_bytes()
  else:beforefile.write_bytes(canonical.read_bytes())
 proposal.write_text(json.dumps({'version':1,'run':RUN,'group':group,'decisions':decisions},indent=2,ensure_ascii=False)+'\n')
 writes.append({'group':group,'canonical_path':str(canonical),'before_file':str(beforefile) if beforefile else None,'before_raw_sha256':H(beforefile) if beforefile else None,'before_expected_kind':'regular-file' if beforefile else 'absent','proposed_path':str(proposal),'proposed_raw_sha256':H(proposal),'declines':len(decisions),'exact_prior_preserved':sum(r['decision']=='stands' for r in decisions),'owner_decisions':sum(r['decision']=='owner-decision' for r in decisions)})
# Apply the authoritative exact-match predicate to the proposed records without touching native paths.
proposal_records=[r for rows in by_group.values() for r in rows];byid={r['decline_id']:r for r in proposal_records};errors=[]
if len(byid)!=len(proposal_records):errors.append('duplicate')
for row in D['current']:
 got=byid.get(row['decline_id'])
 if not got:errors.append('missing '+row['decline_id']);continue
 if got['row_sha256']!=row['row_sha256'] or got['context_sha256']!=row['context_sha256']:errors.append('stale '+row['decline_id'])
 if got['decision'] not in ['stands','owner-decision']:errors.append('pending '+row['decline_id'])
 if not isinstance(got.get('evidence'),str) or not got['evidence'].strip():errors.append('empty '+row['decline_id'])
if set(byid)!={r['decline_id'] for r in D['current']}:errors.append('obsolete')
assert errors==[]
sourceguards=[REF('research/plan-spec.json'),REF('research/'+RUN+'-alpha-groups.json'),REF('research/'+RUN+'-owner-authoring-direction.md'),REF('tools/scope-decisions.mjs'),REF('tools/step3-decisions.mjs')]
sourceguards.extend(REF(Path('research')/(RUN+'-batch-'+str(batch)+'.coverage.json')) for batch in sorted({int(r['batch']) for r in D['current']}))
sourceguards.extend(REF(Path('research')/(RUN+'-batch-'+str(batch)+'.pages.json')) for batch in sorted({int(r['batch']) for r in D['current']}))
packet={'version':1,'run':RUN,'recorded_at':AT,'policy':'FIRST1-gate-triggered-scope-decline-owner-placement-repair','status':'complete-guarded-proposals-root-integration-pending','writes':writes,'decision_evidence':REF(OUT/'owner-decline-evidence.json'),'inputs':sourceguards,'historical_decisions_archive':[REF(p) for p in (OUT/'before').glob('*.json')],'native_API':api,'local_proposal_check':{'algorithm':'same current/recorded exact predicates as authoritative tool; proposed records only','current_declines':454,'proposed_decisions':len(proposal_records),'errors':0,'duplicates':0,'obsolete':0,'pending':0,'files':len(writes),'canonical_native_check_not_run_on_proposals':True,'no_native_or_canonical_writes':True},'history_and_counter_boundary':'FIRST1 exact gate failure bookkeeping pass; no historical escalation counter reset and no new mathematical review round or source retrieval','root_next_action':'Guard all current plan/coverage/manifest/alpha-group inputs, archive original two decision files and absence guards, integrate all17 reviewed native-schema files, then normal native scope-decisions check in the full required retry battery; any relevant input drift requires fresh exact context hashes without changing the owner placement choices'}
(OUT/'guarded-proposal-packet.json').write_text(json.dumps(packet,indent=2)+'\n')
(OUT/'checkpoint.json').write_text(json.dumps({'objective':'Resolve complete454 scope decline record obligations under original owner scope','verified_state':packet['local_proposal_check'],'scope_authority':evidence['original_owner_authoring_direction'],'proof_audits_or_source_reading':False,'blocked':False,'next_action':packet['root_next_action'],'packet':REF(OUT/'guarded-proposal-packet.json')},indent=2)+'\n')
print({'groups':len(writes),'declines':454,'preserved_prior':preserved,'owner_resolutions':fresh,'proposed_errors':len(errors),'special_owner_routes':sum(bool(r['actual_owner_route_resolution']) for r in rows)})
