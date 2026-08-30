---
id: fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem
kind: false-statement
title: "FALSE: the diagram lemmas in an abelian category follow from the module case by the embedding theorem"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-the-freyd-mitchell-embedding-theorem,
       rem-why-the-diagram-lemmas-are-not-proved-by-the-embedding-theorem,
       thm-the-connecting-morphism-exists-and-is-unique]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Section 1.3"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Peter Freyd, Abelian Categories"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
pipeline_run: frontier-24
---

## Statement

The diagram lemmas for an arbitrary abelian category can be proved on this page
simply by reducing to the already-published module case via Freyd-Mitchell.

## Facts & Assumptions

**Given:** The embedding-theorem route just described.

[L1] The connecting morphism is constructed intrinsically on this page
([[thm-the-connecting-morphism-exists-and-is-unique]]).

## Refutation

1.1 The proposed reduction already fails at scope: [[rem-the-freyd-mitchell-embedding-theorem]] records the smallness condition on Freyd-Mitchell, so the route is not a theorem about arbitrary abelian categories. [given]

2.1 Even inside that smaller scope, [[rem-why-the-diagram-lemmas-are-not-proved-by-the-embedding-theorem]] records that this library does not take the embedding-theorem route, and [L1] supplies the intrinsic construction it uses instead. Therefore the statement is false as a description of the page's proof method. [L1, step 1.1] ∎
