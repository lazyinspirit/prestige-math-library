# Batch 70 authoring notes — `tgr-mg02`

## Plan and design reconciliation

The binding `plan-spec.json` page rows and the complete assigned design section agree on page IDs (`tgr-mg02`, `tgr-mg02-examples`), order (637/638), category (`thermodynamics-and-general-relativity-mathematics`), library (`mathematics`), titles, and the A-page requirements `cm-math-dynamics`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, and `gr-curvature-and-tides`. The B page requires the A page. There is no page-level design/spec conflict.

The planned A-page inventory had six items and the B page had four. The completed A inventory has seven because prerequisite inspection showed that the planned regular-center claims need an explicit local proof that even radial C2 coefficients extend to a Cartesian C2 center. `lem-tgr-even-radial-center-regularity` is that additional supplier; it is recorded in the manifest with `inventory_expansion_required: true`. The addition does not exceed the 100-item page cap.

The owner authoring direction supersedes stale supplier wording in the design: the proposed `TGRGS-NRE2` continuation carrier is unavailable as an inspected current interface. The local theorem instead proves the singular center by a Volterra contraction and uses the published `thm-cm-compact-continuation-for-locally-lipschitz-odes` only for continuation on `r>0` while the graph stays compactly inside the positive-b EOS domain. The proof does not claim an EOS-independent global continuation theorem. The design's noncanonical Bianchi label is replaced by the actual published mathematical carrier `thm-gr-second-bianchi-and-divergence-free-einstein`; its contracted identity is used only in the stated converse. The page-level geodesics requirement is retained as planned but no geodesics result is an item-level proof input.

## Inventory and dependency levels

The current manifest and item frontmatter contain the same eleven items and direct dependency edges. Recomputed in-run item levels are:

- Level 0: `def-tgr-spherical-static-state-domain`; `lem-tgr-even-radial-center-regularity`.
- Level 1: `lem-tgr-spherical-einstein-tov-reduction`; `def-tgr-spherical-entropy-constraint-functional`.
- Level 2: `thm-tgr-tov-regular-center-local-existence`; `thm-tgr-constant-density-star-verified`; `thm-tgr-constrained-entropy-tov-criticality`.
- Level 3: `ex-tgr-regular-central-pressure-family`; `ex-tgr-constant-density-positive-branch`; `cex-tgr-constant-density-critical-center`; `cex-tgr-incompressible-causal-transport`.

There is no in-run dependency cycle. Each level is one plus the maximum level among that item's in-run suppliers, or zero when there is no in-run supplier. The run's scheduling ledger assigns batch 70 level 0. The per-batch cross-input file records the three required upstream page inputs and 42 direct external mathematical item edges with their inspected interfaces; it excludes the in-batch B-to-A page edge. This is input evidence, not independent proof approval.

## Source reading and disposition

Two independent full-text treatments were inspected for the A page, including a complete lecture-notes treatment:

1. Pierre-Henri Chavanis, “Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas,” complete 62-page arXiv PDF; Sections III.A–E and Eqs. (95)–(165), PDF pp. 16–24. The source supports metric/TOV context, proper-volume entropy and particle integrals, the exact constant-density pressure family, and Tolman/Klein first-variation context. Its sign/metric presentation differs from this workspace's `-+++` convention, so local curvature components and SI factors are independently derived. The source's Fermi-gas specialization, entropy-maximum/stability conclusions, broad Buchdahl claim, and Birkhoff/time-dependent exterior claim are not adopted.
2. MIT 8.962, Spring 2020 *General Relativity* Lecture Guide, complete 20-page PDF; static-spherical/TOV and Lecture 21 constant-density passages, PDF pp. 7–9. The guide supplies the required full lecture-notes treatment. It uses `G=c=1`; local formulas restore SI factors. Its TOV equations and uniform-density central-pressure discussion are corroborative context. Its Birkhoff and general Buchdahl statements are not used; its constant-density sound-speed warning is not treated as a transport law or signal-speed deduction.

The coverage file lists each named source result read, its destination/disposition, and the limitation on what the source supports. A Böhmer PDF candidate timed out once during source exploration; it was not selected or used. The two complete successful treatments above supply the source coverage, so no item depends on that candidate. Both selected PDFs were full-text fetched and stamped by `source-fetch-check --stamp` on 2026-10-17; the coverage records exact hashes, byte counts, and page counts. The check verified 2/2 selected sources, with zero documented drops.

## Scope and blockers

The workspace autopilot is at `1-drift-apply` with an owner hold: the owner receipt is stale because its attempt or current frontier hash differs. This batch does not modify shared plans, engine state, or verdicts. The existing category overview `library/thermodynamics-and-general-relativity-mathematics/_category.md` was left untouched. Both assigned page files are present in that category and the batch manifest matches them. The scoped path check reported no errors or warnings and no pathway files; these pages are drafts, so the missing pathway is not a placement blocker here.

## Scoped checks

Final scoped check results:

- `precheck.mts` through `tsx-run.mjs`: 9/9 proof-bearing items pass.
- `proof-layout.mjs` on all 11 explicitly changed items: 11 items, 39 proof steps, 0 defects.
- `rendercheck.mjs` on all 11 items and both pages: 13 files pass KaTeX, delimiter, wikilink-in-math, and renderer-YAML checks.
- `content-policy.mjs` on the batch manifest: 11 scoped items, 0 errors, 0 warnings.
- `depcheck.mjs` focused on the 11 items and two pages: selected dependency/closure cycle checks pass.
- Strict `proof-contract.mjs`: 9/9 proof-bearing items checked, 0 errors and 0 warnings. `proof-contract-coverage.mjs` cannot audit this run because the unrelated frontier inventory `emg-pcp01` is empty/invalid.
- `coverage-checklist.mjs --require-destination`: 1 A page, 18 harvested source results, 0 errors and 0 warnings. `source-fetch-check.mjs`: 2/2 selected sources fetched, stamped, and then reverified; zero documented drops.
- Recomputed batch-70 item levels locally: all 11 items match their declared levels, maximum 3, no cycles. The run-wide `item-dependency-levels.mjs check` remains red on empty inventories and unrelated level mismatches in other assigned batches (including `emg-g04`, `tgr-i01`, and `tgr-mg01`); no batch-70 mismatch was reported. Run-wide `batch-dependency-levels.mjs check` cannot read the shared frontier because it encounters a `null` item record. These shared inputs were left to the owner.
- Scoped `pathcheck.mjs` for this category: 0 pathway files checked, 0 errors, 0 warnings; the category overview exists and the assigned pages remain drafts.

The `step1-decisions check` reports all 11 assigned items with current `ready` records and no assigned-item blockers. Across the entire 285-item run, it reports 19 ready and 369 outstanding items/pages; global closure is blocked by unrelated batches and shared imported-mathematics provenance issues, including the stale imported snapshot for `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`. The autopilot remains at the previously inspected `1-drift-apply` stale-owner-receipt hold. None of these completion checks is independent approval.
