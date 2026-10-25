---
id: def-comonad
kind: definition
title: "Comonad on a category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monad, def-opposite-category]
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.1.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be a category. A **comonad on $\mathcal C$** is a triple $(G,\varepsilon,\delta)$ consisting of an endofunctor $G:\mathcal C\to\mathcal C$, a **counit** $\varepsilon:G\Rightarrow1_{\mathcal C}$, and a **comultiplication** $\delta:G\Rightarrow G^2$ such that

$$G\delta\circ\delta=\delta G\circ\delta:G\Rightarrow G^3,$$

$$G\varepsilon\circ\delta=1_G=\varepsilon G\circ\delta:G\Rightarrow G.$$

Equivalently, a comonad on $\mathcal C$ is a monad ([[def-monad]]) on the opposite category $\mathcal C^{\mathrm{op}}$ ([[def-opposite-category]]), with every arrow reversed.
