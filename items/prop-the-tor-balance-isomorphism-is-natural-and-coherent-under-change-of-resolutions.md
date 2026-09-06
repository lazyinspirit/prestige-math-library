---
id: prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions
title: "The Tor balance isomorphism is natural and coherent under a change of resolutions"
kind: proposition
status: published
origin: pipeline
deps: ["thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic", "thm-projective-comparison-maps-are-unique-up-to-chain-homotopy"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

The balance isomorphisms for Tor commute with maps of modules and with replacement of either projective resolution.

## Proof

**Given:** comparison maps between two resolutions of $M$ and of $N$, and the tensor double complexes they induce.

1.1 Each comparison map gives a morphism between the two tensor double complexes, compatible with both augmented edges. [given]

2.1 The two edge-to-total quasi-isomorphisms therefore form a commutative square on homology, so the balance isomorphism commutes with the comparison maps. [step 1.1, algebra]

3.1 Comparison maps are unique up to chain homotopy, and homotopic maps induce the same homology map; successive changes compose coherently. [step 2.1, algebra] ∎
