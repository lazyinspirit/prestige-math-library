---
id: lem-piecewise-linear-delay-history-error
kind: lemma
title: "Error bound for piecewise-linear stored delay histories"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-retarded-delay-equation-and-history-space
  - alg-retarded-delay-euler-with-stored-history
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Statement

Let $h=\tau/m$ with integer $m\ge1$, and let the mesh nodes cover a finite
interval containing $[-\tau,T]$, with every delay breakpoint $k\tau$ a mesh
node. Suppose $y$ is continuous and each restriction to a mesh cell is $C^2$
(with one-sided derivatives at its endpoints), with $M\ge0$ and
$\|y''(t)\|_2\le M$ on every cell interior. Let the stored nodal values $Y_j$
satisfy $\|Y_j-y(t_j)\|_2\le E$ and let $\widehat y_h$ be their piecewise-linear
interpolant as in [[alg-retarded-delay-euler-with-stored-history]]. Then
$$\sup_t\|\widehat y_h(t)-y(t)\|_2\le E+\frac{Mh^2}{8}.$$

## Facts & Assumptions

**Given:** A grid-aligned piecewise $C^2$ vector path, its nodal approximations, and the piecewise-linear interpolant.

[F1] The stored history is the linear interpolant of consecutive nodal values on every history and solution cell ([[alg-retarded-delay-euler-with-stored-history]]).

[F2] If a vector function has integrable derivative, its increment is the integral of that derivative ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F3] The Euclidean norm of an integral is at most the integral of the Euclidean norm ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[F4] The grid uses $h=\tau/m$, so every breakpoint $k\tau$ is a mesh node ([[alg-retarded-delay-euler-with-stored-history]]).

[F5] The Euclidean norm satisfies the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

1.1 Fix a cell $[a,b]$ of length $h$ and $t\in[a,b]$. Set $\lambda=(t-a)/h$ and let $I_hy(t)=(1-\lambda)y(a)+\lambda y(b)$ interpolate the exact endpoints. By [F1], $\widehat y_h(t)=(1-\lambda)Y_a+\lambda Y_b$, so the nodal error bound and [F5] give $\|\widehat y_h(t)-I_hy(t)\|_2\le(1-\lambda)E+\lambda E=E$. [given, F1, F5, algebra]

1.2 Applying [F2] twice and using [F3] with $\|y''\|_2\le M$ gives Taylor remainders $R_a,R_b$ about $t$ satisfying $y(a)=y(t)+(a-t)y'(t)+R_a$, $y(b)=y(t)+(b-t)y'(t)+R_b$, $\|R_a\|_2\le M(t-a)^2/2$, and $\|R_b\|_2\le M(b-t)^2/2$. [F2, F3, F4, given]

2.1 In $(1-\lambda)y(a)+\lambda y(b)$ the terms involving $y'(t)$ cancel because $(1-\lambda)(a-t)+\lambda(b-t)=0$. Hence [F5] gives $\|I_hy(t)-y(t)\|_2\le\frac M2((1-\lambda)\lambda^2+\lambda(1-\lambda)^2)h^2=\frac M2\lambda(1-\lambda)h^2\le Mh^2/8$. [step 1.2, F5, algebra]

3.1 By [F4], every delay breakpoint is a mesh node, so no cellwise estimate straddles a breakpoint. The triangle inequality [F5] combines steps 1.1 and 2.1 to give $\|\widehat y_h(t)-y(t)\|_2\le E+Mh^2/8$ on each cell, and taking the supremum proves the claim. [F4, F5, step 1.1, step 2.1, algebra] ∎

