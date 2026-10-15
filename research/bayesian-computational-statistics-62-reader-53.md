# Step 3a reader report — batch 53

Run: **bayesian-computational-statistics-62**  
Role: **reader-53**  
Verdict scope: assigned batch 53 only.

## Opened inventory

Assigned pages:

- **block-bootstrap-for-dependent-data** — A page.
- **block-bootstrap-for-dependent-data-examples** — B page.

Assigned A-page items, read in dependency order:

- **def-conditional-weak-convergence-in-probability**
- **def-hadamard-differentiability-tangentially**
- **alg-overlapping-block-resampling**
- **alg-moving-block-bootstrap**
- **alg-tapered-block-bootstrap**
- **lem-moving-block-bootstrap-conditional-covariance**
- **lem-tapered-block-bootstrap-conditional-covariance**
- **lem-taper-window-l2-normalization**
- **alg-k-sample-null-constrained-block-bootstrap**
- **lem-k-sample-null-centering**
- **thm-conditional-bootstrap-hadamard-delta-method**
- **lem-weighted-overlapping-block-moment-and-covariance-limits**
- **lem-conditional-independent-block-bootstrap-clt**
- **thm-k-sample-block-bootstrap-validity**
- **lem-independent-tail-replacement-errors-are-monotone**
- **thm-moving-block-bootstrap-clt-for-dependent-data**
- **thm-tapered-block-bootstrap-clt-for-dependent-data**

Assigned B-page items:

- **ex-moving-block-bootstrap-small-sample**
- **ex-tapered-block-bootstrap-triangular-window**
- **ex-block-length-n-one-third**
- **cex-pointwise-bootstrap-ar1-variance-mismatch**
- **ex-two-series-block-bootstrap-null-centering**
- **ex-iid-functional-data-block-bootstrap**

Required page suppliers opened:

- **resampling-algorithms-and-sampling-units**
- **hilbert-valued-clt-for-weakly-dependent-functional-time-series**
- **brownian-motion-construction-and-continuity**
- **stationary-time-series-moments-and-autocovariance**

Relevant item suppliers opened for the assigned arguments included **def-resampling-sampling-unit-contract**, **def-statistical-experiment**, **def-weak-convergence-of-borel-probability-measures**, **def-l2-m-approximable-causal-bernoulli-shift**, **lem-long-run-covariance-is-trace-class**, **thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts**, **lem-positive-trace-class-covariance-defines-hilbert-gaussian**, the conditional weak convergence and mapping/Portmanteau/subsequence suppliers, the Darboux/Riemann and monotone-integrability suppliers, the trace-class and basis suppliers, and the independence, Fubini, Bochner, Cauchy–Schwarz, characteristic-function, normal-law, stationarity, and moment suppliers cited by the local proofs.

Additional dependency item IDs opened at the relevant statement/definition or proof sections: **def-weak-convergence-of-borel-probability-measures**, **def-convergence-in-probability**, **thm-continuous-mapping-theorem**, **thm-portmanteau-theorem**, **thm-subsequence-characterization-of-convergence-in-probability**, **thm-almost-sure-convergence-implies-convergence-in-probability**, **thm-almost-sure-subsequence-from-convergence-in-probability**, **thm-continuity-from-above-for-measures**, **cor-archimedean-reciprocal**, **def-darboux-integral**, **def-darboux-sums**, **thm-darboux-equals-riemann**, **thm-monotone-implies-integrable**, **thm-real-power-continuity-and-derivatives**, **thm-riemann-criterion**, **cor-cauchy-schwarz-for-random-variables**, **cor-markov-inequality-for-random-variables**, **lem-bochner-integral-norm-inequality**, **lem-l2-basis-projections-converge-and-satisfy-parseval**, **cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator**, **lem-nuclear-series-characterizes-trace-norm**, **thm-trace-class-is-a-two-sided-banach-operator-ideal**, **thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues**, **def-hilbert-schmidt-operator**, **lem-finite-bessel-inequality**, **thm-cauchy-schwarz-in-an-inner-product-space**, **thm-grouping-independent-sigma-algebras**, **lem-measurable-functions-preserve-independence**, **thm-independent-random-elements-have-product-joint-law**, **thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces**, **thm-tonelli-theorem-for-sigma-finite-product-spaces**, **thm-fatou-lemma**, **thm-finite-and-countable-subadditivity-of-measures**, **thm-bounded-linear-maps-commute-with-bochner-integration**, **thm-factorization-of-expectations-for-independent-variables**, **lem-independent-centered-hilbert-elements-have-zero-expected-inner-product**, **lem-second-order-characteristic-function-expansion**, **lem-characteristic-function-of-a-normal-law**, **lem-characteristic-functions-under-affine-maps-and-independent-sums**, **cor-characteristic-function-criterion-for-weak-convergence**, **thm-cramer-wold-device**, **thm-levy-prokhorov-metric-metrizes-weak-convergence**, **def-identically-distributed-and-iid-random-variables**, **def-moments-variance-and-covariance**, **def-standard-normal-and-normal-laws**, **def-strict-and-weak-stationarity-for-time-series**, **lem-gaussian-even-moment-bound-for-brownian-increments**, **thm-dominated-convergence**, **thm-monotone-convergence-for-the-integral**, **thm-riesz-fischer-completeness-of-l-p**, and **thm-uniqueness-of-a-law-from-its-characteristic-function**.

The current draft supplier **def-resampling-sampling-unit-contract** in batch 50 was checked against its **def-statistical-experiment** prerequisite. Its indexed-record/group interface matches the MBB and TBB definitions; it makes no bootstrap-validity claim.

## Edits and evidence

- **alg-moving-block-bootstrap**: made the input block length explicitly an integer. The composed **alg-overlapping-block-resampling** already requires an integer block length; the primary paper states the MBB block length is an integer in Section 2.2.
- **alg-k-sample-null-constrained-block-bootstrap**: made the number of series explicitly an integer, as required by the indexed input/output loops.
- **lem-moving-block-bootstrap-conditional-covariance** and **lem-tapered-block-bootstrap-conditional-covariance**: made the positive-integer sample size and integer block length explicit. Their partial-prefix sums and floors are only defined on that domain; the algorithms impose it.
- **thm-moving-block-bootstrap-clt-for-dependent-data** and **thm-tapered-block-bootstrap-clt-for-dependent-data**: removed the wording that called m δ_m → 0 the source assumption and made the implication from the local independent-tail replacement lemma explicit. The source paper's Assumption 1 is √m δ_m → 0; its Theorems 2.1–2.2 use b⁻¹ + b n⁻¹ᐟ² = o(1). The local lemma proves the stronger m δ_m → 0 from the repository's summable independent-tail replacement errors, so the local proof adds no process restriction. Source: [Pilavakis, Paparoditis, and Sapatinas (2019), arXiv:1711.01070](https://arxiv.org/pdf/1711.01070), Section 2.1, Assumption 1 (PDF p. 3), and Theorems 2.1–2.2 (PDF pp. 4–6).
- **lem-weighted-overlapping-block-moment-and-covariance-limits**: added explicit dependencies and cited facts for Hilbert-space Cauchy–Schwarz, disjoint innovation-group independence, measurable maps preserving independence, product laws, Fubini, factorization, and bounded maps commuting with Bochner integration. The proof now shows why the independent rank-one tensor expectation vanishes and cites the product/Fubini facts in its bounded fourth-moment and covariance expansions.
- **lem-independent-tail-replacement-errors-are-monotone**: added the Hilbert-space Cauchy–Schwarz supplier used in its Hilbert-valued approximation and inner-product arguments.
- **lem-conditional-independent-block-bootstrap-clt**: added Hilbert-space Cauchy–Schwarz and the finite independent-sum characteristic-function supplier. The partial-block characteristic-function step now uses its zero conditional mean, the second-order bound, and the trace remainder explicitly.
- **thm-k-sample-block-bootstrap-validity**: stated that the fixed number of samples K is an integer.
- **block-bootstrap-for-dependent-data** A-page summary: corrected its description of the paper's approximation rate and states that the stronger local rate follows from the independent-tail lemma.
- Updated affected entries and citations in **research/bayesian-computational-statistics-62-batch-53.proof-contracts.json**. No changed item carried a stale verification.judge record.

## Defects not edited

No uneditable mathematical defect remains in the assigned pages, items, or checked dependency carriers. I did not edit B-page prose, another batch's item, or published content.

The unedited task evidence file **research/bayesian-computational-statistics-62-batch-53.coverage.json** still describes the 2019 paper's process rate as m δ_m → 0. The opened PDF's Section 2.1 Assumption 1 says √m δ_m → 0. This is an evidence-artifact mismatch rather than an item/page subject that this reader route can repair, so it is recorded here and omitted from the routed findings.

## Page verdicts

- **block-bootstrap-for-dependent-data** (A): sound after the summary correction. The finite covariance identities, taper normalization, pooled-null centering, conditional limit theorem, and dependent-data CLT claims are supported by the local proofs and their stated hypotheses. No path-process FCLT is claimed.
- **block-bootstrap-for-dependent-data-examples** (B): sound. The finite moving-block and triangular-taper calculations, cube-root block regime, two-series pooled mean, IID functional example, and AR(1) pointwise-bootstrap variance comparison check out. The AR(1) example limits its conclusion to variance inconsistency.

## Validation and blocker

- **reflow.mts** and **precheck.mts** ran for all 10 changed items. Reflow reported unchanged; all proof-bearing items passed precheck, and the algorithms had zero proof sections to check.
- Final batched **proof-layout.mjs** run: 10 items, 34 proof steps, 0 defects.
- No tests were run. No blocker remains for this reader assignment.
