# Batch 28 authoring notes

Run: numerical-analysis-remaining-71-2026-10-17  
Pair: conservative-finite-volume-weak-limits / conservative-finite-volume-weak-limits-examples

## Plan and scope

Read the owner direction, both NA-26 design sections, the plan-spec row, assigned task, and published prerequisite page. The owner direction makes no pair-specific change. The current plan-spec row points to research/plan-numerical-spatial-track.md NA-26, which controls. The older research/plan-numerical-analysis-track.md NA-26 has the same scope and proof route; no substantive plan conflict was found.

The A page requires the published scalar-conservation-laws-and-entropy-solutions page. Its current body supplies the scalar-law convention, bounded weak formulation, Rankine–Hugoniot condition, and Kruzhkov entropy definition used here. The B page requires the A page. The theorem assumes strong local L1 convergence and local uniform bounds, and concludes only the weak identity. It makes no compactness, CFL, or entropy conclusion.

Recomputed autopilot status remains at 1-scaffold with no worker in flight. The blocker requires owner repair and recertification on unit 1, not Batch 28. Batch authoring did not change engine state or advance the run.

## Inventory, dependencies, and levels

Eight A-page items and three B-page items are in scope. The table records direct item dependencies from the manifest. Levels count only in-run suppliers; the batch dependency level is 0 and there are no prerequisite batches.

| Level | Item | Direct dependencies |
|---:|---|---|
| 0 | def-locally-bounded-distributional-weak-solution | def-scalar-conservation-law-and-flux; def-distributional-weak-solution-of-a-scalar-conservation-law |
| 0 | def-conservative-finite-volume-scheme | def-scalar-conservation-law-and-flux |
| 1 | def-finite-volume-space-time-reconstruction | def-conservative-finite-volume-scheme |
| 1 | def-godunov-flux-for-burgers | def-conservative-finite-volume-scheme |
| 2 | lem-godunov-flux-for-burgers-is-continuous-and-consistent | def-godunov-flux-for-burgers; def-conservative-finite-volume-scheme |
| 2 | lem-finite-volume-discrete-summation-by-parts | def-conservative-finite-volume-scheme; def-finite-volume-space-time-reconstruction |
| 2 | lem-conservative-fv-face-fluxes-converge-in-l1loc | def-conservative-finite-volume-scheme; def-finite-volume-space-time-reconstruction; thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity; prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets; def-measure; prop-measure-monotonicity; thm-heine-borel-rn; thm-extreme-value-metric; thm-heine-cantor-metric; def-countable-choice |
| 3 | thm-conservative-finite-volume-weak-limit | def-conservative-finite-volume-scheme; def-finite-volume-space-time-reconstruction; lem-finite-volume-discrete-summation-by-parts; lem-conservative-fv-face-fluxes-converge-in-l1loc; def-locally-bounded-distributional-weak-solution; def-scalar-conservation-law-and-flux; def-distributional-weak-solution-of-a-scalar-conservation-law; def-countable-choice |
| 4 | ex-godunov-fv-captures-burgers-shock-speed | def-conservative-finite-volume-scheme; def-finite-volume-space-time-reconstruction; def-godunov-flux-for-burgers; lem-godunov-flux-for-burgers-is-continuous-and-consistent; thm-conservative-finite-volume-weak-limit; thm-rankine-hugoniot-jump-condition |
| 4 | ex-bounded-fv-reconstructions-need-not-be-strongly-compact | thm-conservative-finite-volume-weak-limit |
| 4 | cex-conservative-fv-weak-limit-need-not-be-entropic | def-conservative-finite-volume-scheme; def-finite-volume-space-time-reconstruction; def-godunov-flux-for-burgers; lem-godunov-flux-for-burgers-is-continuous-and-consistent; thm-conservative-finite-volume-weak-limit; def-kruzhkov-entropy-solution; def-countable-choice |

The two level-0 definitions and all published suppliers were checked before consumers. The three level-2 lemmas precede the level-3 theorem; all B items consume it at level 4. No cycle was found. Scoped depcheck covered the selected items and their existing-library closure (876 items, 225 pages; A/B page depths 45/46). No item depends on another in-run batch.

The face-flux lemma and weak-limit theorem use only ACω through the published translation theorem and bounded-set Lebesgue measure property. No Dependent Choice or arbitrary-index Axiom of Choice is used. def-countable-choice has an inherited full-AC metadata edge from its remark “AC implies ACω”; the authored claims do not assume full AC.

## Mathematical review

- The local weak-solution definition retains the initial boundary term, adds no entropy inequality or strong L1 trace, and justifies local integrability from compact support, local boundedness, continuity of f, and u0 in L1loc.
- The scheme fixes full-line half-open cells, cell-average data, a continuous diagonal-consistent two-state flux, and one shared signed face flux. The TikZ grid is explanatory; proofs use the update equations.
- The Godunov flux covers all shock/rarefaction branches. Its continuity proof checks switching boundaries and the axis portions where the shock branch does not switch.
- The discrete weak identity is derived by finite summation, time telescoping, and spatial reindexing. The face-flux lemma gives the translated-state limit on a fixed compact enlargement, continuity on a compact state square, and the initial-strip estimate.
- The weak-limit theorem separately controls initial averages, time quadrature, face-flux quadrature, and limit passage. Strong convergence and local uniform bounds remain hypotheses.
- The stationary shock is preserved with Rankine–Hugoniot speed zero. The dyadic bounded sequence is pairwise L1(K)-separated by 1/2 and is not claimed to arise from one fixed scheme. The expansion shock uses tau/h=2, converges locally in L1, and violates the k=1/2 Kruzhkov inequality; its moving-test time term is computed explicitly.

## Sources and source resolution

| Source | Read range and use |
|---|---|
| De Sterck–Ullrich, Introduction to Computational PDEs, [full course-note PDF](https://climate.ucdavis.edu/AM452.pdf) | Complete Chapter 3, PDF pp. 81–106, inspected from the full 143-page PDF. Used for cell averages, shared fluxes, conservation, integral balances, and Rankine–Hugoniot context. The source’s Theorem 3.1 omits hypotheses/proof required by the local theorem and is not proof evidence for it. |
| Benjamin Seibold, MIT OCW Lecture 19, [full six-page PDF](https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf) | All six pages inspected; used for cell-average update and Godunov scheme context, not for the weak-limit proof. |
| Chechkin–Goritsky, S. N. Kruzhkov’s lectures on first-order quasilinear PDEs, [complete 67-page PDF](https://www.math.ntnu.no/conservation/2009/011.pdf) | Read §4.1 through equation (4.3), PDF/printed p. 19, for the compactly supported interior weak identity convention. The exact initial-boundary-term formulation comes from the existing published supplier and local definition. |
| S. N. Kruzhkov, First order quasilinear equations in several independent variables, original MathNet PDF URL | Redirected to the site root on the initial request and five retries. Exact title/DOI/filename searches found the official article page but no other full-text copy; opening its official PDF link timed out. Removed from active item sources and retained in source_resolution as dropped. The local definition and integrability argument give complete coverage; no claim relies on the unread PDF. |

source-fetch-check --stamp verifies 3/4 listed sources and resolves 4/4 with one documented drop. Attempts, searches, alternative argument, URLs, locators, read extents, hashes, and content dispositions are in the source-coverage and source-evidence files.

## Checks and blockers

| Check | Result |
|---|---|
| Scoped item dependency levels | Pass: 11 items; 0, 0, 1, 1, 2, 2, 2, 3, 4, 4, 4; no cycles or label mismatches. |
| manifest-deps | Pass: 11 items, 0 normalized, 0 errors. |
| author-check | Pass: precheck, rendercheck, content policy, proof-contract; 0 content-policy errors/warnings. |
| Strict proof contracts | Pass: 11/11, 0 errors/warnings. |
| Proof layout | Pass: 11 items, 27 steps, 0 defects. |
| Scoped depcheck | Pass: selected item/page and prerequisite-cycle checks; 876 items, 225 pages in closure. |
| Scoped fwdcheck | Pass: 11 selected items; closure 856 items, 233 pages. |
| Scoped extcheck | Pass: 11 items; no recorded-not-proved or external fallback records. |
| Stamped source check | Pass: 3/4 fetched; 4/4 resolved with one documented drop. |

No finite-smoke check is registered: the claims are analytic, and the finite Burgers and dyadic calculations are explicit in the examples. Proof contracts contain supplier excerpts, derivations, boundary cases, and no unmapped proof steps.

The earlier whole-run item-level dependency scan did not pass because other batches have empty inventories and four stale level labels; this authoring pass did not edit other-pair files. The run remains held by the unit-1 owner blocker. Batch 28 scoped authoring evidence is complete; this is not independent approval or a run transition.

Step 1 readiness records were written for all 11 assigned items with their direct dependency IDs. A current hash check confirms all 11 records are ready. The whole-run readiness check remains open at 171/606 items, so these records do not close the run.

## Batch carriers

- Pages: research/numerical-analysis-remaining-71-2026-10-17-batch-28.pages.json
- Cross-batch dependencies: research/numerical-analysis-remaining-71-2026-10-17-batch-28.cross-batch-dependencies.json (empty; no in-run prerequisite batches)
- Scope: research/numerical-analysis-remaining-71-2026-10-17-batch-28.item-scope.json and research/numerical-analysis-remaining-71-2026-10-17-batch-28.page-scope.json
- Coverage: research/numerical-analysis-remaining-71-2026-10-17-batch-28.coverage.json
- Sources: research/numerical-analysis-remaining-71-2026-10-17-batch-28.source-coverage.json and research/numerical-analysis-remaining-71-2026-10-17-batch-28.source-evidence.json
- Proof contracts: research/numerical-analysis-remaining-71-2026-10-17-batch-28.proof-contracts.json
- Author check: research/numerical-analysis-remaining-71-2026-10-17-author-check-28.json
