---
id: def-barycentric-subdivision-chain-operator
kind: definition
title: "Barycentric subdivision operator"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-barycenter-and-affine-cone-on-a-singular-chain, def-singular-boundary-operator]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Definition

Define $S$ on a singular $0$-simplex to be the identity. Recursively, for an
$n$-simplex $\sigma$ with $n>0$, set $S(\sigma)=b_\sigma S(\partial\sigma)$,
and extend $G$-linearly to finite chains. It is the **barycentric subdivision
operator** with the cone orientation of [[def-barycenter-and-affine-cone-on-a-singular-chain]].
