---
id: thm-matomaki-radziwill-mean-on-almost-all-short-intervals
kind: theorem
title: "Matomäki–Radziwiłł mean-value approximation on almost all short intervals"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-short-interval-sum-of-an-arithmetic-function
  - def-multiplicative-arithmetic-function
  - thm-halasz-mean-value-bound
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals"
      url: "https://arxiv.org/pdf/1501.04585v4"
---

## Statement

Let $f:\mathbb Z_{>0}\to[-1,1]$ be multiplicative, meaning $f(1)=1$ and $f(mn)=f(m)f(n)$ whenever $m,n$ are coprime positive integers. For real $X,h$ with $2\le h\le X$ and any real $\delta>0$, there are absolute constants $C,C'>1$ such that $C'$ may be taken to be $20000$ and, for all but at most

$$ C X\left(\frac{(\log h)^{1/3}}{\delta^2h^{\delta/25}}+\frac{1}{\delta^2(\log X)^{1/50}}\right) $$

integers $x\in[X,2X]$, one has

$$ \left|\frac1h\sum_{\substack{n\in\mathbb Z_{>0}\\x\le n\le x+h}}f(n)-\frac1X\sum_{\substack{n\in\mathbb Z_{>0}\\X\le n\le2X}}f(n)\right|\le\delta+C'\frac{\log\log h}{\log h}. $$

The exceptional-start bound is a real-valued upper bound on the number of exceptional integer starts; if it exceeds the number of starts, the conclusion is vacuous for that parameter choice.

## Statement references

[[def-short-interval-sum-of-an-arithmetic-function|closed short-interval sum convention]]

[[def-multiplicative-arithmetic-function|multiplicative-function convention]]

[[thm-halasz-mean-value-bound|Halász mean-value estimate used in the source proof]]

[Matomäki and Radziwiłł, Theorem 1, printed pp. 1–2](https://arxiv.org/pdf/1501.04585v4)

