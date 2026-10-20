# Batch 92 — Sketched kernel learning and certified approximate solves

Run: `machine-learning-all-101-2026-10-19`  
Owner-authoring direction: `research/machine-learning-all-101-2026-10-19-owner-authoring-direction.md`  
Current batch-level input: `research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json`, input SHA-256 `c50e15a536f4f5705ece38529e7fce7c1a084944aece5c1f2cf9ac4f468f12d4`.

## Scope and plan comparison

Owned pair: `sketched-kernel-learning-and-certified-solves` and its examples companion. The current plan and the target `research/plan-spec.json` records agree on the A/B page IDs, order 2978/2979, category, four page prerequisites, five planned A-page interfaces, deterministic proof route, warnings, and four promised example families. No substantive design conflict was found. The plan-spec description records source digest `56d0af245eb83466ff732c53cc9ed87015121a9a56cbbc4e744fffea7af72d36`; the current whole-file digest of `research/plan-machine-learning-track.md` is `e0b139460972f1a07b1d984dd3a4389c73611df73f66db7989e3ec41112caddf`. The digest scope is not specified in the row, so I compared the actual current ML-84 text and did not infer a content change from the different whole-file digest. The older refresh splice support carries another digest (`7c2cab10727e075342eb53966069cd45e44c2c7beaea1361077898cdef13b219`); it was not used to override the current plan.

The planned five item IDs are present. Two additional A-page results were added because the declared argument needs (i) an explicit inverse-norm/resolvent lemma to make every shifted system well-defined and support both stability estimates, and (ii) a choice-free proof that the stated `tau=n lambda` system is the unique minimizer of the specified mean-square RKHS objective. The latter avoids importing the optional AC-dependent GP interpretation into the deterministic core.

## Item inventory and dependency levels

The scaffold manifest was completed before item carriers were written. Its batch level remains 1 with in-run prerequisite batches 15 and 16. Item levels use the run-wide rule: 0 without in-run item suppliers, otherwise one plus the maximum in-run supplier level.

| Item | Level | In-run item dependencies |
|---|---:|---|
| `def-regularized-kernel-prediction-system` | 1 | `def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces` (batch 15, level 0) |
| `lem-regularized-gram-matrix-inverse-bound` | 2 | `def-regularized-kernel-prediction-system` (level 1) |
| `thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective` | 3 | Definition (level 1), inverse-bound lemma (level 2), batch-15 PSD-kernel definition (level 0) |
| `thm-kernel-ridge-gram-perturbation-bound` | 3 | Definition (level 1), inverse-bound lemma (level 2) |
| `thm-kernel-ridge-residual-prediction-certificate` | 3 | Definition (level 1), inverse-bound lemma (level 2) |
| `alg-nystrom-kernel-ridge-fit` | 4 | Definition (level 1), inverse-bound lemma (level 2), residual theorem (level 3) |
| `rem-statistical-and-numerical-kernel-errors` | 5 | Batch-16 GP observation model (level 0), batch-16 GP/KRR theorem (level 3), local KRR theorem and stability results (level 3), algorithm (level 4) |
| `ex-kernel-ridge-singular-and-zero-gram-matrices` | 4 | Definition (level 1), inverse-bound lemma (level 2), KRR minimizer theorem (level 3) |
| `ex-kernel-ridge-nystrom-exact-range` | 4 | Definition (level 1), Gram perturbation theorem (level 3) |
| `ex-kernel-ridge-small-regularizer-amplifies-coefficient-error` | 4 | Definition (level 1), Gram perturbation theorem (level 3) |
| `ex-training-gram-does-not-control-test-prediction` | 4 | Batch-15 PSD-kernel definition (level 0), local definition (level 1), KRR minimizer theorem (level 3) |

The external Nyström, Moore–Penrose, spectral, and Gaussian-rangefinder suppliers do not raise item levels. No item dependency cycle was identified.

## Mathematical route and boundaries

- `tau=n lambda` is derived for the stated mean-square objective. The proof writes `f0=sum_i a_i k(.,x_i)`, expands `J(f0+h)-J(f0)` for arbitrary `h`, and cancels the linear terms using `y-Ka=tau a`. The strict `lambda ||h||^2` term proves uniqueness. This proof uses no choice and does not rely on the representer theorem's conditional existence claim.
- The inverse-bound lemma diagonalizes each finite real PSD matrix, proves the shifted eigenvalues are at least `tau`, and derives the resolvent identity and norm estimate directly.
- The perturbation theorem first proves the generic two-PSD-matrix bounds. Its Nyström specialization uses the published PSD/order theorem and the separate deterministic residual theorem only under `Omega_1=U_1^T S` full row rank. No sampling distribution is needed for that deterministic bound.
- The algorithm uses exact-real conjugate gradients, caps the loop at a finite iteration budget, and returns both the Nyström-system residual and the original-system residual. Its `certified` status requires both residual thresholds; a budget exit or an exactly solved Nyström system with excessive original residual is explicitly uncertified.
- The optional finite GP posterior interpretation is confined to the remark and imports the current GP/KRR supplier's AC hypothesis. The randomized expected-error context is a separate Countable-Choice branch. Neither axiom is used by the deterministic matrix arguments.
- The four B-page examples cover zero/singular Gram matrices, exact range capture, coefficient sensitivity as `tau` decreases, and equal training Gram matrices with different test cross-kernels. No example or theorem claims a statistical risk bound or an out-of-sample bound from training-Gram error alone.

## Supplier inspection and cross-batch status

Published Nyström suppliers were read in full: `def-psd-nystrom-approximation`, `lem-nystrom-square-root-projector-identity`, `thm-psd-nystrom-order-and-exactness`, and `thm-nystrom-deterministic-spectral-residual-bound`. The last theorem's hypotheses include a finite PSD matrix, an orthonormal eigenbasis split, a conformal sketch, and full row rank of the leading block `Omega_1`; the proof establishes the spectral residual bound under that premise. The randomized low-rank page and the real/normalized-complex Gaussian expectation theorem bodies were also read. Those conclusions are expectations for their stated Gaussian laws and dimensions; they do not certify arbitrary sketches or per-draw errors.

The batch-15 supplier bodies `def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces`, `thm-finite-sample-representer-theorem-in-an-rkhs`, and `lem-positive-semidefinite-gram-matrix-has-euclidean-feature-factorization` are draft items. Their actual relevant statements/proofs were inspected. The finite-sample representer theorem assumes a minimizer exists; this batch proves existence and uniqueness directly rather than relying on that conditional theorem. The ordinary full-run Step-1 snapshot has no outstanding batch-15 rows, so the used PSD-kernel/RKHS definition and representer supplier are current-ready. The PSD-kernel/RKHS definition is used by the local objective theorem and the cross-kernel example.

The batch-16 supplier bodies `def-gaussian-process-regression-observation-model` and `thm-gp-regression-kernel-ridge-posterior-mean-equivalence` are draft items. I also inspected the GP/KRR theorem's transitive suppliers `cor-gp-regression-posterior-predictive-law` and `lem-gp-regression-observed-covariance-invertibility`, plus their stated Gaussian conditioning and covariance hypotheses. The GP/KRR theorem states AC for the GP construction/posterior branch, uses observation covariance `K+R`, and requires the inverse to exist; with `R=tau I` and `tau>0`, the local inverse-bound lemma verifies that condition. The optimization part of that supplier's proof is choice-free, but this batch uses its GP comparison only in the conditional remark. In the ordinary full-run Step-1 snapshot, the batch-16 records for `def-gaussian-process-regression-observation-model`, `lem-gp-regression-observed-covariance-invertibility`, `thm-gp-regression-log-marginal-likelihood`, `cor-gp-regression-posterior-predictive-law`, `rem-gp-regression-computation-and-scope-caveats`, and `thm-gp-regression-kernel-ridge-posterior-mean-equivalence` all have `decision: ready, owner: true` records but are stale: each reports `Item or dependency changed; record current readiness`. These owner records are untouched. The exact unresolved GP claim is the conditional posterior-mean interpretation in `rem-statistical-and-numerical-kernel-errors`, requiring AC, a real RKHS with reproducing kernel sections, zero mean, independent noise covariance `tau I`, and positive-definite observed covariance. Its matrix condition follows from the local inverse-bound lemma.

Cross-batch ledger rows are in `research/machine-learning-all-101-2026-10-19-batch-92.cross-batch-dependencies.json`. Published Nyström and randomized-low-rank page uses are verified from current carriers. Batch-15 RKHS page/item uses are verified by the full-run snapshot. The batch-16 GP page and direct GP/KRR item uses remain open due stale owner readiness records; draft status alone was not treated as a prohibition or as acceptance, and no owner record was overwritten.

## Source reading

| Source | Locator inspected | Supported items and disposition |
|---|---|---|
| Martinsson & Tropp, *Randomized Numerical Linear Algebra: Foundations & Algorithms*, https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf | Theorem 11.5, §11.4.2, printed p. 47; §14.2, pp. 62–63; §19.1.6, p. 87 | Nyström formula/projector representation supports the algorithm and perturbation specialization; the real Gaussian theorem supports only the expected-error caveat; KRR and test-predictor formulas are contextual, with source-specific parameter notation not used for local scaling. |
| Gittens & Mahoney, *Revisiting the Nyström Method*, https://www.jmlr.org/papers/volume17/gittens16a/gittens16a.pdf | Lemma 1, Theorem 1, Theorem 2, §4.1.1, printed pp. 42–43 | PSD Nyström projection/order and deterministic residual; Theorem 2's full-row-rank leading-sketch premise is preserved. |
| Rasmussen & Williams, *Gaussian Processes for Machine Learning*, https://gaussianprocess.org/gpml/chapters/RW6.pdf | §§6.2.1–6.2.3, printed pp. 132–135, including (6.19)–(6.20) | RKHS squared-error objective and coefficient system support the local mean-square normalization; optional GP comparison remains conditional. |
| Axler, *Linear Algebra Done Right*, 4th ed., https://linear.axler.net/LADR4e.pdf | Real spectral theorem, Theorem 7.29, printed pp. 244–245; positive-operator characterization, Theorem 7.38, pp. 251–252 | Finite-dimensional PSD eigenvalue argument supports the local inverse-bound lemma. |

Full-text retrieval stamps are recorded in `research/machine-learning-all-101-2026-10-19-batch-92.coverage.json`. `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-92.coverage.json --stamp` passed with 4/4 sources verified and no drops. No retrieval failure or source-drop decision occurred, so no `source_resolution` recovery record was needed.

## Validation and readiness

The following scoped checks passed after the final content edits:

- `node tools/content-policy.mjs research/machine-learning-all-101-2026-10-19-batch-92.pages.json --json`: 11 items, 0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file /tmp/batch-92-item-selection.json --json`: all 11 items and both pages checked, 0 errors, 0 warnings; dependency closure included 1,678 items and 327 pages.
- `node tools/rendercheck.mjs <the 11 explicit item files and 2 page files> --json`: 13 files checked, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-92.proof-contracts.json --strict`: 11/11 contracts, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts <the 8 explicit proof-bearing items> --json`: 8 checked, 0 failed; the 3 definition/algorithm/remark items were not applicable.
- `node tools/proof-layout.mjs <the 11 explicit item files>`: 11 items, 21 steps, 0 defects.
- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-92.coverage.json`: 4/4 sources fetch-verified.

The required run-wide `node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` exited 1 on 79 empty scaffold inventories in other pairs; no batch-92 item was named. `node tools/batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` reported `Stale batch dependency levels ...; recompute before authoring`. The batch-92 manifest still computes its declared item levels locally as listed above; the shared run-level artifact was not rewritten because the owner controls shared scheduling evidence.

The ordinary per-item recorder wrote 10 `ready` decisions and 1 `escalated` decision for this batch, with no `--owner` flag and no overwritten escalation. The ready items are `def-regularized-kernel-prediction-system`, `lem-regularized-gram-matrix-inverse-bound`, `thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective`, `thm-kernel-ridge-gram-perturbation-bound`, `thm-kernel-ridge-residual-prediction-certificate`, `alg-nystrom-kernel-ridge-fit`, and all four B-page examples. `rem-statistical-and-numerical-kernel-errors` is escalated for the stale batch-16 GP owner records described above; its GP-dependent claim remains authored and awaits owner reconciliation.

A fresh ordinary full-run `node tools/step1-decisions.mjs check --run machine-learning-all-101-2026-10-19` snapshot returned 830 items, 567 current-ready, and `closed:false`. All ten batch-92 ready records are current in this snapshot; the remark escalation remains current. The run-wide `node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` still fails on 79 empty scaffold inventories in other pairs and names no batch-92 item. The run-wide batch-level check still reports the shared batch dependency input stale. These shared scheduling artifacts and other pairs' inventories remain owner-controlled and were not changed.
