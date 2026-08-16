---
id: rem-choice-ledger-for-the-adjoint-functor-theorems
kind: remark
title: "Choice and smallness ledger for the initial-object lemma, GAFT, and SAFT"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object, thm-general-adjoint-functor-theorem-objectwise-form, thm-general-adjoint-functor-theorem-functor-form, thm-special-adjoint-functor-theorem-objectwise-form, thm-special-adjoint-functor-theorem-functor-form]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Leinster, Basic Category Theory, section 6.3 and Appendix A"
      url: "https://arxiv.org/pdf/1612.09375"
    - title: "S. Mac Lane, Categories for the Working Mathematician, section V.8"
      url: "https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
pipeline_run: null
---

The initial-object construction in [[thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object]] forms a limit of a supplied small full subcategory and uses one existential witness for each fixed target. It does not choose arrows simultaneously over all targets.

The objectwise theorems [[thm-general-adjoint-functor-theorem-objectwise-form]] and [[thm-special-adjoint-functor-theorem-objectwise-form]] produce an initial comma object for one fixed ambient object. Their functor forms require a supplied family of those comma objects so that no proper-class selection is hidden in assembling the adjoint. Both SAFT branches require the functor to preserve all small limits, which is what makes the comma category complete; neither branch replaces that hypothesis. On top of it, the chosen-well-powered branch supplies representative sets for subobjects, while the direct branch assumes the relevant class intersections and their preservation explicitly, so that it never treats a proper class as a small diagram.
