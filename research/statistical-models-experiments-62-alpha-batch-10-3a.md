# Step 3a Alpha — batch 10

Run: `statistical-models-experiments-62`. Group: `batch-10`. Scope: batch 10 only.

The generated order routes only the level-6 risk review of `thm-stratified-total-unbiasedness-and-variance`. The scope has no touched items, changed pages, reader findings or refuter findings. Accordingly the decisions file has an empty `decisions` array. No decision was invented for an untouched, unflagged carrier.

Read the scope, order task, reader report and findings, refuter report, both item/page hash snapshots, batch manifest, relevant proof contract, all seven current item carriers and both pages. Pre/post item, contract and manifest projections agree; page projections agree. All seven current raw item hashes match their post-reader snapshots. The findings JSON hash is `9e4c2e32d8ab1bf0ff862c36530deafc97b5915764c365be6e33e5a309bfec83` and the refuter JSON hash is `28a13715f28ab16926fc7a25e3bad06f675e0510f3c0bd656939f8b7e00f005b`, matching scope bindings. There is no historical repair delta to adjudicate.

## Completed risk review

Item: `thm-stratified-total-unbiasedness-and-variance`, raw source SHA-256 `07f7722ccf67c830a9e0efb111deec9bf0341b3ba4830e0154c40a1ab87659d2`. The structural risk report scores it HIGH (6): six dependencies, six cited facts and boundary-sensitive language. Disposition: reviewed without defect; complete item-specific `risk_review` added to the owning proof contract. This is audit enrichment, with no item repair or owed carrier decision.

The exact claim is design-unbiasedness of the weighted stratified total for fixed finite real population values, and variance equal to the sum of noncertainty contributions, under independent within-stratum SRSWOR with integer `1 <= n_h <= N_h`. Reviewed Statement, F1–F6 and every proof step against these current direct suppliers:

- `def-stratified-sampling-design-and-estimator`, Definition: finite nonempty partition, normalized product law, weighted estimator and variance convention.
- `def-finite-population-and-sampling-design`, Definition: inclusion probabilities, fixed values, finite expectation and the explicit observed-record/design expectation identity.
- `thm-horvitz-thompson-total-is-design-unbiased`, Statement and proof: positive first-order inclusion probabilities suffice; no second-order positivity is needed.
- `thm-srswor-mean-variance-and-finite-population-correction`, Statement and proof: `N > 1`, `1 <= n <= N`, exact finite-population variance.
- `def-moments-variance-and-covariance`, Definition: centered-square and centered-product expectations on one probability space.
- `thm-variance-of-a-finite-sum`, Statement and proof: finite square-integrable families, double covariance sum and empty/singleton cases.

Also read the SRSWOR Definition, HT variance theorem and covariance bilinearity theorem as immediate support. No independent audit of unrelated transitive foundational closures is claimed.

Step 1.1: normalization of all other stratum masses gives the uniform marginal; inclusion counting yields `pi_i = n_h/N_h > 0`. The stratum-weighted estimator is precisely HT composed with the observed-record map. The finite-population Definition supplies the expectation identity needed to use F3 under the design notation.

Step 1.2: all random quantities have finite support and finite real values. Noncertainty implies `N_h > 1`, satisfying F4; variance scaling follows by expanding the centered square. A certainty contribution is a constant total, including a singleton stratum, so no undefined `S_h^2` is introduced.

Step 1.3: each `Z_h` depends only on its own stratum sample. Finite product summation factors the mixed moment; all remaining mass sums are one, so covariance is zero. Step 2.1 then applies F6 on the common finite design space and substitutes the cases already proved.

Checked one stratum, the one-unit population, singleton certainty strata, all-certainty designs with an empty variance sum, mixed certainty and noncertainty, all-zero values, constant strata and both sample-size endpoints. An empty population or empty stratum and zero sample sizes are excluded by the definitions. No converse is asserted, and no AC use or limiting argument occurs. The disjoint labelled strata can be relabelled to apply the finite-population suppliers, without changing their finite laws or sums.

## Source evidence

- [Shalabh, Chapter 4](https://home.iitk.ac.in/~shalab/sampling/chapter4-sampling-stratified-sampling.pdf), PDF pp. 3–5: independent stratum sampling, weighted mean, unbiasedness and the variance calculation. Multiplying the mean estimator and variance by N and N² respectively yields the total convention. The extracted PDF formulas were checked against the independent formula below; the local proof separately handles singleton strata.
- [Arnold, Chapter 8](https://homepages.ecs.vuw.ac.nz/~rarnold/STAT392/SampleSurveysBook/_book/stratified-sampling), §§8.2–8.3, especially the combined total and variance displays: independence gives addition of stratum variances and SRSWOR gives the exact finite-population correction. The checked claim concerns fixed population variances, not their sample estimators or normal confidence intervals.
- [Wright, Census working paper](https://www.census.gov/content/dam/Census/library/working-papers/2014/adrm/rrs2014-07.pdf), §2.1, printed pp. 2–3 (PDF pp. 4–5), equations (1)–(3): the partition, independent simple random samples, positive sample sizes, total estimator, unbiasedness and matching total-variance formula.

## Repairs, ledgers and checks

No mathematical defect, repair, proposed withdrawal, published-supplier alert or blocker was identified. Published content remains unchanged. No closed defect row is appropriate. No existing frontier-dependency-ledger row names the owned theorem or either page, and no dependency interface changed, so no ledger amendment or consumer repair is needed. The allocation and example carriers and page prose remain unchanged; their supplier uses preserve the positive-variance continuous-relaxation caveats and admissible sampling bounds.

The only content maintenance is the complete risk-review field in the batch-10 proof contract. The report and empty decisions file are the task-named outputs. No proof source changed, so reflow, precheck and proof-layout are not applicable. No judge, stamp, certification or gate battery was run; these remain engine-owned.

Validation: initial risk report passed (0 errors, 7 items, one HIGH item). Final `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-10.proof-contracts.json --require-reviewed` passed (exit 0; 0 errors, 7 items). Focused Python checks passed: decision schema/identity and empty routed obligations agree; all seven raw item and both page hashes still equal the post-reader snapshot; reader-findings/refuter hashes match scope bindings. Local work is complete; next action belongs to the engine for hash stamping and its gate battery.
