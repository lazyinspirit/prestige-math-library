# Batch 50 authoring notes — Phase-Estimation Linear-System Algorithms

## Scope, plan, and design

Read the repository's `CLAUDE.md`, `SCHEMA.md`, and `WORKFLOW.md`, the assigned batch task, the current owner-authoring direction, the current plans, QA5 audited exports, operational contracts, and the batch dependency-level input. No separate pair-specific design file was found. The assignment says “design: none found,” and no pair-specific design section governed this pair. The owner direction makes the audited QA5 QA26 route and OP5 operational contract binding authoring context; OP5's optional explicit-table preparation variant is used here.

The `research/plan-spec.json` page entries match the assigned A/B IDs, order, category, companion, and page requirements. Its item arrays were empty at preauthoring. The current audited QA5 inventory provides the ten assigned A items and two B items. Ten local A-page results were added to prove missing prerequisites before use: QLSP target well-definedness; reciprocal-filter definition and geometry; sine-window definition, prefix masses, kernel moment, and table-rotation error; filter perturbation; and capped amplification; plus the direct simulator resource result. This brings the pair to 20 A items and two B items, below the 100-item cap. The owner plan controls page metadata; no conflict with those page fields was found. The inventory additions and current QA5/OP5 route are recorded here.

## Inventory, dependencies, and item levels

The pair-level scheduler input assigns batch 50 dependency level 13 and prerequisite batches 1, 2, 3, 8, 14, 31, 36, and 44. The dispatch scheduling hash is `7b43e1fce7685ad5fb454a5d828635f2e1e60fe21ea66016a68cbfd4f4c3e2af`. The durable `batch-dependency-levels.json` currently carries a different input hash, `3097ae8fe82fb1d0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9`, while still listing batch 50 at level 13. These are distinct inputs and are not conflated. Shared scheduling data was left untouched.

Item levels below were recomputed from the current populated in-run supplier manifests and the exact local dependency graph. They differ from the pair-level schedule because populated supplier levels and the local proof chain are now included. Suppliers precede consumers; no batch-50 dependency cycle was found.

| Item | Page | Level |
|---|---|---:|
| `def-qa-26-hhl-reciprocal-filter` | A | 0 |
| `def-qa-26-hhl-sine-window` | A | 1 |
| `lem-qa-26-hermitian-dilation` | A | 1 |
| `lem-qa-26-hhl-filter-geometry` | A | 1 |
| `def-qa-26-qlsp-task` | A | 2 |
| `lem-qa-26-hhl-filter-perturbation` | A | 2 |
| `lem-qa-26-hhl-sine-window-prefix-masses` | A | 2 |
| `lem-qa-26-qlsp-target-is-well-defined` | A | 3 |
| `lem-qa-26-hhl-prefix-table-synthesis-error` | A | 7 |
| `def-qa-26-hhl-access-model` | A | 12 |
| `lem-qa-26-hhl-sine-window-kernel-moment` | A | 12 |
| `lem-qa-26-phase-to-eigenvalue-unwrapping` | A | 13 |
| `lem-qa-26-hhl-capped-amplification` | A | 19 |
| `alg-qa-26-hhl-phase-estimation` | A | 20 |
| `lem-qa-26-hhl-success-amplitude` | A | 21 |
| `thm-qa-26-hhl-amplified-postselection-cost` | A | 21 |
| `thm-qa-26-hhl-simulator-cost` | A | 21 |
| `lem-qa-26-postselection-normalization-bound` | A | 22 |
| `thm-qa-26-hhl-state-correctness` | A | 23 |
| `thm-qa-26-hhl-query-cost` | A | 24 |
| `cex-qa-26-hhl-classical-vector-output` | B | 3 |
| `ex-qa-26-diagonal-hhl` | B | 22 |

The current manifest contains the exact direct edges and levels. Its current external direct supplier closure has 35 unique suppliers and 186 items in the manifest-derived transitive closure, recorded in `batch-50.cross-batch-dependencies.json`. Current direct supplier bodies are drafting context where marked draft; this handoff does not treat them as acceptance or approval.

## Supplier interfaces and unresolved prerequisite

The required QA31 phase-estimation and QFT, QA36 amplitude-amplification, QA43 matrix-dynamics, QA44 simulation and sparse-oracle, QC1/QC2/QC3 register/state/Dirac, QC8 controlled/inverse-access, QC14 circuit-cost, QA37 pi-bound, and published SVD/adjoint/Moore–Penrose interfaces were checked at their current carriers. The pair uses the actual populated QA36 amplitude-amplification carrier. Its capped-amplification proof relies on the current QA12 invariant-plane and rotation-correctness proofs, not on an unverified planned ID. The signed phase convention and the sine-window kernel are proved locally; QA31's uniform-register tail bound is not used for the sine window.

One substantive prerequisite remains absent: no current QA20 supplier proves a controlled/inverse sparse-Hamiltonian simulator query bound from the QA20 d-sparse reversible row/location/value interface that is sufficient for the requested HHL sparse-query asymptotic. QA20 has the sparse-oracle definition and product-formula results, but no such sparse-simulation theorem. Proposed QA25 qubitization carriers are absent, and their block-encoding access needs a bridge to QA20 row/value access and its location/precision costs. No missing supplier ID was invented or put in `deps`. `thm-qa-26-hhl-query-cost` retains the intended claim and exact required hypotheses in an owner escalation; its `provenance.proof` is `not-supplied`. The proposed placement is QA20's sparse simulation/access section or an owner-selected QA25 construction plus an explicit bridge to QA20.

The separate direct-simulation cost theorem is proved as an actual sum over the controlled signed-time calls in `V` and `V†`. The sine-prefix table uses the binding OP5 explicit-table variant: its `O(T)` table entries, `T−1` rotations, data bits, reversible lookup, gate synthesis, and classical table generation each have separate cost coordinates. No polylogarithmic table-generation or finite-rotation synthesis claim is made. The state-correctness theorem uses the exact B preparation, OP5 simulation and rotation error budgets, the locally proved sine-window second moment `<300`, the relative filter perturbation bound, and capped amplification; it yields relative flagged-vector error `<0.09 ε`, normalized output error `<ε`, and failure probability at most `ρ`.

## Sources and disposition

Two independent treatments were read in full, with a third full course-note treatment. The full-document reading receipts and source history are reused from `research/quantum-algorithms-planning/source-ledgers/qa_r5.json`; the current batch's inspected locators and per-result dispositions are in `batch-50.source-coverage.json` and `batch-50.source-evidence.json`.

| Source | Batch inspection | Disposition |
|---|---|---|
| Harrow–Hassidim–Lloyd, *Quantum algorithm for linear systems of equations* ([full PDF](https://arxiv.org/pdf/0811.3171), 15 pp.) | Appendix A1–A4, PDF pp. 5–12; §§I–V, pp. 1–15 | Included for sine-window, filter, Hermitian dilation, state-output, and HHL proof-route context. OP5 table preparation and its changed precision constants are proved locally. |
| Childs–Kothari–Somma, *Quantum algorithm for systems of linear equations with exponentially improved dependence on precision* ([full PDF](https://arxiv.org/pdf/1511.02306), 31 pp.) | Problem 1 and Theorem 2, PDF pp. 2–5 | The QLSP/oracle framing is included. The sparse query statement is inline as literature comparison and escalation evidence only; it is not accepted as a proof of the missing OP5 simulation interface. |
| Childs, *Lecture Notes on Quantum Algorithms* ([full PDF](https://www.cs.umd.edu/~amchilds/qa/qa.pdf), 191 pp.) | §4.3, printed p. 19; §19.3; Hamiltonian simulation chapters 27 and 29 | Included for QPE and amplitude-amplification conventions and inline for cost-model context; carrier arguments and resource sums are local. |

`source-fetch-check --stamp` verified 3/3 full-text sources, 0 newly stamped, 0 documented drops. No retrieval failed; no recovery retry or source-resolution drop/escalation record was needed. The CKS result's limited disposition does not waive the local proof obligation; that obligation is the named sparse-simulation escalation above.

## Proof and readiness artifacts

The A and B page carriers and batch manifest contain the 20+2 item inventory and current levels. The 22-entry proof contract records every numbered step, exact current supplier-section excerpts for every fact, item-specific boundary dispositions, and finite calculations for the diagonal example and N=2 sign family. The boundary audit found 176 rows, 0 template clusters, and 0 contradicted candidates. These completion records are authoring handoffs only, not independent proof approval.

The Step 1 records contain 21 `ready` items and one `escalated` item (`thm-qa-26-hhl-query-cost`); each of the 22 records was individually checked against its current dependency hash. No `--owner` flag is used. The run-wide `step1-decisions check` cannot build its snapshot because unrelated malformed YAML at `items/lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent.md:24` reads `verification: {, judge: ...`. That file is outside this batch and was left untouched. No published content, shared plan, scheduler sidecar, engine state, or verdict is changed by this batch.

## Scoped checks

| Check | Result |
|---|---|
| `node tools/proof-layout.mjs` on the 22 changed item files | Pass: 22 items, 40 proof steps, 0 defects. |
| `node tools/proof-contract.mjs …batch-50.proof-contracts.json --strict` | Pass: 22/22 contracts, 0 errors, 0 warnings. |
| `node tools/boundary-audit.mjs …batch-50.proof-contracts.json --json` | 176 boundary rows, 0 template clusters, 0 contradicted candidates. |
| Scoped `node tools/depcheck.mjs --items-file /tmp/qa26-items.json --json` | Pass: 22 item checks and both page checks, 0 errors, 0 warnings. |
| `node tools/rendercheck.mjs` on the 22 items and 2 page carriers | Pass: 24 files; real KaTeX spans and renderer YAML parse. |
| `node tools/source-fetch-check.mjs --coverage …batch-50.source-coverage.json --stamp` | Pass: 3/3 full-text sources, 0 new stamps, 0 documented drops. |
| `node tools/item-dependency-levels.mjs check --run …` | Run-wide exit 1 for one other empty page inventory and six QA34 level mismatches. No batch-50 item mismatch was reported; batch-50 labels are listed above. |
| `node tools/batch-dependency-levels.mjs check --run …` | Exit 1: durable shared dependency-level input is stale. Shared scheduling data was left for the owner to refresh. |
| Scoped Step 1 record hash check | Pass: all 22 batch-50 records are current (21 ready, 1 escalated). The run-wide Step 1 check is blocked by the unrelated malformed YAML above. |


## Owner sparse-access and clean-workspace repair

After root confirmed the actual native writer had drained, exact final native item/page/batch carriers and original Step1 records were preserved under `research/quantum-computing-algorithms-60-2026-10-15-owner-dequantization/before-qa25-qa26-integration/`. The original 17 QA25 escalation flags and the HHL sparse-query flag remain historical author evidence, not current proof premises or new acceptance. The focused repair is recorded in `research/quantum-computing-algorithms-60-2026-10-15-owner-dequantization/qa25-qa26-repair.json`.

Two complete helpers supply the sorted-XOR sparse-access isometries (logarithmic location calls, listed-zero support-union variant, one-sided value amplitude, exact clean slot erasure) and the unitary clean-subspace adjoint/control/reference hybrid. The original supplied-permutation sparse mode and full-space direct-simulation mode are preserved. QA26 now has the explicit clean-workspace mode and a full sparse-query substitution proof. Its state-correctness hybrid applies local promises only on the ideal all-clean trajectory and retains actual simulator work coherently. Numeric labels, scheduling, raw hashes and readiness/recertification remain root duties. No tests, gates, hashes, readiness decisions, stamps or commits were performed by this repair.
