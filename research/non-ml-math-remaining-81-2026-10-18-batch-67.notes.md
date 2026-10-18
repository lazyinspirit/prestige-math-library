# Batch 67 authoring and handoff notes

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: beta  
Assigned pair: `beilinson-bernstein-localization-and-category-o` (A, order 2948) and `beilinson-bernstein-localization-and-category-o-examples` (B, order 2949)

## Plan and scope reconciliation

Read the owner authoring direction before using the historical task/design text. Its localization direction incorporates the mandatory construction at `research/non-ml-math-remaining-81-2026-10-18-owner-drift-repair/localization/construction.md`: define the TDO convention by $\mathcal D_\kappa=\operatorname{Diff}(\mathcal O_X(\kappa+\rho))$, preserve arbitrary complex antidominant parameters and the stated regularity convention, prove the local PBW/global-section and exactness/unit/counit route, handle coherent submodules and singular Serre/parabolic kernels explicitly, and make no blanket derived-localization claim.

The complete design section at `research/plan-physics-algebras-track.md` §164 and the plan-spec entries agree on the A/B titles, category, order, and interfaces. The plan-spec has empty item arrays, so it supplies no competing item inventory. A requires `category-o-klr-and-hecke-categorification-route`; B requires A. No semantic plan/design conflict was found. The cross-batch record keeps the PA-35 page prerequisite open pending ordinary upstream acceptance; its current draft route-conventions item is not used as a proof supplier.

The dispatch and coverage record bind this assignment to scheduling input `825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042`. The assigned batch is at dependency level 2 and requires batch 66. This is consistent with its PA-35 prerequisite. The root run-wide batch-level file records batches 66 and 67 at levels 1 and 2 respectively; its `input_sha256` is a separate full-graph digest and is not the dispatch hash.

## Inventory and dependency order

The scaffold contains 20 A items and 6 B items (26 total; below the 100-item A-page cap). `dependency_level` is computed from in-run item edges only; external published suppliers do not raise an item's level. The batch manifest and item frontmatter agree, with no in-batch missing edge or cycle.

| Level | Items |
|---:|---|
| 0 | `def-pa36-flag-tdo-and-module`; `lem-pa36-complex-weight-central-character-separation`; `lem-pa36-module-global-sections-derived-cohomology`; `lem-pa36-p1-line-bundle-cohomology`; `lem-pa36-principal-nilpotent-borel-orbit`; `lem-pa36-qcoh-filtered-union-and-cech-colimits` |
| 1 | `lem-pa36-flag-tdo-pbw-and-twist`; `lem-pa36-nilpotent-normality-and-springer-functions` |
| 2 | `cex-pa36-positive-twist-global-sections-fail`; `ex-pa36-sl2-twisted-differential-operators`; `lem-pa36-partial-flag-twist-product`; `thm-pa36-global-twisted-differential-operators` |
| 3 | `def-pa36-global-sections-and-localization`; `lem-pa36-ample-translation-splittings` |
| 4 | `ex-pa36-integral-line-bundle-translation`; `ex-pa36-verma-delta-rho-shift`; `lem-pa36-localization-adjunction`; `thm-pa36-flag-d-affinity` |
| 5 | `lem-pa36-global-section-unit`; `lem-pa36-singular-parabolic-kernel` |
| 6 | `thm-pa36-antidominant-singular-serre-quotient`; `thm-pa36-regular-beilinson-bernstein-localization` |
| 7 | `cex-pa36-singular-localization-and-parabolic-kernel`; `cor-pa36-category-o-localization`; `thm-pa36-singular-parabolic-kernel-filtration` |
| 8 | `ex-pa36-finite-dimensional-integral-central-character` |

Local dependency computation: 26 items, maximum level 8, no errors. `manifest-deps` also reports 26 items, 0 normalized, 0 errors. The exact item `deps` remain in the batch manifest and carriers.

## Full-text sources and dispositions

The A page has three independent full-text treatments, including a book-length monograph and full lecture notes. Locators, supported items, fetch stamps, and each harvested-result disposition are recorded in [coverage](non-ml-math-remaining-81-2026-10-18-batch-67.coverage.json):

- Masaki Kashiwara, [“Representation theory and D-modules on flag varieties”](https://numdam.org/item/AST_1989__173-174__55_0.pdf), §§1.4–1.5, 4.6–4.16, 5.1–8.3, printed pp. 59–62 and 82–103.
- Yi Sun, [“D-modules and representation theory”](https://yisun.io/notes/dmod.pdf), §§3.4 and 4.1–4.7, printed pp. 30–43.
- Pavel Etingof, [“Representations of Lie Groups,” MIT 18.757](https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf), §§15.4, 16.1, 17.1–17.4, 27.2–27.4, 29.1–29.3, printed pp. 82–84, 88–90, 135–138, 143–146.

The coherent-sheaf and derived-cohomology helper proofs also use full Stacks Project texts: tags [01EA](https://stacks.math.columbia.edu/tag/01EA), [01DI](https://stacks.math.columbia.edu/tag/01DI), [01PD](https://stacks.math.columbia.edu/tag/01PD), and [01XY](https://stacks.math.columbia.edu/tag/01XY), plus Vakil, [*The Rising Sea* (29 August 2022 draft)](https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf), §19.1(vi)–(vii). The latter was fetched in full after the browser PDF opener failed; its extracted full text and inspected section are recorded in coverage. That recovery succeeded, so no further retry was made.

All 8 active coverage sources have verified fetch stamps; the current no-stamp check also reports 8/8 fetch-verified and resolved. Coverage records 73 harvested results, every one dispositioned, with 0 errors and 0 warnings. Earlier owner source review records failed, unused routes for HTT (HTTP 404) and Gaitsgde Category O notes (HTTP 403). They are not selected citations; the accessible Kashiwara, Sun, and Etingof texts were inspected as alternatives. No inaccessible source is marked dropped and no selected source remains unresolved, so no `source_resolution` waiver was added. The source-review history is retained at `research/non-ml-math-remaining-81-2026-10-18-owner-drift-repair/localization/source-review.json`.

## Mathematical completion and escalations

The local construction preserves the design's arbitrary-complex-weight and regularity conventions, derives the TDO PBW/twist facts locally, and supplies explicit global-section, adjunction, unit, regular localization, and Category O consequences. The new A-page helper `lem-pa36-partial-flag-twist-product` makes the partial-TDO and pullback-module interface explicit for the singular parabolic argument. No proof relies on a diagram.

Both singular obligations are now fully proved after genuine native drain. Three supplier lemmas establish the relative rank-one kernel classification, the exact twisted associated-bundle/descent interface, and the fixed singular Verma chain with globally generated terminal term. The simple-parabolic kernel lemma and full filtration theorem now prove both directions. The inverse image is the ordinary module $\mathcal O_{\mathbb P^1}\boxtimes N$; the central translation splittings are natural complex-sheaf/$U(\mathfrak g)$ maps, which suffice for split sheaf cohomology. The singular Serre representative argument includes full faithfulness.

The actual completed PA-35 four-carrier interface was read in full. Its BGG convention matches; no Hecke/KLR theorem is a localization premise. This resolves a reading/interface hold without claiming independent approval of PA-35.

Current scientific scope is 29 draft items (23 A, 6 B). Full native preimages, honest source review, exact current hashes and focused checks are in `research/non-ml-math-remaining-81-2026-10-18-owner-localization-completion/repair.json`. Root owns readiness, dependency-level recomputation and recertification; this repair changes no native receipts or stamps.

## Native historical evidence and checks

- `node tools/proof-layout.mjs items/*pa36*.md`: 26 items, 76 steps, 0 defects.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-67.proof-contracts.json --strict`: 26/26 items, 76 steps and 124 exact source excerpts; 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-67.coverage.json`: 8/8 fetch-verified and resolved.
- `node tools/coverage-checklist.mjs research/non-ml-math-remaining-81-2026-10-18-batch-67.coverage.json --require-destination`: 1 page, 73 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/non-ml-math-remaining-81-2026-10-18-batch-67.pages.json`: 26 items, 0 normalized, 0 errors. Scoped dependency-level recomputation: 26 items, max level 8, 0 errors.
- Step 1 receipts: all 26 items have current records: 24 `ready`, 2 `escalated`, 0 missing. Records use `owner: false`; the nine earlier closed ready records were preserved. Readiness is not independent approval.
- The run-wide `item-dependency-levels.mjs check` reports 112 errors in other batches; no batch-67/PA-36 item is named in that output. The scoped batch check above passes.
- The run-wide `batch-dependency-levels.mjs check` is blocked before comparison by a YAML parse error in another batch manifest: `Nested mappings are not allowed in compact mappings at line 17, column 14` (the `Yury Polyanskiy and Yihong Wu` title). No shared run-wide dependency file was rewritten. The assigned manifest's level/dependency input is still recorded above.

The A/B items remain drafts; published content, shared plans, engine state, and verdicts were not edited.

## Owner completion checks

The exact final 29-item scope is checked by precheck, rendercheck, proof-layout, strict proof contracts, focused dependency closure, coverage and content policy. Commands and outputs are recorded in the owner completion `checks.json`; the earlier native observations above are historical, not current readiness assertions. Native hard wrapping was normalized without changing mathematical statements. A stale `generation.role` on the literature-derived SL2 example was removed under content policy.
