---
id: def-graph-walk-trail-path-and-cycle
kind: definition
title: "Walks, closed walks, trails, paths and cycles, with length equal to the number of traversed edges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "University of Lethbridge, Combinatorics: A Guided Tour, Paths and Cycles"
      url: "https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-PathsCycles.html"
pipeline_run: null
---

## Definition

Let $G=(V,E)$ be a graph. A **walk of length $\ell$** is a finite vertex list

$$W=(v_0,v_1,\ldots,v_\ell)$$

such that $\{v_{i-1},v_i\}\in E$ for every $1\le i\le\ell$. Its endpoints are
$v_0$ and $v_\ell$. The length is the number $\ell$ of traversed edges, not the
number of displayed vertices. A walk is **closed** when $v_0=v_\ell$.

A **trail** is a walk in which the traversed edges are distinct. A **path** is a
walk in which the vertices are distinct. In particular, $(v)$ is a path of
length $0$ from $v$ to itself.

A **cycle** is a closed walk $(v_0,\ldots,v_{\ell-1},v_\ell=v_0)$ of length
$\ell\ge3$ in which $v_0,\ldots,v_{\ell-1}$ are distinct. A graph is
**acyclic** when it contains no cycle. Reversing any walk, trail, path, or cycle
preserves its type and length.
