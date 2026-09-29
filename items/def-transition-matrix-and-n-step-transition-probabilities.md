---
id: def-transition-matrix-and-n-step-transition-probabilities
kind: definition
title: "Transition matrices and n-step probabilities"
status: draft
origin: pipeline
deps:
  - def-iterated-transition-kernels
  - thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---
## Definition

Let $E$ be countable with sigma-algebra $2^E$, and let $K$ be a probability kernel on it. For $x,y\in E$, set

$$p(x,y):=K(x,\{y\}),\qquad p^{(n)}(x,y):=K^n(x,\{y\})\quad(n\in\mathbb N_0),$$

where $K^0$ is the identity kernel, so $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$. By [[def-iterated-transition-kernels]], each $K^n$ is a probability kernel. Since measures on countable discrete spaces are their singleton-weighted sums ([[thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums]]), every row satisfies

$$\sum_{y\in E}p^{(n)}(x,y)=K^n(x,E)=1.$$

No conditional-expectation version or choice function is used in this matrix definition.
