---
id: alg-qc-two-level-unitary-elimination
kind: algorithm
title: Exact Two-Level Elimination of a Unitary
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qc-two-level-unitary
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification: {}
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---

## Definition

Input: an exact-arithmetic representation of $U\in U(N)$, $N\ge1$, supporting addition, multiplication, conjugation, nonnegative square roots, exact zero tests, and exact division by nonzero positive real scalars. Output: a finite ordered factorization into two-level unitaries and a diagonal unitary. This is an exact algebraic procedure; no claim of a bit-time algorithm for arbitrary real input is made.

Initialize $M:=U$ and an empty chronological list. For each column $j=0,\ldots,N-2$, and for $r=N-1,N-2,\ldots,j+1$, set $a=M_{r-1,j}$ and $b=M_{r,j}$. If $b=0$, do nothing. Otherwise set $h=\sqrt{|a|^2+|b|^2}>0$ and left-multiply rows $(r-1,r)$ by
$$G=\frac1h\begin{pmatrix}\overline a&\overline b\\-b&a\end{pmatrix},$$
recording this two-level unitary in the order applied. Let the resulting matrix be $D$. Return the factorization $U=G_1^*\cdots G_s^*D$. In chronological circuit order, apply $D$ first and then $G_s^*,\ldots,G_1^*$.
