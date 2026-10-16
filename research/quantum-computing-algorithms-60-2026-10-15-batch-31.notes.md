# Batch 31 authoring and handoff — Quantum Phase Estimation

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `quantum-phase-estimation` / `quantum-phase-estimation-examples`  
Current scheduling input: `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`

## Governing plan and conflicts

- No standalone design file exists for this pair, as the task states. The controlling design is the QA-07 row in `research/plan-quantum-algorithms-track.md`, read together with `research/quantum-algorithms-planning/sections/qa_r2.md`. It calls for phases modulo one, eigenstate and superposition semantics, controlled-power access, inverse-access distinctions, finite-precision bounds, degeneracy handling, and measured outcome laws.
- `research/plan-spec.json` has the right A/B identities, order, category, and prerequisite pages, but both page records still have `items: []`. The QA-R2 proposal contains 10 A items and 2 B examples for this pair. The final pair adds two local A-page prerequisites: `lem-qa-phase-estimation-sine-chord-bounds` and `def-qa-circular-phase-distance`. The proposed geometric-sum lemma was retained and completed. The resulting inventory is 12 A items and 2 B examples, well below the 100-item cap. The manifest and library page lists agree.
- The owner direction supersedes stale task/design prose describing an authoring hold. This handoff records completion work only; no review or acceptance is claimed.
- The design's phrase “inverse access” is implemented as a separate optional controlled-inverse-power capability for consumers that uncompute the full coherent QPE prefix. The forward procedure itself uses positive powers of (U) and the inverse of the positive-sign QFT circuit; it does not query (U^{-1}).

## Inventory, dependencies, and levels

The final in-run levels were recomputed from the current manifests and exact `deps` arrays. Items with no in-run supplier have level zero; each other level is one plus the maximum in-run supplier level.

| Level | Items |
|---:|---|
| 0 | `lem-qa-phase-estimation-geometric-sum`, `lem-qa-phase-estimation-sine-chord-bounds`, `def-qa-circular-phase-distance` |
| 8 | `def-qa-eigenphase-estimation-model` |
| 12 | `alg-qa-quantum-phase-estimation` |
| 13 | `lem-qa-phase-estimation-outcome-kernel`, `thm-qa-phase-estimation-access-cost` |
| 14 | `lem-qa-phase-estimation-nearest-grid-bound`, `lem-qa-phase-estimation-tail-bound`, `thm-qa-phase-estimation-exact-grid`, `thm-qa-phase-estimation-superposition-law` |
| 15 | `thm-qa-phase-estimation-success-and-tail`, `ex-qa-exact-phase-estimation` |
| 16 | `ex-qa-phase-estimation-nearest-grid-and-tail` |

The 14-item assigned graph has no cycle, all 14 labels match the recomputed levels, and a transitive walk through `deps`, `justified_by`, and `forward_refs` found no missing carrier. It traversed 1,775 dependency nodes in the current run graph. That presence check is not an approval of those drafts.

The task's required page dependencies remain batches 1, 2, 3, 4, 7, 8, 9, 14, and 30. The actual item graph uses batches 1, 2, 3, 4, 7, 8, 9, and 30; batch 14 remains a page-level prerequisite. Current QC07 has 10 A items and one example, including the mapped one-qubit-gate carrier. Current QC09 has 14 A items and one example, including the syntax, denotation, and elementary-resource carriers. These current inventories supersede the stale empty-manifest observations in the old cross-dependency file.

The QPE readout is now specified directly in the algorithm as the Lüders projective instrument for the phase-register basis. The superposition proof derives its branch map by applying that projector and taking the partial trace; the outcome kernel uses the projective Born law. Therefore QPE does not depend on QC09's general `def-qc-classical-control-and-measurement-circuit`. I inspected that general carrier and its proof chain: it relies on `thm-qc-instrument-induces-povm`, whose cited `lem-qc-nondegenerate-trace-pairing` is listed in the batch-5 manifest but has no item file. That gap affects the general QC09 induced-POVM claim, but is outside this pair's final dependency graph. It is recorded separately in the cross-batch evidence rather than silently treated as a QPE prerequisite.

The actual `def-qc-circuit-denotational-semantics` carrier is present and states the chronological product (U_{L_d}\cdots U_{L_1}), with gate embeddings on declared wires. The QFT correctness draft still has a stale `[A1]` status sentence saying this carrier is absent. Its mathematical interface is present and was inspected; the stale status should be reconciled by the owner. No QC09 item was edited.

The access-cost theorem uses the narrower QC09 elementary-resource interface for separate gate, query, and classical-bit counts. It deliberately does not depend on QC14's broader circuit-cost model, whose extra time/space and ancilla coordinates are not used in the theorem. The QPE page still retains its planned page-level prerequisite on uniform circuit families; no uniformity, generator-time, or fixed-gate-set claim is made.

## Source reading and evidence

- Childs, *Lecture Notes on Quantum Algorithms*, complete PDF, §4.3, PDF pp. 26–27, and de Wolf, *Quantum Computing: Lecture Notes*, complete v6 PDF, §4.6, printed pp. 33–34 (PDF pp. 44–45), were directly inspected for the eigenphase convention, circuit order, controlled powers, exact-grid case, and finite outcome law. These are two independent full lecture-note treatments for the A page.
- The existing Lin full-PDF locator and fetch stamp for §§16.1–16.3 are preserved in the coverage ledger. I directly inspected the relevant full-text passages for the 1-periodic phase distance (Eq. 16.2), the sine chord inequality (Eq. 16.4), and the finite kernel and tail argument in §16.3. This records the relevant reasoning checked here; it does not claim a new reread of all 337 pages. The local proofs establish each inequality they use and sharpen the tail argument independently.
- The arXiv HTML endpoint was too large for the browser reader, so the cited full-text PDF was opened and inspected. This was not a failed cited-source retrieval. The three source URLs have existing complete-PDF fetch stamps; no source was dropped and no `source_resolution` failure record is needed.
- Coverage records each source locator, supported item, disposition, retrieval attempt, and fetch stamp. The new circular-distance item is added to Lin's coverage entry; the sine source is marked as corroboration for the chord inequality, with the global sine bound proved locally.

## Proof and mathematical notes

- The outcome kernel is the denominator-free finite sum (Q^{-2}|\sum_{j<Q}e^{2\pi ij(\theta-y/Q)}|^2). The geometric quotient is used only when its denominator is nonzero; the exact-grid case is handled separately.
- The nearest-grid argument constructs labels from ⌊(Q\theta)⌋ and proves the integer-lift equivalence, including ties and wrap-around. The tail estimate counts at most two labels in each circular annulus and uses a finite telescoping sum, with the empty-tail case (K>Q/2) explicit.
- The superposition result groups degenerate eigenvalues by full spectral projections. It proves the mixture law, conditional reference-preserving instrument, exact-grid projective case, off-grid nonprojective case, and a two-eigenspace coherence witness. Zero-probability branches receive no conditional state.
- The examples compute the complete (Q=8) exact-grid law and the (Q=8,θ=3/16) nearest tie and exact tail formula. Their finite checks are recorded in the proof contracts; they are hand calculations, not a separate test suite.
- The proof-contract file has one contract for each of the 11 proof-bearing items. It records exact supplier-section quotations, each numbered step and its inputs, all eight boundary dispositions, empty unresolved-supplier lists, and the two explicit finite example checks.

## Final scoped checks and Step-1 records

- `node tools/source-fetch-check.mjs --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-31.coverage.json --stamp`: **pass**, 6/6 sources fetch-verified, 0 newly stamped.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-31.proof-contracts.json --strict`: **pass**, 11/11 proof-bearing items, 0 errors, 0 warnings. Scoped inventory check: 14 manifest items, 11 proof-bearing, 11/11 contracts present.
- Scoped `node tools/tsx-run.mjs tools/precheck.mts ...`: **pass**, 11 checked, 0 failing. The nine proposed canonical phase-number repairs were adopted before this pass.
- Scoped `node tools/rendercheck.mjs ...`: **pass**, 16 files (14 items and both pages); all frontmatter parsed and all math rendered.
- `node tools/proof-layout.mjs ...`: **pass**, 14 assigned items, 46 numbered steps, 0 defects.
- `node tools/depcheck.mjs --items-file /tmp/qpe-step1-items.json`: **pass** for 14 selected items; selected page and prerequisite-cycle checks cover 1,070 items and 366 pages.
- Scoped dependency-level recomputation: **pass**, 14/14 labels match, no local cycle and no missing carrier in the transitive dependency walk. The walk covered 1,775 current dependency nodes, including `deps`, `justified_by`, and `forward_refs`.
- `node tools/step1-decisions.mjs record` was run for each assigned item with its direct dependency IDs and evidence; all 14 records are `ready`. A scoped hash check reports 14/14 closed.

Run-wide gates remain blocked by other batches and were not repaired here:

- `node tools/item-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` reports 78 errors: 56 empty scaffold inventories in later QA pages and 22 mismatched labels in other batches. There are **no batch-31 errors**. Examples include `reversible-arithmetic-and-oracle-conversion: empty scaffold inventory`, `lem-qc-circuit-resource-composition: dependency_level 6 differs from computed 10`, and `alg-qa-19-hypercube-state-transfer: dependency_level 7 differs from computed 11`.
- `node tools/batch-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` stops on malformed YAML in the unrelated `items/lem-qc-clifford-t-determinant-one-approximants.md:28` (`title: de Wolf, Quantum Computing: Lecture Notes`, parsed as a nested mapping).
- Run-wide `proof-contract-coverage.mjs` stops before comparison at the unrelated empty inventory `reversible-arithmetic-and-oracle-conversion`. The scoped 11/11 item coverage check above passes.

These run-wide failures do not alter the final pair manifest, its level labels, or the current 14 Step-1 records. No files from other batches or shared scheduling/state files were changed.
