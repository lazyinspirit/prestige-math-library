---
id: ex-the-first-three-bar-differentials
kind: example
title: "The first bar differentials"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-unnormalized-homogeneous-bar-resolution, lem-the-bar-differential-is-group-equivariant-and-squares-to-zero, def-bar-augmentation]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Example 6.5.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Example

The first faces are $d(g_0,g_1)=(g_1)-(g_0)$ and $d(g_0,g_1,g_2)=(g_1,g_2)-(g_0,g_2)+(g_0,g_1)$.

## Verification

**Given:** Alternating face deletion.

1.1 Substitution in the definition yields the two displayed formulas and $d(g_0)=0$. [given]

2.1 Applying $d$ to the three terms of the second formula produces each vertex twice with opposite signs, explicitly illustrating $d^2=0$. [step 1.1] ∎
