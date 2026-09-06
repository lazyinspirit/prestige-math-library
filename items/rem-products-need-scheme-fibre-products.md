---
id: rem-products-need-scheme-fibre-products
kind: remark
title: Why scheme fibre products are needed beyond the classical setting
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-affine-variety-product-coordinate-ring, def-base-change-classical-varieties]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, Aside 5.34
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: MIT 18.725 Algebraic Geometry, Lecture 7, Example 9
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

Classical affine products here use reduced coordinate algebras over an algebraically closed field and only construct selected pullbacks. Tensor products and quotients can retain nilpotents or acquire additional components after a field extension, data that a reduced point set discards. Scheme fibre products retain that data and provide the unrestricted existence theorem; they are developed later rather than silently imported here.
