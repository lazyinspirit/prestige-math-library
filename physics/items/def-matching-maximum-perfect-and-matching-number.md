---
id: def-matching-maximum-perfect-and-matching-number
kind: definition
title: "Matchings, saturated vertices, maximal and maximum matchings, perfect matchings and $\\nu(G)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-finite-cardinality]
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

Let $G=(V,E)$ be a finite simple graph. A **matching** is a set $M\subseteq E$
such that no two distinct edges of $M$ have a common endpoint. A vertex is
**$M$-saturated** when it is an endpoint of an edge of $M$, and **$M$-exposed**
otherwise. The matching is **perfect** when every vertex is $M$-saturated.

A matching is **maximal** when no strictly larger matching contains it, and is
**maximum** when it has greatest cardinality among all matchings of $G$. The
**matching number** is
$$\nu(G):=\max\{\lvert M\rvert:M\text{ is a matching of }G\}.$$
The maximum exists because $E$ is finite and the empty set is a matching.

## Remarks

- A maximal matching need not be maximum; the companion counterexample makes
  the distinction concrete.
