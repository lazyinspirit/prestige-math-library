# Batch 13 authoring notes

Run: `machine-learning-all-101-2026-10-19` · pair: `ml02-linear-sparse-models` · role: beta.

## Controlling plan and scope

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta scaffold, the Batch 13 dispatch and batch task, the complete ML-12 design section in `research/plan-machine-learning-track.md`, the matching `research/plan-spec.json` row, and `research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json`. The controlling file `research/machine-learning-all-101-2026-10-19-owner-authoring-direction.md` is present and was read; it preserves the approved 101-pair scope and requires readiness recording against the actual full manifests.

The design and `plan-spec` agree on the A/B IDs, title, order, category, and the three A-page requirements: `inner-product-spaces-and-orthogonality`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, and `the-spectral-theorem-and-singular-value-decomposition`. The B page requires the A page. No page metadata conflict was found. These shared plans were not edited.

The design and matching `plan-spec` row agree on the A/B identities, title, order, category, and page prerequisites. The mathematical contract has two unresolved source/proof issues requiring owner reconciliation. The scheduled ML-12 prose reproduces Wainwright 2006 Theorem 1's Cmax-only lower constant and its upper penalty conditions. The 2006 Appendix D.6 identity used to bound the conditional covariance is false, and an explicit sequence refutes the scheduled upper implication as stated. The lower claim remains unresolved; its source proof defect alone does not prove that the conclusion is false. The precise evidence and proposed owner choices are below and in the corresponding draft items.

## Batch inventory and dependency levels

The active dispatch supplies current scheduling input hash `15e0b21c357ae967f09b149a4fd7b481878b1a87cf616642ccef36faddb03d25`. The current run artifact `research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json` records `input_sha256` `4652875380fb83fe2b469069a490dc8aeba66b4b740ea67dbde87608a9c8b602`; an older note recorded `424a2623b4a02ffac30bca34f1e893445df04b9a3a30237f39748f9397b2e4a0`. These three digests differ, so this handoff does not assert that they bind the same scheduling snapshot. Batch 13 is listed at dependency level 0 with no prerequisite batches. The scoped current-manifest item graph has 14 items, maximum level 2, and no cycles; its exact inventory and labels are below. The shared run artifact was not edited.

| Item | Exact claim or interface | Direct in-run dependencies | Level |
|---|---|---|---:|
| `def-linear-regression-objectives` | Fixed-design empirical loss; OLS, ridge, lasso normalization, group/fused objective-only forms, scaling, unpenalized intercept | — | 0 |
| `lem-gaussian-sample-covariance-operator-concentration` | Operator-norm convergence of iid Gaussian sample covariance when dimension is little-o of sample size | — | 0 |
| `lem-chi-square-degree-ratio` | Chi-square sum divided by a comparable degree/sample dimension converges to one | — | 0 |
| `lem-finite-gaussian-max-comparison` | Finite Sudakov–Fernique inequality, proved by softmax interpolation | — | 0 |
| `lem-standard-gaussian-maximum-expectation-lower-bound` | Expected maximum of m independent standard normals is at least a fixed multiple of sqrt(log m) | — | 0 |
| `cex-wainwright-conditional-covariance-eigenvalue-bound` | A covariance family satisfying the planned hypotheses violates the asserted 1/Cmax conditional-covariance lower bound | — | 0 |
| `thm-wainwright-lower-signed-support-threshold` | Exact planned lower-threshold statement retained as an escalated theorem; no proof claimed | `cex-wainwright-conditional-covariance-eigenvalue-bound` | 1 |
| `thm-ols-and-ridge-solutions` | Full OLS minimizer set/uniqueness iff full column rank; unique ridge formula | `def-linear-regression-objectives` | 1 |
| `lem-orthonormal-lasso-soft-thresholding` | Unique scalar soft-threshold solution at n lambda under the 1/(2n) loss | `def-linear-regression-objectives` | 1 |
| `lem-lasso-active-set-stationarity` | Necessary active normal equations for a signed Lasso optimizer | `def-linear-regression-objectives` | 1 |
| `fs-wainwright-signed-support-threshold-claim` | Complete counterexample refuting the combined planned two-sided threshold claim by its upper branch | `lem-gaussian-sample-covariance-operator-concentration`, `lem-chi-square-degree-ratio`, `lem-finite-gaussian-max-comparison`, `lem-standard-gaussian-maximum-expectation-lower-bound`, `lem-lasso-active-set-stationarity` | 2 |
| `ex-correlated-predictors-and-shrinkage` | Duplicate predictors give an OLS line, a ridge point, and a Lasso segment | `def-linear-regression-objectives`, `thm-ols-and-ridge-solutions` | 2 |
| `ex-orthonormal-lasso-soft-thresholding` | Explicit two-coordinate OLS/ridge/Lasso comparison with a threshold equality case | `lem-orthonormal-lasso-soft-thresholding`, `thm-ols-and-ridge-solutions` | 2 |
| `ex-beta-min-below-lasso-threshold-loses-support` | Deterministic coefficient below the soft threshold is set to zero | `lem-orthonormal-lasso-soft-thresholding` | 2 |

No cycles are present. The page manifest, item frontmatter levels, and dependency-input record carry the same inventory. `node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` remains a run-wide check and will see other unfinished batches; the scoped `dependencyLevels` calculation for Batch 13 is the relevant check.

## Actual published suppliers checked

The actual statements and complete relevant proofs were inspected before readiness claims:

- `thm-least-squares-solutions-and-normal-equation`: finite-dimensional spaces, any rank, existence, normal equations, and minimizers exactly `x0+ker T`; no AC use.
- `def-tikhonov-regularised-least-squares` and `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser`: finite real/complex matrices, lambda>0, exact objective, SVD proof, positive spectrum, and unique formula.
- `thm-singular-value-decomposition`: finite-dimensional real/complex spaces, including rank zero. `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` supplies a real orthonormal eigenbasis; `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` supplies the Euclidean inequality used in the net step.
- `def-lasso-estimator`: published loss `n^-1||y-Xtheta||^2+2 tau||theta||_1`; the new local convention is exactly one half of it at `tau=lambda`.
- `def-multivariate-normal-law`, `def-standard-normal-and-normal-laws`, and `thm-nondegenerate-multivariate-normal-law-has-density`: singular covariance is allowed by the law definition; the density result requires positive-definite covariance; AC is explicit. The block counterexample uses identity covariance for the design. `thm-independent-random-elements-have-product-joint-law` supplies the finite product-law step.
- `thm-standard-gaussian-lipschitz-concentration` explicitly assumes AC, DC, and countable choice. All three are carried separately in the upper-counterexample statement and dependency list. The local finite-net, chi-square, and interpolation lemmas use AC only.
- `thm-dominated-convergence` supplies passage to limits in the softmax interpolation lemma; difference quotients are locally dominated by the integrable Gaussian coordinate norms.

The existing fixed-design Lasso prediction theorem was inspected for its hypotheses and is not used as random-design signed-support evidence. No Cat1 excess-risk or generalization result is claimed. The three page-level prerequisites remain exactly the assigned three.

## Source reading and retrieval history

- **ESL, corrected 12th printing:** full 764-page PDF downloaded from the author-linked Google Drive target and inspected at Chapter 3 §3.2, §3.4.1, and §3.8.4 (printed pp. 43–47, 61–72, 89–91), plus Chapter 18 §18.4.2 (pp. 666–667). It supplies fixed-design/OLS/ridge conventions, the grouped-lasso objective, orthonormal soft thresholding, and fused-lasso objective. ESL describes the fused objective as strictly convex/uniquely minimized; that guarantee is not imported because this batch defines objectives only. Retrieval history is retained in `batch-13.coverage.json`: a guessed direct PDF path returned 404; an author-site download wrapper returned a 210-byte meta-refresh page; the official author-linked full PDF was then recovered. No claim relies on the failed URLs.
- **Rigollet–Hütter, High-Dimensional Statistics lecture notes:** full 168-page PDF was fetched. The complete relevant passages were inspected at §1.4 Theorem 1.14 (printed pp. 25–26), §2.2 Proposition 2.1 and proof (pp. 42–44), and §§2.3–2.4 (pp. 52–55). It is an independent full lecture-notes treatment for the OLS, Lasso objective, and soft-threshold conventions. Its maximal-inequality section is context only; the local lower bound on the independent Gaussian maximum is proved directly.
- **Wainwright 2006 preprint:** complete relevant sections inspected: Theorem 1 and §§3.1, 3.3.1–3.4 (printed pp. 8–12), Appendix B Lemma 10, and Appendix D.5–D.6. The rendered PDF view of Appendix D.6 was checked. D.6 asserts `Sigma_{S^c|S}=[Sigma^{-1}]_{S^cS^c}` and then treats the least eigenvalue as at least `1/Cmax`. The block inverse identity is instead `[Sigma^{-1}]_{S^cS^c}=(Sigma_{S^c|S})^{-1}`. The exact matrix example is in `cex-wainwright-conditional-covariance-eigenvalue-bound`.
- **Wainwright 2009 journal article:** complete relevant sections inspected: §IV.A (printed pp. 2190–2191; threshold equations (28)–(35)), proof §VI (pp. 2194–2195), Appendix I (p. 2200), and Appendix K Lemmas 8–9 (pp. 2200–2201). For a positive-definite symmetric matrix $A$, it defines `rho_ell(A)=1/2 min_{i != j}(A_ii + A_jj - 2 A_ij)`, a minimum pairwise increment variance, and sets `theta_ell(Sigma)=rho_ell(Sigma_{S^c|S})/[C_max(2-gamma(Sigma))^2]`, where `gamma` is its incoherence parameter. This is not the least eigenvalue of the conditional covariance and is a distinct threshold interface; it has not been substituted for the scheduled theorem.

`node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-13.coverage.json --stamp` returned exit 0: 6/6 entries fetch-verified, 6 newly stamped; 6/6 sources resolved, zero documented drops. The exact hashes and times are in the source-coverage and source-evidence JSON files. Retrieval succeeded, so no unresolved-source `source_resolution` record is needed. The failed ESL attempts remain recorded as recovery history; nothing was dropped.

## Mathematical escalation to owner

### Upper branch: explicit counterexample

The claimed upper implication permits `log s/log(p-s)` to diverge and permits penalties much larger than the scale that controls active Gram fluctuations. For `N_k=ceil(e^k)`, `s_k=ceil(e^{k^2})`, `n_k=ceil(5s_k k)`, `p_k=s_k+N_k`, `Sigma=I`, `beta*=(1^{s_k},0^{N_k})`, noise variance one, and `lambda_k=(log log n_k)^(-1/2)`, all stated upper hypotheses hold with `nu=1/2`, `theta_u=1`, and `rho_n=1`. The active restricted candidate contains `lambda_k A^{-1}1`; its maximum grows at order `lambda_k sqrt(s_k log s_k/n_k)`, which diverges like `sqrt(k/log k)`, while the active noise maximum tends to zero. The Gaussian maximum argument conditions only on the block variables `(H,d)`; the active-Gram event used for the noise bound is kept separate, so conditioning does not truncate the Gaussian vector. Thus with probability tending to one some restricted active coefficient is negative; no Lasso optimizer can have the correct positive active signs. The full proof is `fs-wainwright-signed-support-threshold-claim`, steps 1.1–8.1. This refutes the upper implication as scheduled, not a prediction-risk guarantee.

Suggested owner review: add a condition controlling the active shrinkage fluctuation, for example a beta-min requirement including `lambda_n sqrt(s log s/n)`, or impose a growth relation such as `log s=O(log(p-s))` and prove the resulting exact theorem. These are possible interfaces, not established replacement theorems.

### Lower branch: proof route defect, conclusion unresolved

The planned lower constant uses a source proof step that is false. For `Sigma=[[I_s,(3/4)I_s],[(3/4)I_s,I_s]]`, the parameters are `Cmin=1`, `Cmax=7/4`, `Dmax=1`, and `epsilon=1/4`, while `Sigma_{S^c|S}=(7/16)I_s`; its least eigenvalue `7/16` is below `1/Cmax=4/7`. The correct inverse-block relation does not give the bound used in the source proof. This counterexample invalidates that proof step but does not, by itself, refute the lower-threshold conclusion. The exact planned lower statement is retained in `thm-wainwright-lower-signed-support-threshold` and marked escalated. The 2009 journal threshold uses the pairwise increment parameter `rho_ell` defined above, not the least eigenvalue; it has different constants and is not an automatic replacement. Owner choices: provide an independent complete proof under the planned constant, or adopt and fully prove a corrected threshold with the journal version's exact increment definition, threshold formula, and hypotheses.

## A/B carriers and current decisions

- `def-linear-regression-objectives` (level 0): defines fixed real X,y,beta; empirical loss `||y-Xbeta||^2/(2n)`; OLS; ridge `||y-Xbeta||^2+lambda||beta||_2^2`; Lasso `ell_n+lambda||beta||_1` with exact equivalence to the published `tau` convention; group/fused objectives only; feature scaling and an unpenalized separated intercept. External dependency: `def-lasso-estimator`. Sources: ESL Chapter 3 and §§3.8.4/18.4.2; HDS §2.4.
- `lem-gaussian-sample-covariance-operator-concentration` (level 0): epsilon-net/Chernoff proof for iid Gaussian matrices with d/n→0; direct dependencies AC, multivariate/standard normal, Markov, real spectral theorem, Cauchy–Schwarz. Source context: Wainwright 2009 Appendix K; proof is complete locally.
- `lem-chi-square-degree-ratio` (level 0): computes Gaussian second/fourth moments and uses Markov on the centered square to show `D_k/n_k→1` when `r_k/n_k→1`; dependencies AC, standard normal, Markov.
- `lem-finite-gaussian-max-comparison` (level 0): proves the finite Sudakov–Fernique comparison by softmax interpolation, Gaussian integration by parts, and DCT; dependencies AC, multivariate/standard normal, DCT. Wainwright Appendix B is context; no source proof is substituted.
- `lem-standard-gaussian-maximum-expectation-lower-bound` (level 0): derives a Gaussian-tail lower estimate, independence bound, and expectation bound; dependencies AC and standard normal. HDS §1.4 is context only.
- `cex-wainwright-conditional-covariance-eigenvalue-bound` (level 0): block covariance example with all four planned matrix hypotheses and exact `7/16<4/7` comparison; no logical dependencies.
- `thm-wainwright-lower-signed-support-threshold` (level 1): preserves the planned lower claim verbatim in strength and assumptions, but contains no proof. It is explicitly escalated because Wainwright 2006 Appendix D.6 uses the refuted inverse-block identity; no readiness is claimed.
- `thm-ols-and-ridge-solutions` (level 1): full least-squares affine solution set, uniqueness iff full column rank, and unique ridge formula. Dependencies: local objective definition; published normal-equation, Tikhonov definition/theorem, and SVD contracts. Sources: ESL and HDS.
- `lem-orthonormal-lasso-soft-thresholding` (level 1): coordinate separation and scalar derivative/one-sided-slope proof; threshold `n lambda` and equality case set to zero. Dependency: local objective definition.
- `lem-lasso-active-set-stationarity` (level 1): differentiates on the fixed-sign active coordinates and solves the restricted normal equations; it makes no inactive-coordinate claim. Dependency: local objective definition.
- `fs-wainwright-signed-support-threshold-claim` (level 2): full Wainwright-model statement and complete Gaussian block-inverse counterexample to its upper branch; the block maximum and active-noise bounds use separate events to preserve the conditional Gaussian law. Dependencies include all local helper lemmas and the published Gaussian concentration/choice interfaces. AC, DC, and countable choice are separate and explicit.
- `ex-correlated-predictors-and-shrinkage` (level 2): duplicate columns; OLS line, ridge point, and Lasso minimizer segment; algebraic proof plus an illustrative coefficient diagram.
- `ex-orthonormal-lasso-soft-thresholding` (level 2): exact two-coordinate comparison, including a threshold-equality coordinate.
- `ex-beta-min-below-lasso-threshold-loses-support` (level 2): one-dimensional deterministic example where a coefficient below `n lambda` is set to zero; no random-design conclusion.

The A and B page files are YAML frontmatter only, with no Markdown body or summary. They omit `page_layout`; the engine sets that flag after initial authoring.

## Validation checkpoint

- Source retrieval: `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-13.coverage.json --stamp` passed; 6/6 sources fetch-verified, 0 newly stamped, 6/6 resolved, and 0 documented drops.
- Current author-check: `node tools/tsx-run.mjs tools/author-check.mts machine-learning-all-101-2026-10-19 13` passed. It checked all 12 proof-bearing items, rendered 16 files, found 0 content-policy errors/warnings, and checked all 14 proof contracts with 0 errors and 1 warning.
- The proof-contract warning is `lem-finite-gaussian-max-comparison`: step 2.1 cites all four declared facts while three other steps cite none. This matches the argument, which uses those facts in the interpolation step, and does not leave a citation unmapped.
- Final proof-layout after edits: 14 items, 37 steps, 0 defects.
- Scoped `dependencyLevels` check on the actual Batch 13 manifest: 14 items, maximum level 2, no cycles or label mismatches. A separate source/page consistency check confirmed 2 frontmatter-only draft pages, 14 draft items, and exact agreement of source dependencies/levels with manifest placement.
- Cross-batch inputs include all 14 required external pages. The two product-measure supplier rows are verified; the counterexample row now points to comparison step 5.1.
- `step1-decisions check --run machine-learning-all-101-2026-10-19` found the run-wide frontier open. A later read against the same actual manifests counted 407 items, 323 ready, and 13/14 Batch 13 items ready. The sole Batch 13 escalation remains `thm-wainwright-lower-signed-support-threshold`.
- The current readiness check found the existing `fs-wainwright-signed-support-threshold-claim` ready hash stale. After rereading its current proof and all 16 dependencies and passing the scoped checks above, I used the ordinary `node tools/step1-decisions.mjs record` with `decision: ready` and the exact dependency array from the current item/manifest. It returned hash `6b937a69441183a039d3dcfd3b39a9fd34a025a653d6029100631d407cf9a08d` with `owner: false`. No other ready record changed, and the existing lower-theorem escalation was not overwritten.
- `node tools/proof-contract-coverage.mjs --run machine-learning-all-101-2026-10-19 --contracts research/machine-learning-all-101-2026-10-19-batch-13.proof-contracts.json --root . --json` was attempted on the actual repository root and is blocked by another author's unfinished manifest: `ERROR proof-contract-coverage-input: Empty or invalid frontier page inventory distribution-shift-and-domain-adaptation` (batch 10). No temporary run root or altered manifest was used. The Batch 13 strict proof-contract check above passed.
- The latest native status recomputation still has the run at `1-scaffold`, with 24/101 authoring units covered, nothing in flight, and the owner-held Step-1 repair/recertification blocker. The full readiness snapshot reports 407 items, 323 ready, and an open run; Batch 13 is 13 ready plus the lower-theorem escalation.
- The run's current scheduling-input hash (`15e0b21c...`) differs from the dependency artifact's `input_sha256` (`46528753...`) and the older hash previously written here (`424a2623...`). The scoped current Batch 13 graph and batch level remain internally consistent; the owner should reconcile whether these digests refer to the same snapshot. The shared artifact was not edited.

## Next action

Batch 13 authoring is complete for owner review with 13 ready items and the lower-threshold theorem escalated. The owner must resolve that theorem by supplying an independent proof under the planned constant or adopting and proving a corrected threshold. The owner also needs to reconcile the distinct scheduling hashes and complete the run-wide proof-contract coverage check after batch 10's empty inventory is authored. Completion records are authoring evidence, not independent approval.
