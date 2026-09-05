---
id: lem-overlapping-plaques-through-a-point-have-compatible-germs
kind: lemma
title: "Overlapping plaques through a point have compatible germs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-plaque-of-a-flat-chart,
       lem-integral-manifolds-are-locally-contained-in-plaques,
       thm-frobenius-local-coordinate-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Let $P_1$ and $P_2$ be plaques from flat charts of the same integrable
distribution, and suppose $p \in P_1 \cap P_2$. Then there is a neighborhood
$W$ of $p$ in $M$ such that

$$ P_1 \cap W = P_2 \cap W. $$

## Facts & Assumptions

**Given:** Two plaques $P_1$ and $P_2$ through the same point $p$.

[A1] Each plaque is itself a local integral manifold of the distribution.

## Proof

**Proof technique:** direct.

1.1 Apply the previous lemma to the connected integral manifold $P_1$ inside a [given]
flat chart producing $P_2$. Near $p$, the set $P_1$ must lie in the plaque of
that chart through $p$, namely in $P_2$. [given]

1.2 Reversing the roles of $P_1$ and $P_2$ gives the opposite inclusion on [given]
possibly smaller neighborhoods. Intersecting those neighborhoods yields an open
set $W$ with $P_1 \cap W = P_2 \cap W$. [given]

2.1 Thus plaques through the same point determine the same germ. [given] ∎ [given]
