from pathlib import Path
import json,yaml,hashlib,re,datetime
base=Path('research/fluid-dynamics-all-47-2026-10-23-owner-step4-periodic-analysis')
sha=lambda b:hashlib.sha256(b).hexdigest()
items={}
for p in Path('items').glob('*.md'):
 try:
  b=p.read_bytes();m=yaml.load(b.decode().split('---',2)[1],Loader=yaml.CSafeLoader);items[m['id']]={'path':p,'meta':m,'raw':b}
 except Exception:pass
seeds=['def-fd-polytropic-symmetric-variables','thm-fd-smooth-periodic-incompressible-ivp','thm-fd-smooth-polytropic-euler-ivp']
def cone(seed):
 paths={seed:[seed]}
 while True:
  fresh={k:paths[d]+[k] for k,v in items.items() if k not in paths for d in v['meta'].get('deps',[]) if d in paths}
  if not fresh:return paths
  paths.update(fresh)
cones={s:cone(s) for s in seeds};union=set().union(*(set(c) for c in cones.values()))
notes={
'def-fd-polytropic-symmetric-variables':('Definition: pointwise pressure/sound-speed bijection; A_j; field PDE; coefficient conventions','Clarify C1 field domains/endpoint derivatives and integrable coefficient domain; retain globally linear A_j for Galerkin states.','public-definition-and-domain-clarification'),
'thm-fd-smooth-periodic-incompressible-ivp':('Statement; F1-F10/A1; Proof 1.1-13.1','Entire current carrier/proof read. Original 1.2-3.1 already prove viscosity-independent energy and all-order bounds. Promote exact safe constants to public interface and supply canonical 5.1-5.3 extraction. No parameter restriction or lost conclusion.','quantitative-public-interface-and-canonical-proof'),
'thm-fd-smooth-polytropic-euler-ivp':('Statement; F1-F10/A1; Proof 1.1-9.1','Entire current carrier/proof read. Symmetric matrices and q are smooth fields; Galerkin q_N may have negative scalar coordinate, covered by extended linear A_j. Original 1.3/2.1/8.1 prove explicit Hs/all-order and positivity bounds. Enrich exact public interface and give canonical 4.1-4.3 extraction under retained CC.','quantitative-public-interface-and-canonical-proof'),
'pthm-fd-local-periodic-incompressible-model-evolution':('Statement physical/nondimensional domains; F1/F2; Proof 2.1-6.1','Entire current carrier/proof read. It applies local smooth existence at d<=3, s>=4 after U0 and nu-bar scaling and uses pressure recovery. Existing parameter-only lifespan/all-order claims follow from the enriched supplier; no use of the old proof-internal T=1 zero-data convention. Positive SI scales and constant-state mechanical qualifications unchanged.','no-content-change-needed'),
'pthm-fd-local-polytropic-model-evolution':('Statement dimensional scaling and r(R); F2/F3; Proof 1.1-5.1','Entire current carrier/proof read. R0>0 smooth periodic, kappa-bar>0, fixed gamma>1 and q0 norm meet the same local Euler hypotheses. Energy is imported from the separate unchanged energy claim. Explicit lifespan is an enrichment and preserves normalized/physical local conclusions and all thermal/vacuum/shock exclusions.','no-content-change-needed'),
'rem-fd-general-viscous-wall-ivp-gaps':('Entire Remark and references','Entire current carrier read. References only local smooth periodic and special shear coverage. Quantitative local bounds add no arbitrary wall/exterior or variable-density viscous claim, so all stated exclusions remain sound.','no-content-change-needed'),
'thm-fd-global-two-dimensional-periodic-navier-stokes':('F1-F6; Proof 1.1/4.1/5.1','Entire current carrier/proof and log/l1 suppliers read. F1 needs only positive local lifespan, smoothness, uniqueness. Its old exact T formula is unused and removed. F5 continuation now has an actual quantitative public restart input. The logarithmic estimate and full 2D positive-viscosity global claim remain unchanged.','remove-unused-overstated-fact-clause'),
'thm-fd-periodic-smooth-incompressible-energy':('Statement/F1/F2; Proof 1.1-3.1','Entire current carrier/proof read. Smooth full equation and divergence-free periodic fields license the energy identity, preserved zero mean, then Poincare. Quantitative enrichment preserves local branch; Poincare proof repair leaves its public unit constant unchanged.','no-content-change-needed'),
'thm-fd-periodic-smooth-stability':('Statement viscosity-uniform Hm clause; F1/F2; Proof 1.1-4.1','Entire current carrier/proof and difference-energy supplier read. Need actual uniform Hm interface rather than mere finite bounds. Draft F1/1.1 now import explicit T_i and exp(2 Cm M_i T_i) bounds independent of both viscosities. Symmetric-system branches use fixed globally linear symmetric A_j on smooth positive states and are unaffected.','focused-fact-and-proof-repair'),
'thm-fd-polytropic-energy':('Statement/F1/F2; Proof 1.1-3.1','Entire current carrier/proof read. Pressure law, positive-density inverse and smooth local solution are unchanged. Its product-rule derivation uses only pointwise smooth periodic positive fields; these satisfy the clarified C1/integrability domain. No quantitative constants are needed.','no-content-change-needed'),
'thm-fd-smooth-sobolev-continuation':('F1/F2; Proof 1.1/2.1/2.2/3.1','Entire current carrier/proof read. Original F1/F2 wrongly exported proof-internal constants. Draft uses enriched public lower lifespan with max{1,M}, and Euler additionally r_*/(2 Cpos M1^2). For bounded restart data, both denominators are uniformly bounded and scalar minima uniformly positive. Patch/uniqueness proves the same full smooth continuation conclusion.','focused-fact-and-proof-repair'),
'thm-fd-smooth-vorticity-identities':('Statement/F1; Proof 1.1-4.1','Entire current carrier/proof read. It differentiates given smooth full incompressible solutions and uses no quantitative local lifespan or uniform family estimate. No modification follows from enriched local existence.','no-content-change-needed'),
'ex-fd-homogeneous-polytropic-model':('Example/F1; Verification 1.1-3.1','Entire current carrier/proof read. Constant positive fields satisfy all clarified domains; exact verification supplies all-time extension independently. The preserved local unique polytropic model branch identifies the same constant solution.','no-content-change-needed'),
'pthm-fd-two-dimensional-viscous-model-globality':('Statement/F1; Proof 1.1-5.1','Entire current carrier/proof read. Requires only unchanged global smooth 2D positive-viscosity supplier after SI scaling and transverse-invariant lift. No use of removed F1 quantitative clause. Full mechanical scope and qualifiers remain.','no-content-change-needed'),
'thm-fd-periodic-inviscid-limit':('Statement uniform Hm family; F1; Proof 1.1-3.1','Entire current carrier/proof read. Actual stability Statement already promises fixed-data viscosity-uniform times/bounds; repaired stability F1/1.1 now proves that promise. The O(nu) L2 residual and O(nu^(1/s)) interpolation use exactly those uniform Hs bounds; no downstream text change needed.','no-content-change-needed'),
'rem-fd-boundary-layer-low-mach-status':('Remark/F1; Proof 1.1-2.1','Entire current carrier/proof read. Uses only unchanged periodic smooth local inviscid-limit rates. Strengthened local bounds do not supply wall or nonlinear low-Mach control; existing exclusions remain valid. Acoustics/scaling are not altered by this proposal.','no-content-change-needed')}
(base/'examined').mkdir(exist_ok=True)
rows=[]
for k in sorted(union):
 v=items[k];out=base/'examined'/f'{k}.md';out.write_bytes(v['raw']);s=v['raw'].decode();public=re.search(r'(?m)^## (Definition|Statement|Example|Remark)\n(.*?)(?=^## |\Z)',s,re.S|re.M)
 loc,reason,action=notes[k]
 rows.append({'id':k,'current_path':str(v['path']),'examined_preimage':str(out),'raw_sha256':sha(v['raw']),'public_section':public.group(1) if public else None,'exact_public_text':public.group(2).strip() if public else None,'actual_use_locations':loc,'focused_assessment':reason,'disposition':action,'upstream_paths':{s:cones[s][k] for s in seeds if k in cones[s]}})
(base/'consumer-use-matrix.json').write_text(json.dumps({'scanned_current_carriers':len(items),'changed_public_suppliers':seeds,'union_closure_including_suppliers_count':len(union),'per_supplier_consumer_counts_excluding_supplier':{s:len(cones[s])-1 for s in seeds},'scope_method':'Current complete items/ dependency graph (35k+ carriers), resolving declared deps; direct text search for all three changed IDs found only these direct carriers. Full current bodies/proofs of every listed carrier read. Historical Step3 receipt is context only, not substituted for current reads.','rows':rows},indent=2)+'\n')
# Preserve full examined supplier files; some were read at exact public interface only.
supplier_scope={
'def-fd-periodic-fourier-sobolev-spaces':'full current Definition/Facts/Proof',
'lem-fd-periodic-fourier-embedding-products':'full current Statement/Facts/Proof',
'lem-fd-torus-mean-zero-poincare':'full current Statement/Facts/Proof',
'lem-fd-periodic-tame-transport-commutator':'full current Statement/Facts/Proof',
'lem-fd-given-smooth-solutions-difference-energy':'full current Statement/Facts/Proof',
'def-fd-periodic-leray-pressure-maps':'full current Definition/Facts/Proof',
'lem-fd-polynomial-ode-continuation':'full current Statement/Facts/Proof',
'lem-fd-2d-fourier-log-velocity-bound':'full current Statement/Facts/Proof',
'lem-fd-2d-transport-commutator-l1-bound':'full current Statement/Facts/Proof',
'thm-fd-periodic-pressure-recovery':'full current Statement/Facts/Proof',
'thm-fourier-basis-and-parseval-on-the-n-torus':'full current Statement/Facts/Proof; public statement has no derivative-coefficient identity',
'def-countable-choice':'full current Definition and Remarks including CC/DC distinction',
'thm-bolzano-weierstrass':'full current Statement/Facts/Proof/Remarks; used only for bounded real sequences',
'lem-peak-monotone-subsequence':'full current Statement/Facts/Proof/Remarks; canonical least-index extraction inspected, proposal instead gives self-contained bisection rule',
'thm-picard-lindelof-local-existence-and-uniqueness':'exact current public Statement only; no recursive proof audit',
'thm-euclidean-space-complete':'exact current public Statement only; no recursive proof audit'}
pins={r['path']:r['sha256'] for r in json.loads(Path('research/math-imports.json').read_text())['files']}
source_rows=[]
for k,scope in supplier_scope.items():
 v=items[k];out=base/'examined'/f'{k}.md';out.write_bytes(v['raw']);src=str(v['path']);digest=sha(v['raw']);pin=pins.get(src)
 source_rows.append({'id':k,'path':src,'raw_sha256':digest,'examined_preimage':str(out),'actual_reading_scope':scope,'import_pin_sha256':pin,'import_pin_matches':None if pin is None else pin==digest})
(base/'source-reading.json').write_text(json.dumps({'sources':source_rows,'reading_limits':'Local current carriers and indicated imported public interfaces/proofs were read. No newly retrieved external book/article full text; sources in the authored items and prior Step3 reports remain attribution/context, not newly claimed source reading. No recursive audit of imported prerequisite closures or unrelated 35k carriers. Imported/original mathematics were not edited.'},indent=2)+'\n')
judge_ids={e['id'] for e in json.loads((base/'proposal-manifest.json').read_text())['entries']}
judges=[json.loads(l) for l in Path('research/fluid-dynamics-all-47-2026-10-23-judge.jsonl').read_text().splitlines() if l.strip()]
(base/'observed-original-judge-rows.json').write_text(json.dumps([j for j in judges if j.get('id') in judge_ids],indent=2)+'\n')
# Report actual guard verification after review and exact changed public interfaces.
manifest=json.loads((base/'proposal-manifest.json').read_text())
for e in manifest['entries']:
 current=Path(e['live_path']).read_bytes();assert sha(current)==e['before_raw_sha256'],e['id']
 before=Path(e['before']).read_text();after=Path(e['proposed']).read_text();assert before.split('---',2)[1]==after.split('---',2)[1]
 e['guard_matches_current_at_final_review']=True
 e['public_interface_changed']=e['id'] in seeds
manifest['outside_review_cycles_used']=2
manifest['current_source_guards_all_match']=True
manifest['created_at']=datetime.datetime.now(datetime.timezone.utc).isoformat()
manifest['followup_owner']='Native Step5 adjudicators decide/adopt actual content; root owns metadata, exact contract/graph mirrors, hashes/readiness and native recertification. No outside source write, gate, stamp or native verdict has occurred.'
(base/'proposal-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('Recorded complete',len(union),'carrier closure; source hashes and original judge rows archived. Live source guards all match.')
