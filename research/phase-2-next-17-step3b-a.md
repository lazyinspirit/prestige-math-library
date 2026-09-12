# Step 3b group a — phase-2-next-17

Assigned batches 1 and 3; 44 recurrence/system items and 22 CLT items.
All original IDs and promised claims are retained. No owner-authoring-direction
file exists at entry. Step 3a decisions are sufficient. Canonical plan inventories
are empty and require Step 4 splicing. Prior construction/source-reading claims
are historical evidence, not this author's own proof audit.

Current work: sequential authoring beginning with no-return towers.
No completed items at entry; no published content edited. Batch cross-frontier
inputs currently contain no edges. No independent review or owner stamps added.

## lem-no-return-sets-have-null-preimage-towers

Claim: finite total measure makes the no-positive-return preimage tower disjoint and null. Local proof fully derived; additivity and monotonicity are now explicit suppliers (subadditivity alone would not give the equal-mass sum). Read each direct supplier statement/proof. Source locator retained: E–W Theorem 2.11 p.21; source argument not yet read in this dispatch. No mathematical gap in the elementary local argument. Next: run checks, refresh scope, record item, then recurrence.

Dependencies: def-measure-preserving-transformation-and-system, prop-measure-preserving-compositions-iterates-and-completions, def-measure, prop-measure-monotonicity.

Written with item-specific contract. Checks and decision pending below.

## thm-poincare-recurrence-for-finite-measure-preserving-systems

Complete last-visit argument, with measurable exceptional set E intersect N. Direct suppliers read above and no uncertainty in this argument. Next: topological corollary.

Dependencies: lem-no-return-sets-have-null-preimage-towers, prop-measure-preserving-compositions-iterates-and-completions, thm-finite-and-countable-subadditivity-of-measures.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Authored the explicit null union and last-visit equivalence, including zero positive returns; no invertibility or choice. Precheck, rendering, and strict item contract pass.

## cor-topological-poincare-recurrence-on-second-countable-spaces

Canonical exceptional sets avoid a hidden countable selection. Added explicit least-natural-number supplier for metric subsequence recursion. Direct supplier statements and proofs read. Next: induced-domain definition.

Dependencies: thm-poincare-recurrence-for-finite-measure-preserving-systems, def-second-countable-space, thm-finite-and-countable-subadditivity-of-measures, thm-well-ordering-principle.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded repaired. Evidence: Authored canonical null exceptional union, neighborhood refinement, and least-return recursion with n_j>=j; strict item checks pass. Added well-ordering supplier for the actual recursion.

## def-first-return-time-and-induced-transformation

Defined induced map on the full infinitely-returning measurable core, not merely first-return domain. Trace closure supplied directly for measurable core, eliminating representative choice. Potential published concern: thm-trace-is-a-sigma-algebra step 2.1 picks a sequence A_n of representatives for arbitrary Y without explaining choice; confidence is suspicion only, not a confirmed failure of the theorem. Our measurable-core proof does not use that step. Report for owner audit, with proposed supplier a representative-free trace proof or an explicit countable-choice hypothesis if necessary. Next: first-return measurability.

Dependencies: thm-poincare-recurrence-for-finite-measure-preserving-systems, def-trace-sigma-algebra, thm-trace-is-a-sigma-algebra, def-set-limsup-and-liminf, thm-sigma-algebra-closure-laws, thm-well-ordering-principle.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Complete definition checks finite first return on the core, closure of its trace, self-map property and normalized countable additivity. Measurable-core trace proof is local and choice-free; strict item checks pass.

## prop-first-return-time-and-induced-map-are-measurable

Read full Sarig §1.6.4 pp.28–29, including preservation, extension and Kac argument. Authored exact finite/infinite fibers; no outstanding local issue. Decision may await unrelated global scope freshness. Next: preservation.

Dependencies: def-first-return-time-and-induced-transformation, def-trace-sigma-algebra, prop-measure-preserving-compositions-iterates-and-completions.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Exact finite and infinite return fibers and induced inverse-image union authored; no choice needed. Explicit-path precheck/render and strict contract pass.

## thm-induced-transformation-preserves-the-restricted-measure

Complete Sarig Theorem 1.7(1), pp.28–29 read. Authored finite remainder identity and complement inequality with finite measures. Added exact pullback, additivity and core suppliers to manifest. No local gap. Next: induced ergodicity.

Dependencies: prop-first-return-time-and-induced-map-are-measurable, def-first-return-time-and-induced-transformation, prop-measure-preserving-compositions-iterates-and-completions, def-measure, thm-continuity-from-below-for-measures, thm-poincare-recurrence-for-finite-measure-preserving-systems.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded repaired. Evidence: Finite pullback remainder identity, monotone union inequality, and finite complement reverse inequality fully written. Noninvertible and nonergodic cases covered; exact direct suppliers read and checks pass.

## prop-inducing-preserves-ergodicity

Full Sarig Theorem 1.7(2) read. Repaired exposition of the entrance extension at x in E and Tx outside E; exact q(Tx)=r_E(x)-1 supplies the missing case. Used everywhere invariant finite functions and the published equivalence, avoiding exceptional-set saturation. Next: Kac return formula.

Dependencies: thm-induced-transformation-preserves-the-restricted-measure, prop-ergodic-positive-sets-sweep-out-almost-every-point, thm-ergodicity-and-invariant-functions.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Authored measurable least-entrance extension on strictly invariant conull U; separately checked points inside/outside the core and r_E=1. Invariant-function criterion then proves induced ergodicity; checks pass.

## thm-kac-return-time-formula

Derived finite tail identity with C_0=X; checked j=0 separately, limiting sweep-out, and null infinity values. Sarig Theorem 1.7(3) read completely. Published MCT mathematical argument read and sound for this use; its proof formatting has tags before displayed continuations and QED before final prose (potential formatting debt, not a mathematical blocker). Next: excursion formula.

Dependencies: prop-first-return-time-and-induced-map-are-measurable, prop-ergodic-positive-sets-sweep-out-almost-every-point, thm-integrals-are-invariant-under-measure-preserving-maps, thm-monotone-convergence-for-the-integral, thm-continuity-from-above-for-measures.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Complete avoidance-tail telescoping proves integral one; positive normalization proves both displayed equivalence directions. MCT and finite continuity hypotheses checked; explicit item checks pass.

## thm-kac-integral-formula-for-excursions

Read Sarig Theorem 1.7(3), pp.28–29 in full. Authored exact finite remainder recurrence and two monotone limits, then absolute-value control before complex subtraction. Replaced unused DCT dependency by the actual linearity supplier. Next: circle definition.

Dependencies: thm-kac-return-time-formula, thm-integrals-are-invariant-under-measure-preserving-maps, prop-first-return-time-and-induced-map-are-measurable, thm-monotone-convergence-for-the-integral, thm-linearity-of-the-lebesgue-integral-on-l-one.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded repaired. Evidence: Finite excursion remainder identity, bounded remainder estimate, nonnegative truncation, and absolute-integrability-first signed/complex extension authored. Exact hypotheses and strict checks pass.

## def-circle-rotation-and-doubling-map

Added explicit conditional Lebesgue-measure and Borel-completion suppliers; metric and continuity calculations remain ZF. Borel sigma equality and endpoint convention supplied locally. Next: rotation preservation.

Dependencies: def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded repaired. Evidence: Authored circle metric triangle inequality, Lipschitz maps, countable arc basis/Borel identification, and conditional measure normalization/completion. Explicit countable-choice use; checks pass.

## prop-circle-rotations-preserve-lebesgue-measure

Completed explicit two-piece inverse-image formula for arbitrary Borel sets and measurable inverse. Published translation and generator proofs read. Next: irrational orbit density.

Dependencies: def-circle-rotation-and-doubling-map, thm-measure-preservation-on-a-generating-pi-system, prop-measure-preserving-compositions-iterates-and-completions, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Two disjoint translated inverse-image pieces give preservation; finite generator and completion hypotheses checked; inverse R_-alpha explicit. Countable-choice use propagated and strict checks pass.

## lem-irrational-circle-orbits-are-dense

Pigeonhole proof derived in full, with signed small subgroup step for density and positive-time unboundedness proved separately. No measure construction is used despite the conditional measure clause in the circle definition. Next: rotation ergodicity.

Dependencies: def-circle-rotation-and-doubling-map, lem-pigeonhole.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Authored finite pigeonhole small-step net and positive-return unboundedness using a finite minimum; irrationality and endpoints checked. The route uses only the choice-free metric clause; strict checks pass.

## thm-circle-rotation-is-ergodic-iff-angle-is-irrational

Full local density-overlap argument with numerical deficit and exact rational invariant witness. Published density proof read; its duplicated/mid-paragraph tags are potential formatting debt, not a mathematical defect of the used density conclusion. Next: base-b definition.

Dependencies: prop-circle-rotations-preserve-lebesgue-measure, lem-irrational-circle-orbits-are-dense, thm-ergodicity-and-invariant-functions, thm-lebesgue-density-theorem, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Rational invariant half-measure witness and irrational density-overlap proof completed; canonical numbering adopted; both iff directions, endpoints, and choice use checked.

## def-integer-base-map-on-the-circle

Authored the branch inverse and iterate formula, including level zero and cut conventions. No new mathematical supplier. Next: preservation.

Dependencies: def-circle-rotation-and-doubling-map.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Explicit b-adic partitions, affine branches, iterate formula, branch inverses and Lipschitz estimate authored; choice-free metric clause only; checks pass.

## prop-integer-base-map-preserves-lebesgue-measure

Complete b-branch interval calculation and generator/completion passage. Read scaling and mixing-generator supplier proofs for current and next item. Next: strong mixing.

Dependencies: def-integer-base-map-on-the-circle, thm-measure-preservation-on-a-generating-pi-system, prop-measure-preserving-compositions-iterates-and-completions, thm-lebesgue-measure-under-dilations-and-reflections, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Authored b disjoint interval inverse branches, finite generator/completion check, and explicit surjective/noninjective witnesses; countable-choice assumptions checked; strict checks pass.

## thm-integer-base-map-is-strongly-mixing

Exact eventual factorization on b-adic generators, with proof that they generate the Borel sets and completion transfer by null symmetric differences. Next: doubling specialization.

Dependencies: prop-integer-base-map-preserves-lebesgue-measure, thm-mixing-is-checkable-on-a-generating-pi-system, def-completion-of-a-measure-space, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Exact branch count b^(n-r) times b^(-n-s) proves generator correlations; Borel generation and completion null-set transfer fully supplied. Direct mixing criterion read; checks pass.

## prop-doubling-map-preserves-lebesgue-measure

Stable doubling item retained with explicit two-branch calculation. Next: independent dyadic density proof.

Dependencies: def-circle-rotation-and-doubling-map, prop-integer-base-map-preserves-lebesgue-measure, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Base-two specialization plus exact two-branch inverse images and distinct zero-fiber witnesses authored; countable-choice use propagated and checks pass.

## thm-doubling-map-is-ergodic-for-lebesgue-measure

Independent dyadic-density proof retained. Added explicit translation supplier: dilation alone does not justify affine branch scaling. Current direct supplier proofs read. Next: doubling mixing.

Dependencies: prop-doubling-map-preserves-lebesgue-measure, thm-ergodicity-and-invariant-functions, thm-lebesgue-density-theorem, thm-lebesgue-measure-under-dilations-and-reflections, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded repaired. Evidence: Independent proof computes lambda(A intersect I)=lambda(A)lambda(I), then controls dyadic density by a centered interval with factor two. Translation edge repaired; endpoint and countable-choice checks pass.

## prop-doubling-map-is-strongly-mixing

Retained explicit dyadic correlation specialization. Next: binary sequence construction.

Dependencies: def-circle-rotation-and-doubling-map, thm-integer-base-map-is-strongly-mixing, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Base-two strong-mixing specialization and exact dyadic correlation values authored, with completion and countable-choice hypotheses preserved; strict checks pass.

## def-binary-sequence-cylinders-and-fair-coin-content

Completed finite-algebra and representation-independence argument inline. Next: compactness in ZF.

Dependencies: def-algebra-of-subsets.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Cylinder algebra closure, nonempty atoms, common-refinement well-definedness and finite additivity completely written; empty and one-coordinate cases checked; no choice used.

## lem-binary-sequence-space-is-compact-without-tychonoff

Complete ultrametric, topology and deterministic bad-cylinder proof. No general product compactness or countable choice is consumed. Next: premeasure.

Dependencies: def-binary-sequence-cylinders-and-fair-coin-content, def-metric-compactness.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Ultrametric and prefix-ball calculation plus deterministic first-bad-child compactness proof authored; no Tychonoff/DC/AC used; strict checks pass.

## lem-fair-coin-cylinder-content-is-a-premeasure

Avoided hidden ambient/subspace compactness citation by covering Omega with the clopen complement. Countable additivity reduced rigorously to finite additivity. Next: measure extension.

Dependencies: def-binary-sequence-cylinders-and-fair-coin-content, lem-binary-sequence-space-is-compact-without-tychonoff, def-premeasure-on-an-algebra.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Clopen-complement cover of Omega yields a finite subcover; disjointness forces all other members empty, proving premeasure additivity. ZF route and strict checks pass.

## thm-fair-coin-measure-on-binary-sequences

Countable prefix base proved by explicit enumeration, finite-premeasure extension and uniqueness checked, completion assumption propagated. Next: shift.

Dependencies: lem-fair-coin-cylinder-content-is-a-premeasure, thm-caratheodory-extension-theorem, cor-finite-premeasure-extension-is-unique, thm-completion-of-a-measure-space, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Explicit prefix enumeration identifies Borel domain; finite premeasure extends uniquely and its completion preserves total mass one. Countable-choice uses named; strict checks pass.

## thm-fair-coin-one-sided-shift-is-measure-preserving-and-mixing

Explicit finite-coordinate preservation and eventual independent-cylinder calculation; completion transfer written, not assumed. Next: dense continuous family.

Dependencies: thm-fair-coin-measure-on-binary-sequences, thm-measure-preservation-on-a-generating-pi-system, thm-mixing-is-checkable-on-a-generating-pi-system, prop-measure-preserving-compositions-iterates-and-completions, thm-mixing-implies-weak-mixing-implies-ergodicity, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Coordinate shift preserves cylinder masses; disjoint coordinate sets give exact eventual correlations. Generator/completion passages and mixing-to-ergodicity supplier verified; strict checks pass.

## lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family

Authored rational-polynomial enumeration and local all-witness lattice-cover proof. Read Gaddy Lemmas 2.10–2.11 pp.4 and Stone–Weierstrass proof p.5 in full; used no unrelated approximation or countability claim from that paper. Published concern: thm-real-stone-weierstrass-for-compact-metric-spaces steps 1.1–4.1 select uncountably indexed witnesses without a choice account; confirmed proof-writing gap, not a false theorem. Proposed repair is the all-witness cover argument supplied locally here. lem-uniform-closure-of-a-real-function-algebra-is-a-lattice steps 1.1–2.1 use countable sequences without declaring choice; own use explicitly assumes AC_omega. It can instead be repaired by epsilon-wise approximations. Added explicit interpolation, lattice, compactness and rational-density suppliers, replacing the load-bearing Stone–Weierstrass edge. Next: sequential compactness of probability integrals.

Dependencies: lem-compact-metric-space-has-a-countable-dense-subset, lem-countable-iff-surjection-from-n, thm-rationals-countable, thm-product-of-countable, thm-countable-union-of-countable, lem-uniform-closure-of-a-real-function-algebra-is-a-lattice, lem-two-point-interpolation-in-a-separating-real-function-algebra, def-metric-compactness, lem-q-and-irrationals-dense-r, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded repaired. Evidence: Rational coding, separating distances, all-witness finite-cover density proof and coefficient norm estimate fully authored; exact countable-choice uses and degenerate cases checked. Replaced arbitrary-witness route with local proof; strict item checks pass.

## lem-positive-functionals-on-compact-metric-spaces-have-probability-representations

New necessary supplier, fully authored in this dispatch: do not send through Step 3 self-review or record-item. Local metric formulas replace the DC-dependent general LCH cutoff and partition suppliers. Read all published RMK construction proofs, including the actual DC hypotheses, and reconstructed the compact-metric outer-measure argument with explicit AC_omega use. Published propagation concern: thm-rmk-positive-functional-is-integration-against-its-representing-measure and intermediate descendants omit the DC hypothesis of lem-rmk-functional-outer-content-is-well-defined and thm-rmk-functional-outer-content-is-an-outer-measure; exact general-LCH dependency branch needs owner review. No published edits. Next: run new-supplier checks and resume diagonal subsequence item.

Dependencies: def-metric-compactness, lem-closed-subset-of-a-compact-space-is-compact, thm-caratheodory-outer-measure-theorem, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

New supplier: explicit-path precheck/render and strict contract PASS. No Step 3 item decision invoked, as required for dispatch additions.

New supplier: explicit-path precheck/render and strict contract PASS. No Step 3 item decision invoked, as required for dispatch additions.

## lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences

Authored canonical bisection extraction, diagonal growth proof, uniform Cauchy extension and normalized positive-functional representation. Replaced general RMK edge (DC hypothesis) with the new fully authored compact-metric AC_omega representation supplier; removed unused uniqueness/regularity edges and added actual integral-order/linearity suppliers. Next: Krylov–Bogolyubov with local continuous-test uniqueness avoiding DC-based LCH cutoffs.

Dependencies: lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family, thm-bolzano-weierstrass, lem-positive-functionals-on-compact-metric-spaces-have-probability-representations, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Canonical left-half/least-index extraction and diagonal growth, Cauchy extension, positivity/linearity/normalization fully authored. AC_omega representation supplied locally; all item checks pass.

## thm-krylov-bogolyubov-for-nonempty-compact-metric-spaces

Authored full orbit-average integral formula, telescoping limit, pushforward identity for all nonnegative and integrable real functions, and continuous-test uniqueness by distance approximants plus finite pi-system uniqueness. Replaced unused general LCH regularity/uniqueness edges with exact local proof suppliers to preserve countable choice. Next: six false-statement witnesses, then B examples.

Dependencies: lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences, prop-dirac-measure-is-a-probability-measure, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, lem-finite-measure-uniqueness-on-a-pi-system, def-measure-preserving-transformation-and-system, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Orbit averages and complete simple/MCT pushforward identity authored; telescoping continuous integrals and closed-distance test approximations prove Borel invariance. All hypotheses and countable-choice use checked; strict item checks pass.

## fs-measure-preserving-transformations-are-invertible

Explicit collision and null-translate contradiction fully authored, including conull noninvertibility. Direct suppliers read. Next: irrational rotation obstruction to mixing.

Dependencies: prop-doubling-map-preserves-lebesgue-measure, def-invertible-measure-preserving-system, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-finite-and-countable-subadditivity-of-measures, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Doubling collision and no-injective-conull-restriction argument written, with null translation and positive half-interval contradiction; strict checks pass.

## fs-ergodicity-implies-strong-mixing

Authored the exact half-circle overlap formula for both displacement signs and a strictly increasing canonical return subsequence. Next: infinite-measure recurrence failure.

Dependencies: thm-circle-rotation-is-ergodic-iff-angle-is-irrational, def-strong-and-weak-mixing, lem-irrational-circle-orbits-are-dense, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Half-circle overlap computed as 1/2 minus circle displacement; canonical irrational returns force limit 1/2 rather than 1/4. Hypotheses and strict checks pass.

## fs-poincare-recurrence-without-finite-total-measure

Completed translation inverse-image and no-return calculations. Added explicit Lebesgue-measure and interval-value suppliers. Next: strict invariant null set.

Dependencies: thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-measure-of-a-box-of-every-kind, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-measure-preserving-transformation-and-system, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded repaired. Evidence: Translation preserves every Lebesgue measurable set measure, while all positive iterates of each point of [0,1) lie outside it. Infinite total mass and positive witness mass supplied explicitly; checks pass.

## fs-ergodicity-forces-only-empty-and-full-invariant-sets

Authored countable dyadic witness, explicit nondyadic point and both directions of strict inverse-image equality. Next: nondense fixed orbit.

Dependencies: thm-doubling-map-is-ergodic-for-lebesgue-measure, def-strict-and-mod-null-invariant-sigma-algebras, prop-countable-subsets-of-rn-are-lebesgue-null, thm-countable-union-of-countable, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Dyadic rationals are explicitly countable null, contain zero and omit 1/3; both inverse-image implications prove strict invariance in ergodic doubling. Strict checks pass.

## fs-ergodicity-forces-every-orbit-dense

Authored fixed orbit and explicit missed open ball. Next: continuous invariant functions versus measure ergodicity.

Dependencies: thm-doubling-map-is-ergodic-for-lebesgue-measure, def-circle-rotation-and-doubling-map, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Zero is fixed at every iterate and its orbit misses B(1/2,1/8), while the proved doubling theorem supplies ergodicity. Choice separation and strict checks pass.

## fs-continuous-invariant-functions-characterize-measure-ergodicity

Authored atomic invariance and eventual-zero half-mass witness, plus explicit dyadic approximation for continuous invariant functions. Removed unnecessary Lebesgue-null/countable-union/AC edges: this entire counterexample is choice-free. Next: worked examples.

Dependencies: def-circle-rotation-and-doubling-map, def-ergodic-measure-preserving-system, prop-dirac-measure-is-a-probability-measure, thm-of-archimedean.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Atomic weights are preserved by fixed point plus two-cycle; eventual-zero set is strict invariant of mass 1/2; explicit dyadic approximants force continuous invariants constant. Choice-free proof and strict checks pass.

## ex-rational-rotation-invariant-set

Computed every translated component and inverse residue permutation; summed q lengths and checked q=1. Next: dyadic preimages.

Dependencies: prop-circle-rotations-preserve-lebesgue-measure, def-ergodic-measure-preserving-system, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Exact residue permutation proves inverse-image invariance; disjoint lengths sum to 1/2 and violate ergodicity. q=1 and endpoints checked; strict checks pass.

## ex-doubling-dyadic-preimage-computation

Computed both inverse branches and the larger forward image with explicit inverse. Next: ternary cylinders.

Dependencies: prop-doubling-map-preserves-lebesgue-measure, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Both affine inequalities solved with endpoints; inverse-image mass is 1/2 and forward-image mass one. Strict checks pass.

## ex-base-three-cylinder-intervals-and-preimages

Three inverse branches and nine digit-deletion intervals computed in full. Next: fair-coin table.

Dependencies: def-integer-base-map-on-the-circle, prop-integer-base-map-preserves-lebesgue-measure, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Three inverse branches summed to 1/3; every level-two interval image and inverse checked, including maximal endpoints. Strict checks pass.

## ex-fair-coin-cylinder-measures-tabulated

Explicit coordinate counts and the disjoint two-prefix expansion verify all four promised masses. Added direct fair-coin cylinder-mass supplier. Next: recurrence interval example.

Dependencies: thm-fair-coin-measure-on-binary-sequences, thm-fair-coin-one-sided-shift-is-measure-preserving-and-mixing, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: All four masses calculated by distinct prescribed coordinates; separated-block event also expanded as two length-five prefixes. Direct measure edge added and strict checks pass.

## ex-doubling-recurrence-to-a-dyadic-interval

Recurrence hypotheses verified; added explicit return-time-one interval and a period-four point calculation. Next: half-circle Kac means.

Dependencies: thm-poincare-recurrence-for-finite-measure-preserving-systems, prop-doubling-map-preserves-lebesgue-measure, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Recurrence applied with measurable E of mass 1/4 and total mass one; time-one preimages and the 1/5 period-four orbit calculated. Strict checks pass.

## ex-kac-mean-return-to-a-half-circle

Closed half-circle hypotheses and both mean conventions calculated without silently identifying return times of different sets. Next: mod-null invariant singleton.

Dependencies: thm-kac-return-time-formula, thm-circle-rotation-is-ergodic-iff-angle-is-irrational, prop-countable-subsets-of-rn-are-lebesgue-null, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Kac applied directly to closed E of mass 1/2; unnormalized integral one and normalized mean two computed, with endpoint and recurrent-core conventions explicit. Strict checks pass.

## cex-mod-null-invariance-is-not-strict-invariance

Exact singleton preimage and symmetric difference authored. Next: dependence of doubling ergodicity on invariant measure.

Dependencies: prop-doubling-map-preserves-lebesgue-measure, def-strict-and-mod-null-invariant-sigma-algebras, prop-countable-subsets-of-rn-are-lebesgue-null, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Zero fiber is exactly {0,1/2}; singleton symmetric difference is null while 1/2 witnesses strict inequality. Strict checks pass.

## cex-doubling-ergodicity-depends-on-the-invariant-measure

Explicitly verified delta_0 is ergodic, not a counterexample; the fixed-point/two-cycle mixture supplies the actual failure with strict invariant half-mass set. Shared design correction remains for serial Step 4 reconciliation. Next: irrational rotation fails weak mixing.

Dependencies: thm-doubling-map-is-ergodic-for-lebesgue-measure, def-ergodic-measure-preserving-system, prop-dirac-measure-is-a-probability-measure, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Lebesgue ergodicity supplied; delta_0 ergodicity proved directly; invariant three-atom mixture has strict eventual-zero set of mass 1/2. Strict checks pass.

## cex-irrational-rotation-is-not-weakly-mixing

Explicit exponential addition, unit modulus and half-turn mean cancellation replace an uncited integral evaluation. Exact centered correlation and every finite Cesaro average calculated. Added elementary exponential and integral invariance suppliers. Next: Kac without ergodicity.

Dependencies: thm-circle-rotation-is-ergodic-iff-angle-is-irrational, prop-mixing-correlations-extend-to-l-two, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-exponential-is-entire-with-derivative-itself, prop-circle-rotations-preserve-lebesgue-measure, thm-integrals-are-invariant-under-measure-preserving-maps, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: One exponential has zero mean by half-turn invariance and absolute centered correlation one at every iterate. The necessary L2 weak-mixing criterion fails; precise elementary suppliers added and checks pass.

## cex-kac-formula-needs-ergodicity

Added missing countable-choice hypothesis and exact Lebesgue interval/ergodicity suppliers. Identity returns and both mean values calculated. Next: Gauss-map measure preservation.

Dependencies: def-first-return-time-and-induced-transformation, thm-kac-return-time-formula, thm-lebesgue-measure-of-a-box-of-every-kind, def-ergodic-measure-preserving-system, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded repaired. Evidence: Identity is probability preserving and nonergodic; r_E=1 everywhere, giving unnormalized 1/2 and normalized one. Missing Lebesgue choice assumption repaired; strict checks pass.

## ex-gauss-map-preserves-gauss-measure

Read the complete E–W Lemma 3.5 proof, printed pp.77–78 (PDF indices 90–91), including identity (3.16). Authored a direct logarithmic interval proof and the explicit density telescoping calculation; removed the load-bearing general C1 change-of-variables edge. Published concern: thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions Facts A1 asserts without proof that the equality class is a monotone class; step 1.1 also leaves rectangle approximation implicit. Confirmed proof-completeness gap, not a claim that the theorem is false. Proposed owner repair: explicit compact exhaustion/finite-measure pi-system uniqueness and rectangle cutoff approximation, followed by null completion and simple/MCT extension. Next: all owned recurrence pages and batch-wide checks; then CLT batch.

Dependencies: thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws, thm-continuous-implies-integrable, thm-ftc-second-part, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, prop-countable-subsets-of-rn-are-lebesgue-null, thm-measure-preservation-on-a-generating-pi-system, prop-measure-preserving-compositions-iterates-and-completions, def-countable-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Gauss branches and all endpoint fibers explicit; normalized logarithmic interval masses telescope and generate Borel preservation, then completion. Density partial sums computed separately; strict checks pass.

Both recurrence A/B pages authored with complete manifest inventories, including the new representation supplier. Page rendering and batch checks are next.

## Initial batch-1 checks

Explicit-path precheck passed all 41 proof-bearing items; rendering passed 45 items and two pages. Strict contracts passed 45/45 (one nonfatal broad-fact warning on Gauss). Initial content-policy failed because its metadata parser did not recognize nested flow mappings; block provenance/sources and inline dependency lists repair that incompatibility. The later content-policy run passed 45/45. Final checks after this metadata repair are recorded below.

validate-plan research/plan-spec.json --repo . --max-items 60 exited zero with 597 empty planned inventories. This does not validate the absent four owned inventories; Step 4 must splice them. Global redundant-prerequisite warnings were unrelated to these batches.

## lem-characteristic-function-of-a-normal-law

Read Durrett Example 3.3.5, printed pp126–127, complete mathematical proof (not its heuristic physics argument). Supplied finite absolute moment, compact integration-by-parts limits and standard second moment locally; the latter is needed by later Gaussian constructions and the converse counterexample. All original transform claims retained. Next: second-order expansion.

Dependencies: def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, thm-continuous-implies-integrable, thm-ftc-second-part, thm-integration-by-parts, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-monotone-convergence-for-the-integral, thm-integration-against-a-density, lem-moments-give-derivatives-of-the-characteristic-function, thm-dominated-convergence, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-and-cosine-derivatives, cor-zero-derivative-implies-constant, lem-characteristic-functions-under-affine-maps-and-independent-sums, thm-complex-exponential-addition-and-real-extension, thm-linearity-of-the-lebesgue-integral-on-l-one, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

## lem-characteristic-function-of-a-normal-law

Read Durrett Example 3.3.5, printed pp126–127, complete mathematical proof (not its heuristic physics argument). Supplied finite absolute moment, compact integration-by-parts limits and standard second moment locally; the latter is needed by later Gaussian constructions and the converse counterexample. All original transform claims retained. Next: second-order expansion.

Dependencies: def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, thm-continuous-implies-integrable, thm-ftc-second-part, thm-integration-by-parts, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-monotone-convergence-for-the-integral, thm-integration-against-a-density, lem-moments-give-derivatives-of-the-characteristic-function, thm-dominated-convergence, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-and-cosine-derivatives, cor-zero-derivative-implies-constant, lem-characteristic-functions-under-affine-maps-and-independent-sums, thm-complex-exponential-addition-and-real-extension, thm-linearity-of-the-lebesgue-integral-on-l-one, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Complete compact integration-by-parts argument, explicit first/second moments and tail bounds, ODE uniqueness, affine and zero-variance cases; precise suppliers registered.

## lem-second-order-characteristic-function-expansion

Derived both global quadratic and local cubic scalar estimates from real Taylor; DCT uses an explicit integrable quadratic majorant, never a third moment. Strengthened the lemma with the scalar bounds needed by both triangular-array directions. Next: near-one products.

Dependencies: cor-taylor-remainder-bound, thm-sine-and-cosine-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-dominated-convergence, thm-linearity-of-the-lebesgue-integral-on-l-one, def-characteristic-function-of-a-real-random-variable, def-moments-variance-and-covariance.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Explicit Taylor constants, uniform prescribed DCT majorants, centering and two-sided zero-frequency limit fully checked.

## lem-product-of-near-one-characteristic-factors

Derived Durrett-style direct exponential product comparison with explicit constant e^M and exact finite cancellation. Next: iid CLT.

Dependencies: def-complex-exponential, lem-complex-exponential-series-converges-everywhere, thm-complex-exponential-addition-and-real-extension.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Quadratic series error and exact finite mixed-product telescoping give e^M times the square sum; empty, single and zero rows checked.

## thm-lindeberg-levy-iid-central-limit-theorem

Full iid characteristic-function argument authored with all three near-one hypotheses checked explicitly. Next: de Moivre–Laplace.

Dependencies: lem-second-order-characteristic-function-expansion, lem-product-of-near-one-characteristic-factors, lem-characteristic-functions-under-affine-maps-and-independent-sums, lem-characteristic-function-of-a-normal-law, cor-characteristic-function-criterion-for-weak-convergence, thm-linearity-of-the-lebesgue-integral-on-l-one, def-identically-distributed-and-iid-random-variables, def-partial-sums-and-sample-means, def-moments-variance-and-covariance, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Standardization, all near-one row conditions, t=0, independent product identity and the specified continuous Gaussian limit checked.

## cor-de-moivre-laplace-central-limit-theorem

Independent-copy realization and transfer of row laws fully written; no joint coupling of the supplied B_n assumed. Next: triangular-array definitions.

Dependencies: cor-countable-independent-copies-exist, thm-choice-implies-dependent-implies-countable-choice, lem-bernoulli-and-binomial-mean-and-variance, thm-lindeberg-levy-iid-central-limit-theorem, def-bernoulli-and-binomial-random-variables, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

## cor-de-moivre-laplace-central-limit-theorem

Independent-copy realization and transfer of row laws fully written; no joint coupling of the supplied B_n assumed. Next: triangular-array definitions.

Dependencies: cor-countable-independent-copies-exist, thm-choice-implies-dependent-implies-countable-choice, lem-bernoulli-and-binomial-mean-and-variance, thm-lindeberg-levy-iid-central-limit-theorem, def-bernoulli-and-binomial-random-variables, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Independent Bernoulli realization, exact means and positive variances, iid CLT and equality-of-laws transfer checked.

## def-row-wise-independent-centered-triangular-array

Authored the exact measurable-event factorization and row-space convention, including deterministic and singleton rows. No proof section is appropriate for this definition. Next: Lindeberg normalization.

Dependencies: def-random-element-and-real-random-variable, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-independent-random-elements.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Definition specifies all row quantifiers, common space within each row, optional distinct spaces across rows and exact factorization.

## def-total-row-variance-and-lindeberg-condition

Both normalization conventions authored with event equality, integrability and zero-row exclusion. Shared prose must say total normalized variance exactly one, not ambiguously s_n^2 tending to one. Next: Feller negligibility.

Dependencies: def-row-wise-independent-centered-triangular-array, def-moments-variance-and-covariance, def-expectation-of-a-nonnegative-or-integrable-random-variable, thm-arithmetic-and-lattice-operations-preserve-measurability, prop-order-and-scalar-rules-for-the-nonnegative-integral.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Finite moments, measurable strict cutoffs, positive normalization and exact equivalence of the two Lindeberg expressions checked.

## lem-lindeberg-condition-implies-feller-negligibility

Explicit split, maximum inequality and epsilon-eta conclusion authored. Next: Lindeberg sufficiency.

Dependencies: def-total-row-variance-and-lindeberg-condition, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-moments-variance-and-covariance.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Finite-row maximum bounded by epsilon squared plus Lindeberg sum; all quantifiers and cutoff equality checked.

## thm-lindeberg-feller-central-limit-theorem-sufficiency

Read complete Durrett Theorem 3.4.10 proof, printed pp148–149. Authored explicit summed remainder and product estimates; repaired dependency to the now-authored scalar-bound lemma and integral triangle inequality. Next: Feller converse.

Dependencies: def-total-row-variance-and-lindeberg-condition, lem-second-order-characteristic-function-expansion, lem-lindeberg-condition-implies-feller-negligibility, lem-product-of-near-one-characteristic-factors, lem-characteristic-functions-under-affine-maps-and-independent-sums, lem-characteristic-function-of-a-normal-law, cor-characteristic-function-criterion-for-weak-convergence, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-integral-triangle-inequality, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Normalized variance, uniform tail-split remainder, three near-one hypotheses and Levy identification fully checked.

## thm-feller-converse-to-lindeberg-feller

Read Billingsley Theorem 28.4 and Example 28.4, printed p375, complete converse argument. Replaced the scaffold Helly/canonical-measure machinery by a complete elementary cosine-deficit proof: fixed t=4/epsilon gives an explicit tail bound, while product moduli force the deficit to zero. This retains the promised theorem and removes substantial unnecessary suppliers. Shared plan/strategy amendment is for Step 4. Next: Lyapunov.

Dependencies: lem-second-order-characteristic-function-expansion, lem-product-of-near-one-characteristic-factors, lem-characteristic-functions-under-affine-maps-and-independent-sums, thm-levy-continuity-theorem-forward-direction, lem-characteristic-function-of-a-normal-law, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-exponential-addition-and-real-extension, def-complex-exponential, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-integral-triangle-inequality, def-total-row-variance-and-lindeberg-condition, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Forward Levy and near-one products force nonnegative cosine deficit to zero; explicit t=4/epsilon bounds every Lindeberg tail. No circular sufficiency use.

## cor-lyapunov-central-limit-theorem

Pointwise positive-power tail comparison authored with exact s_n and epsilon exponents. Next: multivariate Gaussian definition and realization.

Dependencies: def-total-row-variance-and-lindeberg-condition, thm-lindeberg-feller-central-limit-theorem-sufficiency, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Exact tail inequality proves Lindeberg and all sufficiency hypotheses are checked.

## def-multivariate-normal-law

Repaired scaffold existence gap by adding scalar transform, affine-product and uniqueness dependencies before using Gaussian projections; no appeal to the following vector-transform lemma. Full construction, covariance and singular cases authored. Next: multivariate transform.

Dependencies: lem-characteristic-function-of-a-normal-law, thm-non-negative-square-root-exists-and-is-unique, cor-countable-independent-copies-exist, thm-choice-implies-dependent-implies-countable-choice, lem-characteristic-functions-under-affine-maps-and-independent-sums, thm-uniqueness-of-a-law-from-its-characteristic-function, thm-factorization-of-expectations-for-independent-variables, thm-linearity-of-the-lebesgue-integral-on-l-one, def-law-or-distribution-of-a-random-element, def-standard-normal-and-normal-laws, def-moments-variance-and-covariance, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded repaired. Evidence: Square-root realization, scalar projection laws via earlier scalar uniqueness, covariance and all singular directions fully checked.

## lem-characteristic-function-of-a-multivariate-normal-law

Projection-at-frequency-one computation and scalar-to-vector uniqueness authored without circular definition use. Next: multivariate iid CLT.

Dependencies: def-multivariate-normal-law, lem-characteristic-function-of-a-normal-law, thm-uniqueness-of-a-law-from-its-characteristic-function, thm-cramer-wold-device, def-characteristic-function-of-a-real-random-variable, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Exact projection transform, null directions and both scalar/vector uniqueness hypotheses checked.

## thm-multivariate-iid-central-limit-theorem

Authored projection second-moment bound, positive/zero variance branches, and Cramer–Wold application to the already constructed target. Added continuous-mapping supplier for positive scalar rescaling. Next: convergence-mode remark.

Dependencies: thm-lindeberg-levy-iid-central-limit-theorem, def-multivariate-normal-law, thm-cramer-wold-device, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-cauchy-schwarz-and-the-euclidean-norm, thm-continuous-mapping-theorem, def-moments-variance-and-covariance, def-convergence-in-distribution-of-random-elements, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded repaired. Evidence: Every projection has verified finite moments; positive directions use scalar CLT and scaling, zero directions vanish a.s.; specified Gaussian target and Cramer–Wold checked.

## rem-clt-convergence-is-only-in-distribution

Convergence-mode distinctions authored as a remark, with the constant-limit exception and partially singular case explicit. Next: seven worked CLT examples.

Dependencies: thm-lindeberg-levy-iid-central-limit-theorem, thm-lindeberg-feller-central-limit-theorem-sufficiency, thm-multivariate-iid-central-limit-theorem, def-convergence-in-distribution-of-random-elements, def-convergence-in-probability, def-almost-sure-convergence-of-random-variables, thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability.

Written with item-specific contract. Checks and decision pending below.

## rem-clt-convergence-is-only-in-distribution

Convergence-mode distinctions authored as a remark, with the constant-limit exception and partially singular case explicit. Next: seven worked CLT examples.

Dependencies: thm-lindeberg-levy-iid-central-limit-theorem, thm-lindeberg-feller-central-limit-theorem-sufficiency, thm-multivariate-iid-central-limit-theorem, def-convergence-in-distribution-of-random-elements, def-convergence-in-probability, def-almost-sure-convergence-of-random-variables, thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded accept. Evidence: Definitions of convergence modes and the exact constant-law exception checked; no stronger coupling conclusion asserted.

## ex-normal-approximation-to-binomial-probabilities

Calculated raw and half-unit corrected normal endpoints for Bin(100,1/2), with normal integral values evaluated numerically. Continuity-set hypotheses and endpoint masses proved. Next: uniform sum.

Dependencies: cor-de-moivre-laplace-central-limit-theorem, thm-portmanteau-theorem, def-standard-normal-and-normal-laws, prop-countable-subsets-of-rn-are-lebesgue-null, def-bernoulli-and-binomial-random-variables, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

## ex-normal-approximation-to-binomial-probabilities

Calculated raw and half-unit corrected normal endpoints for Bin(100,1/2), with normal integral values evaluated numerically. Continuity-set hypotheses and endpoint masses proved. Next: uniform sum.

Dependencies: cor-de-moivre-laplace-central-limit-theorem, thm-portmanteau-theorem, def-standard-normal-and-normal-laws, prop-countable-subsets-of-rn-are-lebesgue-null, def-bernoulli-and-binomial-random-variables, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: recorded repaired. Evidence: Atomless endpoints and Portmanteau checked; Bin(100,1/2) standardizations yield +/-1 and +/-1.1 with explicitly labelled numerical approximations.

## ex-clt-for-sums-of-uniform-random-variables

Uniform normalization, first and second moments and variance calculated by explicit polynomial primitives. Next: nonidentical Lyapunov signs.

Dependencies: thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-integration-against-a-density, thm-ftc-second-part, lem-derivative-of-a-power, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, cor-countable-independent-copies-exist, thm-choice-implies-dependent-implies-countable-choice, thm-lindeberg-levy-iid-central-limit-theorem, thm-continuous-implies-integrable, def-moments-variance-and-covariance, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Polynomial primitive values 1,1/2,1/3 give variance1/12; all iid CLT and choice hypotheses checked.

## ex-lyapunov-condition-for-nonidentical-summands

All moments computed from two-point laws; explicit upper/lower sum bounds prove O(n^-1/2) Lyapunov ratio. Next: distinct Bernoulli rows.

Dependencies: cor-lyapunov-central-limit-theorem, cor-countable-independent-copies-exist, thm-choice-implies-dependent-implies-countable-choice, def-row-wise-independent-centered-triangular-array, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Distinct supports, exact centered moments, integer indexing and explicit Lyapunov ratio bound checked.

## ex-lindeberg-array-with-no-identically-distributed-row

Explicit nonidentical supports, exact variance lower bound n/8 and eventual empty tails authored. Next: singular Gaussian example.

Dependencies: thm-countable-product-of-probability-spaces, cor-coordinate-random-elements-on-a-countable-product-are-independent, thm-choice-implies-dependent-implies-countable-choice, lem-bernoulli-and-binomial-mean-and-variance, thm-lindeberg-feller-central-limit-theorem-sufficiency, def-total-row-variance-and-lindeberg-condition, def-bernoulli-and-binomial-random-variables, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Distinct centered supports, countable construction, n/8 variance lower bound and eventually zero Lindeberg sums checked.

## ex-degenerate-multivariate-gaussian-limit

Calculated covariance, eigenvalues, rank and diagonal support; identified the concrete limit by its projections including negative and zero coefficients. Next: Cauchy scaling counterexample.

Dependencies: thm-multivariate-iid-central-limit-theorem, def-multivariate-normal-law, lem-characteristic-function-of-a-multivariate-normal-law, lem-characteristic-functions-under-affine-maps-and-independent-sums, lem-characteristic-function-of-a-normal-law, thm-uniqueness-of-a-law-from-its-characteristic-function, def-moments-variance-and-covariance, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Covariance and rank computed explicitly; projection identity verifies (Z,Z) as the singular Gaussian target.

## cex-clt-can-fail-with-infinite-variance-under-square-root-n-scaling

Read complete Durrett Example 3.3.16, printed p131. Authored the precursor Laplace integral, arctangent integrability bound, continuous-density identification, Cauchy normalization/transform, divergent second moment and discontinuous candidate limit. Removed unnecessary general substitution edge. Next: necessity of Feller negligibility.

Dependencies: thm-ftc-second-part, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-derivative-of-exponential, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-integration-against-a-density, thm-principal-inverse-tangent-calculus, def-principal-inverse-tangent, cor-density-inversion-from-an-integrable-characteristic-function, thm-lebesgue-measure-of-a-box-of-every-kind, cor-countable-independent-copies-exist, thm-choice-implies-dependent-implies-countable-choice, lem-characteristic-functions-under-affine-maps-and-independent-sums, thm-levy-continuity-theorem-forward-direction, lem-basic-properties-of-characteristic-functions, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-continuous-implies-integrable, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-algebra-of-derivatives, thm-complex-exponential-addition-and-real-extension, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Laplace half-line primitives and real inversion give the Cauchy transform; explicit divergent moment bound and discontinuity rule out every weak probability limit.

## cex-feller-negligibility-cannot-be-removed-from-the-converse

Explicit single-Z array, event-level row independence and a positive length-one tail lower bound authored. Added the locally proved normal-moment supplier: density normalization alone did not establish variance one. All 22 original batch3 items are now authored. Next: pages, precise metadata/contracts cleanup, full checks and decision reconciliation.

Dependencies: lem-characteristic-function-of-a-normal-law, def-total-row-variance-and-lindeberg-condition, thm-integration-against-a-density, thm-lebesgue-measure-of-a-box-of-every-kind, thm-exponential-is-strictly-increasing, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-row-wise-independent-centered-triangular-array, def-standard-normal-and-normal-laws, def-moments-variance-and-covariance, def-axiom-of-choice.

Written with item-specific contract. Checks and decision pending below.

Explicit-path precheck and rendering; strict contract for this item: PASS. Decision command: FAILED: Step 3a must clear before item auditing. Evidence: Exact row independence with constants, total/maximal variance one, normal row laws and explicit strictly positive Lindeberg tails checked.

Final batch 1 precheck: exit 0. PASS. Explicit scope 45 items.

Final batch 1 rendercheck: exit 0. PASS. Explicit scope 45 items and 2 pages.

Final batch 1 content-policy: exit 0. PASS. 

Final batch 1 proof-contract: exit 0. PASS. 

Final batch 1 validate-plan: exit 0. PASS. 

Final batch 3 precheck: exit 0. PASS. Explicit scope 22 items.

Final batch 3 rendercheck: exit 0. PASS. Explicit scope 22 items and 2 pages.

Final batch 3 content-policy: exit 0. PASS. 

Final batch 3 proof-contract: exit 0. PASS. 

Final batch 3 validate-plan: exit 0. PASS. 

## Decision refresh

After full local checks, refreshed 0 original-item decisions invalidated or missing from current dependency/content changes. The new representation lemma was excluded from record-item, as directed.
lem-no-return-sets-have-null-preimage-towers: pending, Step 3a must clear before item auditing
thm-poincare-recurrence-for-finite-measure-preserving-systems: pending, Step 3a must clear before item auditing
cor-topological-poincare-recurrence-on-second-countable-spaces: pending, Step 3a must clear before item auditing
def-first-return-time-and-induced-transformation: pending, Step 3a must clear before item auditing
prop-first-return-time-and-induced-map-are-measurable: pending, Step 3a must clear before item auditing
thm-induced-transformation-preserves-the-restricted-measure: pending, Step 3a must clear before item auditing
prop-inducing-preserves-ergodicity: pending, Step 3a must clear before item auditing
thm-kac-return-time-formula: pending, Step 3a must clear before item auditing
thm-kac-integral-formula-for-excursions: pending, Step 3a must clear before item auditing
def-circle-rotation-and-doubling-map: pending, Step 3a must clear before item auditing
prop-circle-rotations-preserve-lebesgue-measure: pending, Step 3a must clear before item auditing
lem-irrational-circle-orbits-are-dense: pending, Step 3a must clear before item auditing
thm-circle-rotation-is-ergodic-iff-angle-is-irrational: pending, Step 3a must clear before item auditing
def-integer-base-map-on-the-circle: pending, Step 3a must clear before item auditing
prop-integer-base-map-preserves-lebesgue-measure: pending, Step 3a must clear before item auditing
thm-integer-base-map-is-strongly-mixing: pending, Step 3a must clear before item auditing
prop-doubling-map-preserves-lebesgue-measure: pending, Step 3a must clear before item auditing
thm-doubling-map-is-ergodic-for-lebesgue-measure: pending, Step 3a must clear before item auditing
prop-doubling-map-is-strongly-mixing: pending, Step 3a must clear before item auditing
def-binary-sequence-cylinders-and-fair-coin-content: pending, Step 3a must clear before item auditing
lem-binary-sequence-space-is-compact-without-tychonoff: pending, Step 3a must clear before item auditing
lem-fair-coin-cylinder-content-is-a-premeasure: pending, Step 3a must clear before item auditing
thm-fair-coin-measure-on-binary-sequences: pending, Step 3a must clear before item auditing
thm-fair-coin-one-sided-shift-is-measure-preserving-and-mixing: pending, Step 3a must clear before item auditing
lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family: pending, Step 3a must clear before item auditing
lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences: pending, Step 3a must clear before item auditing
thm-krylov-bogolyubov-for-nonempty-compact-metric-spaces: pending, Step 3a must clear before item auditing
fs-measure-preserving-transformations-are-invertible: pending, Step 3a must clear before item auditing
fs-ergodicity-implies-strong-mixing: pending, Step 3a must clear before item auditing
fs-poincare-recurrence-without-finite-total-measure: pending, Step 3a must clear before item auditing
fs-ergodicity-forces-only-empty-and-full-invariant-sets: pending, Step 3a must clear before item auditing
fs-ergodicity-forces-every-orbit-dense: pending, Step 3a must clear before item auditing
fs-continuous-invariant-functions-characterize-measure-ergodicity: pending, Step 3a must clear before item auditing
ex-rational-rotation-invariant-set: pending, Step 3a must clear before item auditing
ex-doubling-dyadic-preimage-computation: pending, Step 3a must clear before item auditing
ex-base-three-cylinder-intervals-and-preimages: pending, Step 3a must clear before item auditing
ex-fair-coin-cylinder-measures-tabulated: pending, Step 3a must clear before item auditing
ex-doubling-recurrence-to-a-dyadic-interval: pending, Step 3a must clear before item auditing
ex-kac-mean-return-to-a-half-circle: pending, Step 3a must clear before item auditing
cex-mod-null-invariance-is-not-strict-invariance: pending, Step 3a must clear before item auditing
cex-doubling-ergodicity-depends-on-the-invariant-measure: pending, Step 3a must clear before item auditing
cex-irrational-rotation-is-not-weakly-mixing: pending, Step 3a must clear before item auditing
cex-kac-formula-needs-ergodicity: pending, Step 3a must clear before item auditing
ex-gauss-map-preserves-gauss-measure: pending, Step 3a must clear before item auditing
lem-characteristic-function-of-a-normal-law: pending, Step 3a must clear before item auditing
lem-second-order-characteristic-function-expansion: pending, Step 3a must clear before item auditing
lem-product-of-near-one-characteristic-factors: pending, Step 3a must clear before item auditing
thm-lindeberg-levy-iid-central-limit-theorem: pending, Step 3a must clear before item auditing
cor-de-moivre-laplace-central-limit-theorem: pending, Step 3a must clear before item auditing
def-row-wise-independent-centered-triangular-array: pending, Step 3a must clear before item auditing
def-total-row-variance-and-lindeberg-condition: pending, Step 3a must clear before item auditing
lem-lindeberg-condition-implies-feller-negligibility: pending, Step 3a must clear before item auditing
thm-lindeberg-feller-central-limit-theorem-sufficiency: pending, Step 3a must clear before item auditing
thm-feller-converse-to-lindeberg-feller: pending, Step 3a must clear before item auditing
cor-lyapunov-central-limit-theorem: pending, Step 3a must clear before item auditing
def-multivariate-normal-law: pending, Step 3a must clear before item auditing
lem-characteristic-function-of-a-multivariate-normal-law: pending, Step 3a must clear before item auditing
thm-multivariate-iid-central-limit-theorem: pending, Step 3a must clear before item auditing
rem-clt-convergence-is-only-in-distribution: pending, Step 3a must clear before item auditing
ex-normal-approximation-to-binomial-probabilities: pending, Step 3a must clear before item auditing
ex-clt-for-sums-of-uniform-random-variables: pending, Step 3a must clear before item auditing
ex-lyapunov-condition-for-nonidentical-summands: pending, Step 3a must clear before item auditing
ex-lindeberg-array-with-no-identically-distributed-row: pending, Step 3a must clear before item auditing
ex-degenerate-multivariate-gaussian-limit: pending, Step 3a must clear before item auditing
cex-clt-can-fail-with-infinite-variance-under-square-root-n-scaling: pending, Step 3a must clear before item auditing
cex-feller-negligibility-cannot-be-removed-from-the-converse: pending, Step 3a must clear before item auditing

## Decision refresh

After full local checks, refreshed 66 original-item decisions invalidated or missing from current dependency/content changes. The new representation lemma was excluded from record-item, as directed.

## Published concerns for serial owner reconciliation

No published item was edited. These findings belong in the canonical published-consumer-supplier ledger through the serial reconciler, not a concurrent group edit.

1. thm-real-stone-weierstrass-for-compact-metric-spaces; page approximation-and-compactness-in-ck. Confirmed proof-accounting gap, high confidence: steps 1.1–4.1 select interpolants indexed by arbitrary points before extracting finite subcovers, without identifying an adequate choice assumption. This is not evidence that the theorem is false. Repair with the all-witness open covers and finite maxima/minima used in lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family (authored draft on this group's recurrence A page), or state and propagate the actual choice cost. Existing suppliers are lem-two-point-interpolation-in-a-separating-real-function-algebra, lem-uniform-closure-of-a-real-function-algebra-is-a-lattice and compactness. Gaddy, printed pp4–5, was read completely for the relevant lemmas and theorem; the local proof explicitly removes the arbitrary-index witness selection. The new supplier does not rely on the defective published theorem.

2. lem-uniform-closure-of-a-real-function-algebra-is-a-lattice; page approximation-and-compactness-in-ck. Confirmed omitted choice accounting, high confidence: step 1.1 chooses an approximating sequence a_n from closure, step 1.2 chooses a polynomial sequence, and step 2.1 invokes a diagonal choice. No selection axiom is in its statement/dependencies. Repair epsilonwise using the published cor-weierstrass-approximation-on-a-closed-interval and closure neighborhoods, or declare countable choice with def-countable-choice. The local countable-dense-family consumer explicitly assumes countable choice; its use of this approximation argument is covered. This concern does not invalidate that new consumer.

3. thm-trace-is-a-sigma-algebra; page sigma-algebras-and-borel-sets. Potential choice gap, medium confidence, not a confirmed false theorem: step 2.1 starts with a sequence written as A_n intersect Y, while its claim concerns an arbitrary sequence of members of the trace. The existence of a representative for each member does not by itself specify the sequence of representatives in ZF. Owner should audit whether a representative-free closure proof is available for arbitrary Y; otherwise state countable choice and propagate it, with def-countable-choice. The present def-first-return-time-and-induced-transformation supplies its needed measurable-core trace closure locally, without representatives or an added choice assumption.

4. RMK assumption propagation; page radon-measures-and-the-riesz-markov-kakutani-theorem. Interface audit candidates, medium confidence: lem-rmk-functional-outer-content-is-well-defined and thm-rmk-functional-outer-content-is-an-outer-measure declare dependent choice. The downstream statements thm-rmk-open-sets-are-caratheodory-measurable, lem-rmk-compact-set-formula-and-local-finiteness, thm-rmk-representing-measure-is-inner-regular-on-open-sets and thm-rmk-positive-functional-is-integration-against-its-representing-measure instead refer to the measure “constructed above,” without a standalone choice contract. Their conditional calculations may be valid once that measure is supplied; the concern is consuming the construction while losing its hypothesis, not a proved failure of those conditional statements. Owner should make the inherited construction assumptions explicit with def-dependent-choice and inspect propagation to the representation theorem. This group avoids that route entirely: lem-positive-functionals-on-compact-metric-spaces-have-probability-representations is a fully authored draft supplier under countable choice, and the probability-subsequence/Krylov–Bogolyubov consumers use it. Cohn's external chapter was not newly read in this dispatch; the relevant published local construction arguments were read.

5. thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions; page product-measures-and-the-fubini-tonelli-theorems. Confirmed proof-completeness gap, high confidence: Facts A1 asserts the set-equality class is a monotone class without proof or a finite-mass qualification; proof 1.1 invokes that assertion and leaves the rectangle cutoffs implicit. Equality of two possibly infinite measures does not automatically pass to arbitrary decreasing intersections. Repair by an explicit relatively compact exhaustion, continuous cutoffs and finite-measure pi-system uniqueness, then null completion, simple functions and MCT. Required existing interfaces include lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands, lem-finite-measure-uniqueness-on-a-pi-system, the null-set diffeomorphism lemmas and thm-monotone-convergence-for-the-integral; author any missing exhaustion/cutoff details locally. The new ex-gauss-map-preserves-gauss-measure instead proves interval invariance by logarithms and has no dependency on this item.

6. Formatting observations, not established validator failures: on the page the-lebesgue-integral-and-the-convergence-theorems, the items thm-monotone-convergence-for-the-integral, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-integration-against-a-density, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, prop-order-and-scalar-rules-for-the-nonnegative-integral and thm-nonnegative-integral-zero-iff-zero-almost-everywhere contain proof tags before continued text/displays; the last also has prose after its final QED. The same kind of observation was made for thm-lebesgue-density-theorem on the-maximal-function-and-lebesgue-differentiation. All seven explicit-path read-only prechecks PASS in the current tool. Therefore retain these only as low-confidence presentation-audit candidates, not confirmed formatting failures or mathematical defects. No new supplier is required; any repair would move tags to the actual ends of the existing claims. Their mathematical clauses used here were checked separately from those format observations.

## Sources and scope qualifications at handoff

This author's actual external readings include Sarig Definition 1.18 and Theorem 1.7, printed pp28–29; Einsiedler–Ward Lemma 3.5 and its complete proof, printed pp77–78, including (3.16); Gaddy Lemmas 2.10–2.11 and the Stone–Weierstrass proof, printed pp4–5; Durrett Example 3.3.5 (the mathematical proof), printed pp126–127, Theorem 3.4.10 and its complete proof, pp148–149, and Example 3.3.16, p131; Billingsley Theorem 28.4 and Example 28.4, p375. Historical broader reading claims in coverage remain historical and are not claimed as this author's reading. Billingsley's downloaded full PDF was available; the relevant full extracted passage was read from the current batch's source extraction after the browser rejected the large file. No source-retrieval exhaustion is claimed.

The existing coverage declines were checked against the retained MT-22/PT-9 inventory: torus/Haar/p-adic examples, quantitative combinatorial recurrence, natural extensions, further ergodic decomposition, random-index CLTs, nonstandard normalizations and the general domain-of-attraction theorem remain outside the assigned claims. Weak-mixing spectral/product criteria retain their existing dedicated-page destination. Gauss ergodicity, the delta method and non-normal infinitely divisible theory retain destination owner-decision; this author has not invented a resolution. General canonical-measure/Helly theory was only scaffold support for the normal converse and is no longer consumed by the complete cosine-deficit proof. The normal converse itself remains proved with every original hypothesis.

The owner-authoring-direction file was reread at final reconciliation after it appeared during this dispatch. Its thirteen repairs are in batches 5 and 11; none is an owned batch-1/3 item, and none was overridden. Their obligations remain with their owners.

## Step 4 reconciliation work

Splice the two current manifests into the four preserved plan pages; the current plan has empty item inventories for these pages. Both validate-plan runs exit zero but explicitly leave those absent inventories unasserted. A temporary copy with the current four actual inventories also passes validate-plan --repo . --max-items 60 after the two prerequisite-order repairs below. The serial reconciler should repeat that check after the canonical splice.

Amend shared design prose to match these completed arguments: the compact probability route uses the new AC_omega representation lemma; the dense-family proof uses all-witness covers; Gauss invariance uses logarithmic initial intervals; the CLT proof uses finite exponential-product comparison; Feller necessity uses the cosine deficit rather than Helly; normalized Lindeberg row variance is exactly one. The CLT constructions now use a local AC-to-sequential-choice proof before their consumers, rather than the later weak-choice page; the rotation witness uses elementary sine/cosine continuity rather than later complex differentiability. The doubling point mass delta_0 is ergodic; the stated nonergodic example is the explicit mixture of that fixed-point law with the two-cycle law. No shared prose or plan was edited concurrently by this group.

Both owned cross-batch dependency inputs remain empty after checking all current run manifests, including possible same-group edges. The deduplicated frontier ledger was refreshed. No cross-group supplier is consumed by these batches. The unrelated published concerns above do not block the sound local suppliers.

Repository-wide depcheck was also run. It reports existing global errors/warnings; none of its reported lines matches an owned item ID. It is not claimed as a repository-wide pass. All required scoped checks passed, with one nonfatal broad-fact citation warning in the Gauss calculation's multi-fact normalization step. Each cited fact there has an actual named mathematical use.


## Final group handoff

Authored and checked: all 44 original batch-1 items, all 22 original batch-3 items, two necessary new local lemmas (compact probability representation and sequential choice from AC), and all four A/B pages. All 66 original record-item decisions are now current; earlier run-wide Step-3a recording failures were resolved by retrying after the other scope refreshed. The final decision check has no outstanding original item from this group.

The new items lem-positive-functionals-on-compact-metric-spaces-have-probability-representations and lem-ac-supplies-sequential-choices-for-probability-constructions are fully authored and registered in their A-page inventories, manifests, canonical coverage and strict contracts. Neither was sent through record-item, a self-review or a review-repair loop. The decision check lists additions as requiring an item audit; under the dispatch's explicit addition exception, the engine supplies their scope/item certifications after successful author handoff. Do not manufacture a manual review record to clear that expected state.

Final checks actually run: batch 1 explicit precheck 41 proof-bearing items passed, rendercheck 47 item/page files passed, content-policy 45/45 passed, strict contracts 45/45 passed with one nonfatal Gauss citation-distribution warning. Batch 3 explicit precheck 20 proof-bearing items passed, rendercheck 25 item/page files passed, content-policy 23/23 passed, strict contracts 23/23 passed. The final separate content-policy runs cover all 68 items. validate-plan with research/plan-spec.json, --repo . and --max-items 60 was run for each batch and passed subject to the pre-splice empty-inventory limitation already stated. Frontier inputs were checked against all run manifests and the deduplicated ledger refreshed.

No unresolved mathematical proof gap remains in an owned item. Outstanding serial obligations are: splice inventories and reconcile shared design prose in Step 4; process the new-item automatic certifications; audit/reconcile the published concerns above; retain the existing owner-decision source expansions (Gauss ergodicity, delta method and non-normal infinitely divisible theory) without inventing a ruling. No published content, independent review record, owner-held escalation or judge/audit stamp was modified by this group.

Completed pages:
- measure-preserving-transformations-and-poincare-recurrence
- measure-preserving-transformations-and-poincare-recurrence-examples
- central-limit-theorems
- central-limit-theorems-examples

Completed original item IDs:

Batch 1:
- lem-no-return-sets-have-null-preimage-towers
- thm-poincare-recurrence-for-finite-measure-preserving-systems
- cor-topological-poincare-recurrence-on-second-countable-spaces
- def-first-return-time-and-induced-transformation
- prop-first-return-time-and-induced-map-are-measurable
- thm-induced-transformation-preserves-the-restricted-measure
- prop-inducing-preserves-ergodicity
- thm-kac-return-time-formula
- thm-kac-integral-formula-for-excursions
- def-circle-rotation-and-doubling-map
- prop-circle-rotations-preserve-lebesgue-measure
- lem-irrational-circle-orbits-are-dense
- thm-circle-rotation-is-ergodic-iff-angle-is-irrational
- def-integer-base-map-on-the-circle
- prop-integer-base-map-preserves-lebesgue-measure
- thm-integer-base-map-is-strongly-mixing
- prop-doubling-map-preserves-lebesgue-measure
- thm-doubling-map-is-ergodic-for-lebesgue-measure
- prop-doubling-map-is-strongly-mixing
- def-binary-sequence-cylinders-and-fair-coin-content
- lem-binary-sequence-space-is-compact-without-tychonoff
- lem-fair-coin-cylinder-content-is-a-premeasure
- thm-fair-coin-measure-on-binary-sequences
- thm-fair-coin-one-sided-shift-is-measure-preserving-and-mixing
- lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family
- lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences
- thm-krylov-bogolyubov-for-nonempty-compact-metric-spaces
- fs-measure-preserving-transformations-are-invertible
- fs-ergodicity-implies-strong-mixing
- fs-poincare-recurrence-without-finite-total-measure
- fs-ergodicity-forces-only-empty-and-full-invariant-sets
- fs-ergodicity-forces-every-orbit-dense
- fs-continuous-invariant-functions-characterize-measure-ergodicity
- ex-rational-rotation-invariant-set
- ex-doubling-dyadic-preimage-computation
- ex-base-three-cylinder-intervals-and-preimages
- ex-fair-coin-cylinder-measures-tabulated
- ex-doubling-recurrence-to-a-dyadic-interval
- ex-kac-mean-return-to-a-half-circle
- cex-mod-null-invariance-is-not-strict-invariance
- cex-doubling-ergodicity-depends-on-the-invariant-measure
- cex-irrational-rotation-is-not-weakly-mixing
- cex-kac-formula-needs-ergodicity
- ex-gauss-map-preserves-gauss-measure

Batch 3:
- lem-characteristic-function-of-a-normal-law
- lem-second-order-characteristic-function-expansion
- lem-product-of-near-one-characteristic-factors
- thm-lindeberg-levy-iid-central-limit-theorem
- cor-de-moivre-laplace-central-limit-theorem
- def-row-wise-independent-centered-triangular-array
- def-total-row-variance-and-lindeberg-condition
- lem-lindeberg-condition-implies-feller-negligibility
- thm-lindeberg-feller-central-limit-theorem-sufficiency
- thm-feller-converse-to-lindeberg-feller
- cor-lyapunov-central-limit-theorem
- def-multivariate-normal-law
- lem-characteristic-function-of-a-multivariate-normal-law
- thm-multivariate-iid-central-limit-theorem
- rem-clt-convergence-is-only-in-distribution
- ex-normal-approximation-to-binomial-probabilities
- ex-clt-for-sums-of-uniform-random-variables
- ex-lyapunov-condition-for-nonidentical-summands
- ex-lindeberg-array-with-no-identically-distributed-row
- ex-degenerate-multivariate-gaussian-limit
- cex-clt-can-fail-with-infinite-variance-under-square-root-n-scaling
- cex-feller-negligibility-cannot-be-removed-from-the-converse

## lem-ac-supplies-sequential-choices-for-probability-constructions

Necessary late scaffold repair from a temporary-splice plan check: the original AC=>DC=>CC supplier is on a much later weak-choice page (order665). This local lemma uses only the earlier definitions and recursion theorem, all read completely, and supplies the exact conditional choice uses of the CLT constructions. It is a new fully authored addition, exempt from record-item/self-review. Next: replace the late edge in its consumers and check the actual spliced dependency closure.

Dependencies: def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-recursion.

Written with item-specific contract. Checks and decision pending below.

## Decision refresh

After full local checks, refreshed 12 original-item decisions invalidated or missing from current dependency/content changes. Both new local lemmas were excluded from record-item, as directed.

## Final prerequisite-order repair checkpoint

lem-ac-supplies-sequential-choices-for-probability-constructions: completed AC restriction to the image of a countable family, fixed serial-fiber selection, and prescribed initial-point recursion. Source evidence is the complete local definitions def-axiom-of-choice, def-countable-choice, def-dependent-choice and the complete thm-recursion proof, reread at final repair; the external Jech bibliographic reference is not a claim of new full-text reading. Exact choice uses are the two fixed-family selectors; recursion is choice-free. Empty index, singleton fibers, repeated values and prescribed zero index are handled explicitly. Precheck, rendering and strict contract PASS. Registered before de Moivre–Laplace in the existing CLT A inventory and canonical coverage; no item review created.

Consumers updated with exact new statement excerpts: cor-de-moivre-laplace-central-limit-theorem, def-multivariate-normal-law, ex-clt-for-sums-of-uniform-random-variables, ex-lyapunov-condition-for-nonidentical-summands, ex-lindeberg-array-with-no-identically-distributed-row, cex-clt-can-fail-with-infinite-variance-under-square-root-n-scaling. Their existing AC assumptions remain explicit. The late thm-choice-implies-dependent-implies-countable-choice edge is removed from all six, with no change to their mathematical claims.

cex-irrational-rotation-is-not-weakly-mixing: continuity of exp(2 pi i x) now follows from its Cartesian formula and the earlier thm-sine-and-cosine-derivatives. The complete latter proof was read. Exact contract F5 and step 1.1 were updated; the unneeded complex-differentiability supplier was removed. The witness, mean-zero calculation and correlations are unchanged. Scoped checks PASS.

The actual temporary plan splice initially exposed three missing page-closure declarations caused by these two later suppliers. All three are now resolved locally. Final temporary-splice validation exits zero with all four owned inventories checked (1026 populated plan pages); the normative plan validation also exits zero but still has the four owned inventories empty. No shared plan was edited. Both owned cross-batch inputs were rechecked against every current run manifest, remain empty, and the deduplicated ledger was refreshed. No unresolved owned prerequisite-order gap remains.

Additional published orientation concern for serial reconciliation: def-dependent-choice and def-countable-choice, page countability-and-uncountability, Remarks state that AC=>DC=>countable choice is not proved in this library. This is confirmed stale prose, high confidence, given the existing published thm-choice-implies-dependent-implies-countable-choice on weak-choice-principles-and-sierpinskis-theorem. It is not a defect in the definitions or a claim that an axiom follows in ZF. Repair by updating the historical orientation with a non-load-bearing link to the actual later theorem; preserve assumptions and relative-consistency qualifications. The local new sequential-choice lemma supplies the earlier probability use, so this published prose issue does not block it. The separate broad claim that the library contains no forcing/permutation models should also be audited against the current published inventory; no exhaustive inventory audit is claimed here. Neither published file was edited.

Final next action: serial Step 4 reconciliation and engine certification of the two post-baseline additions. All owned mathematics, contracts, coverage, item/page rendering and dependency-order repairs are complete; previously listed owner scope expansions and published-consumer audits remain open for their designated owners.

Final exact-state decision check: no outstanding owned original item or owned scope; only the two new additions await the engine exception. Both new-item review files are absent, as required. Twelve affected original decisions were refreshed after the final prerequisite repairs; all 66 originals are current.
