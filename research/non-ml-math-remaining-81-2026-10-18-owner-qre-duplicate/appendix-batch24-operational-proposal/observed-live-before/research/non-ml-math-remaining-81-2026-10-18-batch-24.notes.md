# Batch 24 — Quantum Channel Capacities and Entanglement Assistance

## Scope, plan, and conflicts

- Run `non-ml-math-remaining-81-2026-10-18`, role beta, batch 24. Assigned A/B pair: `quantum-channel-capacities-and-entanglement-assistance` / `quantum-channel-capacities-and-entanglement-assistance-examples`; order 2540; category information-theory. Inventory: 23 A items and 2 B examples, below the 100-item page cap. The A page retains the three declared page prerequisites; the B page depends on the A page.

- The task reports “design: none found.” There is no separate pair-specific design file/section for this pair. The controlling IT21 section in `research/plan-information-theory-track.md` and the matching `plan-spec.json` summary govern the scope: regularized coherent/private-information formulas, additive entanglement-assisted formula, and exact degradable/erasure cases; no general single-letter/additivity claim. No mathematical scope conflict with the plan was found; the missing separate-design claim is recorded as a task/plan distinction.

- Dispatch scheduling input hash: `915d16d1d2dca7aabcef49ebb007bfda115172ff8e576a4dfe39b3be03f7c5a4`. Current shared artifact input hash: `5b660437ff2af54b535a540c160e388767c35cc9176ba0f032f335e8f61d5bfe`. Both assign batch level 4, but dispatch says prerequisite batch 23 only while the current artifact records `21, 22, 23`. This mismatch is recorded; the shared scheduling artifact was not edited.

- Recomputed autopilot status is `running`, stage 1-scaffold at 72/81, with no workers in flight. It lists batches 14, 18, 19, 20, 24, 56, 63, and 78 plus one additional missing record; batch 24 remains open because 22 items are escalated. The current blocker is malformed `plan()` JSON at position 6647 (line 129 column 2). No stale invalid-prerequisite blocker appeared in the current status. Run state was read only and left unchanged. `git log` contains no run-specific completion commit.

## Inventory, direct in-batch dependencies, and run-global item levels

`dependency_level` was recomputed over all items in this run using `tools/item-dependency-levels.mjs` semantics, including in-run suppliers in batches 21–23. The run-global levels therefore exceed the local A/B depth. Direct local suppliers are shown below; direct cross-batch suppliers and their exact interfaces are in the cross-batch dependency artifact.

| Level | Item | Direct batch-24 suppliers |
|---:|---|---|
| 0 | `def-it-qudit-erasure-channel` | — |
| 0 | `lem-it-finite-superadditive-sequence-limit` | — |
| 1 | `def-it-quantum-channel-complement-and-coherent-information` | — |
| 1 | `lem-it-flagged-state-entropy-formula` | — |
| 1 | `thm-it-qudit-erasure-channel-is-cptp` | `def-it-qudit-erasure-channel` |
| 2 | `def-it-degradable-channel` | `def-it-quantum-channel-complement-and-coherent-information` |
| 2 | `lem-it-quantum-coherent-information-complement-identity` | `def-it-quantum-channel-complement-and-coherent-information` |
| 3 | `def-it-quantum-channel-private-information` | `def-it-quantum-channel-complement-and-coherent-information` |
| 3 | `lem-it-maximum-coherent-information-attained` | `def-it-quantum-channel-complement-and-coherent-information`, `lem-it-quantum-coherent-information-complement-identity` |
| 3 | `lem-it-qudit-erasure-channel-complement-and-degradability` | `def-it-qudit-erasure-channel`, `def-it-degradable-channel`, `lem-it-quantum-coherent-information-complement-identity`, `thm-it-qudit-erasure-channel-is-cptp` |
| 4 | `lem-it-private-information-is-coherent-information-difference` | `def-it-quantum-channel-private-information`, `def-it-quantum-channel-complement-and-coherent-information`, `lem-it-quantum-coherent-information-complement-identity` |
| 4 | `lem-it-quantum-and-private-information-product-additivity` | `def-it-quantum-channel-complement-and-coherent-information`, `def-it-quantum-channel-private-information`, `lem-it-quantum-coherent-information-complement-identity` |
| 4 | `lem-it-qudit-erasure-channel-coherent-information` | `def-it-qudit-erasure-channel`, `lem-it-qudit-erasure-channel-complement-and-degradability`, `lem-it-quantum-coherent-information-complement-identity`, `lem-it-flagged-state-entropy-formula` |
| 5 | `def-it-quantum-channel-operational-capacities` | `def-it-quantum-channel-complement-and-coherent-information`, `lem-it-private-information-is-coherent-information-difference` |
| 6 | `thm-it-finite-quantum-mutual-information-data-processing` | — |
| 7 | `lem-it-degradable-channel-coherent-information-concavity-and-subadditivity` | `def-it-degradable-channel`, `def-it-quantum-channel-complement-and-coherent-information`, `def-it-quantum-channel-private-information`, `lem-it-private-information-is-coherent-information-difference`, `lem-it-quantum-and-private-information-product-additivity`, `thm-it-finite-quantum-mutual-information-data-processing`, `lem-it-quantum-coherent-information-complement-identity` |
| 7 | `lem-it-quantum-entropy-maximized-at-maximally-mixed-state` | — |
| 8 | `lem-it-entanglement-assisted-information-is-additive` | `def-it-quantum-channel-complement-and-coherent-information`, `lem-it-quantum-coherent-information-complement-identity`, `thm-it-finite-quantum-mutual-information-data-processing`, `lem-it-quantum-entropy-maximized-at-maximally-mixed-state` |
| 8 | `thm-it-quantum-channel-capacity-regularized-coherent-information` | `def-it-quantum-channel-operational-capacities`, `def-it-quantum-channel-complement-and-coherent-information`, `lem-it-quantum-and-private-information-product-additivity`, `lem-it-finite-superadditive-sequence-limit`, `lem-it-quantum-entropy-maximized-at-maximally-mixed-state`, `lem-it-quantum-coherent-information-complement-identity` |
| 8 | `thm-it-quantum-channel-capacity-regularized-private-information` | `def-it-quantum-channel-operational-capacities`, `def-it-quantum-channel-private-information`, `lem-it-private-information-is-coherent-information-difference`, `lem-it-quantum-and-private-information-product-additivity`, `lem-it-finite-superadditive-sequence-limit`, `lem-it-quantum-entropy-maximized-at-maximally-mixed-state` |
| 9 | `thm-it-degradable-channel-single-letter-capacities` | `def-it-degradable-channel`, `def-it-quantum-channel-complement-and-coherent-information`, `def-it-quantum-channel-operational-capacities`, `def-it-quantum-channel-private-information`, `lem-it-degradable-channel-coherent-information-concavity-and-subadditivity`, `lem-it-maximum-coherent-information-attained`, `thm-it-quantum-channel-capacity-regularized-coherent-information`, `thm-it-quantum-channel-capacity-regularized-private-information`, `lem-it-private-information-is-coherent-information-difference` |
| 9 | `thm-it-entanglement-assisted-classical-capacity-additive-formula` | `def-it-quantum-channel-operational-capacities`, `def-it-quantum-channel-complement-and-coherent-information`, `lem-it-entanglement-assisted-information-is-additive`, `lem-it-maximum-coherent-information-attained` |
| 10 | `thm-it-qudit-erasure-channel-exact-capacities` | `def-it-qudit-erasure-channel`, `def-it-quantum-channel-operational-capacities`, `lem-it-qudit-erasure-channel-complement-and-degradability`, `lem-it-qudit-erasure-channel-coherent-information`, `thm-it-qudit-erasure-channel-is-cptp`, `thm-it-finite-quantum-mutual-information-data-processing`, `lem-it-quantum-entropy-maximized-at-maximally-mixed-state`, `thm-it-degradable-channel-single-letter-capacities`, `thm-it-quantum-channel-capacity-regularized-coherent-information`, `thm-it-quantum-channel-capacity-regularized-private-information`, `thm-it-entanglement-assisted-classical-capacity-additive-formula`, `lem-it-private-information-is-coherent-information-difference`, `lem-it-quantum-coherent-information-complement-identity` |
| 10 | `ex-it-noiseless-qubit-entanglement-assisted-capacity` | `thm-it-entanglement-assisted-classical-capacity-additive-formula`, `lem-it-quantum-entropy-maximized-at-maximally-mixed-state`, `def-it-quantum-channel-complement-and-coherent-information` |
| 11 | `ex-it-qudit-erasure-channel-capacity-regimes` | `thm-it-qudit-erasure-channel-exact-capacities`, `def-it-qudit-erasure-channel`, `lem-it-qudit-erasure-channel-complement-and-degradability` |

The direct in-batch supplier order is: complement and erasure definitions; entropy, Fekete, and mutual-information intermediates; operational/private definitions and complement identities; product/additivity and degradation reductions; regularized capacity statements; degradable single-letter reduction; exact erasure theorem; B examples. `def-it-qudit-erasure-channel` uses `justified_by` for its later CPTP well-definedness theorem; the theorem depends on the definition, so this is the sanctioned forward well-definedness edge rather than a cyclic logical dependency.

## Mathematical status and unresolved operational bridges

- The coherent- and private-information sequences are proved superadditive, linearly bounded, and satisfy the Fekete limit identity. Those arguments are complete locally.
- The entanglement-assisted information identity and its additivity are proved locally. The finite-dimensional maximum-attainment lemma is also proved from closed/bounded state-space compactness and entropy continuity.
- The general private-capacity item retains the full formula but does not prove the operational equality: missing is the finite-block Fano/Holevo/secrecy converse and the full wiretap direct code (typical/conditionally typical projectors, operator Chernoff, gentle measurement, random HSW decoding, privacy-leakage estimate, and expurgation). Proposed helper placement: before `thm-it-quantum-channel-capacity-regularized-private-information` on the A page.
- The general quantum-capacity item retains the full formula but does not prove the operational equality: missing are coherent-information achievability for arbitrary finite input states, the coherent lifting/recovery or decoupling construction, the converse from entanglement fidelity with continuity bounds, and the entanglement-generation/transmission equivalence. Proposed helper placement: before `thm-it-quantum-channel-capacity-regularized-coherent-information` on the A page.
- The entanglement-assisted theorem proves the state/purification mutual-information identity and the additivity of the information expression, not the operational capacity equality. Missing are the general finite direct code (type/typical-subspace truncation, finite unitary ensemble, HSW packing) and the shared-entanglement converse. Proposed helper placement: immediately before the EA capacity theorem.
- Degradable and erasure capacity algebra is complete conditional on the regularized operational formulas. These downstream theorem items remain escalated because their capacity suppliers are not ready; the qudit erasure carrier covers $Q=P=\max\{1-2\epsilon,0\}\ln d$ and $C_E=2(1-\epsilon)\ln d$ only. No ordinary unassisted classical capacity formula is claimed.

## Cross-batch supplier readiness

The exact direct consumer requirements, full current supplier Statement/Definition excerpts, source sections, run batches, and readiness labels are serialized in [cross-batch dependencies](non-ml-math-remaining-81-2026-10-18-batch-24.cross-batch-dependencies.json). The draft direct suppliers that prevent a ready handoff are:
- `def-it-classical-quantum-state-and-holevo-information` (batch 21.pages): inspected actual current body; readiness/acceptance remains unresolved.
- `def-it-finite-dimensional-quantum-relative-entropy` (batch 21.pages): inspected actual current body; readiness/acceptance remains unresolved.
- `def-it-finite-quantum-information-measures` (batch 21.pages): inspected actual current body; readiness/acceptance remains unresolved.
- `def-it-information-units-and-logarithm-base` (batch 4.pages): inspected actual current body; readiness/acceptance remains unresolved.
- `def-it-von-neumann-entropy` (batch 21.pages): inspected actual current body; readiness/acceptance remains unresolved.
- `lem-it-finite-quantum-entropy-continuity` (batch 23.pages): inspected actual current body; readiness/acceptance remains unresolved.
- `lem-it-partial-traces-of-a-state-are-states` (batch 21.pages): inspected actual current body; readiness/acceptance remains unresolved.
- `thm-it-finite-strong-subadditivity` (batch 22.pages): inspected actual current body; readiness/acceptance remains unresolved.
- `thm-it-hsw-classical-quantum-channel-capacity` (batch 23.pages): inspected actual current body; readiness/acceptance remains unresolved.
- `thm-it-quantum-entropy-identities` (batch 21.pages): inspected actual current body; readiness/acceptance remains unresolved.
- `thm-it-quantum-relative-entropy-nonnegative-equality` (batch 21.pages): inspected actual current body; readiness/acceptance remains unresolved.
- `thm-it-schumacher-quantum-source-coding` (batch 23.pages): inspected actual current body; readiness/acceptance remains unresolved.

Transitive draft closure also includes the complete HSW/Schumacher coding prerequisites, the batch-22 QRE partial-trace-DPI route under strong subadditivity, and the batch-21 entropy/QRE/finite-information foundations. They are listed in the transitive supplier section with exact current excerpts and affected consumers. Draft status is not acceptance.

## Sources and retrieval

- Four independent full-text sources were inspected: Watrous’s book, Wilde’s full prepublication textbook, Devetak’s paper, and Bennett–Shor–Smolin–Thapliyal’s paper. Source sections, every harvested result, its disposition, and the affected item are in the coverage artifact.
- No retrieval failure occurred during initial full-text inspection. The final `source-fetch-check --stamp` and copied source-coverage receipt record actual fetch bytes, page counts, and hashes; no `source_resolution` failure entry is warranted.
- TikZ Stinespring diagram is explanatory only; the A-page text states the partial-trace maps and the proofs use explicit maps and entropy identities, never the diagram.

## Scoped checks and handoff decisions

- Final scoped checks: `manifest-deps` reports 25 items, zero missing or malformed `deps` arrays; `proof-layout` reports 25 items, 56 steps, zero defects; `precheck` reports 20 proof-bearing items checked, zero failures; `proof-contract` reports 25/25 items with zero errors or warnings; `coverage-checklist` reports two pages and 29 harvested results with zero errors or warnings; `content-policy` reports 25 scoped items with zero errors or warnings; `rendercheck` passes 27 files; focused `depcheck` passes the 25 items and the selected 1,328-item/485-page prerequisite-cycle scope.
- The run-global `item-dependency-levels` command still exits nonzero on other batches, but filtering its 96 diagnostics found zero batch-24 errors. The `batch-dependency-levels check` cannot parse the run inputs: the renderer YAML parser reports a nested mapping at line 22, column 14 of `items/lem-finite-joint-iid-strong-typicality.md` (batch 19), where the unquoted source title contains a colon. This is outside batch 24 and was left untouched.
- `source-fetch-check --stamp` fetched and stamped all seven source occurrences; the subsequent check passes 7/7. These occurrences are four independent full texts: Watrous (2,459,123 bytes, 598 pages), Wilde (8,835,985 bytes, 774 pages), Devetak (306,818 bytes, 22 pages), and Bennett–Shor–Smolin–Thapliyal (420,971 bytes, 42 pages). The stamped `pages` were copied to the source-coverage receipt.
- The Step-1 check confirms all 25 batch records are present and hash-bound: three are `ready` (the self-contained Fekete helper and qudit-erasure definition/CPTP proof) and 22 are `escalated`. The run-wide check remains open at 987/1,495 ready, with 509 unresolved work rows; this batch contributes its 22 escalations. No `--owner` record is used. Independent approval remains separate.
