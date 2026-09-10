---
id: "prop-coordinate-criterion-for-a-riemannian-metric"
kind: "proposition"
title: "Coordinate criterion for a riemannian metric"
deps: ["def-riemannian-metric-and-riemannian-manifold", "prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Ved Datar, Lectures on Riemannian Geometry, September 2025"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

A covariant two-tensor $g$ on $M$ is Riemannian exactly when, in every smooth coordinate chart $x$, its coordinate matrix $G_x=(g_{ij})$ has smooth entries and is symmetric positive definite. On overlapping charts, under $J=\partial x/\partial y$, the matrices transform by $G_y=J^TG_xJ$.

## Facts & Assumptions

**Given:** A covariant two-tensor and overlapping smooth coordinate systems.

[F1] [[def-riemannian-metric-and-riemannian-manifold]]: A **Riemannian metric** on a Hausdorff second-countable smooth manifold $M$ is a smooth symmetric covariant two-tensor $g$ such that $g_p(v,v)>0$ for every point $p$ and every nonzero $v\in T_pM$. A **Riemannian manifold** is the pair $(M,g)$. This is a def-smooth-tensor-field giving a def-smooth-bundle-metric on $TM$. Dimension zero is allowed: its zero bilinear form is positive definite because there are no nonzero vectors. The empty manifold has its unique empty metric. Boundaries are allowed where stated, with smoothness understood up to the boundary.

[F2] [[prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components]]: A type $(r,s)$ tensor field is smooth if and only if, in every smooth chart, its coordinate component functions are smooth.

## Proof

**Proof technique:** direct.

1.1 If $g$ is Riemannian, in every smooth chart $g_{ij}=g(\partial_i,\partial_j)$ is smooth and symmetric. For a nonzero coordinate vector $v$, $v^TG_xv=g(v,v)>0$. Conversely, smooth entries in every smooth chart make the tensor smooth, and the displayed quadratic equality makes symmetry and positive definiteness of every $G_x$ precisely those of $g$. [F1, F2, given]

2.1 Since $\partial/\partial y^a=\sum_iJ_{ia}\partial/\partial x^i$, bilinearity gives $(G_y)_{ab}=\sum_{i,j}J_{ia}(G_x)_{ij}J_{jb}$. The Jacobian is invertible; hence $Jv\ne0$ for $v\ne0$, and $v^TG_yv=(Jv)^TG_x(Jv)>0$. The condition is coordinate independent. Empty charts and zero-dimensional matrices give vacuous positivity. [F1, step 1.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
