# Batch 23 authoring notes — ML-22

Run: `machine-learning-all-101-2026-10-19`  
Assignment: `ml02-latent-representations` and `ml02-latent-representations-examples`  
Batch level: 0; no in-run prerequisite batches. Scheduling input read: `424a2623b4a02ffac30bca34f1e893445df04b9a3a30237f39748f9397b2e4a0`.

## Plan comparison and conflicts

- Read the full current ML-22 design in `research/plan-machine-learning-track.md` §ML-22 and the current `ml02-latent-representations` / B companion entries in `research/plan-spec.json`.
- The current plan and current plan-spec design agree on the covariance factor model, square ICA, orthogonal whitening, the “at most one Gaussian” identifiability claim, the Poisson NMF objective and multiplicative updates, their no-global-optimum boundary, and the example scope. No plan/spec content conflict was found.
- The page-level requirement is the published page `the-spectral-theorem-and-singular-value-decomposition`; the design names its exact item interfaces `thm-singular-value-decomposition` and `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`. Both items are in that required page, so these are consistent page/item-level declarations.
- `research/machine-learning-all-101-2026-10-19-owner-authoring-direction.md` is absent.
- The current plan requires a local proof of ICA identifiability. Neither cited book supplies that proof; the source limitation is recorded below and is not treated as permission to replace a proof with a citation.

## Inventory, dependencies, and item levels

Item levels count only logical suppliers owned within this batch. Published suppliers outside the run do not increase the level. The A-page inventory is authored before B consumers, and each row in the page manifest records its explicit `deps` and `dependency_level`.

| Item | Page | In-run dependencies | Level |
|---|---|---|---:|
| `def-covariance-factor-model` | A | none | 0 |
| `def-square-ica-model` | A | none | 0 |
| `def-poisson-nmf-model` | A | none | 0 |
| `prop-covariance-factor-model-rotation-ambiguity` | A | `def-covariance-factor-model` | 1 |
| `lem-ica-whitening-reduces-mixing-to-orthogonal` | A | `def-square-ica-model` | 1 |
| `prop-poisson-nmf-factorization-invariances` | A | `def-poisson-nmf-model` | 1 |
| `prop-poisson-nmf-loglikelihood` | A | `def-poisson-nmf-model` | 1 |
| `thm-square-ica-identifiability-at-most-one-gaussian` | A | `def-square-ica-model`, `lem-ica-whitening-reduces-mixing-to-orthogonal` | 2 |
| `alg-poisson-nmf-multiplicative-updates` | A | `def-poisson-nmf-model`, `prop-poisson-nmf-loglikelihood` | 2 |
| `lem-poisson-nmf-updates-preserve-positivity` | A | `def-poisson-nmf-model`, `alg-poisson-nmf-multiplicative-updates` | 3 |
| `ex-ica-sign-permutation-ambiguity` | B | `def-square-ica-model` | 1 |
| `ex-gaussian-factor-rotation` | B | `def-covariance-factor-model`, `prop-covariance-factor-model-rotation-ambiguity` | 2 |
| `ex-poisson-nmf-nonunique-factorizations` | B | `def-poisson-nmf-model`, `prop-poisson-nmf-factorization-invariances` | 2 |
| `ex-poisson-nmf-zero-count-update` | B | `def-poisson-nmf-model`, `alg-poisson-nmf-multiplicative-updates`, `lem-poisson-nmf-updates-preserve-positivity` | 4 |

The A-page includes the full assigned ICA identifiability statement even though its proof is escalated. The missing Darmois–Skitovich result is not declared as a usable dependency or supplier because no complete proof has been authored. The B ICA example verifies only sign/permutation invariance and does not consume or imply the missing uniqueness theorem. There are no new cross-batch edges or cycles. The authored inventory is 14 items, within the 100-item page limit.

## Actual supplier inspection

- `items/cor-real-spectral-theorem-for-self-adjoint-endomorphisms.md`: its statement gives an orthonormal eigenbasis for a finite-dimensional real self-adjoint endomorphism; the proof derives it from the real-normal block classification and the self-adjoint matrix criterion. This supplies the inverse square-root spectral decomposition used in whitening.
- `items/thm-singular-value-decomposition.md`: its statement applies to finite-dimensional real or complex inner-product spaces and its proof constructs orthonormal singular-vector bases. The real square invertible case gives positive diagonal singular values used in the whitening calculation.
- Read the direct definitions/results and proofs named in those suppliers: self-adjoint/normal endomorphisms, the orthonormal-basis matrix criterion, real-normal classification, singular-value definition and well-definedness, nonnegative-operator characterization, finite-dimensional orthonormal bases, and finite-dimensional orthogonal decomposition. The consumed branches are finite-dimensional and use no arbitrary choice axiom.
- These supplier bodies are prerequisite evidence only; no statement or proof was changed.

## Sources read and dispositions

### A-page treatments

- Trevor Hastie, Robert Tibshirani, and Jerome Friedman, *The Elements of Statistical Learning*, second edition, corrected 12th printing. Full author-linked PDF fetched through the current author homepage’s download wrapper; 764 PDF pages. Direct full-text URL: <https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS>. Read §14.6, printed pp. 553–554 (Poisson NMF model, likelihood, update equations, nonuniqueness, Exercise 14.23); §14.7.1, pp. 558–560 (covariance factor model and orthogonal covariance ambiguity); and §14.7.2, pp. 560–561 (ICA whitening and the non-Gaussian identifiability condition). The book explicitly assigns the NMF minorization proof to Exercise 14.23 and does not prove ICA identifiability. The authored NMF algorithm makes no likelihood-monotonicity or convergence claim.
- Aapo Hyvärinen, Juha Karhunen, and Erkki Oja, *Independent Component Analysis*. Full author-hosted PDF opened (503 pages). Read §7.2.2–7.2.3, printed pp. 152–154, including the square/invertible ICA restrictions, unit-variance sign/permutation ambiguities, and the explicit sentence that the identifiability proof is omitted as complicated. This independently corroborates the ICA model and caveat; it is not used as proof evidence.
- Daniel D. Lee and H. Sebastian Seung, “Algorithms for Non-negative Matrix Factorization,” NIPS 2000. Full 7-page paper opened at <https://www.cs.cornell.edu/courses/cs6241/2019sp/readings/Lee-Seung-2001-NMF.pdf>. Read §§2–4 and §6, including Theorem 2’s generalized-KL updates and its auxiliary-function proof. This supports the update convention; its convergence theorem is outside the authored claims.
- Exact-source qualification: the read ESL §14.7.2 passage states an all-non-Gaussian sufficient condition and describes Gaussian-subspace rotation ambiguity; it does not give the controlling plan’s exact “at most one Gaussian” boundary argument. The HKO book likewise presents non-Gaussianity restrictions and explicitly says the identifiability proof is omitted. The controlling plan’s exact at-most-one-Gaussian claim is preserved; neither passage is used as proof evidence.

### Failed proof-source recovery and owner escalation

- Candidate: M. P. Quine and E. Seneta, “The Generalization of the Kac–Bernstein Theorem,” *Probability and Mathematical Statistics* 19 (1999), 441–452. Candidate full-text URL: <https://www.math.uni.wroc.pl/~pms/files/19.2/Article/19.2.14.pdf>.
- Search alternatives included the official publication record, the full-text/abstract endpoints, the CiteseerX mirror, and searches for a complete Darmois–Skitovich proof and its characteristic-function argument. Five recovery attempts after the initial timeout failed: original PDF open timed out; secure direct and `www` retrievals failed certificate validation; the publication page timed out; the direct PDF returned a gateway timeout; the CiteseerX mirror returned 403. The exact timestamps were not exposed by the retrieval tools, so this log does not invent them. The source candidate is retained as owner-escalation in `research/machine-learning-all-101-2026-10-19-batch-23.coverage.json`.
- The affected claim is `thm-square-ica-identifiability-at-most-one-gaussian`. Its standard proof reduces to the scalar Darmois–Skitovich theorem: independent linear forms in independent real variables can share a source with nonzero coefficients only when that source is Gaussian. Proposed local supplier and placement: `lem-darmois-skitovich` on the A page, between the square-ICA definition/whitening lemma and the identifiability theorem. A complete local proof of that lemma remains unresolved. The theorem is therefore retained as an unproved draft obligation and marked escalated; no source statement is treated as a proof.

## Scope decisions and proof route

- Covariance nonidentifiability is stated at the covariance-model level. The worked Gaussian example separately verifies the exact rotational law symmetry for standard Gaussian factors. No claim says arbitrary non-Gaussian independent factors remain independent after rotation.
- ICA whitening is proved by the finite real SVD: if A=U Sigma V^T, then AA^T=U Sigma^2 U^T, so (AA^T)^(-1/2) A=U V^T, which is orthogonal. The supplier real spectral theorem justifies the symmetric inverse square root. No AC assumption is used.
- The ICA uniqueness claim is not weakened: it remains the full “at most one Gaussian” statement, with exact source/scale normalization and signed-permutation conclusion. It is not used by any other item until its missing local prerequisite is proved.
- The Poisson log-likelihood is derived from the independent Poisson pmf, with 0 log 0 = 0 and likelihood negative infinity when a positive count has zero rate. NMF update preconditions exclude zero rows/columns and use strictly positive starts; a local lemma proves all rates and denominators stay positive for every finite sweep.
- The multiplicative-update item defines exactly T finite sweeps. It claims no monotonicity, convergence, stationary-point, or global-optimality property.
- All A/B page bodies remain empty. There are no page summaries. A/B frontmatter and page manifests are being kept consistent.

## Validation and handoff log

- Before authoring, `node tools/batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` passed: 101 batches, maximum level 5; batch 23 is level 0.
- After changing this batch manifest, the run-wide scheduling input hash will need the owner’s normal post-drain recomputation. The batch graph itself gains no cross-batch edge; do not rewrite the other 100 manifests or engine state.
- Completed supplier definitions at level 0:
  - `def-covariance-factor-model`: probability space, finite-second-moment vectors, covariance and cross-covariance conventions, standardized factors, diagonal positive residual covariance, and the explicit zero-cross-covariance assumption. Source: ESL §14.7.1, printed pp. 558–560. Dependencies: none.
  - `def-square-ica-model`: equality-in-law convention, invertible square mixing matrix, mutually independent centered unit-variance sources, and the exact standard-normal/non-Gaussian convention. Sources: ESL §14.7.2, pp. 560–561; Hyvärinen–Karhunen–Oja §7.2.2, pp. 152–154. Dependencies: none.
  - `def-poisson-nmf-model`: admissible nonnegative count matrix with no all-zero row/column, nonnegative factors, rate matrix, and independent Poisson cell laws including the zero-rate boundary. Sources: ESL §14.6, pp. 553–554; Lee–Seung §§2–3, PDF pp. 1–2. Dependencies: none.
- These definition items have frontmatter-only draft carriers and empty page-body behavior is preserved.
- Completed covariance and whitening results:
  - `prop-covariance-factor-model-rotation-ambiguity` proves Cov(X)=AA^T+D and invariance under every orthogonal rotation A -> A R^T, S -> R S. Its statement distinguishes covariance-level ambiguity from preservation of any extra factor-independence condition. Dependency: `def-covariance-factor-model`, level 1. Source: ESL §14.7.1, printed pp. 558–560.
  - `lem-ica-whitening-reduces-mixing-to-orthogonal` proves positive definiteness of AA^T, constructs its symmetric inverse square root, proves uniqueness of that root by the real spectral theorem, and computes C^(-1/2) A = U V^T. Dependencies: `def-square-ica-model`, `thm-singular-value-decomposition`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`; item level 1. Sources: ESL §14.7.2, p. 561, and the exact published supplier bodies/proofs.
  - `thm-square-ica-identifiability-at-most-one-gaussian` preserves the full established signed-permutation uniqueness claim with the standardized-source convention. It has no Proof section because its needed scalar Darmois–Skitovich proof is unresolved; it is not used as a supplier and is marked for owner escalation.
- Completed Poisson NMF items:
  - `prop-poisson-nmf-loglikelihood` derives the joint likelihood from independent cell Poisson pmfs and handles (x=0, lambda=0) and (x>0, lambda=0) explicitly. Dependency: `def-poisson-nmf-model`, level 1. Sources: ESL §14.6, p. 553; Lee–Seung §3, PDF p. 2.
  - `prop-poisson-nmf-factorization-invariances` proves positive component rescaling and permutation leave every rate unchanged. Dependency: `def-poisson-nmf-model`, level 1. Sources: ESL §14.6, pp. 553–555; Lee–Seung §2, PDF pp. 1–2.
  - `alg-poisson-nmf-multiplicative-updates` specifies exactly T finite alternating W/H sweeps with positive initialization and explicit rate recomputation. It has no convergence or likelihood-monotonicity claim. Dependencies: `def-poisson-nmf-model`, `prop-poisson-nmf-loglikelihood`, level 2; well-definedness is recorded by `justified_by: [lem-poisson-nmf-updates-preserve-positivity]`.
  - `lem-poisson-nmf-updates-preserve-positivity` proves every finite update denominator and rate stays positive when each data row/column has a positive count and the initialization is strictly positive. Dependencies: the model and update algorithm, level 3.
- Completed B examples:
  - `ex-gaussian-factor-rotation` gives a 3 x 2 Gaussian factor example with a nontrivial orthogonal rotation and verifies equality of the observed law and covariance. Dependencies: the factor definition and rotation proposition, level 2.
  - `ex-ica-sign-permutation-ambiguity` uses two standardized Laplace sources and directly verifies sign/order invariance; it does not invoke ICA uniqueness. Dependency: the square ICA definition, level 1.
  - `ex-poisson-nmf-nonunique-factorizations` exhibits two strictly positive, inequivalent factorizations of the same 2 x 2 rate matrix. Dependencies: the model and scale/permutation result, level 2.
  - `ex-poisson-nmf-zero-count-update` calculates one exact sweep for X=[[0,1],[1,0]], including zero-count contributions and all positive intermediate rates. Dependencies: model, algorithm, positivity lemma, level 4.
- The A/B pages are now authored as YAML frontmatter only; their Markdown bodies are empty. No page summary or `page_layout` flag was authored.
- `node tools/item-dependency-levels.mjs` scoped through its `dependencyLevels` function on the two batch-23 page records reports 14 items, levels 0–4, and no errors. The batch manifest is ordered by item level within each page.
- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-23.coverage.json --stamp` stamped the ESL full PDF, Hyvärinen–Karhunen–Oja book, and Lee–Seung paper. It reports 3/4 source(s) fetch-verified and exits 1 only for the recorded Quine–Seneta owner escalation. The failed source was not retried beyond its five recovery attempts.
- Source-stamp result after the coverage correction: 3/4 sources are fetch-verified. ESL, Hyvärinen–Karhunen–Oja, and Lee–Seung all have successful full-text stamps; the fourth row is the explicit unresolved Quine–Seneta proof-source escalation, so the command exits 1 by design.
- Scoped item checks on the 14 manifest items:
  - Local `dependencyLevels` computation: 14 items, exact levels 0–4, no errors.
  - `node tools/content-policy.mjs research/machine-learning-all-101-2026-10-19-batch-23.pages.json --json`: 14 items, zero errors or warnings.
  - `node tools/depcheck.mjs --items-file /tmp/ml02-batch-23-item-scope.json --json`: all 14 items and both pages checked; zero errors or warnings; 718-item dependency closure checked.
  - Scoped statement-first inspection: 14 items, zero defects.
  - Precheck: 9 proof-bearing items, zero failures. Proof-layout: 9 items, 20 steps, zero defects. Rendercheck: 16 changed item/page files, all YAML and math passed.
  - Strict proof-contract validation: all 9 completed proof-bearing items checked; zero errors or warnings. The theorem item has no proof section and is excluded from the contract scope because it is escalated.
- Run-wide owner-controlled checks still cannot close this batch against the incomplete other-batch frontier:
  - `proof-contract-coverage.mjs --run machine-learning-all-101-2026-10-19` reports the missing frontier carrier `thm-gaussian-mixture-score-and-global-lipschitz-bound` from batch 1; its batch-1 consumer `ex-gaussian-point-mass-score-lipschitz-blows-up-at-zero` declares it in `deps`. This is not a batch-23 prerequisite and no other pair’s files were changed.
  - `batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` reports `Duplicate item undefined` while batch 26’s `ml02-causal-pc` manifest currently contains string item entries. This is outside batch 23; the current owner scheduling input must be recomputed after all pair writers drain.
- Final scoped checks after the last mathematical and frontmatter edits:
  - `node tools/tsx-run.mjs tools/precheck.mts <nine proof-bearing items>`: 9 checked, 0 failing.
  - `node tools/proof-layout.mjs <nine proof-bearing items>`: 9 items, 20 steps, 0 defects.
  - `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-23.proof-contracts.json --strict --json`: all 9 completed proof-bearing items covered, 0 errors/warnings.
  - `node tools/rendercheck.mjs <14 item files and 2 page files>`: all 16 pass YAML/KaTeX/link-in-math checks.
  - `node tools/content-policy.mjs research/machine-learning-all-101-2026-10-19-batch-23.pages.json --json`: 14 items, 0 errors/warnings.
  - `node tools/depcheck.mjs --items-file /tmp/ml02-batch-23-item-scope.json --json`: 14 selected items and both owned pages, 0 errors/warnings; 718-item supplier closure checked.
  - Scoped statement-first inspection: 14 items, 0 defects. Scoped item-level DAG: 14 items, levels 0–4, 0 errors.
  - Source fetch check remains 3/4 fetch-verified with the documented Quine–Seneta owner escalation; no source was marked dropped.
- Run-wide checks are blocked by other batches, outside this authoring scope:
  - `proof-contract-coverage.mjs --run machine-learning-all-101-2026-10-19` cannot load `items/thm-gaussian-mixture-score-and-global-lipschitz-bound.md`, declared in batch 1. Batch-1 consumer `ex-gaussian-point-mass-score-lipschitz-blows-up-at-zero` also declares it in `deps`. This is not a batch-23 dependency.
  - `batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` fails with `Duplicate item undefined`; current batch 26 `ml02-causal-pc` manifest rows are item-ID strings rather than item objects. This other-pair manifest was not edited.
  - Attempts to record `def-covariance-factor-model` as `ready` and `thm-square-ica-identifiability-at-most-one-gaussian` as `escalated` with `node tools/step1-decisions.mjs record` both stop in `loadStep3` with the same `Duplicate item undefined` error from batch 26. The tool wrote neither record. Do not bypass the tool or modify batch 26; rerun these records after the owner repairs the run-wide manifest input.
- Readiness disposition: the 13 complete definitions/results/algorithm/examples are ready in content, but no Step-1 readiness JSON could be recorded because the run-wide loader fails on batch 26. The ICA identifiability theorem remains escalated for the local Darmois–Skitovich proof gap. Owner action is required to restore a valid whole-run manifest snapshot, then rerun the Step-1 decision records and normal batch scheduling reconciliation.
