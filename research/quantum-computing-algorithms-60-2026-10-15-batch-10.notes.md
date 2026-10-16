# Batch 10 authoring and handoff notes

Run `quantum-computing-algorithms-60-2026-10-15`, batch 10, role beta. This records Step 1 authoring evidence only; it is not independent mathematical acceptance or publication approval.

## Scope and plan reconciliation

The QC10 design in `research/plan-quantum-computing-track.md` calls for reversible Boolean computation, Toffoli/Fredkin, clean and dirty ancillas, Bennett uncomputation, and coherent function oracles. The batch manifest's A/B titles, order, category, companions, and page-level `requires` match `research/plan-spec.json` exactly. The spec has empty item arrays, so it has no item-inventory conflict with the active batch manifest.

The active manifest contains 14 A items and one B example. The current audited proposal had 12 A items and one B item; the active manifest adds two local proof suppliers required for complete arguments: `lem-qc-ancilla-identities-stable-under-reference-and-mixtures` (clean/dirty identities on references and matrices) and `lem-qc-x-cnot-toffoli-and-fredkin-are-involutions` (gate inverses and unitarity). The additional tensor-register dependency on `def-qc-clean-and-dirty-ancillas` makes its ordered register contract explicit. The A page remains below the 100-item cap.

The six A-page prerequisites are present and their relevant context was checked: Boolean circuits, circuit syntax/semantics, controlled gates, qubits/one-qubit gates, registers/tensor products, and Turing-machine computation. The Boolean-circuit carrier `library/computability-theory/boolean-circuits-and-nonuniform-complexity.md` has `status: published` while its closing sentence calls it a draft; this wording mismatch is recorded in the cross-batch ledger for owner awareness. No published page was edited.

## Inventory and item dependency levels

Item levels were recomputed from the current manifest graph, including the registered batch 9 suppliers. Batch 10 remains scheduled at batch dependency level 6 with prerequisite batches 2, 7, 8, and 9.

| Item level | Assigned items |
|---:|---|
| 9 | `def-qc-clean-and-dirty-ancillas`; `def-qc-toffoli-and-fredkin` |
| 10 | `lem-qc-ancilla-identities-stable-under-reference-and-mixtures`; `lem-qc-x-cnot-toffoli-and-fredkin-are-involutions` |
| 11 | `alg-qc-reversible-embedding`; `lem-qc-fresh-target-not-and-or-gadgets`; `lem-qc-toffoli-clean-target-and-uncomputation`; `thm-qc-clean-uncomputation-restores-workspace` |
| 12 | `thm-qc-reversible-embedding-cost` |
| 13 | `def-qc-coherent-function-oracle`; `thm-qc-reversible-embedding-parallel-depth`; B-page `ex-qc-reversible-and-oracle-compute-copy-uncompute` |
| 14 | `thm-qc-reversible-xor-oracle-unitary` |
| 15 | `thm-qc-phase-kickback-from-xor-oracle` |
| 16 | `thm-qc-oracle-phase-query-cost-boundary` |

The current batch 9 item files and manifest agree that `def-qc-circuit-denotational-semantics` is level 6, `def-qc-elementary-circuit-resources` is level 8, and `thm-qc-circuit-inverse-reversal` is level 9. These interfaces and proofs were inspected; the earlier unregistered/stale-level concern is no longer present in the current files. The batch 10 manifest, item frontmatter, and A-page order are synchronized to the recomputed levels.

The dispatch scheduling input was `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`. Shared scheduling metadata and engine state were left untouched; the owner should refresh scheduling inputs after all active batch manifests are reconciled.

## Sources and source-resolution history

The A page has two independent full-text treatments. John Preskill, *Quantum Computation*, Chapter 5 ([PDF](https://www.preskill.caltech.edu/ph219/chap5_15.pdf), 54 pages), was inspected at §§5.2.2–5.2.3, printed pp. 14–22. Ronald de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6 ([PDF](https://arxiv.org/pdf/1907.09415), 239 pages), was inspected at §§2.1.2–2.4, printed pp. 14–17. The B-page AND example has both treatments as well. Exact URLs, locators, item support, and each included/inline/out-of-scope disposition are recorded in `research/quantum-computing-algorithms-60-2026-10-15-batch-10.coverage.json`; out-of-scope source claims are proved locally rather than treated as coverage.

`source-fetch-check --stamp` reports 4/4 fetch-verified and 4/4 resolved, with zero new stamps and zero documented drops. No retrieval failed, so no `source_resolution` recovery record was needed. Existing source stamps and history were preserved.

## Cross-batch and supplier findings

The cross-batch ledger contains 115 direct item edges and all six page prerequisites. The only open rows are the nine direct edges to `def-qc-cnot-and-control-target-order`, from `alg-qc-reversible-embedding`, `def-qc-toffoli-and-fredkin`, `ex-qc-reversible-and-oracle-compute-copy-uncompute`, `lem-qc-fresh-target-not-and-or-gadgets`, `lem-qc-toffoli-clean-target-and-uncomputation`, `lem-qc-x-cnot-toffoli-and-fredkin-are-involutions`, `thm-qc-clean-uncomputation-restores-workspace`, `thm-qc-reversible-embedding-cost`, and `thm-qc-reversible-embedding-parallel-depth`.

The CNOT Definition's ordered-basis action is correct and was checked against its controlled-X and Pauli-X interfaces. Its Verification step 2.1 in `items/def-qc-cnot-and-control-target-order.md` concludes that the basis permutation is unitary without citing the computational-basis orthonormality fact. This batch's `lem-qc-x-cnot-toffoli-and-fredkin-are-involutions` proves the CNOT unitary property from the explicit basis action and orthonormal-basis suppliers; gate-using local claims cite that result where needed. The supplier's own proof defect remains open for owner repair and is not represented as acceptance.

All six page-context rows and all other direct item-interface rows are marked verified as interface checks only, not supplier acceptance. No files from other pairs were edited.

## Checks and readiness

Root-scoped checks passed:

- `precheck`: 11 proof-bearing items, zero failures.
- `proof-layout`: 15 assigned items, 35 numbered steps, zero defects.
- `proof-contract --strict`: 11/11 proof-bearing items, zero errors or warnings. Contracts map every current step and cited fact, include boundary dispositions, seven applicable exact finite checks, empty finite-smoke arrays, and no additional axioms.
- `rendercheck`: 17 assigned item/page files, zero rendering or YAML errors.
- `content-policy`: 15 scoped items, zero errors or warnings.
- `source-fetch-check --stamp`: 4/4 source entries fetch-verified, zero newly stamped.
- The 15 individual Step 1 records are `ready`, `owner: false`, and current-hash verified. They were written with `node tools/step1-decisions.mjs record`; their dependency arrays contain item dependencies, and their reasons record the six verified page prerequisites.

The run-wide `item-dependency-levels check` exits nonzero on 84 unrelated errors across 120 pages and 597 items: 54 empty inventories and 30 stale item-level labels. It reports zero batch 10 item errors; the two batch 9 supplier levels above also match their computed levels.

`batch-dependency-levels check` cannot complete because a batch 20 supplier has an unquoted colon in its source title: `items/def-qc-css-code-from-nested-binary-codes.md:26`, `John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction` (parser reports line 25, column 14). This is outside batch 10 and was not edited.

The run-wide `step1-decisions check` cannot complete because it parses an unrelated malformed source locator in `items/thm-qa-19-measurement-distribution.md:29` (`Chapter 17 §17.1, PDF pp.81–82 ...: the finite walk state ...`; parser reports line 28, column 16). Despite that run-wide parser failure, `step1Decision` checked the assigned 15 records individually: 15/15 are ready and their hashes are current.

The physics-specific aggregate `tools/physics-support/author-check.mts` was tried and resolved paths under `physics/`, producing false unreadable-file errors for this repository's QC paths. Its invalid generated report was removed. The repository-root `precheck`, `rendercheck`, `content-policy`, and proof-contract checks were then run directly and passed as listed above.

Read-only autopilot status at 2026-10-15 18:05 UTC remains `running`, with 1-scaffold at 18/60 and nothing in flight. It still reports owner-level blockers: `plan() threw — Invalid pair undefined`; invalid prerequisite graph item `def-qc-effective-unitary-matrix-input` in batch 12; a malformed Chapter 7 source-title handoff; and owner repair/recertification required via `research/quantum-computing-algorithms-60-2026-10-15-step1-blockers.json`. No engine state, verdict, shared plan, or other pair was changed.
