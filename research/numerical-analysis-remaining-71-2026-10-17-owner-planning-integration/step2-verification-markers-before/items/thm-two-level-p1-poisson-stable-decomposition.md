---
id: thm-two-level-p1-poisson-stable-decomposition
kind: theorem
title: "Stable two-level P1 decomposition for structured Poisson meshes"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-overlapping-schwarz-subspace-correction-data
  - lem-schwarz-p1-product-cutoff-interpolation-energy-estimate
  - lem-na-scott-zhang-boundary-preserving-p1-interpolant
  - def-matching-affine-simplicial-meshes
  - def-broken-and-conforming-polynomial-spaces
  - lem-shape-regular-affine-simplex-scaling
  - thm-zero-boundary-piecewise-polynomials-in-w10p
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Sections 3.1–3.3 and 4.1–4.2, pp. 585–594: subspace corrections, additive preconditioner, stable splitting, and strengthened Cauchy–Schwarz."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 3 §§3.2–3.4, pp. 41–50; Chapter 4 §§4.1–4.3, pp. 57–66; and Chapter 5 §§5.1–5.4, printed pp. 69–92: coarse interpolation, partition of unity, localization, and Lemma 5.13 stable splitting."

---

## Statement

Assume Countable Choice. Let $d\in\{2,3\}$, $\Omega=(0,1)^d$, and let
$M\ge2$ and $n\ge2$ be integers. Write $e_1,\ldots,e_d$ for the standard
coordinate vectors in $\mathbb R^d$. In every cube of side $a=1/M$, for each
coordinate permutation $\pi$ use the simplex whose successive vertices,
with $x$ the cube's lower corner, are
$x$, $x+a e_{\pi(1)}$, $x+a(e_{\pi(1)}+e_{\pi(2)})$, through
$x+a\sum_{r=1}^d e_{\pi(r)}$. Subdivide each cube into $n^d$ uniform fine
cubes and apply the same permutation rule at fine scale; this gives nested,
matching, shape-regular affine simplicial meshes
$\mathcal T_H\subset\mathcal T_h$. Write $H=\sqrt d\,a$ and
$h=\sqrt d\,a/n$. Assume an overlap radius $\delta=q a/n$ with integer
$\lceil\sqrt d\rceil\le q\le n$, so $h\le\delta\le a$. For each
coarse cube $Q_j$, let $\Omega_j$ be its closed $\ell^\infty$-neighborhood of
radius $\delta+h$, intersected with $\overline\Omega$. Let $V_H\subset V_h
\subset H_0^1(\Omega)$ be the continuous zero-boundary P1 spaces on the
coarse and fine meshes, and let
$$ V_j=\{v_h\in V_h:\operatorname{supp}v_h\subseteq\Omega_j\}. $$
Here $\|x\|_\infty=\max_r|x_r|$,
$\operatorname{dist}_\infty(x,Q)=\inf_{y\in Q}\|x-y\|_\infty$, an
$\ell^\infty$-neighborhood of radius $r$ is
$\{x:\operatorname{dist}_\infty(x,Q)\le r\}$, and $\operatorname{supp}v$ is
the closure in $\overline\Omega$ of $\{x:v(x)\ne0\}$.
For the Poisson energy $a(u,v)=\int_\Omega\nabla u\cdot\nabla v\,dx$, every
$u_h\in V_h$ has a decomposition $u_h=u_0+\sum_j u_j$ with
$u_0\in V_H$ and $u_j\in V_j$ satisfying
$$ a(u_0,u_0)+\sum_j a(u_j,u_j) \le C_{\rm FE}\left(1+\left(\frac H\delta\right)^2\right)a(u_h,u_h). $$
The constant $C_{\rm FE}$ depends only on $d$, the fixed uniform
shape-regularity bound, the Scott–Zhang constant, and the reference P1 product
interpolation constants; it is independent of $M,n,\delta$.

## Facts & Assumptions

**Given:** The cube mesh family and parameters in the statement, the real
Poisson energy, and Countable Choice.

[F1] On a matching shape-regular simplicial mesh of a bounded connected
polygonal or polyhedral domain, the face-average P1 map $J_h$ takes $H_0^1$
into the zero-boundary continuous P1 space, is uniformly $H^1$-seminorm
stable, and satisfies
$$ \|v-J_hv\|_{L^2(K)} \le C h_K\|\nabla v\|_{L^2(\omega_K)}. $$
Here $\omega_K$ is the union of cells meeting a vertex of $K$. Its statement
assumes Countable Choice and dimensions $d=2,3$
([[lem-na-scott-zhang-boundary-preserving-p1-interpolant]]).

[F2] On each fine simplex, the nodal P1 interpolant of a product of affine
functions satisfies
$$ \|\nabla I_K(\theta w)\|_{L^2(K)} \le C\bigl(\|\theta\nabla w\|_{L^2(K)} +\|w\nabla\theta\|_{L^2(K)}\bigr) $$
([[lem-schwarz-p1-product-cutoff-interpolation-energy-estimate]]); denote its
constant by $C_P$.

[F3] A matching affine mesh consists of face-to-face nondegenerate affine
simplices, and its P1 space is the continuous piecewise-affine space
([[def-matching-affine-simplicial-meshes]],
[[def-broken-and-conforming-polynomial-spaces]]).

[F4] A continuous matching piecewise-affine function with zero boundary
facets lies in $H_0^1(\Omega)$
([[thm-zero-boundary-piecewise-polynomials-in-w10p]]).

[F5] The zero-boundary Scott–Zhang estimate in [F1] assumes Countable Choice
through the Sobolev and trace suppliers
([[def-countable-choice]]).

[F6] Shape regularity bounds barycentric gradients by
$\|\nabla\lambda_i\|_{L^\infty(K)}\le C h_K^{-1}$
([[lem-shape-regular-affine-simplex-scaling]]).

## Proof

1.1 In a coordinate cube, the stated simplices are the regions where the normalized coordinates have one fixed weak ordering. For each coordinate pair, a coarse ordering hyperplane can meet the interior of a fine cube only when the two fine-cell indices agree; there it is the local equality hyperplane used by the fine Freudenthal triangulation. Thus every fine simplex lies in one coarse simplex. The induced order triangulation on a coordinate face is the same from either incident cube, so the meshes match. The reference simplices come from finitely many coordinate permutations, so their shape-regularity constants are bounded by a number depending only on $d$. By [F3], the continuous P1 spaces are nested. Their boundary nodal values vanish; [F4] places both spaces in $H_0^1(\Omega)$. [F3, F4, given, construct]

1.2 Let $J_H$ be the face-average Scott–Zhang map of [F1], set $u_0=J_Hu_h$, and $w=u_h-u_0\in V_h$. Each coarse element patch $\omega_K$ meets only coarse cubes whose coordinate indices differ from that of $K$ by at most one. Thus at most $M_d=3^d d!$ coarse simplex patches contain a fixed point. Squaring and summing [F1] over the coarse mesh gives $\|w\|_{L^2(\Omega)}\le C_S H\|\nabla u_h\|_{L^2(\Omega)}, \qquad \|\nabla u_0\|_{L^2(\Omega)} \le C_S\|\nabla u_h\|_{L^2(\Omega)}$ for a constant $C_S$ depending only on $d$ and shape regularity. The second inequality is the global stability part of [F1]. The stated Countable Choice assumption supplies the choice principle required by the Scott–Zhang and Sobolev-trace suppliers in [F1]. [F1, F3, F5, given, algebra]

1.3 For each coarse cube define $\psi_j(x)=\max\left(0,1-\frac{\operatorname{dist}_\infty(x,Q_j)}{\delta}\right), \qquad \eta_j(x)=\frac{\psi_j(x)}{\sum_k\psi_k(x)}.$ At every $x\in\Omega$, at least one coarse cube contains $x$, so the denominator is at least $1$. Since $\delta\le a$, at most $4^d$ functions $\psi_k$ are nonzero at a point; each is $1/\delta$-Lipschitz. The quotient rule for Lipschitz functions with denominator at least $1$ gives $0\le\eta_j\le1$, $\sum_j\eta_j=1$, and $\|\nabla\eta_j\|_{L^\infty}\le(1+4^d)/\delta$ almost everywhere. Let $\theta_j=I_h\eta_j$ be its fine-grid nodal P1 interpolant. The nodal values sum to one, hence $\sum_j\theta_j=1$ on every fine simplex; barycentric coordinates give $0\le\theta_j\le1$. On a fine simplex with vertices $x_0,\ldots,x_d$ and barycentric coordinates $\lambda_i$, $\nabla\theta_j =\sum_{i=1}^d(\eta_j(x_i)-\eta_j(x_0))\nabla\lambda_i.$ The Lipschitz bound and [F6] imply $\|\nabla\theta_j\|_{L^\infty(K)}\le C_\theta/\delta$ for a constant $C_\theta$ depending only on dimension and shape regularity. If $\theta_j$ is nonzero on a fine simplex, one of its vertices lies within $\ell^\infty$ distance $\delta$ of $Q_j$, so the whole simplex lies in $\Omega_j$ by the added radius $h$. At most $N=7^d$ expanded coarse cubes contain any point: in each coordinate their side length is at most $a+2(\delta+h)\le5a$, so at most seven grid intervals can contain that coordinate. Every clipped expanded cube has side lengths between $a$ and $5a$, so its aspect ratio is at most $5$; hence these subdomains are uniformly shape-regular and have diameter at most $5H$. [F3, F6, given, algebra]

2.1 At every fine-grid vertex, $\sum_j\theta_jw=w$. The nodal interpolant is linear on each fine simplex, so the local functions $u_j=I_h(\theta_jw)$ satisfy $\sum_j u_j=w$. Each $u_j$ is supported in $\Omega_j$. At a boundary vertex $w=0$, since $u_h,u_0\in V_h$; hence every $u_j$ has zero boundary nodal values and belongs to $H_0^1(\Omega)$ by [F4]. Thus $u_h=u_0+\sum_j u_j$ is a decomposition in the stated spaces. [F3, F4, step 1.2, step 1.3, construct]

2.2 Apply [F2] elementwise and $(s+t)^2\le2s^2+2t^2$: $\sum_j\|\nabla u_j\|_{L^2(\Omega)}^2 \le 2C_P^2 N\left( \|\nabla w\|_{L^2(\Omega)}^2+ \frac{C_\theta^2}{\delta^2}\|w\|_{L^2(\Omega)}^2 \right).$ Indeed, each point belongs to at most $N$ supports, $0\le\theta_j\le1$, and $|\nabla\theta_j|\le C_\theta/\delta$. Also $\|\nabla w\|_2\le(1+C_S)\|\nabla u_h\|_2$ by step 1.2. [F2, step 1.2, step 1.3, algebra]

3.1 Substitute the two estimates of step 1.2 into step 2.2 and add $\|\nabla u_0\|_2^2\le C_S^2\|\nabla u_h\|_2^2$. With $C_{\rm FE}=1+C_S^2+ 2C_P^2N\bigl((1+C_S)^2+C_\theta^2C_S^2\bigr),$ the result is $\|\nabla u_0\|_2^2+\sum_j\|\nabla u_j\|_2^2 \le C_{\rm FE}\left(1+(H/\delta)^2\right)\|\nabla u_h\|_2^2.$ This is the asserted stable-decomposition bound. [step 1.2, step 2.2, algebra] ∎
