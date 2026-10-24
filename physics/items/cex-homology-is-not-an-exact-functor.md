---
id: cex-homology-is-not-an-exact-functor
kind: counterexample
title: "Homology is not an exact functor"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-a-degreewise-split-sequence-with-nonzero-connecting-map]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Statement refuted

Homology sends every short exact sequence of complexes to a short exact sequence
in each degree.

## Facts & Assumptions

**Given:** The degreewise split cone sequence of the identity map on $\mathbb Z[0]$.

[L1] That sequence has a nonzero connecting morphism on homology ([[ex-a-degreewise-split-sequence-with-nonzero-connecting-map]]).

## Counterexample

**Proof technique:** direct.

1.1 The given sequence is short exact term by term, but [L1] shows that its associated homology sequence contains a nonzero connecting map. [L1, given, algebra]

2.1 A degreewise short exact sequence of homology groups would have zero connecting map. Since the displayed sequence does not, it is a counterexample to exactness of homology. [L1, step 1.1, algebra] ∎

