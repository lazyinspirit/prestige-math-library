---
id: lem-involutive-frame-reduction
kind: lemma
title: "An involutive local frame can be reduced to one field plus commuting transverse fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-involutivity-can-be-checked-on-a-local-frame,
       thm-flow-box-theorem,
       cor-diffeomorphism-pushforward-preserves-lie-brackets,
       prop-leibniz-rules-for-the-lie-bracket-with-function-multiples,
       prop-sections-of-a-distribution-form-a-locally-free-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $\mathcal D$ be an involutive rank-$k$ distribution on $M$, and let
$X_1,\dots,X_k$ be a local frame near $p$ with $X_1(p) \neq 0$. Then, after
shrinking the neighborhood, there exist local sections
$Y_2,\dots,Y_k \in \Gamma(\mathcal D)$ such that

1. $X_1,Y_2,\dots,Y_k$ is a local frame of $\mathcal D$, and
2. each $Y_j$ is tangent to the flow-box slices for $X_1$, and
3. $[X_1,Y_j] = 0$ for $j = 2,\dots,k$.

## Facts & Assumptions

**Given:** An involutive rank-$k$ distribution $\mathcal D$ and a local frame $X_1,\dots,X_k$ near $p$ with $X_1(p) \neq 0$.

[A1] Shrink to a flow-box neighborhood for $X_1$.

## Proof

**Proof technique:** direct.

1.1 By the flow-box theorem there are local coordinates [given] $(t,u^2,\dots,u^n)$ centered at $p$ in which $X_1 = \partial_t$. Shrinking if necessary, write $$X_j = a_j\partial_t + \sum_{m=2}^n b_{jm}\partial_{u^m}\qquad (2 \leq j \leq k)$$ and define $$Z_j := X_j - a_jX_1 = \sum_{m=2}^n b_{jm}\partial_{u^m}.$$ Then each $Z_j$ is tangent to $\mathcal D$, has no $\partial_t$-component, and $X_1,Z_2,\dots,Z_k$ still form a local frame of $\mathcal D$. [given, construct]

1.2 Because $\mathcal D$ is involutive, each bracket $[X_1,Z_j]$ is tangent to [given] $\mathcal D$. It also has no $\partial_t$-component, since $X_1=\partial_t$ and $Z_j$ has none. Therefore there are smooth functions $c_{j\ell}$ such that $$[X_1,Z_j] = \sum_{\ell=2}^k c_{j\ell}Z_\ell\qquad (2 \leq j \leq k).$$ For each fixed transverse coordinate, solve the matrix ODE $$\partial_t B = -C^TB,\qquad B(0,u)=I_{k-1},$$ where $C=(c_{j\ell})$. After shrinking again, the solution matrix $B$ is smooth and invertible. [given, construct]

1.3 For $j=2,\dots,k$, set $Y_j := \sum_{\ell=2}^k B_{\ell j}Z_\ell$. Because [given] the $Y_j$ are invertible linear combinations of $Z_2,\dots,Z_k$, the fields $X_1,Y_2,\dots,Y_k$ form a local frame of $\mathcal D$. Using the Leibniz rule for brackets with function coefficients and the differential equation for $B$, one gets $$[X_1,Y_j] = \sum_{\ell=2}^k (\partial_t B_{\ell j})Z_\ell + \sum_{\ell=2}^k B_{\ell j}[X_1,Z_\ell] = 0.$$ Hence each $Y_j$ commutes with $X_1$. [given, algebra]

2.1 Therefore, after shrinking the neighborhood, there is a local frame [given] $X_1,Y_2,\dots,Y_k$ of $\mathcal D$ with $[X_1,Y_j]=0$ for all $j\geq 2$. [given] ∎
