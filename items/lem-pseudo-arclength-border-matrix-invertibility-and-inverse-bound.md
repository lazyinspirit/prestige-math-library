---
id: lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound
kind: lemma
title: "Invertibility and a norm bound for the pseudo-arclength bordered matrix"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-rank-nullity
  - def-rank-and-nullity
  - cor-double-orthogonal-complement-and-dimension
  - thm-dimension-of-a-linear-subspace
  - thm-linear-kernel-image-and-injectivity
  - lem-standard-basis-of-f-n
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
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
    - title: "Eugene L. Allgower and Kurt Georg, Numerical Continuation Methods: An Introduction, Springer Series in Computational Mathematics 13 (1990)"
      url: "http://lib.ysu.am/disciplines_bk/080dea8526183abcce1135f2a4460625.pdf"
      locator: "Chapter 2, §§2.1–2.2, printed pp. 7–16: regular implicit curves, oriented unit tangents, and predictor-corrector geometry"
    - title: "K. A. Cliffe, A. Spence, and S. J. Tavener, The numerical analysis of bifurcation problems with application to fluid mechanics, Acta Numerica 9 (2000), 39–131"
      url: "https://www.math.colostate.edu/~tavener/manuscripts/cliffe/acta-numerica-2000.pdf"
      locator: "§§3.1 and 7.1, printed pp. 51–55 and 92–94: bordered IFT continuation systems and pseudo-arclength at folds"
---

## Statement

Let $n\ge1$, let $A:\mathbb R^{n+1}\to\mathbb R^n$ be linear of rank $n$,
and let $t\in\ker A$ have $\|t\|_2=1$. Set $E=t^\perp$ and let
$Q=(A|_E)^{-1}:\mathbb R^n\to E$. For a unit vector $\tau\in\mathbb R^{n+1}$,
form the square bordered matrix
$$B=\begin{bmatrix}A\\ \tau^T\end{bmatrix}.$$
Then $B$ is invertible exactly when $\tau^Tt\ne0$. If
$0<c\le1$, $|\tau^Tt|\ge c$, and $K_A\ge0$ satisfies
$\|Qu\|_2\le K_A\|u\|_2$ for all $u\in\mathbb R^n$, then
$$\|B^{-1}\|_{\rm op}\le\sqrt{K_A^2(1+c^{-1})^2+c^{-2}}.$$

Here $t$ is the current unit tangent and $\tau$ is the normal used in the
corrector hyperplane. The lower bound $c$ is the explicit transversality
margin; as it tends to zero this estimate need not remain bounded.

## Facts & Assumptions

**Given:** The dimensions, rank, unit kernel vector $t$, orthogonal complement
$E=t^\perp$, unit vector $\tau$, and bound $|\tau^Tt|\ge c>0$ in the
Statement.

[F1] [[thm-rank-nullity]]: for a linear map from a finite-dimensional domain,
the domain dimension is the sum of the kernel and image dimensions.

[F2] [[cor-double-orthogonal-complement-and-dimension]]: for a subspace $W$
of a finite-dimensional inner-product space,
$\dim W+\dim W^\perp=\dim V$.

[F3] [[thm-dimension-of-a-linear-subspace]]: a subspace of a finite-dimensional
space has dimension at most the ambient dimension, and equal dimension forces
equality. [[thm-linear-kernel-image-and-injectivity]]: a linear map is injective
exactly when its kernel is zero. [[lem-standard-basis-of-f-n]]: the coordinate
space $\mathbb R^n$ has dimension $n$.

[F4] [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]: every
Euclidean linear map has a finite operator-norm bound.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for Euclidean vectors,
$|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

[F6] [[def-rank-and-nullity]]: for a linear map with finite-dimensional
domain, rank is the dimension of its image.

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1], [F3], and [F6], $\dim\ker A=(n+1)-n=1$. Since $t$ is a unit vector in the kernel, $\ker A=\operatorname{span}\{t\}$. [F1, F3, F6, given]

2.1 Apply [F2] to $W=\ker A$ in $\mathbb R^{n+1}$ to obtain $\dim E=(n+1)-1=n$. The codomain $\mathbb R^n$ also has dimension $n$ by [F3]. [F2, F3, step 1.1]

3.1 If $x=\alpha t$ also lies in $E=t^\perp$, then $0=t^Tx=\alpha\|t\|_2^2=\alpha$, so $E\cap\ker A=\{0\}$. Thus $A|_E$ is injective by [F3]. Its domain and codomain both have dimension $n$, so [F1] and [F3] make it surjective. Thus $Q$ is well-defined. [F1, F3, step 2.1, given, algebra]

4.1 For $(u,s)\in\mathbb R^n\times\mathbb R$, write a prospective solution as $v=e+\alpha t$ with $e\in E$. The first row equation $Av=u$ forces $e=Qu$, and the last row equation forces $$\alpha=\frac{s-\tau^TQu}{\tau^Tt}.$$ If $\tau^Tt\ne0$, these formulas give one solution for every $(u,s)$, so $B$ is invertible. If $\tau^Tt=0$, then $Bt=0$ with $t\ne0$, so $B$ is singular. [given, step 1.1, step 3.1, construct]

5.1 Under $|\tau^Tt|\ge c$, [F5] gives $$|\alpha|\le c^{-1}\bigl(|s|+K_A\|u\|_2\bigr).$$ Consequently $$\|v\|_2\le K_A(1+c^{-1})\|u\|_2+c^{-1}|s|.$$ Applying [F5] to the two scalar coefficients of $\sqrt{\|u\|_2^2+|s|^2}$ gives the stated operator-norm bound for $B^{-1}$. [F4, F5, step 4.1, algebra]

6.1 Step 4.1 proves the exact invertibility criterion, and step 5.1 proves the quantitative inverse bound under the stated angular margin. [step 4.1, step 5.1] ∎
