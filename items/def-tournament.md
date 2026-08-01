---
id: def-tournament
kind: definition
title: "A tournament is an orientation of a complete finite graph"
status: draft
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multigraph-loop-and-digraph, def-directed-walk-trail-path-cycle-and-strong-connectivity, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: null
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Tournament"
      url: "https://encyclopediaofmath.org/wiki/Tournament"
pipeline_run: null
---

## Definition

A **tournament** is a finite digraph $T=(V,A)$ such that for every two distinct
vertices $u,v$, exactly one of $(u,v)$ and $(v,u)$ is an arc, and no loop is an
arc. Equivalently, it is obtained by orienting every edge of the complete graph
on $V$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

A tournament is **strong** when it is strongly connected in the sense of
[[def-directed-walk-trail-path-cycle-and-strong-connectivity]]. Digraph
terminology follows [[def-multigraph-loop-and-digraph]].
