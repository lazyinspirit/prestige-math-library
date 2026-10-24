---
id: def-lie-derivative-of-a-vector-field
kind: definition
title: "The Lie derivative of a vector field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism, thm-fundamental-theorem-on-flows, prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains]
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
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Definition

Let $X$ be a smooth vector field with maximal flow $\Phi$, and let $Y$ be another
smooth vector field on $M$. The **Lie derivative of $Y$ along $X$** is the vector
field defined by

$$ (\mathcal L_XY)_p:=\left.\frac{d}{dt}\right|_{t=0} (\Phi_{-t})_*Y_{\Phi_t(p)}. $$

The inverse-time pushforward is the sign convention that later yields
$\mathcal L_XY=[X,Y]$.
