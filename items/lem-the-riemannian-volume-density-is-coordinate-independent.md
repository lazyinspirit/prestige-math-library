---
id: "lem-the-riemannian-volume-density-is-coordinate-independent"
kind: "lemma"
title: "The riemannian volume density is coordinate independent"
deps: ["def-riemannian-volume-density", "prop-coordinate-criterion-for-a-riemannian-metric"]
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

## Statement

The local Riemannian volume densities glue to a positive smooth density independent of coordinates.

## Facts & Assumptions

**Given:** Overlapping charts with $J=\partial x/\partial y$.

[F1] [[def-riemannian-volume-density]]: The **Riemannian volume density** is $\mu_g=\sqrt{\det G_x}\,|dx^1\cdots dx^n|$ in coordinates. The matrix is that of prop-coordinate-criterion-for-a-riemannian-metric, so its determinant is positive and smooth. The density frames and their absolute-Jacobian law are def-density-bundle-and-smooth-density. In dimension zero take the empty determinant to be one, giving weight one at every point, independently of orientation. The compatibility of these local formulas is proved in lem-the-riemannian-volume-density-is-coordinate-independent.

[F2] [[prop-coordinate-criterion-for-a-riemannian-metric]]: A tensor $g=\sum_{i,j}g_{ij}\,dx^i\otimes dx^j$ is Riemannian exactly when its coordinate matrix $G=(g_{ij})$ has smooth entries and is symmetric positive definite. Under $J=\partial x/\partial y$ it transforms by $G_y=J^TG_xJ$.

## Proof

**Proof technique:** direct.

1.1 The metric matrix law gives $G_y=J^TG_xJ$, hence $\det G_y=(\det J)^2\det G_x$. Taking positive square roots yields $\sqrt{\det G_y}=|\det J|\sqrt{\det G_x}$. [F2, given]

2.1 This is exactly the density coefficient change, since $|dx|=|\det J|\,|dy|$. Thus the two local sections agree. Their positive smooth coefficients give a global positive smooth density. In dimension zero both determinants are one, and on empty $M$ gluing gives the unique section. [F1, step 1.1] ∎

## Source locator

Lee, Propositions 15.29–15.33 and Corollary 15.34, pp.389–391; density construction and integration pp.428–433.
