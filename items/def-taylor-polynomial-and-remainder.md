---
id: def-taylor-polynomial-and-remainder
kind: definition
title: "Taylor polynomials and their remainders"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-higher-derivatives-and-smoothness, def-factorial-and-falling-factorial, def-finite-sum, lem-finite-sum-laws, def-integer-power, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
pipeline_run: null
---

## Definition

Let $n\in\mathbb N$, let $f$ have derivatives through order $n$ at $a$, and let $\iota:\mathbb N\to\mathbb R$ be the canonical embedding. The **Taylor polynomial of degree at most $n$ about $a$** is
$$T_{n,a}f(x):=\sum_{j=0}^{n}\frac{f^{(j)}(a)}{\iota(j!)}(x-a)^j.$$
The **Taylor remainder** is $R_{n,a}f(x):=f(x)-T_{n,a}f(x)$.

The factorials are natural numbers as in [[def-factorial-and-falling-factorial]] and enter real arithmetic only through $\iota$ ([[def-canonical-natural]]); they are nonzero ([[lem-of-naturals-positive]]). The sum and powers are those of [[def-finite-sum]], [[lem-finite-sum-laws]], and [[def-integer-power]]. For $n=0$, $T_{0,a}f$ is the constant $f(a)$.
