---
id: def-initial-arithmetic-functions
kind: definition
title: "The zero, successor, and projection functions on the natural numbers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function, def-natural-numbers]
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
    - title: "Klaus Sutner, Primitive Recursion"
      url: "https://www.cs.cmu.edu/~cdm/resources/00-primrec.pdf"
---

## Definition

For each integer $k\ge 1$, the **initial arithmetic functions** on
$\mathbb N$ are:

- the zero function
  $$ Z:\mathbb N\to\mathbb N,\qquad Z(n)=0; $$
- the successor function
  $$ S:\mathbb N\to\mathbb N,\qquad S(n)=\sigma(n)=n\cup\{n\}; $$
- for each $1\le i\le k$, the $i$th projection
  $$ P_i^k:\mathbb N^k\to\mathbb N,\qquad P_i^k(x_1,\dots,x_k)=x_i. $$

Here $\mathbb N$ is the natural-number system from [[def-natural-numbers]], and
each displayed rule determines a total function in the sense of
[[def-function]].

## Remarks

- These are the basic generators from which primitive recursive functions are
  built.

- The arity is part of the data: the family $\{P_i^k\}$ contains one
  projection for each positive arity $k$ and each coordinate $i$ in that arity.
