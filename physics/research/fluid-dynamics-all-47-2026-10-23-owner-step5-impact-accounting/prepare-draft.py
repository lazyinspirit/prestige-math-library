from pathlib import Path
import json,hashlib,subprocess,shutil,datetime
RUN='fluid-dynamics-all-47-2026-10-23';base=Path(__file__).resolve().parent;root=base.parent.parent;work=root/'research'/(RUN+'-step5-v2')
def read(p):return json.loads(Path(p).read_text())
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def rel(p):return str(Path(p).relative_to(root))
def ref(p):return {'path':rel(p),'sha256':sha(p)}
def write(n,x):
 with (base/n).open('x')as f:f.write(json.dumps(x,indent=2,ensure_ascii=False)+'\n')
bindings={}
def bind(p):
 p=Path(p);bindings[rel(p)]=sha(p);return ref(p)
phases=['impact-initial','impact-initial-pass-2','impact-initial-pass-3'];reports={};packs={};collections={};units=[]
progress=read(work/'impact-initial-1-progress.json');closed_path=work/'impact-initial-1-closed.json';closed=read(closed_path)
assert progress['complete']is True and progress['passes']==phases and closed['errors']==[]and progress['closed_receipt']['sha256']==sha(closed_path)
bind(closed_path);bind(work/'impact-initial-1-progress.json')
for phase in phases:
 pack=read(work/(phase+'-1.json'));c=read(work/(phase+'-1-collected.json'));assert c['errors']==[]and c['run']==RUN and c['phase']==phase
 packs[phase]=pack;collections[phase]=c;bind(work/(phase+'-1.json'));bind(work/(phase+'-1-collected.json'))
 for u in ['1','2','3']:
  label=f'step5-v2-{phase}-r1-u{u}';rp=work/(label+'.json');x=read(rp);dp=root/'research'/(RUN+'-dispatch')/('alpha-repair-'+label+'.result.json');d=read(dp)
  assert x['run']==RUN and x['phase']==phase and x['round']==1 and str(x['unit'])==u
  assert x['decisions']==[]and x['created_items']==[]
  assert d['ok']is True and d['run']==RUN and d['role']=='alpha-repair'and d['model']=='gpt-6.1-sol'and d['provider_effort']=='high'and d['ended_at']
  assert c['evidence'][str(rp)]==sha(rp)and c['evidence'][str(dp)]==sha(dp)
  bind(rp);bind(dp);task=work/(label+'.task.md')
  if task.exists():bind(task)
  reports[(phase,u)]=x;units.append({'phase':phase,'unit':u,'report':ref(rp),'dispatch':ref(dp),'changed_review_ids':[z['id']for z in x['reviews']if z['disposition']=='repaired'],'review_count':len(x['reviews']),'no_original_adjudications':True})
assert len(collections[phases[0]]['changed'])==8 and len(collections[phases[1]]['changed'])==2 and collections[phases[2]]['changed']==[]
guard_command=['node',rel(base/'inspect-current-guards.mjs')];result=subprocess.run(guard_command,cwd=root,capture_output=True,text=True);assert result.returncode==0,result.stderr
guards=json.loads(result.stdout);write('current-source-guards.json',guards);bind(base/'inspect-current-guards.mjs')
by_guard={x['id']:x for x in guards}
for g in guards:
 assert g['content_sha256']==closed['post'][g['id']]
 p=root/g['path'];assert sha(p)==g['raw_sha256']
 # Source guards are exact observations, not a new acceptance or supplier audit.
bindings_current={g['path']:g['raw_sha256']for g in guards}

# Canonical ledger is a changing observation only. Never bind its mutable path as permanent authority.
live_ledger=root/'research/defect-ledger.jsonl';ledger=[json.loads(l)for l in live_ledger.read_text().splitlines()if l]
now=datetime.datetime.now(datetime.timezone.utc).isoformat()
subjects=set(by_guard)
existing=[r for r in ledger if r.get('run')==RUN and (r['subject']in subjects or 'local-h-sectionwise-equation'in r['defect_id'])]
write('observed-existing-canonical-rows.json',{'observed_at':now,'mutable_ledger_not_permanently_bound':True,'rows':existing,'require_fresh_root_ownership_check_before_append':True})
specs=[
 ('def-fd-conserving-bgk','impact-initial','1','bgk-definition-inherited-choice','missing-hypothesis','definition','Explicit inherited AC_omega in the finite BGK Definition; Gaussian/kinetic supplier convention was already assumed.',True),
 ('thm-fd-homogeneous-bgk-limit','impact-initial','1','homogeneous-bgk-inherited-choice','missing-hypothesis','statement','Explicit inherited AC_omega in Statement, Given and F2; unchanged weighted solution and rates.',True),
 ('prop-fd-bgk-entropy-rate','impact-initial','2','bgk-entropy-rate-inherited-choice','missing-hypothesis','statement','Explicit inherited AC_omega for the current Gaussian/kinetic moment and entropy argument.',False),
 ('pthm-fd-bgk-equilibration','impact-initial','2','physical-bgk-inherited-choice','missing-hypothesis','statement','Explicit inherited AC_omega in the finite BGK model deduction; no stronger axiom or reduced uniqueness class.',False),
 ('pthm-fd-ideal-gas-euler-interface','impact-initial','2','ideal-gas-euler-inherited-choice','missing-hypothesis','statement','Explicit inherited AC_omega at the Gaussian moment application; strong convergence and Euler conclusions preserved.',False),
 ('pthm-fd-boltzmann-entropy','impact-initial','2','boltzmann-entropy-inherited-choice','missing-hypothesis','statement','Only the separately added inherited measure AC_omega explicitness. Sectionwise equation propagation is linked maintenance of the existing local-H owner finding, not a duplicate defect.',False),
 ('prop-fd-viscous-entropy-passage','impact-initial','2','viscous-entropy-initial-strip','invalid-inference','proof-step','Distinct missing uniform O(delta) initial-strip estimate in Proof 3.1, beyond the already recorded initial-range bound justification.',False),
 ('pthm-fd-newtonian-kinetic-decay','impact-initial','2','newtonian-energy-integration','invalid-inference','proof-step','Undeclared bounded-domain divergence integration and differentiation of the energy integral; exact existing hypotheses support the locally supplied finite-mesh and uniform derivative arguments.',False),
 ('post-fd-bgk-relaxation','impact-initial-pass-2','1','bgk-postulate-inherited-choice','missing-hypothesis','statement','Explicit inherited AC_omega from the BGK/Maxwellian interface; no new arbitrary Choice or DC.',False),
 ('texp-fd-bgk-preparation','impact-initial-pass-2','3','bgk-preparation-inherited-choice','missing-hypothesis','statement','Explicit inherited AC_omega in Statement, Given, F1 and A1 for the current equilibration supplier.',False),
 ('post-fd-bgk-relaxation','impact-initial-pass-2','1','golse-bgk-source-locator','citation-inaccurate','frontmatter','Distinct Golse source-locator repair: section II/PDF pp.27-29 becomes section V/The BGK Operator/PDF p.28, according to this native owner’s actual source reading.',False)
]
rows=[];mapping=[];native_guards=[]
def rp(phase,u):return work/f'step5-v2-{phase}-r1-u{u}.json'
def dp(phase,u):return root/'research'/(RUN+'-dispatch')/f'alpha-repair-step5-v2-{phase}-r1-u{u}.result.json'
for id,phase,u,suffix,sub,loc,scope,native_severity in specs:
 report=reports[(phase,u)];original_review=next(z for z in report['reviews']if z['id']==id)
 assert original_review['disposition']=='repaired'and original_review['uncertain']is False
 assert original_review['post_sha256']==collections[phase]['post'][id]==by_guard[id]['content_sha256']
 latest=next(z for z in closed['reviews']if z['id']==id)
 origins=[(ph,un,z)for (ph,un),rr in reports.items()for z in rr['reviews']if z==latest];assert len(origins)==1
 last_phase,last_unit,_=origins[0]
 identifier=RUN+'-step5-impact-initial-'+suffix;assert not any(z['defect_id']==identifier for z in ledger)
 review_pointer='/reviews/'+str(next(i for i,z in enumerate(report['reviews'])if z['id']==id))
 parent_review_pointer='/reviews/'+str(next(i for i,z in enumerate(closed['reviews'])if z['id']==id))
 row={'defect_id':identifier,'run':RUN,'at':now,'class':'accuracy','subclass':sub,'severity':'nonfatal','location':loc,'subject':id,'caught_at_stage':'5-adjudicate','caught_by_role':'group-alpha','disposition':'fixed','description':scope,'correction':original_review['reason'],'native_author':{'role':'alpha-repair','phase':phase,'unit':u,'label':f'step5-v2-{phase}-r1-u{u}','model':'gpt-6.1-sol','provider_effort':'high'},'classification_attribution':'Native first-pass unit1 explicitly records nonfatal; Root preserves that severity.'if native_severity else 'Root explicitly classified this impact repair nonfatal after reading the actual native notes and changes; no separate native severity verdict is invented.','axiom_scope':'Inherited AC_omega explicitness only, not a genuinely absent original mathematical assumption; no stronger Choice axiom is introduced.'if 'inherited-choice'in suffix else 'No new axiom claim is made.','repair_snapshot':{'before_content_sha256':packs[phase]['before'][id],'repaired_post_sha256':original_review['post_sha256'],'repair_review_context_sha256':original_review['review_context_sha256'],'current_closed_post_sha256':latest['post_sha256'],'current_closed_review_context_sha256':latest['review_context_sha256'],'latest_native_review_phase':last_phase,'latest_native_review_unit':last_unit},'evidence':[dict(ref(rp(phase,u)),json_pointer=review_pointer,note='Actual source-author repaired review; no original judge tuple exists for this impact repair.'),dict(ref(rp(phase,u)),json_pointer='/repair_notes',note='Authentic scoped repair/source-reading attribution and ledger reconciliation.'),dict(ref(dp(phase,u)),note='Completed native alpha-repair Sol6.1/high identity.'),dict(ref(closed_path),json_pointer=parent_review_pointer,note='Actual final closed-wave review at the same current source content guard.'),dict(ref(base/'current-source-guards.json'),note='Read-only current raw/content/interface guards, checked against the closed native post; no new scientific audit.')],'adoption_status':'Unapplied accounting; Root must freshly check canonical ownership before actual append.'}
 if id=='pthm-fd-boltzmann-entropy':row['related_underlying_owner_finding']=RUN+'-owner-precollection-local-h-sectionwise-equation'
 if id=='prop-fd-viscous-entropy-passage':row['distinct_from_existing_finding']=RUN+'-3a-batch-23-reader-initial-entropy-bound-justification'
 if suffix=='golse-bgk-source-locator':
  row['correction']='Use Golse Lecture2 section V, The BGK Operator, PDF p.28. Native pass2 unit1 actually read that passage; this accounting task performed no PDF retrieval.'
  row['evidence'].insert(1,dict(ref(rp(phase,u)),json_pointer='/repair_notes/sources_actually_consulted/0',note='Actual native source retrieval/reading and exact corrected locator; not a new Root/outside reading claim.'))
 assert 'adjudication_ref'not in row and 'supersedes'not in row
 rows.append(row)
 mapping.append({'defect_id':identifier,'subject':id,'scope':scope,'root_severity':'nonfatal','native_explicit_severity':'nonfatal'if native_severity else None,'source_author':{'phase':phase,'unit':u,'role':'alpha-repair'},'source_author_review':original_review,'latest_closed_review':latest,'latest_review_origin':{'phase':last_phase,'unit':last_unit},'current_guard':by_guard[id],'new_original_judge_decision':False})
 native_guards.append({'defect_id':identifier,'report':ref(rp(phase,u)),'dispatch':ref(dp(phase,u)),'current_source_guard':by_guard[id],'source_repair_post':original_review['post_sha256'],'latest_closed_context':latest['review_context_sha256']})

entropy=next(x for x in mapping if x['subject']=='pthm-fd-boltzmann-entropy')
owner_records=[z for z in existing if 'local-h-sectionwise-equation'in z['defect_id']]
assert any(z['disposition']=='fixed'for z in owner_records)
write('entropy-sectionwise-maintenance-evidence.json',{'version':1,'run':RUN,'kind':'linked-consumer-maintenance-evidence-only','subject':'pthm-fd-boltzmann-entropy','underlying_owner_finding':RUN+'-owner-precollection-local-h-sectionwise-equation','observed_existing_history':owner_records,'maintenance':'Native first-pass unit2 carried the supplier equation velocity-a.e. at every fixed time-space section into the entropy consumer, then verified its pointwise local and global production arguments.','native_repaired_review':entropy['source_author_review'],'native_report':ref(rp('impact-initial','2')),'current_guard':entropy['current_guard'],'new_canonical_defect_row_proposed':False,'successor_to_existing_fixed_owner_row_proposed':False,'reason':'The existing owner finding already owns the underlying sectionwise defect. Preserve its fixed history and attach this genuine downstream-use evidence instead of duplicating or superseding it. The separate entropy row covers only inherited AC_omega explicitness.'})
old_post=root/'research'/(RUN+'-owner-impact-pass2-before/post-fd-bgk-relaxation.md');bind(old_post)
write('provisional-fixed-rows.json',rows);write('accounting-map.json',mapping);write('native-current-guards.json',native_guards);write('native-unit-index.json',units)
state=read(root/'.physics-autopilot'/RUN/'state.json');assert not any(v.get('startedAt')and not v.get('endedAt')for v in state['dispatches'].values())
write('plan.json',{'version':1,'run':RUN,'prepared_by':'/root/fluid_step4_statistics','kind':'immutable-unapplied-drained-impact-accounting','created_at':now,'new_nonfatal_rows':11,'new_fatal_rows':0,'first_pass_changed_sources':collections[phases[0]]['changed'],'pass2_changed_sources':collections[phases[1]]['changed'],'pass3_changed_sources':[],'separate_entropy_sectionwise_maintenance_records':1,'native_explicit_severity_rows':2,'root_classified_rows':9,'canonical_role':'group-alpha; exact actual native role alpha-repair is recorded on every row','native_evidence_bindings':bindings,'current_source_raw_bindings':bindings_current,'mutable_canonical_ledger_permanently_bound':False,'observed_stage':state['stage'],'source_writers_observed_drained':True,'live_mutations':False,'new_source_audit':False,'gate_or_certification_executed':False,'root_followup':'Check current canonical ownership and adopt only these distinct fixed nonfatal accounting rows. Attach entropy sectionwise maintenance to the existing owner finding without a duplicate row or supersession. No original judge tuple is supplied or claimed.'})
for p,digest in bindings.items():assert sha(root/p)==digest,p
assert len(rows)==11 and len({z['subject']for z in rows})==10
print('Prepared 11 nonfatal accounting rows across 10 repaired sources, plus linked entropy maintenance evidence; no live mutation.')
