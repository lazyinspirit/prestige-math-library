---
id: def-velocity-derivation-of-a-smooth-curve
kind: definition
title: "The velocity derivation of a smooth curve"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-germ-of-a-smooth-function-at-a-point]
justified_by: [lem-curve-velocity-depends-only-on-the-contact-class]
aliases: []
landmark: false
verification:
  audited: 2026-08-30
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Definition

Let $M$ be a smooth manifold, let $p\in M$, and let $\gamma$ be a smooth curve
in $M$ with $\gamma(0)=p$. Its **velocity derivation at $0$** is the map
$\dot\gamma(0):C_p^\infty(M)\to\mathbb R$ defined by
$$ \dot\gamma(0)([f]):=(f\circ\gamma)'(0). $$
This is representative independent because equal germ representatives agree on
a neighbourhood of $p$, so their composites with $\gamma$ agree near $0$.
Linearity and the Leibniz rule follow from the corresponding one-variable
derivative rules, so $\dot\gamma(0)$ is a derivation at $p$.
