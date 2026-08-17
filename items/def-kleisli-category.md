---
id: def-kleisli-category
kind: definition
title: "Kleisli category of a monad"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-kleisli-composition-is-associative-and-unital]
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.2.10"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Definition 6.3.1"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

For a monad $(T,\eta,\mu)$ on $\mathcal C$, the **Kleisli category** $\mathcal C_T$ has the same objects as $\mathcal C$ and hom-collections

$$\mathcal C_T(A,B):=\mathcal C(A,TB).$$

The identity at $A$ is $\eta_A$, and composition is $g\star f=\mu_C\circ T(g)\circ f$. The category laws are established before this definition in [[thm-kleisli-composition-is-associative-and-unital]].
