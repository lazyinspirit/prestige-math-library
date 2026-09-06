---
id: def-relative-homology-connecting-homomorphism-on-cycles
kind: definition
title: "Relative connecting homomorphism on cycles"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-long-exact-sequence-of-a-pair-in-singular-homology]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Definition

For a relative cycle represented by $c\in C_n(X;G)$ with $\partial c\in
C_{n-1}(A;G)$, define the connector in the pair sequence by
$$\delta[c]:=[\partial c]\in H_{n-1}(A;G).$$
This fixes the convention in which the quotient map is the third arrow of the
short exact sequence of chains.
