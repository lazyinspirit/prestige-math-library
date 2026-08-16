---
id: def-coreflective-subcategory-and-coreflector
kind: definition
title: "Coreflective full subcategory and coreflector"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-reflective-subcategory-and-reflector, thm-category-theoretic-duality-principle]
aliases: []
landmark: false
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
pipeline_run: null
---

## Definition

Let $\mathcal A$ be a full subcategory of $\mathcal C$, with inclusion $I:\mathcal A\to\mathcal C$. The subcategory $\mathcal A$ is **coreflective** in $\mathcal C$ when $I$ has a right adjoint
$$I\dashv Q,\qquad Q:\mathcal C\to\mathcal A.$$
The functor $Q$ is a **coreflector**. The counit $\varepsilon:IQ\Rightarrow1_{\mathcal C}$ is the **coreflection counit**, and $\varepsilon_C:IQ(C)\to C$ is the **coreflection arrow** of $C$.

This is the categorical dual of [[def-reflective-subcategory-and-reflector]], in the sense of [[thm-category-theoretic-duality-principle]].
