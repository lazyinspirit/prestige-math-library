---
id: ex-euclidean-space-has-zero-curvature
kind: example
title: Euclidean space has zero curvature
status: draft
origin: pipeline
deps: ["prop-coordinate-criterion-for-a-riemannian-metric", "prop-christoffel-formula-for-the-levi-civita-connection", "prop-coordinate-formula-for-the-curvature-tensor"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Example 11.1.2, printed page 72
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Equation (7.3) and the Euclidean-to-flat direction of Theorem 7.3, printed pages 117–120
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

For every integer $n\ge 0$, the standard Euclidean metric

$$g_{\mathrm E}=\sum_{a=1}^n dx^a\otimes dx^a$$

on $\mathbb R^n$ has identically zero Riemann curvature endomorphism:
$R^{g_{\mathrm E}}=0$.

## Facts & Assumptions

**Given:** An integer $n\ge0$ and the global Cartesian coordinate chart on
$\mathbb R^n$.

[F1] A covariant two-tensor is Riemannian precisely when its coordinate matrix is smooth, symmetric, and positive definite. [[prop-coordinate-criterion-for-a-riemannian-metric]].

[F2] The Levi–Civita symbols of a Riemannian metric are
$\Gamma^k{}_{ij}=\frac12g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$. [[prop-christoffel-formula-for-the-levi-civita-connection]].

[F3] In coordinates,
$R^\ell{}_{kij}=\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik}+\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm}$. [[prop-coordinate-formula-for-the-curvature-tensor]].

## Verification

**Proof technique:** direct calculation.

1.1 In Cartesian coordinates, $(g_{ij})=(\delta_{ij})$ is a constant smooth symmetric matrix, and $v^T(\delta_{ij})v=\sum_i(v^i)^2>0$ for every nonzero $v$; hence [F1] makes $g_{\mathrm E}$ a Riemannian metric. [F1, algebra]

2.1 Every derivative $\partial_i g_{j\ell}=\partial_i\delta_{j\ell}$ is zero, so [F2] gives $\Gamma^k{}_{ij}=0$ identically for all indices; consequently every derivative $\partial_i\Gamma^\ell{}_{jk}$ is also zero. [F2, step 1.1, algebra]

3.1 Substitution of step 2.1 into [F3] makes both derivative terms and both quadratic terms zero, so $R^\ell{}_{kij}=0$ for every $i,j,k,\ell$. Because the Cartesian coordinate vectors form a basis at every point, this is exactly $R^{g_{\mathrm E}}=0$ on all of $\mathbb R^n$. [F3, step 2.1, algebra]

4.1 For $n=0$, every index range is empty and the unique curvature field on the one-point manifold $\mathbb R^0$ is zero; for $n=1$, antisymmetry is not needed because steps 1.1–3.1 still give the sole coordinate component zero. The standard metric is nondegenerate by step 1.1, the global chart has neither a boundary nor a parameter endpoint, and all coordinates and tensors are explicit, so no choice principle is used. The claim is an equality, not a biconditional. [F1, step 1.1, step 2.1, step 3.1] ∎
