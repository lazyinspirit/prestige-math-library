---
id: ex-cellular-boundary-matrix-of-a-closed-orientable-surface
kind: example
title: Cellular boundary matrix of a closed orientable surface
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cellular-boundary-is-the-incidence-degree-matrix, thm-cellular-homology-computes-singular-homology]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Example 2.36
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Example

For the genus-$g$ closed orientable surface, the one-vertex, $2g$-edge, one-face CW structure has zero cellular differentials. Thus $H_0\cong\mathbb Z$, $H_1\cong\mathbb Z^{2g}$, and $H_2\cong\mathbb Z$.

## Facts & Assumptions

**Given:** The polygon word $[a_1,b_1]\cdots[a_g,b_g]$.

## Verification

**Proof technique:** direct.

1.1 Each oriented edge occurs once positively and once negatively in the abelianization of the word, so every incidence coefficient of the face is zero; the edge-to-vertex boundary is also zero. [given]

2.1 The cellular complex is $0\to\mathbb Z\to\mathbb Z^{2g}\to\mathbb Z\to0$ with zero maps, and [[thm-cellular-homology-computes-singular-homology]] proves the calculation. [step 1.1] ∎
