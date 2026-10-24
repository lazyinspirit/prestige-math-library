---
id: lem-qa-33-kkr-legal-clock-restriction
kind: lemma
title: KKR restriction to legal unary clocks
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - lem-qa-33-projection-lemma
  - def-qa-33-feynman-kitaev-history-hamiltonian
justified_by: []
proof_strategy: direct
axiom_use: None; the legal-clock kernel and projection estimate are finite-dimensional.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §5, Restriction 1 to legal clocks, PDF pp. 9–12
    - title: "Dorit Aharonov and Tomer Naveh, Quantum NP: A Survey"
      url: https://arxiv.org/pdf/quant-ph/0210077
      locator: §4, unary clock penalty, PDF pp. 15–18
---

## Statement

For $T$ clock qubits let $S_{legal}=\operatorname{span}\{|1^t0^{T-t}\rangle:0\le t\le T\}$ and
$$H_{clock}^{KKR}=\sum_{1\le i<j\le T}I\otimes|01\rangle\langle01|_{C_iC_j}.$$
Its kernel is $S_{legal}$ and every illegal computational-basis clock word has eigenvalue at least one. Let $H_0$ be the sum of the remaining weighted KKR terms, with $K\ge\|H_0\|$, and let $g>0$ be the soundness gap allocated before this restriction. Any integer
$$J_{clock}>2K+4K^2/g$$
makes the projection-lemma error strictly less than $g/4$. The clock penalty is 2-local even though it has $O(T^2)$ summands.

## Facts & Assumptions

**Given:** $T$ unary clock qubits, the remaining KKR Hamiltonian $H_0$, a polynomial norm bound $K$, and inverse-polynomial $g$.

[F1] [[lem-qa-33-projection-lemma]]: a penalty with gap $J$ outside a zero space changes the compressed least eigenvalue by at most $K^2/(J-2K)$ when $J>2K$.

[F2] [[def-qa-33-feynman-kitaev-history-hamiltonian]]: legal unary words are $1^t0^{T-t}$ and each two-qubit clock projector is a 2-local term.

## Proof

1.1 The sum is diagonal in the computational clock basis. It has eigenvalue equal to the number of pairs $i<j$ with bit $i=0$ and bit $j=1$. This number is zero exactly when no zero precedes a one, which is equivalent to a word $1^t0^{T-t}$; every other word has at least one such pair and hence eigenvalue at least one. Thus its zero space and gap are as stated. [given, F2, algebra]

2.1 Apply [F1] with $S=S_{legal}$, $H_1=H_0$ and $H_2=J_{clock}H_{clock}^{KKR}$. The spectral penalty on $S^\perp$ is at least $J_{clock}$, while it vanishes on $S$. The chosen strict bound gives $J_{clock}-2K>4K^2/g$, and so the correction $K^2/(J_{clock}-2K)<g/4$. For polynomial resource bounds, choose specifically $J_{clock}=\lfloor2K+4K^2/g\rfloor+1$, using a supplied rational norm bound $K$. This is strictly above the threshold and at most $2K+4K^2/g+1$. If $K$ and $1/g$ are polynomially bounded and their encodings have polynomial length, this choice has polynomial magnitude and bit length, and the $O(T^2)$ term list has polynomial size; no size bound is claimed for arbitrary larger admissible integers. [F1, step 1.1, algebra] ∎
