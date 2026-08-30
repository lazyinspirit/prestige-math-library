---
id: rem-the-connecting-morphism-depends-on-no-choices
kind: remark
title: "The connecting morphism depends on no choices"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-the-connecting-morphism-exists-and-is-unique]
justified_by: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.17(1)"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Remark

The arrow-theoretic construction of
[[thm-the-connecting-morphism-exists-and-is-unique]] produces the connecting
morphism by a universal property and proves uniqueness at the same time. Once
the pullback and pushout are fixed, there is no remaining zig-zag choice whose
independence must be checked later.

That is exactly what the universal-property route buys. In an elementwise
construction one has to prove that different representatives and different
choices of lift lead to the same class. Here the final morphism is already the
unique map that makes one displayed square commute.
