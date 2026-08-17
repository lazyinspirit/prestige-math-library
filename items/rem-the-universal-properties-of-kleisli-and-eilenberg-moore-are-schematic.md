---
id: rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic
kind: remark
title: "The Kleisli and Eilenberg–Moore universal properties are schematic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-the-eilenberg-moore-adjunction-induces-the-given-monad, thm-the-kleisli-adjunction-induces-the-given-monad, def-functor-category, prop-size-of-functor-categories]
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.2.13"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Definition 6.3.8 and Theorem 6.3.10"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

The universal properties of the Kleisli and Eilenberg–Moore adjunctions quantify over each supplied adjunction inducing a fixed monad and assert the existence and uniqueness of particular comparison functors. They do not require a category whose objects are all such adjunctions.

This distinction matters under the library's size convention. The functor category $[\mathcal C,\mathcal D]$ is formed only when $\mathcal C$ is small, and for a large source the notation is metatheoretic shorthand rather than a category ([[def-functor-category]]); smallness and local smallness of $[\mathcal C,\mathcal D]$ then need the further hypotheses of [[prop-size-of-functor-categories]]. No large category of every monad resolution is presumed here. The following factorisation results state the universal properties in the objectwise form that remains meaningful without such a category.
