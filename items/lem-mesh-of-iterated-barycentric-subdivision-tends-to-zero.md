---
id: lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero
kind: lemma
title: "Mesh tends to zero under iterated subdivision"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-barycentric-subdivision-chain-operator]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

For an affine $n$-simplex of finite diameter and $n>0$, every simplex in its
$r$-fold barycentric subdivision has diameter at most $(n/(n+1))^r$ times the
original diameter. Hence the mesh tends to zero.

## Facts & Assumptions

**Given:** An affine $n$-simplex with $n>0$ and finite diameter $d$.

## Proof

**Proof technique:** direct.

1.1 Each barycentric subsimplex has vertices which are barycenters of nested faces; their convex-coordinate differences have diameter at most $n/(n+1)$ times that of the parent. [given, algebra]

2.1 Iterating the estimate yields $(n/(n+1))^rd$. Since $0<n/(n+1)<1$, this tends to $0$ as $r$ tends to infinity. [step 1.1, algebra] ∎
