---
id: def-nonnegative-discrete-drift-for-countable-chains
kind: definition
title: "Nonnegative kernel action and finite drift"
status: published
origin: pipeline
deps:
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-discrete-generator-of-a-countable-state-transition-matrix
  - def-nonnegative-extended-series
  - def-extended-reals
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Roch, Lecture Notes on Measure-Theoretic Probability Theory, Note 24"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
---
## Definition

Let $p$ be a transition matrix on countable $E$ and let $\phi:E\to[0,+\infty]$. Define the nonnegative kernel action

$$P\phi(x):=\sum_{y\in E:\,p(x,y)>0}p(x,y)\phi(y)\in[0,+\infty],$$

using the extended nonnegative sum of [[def-nonnegative-extended-series]]. Terms with zero transition weight are omitted: [[def-extended-reals]] leaves $0\cdot(+\infty)$ undefined, while each displayed product has positive finite first factor and is defined even when $\phi(y)=+\infty$. If $\phi$ is finite-valued and $P\phi(x)<\infty$, its drift is the finite real number

$$L\phi(x):=P\phi(x)-\phi(x).$$

This agrees with the published discrete generator [[def-discrete-generator-of-a-countable-state-transition-matrix]] on bounded functions. For an extended-valued $u$, write a first-step relation as $u=Pu+c$ in extended nonnegative arithmetic; do not define a drift by subtracting $+\infty$ from $+\infty$.
