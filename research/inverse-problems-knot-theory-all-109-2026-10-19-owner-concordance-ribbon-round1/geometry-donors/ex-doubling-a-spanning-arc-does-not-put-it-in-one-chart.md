---
id: ex-doubling-a-spanning-arc-does-not-put-it-in-one-chart
kind: example
title: Doubling a spanning arc does not put it in one chart
status: draft
origin: session
deps:
  - thm-fundamental-group-of-the-circle
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $M=S^3\times[0,1]$ and let $\alpha$ be a proper arc with one endpoint on each boundary level. Double $M$ by gluing two copies along both boundary levels by the identity, and double $\alpha$ by the corresponding endpoint identifications. The resulting ambient manifold is $S^3\times S^1$, and the doubled arc is a circle whose projection to $S^1$ has degree one. It is therefore not contained in any single contractible ambient chart. Thus doubling does not let the interior one-pair-chart argument cover the entire doubled core.

## Facts & Assumptions

**Given:** The product, arc, and stated identity gluings.

[F1] The degree map from the fundamental group of $\mathbb R/\mathbb Z$ to $\mathbb Z$ is an isomorphism. [[thm-fundamental-group-of-the-circle]]

## Verification

1.1 The quotient of the two interval factors glued at their corresponding endpoints is a circle, so the ambient double is $S^3\times S^1$. Parametrize the original arc from its lower to its upper endpoint and write its height as $h:[0,1]\to[0,1]$. It satisfies $h(0)=0$ and $h(1)=1$. The homotopy $h_v(s)=(1-v)h(s)+vs$ fixes both endpoints. Use this homotopy on both doubled halves, traversing the second half in the opposite source direction. It descends continuously across the two gluing points and deforms the projection of the doubled core to the map going once around the doubled target interval. That projection therefore has degree one. [F1, given, construct]

2.1 If the doubled core were contained in a chart homeomorphic to $\mathbb R^4$, its loop would be null-homotopic by straight contraction in that chart. Composing the contraction with the projection to $S^1$ would contract a degree-one loop, contrary to [F1]. The same argument applies to a pair chart because its ambient chart is contractible. Cutting the doubled circle along a small segment restores an interior arc to which the one-chart construction applies, but leaves two chart-matching germs at that segment's ends; it does not identify those germs with a fiber-preserving product transition. [F1, step 1.1, construct] ∎

## Remarks

The essential loop is not an obstruction to the existence of a tubular neighborhood. It is the precise obstruction to applying the previously proved single-chart engulfing argument to the whole doubled core.
