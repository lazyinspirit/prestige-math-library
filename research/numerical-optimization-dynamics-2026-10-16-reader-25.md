# Step 3a reader report — batch 25

Run: `numerical-optimization-dynamics-2026-10-16`  
Reviewed: 2026-10-17  
Assignment: batch `25`

## Opened inventory

The live autopilot status was `running` when checked. The current batch-25
manifest lists two draft pages, six A-page items and four B-page examples.
I opened both assigned pages:

- A page: `numerical-inverse-problems-and-regularization-error`.
- B page: `numerical-inverse-problems-and-regularization-error-examples`.

I also opened all six required page summaries:

- Published: `direct-matrix-factorisations-lu-cholesky-and-qr`,
  `matrix-norms-condition-numbers-and-numerical-stability`,
  `the-moore-penrose-pseudoinverse-and-regularised-least-squares`,
  `the-spectral-theorem-and-singular-value-decomposition`, and
  `compact-operators-and-riesz-schauder-theory`.
- Draft, batch 1: `finite-precision-direct-factorizations`.

The ten assigned item carriers opened and reviewed were:

- `lem-hilbert-tikhonov-normal-operator-invertible`
- `lem-truncated-svd-bias-and-data-noise-decomposition`
- `lem-hilbert-tikhonov-noise-amplification-bound`
- `thm-tikhonov-error-chain-with-discretization-and-residual`
- `cor-l2-inverse-error-budget-and-cross-term-condition`
- `lem-computed-augmented-tikhonov-solve-residual-and-output-error`
- `ex-tikhonov-normal-equation-residual-bound`
- `ex-diagonal-inverse-noise-amplification`
- `ex-tikhonov-bias-noise-tradeoff`
- `ex-quadrature-discretization-residual-before-inversion`

Published item suppliers opened for these claims were:
`def-hilbert-space`, `def-hilbert-space-adjoint`,
`def-bounded-linear-operator`, `def-inner-product-space`,
`def-countable-choice`, `def-operator-norm`,
`def-orthogonality-and-orthogonal-complement`,
`cor-inner-product-induces-a-norm`,
`thm-cauchy-schwarz-in-an-inner-product-space`,
`thm-orthogonal-decomposition-by-a-closed-subspace`,
`def-truncated-singular-value-pseudoinverse-at-a-declared-threshold`,
`thm-singular-value-decomposition`, `def-compact-linear-operator`,
`def-tikhonov-regularised-least-squares`,
`thm-tikhonov-regularised-least-squares-has-a-unique-minimiser`,
`def-operator-norm-on-a-finite-dimensional-inner-product-space`,
`def-calligraphic-l-p-on-a-measure-space`,
`thm-minkowski-inequality-for-integrals`,
`prop-order-and-scalar-rules-for-the-nonnegative-integral`,
`def-integrable-real-and-complex-functions-and-their-integrals`,
`thm-linearity-of-the-lebesgue-integral-on-l-one`, and
`def-complex-conjugate-real-imaginary-part-and-modulus`.

For the finite-precision bridge, I opened the current batch-1 dependency chain:
`def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`,
`lem-rounded-linear-and-normal-residual-certificates`,
`alg-scaled-householder-reflector-formation-and-application`,
`lem-rounded-triangular-substitution-componentwise-backward-error`,
`lem-scaled-householder-step-meets-local-backward-error-premise`,
`thm-scaled-householder-qr-backward-stability`, and
`thm-computed-full-rank-least-squares-backward-stability`. The supporting
published items opened for that chain were
`def-standard-relative-floating-point-model-and-unit-roundoff`,
`def-householder-reflector`,
`def-full-reduced-and-column-pivoted-computational-qr-factorisations`,
`def-frobenius-matrix-norm`,
`lem-product-of-one-plus-deltas-gives-theta-n`,
`thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`,
`thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`,
`thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts`, and
`thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`.

I also opened the batch-25 manifest, reader brief, proof-contract file,
authoring notes, and cross-batch dependency evidence. Where the notes describe
an earlier nine-item scope or an unresolved batch-1 interface, I checked the
current manifest and current source carriers directly; the manifest currently
assigns ten items, including the computed augmented-solve lemma.

## Item review

- `lem-hilbert-tikhonov-normal-operator-invertible`: the coercive lower bound,
  closed range, zero orthogonal complement, and inverse norm estimate follow
  from the stated boundedness, Hilbert, and Countable Choice hypotheses.
- `lem-truncated-svd-bias-and-data-noise-decomposition`: the strict
  `sigma_i > tau` filter gives the stated retained-noise term and discarded
  bias, including the nullspace and empty retained set.
- `lem-hilbert-tikhonov-noise-amplification-bound`: pairing the normal
  equation with the solution gives the energy identity; completing the scalar
  square proves the sharp `1/(2 sqrt(lambda))` bound without compactness or a
  source condition.
- `lem-computed-augmented-tikhonov-solve-residual-and-output-error`: the
  residual certificate controls the exact direct-solve target by coercivity.
  The square-root representation, complex realification, nonsingularity
  margin, and supplied isometric-coordinate conditions are accounted for.
- `thm-tikhonov-error-chain-with-discretization-and-residual`: the four- and
  five-term identities telescope exactly. Residual, operator-perturbation,
  stopping, returned-output, and forward-discretization terms are conditional
  as stated; no rate or floating-point certificate is implicit.
- `cor-l2-inverse-error-budget-and-cross-term-condition`: Minkowski applies
  under the stated square-integrability conditions. The squared identity and
  root-sum-square equivalence follow after the cross integrals are shown
  integrable.
- The four examples' arithmetic was checked. The diagonal example attains the
  noise bound; the scalar residual and bias/noise values are exact; and the
  quadrature example's five terms sum to `1 - 380/461 = 81/461`.

Five assigned items omitted the Countable Choice hypothesis needed for a cited
supplier application. I repaired the omissions while preserving the finite
examples and the general (L^2) inequality:

- In `cor-l2-inverse-error-budget-and-cross-term-condition`, Countable Choice
  now qualifies only the application to the inverse-error chain theorem; the
  generic Minkowski and cross-term results remain stated without that axiom.
- In the four examples, the Countable Choice assumption is now stated in the
  example and `Given` text because each verification invokes the corresponding
  Countable Choice-dependent supplier. The two steps that newly rely on `Given`
  now cite it.

The four example contracts and the corollary contract were updated to reflect
the assumption and its use. No stale `verification.judge` record was present.
No other mathematical defect was found in an assigned item.

## Page review and repair

The B-page summary matches the four examples and correctly says its residual
example does not certify floating-point residual evaluation. No B-page defect
was found.

The A-page summary had two omitted hypotheses, both repaired in its prose:

1. Its first paragraph now says the shifted normal operator and noise bounds
   are asserted under Countable Choice, and that the bounded-operator version
   uses the same assumption. The normal-operator and noise lemma statements
   assume Countable Choice, as does the Hilbert-adjoint definition used by
   them. I checked the choice-sensitive projection step against Blackadar,
   Farah and Karagila, *Hilbert spaces without the Countable Axiom of Choice*,
   §1 Theorem 1.0.2 and §2 Theorem 2.0.4–Corollary 2.0.5 (PDF pp. 202–203):
   under the stated completeness conventions and Countable Choice, the
   closest-vector and closed-subspace orthogonal-decomposition results apply.
   Source: <https://eprints.whiterose.ac.uk/216587/1/Hilbert%20spaces%20without%20the.pdf>.
2. Its random-error paragraph now states the measurability of increment norms,
   the sum norm, and scalar pairings, and requires square-integrable increment
   norms. These are the hypotheses used by
   `cor-l2-inverse-error-budget-and-cross-term-condition` to apply Minkowski
   and integrate the cross terms.

After those edits, the A-page summary agrees with the item statements and
retains the caveats on discretization rates, residual evaluation, and
parameter-choice rules.

## Uneditable finding

The current batch-1 dependency
`alg-scaled-householder-reflector-formation-and-application` has a `## Proof`
with steps 1.1–2.1 establishing termination inside the algorithm item. The
algorithm instructions require correctness, termination, complexity, and
other properties to be proved in separate lemma/theorem/proposition/corollary
items. Its dependencies specify arithmetic and QR conventions but do not
establish termination for this procedure as a separate result. Move that
termination proof into a separate property item; the procedure definition
itself is fully specified. This draft dependency is outside batch 25 and was
not edited. It is reachable from the assigned consumer
`lem-computed-augmented-tikhonov-solve-residual-and-output-error` through the
current batch-1 QR chain. Its source hash changed after my first observation,
so I reopened the current carrier; the current `## Proof` still places the
termination argument in the algorithm item. The structured finding binds the
current source bytes at split.

No other uneditable mathematical defect or blocker was found.

## Checks and coverage limits

For the five changed items, reflow reported unchanged on all five and precheck
passed 5/5. After the final corollary wording edit, reflow and precheck were
rerun for it and passed. The final batched proof-layout run, rerun after that
edit, reported 5 items, 10 steps, and 0 defects. No stale
`verification.judge` record was present to remove.
Only assigned items and A-page prose changed. I did not re-audit unrelated
transitive dependencies of the published library suppliers; the direct claims
needed here and the batch-1 finite-precision proof chain were reviewed.
