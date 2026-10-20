---
id: def-real-exponential-function-and-e
kind: definition
title: "The real exponential function and the number $e$ by a power series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-power-series-and-radius-of-convergence, def-factorial-and-falling-factorial, def-integer-power, def-canonical-natural, lem-of-naturals-positive, def-series]
justified_by: [lem-exponential-series-has-infinite-radius]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Definition

For $x\in\mathbb R$, define
$$\exp(x):=\sum_{n=0}^{\infty}\frac{x^n}{\iota(n!)}, \qquad e:=\exp(1),$$
provided by the all-real convergence proved in The exponential series converges absolutely for every real argument. Here $n!\in\mathbb N$ is the factorial of The factorial $n!$ and the falling factorial $n^{\underline{k}}$, defined by recursion in $\mathbb{N}$, $\iota(n!)$ is its nonzero real image (The canonical natural $\iota(n) = n \cdot 1_F$ of a field, Canonical naturals are positive and strictly increasing), and powers and series are those of Integer powers $a^m$ and Series, partial sums, convergence and the sum, divergence, and the tail series.

This is a real power series centred at $0$ (A real power series about a centre, its interval of convergence, and its radius in $[0,+\infty]$). No logarithm, irrational power, or differential equation enters the definition.

## Definition references

[[lem-exponential-series-has-infinite-radius]]

[[def-factorial-and-falling-factorial]]

[[def-canonical-natural]]

[[lem-of-naturals-positive]]

[[def-integer-power]]

[[def-series]]

[[def-real-power-series-and-radius-of-convergence]]

