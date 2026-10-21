# Batch 49 authoring notes — Plug-and-play MMSE denoisers and stationarity

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: 49 · pair: `plug-and-play-mmse-regularization`  
Scheduling input: `41dd33146255b664e55b75603e7c764ee3bde257d4079845e209411309d97f62`

## Plan and scope reconciliation

- `research/plan-inverse-problems-track.md`, IP-49, specifies four A items (`lem-ip-tweedie-mmse-jacobian-and-prox-potential`, `def-ip-pnp-ista-with-denoiser`, `thm-ip-exact-mmse-pnp-ista-stationarity`, `rem-ip-arbitrary-denoiser-has-no-inherited-objective`) and three B leaves (exact scalar posterior mean, approximate CNN map, false iterative-AWGN claim). The full section’s hypotheses and warnings are retained: arbitrary nondegenerate Borel prior, analytic exact Gaussian posterior mean, smooth lower-bounded constructed objective, fixed `0<γ≤1/L`, monotone objective and vanishing gradient only; no global minimizer, rate, iterate convergence, posterior sampling, or trained-network guarantee.
- `research/plan-spec.json` matches page IDs, category, companion, order 3094/3095, and page requirements. Its IP-49 `items` arrays are empty, so the prose plan supplies the item inventory; there is no conflicting item inventory or scope.
- The scheduled batch level is 6, with prerequisite batch 46 at level 5. Item labels below are recomputed from the actual item dependency edges, as required: batch 46’s exact estimator definition is level 3, so IP-49 items range from level 4 to level 7. This is the item-level graph, not a copy of the batch scheduling level.
- The design refers to an “appendix notation correction noted in reader-6.md”; `research/inverse-problems-knot-theory-all-109-2026-10-19-reader-6.md` is absent. The relevant full source arguments were read, all local variables and domains are explicit, and no source notation is imported as a proof premise. Record this absence for owner reconciliation; it does not leave a local proof claim unresolved.
- The published proximal-gradient page and its smooth-descent supplier were inspected. The published proximal-mapping definition is convex-only, so it is not used for the potentially nonconvex `h_{σ,γ}`. The local lemma proves a unique global minimizer directly. The smooth-descent inequality is used with its stated C¹ and Lipschitz-gradient hypotheses.

## Item inventory, logical dependencies, and levels

The manifest `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-49.pages.json` and all seven carriers agree on these direct dependencies and levels. External published items do not raise an in-run item level.

| Item | Claim or content | Direct item dependencies | Level |
|---|---|---|---:|
| `lem-ip-tweedie-mmse-jacobian-and-prox-potential` | Pointwise Gaussian posterior is proper with finite second moment for any probability prior; derive Tweedie identity, covariance Jacobian, positive definiteness, injectivity/open image, and the nonconvex global proximal potential. No finite prior moment is assumed. | `def-ip-learned-reconstruction-estimator`, `def-euclidean-inner-product`, `def-probability-measure`, `def-ck-and-multi-index-notation-in-several-variables`, `thm-differentiation-under-the-integral-sign`, `thm-dominated-convergence`, `thm-derivative-of-exponential`, `thm-logarithm-derivative-and-integral`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `def-ck-euclidean-maps-and-diffeomorphisms`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `cor-mean-value-theorem`. | 4 |
| `def-ip-pnp-ista-with-denoiser` | Define a deterministic finite-dimensional gradient-step/plug-in-map recursion; no convexity, proximal identity, training, or convergence is built into the definition. | `def-ip-learned-reconstruction-estimator`, `def-euclidean-inner-product`. | 4 |
| `thm-ip-exact-mmse-pnp-ista-stationarity` | For the analytic exact posterior-mean plug-in map, L-smooth `g`, finite-infimum `g+h`, and `0<γ≤1/L`, prove monotonicity and `||∇f(x_t)||→0` on the open image. | `lem-ip-tweedie-mmse-jacobian-and-prox-potential`, `def-ip-pnp-ista-with-denoiser`, `lem-l-smoothness-descent-inequality`, `def-lipschitz-holder-contraction`, `def-euclidean-inner-product`. | 5 |
| `rem-ip-arbitrary-denoiser-has-no-inherited-objective` | Prove `z↦−z` cannot be a global proximal selection of any extended-real penalty finite somewhere and nowhere `−∞`; do not claim arbitrary maps lack every other objective. | `lem-ip-tweedie-mmse-jacobian-and-prox-potential`, `def-ip-pnp-ista-with-denoiser`, `thm-ip-exact-mmse-pnp-ista-stationarity`, `def-euclidean-inner-product`. | 6 |
| `ex-ip-scalar-mmse-exact-denoiser` | Derive `Dσ(z)=a tanh(az/σ²)` for the two-point prior and apply the local nonconvex potential identity. | `lem-ip-tweedie-mmse-jacobian-and-prox-potential`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `def-probability-measure`, `thm-exponential-addition-formula`. | 5 |
| `cex-ip-pnp-iterative-awgn-error-model` | For `D̃(z)=z²`, `θ=x₀=0`, `γ=1/2`, show `z₂=(ε+2)²/8−1/2≥−1/2` and is nondegenerate, hence not Gaussian. AC is explicit for the standard-normal law. | `def-ip-pnp-ista-with-denoiser`, `def-axiom-of-choice`, `def-standard-normal-and-normal-laws`, `lem-normal-location-scale-density`. | 5 |
| `ex-ip-approximate-cnn-mmse-denoiser` | A one-pixel tanh map with nonzero bias is uniformly close to but differs from the exact posterior mean; the exact-map theorem does not apply, with no claim about other objectives. | `lem-ip-tweedie-mmse-jacobian-and-prox-potential`, `def-ip-pnp-ista-with-denoiser`, `thm-ip-exact-mmse-pnp-ista-stationarity`, `rem-ip-arbitrary-denoiser-has-no-inherited-objective`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `def-probability-measure`, `thm-exponential-addition-formula`. | 7 |

No local dependency cycle appears. Suppliers were authored in ascending item levels: level-4 definition/lemma, level-5 theorem and B examples, level-6 remark, then level-7 CNN example. `node tools/item-dependency-levels.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19` reports no errors for these seven items after the level correction.

## Actual IP-46 supplier bodies and axiom reconciliation

The earlier observation that the IP-46 carriers were missing became stale during this active workspace run. The current batch-46 manifest and item files were re-read; all three exact supplier bodies below exist. No batch-46 file was edited.

- `items/def-ip-learned-reconstruction-estimator.md` (level 3), Definition: a learned point rule is Borel; a denoiser is a Borel map on a real Hilbert signal space associated with a specified corruption law; it is exact MMSE only when it equals the conditional mean for the specified signal/corruption laws. Its `axiom_use` states no choice is needed. IP-49 now calls `Dσ` the **analytic posterior-mean plug-in map**, says no fitted parameter or training guarantee is assumed, and proves it smooth (hence Borel). This matches the design’s ideal exact-MMSE scope without claiming a trained model.
- `items/def-ip-inverse-risk-under-train-and-test-laws.md` (level 4), Definition: risks are extended nonnegative expected losses under supplied joint laws; the definition expressly imposes no train/test risk inequality. IP-49 makes no risk comparison and uses no risk result from this definition. Its `axiom_use` states no choice is needed.
- `items/prop-ip-posterior-mean-is-square-loss-optimal.md` (level 0) and its full proof were read through steps 1.1–4.1. It assumes AC and Countable Choice, a separable real Hilbert target with supplied finite/countable ONB, a supplied probability kernel, and finite posterior second moment on `D₂`. For each fixed `z`, IP-49 has `H=Rⁿ`, a supplied finite standard basis, a proper pointwise posterior, and finite second moment by local lemma step 1.1, so the pointwise risk identity is compatible. The proposition is deliberately not used: its kernel-level theorem and stronger axiom branch are unnecessary, and the local proof proves the pointwise identity directly and choice-free. No AC/CC branch is silently imported into A.
- The `learned-reconstruction-targets-and-risk` page requires identifiability/stability, Bayesian inverse likelihoods, posterior contraction, loss/risk, and conditional-distribution pages. These page edges are retained as declared context. The IP-49 proof imports no theorem from those pages beyond its exact direct item dependencies; focused `depcheck` verifies their dependency closure and cycles.

The A page still requires `learned-reconstruction-targets-and-risk` and the published proximal-gradient page. The B page requires A. This preserves the plan interfaces while making the analytic-map convention explicit.

## Source reading, coverage, and dispositions

Coverage is in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-49.coverage.json`. Each A/B page has three independent full-text sources; the book/monograph treatment is included. The two A-page treatments are Xu et al. and Gribonval–Nikolova, with Parikh–Boyd as the full monograph treatment.

- Xu, Sun, Liu, Wohlberg, and Kamilov, *Provable Convergence of Plug-and-Play Priors with MMSE Denoisers*, full 10-page PDF, `https://arxiv.org/pdf/2005.07685`: read §2 Assumptions 1–3 and Theorem 1; Appendix A.1 equations (7)–(12); Appendix A.2; §3 and conclusion. Supports all seven items. Disposition: included for scope and argument comparison; each mathematical claim is proved locally.
- Gribonval and Nikolova, *On Bayesian Estimation and Proximity Operators*, full 25-page PDF, `https://arxiv.org/pdf/1807.04021`: read §1.3, §2.1 Corollary 2, §2.5.1, and full Appendix A.4 proof. Supports the exact posterior-mean proximity representation and scope distinctions. Disposition: included; local proof checks pointwise moment hypotheses rather than importing a finite-prior-moment premise.
- Parikh and Boyd, *Proximal Algorithms*, full 113-page monograph, `https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf`: read §1.1 and §§4.2–4.2.1 in full. Supports the gradient-step convention and quadratic majorizer; its standard convex proximal theorem is not applied to `h_{σ,γ}`.

Every source has a locator, supported-item mapping, disposition, one successful retrieval record, and a fetch stamp. `source-fetch-check --stamp` verified 6/6 page/source entries on the first attempt; no failure, recovery search, or source drop occurred. The three unique PDFs were respectively 1,335,386 bytes (`fd4a756341836b58`), 1,176,130 bytes (`03fdbaae18f755cb`), and 978,151 bytes (`c261d62dab183f5a`). `source_search_history` and `source_resolution_history` are empty because no retrieval recovery or source-resolution action was required.

## Authored artifacts

- A page: `library/inverse-problems/plug-and-play-mmse-regularization.md`; frontmatter only, four assigned A items, exact page requirements, no summary/body.
- B page: `library/inverse-problems/plug-and-play-mmse-regularization-examples.md`; frontmatter only, three assigned leaves, companion requirement, no summary/body.
- Items: all seven IDs in the inventory table; all statements are complete before immediately following reference sections. The A algorithm and biased CNN have explanatory TikZ diagrams; the proofs do not rely on them.
- Proof contracts: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-49.proof-contracts.json`; all seven entries include mapped proof steps/inputs, exact source-section excerpts, boundary dispositions, axiom branches, finite-check disposition, and the examined IP-46 reconciliation. No unresolved supplier checks remain.
- Coverage: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-49.coverage.json` with six fetch-verified source entries.

## Validation and readiness

Final scoped results after the last carrier and manifest edits:

- `precheck.mts`: 7 files; 6 proof-bearing checked; 0 failures.
- `proof-layout.mjs`: 7 items, 26 steps, 0 defects.
- `proof-contract.mjs --strict`: all 7 checked; 0 errors and 0 warnings.
- `manifest-deps.mjs`: 7 items; all explicit dependency arrays; 0 errors.
- `content-policy.mjs`: 7 items; 0 errors and 0 warnings.
- focused `depcheck.mjs`: 7 assigned items; dependency closure 1,033 items / 416 pages; 0 errors and 0 warnings.
- `rendercheck.mjs`: all 7 items and 2 pages (9 files); 0 errors and 0 warnings.
- `source-fetch-check.mjs`: 6/6 entries fetch-verified.
- Run-wide `item-dependency-levels.mjs` exits 1 because 26 non-owned pages still have empty inventories and 17 non-owned items elsewhere have labels differing from their computed levels. It reports no dependency-level error for any of the seven batch-49 items. Do not edit those other batches.
- Recomputed `.autopilot` status remains at `1-scaffold`, 76/109 covered, no in-flight writers, with the owner blocker for units 31 and 56. Git HEAD observed: `50139bdcb6 Defer compact construction artifact scans until author drain`. This batch did not change runtime state, verdicts, the shared plan, or other owners’ files.

All seven items have complete local arguments, placed carriers, consistent manifest levels/dependencies, source evidence, and passing scoped contracts. Seven non-owner Step 1 records were written as `ready` with their direct dependency IDs and current item hashes; a hash recheck returned `closed: true` for all seven, and no `--owner` flag was used. These records mark authoring completion only; they are not independent review, acceptance, or publication. No batch-49 mathematical obligation remains unresolved. The absent `reader-6.md` note is recorded above for owner reconciliation; it does not supply a missing premise in these local proofs.
