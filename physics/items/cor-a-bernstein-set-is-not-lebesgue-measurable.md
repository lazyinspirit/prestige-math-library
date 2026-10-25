---
id: cor-a-bernstein-set-is-not-lebesgue-measurable
kind: corollary
title: "Assuming the Axiom of Countable Choice, a Bernstein set is not Lebesgue measurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval,
       thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree,
       def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz, Subsets of the Real Line, Chapter 8"
      url: "https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $B \subseteq \mathbb{R}$ be a
Bernstein set. Then $B$ is not Lebesgue measurable.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a Bernstein set $B \subseteq \mathbb{R}$.

[L1] A Bernstein set has inner measure $0$, and in every nondegenerate bounded interval its intersection has full outer measure ([[thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval]]).

[L2] For bounded subsets of $\mathbb{R}$, Lebesgue measurability is equivalent to equality of inner and outer measure ([[thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree]]).

## Proof

**Proof technique:** direct.

1.1 Let $I=[0,1]$. Step [L1] gives $\lambda_*(B \cap I)=0$ and $\lambda^*(B \cap I)=\lambda(I)=1$. [L1]

2.1 The bounded set $B \cap I$ therefore has unequal inner and outer measure, so [L2] says it is not Lebesgue measurable. If $B$ itself were Lebesgue measurable, then its intersection with the measurable interval $I$ would be too, contradiction. Hence $B$ is not Lebesgue measurable. [step 1.1, L2] ∎
