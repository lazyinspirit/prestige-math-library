---
id: def-alternating-and-augmenting-path
kind: definition
title: "Alternating and augmenting paths relative to a matching"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matching-maximum-perfect-and-matching-number, def-graph-walk-trail-path-and-cycle]
justified_by: []
aliases: []
landmark: true
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

## Definition

Let $M$ be a matching of $G$. A path is **$M$-alternating** if consecutive
edges alternately lie outside and inside $M$. It is **$M$-augmenting** if it is
$M$-alternating, its first and last edges lie outside $M$, and its two endpoints
are $M$-exposed. Thus an augmenting path has odd length, including the possible
one-edge path between two exposed vertices.
