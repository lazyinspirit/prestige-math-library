---
id: cex-a-vertex-map-need-not-be-simplicial
kind: counterexample
title: "A vertex map need not be simplicial"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-simplicial-map-and-its-geometric-realization]
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 01: Complexes"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2001%20Complexes.pdf"
---

## Statement refuted

Every function on vertex sets extends to a simplicial map.

Take the domain complex with vertices $u,v$ and edge $\{u,v\}$, and take the
target complex with vertices $a,b$ and no edge $\{a,b\}$. The vertex function
$u \mapsto a$, $v \mapsto b$ exists, but it sends the simplex $\{u,v\}$ to the
set $\{a,b\}$, which is not a simplex of the target. Hence it is not a
simplicial map.
