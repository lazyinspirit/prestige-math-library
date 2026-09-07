---
id: def-symmetric-real-random-variable
title: "Symmetric real random variables"
kind: definition
status: published
origin: pipeline
deps: ["def-law-or-distribution-of-a-random-element"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Appendix A, Definition 4.16, p. 9"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf
---

## Definition

A real random variable $X$ is **symmetric** if its law as defined in [[def-law-or-distribution-of-a-random-element]] equals the law of $-X$. Equivalently, $\mathbb P(X\in B)=\mathbb P(X\in -B)$ for every Borel $B\subseteq\mathbb R$, where $-B=\{-b:b\in B\}$. No existence of an expectation is assumed in this definition. In particular atoms, including an atom at zero, are allowed.
