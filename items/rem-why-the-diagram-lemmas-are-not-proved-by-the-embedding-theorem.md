---
id: rem-why-the-diagram-lemmas-are-not-proved-by-the-embedding-theorem
kind: remark
title: "The library does not use Freyd-Mitchell to prove the diagram lemmas"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abelian-category]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Chapter 7"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem"
      url: "https://arxiv.org/pdf/1901.08591"
pipeline_run: frontier-21
---

Freyd-Mitchell is not the proof device for this library's later diagram lemmas.
It applies only to **small** abelian categories, it is not proved in this
batch, and it would make the later exactness pages depend on a metatheorem
rather than on the intrinsic abelian arguments built from pullbacks, pushouts,
images, and cokernels.

That trade is the wrong one for the library. The member calculus and the
diagram-lemma pages stay internal to an arbitrary abelian category, with no
smallness side condition and no appeal to an ambient module category.
