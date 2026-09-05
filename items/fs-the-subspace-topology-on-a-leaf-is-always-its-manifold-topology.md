---
id: fs-the-subspace-topology-on-a-leaf-is-always-its-manifold-topology
kind: false-statement
title: "The subspace topology on a leaf is always its manifold topology"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-integral-manifold-of-a-distribution,
       fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

The subspace topology on a leaf is always its manifold topology.

## Facts & Assumptions

**Given:** Use the irrational linear leaf
$t \mapsto [(t,\alpha t)] \subset \mathbb T^2$ with irrational $\alpha$.

[A1] Intrinsically, the leaf is diffeomorphic to $\mathbb R$.

## Refutation

**Proof technique:** direct.

1.1 As an immersed manifold, the leaf carries the topology transported from [given]
$\mathbb R$ by its parametrization. [given]

1.2 If the subspace topology from $\mathbb T^2$ agreed with that intrinsic [given]
topology, the parametrization would be a topological embedding. The leaf would
then be an embedded submanifold of the torus. [given]

1.3 But the same irrational leaf is dense and not embedded. Therefore its [given]
subspace topology cannot equal its manifold topology. [given]

2.1 Hence the statement is false. [given] ∎ [given]
