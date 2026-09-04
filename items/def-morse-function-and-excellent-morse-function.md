---
id: def-morse-function-and-excellent-morse-function
kind: definition
title: "Morse functions and excellent Morse functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-critical-point-and-critical-value-of-a-smooth-function, def-nondegenerate-critical-point-nullity-index-and-coindex]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed."
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Definition

Let $M$ be a smooth manifold and let $f:M\to\mathbb R$ be smooth.

- The function $f$ is a **Morse function** when every critical point of $f$ is
  nondegenerate
  ([[def-critical-point-and-critical-value-of-a-smooth-function]],
  [[def-nondegenerate-critical-point-nullity-index-and-coindex]]).
- The function $f$ is an **excellent Morse function** when it is Morse and any
  two distinct critical points have distinct critical values.

Thus excellence is stronger than the Morse condition: it excludes repeated
critical values, not repeated indices.
