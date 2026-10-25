---
id: ex-doubled-origin-nonseparated-scheme
kind: example
title: "The affine line with doubled origin"
status: published
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-gluing-affine-schemes, def-open-immersion-schemes]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry, Example 5.9"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---
## Example

Let $k$ be a field. Glue two copies of $\operatorname{Spec}k[t]$ by the
identity on $D(t)$. The
two copies of every nonzero point are identified, but the two closed points
defined by the maximal ideal $(t)$ remain distinct. This is the affine line with doubled origin;
it is retained as the standard later test case for separatedness.
