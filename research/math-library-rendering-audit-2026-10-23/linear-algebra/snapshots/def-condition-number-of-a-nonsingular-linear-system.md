---
id: def-condition-number-of-a-nonsingular-linear-system
kind: definition
title: "The condition number kappa_p(A) = ||A||_p ||A^{-1}||_p of a nonsingular linear system"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-induced-matrix-p-norm, thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized, def-invertible-matrix-and-general-linear-group]
aliases: []
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 12"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
    - title: "James Demmel, Math 221 Lecture 3: Vector Norms, Matrix Norms, and Condition Numbers"
      url: "https://web.archive.org/web/20250328021224if_/https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html"
---

## Definition

Let $n\in\mathbb{N}$ with $n\ge 1$, let either $p\in\mathbb{Q}$ with
$p\ge 1$ or $p=\infty$, and let
$A\in\operatorname{GL}_n(\mathbb{R})$ be an invertible real matrix
([[def-invertible-matrix-and-general-linear-group]]), so that the linear system
$Ax=b$ has the unique solution $x=A^{-1}b$ for every right-hand side
$b\in\mathbb{R}^{n}$. The **condition number of the linear system** (equivalently,
of the matrix $A$) with respect to the induced $p$-norm of
[[def-induced-matrix-p-norm]], using its separately defined infinity case when
$p=\infty$, is

$$\kappa_p(A)\;:=\;\lVert A\rVert_p\,\lVert A^{-1}\rVert_p\;\in\;[1,+\infty).$$

**The value is at least one and is never infinite.** The inverse $A^{-1}$ is the
unique two-sided inverse of $A$ ([[def-invertible-matrix-and-general-linear-group]]),
so $AA^{-1}=I_n$ and $A^{-1}A=I_n$. For rational finite $p$,
submultiplicativity and normalisation are
[[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]].
For $p=\infty$, the same properties follow directly from the defining
supremum: $\lVert Ax\rVert_\infty\le\lVert A\rVert_\infty\lVert x\rVert_\infty$
and applying this estimate twice gives submultiplicativity, while
$I_nx=x$ gives $\lVert I_n\rVert_\infty=1$. Hence in either case

$$1=\lVert I_n\rVert_p=\lVert AA^{-1}\rVert_p\le\lVert A\rVert_p\,\lVert A^{-1}\rVert_p=\kappa_p(A).$$

Equivalently, $\kappa_p(A)$ is the product of the largest factor by which $A$
stretches a nonzero vector and the largest factor by which $A^{-1}$ stretches
one. Applying the same estimate to $A^{-1}$ in place of $A$ gives
$\kappa_p(A^{-1})=\kappa_p(A)$.

## Remarks

- **The matrix must be square and invertible.** For a rectangular or singular
  matrix $A$ there is no $A^{-1}$ in the sense of
  [[def-invertible-matrix-and-general-linear-group]] and the displayed product
  is not defined; the rectangular least-squares case uses the singular-value
  ratio $\sigma_{\max}/\sigma_{\min}$ instead, as in
  [[thm-normal-equations-square-the-spectral-condition-number]].

- **The subscript names the norm.** $\kappa_1$, $\kappa_2$ and $\kappa_\infty$
  are different numbers attached to the same matrix; the dependence on the
  norm is genuine: for
  $A=\begin{pmatrix}1&2&0\\0&3&1\\0&0&4\end{pmatrix}$ one has
  $\kappa_1(A)=5$ and $\kappa_\infty(A)=22/3$, while the diagonal rescaling
  $D=\operatorname{diag}(10,1,1)$ changes $\kappa_1$ from $5$ to $23$.

- **A system is well or ill conditioned, an algorithm is stable or unstable.**
  The condition number is a property of the problem $Ax=b$ and its norms; it is
  computed without any algorithm. The separate notion of stability is
  [[def-forward-and-backward-stability-for-a-problem-family]].
