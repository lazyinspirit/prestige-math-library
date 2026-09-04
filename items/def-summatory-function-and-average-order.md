---
id: def-summatory-function-and-average-order
kind: definition
title: "Summatory functions and average orders"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-arithmetic-function]
justified_by: []
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Definition

Let $f$ be an arithmetic function ([[def-arithmetic-function]]). Its
**summatory function** is

$$ F_f(x):=\sum_{n\le x} f(n) $$

for real $x \ge 1$.

An arithmetic function $g$ is an **average order** of $f$ when

$$ \sum_{n\le x} f(n)\sim \sum_{n\le x} g(n) $$

as $x\to\infty$, and the comparison sum on the right is eventually nonzero.

## Remarks

- This is a summatory asymptotic. It does not say that $f(n)$ and $g(n)$ are
  pointwise close term by term.
- Because the index condition is $n\le x$, every summatory function here is
  constant on each interval $[m,m+1)$.
