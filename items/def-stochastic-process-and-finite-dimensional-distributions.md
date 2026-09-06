---
id: def-stochastic-process-and-finite-dimensional-distributions
kind: definition
title: "Stochastic processes and their finite-dimensional distributions"
status: draft
origin: pipeline
deps: [def-random-element-and-real-random-variable, def-consistent-family-of-finite-dimensional-distributions]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Biskup, MATH 275D notes, Definition 2.1"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Definition

For $t\in I$, let $X_t:(\Omega,\mathcal F,\mathbb P)\to(E_t,\mathcal E_t)$ be a random element. The family $X=(X_t)_{t\in I}$ is a **stochastic process**. For an ordered tuple of distinct times $(t_1,\ldots,t_n)$, its finite-dimensional distribution is the pushforward law of $(X_{t_1},\ldots,X_{t_n})$ on $\prod_{j<n}E_{t_{j+1}}$. These laws, including their coordinate order, form a consistent family under deletion and permutation of times.
