# Batch 74 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-74`.

Scope: five refuter obligations, no reader, touched, or page obligations. Independent risk reviews follow generated supplier-first order.

## lem-rosenbrock-shifted-matrix-invertibility-bound

Read all three steps and direct norm/rank-nullity/inverse interfaces. Reverse triangle and compatibility give ||Ax|| >= (1-q)||x||; injectivity plus equal finite dimensions gives bijectivity and the induced inverse bound. q=0, q=1/2, d=1 and B=0 are sound; q=1 and d=0 are excluded. No AC or missing prerequisite; no reader/refuter finding on this carrier. No change.

## lem-rosenbrock-stage-residual-certificate

Checked each of four steps against operationwise rounding and the dot-product supplier: row error bounded by gamma_d times absolute products, Cauchy–Schwarz aggregates to Frobenius-times-vector norm, and subtraction contributes u(||vhat||+||b||). The dot-product error argument extends immediately to exact zero intermediates because those have zero rounding error in the explicit model. du<1, successful range checks, d>=1, zero data, cancellation, and monotonic replacement by certified norm bounds were checked. Ordinary rounded bound evaluation is not claimed certified. No defect or AC use.

## alg-rosenbrock-shifted-qr-solver-with-residual-certificate

Read the complete factor/solve procedure and all direct algorithm/QR/substitution interfaces. Increasing column loops store identity markers for zero columns and reject zero diagonal factors; descending substitution uses explicit rounded ordering. Residuals use original M, with independently sound evaluator bounds and all unavailable/range/residual failure branches explicit. d=1, zero RHS, singular factors, epsilon=0, repeated solves, and q=0 trailing blocks are covered. No forward accuracy or guaranteed success is asserted. No definition change or missing prerequisite.

## lem-rosenbrock-euler-jacobian-approximation-defect

Read both proof steps and the complete inverse-perturbation supplier. The resolvent identity has the correct multiplication order for noncommuting matrices; the update adds an outer h, producing gamma h^2 K Ktilde times Jacobian error and field norm. Both shifts must be invertible; equal Jacobians and zero field give zero difference, with no long-time conclusion. Refuter:74:1 confirmed and source URL repaired against DML section 2, pp. 386–387; no mathematical rewrite, statement change, AC use, or unmet prerequisite.

Refuter:74:1: **confirmed_fatal**, fixed; repair_confidence: 1. Closed ledger row `numerical-optimization-dynamics-2026-10-16-3a-batch-74-refuter-1`. The bound observed carrier cites the Rang–Angermann title but its NTNU URL opens Minchev–Wright, A review of exponential integrators for first order semi-linear problems (cover). Independently opened DML scan: cover identifies Rang–Angermann; section 2, printed pp. 386–387, gives shifted Rosenbrock stages and exact/approximate/arbitrary-W order conditions. Replaced only the incorrect URL; current proof/definition and prerequisites independently checked as recorded in the report. Claim and dependency interfaces unchanged. Observed SHA256: `824f9a85544d22531d24548e20e0de113da9d697d8cc5065797f6e44768e5443`.

## prop-rosenbrock-euler-is-one-newton-correction-of-backward-euler

All three steps checked against backward-Euler residual, Newton-correction, C1/Jacobian, and derivative suppliers. Autonomous G(y)=-hf(y) and DG(y)=I-hDf(y), so invertibility gives the unique correction s=hk. y lies in the open field domain; the corrected point need not be an admissible backward-Euler root, which is expressly not claimed. Zero field and zero Jacobian obey the formula. No AC use, reader/refuter finding, or repair.

## alg-rosenbrock-euler-step

Read every input/branch/instruction and the exact map, residual-unit, arithmetic and QR-solver suppliers. Original shift and field RHS must pass exact storage; failed factor/evaluation/storage/certification returns without acceptance. Successful stage residual is certified in equation units, while outer affine arithmetic is explicitly exact. d=1, zero Jacobian/RHS, epsilon=0 and singular shift branches checked. No full hardware accuracy or forward-error guarantee, and no AC use or repair.

Refuter:74:2: **confirmed_fatal**, fixed; repair_confidence: 1. Closed ledger row `numerical-optimization-dynamics-2026-10-16-3a-batch-74-refuter-2`. The bound observed carrier cites the Rang–Angermann title but its NTNU URL opens Minchev–Wright, A review of exponential integrators for first order semi-linear problems (cover). Independently opened DML scan: cover identifies Rang–Angermann; section 2, printed pp. 386–387, gives shifted Rosenbrock stages and exact/approximate/arbitrary-W order conditions. Replaced only the incorrect URL; current proof/definition and prerequisites independently checked as recorded in the report. Claim and dependency interfaces unchanged. Observed SHA256: `87765269373b40c7e958d0222e6ef4b1e310ad6a8341eecb1e2fe25ec9a8e420`.

## alg-two-stage-rosenbrock-w-method

Read full procedure and all direct suppliers. With autonomous T=0, eliminating q2 gives W k2=F1-alpha h Jtilde k1, matching WIAS (2.16), printed p.46. Nonautonomous alpha h Ttilde is explicitly an extension whose accuracy requires later hypotheses. One factor object is reused on the two sequential RHSs; exact storage, stage-domain, evaluation, range, and residual failures are covered. Bounded approximate Jacobians carry no exact-J stability claim; alpha is positive, zero approximations and zero tolerances are admissible. Refuter:74:2 confirmed; corrected only the Rang–Angermann URL. No Definition change, AC use, or missing prerequisite.

## lem-rosenbrock-euler-local-defect-and-residual-error

All five proof steps and 17 prerequisite interfaces checked. C2 gives joint differentiation and y second derivative f_t+Jf; vector FTC gives M1 h^2/2. The exact-J map differs from explicit Euler by gamma h^2 A^-1 J f. The reviewed perturbation supplier adds gamma h^2 kappa0 kappa1 delta F, and the stage equation residual adds kappa1 h rho. Bounds hold on the actual solution trajectory and require both explicit inverse assumptions, not automatic shifted invertibility. rho=0, delta=0, zero field/J and endpoint r=0 checked. No defect, choice use or repair.

Refuter:74:3: **confirmed_fatal**, fixed; repair_confidence: 1. Closed ledger row `numerical-optimization-dynamics-2026-10-16-3a-batch-74-refuter-3`. The bound observed carrier cites the Rang–Angermann title but its NTNU URL opens Minchev–Wright, A review of exponential integrators for first order semi-linear problems (cover). Independently opened DML scan: cover identifies Rang–Angermann; section 2, printed pp. 386–387, gives shifted Rosenbrock stages and exact/approximate/arbitrary-W order conditions. Replaced only the incorrect URL; current proof/definition and prerequisites independently checked as recorded in the report. Claim and dependency interfaces unchanged. Observed SHA256: `66b3b2f961d62de44977317f8a2cd7f3c1bc698c6c169b131db558ad01e47559`.

## lem-two-stage-rosenbrock-local-defect-and-residual-error

Independently checked all seven steps and 17 prerequisites. W(k1-f)=alpha h(Jtilde f+Ttilde) yields K1. Taylor expansion along the convex joint midpoint segment has H h^2(1+K1^2)/8 remainder. Eliminating q2 cancels the leading Jtilde and Ttilde dependence, giving the stated three C_K terms. Joint chain/product rules give ||y third derivative||<=H(1+F^2)+L T0+L^2 F and cubic remainder /6. Residual propagation cancels delta1 to (I-W^-1)delta1, yielding kappa^2(L/2+alpha B_J) h^2 rho1 plus kappa h rho2. Both midpoint paths must lie in convex Q; bounded constants and q<1 are essential. Zero approximations/residuals and nonautonomous f_t are covered. Refuter:74:3 confirmed; only incorrect Rang–Angermann URL repaired. No mathematical rewrite or missing prerequisite.

## thm-rosenbrock-computational-steps-terminate-with-finite-work

Read four steps and all procedure suppliers. Finite d bounds column/row loops; each stored reflector application, back substitution, and residual dot has finite work or first failure. Evaluator, store and field primitives are explicitly assumed terminating, and at most two stage solves occur. Singular matrices, unavailable certificates and arithmetic range failures terminate without any implied success. d>=1 and a finite request collection exclude unbounded calls. No asymptotic cost or AC claim; no repair.

## thm-rosenbrock-euler-scalar-a-and-l-stability

All four steps and scalar/complex prerequisite interfaces checked. Explicit complexification (or the real 2x2 matrix) legitimizes complex z. Denominator real part >=1 on Re z<=0. Difference of squared moduli is -2 Re z+(2 gamma-1)|z|^2, proving sufficiency and the negative-real-axis counterexample for gamma<1/2. At gamma=1/2 the imaginary-axis equality is permitted. The negative-real limit forces gamma=1 for L-stability, and |R1|<=1/(|z|-1) proves sufficiency along every half-plane direction. z=0 and positive gamma pole exclusion checked; no finite-arithmetic stability assertion, AC or repair.

## thm-two-stage-rosenbrock-scalar-l-stability

Read all three steps and each direct interface. Eliminating k1,q2 gives the rational function after alpha^2+1/2-2alpha=0. With c=1-2alpha=sqrt(2)alpha, the denominator-minus-numerator squared-modulus polynomial is -2x+4alpha^2 x^2-4alpha^3 x|z|^2+alpha^4|z|^4>=0 for x<=0. Positive pole lies outside the half-plane; triangle inequality gives the all-direction vanishing limit. z=0, imaginary-axis boundary and y=0 (linear zero update) checked. Applies to exact complexified stages only, with no approximate-J or rounded execution guarantee. No defect or AC use.

## cex-omitting-rosenbrock-stage-correction-loses-order-two

Read all six steps, exact altered instructions and five dependencies. For y=1, altered update is 1+h r+(h^2/2)r^2 with r=(1-alpha h)^-1; finite geometric remainder yields quadratic coefficient alpha+1/2. Exponential IVP/derivative/monotonicity and repeated FTC bound the exact cubic remainder on 0<h<=1. Their difference divided by h^2 tends to positive alpha, so no fixed cubic bound exists. The small-h interval avoids the pole; witness is fixed nonzero y and makes no global-rate claim. Correct method is unchanged. No defect, AC or repair.

## ex-two-stage-rosenbrock-factorization-reuse

Traced every rounded operation of both Householder columns and both RHS replays against the supplier. Identity shift gives R=-I; active v=2,tau=1/2 and all nonzero intermediates stay within the stipulated dyadic set, including dots +/-8. The two exact RHSs are (-1,-4) and (1/2,4); k2=(-1/2,0). All requested vector norms are <=5 and ||I2||F<=2; u<=.01 yields gamma2<.021 and allowance<.31<.5<=1. Assumed terminating evaluator soundly certifies both solves. This verifies an actual success case, with no exact-J stability assertion. No defect or AC use.

## thm-rosenbrock-euler-global-first-order-error

Checked all six steps and every direct prerequisite interface. Convex state slices and C2 imply field Lipschitz L. Resolvent identity bounds shift-inverse variation by gamma h kappa1^2 L_J, giving map Lipschitz 1+C_s h with h<=h0. At numerical input the certified residual contributes kappa1 R h^2; at the exact input the reviewed local lemma contributes C_E h^2. Summing the recurrence from e0=0 yields T exp(C_s T)h without division by C_s, including C_s=0,n=0,T=0. Success, exact outer arithmetic and tube containment remain explicit conditional assumptions. No defect, AC or repair.

Refuter:74:4: **confirmed_fatal**, fixed; repair_confidence: 1. Closed ledger row `numerical-optimization-dynamics-2026-10-16-3a-batch-74-refuter-4`. The bound observed carrier cites the Rang–Angermann title but its NTNU URL opens Minchev–Wright, A review of exponential integrators for first order semi-linear problems (cover). Independently opened DML scan: cover identifies Rang–Angermann; section 2, printed pp. 386–387, gives shifted Rosenbrock stages and exact/approximate/arbitrary-W order conditions. Replaced only the incorrect URL; current proof/definition and prerequisites independently checked as recorded in the report. Claim and dependency interfaces unchanged. Observed SHA256: `c40f916c0f2cdb15c82be59e02ac55a50b3092c7422edfd052fa3abf67162d9e`.

## thm-two-stage-rosenbrock-global-order-two

Checked all eight steps and 13 prerequisite interfaces. Uniform h0 constants bound g,k1 by G1,K_s; inverse perturbation and assumed state Lipschitz Jtilde,Ttilde give L1. Convex midpoint-state segments justify field bound L(1+h0 L1/2); product differences yield L_V and a second inverse comparison yields L2. Reviewed local lemma at exact and numerical base points gives C_loc h^3 and (C_r R1+kappa R2)h^3, respectively. Discrete recurrence sums to T exp(L2 T)h^2, valid also for L2=0,n=0,T=0. Uniform boundedness, shifted q<1, both midpoint domains, success and exact outer operations are retained. Exact-J scalar stability is not transferred to bounded W data. Refuter:74:4 confirmed and URL repaired; no mathematical rewrite, AC or unmet prerequisite.

Refuter:74:5: **confirmed_fatal**, fixed; repair_confidence: 1. Closed ledger row `numerical-optimization-dynamics-2026-10-16-3a-batch-74-refuter-5`. The bound observed carrier cites the Rang–Angermann title but its NTNU URL opens Minchev–Wright, A review of exponential integrators for first order semi-linear problems (cover). Independently opened DML scan: cover identifies Rang–Angermann; section 2, printed pp. 386–387, gives shifted Rosenbrock stages and exact/approximate/arbitrary-W order conditions. Replaced only the incorrect URL; current proof/definition and prerequisites independently checked as recorded in the report. Claim and dependency interfaces unchanged. Observed SHA256: `a01f590d0ca97662a6765696c41ac331838d2731b6f29c90cb2f133db680aa36`.

## cex-approximate-jacobian-breaks-stiff-damping

Read all four steps and the actual algorithm and exact-J stability theorem. For lambda>0,h=4/lambda,W=1, the approximate-J first slope is -lambda y, midpoint is -y, q2=2lambda y and k2=lambda y, so y+=5y. Exact-J R(-4)=(5-4sqrt2)/(5-2sqrt2)^2 has numerator modulus<1 and denominator>1, hence modulus<1. Zero approximation is bounded and invertible shift explicit. Fixed h lambda does not establish an order or uniform-convergence failure, which the text explicitly disclaims. No hardware representability assertion. Refuter:74:5 confirmed; URL repaired. No mathematical rewrite or unmet prerequisite.

## ex-rosenbrock-euler-stiff-decay-and-backward-euler

Read all three steps and four direct suppliers. For h=1,J=-100, the shifted slope is -100/101 and output 1/101. Direct backward-Euler equation 101z=1 has that unique root; one Newton correction solves this affine residual exactly. General positive h lambda factor 1/(1+h lambda) is strictly between zero and one and vanishes at infinity, with exact arithmetic only. Zero/nonnormal/nonlinear extrapolations are not made. No defect or AC use.

## Citation evidence and metadata reconciliation

The five refuter observations are bound fingerprints of the item/contract/manifest carrier triples, not raw item hashes. Each pre/post triple is identical; before editing, every flagged raw item matched the post-reader item_sha256 and the sorted triple fingerprint matched observed_sha256. No historical uncertainty or owner-resolution exception is used.

[NTNU cover](https://www.math.ntnu.no/preprint/numerics/2005/N2-2005.pdf) identifies Minchev–Wright. The [DML paper](https://dml.cz/bitstream/handle/10338.dmlcz/700435/Equadiff_11-2005-2_46.pdf) identifies Rang–Angermann; section 2, printed pp. 385–387, provides the relevant stage and order framework. Its equations (2.2)–(2.5) were read in full. The DML PDF was fetched again, and both owning coverage records now carry its actual current retrieval metadata; prior incorrect retrieval evidence remains explicitly preserved. The [WIAS section](https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf), Example 2.37 and Theorem 2.38 on pp. 45–47, supports the autonomous formula and local cancellation; Remark 2.39 is on p. 47, and Theorem 2.40/Corollary 2.41 are on p. 48. The two affected Remark 2.39 locators were corrected accordingly. [Kressner](https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf), section 3.5, pp. 42–43, independently supports Newton linearization and shared factorization. The independently derived numerical constants and inequalities above are local mathematical checks.

The strict contract check initially reported five stale quotations, all for the current operationwise/Householder Definitions. These are mechanical quote-mirror mismatches: their current mathematical interfaces support the authored uses. Updated only the corresponding contract quotations; no defect rows or extra obligation decisions were created for that mechanical failure. All 18 required risk reviews now have an identified reviewer and specific current argument evidence. Current batch cross-frontier item-use records were refreshed without changing edges, IDs, page rows or proposed dispositions.

No Statement or Definition changed; manifests, body-derived contract claims and provenance categories remain valid. No proof rewrite occurred and no prior judge record was invalidated. Published suppliers were read as prerequisite context only; no defective published item or outside consumer repair was confirmed.

Two additional nonfatal citation-locator defects were found while checking the residual and QR-solver source evidence: the [Cornell lecture](https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html) contains sections “Dot products” and “Beyond first order”, with no “Residual-based bounds” heading. Corrected those two locators; the underlying local proof and algorithm are unchanged. Closed rows `numerical-optimization-dynamics-2026-10-16-3a-batch-74-locator-1` and `numerical-optimization-dynamics-2026-10-16-3a-batch-74-locator-2`; repair_confidence: 1. These risk-review discoveries add no touched/reader/refuter obligation to the frozen dispatch.

## Local checks and handoff

Completed: strict proof-contract validation, 21/21 carriers, zero errors/warnings; risk-report before review and final --require-reviewed, all 18 HIGH/CRITICAL reviews complete, zero errors; precheck on the seven changed items, five phase proofs checked and zero failures (two algorithms have no phase proof); rendercheck on those seven items, zero errors; final batched proof-layout on all seven changed item paths, 25 steps, zero defects; frontier-dependency-ledger refresh succeeded. Decision/ledger consistency was independently checked: exactly refuter:74:1 through refuter:74:5, each referencing one matching closed fatal row; two additional nonfatal locator rows closed. Pre/post item-carrier and page-carrier inventories are identical, as expected for the reader's no-edit pass. Current changed items are exactly the five flagged carriers and the two citation-locator repairs.

[Fundamentals of Numerical Computation](https://fncbook.com/floating-point/), section 1.1, equations (1.1.5)–(1.1.6), was also opened for the relative-rounding context; the explicit local arithmetic supplier governs zero and range-failure conventions. Published prerequisite statements/interfaces were checked where used; no claim of re-auditing their entire transitive proofs is made.

No unresolved mathematical blocker, escalation, withdrawal or published defect was found. No judge, stamp, certification, scheduling transition or full gate battery was initiated. The engine owns current-hash sealing and gates.
