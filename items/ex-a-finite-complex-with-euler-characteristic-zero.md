---
id: ex-a-finite-complex-with-euler-characteristic-zero
kind: example
title: "A finite complex with Euler characteristic zero"
status: draft
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-simplicial-euler-characteristic, thm-euler-poincare-formula-for-a-finite-simplicial-complex, ex-boundary-of-a-triangle-has-first-homology-z]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Example

The boundary of a triangle is a finite simplicial complex with $3$ vertices and
$3$ edges, so
$$\chi(K)=3-3=0.$$
Its simplicial homology groups are
$H_0^{\mathrm{simp}}(K)\cong \mathbb Z$ and $H_1^{\mathrm{simp}}(K)\cong \mathbb Z$,
with no higher homology. Therefore
$$\operatorname{rank} H_0^{\mathrm{simp}}(K)-\operatorname{rank} H_1^{\mathrm{simp}}(K)=1-1=0,$$
which matches the simplex count. This is the smallest noncontractible example
on the page with Euler characteristic zero.
