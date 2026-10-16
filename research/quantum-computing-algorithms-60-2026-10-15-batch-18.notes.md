# Batch 18 authoring notes

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `classical-and-quantum-error-correcting-codes`  
Current scheduling input: `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`

## Inventory and plan comparison

The assigned pair is the A page at order 2200 in `quantum-computing` and its B examples page. The task, the QC track design at `research/plan-quantum-computing-track.md` (QC18), and the current `research/plan-spec.json` row agree on the title, category, order, and all nine A-page `requires` entries. The plan-spec's empty item arrays are the pre-authoring state.

The current audited proposal export has 13 A-page contracts. The audited batch inventory adds eight explicit A-page suppliers, giving 21 A items and four B items before this authoring pass. The local isometry lemma below adds one further A item: the final manifest has 22 A items and four B items (26 total), below the 100-item cap on both pages. The A inventory includes the assigned binary repetition syndrome example; the B inventory has the quantum repetition, Hamming, three-bit repetition, and short Reed–Solomon examples.

The item levels were recomputed against all 120 run page manifests, including in-run suppliers outside this batch. QC18 has no level mismatch or cycle. Its item counts by level are: level 0 — 2; level 1 — 1; level 2 — 3; level 3 — 3; level 4 — 3; level 5 — 3; level 6 — 2; level 7 — 3; level 8 — 2; level 9 — 4. The batch is at level 2 with prerequisite batch 2. The dispatch and current `batch-dependency-levels.json` both give input hash `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`; the older batch-18 coverage and cross-batch records carried `9b2c249d4992d9068191bb0f9b1490b0713c8529fcbaa1869bd16d178d892f85` and have been reconciled to the current hash. No shared scheduling file was changed.

One planning conflict is stale hold language. `research/plan-quantum-computing-track.md` and `research/quantum-computing-planning/prerequisite-audit.md` still say the pre-authoring hold remains open pending root repairs. The binding owner direction for this fresh native run explicitly releases that planning hold based on the actual integration journal, 71 integrated repairs, zero pending proposals, and the actual source-integration check. That owner direction supersedes the historical hold text; it does not grant mathematical acceptance or close this run. No QC18 design-scope or plan-spec conflict remains.

## Dependency and mathematical decisions

Suppliers were authored before consumers in ascending item level. Every direct dependency in the 26 carriers resolves to an existing supplier item, and the current page manifest agrees with each carrier's ID, dependency list, and level. A run-wide graph calculation gives the declared QC18 labels exactly. The batch-18 cross-batch evidence records 15 verified edges: the A-page requirement on `registers-tensor-products-and-partial-trace` plus 14 item edges. No cross-batch supplier ID remains unresolved.

The five actual QC02 supplier bodies used by consumers were read and matched against the declared interfaces: `def-qc-register-and-computational-basis` (ordered computational basis, first wire most significant, and the empty register is `C`); `def-qc-tensor-register-and-permutation` (lexicographic product basis, factor order, and empty/zero-dimensional cases); `def-qc-tensor-map` (factorwise action extended linearly); `lem-qc-tensor-product-basis-and-dimension` (orthonormal product basis and dimensions); and `thm-qc-wire-permutation-is-unitary` (the declared source-to-target order and inverse permutation). The body inspections are recorded in `batch-18.cross-batch-dependencies.json`; they are interface evidence, not supplier acceptance.

`lem-qc-linear-isometry-preserves-inner-products` is a new level-0 local lemma. Its four-norm expansion proves equality of real and imaginary parts under the repository's first-linear convention. `thm-qc-isometric-encoding-projector` uses this lemma rather than `thm-jordan-von-neumann-polarization`. The old route's transitive chain reached `def-axiom-of-choice` through `def-norm-and-normed-space`, `lem-bounded-remetrisation`, `thm-metric-equivalence-hierarchy`, and `thm-metric-continuity-characterisations`; that detour is unnecessary for this finite-dimensional complex isometry claim. The projector theorem's current transitive closure contains 326 items, with no missing supplier, no choice or countable-choice axiom, and no Jordan–von Neumann polarization item. A second closure across all 26 QC18 items contains 396 carriers, with no missing supplier, choice dependency, open problem, or unmanifested same-run supplier.

Two direct-subspace dependencies were made explicit: `def-qc-dual-of-a-finite-field-linear-code` now depends on `def-linear-subspace`, and `thm-qc-dual-code-dimension-and-double-dual` states and uses the subspace hypotheses directly. The dimension proof handles empty row bases and both `r=0` and `r=n`. The Hamming theorem now states `n∈N` for the metric claim (including the singleton `F^0`) and `n≥1` for the code-distance claim, matching the code definition. Its contract records the zero-, one-, and empty-coordinate cases. Classical duality uses the bilinear dot product over the stated finite field, not a Hermitian product. The quantum theorem asserts detection below distance only; recovery claims remain outside this pair's scope.

## Source and coverage evidence

Both pages have three recorded full-text sources. The A page uses Cleve's full QIC-710 notes, Preskill's complete Chapter 7, and Axler's *Linear Algebra Done Right*; the B page uses Cleve, Preskill, and MIT 6.895 Lecture 5 for the Reed–Solomon example. Scoped locators and item dispositions are recorded in the coverage JSON. The coverage item-reference audit finds all 22 A items and all four B items represented. The relevant scoped readings include Cleve §§36.1, 36.3.1, and 37.1–37.1.3; Preskill §§7.1, 7.4.1–7.4.3, 7.6, 7.8, and 7.15; all four MIT slides; and Axler §7D, Theorem 7.49, with the §6A inner-product convention. This is scoped reading evidence, not a claim of personally rereading the complete Cleve or Preskill documents sequentially.

The earlier MIT 6.451 Chapter 8 PDF was retrieved but its extracted prose was unreadable; that history is preserved. MIT 6.895 Lecture 5 was found as an alternative, retrieved, and visually inspected. The local `[4,2,3]_5` Reed–Solomon example proves its parameters and syndromes directly; the generic source bound is recorded as out of scope. All six active source occurrences pass `source-fetch-check --stamp`; no active source is dropped or unresolved.

## Scoped checks and run blockers

- `proof-contract.mjs ...batch-18.proof-contracts.json --strict --json`: passed for all 26 contracts, with no errors or warnings. Contracts include exact supplier excerpts, proof steps, inputs, and boundary evidence.
- `proof-layout.mjs` on the 26 explicit QC18 carrier paths: passed, 26 items, 61 steps, zero defects.
- `source-fetch-check.mjs --coverage ...batch-18.coverage.json --stamp`: 6/6 active source occurrences verified; zero newly stamped, zero documented drops.
- QC18 item levels, carrier/manifest dependencies, cross-batch statuses, and item-to-coverage references: passed in a batch-scoped comparison across all 120 run page manifests; no QC18 graph errors.
- The required run-wide `item-dependency-levels.mjs check --run ...` still fails outside this batch: 60 empty scaffold inventories and 179 mismatched labels among other items. The QC18 scoped comparison found no error among its 26 items.
- Recomputed Autopilot status remains `running`, with scaffold coverage 1/60 and other pair artifacts/refreshes still missing or pending. The reported unrelated run blockers are `Invalid pair undefined`; construction item identity `def-qc-effective-unitary-matrix-input` in batch 12; and a separate handoff YAML parse error at line 16, column 14 (`John Preskill, Quantum Computation, Chapter 7: ...`). These were left to the owner; no engine state or other batch was edited. QC18 draft readiness does not close or approve the run.

All 26 QC18 items have Step 1 readiness records with their direct dependency IDs and the evidence above. These records are draft-authoring readiness only, not independent proof approval.
