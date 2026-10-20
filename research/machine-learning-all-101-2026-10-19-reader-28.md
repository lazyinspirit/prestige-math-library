# Step 3a reader report — batch 28

Run: `machine-learning-all-101-2026-10-19`  
Role: `reader-28`

## Opened inventory

Pages:

- `library/machine-learning/ml02-differential-privacy.md` (A)
- `library/machine-learning/ml02-differential-privacy-examples.md` (B)

Assigned A-page items, reviewed in their internal dependency order:

- `def-differential-privacy-and-adjacency`
- `def-laplace-distribution`
- `def-global-l1-sensitivity`
- `thm-laplace-density-from-exponential-law`
- `lem-laplace-product-density`
- `alg-laplace-mechanism`
- `thm-laplace-mechanism-privacy`
- `def-exponential-mechanism-utility-sensitivity`
- `alg-exponential-mechanism`
- `thm-exponential-mechanism-privacy-and-utility`
- `lem-dp-test-function-extension`
- `thm-dp-postprocessing`
- `lem-dp-pure-privacy-loss-kl-bound`
- `lem-dp-approximate-kernel-purification`
- `thm-basic-adaptive-composition`
- `thm-advanced-adaptive-composition-standard-borel-outputs`
- `lem-dp-joint-measure-purification`
- `thm-advanced-adaptive-composition-arbitrary-measurable-outputs`
- `thm-basic-and-advanced-composition`
- `rem-differential-privacy-scope-and-limitations`

Assigned B-page examples:

- `ex-add-remove-noisy-count`
- `ex-finite-range-private-selection`
- `ex-postprocessing-private-noisy-count`
- `ex-record-level-versus-client-level-adjacency`

I checked the direct dependency statements used by these items, including the measurable-kernel, product-measure, integration, Radon–Nikodym, KL, standard-Borel, exponential/logarithm, and Azuma suppliers. I read the full proof of `lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels`, which is used by the standard-Borel composition route. I checked the relevant source passages in Dwork–Roth, including Lemma 3.17, Theorem 3.20, and the Laplace mechanism argument, and Vadhan's advanced-composition discussion. The local proofs, not the discrete-output source arguments, establish the arbitrary-measurable-output claims.

Both pages have frontmatter only, preserve their inventories and metadata, and set `page_layout: compact-v1`. No TikZ or other diagrams occur in the assigned scope.

## Repair and evidence

`items/alg-exponential-mechanism.md`, Fact F2 and `deps`: the verification used strict positivity of every exponential weight to conclude that the normalizer is positive. The dependency on `def-real-exponential-function-and-e` supplies the finite real-valued power-series definition, but does not establish positivity. I added `cor-exponential-reciprocal-and-positivity` to the algorithm's dependencies and cited its statement in F2. That published statement gives `exp(x)>0` for every real `x`; this supplies the missing justification for every weight and for division by `Z_D`.

I added the matching F2 citation to `research/machine-learning-all-101-2026-10-19-batch-28.proof-contracts.json`. The item had no `verification.judge` record to remove. Checks after the repair: reflow reported the item unchanged; precheck passed; the requested proof-layout command reported 1 item, 2 steps, 0 defects.

No other item or page prose was edited.

## Unedited findings and workflow note

I found no remaining mathematical defect in the assigned items or pages. In particular, the current `thm-advanced-adaptive-composition-arbitrary-measurable-outputs` proof uses `lem-dp-joint-measure-purification` to supply the arbitrary-space joint-measure step, and `thm-basic-and-advanced-composition` applies that result with the required AC and parameter conditions. These current proofs close the arbitrary-output gap recorded in the older authoring note.

The batch proof-contract file still lists `thm-basic-and-advanced-composition` under `excluded_escalations` as unresolved. That metadata conflicts with the current authored dependency and proof. The dispatch manifest also retains the pre-repair dependency list for `alg-exponential-mechanism`, without the newly added published positivity supplier. I updated the in-flight carrier and its proof-contract citation as directed, but left these workflow snapshots for owner/native reconciliation. They are not unedited mathematical defects and therefore are not included in the findings JSON.

## Page verdicts and blocker

- `ml02-differential-privacy` (A): sound after the F2 repair above; no remaining item or page-prose defect.
- `ml02-differential-privacy-examples` (B): the four examples correctly instantiate the reviewed sensitivity, Laplace, exponential-mechanism, and postprocessing results; no remaining defect.

Blocker: none for this reader review. The stale `excluded_escalations` metadata is recorded above for owner reconciliation.
