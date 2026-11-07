---
id: thm-menon-liouville-twists-in-almost-all-short-intervals
kind: theorem
title: "Menon bound for character twists of Liouville in almost all short intervals"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-short-interval-mean-square-average
  - def-countable-choice
  - def-liouville-function
  - def-dirichlet-character-modulo-q
  - def-arithmetic-function
  - def-multiplicative-arithmetic-function
  - thm-canonical-prime-factorisation
  - lem-dirichlet-character-arithmetic-function-characterization
  - lem-dirichlet-character-values
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

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$). Fix $B>0$, let $X,h$ be real numbers with $X\ge h\ge10$, let $q\in\mathbb Z_{>0}$ satisfy $q\le(\log X)^B$, and let $\chi$ be any Dirichlet character modulo $q$. Let $\lambda(n)=(-1)^{\Omega(n)}$ be the Liouville function, where $\Omega(n)$ counts prime factors with multiplicity. Then

$$ \mathcal M_2(\chi\lambda;X,h)\ll_B\frac{(\log\log h)^2}{(\log h)^2}+\frac{(\log\log X)^4}{(\log X)^2}. $$

where the implied constant depends only on $B$.

## Statement references

[[def-short-interval-mean-square-average|mean-square average and its Countable Choice convention]]

[[def-countable-choice|Countable Choice assumption]]

[[def-liouville-function|Liouville function and prime-factor-count convention]]

[[def-dirichlet-character-modulo-q|Dirichlet character modulo a positive integer]]

[[def-arithmetic-function|arithmetic-function domain and codomain]]

[[def-multiplicative-arithmetic-function|multiplicative-function convention]]

[[thm-canonical-prime-factorisation|prime-factorization convention used for $\Omega(n)$]]

[[lem-dirichlet-character-arithmetic-function-characterization|character multiplicativity as an arithmetic function]]

[[lem-dirichlet-character-values|absolute values of character values]]

[Menon, Theorem 1.1, PDF pp. 2–3](https://arxiv.org/pdf/2607.15574v1)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the parameters and character specified in the Statement.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]])

