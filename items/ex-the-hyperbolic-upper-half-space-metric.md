---
id: "ex-the-hyperbolic-upper-half-space-metric"
kind: "example"
title: "The hyperbolic upper half space metric"
deps: ["prop-coordinate-criterion-for-a-riemannian-metric", "def-riemannian-volume-density"]
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
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

For $n\ge1$, on $\{(x_1,\ldots,x_{n-1},y):y>0\}$ the metric $g=y^{-2}(\sum_{i<n}dx_i^2+dy^2)$ has density $y^{-n}|dx_1\cdots dx_{n-1}dy|$.

## Facts & Assumptions

**Given:** The upper half-space with its Euclidean open-subset smooth structure.

[F1] [[prop-coordinate-criterion-for-a-riemannian-metric]]: A tensor $g=\sum_{i,j}g_{ij}\,dx^i\otimes dx^j$ is Riemannian exactly when its coordinate matrix $G=(g_{ij})$ has smooth entries and is symmetric positive definite. Under $J=\partial x/\partial y$ it transforms by $G_y=J^TG_xJ$.

[F2] [[def-riemannian-volume-density]]: The **Riemannian volume density** is $\mu_g=\sqrt{\det G_x}\,|dx^1\cdots dx^n|$ in coordinates. The matrix is that of prop-coordinate-criterion-for-a-riemannian-metric, so its determinant is positive and smooth. The density frames and their absolute-Jacobian law are def-density-bundle-and-smooth-density. In dimension zero take the empty determinant to be one, giving weight one at every point, independently of orientation. The compatibility of these local formulas is proved in lem-the-riemannian-volume-density-is-coordinate-independent.

## Verification

**Proof technique:** direct.

1.1 For $y>0$, $y^{-2}$ is smooth and positive. Hence $G=y^{-2}I_n$ is a smooth symmetric positive-definite matrix, since $v^TGv=y^{-2}\sum_i v_i^2>0$ when $v\ne0$. It defines a Riemannian metric. [F1, given]

2.1 Its determinant is $y^{-2n}$ and the positive square root is $y^{-n}$. The density definition therefore gives the asserted formula. At $(0,\ldots,0,2)$ the matrix is $\frac14I_n$ and the density coefficient is $2^{-n}$. [F2, step 1.1] ∎

## Source locator

Lee, p.328, coordinate positive-definiteness criterion; Proposition 15.31, p.390, volume coefficient; pp.430–431, Riemannian density. The upper-half-space coefficients are computed above; no curvature or completeness statement is asserted.
