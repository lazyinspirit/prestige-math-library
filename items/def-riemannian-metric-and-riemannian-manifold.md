---
id: "def-riemannian-metric-and-riemannian-manifold"
kind: "definition"
title: "Riemannian metric and riemannian manifold"
deps: ["def-smooth-tensor-field", "def-smooth-bundle-metric"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
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
---

## Definition

A **Riemannian metric** on a Hausdorff second-countable smooth manifold $M$ is a smooth symmetric covariant two-tensor $g$ such that $g_p(v,v)>0$ for every point $p$ and every nonzero $v\in T_pM$. A **Riemannian manifold** is the pair $(M,g)$.

This is a [[def-smooth-tensor-field]] giving a [[def-smooth-bundle-metric]] on $TM$. Dimension zero is allowed: its zero bilinear form is positive definite because there are no nonzero vectors. The empty manifold has its unique empty metric. Boundaries are allowed where stated, with smoothness understood up to the boundary.

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
