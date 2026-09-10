---
id: def-measure-preserving-transformation-and-system
kind: definition
title: Measure-preserving transformations and systems
deps: [def-measure-space, def-measurable-function-between-measurable-spaces]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: E–W Definition 2.1, pp.13–14
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
origin: pipeline
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space. A measurable self-map $T:X\to X$ is **measure preserving** if $\mu(T^{-1}E)=\mu(E)$ for every $E\in\mathcal A$. The quadruple $(X,\mathcal A,\mu,T)$ is a **measure-preserving system**; it is a probability system if $\mu(X)=1$. Here $T^{-1}E=\{x:T(x)\in E\}$ denotes an inverse image, whether or not $T$ is invertible. Neither completeness nor finiteness is implicit. The measure-space and measurable-map conventions are [[def-measure-space]] and [[def-measurable-function-between-measurable-spaces]].
