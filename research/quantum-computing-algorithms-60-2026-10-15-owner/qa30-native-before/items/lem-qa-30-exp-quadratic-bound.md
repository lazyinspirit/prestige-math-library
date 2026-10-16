---
id: lem-qa-30-exp-quadratic-bound
kind: lemma
title: "Scalar exponential bound for bounded losses"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qa-30-mmw-game
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: pass
---

## Statement

For $0<\eta\le1$ and $x\in[-1,1]$,
$$e^{-\eta x}\le1-\eta x+\eta^2.$$
Consequently, if $M=M^*$ and $-I\preceq M\preceq I$, then $e^{-\eta M}\preceq I-\eta M+\eta^2I$.

## Facts & Assumptions

**Given:** A real $u=-\eta x$ with $|u|\le1$ and finite-dimensional spectral functional calculus for Hermitian matrices.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: Hermitian matrices are unitarily diagonalizable, and scalar functions act on their eigenvalues.

## Proof

**Proof technique:** direct.

1.1 If $u\ge0$, the exponential series gives $e^u=1+u+\sum_{k\ge2}u^k/k!\le1+u+u^2\sum_{k\ge2}1/k!<1+u+u^2$, since $0\le u\le1$ and $\sum_{k\ge2}1/k!<\sum_{k\ge2}2^{-(k-1)}=1$. If $u=-v\le0$ with $0\le v\le1$, the alternating exponential series has decreasing term magnitudes, so $e^{-v}\le1-v+v^2/2\le1-v+v^2$. Thus $e^u\le1+u+u^2$ for either sign. [given, algebra]

2.1 Substitute $u=-\eta x$ and use $|u|\le\eta$ to get $e^{-\eta x}\le1-\eta x+\eta^2x^2\le1-\eta x+\eta^2$. Diagonalize $M$ by [F1]; each eigenvalue $x$ lies in $[-1,1]$, so the scalar inequality on every eigenvalue is precisely the stated Loewner inequality. [given, F1, step 1.1, algebra] ∎
