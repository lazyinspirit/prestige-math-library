# Step 3a reader report — batch 18

Run: `bayesian-computational-statistics-62`  
Role: reader  
Coverage: batch `18`

## Opened inventory

Pages opened:

- `dirichlet-normal-mixture-contraction` — A-page.
- `dirichlet-normal-mixture-contraction-examples` — B-page.

Assigned items opened in dependency-level order:

- Level 1: `lem-dirichlet-normal-mixture-density-well-defined`; `lem-hellinger-ratio-controls-kl-moments`; `lem-gaussian-convolution-kl-and-log-square-second-order-bound`.
- Level 2: `lem-dirichlet-normal-mixture-finite-support-approximation`; `lem-iid-posterior-contraction-under-countable-sieves`.
- Level 3: `lem-dirichlet-normal-mixture-sieve-entropy`.
- Level 4: `lem-dirichlet-normal-mixture-countable-band-entropy-sum`.
- Level 5: `lem-dirichlet-process-simplex-small-ball`.
- Level 6: `lem-dirichlet-normal-mixture-local-prior-mass`; `lem-dirichlet-normal-mixture-interval-mass-local-prior-mass`.
- Level 8: `lem-dirichlet-normal-mixture-posterior-sieve-tail`.
- Level 9: `thm-dirichlet-normal-mixture-posterior-contraction`.
- Level 10: `cor-dirichlet-normal-mixture-interval-mass-refinement`; `ex-dirichlet-normal-mixture-compact-scale-hyperprior-and-rate`; `ex-dirichlet-normal-mixture-polynomial-scale-tail-outside-theorem`.

Relevant supplier interfaces were opened for the probability/kernel and Tonelli results, normal density and normal moments, Cauchy–Schwarz, Hermite polynomials, Hellinger and KL definitions and inequalities, logarithm laws and derivative, covering numbers, IID factorization and Markov, the denominator lemma, Dirichlet-process definition/construction/update/predictive law, Dirichlet density and normalization/update/aggregation, and the Gamma integral results. I read the full proofs of the denominator lemma, Hellinger–L1 comparison, normal location-scale density, DP construction, DP posterior update, and Pólya-urn predictive law because the assigned arguments depend on those bodies.

## Review and repairs

The following defects were repaired in assigned draft items. No item statement was narrowed.

- `lem-dirichlet-normal-mixture-density-well-defined`: added the Tonelli calculation on every Borel set identifying the displayed density with the convolution law. The previous proof only established normalization. This uses the opened normal-density and Tonelli interfaces.
- `lem-dirichlet-normal-mixture-finite-support-approximation`: stated the standard-normal second moment supplier explicitly; added the Tonelli, integration-by-parts, and FTC interfaces; wrote the Taylor integral remainder used for the (L^1) and (L^infty) approximation bounds.
- `lem-hellinger-ratio-controls-kl-moments`: replaced the unsupported reference to Taylor expansions with explicit endpoint-limit arguments. The logarithm derivative/integral interface supplies the limits at (u=1); an integral bound supplies the limits at (u=0).
- `lem-gaussian-convolution-kl-and-log-square-second-order-bound`: added the dominated differentiation, integration-by-parts, FTC, dominated-convergence, and logarithm-derivative interfaces used in the heat-semigroup and pointwise-log arguments. The KL and log-square inequalities are now derived by explicit one-variable derivative bounds.
- `lem-dirichlet-normal-mixture-sieve-entropy`: stated the normal-moment, Tonelli, and FTC interfaces. The scale grid is restricted to the actual dyadic band and sieve cutoff, so covering centers belong to the class being covered.
- `lem-dirichlet-normal-mixture-local-prior-mass`: replaced an unjustified single-interval neighborhood by a fixed finite union of compact intervals around the compact support. The residual cell is the fixed complement of this set, so its base mass is fixed and may be zero; the DP small-ball lemma’s corresponding case now applies. The mixture comparison explicitly uses the relocated finite law and Tonelli. The KL/log-square conclusion now applies the Hellinger-ratio lemma directly to (p_0) and (p_{F,\sigma}), using the established Hellinger bound and pointwise likelihood-ratio bound. The old proof instead asserted KL/log-square control for the smoothed truth without a supporting ratio bound and then added a log perturbation.
- `lem-dirichlet-normal-mixture-interval-mass-local-prior-mass`: added the logarithm derivative interface for the mean-value estimate controlling the log perturbation.
- `lem-dirichlet-normal-mixture-posterior-sieve-tail`: defined the normal CDF used in the test argument and cited the FTC for its derivative; the normal-density formula now supplies the monotonicity in absolute value used to maximize component retention at the interval midpoint.

Updated the corresponding batch-18 proof-contract derivations and citations for all eight edited items. None of those item files or contract entries had a stale `verification.judge` record to remove.

The literature check for the local KL/log-square step was [Ghosal and van der Vaart (2007), Lemma 8 and the §9 proof of Theorem 1](https://arxiv.org/pdf/0708.1885), PDF pp. 16–17 and 22–24. Lemma 8 bounds KL and the log-square moment by Hellinger distance times powers of (1+\log\|p/q\|_\infty); the §9 proof first establishes the Hellinger and likelihood-ratio bounds and then applies that lemma. This supports the repaired direct application to (p_0) and (p_{F,\sigma}).

## Validation

- Reflow: all eight edited item paths reported unchanged.
- Precheck: all eight edited items passed.
- `node tools/proof-layout.mjs` on all eight changed item paths: 8 items, 37 steps, 0 defects.

## Page verdicts

- `dirichlet-normal-mixture-contraction` (A): after the repairs above, no uneditable defect found in its thirteen assigned items or page summary. The posterior-rate scope remains a sampling-probability Hellinger contraction statement with the stated scale-tail and smooth-truth hypotheses.
- `dirichlet-normal-mixture-contraction-examples` (B): both examples are correct under the theorem’s hypotheses. The compact uniform scale prior satisfies the tail premises and the displayed bandwidth terms balance at (n^{-2/5}(\log n)^{4/5}). The Pareto example has survival (1/s), hence lies outside the exponential upper-tail premise; it makes no claim of posterior failure or inconsistency.

## Uneditable defects and blockers

None found. No blocker.

## Coverage note

I found no rendered evidence bundle in the inspected run-artifact listing, so I used the current authored pages/items and opened the cited supplier interfaces and relevant draft proofs directly. I did not independently re-prove every transitive foundational result behind the opened published interfaces.
