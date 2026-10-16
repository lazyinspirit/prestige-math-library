# Batch 4 — Measurements, POVMs, and Instruments

## Authority and plan reconciliation

- The binding authoring authority is `research/quantum-computing-algorithms-60-2026-10-15-owner-authoring-direction.md`. It releases the prior prerequisite-planning hold for all 60 pairs. The older QC track-plan `Source and Proof Status` paragraph still describes the pre-integration root-closure failure and says to wait; that statement is superseded by the owner direction and its actual integration/release evidence. This batch authors drafts only and claims no proof acceptance or publication.
- The complete QC04 design section at `research/plan-quantum-computing-track.md` (including its mathematical conventions) requires projective measurements, POVMs, instruments, finite outcome laws, conditional states, normalization, zero-probability behavior, and a local finite Naimark compression proof. The authored scope preserves each obligation and uses the root linear-first inner-product convention. No physical postulate appears as a proof premise.
- The task, plan-spec QC04 page records, and batch page manifest agree on A/B IDs, order 2172/2173, title, category, and the six A-page `requires` edges. `plan-spec.json` still has empty `items` arrays for this pair, while the audited QC export has 15 A items and one B example. The authored A inventory contains those 15 items plus the local block-amplification lemma needed to define complete positivity on the full ancillary operator space. The new lemma is on the A page, before its consumers, and keeps the page well below the 100-item cap.

## Inventory and dependency levels

- The assigned inventory is 16 A items and one B example. The dependency DAG is acyclic. Recomputed item levels against current item manifests in batches 1–4; all 17 batch-4 labels match. The page remains batch level 3 with prerequisites 1, 2, and 3.

| Item level | Items |
|---:|---|
| 1 | `def-qc-projective-measurement` |
| 2 | `def-qc-povm-and-outcome-law`, `thm-qc-projective-measurement-outcome-law` |
| 3 | `def-qc-finite-outcome-probability-kernel`, `lem-qc-finite-ancilla-amplification-is-block-map`, `thm-qc-finite-naimark-isometric-compression`, `thm-qc-povm-probabilities-normalize`, `thm-qc-projective-conditional-state` |
| 4 | `def-qc-completely-positive-map`, `thm-qc-finite-outcome-law-is-a-probability-kernel` |
| 5 | `def-qc-instrument-and-conditional-state` |
| 6 | `thm-qc-instrument-outcome-law-normalizes`, `thm-qc-luders-instrument-of-a-povm-is-valid`, `thm-qc-zero-probability-branch-has-no-conditioned-state` |
| 7 | `thm-qc-instrument-conditional-state-is-density`, `thm-qc-nonselective-instrument-output-is-density`, `ex-qc-zero-probability-projective-branch` |

- A scoped dependency calculation over the populated batch 1–4 manifests checked 58 items on 8 pages with zero errors; the 17 batch-4 `dependency_level` values all equal their computed values. Frontmatter `deps` and `justified_by` match the batch manifest for every owned item.
- The run-wide `item-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` remains blocked outside this batch: it reports 275 errors, including 60 empty page inventories and dependency-level mismatches in other batches. It reports no batch-4 item error. The batch-4 manifest still records level 3 and `requires: [1,2,3]`.
- The batch-level sidecar records the task's pre-edit scheduling input `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`. This batch changed its manifest dependencies to make actual supplier interfaces explicit, so the hash-bound run-wide sidecar needs an owner refresh. `batch-dependency-levels.mjs check` currently fails before recomputation on malformed YAML at line 16, column 14, near `title: John Preskill, Quantum Computation, Chapter 7: Quantum Error…`. This is outside batch 4; the shared sidecar and that carrier were left untouched. The current graph still gives batch 4 level 3.

## Supplier inspection and cross-batch evidence

- The cross-batch ledger has 27 verified item edges and 3 verified page edges to batches 1–3. All eight distinct same-run item suppliers are present and their actual bodies/proofs were inspected: `def-qc-density-operator`, `def-qc-finite-positive-effect-family`, `lem-qc-complete-effect-family-members-are-effects`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `lem-qc-tensor-product-basis-and-dimension`, `def-qc-tensor-map`, and `def-qc-dirac-notation-conversion`. These eight suppliers do not yet have Step-1 readiness records; the exact current source excerpts and consuming uses are recorded in `batch-4.cross-batch-dependencies.json`. This is interface verification, not upstream readiness or acceptance.
- The actual root suppliers inspected include the linear-first inner-product and Dirac conventions, finite-dimensional bases, adjoints, matrix coordinates/products, endomorphism trace and rectangular trace cyclicity, trace linearity, positive operators, their spectral characterization and unique square roots, finite probability spaces, and linear-map operations. The local arguments preserve nonzero density-space hypotheses, finite nonempty outcome sets, zero effects/projections, zero-probability branches, and finite ancilla dimensions. All arguments are choice-free.
- The complete relevant reasoning was read from John Watrous, *The Theory of Quantum Information*, §§2.2.1–2.2.2 (PDF pp. 80–99) and §§2.3.1–2.3.3 (PDF pp. 108–131), and John Preskill, *Quantum Computation*, Chapter 3, §§3.1.1–3.1.2, 3.2.4, and 3.2.6 (PDF pp. 4–24). Full cached text is under `research/quantum-computing-planning/sources/qc_r1/TQI.txt` and `research/quantum-computing-planning/sources/qc_r2/ch3_15/page-*.txt`. `source-fetch-check --stamp` verified 2/2 full-text sources, 0 newly stamped. No retrieval failure, retry, source drop, or `source_resolution` escalation occurred. Coverage marks the harvested results for all 16 A items and the B example `included`.

## Repairs and final contracts

- Added `lem-qc-finite-ancilla-amplification-is-block-map` before the complete-positivity definition. It constructs the unique block operators and the amplified map from finite product bases, including the zero-space case, and proves the canonical $r=1$ tensor-unit identifications. `def-qc-completely-positive-map` depends on this lemma as a logical prerequisite. Its former duplicate `justified_by` entry was removed: the schema requires a `justified_by` target to depend on the definition, and that reverse edge would be circular here.
- Completed explicit interfaces while reviewing consumers: `def-qc-projective-measurement` cites the adjoint, endomorphism-space, and composition interfaces it uses; `def-qc-povm-and-outcome-law` cites the endomorphism-space definition; `thm-qc-projective-conditional-state` cites the image definition and writes the image inclusion directly; `thm-qc-finite-outcome-law-is-a-probability-kernel` labels its matrix-product input. The Borel and affine definitions now state their exact topologies and convex-combination meaning.
- The A/B pages, item frontmatter, manifest dependencies, coverage, cross-batch ledger, and proof contracts agree. Proof contracts cover 17 items with 106 exact supplier excerpts and 40 actual proof-step derivations. Each proof contract has all eight boundary dispositions, `axioms: []`, and no unsupported finite-smoke registry entry. The B example is a local exact $2\times2$ calculation.

## Scoped checks and readiness

- `content-policy` — 17 scoped items, 0 errors, 0 warnings.
- `manifest-deps` — 17 items, 0 missing dependency arrays, 0 errors.
- `depcheck` — 17 items and 2 pages; dependency closure 759 items/170 pages; 0 errors, 0 warnings.
- `precheck` — 17 files, 12 proof-bearing items, 0 failures.
- `proof-contract --strict` — 17/17 items, 0 errors, 0 warnings.
- `proof-layout` — 17 items, 40 steps, 0 defects.
- `rendercheck` — 19 assigned item/page files, YAML and KaTeX pass.
- Scoped item-level calculation — 58 items across batches 1–4, no errors; all 17 owned labels match. The run-wide dependency check and batch-sidecar limitation are recorded above.
- `step1-decisions record` created `ready`, `owner: false` records for all 17 items with examined direct dependencies and any `justified_by` result. A read-only `step1-decisions check` finds all 17 batch-4 records current; the run-wide check is open on sibling batches (514 current items, 17 ready, 557 work rows). These are authoring-readiness records, not mathematical approval.

The autopilot remains at `1-scaffold`, 0/60 covered and with no workers in flight. Its blockers remain `Invalid pair undefined`, invalid construction identity `def-qc-effective-unitary-matrix-input` in batch 12, and the malformed-YAML handoff noted above. No published item, shared plan, owner verdict, other batch, or `.autopilot` state was edited.
