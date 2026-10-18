---
id: def-it-one-letter-gallager-exponent-functions
kind: definition
title: One-letter Gallager and expurgated exponent functions
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-discrete-memoryless-channel, def-finite-probability-vector, def-natural-logarithm, def-real-power]
justified_by: []
aliases: []
axiom_use: No choice axiom is used; each formula has finitely many terms.
provenance:
  statement: literature-derived
  proof: not-applicable
proof_obligations:
  - Define the two finite-DMC one-letter exponent functions and every zero-power convention.
  - State the parameter ranges and distinguish the one-letter functions from their global input-law maxima.
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, complete author-hosted textbook"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 22, §22.4*, printed pp. 431–434; finite-DMC Gallager and expurgated exponent expressions.
    - title: "MIT 6.441 Information Theory, Lecture 11, Spring 2010"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/10b2f1e66d2d5b1240c92cf51d8b7b8a_MIT6_441S10_lec11.pdf
      locator: §§4–11, PDF pp. 4–12; Gallager's finite-DMC $E_0$ function and its parameter convention.
---

## Definition

Let $W$ be a finite DMC from finite nonempty $\mathcal X$ to $\mathcal Y$, with rates and logarithms in nats. For an input law $P$ and $0\le\rho\le1$, define
$$E_0(\rho,P):=-\ln\sum_{y\in\mathcal Y}\left(\sum_{x\in\mathcal X}P(x)W(y\mid x)^{1/(1+\rho)}\right)^{1+\rho}.$$
For $\rho\ge1$, define $B(x,x'):=\sum_y\sqrt{W(y\mid x)W(y\mid x')}$ and
$$E_{0x}(\rho,P):=-\rho\ln\sum_{x,x'}P(x)P(x')B(x,x')^{1/\rho}.$$
For every $a>0$, $0^a=0$; thus zero channel transitions and zero Bhattacharyya coefficients contribute zero to these sums. These are one-letter functions at a fixed $P$; the global maxima and rate-dependent exponent functions are separate definitions.
