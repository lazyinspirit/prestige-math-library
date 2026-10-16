# Batch 45 notes — Linear Combinations of Unitaries and Taylor Simulation

Run `quantum-computing-algorithms-60-2026-10-15`, beta batch 45. The controlling owner direction was read before authoring. The batch dependency input assigns level 13 and prerequisite batches 1, 2, 8, 10, 14, 24, and 44; scheduling input SHA-256 is `8a8741bd10bd2c8045ab35f84063b17c7eaf83424674eeb221f486015b3f7848`.

## Plan and design reconciliation

No formal design section exists for this pair. The historical QA r4 section was read as context, not treated as a current design. The current plan and generated assignment agree on the nine page prerequisites and the LCU, oblivious-amplification, and Taylor-simulation scope. The plan-spec entry has no pre-authored item inventory; no conflict with a current design section was found. The run plan and shared schedule were not changed.

The assignment proposed 11 A items and 3 B examples. Four local A suppliers were added to make the clean-ancilla branch law and the trace-distance reductions explicit: `lem-qa-21-pure-state-trace-distance-from-vector-error`, `lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians`, `def-qa-21-clean-ancilla-postselection`, and `thm-qa-21-clean-ancilla-postselection-probability-law`. The finished inventory is 15 A items and 3 B items, below the page cap. Their item levels run from 2 through 19; the batch remains at scheduled level 13. No dependency cycle or batch 45 level mismatch was reported.

## Mathematical conventions and proof route

The pages use the repository root-inner-product convention (linear in the first argument) and the corresponding Dirac conversion. The zero-qubit index register is one-dimensional. The LCU definition specifies the full PREPARE and SELECT actions, padded indices, inverse/controlled access, and separate costs. The reflection used here is `R₀ = I − 2Π₀`; the QC reflection supplier’s opposite sign is kept distinct, with its controlled-Z correction charged explicitly.

The OAA calculation is `−3M/2 + MM†M/2` for the uncorrected projected block at scale 2. The outer phase correction changes the unitary target sign; the separate robust lemma proves the clean-input isometry estimate and bounds leakage. Taylor simulation uses the factorial remainder, the `±qI` cancelling padding, certified truncation, fresh segment ancillas, and a summed per-call compilation-error budget. Work registers remain in the output dilation; exact cleanup is not claimed. Continuous-rotation preparation bounds are not presented as finite-alphabet gate synthesis or coefficient bit-time bounds.

## Source record

Childs, *Lecture Notes on Quantum Algorithms*, Chapter 28 §28.3, Eqs. (28.5)–(28.25), was read in the complete relevant section from the local 191-page PDF. De Wolf, *Quantum Computing: Lecture Notes*, §§9.3–9.3.1, was read in the complete relevant sections from the local 239-page PDF. Watrous, *The Theory of Quantum Information*, §1.1.3, Eqs. (1.181)–(1.184), PDF pp. 33–34, was read for the trace-norm and partial-trace interfaces. All three are author-hosted full-text sources; Watrous supplies the book treatment, alongside two independent lecture-note treatments.

The local files, SHA-256 hashes, page/byte counts, locators, supported items, and per-item dispositions are in `batch-45.source-evidence.json`. The source history was reused; no retrieval failed, no recovery retry was needed, and no `source_resolution` or drop record applies. `source-fetch-check --stamp` verified 5/5 page-source entries, with 0 newly stamped and 0 documented drops. Every proof obligation not established by a cited source excerpt is proved locally in its carrier and proof contract.

## Cross-batch prerequisites and readiness

The current supplier bodies and proofs were inspected before use. Four independent helper carriers are recorded `ready`: the two trace-distance lemmas, the clean-ancilla postselection definition, and its normalized-branch theorem. The other fourteen items are recorded `escalated`, with `owner:false`; no `--owner` flag was used and no existing owner escalation was overwritten.

The unresolved supplier IDs are `def-qa-20-simulation-error-and-cost-model`, `def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`, `def-qc-circuit-cost-model`, `def-qc-reflection`, and `thm-qc-reflection-unitary-involution`. Their existing Step 1 records are escalated. The recorded open page contexts include `hamiltonian-simulation-and-product-formulas`, `controlled-gates-phase-and-entanglement`, and `uniform-circuit-families-promise-problems-and-complexity`. The access suppliers additionally name five unresolved page prerequisites: `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `measurements-povms-and-instruments`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, and `registers-tensor-products-and-partial-trace`. These gaps affect the declared LCU access/cost interface and the availability of controlled, inverse, and reflection calls; the dependent block, OAA, Taylor, simulation, and B-example claims remain present and are marked escalated for reconciliation.

The cross-batch ledger has 123 direct item/page edges, including 14 open item edges over the six unresolved item suppliers and 4 open page edges. Each item edge records an exact current supplier excerpt and distinguishes interface inspection from authoring readiness or approval. The dependent examples page is open because it requires the A page.

## Scoped checks and blockers

- `precheck.mts`: 11 proof-bearing items checked, 0 failures. Definitions and algorithms have no proof phase to check.
- `rendercheck.mjs`: 20 assigned item/page files checked, 0 errors and 0 warnings.
- `depcheck.mjs --items-file /tmp/qa21-depcheck-items.json --quiet --json`: 18 focused items, 0 errors and 0 warnings; prerequisite-cycle checks covered 1,157 items and 382 pages.
- `proof-contract.mjs ...batch-45.proof-contracts.json --strict`: 18/18 items, 0 errors and 0 warnings.
- `proof-layout.mjs` on the 18 explicit item files: 18 items, 41 steps, 0 defects.
- `source-fetch-check --stamp`: 5/5 source entries fetch-verified; 0 newly stamped.
- `item-dependency-levels.mjs check --run ...`: no batch 45 label mismatch. The latest run-wide check exits nonzero on unrelated inventory/level errors: the empty `quantum-sampling-expectation-and-monte-carlo-examples` scaffold and six QA34 mismatches: `lem-qa-34-exponential-gram-concentration` (16 vs 17), `lem-qa-34-two-sketch-threshold-band-bound` (16 vs 1), `thm-qa-34-modfkv-low-rank-approximation` (17 vs 18), `thm-qa-34-tang-recommendation-sampler` (18 vs 19), `rem-qa-34-dequantization-scope` (19 vs 20), and `cex-qa-34-tang-without-sampling-access` (19 vs 20). These other batches were not edited.
- The cross-batch ledger contains 123 edges: 14 open direct item edges over six supplier IDs, and four page edges with status `open`; the other six page interfaces are marked `used-interface-inspected`. A manifest comparison confirms all 113 external item dependencies are represented exactly once, with no missing or extra item edges. Both coverage page/item sequences match the current page manifest.
- `step1-decisions.mjs record`: all 18 item records are present; the pure-state lemma’s prior current `ready` row was retained when the tool refused an unnecessary rewrite. A run-wide `step1-decisions.mjs check` cannot complete because unrelated malformed frontmatter is encountered at `items/lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent.md:23` (`verification: {, judge: ...`). That item was left untouched. The individual records report authoring readiness only; they are not independent acceptance.

The latest read-only autopilot status recomputation reports the run still at `1-scaffold` (52/60 covered), with no unit in flight. Batch 45 remains on the run’s missing-artifact list. Existing blockers include `plan() threw — Invalid pair undefined`, invalid construction-scheduling identity `def-qc-effective-unitary-matrix-input` in batch 12, another item’s YAML handoff failure at the John Preskill source title, and the owner-held repair/recertification blocker in `step1-blockers.json`. No autopilot state, shared plan, blocker, or verdict was modified.
