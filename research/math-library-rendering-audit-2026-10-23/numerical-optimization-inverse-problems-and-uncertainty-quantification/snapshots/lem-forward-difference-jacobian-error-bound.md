---
id: lem-forward-difference-jacobian-error-bound
kind: lemma
title: "Forward-difference Jacobian error bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - alg-forward-difference-jacobian
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3, printed pp. 140–141 / PDF pp. 6–7: forward finite-difference Jacobian formula and truncation error"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2: system Jacobian in the Newton linear model"
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let each component
$F_j:U\to\mathbb R$, $j<n$, be $C^2$ (twice continuously differentiable). Fix
$x\in U$ and increments $h=(h_0,\ldots,h_{n-1})\in\mathbb R^n$ with $h_i\ne0$
for every $i<n$. For each $i<n$, suppose an open interval
$I_i\subseteq\mathbb R$ contains $[0,1]$ and $x+t h_i e_i\in U$ for every
$t\in I_i$. Suppose finite constants $M_{ij}\ge0$ satisfy
$$|\partial_{ii}F_j(x+t h_i e_i)|\le M_{ij}\qquad(0\le t\le1,\ j<n).$$
Put $M_i:=(\sum_{j<n}M_{ij}^2)^{1/2}$ and $M:=\max_{i<n}M_i$.
Let $J_hF(x)$ be the forward-difference matrix of
[[alg-forward-difference-jacobian]], let $J_F(x)$ be the Jacobian matrix of
[[def-jacobian-matrix-and-gradient]]. With the
Euclidean operator norm on matrices,
$$\|J_hF(x)-J_F(x)\|_{\rm op}\le\frac M2\|h\|_2.$$

## Facts & Assumptions

**Given:** The open domain, $C^2$ components, point $x$, coordinate increments,
intervals $I_i$, and second-partial bounds $M_{ij}$ from the Statement.

[F1] [[alg-forward-difference-jacobian]]: for $i<n$, column $i$ of $J_hF(x)$ is $[F(x+h_i e_i)-F(x)]/h_i$, when $h_i\ne0$ and the sample is in $U$.

[F2] [[def-jacobian-matrix-and-gradient]]: for $i,j<n$, the Jacobian entries are $\partial_iF_j(x)$.

[F3] [[thm-total-derivative-computes-directional-and-partial-derivatives]]: the matrix of $DF$ in the standard basis is the Jacobian matrix.

[F4] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition with an affine line is the total derivative applied to the line direction.

[F5] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: for a scalar $C^2$ function on an open interval, its order-one Taylor expansion on $[0,1]$ has a second-order Lagrange remainder at some point in $(0,1)$.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\sum_i a_i b_i|\le(\sum_i a_i^2)^{1/2}(\sum_i b_i^2)^{1/2}$.

[F7] [[thm-continuous-partial-derivatives-imply-total-differentiability]]: continuous first partial derivatives give a total derivative with the coordinate Jacobian matrix. Applied to each $F_j$ and each first partial of $F_j$, the componentwise $C^2$ hypotheses give the total differentiability needed below; continuity of the derivative entries makes $F$ a $C^1$ map admissible for [F1].

## Proof

**Given:** The data in the Statement.

1.1 By [F7], the $C^2$ components and their first partials have the total derivatives needed for the chain rule, and $F$ is admissible for [F1]. For each input coordinate $i<n$ and output component $j<n$, put $g_{ij}(t):=F_j(x+t h_i e_i)$ on $I_i$. The chain rule [F4] and Jacobian identification [F3] give $g_{ij}'(t)=h_i\partial_iF_j(x+t h_i e_i)$ and $g_{ij}''(t)=h_i^2\partial_{ii}F_j(x+t h_i e_i)$. Taylor's theorem [F5] between $0$ and $1$ supplies $\theta_{ij}\in(0,1)$ with $F_j(x+h_i e_i)-F_j(x)=h_i\partial_iF_j(x)+\frac{h_i^2}{2}\partial_{ii}F_j(x+\theta_{ij}h_i e_i)$. The points $\theta_{ij}$ may differ between components. [given, F3, F4, F5, F7, choose]

2.1 Divide by the nonzero $h_i$. In column $i$, output coordinate $j$ has error at most $M_{ij}|h_i|/2$; hence the Euclidean column error is at most $M_i|h_i|/2$, even though the remainder points $\theta_{ij}$ may differ. [step 1.1, F1, F2, given, algebra]

3.1 For a unit vector $v$, the triangle inequality and [F6] give $\|(J_hF(x)-J_F(x))v\|_2\le\sum_{i<n}|v_i|\|(J_hF(x)-J_F(x))e_i\|_2\le\frac12(\sum_{i<n}v_i^2)^{1/2}(\sum_{i<n}M_i^2h_i^2)^{1/2}\le\frac M2\|h\|_2$. Taking the supremum over unit $v$ proves the operator-norm bound. [step 2.1, F6, algebra] ∎
