---
id: lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare
kind: lemma
title: "Periodic pressure Laplacian gauge, solvability, and uniform Poincare bound"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-na-periodic-staggered-grid-stokes-operators
  - prop-standard-coordinate-inner-products
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-rank-nullity
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/L\
        ecture_5.4.pdf"
      locator: "PDF pp. 5–10 (slides 5–10), equations (5.4.4)–(5.4.10): fractional-step projection, staggered cell/face placement, and centred differences; local estimates are proved here."
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods
        for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_\
        2006.pdf"
      locator: "§3.1, printed p. 6012: the projection onto the divergence-free
        subspace; the discrete kernel and grid inequality are proved locally
        here."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Use the spaces and operators of
[[def-na-periodic-staggered-grid-stokes-operators]] with $d\ge1$, $N\ge2$,
and $h=1/N$. Then $\Delta_h=D_hG_h$ maps $Q_h$ bijectively to itself, the
kernel of $\Delta_h$ on all cell arrays consists exactly of the constants,
and $D_hv$ has zero mean for every $v\in V_h$. In addition, every $q\in Q_h$
satisfies the resolution-independent bound
$$ \|q\|_{Q_h}\le\sqrt d\,\|G_hq\|_{M_h}. $$

## Facts & Assumptions

**Given:** A fixed periodic grid with $d\ge1$, $N\ge2$, its cell and face indexing, and the operators $G_h,D_h,\Delta_h$ and mass pairings.

[F1] The pressure and velocity arrays, inner products, and operators have the staggered periodic conventions in [[def-na-periodic-staggered-grid-stokes-operators]].

[F2] For a linear map between finite-dimensional spaces, $\dim V=\dim\ker T+\dim\operatorname{im}T$ ([[thm-rank-nullity]]).

[F3] The real coordinate pairing on a finite array space is an inner product ([[prop-standard-coordinate-inner-products]]).

[F4] Cauchy–Schwarz holds in every real inner-product space ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

1.1 Reindexing the finite periodic sums gives, for every cell array $q$ and face array $v$, $$ (G_hq,v)_{M_h} =h^d\sum_{i,j}\frac{(q_{j+e_i}-q_j)v_{i,j}}h =-h^d\sum_jq_j\sum_i\frac{v_{i,j}-v_{i,j-e_i}}h =-h^d\sum_jq_j(D_hv)_j. $$ In particular, when $q\in Q_h$, this is $(G_hq,v)_{M_h}=-(q,D_hv)_{Q_h}$, the negative-adjoint identity in the stated mass pairings. [F1, algebra]

1.2 Let $q\in Q_h$. Since $q$ has mean zero, $$ q_x=N^{-d}\sum_{y\in J_N}(q_x-q_y), $$ and [F3]–[F4] give the finite-sum Cauchy--Schwarz inequality $$ \|q\|_{Q_h}^2\le N^{-2d}\sum_{x,y\in J_N}|q_x-q_y|^2. $$ For each ordered pair $(x,y)$ choose the path that changes coordinates in the order $1,\ldots,d$, moving forward modulo $N$ in each coordinate. It has at most $dN$ directed edges. Cauchy--Schwarz along the path bounds $|q_x-q_y|^2$ by $dN$ times the sum of squared edge differences on it. [F1, F3, F4, given, algebra]

2.1 For any cell array $q$, applying the explicit weighted-sum identity of step 1.1 with $v=G_hq$ gives $$ h^d\sum_jq_j(\Delta_hq)_j=-(G_hq,G_hq)_{M_h}\le0. $$ If $\Delta_hq=0$, then $G_hq=0$, so $q_{j+e_i}=q_j$ for every $i,j$. Coordinate steps connect all cells of the periodic grid, hence $q$ is constant. Every constant has zero gradient, so the kernel on all cell arrays is exactly the constants. [F1, step 1.1]

3.1 For every $v$, summing $D_hv$ over cells cancels each face value once with its opposite occurrence, so $D_hv$ has zero mean. The same is true of $\Delta_hq=D_h(G_hq)$. Therefore $\Delta_h$ restricts to a linear map $Q_h\to Q_h$. Its kernel there is zero by step 2.1, and its domain and codomain are the same finite-dimensional space. [F1, step 2.1, algebra]

4.1 Rank-nullity [F2] now gives $\dim\operatorname{im}\Delta_h=\dim Q_h$; since the image is a subspace of $Q_h$, the restriction is onto as well as one-to-one. Thus each mean-zero right-hand side has a unique mean-zero pressure solution. [F2, step 3.1, algebra]

5.1 Fix one directed edge in coordinate $i$. For each coordinate $r<i$, its value along the path is $y_r$; to use the fixed edge, $y_r$ is fixed and $x_r$ has at most $N$ choices. For each $r>i$, the path still has value $x_r$; then $x_r$ is fixed and $y_r$ has at most $N$ choices. In coordinate $i$ there are at most $N^2$ ordered start/end pairs. Hence this edge occurs in at most $N^{d+1}$ paths. Summing the path bounds and dividing by $N^{2d}$ yields $$ \|q\|_{Q_h}^2\le dN^{2-d}\sum_{i,j}|q_{j+e_i}-q_j|^2 =d\|G_hq\|_{M_h}^2. $$ Taking nonnegative square roots proves the stated inequality. [F1, step 1.2, algebra] ∎
