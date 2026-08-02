---
id: ex-fundamental-group-of-the-unit-interval
kind: example
title: "The fundamental group of the unit interval is trivial at every basepoint"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-convex-subsets-have-trivial-fundamental-group,
       def-based-loops-and-fundamental-group, def-interval,
       def-convex-subset-of-euclidean-space]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Chapter 1, Example 1.4"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Example

For every $x_0\in I=[0,1]$, the fundamental group $\pi_1(I,x_0)$ has one
element. A loop $\alpha$ contracts relative to its endpoints by

$$H(s,t)=(1-t)\alpha(s)+t x_0.$$

## Facts & Assumptions

**Given:** A basepoint $x_0\in I$ and a based loop $\alpha:I\to I$.

[L1] The unit interval is convex: if $x,y,t\in[0,1]$, then
$0\le(1-t)x+ty\le1$, so the convex combination remains in $[0,1]$
([[def-interval]], [[def-convex-subset-of-euclidean-space]], algebra).

[L2] Every nonempty convex Euclidean subset is simply connected, with the displayed straight-line endpoint homotopy ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[L3] Elements of $\pi_1(I,x_0)$ are endpoint-homotopy classes of based loops ([[def-based-loops-and-fundamental-group]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the interval satisfies the hypotheses of [L2], so the displayed formula is an endpoint-fixed homotopy from $\alpha$ to the constant loop at $x_0$. [L1, L2]

2.1 Thus every class in $\pi_1(I,x_0)$ equals the constant-loop class, and the group has exactly one element. [step 1.1, L3] ∎
