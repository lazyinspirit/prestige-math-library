---
id: thm-matomaki-radziwill-bilinear-short-interval-average
kind: theorem
title: "Matomäki–Radziwiłł bilinear average in every short interval"
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

Let $f:\mathbb Z_{>0}\to[-1,1]$ be multiplicative, meaning $f(1)=1$ and $f(mn)=f(m)f(n)$ whenever $m,n$ are coprime positive integers. For real $x,h$ with $x\ge h\ge10$,

$$ \frac{1}{h\sqrt{x}\log 2}\sum_{\substack{x\le n_1n_2\le x+h\sqrt{x}\\ \sqrt{x}\le n_1\le2\sqrt{x}\\ n_1,n_2\in\mathbb Z_{>0}}} f(n_1)f(n_2)=\left(\frac1{\sqrt{x}}\sum_{\substack{n\in\mathbb Z_{>0}\\\sqrt{x}\le n\le2\sqrt{x}}}f(n)\right)^2+O\left(\frac{\log\log h}{\log h}+(\log x)^{-1/100}\right). $$

where the implied constant is absolute.

## Statement references

[[def-short-interval-sum-of-an-arithmetic-function|closed short-interval endpoint convention]]

[[def-multiplicative-arithmetic-function|multiplicative-function convention]]

[[thm-halasz-mean-value-bound|Halász mean-value estimate used in the source proof]]

[Matomäki and Radziwiłł, Theorem 2, printed p. 2](https://arxiv.org/pdf/1501.04585v4)

