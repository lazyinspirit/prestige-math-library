---
id: ex-the-tail-swap-involution-on-an-intersecting-pair
kind: example
title: "The tail-swap involution on a concrete intersecting pair"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [lem-sign-reversing-involution-on-intersecting-path-systems, def-path-system-and-non-intersecting-path-system, def-monotone-lattice-path]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.13'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Example

Take the identity system with

$$P_1: (1,0)\to(2,1), \qquad P_2:(0,1)\to(1,2),$$

where $P_1$ has step word `NE` and $P_2$ has step word `EN`. The two paths meet
at the lattice point $(1,1)$.

## Facts & Assumptions

**Given:** the intersecting pair above.

[L1] The intersecting-system involution swaps the tails at the first canonical intersection point and changes the permutation by a transposition ([[lem-sign-reversing-involution-on-intersecting-path-systems]]).

## Verification

**Proof technique:** direct.

1.1 The first common point of $P_1$ and $P_2$ is $(1,1)$, reached after the first step in each path. [given]

2.1 Splitting at $(1,1)$, the prefixes are `N` and `E`, and the tails are `E` and `N`; swapping the tails therefore gives the new pair `NN` from $(1,0)$ to $(1,2)$ and `EE` from $(0,1)$ to $(2,1)$. [L1, step 1.1]

3.1 The new pair carries the transposed endpoint assignment, and applying the same tail swap at $(1,1)$ again returns the original pair. That is exactly the involution property of [L1] in this concrete case. [L1, step 2.1] ∎

## Remarks

- The example shows why the meeting point has to be selected canonically. A different intersection choice would not necessarily be undone by a second application.
