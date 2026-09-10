---
id: "def-riemannian-divergence"
kind: "definition"
title: "Riemannian divergence"
deps: ["def-riemannian-volume-form-on-an-oriented-manifold", "lem-the-riemannian-volume-density-is-coordinate-independent", "def-divergence-relative-to-a-volume-form"]
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
status: published
origin: "pipeline"
---

## Definition

The **Riemannian divergence** is defined in a local orientation by $\mathcal L_X\operatorname{vol}_g=(\operatorname{div}_gX)\operatorname{vol}_g$.

Use [[def-divergence-relative-to-a-volume-form]] with the local form of [[def-riemannian-volume-form-on-an-oriented-manifold]]. On overlaps, changing orientation multiplies the nonvanishing form by a locally constant sign. The Lie derivative multiplies by that same sign, so its scalar quotient is unchanged and glues even on nonorientable manifolds. Equivalently this differentiates the positive density of [[lem-the-riemannian-volume-density-is-coordinate-independent]] and divides by it; the equivalence is local in a density frame. At a boundary use local smooth extensions. In dimension zero every vector field, and hence divergence, is zero.

## Source locator

Lee, pp.423–424, definition and Exercise 16.31.
