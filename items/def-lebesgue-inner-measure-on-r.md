---
id: def-lebesgue-inner-measure-on-r
kind: definition
title: "Lebesgue inner measure on the real line"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-compact-space, thm-heine-borel-characterisation-r,
       thm-borel-sets-are-lebesgue-measurable, thm-lebesgue-measure-is-a-complete-measure,
       def-countable-choice]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.18"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Definition

For a set $E \subseteq \mathbb{R}$, the **Lebesgue inner measure** of $E$ is

$$\lambda_*(E) := \sup\{\, \lambda^*(K) : K \subseteq E \text{ and } K \text{ is compact} \,\},$$

the supremum being taken in $[0,+\infty]$.

This is well defined without a measurability assumption on $E$ or on its compact
subsets: Lebesgue outer measure is defined on every subset of $\mathbb R$, the
family contains $\varnothing$, and $\lambda^*(\varnothing)=0$. Assuming the
Axiom of Countable Choice, compact subsets of $\mathbb R$ are Borel and hence
Lebesgue measurable, so $\lambda^*(K)=\lambda(K)$ and the displayed definition
agrees with the usual compact-inner-approximation formula.

## Remarks

- The definition uses compact subsets, not merely closed ones, because compact
  subsets of $\mathbb{R}$ always have finite Lebesgue measure.

- Assuming the Axiom of Countable Choice, for bounded sets
  [[thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree]]
  shows that equality $\lambda_*(E)=\lambda^*(E)$ is exactly Lebesgue
  measurability.
