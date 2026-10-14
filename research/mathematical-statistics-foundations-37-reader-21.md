# Step 3a reader report — batch 21

Run: `mathematical-statistics-foundations-37`  
Reader: `reader-21`

## Opened inventory

Assigned pages:

- `library/mathematical-statistics/delta-method-and-asymptotic-normality.md`
- `library/mathematical-statistics/delta-method-and-asymptotic-normality-examples.md`

Assigned items, read in supplier-before-consumer order:

- `thm-first-and-second-order-delta-method-for-random-vectors`
- `thm-z-estimator-asymptotic-linearity-and-normality`
- `ex-log-transformation-delta-method`
- `ex-ratio-delta-method`
- `ex-second-order-delta-method-quadratic`
- `ex-sample-variance-delta-method`
- `cex-continuity-alone-does-not-give-delta-method`

Direct item dependencies opened:

- `def-op-and-little-op-stochastic-bounds`
- `def-convergence-in-distribution-of-random-elements`
- `def-real-frechet-derivative-on-real-and-complex-matrix-spaces`
- `thm-vector-stochastic-order-calculus`
- `thm-vector-slutsky`
- `def-z-estimator`
- `def-estimator-sequence-in-iid-experiments`
- `def-identically-distributed-and-iid-random-variables`
- `lem-measurable-functions-preserve-independence`
- `def-axiom-of-choice`
- `def-multivariate-normal-law`
- `thm-multivariate-iid-central-limit-theorem`
- `def-moments-variance-and-covariance`

The assigned proof contracts in `research/mathematical-statistics-foundations-37-batch-21.proof-contracts.json` were checked against the current item facts, cited sections, steps, boundary records, finite computations, and axiom records. Their cited steps and supplier statements match the authored proofs.

## Mathematical review and page verdicts

### `delta-method-and-asymptotic-normality` — pass

The summary accurately states the two theorem results and their key conditions. The first- and second-order remainder arguments control the input by weak-limit tightness and convergence of the scaled statistic to the target; the second-order branch uses the stated zero derivative and Peano expansion. The Z-estimator proof applies the explicit local stochastic-equicontinuity condition, uses the root-rate residual, absorbs the Taylor remainder using nonsingularity of the derivative, and then applies the multivariate iid CLT under the stated AC assumption. I found no unsupported inference or missing hypothesis in either theorem.

Item-level checks:

- `thm-first-and-second-order-delta-method-for-random-vectors`: the probability bounds in steps 2.1–5.1 justify both scales, including degenerate limits.
- `thm-z-estimator-asymptotic-linearity-and-normality`: the assumptions and proof support the displayed linear representation and covariance (V^{-1}\Sigma V^{-T}); consistency and local equicontinuity are assumed explicitly.

### `delta-method-and-asymptotic-normality-examples` — pass

The page summary accurately describes the logarithm, ratio, zero-gradient quadratic, and continuity counterexample. It does not mention the sample-variance example, but makes no exhaustive-coverage claim.

Item-level checks:

- `ex-log-transformation-delta-method`: the clamp keeps (T_n>0); for all (n\ge4), the scaled input equals (Z), and the derivative at (1) is (1).
- `ex-ratio-delta-method`: the denominator is at least (1); the displayed remainder has the stated quadratic bound, the derivative is correct, and the four-point limit has variance (5/16).
- `ex-second-order-delta-method-quadratic`: the quadratic expansion is exact and the two limiting masses are (1/2) each.
- `ex-sample-variance-delta-method`: the covariance matrix and derivative of (g(x,y)=y-x^2) give the stated variance polynomial, equal to \(\operatorname{Var}((X_1-\mu_1)^2)\), including nonzero means and the degenerate case.
- `cex-continuity-alone-does-not-give-delta-method`: for (Z=\pm1), the transformed limit is constantly (1), whereas every linear image has either a zero law or two distinct support points.

## Source checks

- Peter Bartlett, *Theoretical Statistics*, Lecture 16: PDF pp. 9–12 for the first-order delta theorem and proof, and p. 13 for the scalar Z-estimator result. The local vector Z theorem is proved under its own explicit conditions.
- John Duchi, *Theory of Statistics*, Stats 300B Lecture 2: Theorem 3 and its proof (PDF pp. 2–3), Theorem 4 and its proof (p. 3), and the sample-variance example (p. 3). The scribe note's sample-variance variance display omits nonzero-mean terms; the assigned item computes the covariance/Jacobian expression directly and its formula is correct. The note itself warns that it may contain factual errors.
- Aad W. van der Vaart, *Semiparametric Statistics*, Lecture 6 §6.5, Theorem 6.19 and proof (PDF pp. 73–74), including the remark that its Donsker premise can be relaxed to a direct local empirical-process condition. This supports the theorem's approach; the assigned proof establishes its stated condition directly.

## Edits, unresolved defects, and blocker

- Edits: none. No confirmed defect was found in an editable batch-21 item or the assigned A-page prose.
- Defects that could not be edited: none identified in the assigned carriers or the direct dependency statements used by them.
- Blocker: none.
- No item was changed, so reflow, precheck, and proof-layout were not run.

Coverage limit: I checked the direct item dependencies used by the assigned items and the exact source sections cited above. I did not independently re-audit the complete transitive dependency closure of each supplier or unrelated prerequisites.
