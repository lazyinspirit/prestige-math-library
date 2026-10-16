# Step 3a reader report — batch 27

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Batch: `27`

## Opened inventory

- Assigned A-page: `library/quantum-algorithms/exact-oracle-algorithms.md`.
- Assigned B-page: `library/quantum-algorithms/exact-oracle-algorithms-examples.md`.
- Assigned items, reviewed in dependency order: `lem-qa-hadamard-f2-kernel`; `def-qa-deutsch-promise`, `def-qa-deutsch-jozsa-promise`, `def-qa-bernstein-vazirani-promise`; `thm-qa-deutsch-classical-query-lower-bound`, `thm-qa-deutsch-jozsa-deterministic-query-lower-bound`, `thm-qa-deutsch-jozsa-randomized-constant-query-upper-bound`, `thm-qa-bernstein-vazirani-classical-query-lower-bound`; `alg-qa-deutsch-query`, `alg-qa-deutsch-jozsa-query`, `alg-qa-bernstein-vazirani-query`; `thm-qa-deutsch-query-correct`, `thm-qa-deutsch-jozsa-query-correct`, `thm-qa-bernstein-vazirani-query-correct`; and `ex-qa-exact-oracle-algorithms`.
- Relevant supplier statements and proof sections opened: `def-qa-binary-dot-product`, `def-qa-task-and-promise-domain`, `def-qa-promise-query-instance`, `def-qa-input-encoding-and-size`, `def-qa-classical-query-algorithm`, `def-qa-quantum-query-algorithm`, `def-qa-standard-bit-query`, `def-qa-phase-query`, `def-qa-nonoracle-gate-cost`, `def-qa-finite-branch-output-law`, `def-qc-coherent-function-oracle`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `def-qc-dirac-notation-conversion`, `def-qc-ordered-bitstring-encoding`, `def-qc-register-and-computational-basis`, `def-qc-tensor-map`, `def-qc-tensor-register-and-permutation`, `def-qc-elementary-circuit-resources`, `def-qc-circuit-syntax-and-register-order`, `def-qc-circuit-denotational-semantics`, `def-qc-promise-computation-model`, `def-qc-density-operator`, `def-qc-instrument-and-conditional-state`, `def-qc-pure-state-and-ray`, `def-finite-cardinality`, `def-finite-probability-space-and-event`, `thm-qc-bitstring-index-is-bijection`, `thm-qc-computational-basis-orthonormal`, `thm-qc-unit-vector-projector-is-density`, `thm-qc-reversible-xor-oracle-unitary`, `lem-qc-tensor-product-basis-and-dimension`, `thm-qc-instrument-outcome-law-normalizes`, `thm-qc-instrument-conditional-state-is-density`, `thm-qa-phase-kickback`, and `thm-qa-bit-query-to-phase-query`.
- Authoritative passages opened:
  - Ronald de Wolf, [*Quantum Computing: Lecture Notes*, arXiv:1907.09415v6](https://arxiv.org/pdf/1907.09415), Chapter 2 §§2.4.1–2.4.2, PDF pp. 30–31 (printed pp. 18–19), plus the phase-query explanation immediately before §2.4.1 on PDF p. 29. These give the Deutsch–Jozsa promise, phase query, output amplitude, exact one-query result, deterministic query lower bound, and Bernstein–Vazirani recovery.
  - John Preskill, [*Quantum Information*, Chapter 6: Quantum Algorithms](https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf), §6.1, PDF pp. 7–11 (printed pp. 1–5). These give the Deutsch circuit and amplitudes, the Deutsch–Jozsa promise and one-query analysis, the deterministic classical bound and randomized sampling discussion, and the Bernstein–Vazirani one-query and classical query comparison.

## Review and evidence

- The Hadamard lemma factors the character sum into coordinate factors and obtains the stated normalization and ordered tensor expansion. The three promise definitions preserve totality, the Deutsch/Deutsch–Jozsa partition, the truth-table input length `N=2^n` versus address width `n`, and the Bernstein–Vazirani no-offset convention and unique secret.
- The classical bounds follow from the displayed transcript or leaf arguments. In particular, the Deutsch randomized one-query strategy is correct on at most two of four truth tables; the three-sample Deutsch–Jozsa error on balanced inputs is `(N-4)/(4(N-1)) <= 1/4` for `N>=4`, with `N=2` handled separately; and a fixed Bernstein–Vazirani decision tree with at most `q` queries has average success at most `2^(q-n)`, ruling out `q<n` for worst-case success `2/3`.
- The procedures specify zero initialization, exact `X` then `H` target preparation, ordered address/target registers, one standard XOR query, final measurement and output rules. Counts are one query and four nonoracle one-qubit gates for Deutsch; one query and `2n+2` nonoracle one-qubit gates for each n-bit procedure. The phase-kickback supplier and the local amplitude proofs support these counts and exact-output claims.
- The three correctness proofs compute the Deutsch two-term amplitudes, the Deutsch–Jozsa amplitude `2^(-n) sum_x (-1)^(f(x)+x·y)`, and the Bernstein–Vazirani character sum with `z=a xor y`. The normalized terminal output law and ordered product-basis suppliers justify the probability-one conclusions. The two-bit example's truth tables and amplitude values are correct in the declared big-endian order.
- I reviewed the source citations against the cited passages. The three-sample Deutsch–Jozsa refinement, one-query randomized Deutsch lower bound, and explicit Bernstein–Vazirani decision-tree bound are established by their local proofs; the cited lecture notes do not serve as substitutes for those local derivations.
- The batch notes mention an inconsistency in `def-qa-finite-branch-output-law`. The current supplier text does not contain that contradiction: Verification 1.3 invokes the instrument normalization and conditional-state results, and Verification 5.1 explicitly records that use. I also opened those two supplier theorems; their current statements and proofs support the invoked results. No current dependency defect was confirmed.

## Edits and defects

- No item or page was edited. No material item repair was made, so no proof-contract update, judge-record removal, reflow, precheck, or changed-item proof-layout run was required.
- No confirmed defect requiring an uneditable finding was found.

## Page verdicts

- `exact-oracle-algorithms` (A): no confirmed title, summary, claim, or dependency defect.
- `exact-oracle-algorithms-examples` (B): no confirmed summary or example defect. The B-page was reviewed read-only, as required.

## Blocker

At review start, autopilot status reported the run as running with a stage-spec blocker: `1-scaffold` has an invalid unit prerequisite graph because construction scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12 is invalid. This is outside batch 27 and did not prevent this review. No run transition or out-of-scope repair was attempted.

## Coverage note

All 15 assigned items and both assigned page prose files were opened, along with the direct supplier interfaces and proof-critical suppliers listed above. This was not an audit of the entire transitive dependency closure or the full prose of all six prerequisite pages named in the A-page frontmatter. The current assigned claims and the dependencies used in their arguments were checked; no findings remain.
