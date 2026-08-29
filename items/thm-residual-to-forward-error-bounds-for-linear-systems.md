---
id: thm-residual-to-forward-error-bounds-for-linear-systems
kind: theorem
title: "Residual bounds on forward error for a nonsingular linear system"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-condition-number-of-a-nonsingular-linear-system, thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized, def-invertible-matrix-and-general-linear-group, thm-matrix-multiplication-laws]
aliases: []
proof_strategy: direct
verification:
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
let $b\in\mathbb{R}^{n}$ with $b\ne 0$, let $x=A^{-1}b$, and let
$\widehat x\in\mathbb{R}^{n}$ be an approximate solution with residual
$r:=b-A\widehat x$ and error $e:=x-\widehat x$. Then $r=Ae$ and $e=A^{-1}r$,
and the following bounds hold:

1. **Absolute bounds.**
   $$\lVert e\rVert_p\;\le\;\lVert A^{-1}\rVert_p\,\lVert r\rVert_p,\qquad \lVert r\rVert_p\;\le\;\lVert A\rVert_p\,\lVert e\rVert_p.$$
2. **Relative bounds.**
   $$\frac{1}{\kappa_p(A)}\,\frac{\lVert r\rVert_p}{\lVert b\rVert_p} \;\le\;\frac{\lVert e\rVert_p}{\lVert x\rVert_p} \;\le\;\kappa_p(A)\,\frac{\lVert r\rVert_p}{\lVert b\rVert_p},$$
   where $\kappa_p(A)$ is the condition number of
   [[def-condition-number-of-a-nonsingular-linear-system]].

In words: a small residual bounds the forward error below by
$\lVert r\rVert_p/\lVert A\rVert_p$, but bounds it above only up to the
condition number $\kappa_p(A)$.

## Facts & Assumptions

**Given:** An invertible matrix $A\in\operatorname{GL}_n(\mathbb{R})$ with $n\ge1$,
$b\ne 0$, $x=A^{-1}b$, $\widehat x\in\mathbb{R}^{n}$, $r=b-A\widehat x$ and
$e=x-\widehat x$.

[L1] $A^{-1}A=I_n$ ([[def-invertible-matrix-and-general-linear-group]]), and
matrix multiplication distributes over addition, so $A(x-\widehat x)=Ax-A\widehat x$
([[thm-matrix-multiplication-laws]]).

[L2] Compatibility: $\lVert My\rVert_p\le\lVert M\rVert_p\lVert y\rVert_p$
([[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]).

[L3] $\kappa_p(A)=\lVert A\rVert_p\lVert A^{-1}\rVert_p$
([[def-condition-number-of-a-nonsingular-linear-system]]).

## Proof

**Proof technique:** direct.

1.1 Since $Ax=b$, the residual is $r=b-A\widehat x=Ax-A\widehat x=A(x-\widehat x)=Ae$, using distributivity of [L1]. [given, L1, algebra]

2.1 Multiplying $r=Ae$ on the left by $A^{-1}$ and using [L1] gives $e=A^{-1}r$. [step 1.1, L1, algebra]

2.2 The lower absolute bound. Applying [L2] to $A$ at the vector $e$ in step 1.1 gives $\lVert r\rVert_p=\lVert Ae\rVert_p\le\lVert A\rVert_p\lVert e\rVert_p$. [step 1.1, L2, algebra]

3.1 The upper absolute bound. Applying [L2] to $A^{-1}$ at the vector $r$ in step 2.1 gives $\lVert e\rVert_p=\lVert A^{-1}r\rVert_p\le\lVert A^{-1}\rVert_p\lVert r\rVert_p$. [step 2.1, L2, algebra]

3.2 The lower relative bound. From $x=A^{-1}b$ and [L2], $\lVert x\rVert_p\le\lVert A^{-1}\rVert_p\lVert b\rVert_p$, so $1/\lVert b\rVert_p\le\lVert A^{-1}\rVert_p/\lVert x\rVert_p$; combining with step 2.2 gives $\lVert r\rVert_p/\lVert b\rVert_p\le\lVert A\rVert_p\lVert A^{-1}\rVert_p\lVert e\rVert_p/\lVert x\rVert_p=\kappa_p(A)\lVert e\rVert_p/\lVert x\rVert_p$ by [L3], which rearranges to the lower bound on $\lVert e\rVert_p/\lVert x\rVert_p$. [step 2.2, L2, L3, algebra]

4.1 The upper relative bound. From $b=Ax$ and [L2], $\lVert b\rVert_p\le\lVert A\rVert_p\lVert x\rVert_p$, and $b\ne 0$ forces $\lVert x\rVert_p>0$, so $1/\lVert x\rVert_p\le\lVert A\rVert_p/\lVert b\rVert_p$; multiplying by step 3.1 gives $\lVert e\rVert_p/\lVert x\rVert_p\le\lVert A^{-1}\rVert_p\lVert A\rVert_p\lVert r\rVert_p/\lVert b\rVert_p=\kappa_p(A)\lVert r\rVert_p/\lVert b\rVert_p$ by [L3]. [step 3.1, L2, L3, algebra]

5.1 Claim 1 is steps 3.1 and 2.2, and claim 2 is steps 4.1 and 3.2. [step 3.1, step 2.2, step 4.1, step 3.2] ∎
