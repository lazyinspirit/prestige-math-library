---
id: rem-total-derivative-conventions-and-linear-map-seam
kind: remark
title: "Dimension, openness, norm, Jacobian, and the native Euclidean linear-map agreement seam"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-rn-conventions-and-scope, def-euclidean-linear-map, def-total-derivative-in-euclidean-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

The derivative definition is stated on open Euclidean domains so every sufficiently small increment is admissible. Its remainder uses the Euclidean norm; in finite-dimensional Euclidean spaces an equivalent norm would give the same differentiability notion, but that change is not part of this definition.

The linear-map definition on this page is deliberately the concrete Euclidean special case identified in [[rem-rn-conventions-and-scope]]. A future general linear-map development must prove agreement with [[def-euclidean-linear-map]], not silently replace the meaning of $Df(a)$.
