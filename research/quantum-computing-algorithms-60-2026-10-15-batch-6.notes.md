# Batch 6 authoring notes — Trace Distance, Fidelity, and Information Limits

Run: `quantum-computing-algorithms-60-2026-10-15`  
Batch: `6` · declared batch level `5` · prerequisite batches `1, 2, 3, 4, 5`

## Authority and plan reconciliation

- The binding `research/quantum-computing-algorithms-60-2026-10-15-owner-authoring-direction.md` releases drafting for all 60 pairs against actual supplier bodies. It overrides the older hold in the QC track plan's source/proof status text. All batch 6 content remains draft; no proof acceptance or publication is claimed.
- The task, `research/plan-spec.json`, and the batch 6 A/B page identities, category, order, titles, companions, and page-level `requires` arrays agree. `plan-spec.json` still has `items: []`; the current audited QC proposal has 32 A items and one B example. Three local A-page results are included: `lem-qc-fidelity-root-formula-equivalence`, `lem-qc-symmetric-subspace-average-is-projector`, and the new `lem-qc-trace-norm-tensor-product`. The final inventory is 35 A items and one B example, below the 100-item cap.
- The design section at `research/plan-quantum-computing-track.md` §QC06 (listed near line 80) is followed: root fidelity, halved state trace distance, unhalved diamond norm, discrimination, contractivity/composition/tensor estimates, choice-conditional Haar cloning, and the scoped no-cloning/no-broadcasting claims are all retained. Preskill's squared-fidelity convention is explicitly translated; choice-dependent and choice-free claims remain separate.
- The dispatch names scheduling input `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`; the current read-only `batch-dependency-levels.json` instead reports `input_sha256: 6beb634293f46e0546f97d6d8af0c9859ee65f4a443cd36b80487b88dc3897c2`. The source coverage remains bound to the dispatch hash. The shared scheduling artifact was not edited.

## Inventory and item dependency levels

The local item dependency graph is acyclic. All 36 batch 6 manifest entries match their item frontmatter dependencies, `justified_by`, proof strategy, and recomputed `dependency_level` values. Page A and its manifest list the same 35 IDs; page B lists the single orthogonal-qubit example.

| Level | Items |
|---:|---|
| 0 | `thm-qc-unitary-group-compact` |
| 1 | `def-qc-diamond-norm`, `def-qc-fidelity`, `def-qc-trace-distance`, `lem-qc-faithful-state-dominates-positive-operator` |
| 2 | `def-qc-symmetric-subspace-projector`, `lem-qc-fidelity-root-formula-equivalence` |
| 3 | `lem-qc-trace-norm-tensor-product`, `lem-qc-pure-state-trace-distance`, `lem-qc-symmetric-subspace-average-is-projector`, `thm-qc-helstrom-binary-discrimination`, `thm-qc-trace-distance-range-and-equality` |
| 4 | `lem-qc-positive-marginals-imply-joint-support`, `thm-qc-diamond-norm-ancilla-dimension-bound`, `lem-qc-symmetric-power-irreducible`, `thm-qc-measurement-variation-at-most-trace-distance`, `thm-qc-fidelity-purification-characterization`, `ex-qc-orthogonal-state-trace-distance` |
| 5 | `thm-qc-symmetric-subspace-dimension-and-haar-moment`, `lem-qc-fidelity-classical-measurement-minimum`, `thm-qc-fidelity-range-equality-and-products` |
| 6 | `def-qc-broadcasting-family`, `lem-qc-optimal-cloner-attains-bound`, `lem-qc-optimal-cloning-worst-case-upper-bound` |
| 7 | `thm-qc-trace-distance-channel-contractivity`, `thm-qc-channel-diamond-norm-one`, `thm-qc-optimal-universal-pure-state-cloning-bound` |
| 8 | `thm-qc-channel-composition-hybrid-bound`, `thm-qc-fidelity-data-processing-and-equality`, `thm-qc-fuchs-van-de-graaf`, `thm-qc-pure-state-no-cloning`, `thm-qc-channel-tensor-error-bound` |
| 9 | `thm-qc-exact-mixed-state-cloning-fidelity-criterion`, `thm-qc-full-rank-pair-no-broadcasting` |
| 10 | `thm-qc-singular-pair-no-broadcasting` |
| 11 | `thm-qc-state-family-no-broadcasting-iff-commuting` |

The run-wide dependency check reports 84 errors outside batch 6: 54 empty scaffold inventories and 30 dependency-level mismatches in other batches. It reports no batch 6 item error. A read-only scoped comparison found no local cycles or level mismatches. `manifest-deps` reports all 36 batch 6 items with explicit dependency arrays and zero errors.

## Supplier review and unresolved page prerequisite

- The 118 declared item edges from batch 6 into batches 1–5 are all recorded `verified` in `research/quantum-computing-algorithms-60-2026-10-15-batch-6.cross-batch-dependencies.json`. The records include current supplier excerpts, consumer facts/uses, home batches, and supplier Step 1 record state. `verified` means the interface was checked against the current body; it does not certify a supplier proof or infer acceptance. There are 23 distinct cross-batch item suppliers.
- The required page `channels-kraus-choi-and-stinespring-representations` is absent from all library categories. This is the single open page edge. The direct QC05 item carriers for channel, Kraus, trace-preserving normalization, CP, finite Stinespring, and partial-trace channel use are present and were checked, so authoring could continue. The missing page still blocks course-page reconciliation and is the exact reason the channel-dependent items below are escalated.
- Other than that page, all 13 A-page `requires` pages exist. The A-page describes the missing edge and the cross-batch input records it as `open`.
- A full `frontier-dependency-ledger.collect` could not parse a separate malformed YAML carrier in another batch: `items/lem-qc-clifford-t-determinant-one-approximants.md:28`, where the unquoted `title: de Wolf, Quantum Computing: Lecture Notes` is parsed as a nested mapping. This file is outside batch 6 and was not edited. A scoped comparison of the batch 6 input itself confirms 118/118 item edges, with no missing or extra reviews.

## Mathematical repairs and proof evidence

- `thm-qc-unitary-group-compact` now declares the matrix/group/topology/isometry prerequisites and proves closedness, boundedness, Hausdorffness, group closure, and continuity in finite coordinates.
- The symmetric permutation action now consistently uses the QC02 output-order convention: with standard right-to-left permutation composition, `U_pi U_sigma = U_(sigma composed with pi)`. The permutation average proof uses this convention explicitly.
- `lem-qc-trace-norm-tensor-product` proves the trace-norm product formula from SVD, including zero maps and zero-dimensional factors. Fidelity tensor multiplicativity and the diamond tensor bound depend on this local lemma.
- Trace-distance measurement bounds now justify positivity of `tr(AB)` for nonnegative operators, name Cauchy–Schwarz explicitly, and have the exact trace-cyclicity dependencies. Channel contractivity is proved by pulling a finite output POVM back through the Kraus representation.
- The ancilla-dimension bound spells out why separate left and right isometric embeddings preserve nonzero singular values. Channel composition, channel norm, and channel tensor proofs now cite the finite operator-matrix-unit basis needed to identify amplifications on the full operator space.
- The singular no-broadcasting proof establishes support restriction, complete positivity and trace preservation of the support-restricted channel, then uses faithful regularization and the full-rank pair result. The arbitrary-family theorem proves the common orthonormal eigenbasis reduction, including the empty family.
- The cloner-attainment proof supplies Kraus operators for both CP summands and checks the trace-preserving identity. The fidelity measurement-minimum proof proves square-root continuity in coordinates and the singular-state attainment argument.
- Four proof contracts retain the explicit choice-dependent normalized-Haar branch: symmetric-subspace moments, the cloning upper bound, the attaining cloner, and the optimal cloning theorem. No choice-free proof is represented as using that branch.

## Sources and contracts

`research/quantum-computing-algorithms-60-2026-10-15-batch-6.coverage.json` records source history, full-text reading scope, locators, cached documents, and 40 harvested-result dispositions. `research/quantum-computing-algorithms-60-2026-10-15-batch-6.source-coverage.json` remains bound to dispatch input `5853…`; `source-fetch-check --stamp` verifies 4/4 sources with zero new stamps and zero documented drops. No retrieval failure, recovery retry, or source-resolution entry occurred.

- Watrous, *The Theory of Quantum Information*: complete book reading is recorded in `source-ledgers/qc_r1.json`; relevant ranges are §§3.1.1–3.1.2, 3.2.1–3.2.3, 3.3.2–3.3.4, and 7.1.1–7.2, plus §1.1.3 for the local trace-norm tensor lemma. The root library's linear-first pairing is preserved.
- Preskill, *Quantum Computation*, Chapter 2: the complete 53-page available chapter is recorded as read in `source-ledgers/qc_r2.json`; §§2.6.1–2.6.2 support the independent fidelity and trace-distance treatment. Preskill's quantity is squared fidelity relative to this library's root convention.
- Barnum–Caves–Fuchs–Jozsa–Schumacher, “Noncommuting Mixed States Cannot Be Broadcast”: all 11 pages were read. The displayed necessity proof assumes faithful/full-rank states; the singular extension here is proved locally from support and regularization lemmas. The paper is not claimed as a second complete proof of the general singular theorem.
- de Wolf, *Quantum Computing: Lecture Notes*: the full source reading is recorded in the source ledger, but the cited Exercise 12 and Appendix C hint support pure-state no-cloning context only. They do not supply the trace-distance, Helstrom, or no-broadcasting arguments.

The proof-contract file covers 31 proof-bearing items with 254 exact supplier citations, 94 numbered-step derivations, all 248 standard boundary dispositions, six finite checks, and explicit axiom records. The five definitions do not require proof contracts. `proof-contract --strict` passes 31/31 with zero errors or warnings.

## Step 1 readiness and blockers

There are 36 current non-owner readiness records: 21 `ready` and 15 `escalated`, all `owner: false`. The 15 escalations are the channel-dependent items whose A page still requires the missing `channels-kraus-choi-and-stinespring-representations` page: `def-qc-broadcasting-family`, `thm-qc-trace-distance-channel-contractivity`, `lem-qc-optimal-cloner-attains-bound`, `lem-qc-optimal-cloning-worst-case-upper-bound`, `thm-qc-channel-diamond-norm-one`, `thm-qc-channel-composition-hybrid-bound`, `thm-qc-fidelity-data-processing-and-equality`, `thm-qc-fuchs-van-de-graaf`, `thm-qc-optimal-universal-pure-state-cloning-bound`, `thm-qc-pure-state-no-cloning`, `thm-qc-channel-tensor-error-bound`, `thm-qc-exact-mixed-state-cloning-fidelity-criterion`, `thm-qc-full-rank-pair-no-broadcasting`, `thm-qc-singular-pair-no-broadcasting`, and `thm-qc-state-family-no-broadcasting-iff-commuting`.

`step1-decisions check` cannot complete its run-wide read because it encounters another malformed sibling YAML at `items/thm-qa-19-measurement-distribution.md:29`, where the unquoted `locator: Chapter 17 §17.1...` is parsed as a nested mapping. All 36 batch 6 JSON records are present, but the CLI's independent hash/check pass is blocked until that external carrier is repaired. One earlier ready record, `thm-qc-unitary-group-compact`, has awkward self-correcting wording in its reason (“Proof contract is not applicable? It is a theorem…”); its decision, dependency list, hash, and contract path are recorded. It was not rewritten because the tool protects unchanged ready records without an owner override, and no `--owner` override was used.

Recomputed `autopilot status` remains `running`, at `1-scaffold` with 17/60 coverage and no worker in flight. It reports the existing `Invalid pair undefined`, invalid construction identity `def-qc-effective-unitary-matrix-input` in batch 12, malformed Preskill Chapter 7 YAML handoff, and owner repair/recertification hold pointing to `research/quantum-computing-algorithms-60-2026-10-15-step1-blockers.json`. No `.autopilot` state, shared plan, sibling item, or owner verdict was edited.

## Final scoped checks

- `proof-layout` — 36 assigned items, 94 steps, 0 defects.
- `rendercheck` — 38 assigned item/page files, YAML and KaTeX pass.
- `depcheck --items-file` — selected batch 6 items and prerequisite cycle checks pass.
- `manifest-deps` — 36 items, 0 missing arrays, 0 errors.
- `proof-contract --strict` — 31/31, 0 errors, 0 warnings.
- `source-fetch-check --stamp` — 4/4 source fetches verified; 0 new stamps; 0 drops.
- Run-wide `item-dependency-levels check` — 84 sibling errors (54 empty inventories and 30 mismatched item levels); 0 batch 6 errors.

These authoring and readiness records are not independent mathematical approval.
