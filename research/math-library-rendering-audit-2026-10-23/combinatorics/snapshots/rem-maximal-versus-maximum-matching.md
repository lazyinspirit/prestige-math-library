---
id: rem-maximal-versus-maximum-matching
kind: remark
title: "Maximal means inclusion-maximal; maximum means largest cardinality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matching-maximum-perfect-and-matching-number]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "M. Goemans, Lecture notes on bipartite matching"
      url: "https://math.mit.edu/~goemans/18433S07/matching-notes.pdf"
pipeline_run: null
---

## Remark

Every maximum matching is maximal: a strict matching extension has strictly
larger cardinality. The converse is not a definition and is false in general;
maximal only rules out adding edges while preserving the ones already chosen.
