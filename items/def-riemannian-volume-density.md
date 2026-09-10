---
id: "def-riemannian-volume-density"
kind: "definition"
title: "Riemannian volume density"
deps: ["prop-coordinate-criterion-for-a-riemannian-metric", "def-density-bundle-and-smooth-density"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
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
justified_by: ["lem-the-riemannian-volume-density-is-coordinate-independent"]
status: published
origin: "pipeline"
---

## Definition

The **Riemannian volume density** is $\mu_g=\sqrt{\det G_x}\,|dx^1\cdots dx^n|$ in coordinates.

The matrix is that of [[prop-coordinate-criterion-for-a-riemannian-metric]], so its determinant is positive and smooth. The density frames and their absolute-Jacobian law are [[def-density-bundle-and-smooth-density]]. In dimension zero take the empty determinant to be one, giving weight one at every point, independently of orientation. The compatibility of these local formulas is proved in [[lem-the-riemannian-volume-density-is-coordinate-independent]].

## Source locator

Lee, Propositions 15.29–15.33 and Corollary 15.34, pp.389–391; density construction and integration pp.428–433.
