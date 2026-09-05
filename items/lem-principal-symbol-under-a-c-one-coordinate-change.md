---
id: lem-principal-symbol-under-a-c-one-coordinate-change
kind: lemma
title: "The principal symbol depends only on the first derivative of a smooth coordinate change"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-principal-part-and-principal-symbol-of-a-scalar-pde,
       thm-chain-rule-for-total-derivatives,
       thm-symmetry-of-higher-mixed-partials]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-pde/"
---

## Statement

Let

$$L=\sum_{|\alpha|\le m} a_\alpha(x)D_x^\alpha$$

be a linear scalar differential operator of order $m$, let $x=\Phi(y)$ be a
smooth local coordinate change with smooth inverse, and let $\widetilde L$ be
the operator in the $y$-coordinates defined by
$\widetilde L(v)=L(v\circ\Phi^{-1})\circ\Phi$. Then

$$\widetilde p_m(y,\eta)=p_m\bigl(\Phi(y),D\Phi(y)^{-T}\eta\bigr)$$

for every covector $\eta$, and every derivative of $\Phi$ of order at least $2$
contributes only to lower-order terms of $\widetilde L$.

## Facts & Assumptions

**Given:** An order-$m$ operator $L$, a smooth local diffeomorphism $x=\Phi(y)$,
and the pulled-back unknown $v(y)=u(\Phi(y))$.

[L1] The principal symbol is the homogeneous order-$m$ polynomial formed from
the top-order coefficients of a linear scalar operator
([[def-principal-part-and-principal-symbol-of-a-scalar-pde]]).

[L2] The chain rule differentiates a composite by the derivative of the outer
map applied to the derivative of the inner map
([[thm-chain-rule-for-total-derivatives]]).

[L3] Ordered mixed partial derivatives of the same order agree when the needed
regularity is present ([[thm-symmetry-of-higher-mixed-partials]]).

## Proof

**Proof technique:** direct.

1.1 For a first $y$-derivative, [L2] gives $\partial_{y_j}v(y)=\sum_{i=1}^n \partial_{x_i}u(\Phi(y))\,\partial_{y_j}\Phi_i(y)$, so each differentiation either lands on a derivative of $u$ or on one factor $\partial_{y_j}\Phi_i$. [L2]

2.1 Repeating step 1.1 $m$ times produces a sum of terms, and the only terms containing an order-$m$ derivative of $u$ are those in which every differentiation lands on the $u$-factor; once a differentiation lands on a coefficient $\partial_{y_j}\Phi_i$, the remaining differentiations can raise the order of the $u$-derivative by at most $m-1$, so every derivative of $\Phi$ of order at least $2$ contributes only to lower-order terms of $\widetilde L$. [step 1.1, L2]

3.1 In the top-order part, each application of step 1.1 contributes one factor of the pulled-back covector, and [L3] lets us reorder the $m$ differentiations without changing the result; therefore [L1] identifies the transformed principal symbol as $\widetilde p_m(y,\eta)=p_m(\Phi(y),D\Phi(y)^{-T}\eta)$, which depends only on the first derivative of the coordinate change. [L1, L3, step 2.1] ∎
