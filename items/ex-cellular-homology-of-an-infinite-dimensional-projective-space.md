---
id: ex-cellular-homology-of-an-infinite-dimensional-projective-space
kind: example
title: Cellular homology of an infinite-dimensional projective space
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-cellular-homology-of-real-projective-space, lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Example 2.42
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Example

$\mathbb {RP}^\infty$ has $H_0\cong\mathbb Z$, $H_n\cong\mathbb Z/2$ for positive odd $n$, and $H_n=0$ for positive even $n$.

## Facts & Assumptions

**Given:** The filtration by finite projective skeleta.

## Verification

**Proof technique:** direct.

1.1 The finite skeleton $\mathbb {RP}^m$ has the alternating $0,2$ cellular complex and the resulting singular homology computed in [[ex-cellular-homology-of-real-projective-space]].  In each fixed degree these groups and the inclusion maps stabilize once $m$ is larger than that degree. [given]

2.1 Taking the stabilized groups and applying [[lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology]] yields the stated infinite-dimensional calculation. [step 1.1] ∎
