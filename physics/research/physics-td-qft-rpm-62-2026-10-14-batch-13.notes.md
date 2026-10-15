# Batch 13 — Step 1 authoring notes

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: beta  
Pair: `td-phases-and-limits` / `td-phases-and-limits-examples`

## Scope and plan reconciliation

The design at `research/plan-thermodynamics-track.md` § “Phases And Limits” names eight A-page items and reserves caps of 30 A items and 16 B items. `plan-spec.json` agrees on page IDs, title, category, order, library, and prerequisites, but keeps both `items` arrays empty as scaffolds. The authored inventory retains all eight named A items and adds the local supplier `pthm-td-fixed-tp-reaction-potential-minimum`, required to prove the assigned reaction-boundary theorem. The A page has 9 items and the B page has 10 examples; both remain below their reserved caps. No page-scope or prerequisite conflict was found.

The A page is ordered from local definitions and the fixed-`T,p` potential result through coexistence conditions, reaction boundaries, Clapeyron, compact-mixture attainment, the regular Gibbs phase rule, and the nonsmooth-scope remark. The B page supplies finite, analytic, constructed, and counterexample cases. The compact-mixture consumers are written conditionally against the current batch-12 statement and are escalated below; no missing prerequisite was omitted or treated as proved.

## Sources and coverage

Coverage, locators, supported items, dispositions, retrieval history, and stamps are recorded per result in `research/physics-td-qft-rpm-62-2026-10-14-batch-13.coverage.json`. The two independent treatments used for the A page are Tong’s complete author-hosted lecture text and Likharev’s textbook/complete lecture sections; the B page uses Tong and Likharev as well.

- [David Tong, Statistical Physics, Chapter 4](https://davidtong.org/teaching/statistical-physics/statmechhtml/S4), complete HTML, §§4.3.3 and 4.4. Supports the fixed-temperature/pressure potential argument and the Gibbs differential context. Results are marked `included` or `inline` in coverage.
- [David Tong, Statistical Physics, Chapter 5](https://davidtong.org/teaching/statistical-physics/statmechhtml/S5), complete HTML, §§5.1.1–5.1.3 and 5.4.3. Supports coexistence, Clapeyron, van der Waals, critical-scope qualifications, and thermodynamic-limit context. Results are marked `included` or `inline`.
- [K. K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions), complete HTML. Supports first-order coexistence, van der Waals, Maxwell construction/phase fractions, Clapeyron, and the Gibbs phase rule. Results are marked `included` or `inline`.
- [K. K. Likharev, §4.2 Continuous phase transitions](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.02%3A_Continuous_phase_transitions), complete HTML. Supports the qualified continuous-transition/critical-scope remark; the separate critical-boundary treatment is explicitly marked `out-of-scope`.

All six page/source entries have full-text fetch stamps; `source-fetch-check` verified 6/6, with no retrieval failures, recovery retries, or source drops. Coverage checklist reports 2 pages, 33 harvested results, 0 errors, and 0 warnings. No `source_resolution` failure record was needed.

## Cross-batch interfaces

The current batch-9 page contains 12 A and 2 B carriers. The registered draft potential differential and Euler/Gibbs–Duhem interfaces match the consumers, including the explicit same-tag homogeneity premise. The local Clapeyron theorem states that premise separately: tagged scaling does not imply fixed-tag homogeneity. The potential-differential proof remains conditional on its inspected local-energy and smooth partial-Legendre suppliers. These reviewed interfaces are recorded in `research/physics-td-qft-rpm-62-2026-10-14-batch-13.cross-batch-dependencies.json`.

The current batch-12 page contains 13 A and 4 B carriers, including `thm-tdmath-compact-continuous-mixture-attainment`. Its statement matches the conditional consumer interface: nonempty compact `K ⊂ R^d`, `d ≥ 1`, continuous scalar objective, fixed barycenter in `conv K`, attained minimum over Borel probability measures, and a minimizer with at most `d+1` atoms. Its proof is not complete:

1. Step 5.1 cites nonexistent step 2.2; the relevant minimum/comparison is in step 3.1.
2. Step 4.1 invokes uniform continuity without a proved or cited Heine–Cantor input, and asserts a finite Borel partition without constructing one.

This cross-batch defect affects `pthm-td-compact-continuous-phase-mixture`, `rem-td-nonsmooth-phase-scope`, `ex-td-compact-continuous-phase-mixture`, and `cex-td-noncompact-phase-mixture-no-attained-maximum`. Their local conditional arguments are complete, but they are escalated and not marked ready. Proposed repair belongs on the batch-12 supplier: correct the step reference; add/cite `thm-heine-cantor-metric` with the compact metric hypotheses; and construct the finite Borel partition by taking a finite small-diameter relative-open cover of compact `K` and successively subtracting earlier sets. No batch-12 item was edited.

Batch 8’s current `pthm-td-local-energy-representation` still says the batch-4 local-rank supplier is unregistered; the current batch-4 manifest does register `thm-tdmath-local-implicit-rank`. This is a stale bookkeeping sentence, not a changed interface. The source proof remains conditional on its current C1 graph interface. No batch-8 or batch-4 item was edited.

Two direct prerequisites newly recorded in the assigned items, manifest, and seam evidence are `post-td-bulk-additivity` for `pthm-td-clapeyron-local` (the tagged scaling caveat) and `def-td-equilibrium-state-domain` for `pthm-td-reaction-boundary-equilibrium` (positive-mole charts exclude zero amounts). Their current batch-1 draft interfaces were inspected and match those uses.

## Checks and readiness

- `manifest-deps`: 19 items, no missing dependency arrays or errors.
- Manifest item metadata (domain, library, roles, physical scope, level, and ordered dependencies) matches all 19 item frontmatters.
- `depcheck` on the 19 assigned items: 0 errors, 0 warnings; dependency closure 664 items.
- Scoped dependency-level audit: the 19 assigned items currently reach 48 in-run items, with 0 level mismatches. Batch 13 recomputes to level 4 and requires batches 1, 2, 4, 8, 9, 11, and 12.
- `content-policy`: 19 items, 0 errors, 0 warnings.
- `precheck`: 19 files, 16 proof-bearing files checked, 0 failures.
- `rendercheck`: 19 items, 0 errors, 0 warnings.
- Strict proof-contract check: 16 proof-bearing items, 0 errors, 0 warnings. Contracts use the final numbered steps and the applicable boundary evidence.
- `coverage-checklist --require-destination`: 2 pages, 33 harvested, 0 errors, 0 warnings. `source-fetch-check`: 6/6 stamped.
- Run scope ledger: 128 pages owed, 128 present, no missing or added pages.
- Explicit `proof-layout` scan was attempted on the assigned items. The renderer cannot load the application component because the app checkout’s `ItemBody.tsx` import `@/components` is unresolved (`ERR_MODULE_NOT_FOUND`); this is an environment blocker, not an item-level pass.
- Run-wide `proof-contract-coverage` is blocked by the unrelated empty scaffold page `rpm-external-charge-examples`.
- Run-wide `item-dependency-levels` reports unrelated empty scaffolds `rpm-external-charge-examples`, `qft-mx03`, `qft-mx03-examples`, `qft-g02`, `qft-g02-examples`, `qft-x02`, `qft-x02-examples`, `qft-x03`, and `qft-x03-examples`. It also reports these external recorded/computed level mismatches: `thm-qft-example-massive-tree-annihilation` 3→5; `ex-qftmath-x04` 4→6; `def-qft-qed-physical-gauge-quantities` 0→3; `post-qft-free-photon-model` 0→7; `post-qft-qed-local-coupling` 1→8; `pthm-qft-photon-physical-properties` 1→8; `pthm-qft-photon-local-observables` 1→8; `pthm-qft-qed-classical-coupling` 2→9; `pthm-qft-qed-coulomb-constraints` 3→10; `texp-qft-photon-auxiliary-comparison` 2→9; and `texp-qft-qed-neutral-cell` 4→11. None belongs to batch 13.
- Run-wide `batch-dependency-levels check` says the shared schedule is stale. The recomputed batch-13 level remains 4; the shared schedule was not written.

Step 1 records were created for all 19 assigned items without `--owner`: 15 `ready`, and the four compact-mixture-dependent items above `escalated`. The records captured a 47-item in-run closure; the latest read-only recomputation now reaches 48 with no mismatches, and all 15 ready hashes remain current. Draft status remains unchanged; readiness is not independent approval.

## Run-state audit

The dispatch run name does not have a run-specific `.autopilot/physics-td-qft-rpm-62-2026-10-14` directory. Root `.autopilot` contains an older August state/report. Recomputing status from the parent repository was blocked because the status command attempted to create the missing run directory and received `EPERM`; it then reported no run configured or status file for the requested run directory. Git history contains no batch-13 manifest entry yet. No autopilot state, shared plan, verdict, or scheduling artifact was changed.
