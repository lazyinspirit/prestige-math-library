---
id: def-euler-trail-and-circuit
kind: definition
title: "Euler trails and Euler circuits in multigraphs and digraphs"
status: published
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multigraph-loop-and-digraph, def-graph-walk-trail-path-and-cycle, def-directed-walk-trail-path-cycle-and-strong-connectivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: null
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Euler Tours and Trails"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-ToursTrails.html"
pipeline_run: null
---

## Definition

In a finite undirected multigraph, a **walk of length $\ell$** is an alternating
list

$$v_0,e_1,v_1,e_2,\ldots,e_\ell,v_\ell$$

such that the endpoint set assigned to $e_i$ is
$\{v_{i-1},v_i\}$ for each $i$. Thus the particular edge is recorded, parallel
edges remain distinguishable, and $v_{i-1}=v_i$ precisely when that step uses a
loop. The walk is closed when $v_0=v_\ell$, and it is a **trail** when the
displayed edges are distinct.

An **Euler trail** is a trail that uses every edge exactly once. An **Euler
circuit** is a closed Euler trail, and a multigraph is **Eulerian** when it has
an Euler circuit. A length-zero closed trail at the sole vertex of the edgeless
one-vertex multigraph is an Euler circuit.

In a finite digraph, a **directed Euler trail** is a directed trail that uses
every arc exactly once. A **directed Euler circuit** is a closed directed Euler
trail, and a digraph is **directed Eulerian** when it has one. The simple-graph
walk conventions are in [[def-graph-walk-trail-path-and-cycle]], and the
directed-trail terminology is that of
[[def-directed-walk-trail-path-cycle-and-strong-connectivity]].
