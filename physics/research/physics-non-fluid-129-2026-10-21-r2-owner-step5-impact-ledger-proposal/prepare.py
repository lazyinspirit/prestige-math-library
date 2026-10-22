from pathlib import Path
import json,hashlib,datetime,shutil
R='physics-non-fluid-129-2026-10-21-r2';B=Path(f'research/{R}-owner-step5-impact-ledger-proposal');W=Path(f'research/{R}-step5-v2');guards={}
h=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
def arc(p):
 p=Path(p);t=B/'preimages'/p;t.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,t);v={'path':str(p),'raw_sha256':h(p),'archive':str(t),'archive_raw_sha256':h(t)};guards[str(p)]=v;return v
colp=W/'impact-initial-1-collected.json';col=json.loads(colp.read_text());arc(colp);assert col['errors']==[] and len(col['reviews'])==116 and len(col['changed'])==6 and len(col['restated'])==3 and not col['created_items']
packp=W/'impact-initial-1.json';pack=json.loads(packp.read_text());arc(packp)
ledgerp=Path('research/defect-ledger.jsonl');arc(ledgerp);ledger=[json.loads(l) for l in ledgerp.read_text().splitlines() if l]
configs=[('cex-emg-fx-constant-radius-rigidity','1','18','/ledger_updates/3','nonfatal','Counterexample 1.1 and owning batch-18 derivation step-1-1'),('thm-csm-frontier-finite-rate-forward-equation','1','94','/ledger_updates/defect_ledger/3','nonfatal','Facts F3/F4; Proof 2.1'),('thm-csm-frontier-finite-jarzynski','3','94','/ledger_updates/defect_ledger/2','nonfatal','Facts F4; Proof 4.1'),('pthm-emx-weak-poynting-uniqueness','2','4','/repair_notes/owner_referrals/0',None,'Proof 5.1; title; Statement and physical_scope'),('pthm-emx-lorentz-reciprocity','2','6','/repair_notes/downstream_reviews/1',None,'Statement anisotropic specialization; L2; Proof 3.1'),('pthm-emx-uniaxial-dispersion','3','6','/repair_notes/downstream_reviews/0',None,'Statement physical interpretation and physical_scope')]
def pointer(o,p):
 for k in p.strip('/').split('/'):o=o[int(k)] if isinstance(o,list) else o[k]
 return o
entries=[];templates=[]
for sid,u,origin,op,origseverity,loc in configs:
 rp=W/f'step5-v2-impact-initial-r1-u{u}.json';rep=json.loads(rp.read_text());rg=arc(rp)
 ix=next(i for i,x in enumerate(rep['reviews']) if x['id']==sid);rev=rep['reviews'][ix];assert rev['disposition']=='repaired' and rev['uncertain'] is False
 cix=next(i for i,x in enumerate(col['reviews']) if x['id']==sid);assert col['reviews'][cix]==rev and col['post'][sid]==rev['post_sha256']
 assert sid in pack['assignments'][u]
 dp=Path(f'research/{R}-dispatch/alpha-repair-step5-v2-impact-initial-r1-u{u}.result.json');disp=json.loads(dp.read_text());arc(dp);assert disp['ok'] and disp['exit_code']==0
 initialp=W/f'step5-v2-initial-r1-u{origin}.json';initial=json.loads(initialp.read_text());ig=arc(initialp);obs=pointer(initial,op)
 ip=Path(f'research/{R}-dispatch/alpha-adjudicate-step5-v2-initial-r1-u{origin}.result.json');idisp=json.loads(ip.read_text());arc(ip)
 sp=Path(f'items/{sid}.md');sg=arc(sp)
 prior=[x for x in ledger if x.get('run')==R and x.get('subject')==sid]
 repairrows=[]
 def collect(v,p=''):
  if isinstance(v,dict):
   if v.get('subject')==sid and any(k in v for k in ['status','proposal','outcome','disposition']):repairrows.append({'json_pointer':p,'record':v})
   else:
    for k,w in v.items():collect(w,p+'/'+k)
  elif isinstance(v,list):
   for i,w in enumerate(v):collect(w,p+'/'+str(i))
 collect(rep.get('repair_notes',{}),'/repair_notes')
 supplier_event=sid in ['pthm-emx-lorentz-reciprocity','pthm-emx-uniaxial-dispersion']
 severity=origseverity or ('nonfatal' if any(x['record'].get('outcome')=='confirmed_nonfatal' or x['record'].get('severity')=='nonfatal' for x in repairrows) else None)
 if sid=='pthm-emx-weak-poynting-uniqueness':severity='nonfatal' # explicit actual impact-u2 nested ledger_updates outcome
 origin_type='initial-supplier-interface/downstream-use-observation' if supplier_event else 'explicit-initial-owner-referral'
 flags=['canonical_class_missing_requires_root_taxonomy','canonical_subclass_missing_requires_root_taxonomy','canonical_location_requires_root_normalization']
 if supplier_event:flags+=['initial_consumer_disposition_unaffected_not_a_defect_referral','current_defect_first_attributed_to_native_impact_repair']
 if prior:flags+=['prior_same_subject_rows_are_different_recorded_defects_keep_unchanged']
 if origseverity is None:flags+=['severity_from_actual_impact_report_not_initial_consumer_finding']
 row={'defect_id':f'{R}-impact-initial-r1-{sid}','run':R,'at':disp['ended_at'] if supplier_event else idisp['ended_at'],'class':None,'subclass':None,'severity':severity,'location':None,'subject':sid,'caught_at_stage':'5-adjudicate','caught_by_role':'owner' if supplier_event else 'final-adjudicator','disposition':'fixed','batch':origin,'detail':rev['reason'],'evidence':[{'path':str(initialp),'note':f'Original native observation {op}; preserve its exact original disposition.'},{'path':str(rp),'note':f'Actual collected native repaired review /reviews/{ix}; no original judge tuple is claimed.'},{'path':str(colp),'note':f'Genuine collected initial impact review /reviews/{cix}; errors empty.'}],'adjudication_ref':[{'path':str(rp),'id':sid,'review_pointer':f'/reviews/{ix}','step5_phase':'impact-initial','step5_round':1,'post_sha256':rev['post_sha256'],'review_context_sha256':rev['review_context_sha256']}],'native_impact_phase':'impact-initial','native_impact_round':1,'native_impact_owner':disp['label'],'native_impact_model':disp['model'],'native_impact_review_sha256':rev['post_sha256']}
 templates.append(row)
 entries.append({'subject':sid,'action':'append-attributed-closed-native-impact-correction-after-root-taxonomy','already_recorded_same_defect':False,'supersedes':[],'prior_same_subject_rows':prior,'prior_row_disposition':'none' if not prior else 'retain all; Step3 locator/rank polish differs from current finite-band qualification omission','origin_type':origin_type,'origin':{'report':ig,'json_pointer':op,'observation_verbatim':obs,'initial_dispatch':{'path':str(ip),'raw_sha256':h(ip),'model':idisp['model'],'label':idisp['label']}},'native_impact':{'report':rg,'review_pointer':f'/reviews/{ix}','review_verbatim':rev,'repair_ledger_reconciliation':repairrows,'dispatch_result':{'path':str(dp),'raw_sha256':h(dp),'label':disp['label'],'model':disp['model'],'profile':disp['profile'],'ok':disp['ok']},'collection':{'path':str(colp),'raw_sha256':h(colp),'review_pointer':f'/reviews/{cix}','post_sha256':col['post'][sid]},'pack_before_fingerprint':pack['before'][sid]},'current_source_guard':sg,'actual_classification':{'initial_severity':origseverity,'initial_defect_type':obs.get('defect_type'),'initial_disposition':obs.get('disposition',obs.get('proposed_status',obs.get('status'))),'impact_severity':severity,'canonical_class':None,'canonical_subclass':None,'native_location_verbatim':loc},'flags':flags,'canonical_template':row,'unresolved_root_fields':['class','subclass','location'],'no_original_judge_tuple':True,'current_scientific_review':False})
(B/'adoption-proposal.json').write_text(json.dumps({'version':1,'run':R,'preparer':'/root/step5_noether_referral','scope':'Collected impact ledger bookkeeping only','applied':False,'append_ready':False,'entries':entries},indent=2,ensure_ascii=False)+'\n')
(B/'canonical-row-templates.json').write_text(json.dumps(templates,indent=2,ensure_ascii=False)+'\n')
(B/'evidence-guards.json').write_text(json.dumps(guards,indent=2)+'\n')
(B/'report.json').write_text(json.dumps({'version':1,'run':R,'preparer':'/root/step5_noether_referral','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'collected_wave':{'path':str(colp),'raw_sha256':h(colp),'errors':col['errors'],'reviews':len(col['reviews']),'changed':col['changed'],'restated':col['restated'],'created_items':col['created_items'],'ledger_updates':col['ledger_updates']},'scope_subjects':[x[0] for x in configs],'proposed_new_closed_native_impact_rows':6,'explicit_initial_owner_referrals':4,'initial_supplier_interface_observations_with_unaffected_consumer_dispositions':2,'existing_same_defect_canonical_rows':0,'existing_different_same_subject_rows':sum(len(x['prior_same_subject_rows']) for x in entries),'taxonomy_root_judgement_required':6,'source_edits':False,'canonical_edits':False,'native_edits':False,'new_science_or_repair_cycle':False,'reading_limits':'Read only six actual collected repaired reviews, their repair_notes ledger reconciliation/proposals, exact originating initial referral or supplier-impact observation, current canonical same-subject rows, actual successful dispatch receipts and collection/assignment guards. Six source carriers archived/hashed only for currency; no proof investigation or independent scientific/source-reading/audit claim.','root_action':'At drained boundary, confirm guards and absence of a newly adopted same-defect row, supply canonical class/subclass/location, adopt six truthful fixed native-impact rows, preserve original observations and unrelated prior rows. No original judge-adjudication tuple is created.'},indent=2,ensure_ascii=False)+'\n')
print('Six actual collected repaired reviews matched exactly. Four explicit initial referrals; two initial supplier-interface observations. All six canonical taxonomy fields require Root judgement; templates deliberately not append-ready.')
