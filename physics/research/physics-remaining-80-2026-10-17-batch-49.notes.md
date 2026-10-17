# Batch 49 authoring notes — Specified finite GNS detailed balance

Run: `physics-remaining-80-2026-10-17` · batch: `49` · role: beta  
A page: `qsm-dt-relaxation` · B page: `qsm-dt-relaxation-examples`

## Authority and design reconciliation

The binding `research/physics-remaining-80-2026-10-17-owner-authoring-direction.md` was read first and controls stale task/design material. The complete track design section at `research/plan-quantum-statistical-mechanics-track.md` lines 422–452 and the corresponding `research/plan-spec.json` entries were compared.

- The design reservation and assigned paired inventory specify eleven A-page carriers and two B-page examples. The two `plan-spec.json` item arrays were empty scaffolding placeholders; the reserved IDs were populated from `paired-inventory.json` in the batch manifest.
- The design lists page requirements `csm-stochastic-response` and `qsm-states-ensembles`. The controlling plan-spec and current run manifest require `csm-stochastic-response` and `qsm-dt-channels`. Per plan precedence, those two exact page requirements remain. The design-only page edge to `qsm-states-ensembles` is recorded as `removed` in the cross-batch input file. Actual uses of state calculus and matrix-exponential response remain explicit item dependencies on that page; those item edges are verified and retained.
- The current page orders, category, library, title, companion, item IDs, scope, and physical caveats match the assignment. No scope was broadened to a microscopic bath derivation, universal relaxation law, experimental result, or transport central-limit theorem.

## Inventory, direct dependencies, and levels

The item levels were calculated from the populated run graph before authoring and recomputed after all interface changes. Each level equals one plus the maximum level of direct in-run suppliers; external published mathematical prerequisites do not raise the in-run level.

| Item | Level | Direct dependencies |
|---|---:|---|
| `def-qsm-dt-gns-detailed-balance` | 3 | `def-qsm-dt-gksl-definition`, `lem-qsm-matrix-state-calculus`, `lem-qsm-dt-finite-trace-pairing-cyclicity` |
| `thm-qsm-dt-detailed-balance-gap` | 5 | `def-qsm-dt-gns-detailed-balance`, `thm-qsm-dt-gksl-sufficient`, `thm-qsm-dt-channel-duality`, `thm-qsm-dt-trace-contraction`, `lem-qsm-matrix-state-calculus`, `lem-qsm-dt-finite-trace-pairing-cyclicity` |
| `thm-qsm-dt-gibbs-jump` | 6 | `def-qsm-dt-gns-detailed-balance`, `thm-qsm-dt-gksl-sufficient`, `thm-qsm-dt-detailed-balance-gap`, `lem-qsm-matrix-state-calculus`, `lem-qsm-dt-finite-trace-pairing-cyclicity` |
| `def-qsm-dt-monitored-chain` | 7 | `thm-qsm-dt-gibbs-jump`, `def-qsm-dt-gksl-definition`, `thm-csm-dk-nonexplosive-ctmc-and-gap`, `def-axiom-of-choice` |
| `thm-qsm-dt-commuting-kl` | 7 | `thm-qsm-dt-gibbs-jump` |
| `thm-qsm-dt-open-correlation-integral` | 6 | `thm-qsm-dt-detailed-balance-gap`, `def-qsm-dt-gns-detailed-balance` |
| `thm-qsm-dt-open-kubo` | 6 | `def-qsm-dt-gns-detailed-balance`, `thm-qsm-dt-time-dependent-gksl`, `thm-qsm-dt-detailed-balance-gap`, `lem-qsm-dt-finite-trace-pairing-cyclicity` |
| `post-qsm-dt-effective-bath` | 8 | `def-qsm-dt-gksl-definition`, `def-qsm-dt-monitored-chain`, `def-axiom-of-choice` |
| `thm-qsm-dt-monitored-transport` | 8 | `def-qsm-dt-monitored-chain`, `thm-qsm-dt-gibbs-jump`, `thm-dominated-convergence`, `def-axiom-of-choice` |
| `pthm-qsm-dt-bath-relaxation` | 9 | `post-qsm-dt-effective-bath`, `thm-qsm-dt-gibbs-jump`, `thm-qsm-dt-detailed-balance-gap`, `def-axiom-of-choice` |
| `pthm-qsm-dt-record-transport` | 9 | `post-qsm-dt-effective-bath`, `thm-qsm-dt-monitored-transport`, `def-axiom-of-choice` |
| `ex-qsm-dt-thermal-qubit` | 7 | `def-qsm-dt-gns-detailed-balance`, `thm-qsm-dt-gibbs-jump`, `thm-qsm-dt-open-correlation-integral`, `thm-qsm-dt-open-kubo`, `lem-qsm-matrix-exponential-response` |
| `ex-qsm-dt-qubit-record-diffusion` | 9 | `thm-qsm-dt-gibbs-jump`, `thm-qsm-dt-monitored-transport`, `def-axiom-of-choice` |

The direct item metadata and manifest agree for all thirteen items, including `domain`, `kind`, roles, dependencies, and levels. The assigned scoped level calculation reports no mismatch or cycle. All local suppliers were authored in dependency order.

## Prerequisite interfaces and readiness

The actual statements, hypotheses, conventions, proofs, and current Step 1 readiness records were checked with `loadStep1Record` and `step1Decision` before use:

- Batch 33: `thm-csm-dk-nonexplosive-ctmc-and-gap` on `csm-stochastic-response` supplies the finite nonexplosive chain under full AC, with its exact holding rates, destination probabilities, and transition semigroup.
- Batch 36: `lem-qsm-matrix-state-calculus` and `lem-qsm-matrix-exponential-response` on `qsm-states-ensembles` supply the finite weighted inner-product/spectral facts and exact Gibbs derivative used here.
- Batch 48: the GKSL definition/sufficiency, channel duality, trace contraction, time-dependent GKSL, and finite trace-pairing suppliers on `qsm-dt-channels` have current ready records and match the finite matrix conventions used here.
- `thm-dominated-convergence` and `def-axiom-of-choice` are published external mathematical suppliers. The former is used only with its integrable-majorant hypotheses; full AC is retained wherever the selected joint path construction requires it.

No prerequisite was missing, stale, or used at a weaker interface than its inspected proof supports. The A-page direct cross-batch item and page checks and the plan-only removed edge are recorded one row per edge in `research/physics-remaining-80-2026-10-17-batch-49.cross-batch-dependencies.json` (17 verified item edges, two verified page edges, one removed design-only page edge). `verified` means the scoped interface matched; it is not independent proof approval.

## Arguments and physical qualifications

The A-page definition fixes the finite first-linear GNS inner product and explicitly separates the Hamiltonian part. The generic gap proof obtains dissipative contractivity from the zero-Hamiltonian GKSL semigroup and Schwarz inequality, then proves the centered spectral gap, correlation/resolvent statements, and trace-norm estimate. The Gibbs-jump proof computes the diagonal generator and every coherence mode, proves weighted symmetry and the scalar kernel, and applies the generic gap result. The entropy statement sums only over defined off-diagonal transition rates and handles initially zero probabilities by the finite Poissonized chain. The selected monitoring definition checks the no-click holding law, jump destinations, first-order GKSL generator, and path-law interface. The correlation and response results use the fixed dissipator explicitly.

The postulate labels the finite effective bath and selected instrument as adopted assumptions. Physics theorems remain conditional deductions. The thermal-qubit example defines all Pauli matrices, energies, rates, beta/Planck units, and the perturbed Hamiltonian, and computes its Gibbs derivative and fixed-dissipator response separately. The record theorem/example concern only the chosen energy-resolved path and stipulated pointer velocities; they make no claim about measured position, a material diffusion constant, or a central-limit theorem.

## Source coverage and resolution

The A page has multiple independent full-text treatments, including a complete book, plus the complete jump-process review. Exact locators, supported items, every harvested-result disposition, prior retrieval history, and byte/page stamps are in the coverage file.

- Aldous and Fill, *Reversible Markov Chains and Random Walks on Graphs*, complete 516-page book, Chapters 2–3 §§2.1.2, 3.1–3.2, 3.4. Existing fetch stamp reused: 1,861,415 bytes, 516 pages, SHA-256 prefix `8f9b934111c30b3f`.
- Carlen and Maas, “Gradient flow and entropy inequalities for quantum Markov semigroups with detailed balance,” complete 47-page paper, §2 pp. 4–9. Current stamp: 533,129 bytes, 47 pages, SHA-256 prefix `e8bb864b6f8d085b`.
- Plenio and Knight, “The quantum-jump approach to dissipative dynamics in quantum optics,” complete 134-page review, Introduction and §IV.A, equations (120)–(133), PDF pp. 46–48. Current stamp: 930,836 bytes, 134 pages, SHA-256 prefix `62ebe0199322e899`.
- Alicki and Lendi, *Quantum Dynamical Semigroups and Applications*, Lecture Notes in Physics 717, §§1.2.4, 1.3.4, 1.5.3. The text and cited sections were opened earlier, but the mirror could not be fetched/stamped during this pass: the initial attempt plus five recovery retries produced four HTTP 404 responses and one connection timeout. Search found the official Springer page (full chapter subscription-only) and a repository handle whose page timed out. It is dropped only as an active verifiable citation. The exact history, searches, and item-specific complete alternative arguments/dependencies are in `coverage.json` under `source_resolution`; no mathematical coverage or proof is waived.

`source-fetch-check --stamp` reports 3/4 sources fetch-verified and 4/4 resolved, with one documented drop and no new stamps. The source set contains no experimental observations or measurements.

## Scoped checks and owner-owned run state

- `proof-layout.mjs`: 13 assigned items, 45 steps, zero defects.
- Normative `precheck.mts`: 13/13 pass after canonical dependency-layer numbering.
- Strict proof contract: 13/13 checked, zero errors/warnings; citations contain exact local supplier excerpts and every proof step has an input/claim mapping.
- Citation fidelity: 46 citations; no missing quote and no widening candidates.
- Content policy: 13 items, zero errors/warnings. Coverage checklist: one A page and 19 harvested results, zero errors/warnings. Manifest/frontmatter sync: 13 items, zero errors.
- Scoped dependency calculation: all thirteen item levels match their manifest levels; no target errors. Source fetch status is above.
- All thirteen final Step 1 records are `ready`, hash-bound to their final items and direct dependency inputs. These record authoring readiness only.

The ordinary whole-run `item-dependency-levels.mjs check` still exits on twelve unrelated empty inventories (`emg-s02`, its example page, `tgr-pet02`, its example page, and the `tgr-phs01`–`tgr-phs04` pairs); it reports no batch-49 level mismatch. `proof-contract-coverage.mjs` cannot load the whole frontier because unrelated `emg-s02` has an empty inventory; the strict batch-49 proof-contract check passes.

The stored shared `batch-dependency-levels.json` is stale and was left unchanged for its owner. A read-only recomputation from the populated current manifest gives batch 49 level 5 and prerequisites batches 33, 36, and 48. The stored row had 33 and 48 because item inventories were empty when it was created; the newly declared direct matrix-supplier item edges add batch 36 without changing batch 49's level. The owner should regenerate that shared scheduling evidence at the construction join.

Page occupancy is 11/100 items on A and 2/100 examples on B. No local prerequisite, capacity, or cycle escalation remains.
