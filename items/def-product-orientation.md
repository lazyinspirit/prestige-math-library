---
id: def-product-orientation
kind: definition
title: "Product orientations"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, prop-functoriality-of-finite-dimensional-exterior-powers]
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

For oriented vector spaces use the ordered determinant isomorphism $\det(V\oplus W)\cong\det V\otimes\det W$ and take the tensor product of the selected rays. Fibrewise this defines the product orientation.
