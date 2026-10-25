---
id: thm-ford-fulkerson-integral-max-flow-min-cut
kind: theorem
title: "Ford-Fulkerson terminates for finite integer capacities and proves max-flow min-cut with an integral maximum flow"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-residual-augmentation, lem-no-augmenting-path-gives-tight-cut, lem-flow-cut-identity-and-weak-duality, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "M. Goemans, Lecture notes on flows and cuts"
      url: "https://math.mit.edu/~goemans/18453S17/flowscuts.pdf"
pipeline_run: null
---

## Statement

In a finite integral $s$-$t$ network, begin with the zero flow and repeatedly
augment along any residual $s$-$t$ path by its integral bottleneck. This process
terminates. Its final integral flow $f^*$ is maximum, and
$$|f^*|=\min\{c(S):S\text{ is an }s\text{-}t\text{ cut}\}.$$

## Facts & Assumptions

**Given:** A finite integral $s$-$t$ network and the augmenting-path process from its zero flow.

[L1] Residual bottleneck augmentation preserves feasibility and raises the value by its positive integral bottleneck ([[lem-residual-augmentation]]).

[L2] A flow with no residual $s$-$t$ path has a cut of capacity equal to its value ([[lem-no-augmenting-path-gives-tight-cut]]).

[L3] Every feasible flow has value at most every cut capacity ([[lem-flow-cut-identity-and-weak-duality]]).

## Proof

**Proof technique:** constructive.

1.1 The zero flow is feasible and integral, and every feasible flow has value at most the finite integer sum of capacities of arcs leaving $s$. [given, construct]

1.2 Each augmentation increases the integral value by at least one by [L1], so no more than that finite source-capacity bound many augmentations occur. [L1]

1.3 At termination the final flow has no residual path, so [L2] supplies a cut $S$ with $c(S)=|f^*|$. [L2]

1.4 By [L3], every feasible flow has value at most $c(S)=|f^*|$, and every cut has capacity at least $|f^*|$. [L3]

2.1 Steps 1.1--1.4 prove termination, integrality, maximality of $f^*$, and equality with the minimum cut capacity. [step 1.1, step 1.2, step 1.3, step 1.4, discharge-construct] ∎

## Remarks

- Integer bottlenecks are the termination mechanism. This theorem makes no assertion about arbitrary real capacities.
