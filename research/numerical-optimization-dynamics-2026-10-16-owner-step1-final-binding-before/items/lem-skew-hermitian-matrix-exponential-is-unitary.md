---
id: lem-skew-hermitian-matrix-exponential-is-unitary
kind: lemma
title: A skew-Hermitian matrix exponential is unitary
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-matrix-product-and-identity-matrix
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - lem-exponential-series-of-a-bounded-operator
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§3, highly oscillatory problems with purely imaginary eigenvalues, PDF pp. 30–42, printed pp. 244–256."
    - title: "ISEM Team 2011/12, Operator Semigroups for Numerical Analysis, 15th Internet Seminar on Evolution Equations"
      url: "https://fan.uni-wuppertal.de/fileadmin/mathe/reine_mathematik/funktionalanalysis/farkas/15ISEM-NumerSgrp.pdf"
      locator: "Lecture 14, §14.4 and the discussion of oscillatory evolution, PDF pp. 166–168, printed pp. 171–173."
---

## Statement

Let $d\ge1$, $A\in M_d(\mathbb C)$, and $A^*=-A$. Then for every $t\in\mathbb R$,
$$(e^{tA})^*e^{tA}=I_d.$$
Thus $e^{tA}$ is unitary and preserves the Euclidean norm.

## Facts & Assumptions

**Given:** A finite complex matrix $A$ with $A^*=-A$ and the matrix exponential $U(t):=e^{tA}$.

[F1] [[lem-exponential-series-of-a-bounded-operator]]: $U(0)=I_d$ and $U'(t)=AU(t)$.

[F2] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: the adjoint of a matrix is its conjugate transpose and $(BC)^*=C^*B^*$.

[F3] [[thm-algebra-of-derivatives]]: entrywise conjugation commutes with differentiation in real time, and finite matrix products along a real parameter obey the product rule.

[F4] [[cor-mean-value-theorem]]: a real-valued function with zero derivative on an interval is constant there.

[F5] [[def-inner-product-norm]] and [[prop-standard-coordinate-inner-products]]: the complex Euclidean norm satisfies $\|v\|_2^2=v^*v$.

[F6] [[def-matrix-product-and-identity-matrix]]: matrix multiplication and $I_d$ have their standard coordinate meanings.

## Proof

1.1 By [F1], $U'(t)=AU(t)$. Taking conjugate transposes entrywise and using [F2], [F3], and $A^*=-A$ gives $(U(t)^*)'=U(t)^*A^*=-U(t)^*A$. [given, F1, F2, F3, algebra]

2.1 Apply the product rule [F3] to $U(t)^*U(t)$; its derivative is $-U(t)^*AU(t)+U(t)^*AU(t)=0$. [step 1.1, F1, F3, algebra]

3.1 Each real and imaginary coordinate of $U(t)^*U(t)$ has zero derivative, so [F4] makes every coordinate constant. Evaluating at $t=0$ with [F1] and [F6] gives $U(t)^*U(t)=I_d$ for all $t$. By [F5] and matrix multiplication, $\|U(t)v\|_2^2=(U(t)v)^*U(t)v=v^*U(t)^*U(t)v=v^*v=\|v\|_2^2$. [step 2.1, F1, F4, F5, F6, algebra] ∎
