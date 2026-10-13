# Batch 18 Step 3a adjudication

Run: `physics-cm-qm-gr-79-2026-10-11`; group: `batch-18`. Scope: routed batch 18 obligations only. No judging, stamping, publication or imported-supplier edits.

## Dependency-ordered review

### post-cm02-force-superposition (level 8)

Reviewed clauses (i)-(viii) against the explicit CM01 spacetime, chart, worldline, configuration, velocity and SI dimension suppliers and the Galilean kinematics clauses 1-2. R_N acts componentwise; inverse transfer P is bijective affine, D_* is the open preimage, and equal-time state differences rotate isometrically. Compact local neighborhoods give uniform Lipschitz constants under the transfer. Proper Q gives a time-dependent transferred position domain, explicitly distinguished from the product case. Finite sums preserve continuity and Lipschitz constants. These are adopted model rules with no empirical inference. Reader repair is sound; no refuter finding targets this item.

Decision: accepted_repair; repair_confidence: 1. Pre/post snapshots distinguish the force covariance repair. No further carrier edit. Source qualification and consumer disposition are recorded below as review proceeds.

### post-cm02-drag (level 10)

Reviewed adopted one-particle law m g-c v, all-time full-space domain, positive mass, c>=0 including c=0, and SI units c=mass/time. For arbitrary states, position independence gives the same norm bound stated for equal-position pairs, hence global state-Lipschitz continuity. Stokes limit and omitted fluctuations are qualified; the oscillator fluctuation condition is expressly not imposed on this free-particle model. No measured parameter or empirical verification is asserted. No routed carrier decision is owed.

### pthm-cm02-ivp (level 10)

Independently checked all six proof steps and exact local and maximal ODE supplier statements: continuous field, open D, positive finite masses, inverse-mass norm bounded by 1/min(m_i), locally uniform state Lipschitz. Corrected step 2.1 by first bounding on a fixed cylinder and then shrinking time so hM<=r and Lh<1, including zero bounds without division by zero. Corrected local state typing in L1 to Q x R^{3N}. The C1 state solution gives C2 position; uniqueness holds on the common interval including relative endpoints, and maximality transfers through the component equations. Contract-only reader enrichment is retained, with this complete local proof repair. No Statement, physical_scope or prerequisites changed.

IVP decision: amended_repair; repair_confidence: 1. Nonfatal proof gap: the old step invoked the quantitative supplier without first imposing its small-time bounds. Closed local defect will be linked in the decisions and ledger.

Owner alert (outside routed carrier edits): `def-cm02-newtonian-flow`, Definition (c), writes the state curve as J -> D and z(t) in D, although D includes time. Its exact component equations and the published ODE definition require z:J -> Q x R^{3N} and (t,z(t)) in D. This is a nonfatal typing correction for the owner; no missing mathematical result is needed. The assigned arguments are reviewed using the explicitly stated component equations and correctly typed graph, not the ill-typed phrase.

### pthm-cm02-continuation (level 11)

Reviewed all six steps, compact-continuation supplier proof and escape corollary. Corrected title to time-state domain: zero force on time window (0,1) has constant compact state yet endpoint 1, so the former title was false. Clause 4 now intersects terminal intervals with J_max for all delta, and its proof explicitly converts each compact state set to [b-delta,b] x K0. Compact traps apply on a forward restriction [t0,b); uniqueness glues the extension to the earlier maximal motion. Autonomy is explicitly on the extended time window R. Closed bounded K0 away from Q complement yields contradiction; Q=R^{3N} forces unbounded state; bounded proper-Q case claims arbitrarily close boundary approach, not an assumed limit. Reader alternatives are retained. No empirical or choice premise is used.

Decisions: touched amended_repair; refuter:18:3 confirmed_fatal. Complete title/domain-quantifier repair, repair_confidence: 1. Title counterexample applies to observed old bytes, not the corrected title. Consumers checked below before closure.

### cex-cm02-nonunique-flow-for-a-continuous-force (level 11)

Checked weakened continuous-force model, SI scales lambda>0 and ell_*>0, unit kilogram mass, quartic coefficient A=(lambda/(12m sqrt(ell_*)))^2 of dimension length/time^4. Both curves are C2 across the waiting time; first and second right derivatives tend to zero. 12mA=lambda sqrt(A/ell_*) verifies the force exactly, and the curves differ at two seconds. Quotient lambda/(sqrt(ell_*) sqrt(|u|)) diverges, so the Lipschitz hypothesis is genuinely absent. Continuous inverse supplier applies to squaring on [0,infinity); polynomial derivative and algebra suppliers apply on nondegenerate intervals. Reader dimensional repair accepted; no empirical statement.

Decision: accepted_repair; repair_confidence: 1.

### ex-cm02-drag-terminal-velocity (level 11)

Checked m,c>0, all real times, three scalar equations with k=0 and constant f0=mg_j against the exact oscillator supplier hypotheses; derivatives give initial data and m xddot+c xdot=m g. All-time explicit curve and local uniqueness give unique maximal motion. Norm equality and exp(s)>=1+s plus positivity prove exponential approach, including v0=v_inf and g=0. Corrected overstrong Remarks: g=0 yields bounded forward state and may be stationary; c=0,g=0 has constant finite velocity. No Example or physical_scope change; regime and measured-input qualifications retained. Reader changes were audit enrichment; local remarks repair is complete.

Decision: amended_repair; repair_confidence: 1.

### ex-cm02-uniform-field (level 12)

Confirmed refuter:18:2: for N>1, x0 and v0 are 3N-tuples whereas g is a 3-vector, so the observed aggregate formula is ill-typed. Replaced it with x_i(t)=x_{0,i}+v_{0,i}t+(1/2)g t^2 for every label and explicitly assembled x=(x_1,...,x_N); differentiated each label in step 1.2. Constant force has Lipschitz zero; positive masses cancel componentwise. The all-real-time polynomial and local uniqueness give maximal interval R; half-line motion is its restriction. Units and Galilean acceleration rotation are correct, with g=0 and stationary data allowed. This preserves the full N-label claim and reader all-time repair; exact consumer uses checked below.

Decisions: touched amended_repair; refuter:18:2 confirmed_fatal; repair_confidence: 1.

### ex-cm02-force-model-regularity-checks (level 12)

Checked all six verification steps and all three domains. Uniform force gives zero Lipschitz constant; drag bound holds for arbitrary positions and c=0. Inverse-square annulus estimate follows by insertion and cubic factorization with reverse triangle inequality, independent of time and velocity. Added exact extreme-value supplier for nonempty compact position projections, explicitly handled empty sets, and supplied a force-difference quotient proving absence of a global Lipschitz constant rather than inferring it from a nonoptimal bound. No extension at 0 follows from k/|x|^2 divergence. No Example or physical_scope change; local IVP and time-state continuation hypotheses checked.

Decision: amended_repair; repair_confidence: 1. Reader enrichment retained; nonfatal compact-bound/citation proof repair and global-bound remark correction added.

### rem-cm02-open-system-warning (level 13)

Read complete status audit and model-boundary/empirical sections against force/interactions/drag postulates, IVP, continuation, uniform example, frames, configuration and units. Reader distinctions are correct: full time-state escape always, state escape on time window R, arbitrary boundary approach not an assumed limit. A constant field is uniform after rotation/boost; a medium supplies useful rest-frame data rather than a unique affine chart. Pair cancellation cannot be assumed for omitted labels. No conservation law, measured value, empirical confidence or fluctuation criterion is invented. Accepted reader prose repair.

Decision: accepted_repair; repair_confidence: 1.

### cex-cm02-singular-collision-finite-time (level 13)

Checked all six steps and exact nth-root, norm, power/quotient/chain-rule suppliers. Coordinate difference quotient gives gradient kx/|x|^3 away from 0. Positive cube root q^3=(1-t/T)^2 is continuous by factorization; rationalized derivative gives qprime=-2s/(3Tq^2) and qdoubleprime=-2/(9T^2q^2). T^2=2r0^3/(9kappa) yields m xdoubleprime=F and the stated initial velocity. Units of k, kappa, T, velocity, potential and force are consistent. Explicit interval (-infinity,T) rules out a finite left endpoint; continuity and uniqueness on [0,T) exclude any extension through T, and positive quotient squared=1/q gives speed divergence. Conditional idealized model only, no empirical or global physical assertion. Reader repair accepted.

Decision: accepted_repair; repair_confidence: 1.

### ex-cm02-constant-field-projectile (level 13)

Checked all five steps and one-label specialization of repaired uniform example. Positive g and speed and strict angle 0<alpha<pi/2 ensure nonzero cos(alpha), positive sin(alpha), and valid time elimination and unique positive height root. Cartesian coordinates give plane and quadratic parabola; double-angle supplier gives level range, and units are time and length. Included endpoints alpha=0,pi/2 or g=0 are explicitly excluded; no claim for them is made. All-time formula gives unique maximal motion. Parameters are declared, drag is absent, and any measured application retains conditions and uncertainty. Carrier unchanged pre/post; reader contract enrichment is sound.

Decision: reviewed_no_defect (audit_enrichment; defect_ids: []).

## Page obligations

A page: accepted_repair; repair_confidence: 1. Read complete summary and placement lists: time-state versus state escape, autonomous extended-time trap, force covariance and empirical caveats match the current items. Placement order retained.

B page, refuter:18:1: confirmed_fatal; repair_confidence: 1. Old m sqrt(|x1|) has mass times square-root-length dimension, not force. Replaced only the stale displayed force with lambda sqrt(|x1|/ell_*) and declared the exact force and length dimensions already checked in the item. Other complete page computations and placement lists agree with current carriers.

## Historical evidence and supplier status

All 13 item pre-reader raw hashes and both page pre-reader raw hashes match their `HEAD:physics/...` Git blobs. The pre/post snapshots show six substantive item changes and four contract-only enrichments. The authenticated preimage proves the force transfer used a 3-by-3 rotation on an N-label tuple and described the inverse map's image rather than its preimage; the uniform formula inferred all-time existence from its half-line restriction; the nonunique example omitted dimensional scales; and the collision calculation cited an integer-power supplier for fractional differentiation and asserted agreement outside the common interval. The repaired current carriers were independently reviewed above. No historical preimage is missing and no unbound observation or owner-authorized current-content substitution is used. The refuter observations are retained as claims about the observed old carriers; their defects are repaired locally.

Exact dependency Statements/Definitions were read for all 42 direct outside suppliers named in the reader inventory; the compact-continuation proof and escape corollary were also checked. Published suppliers remain read-only; the draft local ODE/oscillator suppliers are used at their stated hypotheses and proof status, not certified by file presence. No defective published mathematical supplier was identified.

## Consumer review and owner routing

The uniform-field formula preserves the N-label theorem componentwise. Its complete direct uses in `ex-cm02-constant-field-projectile` and `ex-cm08-uniform-field-breaks-translation-and-boost` explicitly set N=1; `rem-cm02-open-system-warning` and both page summaries use only the model, all-time uniqueness and covariance. They require no further repair. Continuation direct uses in the owned examples, force postulate, flow definition and remark use the same hypotheses. Outside uses in `pthm-cm07-newton-equivalence` F4 explicitly use time-state compact subsets; `rem-cm03-conservation-scope` and `rem-cm18-em-bridge` make only conditional existence/breakdown references. They are sound under the correction and require no downstream interface repair. The nonunique and collision witnesses have only their owned B-page summary as a substantive external reference; the stale nonunique summary is repaired here.

**Open owner consumer dispositions:** the reader report's blanket assurance about covariance consumers is too strong. `pthm-cm03-frame-transformations` L2 still writes the transferred force on full configurations using R in SO(3) and unrepeated three-vectors; L4 calls a block matrix R^T without defining the overload. Its Statement clause 5 correctly spells out the per-label inverse transfer and its load-bearing computations are componentwise, so the smallest repair is to replace the stale L2 full-tuple formula with the exact R_N/bar-vector transfer from the corrected postulate (or explicitly define that convention). `pthm-cm06-inertial-forces` L5 has the same untyped full-tuple transfer; step 2.2 additionally sets eta:=y_i then writes eta_i. Its componentwise equation is sound, but the owner must route these surgical source corrections to their owning batches before declaring the physical-interface consumer closure complete. Neither carrier was edited. No substantial missing theorem is needed; the exact corrected supplier is available.

`pthm-cm08-boost-boundary` uses componentwise momentum balance and a contextual covariance distinction, and `rem-cm18-galilean-regime` only invokes the general covariance rule; these uses survive. The larger collection of force-postulate consumers using unchanged regularity/equation clauses has not been represented as a new whole-proof audit. The previously recorded out-of-route flow-definition typing alert remains open for its owner. `post-cm02-interactions` clause (ii).1 calls antisymmetry alone the “strong form” of the third law; the usual strong form additionally requires centrality. This is a nonlogical terminology alert for the owner, with the actual optional equations unaffected.

## Sources and limits

Teschl's online 2012 edition was retrieved and Section 2.2 printed pp. 36-38 (PDF indices 47-49) read: continuous vector field on an open domain, locally state-Lipschitz uniformly in time, with the bounded cylinder and contraction construction. Section 2.6 printed pp. 51-53 (PDF indices 62-64), maximal-solution construction, Lemma 2.14 and Corollaries 2.15-2.16 were read. Their extension criterion has stronger recurring-compact-set consequences; the local supplier and this batch use the stated weaker terminal-trap contrapositive. Two wrong Teschl locators in the routed IVP and nonunique-example source titles were corrected. [Teschl](https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf).

Likharev's Section 1.2, chapter pp. 3-4 (PDF indices 6-7), and Section 5.1, chapter pp. 1-2 (indices 86-87), including footnote 4, were retrieved and read for adopted Newtonian laws, force composition and the oscillator-specific fluctuation caveat. The drag item correctly limits that caveat rather than applying it as a free-particle energy criterion. [Likharev](https://essentialgraduatephysics.org/Files/CM%20merged.pdf). Stewart's Section 1.4 printed pp. 20-21 (PDF indices 22-23) was read for low-velocity drag and the distinct friction models. Section 6.8 Stokes-flow derivation has not been independently reread here; its prior source review is evidence, and no new derivation from that source is claimed. [Stewart](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf). Both Tong PDF URLs returned retrieval errors. The exact local Galilean supplier and elementary conditional computations close the assigned deductions; no Tong full-text verification is claimed.

No experiment item, measured input, statistical inference or empirical precision is introduced. Review confidence concerns conditional deductions and complete local corrections, not truth of a physical model.

## Final decisions and open owner work

The decisions JSON contains exactly 14 routed obligations: ten touched, one A page, three refuter findings. All three refuter findings are confirmed fatal and locally repaired. Final touched verdicts are `amended_repair`: retain the sound reader mathematics/enrichment, apply the local repairs above, synchronize manifest/contract metadata, and correct relevant source locators. This final disposition supersedes preliminary checkpoint verdicts above. Each confirmed defect has its own closed `3a-adjudicate` ledger row; flagged decisions each reference exactly one such row. No defect row is created for audit-only enrichment or an interrupted mechanical command. Completed repairs have repair_confidence 1; no acceptance/judge stamp was added.

All owned HIGH/CRITICAL risk reviews are complete for the conditional claims and local corrections. Physical-interface consumer closure is **not** complete until the owner resolves the two out-of-batch stale transfer formulas identified above. The local decisions do not certify those consumers or clear the open owner alerts. No substantial missing mathematical theorem, proposed withdrawal or published defect was found.

## Local validation and handoff

After final edits, batched reflow succeeded on all ten changed item paths (four reflowed; six unchanged). Final batched precheck: nine checked, zero failing; the nonproof remark has no proof to precheck. Final rendercheck: all ten items and the changed B page, eleven files, passed YAML and real KaTeX checks. The required single post-formatter proof-layout command covered all ten changed paths: **43 steps, zero defects**, exit 0. Risk-report was run before reviews and again on current content; `--require-reviewed` passed with zero errors, twelve routed contracts (eleven HIGH/CRITICAL completed reviews plus the moderate interactions contract).

The batch manifest now agrees with all thirteen item frontmatters and exact claim sections; the new extreme-value dependency is published outside this run and introduces no in-run edge. Proof contracts retain reader enrichment and record corrected derivations, exact source quotes, new extreme-value fact and risk reviews. Coverage records preserve prior reading history and add this review's bibliographic corrections/access limits. Owned cross-batch rows and the frontier notes were maintained; `frontier-dependency-ledger refresh --run physics-cm-qm-gr-79-2026-10-11` exited 0. Decisions have one entry per owed obligation and closed ledger references. Engine decision hash stamping and gate battery remain engine-owned.

An exploratory `rendercheck --help` invocation unexpectedly began its default whole-corpus scan; it was interrupted and supplies no validation evidence. Only the successful explicit eleven-file run above is relied upon. No whole-corpus result or gate pass is claimed.

Handoff: local routed review and repairs complete. Owner must resolve the two out-of-batch force-transfer consumer corrections and the recorded out-of-route flow-definition/interaction-terminology alerts. These remain visible; no owner authorization or resolution is inferred.
