# Batch 54 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`. Group: `batch-54`. Scope: batch 54 only.

## Evidence and progress

Read the generated order and scope, reader report/findings, refuter report, immutable pre/post snapshots, current carriers and relevant exact dependency statements. There are eight touched obligations, no reader/refuter findings and no page obligations. All eight current raw item hashes equal their reader-post hashes; all eight pre/post item hashes differ. Risk-review updates are independent evidence, not proof acceptance stamps.

Completed in generated order:

- `alg-implicit-midpoint-hamiltonian-step`: accept the reader repair. Status tests exhaust radius/containment/bound failures; the exact recurrence has certified tails. B=0 returns radius 2rho, theta=0 never evaluates 0^0, and at most B updates/evaluations occur. A returned exact state must pass a new domain check before another step. A finite approximation has no exact symplecticity claim.
- `lem-canonical-kick-and-drift-shears-have-symplectic-jacobians`: accept the finite-dimensional inverse-symmetry justification. SPD makes M invertible, transpose-inverse identity makes its inverse symmetric; the two displayed block products equal J on their admitted open domains. C2 V licenses the Hessian. No claim is made for a merely C1 kick derivative.
- `thm-implicit-midpoint-branch-symplectic-order-and-error`: accept the reader repair. Checked completeness, contraction including singleton balls, selected-root continuity and IFT identification, commuting Cayley-factor calculation, coordinatewise cubic remainders, derivative stability, signed-time recurrence, and finite-budget certificates. Complete specific risk review recorded in its contract.
- `thm-local-symplectic-euler-and-leapfrog-trajectory-errors`: accept the reader repair. Checked degree-two coefficients of both coordinate maps and exact flow, symmetric inverse, vector remainder conversion and stability on comparison segments. The explicit O(h2)/O(h3) local bounds support later modified-flow use; finite geometric summation gives global orders one/two on the stipulated tube. Complete specific risk review recorded in its contract.
- `ex-symplectic-euler-harmonic-oscillator`: accept the domain clarification. For positive h the algorithm gives S=((1-h2,h),(-h,1)); its algebraic signed extension has determinant one for every real h, and the witness (0,1) increases H by h2/2 for h>0.

The lower-level mathematical review was completed before advancing to the finite modified-Hamiltonian chain; the later contract-only midpoint amendment is recorded below.

- `lem-finite-modified-hamiltonian-exists`: accept the reader citation repair. The explicit local defect supplier now licenses cancellation below r. Independently checked the triangular finite recursion, pullback log/exp identity in the nilpotent truncated algebra, symplectic coefficient induction and radial primitive with coefficient -JX_m. Smooth local germs at every point give globally defined coefficients; finite fixed N and star-shaped U are essential. Complete risk review recorded.

Outside-routed supplier alert (owner disposition required): `prop-local-leapfrog-and-symplectic-euler-are-symplectic`, Statement, says “has a $C^1$ Jacobian” under V in C2. The proved and used conclusion is a C1 map with a continuous Jacobian satisfying the symplectic identity. Literally the stated Jacobian regularity is false: d=1, Q=R, M=1, V(q)=|q|^3 is C2 with V''(q)=6|q|, so the Euler Jacobian has entry -6h|q| and is not differentiable at q=0 for h>0. Its proof correctly establishes the symplectic identity and C1 map. This untouched carrier owes no routed decision and was left unchanged; the owner should replace the phrase with “is C1 and its Jacobian satisfies” and route that repair. The smooth-V modified-Hamiltonian consumer uses only the valid identity, so this wording defect does not block its proof. No published defect is involved.

- `lem-finite-modified-hamiltonian-close-to-original` (risk-only): both steps are sound. Finite coefficient maxima give C0 h^r for fixed N and 0<h<=1; empty K uses the least nonnegative upper bound zero, not an empty real supremum. Complete risk review recorded; no decision is owed.
- `lem-truncated-modified-flow-matches-map` (risk-only): checked fixed-h time differentiation, finite-polynomial regrouping and degree N+1 matching, yielding the O(|h|^(N+2)) remainder uniformly on the stipulated compact comparison tube. This avoids any unsupported high parameter regularity of the flow. Negative h refers to the smooth local formula germ; Euler execution remains restricted to positive h. Complete risk review recorded; no decision is owed.

- `lem-one-step-modified-energy-defect`: accept the reader repair. Checked finite-sum derivative bounds independent of small h, scalar MVT on the stipulated segment and exact conservation along the comparison flow. The stronger O(h^(N+2)) supplier bound implies the stated O(h^(N+1)) bound for h<=1. Complete risk review recorded.

- `thm-finite-order-modified-energy-bound`: accept the reader remark repair. Its two-step proof sums n increments and adds two C0 h^r endpoint terms; n=0 and nh<=T give the stated boundary and finite-time conclusions. Fixed N, star-shaped domain and compact admitted comparison tubes remain explicit. Complete risk review recorded.

## Final dispositions and contract correction

Seven `accepted_repair` decisions and one `amended_repair` decision are recorded, all with repair_confidence 1. The midpoint item itself is accepted unchanged, but its contract needed F3 mapped to Proof 3.2 and F6 mapped to Proof 1.1, plus replacement of five stale explanatory step locators. This makes its carrier an amended repair. The initial strict-contract check identified the two unmapped uses; these mechanical diagnostics did not receive mathematical defect rows. Eight closed rows, D01–D08 under this run's `3a-batch-54` prefix, record the substantive reader repairs/clarifications accepted here, with nonfatal/polish severities as appropriate. No reader/refuter decision is owed because both finding arrays are empty. No item source, manifest, provenance or verification stamp was edited by Alpha.

## Consumer dispositions

Searched all active item carriers for the four changed reader interfaces (midpoint algorithm, midpoint theorem, local trajectory theorem and oscillator example), then read actual uses. The algorithm's theorem discharges its well-definedness; `lem-finite-modified-hamiltonian-exists` uses the exact branch, symplecticity and explicit local orders under smooth V; `thm-finite-order-modified-energy-bound` uses their order conclusions under its small-step compact-tube assumptions. These owned consumers are sound and need no further source repair. The example has no item consumer.

The outside consumer `thm-separable-vortex-inspired-leapfrog-is-reversible-symplectic-volume-preserving-order-two`, Statement claim 4, F3 and Proof 1.2, uses only the positive-step leapfrog order-two conclusion with C3 potential, compact convex tube and bounded derivatives. The strengthened supplier is compatible with that use; no source edit or further interface propagation is necessary. Its separate Countable Choice hypothesis for volume preservation is retained and is not imported into batch 54. This is an interface check, not an audit of the rest of that outside theorem.

Owned cross-batch input rows for the Lie/Strang and RATTLE forward references remain correct: both are contextual Remarks links and supply no proof premise. Stable IDs, all carriers and any existing withdrawal proposals remain present. The untouched proposition regularity defect above requires owner routing; no routed claim depends on its false extra regularity assertion.

## Sources and qualifications

Read [Hairer, Lecture 3](https://www.unige.ch/~hairer/poly_geoint/week3.pdf), section 1 coefficient recursion and Theorem 1 (PDF pp. 2–3), section 2 Theorem 2 with complete proof and the star-shaped-domain qualification (PDF pp. 5–6), and section 3 Theorem 3 with complete proof (PDF pp. 6–7). These support finite-order construction and energy-control context. Reconciled its opposite displayed J convention and one-index truncation shift with the authored formulas. No analyticity or infinite-series convergence is inferred. Lecture 2's PDF endpoint returned an error; the shears, midpoint Cayley identity and oscillator computation were checked directly from the authored formulas and local suppliers.

Exact local prerequisite sections read: Definition in `def-leapfrog-step-map`, `def-local-leapfrog-domain-on-an-open-configuration-set`, `alg-local-symplectic-euler-step`, `def-symplectic-form-and-symplectic-manifold`, `def-hamiltonian-vector-field-and-hamiltonian-function`, `def-banach-space`, `def-norm-and-normed-space`; Statement in `lem-p-norms-are-norms-and-induce-the-published-metrics`, `thm-euclidean-space-complete`, `cor-bolzano-weierstrass-in-rn`, `lem-mean-value-inequality-for-a-differentiable-banach-valued-curve`, `thm-banach-fixed-point`, `thm-euclidean-implicit-function-theorem`, `lem-c1-euclidean-maximal-flow-with-c2-upgrade`, `thm-chain-rule-for-total-derivatives`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `thm-symmetry-of-higher-mixed-partials`, `thm-parametrized-implicit-function-theorem-with-higher-regularity`, `thm-extreme-value-metric`, `prop-a-hamiltonian-is-conserved-along-its-own-flow`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `cor-mean-value-theorem`. All current in-batch suppliers used by the routed arguments were read in full, including the local variational-flow lemma and composition proposition. Forward-reference Definitions and the outside consumer's actual use were also read. No full published-supplier audit or additional source reading is claimed.

No defective published item was identified, so the published-consumer ledger remains unchanged. All seven HIGH/CRITICAL risk reviews are now specific independent reviews. The remaining owner action is the out-of-route proposition wording alert; no substantial unmet prerequisite blocks an assigned proof.

## Local checks and handoff

- Initial risk report, without `--require-reviewed`: exit 0; seven HIGH/CRITICAL items identified.
- Final `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-54.proof-contracts.json --require-reviewed`: exit 0, 16 items routed, no errors, all seven required reviews complete.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-54.proof-contracts.json --strict`: final exit 0, 16/16 items checked, zero errors/warnings. Initial two omitted use mappings were corrected as described above.
- `node tools/tsx-run.mjs tools/precheck.mts` on the eight touched paths: exit 0, seven proof-bearing items checked, zero failures; the algorithm has no phase proof.
- One final combined `node tools/proof-layout.mjs` invocation on all eight touched paths: exit 0, 8 items, 30 steps, 0 defects. No item source edits or formatter followed it.
- Defect ledger append: eight closed rows appended using the serialized append tool; the shared generated view was left for the engine's aggregate maintenance.
- Decision inventory checked against scope: exactly eight touched obligations, no duplicate or missing obligations, no extra page/reader/refuter decisions. Current raw item hashes still equal the immutable reader-post hashes. Manifest source dependency mirrors agree; contract changes comprise the seven risk reviews and the midpoint citation mappings/explanations.

No judges, stamps, agent dispatches, stage transitions or gate battery were run. Engine-owned hashing and gates remain due. Owner attention: route the untouched composition proposition regularity correction described above. No published-content edits or supplier repair outside scope were made.
