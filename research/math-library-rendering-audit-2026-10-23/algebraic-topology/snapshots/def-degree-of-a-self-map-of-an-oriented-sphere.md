---
id: "def-degree-of-a-self-map-of-an-oriented-sphere"
kind: "definition"
title: "Degree of a self map of an oriented sphere"
deps: ["cor-homology-of-spheres", "prop-relative-homology-is-functorial-for-maps-of-pairs"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Degree, definition p.134"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Degree, definition p.134"
status: published
origin: "pipeline"
---

## Definition

Let $n\ge1$. Choose a generator $[S^n]$ of $H_n(S^n;\mathbb Z)\cong\mathbb Z$, using [[cor-homology-of-spheres]]. For a continuous self-map $f:S^n\to S^n$, its **degree** is the unique integer satisfying
$$f_*[S^n]=\deg(f)[S^n].$$
The induced map is furnished by [[prop-relative-homology-is-functorial-for-maps-of-pairs]] with empty subspaces. Replacing the same generator in source and target by its negative does not change the integer. For a map between separately oriented copies of $S^n$, use their separately specified generators; reversing just one orientation changes the sign. The unreduced definition here is restricted to $n\ge1$.
