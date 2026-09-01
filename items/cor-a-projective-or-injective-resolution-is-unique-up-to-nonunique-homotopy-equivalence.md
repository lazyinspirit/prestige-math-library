---
id: cor-a-projective-or-injective-resolution-is-unique-up-to-nonunique-homotopy-equivalence
kind: corollary
title: "A projective or injective resolution is unique up to nonunique homotopy equivalence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object, thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement

A projective resolution or an injective resolution of a fixed object is unique up to homotopy equivalence, but the chosen comparison maps need not be unique.
## Facts & Assumptions

**Given:** A fixed object $A$.

[L1] Projective resolutions of $A$ are homotopy equivalent over $A$ ([[thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object]]).

[L2] Injective resolutions of $A$ are homotopy equivalent under $A$ ([[thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object]]).
## Proof

**Proof technique:** direct.

1.1 The projective statement is exactly [L1], and the injective statement is exactly [L2]. [L1, L2]

2.1 Thus either kind of resolution is unique only up to homotopy equivalence. The preceding comparison theorems show that one may choose many actual lifts inside that homotopy class, so the equivalence is not unique on the nose. [step 1.1] ∎
