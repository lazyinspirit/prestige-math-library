---
id: ex-cg-a-tilde-2-nerve-perimeter-two-pi-and-vanishing-gram-determinant
kind: example
title: "The affine $\\widetilde A_2$ nerve: every edge exists, the Gram determinant vanishes, and the perimeter is exactly $2\\pi$"
status: draft
origin: pipeline
dependency_level: 15
deps:
  - def-cg-coxeter-nerve-and-moussong-metric
  - def-cg-large-spherical-metric-flag-and-almost-negative-matrix
  - thm-cg-finite-type-positive-definite-criterion
  - lem-cg-comparison-convexity-and-model-spaces
  - thm-sylvesters-criterion-for-positive-definiteness
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
  - def-hh-coxeter-matrix-word-group-and-length
  - def-symmetric-group
  - lem-symmetric-group-is-a-group
  - def-cg-cat-zero-cat-one-and-local-geodesic
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Philip Moeller, A note on almost negative matrices and Gromov-hyperbolic Coxeter groups, arXiv:2205.07791"
      url: "https://arxiv.org/pdf/2205.07791"
      locator: "Section 2 (cosine matrices, positive-definite principal submatrices and nerve cells); Section 3, Proposition 3.4 (the non-strict girth bound). The affine equality example is computed locally here."
    - title: "G. Moussong, Hyperbolic Coxeter groups, PhD thesis (Ohio State University 1988), McCammond transcription"
      url: "https://people.math.osu.edu/davis.12/papers/moussongdissertation.pdf"
      locator: "Chapter 1, Section 5 (girth and closed geodesics); Chapter 2, Proposition 10.1 and Corollary 10.2 (the non-strict girth bounds)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Section 6.12, Theorem 6.12.9 (finite type and positive-definite cosine forms); Sections 7.1 and 12.1 (nerve and prescribed link metric). The affine kernel and equality computations are local here."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $(W,S)$ be the Coxeter system with $S=\{s_1,s_2,s_3\}$ and $m_{s_is_j}=3$ for all distinct $i,j$ — the affine system of type $\widetilde A_2$ — and let $L=L(W,S)$ be its Coxeter nerve with the Moussong metric ([[def-cg-coxeter-nerve-and-moussong-metric]]). Then:

**(i) Every edge exists, with length $2\pi/3$.** For every two-element subset $T=\{s_i,s_j\}$ the group $W_T$ is the dihedral group of order $6$, which is finite, and the cosine matrix is $C_T=\begin{pmatrix}1&-\frac12\\ -\frac12&1\end{pmatrix}$ with determinant $\frac34>0$, hence positive definite ([[thm-sylvesters-criterion-for-positive-definiteness]], [[thm-cg-finite-type-positive-definite-criterion]]). So all three edges of $L$ exist, each of length $\pi-\pi/3=\frac{2\pi}{3}$, and the link of the vertex $s_i$ is the two-point space $\{s_j,s_k\}$ at truncated angular distance $\pi$: the diagonally normalized Schur complement of the block $C_{\{s_i\}}$ in $C_S$ is $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, and $\{s_j,s_k\}$ spans no edge of the link because $C_S$ is not positive definite.

**(ii) The full set is not spherical, and the determinant vanishes.** The matrix $C_S$ has diagonal $1$ and off-diagonal $-\frac12$, that is $C_S=\frac32 I-\frac12 J$ where $J$ is the all-ones matrix; its eigenvalues are $\frac32-\frac32=0$ (eigenvector $(1,1,1)$) and $\frac32$ with multiplicity two, so $\det C_S=0$ and $C_S$ is not positive definite ([[def-definiteness-inertia-and-signature-data-over-the-reals]], [[thm-real-square-matrix-invertible-iff-determinant-nonzero]]). By the finiteness criterion ([[thm-cg-finite-type-positive-definite-criterion]](1)) the group $W$ is infinite. Accordingly the metric flag condition ([[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]](3)) does not fill the triangle: the vertex set $S$ is pairwise adjacent but $C_S$ is not positive definite, so $S$ is not a simplex of $L$. Hence $L$ is exactly the cycle formed by the three edges and their three vertices, i.e. an isometrically embedded circle of length $3\cdot\frac{2\pi}{3}=2\pi$, isometric to the round circle $S^1_{2\pi}$ ([[lem-cg-comparison-convexity-and-model-spaces]](vi)).

**(iii) The girth is exactly $2\pi$.** Clause (ii) gives an isometric circle of length $2\pi$. If an isometric circle $S^1_\ell$ with $\ell<2\pi$ embedded in $L$, the two semicircles between $0$ and $\ell/2$ would be distinct geodesic segments of length $\ell/2<\pi$ in $L\cong S^1_{2\pi}$. But in the circle metric of circumference $2\pi$, points at distance $<\pi$ have a unique geodesic: the shorter circular arc. This contradiction rules out every shorter embedded circle, so $g(L)=2\pi$. The boundary 3-cycle has perimeter exactly $2\pi$, outside the strict CAT(1) comparison tests.

## Facts & Assumptions

**Given:** The Coxeter system $(W,S)$ of type $\widetilde A_2$: $S=\{s_1,s_2,s_3\}$ and $m_{s_is_j}=3$ for all distinct $i,j$, with its nerve $L$ and Moussong metric.

[F1] The nerve of $(W,S)$ has as its simplices the subsets $T$ with $C_T$ positive definite; a two-element subset spans an edge exactly when $m_{st}<\infty$, of length $\pi-\pi/m_{st}$; links of faces are given by the iterated Schur complement and carry the truncated angular metric. ([[def-cg-coxeter-nerve-and-moussong-metric]])

[F2] A finite spherical complex is large when its simplex off-diagonals are at most $0$ and metric flag when a pairwise adjacent vertex set spans a simplex exactly when its cosine matrix is positive definite. ([[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]])

[F3] A subset $T$ is spherical if and only if $W_T$ is finite, if and only if $C_T$ is positive definite. ([[thm-cg-finite-type-positive-definite-criterion]])

[F4] A real symmetric matrix is positive definite exactly when all its leading principal minors are positive, and a positive-definite matrix has no nonzero kernel. ([[thm-sylvesters-criterion-for-positive-definiteness]], [[def-definiteness-inertia-and-signature-data-over-the-reals]])

[F5] The determinant of a matrix vanishes exactly when the matrix is not invertible. ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]])

[F6] For every $\ell>0$ the circle $S^1_\ell$ with $d_\ell(x,y)=\min\{|x-y+k\ell|:k\in\mathbb Z\}$ is a metric space, and an isometrically embedded circle of length $\ell$ in a space $X$ is a subspace of $X$ isometric to $S^1_\ell$. ([[def-cg-cat-zero-cat-one-and-local-geodesic]])

[F7] The Coxeter presentation has its stated universal property ([[def-hh-coxeter-matrix-word-group-and-length]]); permutations compose as functions with the stated cycle notation ([[def-symmetric-group]]) and form a group ([[lem-symmetric-group-is-a-group]]). The restricted parabolic presentation is supplied by [F1].

## Verification

1.1 Clause (i): for every two-element subset $T=\{s_i,s_j\}$ the cosine matrix is $C_T=\begin{pmatrix}1&-\frac12\\-\frac12&1\end{pmatrix}$ with leading principal minors $1>0$ and $1-\frac14=\frac34>0$, hence positive definite by [F4]; by the finiteness criterion [F3] the group $W_T$ is finite. Its restricted presentation is $\langle s_i,s_j\mid s_i^2=s_j^2=(s_is_j)^3=1\rangle$ by [F1]. Put $r=s_is_j$; then $s_i r s_i=r^{-1}$, so every word is $r^k$ or $r^ks_i$ with $0\le k<3$. The homomorphism sending $s_i$ to $(1\,2)$ and $s_j$ to $(2\,3)$ in $\operatorname{Sym}(\{1,2,3\})$ has six distinct images of these words, so all six forms are distinct: $W_T$ is the dihedral group of order $6$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-symmetric-group]], [[lem-symmetric-group-is-a-group]]). Thus $T$ is spherical, all three edges of $L$ exist and each has length $\pi-\pi/3=\frac{2\pi}{3}$ [F1]. [F1, F3, F4, F7, algebra]

1.2 Clause (i), link: each row of $C_S$ sums to zero, so $(1,1,1)$ is a nonzero kernel vector and $C_S$ is not positive definite. Thus the vertex link has two vertices and no edge by [F1]; its two components are points, so their truncated angular distance is $\pi$. Algebraically the unnormalized Schur complement of $C_{\{s_i\}}$ is $\begin{pmatrix}3/4&-3/4\\-3/4&3/4\end{pmatrix}$; diagonal normalization gives $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$. The value $-1$ here corresponds to a nonedge, not to a spherical link-edge cell. [F1, F4, algebra]

2.1 Clause (ii): the matrix $C_S$ has rows with diagonal $1$ and all off-diagonal entries $-\frac12$, and $(1,1,1)$ is a nonzero kernel vector since each row sums to $1-1=0$; hence $C_S$ is not invertible, its determinant is $0$ by [F5], and it is not positive definite by [F4]; by the finiteness criterion [F3] the group $W$ is infinite. The vertex set $S$ is pairwise adjacent but not a simplex of $L$ (simplices have positive-definite cosine matrices [F1]), so by the metric flag condition the triple is not filled [F2]; since all three edges exist and no $2$-simplex does, $L$ is exactly the cycle formed by the three edges and their three vertices. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 Clause (ii), metric: the cycle $L$ has three edges of length $\frac{2\pi}{3}$ joined at the three vertices; the path metric of that cycle is the circle metric of circumference $2\pi$, because the distance between two points is the minimum of the lengths of their two circular arcs and the total length is $3\cdot\frac{2\pi}{3}=2\pi$; hence $L$ is (isometric to) the round circle $S^1_{2\pi}$ and is an isometrically embedded circle of length $2\pi$ in itself [F6]. [F6, step 1.1, step 2.1, algebra]

4.1 Clause (iii): step 3.1 exhibits an isometric copy of $S^1_{2\pi}$ in $L$, so $g(L)\le2\pi$. If an isometric embedding $f:S^1_\ell\to L$ existed for some $\ell<2\pi$, the two semicircles between $0$ and $\ell/2$ in $S^1_\ell$ would be distinct geodesic segments of length $\ell/2<\pi$, and their images would be distinct geodesics between $f(0)$ and $f(\ell/2)$. In the circle metric of circumference $2\pi$, the unique shorter arc is the only geodesic at distances $<\pi$, because the other circular arc is strictly longer. This contradiction rules out every embedded circle shorter than $2\pi$, hence $g(L)=2\pi$. The boundary 3-cycle has perimeter exactly $2\pi$, outside the strict comparison tests. [F6, step 3.1, algebra] ∎
