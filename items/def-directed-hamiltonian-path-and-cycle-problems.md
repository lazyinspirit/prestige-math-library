---
id: def-directed-hamiltonian-path-and-cycle-problems
kind: definition
title: "Directed and undirected Hamiltonian path and cycle decision problems"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-graph-walk-trail-path-and-cycle, def-multigraph-loop-and-digraph]
sources:
  scraped: []
  references:
    - title: "MIT 6.045J / 18.400J, Lecture 16: More NP-completeness"
      url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/567d75f927ca3c11a819baee9ab260ac_MIT6_045JS11_lec16.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $D=(V,A)$ be a finite directed graph in the sense of
[[def-multigraph-loop-and-digraph]]. A **directed Hamiltonian path** in $D$ is
an ordering
$$ v_1,\ldots,v_n $$
of all vertices of $V$ such that $(v_i,v_{i+1})\in A$ for each $1\le i<n$. A
**directed Hamiltonian cycle** in $D$ is a cyclic ordering
$$ v_1,\ldots,v_n,v_1 $$
of all vertices of $V$ such that $(v_i,v_{i+1})\in A$ for $1\le i<n$ and
$(v_n,v_1)\in A$.

Let $G$ be a finite simple graph. An **undirected Hamiltonian path** in $G$ is
a path in the sense of [[def-graph-walk-trail-path-and-cycle]] that visits
every vertex exactly once, and an **undirected Hamiltonian cycle** in $G$ is a
cycle there that visits every vertex exactly once.

The four decision problems are:

- **directed Hamiltonian path**: given $D$, decide whether $D$ has a directed
  Hamiltonian path;
- **directed Hamiltonian cycle**: given $D$, decide whether $D$ has a directed
  Hamiltonian cycle;
- **undirected Hamiltonian path**: given $G$, decide whether $G$ has an
  undirected Hamiltonian path;
- **undirected Hamiltonian cycle**: given $G$, decide whether $G$ has an
  undirected Hamiltonian cycle.
