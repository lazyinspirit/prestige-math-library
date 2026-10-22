from pathlib import Path
import hashlib,json,datetime,subprocess
run='physics-non-fluid-129-2026-10-21-r2'; owner='/root/step5_gr_referrals'; d=Path('research')/(run+'-owner-step5-gr-referrals')
def h(b):return hashlib.sha256(b).hexdigest()
def ref(p):p=Path(p);return {'path':str(p),'sha256':h(p.read_bytes())}
index=json.loads((d/'proposal-index.json').read_text());guards={}
full=['lem-gr-fx-null-focal-boundary-exclusion','ex-gr-fx01-1','prop-gr-fx-kerr-horizon-generator','ex-gr-fx01-2','lem-gr-fx-trapped-boundary-compactness','thm-gr-fx-penrose-incompleteness','ex-gr-fx06-1','ex-gr-fx06-2','def-gr-fx-null-screen-geometry','lem-gr-fx-null-screen-index-form','prop-gr-fx-null-raychaudhuri','thm-gr-local-geodesics-and-exponential-map','def-gr-inverse-metric-and-musical-isomorphisms','def-gr-fx-kerr-exterior','lem-gr-fx-kerr-exterior-properties']
focused=['ex-gr-fx07-1','ex-gr-fx07-2','def-gr-fx-kerr-horizon-mode','lem-gr-fx-kerr-horizon-modal-flux','rem-gr-fx-kerr-units-and-physical-parameters']
pages=['gr-fx01-hypersurface-and-null-geometry','gr-fx01-hypersurface-and-null-geometry-examples','gr-fx06-trapped-surfaces-and-incompleteness','gr-fx06-trapped-surfaces-and-incompleteness-examples','gr-fx02-conformal-constraint-construction','gr-fx04-asymptotic-ends-and-adm','gr-fx05-bondi-news-and-memory','gr-fx09-bootstrap-and-stability-boundaries','gr-fx07-kerr-and-hidden-symmetry']
(d/'context-preimages').mkdir(exist_ok=True)
for id in full+focused:
 p=Path('items')/(id+'.md'); b=p.read_bytes(); a=d/'context-preimages'/(id+'.md');a.write_bytes(b)
 guards[id]={'path':str(p),'raw_sha256':h(b),'archive':ref(a),'reading_scope':'complete-current-local-carrier' if id in full else 'focused-current-supplier-use-excerpts-only'}
for id in pages:
 p=Path('library/general-relativity')/(id+'.md');b=p.read_bytes();a=d/'context-preimages'/(id+'.md');a.write_bytes(b)
 guards[id]={'path':str(p),'raw_sha256':h(b),'archive':ref(a),'reading_scope':'complete-current-page-frontmatter-and-empty-body'}
consumer_rows=[
('ex-gr-fx01-1','direct','F3; Proof 3.1','Explicit Minkowski geodesic is globally defined. Straight timelike segment proves the full range without the focal lemma; candidate conditionally states the supplier comparison.'),
('ex-gr-fx01-2','direct','F3; A2; Proof 3.1','Open J contains a later interval at every focal instant; positive affine reparametrization agrees with the unique extension. AC_omega/DC already explicit.'),
('lem-gr-fx-trapped-boundary-compactness','direct','F11; Proof 2.2, 6.1','Future completeness gives continuation and maximal evaluation agrees by uniqueness; use in 6.1 is strictly inside the existing segment. AC_omega/DC explicit.'),
('thm-gr-fx-penrose-incompleteness','indirect','F4; Proof 3.2-5.1','Consumes unchanged compactness/manifold conclusion. Contradiction assumes future null completeness; AC implies DC and AC_omega.'),
('ex-gr-fx06-1','indirect','F5/F6; Verification 3.1','Only checks failed trapping prerequisite, never invokes focal exclusion or incompleteness with this sphere.'),
('ex-gr-fx06-2','indirect','F10/F11; Verification 3.1, 4.1','Uses unchanged compactness under explicit completeness and AC; missing noncompact-Cauchy premise is retained.')]
consumers=[{'scientific_owner':owner,'id':id,'distance':kind,'source_guard':guards[id],'affected_use':loc,'disposition':'sound-under-proposed-extension-clarification','evidence':ev,'proposal_required':id=='ex-gr-fx01-1','proposal_reason':'Separate actual conditional-choice referral; public Statement remains unchanged.' if id=='ex-gr-fx01-1' else 'No source change necessary.'} for id,kind,loc,ev in consumer_rows]
search_ids=['lem-gr-fx-null-focal-boundary-exclusion','ex-gr-fx01-1','ex-gr-fx01-2','lem-gr-fx-trapped-boundary-compactness','thm-gr-fx-penrose-incompleteness','ex-gr-fx06-1','ex-gr-fx06-2','prop-gr-fx-kerr-horizon-generator']
searches=[]
for id in search_ids:
 cmd=['rg','-n','--fixed-strings',id,'items','library'];res=subprocess.run(cmd,capture_output=True,text=True);log=d/(id+'.uses.txt');log.write_text(res.stdout)
 searches.append({'id':id,'command':cmd,'exit_code':res.returncode,'result':ref(log)})
findings=[]
reasons=[('lem-gr-fx-null-focal-boundary-exclusion','u29','Statement endpoint-domain defect','The lambda_0=L_1 case evaluates gamma beyond [0,L_1]; existing proof and local-geodesic theorem supply a unique extension. Name it, retaining the included-endpoint claim.','statement-domain'),('ex-gr-fx01-1','u29','F2/F3 and supplier comparisons','Actual general suppliers have AC_omega/DC and comparison-domain hypotheses omitted by the restatement. Explicit Minkowski calculations independently prove every stated conclusion. Make comparisons conditional; preserve the choice-free Statement.','dependency-citation'),('prop-gr-fx-kerr-horizon-generator','u35','Proof 2.1 F9 before Proof 3.1 orientation','F9 opens with a time-oriented smooth Lorentzian input. Move the existing covariant timelike-field proof before the first F9 invocation. No interface change or new hypothesis is needed.','dependency-citation')]
for id,u,loc,reason,typ in reasons:
 rp=Path('research')/(run+'-step5-v2')/('step5-v2-initial-r1-'+u+'.json');x=json.loads(rp.read_text());rows=x['repair_notes'].get('owner_referrals',x['repair_notes'].get('outside_scope_findings',[]));f=next(z for z in rows if z['id']==id)
 findings.append({'id':id,'scientific_owner':owner,'classification':'confirmed-current-defect','severity':'nonfatal','defect_type':typ,'location':loc,'reason':reason,'previously_resolved':False,'native_report':ref(rp),'actual_native_referral':f,'current_source_guard':guards[id],'proposal':next(p for p in index['proposals'] if p['id']==id),'native_acceptance':False,'cycle':1})
(d/'findings.json').write_text(json.dumps({'version':1,'run':run,'scientific_owner':owner,'research_only':True,'findings':findings},indent=2)+'\n')
checks=[]
cands=[str(d/(p['id']+'.candidate.md')) for p in index['proposals']]
for name,cmd,result in [('precheck',['node','tools/tsx-run.mjs','tools/physics-support/precheck.mts']+cands,'3 checked, 0 failing'),('layout',['node','tools/physics-support/proof-layout.mjs']+cands,'3 items, 14 steps, 0 defects'),('render',['node','tools/physics-support/rendercheck.mjs']+cands+['--quiet'],'All 3 candidate YAML/KaTeX carriers parse')]:checks.append({'scope':'unapplied-candidate-files-only','command':cmd,'exit_code':0,'result':result,'log':ref(d/('candidate-'+name+'.log'))})
# Verify the prepared originals remain genuine current preimages.
for p in index['proposals']:assert h(Path(p['source_path']).read_bytes())==p['before_raw_sha256'],p['id']
state=json.loads(Path('.physics-autopilot',run,'state.json').read_text())
e={'version':1,'run':run,'scientific_owner':owner,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'cycle':1,'research_only':True,'native_review':False,'native_acceptance':False,'source_edits_applied':False,'observed_live_stage':state['stage'],'git_head':subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip(),'source_and_consumer_guards':guards,'focal_consumer_reviews':consumers,'exact_use_searches':searches,'checks':checks,'source_reading_limits':{'external_full_text_retrieved':False,'external_full_text_read':False,'bibliography_only':True,'whole_proof_acceptance_of_consumers':False,'full_local_carriers_read':full,'focused_local_uses_only':focused},'required_native_followup':'Root must bind actual current preimages at drained queue intake; native owners independently review/apply exact repairs, maintain metadata/contracts and propagate focal Statement context as needed. No stale disposition may be rehashed into acceptance.'}
(d/'evidence.json').write_text(json.dumps(e,indent=2)+'\n')
print('Wrote findings and guarded consumer/source evidence; live stage',state['stage'])
