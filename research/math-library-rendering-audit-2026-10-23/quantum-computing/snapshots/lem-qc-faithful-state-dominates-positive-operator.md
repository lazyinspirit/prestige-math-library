---
id: lem-qc-faithful-state-dominates-positive-operator
kind: lemma
title: "Faithful State Dominates Positive Operator"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps: ["def-qc-density-operator", "def-non-negative-and-positive-operator", "thm-non-negative-operator-characterisations", "thm-non-negative-square-root-exists-and-is-unique"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§2.1.2–2.1.3, positive operators and supports; finite domination is proved locally."
---

## Statement

Let $H$ be finite-dimensional, let $\sigma$ be a density operator that is positive definite on $H$, and let $X$ be a non-negative endomorphism of $H$. Then there is a finite real $c\ge0$ such that $X\le c\sigma$.

## Facts & Assumptions

**Given:** A finite-dimensional complex inner-product space $H$, a faithful density operator $\sigma$, and $X\ge0$.

[F1] A density operator is non-negative; faithfulness on $H$ means its restriction to $H$ is positive definite ([[def-qc-density-operator]]). This current draft definition is present, but its declared existence supplier remains unresolved.

[F2] A non-negative operator has an orthonormal eigenbasis with nonnegative eigenvalues; positive definiteness makes every eigenvalue strictly positive ([[thm-non-negative-operator-characterisations]], [[def-non-negative-and-positive-operator]]).

[F3] Non-negativity is characterized by nonnegative quadratic forms, so $Y\ge0$ means $\langle Yv,v\rangle\ge0$ for every $v$ ([[def-non-negative-and-positive-operator]]).

## Proof


1.1 Diagonalize $X$ and let $M\ge0$ be its largest eigenvalue; if $X=0$, take $M=0$. Diagonalize $\sigma$ and let $m>0$ be its smallest eigenvalue, which is positive by faithfulness and [F2]. For every $v\in H$, these spectral bounds give $\langle Xv,v\rangle\le M\|v\|^2$ and $\langle\sigma v,v\rangle\ge m\|v\|^2$. [given, F1, F2, choose]

2.1 Set $c=M/m$. Then $c$ is finite and nonnegative, and for every $v$ step 1.1 gives $\langle(c\sigma-X)v,v\rangle\ge (cm-M)\|v\|^2=0$. By [F3], $c\sigma-X\ge0$, which is exactly $X\le c\sigma$. This also covers $X=0$ with $c=0$. [step 1.1, F3, algebra] ∎

