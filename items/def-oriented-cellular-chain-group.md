---
id: def-oriented-cellular-chain-group
kind: definition
title: Oriented cellular chain group
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-relative-homology-of-consecutive-cw-skeleta]
verification: {precheck: n/a, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Definition

For a CW complex $X$ and abelian group $G$, set $C_n^{\mathrm{cell}}(X;G)=H_n(X^n,X^{n-1};G)$ and $C_n^{\mathrm{cell}}(X;G)=0$ for $n<0$. By [[thm-relative-homology-of-consecutive-cw-skeleta]], an orientation of each characteristic $n$-disk selects the corresponding direct-summand copy of $G$.
