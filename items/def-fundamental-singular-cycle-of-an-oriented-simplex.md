---
id: def-fundamental-singular-cycle-of-an-oriented-simplex
kind: definition
title: "The affine characteristic singular simplex of an ordered simplex"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-geometric-realization-of-an-abstract-simplicial-complex, def-standard-topological-simplex-and-its-affine-face-maps]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: frontier-30
---

## Definition

Let $\sigma=[v_0,\dots,v_n]$ be an $n$-simplex of an abstract simplicial
complex $K$ together with an ordering of its vertices. Its geometric
realization $|\sigma|$ is the simplex in $|K|$ spanned by those vertices
([[def-geometric-realization-of-an-abstract-simplicial-complex]]).

The **affine characteristic singular simplex** of $\sigma$ is the unique affine
map
$$\chi_\sigma:\Delta^n\to |K|$$
that sends the vertex $v_i$ of the standard simplex
([[def-standard-topological-simplex-and-its-affine-face-maps]]) to the vertex
$v_i$ of $|\sigma|$ for each $i$. Its image is exactly $|\sigma|$.

Changing the chosen ordering by a permutation $\pi$ precomposes $\chi_\sigma$
with the affine self-map of $\Delta^n$ that permutes its vertices by $\pi$.
Different orderings therefore generally give different singular simplices, and
the comparison map below removes this ambiguity by fixing a global vertex order
on the simplicial complex.
