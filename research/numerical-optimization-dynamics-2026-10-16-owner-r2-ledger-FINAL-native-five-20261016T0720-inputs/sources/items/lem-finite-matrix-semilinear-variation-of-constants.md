---
id: lem-finite-matrix-semilinear-variation-of-constants
kind: lemma
title: Variation of constants for a finite-matrix semilinear system
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-bounded-linear-operator
  - def-matrix-product-and-identity-matrix
  - def-operator-norm
  - def-inner-product-norm
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-algebra-of-derivatives
  - thm-linearity-of-the-integral
  - def-first-order-ode-initial-value-problem-and-solution
  - def-vector-valued-derivative-and-integral
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-exponential-series-of-a-bounded-operator
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-continuous-implies-integrable
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010), §1"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§1, equations (1.5)–(1.6), PDF pp. 3–4, printed pp. 212–213."
    - title: "ISEM Team 2011/12, Operator Semigroups for Numerical Analysis, 15th Internet Seminar on Evolution Equations"
      url: "https://fan.uni-wuppertal.de/fileadmin/mathe/reine_mathematik/funktionalanalysis/farkas/15ISEM-NumerSgrp.pdf"
      locator: "Lecture 14, §14.4, equation (14.12), PDF pp. 166–167, printed pp. 171–172."
---

## Statement

Let $d\ge1$, $A\in M_d(\mathbb C)$, $0\le s\le t\le T$, and let $D\subseteq\mathbb R\times\mathbb C^d$ be open after identifying $\mathbb C^d$ with $\mathbb R^{2d}$. Let $g:D\to\mathbb C^d$ and let $y:[s,t]\to\mathbb C^d$ be a continuously differentiable solution of the first-order system
$$y'(r)=Ay(r)+g(r,y(r)),$$
where $r\mapsto g(r,y(r))$ is continuous. With the vector integral taken componentwise after identifying $\mathbb C^d$ with $\mathbb R^{2d}$,
$$y(t)=e^{(t-s)A}y(s)+\int_s^t e^{(t-r)A}g(r,y(r))\,dr.$$

## Facts & Assumptions

**Given:** The finite matrix, interval, curve, and semilinear differential equation in the Statement.

[F1] [[def-first-order-ode-initial-value-problem-and-solution]]: a solution is differentiable and satisfies its differential equation at every time in its interval.

[F2] [[def-bounded-linear-operator]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], and [[cor-finite-dimensional-normed-spaces-are-banach]]: a finite matrix is a bounded operator on the complete finite-dimensional space $\mathbb C^d$, so [[lem-exponential-series-of-a-bounded-operator]] applies and gives $(e^{rA})'=Ae^{rA}=e^{rA}A$ and $e^{rA}e^{qA}=e^{(r+q)A}$.

[F3] [[def-vector-valued-derivative-and-integral]]: a curve in $\mathbb C^d$ and its integral are interpreted coordinatewise in the real vector space $\mathbb R^{2d}$.

[F4] [[thm-continuous-implies-integrable]]: every continuous real coordinate of a finite-dimensional vector curve on a closed bounded interval is integrable.

[F5] [[cor-vector-valued-ftc-and-lipschitz-bound]]: for a differentiable finite-dimensional real vector curve with integrable derivative, $z(t)-z(s)=\int_s^t z'(r)\,dr$.

[F6] [[def-matrix-product-and-identity-matrix]] and [[thm-algebra-of-derivatives]]: matrix multiplication is a finite sum of scalar products, so its derivative obeys the product rule.

[F7] [[thm-linearity-of-the-integral]]: a fixed finite-dimensional linear map commutes with componentwise vector integration.

## Proof

1.1 Regard $\mathbb C^d$ as $\mathbb R^{2d}$, so the equation in the Statement is a real first-order system to which [F1] applies. Put $z(r):=e^{-rA}y(r)$. By the product rule [F6], [F1], and [F2], $z'(r)=-Ae^{-rA}y(r)+e^{-rA}(Ay(r)+g(r,y(r)))=e^{-rA}g(r,y(r))$, since $A$ commutes with every power in the series for $e^{-rA}$. [given, F1, F2, F6, algebra]

2.1 The derivative in step 1.1 is continuous because the exponential and $g(r,y(r))$ are continuous. Thus [F3]–[F4] make it integrable componentwise, and [F5] gives $e^{-tA}y(t)-e^{-sA}y(s)=\int_s^t e^{-rA}g(r,y(r))\,dr$. [step 1.1, F3, F4, F5]

3.1 Multiply the last identity by $e^{tA}$. By [F7], this fixed linear map commutes with the componentwise integral, and [F2] gives $e^{tA}e^{-sA}=e^{(t-s)A}$ and $e^{tA}e^{-rA}=e^{(t-r)A}$. Rearranging yields the claimed formula. [step 2.1, F2, F7, algebra] ∎
