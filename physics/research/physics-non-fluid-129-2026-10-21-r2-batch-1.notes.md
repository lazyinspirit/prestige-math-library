# Batch 1 notes — Phases And Limits

## Disposition

The current plan inventory is recorded in `physics-non-fluid-129-2026-10-21-r2-batch-1.pages.json`: 9 A-page items and 10 B-page examples. The existing item and page bodies were left unchanged because all 19 items and both pages are already `published`. The manifest uses the current in-run item dependency levels. All 19 current Step 1 records are `escalated` because their published item frontmatter still carries the prior run's levels; the exact mismatch is below.

The pages are assigned to this batch, but their published page summaries contain outdated status text. The A page says “All items and pages remain drafts pending independent review” at line 18, and the B page says “These draft examples … remain pending independent review” at line 14. Both page frontmatters and all 19 item carriers currently say `status: published`. These are owner-owned published page edits, so they were not changed.

## Plan and design reconciliation

- The track design lists A order 281; the current task and `plan-spec.json` list A order 282 and B order 283. The current plan controls, and those orders are used in the batch manifest.
- The design lists two earlier A-page requirements (`td-math-mixture-dynamics-and-shells`, `td-potentials-and-responses`). The current plan lists these 12 A requirements: `td-math-mixture-dynamics-and-shells`, `td-potentials-and-responses`, `td-math-continuum-pressure`, `construction-of-the-natural-numbers`, `roots-and-rational-powers`, `the-inverse-function-theorem-completed`, `the-total-derivative`, `sigma-algebras-and-borel-sets`, `measures-and-their-basic-properties`, `the-lebesgue-integral-and-the-convergence-theorems`, `compactness-in-metric-spaces`, and `linear-maps-rank-nullity-and-quotient-spaces`. The B requirements are `td-phases-and-limits` and `power-series-and-real-analytic-functions`. These current plan lists are preserved in the manifest; every required page is outside this run's manifest set.
- The design's 8 named A IDs are present in the current 9-item A inventory. The current plan adds `pthm-td-fixed-tp-reaction-potential-minimum`, which is used by `pthm-td-reaction-boundary-equilibrium`; the plan inventory is preserved. The 9 A items fit the 30-item design cap, and the 10 B items fit the 16-item cap.
- No owner authoring-direction file was present at `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md`.

## Dependency inventory and levels

The recorded batch-level graph has batch 1 at level 0 with no cross-batch batch prerequisites. All page `requires` targets are outside this run's current page manifests. The B-to-A page edge is within batch 1, so `physics-non-fluid-129-2026-10-21-r2-batch-1.cross-batch-dependencies.json` is the empty array. The item dependency graph for this pair has no cycles and no cross-batch item edges.

The run-specific item levels, computed from the 19 planned items and their actual `deps`, are:

| Current level | Item IDs | Existing published frontmatter levels |
|---|---|---|
| 0 | `def-td-thermodynamic-limit-contract`, `pthm-td-fixed-tp-reaction-potential-minimum`, `def-td-phase-and-coexistence-domain`, `ex-td-reaction-boundary-example`, `cex-td-noncompact-phase-mixture-no-attained-maximum` | 3, 7, 8, 1, 1 |
| 1 | `pthm-td-intensive-coexistence-conditions`, `pthm-td-reaction-boundary-equilibrium`, `pthm-td-compact-continuous-phase-mixture`, `ex-td-finite-two-state-partition-smooth`, `ex-td-vdw-positive-slope`, `ex-td-phase-fraction-lever-rule`, `ex-td-phase-rule-single-component`, `ex-td-reactive-phase-rule-three-component` | 9, 9, 9, 4, 9, 9, 9, 9 |
| 2 | `pthm-td-clapeyron-local`, `pthm-td-regular-gibbs-phase-rule`, `ex-td-compact-continuous-phase-mixture` | 10, 10, 10 |
| 3 | `rem-td-nonsmooth-phase-scope`, `ex-td-clapeyron-linear-branches`, `cex-td-clapeyron-zero-volume-jump` | 11, 11, 11 |

These levels are current for this run: external suppliers have level zero in this batch graph, while in-batch suppliers determine levels 1–3. Each current item frontmatter field differs from its required level. The manifest records the recalculated levels; changing the published item frontmatter is outside this beta's write scope. This is the reason for the per-item Step 1 escalations. The missing records observed before recording were not treated as prerequisite gaps.

The post-manifest `batch-dependency-levels.mjs check` reports the shared run-level file stale because its input hash predates the populated manifest. Its batch-1 graph remains level 0 with no requirements. The shared file was left unchanged for the drained owner join to recompute.

`depcheck` also reports transitive supplier homes beyond the direct page `requires` lists, including earlier published Thermodynamics and mathematics pages. They are existing external context, not edges to another current run batch, so they do not create cross-batch review rows.

## Source and proof evidence

The coverage file retains the prior pair's full-text reading, fetch-attempt, and disposition history from `physics-td-qft-rpm-62-2026-10-14-batch-13.coverage.json`. In this turn I inspected the full relevant sections of [Tong, *Statistical Physics*, §§5.1.1–5.1.2](https://davidtong.org/teaching/statistical-physics/statmechhtml/S5) and [Likharev, *Essential Graduate Physics: Statistical Mechanics*, §4.1](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions). The source records distinguish their contextual phase-equilibrium, Clapeyron, and phase-rule treatments from the local conditional arguments. `source-fetch-check --stamp` reused the six prior successful body stamps: 6/6 sources resolved, none newly stamped, none dropped.

The historical compact-mixture blocker is not carried forward. The current published `pthm-td-compact-continuous-phase-mixture` proof (steps 2.1–5.1) locally proves compactness of the finite-dimensional convex hull, approximation of every Borel mixture by finite mixtures, attainment at the fixed barycenter, and reduction to at most `d+1` atoms. Its `deps` do not include the historically flagged batch-12 attainment item. The copied proof contracts were checked against the current carriers in a pair-scoped temporary validation root; all 16 supplied arguments are covered. No item proof or page body was edited.

## Scoped checks

- `content-policy.mjs --manifest-only --authored`: 19 items, 0 errors, 0 warnings.
- `manifest-deps.mjs`: 19 items, 0 missing `deps` arrays, 0 errors.
- `coverage-checklist.mjs`: 2 pages, 33 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --stamp`: 6/6 fetch-verified, 0 newly stamped, 0 documented drops.
- Pair-scoped item dependency calculation: 19 items, maximum level 3, no errors.
- `depcheck.mjs --items-file`: selected item checks and dependency-cycle checks passed; closure 699 items across 201 pages.
- `rendercheck.mjs`: 21 item/page files passed YAML and math rendering checks.
- `proof-layout.mjs`: 19 items, 54 proof steps, 0 defects.
- Pair-scoped `proof-contract-coverage.mjs`: 19 items, 16/16 supplied arguments covered. The full-run invocation remains unavailable because another run page, `emx-paraxial-optics`, still has an empty manifest inventory.
- `batch-dependency-levels.mjs check`: stale shared input hash after this manifest edit; owner recomputation remains required at the drained construction join.

## Owner resolution needed

Please decide whether this already-published pair should be removed from the new Step 1 authoring frontier as read-only reused content, or whether an owner-authorized metadata/page repair should reconcile the published `dependency_level` fields and the two stale page-summary status statements. Until that disposition, these item readiness records remain escalated and no published carrier is changed.
