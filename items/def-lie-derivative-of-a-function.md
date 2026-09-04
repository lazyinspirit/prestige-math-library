---
id: def-lie-derivative-of-a-function
kind: definition
title: "The Lie derivative of a function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-action-of-a-vector-field-on-smooth-functions]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

If $X$ is a smooth vector field and $f\in C^\infty(M)$, the **Lie derivative of
$f$ along $X$** is

$$ \mathcal L_X f:=Xf. $$

Thus the Lie derivative of a function is just differentiation in the direction
of the vector field.
