---
id: def-action-of-a-vector-field-on-smooth-functions
kind: definition
title: "The action of a vector field on smooth functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-vector-field-as-a-tangent-bundle-section, def-derivation-at-a-point-and-tangent-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Definition

Let $X$ be a smooth vector field on a smooth manifold $M$. Its **action on
smooth functions** is the operator

$$ X:C^\infty(M)\to C^\infty(M) $$

defined pointwise by

$$ (Xf)(p):=X_p(f) $$

for every $f\in C^\infty(M)$ and $p\in M$, where $X_p\in T_pM$ is viewed as a
derivation at $p$.
