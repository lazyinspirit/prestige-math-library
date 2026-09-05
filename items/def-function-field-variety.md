---
id: def-function-field-variety
kind: definition
title: "The function field of an irreducible classical affine variety"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-of-fractions, thm-affine-variety-prime-coordinate-ring]
justified_by: []
sources:
  scraped: []
  references:
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §3.1"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, Definition 3.4.3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $X$ be a classical affine variety. Since [[thm-affine-variety-prime-coordinate-ring]]
shows that $k[X]$ is an integral domain, its field of fractions exists.

The **function field** of $X$ is
$$ k(X):=\operatorname{Frac}(k[X]). $$
