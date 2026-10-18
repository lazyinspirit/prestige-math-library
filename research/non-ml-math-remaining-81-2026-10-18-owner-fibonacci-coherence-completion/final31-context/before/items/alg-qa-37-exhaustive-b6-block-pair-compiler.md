---
id: alg-qa-37-exhaustive-b6-block-pair-compiler
kind: algorithm
title: "Exhaustive certified Fibonacci B6 block-pair search"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-qa-37-certified-matrix-input
  - def-qa-37-resource-cost-model
  - def-qa-37-anyon-task-and-promise
  - lem-qc-tqc-fibonacci-b6-path-projectors-and-artin
  - def-qa-37-phase-reference-cost
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - ex-qc-tqc-fibonacci-data
justified_by: []
axiom_use: "None for the search instructions; termination depends separately on the ACω density theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c, Fibonacci braid blocks, PDF pp. 53–57."
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: "§4, Theorem 4.1 and proof, printed pp. 17–21; this source is a cross-check, not the local certificate."
proof_strategy: direct
---

## Definition

**Inputs:** certified Cauchy names for targets $T_5\in SU(5)$ and
$T_8\in SU(8)$; a positive binary-rational tolerance $\varepsilon$; and the
fixed normalized six-strand Fibonacci B6 generators in both total-charge
blocks. Enumerate all finite Artin words over the six-strand generators and
their inverses, and at stage $s=1,2,\ldots$ inspect every word of length at most $s$ and every
precision $p\le s$ not previously inspected, in fixed lexicographic order. For each word $b$ and precision $p$, compute rational complex
matrix approximants $P_{5,b,p},P_{8,b,p}$ to its exact normalized block
matrices and request rational target approximants $Q_{5,p},Q_{8,p}$. Each
real and imaginary entry error in these approximants is certified at most
$2^{-p}$. For $d\in\{5,8\}$ compute the rational number
$$s_{d,b,p}=\sum_{i,j}\Bigl(|\Re(P_{d,b,p}-Q_{d,p})_{ij}| +|\Im(P_{d,b,p}-Q_{d,p})_{ij}|\Bigr).$$
Return the first word for which both rational tests
$$s_{d,b,p}+4d\,2^{-p}<\varepsilon\qquad(d=5,8)$$
hold. Output the word, its exponent sum, both rational certificates, and the
measured search/precision costs in the ledger of
[[def-qa-37-resource-cost-model]]. The braid matrices have computable
algebraic entries from the fixed Fibonacci $F/R$ data
[[lem-qc-tqc-fibonacci-b6-path-projectors-and-artin]]. This is a dovetailed
partial search definition: no cutoff or useful word-length/time bound is
asserted here. A separate theorem in this pair proves termination under certified target
access. The returned matrices are
normalized by the common $R_1$ scalar; their physical phase is recorded by
[[def-qa-37-phase-reference-cost]].

## Facts & Assumptions

**Given:** The exact normalized braid matrices, rational approximants with
entrywise coordinate error at most $2^{-p}$, and the two accepted rational
tests.

[F1] The certified fixed-dimensional input supplies rational complex matrix
approximants whose real and imaginary coordinates each have error at most
$2^{-p}$. [[def-qa-37-certified-matrix-input]]

[F2] For a finite matrix, the operator norm is at most the Frobenius norm.
[[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]

[F3] The normalized B6 matrices are fixed finite-dimensional algebraic
matrices in the declared total-charge blocks.
[[lem-qc-tqc-fibonacci-b6-path-projectors-and-artin]]

## Proof

1.1 For any $d\times d$ complex matrix whose real and imaginary entry coordinates have errors at most $2^{-p}$, the Frobenius norm of the error is at most $d\sqrt2\,2^{-p}$. Apply this to the word approximant and target approximant using [F1]; their two errors total at most $2d\sqrt2\,2^{-p}<3d\,2^{-p}$. The triangle inequality for the Euclidean entry norm therefore gives $\|B_d(b)-T_d\|_F\le\|P_{d,b,p}-Q_{d,p}\|_F+3d2^{-p}$. [F1, F3, given, algebra]

2.1 The sum of the absolute real and imaginary coordinates in $s_{d,b,p}$ dominates the Frobenius norm of $P_{d,b,p}-Q_{d,p}$. By [F2], $\|B_d(b)-T_d\|_{\rm op}\le\|B_d(b)-T_d\|_F\le s_{d,b,p}+3d2^{-p}<s_{d,b,p}+4d2^{-p}<\varepsilon$. Thus each accepted rational test certifies the strict operator-norm bound in its block. [F2, step 1.1, given, algebra] ∎
