---
id: thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent
kind: theorem
title: "Normalized and unnormalized bars are homotopy equivalent"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-unnormalized-homogeneous-bar-resolution, def-normalized-bar-resolution, lem-degenerate-bar-chains-form-a-contractible-subcomplex]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, §6.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

The quotient map from unnormalized bars to normalized bars is a chain-homotopy equivalence.

## Proof

**Given:** The degenerate contractible subcomplex $D$.

1.1 The standard degeneracy splitting gives the unnormalized complex as normalized representatives plus $D$, and the quotient is projection onto the first summand. [given]

2.1 The inclusion of normalized representatives is a chain-map section; the contraction of $D$ supplies a homotopy from its composite with the quotient to the identity. Hence the two maps are homotopy inverses. [step 1.1] ∎
