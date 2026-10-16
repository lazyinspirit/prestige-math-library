# Batch 49 — Step 1 handoff

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `qubitization-and-optimal-hamiltonian-simulation`  
Role: beta  
Items: 16 A-page items and 3 B-page examples; all remain draft.

## Plan and scope

The task bundle had no pair-specific design section. As directed, the audited QA25 section in `research/quantum-algorithms-planning/sections/qa_r4.md` and its binding OP4 in `research/quantum-algorithms-planning/operational-contracts.md` governed the route. The owner authoring direction identifies the current audited plan and operational contracts as controlling. The QA25 page metadata in `research/plan-spec.json` matches order 2262, title, companion, category, and all 14 required pages; its item inventory was empty before this authoring pass. No substantive plan/design conflict was found.

The work preserves the plan’s complex even/odd simulation route, separately charged access operations, clean-input isometry error convention, and warning that a matrix description alone gives no circuit. Sparse access is stated with supplied reversible in-place location permutations and their inverses; no constant-cost conversion from XOR location access is inferred.

## Inventory and dependency levels

The page manifest is ordered by computed item level. Levels use in-run `deps`; out-of-run suppliers do not increase an item level.

| Page | Level | Item |
|---|---:|---|
| A | 0 | `lem-qa-25-isometry-error-implies-trace-distance` |
| A | 1 | `lem-qa-25-parity-path-transfer` |
| A | 12 | `def-qa-25-qubitization-access-model` |
| A | 13 | `def-qa-25-hamiltonian-simulation-polynomial` |
| A | 13 | `lem-qa-25-hermitian-block-encoding-signal-subspaces` |
| A | 14 | `thm-qa-25-qubitization-signal-sequence` |
| A | 15 | `thm-qa-25-bounded-error-parity-query-lower-bound` |
| A | 15 | `alg-qa-25-qubitized-hamiltonian-simulation` |
| A | 15 | `alg-qa-25-sparse-hamiltonian-block-encoding` |
| A | 16 | `thm-qa-25-sparse-no-fast-forwarding-lower-bound` |
| A | 16 | `alg-qa-25-small-time-aware-simulator` |
| A | 16 | `thm-qa-25-sparse-hamiltonian-block-encoding-correctness` |
| A | 17 | `lem-qa-25-jacobi-anger-truncation` |
| A | 18 | `thm-qa-25-qubitized-simulation-correctness` |
| A | 19 | `thm-qa-25-small-time-aware-simulator-correctness` |
| A | 20 | `thm-qa-25-qubitized-simulation-resource-bound` |
| B | 14 | `ex-qa-25-two-dimensional-block-encoding` |
| B | 17 | `ex-qa-25-parity-no-fast-forwarding` |
| B | 18 | `ex-qa-25-chebyshev-truncation` |

The batch dependency closure records level 13, matching recomputation, required batches `1, 8, 10, 14, 24, 43, 44, 46, 47, 48`, 84 transitive in-run item suppliers, and the 14 required pages. The batch cross-reference input has 50 item edges and 14 page edges. Its 30 distinct direct item supplier records/reasons match the current Step 1 records; all stored supplier excerpts were found in the current supplier bodies. The 24 consumer-side hypothesis excerpts with old TeX delimiters were normalized to the renderer’s supported math syntax. The cross-batch rows remain unverified evidence, not acceptance.

Three upstream QA24 carrier/manifest level disagreements are retained in `batch-49.dependency-closure.json`: `lem-qa-24-qsvt-robustness-amplitude-bound` (14 vs 12), `thm-qa-24-qsvt-error-and-resource-bound` (17 vs 13), and `thm-qa-24-qsvt-singular-space-action` (13 vs 11). The local QA25 levels are not affected because their local dependency maxima dominate.

## Mathematical route and repairs

- The Hermitian block-encoding access definition distinguishes the compressed matrix from the unitary dilation. The signal-subspace proof treats non-endpoint eigenvalues and the collapsed endpoint lines separately, with the root/Dirac convention stated where matrix entries are computed.
- The polynomial-target definition now defines the scalar target, Chebyshev recurrence, and absolutely convergent Bessel coefficient series only. It no longer cites the later Jacobi–Anger lemma as a supplier or asserts that lemma’s expansion as part of its own definition; the local lemma proves the expansion, tail, coefficient-rounding bound, and OP4 degree estimate.
- The qubitized simulator uses the finite even/odd truncations, normalization (B=1+2\rho), the phase-corrected OAA block identity, a leakage bound, and the clean-input isometry metric. The wrapper returns exact identity when \(\alpha|t|\le\epsilon\), so the short-time branch has error at most \(\epsilon\).
- The local isometry lemma proves tensor stability, pure-state trace distance, trace-norm contraction under partial trace, and the mixed-state case from finite SVD/spectral decomposition. The parity-path lemma defines its finite bitstring basis locally, proves the prefix-parity conjugation and exact transfer, and uses zero vectors for the omitted endpoint Dicke terms.
- The sparse block encoding returns the zero matrix with an (X_{\rm flag}\) block when (H=0). For nonzero (H), the correctness proof computes the all-zero compression entry by entry and counts its value/location operations. The sparse no-fast-forwarding proof rounds the path weights, bounds the operator perturbation by (2\eta), applies Duhamel’s estimate, and reduces a (1/3)-error simulator to a bounded-error parity algorithm with at most two parity-bit queries per sparse-oracle call.
- The B page checks the two-dimensional signal matrix, the degree-two Chebyshev truncation, and the (n=2) parity path. Each example has a complete local calculation.
- Inline/display math in assigned drafts and pages was converted to `$…$` / `$$…$$`; display blocks were flattened to the renderer’s required one-line source form. Proof phases were normalized to dependency order. The follow-up focused dependency check found and removed one circular link from the polynomial-target definition to the Jacobi–Anger lemma.

## Sources and coverage

The four planned independent treatments and the added SVD reference are recorded with locators, item dispositions, fetch stamps, and reused source history in `batch-49.coverage.json`. The source set includes two full lecture-note treatments and full papers; Axler supports the singular-value decomposition fact used in the local trace-distance proof. The partial-trace contraction and trace-distance argument remain proved locally.

| Source | Locator recorded in coverage | Fetch stamp |
|---|---|---|
| Childs, *Lecture Notes on Quantum Algorithms* | Ch. 28 §28.1; Ch. 29 §§29.1–29.4 | 191 pp.; `6e3a32f0aede35e9` |
| de Wolf, *Quantum Computing: Lecture Notes* | Ch. 9 §§9.4–9.5 | 239 pp.; `b797f4165555d281` |
| Gilyén–Su–Low–Wiebe, *Quantum singular value transformation and beyond* | Definitions 3/43, Lemma 48, Theorem 56, Lemma 57, Theorem 58, Lemma 59, Corollary 60 | 67 pp.; `0326a3de56b10c98` |
| Low–Chuang, *Hamiltonian Simulation by Qubitization* | standard qubiterate, Theorem 2, Lemmas 8/10 | 23 pp.; `0db700c73663f803` |
| Axler, *Linear Algebra Done Right*, 4th ed. | §7E, Theorem 7.70 and proof, printed p. 273 | 404 pp.; `1207d90a1310e79d` |

Final `source-fetch-check --stamp`: 5/5 fetch-verified, 5/5 resolved, 0 documented drops; Axler was the one newly stamped source. Its PDF browser-open request returned 502; an author-hosted search result exposed the complete Theorem 7.70 statement and proof, and the later full-text fetch succeeded. No source-fetch retrieval failure remains open. The coverage history reuses QA5 and batches 10 and 48. `coverage-checklist` verifies 46 harvested results with 0 errors and 0 warnings.

## Supplier readiness and unresolved claims

The current scoped readiness audit confirms two current-hash `ready` records: `lem-qa-25-isometry-error-implies-trace-distance` and `lem-qa-25-parity-path-transfer`. The other 17 items are `escalated`. `proof-contracts.json` records the exact per-item direct unresolved IDs, including unresolved `deps` and `justified_by` suppliers. No escalation was overwritten, no `--owner` flag was used, and no approval or acceptance is claimed.

The owner-held upstream blockers that affect those dependent claims are:

- `alg-qa-23-qsp-phase-synthesis` and `thm-qa-23-qsp-synthesis-correctness`: their authored finite phase route differs from binding OP0 phase extraction; the stated `poly(d, log(1/delta))` arithmetic/bit-time claim lacks a local certified-arithmetic proof under OP1. This blocks the finite phase-generation and resource claims in the base simulator and its consumers.
- `def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`, `def-qc-reflection`, and `thm-qc-reflection-unitary-involution`: their QC08 closure still has draft prerequisites on `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `measurements-povms-and-instruments`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, and `registers-tensor-products-and-partial-trace`. These affect the declared control/reflection operations and the qubitization signal proof.
- `def-qc-circuit-cost-model` and `def-qc-uniform-circuit-family`: QC09 syntax, denotation, gate/query/width/ancilla/classical-cost fields remain unresolved; the QC13 gate alphabet is also still draft for the uniform-family interface. These affect circuit-resource and uniform-query claims.
- `def-qa-20-sparse-hamiltonian-oracle-model`: its page closure remains open on `continuous-time-quantum-walks`, `uniform-circuit-families-promise-problems-and-complexity`, `controlled-gates-phase-and-entanglement`, and `reversible-computation-ancillas-and-coherent-oracles`; its escalated record also identifies `def-qc-circuit-cost-model` and the hash-stale ready record for `def-qc-coherent-function-oracle`, affecting total XOR-oracle semantics and charged query behavior. This blocks the standard sparse-oracle cost interpretation. The local sparse block encoding itself is explicitly conditional on supplied in-place permutations.

The open supplier IDs above feed the access definition, signal-subspace and signal-sequence results, simulator and resource bounds, sparse correctness/lower-bound results, and the B examples as listed per item in the proof contracts. The page-level requirements remain the 14 IDs in the batch manifest; this handoff does not mark any prerequisite page ready.

## Checks and live-run evidence

- Passed: `proof-layout` on all 19 explicit item paths (62 numbered steps, 0 defects); `precheck` on 19 items (14 proof-bearing checked, 0 failures); strict proof contracts (19/19, 0 errors/warnings); `rendercheck` (21 assigned items/pages, 0 errors); focused `depcheck` (0 errors/warnings); `content-policy` (19 items, 0 errors/warnings); coverage (46 results, 0 errors/warnings); source fetch (5/5).
- The run-wide `item-dependency-levels` check reports no QA25 level errors. It still reports unrelated defects: the empty `quantum-sampling-expectation-and-monte-carlo-examples` inventory, missing level on `lem-qa-18-johnson-stored-data-query-access`, and stale levels on `lem-qa-34-exponential-gram-concentration` (16 vs 17), `lem-qa-34-two-sketch-threshold-band-bound` (16 vs 1), `thm-qa-34-modfkv-low-rank-approximation` (17 vs 18), `thm-qa-34-tang-recommendation-sampler` (18 vs 19), `rem-qa-34-dequantization-scope` (19 vs 20), and `cex-qa-34-tang-without-sampling-access` (19 vs 20).
- `batch-dependency-levels check` reports a stale shared run-level input hash (`3097ae8fe82fb1d0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9`). The owner-owned sidecar was left unchanged; local dependency closure recomputes batch 49 at level 13.
- A scoped record audit confirms 2 current-hash ready items and 17 escalated items. The run-wide `step1-decisions check` did not complete in its prior invocation; no run-wide readiness is claimed.
- `.autopilot/quantum-computing-algorithms-60-2026-10-15` exists. A fresh owner status recomputation timed out after 25 seconds without output; the last successful status observation was `running`, stage `1-scaffold`, 27/60, with owner blockers. `git log --all --grep=quantum-computing-algorithms-60-2026-10-15` showed no closeout commit. No autopilot state or shared plan was edited.


## Owner sparse-access and clean-workspace repair

After root confirmed the actual native writer had drained, exact final native item/page/batch carriers and original Step1 records were preserved under `research/quantum-computing-algorithms-60-2026-10-15-owner-dequantization/before-qa25-qa26-integration/`. The original 17 QA25 escalation flags and the HHL sparse-query flag remain historical author evidence, not current proof premises or new acceptance. The focused repair is recorded in `research/quantum-computing-algorithms-60-2026-10-15-owner-dequantization/qa25-qa26-repair.json`.

Two complete helpers supply the sorted-XOR sparse-access isometries (logarithmic location calls, listed-zero support-union variant, one-sided value amplitude, exact clean slot erasure) and the unitary clean-subspace adjoint/control/reference hybrid. The original supplied-permutation sparse mode and full-space direct-simulation mode are preserved. QA26 now has the explicit clean-workspace mode and a full sparse-query substitution proof. Its state-correctness hybrid applies local promises only on the ideal all-clean trajectory and retains actual simulator work coherently. Numeric labels, scheduling, raw hashes and readiness/recertification remain root duties. No tests, gates, hashes, readiness decisions, stamps or commits were performed by this repair.
