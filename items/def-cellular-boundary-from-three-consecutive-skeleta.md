---
id: def-cellular-boundary-from-three-consecutive-skeleta
kind: definition
title: Cellular boundary from three consecutive skeleta
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-oriented-cellular-chain-group, thm-long-exact-sequence-of-a-pair-in-singular-homology]
verification: {precheck: n/a, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Definition

For $n\geq1$, define $d_n:C_n^{\mathrm{cell}}(X;G)\to C_{n-1}^{\mathrm{cell}}(X;G)$ as the connecting map $H_n(X^n,X^{n-1};G)\to H_{n-1}(X^{n-1};G)$ from [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], followed by the quotient map to $H_{n-1}(X^{n-1},X^{n-2};G)$. Set $d_0=0$.
