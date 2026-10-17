# Step 3a reader report — batch 105

**Run:** `numerical-optimization-dynamics-2026-10-16`  
**Reader:** `reader-105`  
**Scope:** batch `105`

## Opened inventory

Reviewed both assigned pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/event-location-and-hybrid-trajectory-error.md` (A)
- `library/numerical-differential-equations-and-stochastic-dynamics/event-location-and-hybrid-trajectory-error-examples.md` (B)

Reviewed every assigned item, in dependency order:

- A: `def-hybrid-mode-guard-reset-system`; `lem-hybrid-guard-derivative-along-mode`; `lem-ode-flow-lipschitz-on-a-tube`; `lem-reset-error-after-a-mistimed-hybrid-event`; `thm-saltation-matrix-for-a-transverse-hybrid-reset`; `def-certified-hybrid-event-enclosure`; `lem-transverse-hybrid-event-time-error`; `alg-safeguarded-hybrid-event-location-and-restart`; `thm-finite-hybrid-trajectory-error-under-separated-events`; `thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted`.
- B: `cex-inelastic-bouncing-ball-has-zeno-accumulation`; `ex-simultaneous-guards-require-deterministic-priority`; `cex-grazing-event-time-error-is-not-linearly-bounded`; `ex-bouncing-ball-transverse-event-error-and-reset`; `ex-two-events-between-endpoints-defeat-sign-screening`.

Opened dependency items used in the reviewed arguments:

- ODE and differentiation: `def-vector-valued-derivative-and-integral`, `def-interval`, `def-first-order-ode-initial-value-problem-and-solution`, `def-c-one-map-and-local-inverse`, `def-total-derivative-in-euclidean-space`, `thm-chain-rule-for-total-derivatives`, `lem-euclidean-linear-maps-have-matrices-and-are-bounded`, `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `thm-norm-inequality-for-the-vector-valued-integral`, `thm-gronwall-integral-inequality`, `thm-mean-value-inequality-for-total-derivatives`, `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`, `lem-parameter-ode-flow-tangent-on-common-tube`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `lem-matrix-inversion-preserves-ck-regularity`, `thm-euclidean-inverse-function-theorem`, `thm-higher-regularity-of-local-inverses`, `thm-euclidean-implicit-function-theorem`, `thm-parametrized-implicit-function-theorem-with-higher-regularity`, and `lem-newton-contraction-near-an-invertible-derivative`.
- Validated arithmetic and residual tubes: `def-complete-ordered-real-field`, `lem-nonnegative-square-root-exists-and-unique`, `def-dyadic-floating-point-format-and-directed-rounding`, `def-intervals-rectangles-and-complex-balls`, `alg-dyadic-square-root-bisection`, `lem-directed-dyadic-rounding-enclosure-and-error`, `thm-dyadic-square-root-bisection-encloses`, `lem-real-and-complex-modulus-rules`, `def-outward-rounded-interval-and-ball-operations`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-outward-rounded-operations-are-isotone-and-dag-sound`, `def-validated-residual-tube-certificate`, `lem-rational-expression-derivative-recursion-correct`, `alg-validated-residual-tube-certificate-checker`, `thm-validated-residual-tube-certificate-sound`, `def-heun-euler-embedded-runge-kutta-pair`, `def-heun-quadratic-dense-output`, `thm-piecewise-c1-ode-residual-a-posteriori-error-bound`, `def-maximal-ode-solution`, `thm-picard-lindelof-local-existence-and-uniqueness`, `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps`, `thm-reals-cauchy-complete`, `thm-compact-subset-of-a-hausdorff-space-is-closed`, `thm-extreme-value-metric`, `lem-maximal-ode-solution-extends-from-compact-tube`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, and `cor-mean-value-theorem`.
- Root isolation: `def-continuity-and-derivative-on-real-interval`, `def-real-boxes-and-interval-jacobian-enclosures`, `lem-real-interval-arithmetic-preserves-enclosure`, `thm-intermediate-value`, `alg-scalar-interval-newton-certification`, `thm-scalar-interval-newton-exclusion-and-inclusion`, `alg-smooth-function-root-isolation`, and `thm-smooth-function-root-isolation-soundness`.

The batch manifest and batch-105 proof contracts were opened as evidence and checked against the current items. For the saltation formula, I also read Kong, Payne, Zhu, and Johnson, “Saltation Matrices: The Essential Tool for Linearizing Hybrid Dynamical Systems,” arXiv:2306.06862v3: §III-A, equation (9) and its transversality hypotheses (equation (11)), and the full geometric derivation in §III-B, equations (22)–(30). [Source](https://arxiv.org/html/2306.06862). The paper’s formula and sign agree with the local implicit-function and flow argument in the assigned theorem.

## Repairs and validation

- `items/def-hybrid-mode-guard-reset-system.md`: added the nonnegative horizon and positive state-dimension conditions required by the ODE definitions, and made the C1 supplier an explicit dependency. Evidence: the local ODE definition requires a positive state dimension; `def-c-one-map-and-local-inverse` defines C1 maps on open Euclidean domains.
- `items/lem-hybrid-guard-derivative-along-mode.md`: retained the endpoint claim and repaired its proof. The open-domain chain-rule citation now covers interior points; the proof derives the one-sided endpoint formula from the relative first-order expansion of the mode solution and total differentiability of the C1 guard. Added the C1 dependency and updated its contract.
- `items/lem-reset-error-after-a-mistimed-hybrid-event.md`: specified that reset Lipschitz bounds hold on a domain containing both reset inputs and their joining coordinate segments; specified the incoming field bound along the exact incoming extension and required outgoing comparison pieces to lie in a common convex tube. These are the hypotheses used in proof steps 1.1–3.1. Updated its contract.
- `items/thm-saltation-matrix-for-a-transverse-hybrid-reset.md`: defined the perturbed event as the selected local guard root and the variation as the right-limit comparison at `t0 = max(tau, tau_delta)`, the first common post-reset time. This makes the delayed-event comparison in proof step 2.1 well-defined. Updated its contract boundaries.
- `items/def-certified-hybrid-event-enclosure.md`: required the reset Lipschitz domain to contain the compared inputs and joining coordinate segments, assigned the incoming and outgoing field bounds to the exact paths used by the comparison, and defined ledger `E` as an upper bound on state discrepancy. This aligns the admissible data with the reset-error estimate and ledger arithmetic. Updated its contract boundaries and dependent contract source quotes.
- `items/lem-transverse-hybrid-event-time-error.md`: required a positive-length closed bracket, as needed for the derivative hypothesis and mean value theorem. Updated its contract boundary and dependent source quotes.
- `items/thm-finite-hybrid-trajectory-error-under-separated-events.md`: stated the reset Lipschitz domain and added the certified reported-reset evaluation error `epsilon_R` to the recurrence; it is zero for exact reset evaluation. This matches the provider interface and the triangle inequality after applying the exact-reset estimate. Updated its contract.
- `items/alg-safeguarded-hybrid-event-location-and-restart.md`: initialized the ledger from a supplied valid `E0` bound; charged any approximate reset-evaluation error to the next ledger bound; and specified finite exact scalar representations and rational trial durations so scaled minimum widths passed to the root isolator are rational. These conditions close the zero-initial-error, reset-rounding, and root-isolator input gaps. Updated affected contracts.
- `items/thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted.md`: stated the initial `E0` hypothesis and included approximate reset error in the induction certifying later ledger values. Updated its contract.
- `items/cex-inelastic-bouncing-ball-has-zeno-accumulation.md`: made the witness domain explicit as the bounded half-open interval `[0,T_Z)`, with exact mode solutions and resets concatenated before the excluded accumulation endpoint. Updated its contract.
- `items/ex-bouncing-ball-transverse-event-error-and-reset.md`: verified the reset is global and Lipschitz, and supplied a common bounded convex outgoing tube and field Lipschitz bound before applying the reset-error lemma. Updated its contract.

The batch-105 proof-contract file was also updated for the repaired proof derivations, boundaries, and source-section mirrors. No edited item had a stale `verification.judge` record. Reflow and precheck were run after each final item repair: all phase proofs passed; definitions and algorithms reported zero proof sections checked and zero failures. The single final proof-layout run covered all 11 changed item paths and reported **11 items, 30 steps, 0 defects**.

## Findings not editable in batch 105

- `lem-parameter-ode-flow-tangent-on-common-tube` (batch 96): its Statement permits `T=0`, and Proof 1.1 treats that case as the evaluation map `u_0` while the conclusion still asserts a tangent solving an ODE on `[0,0]`. Under `def-vector-valued-derivative-and-integral`, derivatives require a limit point of the source; `{0}` has none. The zero-horizon flow and tangent ODE are therefore undefined under the library’s definitions. Require `T>0`, or state a separate zero-horizon result that concludes only the derivative of the evaluation map. Raw current SHA-256: `c8f903aaee09897e3560a67ddb0a6f118e8a6d7cf70e54fd3eca54ac0a28acbc`. Assigned consumer routed: `thm-saltation-matrix-for-a-transverse-hybrid-reset`.
- `lem-directed-dyadic-rounding-enclosure-and-error` (batch 14): its Statement quantifies over finite `x` with `|x| <= N_max`, including `x=0`, and bounds endpoint error by `epsilon_abs(x)`. `def-dyadic-floating-point-format-and-directed-rounding` defines `epsilon_abs` only for nonzero finite `x`; thus `epsilon_abs(0)` is undefined even though the actual rounding error at zero is zero. Define `epsilon_abs(0)=0` or exempt zero from that bound clause. Raw current SHA-256: `8509c770acf6af0923384b576dbd9a452039426174401c09b4644c22e9b828b60`. Assigned consumer routed: `def-certified-hybrid-event-enclosure`.

Both are nonfatal boundary defects in other current-run batches and remain unedited here.

## Page verdicts

- `event-location-and-hybrid-trajectory-error` (A): **Pass after the listed repairs**, with the two nonfatal in-run dependency findings above routed to their assigned consumers.
- `event-location-and-hybrid-trajectory-error-examples` (B): **Pass**. The five examples and counterexamples support their claims; the Zeno example now states its half-open execution domain. No B-page prose was changed.

## Blocker

None for batch 105. The run remains active; this report does not advance or certify any workflow gate.

## Coverage note

I opened both assigned pages, all 15 assigned items, the direct suppliers and math-specific proof suppliers listed above, and the cited saltation derivation. I did not audit every unrelated foundational ancestor in the larger metadata dependency closure. The two out-of-scope supplier defects above are bound to their current source hashes and routed through their assigned consumers.
