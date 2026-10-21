# Batch 27 authoring notes — Bregman distances and variational source rates

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Pair: `variational-source-conditions-and-bregman-rates`  
Assigned output: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-27.pages.json`

## Plan and design reconciliation

- The current `research/plan-spec.json` records the same A/B page IDs, titles, category, order 3050/3051, companion relation, and three A-page requirements as the dispatch and the complete IP-27 section in `research/plan-inverse-problems-track.md` (L648–L674). Its empty `items: []` arrays are pre-authoring placeholders; the IP-27 design supplies the six planned A items, which are retained. No plan-spec page-metadata conflict was found.
- The A inventory follows IP-27 exactly: Banach convex subgradient/dual pairing; Banach Fenchel duality; the index-function conjugate bound; Bregman distance; VSC; and the nonlinear regularization rate theorem. The B inventory retains the power and logarithmic index examples and the failure at coefficient `beta_1 = 1`. No extra item is needed for the assigned proof route.
- The published prerequisite page `proximal-gradient-and-accelerated-composite-optimization` and its `def-proper-closed-convex-function-on-rn` / `def-extended-real-epsilon-subdifferential` suppliers were inspected. Those particular interfaces are explicitly on `R^n`; they do not define the general Banach-space subdifferential required by IP-27. The batch retains the page-level `requires` edge, uses the published general Banach convex-functional and dual-space definitions, and defines the missing Banach subdifferential locally. No finite-dimensional subdifferential result is silently applied in the Banach theorem.

## Source and scope reconciliation

- Christian Clason, *Regularization of Inverse Problems*, complete lecture notes, `https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf`. Read the full relevant arguments: the minimizing estimate (10.13) and its derivation (PDF pp. 97–98 / printed pp. 94–95); the VSC (10.17) (PDF p. 100 / printed p. 97); Theorem 10.7 and its complete proof (PDF p. 101 / printed p. 98); and Lemma 10.8 with its complete proof (PDF p. 102 / printed p. 99). The Hilbert specialization follows Theorem 10.7. The design bibliography groups “Theorems 10.7–10.8”, but the source labels 10.8 a **Lemma**. The displayed (10.19) statement has an `X` subscript on the data residual, while its codomain is `Y` and the proof concludes the `Y` norm. The authored result states and proves the `Y`-norm estimate.
- Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, full thesis, `https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1`. Read the VSC and rate material in Chapter 2, equations (2.22)–(2.26), Theorem 2.20 and its full proof (PDF pp. 46–48 / printed pp. 44–46), and the quadratic / uniformly convex Bregman examples (printed p. 47). This is the full Banach/Bregman rate treatment used as an independent check of the general proof route.
- Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, full 2024 preprint, `https://arxiv.org/pdf/2403.18704`. Read the dual pairing, subdifferential, Bregman and scalar conjugate definitions plus VSC/index conditions (PDF p. 6); Lemma 2 and Theorem 3 with their complete proofs (PDF pp. 8–10); the power/log index discussion (PDF p. 6); Remark 1 (PDF p. 11); and the Appendix proof of Lemma 2 (PDF p. 24). Theorem 3 itself is specialized to the range-invariance relaxation (including assumptions (1.6), (2.1), (2.7)–(2.8)); it is not used as a generic Banach theorem. Its abstract Lemma 2 supplies the conjugate-bound route, which is proved locally in this batch. Remark 1's `alpha ~ delta^tilde_p`, `tilde_p in (0,p]`, does not satisfy the theorem's explicit coupling (2.5) when `tilde_p < p`; therefore it cannot establish both the logarithmic Bregman rate and residual `O(delta)` from that theorem. The local logarithmic example derives the coupling needed for both conclusions.
- Jonathan M. Borwein and Jon D. Vanderwerff, *Convex Functions: Constructions, Characterizations and Counterexamples*, full Cambridge monograph, `https://carmamaths.org/jon/Preprints/Books/CUP/cup-final.pdf`. Read the Banach-space conjugate definition and Proposition 4.4.1(a), including its full proof of Fenchel–Young inequality and the equality/subgradient characterization (PDF pp. 180–181 / printed pp. 171–172). The assigned Banach Fenchel lemma is proved directly from the same supremum definition, without importing any lower-semicontinuity hypothesis.
- No source retrieval failed, so no `source_resolution` recovery or drop record is needed. `source-fetch-check --stamp` verified all four complete-text sources and added fetch stamps; `coverage-checklist` records all 21 harvested results with dispositions and no errors or warnings.

## Item inventory and dependency order

The scheduling input is `394b3a6ddc24d5039024b0a5f3fa1ca2983c11bce6777cd1089a3afdc1d9e4e8`. The run dependency-level file gives batch 27 level 4 and prerequisite batches 25 and 26. Item levels below count only current-run item suppliers; published definitions are context and do not raise a level.

| Level | Item | Kind | Direct dependencies |
|---:|---|---|---|
| 0 | `def-ip-banach-convex-subgradient-and-dual-pairing` | definition | `def-banach-space`; `def-dual-space-of-a-normed-space`; `def-convex-and-strictly-convex-functionals-on-a-banach-space`; `def-proper-coercive-and-weakly-lower-semicontinuous-functional` |
| 0 | `lem-ip-index-function-young-conjugate-bound` | lemma | none |
| 1 | `lem-ip-banach-fenchel-duality-for-regularization` | lemma | `def-ip-banach-convex-subgradient-and-dual-pairing` |
| 2 | `def-ip-bregman-distance` | definition | `def-ip-banach-convex-subgradient-and-dual-pairing`; `lem-ip-banach-fenchel-duality-for-regularization` |
| 3 | `def-ip-variational-source-condition` | definition | `def-ip-banach-convex-subgradient-and-dual-pairing`; `def-ip-bregman-distance` |
| 4 | `thm-ip-vsc-nonlinear-regularization-rate` | theorem | `def-ip-banach-convex-subgradient-and-dual-pairing`; `lem-ip-index-function-young-conjugate-bound`; `def-ip-bregman-distance`; `def-ip-variational-source-condition`; batch-25 `def-ip-nonlinear-forward-map` (level 1) and `def-ip-x0-minimum-norm-solution` (level 2); batch-26 `def-ip-nonlinear-tikhonov-functional` (level 1); published `def-norm-and-normed-space`, `def-real-and-complex-inner-product-space`, `thm-cauchy-schwarz-in-an-inner-product-space` |
| 4 | `cex-ip-vsc-unit-coefficient-does-not-control-bregman-error` | counterexample | `def-ip-banach-convex-subgradient-and-dual-pairing`; `def-ip-bregman-distance`; `def-ip-variational-source-condition` |
| 5 | `ex-ip-power-index-bregman-rate` | example | `lem-ip-index-function-young-conjugate-bound`; `def-ip-bregman-distance`; `def-ip-variational-source-condition`; `thm-ip-vsc-nonlinear-regularization-rate` |
| 5 | `ex-ip-logarithmic-index-bregman-rate` | example | `lem-ip-index-function-young-conjugate-bound`; `def-ip-bregman-distance`; `def-ip-variational-source-condition`; `thm-ip-vsc-nonlinear-regularization-rate` |

The theorem is conditional on the supplied approximate minimizer existing; it does not assert Banach-space minimizer existence. Its proof shows that the named regularizer sublevel contains every such minimizer for sufficiently small noise under the declared coupling. The Hilbert specialization uses global minimizers of the existing nonlinear Tikhonov functional and the exact `x_0`-minimum-norm hypothesis; it makes no algorithmic or local-minimum claim. The proof is choice-free: it selects no minimizer, subsequence or auxiliary object.

## Pre-carrier manifest level check

Before writing any item carrier, an inline scoped Node recomputation used the current batch-25/26 manifest levels for those direct in-run suppliers and recursively checked the nine batch-27 manifest items. It found no cycle or level mismatch: levels `0, 0, 1, 2, 3, 4, 4, 5, 5` for the listed inventory. The post-authoring scoped recomputation found no cycle or level mismatch: `0, 0, 1, 2, 3, 4, 4, 5, 5`; batch-25/26 direct suppliers remain at levels `1, 2, 1` respectively.

## Supplier inspection and current run state

- Batch 25's actual draft definitions `def-ip-nonlinear-forward-map` and `def-ip-x0-minimum-norm-solution` were read. They give a real-Hilbert map on a nonempty open domain and the global minimum-distance property on its exact solution set, respectively; both match the Hilbert specialization's interface. Their levels are 1 and 2 in the current batch-25 manifest.
- Batch 26's actual draft `def-ip-nonlinear-tikhonov-functional` was read. Its objective is exactly `1/2 ||F(x)-y||^2 + alpha/2 ||x-x_0||^2`, and its definition explicitly asserts no minimizer existence. The rate theorem will therefore assume an approximate minimizer rather than infer existence from this definition.
- Batch 25's TCC definition was inspected as context. The assigned VSC theorem assumes the VSC directly and does not infer it from differentiability or TCC; no TCC hypothesis is added to the rate claim. The IP-25 page-level requirement remains in the plan and manifest.
- At the status read, the native run was running at `1-scaffold`, held for owner repair/recertification, with no workers in flight. No runtime state, shared plan, verdict, published item, or other batch was edited.

## Item checkpoints

Item-by-item claims, source locators, dependencies, decisions, validation results, remaining obligations, and next actions are appended here as each item is completed.

### `def-ip-banach-convex-subgradient-and-dual-pairing`

- **Claim/convention:** Defines a proper convex extended-real regularizer on a real Banach space, its continuous dual pairing, and the subdifferential as the supporting-functional inequality. It explicitly permits an empty subdifferential and makes no pointwise nonemptiness claim.
- **Sources:** Kaltenbacher (2024), §1, definitions (1.25)–(1.26), PDF p. 6; Borwein–Vanderwerff, Chapter 4, §§4.1 and 4.4 (Banach convex-function and dual-pair framework). Both complete texts are recorded in A-page coverage and fetch-verified.
- **Dependencies:** `def-banach-space`, `def-dual-space-of-a-normed-space`, `def-convex-and-strictly-convex-functionals-on-a-banach-space`, `def-proper-coercive-and-weakly-lower-semicontinuous-functional`; no in-run suppliers, so level 0.
- **Decision/checks:** Recorded `ready` with `owner:false`. The item is on the A page; scoped renderer, content-policy, dependency, forward-reference, citation and page checks passed. No independent approval is inferred.
- **Next action:** No authoring obligation remains for this item; its Step 1 record is hash-bound to its dependencies.

### `lem-ip-index-function-young-conjugate-bound`

- **Claim:** From `c_1 r + c_2 alpha e <= d + alpha psi(C_3 r)`, the Fenchel supremum bounds `e` and `r` separately, with the two fixed negative conjugate arguments recorded in the statement.
- **Sources:** Kaltenbacher (2024), Lemma 2, equations (2.2)–(2.3), complete Appendix A.1 proof (PDF pp. 8 and 24); Weidling (2019), Theorem 2.20 and complete proof (PDF pp. 46–47 / printed pp. 44–45).
- **Dependencies:** None; the statement defines the extension and conjugate used by the proof. Item level 0.
- **Decision/checks:** Recorded `ready` with `owner:false`. The two-step proof passes proof-layout and precheck; its strict contract and all scoped content/render/dependency checks pass. No independent approval is inferred.
- **Next action:** No authoring obligation remains for this item; its Step 1 record is hash-bound to an empty dependency list.

### `lem-ip-banach-fenchel-duality-for-regularization`

- **Claim:** For a proper convex Banach regularizer, the directly defined conjugate satisfies Fenchel–Young inequality, with equality exactly at a subgradient.
- **Source:** Borwein–Vanderwerff, *Convex Functions: Constructions, Characterizations and Counterexamples*, Proposition 4.4.1(a), complete proof (PDF pp. 180–181 / printed pp. 171–172). The local proof is derived from the supremum definition and does not require lower semicontinuity.
- **Dependencies:** `def-ip-banach-convex-subgradient-and-dual-pairing`; level 1.
- **Decision/checks:** Recorded `ready` with `owner:false`. The three-step proof passes proof-layout and precheck; the exact supplier quote and strict contract validate, along with scoped checks. No independent approval is inferred.
- **Next action:** No authoring obligation remains for this item; its Step 1 record is hash-bound to the Banach subgradient definition.

### `def-ip-bregman-distance`

- **Claim/convention:** Defines the oriented Bregman distance `R(x)-R(x^dagger)-<xi^dagger,x-x^dagger>` for `xi^dagger in partial R(x^dagger)`, records nonnegativity from the preceding Fenchel lemma, and fixes the comparison/reference argument order used by the VSC.
- **Sources:** Kaltenbacher (2024), equation (1.25), PDF p. 6; Weidling (2019), Chapter 2 Bregman-loss notation and Example 2.23 (printed pp. 46–47).
- **Dependencies:** `def-ip-banach-convex-subgradient-and-dual-pairing`; `lem-ip-banach-fenchel-duality-for-regularization`; level 2.
- **Decision/checks:** Recorded `ready` with `owner:false`. Definition placement, statement references, renderer, content-policy, dependency and forward-reference checks pass; no proof-phase contract applies. No independent approval is inferred.
- **Next action:** No authoring obligation remains for this item; its Step 1 record is hash-bound to the subgradient and Fenchel suppliers.

### `def-ip-variational-source-condition`

- **Claim/convention:** Defines the VSC with exponent `p`, continuous nondecreasing concave index function, selected Banach subgradient, coefficient `0 <= beta < 1`, and explicit regularizer sublevel `R <= R_0`. The statement makes no minimizer-existence or universal subgradient claim.
- **Sources:** Clason (2020), equation (10.17), PDF p. 100 / printed p. 97; Weidling (2019), equations (2.22) and (2.26), printed pp. 44–46; Kaltenbacher (2024), equations (1.28)–(1.31), PDF p. 6.
- **Dependencies:** `def-ip-banach-convex-subgradient-and-dual-pairing`; `def-ip-bregman-distance`; level 3.
- **Decision/checks:** Definition drafted and placed on the A page; no proof-phase contract applies. Scoped format/render/dependency and readiness checks remain pending; no approval is inferred.
- **Next action:** No authoring obligation remains for this item; its Step 1 record is hash-bound to the Banach subgradient and Bregman definitions.

### `thm-ip-vsc-nonlinear-regularization-rate`

- **Claim:** From an approximate-minimizer comparison, the VSC on a fixed regularizer sublevel, and the conjugate lemma, proves a Banach Bregman rate and noisy residual rate under explicit noise/parameter coupling. The penalty rate and Banach norm rate are stated only with their additional compatibility assumptions. The Hilbert quadratic specialization explicitly sets `p=2`, uses the open-domain nonlinear map, global `x_0`-minimum-norm solution, and quadratic Tikhonov objective, and gives `alpha ~ delta`, `O(sqrt(delta))` solution error, and `O(delta)` residual for a supplied global minimizer.
- **Sources:** Clason (2020), eq. (10.13) and derivation (PDF pp. 97–98 / printed pp. 94–95), eq. (10.17) (PDF p. 100 / printed p. 97), and Theorem 10.7 proof (PDF p. 101 / printed p. 98); Weidling (2019), Theorem 2.20 and full proof (PDF pp. 46–48 / printed pp. 44–46); Kaltenbacher (2024), Lemma 2/Appendix A.1 for the conjugate method. Kaltenbacher Theorem 3 itself is range-invariance-specific and is not used as a generic supplier.
- **Dependencies:** local Banach subgradient, conjugate lemma, Bregman and VSC definitions; batch-25 nonlinear-forward-map and x0-minimum-norm definitions; batch-26 nonlinear Tikhonov functional; published norm triangle, real inner-product identity, and Cauchy–Schwarz suppliers used for the Hilbert specialization. Item level remains 4.
- **Decision/checks:** Recorded `ready` with `owner:false`. The canonical nine-step proof passes proof-layout and precheck; its 10 supplier facts and exact excerpts pass the strict contract. The theorem remains conditional on a supplied approximate/global minimizer. Scoped renderer, policy, dependency, forward-reference, citation, and source checks pass. No independent approval is inferred.
- **Next action:** No authoring obligation remains for this item; its Step 1 record binds all direct local, batch-25, batch-26 and published item dependencies.

### `cex-ip-vsc-unit-coefficient-does-not-control-bregman-error`

- **Claim/refutation:** At `beta_1 = 1`, the VSC can hold globally for a proper convex regularizer while exact-data Tikhonov has a flat minimizer set containing a minimizer with Bregman distance one. The explicit choice `x_delta=1`, `alpha=delta`, `y_delta=0` is not `O(delta)`.
- **Sources:** Weidling (2019), Theorem 2.20 (strict coefficient absorption) and equation (2.26), printed pp. 44–46; the counterexample and all calculations are local.
- **Dependencies:** Banach subgradient definition, Bregman definition, VSC definition; level 4. It does not use the rate theorem as a proof premise.
- **Decision/checks:** Recorded `ready` with `owner:false`. The two-step refutation passes proof-layout, precheck and its strict contract; focused page, renderer, policy, dependency and citation checks pass. No independent approval is inferred.
- **Next action:** No authoring obligation remains for this item; its Step 1 record is hash-bound to the three definitions.

### `ex-ip-power-index-bregman-rate`

- **Claim:** For `psi(t)=A t^mu`, `0<mu<1`, the Fenchel conjugate is an explicit power; `alpha ~ delta^{p(1-mu)}` satisfies the rate theorem's coupling and produces Bregman rate `delta^{p mu}` and residual rate `delta`.
- **Sources:** Weidling (2019), equation (2.25a), printed p. 46; Kaltenbacher (2024), equation (1.32a), PDF p. 6. The maximization and parameter scaling are derived in the Verification.
- **Dependencies:** `lem-ip-index-function-young-conjugate-bound`, `def-ip-bregman-distance`, `def-ip-variational-source-condition`, `thm-ip-vsc-nonlinear-regularization-rate`; level 5.
- **Decision/checks:** Recorded `ready` with `owner:false`. The two-step verification passes proof-layout and precheck; the theorem application, exact supplier excerpts, and strict contract validate, along with scoped checks. No independent approval is inferred.
- **Next action:** No authoring obligation remains for this item; its Step 1 record is hash-bound to the conjugate lemma, Bregman/VSC definitions, and rate theorem.

### `ex-ip-logarithmic-index-bregman-rate`

- **Claim:** For the capped logarithmic index `psi(t)=(-log(min{t,t0}))^(-nu)` with `nu>0` and `t0<exp(-(nu+1))`, prove concavity and `H(q)~(log q)^(-nu)`. The coupling `alpha=delta^p(log(1/delta))^nu` gives Bregman and penalty rates `O((log(1/delta))^(-nu))`, residual `O(delta)`, and a norm rate only under an explicit Bregman lower bound.
- **Sources/locators:** Weidling (2019), equation (2.25b), printed p. 46 / PDF p. 48; Kaltenbacher (2024), index definition (1.32b), conjugate discussion on PDF p. 6. Full text inspected. The local proof derives the critical point `q=nu/(s L^(nu+1))`, `L=-log(s)`, and hence the conjugate asymptotic rather than importing the parameter shortcut in Kaltenbacher Remark 1 (PDF p. 11), which does not meet coupling (2.5) for the simultaneous residual and Bregman conclusions when `tilde_p < p`.
- **Dependencies:** `lem-ip-index-function-young-conjugate-bound`; `def-ip-bregman-distance`; `def-ip-variational-source-condition`; `thm-ip-vsc-nonlinear-regularization-rate`; item level 5.
- **Decision/checks:** Recorded `ready` with `owner:false`. The three-step verification passes proof-layout and precheck; the exact supplier excerpts, strict contract, source stamps, and all scoped renderer/policy/dependency/citation checks pass. No independent approval is inferred.
- **Next action:** No authoring obligation remains for this item; its Step 1 record is hash-bound to the conjugate lemma, Bregman/VSC definitions, and rate theorem.

## Final validation and owner-level run status

- **Proof and rendering:** `proof-layout` passed for all 9 assigned carriers (21 numbered steps, 0 defects); `precheck` passed all 6 proof-bearing carriers; `proof-contract --strict` passed 6/6 (0 errors or warnings); `rendercheck` passed all 9 carriers and both pages. The A page has 6 items, the B page 3 examples, both page bodies are empty, and no summaries were authored. `page_layout: compact-v1` remains the engine's post-authoring preparation; it was not added manually while the run is held at `1-scaffold`.
- **Scope and source checks:** `content-policy` passed 9/9 items; focused `depcheck` and `fwdcheck` passed for all 9 items and their prerequisite closures; `citecheck` passed 9/9; citation fidelity checked 19 excerpts with no missing quotes or widening candidates; citation faithfulness had 0 candidates; truncated-citation found 0 candidates. `coverage-checklist` passed 1 A page / 21 harvested results with no warnings; all 4 complete-text sources have fetch stamps and 0 documented drops.
- **Dependencies and readiness:** The final scoped level recomputation found no cycles or mismatches: `0, 0, 1, 2, 3, 4, 4, 5, 5`; direct batch-25/26 suppliers have levels `1, 2, 1`. `step1-decisions` recorded all 9 assigned items `ready` with `owner:false` and their direct dependencies. The run-wide Step 1 read found no stale/missing record for these items and no work row for either assigned page; it remains open because other run items/pages are unfinished.
- **Owner-level blocker:** The final read-only Autopilot status (latest repository commit `50139bdcb6`) still shows stage `1-scaffold` at `59/109`, lists batches `21, 24, 27, 28, 29, 30, 32, 41, 42` as missing, and defers artifact completion until authoring coverage is complete and writers drain. No workers are in flight. It retains the owner repair/recertification blocker in `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json` and reports the unit-prerequisite cycle `74 -> 75 -> 74`. This is outside batch 27's write scope; no runtime, verdict, shared plan, or other batch file was changed. The batch's readiness records are author-side evidence, not independent review or run acceptance.
