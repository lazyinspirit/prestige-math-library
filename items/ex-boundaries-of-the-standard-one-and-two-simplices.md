---
id: ex-boundaries-of-the-standard-one-and-two-simplices
kind: example
title: "Boundaries of the standard one- and two-simplices"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-standard-topological-simplex-and-its-affine-face-maps, def-singular-boundary-operator]
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
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: frontier-30
---

## Example

Let $\iota_1:\Delta^1\to\Delta^1$ and $\iota_2:\Delta^2\to\Delta^2$ be the
identity singular simplices.

Their singular boundaries are
$$\partial\iota_1=\iota_1\delta_0-\iota_1\delta_1=v_1-v_0$$
and
$$\partial\iota_2=\iota_2\delta_0-\iota_2\delta_1+\iota_2\delta_2,$$
the alternating sum of the three oriented edges of the standard triangle.

## Facts & Assumptions

**Given:** The identity singular simplices $\iota_1:\Delta^1\to\Delta^1$ and
$\iota_2:\Delta^2\to\Delta^2$.

[L1] The affine face maps $\delta_i$ insert a zero in the $i$th slot
([[def-standard-topological-simplex-and-its-affine-face-maps]]).

[L2] The singular boundary is the alternating sum of the face restrictions
([[def-singular-boundary-operator]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the two face maps of $\Delta^1$ pick out the terminal and initial vertices of the interval. Therefore [L2] gives $$\partial\iota_1=\iota_1\delta_0-\iota_1\delta_1=v_1-v_0.$$ [L1, L2, given]

2.1 Again by [L1], the three face maps of $\Delta^2$ are the affine inclusions of the three edges opposite $v_0$, $v_1$, and $v_2$. Applying [L2] gives the displayed alternating sum $$\partial\iota_2=\iota_2\delta_0-\iota_2\delta_1+\iota_2\delta_2.$$ [L1, L2, step 1.1] ∎