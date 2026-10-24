---
id: rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists
kind: remark
title: "The monoid description of a monad requires an endofunctor category"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-monad, def-functor-category, prop-size-of-functor-categories]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Remark 5.1.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Remark

When the endofunctors of $\mathcal C$ and their natural transformations form the functor category $[\mathcal C,\mathcal C]$ ([[def-functor-category]]), composition makes that category monoidal, and the data and equations of [[def-monad]] say exactly that $(T,\eta,\mu)$ is a monoid object in it. In particular this description is available for a small $\mathcal C$; [[prop-size-of-functor-categories]] supplies the corresponding smallness and local-smallness conclusions.

For an arbitrary large $\mathcal C$, the library's convention treats endofunctors and natural transformations only as metatheoretic shorthand and does not form them into a category. The monad definition itself remains meaningful there, but the phrase “monoid object in the endofunctor category” is used only when that category exists.
