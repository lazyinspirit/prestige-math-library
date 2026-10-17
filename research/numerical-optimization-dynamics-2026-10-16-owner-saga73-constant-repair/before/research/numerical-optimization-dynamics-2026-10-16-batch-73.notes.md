# Batch 73 authoring notes

Run: `numerical-optimization-dynamics-2026-10-16`  
Role/batch: beta / 73  
Scope: `variance-reduced-finite-sum-and-adaptive-gradient-optimization` and its examples page.  
Status: draft authoring evidence; these records are not independent approval.

## Controlling design and plan comparison

The pair design is the STO2 entry at `research/plan-numerical-optimization-track.md` lines 910–936, especially the preserved design at line 922 and its pointer to `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-sto2`. The complete audit contract controls the theorem hypotheses, recurrences, constants, and warnings. The separately cited line 908 is the preceding OPT4 section's local-prerequisite note; it does not define STO2. I used it as context only. The current plan's STO2 scope and the exact audit contract control any stale design differences.

`research/plan-spec.json` agrees with the assigned page metadata: A order 2430, B order 2431, category, IDs, titles, companion links, and required page edges. Its item arrays are empty, so the scaffold inventory below comes from this batch assignment and the generated batch manifest. No page-metadata conflict was found. The owner direction requires the explicit Adam divergence example; it is included as an independently proved example.

The audit contract assumes AC for inherited conditional-expectation classes, finite moments at every finite time, and no Doob or almost-sure convergence conclusion. I preserve those restrictions. The fixed-integral control-variate definition is used only for its algebraic pattern; optimization conditional expectations, the finite-sum variance bounds, and the optimizer-specific recurrences are proved locally. Published SVRG, SAGA, and AdaGrad constants or hypotheses are not silently imported: the assigned constants are proved in the local contracts. Independent uniform mini-batches and without-replacement sampling are treated separately. The Adam example is an unprojected periodic counterexample, not Reddi et al.'s projected, dynamic-step theorem. The assigned AMSGrad maximum is taken after bias correction, whereas Reddi et al.'s Algorithm 2 takes its maximum before bias correction; no AMSGrad convergence theorem is claimed.

## Inventory and dependency order

The A page has 18 items and the B page has 3 (21 total, below the 100-item page cap). Levels were assigned from actual in-run item dependencies before carrier authoring, and recomputed after adding the SAGA counterexample. Every in-run supplier is at a lower level; no cycle was found.

| Page | Level 0 | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 |
|---|---:|---:|---:|---:|---:|---:|
| A | 4 | 5 | 4 | 3 | 1 | 1 |
| B | 0 | 0 | 2 | 0 | 1 | 0 |

The complete item IDs, `deps`, and `dependency_level` values are in `batch-73.pages.json`; the per-item levels are 0 for definitions/algorithms without in-run suppliers, then 1 plus the maximum level of in-run suppliers. The batch scheduling row remains dependency level 4 and requires batches 27 and 64. The dispatch supplied scheduling digest `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`; the current shared dependency-level file records `input_sha256=0d5348a9c60bb403f5b5cc31ab92b836e83dc9f5b6f2f1af77b6da8bf16a274a` and has raw SHA-256 `006e151a67894d6ae1ed46231cd6a4d7aeb255e8b633f7434a544967ebb50305`. This digest mismatch is recorded for owner reconciliation; shared scheduling inputs were not edited.

Actual supplier-body evidence is recorded in `batch-73.cross-batch-dependencies.json`. It covers the OPT8/batch-27 proximal-gradient page and STO1/batch-64 stochastic-approximation page, plus the exact direct item interfaces used by consumers. The third required page, `variance-reduction-and-randomized-integration`, is already published; I inspected `def-control-variate-estimator` and its unbiasedness proof. That supplier assumes an IID sample, fixed coefficient, and known control mean, so it supports the shared algebraic form only. In particular, the current STO1 oracle definition supplies the filtration/adaptedness and conditional-moment convention, its strong-monotonicity lemma supplies the differentiable strong-convexity inequality, and the OPT8 smoothness/proximal items supply their stated inequalities and existence results. These are inspected authoring interfaces only; their presence does not certify supplier acceptance. No consumer was dropped while any other pair was writing.

## Mathematical escalation: SAGA contraction

The controlling `#contract-sto2` claims, under only `eta <= min{1/(3L), mu/(13 L^2)}`, that the Lyapunov `L_k = V_k + 7 eta^2 n S_k` contracts by `1 - mu eta`. The new item `cex-saga-linear-factor-fails-under-standard-initialization` refutes that factor with standard SAGA initialization. Take `n=100`, `d=1`, every `f_i(x)=x^2/2`, so `L=mu=1` and `x*=0`; set `x_0=1` and `alpha_i^0=f_i'(x_0)=1`. With `eta=1/13`, both assigned upper bounds hold. The first sampled estimator is `v_0=1`, hence `x_1=12/13`; because the sampled component's old and new gradients are both 1, the table remains all ones. Thus `V_0=1`, `V_1=144/169`, and `S_0=S_1=1`. Consequently `L_0=869/169`, `L_1=844/169`, and `L_1/L_0=844/869 > 12/13 = 1-mu eta` (cross-products: `10972 > 10428`).

The local theorem item proves a corrected sufficient estimate after adding `eta <= 1/(7 mu n)`. This is a local sufficient restriction, not a necessary or optimal bound, and it does not fulfill the unamended contract. `thm-saga-expected-linear-contraction` therefore remains escalated for owner reconciliation; its record is not overwritten. The owner must amend the contract or supply a valid proof under its stated assumptions. The counterexample, affected theorem, and exact hypotheses are preserved in the A page and proof contract.

## Source reading and retrieval record

All cited source text was inspected in full for the relevant argument; each source object records supported items, locators, harvested-result dispositions, retrieval history, and fetch stamp. The two pages reuse sources, giving 16 stamped page-source instances and 9 distinct full texts. No source was dropped. The only failed direct retrieval was Reddi–Kale–Kumar's OpenReview PDF (`https://openreview.net/pdf?id=ryQu7f-RZ`, HTTP 403); the exact-title/domain search is recorded and the complete arXiv text was retrieved and read instead. The recovered source is not treated as proof of the assigned Adam counterexample.

Distinct full texts and their inspected ranges:

- Johnson–Zhang, SVRG, Theorem 1: https://proceedings.neurips.cc/paper_files/paper/2013/file/ac1dd209cbcc5e5d1c6e28598e8cbbe8-Paper.pdf
- Bubeck, *Convex Optimization: Algorithms and Complexity*, §§3.1–3.4, 6.3: https://arxiv.org/pdf/1405.4980
- Defazio–Bach–Lacoste-Julien, SAGA, Theorem 1: https://proceedings.neurips.cc/paper_files/paper/2014/file/937964195d6fb3a55cd7cc578165f058-Paper.pdf
- Bottou–Curtis–Nocedal, *Optimization Methods for Large-Scale Machine Learning*, §§5.1, 5.3.1–5.3.3: https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf
- Gower–Gramfort, *Optimization for Data Science: Stochastic Variance Reduced Gradient Methods*, full 81-slide deck: https://gowerrobert.github.io/pdf/M2_statistique_optimisation/optimization_IV_variance_reduced-expanded.pdf
- Duchi–Hazan–Singer, adaptive subgradient methods, Theorem 5 and Appendix C Lemma 4: https://jmlr.org/papers/volume12/duchi11a/duchi11a.pdf
- Reddi–Kale–Kumar, Adam and AMSGrad, §2 and full Appendix F Theorem 6: https://arxiv.org/pdf/1904.09237
- Kingma–Ba, Adam, §2, Algorithm 1 and bias-correction equations: https://arxiv.org/pdf/1412.6980
- Lebl, *Basic Analysis I*, §8.3: https://www.jirka.org/ra/html/sec_svtheder.html

Coverage and harvested-result disposition are in `batch-73.coverage.json`; successful retrievals carry `source-fetch-check --stamp` evidence. The unavailable OpenReview host was recovered, so no six-attempt source-drop record or alternative-proof waiver applies.

## Readiness and scoped checks

Twenty items have current `ready` records and `thm-saga-expected-linear-contraction` has its current `escalated` record. The examined direct dependencies and evidence are recorded per item by `tools/step1-decisions.mjs`; readiness is not independent approval.

Recorded scoped results: `content-policy`, 21 items/0 errors or warnings; manifest metadata/dependencies, 21 items/0 manifest errors; dependency-level closure across batches 27, 64, and 73, 63 items/6 pages/0 errors; focused dependency, forward-reference, and external-reference checks, 0 errors/open references; source coverage, 2 pages/40 harvested results/0 errors or warnings; source fetch stamps, 16/16 verified; proof contracts, 16/16 proof-bearing items/0 strict-check errors; `proof-layout.mjs`, 21 items/49 steps/0 defects; and `precheck.mts`, 21 items/16 proof-bearing checked/0 failures. A separate unfiltered run-wide `item-dependency-levels.mjs check` is not clean: 22 other page manifests have empty inventories (`spectral-collocation-and-galerkin-methods`, its examples page, `exponential-and-integrating-factor-integrators`, its examples page, `imex-and-operator-splitting-methods`, its examples page, `direct-transcription-and-numerical-ode-optimal-control`, its examples page, `finite-element-pde-constrained-optimization`, its examples page, `numerical-identifiability-and-optimal-experiment-design`, its examples page, `simulation-gradient-estimation-and-simultaneous-perturbation`, its examples page, `multirate-and-partitioned-time-integration`, its examples page, `event-location-and-hybrid-trajectory-error`, its examples page, `langevin-splittings-and-invariant-measure-error`, its examples page, and `global-sensitivity-anova-and-sobol-estimation`, its examples page); it also reports `ex-additive-eigensolve-tolerance-residual-certificate` labeled level 3 but computed level 4. These are outside batch 73 and were left untouched. In addition, `batch-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16` cannot finish loading the run: four batch-87 item frontmatters have an unquoted colon in the Hairer title, causing “Nested mappings are not allowed in compact mappings”: `alg-finite-sectional-forward-euler-positivity-cfl.md` (source line 21), `thm-finite-sectional-forward-euler-positivity-and-conservation.md` (line 24), `thm-finite-sectional-forward-euler-global-first-order-error.md` (line 25), and `thm-sectional-forward-euler-total-error-budget.md` (line 23). This blocks checking the shared batch-level artifact; it was not edited. The scoped 27/64/73 item-level check is clean. No tests were run. Only this batch's draft items, A/B pages, and batch evidence were edited; shared plans, published content, engine state, and owner verdicts were left untouched.
