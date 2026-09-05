---
id: def-rational-function-regular-at-point
kind: definition
title: "A rational function is regular at a point exactly when it lies in the local ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function-field-variety, def-residue-field-classical-point, thm-local-ring-affine-variety-localization]
justified_by: []
sources:
  scraped: []
  references:
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, Lemma 3.4.4"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
    - title: "J. S. Milne, Algebraic Geometry, Chapter 5k-l"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
verification:
  precheck: n/a
---

## Definition

Let $X$ be a classical affine variety, let $x \in X$, and let
$r \in k(X)$. Under the identification
$$ \mathcal O_{X,x}\cong k[X]_{\mathfrak m_x} \subseteq k(X) $$
from [[thm-local-ring-affine-variety-localization]], the rational function $r$
is **regular at $x$** when $r \in \mathcal O_{X,x}$.

If $r$ is regular at $x$, its image in the residue field
$$ \kappa(x)=\mathcal O_{X,x}/\mathfrak m_x $$
is called the **value** of $r$ at $x$. In the classical setting
[[def-residue-field-classical-point]] identifies this value with an element of
the ground field $k$.
