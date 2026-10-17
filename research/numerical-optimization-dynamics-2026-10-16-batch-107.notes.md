# Batch 107 — Step 1 authoring notes

Run `numerical-optimization-dynamics-2026-10-16`, beta batch 107. Assigned pair: `global-sensitivity-anova-and-sobol-estimation` and its examples page. The authored carriers, manifest, coverage, contracts and cross-batch evidence are batch-local. No published item, shared plan, run engine state or owner verdict was changed.

## Design control and reconciliation

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task/design, owner direction, current batch evidence and dependency-level input before writing carriers.
- The controlling mathematical text is `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-uq2`, incorporated by `research/plan-numerical-optimization-track.md` at the UQ2 locations (lines 1522 and 1534). Those sections agree on scope. The plan-spec UQ2 and UQ2-B records preserve the same scope but have `items: []`; the assigned manifest and dependency-level input provide the item inventory. This is a plan-level placeholder, not a mathematical scope conflict.
- The older abbreviated design wording that the “owner supplies general product ANOVA and Poincaré proof” was superseded by the current owner direction and this batch assignment to author all missing local prerequisites. Accordingly the batch supplies and proves the product projections, finite Hoeffding decomposition and uniform-interval Poincaré lemma before their consumers. No theorem was weakened or omitted.
- Owner direction supersedes historical prose-only holds but retains all mathematical and evidence requirements. The UQ2 scope is preserved: independent-product ANOVA/Sobol, positive-variance normalization, pick-freeze identities and ratio inference, law-specific PCE completeness, derivative bounds, separate dependent-input Shapley effects, and noisy-output distinction.

## Inventory, dependencies and author order

The manifest contains 16 A items and six B examples. Every direct logical dependency is listed in item frontmatter and mirrored in the manifest; the local dependency levels were computed from in-run suppliers and authored in ascending order:

| Level | Items |
|---|---|
| 0 | `def-dependent-input-shapley-effects`, `def-product-coordinate-projections`, `lem-uniform-interval-poincare-inequality` |
| 1 | `alg-exact-permutation-shapley-effects`, `alg-monte-carlo-permutation-shapley-effects`, `lem-product-coordinate-projections-commute-and-contract`, `thm-shapley-effects-are-nonnegative-and-efficient` |
| 2 | `def-product-hoeffding-anova-components`, `thm-monte-carlo-shapley-effects-clt-and-standard-errors` |
| 3 | `thm-product-hoeffding-anova-decomposition` |
| 4 | `def-first-and-total-sobol-indices` |
| 5 | `thm-complete-chaos-tensor-expansions-give-sobol-coefficients`, `thm-pick-freeze-sobol-covariance-identities`, `thm-poincare-bound-for-total-sobol-effect` |
| 6 | `alg-pick-freeze-monte-carlo-sobol-estimators` |
| 7 | `thm-pick-freeze-sobol-ratio-joint-clt-and-mcse` |
| B level 2 | `ex-perfectly-correlated-inputs-and-shapley-allocation` |
| B level 5 | `ex-ishigami-function-sobol-decomposition`, `ex-polynomial-chaos-coefficients-and-sobol-indices`, `ex-zero-variance-sobol-indices-undefined` |
| B level 6 | `ex-noisy-simulator-intrinsic-noise-and-input-sensitivity` |
| B level 7 | `ex-ratio-pick-freeze-index-estimator-is-biased` |

The exact direct `deps` arrays are in `research/numerical-optimization-dynamics-2026-10-16-batch-107.pages.json`; all 22 item dependency levels and manifest membership are mechanically synchronized. The added Shapley monotonicity interface is a direct supplier to the Monte Carlo Shapley CLT and does not raise its level above 2.

## Supplier interfaces and axiom branches

- UQ1 batch 99 supplies the finite product PCE input definition, the positive-Gram degree-one construction and the finite tensor-basis definition. The current supplier bodies and all cross-batch excerpts were verified against the files. The PCE example proves its four-point basis is complete directly; finite cutoff and positive Gram hypotheses do not imply general polynomial density.
- The conditional-expectation projection supplier explicitly assumes AC. The dependent-input Shapley definition and its efficiency, Monte Carlo and correlated-input example retain that AC branch. The MC Shapley theorem now uses the proved monotonicity/range interface of the conditional-projection variance game.
- The Fourier proof of the sharp uniform Poincaré constant uses CC and DC through its exact Fourier and integration-by-parts suppliers; the total-effect bound inherits CC/DC. The complete-chaos coefficient theorem uses CC through complete-family Parseval and the real (L^2) Hilbert-space supplier. Neither branch assumes full AC.
- Product projections, the finite ANOVA decomposition, pick-freeze covariance identities, finite PCE example and noisy/bias examples use no choice principle. The algorithms are choice-free for a supplied finite game; their conditional-expectation sensitivity application inherits AC where stated.
- `lem-b-adic-anova-parseval` is a declared RQMC context only. Its actual uniform-cube and CC hypotheses do not identify its frequency blocks with arbitrary product-law conditional ANOVA components, and no local item imports it for that claim.

## Mathematical coverage

The A items define section averages before use, prove their (L^2) well-definedness and projection identities, prove the finite product Hoeffding reconstruction/centering/orthogonality/variance sum, and define first/total indices only for (V>0). Pick-freeze proofs derive both identities from product integration; the Monte Carlo algorithm specifies independent bundles and its zero-denominator branch. The ratio theorem proves square integrability under (f\in L^4), the iid row CLT, a globally Borel zero extension for the delta-method map, vanishing zero-status probability, and plug-in MCSE consistency. It makes no finite-sample unbiased-ratio claim.

The uniform Poincaré lemma proves the (L^2/\pi^2) constant by even reflection and Fourier Parseval and verifies equality for (g(x)=\cos(\pi(x-a)/L)). The complete-chaos formula explicitly assumes a real complete tensor ON family. The dependent-input definition/algorithms are separate from independent Sobol decomposition. The examples cover Ishigami interaction, perfectly correlated inputs, zero variance, a complete finite PCE basis, intrinsic simulator noise and a two-row ratio-bias calculation.

## Full-text sources and retrieval history

The A-page coverage records seven complete texts, exact locators, supported items and dispositions; the B page reuses four relevant stamped source records. The A-page treatments include the full Klein university lecture notes (30 pp., §§2.2.2–2.3, §3, §4), Saltelli (18 pp., §2), Owen (24 pp., §§2–2.1 and §7), Song–Nelson–Staum (24 pp., §3.1, §4, Theorem 3 and appendix proof), Lamboni et al. (20 pp., §3 and Theorem 3.1), Xiu–Karniadakis (26 pp., §§2–5), and the complete author-hosted Sobol–Kucherenko paper (9 pp., §3 and §4 Theorem 2). URLs and item-level locators are recorded in `research/numerical-optimization-dynamics-2026-10-16-batch-107.coverage.json`; Klein is a full lecture-note treatment and the remaining independent treatments provide cross-checks by topic.

The assigned Sobol (1993) author PDF returned an HTTP 400 timeout; complete independent treatments in Klein, Saltelli and Owen were retrieved and read, and every assigned identity is proved locally. The ScienceDirect result for Sobol–Kucherenko was only a landing page; the full 9-page author-hosted PDF was found and read. The ETH Sudret PDF returned an internal error; Xiu–Karniadakis was retrieved and read, and the finite PCE example is also checked directly on its four-point support. These histories, searches, replacements and affected-item arguments/dependencies are retained in `source_candidates` and `source_search` in the coverage file. No active source remains unresolved or dropped, so no `source_resolution` drop/escalation record was fabricated.

`source-fetch-check --stamp` verified the seven A-page source records; the current combined A/B check verifies 11/11 records. `coverage-checklist --require-destination` reports two pages, 34 harvested results, zero errors and zero warnings. Five finite B examples have explicit finite-smoke worksheets in their proof contracts.

## Scoped checks and handoff blockers

Final scoped results: precheck 15/15 proof-bearing items pass; rendercheck 22 items, zero errors/warnings; proof-layout 22 items, 49 steps, zero defects; strict proof-contract 22/22, zero errors/warnings; citation fidelity 100/100 quotes present; boundary audit 176 rows with zero contradicted candidates; depcheck/fwdcheck/extcheck/citecheck/content-policy pass with zero errors/warnings; item-dependency-level check passes 2010 run items across 214 pages, max level 16; manifest-deps passes all 22. All 29 distinct external direct supplier IDs exist; supplier excerpts, fact-link declarations and manifest/frontmatter dependency sets were checked.

The shared **batch-level** dependency check is still stale: `node tools/batch-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16` reports “Stale batch dependency levels ... recompute before authoring.” The local item dependency-level check passes. This is shared scheduling/run evidence and remains for the owner; it was not recomputed here.

`node tools/step1-decisions.mjs record` recorded 22 hash-bound local `ready` decisions, each with its exact direct dependency list and no `--owner` flag. The read-only live autopilot status before recording showed 104/107 covered; after recording it showed 106/107 covered, with batch 107 still missing while artifact completion is deferred until authoring coverage is complete and writers drain. The run remains `running` at `1-scaffold`, held for owner repair/recertification. `research/numerical-optimization-dynamics-2026-10-16-step1-blockers.json` identifies owner-held units 44 and 54 as artifact-incomplete and no longer running. These records provide local authoring evidence only; they do not clear that owner hold or constitute independent proof approval.
