---
id: def-monoidal-natural-transformation
kind: definition
title: "Monoidal natural transformation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-lax-strong-and-strict-monoidal-functor, def-natural-transformation]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 2.4.8"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Definition

Let $F,G:\mathcal C\to\mathcal D$ be lax monoidal functors
([[def-lax-strong-and-strict-monoidal-functor]]).
A **monoidal natural transformation** $\theta:F\Rightarrow G$ is a natural
transformation ([[def-natural-transformation]]) such that

$$\theta_{X\otimes Y}\circ F_{2;X,Y}=G_{2;X,Y}\circ(\theta_X\boxtimes\theta_Y)$$

for all objects $X,Y$, and

$$G_0=\theta_{\mathbf 1}\circ F_0.$$

Thus $\theta$ is compatible both with the binary structure maps and with the
unit map.
