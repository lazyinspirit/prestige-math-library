---
id: def-the-arrow-category-of-an-abelian-category
kind: definition
title: "The arrow category of an abelian category"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-functor-category,
       def-abelian-category,
       prop-size-of-functor-categories,
       thm-limits-and-colimits-in-functor-categories-are-computed-pointwise]
justified_by: []
landmark: false
verification:
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.18"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Exercise VIII.4.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Definition

Let $[1]$ denote the category with two objects and one nonidentity arrow. For
an abelian category $\mathcal A$, the **arrow category** $\mathcal A^{\to}$ is
the functor category $\bigl[\,[1],\mathcal A\,\bigr]$.

Thus an object of $\mathcal A^{\to}$ is a morphism $x:X_0 \to X_1$ in
$\mathcal A$, and a morphism in $\mathcal A^{\to}$ is a commutative square
between such arrows.

Because $[1]$ is small, this is an honest functor category by
[[def-functor-category]] and [[prop-size-of-functor-categories]]. Because
limits and colimits in a functor category are computed pointwise, an abelian
category gives an abelian arrow category as well.
