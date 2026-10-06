---
id: lem-positively-oriented-bases-are-path-connected
kind: lemma
title: "Positively oriented bases of an oriented vector space are path-connected"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps:
  - thm-sine-and-cosine-derivatives
  - def-invertible-matrix-and-general-linear-group
  - thm-invertible-matrices-factor-into-elementary-matrices
  - def-elementary-matrix
  - def-orientation-of-a-finite-dimensional-real-vector-space
  - def-path-connected
  - def-matrix-product-and-identity-matrix
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - cor-invertible-matrix-has-unit-determinant
  - cor-trigonometric-parity-and-pythagorean-identity
  - cor-sine-and-cosine-are-one-lipschitz
  - thm-intermediate-value
  - def-the-standard-smooth-step-function
proof_strategy: construct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, Lemma 1: the space of positive bases is $\\mathrm{GL}^+(p,\\mathbb{R})$, hence connected, printed p.44"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.fas.harvard.edu/~dafr/bordism.pdf"
      locator: "Exercise 5.28: the Gram-Schmidt deformation of $\\mathrm{GL}_q(\\mathbb{R})$ onto $O(q)$, printed p.42"
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed."
      url: "https://linear.axler.net/LADR4e.pdf"
      locator: "Result 6.32 (Gram-Schmidt) and the connectedness discussion of orthogonal groups"
---

## Statement

Let $V$ be a finite-dimensional real vector space with an orientation
([[def-orientation-of-a-finite-dimensional-real-vector-space]]). The set of
positively oriented bases of $V$, with the topology it inherits from the linear
isomorphisms $V\to\mathbb R^{\dim V}$, is path-connected; indeed any two
positively oriented bases are joined by a smooth path of positively oriented
bases, equivalently
$\mathrm{GL}^+(k,\mathbb R)=\{A\in\mathrm{GL}(k,\mathbb R):\det A>0\}$ is
smoothly path-connected for every $k\ge0$
([[def-invertible-matrix-and-general-linear-group]],
[[def-path-connected]]). In particular, for the oriented vector space
$T_yS^k$ with its standard orientation, any two positive bases at $y$ can be
joined by a continuous path of positive bases.

## Facts & Assumptions

**Given:** An oriented finite-dimensional real vector space $V$ of dimension $k$, and the group $\mathrm{GL}^+(k,\mathbb R)$ of invertible real $k\times k$ matrices of positive determinant.

[F1] Fixing one positively oriented basis $b_0$ of $V$, the map $A\mapsto A(b_0)$ is a bijection from $\mathrm{GL}^+(V)$ (invertible endomorphisms of positive determinant) onto the set of positively oriented bases of $V$, with inverse given by the coordinate matrix in the basis $b_0$; the determinant of the coordinate matrix detects positivity of the orientation ([[def-orientation-of-a-finite-dimensional-real-vector-space]], [[def-invertible-matrix-and-general-linear-group]]).

[F2] Every invertible matrix is a finite product of elementary matrices, of three types: interchanges $S_{pq}$, row scalings $D_p(c)$ with $c\ne0$, and row additions $T_{pq}(c)$; the identity is the empty product ([[def-elementary-matrix]], [[thm-invertible-matrices-factor-into-elementary-matrices]]).

[F3] For distinct indices $p,q$ and $t\in[0,1]$, let $R_{pq}(t)$ be the matrix that is the identity off the plane $\operatorname{span}\{e_p,e_q\}$ and equals $\begin{pmatrix}\cos(\pi t/2)&-\sin(\pi t/2)\\ \sin(\pi t/2)&\cos(\pi t/2)\end{pmatrix}$ in the ordered basis $(e_p,e_q)$. Its determinant is $\cos^2(\pi t/2)+\sin^2(\pi t/2)=1$, so $R_{pq}(t)$ is invertible for every $t$; its entries are smooth in $t$ by [[thm-sine-and-cosine-derivatives]] (repeated differentiation alternates sine and cosine); and $R_{pq}(0)=I$ while $R_{pq}(1)$ sends $e_p\mapsto e_q$, $e_q\mapsto -e_p$ and fixes the other standard basis vectors, so $S_{pq}=R_{pq}(1)\,D_q(-1)$ ([[cor-trigonometric-parity-and-pythagorean-identity]], [[cor-sine-and-cosine-are-one-lipschitz]], [[def-matrix-product-and-identity-matrix]]).

[F4] The determinant is multiplicative and vanishes exactly on non-invertible matrices; a continuous real function on $I$ with no zero and a positive value at one point is positive everywhere ([[thm-determinant-multiplicative]], [[cor-invertible-matrix-has-unit-determinant]], [[thm-intermediate-value]]).

[F5] A path in a topological space is a continuous map from $I$; the set of positive bases carries the subspace topology transferred by the bijection of [F1], so a continuous family of matrices gives a continuous family of bases ([[def-path-connected]]).

[F6] The standard smooth step function $\sigma$ is smooth, equals $0$ on $(-\infty,0]$ and $1$ on $[1,\infty)$; hence for smooth paths $\gamma_0:I\to X$, $\gamma_1:I\to X$ with $\gamma_0(1)=\gamma_1(0)$ the formula $\gamma(t)=\gamma_0(\sigma(2t))$ for $t\le\tfrac12$ and $\gamma(t)=\gamma_1(\sigma(2t-1))$ for $t\ge\tfrac12$ is a smooth path, with all positive-order derivatives vanishing at the junction ([[def-the-standard-smooth-step-function]]).

## Proof

1.1 (Reduction to matrices.) Fix a positively oriented basis $b_0$ of $V$. By [F1] the map $A\mapsto A(b_0)$ is a bijection $\mathrm{GL}^+(V)\to\{\text{positive bases}\}$ whose inverse sends a basis to its coordinate matrix; a family $t\mapsto b(t)$ of bases is continuous exactly when its matrix entries in $b_0$ are continuous. Choosing coordinates in $b_0$ identifies $\mathrm{GL}^+(V)$ with $\mathrm{GL}^+(k,\mathbb R)$, so it suffices to prove that $\mathrm{GL}^+(k,\mathbb R)$ is path-connected. [F1, F5, given]

2.1 (Deforming a factorisation to a diagonal sign matrix.) Let $A\in\mathrm{GL}^+(k,\mathbb R)$ and, by [F2], write $A=E_1\cdots E_m$ with each $E_i$ elementary. Replace each factor by a continuous path $E_i(t)$, $t\in[0,1]$, of invertible matrices with $E_i(0)=E_i$: for $E_i=T_{pq}(c)$ use $T_{pq}((1-t)c)$, for $E_i=D_p(c)$ with $c>0$ use $D_p((1-t)c+t)$, for $E_i=D_p(c)$ with $c<0$ use $D_p((1-t)c-t)$, and for $E_i=S_{pq}$ use $R_{pq}(1-t)D_q(-1)$, which starts at $S_{pq}$ by [F3] and ends at $D_q(-1)$; the endpoint $E_i(1)$ is $I$, $I$, $D_p(-1)$ or $D_q(-1)$ respectively, all diagonal with entries $\pm1$. Every $E_i(t)$ is invertible: a transvection has determinant one, the scaling paths have a diagonal entry that is a convex combination of the two nonzero numbers $c$ and $1$ (respectively $c$ and $-1$) and so never vanishes, and the fourth path is a product of invertible matrices. Define $A(t):=E_1(t)\cdots E_m(t)$. Then $A(t)$ is invertible for every $t$, $A(0)=A$, and $A(1)=\Delta$ is a product of matrices each of which is $I$ or some $D_p(-1)$, hence a diagonal matrix with entries $\pm1$. Since $t\mapsto\det A(t)$ is continuous, never zero by invertibility, and positive at $t=0$, [F4] gives $\det A(t)>0$ for all $t$: so $A$ is joined to $\Delta$ by a path in $\mathrm{GL}^+(k,\mathbb R)$. [F2, F3, F4, step 1.1]

3.1 (From the diagonal sign matrix to the identity.) The diagonal matrix $\Delta$ has $\det\Delta=\det A(1)>0$, so the number of its entries equal to $-1$ is even. Pair the indices $p<q$ carrying $-1$; for each pair, the matrix that is $-1$ on $\operatorname{span}\{e_p,e_q\}$ and $+1$ elsewhere is realised by the block $\begin{pmatrix}\cos(\pi(1-t))&-\sin(\pi(1-t))\\ \sin(\pi(1-t))&\cos(\pi(1-t))\end{pmatrix}$ at parameter $t$, which equals $-I_2$ on that plane at $t=0$, the identity at $t=1$, and has determinant $1$ throughout by [F3]. Doing this independently on the finitely many disjoint pairs and leaving the remaining coordinates fixed gives a continuous path $\Delta(t)$ of invertible matrices with $\Delta(0)=\Delta$, $\Delta(1)=I$. Because $\Delta(t)$ is orthogonal of determinant $1$, this path lies in $\mathrm{GL}^+(k,\mathbb R)$; concatenating it with the smooth path of step 2.1 by the smooth reparametrisation of [F6] yields a smooth path in $\mathrm{GL}^+(k,\mathbb R)$ from $A$ to $I$. [F3, F4, F6, step 1.1, step 2.1]

4.1 (Conclusion.) Every $A\in\mathrm{GL}^+(k,\mathbb R)$ is joined to $I$ by a smooth path, and reversing paths joins any two elements of $\mathrm{GL}^+(k,\mathbb R)$ smoothly; hence $\mathrm{GL}^+(k,\mathbb R)$ is smoothly path-connected. By step 1.1 the set of positively oriented bases of $V$ is connected by smooth paths of positive bases; applied to the oriented vector space $T_yS^k$ it gives the asserted smooth path of positive bases at $y$. The case $k=0$ is the one-point space $\mathrm{GL}^+(0,\mathbb R)=\{I_0\}$. Every ingredient is an explicit formula, and the factorisation is a fixed finite one produced by the elimination theorem, so no choice principle is used. [F1, F2, F4, F5, F6, step 1.1, step 2.1, step 3.1] ∎
