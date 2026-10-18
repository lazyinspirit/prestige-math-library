---
id: ex-qa-37-approximate-b6-target
kind: example
title: "Identity target in the two B6 charge blocks"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 12
deps:
  - thm-qa-37-approx-encoded-two-qubit-gate
  - alg-qa-37-exhaustive-b6-block-pair-compiler
  - lem-qc-tqc-determinant-character-phase
justified_by: []
axiom_use: "None; the identity example is an exact finite calculation."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c, Fibonacci six-anyon blocks, PDF pp. 53–57."
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: "§4, Theorem 4.1 and proof, printed pp. 17–21; contextual only."
---

## Example

Take the logical two-qubit target $U=I_4$. Its determinant is one, so the
special-unitary extensions are $T_1=I_5$ and $T_\tau=I_8$. The empty
six-strand braid has normalized block matrices $I_5,I_8$ and exponent sum
zero. It therefore certifies exact zero block error, zero logical error and
zero leakage; its physical common phase is $R_1^0=1$. This is the identity
boundary case of the shared-word B6 interface.

## Facts & Assumptions

**Given:** The empty Artin word, the Fibonacci normalized block convention,
and the six-anyon code embeddings.

[F1] The encoded two-qubit theorem uses determinant-corrected targets
$T_1,T_\tau$ and bounds the code error and leakage by the block error.
[[thm-qa-37-approx-encoded-two-qubit-gate]]

[F2] The determinant-character phase for exponent sum $k$ is $R_1^k$.
[[lem-qc-tqc-determinant-character-phase]]

## Verification

1.1 Since $\det I_4=1$, both determinant-corrected extensions in [F1] are identity matrices; their determinants are one and their code restrictions are $I_4$. [F1, given, algebra]

2.1 The empty word acts as the identity in each block and has exponent sum zero, so both operator differences vanish. The block approximation result then gives zero logical error and zero leakage, while [F2] gives physical phase $R_1^0=1$. [F1, F2, step 1.1, algebra] ∎
