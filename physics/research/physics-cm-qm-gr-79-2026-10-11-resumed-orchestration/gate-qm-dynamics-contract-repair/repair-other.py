import json,pathlib,re
base=pathlib.Path('physics/research');run='physics-cm-qm-gr-79-2026-10-11'; docs={b:json.loads((base/f'{run}-batch-{b}.proof-contracts.json').read_text()) for b in range(40,50)}
def row(id,case,status,text):
 for d in docs.values():
  if id not in d['contracts']:continue
  x=next(x for x in d['contracts'][id]['boundaries'] if x['case']==case)
  for k in ['reason','evidence','reviewed','template_review']:x.pop(k,None)
  x['status']=status;x['evidence' if status=='checked' else 'reason']=text;return
 raise KeyError(id)
# Actual template members in framework batch43.
spec={
'ex-nrqm-framework-dimension-bookkeeping':[
'N The Example fixes the massive one-particle dimension conventions in three space dimensions; no empty index family is used.',
'N Step 1.3 uses nonzero declared mass and step 2.1 uses nonzero action unit hbar; no zero-unit normalization is asserted.',
'N The Example fixes one-particle coordinates and displayed quantities rather than a variable singleton aggregate.',
'N The dimension assignments in steps 1.1-2.1 do not vary to a singular unit system.',
'N The current dimension in step 1.5 is a pointwise unit check, without an interval or limiting endpoint.',
'N Each unit calculation in steps 1.1-2.1 uses explicitly displayed powers of mass, length and time; no family selection is made.',
'N Dimensional consistency of the listed expressions in the Example is a direct verification, not a biconditional.',
'N This dimension Example gives no converse inferring physical laws from equal units.'],
'ex-nrqm-framework-quantity-type-checks':[
'N The Example fixes C2, its two orthonormal basis vectors and their tensor square; these data exclude empty preparation families.',
'C Step 1.1 computes the nonzero unit superposition and step 1.2 keeps both mixture weights positive by 0<w<1.',
'C Step 1.3 uses a single explicit product preparation and checks its two local tensor actions.',
'N The type Example fixes spin one-half and two-dimensional Hilbert data rather than a degenerating spin parameter.',
'N The mixture in step 1.2 is restricted to 0<w<1; no endpoint-pure-state type claim is required in this example.',
'C The Example retains the choice hypotheses of its state and observable suppliers; step 1.4 uses the supplied spectral probability assignment.',
'N The conclusions in step 2.1 identify mathematical types of displayed objects, without an iff characterization.',
'N Type checking the Example does not claim that every correctly typed object is an assigned observable.'],
'lem-nrqm-framework-ccr-on-the-schwartz-core':[
'N The Statement fixes d>=1 and indices j,k in that nonempty coordinate range.',
'C Step 2.1 gives zero commutator for unequal indices, and the zero test function is included in the linear calculation.',
'C Dimension d=1 is admitted in the Statement; step 2.1 then has j=k=1.',
'C Coincident indices give delta-jk=1 in step 2.1; products remain defined on the invariant Schwartz core.',
'N The Schwartz CCR Statement has no interval endpoint; it explicitly makes no extension outside the common core.',
'C CC is declared for the operator and Hilbert suppliers; step 1.1 checks the prescribed Schwartz domain directly.',
'N The core CCR identity is the direct conclusion in the Statement, not an iff.',
'N No converse characterizes all operator pairs by this restricted commutator.'],
'lem-nrqm-framework-galilei-transformations-form-a-group':[
'N The Statement fixes the nonempty affine spacetime R times R3 and individual Galilean parameter tuples.',
'C Step 2.1 computes zero translation, zero boost and identity rotation parameters for both inverse composites.',
'C The identity element g(0,0,0,I3) is explicitly included in the subgroup proof of step 3.1.',
'C Zero boost and coincident transformations remain covered by the composition formula in step 1.2.',
'N The Galilei group Statement uses global affine maps and no interval endpoints.',
'N Step 1.3 prescribes the inverse parameters explicitly; no selection of an inverse from a family is needed.',
'N The Statement gives injectivity, inverse and composition assertions, without a biconditional.',
'N No converse classifies every affine bijection as Galilean in this Statement.']}
for id,vals in spec.items():
 for case,val in zip(['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse'],vals):row(id,case,'checked' if val[0]=='C' else 'not_applicable',val[2:])
# Only flagged members on state geometry, preserve all other histories/dispositions.
fix={
'cex-nrqm-state-geometry-zero-vector-is-not-a-preparation':{'endpoints':('not_applicable','The refuted normalization claim concerns the displayed zero vector; steps 1.1-3.1 use neither a time interval nor a limiting state endpoint.')},
'ex-nrqm-state-geometry-coherent-versus-mixed-preparation':{'endpoints':('not_applicable','The Example fixes equal weights and relative phase i on the basis h,v; no weight-parameter interval is varied.'),'iff-reverse':('not_applicable','Step 2.1 compares the fixed off-diagonal pure matrix with the diagonal half-identity mixture; it states a distinction without a converse characterization.')},
'ex-nrqm-state-geometry-fixed-mode-two-level-states':{'endpoints':('not_applicable','The Example assigns equal weights one half to its two basis rays; no variable-weight endpoint is claimed.'),'iff-reverse':('not_applicable','The Example computes rank and purity of two displayed matrices; there is no converse implication characterizing arbitrary two-level states.')},
'ex-nrqm-state-geometry-nonunique-preparation-ensembles':{'iff-reverse':('not_applicable','The Example supplies two particular ensembles for the diagonal three-quarter/one-quarter state; it does not characterize all ensembles producing that state.')},
'ex-nrqm-state-geometry-normalization-and-phase-check':{'endpoints':('not_applicable','The Example fixes psi=(1,i) and z=1+i; its normalization scalars have fixed nonzero norms, without a limiting interval parameter.')},
'lem-nrqm-state-geometry-density-set-convex-and-complete':{'iff-forward':('not_applicable','The Statement proves convexity, trace-norm completeness and mixture convergence for D(H), rather than an iff criterion on operator subsets.'),'iff-reverse':('not_applicable','No converse from mixture convergence to trace positivity or trace-one normalization is asserted by this density-set Statement.')},
'lem-nrqm-state-geometry-purity-criterion':{'endpoints':('checked','Step 3.1 treats the extreme purity value one through the positive eigenweights summing to one; the zero/one eigenweight alternatives are used in its equality criterion.')},
'lem-nrqm-state-geometry-ray-to-rank-one-projection':{'endpoints':('not_applicable','The Statement uses individual nonzero vectors and their normalized rank-one operators, with no parameter interval or limiting endpoint.')},
'pthm-nrqm-state-geometry-pure-preparation-phase-invariance':{'endpoints':('not_applicable','The physical Statement assigns states to fixed nonzero rays and phase representatives; it does not posit a time evolution or parameter endpoint.')}}
for id,cases in fix.items():
 for case,(status,text) in cases.items():row(id,case,status,text)
# Originally contradicted rows: actual cases, or specific heuristic dispositions.
row('thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas','empty','checked','The Statement explicitly includes the empty finite subset in both partition-function suprema, with empty product one; steps 1.3-1.4 compare all finite subsets with initial segments.')
for case in ['iff-forward','iff-reverse']:
 row('thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws',case,'checked',('Step 1.3 represents the all-bin probability difference by an integrable real density; if every bin integral vanishes, any nonzero positive or negative level set would have a strictly signed integral, so the density is zero almost everywhere.' if case=='iff-forward' else 'Step 1.3 shows that zero signed-difference density almost everywhere makes its integral zero on every measurable bin, proving the reverse all-bin equality implication in Statement (c).'))
row('ex-nrqm-state-geometry-normalization-and-phase-check','zero','checked','The Example has norm psi=sqrt(2), |z|=sqrt(2), and norm phi=2; steps 1.1-4.1 divide only by these fixed positive values, never a variable vanishing denominator.')
row('ex-nrqm-state-geometry-fixed-mode-two-level-states','zero','checked','The Example normalizes h+v by the fixed positive sqrt(2); its two mixture weights are one half, and the matrices computed in steps 1.1-2.1 have trace one rather than a zero preparation.')
# Excluded empty index collections need genuine reasoned heuristic uphold, not checked fabrication.
upholds={
 'thm-nrqm-magnetic-and-detection-galilean-covariance':('empty','The detector sees the two-parameter family Uu(t,s), whose domain is all real pairs, not an arbitrary set of boosts. The Statement fixes L2(R3), and step 1.1 constructs each boost directly; its actual indexed spatial sum has the three fixed coordinates.'),
 'lem-nrqm-state-geometry-density-set-convex-and-complete':('empty','The sums in Statement (b) have nonnegative weights of total one, so their positive-weight support cannot be empty. Step 1.2 permits zero terms and proves convergence; step 3.1 explicitly omits zero-weight blocks rather than selecting from an empty positive support.'),
 'lem-nrqm-measurement-nonselective-luders-map':('empty','The Statement imposes strong sum Pa=I on nonzero H. An empty projection list would give zero on every x and contradict the identity for nonzero x. Step 1.1 applies the normalized Kraus supplier only after checking that actual strong-sum premise.'),
 'pthm-nrqm-measurement-degenerate-eigenspace-update':('empty','The family mentioned is the declared two-outcome pair (P,I-P), with a unit psi in the named eigenvalue space. Step 1.1 proves Ppsi=psi; arbitrary Borel sets in step 2.1 may be empty and then both unchanged outcome laws have zero mass.'),
 'pthm-nrqm-measurement-instrument-updates-not-determined-by-effects':('empty','Here family means the two explicitly displayed instrument pairs, each on C2. Step 1.1 computes their two effects summing to I; there is no quantified empty outcome set and no generalization to an arbitrary instrument index family.'),
 'pthm-nrqm-measurement-countable-kraus-instruments':('empty','The outcome set is explicitly the positive integers, and normalization to I on nonzero H excludes a family with no nonzero Kraus effects. Step 1.1 proves sum pa=1, so the positive-probability indices used in step 2.1 cannot all be absent.'),
 'lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators':('empty','The actual finite component list has r>=1 in the Statement. The detected sums are over l=1,...,r or over a convergence sequence, not a potentially empty component set. Step 1.1 and the norm maximum in (c) use this exact nonempty finite range.'),
 'lem-nrqm-kinematics-component-valued-wavefunction-identifications':('empty','The Statement fixes d,r>=1 and the coordinate basis e1,...,er. Its tensor finite sums may represent zero by an empty expression, but the displayed inner-product construction and the linear extension in step 2.1 still send zero to zero; they do not require a component space with r=0.')}
for id,(case,reason) in upholds.items():
 for d in docs.values():
  if id in d['contracts']:
   x=next(x for x in d['contracts'][id]['boundaries'] if x['case']==case);x['reviewed']={'upheld':True,'by':'/root/gate_contract_qm_dynamics','reason':reason}
# New heuristic flags introduced by correcting actual scope in batches40/41.
for b in [40,41]:
 audit=json.loads((base/f'{run}-resumed-orchestration/gate-qm-dynamics-contract-repair/b{b}-boundary.json').read_text())
 for candidate in audit['contradicted']:
  id=candidate['id'];case=candidate['case']
  if id=='thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas':continue
  x=next(x for x in docs[b]['contracts'][id]['boundaries'] if x['case']==case)
  x['reviewed']={'upheld':True,'by':'/root/gate_contract_qm_dynamics','reason':x['reason']+' The detector reports an indexed expression elsewhere in this carrier; that expression does not remove these explicit admissibility restrictions. The reason records exclusion, not an unproved extra case.'}
# Citation quote repair and specific false positives.
x=docs[43]['contracts']['ex-nrqm-framework-quantity-type-checks'];src=pathlib.Path('physics/items/post-nrqm-framework-observable-and-probability.md').read_text();section=src.split('## Postulate\n',1)[1].split('\n## ',1)[0].strip()
for c in x['citations']:
 if c['fact']=='L4' and c['source']=='post-nrqm-framework-observable-and-probability':c['quote']=section;c['source_section']='Postulate'
reviews={
('ex-nrqm-fock-and-equilibrium-example-infinite-identical-mode-divergence','F1','thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion'):'The source n>=0 describes occupation-sequence length, including vacuum, whereas the fact quantifier is N>=1 for the number of available modes. It preserves that positive cutoff condition and the finite-support occupations from the source; no negative particle count or omitted vacuum is introduced.',
('lem-nrqm-fock-and-equilibrium-fock-sector-projections','F2','lem-nrqm-composites-permutation-sector-projections'):'Clause (b) of the source proves projection identities for every n>=1. The n>=2 phrase belongs only to clause (d) repeated-factor exclusion, which F2 does not use. The vacuum projection at n=0 is defined separately by the Fock direct-sum supplier.',
('thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction','F1','lem-nrqm-composites-permutation-sector-projections'):'The supplier starts with n>=1 and gives orthogonal symmetric projections in clause (b). Its later n>=2 condition qualifies only repeated-factor antisymmetry in clause (d). F1 uses projection and closed-range properties, with the scalar vacuum defined separately in the Statement.',
('lem-nrqm-kinematics-component-valued-wavefunction-identifications','F1','lem-nrqm-composites-hilbert-tensor-construction'):'The source says the form is independent of representatives of its two arguments: these are its two tensor vectors, not an arity restriction on each finite tensor expansion. The very same source displays the double finite-sum inner-product formula that F1 specializes to H and C^r.'}
for b,d in docs.items():
 for id,x in d['contracts'].items():
  for c in x['citations']:
   key=(id,c['fact'],c['source'])
   if key in reviews:c['reviewed']={'upheld':True,'by':'/root/gate_contract_qm_dynamics','reason':reviews[key]}
for b in [40,41,42,43,44,45,46,48,49]:
 (base/f'{run}-batch-{b}.proof-contracts.json').write_text(json.dumps(docs[b],indent=2)+'\n')
print('other boundary dispositions and citation metadata integrated')
