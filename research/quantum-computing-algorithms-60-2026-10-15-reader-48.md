# Step 3a reader report — batch 48

Run: `quantum-computing-algorithms-60-2026-10-15`  
Reader: `reader-48`

## Page verdicts

| Page | Verdict |
|---|---|
| `quantum-singular-value-transformation` (A) | The assigned carriers and page summary are mathematically coherent. One nonfatal proof omission remains in a batch-47 supplier used for the real-polynomial completion claims; see the finding below. |
| `quantum-singular-value-transformation-examples` (B) | Clear after correcting the endpoint description in the assigned rank-one example. The parity counterexample is valid. |

## Opened inventory

Pages:

- `library/quantum-algorithms/quantum-singular-value-transformation.md`
- `library/quantum-algorithms/quantum-singular-value-transformation-examples.md`

Assigned items, reviewed in local dependency order:

- `def-qa-24-pue-svd-data`
- `lem-qa-24-pue-svd-invariant-subspaces`
- `def-qa-24-singular-value-transform`
- `alg-qa-24-qsvt`
- `lem-qa-24-singular-transform-basis-independence`
- `thm-qa-24-projector-phase-implementation`
- `thm-qa-24-qsvt-query-count`
- `thm-qa-24-qsvt-singular-space-action`
- `lem-qa-24-qsvt-robustness-amplitude-bound`
- `thm-qa-24-real-polynomial-extraction`
- `thm-qa-24-qsvt-error-and-resource-bound`
- `cex-qa-24-parity-violation`
- `ex-qa-24-rank-one-pue`

Current-run suppliers opened for the assigned claims:

- Batch 46: `def-qa-22-block-encoding`.
- Batch 47: `def-qa-23-qsp-signal-sequence`, `lem-qa-23-phase-sequence-unitarity`, `def-qa-23-qsp-admissible-polynomial-pair`, `lem-qa-23-hermitian-signal-convention-conversion`, `lem-qa-23-positive-polynomial-complement-factorization`, `thm-qa-23-qsp-phase-factorization`, and `thm-qa-23-real-polynomial-completion`.
- Quantum-circuit suppliers: `def-qc-dirac-notation-conversion`, `thm-qc-dirac-notation-coordinate-identity`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `def-qc-circuit-denotational-semantics`, `def-qc-relative-phase`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `def-qc-pure-state-and-ray`, `def-qc-reflection`, `thm-qc-reflection-unitary-involution`, `def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`, and `def-qc-circuit-cost-model`.

Published mathematical suppliers opened where their statements or proofs were used include the finite-dimensional SVD, orthogonal projections and orthogonal sums, adjoints and their algebra, finite-dimensional isometry characterisations, operator norms and their triangle/submultiplicative bounds, complex exponential and conjugation facts, polynomial division and degree facts, real/complex field facts, polar form, and the FTA proof with its cited growth, descent, and conjugate-root lemmas.

## Source check

I consulted Gilyén, Su, Low, and Wiebe, *Quantum singular value transformation and beyond*, §3.2: Definitions 11–16, Lemma 14, Theorem 17, Corollary 18, and Lemma 19 (PDF pp. 14–25; [arXiv:1806.01838](https://arxiv.org/abs/1806.01838)). Theorem 17 gives the odd/even compressed singular-value action, Lemma 14 supplies the two-dimensional block decomposition, and Lemma 19 discusses phase-modulation implementation and query costs. I also checked Andrew Childs, *Lecture Notes on Quantum Algorithms*, Chapter 29 §§29.2–29.3 (printed pp. 144–147; PDF pp. 152–155; [author-hosted PDF](https://www.cs.umd.edu/~amchilds/qa/qa.pdf)) for the Hermitian-reflection convention and the alternating-call construction. These sources corroborate the QSVT conventions; neither is used to excuse the local rational-choice omission reported below.

## Edits and evidence

- In `items/ex-qa-24-rank-one-pue.md`, Proof 1.1 now distinguishes the open-interval singular plane, the zero-kernel/complement block at `sigma=0`, and the singular line plus residual complement at `sigma=1`. The matrix calculation itself is unchanged. Its batch-48 proof-contract derivation was updated to match.
- In `items/thm-qa-24-qsvt-query-count.md`, Proof 1.2 now explicitly uses the controlled projector-phase construction from `thm-qa-24-projector-phase-implementation` and identifies the unpaired odd-length call as a controlled forward `U`. The proof-contract citation-use and derivation-input records now include `F2` at step 1.2.
- Neither edited item had a stale `verification.judge` record.

Validation after the edits:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-qa-24-rank-one-pue.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-qa-24-rank-one-pue.md` — pass.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-qa-24-qsvt-query-count.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-qa-24-qsvt-query-count.md` — pass.
- `node tools/proof-layout.mjs items/ex-qa-24-rank-one-pue.md items/thm-qa-24-qsvt-query-count.md` — 2 items, 8 steps, 0 defects.

## Uneditable defect

`lem-qa-23-positive-polynomial-complement-factorization` (batch 47), Proof 2.1, enumerates reduced rationals in `(-1,1)` and chooses the first one outside the finite root set. The cited facts establish that the root set is finite, but do not establish that the rational candidates form an infinite set in that interval or that the enumeration covers it. A short proof using density/infinitude of the rationals in `(-1,1)`, or a suitable authoritative result, closes this nonfatal gap. The assigned consumer `thm-qa-24-real-polynomial-extraction` reaches this supplier through `thm-qa-23-real-polynomial-completion`.

## Blockers and coverage limit

There was no batch-48 procedural blocker. The recomputed run status at 2026-10-16 03:06 UTC still reported the unrelated `1-scaffold` prerequisite-graph spec error for `def-qc-effective-unitary-matrix-input` in batch 12 and a 3a-collect failure for batch 36.

All two assigned pages and all thirteen assigned items were opened. I inspected the direct suppliers and the transitive sources needed for the arguments listed above, but did not audit every published item in the batch's full transitive dependency closure; no conclusion is made here about uninspected transitive suppliers.
