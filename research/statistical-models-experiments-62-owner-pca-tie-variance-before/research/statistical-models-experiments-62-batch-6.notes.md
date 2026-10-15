# Batch 6 — PCA and eigengap stability

## Planning and scope

- The active plan row and generated task agree on order 1928, category, A/B identities, and the six page-level prerequisites. The track design at research/plan-statistical-models-experiments-track.md L152 retains covariance-PCA, correlation-PCA, repeated-eigenvalue subspaces, the specified local eigengap inequality, the finite-fourth-moment sample covariance rate, and the listed B topics.
- The pair audit identifies the current assignment as SME-06 and its old source dossier as models-01/SME-04. The dossier's former page names and SME-04 label are stale; the current plan, plan-spec, owner direction, and audit pair row control placement. The source passages remain relevant, so only their content locators are reused.
- The plan-spec page row adds four named page prerequisites beyond the SME-01/02 shorthand in the track prose. They are retained verbatim in the batch manifest. In particular, the fixed-design regression page is a page-level prerequisite only: its actual first-moment fixed-design interface is not a premise of the iid random-vector sample theorem.
- The audited category-1 item interfaces def-parametric-statistical-model, def-estimand-on-a-statistical-model, and def-statistic-and-estimator are used in the PCA definition and sample-statistic well-definedness lemma. No perturbation or Davis–Kahan supplier is imported.

## Inventory and dependency levels

Batch 6 is dependency level 2 and requires batches 1 and 2 in research/statistical-models-experiments-62-batch-dependency-levels.json. Item inventory and logical deps were fixed in research/statistical-models-experiments-62-batch-6.pages.json before item authoring. Recomputed item levels, counting only in-run item dependencies:

| Level | Items |
|---:|---|
| 0 | thm-local-leading-eigenvector-stability-under-eigengap; thm-sample-centered-covariance-root-n-frobenius |
| 1 | def-covariance-and-correlation-principal-component-analysis |
| 2 | lem-pca-sample-covariance-is-a-measurable-estimator; thm-pca-leading-direction-maximizes-variance |
| 3 | thm-repeated-leading-eigenvalue-identifies-subspace; cor-pca-sample-leading-eigenspace-root-n-consistency |
| 1 (B) | cex-small-eigengap-allows-fixed-angle-rotation |
| 3 (B) | ex-covariance-and-correlation-pca-differ-after-rescaling |
| 4 (B) | ex-pca-tied-eigenvalues-and-sign-ambiguity |

No dependency cycle was found in the assigned inventory. Definitions and
intermediate results are present on the A page before their consumers.

## Supplier inspection

The actual bodies of batch-1 def-scientific-statistical-model-contract and
batch-2 def-fixed-design-linear-regression-model were inspected. Both are
draft definitions with no phase proof. The model-contract boundary is used to
separate an assumed law from empirical adequacy. Fixed-design regression is
not used in a random-sample claim. The in-run dependency evidence records
these bodies as inspected without claiming approval.

Published supplier bodies inspected include def-parametric-statistical-model,
def-estimand-on-a-statistical-model, def-statistic-and-estimator,
def-covariance-matrix-of-a-random-vector,
lem-finite-second-moment-covariance-matrix-is-well-defined,
def-sample-covariance-and-operator-norm-loss,
def-identically-distributed-and-iid-random-variables,
lem-measurable-functions-preserve-independence,
lem-variance-and-covariance-identities-for-random-variables,
cor-covariance-vanishes-under-independence,
cor-expectation-linearity-monotonicity-and-modulus-bound,
cor-markov-inequality-for-random-variables,
def-op-and-little-op-stochastic-bounds,
cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
thm-courant-fischer-min-max-principle,
def-operator-norm-on-a-finite-dimensional-inner-product-space,
def-euclidean-inner-product, and
thm-cauchy-schwarz-in-an-inner-product-space. The proof facts and actual
hypotheses used from these suppliers are transcribed in the proof contracts.
No AC assumption is needed.

## Source reading and disposition

- Springer, Multivariate Statistical Analysis in the Real and Complex Domains, Chapter 9: inspected the full 43-page official open-access PDF, including the complete relevant PCA and sample-PCA material, pp. 1–25, and reviewed the remaining distributional-eigenvalue section as out of scope. The required fetch checker could not stamp the official landing page or direct PDF: each received the initial attempt plus five retries and a cookie-consent wall. The full-book Vista mirror received six attempts and failed TLS verification. Their exact attempts, searches, and per-item alternative arguments/dependencies are preserved as dropped source-resolution records.
- NYU CIMS, Online Bayesian Data Analysis, Lecture Notes 8, Learning Signal Representations: fetched the full 24-page note and inspected the complete relevant PCA section, PDF pp. 8–12, for centered-data PCA, the variance quadratic form, empirical covariance, and finite-higher-moment Chebyshev consistency. The note does not prove the exact root-n Frobenius bound or the local perturbation inequality; those are proved locally.
- Mukherjee, Multivariate Analysis, Lecture 8: all four pages were inspected. It independently checks leading variance maximization, sample PCA, and covariance/correlation scaling. Its second-component proof is explicitly left as an exercise; no such argument is imported.
- Springer PDF p. 7 appears to contain an arithmetic typo in Example 9.2.1: it states Var(u_3)=2-sqrt(2)=lambda_3 after giving lambda_3=3-sqrt(2). That numerical line is out of scope and is excluded from source coverage.
- Source references in assigned items and the batch manifest point to the accessible full NYU lecture notes and Mukherjee notes. The source-resolution records retain Springer and Vista attempts and give complete item arguments/dependencies; dropping those URLs did not waive any mathematical obligation. The required source-fetch check reports 10/10 sources resolved, 4/10 fetch-verified, 2 newly stamped, and 6 documented drops. Exact URLs, locators, supported items, dispositions, and stamps are in research/statistical-models-experiments-62-batch-6.coverage.json.

## Mathematical checks and limitations

- The perturbation proof bounds the second perturbed eigenvalue by testing the Courant–Fischer minimum-maximum formula on the original top-vector orthogonal complement. It then solves the projected perturbed eigen-equation on that complement. Strict epsilon<g/2 is used to prove simplicity; the angle denominator is g-epsilon.
- The sample covariance rate uses the divisor n from the published sample-covariance definition. Its proof separates the oracle-centered covariance fluctuation from the sample-mean outer-product correction. It assumes fixed finite p, iid rows, and a finite fourth moment; it does not assume Gaussianity.
- The consistency corollary is local to a positive simple population eigengap and gives no finite-sample selected-component inference. The small-gap counterexample has epsilon=g/4, a perturbation norm tending to zero, and a fixed nonzero angle.
- The four-point rescaling example has covariance [[9,3],[3,4]], correlation [[1,1/2],[1/2,1]], and distinct leading lines. All finite calculations are proved in the example. No named finite-smoke registry check covers PCA eigenspaces, so no finite-smoke result is claimed.

## Checks and readiness

Check outputs and any run-wide blockers are appended after final scoped
validation. Readiness decisions are recorded separately per item with
tools/step1-decisions.mjs; those records are authoring dispositions, not
independent approval.

## Final scoped validation — 2026-10-15

- `node tools/tsx-run.mjs tools/author-check.mts statistical-models-experiments-62 6` passed: 9 proof-bearing items passed precheck; rendercheck accepted all 12 assigned item/page files; content policy reported 10 items with 0 errors and 0 warnings; strict proof-contract validation checked 10/10 items with 0 errors and 0 warnings. The receipt is `research/statistical-models-experiments-62-author-check-6.json`.
- `node tools/proof-layout.mjs` on the 10 assigned item files passed with 25 steps and 0 defects.
- `node tools/depcheck.mjs --items-file research/statistical-models-experiments-62-batch-6.item-scope.json --json` passed with 0 errors and 0 warnings across the selected 10 items and their 889-item/287-page prerequisite closure.
- Scoped `dependencyLevels` over batches 1, 2, and 6 checked 6 pages and 24 items with no errors. Batch 6 levels are 0: local eigengap and sample covariance rate; 1: PCA definition and small-gap counterexample; 2: sample-map measurability and variance maximum; 3: repeated-eigenvalue result and sample consistency corollary, plus the B rescaling example; 4: tied-eigenvalue/sign example.
- Manifest, contract-scope, A/B page inventories, and coverage-page inventories matched: 10 unique items (7 A, 3 B), with 0 mismatches. `coverage-checklist` reported 52 harvested results, 0 errors, and 2 `coverage-low-yield` warnings asking Alpha to confirm out-of-scope dispositions (6/37 on A and 2/15 on B). These warnings are recorded for handoff; every harvested result has a disposition and item arguments/dependencies remain complete.
- Final `source-fetch-check` passed with 10/10 sources resolved: 4/10 fetch-verified and 6 documented drops. The accessible NYU and Mukherjee notes are the two inspected full lecture-note treatments; failed Springer/Vista attempts and alternatives remain preserved in coverage.
- `step1-decisions record` marked all 10 assigned items `ready` with their direct dependencies and proof/placement evidence. A hash-bound readback confirmed 10/10 records closed. These are Step 1 handoff records, not independent acceptance.
