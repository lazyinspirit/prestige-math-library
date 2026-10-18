---
id: def-nurbs-patch-map-and-rational-spline-space
kind: definition
title: Tensor-product NURBS patch maps and rational spline spaces
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-b-spline-space-and-basis
  - thm-spline-polynomial-reproduction
  - def-bounded-piecewise-c-one-euclidean-domain
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://link.springer.com/content/pdf/10.1007/s11831-022-09752-5.pdf"
    - title: "Tom Lyche, Carla Manni, Hendrik Speleers, B-Splines and Spline Approximation, complete lecture notes"
      url: "https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf"
---

## Definition

Let $d\in\{2,3\}$ and let the reference patch be $\widehat\Omega=(0,1)^d$. For each coordinate $r$, fix a degree $p_r\in\mathbb N_0$, a finite clamped knot vector $\Xi_r$ on $[0,1]$, and its one-dimensional B-spline basis $B^{(r)}_{i_r,p_r,\Xi_r}$ from [[def-b-spline-space-and-basis]]. For a multi-index $\alpha=(i_1,\ldots,i_d)$ in the finite product index set $\mathcal I$, define the tensor-product basis function
$$N_\alpha(\xi_1,\ldots,\xi_d):=\prod_{r=1}^d B^{(r)}_{i_r,p_r,\Xi_r}(\xi_r).$$

Choose finitely many control points $P_\alpha\in\mathbb R^d$ and positive weights $w_\alpha$, and write $0<w_-:=\min_\alpha w_\alpha\le\max_\alpha w_\alpha=:w_+<\infty$. The weight denominator, rational basis, and associated rational spline space are
$$W(\xi):=\sum_{\alpha\in\mathcal I}w_\alpha N_\alpha(\xi),\qquad R_\alpha(\xi):=\frac{w_\alpha N_\alpha(\xi)}{W(\xi)},\qquad \mathcal N_h:=\operatorname{span}\{R_\alpha:\alpha\in\mathcal I\}.$$
The corresponding NURBS geometry map is
$$F(\xi):=\sum_{\alpha\in\mathcal I}R_\alpha(\xi)P_\alpha.$$
Equivalently, let $\widetilde F(\xi):=\sum_{\alpha\in\mathcal I}(w_\alpha P_\alpha,w_\alpha)N_\alpha(\xi)\in\mathbb R^{d+1}$ and let $\Pi(y,z):=y/z$ for $z>0$. Then $F=\Pi\circ\widetilde F$ wherever $W>0$.
The basis properties in [[thm-spline-polynomial-reproduction]] give nonnegative tensor factors summing to one. Consequently the weights' convex combination satisfies $W\ge w_->0$; the later item `lem-positive-nurbs-basis-and-quotient-derivative` records the full rational-basis consequences.

An admissible NURBS patch map is a continuous, globally injective, bi-Lipschitz map $F:\overline{\widehat\Omega}\to\overline\Omega$ whose restriction to every nonempty knot cell is a $C^1$ diffeomorphism onto its image. There are constants $0<j_-\le j_+<\infty$ and $1\le L<\infty$ such that, almost everywhere on every cell,
$$j_-\le J_F:=\det DF\le j_+,\qquad \|DF\|_{\mathrm{op}}\le L,\qquad \|DF^{-1}\|_{\mathrm{op}}\le L.$$
The physical image $\Omega$ is required to be a bounded Lipschitz domain. The images of the finite knot cells form a face-to-face partition with the piecewise $C^1$ boundary presentation of [[def-bounded-piecewise-c-one-euclidean-domain]]; the map agrees on each shared cell face.

A finite multipatch geometry consists of finitely many such patch maps with disjoint physical interiors, a connected bounded Lipschitz union, and matching full physical faces wherever two patches meet. Positive weights only define a positive denominator and a convex rational basis; they do not assert global injectivity, positive Jacobian, or interface matching. Exact NURBS representation means exact representation of the specified CAD map and does not assert that this map is the exact geometry of a target physical domain.
