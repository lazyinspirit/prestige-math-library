---
id: def-reflective-subcategory-and-reflector
kind: definition
title: "Reflective full subcategory and reflector"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subcategory-and-full-subcategory, def-adjunction-by-unit-counit-and-triangle-identities]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, section 4.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Basic Category Theory, section 6.3"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

## Definition

Let $\mathcal A$ be a full subcategory of a category $\mathcal C$, with inclusion $I:\mathcal A\to\mathcal C$ ([[def-subcategory-and-full-subcategory]]). The subcategory $\mathcal A$ is **reflective** in $\mathcal C$ when $I$ has a left adjoint
$$R:\mathcal C\to\mathcal A,\qquad R\dashv I.$$
The functor $R$ is a **reflector**. The unit $\eta:1_{\mathcal C}\Rightarrow IR$ is the **reflection unit**, and its component $\eta_C:C\to IR(C)$ is the **reflection arrow** of $C$.

Thus a reflection includes the full-subcategory data, the functor $R$, and the adjunction data of [[def-adjunction-by-unit-counit-and-triangle-identities]]. It does not merely assert that some object of $\mathcal A$ receives a map from each object of $\mathcal C$.
