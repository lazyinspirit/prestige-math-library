---
id: "ex-volume-density-in-polar-coordinates"
kind: "example"
title: "Volume density in polar coordinates"
deps: ["def-riemannian-volume-density", "lem-the-riemannian-volume-density-is-coordinate-independent"]
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

In a polar chart of the Euclidean plane, the density is $r|dr\,d\theta|$ and the positive-oriented volume form is $r\,dr\wedge d\theta$.

## Facts & Assumptions

**Given:** $x=r\cos\theta$, $y=r\sin\theta$, with $r>0$ and $\theta$ in an open interval of length less than $2\pi$.

[F1] [[def-riemannian-volume-density]]: The **Riemannian volume density** is $\mu_g=\sqrt{\det G_x}\,|dx^1\cdots dx^n|$ in coordinates. The matrix is that of prop-coordinate-criterion-for-a-riemannian-metric, so its determinant is positive and smooth. The density frames and their absolute-Jacobian law are def-density-bundle-and-smooth-density. In dimension zero take the empty determinant to be one, giving weight one at every point, independently of orientation. The compatibility of these local formulas is proved in lem-the-riemannian-volume-density-is-coordinate-independent.

[F2] [[lem-the-riemannian-volume-density-is-coordinate-independent]]: The local Riemannian volume densities glue to a positive smooth density independent of coordinates.

## Verification

**Proof technique:** direct.

1.1 Differentiation gives $dx=\cos\theta\,dr-r\sin\theta\,d\theta$ and $dy=\sin\theta\,dr+r\cos\theta\,d\theta$. Expanding $dx^2+dy^2$, the mixed terms cancel and the diagonal terms sum to $dr^2+r^2d\theta^2$. Thus $\det G=r^2$, whose positive square root is $r$ on this domain, and the density is $r|dr\,d\theta|$. [F1, given]

2.1 The wedge expansion gives $dx\wedge dy=r(\cos^2\theta+\sin^2\theta)\,dr\wedge d\theta=r\,dr\wedge d\theta$. The Jacobian is positive, so the chart has the standard orientation and this is its positive volume form. The absolute Jacobian density law agrees with step 1.1. At $r=2$, both coordinate coefficients are $2$. The excluded value $r=0$ is a failure of polar coordinates, not a zero of the Euclidean density. [F2, step 1.1] ∎

## Source locator

Lee, Example 13.12, p.332, polar metric; Proposition 15.31, p.390, coordinate volume formula; pp.430–431, Riemannian density.
