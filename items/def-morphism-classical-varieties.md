---
id: def-morphism-classical-varieties
kind: definition
title: "Morphisms of classical affine varieties"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-function-classical-variety, thm-global-regular-functions-affine-variety-coordinate-ring]
justified_by: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 3.26"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, Exercise 3.2.5"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $X$ and $Y$ be classical affine varieties over an algebraically closed field
$k$. A map $\varphi:X \to Y$ is a **morphism** when for every open subset
$V \subseteq Y$ and every regular function $f \in \mathcal O_Y(V)$, the pullback
$$ f\circ\varphi:\varphi^{-1}(V)\to k $$
is regular on $\varphi^{-1}(V)$.

Because $Y$ is affine, it is enough to test pullback on global regular
functions. By [[thm-global-regular-functions-affine-variety-coordinate-ring]],
those are exactly the elements of $k[Y]$.
