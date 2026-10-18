---
id: def-jordan-algebra
kind: definition
title: Jordan algebra over a field of characteristic not two
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 0
deps: [def-field, def-vector-space]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §1"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "John C. Baez, The Octonions, §3.2, PDF p. 20"
      url: https://arxiv.org/pdf/math/0105155v4
---

## Definition

Let $k$ be a field with $\operatorname{char}(k)\ne2$ ([[def-field]]) and let
$J$ be a $k$-vector space ([[def-vector-space]]). A **Jordan $k$-algebra** is a
bilinear product $\circ:J\times J\to J$ (linear in each argument) such that
$x\circ y=y\circ x$ and

$$ x\circ(y\circ x^2)=(x\circ y)\circ x^2 $$

for all $x,y\in J$, where $x^2:=x\circ x$. Associativity is not required. The
algebra is **unital** if there is an element $1_J$ such that
$1_J\circ x=x$ for every $x\in J$.
