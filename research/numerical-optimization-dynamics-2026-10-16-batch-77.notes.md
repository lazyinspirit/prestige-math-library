# Batch 77 notes — Parareal and MGRIT

## Plan and scope

The controlling run direction is research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md. The assigned T19 section is the complete design at research/plan-numerical-dynamics-track.md §T19 and the current contract interface in research/numerical-analysis-four-category-scaffolds-2026-10-16/dynamics-audit.md.

No conflict was found between the assigned task, T19 in the controlling plan, and the current plan-spec.json row: the A/B IDs, category, order, and page requirements match. The audit's controlling warning is preserved: Parareal exactness is relative to the sequential fine trajectory; useful convergence is conditional; MGRIT has no generic rate. The two-grid theorem requires an actual error-matrix norm bound. The recursive multilevel algorithm is defined separately and receives no two-grid convergence claim.

The pre-existing T19 draft inventory was inspected and retained by ID. One local algorithm item, alg-mgrit-multilevel-recursive-cycle, was added to spell out the promised recursive cycle and per-level cost inputs. The former cor-parareal-continuous-target-error-decomposition also imported a direct batch-28 global-error supplier that was not in T19's approved prerequisites or the dependency-level input. It now keeps the promised decomposition with a separately supplied $\delta_F$ and makes no local-to-global ODE order claim.

## Inventory and dependency levels

The batch-level schedule remains level 4 with prerequisite batches 35 and 65 as in the supplied batch-dependency-levels.json input. Item levels are recomputed in batch-77.pages.json from all direct in-run suppliers; external norm/exponential/IVP definitions do not raise the in-run levels.

- Level 2: def-parareal-propagator-pair.
- Level 3: alg-parareal-correction-sweeps; def-linear-all-at-once-time-operator.
- Level 4: lem-parareal-first-k-nodes-are-fine-exact; thm-parareal-binomial-error-bound; lem-mgrit-exact-coarse-elimination; ex-parareal-dissipative-scalar-heat-mode.
- Level 5: thm-parareal-inexact-sweep-error-ledger; alg-mgrit-two-level-cycle.
- Level 6: cor-parareal-continuous-target-error-decomposition; thm-mgrit-contraction-implies-residual-and-error-decay; alg-mgrit-multilevel-recursive-cycle; ex-parareal-oscillatory-coarse-phase-error; ex-parareal-nonlinear-tube-escape.
- Level 7: ex-mgrit-scalar-diffusion-two-grid-contraction.

## Supplier-body inspection

The current RK page and its body def-explicit-runge-kutta-tableau-and-stage-map are present. The T19 map construction uses ordered, successful stage evaluations and explicit domain/evaluation-failure branches; it imports none of NA-15's order or stability theorems.

The current implicit page and def-backward-euler-step-equation are present. The endpoint equation permits no root or multiple roots on a restricted branch. T19 makes the root selector a declared input and reports branch failure if it cannot select one value. The residual definition expressly does not convert a residual norm to a forward error. The finite-solver effect remains an explicit Parareal update defect.

The transitive interfaces actually used by those supplier definitions were inspected: the first-order IVP domain/solution convention, explicit one-step method definition, Euclidean-space definition, and implicit residual units. Only their domain and algebraic conventions are used. No choice axiom, order result, stability result, uniqueness theorem, or residual-to-forward-error estimate is imported.

For the binomial estimate, I read the full proofs of [[lem-exponential-dominates-one-plus-x]] and [[thm-exponential-addition-formula]], together with their real-exponential definition, power-series convergence/Cauchy-product arguments, binomial coefficient identity, and the mean-value/derivative/positivity/order facts used transitively. The addition-formula proof uses the exponential function defined by the factorial-denominator series but omits `def-real-exponential-function-and-e` from its own direct `deps`; this batch declares that definition explicitly as a direct dependency of the binomial estimate and cites it in [F6]. Proposed owner reconciliation: add the missing definition edge to the published addition-formula supplier (with its Facts & Assumptions reference), without changing the proved formula.

## Source history and disposition

The T19 design's primary Parareal and MGRIT candidates were retrieved as full texts or replaced by full public sources listed in batch-77.source-coverage.json. The complete HAL deposit of Lions–Maday–Turinici was inspected; its original jump-propagation scheme is recorded as historical context and is not conflated with the standard map recurrence proved locally.

A guessed CWI repository URL (`https://ir.cwi.nl/pub/109/0109D.pdf`) returned a complete RKC paper, not the Parareal article; title inspection caught the mismatch and it is excluded. The SIAM book chapter PDF endpoints returned HTTP 403. After searching alternatives, full author lecture decks for Chapters 2 and 4 and independent MGRIT papers by Falgout et al. and Dobrev et al. were retrieved and inspected. The failed endpoints were not cited as support and no mathematical coverage was waived.

The Southworth preprint is retained as context for the limits of general linear two-grid convergence claims. Its assumptions are linearity, time invariance and additional operator hypotheses for stronger bounds; no temporal-approximation-property theorem is imported. The Dobrev theorem is used only as an independent comparison: its explicit estimates assume simultaneous unitary diagonalization and stable fine/coarse propagators. The local T19 theorem instead assumes the exact norm bound of its stated two-grid error matrix.

Lions–Maday–Turinici's original scheme and the standard modern recurrence differ in their correction construction. The standard recurrence and exact first-k proof are bound to Gander's complete lecture notes and the independent Falgout et al. paper; the original note supplies historical context only.

## Remaining owner reconciliation

The assigned supplier bodies and page carriers were present and inspected; no unresolved supplier IDs remain for this pair. The global batch dependency artifact's stored digest was supplied as 6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510. This assignment changes the batch-77 manifest contents, so the global derived digest may need owner refresh before a run-wide dependency gate. The shared dependency artifact and autopilot state were left untouched by this author.

## Source-check resolution and final carrier reconciliation

The original HAL `/document` URL returned a 1,445-character HTML error response in the initial request and five retries. Searching the exact title/identifier and querying the HAL API found the deposited file URL `https://hal.science/hal-00798372/file/CRAS_01_lions_maday_turinici.pdf`. Direct curl returned the complete 248,278-byte, nine-page PDF, and the article text on printed pp. 1–6 was inspected. The standardized `source-fetch-check` still received the same short HTML response from that endpoint in its initial request and five retries. Both URL histories, searches, and complete local replacement arguments/dependencies are preserved in the source record. The citation is dropped from active evidence because it has no unique mathematical role; the other six full-text sources are stamped, and the local proofs retain all claims. Final source check: 11/12 source records fetch-verified and 12/12 resolved (the HAL record is a documented drop; not a fetch stamp).

The page manifest now places 11 unique proof/construction items on the A page and four examples on the B page, matching the page carriers; the three Parareal examples are not duplicated as A-page items. The B-page source records are scoped copies of the stamped treatments cited by its examples. The recursive MGRIT cycle updates a coarse correction by solving each current restricted residual from zero and accumulating that correction, avoiding a second application of the prior correction. The Parareal work model now states the positive processor-count and nonnegative-cost assumptions, and the zero-sweep/status behavior is explicit.

The MGRIT contraction theorem defines the induced operator norm and states finiteness of $\|A_t\|$ and $\|A_t^{-1}\|$ as hypotheses for residual/error comparison; no finite-dimensional norm-equivalence theorem is silently imported. The scalar example checks these bounds directly in $\ell^\infty$ ($\|A_t\|_\infty\le7/4$, $\|A_t^{-1}\|_\infty\le175/64$) before applying the contraction result. The recursive algorithm now names each practical coarse matrix, the outer cycle budget, and the residual check points.

## Final scoped checks

The 15-item batch dependency closure contains 20 current-run items across five pages and has no level errors; all assigned labels match the computed levels listed above. Item/page manifest and carrier inventories also match. Focused `depcheck` passed with 0 errors and 0 warnings; strict proof-contract validation passed for 15/15 items; `precheck` passed 10/10 proof-bearing items; `proof-layout` passed 10 items and 34 steps with 0 defects; citation-fidelity found 29 exact supplier citations with no missing quote or widening candidate; boundary audit found 120 reviewed rows, no template reuse, and no contradicted disposition; and rendercheck passed the two page carriers.

The run-wide `item-dependency-levels` command still exits 1 on 36 errors outside batch 77: 34 other pages have empty scaffold inventories, and two unrelated SQP/BFGS items have stale labels (`alg-sqp-reduced-bfgs-kkt-step` and `thm-sqp-reduced-bfgs-superlinear-under-dm`). The run-wide output contains no batch-77 item errors. Those other pages, items, and the shared scheduling digest remain with the owner.

All 15 batch items have Step 1 `ready` records with their direct dependencies recorded; the focused readiness check verified 15/15 records against current item/dependency hashes. These records are authoring handoff evidence, not independent approval.

