---
id: lem-exponential-euler-local-defect
kind: lemma
title: Exponential Euler has a second-order local defect
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-exponential-euler-and-etd2-step-maps
  - lem-finite-matrix-semilinear-variation-of-constants
  - lem-exponential-phi-integral-representations
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-complex-numbers-are-the-real-coordinate-plane
  - def-bounded-linear-operator
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-exponential-series-of-a-bounded-operator
  - thm-dedekind-complete
  - thm-exponential-is-strictly-increasing
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
      locator: "§2.2, Theorem 2.14 and equations (2.29)–(2.34), PDF pp. 14–16, printed pp. 223–225."
    - title: "ISEM Team 2011/12, Operator Semigroups for Numerical Analysis, 15th Internet Seminar on Evolution Equations"
      url: "https://fan.uni-wuppertal.de/fileadmin/mathe/reine_mathematik/funktionalanalysis/farkas/15ISEM-NumerSgrp.pdf"
      locator: "Lecture 14, §14.4 and Theorem 14.11, PDF pp. 166–168, printed pp. 171–173."
---

## Statement

In the finite-matrix setting of [[def-exponential-euler-and-etd2-step-maps]], let $0\le t<t+h\le T$ and let $y$ solve $y'=Ay+g(r,y(r))$ on $[t,t+h]$, with admissible states and stages. Put $q(r):=g(r,y(r))$. Suppose $q$ is continuously differentiable with $\sup_{t\le r\le t+h}\|q'(r)\|_2\le Q_1$, and let $K_+:=\sup_{0\le s\le T}\|e^{sA}\|_2$. Then the exact-start local defect of the exponential Euler map satisfies
$$\|\Psi^E_h(t,y(t))-y(t+h)\|_2\le \frac{K_+Q_1}{2}h^2.$$

## Facts & Assumptions

**Given:** The exact semilinear solution, its forcing curve $q$, the finite matrix, and the bounds in the Statement.

[F1] [[lem-finite-matrix-semilinear-variation-of-constants]]: $y(t+h)=e^{hA}y(t)+\int_0^h e^{(h-s)A}q(t+s)\,ds$.

[F2] [[def-exponential-euler-and-etd2-step-maps]]: $\Psi^E_h(t,y(t))=e^{hA}y(t)+h\varphi_1(hA)q(t)$.

[F3] [[lem-exponential-phi-integral-representations]]: $h\varphi_1(hA)q(t)=\int_0^h e^{(h-s)A}q(t)\,ds$.

[F4] [[cor-vector-valued-ftc-and-lipschitz-bound]]: a continuously differentiable vector curve with derivative norm bounded by $Q_1$ is $Q_1$-Lipschitz on its closed interval, including its endpoints.

[F5] [[def-inner-product-norm]], [[prop-standard-coordinate-inner-products]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], and [[thm-norm-inequality-for-the-vector-valued-integral]]: the induced Euclidean matrix norm bounds its action on vectors, and $\|\int v\|_2\le\int\|v\|_2$.

[A1] The forcing derivative obeys the stated bound $Q_1$, and $\|e^{sA}\|_2\le K_+$ for $0\le s\le h$.

[F6] [[def-bounded-linear-operator]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[cor-finite-dimensional-normed-spaces-are-banach]], and [[lem-exponential-series-of-a-bounded-operator]]: for finite $A$ on $\mathbb C^d$, $\|e^{sA}\|_2\le e^{|s|\|A\|_2}$. For $0\le s\le T$, nonnegativity of $\|A\|_2$ gives $s\|A\|_2\le T\|A\|_2$, so scalar exponential monotonicity ([[thm-exponential-is-strictly-increasing]]) gives $e^{s\|A\|_2}\le e^{T\|A\|_2}$. The set defining $K_+$ contains $\|I_d\|_2$ at $s=0$ and is therefore bounded above by $e^{T\|A\|_2}$; completeness of $\mathbb R$ ([[thm-dedekind-complete]]) supplies its finite supremum.

[F7] [[thm-complex-numbers-are-the-real-coordinate-plane]], [[prop-standard-coordinate-inner-products]], and [[def-inner-product-norm]]: for $v=(v_0,\ldots,v_{d-1})$, $\Phi_d(v):=(\operatorname{Re}v_0,\operatorname{Im}v_0,\ldots,\operatorname{Re}v_{d-1},\operatorname{Im}v_{d-1})$ is real-linear and satisfies $\|\Phi_d(v)\|_{\mathbb R^{2d}}^2=\sum_{j<d}|v_j|^2=\|v\|_2^2$. It maps real-time difference quotients to realified difference quotients and preserves their limits, so $q$ and its derivative are legitimate real vector data for [F4] with the same norm bound.

## Proof

1.1 By [F6], $K_+$ is finite. Subtract [F1] from [F2] and replace the constant forcing term by its integral form [F3]. The local defect is $\int_0^h e^{(h-s)A}(q(t)-q(t+s))\,ds$. [F1, F2, F3, F6, algebra]

2.1 By [F4], [F7], and [A1], $\|q(t+s)-q(t)\|_2\le Q_1s$. The semigroup factor has norm at most $K_+$; [F5] bounds the norm of step 1.1 by $K_+Q_1\int_0^h s\,ds=K_+Q_1h^2/2$. [F4, F5, F7, A1, step 1.1, algebra] ∎
