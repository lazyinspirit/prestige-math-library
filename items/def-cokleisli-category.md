---
id: def-cokleisli-category
kind: definition
title: "Co-Kleisli category of a comonad"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-cokleisli-composition-is-associative-and-unital]
aliases: []
landmark: true
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.2.10 by formal duality"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

For a comonad $(G,\varepsilon,\delta)$ on $\mathcal C$, the **co-Kleisli category** $\mathcal C_G^{\mathrm{coKl}}$ has the objects of $\mathcal C$ and hom-collections

$$\mathcal C_G^{\mathrm{coKl}}(A,B)=\mathcal C(GA,B).$$

Composition is $g\star f=gG(f)\delta_A$, and the identity of $A$ is $\varepsilon_A$. These operations form a category by [[thm-cokleisli-composition-is-associative-and-unital]].
