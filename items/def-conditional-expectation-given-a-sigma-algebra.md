---
id: def-conditional-expectation-given-a-sigma-algebra
kind: definition
title: "Conditional expectation given a sigma algebra"
status: draft
origin: pipeline
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, def-l-one-of-a-measure]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Definition

Let $(\Omega,\mathcal F,P)$ be a probability space, $\mathcal G\subseteq\mathcal F$ a sub-sigma-algebra, and $X:\Omega\to\mathbb R$ integrable. A **conditional-expectation version of $X$ given $\mathcal G$** is a real, $\mathcal G$-measurable, integrable function $Y$ such that $\int_A Y\,dP=\int_A X\,dP$ for every $A\in\mathcal G$. No completeness of $\mathcal G$ is assumed.

Expectation means the integral of [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]. Integrable representatives use [[def-l-one-of-a-measure]]; quotient notation is introduced after uniqueness.

## Source notes

Durrett §4.1, printed pp.205–206; van der Vaart §1.1, Definition 1.1, printed p.1. Integrability is imposed explicitly here.
