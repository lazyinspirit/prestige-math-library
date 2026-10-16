# Batch 24 authoring notes

## Plan reconciliation

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task, owner authoring direction, the complete QC24 design section, `plan-spec.json`, the dependency-level input, and the existing handoff evidence. The owner direction controls over stale task text.
- The plan-spec rows at orders 2212–2213 match the assigned A/B IDs, titles, category, companion, orders, and page prerequisites. Its empty item arrays are authoring placeholders. No plan/design conflict was found in the local scope.
- The controlling design defines the scope as state preparation, isometry completion, exact versus approximate limits, dense input charges, bounded-arity gate/workspace/depth counts, and no free QRAM or data-loading assumption. The draft claims preserve those boundaries.
- The dispatch pins batch scheduling input `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`. The current shared dependency artifact stores input SHA `18e74e2f302792bf59915862859e447cb46018c36ea7712d592c03b3b262e434` (raw file SHA256 `b0a9b09e281c65b3156498e47089c3a7a07bdbc091218659d10be1798581a4bb`). Other workers updated prerequisite manifests during this authoring window. The shared schedule was not rewritten; its checker currently stops on an unrelated malformed supplier YAML file, so a fresh scheduling digest could not be verified.

## Inventory and item dependency levels

The A page contains 20 items and the B page contains one example, below the 100-item cap. One local support lemma, `lem-qc-countable-compact-null-union`, was added to give a complete choice-free proof of the compact-null countable-union step used by the continuous-parameter lower bound. The chord-distance definition uses an infimum; its companion proof establishes attainment and the closed formula, with Cauchy–Schwarz supplying the square-root domain bound. The discrete-alphabet theorem now requires a nonempty finite alphabet so its description base is at least two. The state-preparation workspace bound is `max{n−1,0}`, including `n=0`.

Levels below are recomputed from current in-run supplier items (including supplier carriers outside batch 24), not from batch number order. Batch 24’s page-level scheduling label remains 10; deeper item chains reach level 13.

| Item level | Items |
|---:|---|
| 0 | `lem-qc-countable-compact-null-union`, `lem-qc-open-cube-is-not-null` |
| 2 | `def-qc-projective-chord-distance`, `def-qc-projective-space-atlas` |
| 3 | `lem-qc-projective-chord-distance-formula`, `thm-qc-projective-chart-dimension` |
| 4 | `lem-qc-signed-ray-packing-code` |
| 9 | `def-qc-clean-ancilla-output-projection`, `def-qc-state-preparation-cost-model` |
| 10 | `alg-qc-isometry-unitary-completion`, `alg-qc-state-preparation`, `thm-qc-continuous-parameter-state-preparation-lower-bound`, `thm-qc-finite-width-topology-count` |
| 11 | `lem-qc-prefix-norm-rotation-identities`, `thm-qc-discrete-alphabet-approximate-preparation-lower-bound`, `thm-qc-finite-alphabet-exact-nonuniversality`, `thm-qc-isometry-completion-and-synthesis` |
| 12 | `thm-qc-state-preparation-rotation-level-upper-bound` |
| 13 | `ex-qc-amplitude-table-state-preparation-cost`, `thm-qc-amplitude-table-precision-and-compilation`, `thm-qc-state-preparation-cost` |

All 21 batch-24 labels match the dependency graph computed from current run manifests; the scoped batch-24 item check has no level errors or cycles. The full-run checker still reports unrelated empty inventories and stale item levels in other batches.

## Supplier inspection and unresolved interfaces

- Batches 2, 3, 7, 8, 9, 10, 11, and 12 have current manifests and supplier bodies. The QC9 circuit-syntax page is now present as a draft and its resource, denotation, wire-embedding, and disjoint-layer items are listed in batch 9. A prior handoff observation that `def-qc-elementary-circuit-resources` was absent is superseded: its current draft body is present and manifested in batch 9. No supplier is treated as approved merely because it is present or manifested.
- The required QC13 draft page is now present with 32 listed carriers. The QC13 owner checked the exact-versus-approximate alphabet/resource interface and all three named QC24 consumers; none depends logically on deeper QC13 norm, optimality or runtime claims.
- The Sard compact-section repair preserves its Statement and removes the choice gap: explicit volume-controlled open cube enlargements give individual finite section covers; all witnessed interval/list pairs form the open cover, compactness supplies slabs, and only finitely many witnesses enter the partition estimate. Euclidean Sard and the local dimension/nullity argument remain applicable without that uncountable selection.
- `thm-qc-exact-arbitrary-unitary-qsd-upper-bound` states the desired CNOT count but leaves diagonal extraction as assumption `[A1]` at supplier step 2.2. The isometry theorem’s local step 4.1 remains conditional on that identity.
- The fixed-arity supplier now feeds a rational dyadic delta in (h/2,h] to the compiler, h=min(eta_0,epsilon/m), preserving the real-epsilon guarantee and gate-count asymptotic. Both previously missing dependencies are present in current batch12 item/page manifests and the carrier. Whole-block phase handling and the amplitude consumer’s rational epsilon-prime/G allocation remain valid; the separate exact-factorization interface is retained.
- Current page-level prerequisites QC2, QC3, QC7, QC8, QC9, QC10, QC11, and QC12 are present as draft pages; the Sard page is published. QC13 is also present as a draft page; its availability defect is reconciled. The cross-batch ledger has 97 rows, including 87 direct external/in-run item edges and all 10 declared page prerequisites; a direct-edge audit found no missing batch-24 dependency rows.

## Source review and dispositions

Coverage records eight full-text source occurrences with URLs, locators, reading history, item mappings, fetch stamps, and dispositions. The author inspected Preskill’s full 54-page chapter (especially §5.3.3 and §5.4.4), Watrous’s full 598-page text for isometry conventions, Shende–Bullock–Markov’s 19-page synthesis paper for state-preparation/QSD context, Dawson–Nielsen’s 15-page Solovay–Kitaev paper including its finite-precision caveat, and Lebl §§10.1 and 10.3 in full. Preskill and Shende provide construction/counting context, not substitutes for local proofs. Lebl’s countable-union argument is not used; the local compact-null proof uses deterministic least-code rational covers. The B example’s exact vector and angles are checked in its own verification. No source retrieval failed, no recovery retries or drops were needed, and no `source-resolution` entry is required.

## Checks and readiness handoff

- `source-fetch-check --stamp`: 8/8 verified; 0 newly stamped; 0 documented drops.
- `precheck` on 21 batch-24 items: 15 proof-bearing items checked, 0 failures; the other 6 items are definitions/algorithms without phase proofs.
- `proof-contract --strict`: 15/15 proof-bearing items checked, 0 errors, 0 warnings. Finite-smoke registry entries are empty because there is no named QC finite-smoke check; the B example is verified explicitly.
- `proof-layout` on all 21 explicitly scoped items: 55 numbered steps, 0 defects.
- Batch-24 item dependency recomputation: 21 items, no local level errors or cycles. Full-run computation reports 85 unrelated errors (54 empty scaffold inventories, 31 stale levels); batch 24 has no errors.
- `batch-dependency-levels check` is blocked by malformed YAML in `items/def-qc-css-code-from-nested-binary-codes.md` at line 25 (`John Preskill, Quantum Computation, Chapter 7...` is unquoted). No other pair’s item or the shared schedule was edited.
- Step 1 decisions were recorded for all 21 batch-24 items without `--owner`: 16 `ready`, 5 `escalated`. A scoped hash audit confirms all 16 ready records are closed and none are stale. The run-wide `step1-decisions check` stops on malformed YAML in the unrelated QA19 supplier set (first failure: `items/thm-qa-19-measurement-distribution.md`, line 28, unquoted chapter locator); the batch-24 records remain individually hash-bound.
- Recomputed autopilot status remains `running`, stage `1-scaffold` at 16/60 with no work in flight. The owner’s existing holds remain: `plan()` reports `Invalid pair undefined`; the spec reports invalid batch-12 construction identity `def-qc-effective-unitary-matrix-input`; the recorded handoff blocker reports malformed source YAML; and Step 1 is held for owner repair/recertification. No runtime state or verdicts were changed.

Original readiness/escalation receipts are preserved for the owner’s decision. The focused Sard choice and QC12 rational-domain/manifest defects are repaired; the separate QSD repair and other recorded interfaces retain their own owners.
