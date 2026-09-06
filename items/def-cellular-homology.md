---
id: def-cellular-homology
kind: definition
title: Cellular homology
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-oriented-cellular-chain-group, def-cellular-boundary-from-three-consecutive-skeleta, lem-the-cellular-boundary-squares-to-zero]
verification:
  audited: 2026-09-07
  precheck: n/a
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Definition

Let $X$ be a CW complex, $G$ an abelian group, and $n\geq0$.
The **cellular homology** of $X$ with coefficients in $G$ is
$H_n^{\mathrm{cell}}(X;G)=\ker d_n/\operatorname{im}d_{n+1}$ for the cellular
groups of [[def-oriented-cellular-chain-group]], with differentials defined in
[[def-cellular-boundary-from-three-consecutive-skeleta]].  These maps form a
chain complex by [[lem-the-cellular-boundary-squares-to-zero]].
