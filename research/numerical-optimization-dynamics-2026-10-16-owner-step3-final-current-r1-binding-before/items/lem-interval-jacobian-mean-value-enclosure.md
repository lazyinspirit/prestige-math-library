---
id: lem-interval-jacobian-mean-value-enclosure
kind: lemma
title: An interval Jacobian encloses a vector mean-value matrix
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-real-boxes-and-interval-jacobian-enclosures
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - def-intervals-rectangles-and-complex-balls
  - lem-mean-value-theorem-on-closed-interval
  - def-total-derivative-in-euclidean-space
  - thm-chain-rule-for-total-derivatives
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - thm-total-differentiability-gives-a-local-linear-bound-and-continuity
verification:
  precheck: pass
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), Theorem 13.1"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, §2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Statement

Let $U\subseteq\mathbb R^n$ be open and convex, let $X\subset U$ be a real box, and let $F:U\to\mathbb R^n$ be $C^1$. Let $J(X)$ be an interval Jacobian enclosure. For any $x,y\in X$, there is a point matrix $A\in\mathcal J(X)$ such that
$$
F(x)-F(y)=A(x-y).
$$
The rows of $A$ may come from different intermediate points; the claim does not assert one common Jacobian value.

## Facts & Assumptions

**Given:** $U,X,F,J(X),x,y$ as in the Statement.

[F1] A $C^1$ map is totally differentiable on its open domain ([[def-c-one-map-and-local-inverse]]), and total differentiability gives continuity ([[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

[F2] The chain rule computes the derivative of a composition with an affine line ([[thm-chain-rule-for-total-derivatives]]).

[F3] A total derivative computes directional derivatives, and its matrix is the Jacobian ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[F4] A real function continuous on $[a,b]$ and differentiable on $(a,b)$ satisfies the mean value theorem ([[lem-mean-value-theorem-on-closed-interval]]).

[F5] Each interval-Jacobian entry contains the corresponding partial derivative at every point of $X$ ([[def-real-boxes-and-interval-jacobian-enclosures]]).

## Proof

1.1 Use coordinate indices $0\le i,j<n$, as for the Jacobian. Fix a row index $i$ and define $\phi_i(t)=F_i(y+t(x-y))$ on $[0,1]$. For $0\le t\le1$ and every coordinate $j$, both $x_j,y_j\in[a_j,b_j]$ imply $(1-t)y_j+tx_j\in[a_j,b_j]$. Thus the product box $X$ is convex and the segment stays in $X\subset U$. By [F1], $F_i$ is continuous there; by [F2] and [F3], $\phi_i$ is differentiable on $(0,1)$ with $\phi_i'(t)=\sum_{j=0}^{n-1}\partial_jF_i(y+t(x-y))(x_j-y_j)$. [given, F1, F2, F3, construct]

2.1 Apply [F4] to $\phi_i$ to obtain $t_i\in(0,1)$ with $F_i(x)-F_i(y)=\sum_{j=0}^{n-1}\partial_jF_i(z_i)(x_j-y_j)$, where $z_i=y+t_i(x-y)\in X$. [step 1.1, F4, construct]

3.1 For each of the finitely many rows choose the point $z_i$ from step 2.1 and form $A$ whose $i$th row is $\nabla F_i(z_i)$. By [F5], every entry $A_{ij}$ lies in $J_{ij}(X)$, so $A\in\mathcal J(X)$; the row identities in step 2.1 give $F(x)-F(y)=A(x-y)$. This uses only finite choice. [step 2.1, F5, choose, algebra] ∎
