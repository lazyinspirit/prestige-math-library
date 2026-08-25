---
id: fs-a-translation-invariant-borel-measure-on-the-line-is-a-multiple-of-lebesgue-measure
kind: false-statement
title: "Every translation-invariant measure on the Borel sets of $\\mathbb{R}$ is a nonnegative multiple of Lebesgue measure"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure,
       def-counting-measure,
       prop-counting-measure-is-a-measure,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       def-borel-sigma-algebra]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.23"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Every translation-invariant measure on the Borel sets of $\mathbb{R}$ is a
nonnegative multiple of Lebesgue measure.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and counting measure $\#$ on $\mathbb{R}$, restricted to the Borel sigma-algebra.

[L1] Assuming countable choice, a translation-invariant measure on the Borel sets of $\mathbb R^n$ giving the unit cube measure one is the restriction of Lebesgue measure ([[thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure]]).

[F1] The **counting set function** on $\mathcal P(X)$ is the map sending a finite subset to its cardinality and an infinite subset to $+\infty$ ([[def-counting-measure]]).

[F2] For every set $X$, the counting set function $\#_X$ is a measure on $(X,\mathcal P(X))$ ([[prop-counting-measure-is-a-measure]]).

[L2] Assuming countable choice, a box in $\mathbb R^n$ with parameters $a_i \le b_i$ is Lebesgue measurable of measure $\prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Refutation

**Proof technique:** direct.

1.1 By [F1] and [F2], counting measure restricted to the Borel sets of $\mathbb{R}$ is a measure. It is translation invariant because for every real $a$ the map $x\mapsto x+a$ is a bijection of $\mathbb{R}$, so a Borel set and its translate have the same finite cardinality or are both infinite. [F1, F2]

2.1 It gives the singleton $\{0\}$ the value $1$ and the unit interval $[0,1]$ the value $+\infty$, while [L2] gives Lebesgue measure $0$ for $\{0\}$ and $1$ for $[0,1]$; so no nonnegative scalar multiple of Lebesgue measure equals counting measure. [step 1.1, L2, algebra]

3.1 This does not contradict [L1], because [L1] fixes the value of the unit cube and thereby forces finiteness on bounded sets, which the false statement omits. [step 2.1, L1] ∎
