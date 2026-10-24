---
id: def-simplicial-map-and-its-geometric-realization
kind: definition
title: "A simplicial map and its geometric realization"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abstract-simplicial-complex, def-geometric-realization-of-an-abstract-simplicial-complex]
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

## Definition

Let $(V,K)$ and $(W,L)$ be abstract simplicial complexes. A function
$f:V \to W$ is a **simplicial map** if $f(\sigma):=\{f(v):v \in \sigma\}$ is a
simplex of $L$ whenever $\sigma$ is a simplex of $K$.

The **geometric realization** of $f$ is the map $|f|:|K| \to |L|$ defined by
$$|f|(\alpha)(w):=\sum_{v \in f^{-1}(w)} \alpha(v).$$
Because $\alpha$ has finite support, the sum is finite. The support of
$|f|(\alpha)$ is contained in $f(\operatorname{supp}(\alpha))$, so it is again a
simplex of $L$.
