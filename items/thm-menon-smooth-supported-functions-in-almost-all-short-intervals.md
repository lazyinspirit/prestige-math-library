---
id: thm-menon-smooth-supported-functions-in-almost-all-short-intervals
kind: theorem
title: "Menon bound for smooth-supported multiplicative functions"
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
  - def-smooth-support-at-a-scale
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

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$). Fix $0<\delta<1$ and let $X,h$ be real numbers with $X\ge h\ge10$. Let $f:\mathbb Z_{>0}\to\mathbb C$ be multiplicative with $|f(n)|\le1$ for every $n$, and suppose $f(n)=0$ whenever $n$ has a prime divisor greater than $X^{1-\delta}$. For real $t$, define

$$
M(f;X):=\min_{|t|\le X}\sum_{\substack{p\le X\\p\ \mathrm{prime}}}\frac{1-\operatorname{Re}(f(p)p^{-it})}{p}.
$$

Then

$$ \mathcal M_2(f;X,h)\ll_\delta\exp\!\bigl(-(2-o(1))M(f;X)\bigr)+\frac{(\log\log h)^2}{(\log h)^2}+(\log X)^{-2+o(1)}. $$

where the $o(1)$ in the first exponent tends to $0$ as $M(f;X)\to\infty$, the $o(1)$ in the final log-power tends to $0$ as $X\to\infty$, and the implied constant depends only on $\delta$.

## Statement references

[[def-short-interval-mean-square-average|mean-square average and its Countable Choice convention]]

[[def-countable-choice|Countable Choice assumption]]

[[def-multiplicative-arithmetic-function|multiplicative-function convention]]

[[def-halasz-minimal-pretentious-distance|definition of the minimum $M(f;X)$]]

[[lem-halasz-minimal-distance-is-well-defined|attainment of the minimum in $M(f;X)$]]

[[def-smooth-support-at-a-scale|smooth-support convention]]

[[thm-halasz-mean-value-bound|Halász mean-value estimate used in the source proof]]

[Menon, Theorem 1.2, PDF pp. 2–3](https://arxiv.org/pdf/2607.15574v1)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the parameters and function specified in the Statement.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]])

