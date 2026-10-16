---
id: def-qc-binary-clifford-tableau
kind: definition
title: Phase-aware binary Clifford tableau
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-clifford-normalizer
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-binary-pauli-label-and-quotient
  - thm-qc-binary-pauli-quotient-isomorphism
  - def-qc-pauli-matrices
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
justified_by: []
dependency_level: 9
sources:
  references:
    - title: "Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits"
      url: https://arxiv.org/pdf/quant-ph/0406196
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: "John Watrous, Understanding Quantum Information and Computation, Lesson 14"
      url: https://jhwatrous.github.io/UQIC.pdf
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: "None; the tableau records finitely many exact generator images."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Fix the generator order $X_1,\ldots,X_n,Z_1,\ldots,Z_n$ and label order $(x,z)$, with wire indices as in [[def-qc-phase-aware-n-qubit-pauli-group]]. For an actual Clifford unitary $U\in\mathcal C_n$, write each exact generator image uniquely as

$$UX_jU^*=P(k_j,x_j,z_j),\qquad UZ_jU^*=P(k_{n+j},x_{n+j},z_{n+j}).$$

Its **phase-aware binary Clifford tableau** is the pair $(S,p)$, where $S\in M_{2n}(\mathbb F_2)$ has as its ordered columns the $2n$ labels $(x_j,z_j)$ just listed and $p=(k_1,\ldots,k_{2n})\in(\mathbb Z/4\mathbb Z)^{2n}$. The phase vector retains the exact mod-$4$ generator-image phases; it is not discarded with the binary labels. The columns define the unique linear map on $V_n$ taking the ordered standard basis to those columns. Only pairs arising from a Clifford are called Clifford tableaux; arbitrary binary matrices and phase vectors need not be valid. A scalar global phase on $U$ does not change its tableau.

## Facts & Assumptions

**Given:** an actual unitary $U\in\mathcal C_n$ and the fixed generator order.

[F1] [[thm-qc-binary-pauli-quotient-isomorphism]]: every Pauli operator has a unique exact parameter triple $(k,x,z)$.

[F2] [[def-qc-clifford-normalizer]]: conjugation by $U$ maps each Pauli generator into $\mathcal P_n$.

[F3] [[def-qc-binary-pauli-label-and-quotient]]: $V_n=\mathbb F_2^n\oplus\mathbb F_2^n$ with coordinatewise vector operations.

## Proof

1.1 By [F2], each of the $2n$ conjugated generators is some $P(k,x,z)$; [F1] makes this phase and label unique, so the phase vector and binary columns are well-defined. [given, F1, F2, construct]

2.1 The labels of $X_1,\ldots,X_n,Z_1,\ldots,Z_n$ are the ordered coordinate basis of $V_n$ by [F3]. Let their image labels be $\ell_1,\ldots,\ell_{2n}$ and define $S_U(a_1,\ldots,a_{2n})=\sum_{j=1}^{2n}a_j\ell_j$. Coordinatewise addition and scalar multiplication distribute over this finite sum, so $S_U$ is linear and takes each ordered basis vector to its prescribed column. Any other linear map with those columns agrees on every vector because every vector is the corresponding finite coordinate combination. Multiplying $U$ by any unit-modulus scalar leaves each conjugation unchanged, so its phase vector and tableau are unchanged. [given, F1, F3, step 1.1, algebra] ∎
