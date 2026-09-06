---
id: lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives
kind: lemma
title: "The Baer sum is independent of representatives"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-baer-sum-of-extension-classes, lem-pullback-and-pushout-descend-to-extension-classes]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

The Baer sum defined by direct sum, diagonal pullback, and codiagonal pushout depends only on the two extension classes.

## Facts & Assumptions

**Given:** Two pairs of equivalent extensions of the same quotient object by the same subobject.

## Proof

**Proof technique:** direct.

1.1 Taking the direct sum of the two equivalence diagrams gives an equivalence between the direct-sum extensions. [given, construct]

2.1 Apply [[lem-pullback-and-pushout-descend-to-extension-classes]] first to the diagonal and then to the codiagonal prescribed by [[def-baer-sum-of-extension-classes]]. The resulting Baer extensions are equivalent. [step 1.1, algebra] ∎
