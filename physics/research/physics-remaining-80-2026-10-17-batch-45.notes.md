# Batch 45 authoring notes — Explicit diagonal Fock domains and occupation trace

Run: `physics-remaining-80-2026-10-17`. Owner: beta. Scope: the assigned pair `qsm-bose-fermi-gases` and `qsm-bose-fermi-gases-examples` only.

## Plan and inventory reconciliation

The current plan and dispatch agree on A page `qsm-bose-fermi-gases` (order 587), B companion `qsm-bose-fermi-gases-examples` (order 588), category `quantum-statistical-mechanics`, library `physics`, and page prerequisites `csm-exact-models` and `qm-math-oscillator`.

The track design's original A reservation contains eight items and omits `def-qsm-identical-particle-fock-sectors` and `lem-qsm-fock-occupation-basis-and-car-relations`. The current paired inventory's A page list contains ten items and its B page list contains five. The current `plan-spec.json` and initial batch-45 page manifest had empty item arrays as scaffold placeholders. The owner direction and assigned batch inventory govern this authoring; the shared plan and source inventory were left untouched.

Some paired-inventory item rows name auxiliary `page` values (`qsm-models-mathematics`, `qsm-models-assumptions`, and subject-specific pages), while their `home` is `qsm-bose-fermi-gases`. The A page manifest's paired-inventory page list and those `home` values place them on this assigned A page. The exact inventory and statement/dependency fields now appear in `research/physics-remaining-80-2026-10-17-batch-45.pages.json`.

## Inventory and dependency levels

The run graph places batch 45 at level 2 and requires batch 34 at level 1. Recomputed item levels use the maximum level of same-run item suppliers, including batch 34 where applicable:

| Item | Level | Same-run supplier basis |
|---|---:|---|
| `def-qsm-identical-particle-fock-sectors` | 0 | none |
| `lem-qsm-fock-occupation-basis-and-car-relations` | 1 | Fock-sector definition (0) |
| `lem-qsm-models-diagonal-occupation-trace` | 2 | occupation-basis lemma (1) |
| `thm-qsm-models-lattice-riemann-bose-bound` | 1 | batch-34 CSM Gaussian/gamma helper (0) |
| `post-qsm-models-statistics-and-preparation` | 3 | diagonal occupation trace (2) |
| `pthm-qsm-dilute-occupation-limit` | 4 | postulate (3) |
| `pthm-qsm-oscillator-spin-ensembles` | 4 | postulate (3) |
| `pthm-qsm-periodic-ideal-occupation` | 4 | postulate (3) |
| `pthm-qsm-fermi-zero-temperature` | 5 | periodic result (4) |
| `pthm-qsm-homogeneous-bose-condensation` | 5 | periodic result (4) |
| `ex-qsm-dilute-occupation-limit` | 5 | dilute theorem (4) |
| `ex-qsm-oscillator-spin-ensembles` | 5 | oscillator/spin theorem (4) |
| `ex-qsm-periodic-ideal-occupation` | 5 | periodic theorem (4) |
| `ex-qsm-fermi-zero-temperature` | 6 | Fermi theorem (5) |
| `ex-qsm-homogeneous-bose-condensation` | 6 | Bose theorem (5) |

The authorship sequence followed those same-pair supplier edges: Fock sectors, occupation bases, diagonal trace, then model postulate/theorems and examples. Pure mathematical items use only mathematical premises; physical theorems state the adopted assumptions and retain joules, J$^{-1}$, kg, metres, and J s conventions where used.

## Supplier inspection and conditional gap

The current published local mathematics suppliers were read at their actual statements and proofs. The Fock construction uses the completed Hilbert tensor product and symmetric/antisymmetric projection items. The occupation trace lemma uses the exact trace-class, compactness, diagonal-adjoint, positive-square-root, and trace suppliers, plus the current published countable canonical differentiation, Bose/Fermi fluctuation, grand response, and oscillator items. Historical aliases M12, M16, and M36 are not treated as current carrier IDs:

- M12's required oscillator interface is supplied by the current published oscillator diagonal-adjoint/core, Hermite completeness, and oscillator scaling/realization items. Their exact domain, basis, and spectrum were checked.
- M16 maps to the current published summable canonical differentiation theorem. M36 maps to the current published mode-fluctuation lemma and grand-response covariance theorem. The latter mode lemma states its Bose formula only for $0<q<1$; the Fermi two-state formula for $q\ge1$ is derived locally.

The lattice theorem preserves the planned dependency on batch-34 `lem-csm-examples-gamma-gaussian-tools`. Its exact Gaussian/gamma calculation and proof were inspected. That item's parameter-derivative clause depends on `research-thermo-M17-controlled-continuous-integral`, whose complete bounded-box, positive-mass, compact-positive-beta research argument was read at `research/first-principles-2026-10-03/thermodynamics/scaffold/completed-developments.md#M17`; its named production item carrier is absent. The QSM lattice proof uses the CSM Gaussian/gamma value clause and does not use the conditional derivative clause. The cross-batch dependency and proof contract record the exact planned interface, status, and affected claims. The lattice theorem and its transitive periodic, Fermi, Bose-condensation, and corresponding examples remain readiness-escalated until the current production carrier exists and its actual interface is checked.

## Source research and retrieval

Two independent treatments were read for the A page:

- David Tong, author-hosted *Statistical Physics*, complete PDF retrieved; the complete relevant sections §§3.4, 3.5–3.5.3, and 3.6–3.6.2 were inspected, including their equations and assumptions. No claim is made that unrelated chapters were read.
- Mehran Kardar, official MIT OpenCourseWare 8.333 Lectures 22–25; each complete short lecture PDF was read: L22 (4 pp.), L23 (8 pp.), L24 (4 pp.), and L25 (5 pp.).

`research/physics-remaining-80-2026-10-17-batch-45.coverage.json` records exact locators, reading extent, harvested results, item support, and a disposition for every harvest. The source search and harvest found 20 results across five fetched source bodies. `source-fetch-check.mjs --coverage ... --stamp` fetched and verified all 5/5 bodies with no failures or recovery retries; a final check confirmed all stamps remain current.

## Readiness decisions

The eight `ready` and seven `escalated` decisions are recorded individually by `step1-decisions.mjs record` with examined direct dependencies. `ready` means required current inputs exist and the local proof/contract is complete; it is not independent proof approval. The seven escalations name the missing M17 carrier and preserve complete conditional arguments. No `--owner` override was used.

| Decision | Items |
|---|---|
| ready | `def-qsm-identical-particle-fock-sectors`; `lem-qsm-fock-occupation-basis-and-car-relations`; `lem-qsm-models-diagonal-occupation-trace`; `post-qsm-models-statistics-and-preparation`; `pthm-qsm-dilute-occupation-limit`; `pthm-qsm-oscillator-spin-ensembles`; `ex-qsm-dilute-occupation-limit`; `ex-qsm-oscillator-spin-ensembles` |
| escalated | `thm-qsm-models-lattice-riemann-bose-bound`; `pthm-qsm-periodic-ideal-occupation`; `pthm-qsm-fermi-zero-temperature`; `pthm-qsm-homogeneous-bose-condensation`; `ex-qsm-periodic-ideal-occupation`; `ex-qsm-fermi-zero-temperature`; `ex-qsm-homogeneous-bose-condensation` |

## Scoped checks

Final command outputs and any blockers are recorded after the final authoring pass below.

### Final check results and run-wide blockers

- `node tools/physics-support/proof-layout.mjs` on the 14 proof-bearing assigned items: **14 items, 60 steps, 0 defects**.
- Scoped `precheck.mts`: **15 items, 0 failures**; the postulate passed the nonproof structure check. The canonical layer-repair proposals were adopted before this pass.
- Scoped renderer check: **17 files, all math/YAML/link checks passed**, with no multiline display formulas.
- Strict proof-contract check: **15/15 items, 0 errors, 0 warnings**.
- Scoped content policy: **15 items, 0 errors, 0 warnings**.
- Coverage checklist: **1 A page, 20 harvested results, 0 errors, 0 warnings**. `source-fetch-check --stamp`: **5/5 full-text bodies fetched/verified**, 0 failures, 0 recovery attempts; final fetch check remains 5/5.
- Focused `depcheck` over the 15 assigned items and their prerequisite closure: **0 errors, 0 warnings**; 1,552 prerequisite items and 409 pages in the checked closure.
- Recomputed item levels for all 15 assigned items match the batch manifest and item frontmatter exactly (levels 0, 1, 2, 1, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6 in manifest order). No batch-45 item appears in the full-run `item-dependency-levels` errors. That full-run command exits 1 on **139 unrelated run-wide diagnostics**, including empty scaffold inventories such as `emg-pcp02` and `emg-pcp02-examples`; those other batches were left untouched.
- The current recomputed batch graph still gives batch 45 level 2 requiring batch 34. The run-wide `batch-dependency-levels check` reports its stored scheduling file stale. Comparison shows two unrelated current graph differences: batch 22 now requires batches 2 and 21 (recorded only 21), and batch 59 now requires 53, 54, 55, and 56 (recorded only 54 and 56). The recorded batch-45 row itself still matches (`level 2`, `requires [34]`). The shared run scheduling file was not rewritten; owner reconciliation is required.
- Final `step1-decisions.mjs check`: 409 items in the run; batch 45 has exactly seven unresolved readiness entries, all the recorded M17 escalations. The other eight batch-45 records are current `ready` records. The run remains open for those escalations and unrelated batches.
