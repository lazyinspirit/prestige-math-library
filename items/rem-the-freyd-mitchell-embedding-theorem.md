---
id: rem-the-freyd-mitchell-embedding-theorem
kind: remark
title: "Freyd-Mitchell gives a fully faithful exact functor from every small abelian category to a module category"
status: published
origin: session
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-abelian-category, def-embedding-of-categories]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  sources_checked:
    date: 2026-08-27
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Corollary 7.17"
      url: "https://arxiv.org/pdf/1901.08591"
    - title: "Peter Freyd, Abelian Categories, Theorem 7.34"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
external_dependency:
  source_url: "https://arxiv.org/pdf/1901.08591"
  exact_statement: "For every small abelian category \\(\\mathcal A\\), there exist a unital ring \\(R\\) and a covariant fully faithful exact functor \\(\\mathcal A\\to R\\text{-}\\mathbf{Mod}\\)."
  local_proof_attempt: "This batch does not prove Freyd-Mitchell. The design keeps the theorem recorded but non-load-bearing, and the proof route sits outside the page's finite-limit, image-coimage, and exact-functor scope."
  necessity: "The page needs the theorem only as a stated metatheorem and as the reason the library refuses to use it to prove later diagram lemmas."
pipeline_run: frontier-21
---

## Statement

For every **small** abelian category $\mathcal A$, there exist a unital ring
$R$ and a covariant fully faithful exact functor

$$\mathcal A\longrightarrow R\text{-}\mathbf{Mod}.$$

The result is traditionally called an embedding theorem, but under this
library's stricter terminology it supplies a fully faithful exact functor, not
necessarily a functor injective on objects. Equivalently, it identifies
$\mathcal A$ up to equivalence with its essential image in the module category;
it does not assert that $\mathcal A$ is equivalent to the whole module category.

## Remarks

This item is recorded rather than proved here. The smallness hypothesis is part
of the statement, and the target is a category of unital left modules over a
possibly noncommutative ring.

Nothing later in this page depends on this remark. The library uses it only as
a statement of scope and as a contrast with the element-free proofs that follow
on the exactness and diagram-lemma pages.
