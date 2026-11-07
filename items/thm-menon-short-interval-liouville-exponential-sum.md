---
id: thm-menon-short-interval-liouville-exponential-sum
kind: theorem
title: "Menon averaged exponential-sum bound for Liouville on short intervals"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-short-interval-mean-square-average
  - def-integral-over-a-measurable-set
  - def-countable-choice
  - def-liouville-function
  - def-exponential-character-e
  - thm-menon-liouville-twists-in-almost-all-short-intervals
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

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$). Let $X,h$ be real numbers with $X\ge h\ge10$, let $\lambda(n)=(-1)^{\Omega(n)}$ be the Liouville function, where $\Omega(n)$ counts prime factors with multiplicity, and define $e(t)=\exp(2\pi i t)$ for real $t$. Then

$$ \sup_{\alpha\in\mathbb R}\frac1X\int_0^X\left|\frac1h\sum_{\substack{n\in\mathbb Z_{>0}\\x\le n\le x+h}}\lambda(n)e(\alpha n)\right|\,dx\ll\frac{\log\log h}{\log h}+\frac{(\log\log X)^2}{\log X}. $$

where the implied constant is absolute.

## Statement references

[[def-short-interval-mean-square-average|the Lebesgue measure convention for interval integrals]]

[[def-integral-over-a-measurable-set|integral over the measurable interval $[0,X]$]]

[[def-countable-choice|Countable Choice assumption]]

[[def-liouville-function|Liouville function and prime-factor-count convention]]

[[def-exponential-character-e|additive character $e(t)$ convention]]

[[thm-menon-liouville-twists-in-almost-all-short-intervals|Theorem 1.1 major-arc input used by the source proof]]

[Menon, Theorem 1.4, PDF pp. 2–3](https://arxiv.org/pdf/2607.15574v1)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the parameters specified in the Statement.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]])

