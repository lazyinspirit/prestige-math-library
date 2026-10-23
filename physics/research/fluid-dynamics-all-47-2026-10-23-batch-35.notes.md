# Batch 35 authoring notes — `fd-da01`

Run: `fluid-dynamics-all-47-2026-10-23`  
Scope: A/B pair `fd-da01` / `fd-da01-examples` only.

## Controlling design and plan comparison

- The controlling design is `research/plan-fluid-dynamics-refresh-track.md` § “Assimilation and finite inverse identifiability” (lines 1152–1176). It assigns A `fd-da01` (order 675) and B `fd-da01-examples` (order 676), category `fluid-dynamics-mathematics`, library `mathematics`, and four A carriers plus one B example. Its prose declares the three page requirements `data-assimilation-variational-and-ensemble-methods`, `kalman-filtering`, and `the-spectral-theorem-and-singular-value-decomposition`.
- The embedded inventory in that same design section has `"requires": []`, conflicting with its surrounding prose, current plan, task, and current A-page manifest. The plan controls: the authored A page keeps all three declared imported page requirements. No item claim or prerequisite was weakened to resolve this conflict.
- The owner direction `research/fluid-dynamics-all-47-2026-10-23-owner-authoring-direction.md` is absent. No other design/plan conflict was found.
- Current A/B page status remains `draft`; both page files contain YAML frontmatter only, no Markdown body or summary. The page cap is not material (four A items and one B item).

## Item inventory, dependencies, and levels

All five items use `domain: mathematics`, `library: mathematics`, and `mathematical-premise` roles for their declared suppliers. No empirical observation or physical public claim is made.

| Item | Claim carried | Direct dependencies | Level / placement |
|---|---|---|---|
| `def-fd-fluid-coefficient-observation-model` | Finite coefficient bases, linear observation/transition matrices, the independent Gaussian model with singular PSD covariances, positive-definite innovation solves, one-step divisor-N EnKF update, and a separate deterministic weighted inverse interface. The definition explicitly treats truncation, linearization, and noise selection as modelling choices. | `alg-kalman-filter`; `alg-ensemble-kalman-filter`; `def-linear-gaussian-state-space-model-with-independent-noises`; `def-axiom-of-choice` | 0; A page |
| `prop-fd-linear-fluid-filter-interface` | Conditional exact Kalman filtering for the declared finite linear-Gaussian model at every observation history, allowing singular state/noise covariances and requiring only positive-definite solved innovations. | `def-fd-fluid-coefficient-observation-model`; `def-linear-gaussian-state-space-model-with-independent-noises`; `thm-kalman-filter-is-exact-posterior`; `def-axiom-of-choice` | 1; A page |
| `rem-fd-fluid-enkf-scope` | Fixed-horizon, linear-Gaussian divisor-N EnKF mean/covariance and bounded-Lipschitz empirical-average convergence in probability. The statement defines its model, independent ensemble draws, norms, and the excluded covariance-modified/transport procedures; it makes no nonlinear or finite-N posterior-exactness claim. | `def-fd-fluid-coefficient-observation-model`; `alg-ensemble-kalman-filter`; `thm-perturbed-observation-ensemble-kalman-large-ensemble-limit`; `def-axiom-of-choice` | 1; A page |
| `prop-fd-finite-observation-identifiability` | For a nonzero coefficient subspace and SPD weighting covariance, the whitened minimum gain is positive exactly for injectivity; full-rank weighted least squares is unique and obeys the stated pointwise realized-error bound. Rank deficiency gives a nonzero invisible coefficient direction. | `def-fd-fluid-coefficient-observation-model`; `thm-singular-value-decomposition`; `thm-non-negative-square-root-exists-and-is-unique` | 1; A page |
| `ex-fd-two-mode-one-sensor` | For `G=[1 0]`, `(0,1)` is a nonzero kernel vector, so adding any nonzero multiple leaves the predicted datum unchanged. | `prop-fd-finite-observation-identifiability` | 2; B page |

The scoped recomputation from the current batch manifest gives item levels `0,1,1,1,2` and batch 35 level 0 with no in-run batch suppliers. B’s page prerequisite `fd-da01` is within this same batch. There is no cross-batch item edge; the three external page edges are recorded in `research/fluid-dynamics-all-47-2026-10-23-batch-35.cross-batch-dependencies.json`.

## Supplier interface and readiness inspection

The three required pages are published and their current files match `research/math-imports.json` pins:

- `data-assimilation-variational-and-ensemble-methods`, SHA-256 `0548b48d2421d2ecd5ef80f0d6ad13b23b17ea517d58317dddbe8e49cae4aef1`; its current page lists the EnKF algorithm and the perturbed-observation large-ensemble theorem.
- `kalman-filtering`, SHA-256 `6889615e5aaa285333b8d476157983173df9d2242cd71de2aef42773df88575c`; its current page lists the Kalman algorithm and exact-posterior theorem.
- `the-spectral-theorem-and-singular-value-decomposition`, SHA-256 `6fc99ab099d2220bfa947b946d3fe27ba66d39ebeea06489c149c1eabbf1771b`; its current page lists the SVD and non-negative square-root theorems.

The current direct item suppliers are published. I inspected the complete current relevant statements and proofs for `alg-kalman-filter`, `alg-ensemble-kalman-filter`, `def-linear-gaussian-state-space-model-with-independent-noises`, `def-axiom-of-choice`, `thm-kalman-filter-is-exact-posterior`, `thm-perturbed-observation-ensemble-kalman-large-ensemble-limit`, `thm-singular-value-decomposition`, and `thm-non-negative-square-root-exists-and-is-unique`. The exact Kalman theorem assumes AC, a finite linear-Gaussian model, mutually independent Gaussian noises, PSD state/noise covariances, and PD solved innovations; its proof constructs an everywhere-defined filtering-kernel version, without claiming pointwise uniqueness on null histories. The EnKF theorem assumes a fixed finite horizon, linear-Gaussian dynamics/observations, fixed data, iid initial members, independent per-member process/observation perturbations, PD observation covariance, and divisor-N covariance; its proof gives the stated fixed-time probability limits, not a uniform-time or nonlinear result. The SVD supplier supplies complete orthonormal bases and zero directions; the square-root supplier supplies the unique PSD square root. The published SVD carrier has a current repair receipt, and the square-root theorem is audited.

I queried `loadStep1Record` and `step1Decision` for this run after the final carrier edits. The run has 168 currently inventoried items; all five newly authored items had no prior readiness record. That expected absence is not a supplier gap. No supplier is escalated: the imported page pins and complete supplier arguments above match the actual uses. Draft/approval labels were not used as a substitute for reading the supplier proof.

## Source reading and resolution record

The standard source ledger is `research/fluid-dynamics-all-47-2026-10-23-batch-35.coverage.json`. It records exact URLs, locators, supported items, harvested-result dispositions, fetch stamps, and each dropped route’s attempts, searches, and item/dependency alternatives under `source_resolution`.

| Source | Full-text locator and use |
|---|---|
| K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, *Data Assimilation: A Mathematical Introduction*, [full PDF](https://arxiv.org/pdf/1506.07825v1) | Ch. 2 §§2.1, 2.4 (finite state/observation model and filtering histories); Ch. 4 §4.1 (Kalman equations and conditional Gaussian update); §4.2.3 (perturbed-observation EnKF). Supports the coefficient interface and the filtering/EnKF context. Its KF treatment assumes strictly positive covariances and full-row-rank observation matrix; the stronger singular-covariance claim uses the exact inspected imported theorem. Its EnKF uses divisor N−1; the local remark follows the imported divisor-N theorem. |
| Sheldon Axler, *Linear Algebra Done Right*, fourth edition, [full textbook PDF](https://linear.axler.net/LADR4e.pdf) | §7E, pp. 270–278: singular values, SVD coordinates, and kernel directions for the finite-dimensional identifiability proof and example. |
| Jan Mandel, Loren Cobb, and Jonathan D. Beezley, “On the Convergence of the Ensemble Kalman Filter,” [full paper](https://arxiv.org/pdf/0901.2951v2) | §§3–4, Theorem 1 and Corollary 1, pp. 4–7: shared-gain perturbed EnKF and linear-Gaussian large-ensemble convergence. The local claim uses the exact imported theorem for its full finite-horizon/divisor-N interface. |

The A page has three active independent full-text treatments, including the Axler textbook; the B page has Axler and Law. Five additional routes remain documented as dropped, not as mathematical gaps: the two Springer chapter HTML routes and their two direct-PDF routes, plus Särkkä’s Aalto book PDF route. The Springer sources were inspectable in the browser, but each publisher route exhausted its initial fetch and five retries on cookie/interstitial responses; the Särkkä initial request timed out and five alternatives failed or were incomplete. Search results, attempt histories, and per-item replacement arguments/dependencies are retained in the coverage file. No final item relies on a dropped route; the complete imported proofs and stamped Law/Axler/Mandel sources cover the mathematics.

Final retrieval check: 5/10 page/source entries fetch-verified (the A/B page-specific entries share three unique URLs), 10/10 resolved, with five documented drops. `sourceResolutionErrors` returned no errors. Coverage checklist: 2 pages, 8 harvested results, 0 errors, 0 warnings.

## Proof contracts and final scoped checks

`research/fluid-dynamics-all-47-2026-10-23-batch-35.proof-contracts.json` contains contracts for the two propositions and B verification. Each records actual steps/claims/inputs, exact supplier excerpts, boundary cases, and a finite symbolic check. Definitions and the remark have no proof section and therefore need no proof contract.

- `proof-contract.mjs --strict`: 3/3 proof-bearing items, no errors or warnings.
- `proof-contract-coverage.json`: 5 manifest items, all 3 proof-bearing items covered, no errors. The standard whole-run coverage command stops at empty inventory `fd-f03`; this artifact was generated by running the same coverage function on an isolated temporary root containing the exact current batch-35 manifest and item files.
- `proof-layout.mjs` on the five explicitly changed items: 5 items, 8 steps, 0 defects.
- `precheck.mts` on the five changed items: 3 proof-bearing items checked, 0 failures; definition and remark are not applicable.
- `rendercheck.mjs` on all five items and both page files: clean; KaTeX spans and frontmatter parse.
- `content-policy.mjs` on the batch manifest: 5 items, 0 errors, 0 warnings.
- `manifest-deps.mjs` on the batch manifest: 5 items, 0 normalized, 0 errors.
- Focused `depcheck.mjs` on the five item IDs: 0 errors and 0 warnings, including both pair pages and the transitive prerequisite closure.
- Scoped dependency recomputation: no errors; item levels `0,1,1,1,2`, batch 35 level 0.

The full-run `batch-dependency-levels.mjs check` reports a stale shared input hash. Its recorded SHA-256 is `7e205a2a68f91fc7420f172b4a5ece17234f82212e0fc792b5bd7e5481340e7f`; current recomputation gives `16d2f9df7f696f82b31d830497a9b544a5caf7893fbb7edaafab043a410accab`. The recorded and recomputed batch rows are identical, including batch 35 at level 0, but I left the shared run-level file to its owner. The whole-run item-level check is blocked by other batches’ empty scaffold inventories and existing level mismatches (including `thm-fd-x07`, `thm-fd-x10`, `post-fd-boltzmann-model`, and the `fd-f03` scaffold pair); it reports no batch-35 item error. These other batch manifests and shared scheduling records were not edited.

## Readiness

All available authoring and scoped checks are complete. After recording, a fresh `loadStep1Record` plus `step1Decision` query returned `closed: true`, `decision: ready` for all five items, with current hashes and the exact direct dependency IDs listed above. Each record has `owner: false`; this is Step-1 authoring readiness only, not independent review or publication.
