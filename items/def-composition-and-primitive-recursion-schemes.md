---
id: def-composition-and-primitive-recursion-schemes
kind: definition
title: "Composition and primitive recursion as closure schemes on arithmetic functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-initial-arithmetic-functions, thm-recursion]
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
    - title: "Klaus Sutner, Primitive Recursion"
      url: "https://www.cs.cmu.edu/~cdm/resources/00-primrec.pdf"
---

## Definition

Let $g:\mathbb N^m\to\mathbb N$ and let
$h_1,\dots,h_m:\mathbb N^k\to\mathbb N$ be total arithmetic functions. Their
**composition** is the function
$$ x\longmapsto g\bigl(h_1(x),\dots,h_m(x)\bigr) $$
from $\mathbb N^k$ to $\mathbb N$.

Let $g:\mathbb N^k\to\mathbb N$ and
$h:\mathbb N^{k+2}\to\mathbb N$ be total arithmetic functions. A function
$f:\mathbb N^{k+1}\to\mathbb N$ is obtained from $g$ and $h$ by
**primitive recursion** when
$$ f(0,x_1,\dots,x_k)=g(x_1,\dots,x_k) $$
and
$$ f(n+1,x_1,\dots,x_k)=h\bigl(n,f(n,x_1,\dots,x_k),x_1,\dots,x_k\bigr) $$
for every $n\in\mathbb N$ and every $x_1,\dots,x_k\in\mathbb N$.

By [[thm-recursion]], once $g$ and $h$ are fixed there exists a unique total
function $f$ satisfying these two clauses.

## Remarks

- Composition does not change totality.

- Primitive recursion is recursion on one distinguished natural-number
  argument, with the previous function value available in the recursive clause.
