---
id: rem-size-of-natural-transformation-collections
kind: remark
title: "Local smallness does not make every natural-transformation collection a set, but the Yoneda construction proves sethood in the representable-source case"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-small-locally-small-and-large-category, def-functor-category,
       prop-size-of-functor-categories, lem-yoneda-evaluation-bijection]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Remark 2.2.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

Local smallness says that each individual hom-collection is a set
([[def-small-locally-small-and-large-category]]). It does not, by itself, turn
an object-indexed family of components over a proper class of objects into
set-coded data. For this reason [[def-functor-category]] forms
$[\mathcal C,\mathcal D]$ as a category only when $\mathcal C$ is small, and
[[prop-size-of-functor-categories]] obtains local smallness from a small source
and a locally small target.

The representable-source case has additional structure. For an object $a$ and
$F:\mathcal C\to\mathbf{Set}$, the explicit formulas of
[[lem-yoneda-evaluation-bijection]] parametrize every natural transformation
$\mathcal C(a,-)\Rightarrow F$ by the set $F(a)$. Thus this particular
natural-transformation collection is a set even when $\mathcal C$ is large and
locally small. No global proper-class counterexample is asserted here.
