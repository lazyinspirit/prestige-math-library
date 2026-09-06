---
id: rem-projective-coordinate-ring-not-function-ring
kind: remark
title: "projective coordinate ring not function ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homogeneous-coordinate-ring, thm-global-regular-functions-projective-variety]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

Assume the Axiom of Choice. For an irreducible projective variety, $S(X)$ is
a graded coordinate ring and normally has positive-degree elements, while
scalar-valued global regular functions are constant. In particular
$x_0\in k[x_0,\ldots,x_n]$ does not define a scalar-valued function on
$\mathbf P_k^n$, because it changes under rescaling.
