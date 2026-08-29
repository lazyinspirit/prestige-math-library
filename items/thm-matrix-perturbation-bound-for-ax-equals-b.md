---
id: thm-matrix-perturbation-bound-for-ax-equals-b
kind: theorem
title: "Matrix perturbations in Ax = b obey a first-order condition-number bound"
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
let $b\in\mathbb{R}^{n}$ with $b\ne 0$, let $\delta A\in M_n(\mathbb{R})$, let
$x=A^{-1}b$, and suppose $\delta x\in\mathbb{R}^{n}$ satisfies
$(A+\delta A)(x+\delta x)=b$. Put

$$c\;:=\;\lVert A^{-1}\rVert_p\lVert\delta A\rVert_p\;=\;\kappa_p(A)\,\frac{\lVert\delta A\rVert_p}{\lVert A\rVert_p}.$$

If $c<1$ then

$$\frac{\lVert\delta x\rVert_p}{\lVert x\rVert_p}\;\le\;\frac{c}{1-c}.$$

To first order in the matrix perturbation,

$$\frac{\lVert\delta x\rVert_p}{\lVert x\rVert_p}\;\lesssim\;\kappa_p(A)\,\frac{\lVert\delta A\rVert_p}{\lVert A\rVert_p},$$

because $c/(1-c)=c+c^{2}/(1-c)=c+O(c^{2})$ as $c\to 0$: the denominator
$1-c$ contributes only a second-order correction when the relative matrix
perturbation is small.

## Facts & Assumptions

**Given:** An invertible matrix $A\in\operatorname{GL}_n(\mathbb{R})$ with $n\ge1$,
vectors $b\ne 0$, $x=A^{-1}b$, and $\delta x$ with
$(A+\delta A)(x+\delta x)=b$ for a matrix $\delta A$; write $c=\lVert A^{-1}\rVert_p\lVert\delta A\rVert_p$.

[L1] $A^{-1}A=I_n$ ([[def-invertible-matrix-and-general-linear-group]]).

[L2] Compatibility: $\lVert My\rVert_p\le\lVert M\rVert_p\lVert y\rVert_p$
([[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]).

[L3] $\kappa_p(A)=\lVert A\rVert_p\lVert A^{-1}\rVert_p$
([[def-condition-number-of-a-nonsingular-linear-system]]).

## Proof

**Proof technique:** direct.

1.1 Expanding the perturbed equation and subtracting $Ax=b$ gives $A\delta x+\delta A\,x+\delta A\,\delta x=0$, so $A\delta x=-\delta A(x+\delta x)$. [given, algebra]

2.1 Multiplying step 1.1 on the left by $A^{-1}$ and using [L1] gives $\delta x=-A^{-1}\delta A(x+\delta x)$. [step 1.1, L1, algebra]

3.1 Taking norms in step 2.1 and applying [L2] twice gives $\lVert\delta x\rVert_p=\lVert A^{-1}\delta A(x+\delta x)\rVert_p\le\lVert A^{-1}\rVert_p\lVert\delta A\rVert_p\lVert x+\delta x\rVert_p=c\lVert x+\delta x\rVert_p$. [step 2.1, L2, algebra]

4.1 The triangle inequality of the vector $p$-norm gives $\lVert x+\delta x\rVert_p\le\lVert x\rVert_p+\lVert\delta x\rVert_p$, so step 3.1 yields $\lVert\delta x\rVert_p\le c\lVert x\rVert_p+c\lVert\delta x\rVert_p$. [step 3.1, algebra]

5.1 Under the hypothesis $c<1$ the factor $1-c$ is positive, and rearranging step 4.1 gives $(1-c)\lVert\delta x\rVert_p\le c\lVert x\rVert_p$, hence $\lVert\delta x\rVert_p/\lVert x\rVert_p\le c/(1-c)$, the claimed exact bound; $x\ne 0$ because $b\ne 0$ and $A$ is invertible. [step 4.1, given, algebra]

6.1 The first-order form. Writing $c=\kappa_p(A)\lVert\delta A\rVert_p/\lVert A\rVert_p$ by [L3], one has $c/(1-c)=c+c^{2}/(1-c)$, so the exact bound of step 5.1 reads $\lVert\delta x\rVert_p/\lVert x\rVert_p\le\kappa_p(A)\lVert\delta A\rVert_p/\lVert A\rVert_p+O(c^{2})$ with the error term tending to zero quadratically in $c$; to first order the amplification is $\kappa_p(A)$ times the relative matrix perturbation. [step 5.1, L3, algebra]

7.1 Step 5.1 proves the exact bound and step 6.1 the first-order reading of it. [step 5.1, step 6.1] ∎
