---
id: def-monad-morphism
kind: definition
title: "Morphisms between monads on one category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monad, def-natural-transformation]
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
    - title: "M. Richter, From Categories to Homotopy Theory, Definition 6.1.15"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

Let $(T,\eta^T,\mu^T)$ and $(S,\eta^S,\mu^S)$ be monads on the same category $\mathcal C$. A **monad morphism** $\alpha:T\Rightarrow S$ is a natural transformation satisfying

$$\alpha\circ\eta^T=\eta^S$$

and

$$\alpha\circ\mu^T=\mu^S\circ S\alpha\circ\alpha T.$$

At an object $A$, the multiplication equation is

$$\alpha_A\mu^T_A=\mu^S_A S(\alpha_A)\alpha_{TA}.$$
