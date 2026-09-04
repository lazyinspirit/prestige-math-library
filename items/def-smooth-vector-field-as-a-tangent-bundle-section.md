---
id: def-smooth-vector-field-as-a-tangent-bundle-section
kind: definition
title: "A smooth vector field is a smooth section of the tangent bundle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-tangent-bundle-as-a-disjoint-union, thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure, def-smooth-section-local-section-and-support]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Definition

Assume $\mathrm{AC}_\omega$, so that $TM$ carries its canonical smooth
structure. Let $M$ be a smooth manifold. A **smooth vector field** on $M$ is a
smooth section

$$ X:M\to TM $$

of the tangent-bundle projection $\pi:TM\to M$. Thus $\pi\circ X=\operatorname{id}_M$.

Equivalently, for each $p\in M$ the value $X(p)$ is a tangent vector in $T_pM$,
and the dependence on $p$ is smooth with respect to the canonical smooth
structure on $TM$.
