---
id: thm-isogeometric-poisson-galerkin-quasioptimality
kind: theorem
title: Exact-geometry isogeometric Poisson Galerkin estimate
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-isogeometric-galerkin-patch-space-and-refinement
  - lem-matching-nurbs-patch-traces-give-h1-conformity
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - lem-w-one-two-is-a-hilbert-space
  - lem-na-homogeneous-dirichlet-poincare
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 26, Basic error analysis"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap26.pdf"
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://d-nb.info/1278950273/34"
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^d$, $d\in\{2,3\}$, be bounded, connected, and Lipschitz, and let $V=H^1_0(D;\mathbb R)$ with norm $\|v\|_V=\|\nabla v\|_{L^2(D)}$. Let $A:D\to\mathbb R^{d\times d}$ be measurable and symmetric, with constants $0<\alpha\le\beta<\infty$ such that
$$\zeta\cdot A(x)\zeta\ge\alpha|\zeta|^2\quad\text{and}\quad\|A(x)\|_{\rm op}\le\beta\quad\text{for a.e. }x\in D,\ \zeta\in\mathbb R^d.$$
For $f\in V'$, define $a(u,v)=\int_D A\nabla u\cdot\nabla v$ and $F(v)=f(v)$. Let $V_h\subset V$ be any finite conforming isogeometric subspace on the exact admissible patch geometry. Then the weak problem and its Galerkin restriction have unique solutions $u$ and $u_h$, and
$$\|u-u_h\|_V\le\frac{\beta}{\alpha}\inf_{v_h\in V_h}\|u-v_h\|_V.$$
This is an exact-form estimate; it makes no assertion about approximate geometry, quadrature, polynomial-degree-independent constants, or a rate without a separate numerator approximation theorem.

## Facts & Assumptions

**Given:** Countable Choice; the bounded Lipschitz domain and scalar Sobolev space above; measurable symmetric coefficient $A$ with the stated bounds; $f\in V'$; and finite conforming isogeometric $V_h\subset V$.

[A1] [[def-countable-choice]] is used through the Hilbert-space and Céa suppliers in [F3]--[F4]; no stronger choice principle is required by this application.

[F1] [[def-isogeometric-galerkin-patch-space-and-refinement]]: the exact-geometry global trial space is finite dimensional, and its homogeneous-Dirichlet version is by definition a subspace of $H^1_0(D)$.

[F2] [[lem-matching-nurbs-patch-traces-give-h1-conformity]] proves global $H^1$ membership from matching full-face traces for the piecewise smooth fields used to construct multipatch spaces.

[F3] [[lem-w-one-two-is-a-hilbert-space]] and [[def-wkp-zero-as-a-sobolev-closure]]: $H^1_0(D)$ is closed in the $H^1$ Hilbert space under Countable Choice. The bounded-domain Poincaré inequality [[lem-na-homogeneous-dirichlet-poincare]] makes $\|\nabla\cdot\|_2$ an equivalent Hilbert norm.

[F4] [[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]] under Countable Choice: for a Hilbert space, a bounded form constant $M$, coercivity constant $\alpha_0>0$, bounded data, and a finite-dimensional subspace, the continuous and discrete solutions are unique and the error is at most $(M/\alpha_0)$ times best approximation.

## Proof

1.1 The operator bound on $A$ and Cauchy--Schwarz give $|a(v,w)|\le\beta\|v\|_V\|w\|_V$. The lower coefficient bound gives $a(v,v)\ge\alpha\|v\|_V^2$. Hence $a$ is bounded with $M=\beta$ and coercive with $\alpha_0=\alpha$. [given, algebra]

2.1 By [F3], $V$ with the gradient norm is a real Hilbert space. Its data functional $F$ is bounded by the definition of $V'$, and $V_h$ is finite dimensional and conforming by [F1] (with [F2] verifying the interface condition when needed). Thus all hypotheses of [F4] hold with $M=\beta$ and $\alpha_0=\alpha$. Applying [F4] gives both solutions and its estimate is exactly the displayed inequality. Its hypotheses concern the exact form only, so the conclusion carries no geometry or quadrature defect term and no approximation rate beyond the best-approximation infimum. [A1, F1, F2, F3, F4, given, step 1.1] ∎