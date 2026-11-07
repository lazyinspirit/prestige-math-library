---
id: thm-menon-general-multiplicative-functions-in-almost-all-short-intervals
kind: theorem
title: "Menon bound for arbitrary 1-bounded multiplicative functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-short-interval-mean-square-average
  - def-countable-choice
  - def-halasz-minimal-pretentious-distance
  - lem-halasz-minimal-distance-is-well-defined
  - def-multiplicative-arithmetic-function
  - thm-halasz-mean-value-bound
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Siddarth Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals"
      url: "https://arxiv.org/pdf/2607.15574v1"
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$). Let $X,h$ be real numbers with $X\ge h\ge10$, and let $f:\mathbb Z_{>0}\to\mathbb C$ be multiplicative with $|f(n)|\le1$ for every $n$. For real $t$, define

$$
M(f;X):=\min_{|t|\le X}\sum_{\substack{p\le X\\p\ \mathrm{prime}}}\frac{1-\operatorname{Re}(f(p)p^{-it})}{p}.
$$

Then

$$ \mathcal M_2(f;X,h)\ll\exp\!\bigl(-(1-o(1))M(f;X)\bigr)+\frac{(\log\log h)^2}{(\log h)^2}+(\log X)^{-1+o(1)}. $$

where the $o(1)$ in the first exponent tends to $0$ as $M(f;X)\to\infty$, the $o(1)$ in the final log-power tends to $0$ as $X\to\infty$, and the implied constant is absolute.

## Statement references

[[def-short-interval-mean-square-average|mean-square average and its Countable Choice convention]]

[[def-countable-choice|Countable Choice assumption]]

[[def-multiplicative-arithmetic-function|multiplicative-function convention]]

[[def-halasz-minimal-pretentious-distance|definition of the minimum $M(f;X)$]]

[[lem-halasz-minimal-distance-is-well-defined|attainment of the minimum in $M(f;X)$]]

[[thm-halasz-mean-value-bound|Halász mean-value estimate used in the source proof]]

[Menon, Theorem 1.3, PDF pp. 2–3](https://arxiv.org/pdf/2607.15574v1)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the parameters and function specified in the Statement.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]])

