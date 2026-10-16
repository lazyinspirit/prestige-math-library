---
id: lem-qa-33-unary-clock-locality
kind: lemma
title: Unary clock legality and 5-locality
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-33-feynman-kitaev-history-hamiltonian
  - lem-qa-33-geometric-soundness-bound
  - lem-qa-33-projection-lemma
justified_by: []
proof_strategy: direct
axiom_use: None; computational-basis patterns and the projection lemma suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dorit Aharonov and Tomer Naveh, Quantum NP: A Survey"
      url: https://arxiv.org/pdf/quant-ph/0210077
      locator: §4, unary clock and locality, PDF pp. 15–18
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 33, PDF pp. 182–184
---

## Statement

For the unary clock $|c_t\rangle=|1^t0^{T-t}\rangle$, the penalty $H_{clock}=\sum_{i=1}^{T-1}|01\rangle\langle01|_{C_iC_{i+1}}$ has kernel exactly the legal-clock subspace and every illegal clock basis word has penalty at least $1$. With the local windows specified in [[def-qa-33-feynman-kitaev-history-hamiltonian]], every propagation summand is supported on at most two computation qubits and three clock qubits; input, output and clock summands are at most two-local. For any $g>0$, a weight $J_{clock}>2K+4K^2/g$ makes the projection-lemma error strictly less than $g/4$, where $K\ge\|H_0\|$ bounds the sum of all other weighted terms. Such a weight can be chosen polynomially bounded when both $K$ and $g^{-1}$ are polynomially bounded; the formula does not assert polynomial size for smaller gaps.

## Facts & Assumptions

**Given:** $T\ge1$, the unary-clock history terms, a polynomial bound $K\ge\|H_0\|$, and an inverse-polynomial positive gap $g$ when a polynomial penalty weight is required.

[F1] [[def-qa-33-feynman-kitaev-history-hamiltonian]]: propagation windows have at most three clock bits and each verifier gate touches at most two work qubits.

[F2] [[lem-qa-33-projection-lemma]]: a penalty $J P_{S^\perp}$ changes the least eigenvalue of a Hermitian operator of norm $K$ by at most $K^2/(J-2K)$ when $J>2K$.

[F3] [[lem-qa-33-geometric-soundness-bound]]: the legal-clock Hamiltonian has an inverse-polynomial soundness gap before illegal clocks are penalized.

## Proof

1.1 A binary word has no adjacent occurrence of $01$ exactly when its bits are nonincreasing from left to right: if a zero occurred before a later one, the first subsequent transition from zero to one would be adjacent; conversely a word $1^t0^{T-t}$ has no such transition. Thus the common zero space of all adjacent projectors is spanned by the legal unary words. On a basis word, $H_{clock}$ is diagonal with eigenvalue the number of forbidden adjacent pairs, so every illegal word has eigenvalue at least one. [given, algebra]

2.1 The stated propagation windows contain three clock bits and at most two work bits; each input/output term couples one clock and one work bit, and each clock penalty couples two clock bits, proving the support bounds from [F1]. Let $S$ be the legal-clock subspace. Then $H_{clock}$ vanishes on $S$ and is at least $I$ on $S^\perp$. Applying [F2] with $H_1=H_0$, $H_2=J_{clock}H_{clock}$ gives additive error at most $K^2/(J_{clock}-2K)<g/4$. For polynomial resources choose the integer $J_{clock}=\lfloor2K+4K^2/g\rfloor+1$. It strictly exceeds the threshold and is at most $2K+4K^2/g+1$, hence is polynomially bounded when $K$ and $g^{-1}$ are. The resulting error is strictly below $g/4$, preserving a positive gap at that scale. [F1, F2, F3, step 1.1, algebra] ∎
