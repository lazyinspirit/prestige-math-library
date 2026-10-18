---
id: def-it-gallager-and-expurgated-exponent-functions
kind: definition
title: Gallager, random-coding, expurgated, and sphere-packing functions
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-it-one-letter-gallager-exponent-functions, lem-it-gallager-input-maxima-attained, def-discrete-memoryless-channel, def-finite-probability-vector, def-natural-logarithm]
justified_by: []
aliases: []
axiom_use: No choice axiom is used; the input simplex and all sums are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
proof_obligations:
  - Define the global Gallager maximum, random-coding function, expurgated function, and sphere-packing expression in nats.
  - Cite the one-letter definitions and attainment proof before using maxima over the input simplex.
  - State that these are bounds or expressions and do not imply an exact reliability formula.
sources:
  references:
    - title: MIT 6.441 Information Theory, Lectures 11–12, Spring 2010
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/10b2f1e66d2d5b1240c92cf51d8b7b8a_MIT6_441S10_lec11.pdf
      locator: Lecture 11, §§4–11, PDF pp. 4–12; finite-DMC random-coding exponent and Gallager function.
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §22.4*"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 22, §22.4*, printed pp. 431–434; random-coding, expurgated, and sphere-packing bounds.
---

## Definition

Let $W$ be a finite unconstrained DMC from finite nonempty $\mathcal X$ to $\mathcal Y$, with rates and logarithms in nats. The one-letter functions $E_0(\rho,P)$ for $0\le\rho\le1$ and $E_{0x}(\rho,P)$ for $\rho\ge1$ are defined in [[def-it-one-letter-gallager-exponent-functions]]. Their maxima over the input simplex are attained and finite by [[lem-it-gallager-input-maxima-attained]]. Define
$$E_0(\rho):=\max_P E_0(\rho,P),\qquad E_r(R):=\sup_{0\le\rho\le1}\{E_0(\rho)-\rho R\}.$$
The expurgated function and sphere-packing expression are
$$E_{\rm ex}(R):=\sup_{\rho\ge1}\left\{\max_P E_{0x}(\rho,P)-\rho R\right\},\qquad E_{\rm sp}(R):=\sup_{\rho\ge0}\{E_0(\rho)-\rho R\}.$$
These functions define lower or upper bounds used on this page; they do not assert that an error-exponent limit exists or that the sphere-packing bound applies without its later strict-feasibility hypothesis.
