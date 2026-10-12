from pathlib import Path
import copy,datetime,hashlib,json,re
BASE=Path('research/frontier-44-special-representation-examples-28-owner-one-time-exhausted-exception-20261011')
OUT=BASE/'exception_semiregular_ringel_constructor/cap-policy-reconciliation'
POLICY=Path('research/frontier-44-special-representation-examples-28-owner-codex-repair-round-limit.json')
OUT.mkdir(exist_ok=True)
H=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
REF=lambda p,pointer=None:dict(path=str(p),raw_sha256=H(p),**({'pointer':pointer} if pointer is not None else {}))
LOAD=lambda p:json.loads(Path(p).read_text())
AT=datetime.datetime.now(datetime.timezone.utc).isoformat()
oldraw=POLICY.read_bytes();old=json.loads(oldraw);new=copy.deepcopy(old)
before=OUT/('before-policy-'+H(POLICY)+'.json')
if before.exists():assert before.read_bytes()==oldraw
else:before.write_bytes(oldraw)
accepted={};aliases={};whole_sources=[];numeric_preservations=[]
archives={}
for p in BASE.rglob('*.md'):archives.setdefault(p.name,[]).append(p)
def add(id,expected,basis,pointer,kind,reviewer,extra=None):
 c=Path('items')/(id+'.md');actual=H(c);pres=None
 if actual!=expected:
  candidates=[p for p in archives.get(c.name,[]) if H(p)==expected]
  norm=lambda p:re.sub(rb'^dependency_level:[ \t]*[0-9]+[ \t]*$',b'dependency_level: NUMBER',p.read_bytes(),flags=re.M)
  matches=[p for p in candidates if norm(p)==norm(c)]
  if not matches:raise RuntimeError('No exact numeric-only preservation for '+id)
  pres={'id':id,'accepted_preimage':REF(matches[0]),'current_path':str(c),'current_raw_sha256':actual,'difference':'ONLY dependency_level frontmatter integer; every other byte identical'}
  numeric_preservations.append(pres)
 row={'id':id,'canonical_path':str(c),'current_raw_sha256':actual,'disposition':kind,'whole_evidence':REF(basis,pointer),'reviewer':reviewer,'new_mathematical_acceptance_by_this_bookkeeping':False}
 if extra:row.update(extra)
 if pres:row['numeric_preservation']=pres
 if id in accepted:row['other_whole_evidence']=accepted[id].get('other_whole_evidence',[])+[accepted[id]['whole_evidence']]
 accepted[id]=row
# Authoritative post-mechanical-173 and actual-CE census, supplied by root.
kp=BASE/'repair_klr_global_basis/final-owned-all-current-whole-closure-after-mechanical173-and-ce.json';kd=LOAD(kp)
assert H(kp)=='06f2af577bc552517f3403d0252e1548c467496a2bfcd7d2dadbfbed80c9ebad'
assert kd['remaining_genuine_mathematical_holds']==[] and kd['unresolved_known_original_whole_hold_ids']==[]
whole_sources.append(REF(kp))
for i,r in enumerate(kd['original_subjects']):
 id=r.get('subject',r['id']);aliases[r['id']]=id
 add(id,r['current_raw_sha256'],kp,'/original_subjects/'+str(i),'RETAIN_PRIOR_CLOSED_MATHEMATICS_CURRENT_CARRIER_AND_USED_CLAUSES_BOUND',kd['reviewer'],{'preserved_disposition':r['preserved_disposition'],'original_source_basis':REF(r['source_basis'])})
for i,r in enumerate(kd['expanded_current_whole_accepted_subjects']):
 packet=r['retained_whole_actual_review_packet'];assert H(packet['path'])==packet['raw_sha256']
 add(r['id'],r['current_raw_sha256'],packet['path'],None,'CLOSED_ACTUAL_WHOLE_CLAIM_AND_REQUIRED_USES',kd['reviewer'],{'final_census_row':REF(kp,'/expanded_current_whole_accepted_subjects/'+str(i))})
fp=BASE/'repair_step3_level_one_fock_binding/final-actual-full-fock-supplier-consumer-sufficiency.json';fd=LOAD(fp);whole_sources.append(REF(fp))
for i,r in enumerate(fd['whole_claim_decision_recommendations']):
 assert r['whole_actual_local_verdict']=='sufficient'
 add(r['id'],r['current_raw_sha256'],fp,'/whole_claim_decision_recommendations/'+str(i),'CLOSED_ACTUAL_WHOLE_CLAIM_AND_REQUIRED_USES',fd['reviewer'],{'ordinary_first_literal_findings_round':fd['ordinary_first_literal_findings_round'],'Fock_owner_exception_passes_consumed':fd['owner_exception_passes_consumed']})
cp=BASE/'repair_cell_head_classification/final-mechanical-whole-receipt-refresh-eligibility.json';cd=LOAD(cp);whole_sources.append(REF(cp))
for i,r in enumerate(cd['previous_whole_accepted_subjects']):
 add(r['id'],r['current_item']['raw_sha256'],r['accepted_whole_verdict_evidence']['path'],None,'RETAIN_EXISTING_WHOLE_ACCEPTANCE_MATHEMATICAL_CARRIER_PRESERVED',cd['actual_reviewer'],{'whole_preservation_row':REF(cp,'/previous_whole_accepted_subjects/'+str(i)),'original_whole_evidence':r['original_whole_review_evidence']})
cp8=BASE/'repair_cell_head_classification/classifier8-and-actual83-current-decision-scope-packet.json';c8=LOAD(cp8);whole_sources.append(REF(cp8))
for i,r in enumerate(c8['full_claim_decisions']):
 assert r['verdict']=='COMPLETE_RICH_WHOLE_CLAIM_SUFFICIENT'
 add(r['id'],r['current_raw_sha256'],cp8,'/full_claim_decisions/'+str(i),'CLOSED_ACTUAL_WHOLE_CLAIM_AND_REQUIRED_USES',c8['actual_reviewer'],{'ordinary_classifier_rounds_retained':c8['ordinary_classifier_rounds'],'owner_exception_pass':c8['owner_exception_pass']})
cepath=BASE/'repair_klr_global_basis/last-ce-actual-whole-afterbinding-and-eligibility.json';ce=LOAD(cepath)
assert H(cepath)=='6be4f18c563f0fa5fbc5527cad713dd240c92a7c66e1217b4c95b93cfa3bf50f'
assert ce['verdict']=='SUFFICIENT_WHOLE_ACTUAL_COUNTEREXAMPLE_AND_CURRENT_PREREQUISITES'
assert H(ce['integration_receipt']['path'])==ce['integration_receipt']['raw_sha256']
assert H(ce['whole_proof_basis']['path'])==ce['whole_proof_basis']['raw_sha256']
add(ce['id'],ce['current_raw_sha256'],cepath,None,'CLOSED_ACTUAL_WHOLE_COUNTEREXAMPLE_AND_REQUIRED_USES',ce['reviewer'],{'actual_root_integration':ce['integration_receipt'],'whole_proposed_approval':ce['whole_proof_basis'],'old_clause_only_seal_not_promoted':True})
whole_sources.append(REF(cepath))
rootreceipts=[REF(p) for p in sorted(BASE.glob('root*/integration.json'))]
for id,row in accepted.items():
 row['root_actual_receipts']=[r for r in rootreceipts if id in Path(r['path']).read_text()]
# Update current active labels only for exact covered subjects; archive every prior row in full.
changes=[]
def subjects(r,key):
 ids=([key] if key in accepted or key in aliases else ([r['subject']] if r.get('subject') else (r.get('items') or r.get('subjects') or [])))
 if isinstance(ids,str):ids=[ids]
 return list(dict.fromkeys(aliases.get(x,x) for x in ids))
def update(r,pointer,ids):
 if not ids or any(x not in accepted for x in ids):return
 prior=copy.deepcopy(r);changed=False
 if 'status' in r:r['status']='RESOLVED_CURRENT_ACTUAL_WHOLE_BINDING_ORIGINAL_HISTORY_AND_CAP_RETAINED';changed=True
 if 'state' in r:r['state']='Current exact mathematical obligations closed by bound whole evidence; original rounds and observations retained as history';changed=True
 if r.get('canonical_integration_blocked') is True:r['canonical_integration_blocked']=False;changed=True
 rr=r.get('recovery_resolution')
 if isinstance(rr,dict) and rr.get('disposition') in ['INHERITED_EXHAUSTED_UNRESOLVED','SPENT_CLOSED_UNCHANGED']:
  rr['disposition']='CURRENT_ACTUAL_WHOLE_BINDING_CLOSED_HISTORY_RETAINED'
  rr['reason']='Actual existing lead whole evidence and canonical/root binding supersede the older pending observation; this bookkeeping creates no mathematical acceptance or new repair'
  rr['permission']='No third ordinary repair or renewed exception is authorized; current exact claim closure is established by the cited original mathematical reviewer'
  changed=True
 if changed:
  r['current_whole_disposition_binding']={'recorded_at':AT,'subjects':ids,'whole_evidence':[accepted[x]['whole_evidence'] for x in ids],'bookkeeping_only':True,'counter_reset':False}
  changes.append({'policy_pointer':pointer,'prior_row':prior,'prior_policy_archive':REF(before,pointer),'current_subjects':ids})
for key,r in new.get('step3_item_escalations',{}).items():update(r,'/step3_item_escalations/'+key,subjects(r,key))
for key,r in new.get('current_authenticated_first_finding_allocations',{}).items():update(r,'/current_authenticated_first_finding_allocations/'+key,subjects(r,key))
# Necessary newly confirmed supplier literals retain ordinary FIRST1 counting, separately from consuming exhausted exceptions.
groups=[
 ('parabolic-HW-structural-local-literals-FIRST1','thm-parabolic-category-o-is-a-highest-weight-category',['Minimal quotient length must be maximal for the least-kernel reflector','Ordinary Verma surjects onto generalized Verma, not conversely','Ext splitting must use the precise raised-top root order and finite Levi simple span','Projective generalized-standard flags require the graded PBW/free-summand construction'],'structural-hw-successor/guarded-proposal.json'),
 ('finite-HW-flag-criterion-local-literals-FIRST1','def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category',['Injective envelope is not generally its costandard','Heredity ideal is Ae tensor_eAe eA, not Ae','All positive Ext and Tor/quotient induction need actual proof'],'criterion-guarded-proposal.json'),
 ('parabolic-semiregular-restricted-normal-order-FIRST1','lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map',['Full adjoint trace is not the polarized crossing/g0 trace','Whole radical is not degree one','Unrestricted endomorphisms give completion','Phi keeps the source parabolic until Chevalley pullback'],'checkpoint.json'),
 ('central-CWZ-negative-chart-and-normalized-edge-FIRST1','lem-type-a-tableau-central-summands-are-single-linkage-blocks',['CWZ q-positive canonical chart requires q=s^-1 and toral inversion to the source negative T chart','Dual normalized bottom inclusion requires the maximal standard trace','Normalized tilting need not have simple head at its normalized label'],'remaining-supplier-wave-v2/packet.json'),
 ('tilting-arbitrary-sum-multiplicity-and-incomparability-FIRST1','thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o',['Arbitrary tilting may have incomparable maxima and multiplicity greater than one; use entire-support lower ideal, multiple trace, one-copy Ext/Fitting split'],'remaining-supplier-wave-v2/packet.json'),
 ('Ringel-positive-Ext-costandard-target-FIRST1','def-the-ringel-dual-of-a-finite-highest-weight-ideal',['Tilting Ext argument needs a costandard flag in the second variable, not standard/standard orthogonality'],'criterion-seven-used-clauses-and-surgeries.json'),
 ('specialization-counterexample-inherited-AC-and-parameter-typing-FIRST1',ce['id'],['Carry the actual supplier inherited AC while finite computations use no additional choice','Keep formal grading parameter separate from numerical Hecke parameter; the whole counterexample requires actual whole binding'],None)]
first=[]
for finding,id,literals,authorfile in groups:
 assert id in accepted
 row={'finding':finding,'subjects':[id],'round':1,'maximum_rounds':2,'status':'CLOSED_FIRST_CONFIRMED_EXACT_LITERAL_WITH_ACTUAL_WHOLE_BINDING','exact_literals':literals,'same_reviewer':'/root/repair_klr_global_basis','whole_evidence':accepted[id]['whole_evidence'],'counter_reset':False,'same_grouped_pass_no_extra_cycle':True,'history_search_limit':'No authenticated exhausted identity for these exact prerequisite literals was asserted; original exhausted consuming routes remain separate'}
 if authorfile:row['constructor_evidence']=REF(BASE/'exception_semiregular_ringel_constructor'/authorfile)
 else:row['whole_actual_afterbinding']=REF(cepath);row['prior_FIRST1_boundary']='Prior exact forgetful-typing FIRST1 and all original counters preserved; no round is refunded or added by this reconciliation'
 first.append(row)
new['new_findings'].extend(first)
new['historical_observation_boundary']={'before_policy':REF(before),'original_new_findings_prefix_length':len(old['new_findings']),'meaning':'Preexisting new_findings prefix and unmodified unrelated old status records remain historical observations; current active status for exact rebound subjects is the updated row and current_cap_reconciliation. No old count or history is erased.'}
oldhold=new['all_gates_hold_for_exhausted_gap'];new['all_gates_hold_for_exhausted_gap']=False
new['current_cap_reconciliation']={'version':1,'recorded_at':AT,'status':'CLOSED_ALL_CURRENT_KNOWN_MATHEMATICAL_OBLIGATIONS_ACTUAL_BINDINGS','mode':'single grouped bookkeeping batch; no new mathematical audit','before_policy':REF(before),'historical_status_updates':changes,'whole_current_closed_dispositions':[accepted[x] for x in sorted(accepted)],'new_FIRST1_exact_findings':first,'owner_exception_separate':{'authority':REF(BASE/'authorization.json'),'ordinary_maximum_repair_rounds':2,'old_ordinary_counters_reset':False,'extra_exception_passes_per_exhausted_finding':1,'classification':{'ordinary_rounds_retained':2,'one_time_owner_pass':1,'actual_whole_evidence':REF(cp8),'spent_fixed_core_exception_not_renewed':True},'exhausted_sign_route':{'ordinary_round_retained':old['step3_item_escalations']['prop-sign-duality-and-ringel-duality-match-fock-space-involutions']['repair_round'],'one_time_authority':REF(BASE/'authorization.json'),'actual_whole_evidence':accepted['prop-sign-duality-and-ringel-duality-match-fock-space-involutions']['whole_evidence']},'Fock_whole_review_exception_passes_recorded':0,'no_extra_authority_created':True},'active_current_exhausted_gap_subjects':[],'pending_whole_claims':[],'active_gate_hold_flag_change':{'pointer':'/all_gates_hold_for_exhausted_gap','historical_value':oldhold,'current_value':False,'old_value_archive':REF(before,'/all_gates_hold_for_exhausted_gap'),'actual_final_CE':REF(cepath),'actual_final_zero_owned_hold_census':REF(kp),'not_a_gate_pass':True},'source_whole_packets':whole_sources,'root_actual_waves':rootreceipts,'numeric_only_preservation_checks':numeric_preservations,'clause_only_limit':'83 incoming classifier use seals and the six Fock consumed-clause-only subjects confer no new whole acceptance; only explicit whole rows or preserved prior whole evidence close their own exact subject','unrelated_old_rows':'Unchanged unrelated historical observations are retained; no closure or new reviewer attribution inferred for them','old_histories_counters_and_max2_preserved':True,'new_mathematical_audits':False,'new_repair_rounds_by_this_bookkeeping':0,'native_writes':False,'gate_attempts':False,'next_action':'Root integrates only after verifying exact proposal/current evidence guards; final native currency pass and ordinary gates remain root-owned, with no new mathematics inferred'}
# Assert every preexisting counter/cap field at its original pointer is unchanged.
def counter_scan(v,parts=()):
 if isinstance(v,dict):
  for k,x in v.items():
   if not isinstance(x,(dict,list)) and re.search(r'round|counter|count|maximum|pass.*consumed',k,re.I):yield parts+(k,),x
   yield from counter_scan(x,parts+(k,))
 elif isinstance(v,list):
  for i,x in enumerate(v):yield from counter_scan(x,parts+(i,))
def get(v,parts):
 for p in parts:v=v[p]
 return v
counters=list(counter_scan(old))
for p,v in counters:assert get(new,p)==v,('changed counter',p)
assert new['maximum_repair_rounds']==2
assert new['new_findings'][:len(old['new_findings'])]==old['new_findings']
assert POLICY.read_bytes()==oldraw
proposal=OUT/'proposed-owner-codex-repair-round-limit.json';proposal.write_text(json.dumps(new,indent=2,ensure_ascii=False)+'\n')
guard={'version':1,'run':old['run'],'canonical_path':str(POLICY),'before_file':str(before),'before_raw_sha256':H(before),'proposed_path':str(proposal),'proposed_raw_sha256':H(proposal),'required_actual_final_CE':REF(cepath),'required_final_zero_owned_hold_census':REF(kp),'all_evidence_guards':[REF(p['path']) for p in whole_sources+rootreceipts],'mechanical_verification':{'existing_counter_fields_checked':len(counters),'all_counter_fields_preserved':True,'maximum_repair_rounds':2,'original_new_findings_prefix_preserved':True,'current_closed_whole_subjects':len(accepted),'updated_old_status_records':len(changes),'new_exact_FIRST1_groups':len(first),'pending_whole_claims':0,'all_gates_hold_for_exhausted_gap':False,'old_true_archived':True,'canonical_policy_written':False,'native_calls':False,'gate_calls':False},'activation':'Real final CE integration and actual whole afterbinding plus exact final census are now present and hash-bound; no proposal-only closure remains','before_guard_must_match_at_root_integration':True}
(OUT/'guarded-proposal.json').write_text(json.dumps(guard,indent=2)+'\n')
(OUT/'checkpoint.json').write_text(json.dumps({'objective':'Guarded current CAP bookkeeping successor','status':'complete, root integration pending','proposal':REF(proposal),'guard':REF(OUT/'guarded-proposal.json'),'verified_state':guard['mechanical_verification'],'next_action':'Root compares exact before/evidence guards and integrates; native/gates remain root-owned'},indent=2)+'\n')
print(guard['mechanical_verification'])
print('Proposal:',proposal)
