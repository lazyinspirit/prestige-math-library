# Batch 28 authoring notes — Finite-range continuum Gibbs kernels and DLR notion

Run: `physics-remaining-80-2026-10-17`  
Batch: `28`; role `beta`; assigned pair: `csm-continuum-limits` (A, order 491) and `csm-continuum-limits-examples` (B, order 492).  
Category/library: `classical-statistical-mechanics` / `physics`.

## Scope, plan and design reconciliation

- Read the current owner direction before authoring. It controls over stale task/design reservations. Only this pair was authored; all new items and pages remain drafts.
- `research/plan-spec.json` requires `csm-gibbs-lattice` and the published `td-math-interacting-ensemble-geometry` page for the A page. The original reservation in `research/plan-classical-statistical-mechanics-track.md` lists only `csm-gibbs-lattice` in its `deps`; the complete track section also records both earlier prerequisites. The plan controls; both plan-spec prerequisites are present in the A-page manifest. The B page requires the A page.
- The plan item arrays are empty. The assigned inventory was taken from `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json`: three A items (`def-csm-continuum-dlr-kernels`, `lem-csm-continuum-kernel-normalization`, `pthm-csm-qualified-continuum-equilibrium-limits`) and three B counterexamples (`cex-csm-finite-range-attraction-collapse`, `cex-csm-stable-not-superstable`, `cex-csm-bulk-field-changes-pressure`). Both pages are below the 100-item limit.
- The batch manifest, pages, frontmatter and evidence files preserve `domain`, `library`, `dependency_roles` and `physical_scope`. Mathematical A/B items have only mathematical premises; physical results are conditional on explicitly adopted model assumptions and unit conventions.

## Current supplier interfaces and proof status

- The batch-27 carriers `def-csm-stable-superstable-continuum-interaction`, `def-csm-gibbs-physical-parameters` and `post-csm-interacting-equilibrium-gibbs` are now present. Their current statements were inspected before finalizing consumers. They are still draft carriers: the first two are definitions (no proof is applicable), and the Gibbs item is an adopted postulate, not a theorem. Batch 28 uses these exact definitions and assumptions and never treats their draft labels as proof acceptance.
- The actual stable definition states `U_N(X) >= -B N` for every finite position list; this implies the bound for an enumerated simple configuration and gives `phi(x-y) >= -2B` on every nonzero two-point separation. Its cell-superstability convention fixes `C_k = ell (k + [0,1)^d)` and requires `A_* > 0`, `B_* >= 0`; the zero-potential counterexample uses that exact half-open tiling.
- The actual physical-parameter definition uses SI `beta = (k_B T)^-1` and continuum activity `z_c = exp(beta mu) lambda_T^-d`, with `lambda_T = h_ref / sqrt(2 pi m_p k_B T)`. The actual Gibbs postulate adopts conditional laws only when normalizers are positive and finite and points particle sectors to the current counting postulate. For the single-species thermal-wavelength convention used here, consumers state `a_0 = h_ref` and the `1/N!` sector factor explicitly.
- The batch-26 `post-csm-counting-and-physical-observables` carrier was also inspected. Its current draft convention is `1/(N! a_0^(dN))` in one operationally indistinguishable species, with the action scale and phase-space coordinates stated. The ideal-gas counterexample adopts that convention; it does not infer indistinguishability.
- The required `csm-gibbs-lattice` page is present as a draft. The directly used definitions/postulate above were inspected; no unaccepted lattice theorem is consumed by the continuum proofs. The `td-math-interacting-ensemble-geometry` prerequisite is published, and the directly consumed mathematical suppliers and their full local proofs were inspected.
- Cross-batch edges and inspected interfaces are recorded in `.cross-batch-dependencies.json`. `verified` there means the current carrier exists and its actual interface matches the declared conditional use; it does not mean independent proof acceptance or publication.

## Dependency audit and levels

Batch 28 is batch-level dependency level 2 and requires batch 27, exactly as recorded in `research/physics-remaining-80-2026-10-17-batch-dependency-levels.json`. Item levels use the current same-run carrier graph; outside-run mathematical suppliers do not raise the level.

| Item | In-run suppliers | Level |
|---|---|---:|
| `def-csm-continuum-dlr-kernels` | `def-csm-stable-superstable-continuum-interaction` (batch 27, level 0) | 1 |
| `lem-csm-continuum-kernel-normalization` | DLR definition (level 1), stable definition (batch 27, level 0) | 2 |
| `pthm-csm-qualified-continuum-equilibrium-limits` | Gibbs postulate (batch 27, level 3), physical parameters (batch 27, level 1), counting postulate (batch 26, level 2) | 4 |
| `cex-csm-finite-range-attraction-collapse` | stable definition (batch 27, level 0) | 1 |
| `cex-csm-stable-not-superstable` | stable definition (batch 27, level 0) | 1 |
| `cex-csm-bulk-field-changes-pressure` | PTHM (level 4), Gibbs/parameter/counting inputs (earlier batches), normalization lemma (level 2) | 5 |

No cycle or missing in-run supplier remains. The actual current batch-27 manifest gives `post-csm-interacting-equilibrium-gibbs` level 3 because it directly depends on the batch-26 counting postulate at level 2; this makes the batch-28 PTHM level 4 and its dependent ideal-gas example level 5. The normalization lemma now directly lists the stable definition, Poisson count-properties theorem, factorial/multinomial results, exponential definition/law, MCT, Tonelli, Dynkin pi-lambda and the simple-function approximation result. These additions cover obligations omitted by the stale G7 reservation: arbitrary bounded-Borel Poisson sectors, disjoint restrictions, countable integrations, pair-sum measurability and the conditional-law iff argument. The sector-density statement is explicit so the B-page ideal-gas calculation consumes a declared supplier rather than an unstated sector formula.

## Mathematical and physical scope notes

- The normalization proof starts from the current cell-product unit-Poisson definition and derives the `e^(-|D|)/n!` sector density for every bounded Borel set by splitting each intersected unit cell into `D` and its complement. It then proves the stability/exterior-count bound, strict finite-volume normalization, joint pair-energy measurability, probability-kernel measurability, nested-region consistency and the fixed-kernel/conditional-law equivalence.
- Pair-sum measurability is justified from bounded-set count maps on rectangles, a pi-lambda extension to Borel subsets of the spatial products and increasing simple approximations. The proof explicitly handles `+infinity` pair energies and uses the two-point consequence of the exact stability definition for the finite negative part.
- The DLR definition does not assume stationarity, uniqueness or existence of an infinite-volume law. The consistency proof is finite-volume. The variational minimizers in the physical theorem are not identified as DLR states.
- The first B example gives an even Borel finite-range potential whose clustered energy violates every finite stability constant. The second uses the zero potential and the actual fixed half-open tiling to show stability does not imply cell superstability. The third fixes physical activity and temperature for a one-species ideal positional gas, keeps the `1/N!` reference, rescales SI activity/energy to dimensionless inputs and computes the exact pressure shift from `c N`. Its volume term is explicitly outside the PTHM square-count exterior class. No measurement or empirical precision is claimed.

## Source research and dispositions

Two independent complete treatments were read for the A page, including complete lecture notes. The source search queries and per-result dispositions are in the sibling `.coverage.json`.

- Sabine Jansen, *Gibbsian Point Processes*, complete 106-page author-hosted lecture notes. The full PDF was inspected at §§3.1–3.3, PDF pp.45–49, and §§5.1–5.2, PDF pp.71–73. These passages cover stability/interaction potentials, finite-range boundary energy, finite-volume grand-canonical normalization and DLR conditional identities. The complete text was fetch-stamped at 856,022 bytes, 106 pages, SHA-256 prefix `00b59ef452b9aa1c`.
- David Dereudre, *Introduction to the Theory of Gibbs Point Processes*, complete 48-page author-hosted mini-course notes. The full PDF was inspected at §§1.1–1.4, PDF pp.6–14, and §§2.3–2.4, PDF pp.19–21. Its Definition 8 in §2.4 assumes both a stationary finite-range energy and stationary law, and its regions have positive volume. Batch 28 does not adopt those extra hypotheses; the broader nonstationary DLR context is supported by Jansen §5.2 and by the local proof. The complete PDF was fetch-stamped at 364,171 bytes, 48 pages, SHA-256 prefix `96f90832e22a3f3b`.
- The source ledger marks both PDFs active and records every harvested result as included or inline in a scaffolded item. There were no retrieval failures, dropped sources or alternative-proof dispositions; therefore no `source_resolution` entries are needed. `source-fetch-check --stamp` completed with 4/4 page/source entries fetch-verified (the same two full-text URLs are recorded on both pages).
- Literature is used for model context and convention comparison only. The exact conditional proofs and counterexamples are derived locally; the thermodynamic limits are taken from their named mathematical suppliers.

## Proof contracts, evidence and readiness

- `.proof-contracts.json` was regenerated from the final proof text. Each proof step has its own derivation entry and stated inputs; every linked fact has an exact supplier-section excerpt; standard boundary cases are dispositioned. The definition item has an empty proof worksheet and explicit boundary dispositions because it is a definition.
- `.cross-batch-dependencies.json`, the two page files, coverage and manifest include the current dependencies and source evidence. `step1-decisions` are recorded only after final scoped checks; `ready` means authoring prerequisites, placement and proof contracts are present, not independent approval.

Final scoped results after the last item edits:

| Check | Result |
|---|---|
| `precheck.mts` on six assigned items | 5 proof-bearing items passed; definition not applicable; 0 failures |
| `proof-layout.mjs` on six assigned items | 6 items, 24 steps, 0 defects |
| `content-policy.mjs` on batch-28 manifest | 6 items, 0 errors, 0 warnings |
| `depcheck.mjs` focused on six IDs | 0 errors, 0 warnings; dependency closure 1,461 items / 386 pages |
| `rendercheck.mjs` on six items and two pages | 8 files, 0 errors, 0 warnings |
| `proof-contract.mjs --strict` | 6 checked, 0 errors, 0 warnings |
| Scoped `proof-contract-coverage` using a temporary batch-28 root | 6 items, 5 proof-bearing, 5 covered, 0 errors |
| `coverage-checklist.mjs` | 2 pages, 15 harvested results, 0 errors, 0 warnings |
| `source-fetch-check.mjs` | 4/4 sources fetch-verified |
| Scoped `item-dependency-levels.mjs` over batch manifests 26–28 | 60 items checked; all six assigned levels match; no cycles; maximum level 7 |

Run-wide gate blockers remain outside batch 28 and were not edited: `proof-contract-coverage` stops at the empty `emg-pcp01` inventory; run-wide item dependency checking encounters other empty inventories and existing EMG/TGR level mismatches; `step1-decisions check` reports 333 unfinished pages and 255 unrelated item records (all six batch-28 records are closed and ready). The run-level `batch-dependency-levels check` reports its shared input hash stale after manifests changed; its recorded scheduling row still lists batch 28 at level 2 requiring batch 27. That owner-controlled run-wide file was not rewritten. The isolated batch-28 contract-coverage and dependency-level checks pass.

All six `research/physics-remaining-80-2026-10-17-step1-<id>.json` records are `ready`, with `owner: false`, exact direct dependencies and evidence. These records complete authoring readiness only; they do not constitute independent review or proof approval.
