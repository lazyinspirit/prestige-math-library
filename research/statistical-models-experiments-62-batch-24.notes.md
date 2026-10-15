# Batch 24 authoring notes — Interference and exposure mappings

## Scope and controlling evidence

- Run: `statistical-models-experiments-62`; role `beta`; batch `24`; pair `interference-exposure-mappings-and-design-based-effects` only.
- Batch dependency input: `de7bceaad7c5129874c104898501839df003bd6552eacd004d81d4231e636832`; planned batch level **2**, requiring batch 12 at level 1.
- I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta-scaffold brief, the owner direction, this pair's generated task, the dependency-order task, the complete SME-24 design clause, `plan-spec.json` entries 1964–1965, current batch manifests/evidence, the models-03 dossier and progress record, and the SME-24 audit row.
- The plan and `plan-spec.json` agree on both page IDs, order, category, companion, and the six declared page requirements. The plan controls the detailed mathematics, which the completed inventory below retains. No design/spec conflict was found.
- The Oct. 12 audit row predates publication of the mathematical-statistics prerequisites and records their interfaces as planned. I read the current published carriers for `def-estimand-on-a-statistical-model` and `def-statistic-and-estimator`; their actual definitions now support the finite target and estimator terminology used here. The old audit status was not used as current supplier evidence.
- The active run status was `running`, with Step 1 held for owner repair/recertification of the separate blocker file. This pair continued its authorized independent authoring. No engine state, blocker, shared plan, verdict, published content, or other batch was edited.

## Inventory and dependency levels

The initial inventory was entered before authoring. A later prerequisite audit found that the two-stage arguments needed an exact finite event-conditioning and partition-averaging result, so I added the local lemma `lem-finite-event-conditional-expectation-formula`, synchronized the manifest and A-page placement, and recomputed the final inventory before completing the dependent proof contracts. The final manifest contains 15 items. Levels count only suppliers in this run; published suppliers remain prerequisite context.

| Level | Items |
|---:|---|
| 0 | `lem-finite-simple-random-sampling-identities`; `lem-finite-event-conditional-expectation-formula` |
| 2 | `def-potential-outcomes-under-partial-interference` |
| 3 | A: `def-exposure-mapping-under-interference`; `def-two-stage-randomized-interference-design-and-effects`. B: `cex-cross-group-contamination-violates-partial-interference` |
| 4 | `thm-ht-exposure-specific-mean-unbiased`; `thm-two-stage-randomized-interference-estimators-unbiased`; `def-stratified-interference-design-based-variance-estimators`; `lem-two-stage-finite-design-variance-identities` |
| 5 | `thm-stratified-interference-variance-estimators-conservative` |
| 5 (B) | `ex-two-stage-village-strategy-contrasts`; `ex-ht-exposure-specific-mean-two-unit-design`; `cex-misspecified-own-treatment-exposure-map` |
| 6 (B) | `ex-nonadditive-spillovers-create-positive-variance-bias` |

The level-2 chain starts with the actual batch-12 supplier `def-finite-randomized-treatment-assignment-model` (level 1). Its current draft body defines the finite assignment law and fixed potential-outcome schedule and explicitly makes no no-interference assumption. The local potential-outcome definition adds partial interference separately. The cross-batch input records both the required page edge and the direct item edge as inspected; this records interface review, not independent acceptance of the batch-12 content. The local conditional-expectation lemma supplies the exact positive-event formula, the sigma-algebra version check, and the finite-partition expectation identity. It cites `cor-expectation-agrees-with-the-finite-weighted-sum` to bridge finite sums to the integral characterization. The finite sampling and effect calculations now cite `thm-linearity-of-expectation`; the variance argument cites `cor-variance-adds-for-pairwise-independent-random-variables`; and the variance-estimator theorem cites `lem-measurable-functions-preserve-independence` to justify passing independence from group assignment vectors to their observed group statistics.

## Supplier and axiom review

- Read the actual in-run batch-12 randomized-assignment definition, including its assignment support, weight normalization, fixed schedule, observed response, and explicit no-implicit-SUTVA warning.
- Read the current published finite-probability, finite-expectation, conditional-expectation, finite weighted-sum bridge, expectation-linearity, pairwise-independent variance-addition, measurable-function independence, finite-sum, finite-Fubini, binomial-coefficient, estimand, statistical-experiment, and statistic/estimator suppliers used in the local interfaces. The finite conditioning lemma constructs the required version directly; no general conditional-expectation existence theorem or axiom of choice is invoked.
- All proof arguments are finite counting, finite weighted sums, and real algebra. No choice axiom is used or inherited by these local claims.
- General exposure mapping sufficiency is required for the HT exposure mean. The two-stage point-estimator theorem allows arbitrary within-group interference; it does not depend on stratified interference. Stratified interference enters only the separate variance-estimator claims.

## Source reading and retrieval

- Hudgens and Halloran, “Toward Causal Inference With Interference”: read the complete locally extracted article text, including §§2.1–4.2, Theorems 1–9, and Appendices A.1–A.9. The PMC page initially returned a browser challenge, so I searched alternatives and used the complete 12-page journal PDF at `https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf`; the complete relevant argument and variance proofs were inspected there and in the locally cached full text.
- Aronow and Samii, “Estimating Average Causal Effects Under General Interference”: read the complete 40-page author preprint for §§3–4 and Appendices A.2/A.4 (PDF pp. 4–11 and 29–30), including exposure probabilities, mapping sufficiency, Lemma 4.1, Proposition 4.2, and the cited proofs.
- Blair, Coppock, and Humphreys, *Research Design in the Social Sciences*: read §§18.9–18.10 and the relevant examples, including the change to the potential-outcome model and inquiry under spillovers, two-stage saturation designs, exposure mappings, and unequal exposure probabilities.
- Grinstead and Snell, *Introduction to Probability*, 2nd ed.: searched for the finite conditional-expectation treatment, downloaded the complete Dartmouth-hosted Chapter 4 and Chapter 6 PDFs, and read Chapter 4 §4.1 (printed pp. 133–134) and Chapter 6 §6.1 Definition 6.2 and Theorem 6.5 (printed pp. 239–240), including the full finite-partition theorem proof. These support the local conditional-expectation lemma.
- `source-fetch-check --stamp` on the finished batch coverage recorded **8/8** current source rows fetch-verified. Every harvested source heading/result has an explicit disposition. The A page has four independent treatments (Hudgens–Halloran, Aronow–Samii, Blair–Coppock–Humphreys, and Grinstead–Snell); the B page records the corresponding source harvest for its worked examples and counterexamples.

## Variance-estimator boundary

The design permits $1\le K_i^s<n_i$ and $1\le C<N$ for the point estimators. The source variance formulas additionally divide by $C_s-1$, $K_i^s-1$, and $(n_i-K_i^s)-1$. They are therefore undefined when one of the corresponding sample sizes is 1. `def-stratified-interference-design-based-variance-estimators` and `thm-stratified-interference-variance-estimators-conservative` retain the full point-estimator range and state variance-only guards: $C,N-C\ge2$, plus $2\le K_i^\psi\le n_i-2$ for the direct-effect within-group sample variances. The indirect, total, and overall variance estimators require the two group-arm sample sizes only. This is the smallest explicit well-definedness condition for the named formulas; no denominator was patched or treated as an unbiased estimator at sample size 1. The plan’s omission of these formula guards is recorded for owner reconciliation; the affected definition and theorem remain on the assigned A page.

## Final scoped checks and readiness

- Assigned dependency graph: all 15 manifest dependencies match item frontmatter; recomputation using local in-run suppliers and the inspected batch-12 supplier level 1 gives the declared levels 0, 2, 3, 4, 5 and 6 with no assigned cycles or label mismatches. The A and B page carrier lists and proof-contract scope match the manifest inventory.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-24.proof-contracts.json --strict`: **15/15**, 0 errors and 0 warnings.
- `node tools/coverage-checklist.mjs research/statistical-models-experiments-62-batch-24.coverage.json --require-destination`: **2 pages, 38 harvested results**, 0 errors and 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-24.coverage.json`: **8/8** source rows fetch-verified and resolved.
- `node tools/proof-layout.mjs` on all 15 explicitly changed items: **42 steps, 0 defects**. Scoped phase precheck: **11 proof-bearing items checked, 0 failed**.
- Scoped `content-policy`: **15 items, 0 errors, 0 warnings**. Focused `depcheck`: **15 items** and both assigned pages, **0 errors and 0 warnings**. `rendercheck`: **17 files, 0 errors and 0 warnings**. `prosecheck`: **17 files, 0 errors and 0 warnings**.
- `node tools/step1-decisions.mjs record` marked all **15/15** items `ready` with their direct dependencies and evidence; post-record hash validation closed all 15 records. These are authoring-readiness records, not independent approval.
- The dispatch’s shared batch-level scheduling input was `de7bceaad7c5129874c104898501839df003bd6552eacd004d81d4231e636832`. Adding the local level-zero lemma changed the assigned manifest; the owner should recompute the shared batch-level artifact once batch manifests settle. I did not edit that shared artifact.
- The run-wide `node tools/item-dependency-levels.mjs check --run statistical-models-experiments-62` exits 1 on findings outside this pair: empty inventories in batch 47 (`kriging-as-best-linear-prediction` and its examples page), one stale level in batch 16 (`def-central-composite-design`), and six stale levels in batch 45 (`def-random-field-stationarity-covariance-and-variogram`, `lem-random-field-covariance-kernel-is-positive-semidefinite`, `thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel`, `thm-order-two-field-variogram-is-conditionally-negative-definite`, `thm-continuous-stationary-field-covariance-has-bochner-measure`, and `ex-covariance-kernel-and-intrinsic-variogram-checks`). It reports no batch-24 errors; those other pairs’ manifests were left untouched.
