# Step 3a reader report — batch 53

Run: numerical-optimization-dynamics-2026-10-16  
Role: reader  
Batch: 53

## Opened inventory

### Assigned pages

- A page: adaptive-ode-solvers-and-error-estimation.
- B page: adaptive-ode-solvers-and-error-estimation-examples.

### Assigned items

The 17 A-page items reviewed in dependency order were:

- lem-maximal-ode-solution-extends-from-compact-tube
- thm-ode-residual-a-posteriori-error-bound
- thm-piecewise-c1-ode-residual-a-posteriori-error-bound
- def-embedded-runge-kutta-pair-and-error-estimator
- alg-bounded-adaptive-runge-kutta-controller
- def-heun-euler-embedded-runge-kutta-pair
- prop-embedded-pair-estimator-asymptotics
- def-heun-quadratic-dense-output
- def-validated-residual-tube-certificate
- rem-fixed-mesh-global-error-does-not-certify-adaptivity
- thm-bounded-adaptive-runge-kutta-controller-terminates
- thm-heun-euler-pair-local-orders-and-estimator
- lem-rational-expression-derivative-recursion-correct
- thm-heun-dense-output-local-order-two
- alg-validated-residual-tube-certificate-checker
- thm-validated-residual-tube-certificate-sound
- thm-validated-residual-tube-checker-terminates

The 3 B-page example items reviewed were:

- ex-below-roundoff-tolerance-breaks-embedded-estimate
- ex-fast-decay-problem-rejects-at-minimum-step
- ex-heun-euler-estimator-leading-term-vanishes

### Dependency sections opened

The four supplier pages were opened: one-step-ode-consistency-and-local-error, outward-rounded-interval-and-ball-arithmetic, runge-kutta-methods-and-order, and global-ode-and-density-error.

Cross-batch item sources opened in dependency order included def-one-step-ode-method-local-defect-order-and-stability, def-explicit-runge-kutta-tableau-and-stage-map, def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-global-error-from-one-step-defect-and-stability, and lem-discrete-one-step-error-recurrence-bound. The interval supplier statements used by the DAG-soundness proof were also opened: def-dyadic-floating-point-format-and-directed-rounding, alg-dyadic-square-root-bisection, lem-directed-dyadic-rounding-enclosure-and-error, thm-dyadic-square-root-bisection-encloses, lem-real-and-complex-modulus-rules, lem-nonnegative-square-root-exists-and-unique, def-complete-ordered-real-field, and def-complete-ordered-field.

Other direct supplier statements/definitions opened included cor-mean-value-theorem, def-first-order-ode-initial-value-problem-and-solution, def-maximal-ode-solution, lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-extreme-value-metric, thm-picard-lindelof-local-existence-and-uniqueness, thm-reals-cauchy-complete, def-abs-value, def-max-min, lem-finite-set-has-max, thm-nth-roots-exist, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-total-derivative-in-euclidean-space, thm-chain-sum-product-and-composition-rules-for-banach-derivatives, thm-chain-rule-for-total-derivatives, thm-multivariable-taylor-formula-with-lagrange-remainder, thm-algebra-of-derivatives, thm-of-square-roots, lem-of-square-monotone, thm-existence-and-uniqueness-of-a-maximal-ode-solution, thm-heine-borel-rn, and thm-ftc-first-part.

Additional support sections consulted while choosing the concise repairs included thm-algebra-of-total-derivatives, thm-mean-value-inequality-for-total-derivatives, and lem-taylor-lagrange-remainder-from-mean-value.

For the absolutely-continuous residual theorem, the cited statements/definitions opened were cor-exponential-reciprocal-and-positivity, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, def-absolutely-continuous-function, def-countable-choice, def-dependent-choice, def-euclidean-inner-product, def-integrable-real-and-complex-functions-and-their-integrals, def-l-one-of-a-measure, lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-chain-rule, thm-derivative-of-exponential, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-integral-triangle-inequality, thm-linearity-of-the-lebesgue-integral-on-l-one, and thm-the-lebesgue-integral-respects-almost-everywhere-equality.

## Repairs made

- alg-bounded-adaptive-runge-kutta-controller: added lem-finite-set-has-max as a direct dependency and cited it in the definition, since the acceptance scale and step update use maxima/minima of nonempty finite real lists. The lemma is a direct dependency rather than justified_by because it does not depend on this algorithm. Its proof-contract boundary and supplier excerpt were updated. Downstream termination, scope-warning, and example consumers were checked; their claims remain valid.
- lem-rational-expression-derivative-recursion-correct: replaced the insufficient one-variable algebra-of-derivatives supplier with the multivariable bounded-bilinear product rule and the total-derivative definition. Added the local first-order quotient expansion at the division node, with the nonzero-denominator neighborhood stated explicitly. The proof contract now maps the multivariable sum/product rule and quotient derivation. The assigned checker and soundness consumers were checked against the unchanged lemma statement.
- thm-heun-euler-pair-local-orders-and-estimator: replaced the open-domain Taylor application to a possibly one-sided exact solution segment with a closed-interval Rolle argument. The Taylor expansion for the field is applied on a small open convex neighborhood of the compact stage segment. The statement now includes the uniform within-step exact-path expansion needed by the dense-output theorem. Its proof contract was updated.
- thm-heun-dense-output-local-order-two: removed the inaccurate supplier claim that the endpoint theorem already stated a within-step expansion, and used the new uniform expansion in its supplier statement. Removed the now-unused chain-rule and multivariable-Taylor dependencies and updated its proof contract.
- thm-validated-residual-tube-certificate-sound: added lem-of-square-monotone and explicit steps converting the checked squared residual, Jacobian, and initial bounds to norm bounds. The proof also now derives coordinatewise control from the Euclidean norm, placing the initial state in the first checked box and justifying the no-first-exit argument. Its proof contract was updated.

No edited item had a verification.judge record to remove. The batch-53 proof-contract file and the affected remark/dense-output contracts were updated. No page prose required repair.

## Uneditable historical finding

In an earlier source view during this review, thm-outward-rounded-operations-are-isotone-and-dag-sound cited def-complete-ordered-field at Facts & Assumptions [L7] for the absolute-value formula. I opened that target: its definition concerns upper bounds, suprema, and completeness and does not define absolute value. The current supplier source now cites def-complete-ordered-real-field, which does define the needed formula. At the split check, the current source raw SHA-256 was 6e858fab68dcaf4904be1e042d083f110ef04ee9d32b1b9920ded2018eead849; the batch-14 step3 pre fingerprint is e8014dbc7ae8b70443b5efedb7cb26227e0524f6ba4fa084f163a37892c28c45. Neither binds the earlier incorrect bytes I saw, whose raw hash I did not capture, so the findings JSON leaves observed_source null and records this hash limitation. This item belongs to batch 14 and was not edited.

## Page verdicts

| Page | Verdict |
| --- | --- |
| adaptive-ode-solvers-and-error-estimation | Pass after the five assigned item repairs. Its summary matches the estimator, continuous-residual, piecewise-C1, and validated-certificate results. |
| adaptive-ode-solvers-and-error-estimation-examples | Pass. The three examples’ arithmetic matches their stated limits; no B-page prose or item repair was needed. |

## Validation

Reflow completed unchanged for all five edited item paths. Precheck passed for the four proof-bearing edits; the algorithm reports no proof phase applicable and zero failures. The final batch proof-layout command reported 5 items, 13 steps, 0 defects. The batch-53 proof-contract JSON parses.

## Blocker

None.
