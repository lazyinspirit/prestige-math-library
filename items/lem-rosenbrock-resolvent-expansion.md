---
id: lem-rosenbrock-resolvent-expansion
kind: lemma
title: Inverse and first-order expansion of a Rosenbrock stage matrix
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ralf Kornhuber, Notes on Numerical Methods for ODEs and Numerical Linear Algebra, §1.8, pp. 33–37"
      url: "https://numerik.mi.fu-berlin.de/wiki/WS_2021/NumericsII_Dokumente/NumericsIIKornhuber_rev5.pdf"
    - title: "Peter Benner and Hermann Mena, Rosenbrock methods for solving differential Riccati equations, §II, pp. 2–4"
      url: "https://cscproxy.mpi-magdeburg.mpg.de/preprints/2011/MPIMD11-06.pdf"
---

## Statement

Let $A\in\mathbb R^{d\times d}$, $h\ge0$, and use the induced Euclidean operator norm. If $q:=h\|A\|<1$, then $M:=I-hA$ is invertible and
$$
\|M^{-1}\|\le\frac1{1-q},\qquad \|M^{-1}-I-hA\|\le\frac{q^2}{1-q}.
$$

## Facts & Assumptions

**Given:** A real square matrix $A$, a number $h\ge0$, and $h\|A\|<1$.

[A1] The Euclidean operator norm is submultiplicative: $\|BC\|\le\|B\|\|C\|$ for composable matrices.

## Proof

1.1 For each integer $m\ge0$, define $S_m=\sum_{j=0}^m(hA)^j$. Multiplication gives $(I-hA)S_m=S_m(I-hA)=I-(hA)^{m+1}$. Since $\|(hA)^{m+1}\|\le q^{m+1}\to0$, the series $\sum_{j\ge0}(hA)^j$ converges in the finite-dimensional matrix space and its sum is a two-sided inverse of $M$. [given, A1, construct]

1.2 The geometric norm sum gives $\|M^{-1}\|\le\sum_{j\ge0}q^j=(1-q)^{-1}$. Removing the terms $I+hA$ leaves $\sum_{j\ge2}(hA)^j$, whose norm is at most $\sum_{j\ge2}q^j=q^2/(1-q)$. [step 1.1, A1, algebra] ∎
