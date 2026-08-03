---
id: def-simply-connected
kind: definition
title: "Simply connected topological spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-path-connected, thm-fundamental-group-laws]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Chapter 1, Proposition 1.6"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

A topological space $X$ is **simply connected** when it is nonempty and
path-connected ([[def-path-connected]]) and, for every $x_0\in X$, the group
$\pi_1(X,x_0)$ has exactly one element.

Requiring every basepoint avoids presuming a change-of-basepoint theorem. For a
path-connected space that later theorem shows that checking one basepoint is
equivalent, but no such result is needed for this definition. The empty space
is path-connected under the published convention, but it is not simply
connected here because nonemptiness is explicit.
