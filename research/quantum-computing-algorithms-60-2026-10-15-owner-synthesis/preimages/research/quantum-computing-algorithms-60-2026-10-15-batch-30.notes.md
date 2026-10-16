# Batch 30 authoring notes — Quantum Fourier-Transform Circuits

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `quantum-fourier-transform-circuits` / `quantum-fourier-transform-circuits-examples`  
Batch dependency level: 9; declared prerequisite batches: 1, 2, 7, 8, 9, 11, 12.  
Scheduling input recorded by the dispatch: `9b2c249d4992d9068191bb0f9b1490b0713c8529fcbaa1869bd16d178d892f85`.

## Controlling instructions and current plan

Read the root `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the assigned batch/task files, and the run-local owner direction. The owner's stated planning hold has cleared: the prerequisite run `quantum-prerequisites-4-2026-10-15` recomputes as COMPLETE; this run's actual integration journal records completion of `--metadata`, `--proposal-check`, and `--prepare-closeout`; its `mechanical-check.actual.json` says `status: pass`, with zero errors and warnings. The proposal check was an actual recorded check, not the earlier virtual graph result.

The generated batch task says “design: none found.” That conflicts with the current audited QA track section `research/quantum-algorithms-planning/sections/qa_r1.md`, section QA06, which is the pair's design and is explicitly required by the run-local owner direction. I read and followed that full QA06 section, together with the current `pages.json`, `proposed-items.json`, QA-06 item export, and the QA operational-contract appendix. The task's “none found” note is therefore stale and is not repeated as a factual claim here.

`research/plan-spec.json` places the A/B pair at orders 2224/2225 in `quantum-algorithms`, with the same titles and eleven page-level requirements as the assignment. Its item arrays are empty at this pre-authoring stage. The current audited QA-06 export supplies eleven A items and one B example. Its summary and proof route agree with the QA06 section: positive-sign QFT is the inverse of the negative-sign unitary DFT; binary factorization; ordered Hadamard/controlled-phase circuit and reversal; exact count; telescoping operator-norm truncation estimate; separate QC12 finite-set compilation with no target-angle bit-time claim.

## Inventory, dependency levels, and plan deltas

The item inventory and direct `deps` are entered as item objects in the batch manifest before item carriers. Computed in-run levels are:

| Level | Items |
|---:|---|
| 0 | `thm-qa-projective-operator-closeness-bounds-output-distribution`, `lem-qa-pi-over-two-exceeds-sqrt-two` |
| 1 | `def-qa-cyclic-quantum-fourier-transform` |
| 4 | `lem-qa-binary-qft-product-factorization`, `lem-qa-tensor-extension-preserves-operator-norm` |
| 8 | `lem-qa-swap-is-three-cnot-circuit` |
| 9 | `def-qa-qft-gate-cost-model` |
| 10 | `alg-qa-exact-binary-qft-circuit` |
| 11 | `thm-qa-exact-binary-qft-circuit-correct`, `thm-qa-exact-binary-qft-gate-count`, `alg-qa-truncated-binary-qft-circuit` |
| 12 | `thm-qa-truncated-qft-operator-norm-error` |
| 13 | `thm-qa-truncated-qft-gate-count`, `thm-qa-qft-finite-gate-set-compile-cost`, `ex-qa-qft-fourier-circuit-order-and-truncation` |

These values are recomputed from the current run dependency graph, including current supplier closures, rather than copied from batch scheduling labels. The local graph is acyclic. The upstream `thm-qc-bitstring-index-is-bijection` carrier and batch-2 manifest both list level 3; its closure puts the QFT factorization lemma at level 4.

The audited proposal's levels and main dependency order are preserved. Additional direct dependencies were added where the actual proof uses an omitted interface: the exact binary algorithm uses the ordered-bitstring encoding; exact circuit correctness uses the circuit denotation and QFT definition; the projective-distance theorem uses the operator-norm definition and the finite-dimensional isometry/modulus interfaces; the norm truncation proof uses the ideal controlled-phase definition, norm triangle inequality, and a proved sine bound; exact and truncated gate counts use the resource interface. The QA item export lists the operator-norm/largest-singular-value theorem as an `existing_supplier_check` for truncation but not in `deps`; this proof uses the finite-dimensional operator-norm definition, submultiplicativity, and unitary isometry directly, so it does not add the largest-singular-value theorem.

The audited B proposal declares `deps: []`. The authored example now lists the exact and truncated circuits, QFT definition, circuit semantics, gate model, wire-order, Dirac, local-embedding, product-basis, trigonometric, operator-norm and truncation-bound suppliers it uses. The finite verification computes the omitted-phase norm as `sqrt(2)` and compares it with `pi/2`; the A-page lemma `lem-qa-pi-over-two-exceeds-sqrt-two` supplies this strict comparison with a complete cosine-series proof. This replaces the initially considered B-only example dependency and keeps the B example a sink with no consumers.

The QA-06 item export also leaves the circuit supplier check “QC rotation and register-order semantics remain under reconciliation.” That obligation is retained below. No proof excerpt or acceptance is inferred from the planned interfaces.

## Source reading and harvest

I inspected the complete local extracted text for the relevant QFT sections and the complete source PDFs' identified section ranges:

- De Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415, Ch. 4 §§4.4–4.5, PDF pp. 41–48 (printed pp. 29–36). It derives the positive-sign basis transform, product factorization, controlled-R circuit, reversal, and exact count. Exercise 4.4 is a proof prompt for truncation, not a supplied operator-norm proof.
- Childs, *Lecture Notes on Quantum Algorithms*, Ch. 4 §4.2, PDF pp. 25–28. It derives the binary output factorization, controlled-rotation circuit, bit reversal and exact count; the approximation discussion does not prove the full operator-norm telescoping estimate.
- Preskill, *Quantum Information*, standalone Chapter 6 (the chapter, not the complete book), §6.2.2, PDF pp. 17–18 / printed pp. 11–12. It gives the positive-sign product, circuit order, bit reversal, exact count and long-rotation approximation motivation; it does not provide the full operator-norm error proof.

All three full-text URLs were retrieved by `node tools/source-fetch-check.mjs --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-30.coverage.json --stamp`: actual result `3/3 source(s) fetch-verified`, `3 newly stamped`, zero failures. Exact source locators and each harvested result's disposition are in the adjacent coverage file. No retrieval failure occurred, so there are no recovery attempts, source drops, or `source_resolution` decisions to record. The QFT sources support the circuit/truncation parts; they are not claimed to prove the QC12 compilation interface.

## Supplier inspection and unresolved cross-pair obligations

I read the actual published DFT definition and full finite-Fourier-inversion proof and checked that the forward transform is negative-sign/unitary-normalized while its inverse is the positive-sign formula used here. I also inspected the published finite-probability definition, finite Cauchy–Schwarz proof, operator-norm definition and submultiplicativity proof, finite-dimensional isometry characterization proof, complex-modulus triangle lemma, inner-product norm triangle proof, Euler/trigonometric identities, sine/cosine Lipschitz proof, and the published pi-bound example proof, which was inspected but is no longer a dependency. The local A-page cosine-series lemma now supplies that strict comparison without a B-page edge. These actual bodies support the local mathematical steps cited in the carriers.

At the handoff snapshot, the current manifests for prerequisite batches 1, 2, 7, 8, 9, and 12 still have empty `items` arrays, and their planned supplier item files are absent. Their exact IDs, required interfaces, affected claims/steps, and `actual_excerpt: null` status are in `research/quantum-computing-algorithms-60-2026-10-15-batch-30.cross-batch-dependencies.json`. In particular:

- Batch 1: `def-qc-dirac-notation-conversion` (basis-vector/ket matrix convention), used by the QFT definition, product factorization, and exact-circuit correctness.
- Batch 2: `def-qc-ordered-bitstring-encoding` and `def-qc-tensor-register-and-permutation` (integer/wire order and tensor/reversal semantics), used by product factorization and the exact algorithm.
- Batch 7: `def-qc-one-qubit-gate-alphabet-and-rotations` (Hadamard/rotation gate interface), used by the cost model.
- Batch 8: `def-qc-controlled-phase-rotation`, `def-qc-inverse-unitary-access`, `thm-qc-standalone-global-phase-invariance`, and `thm-qc-controlled-global-phase-is-relative-phase` (controlled-gate, inverse, measurement-phase and outer-control phase interfaces).
- Batch 9: `def-qc-elementary-circuit-resources` and `def-qc-circuit-denotational-semantics` (resource accounting and gate-list semantics).
- Batch 12: `alg-qc-solovay-kitaev-unitary-compiler` and `thm-qc-solovay-kitaev-error-and-resource-bound` (exact-arithmetic compiler, fixed-arity decomposition, error range, tracked phase, and gate-count hypotheses).

These absent supplier bodies are not represented by fabricated quotations. The dependent A-page definitions, algorithms and proof routes remain escalated; the B example has explicit finite calculations, but its missing circuit-semantics and resource excerpts also remain unresolved.

## Scoped check record

Final command outputs, proof-layout/precheck status, dependency checker blockers, and Step-1 decisions are appended after the final scoped checks. These records describe authoring readiness only, not independent mathematical approval.

## Current handoff reconciliation — 2026-10-16

The preceding supplier paragraph records the original snapshot, before parallel batch authors finished their item bodies. The current authoring input is `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60` from `batch-dependency-levels.json`; the older batch-30 cross-dependency record carried `9b2c249d4992d9068191bb0f9b1490b0713c8529fcbaa1869bd16d178d892f85` and omitted prerequisite batch 11. I updated the batch-30 cross-dependency evidence to the current input and prerequisite list `1, 2, 7, 8, 9, 11, 12`. The generated beta task's “design: none found” conflicts with the current audited QA track: QA06 in `research/quantum-algorithms-planning/sections/qa_r1.md` is the controlling design under the owner direction. The canonical plan agrees on orders, titles, category and all eleven page requirements; its empty item arrays are the pre-authoring state.

The scoped inventory is 14 A-page items and one B-page example. Three local A-page lemmas were added before using their results: `lem-qa-pi-over-two-exceeds-sqrt-two` proves the finite comparison without a B-page dependency, `lem-qa-tensor-extension-preserves-operator-norm` proves the spectator-register norm equality, and `lem-qa-swap-is-three-cnot-circuit` proves the exact SWAP identity by basis calculation. The recomputed item levels in the updated manifest are `0, 0, 1, 4, 4, 8, 9, 10, 11, 11, 11, 12, 13, 13` for A and `13` for B. The local graph is acyclic.

I inspected current supplier statements and proofs rather than carrying forward the original missing-body statuses. Draft bodies and relevant proofs are present for batch 1's Dirac conversion; batch 2's ordered-bitstring encoding, index-bijection theorem, tensor register, product-basis lemma and wire-permutation theorem; batch 7's exact Hadamard/rotation matrices; batch 8's controlled phase, inverse access, CNOT orientation and controlled-global-phase theorem; batch 9's ordered circuit syntax and local gate embedding; and batch 12's compiler and error/resource theorem. The standalone-global-phase theorem is not a dependency of the current projective-distance proof because that item proves coordinate-probability phase invariance directly. The current blockers are limited to the two absent batch-9 suppliers, `def-qc-elementary-circuit-resources` and `def-qc-circuit-denotational-semantics`, plus the batch-11 QSD interface: its body is present, but the needed uniform one-qubit-factor count is not stated and the exact diagonal-migration step remains explicitly unproved in its own draft. The binary-index theorem source carrier and batch-2 manifest both list level 3; batch 30 computes the dependent factorization lemma at level 4. None of these records claims supplier acceptance.

The QFT sources were reread at their complete relevant section ranges: de Wolf, Ch. 4 §§4.4–4.5, PDF pp. 41–48 (printed pp. 29–36), including the three-CNOT SWAP reference and truncation exercise; Childs, Ch. 4 §4.2, PDF pp. 25–28; and Preskill, §6.2.2, PDF pp. 17–18 (printed pp. 11–12). Their binary phase expansion, tensor factors, gate order, reversal and ideal counts agree with QA06. None supplies the full operator-norm telescoping proof, which is authored locally. The local compile theorem separately cites and reads Shende–Bullock–Markov, §§5.1–5.3 and Appendix A.1–A.2, PDF pp. 11–16, and Dawson–Nielsen, §§3–4, PDF pp. 3–9. The former source gives the QSD count and diagonal-migration instruction but not the matrix identity required to close the local QSD draft; the latter provides the SK method but leaves precision details to its local proof. The finite-set theorem makes only the declared exact-real gate-count claim and makes no finite-bit-time claim.

The local inequality helper also uses C. Schmeiser, *Introduction to Analysis*, §6.7–6.8, PDF pp.83–86. I inspected the cosine series and alternating remainder, the definition of pi as twice the unique cosine zero, and strict decrease on [0,2]. The local proof explicitly evaluates the cosine tail at sqrt(2); the source is stamped in the coverage file.

The items remain draft. Exact absent-supplier excerpts stay `null`; present but incomplete interfaces are quoted with their actual current text. Final readiness decisions and scoped check outputs follow.

## Final scoped check record — 2026-10-16

Scoped results on the 14 A-page items and the B-page example:

- `precheck.mts`: 15 files, 11 proof-bearing items checked, 0 failures.
- `rendercheck.mjs`: 17 changed Markdown files checked, 0 errors and 0 warnings.
- `depcheck.mjs --items-file`: 15 items and both pages checked, 0 errors and 0 warnings; 1,099 prerequisite items and 365 prerequisite pages checked for cycles. The previously found B-leaf edge was removed by adding the local A-page cosine-series lemma.
- `content-policy.mjs`: 15 items, 0 errors and 0 warnings.
- `proof-layout.mjs`: 15 items, 38 steps, 0 defects.
- `citation-fidelity.mjs`: 11 proof items and 96 citations checked, 0 missing quotes and 0 widening candidates.
- `source-fetch-check.mjs --stamp`: 7/7 sources fetch-verified, 0 newly stamped in the final pass, 0 documented drops.
- `proof-contract.mjs`: 5 expected quote-missing errors remain: the four claims depending on absent `def-qc-circuit-denotational-semantics` and the compile theorem's absent `def-qc-elementary-circuit-resources`. Their excerpts remain `null`; none was invented. The QC11 QSD supplier body is present but its required fixed-arity factor-count interface and diagonal-migration proof remain unresolved.
- `item-dependency-levels.mjs check --run`: the run-wide check exits 1 with 85 errors in other run items. It reports 0 dependency-level errors for batch 30; current A-item levels are `0, 0, 1, 4, 4, 8, 9, 10, 11, 11, 11, 12, 13, 13`, and the B example is level 13.

`step1-decisions.mjs record` wrote a non-owner record for every scoped item: 6 ready and 9 escalated. The ready records have complete inspected dependencies and item contracts. The escalations name the missing QC09 circuit semantics/resource suppliers and the incomplete QC11 QSD interface. Hash validation of the 15 records returned 6 current ready records, 9 escalations, and 0 invalid or stale records. These are scaffold readiness records, not independent approvals.
