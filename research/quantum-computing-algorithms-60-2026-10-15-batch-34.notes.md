# Batch 34 authoring and handoff notes

## Governing inputs and scope

- The run-local owner direction was read first and controls the stale prerequisite hold in earlier planning text. It authorizes draft authoring against actual suppliers; it does not accept proofs or authorize publication.
- No dedicated design section governs this pair (`design: none found`). The current QA-10 topic-coverage row in `research/plan-quantum-algorithms-track.md` supplies the track-level route: define the finite abelian hiding input and oracle, prove Fourier sampling and common-kernel recovery under exact supplied representation/circuit assumptions, and keep nonabelian limitations as scope restrictions. The standalone task's instruction to read a complete design section is inapplicable because no such pair design exists; the complete QA-10 plan row was read.
- The canonical `plan-spec.json` rows at orders 2232/2233 match this A/B pair's IDs, category, titles, companion, and nine A-page `requires` edges. Their empty item arrays are page-level plan entries. The current audited QA export and batch scaffold contain 12 item contracts; this is compatible with the canonical page-level plan, not an item-scope conflict.
- The current QC/QA audited page exports and their QC09/QC10/QC14 and QA-10 track rows were checked. QC's restriction against QC10–13 depending on later QC14 is not violated: the cost theorem is a QA consumer, and QA-10 explicitly requires the uniform-circuit-family/cost page. No QC→QA dependency or plan cycle is introduced.
- Earlier plan prose and QA-R2 snapshots say prerequisite integration was pending. The later owner release and actual integration record control; no historical repair proposal or virtual status was rerun.

## Inventory and dependency levels

The assigned inventory is ten A-page items and two B-page examples. Batch/page level is 11; prerequisite batches are 1, 2, 3, 4, 9, 10, 14, and 29. The dispatch input hash is `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`; the batch-local recorded fingerprint is `9b2c249d4992d9068191bb0f9b1490b0713c8529fcbaa1869bd16d178d892f85`. The final run-wide batch-level check cannot recompute a fresh hash because an unrelated source YAML carrier fails to parse; this recorded input hash is not presented as a fresh run-wide validation.

| Item | Page | Level |
|---|---|---:|
| `rem-qa-nonabelian-hidden-subgroup-scope` | A | 0 |
| `lem-qa-annihilator-restriction-cut` | A | 6 |
| `lem-qa-common-kernel-repetition-bound` | A | 7 |
| `def-qa-finite-abelian-hidden-subgroup-problem` | A | 14 |
| `alg-qa-finite-abelian-hidden-subgroup-sample` | A | 15 |
| `lem-qa-hidden-coset-state-law` | A | 16 |
| `alg-qa-finite-abelian-hidden-subgroup-reconstruction` | A | 16 |
| `thm-qa-finite-abelian-hidden-subgroup-sample-law` | A | 17 |
| `thm-qa-finite-abelian-hidden-subgroup-reconstruction-success` | A | 18 |
| `thm-qa-finite-abelian-hidden-subgroup-cost` | A | 19 |
| `ex-qa-hsp-common-kernel-recovery` | B | 18 |
| `ex-qa-hsp-cyclic-subgroup-annihilator` | B | 18 |

During authoring, the coherent-oracle supplier advanced from level 11 to level 13 in its current item/manifest; the audited proposed-items row still says 9. Recomputing against current run manifests raises the HSP input definition to level 14 and downstream levels accordingly. A scoped calculation over all 120 current run pages matches all 12 batch-34 labels and finds no dependency-level error in this batch's transitive closure. It first exposed a Batch 9 mismatch (`def-qc-elementary-circuit-resources`, file/manifest 7, graph 8); the current Batch 9 item and manifest now both say 8. The full graph currently has 78 errors, none in this closure. The definition and examples explicitly depend on cyclic-character and product-character suppliers for tuple labels. The common-kernel product example uses `Z/2 × Z/6`, which satisfies the definition's invariant-factor convention; `Z/4 × Z/6` would not.

The annihilator-cut proof now directly cites `lem-qa-finite-abelian-annihilators-are-subgroups`; this supplier is level 4, so the cut lemma remains level 6. The repetition bound and sample-law theorem directly list the annihilator definition where they use its notation. The cost theorem directly lists the sample algorithm and HSP input definition for the circuit invocation and bit encoding it counts.

## Source reading and disposition

- Childs, *Lecture Notes on Quantum Algorithms*: Chapter 6 §§6.1–6.2, PDF pp. 33–37, for the finite-abelian HSP, coset-state construction, annihilator sampling, and recovery; Chapter 12 §§12.1–12.3 in the complete cached text for the nonabelian weak/strong Fourier-sampling scope discussion. The audited QA source locator records the broader Chapters 10–13 range, PDF pp. 50–66. The complete relevant arguments were read; no full-corpus sequential reread is claimed.
- de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6: Chapter 6 §§6.1.1–6.1.2, §§6.2.1–6.2.2, and §6.3.2, PDF pp. 57–64. The complete finite-abelian derivation and nonabelian scope discussion were read.
- The published `lem-chernoff-bound-for-independent-bernoulli-trials` statement and proof were read. Only its explicit independent-Bernoulli lower-tail bound is imported; the adaptive cut-to-Bernoulli coupling is proved locally.
- Both full cached lecture-note PDFs were inspected. `source-fetch-check --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-34.source-coverage.json --stamp` passed 2/2 sources, 0 newly stamped. No retrieval failed, so no recovery retries or `source_resolution` dispositions were required. Source URLs, retrieval hashes, per-item support, and dispositions remain in `batch-34.source-evidence.json` and `batch-34.coverage.json`.

## Supplier verification and open interfaces

Actual QA-05 proofs and definitions were reread for the character dual, cyclic/product character labels, character orthogonality, annihilator definition/subgroup lemma, evaluation-map isomorphism, double annihilator, annihilator cardinality, coset Fourier transform, and Fourier-transform unitarity. Two earlier handoff flags are stale against the current bodies:

1. The current `thm-qa-finite-abelian-evaluation-map-isomorphism` Facts [F4] cite the product-character bijection, and its current proof uses that fact in step 3.1. The prior note that its Facts omitted the supplier described an earlier body.
2. The current `thm-qa-finite-abelian-subgroup-annihilator-cardinality` proof establishes the inflation/descent bijection and cardinality directly. Its current proof does not use `lem-qa-finite-abelian-annihilators-are-subgroups` as a premise; the sample-law consumer uses its cardinality statement. The prior missing-dependency flag described an earlier body/contract.

The circuit suppliers that were absent at the first handoff now have actual draft bodies, and the current statements and relevant proofs were read. The cross-batch evidence stores current excerpts rather than treating planned interfaces as actual quotations:

- `def-qc-circuit-syntax-and-register-order` (Batch 9, level 2) fixes ordered wires, distinct ordered supports, disjoint layers, and chronological order. `lem-qc-local-gate-wire-embedding` (level 4) constructs the unique global unitary by a wire permutation and conjugation with $U\otimes I$. `lem-qc-disjoint-layer-order-independence` (level 5) proves commutation on the computational basis. `def-qc-circuit-denotational-semantics` (level 6) uses $U_{L_d}\cdots U_{L_1}$ and verifies unitarity and chronology.
- `def-qc-elementary-circuit-resources` (Batch 9) defines gate count, explicit-layer depth, width, and separately declared access costs. Its body and interface were inspected. The earlier level-7 label was corrected in the current Batch 9 item and manifest to level 8, matching the graph; no Batch 34 resource-level mismatch remains.
- `def-qc-one-qubit-gate-alphabet-and-rotations` (Batch 7, level 5), `def-qc-controlled-unitary-access` (Batch 8, level 6), and `def-qc-inverse-unitary-access` (Batch 8, level 7) were inspected. The controlled and inverse capabilities are explicit and separately charged; the HSP sample does not infer a controlled oracle call from an ordinary call.
- `def-qc-coherent-function-oracle` (Batch 10, level 13) specifies a total Boolean XOR action, its inverse theorem verifies the involutive basis permutation, and the source separates named queries from a compiled reversible circuit. The earlier working snapshot said level 11 and the audited proposed-items row says 9; the current source and Batch 10 manifest both say 13.
- `alg-qc-reversible-embedding` and `thm-qc-reversible-embedding-cost` (Batch 10, levels 11 and 12) were inspected for the conditional explicit-circuit branch. Their compute-copy-reverse construction proves the stated target action and clean-work restoration; no uniform-generation or efficiency claim is imported.
`def-qc-circuit-cost-model` (Batch 14, current file/manifest/graph level 10) was inspected. The HSP cost theorem uses gate counts, named-query counts, separate measurement/discard costs, and classical output length; it makes no depth claim. This supplier defines depth as the minimum layering while the resource definition uses explicit-layer count. That convention difference is recorded for the owner but does not affect the Batch 34 claims. Its embedded QC09 check said item bodies were absent when drafted; the bodies and the aggregate QC09 page now exist and were inspected.

Both required page-level prerequisites now have actual draft bodies: `measurements-povms-and-instruments` (Batch 4) and `circuit-syntax-denotational-semantics-and-measurement` (Batch 9). Their current page bodies and relevant measurement/circuit item proofs were read. The projective-measurement definition specifies finite orthogonal projections and trace weights; its theorem proves nonnegative normalized probabilities. The circuit page specifies the chronological unitary semantics and terminal measurement scope. The exact current page excerpts are in the cross-batch input; no planned summary is passed off as an actual quote.

The current sample-law proof computes projective weights from the measurement and trace definitions, so it does not depend on the separate `thm-qc-projective-measurement-outcome-law`. The current QA-05 annihilator-cardinality proof supplies the cardinality used by the sample-law theorem; the stale dependency-mismatch remark was corrected. After the QC04/QC09 page bodies appeared, the sample-law remark was updated to reflect their inspected, draft status; its `escalated` record was retained unchanged. The reversible-XOR theorem directly verifies the basis permutation and involution.

## Readiness and current run state

The final Step 1 records are three `ready` and nine `escalated`, all with `owner: false`. The annihilator-cut remark was corrected to reflect the current inspected QA-05 bodies and its `ready` record was refreshed through `step1-decisions.mjs record`. The nine escalations were recorded before the currently missing circuit item and page bodies appeared. Per instruction, those escalation records were not overwritten; this note and the cross-batch inputs record the current supplier state instead. All currently declared direct page/item supplier bodies in the Batch 34 dependency closure are present and inspected, and the scoped graph has no level error in that closure. The escalations still require owner repair/recertification under the live gate and do not constitute proof acceptance.

The latest recomputed `.autopilot` status reports the run as `running`, with 1-scaffold at 12/60 and nothing in flight. It still lists `Invalid pair undefined`, invalid Batch 12 item identity `def-qc-effective-unitary-matrix-input`, and the item-handoff YAML parse error at line 16 for unquoted `John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction`; it also requires owner repair and recertification and says Step 1 is held. These run-level blockers are outside Batch 34 ownership. No engine state or owner gate was edited.

## Final scoped checks

- `content-policy.mjs` on the batch-34 manifest: 12 items, 0 errors, 0 warnings.
- `coverage-checklist.mjs` on batch-34 coverage: 1 A page, 22 harvested results, 0 errors, 0 warnings.
- Strict proof contract: 12/12 items checked, 0 errors, 0 warnings.
- Proof layout: 12 items, 29 steps, 0 defects.
- Scoped precheck: 12 files, 8 proof-bearing checked, 0 failures; definitions and algorithms were not applicable.
- Scoped renderer: 14 files (12 items and 2 pages), 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 2/2 sources verified and resolved, 0 newly stamped; no retrieval failed.
- Scoped current-manifest dependency calculation: all 12 Batch 34 labels match; the transitive closure has 0 dependency-level errors. The run-wide graph has 137 errors, none in this closure.
- `batch-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` fails before recomputation on unrelated YAML in `items/lem-qc-clifford-t-determinant-one-approximants.md:28`: unquoted `de Wolf, Quantum Computing: Lecture Notes`. The separate run-status handoff blocker still names an unquoted `John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction` title.

## Owner final focused interface reconciliation

QC09 and QC10 native writers drained; the current syntax/embedding/disjoint-layer/denotation/resource interfaces and total-XOR/reversible-work interfaces were read in the existing cycle 2. Updated tensor-adjoint proofs support the same ordered complete-register action. Current focused contract/cross-edge records replace stale absence wording and exact quote mirrors, with no independent supplier acceptance or readiness decision. QC14 base correctness and auxiliary terminology repairs, depth distinctions, HSP gate/query/output claims and QA17 constituent counts remain consistent. QC23 is the only still-active affected consumer; final stable disposition and every numeric/binding/certification operation remain root-owned.
