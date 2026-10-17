import json,re,glob,difflib
from pathlib import Path
R='numerical-optimization-dynamics-2026-10-16';O=Path('research/'+R+'-owner-step4-b55-edge-pairing-proposal');root='def-uniform-grid-and-difference-operators';p=Path('items/'+root+'.md');before=p.read_text()
old=r'\langle p,q\rangle_{e,h}=h\sum_{j=0}^{N-1}(D_+p)_j\overline{(D_+q)_j}'
new=r'\langle p,q\rangle_{e,h}=h\sum_{j=0}^{N-1}p_j\overline{q_j}'
assert before.count(old)==1
oldtail='Dirichlet grid functions have prescribed endpoint values;'
newtail=r'Here the finite-interval edge pairing takes edge arrays $p,q:\{0,\ldots,N-1\}\to\mathbb C$, and for such an array $z$ set $\|z\|_{e,h}^2=\langle z,z\rangle_{e,h}$. '+oldtail
assert before.count(oldtail)==1
proposed=before.replace(old,new).replace(oldtail,newtail)
for folder,text in [('before',before),('proposed',proposed)]:
 dest=O/folder/p;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(text)
(O/'source.patch').write_text(''.join(difflib.unified_diff(before.splitlines(True),proposed.splitlines(True),fromfile=str(p),tofile=str(p))))
closure=json.loads((O/'closure-discovery.json').read_text());ids=[root]+[id for layer in closure['layers'] for id in layer];guards={str(Path('items/'+id+'.md')):Path('items/'+id+'.md').read_text() for id in ids};guards.update({page:Path(page).read_text() for page in closure['pages']});(O/'full-source-guards.json').write_text(json.dumps(guards,indent=2,ensure_ascii=False)+'\n')
dispositions={
'lem-dirichlet-grid-summation-by-parts':'Affected direct use; accepted against the proposed Definition. Statement and proof1.1 apply the edge pairing to D_+u,D_+v on exactly N edges. The telescoped term is h^-1 sum_{j=1}^N(u_j-u_{j-1}) conjugate(v_j-v_{j-1}), which is exactly the corrected componentwise edge pairing, with both boundary terms retained. Proof2.1 gives the unchanged complex Hermitian/nonnegative identity. No consumer text change.',
'lem-dirichlet-grid-poincare-inequality':'Affected direct norm use; accepted against the proposed Definition. Proof1.1 controls each telescoping nodal difference and proof2.1 explicitly uses ||D_+w||_e,h^2=h^-1 sum_{i=0}^{N-1}|w_{i+1}-w_i|^2. This is the corrected edge-array norm; the factor L^2=N^2h^2 and zero endpoints remain unchanged. No consumer text change.',
'thm-dirichlet-leapfrog-discrete-energy':'Affected indirect use via wave/SBP/Poincare; accepted against the proposed Definition. Real edge arrays D_+U^{n+1},D_+U^n have N entries. Proof1.1 polarizes their componentwise pairing; proof2.1 uses the same h^-1 edge-difference sum and inverse bound4/h^2; proof3.1 uses zero endpoints and Poincare; proof4.1 substitutes the corrected SBP identity. Conservation, positive definiteness for0<nu<1 and mesh-uniform nu<=nu0<1 scope are retained. No consumer text change.',
'def-centered-leapfrog-wave-scheme':'Direct grid-geometry use only: Definition imports nodes, spacings and finite/periodic index sets, then states its real recurrence and initialization. It neither defines nor applies the erroneous finite edge pairing. All recurrence, zero endpoint and complexified-periodic conventions remain identical.',
'def-periodic-one-way-advection-schemes':'Direct index/spacing use only: all five stencils and the finite inflow/outflow row use nodal values and their one-sided/centered differences. No finite edge pairing is used; signs and reflection conventions are unchanged.',
'lem-periodic-advection-amplification-symbols':'Direct use is the unchanged periodic nodal norm/inner productF5, modulo-N shifts and periodic Fourier orthogonality. Full proof1.1–3.1 never uses the finite interval edge pairing. Its whole-Definition quote still needs a literal mirror refresh after authorized source repair.',
'thm-periodic-centered-wave-amplification-and-endpoint':'Direct use is the unchanged periodic grid normF6 and periodic Fourier basis. Proof1.1–5.1 retains mean mode, distinct roots atnu<1 and even-N Nyquist double root atnu=1. No finite Dirichlet edge pairing is used. Whole-Definition citation mirror requires refresh only.',
'ex-wave-cfl-endpoint-and-energy-breakdown':'Direct use of the periodic edge pairingF6, already correctly defined on D_+p,D_+q. Verification1.3–1.4 reindexes the periodic sum and obtains the unchanged modal quadratic form; this is not the malformed finite-interval branch. Two whole-Definition quotation mirrors require refresh only.',
'thm-nearest-neighbor-cfl-domain-condition':'Direct use is infinite-grid domain of dependence and unchanged periodic grid normF11 for the centered-mode obstruction. Proof1.1–4.1 has no finite-interval edge argument. Whole-Definition mirror refresh only.',
'alg-age-structured-renewal-upwind-finite-volume':'Outside55 direct context: Definition cites the supplier for uniform age/time nodes but independently declares J,N>=1, cell masses, birth inflow, absorbing outflow, transport-plus-loss CFL and flux recursion. It does not use either finite edge pairing or a Dirichlet energy argument. No change required.',
' thm-smooth-advection-stencils-consistent':'Indirect via advection Definition; full proof1.1–4.1 uses reflected spatial/time Taylor stencils, derivative bounds and mesh-ratio assumptions, never finite edge pairing. No change required.',
'thm-periodic-advection-power-stability':'Indirect via periodic advection and amplification lemma; full proof1.1–2.1 uses the unchanged orthonormal periodic nodal Fourier basis and scalar multipliers. No change to contractions, instability orN=2 aliasing exceptions.',
'ex-upwind-versus-downwind-advection':'Indirect via periodic symbols/power theorem. Verification1.1–2.1 evaluates z=i,nu=1/2 and powers in the periodic norm; no Dirichlet edge pairing. No change required.',
'ex-centered-advection-consistent-but-unstable':'Indirect via consistency, periodic factors and CFL obstruction. Verification1.1–2.1 concerns theN_q=4q periodic refinement and finite-time power growth; no finite edge pairing. No change required.',
'ex-grid-fourier-stability-needs-a-common-space-lift':'Indirect via periodic upwind power stability. Verification1.1–2.1 retains varying C^N grid spaces, absence of a supplied common-space lift and explicit Dependent Choice qualification for Lax. No finite edge pairing. No change required.',
'thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability':'Outside55 indirect via renewal algorithm. Full proof1.1–3.1 uses positive birth weights, nonnegative update matrix, telescoped cell masses and its induced l1 norm. No finite edge inner product is imported. No change required.',
'thm-age-structured-renewal-smooth-first-order-convergence':'Outside55 indirect via renewal scheme and l1 stability. Full proof1.1–4.1 integrates the cell flux balance, bounds Taylor defects and iterates a cell-mass error recurrence. It does not use the wave edge pairing or SBP supplier. No change required.',
'thm-age-structured-renewal-bv-l1-convergence':'Outside55 indirect via renewal scheme and l1 bounds. Full proof1.1–6.1 derives adjacent-cell BV/time bounds, finite-volume weak sums and characteristic uniqueness from its own flux convention; its summing-by-parts in5.1 is written explicitly for cell masses and does not invoke the malformed wave edge pairing. No change required.',
'thm-age-structured-renewal-cutoff-tail-and-outflow-bound':'Outside55 indirect via renewal scheme and smooth convergence. Full proof1.1–4.1 splits initial cohorts and combines the independent cutoff tail with the existing cell-mass discretization estimate. No finite edge pairing. No change required.',
'ex-age-cutoff-versus-outflow-tail-error':'Outside55 indirect via renewal update/cutoff bound. Verification1.1–3.1 computes the exact one-cell shift and omitted/outflow mass, with no wave norm or finite edge pairing. No change required.',
'ex-constant-mortality-and-age-localized-fertility':'Outside55 indirect via renewal update/positivity. Verification1.1–2.1 evaluates the fixed birth quadrature, corner incompatibility and mass vector(1/8,1/2,1/4,0). It does not use the Dirichlet edge pairing. No change required.'
}
dispositions={k.strip():v for k,v in dispositions.items()};assert set(dispositions)==set(ids)-{root}
records=[]
for depth,layer in enumerate(closure['layers'],1):
 for id in layer:
  source=guards['items/'+id+'.md'];status=re.search(r'^status:\s*(.*)$',source,re.M).group(1)
  records.append({'id':id,'depth':depth,'status':status,'actual_direct_suppliers_in_cone':closure['edges'][id],'reviewer':'num_step2_ad13, same reviewer as supplier repair proposal','complete_current_source_read':True,'disposition':dispositions[id],'source_change_required':False,'new_statement_definition_change':False})
pages=[]
for page,uses in closure['pages'].items():
 pages.append({'path':page,'uses':uses,'complete_current_page_read':True,'disposition':'Existing inventory and page prose remain accurate against the proposed correction. Hyperbolic A retains conserved coercive Dirichlet energy and separate periodic results; hyperbolic B retains periodic endpoint examples. Renewal A/B retain independently specified flux/mass/cutoff results, without invoking the finite edge pairing. No page edit required.'})
(O/'consumer-dispositions.json').write_text(json.dumps({'items':records,'pages':pages,'closure_complete_for_current_item_reference_graph':True,'no_new_consumer_statement_definition_change':'No consumer source change proposed, so no further interface-change propagation is triggered.'},indent=2,ensure_ascii=False)+'\n')
# Exact quote-only candidates for later owner integration, never applied here.
olddef=re.search(r'^## Definition\n([\s\S]*?)(?=^## |\Z)',before,re.M).group(1).strip();newdef=re.search(r'^## Definition\n([\s\S]*?)(?=^## |\Z)',proposed,re.M).group(1).strip();mirrorops=[]
paths=[]
for ext in ['proof-contracts','coverage','pages']:paths+=glob.glob(f'research/{R}-batch-*.{ext}.json')
paths+=[f'research/{R}-proof-contracts.json']
def walk(v,path=[]):
 if isinstance(v,dict):
  for k,x in v.items():yield from walk(x,path+[k])
 elif isinstance(v,list):
  for i,x in enumerate(v):yield from walk(x,path+[i])
 elif isinstance(v,str) and old in v:yield path,v
for file in paths:
 for path,value in walk(json.loads(Path(file).read_text())):
  assert value==olddef,('partial mirror requires separate proposal',file,path)
  mirrorops.append({'file':file,'path':path,'before':value,'proposed':newdef,'scope':'Literal whole-Definition quote mirror only, for a future authorized source repair. Not applied during frozen Step4.'})
(O/'quote-mirror-operations.json').write_text(json.dumps(mirrorops,indent=2,ensure_ascii=False)+'\n')
# Capture actual original judge records as observed, without computing any fingerprint.
judgefiles=[f'research/{R}-judge.jsonl',f'research/{R}-judge-attempts.jsonl'];judges={file:[json.loads(l) for l in Path(file).read_text().splitlines() if l.strip() and json.loads(l).get('id') in ids] for file in judgefiles}
(O/'original-luna-observation.json').write_text(json.dumps({'files':judges,'supplier_has_original_verdict':any(r.get('id')==root for a in judges.values() for r in a),'note':'Absence means no original verdict was present in these actual native ledgers at this read; it is not an acceptance. No verdict or native state was changed.'},indent=2,ensure_ascii=False)+'\n')
report={'decision':'confirmed source Definition type defect; exact research-only correction ready','cycle':'First distinct concern cycle1','supplier':{'id':root,'home':str(p),'status':'draft','run':R,'published_supplier':False,'published_claim_required_for_this_supplier':False,'native_authorization':'Step3 is closed and Step4 sources remain frozen; later native/owner repair authorization is required before any application.'},'independent_verification':'For N=2,h=1 and nodal u=v=(0,1,0), D_+u=(1,-1) is an N-entry edge array. The old finite pairing attempts D_+ on this array at edge1 and needs a missing entry2. The proposed componentwise edge pairing is2, matching the interior pairing with -Delta_h v=2. Generally the existing SBP proof telescopes to exactly h^-1 sum(delta u)*conjugate(delta v), and existing Poincare/real wave-energy expansions use this same corrected norm. This is hand derivation, not an executed numerical check.','exact_source_scope':'Only finite-interval edge formula and its explicit edge-array domain/norm clarification. Periodic/infinite differences, conjugate-linearity convention, interior norm, N>=2, real/complex scope, wave/transport claims all preserved.','consumer_scope':{'direct':len(closure['layers'][0]),'indirect':sum(map(len,closure['layers'][1:])),'pages':len(pages),'required_consumer_source_repairs':0,'same_reviewer':'num_step2_ad13'},'mirror_operations':len(mirrorops),'outside_published_defect_found':False,'freeze_respected':True,'canonical_source_metadata_tool_ledger_writes':False,'hashes_computed':False,'checks_gates_tests_or_native_dispatch_run':False,'original_reports_preserved':True}
(O/'report.json').write_text(json.dumps(report,indent=2,ensure_ascii=False)+'\n');print({'consumer_items':len(records),'pages':len(pages),'mirror_ops':len(mirrorops),'source_proposals':1,'observed_native_judge_records':sum(map(len,judges.values()))})
