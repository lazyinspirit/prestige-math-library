---
id: "def-riemannian-gradient"
kind: "definition"
title: "Riemannian gradient"
deps: ["thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms", "prop-exterior-derivative-of-a-function-is-its-differential"]
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
    - title: "Ved Datar, Lectures on Riemannian Geometry, September 2025"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
---

## Definition

For a smooth real function $f$, its **Riemannian gradient** is $\operatorname{grad}_g f=(df)^\sharp$.

[[prop-exterior-derivative-of-a-function-is-its-differential]] identifies $df(X)=Xf$. The smooth bundle isomorphism in [[thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms]] therefore makes the gradient a smooth vector field. In coordinates $(\operatorname{grad}_g f)^i=\sum_jg^{ij}\partial_jf$. Constants, and all functions in dimension zero, have zero gradient.

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
