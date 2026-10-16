# Batch 17 authoring handoff — Bell States, Teleportation, and Dense Coding

## Scope and plan comparison

The assigned A/B rows match `research/plan-spec.json` exactly: orders 2198–2199, category `quantum-computing`, companion IDs, and the five A-page prerequisites all agree. There is no page-metadata conflict to record. The complete QC track design preserves the finite-dimensional mathematical scope, the root inner-product/Dirac convention, ordered register and wire conventions, and the warning that physical postulates are not proof premises.

The assigned planning export contains 11 proposed A items and one B example. Its proposed dependency levels are:

| Item | Proposed level |
|---|---:|
| `def-qc-bell-basis` | 5 |
| `thm-qc-bell-transform-inverse` | 7 |
| `alg-qc-teleportation` | 7 |
| `thm-qc-teleportation-bell-expansion` | 8 |
| `thm-qc-teleportation-equiprobable-outcomes` | 9 |
| `thm-qc-teleportation-correction-identity` | 9 |
| `thm-qc-teleportation-reference-stability` | 10 |
| `thm-qc-teleportation-correctness-and-resource-count` | 11 |
| `alg-qc-dense-coding` | 8 |
| `thm-qc-dense-coding-correctness-and-resource-count` | 9 |
| `def-qc-teleportation-protocol-resource-count` | 8 |
| `ex-qc-teleportation-branch-correction` | 12 |

The current batch dependency input records batch 17 at level 6 with prerequisites 2, 4, 7, 8, and 9. These item levels are a recomputation over the current proposed item graph and its declared supplier levels; they do not certify any absent supplier body. The existing `batch-17.pages.json` remains a planning skeleton with empty item arrays.

## Release hold and evidence

No items or page carriers were authored. The controlling QC design's “Source and proof status” section says the actual root prerequisite closure still reaches ten inherited remarks and prohibits dependent authoring until the owner applies the repairs and the actual checker passes. The named owner direction repeats that hold. The actual supplier reconciliation record is still marked pending and requires reconciliation of the current suppliers with the 71 reviewed published-repair proposals, integration of the repairs, and a passing actual 896-root closure.

The current planning receipts do not clear that hold. `mechanical-check.json` is a structural proposal check. `planned-repair-check.json` explicitly records `actual_library_closure: hold`; its pass is conditional on virtual repairs. The combined proposal check likewise says live integration and the actual closure check remain outstanding. The Oct. 16 owner publication receipt records status changes only and says no mathematical review or audit stamps were added; it does not provide the missing actual-closure evidence. The later task authorization to proceed and this still-open release condition require owner reconciliation before dependent authoring.

The recomputed native status for `quantum-computing-algorithms-60-2026-10-15` showed `1-scaffold` at 0/60 results, all batch artifacts missing, and no workers in flight. This confirms batch 17 has not already completed in the live run; no RESUME-file claim was used.

## Exact supplier interfaces still absent

Each of these eight direct logical suppliers was checked in `items/` and has no current carrier. The claims below need the stated interfaces verified against actual supplier bodies before any readiness decision:

| Supplier | Home | Required interface for batch 17 |
|---|---|---|
| `def-qc-tensor-register-and-permutation` | `registers-tensor-products-and-partial-trace` | Finite ordered tensor registers and computational basis; agreed wire order and permutation action; extension by an identity to any finite reference register. |
| `def-qc-one-qubit-gate-alphabet-and-rotations` | `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` | Exact ket actions and unitary/adjoint conventions for $H$, $X$, and $Z$; fix operator-composition order. |
| `def-qc-cnot-and-control-target-order` | `controlled-gates-phase-and-entanglement` | The stated control/target order and basis action $|x,y\rangle\mapsto|x,x\oplus y\rangle$; self-inverse/unitary facts used by encode/decode. |
| `def-qc-classical-control-and-measurement-circuit` | `circuit-syntax-denotational-semantics-and-measurement` | Finite measurement outcomes, two-bit classical records, and branch-dependent correction/decoding semantics. |
| `def-qc-circuit-denotational-semantics` | `circuit-syntax-denotational-semantics-and-measurement` | Ordered wire interpretation and chronological gate composition for the teleportation and dense-coding circuits. |
| `def-qc-pauli-matrices` | `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` | Exact $X,Z$ matrices, bit-power convention, and the sign/order identity needed for $Z^aX^bX^bZ^a=I$. |
| `def-qc-projective-measurement` | `measurements-povms-and-instruments` | Projector outcome probabilities and conditional branches, including zero-probability handling; distinguish ordered Bell-label and computational-basis measurements. |
| `def-qc-elementary-circuit-resources` | `circuit-syntax-denotational-semantics-and-measurement` | Explicit counting units for shared Bell-pair use, classical bits, local gates, measurements, and transmitted qubits; no optimality conclusion. |

These interfaces affect the Bell basis/transform, teleportation procedure and branch law, Pauli correction, reference-stability and resource claims, dense-coding encoder/decoder and orthogonality proof, and the B-page branch calculation. In particular, the correction order and CNOT wire order must not be inferred from protocol names.

## Authoring and readiness disposition

The design/plan metadata comparison is complete; no content source retrieval was attempted because the owner hold blocks construction. No source failure or drop is recorded. Proof contracts, page manifests, coverage, source stamps, readiness records, and `step1-decisions` were not generated; no item is marked ready. No scoped proof-layout or dependency-level check was run on authored items because none were authored. The owner must clear the actual source-repair and proposal-closure hold, or explicitly reconcile the later start instruction with the still-controlling plan/design evidence, before this batch can continue.

## Owner-requested continuation — 2026-10-16

This section records the authorized continuation under the current owner release, `research/quantum-computing-algorithms-60-2026-10-15-owner/authoring-release.json`. It supersedes the preceding first-pass hold and “no items authored” statements for this continuation only. The historical result and earlier report remain unchanged. The release authorizes draft authoring; it does not certify mathematics or waive any review or run gate.

### Completed pair and plan reconciliation

The assigned inventory is complete: eleven A-page items and one B-page worked example. The draft carriers are `items/def-qc-bell-basis.md`, `items/thm-qc-bell-transform-inverse.md`, `items/alg-qc-teleportation.md`, `items/thm-qc-teleportation-bell-expansion.md`, `items/alg-qc-dense-coding.md`, `items/def-qc-teleportation-protocol-resource-count.md`, `items/thm-qc-teleportation-equiprobable-outcomes.md`, `items/thm-qc-teleportation-correction-identity.md`, `items/thm-qc-dense-coding-correctness-and-resource-count.md`, `items/thm-qc-teleportation-reference-stability.md`, `items/thm-qc-teleportation-correctness-and-resource-count.md`, and `items/ex-qc-teleportation-branch-correction.md`. The A and B page carriers retain the assigned 2198–2199 plan-spec orders, category, companion relationship, and five A-page prerequisites. No page-metadata conflict was found.

The controlling plan uses a for the phase bit and b for the flip bit. Cleve’s dense-coding discussion labels the flip/shift bit first and the phase bit second; the authored procedures exchange those labels explicitly. Direct four-case calculations fix the exact Bell-vector signs, and the proof records the (-1)^(ab) global phase caused by reversing anticommuting Pauli factors. No claim is inferred from source authority in place of a proof. No new axiom is used; the finite calculations and arbitrary-reference argument are choice-free.

### Current supplier bodies and interface reconciliation

The previously absent batch 9 carriers are now present in `research/quantum-computing-algorithms-60-2026-10-15-batch-9.pages.json`: `def-qc-classical-control-and-measurement-circuit`, `def-qc-circuit-denotational-semantics`, and `def-qc-elementary-circuit-resources`. Their actual statements and proofs were inspected. The control definition distinguishes observed outcomes from hidden Kraus indices, defines the conditional branch only for positive probability, and makes coherent block-gate availability an explicit operation-model assumption. The semantics definition gives chronological composition U_C = U_(L_d)...U_(L_1), and its wire-embedding and disjoint-layer prerequisites are present. No source excerpt or acceptance is inferred from the planned interface.

The actual `def-qc-projective-measurement` body defines outcome weights but does not supply a conditional post-measurement state. The teleportation reference-stability item therefore depends explicitly on `thm-qc-projective-conditional-state`, whose actual statement gives P_a rho P_a / p_a when p_a > 0; the four teleportation weights are proved to be 1/4 before this result is applied.

`def-qc-elementary-circuit-resources` supplies gate-occurrence size, explicit-layer depth, width, access costs, and ancilla conventions. It does not define Bell-pair uses, classical communication bits, measurement-record bits, or transmitted-qubit counts. The A-page teleportation resource definition specifies those protocol coordinates locally and cites the supplier only for gate-occurrence/size counting. The dense-coding theorem’s unused direct dependency on that supplier was removed. This resolves the narrower actual interface without weakening either protocol claim. The cross-batch record preserves the exact source excerpts and local reconciliation.

The current batch-17 cross-batch input records 46 direct cross-batch item edges, five required prerequisite batches (2, 4, 7, 8, 9), zero missing supplier IDs, and zero unresolved mathematical-interface checks. Source-body hashes in that record match the current supplier files. The unchanged scheduling input still assigns batch 17 level 6.

### Current item levels and owner-side metadata blockers

Item levels were recalculated recursively from the current in-run manifest graph, with out-of-run dependencies at level zero. The batch-17 manifest and all twelve carrier frontmatters agree, and the assigned subgraph is acyclic:

| Item | Current level |
|---|---:|
| `def-qc-bell-basis` | 6 |
| `thm-qc-bell-transform-inverse` | 8 |
| `alg-qc-teleportation` | 9 |
| `thm-qc-teleportation-bell-expansion` | 10 |
| `alg-qc-dense-coding` | 9 |
| `def-qc-teleportation-protocol-resource-count` | 10 |
| `thm-qc-teleportation-equiprobable-outcomes` | 11 |
| `thm-qc-teleportation-correction-identity` | 11 |
| `thm-qc-dense-coding-correctness-and-resource-count` | 10 |
| `thm-qc-teleportation-reference-stability` | 12 |
| `thm-qc-teleportation-correctness-and-resource-count` | 13 |
| `ex-qc-teleportation-branch-correction` | 14 |

The full current run-level item checker still fails outside this pair: 56 page inventories are empty and 129 manifested items have stale stored levels; it reports zero cycles. The assigned twelve labels have no checker errors. Relevant upstream level discrepancies are `thm-qc-instrument-induces-povm` (stored 6, current graph 7), `def-qc-classical-control-and-measurement-circuit` (stored 7, current graph 8), and `def-qc-elementary-circuit-resources` (stored 7, current graph 8). They are outside this pair’s edit scope and are preserved as owner reconciliation items; our levels use the recursively recomputed current graph.

The batch-level scheduling checker could not parse the current run snapshot because an unrelated quantum error-correction draft has an unquoted colon in a YAML source title: `items/lem-qc-knill-laflamme-orthogonal-error-basis.md:17` (`title: John Preskill, Quantum Information, Chapter 7: Quantum Error Correction ...`). It reports “Nested mappings are not allowed in compact mappings.” The assigned pair does not edit that item or the shared batch schedule. The existing batch-level input and batch-17 level declaration are preserved.

### Sources and retrieval record

The A page and B page each have two independent full-text treatments: John Watrous, *The Theory of Quantum Information*, Chapter 6 §6.3.1; and Richard Cleve, full QIC 710 course notes, §§7.2 and 10.2–10.3. The coverage file records URLs, exact locators, per-item support and dispositions, and successful full-text fetch stamps. `source-fetch-check --stamp` verified all four page/source occurrences, with zero new stamps and zero drops. Both retained full texts were inspected at the relevant locators; they corroborate the procedures but do not substitute for local proofs.

A Preskill Chapter 4 candidate mentioned in earlier authoring context is not an active source and is not classified as dropped. The selected Watrous and Cleve texts supply the required source coverage; no unsupported retry history is claimed. No failed retrieval remains for an active source, so no `source_resolution` drop or owner-escalation record was needed.

### Scoped checks and readiness

Final scoped checks after the last item edits reported:

- `precheck`: 8 proof-bearing items checked, 0 failures.
- Strict proof contracts: all 12 items checked, 0 errors or warnings; obsolete missing-carrier records were removed after body inspection.
- `proof-layout`: 12 items, 33 steps, 0 defects.
- `rendercheck`: 14 item/page files, 0 errors or warnings.
- `content-policy`: 12 items, 0 errors or warnings.
- `depcheck`: 12 focused items and their 1,060-item dependency closure, 0 errors and 0 warnings.
- `manifest-deps`: 12 items, no missing dependency arrays or errors; manifest and carrier dependency lists agree.
- Scoped graph recomputation: all 12 stored levels match the current graph; no cycles or unresolved direct suppliers.
- Source fetch stamps: 4/4 verified; cross-batch manifest and coverage hashes match.

These scoped passes do not clear the run-level stale-level/empty-inventory blockers or the unrelated YAML parse error above. Content remains draft and awaits independent review.

### Step 1 record status and transitive proof-audit gap

`node tools/step1-decisions.mjs record` created `ready` records for `def-qc-bell-basis` and `thm-qc-bell-transform-inverse`. A later transitive-closure audit counted 1,512 and 1,516 prerequisite item IDs for those records. I had checked the direct suppliers and selected underlying results, but had not inspected every proof in those full closures. The two newly written `ready` records therefore overstate the work completed and must not be treated as mathematical approval; they require owner correction. I did not use `--owner` or edit the records manually.

The record command for `alg-qc-teleportation` failed before writing its record while hashing transitive inputs, with the YAML parser error at `items/alg-qa-19-complete-graph-spatial-search.md:29`: unquoted source title `Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1`. The command loop stopped there. No Step 1 record exists for `alg-qc-teleportation` or the nine later items in the inventory. This QA batch item is outside the assigned pair and was not edited. I did not bypass the canonical recorder or claim those items ready or escalated without a valid record.

The 12 item carriers, local arguments, source coverage, contracts, and scoped checks are complete, but the required full transitive supplier-proof audit and 10 remaining decision records are unresolved. The two existing ready records also need owner correction. The exact tool blocker and affected item list are retained here so the owner can repair the unrelated YAML input, reassess the transitive proof scope, and issue valid readiness decisions without relying on these premature records.
