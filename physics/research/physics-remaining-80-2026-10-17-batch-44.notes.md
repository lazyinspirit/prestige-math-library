# Batch 44 authoring notes

Run: `physics-remaining-80-2026-10-17`  
Assigned pair: `qsm-infinite-spin-physical-models` / `qsm-infinite-spin-physical-models-examples`  
Owner: beta

## Scope and plan/design comparison

The current `research/plan-spec.json` page row and dispatch manifest require the A page to follow `qsm-commuting-quantum-phases` and `qsm-spin-thermodynamic-limits`; the B page follows the A page. The full assigned design section in `research/plan-quantum-statistical-mechanics-track.md` L266 additionally names `qsm-finite-range-spin-dynamics` and `qsm-kms-equilibrium` as page prerequisites. This conflicts with the current plan. The plan controls, so both page manifests retain the exact current plan requirements. The relevant interaction, dynamics, and KMS inputs remain explicit item-level dependencies with their inspected conditional interfaces in the item files and `dependency-inputs.json`. No plan file was edited.

The A-page inventory is `def-qsm-infinite-spin-physical-quantities` (level 10), `post-qsm-infinite-spin-equilibrium` (level 11), `pthm-qsm-infinite-spin-equilibrium-predictions` (level 12), and `pthm-qsm-diagonal-quantum-phase-predictions` (level 12). The B-page example is `ex-qsm-ising-phase-regimes` (level 13). Full item dependency lists, roles, and exact statement extracts are in the batch manifest; item-level supplier interfaces and transitive closure are in `dependency-inputs.json`.

No local intermediate mathematical item was needed: the definitions and results used here already have exact current supplier carriers. The new arguments retain their stated mathematical assumptions, including Countable Choice and the finite-matrix interfaces for dynamics/KMS, and full Axiom of Choice only for the separate entropy-density result. Draft status is not treated as missing input; current supplier proof text and Step 1 records were inspected. No independent acceptance is inferred.

## Dependency evidence

The scoped dependency check covered the five authored items and their 58-item in-run supplier closure. The five authored item levels are 10, 11, 12, 12, and 13 in supplier-first order. The batch dependency graph recomputes batch 44 at level 5 with direct supplier batches 36, 38, 39, 40, 41, and 42. The cross-batch dependency file has one row per exact edge and uses `verified` only for the scoped interface/readiness check; it does not signal independent proof approval.

The owner-managed scheduler receipt is stale. It records batch 44 level 5 but only requires batches 40 and 42; the current graph has the same numeric level and direct requirements 36, 38, 39, 40, 41, 42. The input hash recorded in that receipt is `3b064bec9f79b6f70d41473e1d0a8072f75dac17f21cbb7f0e167616fd653fe3`; the recomputed input hash in the inspected dependency snapshot is `d95c6f09c7e6340833fa7e810c9e129976dce142d6912cdca390628e0055ed60`. Batch 42's recorded direct requirements are also stale: it records 27 and 41, while the recomputed graph includes 27, 36, 38, 39, 40, and 41 (level 4 in both). The shared scheduler file is owner-managed and was not changed. The owner should refresh it.

## Source and evidence record

Two independent full-text QSM lecture-note treatments were inspected for the A page: Naaijkens, §§3.4 and relevant pp. 74–80, and Ruelle, pp. 13–14 and 24–25. The Naaijkens text was directly inspected at the cited local PDF pages; earlier batch-39 reading evidence supplies the dynamics pages. Lanford–Robinson's complete Theorem 3.1 and proof were inspected at PDF pp. 5–8, printed pp. 331–334; its explicit deferral of the pressure proof is not used as a proof. The Friedli–Velenik textbook and Junior Seminar full-text readings are reused from batch 42 at the locators in the source manifest. Their Ising/DLR material is context; the claims here use the exact conditional QSM phase supplier and its stated CSM interfaces.

The source manifest and coverage record keep URLs, full-text locators, successful fetch stamps, supported items, and per-result dispositions. Existing successful fetch records were reused verbatim, and available local PDFs were SHA-256 checked. No retrieval failed, no recovery retry or alternate-source search was needed, and no source was dropped; `source_resolution` failure records do not apply. `source-fetch-check --stamp` was run on the batch coverage before the final statement-only edits; it reported 9/9 sources fetch-verified and 9/9 resolved, with no new stamps.

## Final checks and readiness

Final command results and Step 1 readiness records are appended after the final scoped checks. These records establish authoring readiness only; independent mathematical review remains separate.

### Final scoped validation (2026-10-17)

- `content-policy.mjs ... --manifest-only --authored --json`: 5 items, 0 errors, 0 warnings.
- `depcheck.mjs --items-file /tmp/physics-b44-items.json --json`: 5 selected items and both assigned pages; 1,744 dependency-closure items and 554 pages checked; 0 errors or warnings.
- `proof-layout.mjs` on all five changed items: 5 items, 8 proof steps, 0 defects.
- `precheck.mts` on all five items: 4 applicable checks, 0 failures; definition not applicable, postulate nonproof structure passed, and three proof-bearing items passed.
- `rendercheck.mjs` on five items and both pages: 7 files, 0 errors, 0 warnings.
- `proof-contract.mjs` on the four proof-bearing items: all four checked, 0 errors or warnings. Scoped `proof-contract-coverage.mjs` on the batch-44 manifest: 5 items, 3 proof-bearing items, all 3 covered. The unscoped run-level coverage invocation cannot load the run because another current-run page, `emg-s02`, has an empty inventory; this does not affect the isolated batch-44 scope.
- Scoped dependency-level recomputation on the 63-item in-run closure: no errors; authored levels match 10, 11, 12, 12, and 13. The whole-run `item-dependency-levels.mjs check` reports empty inventories in other unfinished pages, beginning with `emg-s02`; it does not report a mismatch for this batch. The 30 cross-batch edges exactly match the current manifest: 28 item edges and 2 page edges, all `verified`, with no missing or extra rows.
- `source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-44.coverage.json --stamp`: 9/9 sources fetch-verified and 9/9 resolved; no new stamps.
- Current read-only batch graph hash is `d95c6f09c7e6340833fa7e810c9e129976dce142d6912cdca390628e0055ed60`; `dependency-inputs.json` matches it. Batch 44 recomputes at level 5, requiring 36, 38, 39, 40, 41, and 42. The global scheduler check remains stale because the owner-managed shared receipt has not been refreshed; no shared scheduler file was edited.

The five item readiness records were written after these checks. They establish Step 1 authoring readiness for the current exact inputs, not independent proof approval.

`loadStep1Record` plus `step1Decision` was rerun after writing the records: all five assigned items are hash-current with decision `ready` and `owner: false`. Each record includes its exact direct dependency IDs. The transitive upstream closure remains current-ready.
