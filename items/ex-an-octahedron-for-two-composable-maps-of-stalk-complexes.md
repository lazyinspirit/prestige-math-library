---
id: ex-an-octahedron-for-two-composable-maps-of-stalk-complexes
kind: example
title: "An octahedron for two composable maps of stalk complexes"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf, lem-the-three-cone-calculation-for-a-composite-chain-map, def-zero-and-stalk-complex]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Proposition 13.10.3"
      url: "https://stacks.math.columbia.edu/tag/014P"
---

## Example

For $S^0(\mathbb Z)\xrightarrow mS^0(\mathbb Z)\xrightarrow nS^0(\mathbb Z)$,
the three two-term cones of $m$, $nm$, and $n$ are joined by a distinguished
triangle $\operatorname{Cone}(m)\to\operatorname{Cone}(nm)\to\operatorname{Cone}(n)\to\operatorname{Cone}(m)[1]$.

## Facts & Assumptions

**Given:** The displayed data.

[F1] The three-cone calculation supplies the comparison maps $\alpha$ and
$\beta$ ([[lem-the-three-cone-calculation-for-a-composite-chain-map]]).

[F2] The octahedral axiom supplies a signed distinguished triangle joining the
three cone objects
([[prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf]]).

## Verification

1.1 The maps are composable chain maps of stalk complexes. [given]

2.1 By [F1] the three-cone calculation provides the comparison maps $\alpha$ and $\beta$.  Applying [F2] in $K(\mathbf{Ab})$ supplies the signed fourth face and proves that the resulting triangle is distinguished. [F1, F2, step 1.1, given] ∎
