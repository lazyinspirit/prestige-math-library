# Batch 64 — authoring and evidence notes

Run `physics-td-qft-rpm-62-2026-10-14`; assigned pair `qft-pir01` / `qft-pir01-examples` only. All authored carriers remain drafts.

## Plan comparison and inventory

The complete design section at `research/plan-quantum-field-theory-track.md` §“Adopted finite-regulator bosonic polynomial model” reserves five A items and two B items. `research/plan-spec.json` agrees on the pair identity, order 567, category, physics library, companion and required pages (`qft-c01`, `qft-ir01`, `qft-ir04`); its item arrays are intentionally empty. No conflict exists for the assigned pair, so the design reservation controls its initial item set.

The A page has six items because the existing QFT-C01 unit dictionary does not define a positive-temperature input or Boltzmann conversion parameter. I added `def-qft-regulated-thermal-parameter` on A before using it. It explicitly defines kelvin, `k_B` in J K⁻¹, `β_phys` in J⁻¹ and dimensionless `βhat=E_*β_phys`; this is a necessary local formulation definition, not a new physical law. The resulting six A items and two B items are within the 100-item page cap.

The old QFT-C01 reservation mentioned only `qft-mc03`. The controlling current plan and actual `qft-c01` page also require `sr-spacetime-primitives` and `em-primitives-and-postulates`; this stale reservation conflict is recorded here. The actual C01 page currently lists `def-qft-framework-units` and `post-qft-constructed-model-and-measurement`. I followed those actual carriers and the current plan, not the stale reservation.

## Inventory and dependency levels

Dependency levels were computed from the current item `deps` graph. Out-of-run items do not raise an item level; an in-run supplier contributes one plus its level. The run dependency graph assigns batch 64 level 2, requiring batches 40, 59 and 62.

| Item | Page | Direct dependencies | Level |
|---|---|---|---:|
| `post-qft-regulated-polynomial-model` | A | `def-qft-regulated-polynomial-hamiltonian`, `def-qft-framework-units`, `def-countable-choice` | 1 |
| `def-qft-regulated-thermal-parameter` | A | `post-qft-regulated-polynomial-model`, `def-qft-framework-units` | 2 |
| `pthm-qft-regulated-interacting-model-evolution` | A | `post-qft-regulated-polynomial-model`, `post-qft-constructed-model-and-measurement`, `thm-qft-self-adjoint-regulated-interaction`, `thm-qft-regulated-global-unitary-evolution`, `def-countable-choice` | 6 |
| `post-qft-regulated-equilibrium-state` | A | `post-qft-regulated-polynomial-model`, `def-qft-regulated-thermal-parameter`, `thm-qft-regulated-gibbs-trace`, `def-countable-choice` | 6 |
| `pthm-qft-regulated-equilibrium-predictions` | A | `post-qft-regulated-equilibrium-state`, `post-qft-constructed-model-and-measurement`, `def-qft-regulated-thermal-parameter`, `thm-qft-regulated-gibbs-trace`, `def-countable-choice` | 7 |
| `pthm-qft-quartic-model-energy-bound` | A | `post-qft-regulated-polynomial-model`, `post-qft-constructed-model-and-measurement`, `thm-qft-self-adjoint-regulated-interaction`, `lem-qft-coercive-polynomial-form-domain`, `lem-qft-hermite-oscillator-research-supplier`, `lem-qft-regulated-ground-variational-bound`, `def-countable-choice` | 6 |
| `ex-qft-one-mode-interacting-model` | B | `pthm-qft-regulated-interacting-model-evolution`, `pthm-qft-quartic-model-energy-bound`, `def-qft-regulated-polynomial-hamiltonian`, `def-countable-choice` | 7 |
| `rem-qft-formal-renormalization-physical-status` | B | `prop-qft-four-dimensional-log-scale-anomaly`, `def-axiom-of-choice` | 5 |

A filtered computation of these eight current manifest rows agrees with all eight declared levels. The full `item-dependency-levels.mjs check --run …` reports unrelated empty scaffold inventories and one out-of-scope mismatch (`lem-qft-free-action-equations`, declared level 3, computed level 2); none of its reported errors names an assigned item. Batch 42’s `qft-mf03` string-valued entries were repaired while this batch was in progress. The full `batch-dependency-levels.mjs check --run …` now reaches the shared record but reports it stale after assigned manifest edits; the owner must recompute that shared file. Its recorded graph assigns batch 64 level 2 with prerequisites 40/59/62. I did not edit the shared graph or other batches.

## Supplier interfaces and readiness

The QFT-C01 carriers are present as drafts but have no Step 1 readiness records. `def-qft-framework-units` provides the SI convention for `ℏ` and its units; `post-qft-constructed-model-and-measurement` adopts the Schrödinger/Born reading only after the Hamiltonian, density operator and instrument are actually constructed. Uses of these interfaces remain explicitly conditional. The model postulate does not infer self-adjointness from its initial differential expression; QFT-IR01 supplies the selected form realization.

The QFT-IR01 page is present in `library/quantum-field-theory-mathematics/qft-ir01.md`. Its nine A-page item records now all hash current, including `lem-qft-hermite-oscillator-research-supplier` and `thm-qft-regulated-gibbs-trace`, whose records were stale earlier in the turn and were refreshed upstream. QFT-IR01’s required page input is now verified. QFT-IR04’s required page and `prop-qft-four-dimensional-log-scale-anomaly` also have current ready records. Their carriers remain drafts and are used as conditional premises, not independent approvals.

`research/physics-td-qft-rpm-62-2026-10-14-batch-64.cross-batch-dependencies.json` records 19 page/item inputs: 6 open and 13 verified. The open entries identify C01’s missing readiness records and each consuming item. “Verified” means the current statement and readiness input were checked; it is not independent proof approval.

Final Step 1 records were written with `step1-decisions.mjs record` for all eight assigned items. Seven are `escalated`: the model postulate, thermal definition, evolution theorem, equilibrium-state postulate, equilibrium-predictions theorem, quartic-energy theorem and example. Their exact blockers are the two C01 carriers, which still lack Step 1 readiness records; uses of them remain conditional. The renormalization-status remark is `ready` on the current QFT-IR04 proposition and imported Axiom of Choice definition. The malformed batch 42 entries were repaired upstream during authoring, so the decision tool now loads the run. The run-wide check reports 435 items, 191 current-ready and 288 unresolved overall; the assigned records have the stated current dispositions.

## Source coverage and content status

The A-page coverage contains two full independent mathematical treatments: Teschl, *Mathematical Methods in Quantum Mechanics* §§2.3, 4.4, 5.1, 6.3 and 8.3; and Laugesen, *Spectral Theory of Partial Differential Equations* Chapters 4, 8 and 9. Full author-hosted Tong QFT Chapters 2–3 and Tong Statistical Physics Chapter 1 were read for physical interpretation. The B page records the applicable mathematical and QFT treatments. Coverage holds retrieval stamps and per-item dispositions. `coverage-checklist` reports 0/16 harvested A-page results as separate scaffolded items because each is recorded as inline context attached to an assigned item; the local mathematical suppliers and complete batch proofs provide the actual arguments, so no source result is silently treated as a proof or omitted as an extra claim.

MIT OCW Lecture 21 PDF retrieval failed after the initial attempt and five recovery retries because `mutool` could not verify its compressed PDF page count. Its failed attempts, alternative searches and item-by-item arguments/dependencies are preserved under `source_resolution` in the coverage record. Tong Statistical Physics §1.3–1.3.1 is the successful full-text alternative for the canonical beta and density-matrix convention. The MIT source is documented as dropped; the relevant mathematical trace-finiteness proof is supplied locally and is not waived.

The postulates are identified as adopted model inputs; physics theorems are conditional deductions; the example is a constructed model; the remark reports no observation or measured running parameter. `empirical_premises` is empty throughout. The finite regulator is fixed: no continuum/infinite-volume result, perturbation-series convergence, Lorentz invariance, or empirical measurement is claimed.

## Run-state note

The root `.autopilot/status.md` describes `frontier-26` as complete on 2026-08-31; there is no `.autopilot/physics-td-qft-rpm-62-2026-10-14/` state directory. A status query for this run reports a workflow-revision mismatch and no configured run, and the current Git log has no commit for this run. Batch 42’s manifest repair restored the Step 1 authoring command, but the owner must still reconcile the missing/stale run state and refresh the shared dependency-level record before engine transitions.

## Final scoped checks

- `source-fetch-check --stamp`: 8/9 sources fetch-verified, 9/9 resolved, one documented drop, no new stamps.
- Strict proof contracts: 8/8 items, 0 errors. Supplier excerpts were regenerated after upstream carrier edits.
- `proof-layout`: 8 items, 16 steps, 0 defects. A temporary `/private/tmp` resolver hook supplied the web app’s `@/` aliases because the default global TypeScript fallback could not resolve them; no tool or app files were changed.
- `precheck`: 6 proof/nonproof structures checked, 0 failures. The two nonproof definition/remark bodies have no phase proof to check.
- `rendercheck`: 10 items/pages, no malformed or unrenderable math. Five multiline display blocks were flattened after the first scan identified them.
- `content-policy`: 8 scoped items, 0 errors or warnings. Scoped `depcheck` passes for the 8 assigned items and prerequisite closure.
- `coverage-checklist`: 2 pages, 20 harvested results, 0 errors and one low-yield warning (inline dispositions above).
- Assigned dependency levels: all eight computed values match. Run-wide item-level check still reports only out-of-scope empty scaffolds and the noted free-action level mismatch. Batch-level check reports the shared graph stale after assigned-manifest edits; it is left for the owner.
- Step 1 check: all eight assigned items have current decision rows (seven escalated, one ready); the run still has 288 unresolved items overall, including those seven explicit escalations.

An earlier depcheck invocation omitted its selector and therefore ran read-only across the full corpus; it failed on unrelated existing corpus findings. I reran it with the explicit `--items-file` selector above, and the assigned checks pass. No tests were requested or run. Completion evidence is not independent approval.
