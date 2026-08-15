---
id: rem-tower-and-wowzer-bounds-in-regularity
kind: remark
title: "Ordinary regularity gives tower upper bounds; strong regularity gives wowzer upper bounds only when the regularity sequence depends on the coarse part count"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-szemeredi-regularity-lemma-with-tower-bound, thm-strong-regularity-lemma-by-energy-stabilisation]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 2.3"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Remark

The energy-increment proof of ordinary regularity in [[thm-szemeredi-regularity-lemma-with-tower-bound]] iterates an exponential part-count recurrence only a bounded number of times and therefore gives a tower-type upper bound. The proof of [[thm-strong-regularity-lemma-by-energy-stabilisation]] repeatedly invokes ordinary regularity at parameters indexed by an already enormous partition size, so when the regularity sequence genuinely depends on the coarse part count the nested iteration gives a wowzer-type upper bound. That dependence is what [[thm-induced-graph-removal-lemma]] does *not* need: the parameter it requires of its representative pairs comes from [[thm-induced-counting-lemma-for-regular-pairs]] and depends only on the pattern and the density threshold, so a constant sequence suffices, the nesting collapses to boundedly many applications at one fixed parameter, and the bound stays tower-type. These are upper bounds delivered by the displayed proofs, not claims of optimality.
