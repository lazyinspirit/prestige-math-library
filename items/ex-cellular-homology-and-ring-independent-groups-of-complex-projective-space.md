---
id: ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space
kind: example
title: Cellular homology and ring-independent groups of complex projective space
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary, thm-cellular-homology-computes-singular-homology]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Example

$\mathbb {CP}^m$ has one cell in each even dimension $0,2,\ldots,2m$. Hence for any abelian group $G$, $H_{2i}(\mathbb {CP}^m;G)\cong G$ for $0\leq i\leq m$ and all odd-degree groups vanish.

## Facts & Assumptions

**Given:** The standard one-even-cell-per-dimension CW structure.

## Verification

**Proof technique:** direct.

1.1 There are no adjacent-dimensional cells, so all cellular boundaries vanish by [[cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary]]. [given]

2.1 The cellular groups are one copy of $G$ in the listed even dimensions and zero otherwise, and the comparison theorem gives the asserted singular groups. [step 1.1] ∎
