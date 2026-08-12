---
id: def-presheaf-representable-functor-and-representation
kind: definition
title: "Presheaves, covariantly and contravariantly representable functors, and representations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-hom-assignments-are-functors, def-natural-transformation,
       def-natural-isomorphism, def-opposite-category,
       prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Definition 2.1.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Definitions 4.1.3 and 4.1.17"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be a locally small category. A **presheaf** on $\mathcal C$ is
a functor $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$, with opposite category
as in [[def-opposite-category]] and $\mathbf{Set}$ as in
[[prop-sets-and-functions-form-category-set]].

A covariant functor $F:\mathcal C\to\mathbf{Set}$ is **covariantly
representable** when there are an object $R$ and a natural isomorphism

$$\theta:\mathcal C(R,-)\xRightarrow{\cong}F.$$

The pair $(R,\theta)$ is a **representation** of $F$, and $R$ is a
**representing object**.

A presheaf $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ is
**contravariantly representable** when there are an object $R$ and a natural
isomorphism

$$\theta:\mathcal C(-,R)\xRightarrow{\cong}P.$$

The same terms are used for $(R,\theta)$ and $R$. The hom-functors exist by
[[thm-hom-assignments-are-functors]], and natural transformations and natural
isomorphisms have the meanings of [[def-natural-transformation]] and
[[def-natural-isomorphism]]. When the variance is clear, **representable** is
used without an adjective.
