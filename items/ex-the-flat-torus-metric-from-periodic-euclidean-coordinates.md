---
id: "ex-the-flat-torus-metric-from-periodic-euclidean-coordinates"
kind: "example"
title: "The flat torus metric from periodic euclidean coordinates"
deps: ["prop-coordinate-criterion-for-a-riemannian-metric"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

The periodic Euclidean coordinates on $\mathbb R^n/\mathbb Z^n=(\mathbb R/\mathbb Z)^n$ define a metric locally equal to $\sum_i dx_i^2$, called the flat torus metric.

## Facts & Assumptions

**Given:** The integer translation action on $\mathbb R^n$ and quotient map $q$.

[F1] [[prop-coordinate-criterion-for-a-riemannian-metric]]: A tensor $g=\sum_{i,j}g_{ij}\,dx^i\otimes dx^j$ is Riemannian exactly when its coordinate matrix $G=(g_{ij})$ has smooth entries and is symmetric positive definite. Under $J=\partial x/\partial y$ it transforms by $G_y=J^TG_xJ$.

## Verification

**Proof technique:** direct.

1.1 The map $q$ is open since $q^{-1}q(U)=\bigcup_{m\in\mathbb Z^n}(U+m)$ is open when $U$ is. Its restriction to a box of side lengths less than $1$ is injective and hence a homeomorphism onto its open image. On overlap components the inverse charts differ by a constant integer translation. These smooth maps have derivative $I_n$. [given]

2.1 For two distinct orbits represented by $x,y$, their displacement vectors $x-y-m$ never vanish. Only finitely many $m\in\mathbb Z^n$ have $\|x-y-m\|\le1$, because every coordinate of such an integer vector is bounded. Taking the minimum of $1$ and these finitely many positive lengths gives $\delta>0$. Images of radius-$\delta/3$ balls around $x,y$ are disjoint, proving Hausdorffness. The images of rational boxes form a countable basis. Thus the charts in step 1.1 define a smooth manifold. [step 1.1]

3.1 Since all transition derivatives are $I_n$, the local tensors $\sum_i dx_i^2$ agree on overlaps. They glue to a smooth tensor with positive-definite identity matrix in every quotient chart. The coordinate criterion proves it is Riemannian. For example in dimension two the local vector $2\partial_1+3\partial_2$ has squared norm $4+9=13$, independent of the integer translate chosen for the chart. Local equality to the Euclidean metric is the flatness meant here. [F1, step 1.1, step 2.1] ∎

## Source locator

Lee, p.332, definition of flatness as local Euclidean isometry and Theorem 13.14(b). The particular torus quotient atlas and metric descent are proved above.
