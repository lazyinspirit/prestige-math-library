---
id: thm-the-splitting-lemma-follows-from-the-nine-lemma
kind: theorem
title: "The splitting lemma follows from the nine lemma"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-nine-lemma-in-an-abelian-category,
       def-split-short-exact-sequence-in-an-abelian-category,
       thm-splitting-lemma-in-an-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Lemma 2.68"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
pipeline_run: frontier-24
---

## Statement

If a short exact sequence in an abelian category admits a section or a
retraction, then the splitting conclusion can be recovered by applying the nine
lemma to the induced $3 \times 3$ diagram.

## Facts & Assumptions

**Given:** A short exact sequence together with either a section of its right-hand map or a retraction of its left-hand map.

[L1] The nine lemma forces the missing row in the standard $3 \times 3$ diagram built from a section or retraction ([[thm-nine-lemma-in-an-abelian-category]]).

[L2] The actual splitting conclusion is already recorded as the splitting lemma ([[thm-splitting-lemma-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 A section or retraction inserts the given short exact sequence into the usual $3 \times 3$ diagram whose other two rows are visibly split exact. Applying [L1] makes the remaining row short exact as well. [L1, given, construct]

2.1 The data in that recovered short exact row are exactly the biproduct data named in [L2]. So the nine-lemma route reproduces the splitting lemma statement. [L2, step 1.1]

3.1 Hence the splitting lemma follows from the nine lemma. [step 2.1] ∎
