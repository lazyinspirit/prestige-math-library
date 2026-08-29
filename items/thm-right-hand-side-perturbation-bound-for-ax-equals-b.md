---
id: thm-right-hand-side-perturbation-bound-for-ax-equals-b
kind: theorem
title: "Right-hand-side perturbations in Ax = b are amplified by the condition number"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-condition-number-of-a-nonsingular-linear-system, thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized, def-invertible-matrix-and-general-linear-group]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 12"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
    - title: "James Demmel, Math 221 Lecture 3: Vector Norms, Matrix Norms, and Condition Numbers"
      url: "https://web.archive.org/web/20250328021224if_/https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html"
---



## Statement

Let $n\ge 1$, let $p\in\mathbb{Q}$ with $p\ge 1$, let $A\in\operatorname{GL}_n(\mathbb{R})$,
let $b,\delta b\in\mathbb{R}^{n}$ with $b\ne 0$, let $x=A^{-1}b$, and let
$\delta x\in\mathbb{R}^{n}$ satisfy $A(x+\delta x)=b+\delta b$. Then

$$\frac{\lVert\delta x\rVert_p}{\lVert x\rVert_p}\;\le\;\kappa_p(A)\,\frac{\lVert\delta b\rVert_p}{\lVert b\rVert_p}.$$

In words: the relative perturbation of the solution is at most the condition
number $\kappa_p(A)$ of [[def-condition-number-of-a-nonsingular-linear-system]]
times the relative perturbation of the right-hand side.

## Facts & Assumptions

**Given:** An invertible matrix $A\in\operatorname{GL}_n(\mathbb{R})$ with $n\ge1$, vectors $b,\delta b\in\mathbb{R}^{n}$ with $b\ne 0$, $x=A^{-1}b$ and $\delta x=A^{-1}\delta b$.

[L1] $A^{-1}A=I_n=AA^{-1}$ ([[def-invertible-matrix-and-general-linear-group]]).

[L2] Compatibility of the induced norm: $\lVert Ay\rVert_p\le\lVert A\rVert_p\lVert y\rVert_p$ for every $y$ ([[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]).

[L3] $\kappa_p(A)=\lVert A\rVert_p\lVert A^{-1}\rVert_p$ ([[def-condition-number-of-a-nonsingular-linear-system]]).

## Proof

**Proof technique:** direct.

1.1 Subtracting the two equations gives $A\delta x=A(x+\delta x)-Ax=(b+\delta b)-b=\delta b$, and multiplying on the left by $A^{-1}$ with [L1] gives $\delta x=A^{-1}\delta b$. [given, L1, algebra]

1.2 Since $b=Ax$, [L2] gives $\lVert b\rVert_p=\lVert Ax\rVert_p\le\lVert A\rVert_p\lVert x\rVert_p$, and $b\ne 0$ forces $\lVert b\rVert_p>0$ and $\lVert x\rVert_p>0$, so $1/\lVert x\rVert_p\le\lVert A\rVert_p/\lVert b\rVert_p$. [given, L2, algebra]

2.1 By [L2] applied to $A^{-1}$ at the vector $\delta b$, step 1.1 gives $\lVert\delta x\rVert_p=\lVert A^{-1}\delta b\rVert_p\le\lVert A^{-1}\rVert_p\lVert\delta b\rVert_p$. [step 1.1, L2, algebra]

3.1 Multiplying the bound of step 2.1 by the bound of step 1.2 gives $\lVert\delta x\rVert_p/\lVert x\rVert_p\le\lVert A^{-1}\rVert_p\lVert A\rVert_p\lVert\delta b\rVert_p/\lVert b\rVert_p$, and [L3] identifies the coefficient product as $\kappa_p(A)$, which is the stated bound. [step 2.1, step 1.2, L3, algebra]

4.1 Step 3.1 proves the stated bound. [step 3.1] ∎

## Remarks

- **The bound is sharp at $p=2$.** The constant $\kappa_2(A)$ is optimal, but the two equalities in the proof are attained on different singular directions: choose $x$ along a right singular vector for the largest singular value of $A$, so $b=Ax$ has norm $\sigma_{\max}\lVert x\rVert_2$, and choose $\delta b$ along a left singular vector for the smallest singular value, so $\lVert A^{-1}\delta b\rVert_2=\sigma_{\min}^{-1}\lVert\delta b\rVert_2$. Then the bound is attained with coefficient $\sigma_{\max}/\sigma_{\min}=\kappa_2(A)$.
