---
id: rem-the-symmetric-and-braided-coherence-theorems-compare-s-n-with-b-n
kind: remark
title: "The symmetric and braided coherence theorems compare S_n with B_n"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-symmetric-coherence, thm-braided-coherence-via-underlying-braids, thm-the-braid-group-surjects-onto-the-symmetric-group]
verification:
  audited: 2026-09-01
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Natural Associativity and Commutativity, Section 4"
      url: "https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Sections 2 and 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Remark

[[thm-symmetric-coherence]] says that canonical symmetric composites are
governed by permutations, hence by $S_n$. The braided analogue
[[thm-braided-coherence-via-underlying-braids]] replaces those permutations by
braids, hence by $B_n$. The quotient map of
[[thm-the-braid-group-surjects-onto-the-symmetric-group]] is exactly the formal
operation of imposing $\sigma_i^2=1$, which is why the symmetric theorem is
stronger: forgetting the pure-braid kernel is what turns many distinct braided
composites into one permutation class.
