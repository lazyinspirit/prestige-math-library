---
id: cex-compact-solid-without-jordan-volume
kind: counterexample
title: 'A compact subset of $\mathbb R^3$ need not be Jordan measurable'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure, def-multidimensional-grid-partition, lem-finite-sum-laws, thm-jordan-boundary-criterion, thm-heine-borel-rn, def-metric-interior-closure-boundary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement refuted

Every compact subset of $\mathbb R^3$ is Jordan measurable.

## Facts & Assumptions

**Given:** The Smith--Volterra--Cantor set $S$ of [[def-fat-cantor-set]] and $E:=S\times[0,1]^2$.

[F1] No cover of $S$ by intervals has total length below $2^{-1}$ ([[thm-fat-cantor-set-has-positive-measure]]).

[F2] A metric-bounded set is Jordan measurable if and only if its boundary is null, equivalently has content zero ([[thm-jordan-boundary-criterion]]).

[F3] The Smith--Volterra--Cantor set is closed, bounded, and nowhere dense ([[thm-fat-cantor-set-has-positive-measure]]).

## Counterexample

**Proof technique:** direct.

1.1 By [F3], the set $E$ is closed and bounded, hence compact, and $S$ has empty interior. Therefore $E$ has empty interior; being closed, it equals its boundary. [given, F3]

2.1 Consider any finite axis-parallel box cover of $E$. Partition $[0,1]^2$ at all endpoints of the last two coordinate intervals of those boxes. For the midpoint of each nondegenerate planar cell, the first-coordinate intervals of the boxes active there cover $S$, so [F1] makes their total length at least $1/2$. Multiplying by the cell area and summing shows that the original boxes have total volume at least $1/2$. [step 1.1, F1, algebra]

3.1 Thus $\partial E=E$ does not have content zero. By [F2], the compact set $E$ is not Jordan measurable, refuting the claim. [step 1.1, step 2.1, F2] ∎
