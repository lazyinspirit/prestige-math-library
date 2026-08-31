---
id: def-primitive-recursive-function
kind: definition
title: "Primitive recursive functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-initial-arithmetic-functions, def-composition-and-primitive-recursion-schemes]
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

A total function $f:\mathbb N^k\to\mathbb N$ is **primitive recursive** when
it belongs to the smallest collection of total arithmetic functions that:

- contains every initial arithmetic function from
  [[def-initial-arithmetic-functions]], and
- is closed under the two schemes from
  [[def-composition-and-primitive-recursion-schemes]].

Equivalently, a primitive recursive function is one obtainable from the zero,
successor, and projection functions by finitely many applications of
composition and primitive recursion.

## Remarks

- Primitive recursive functions are always total on $\mathbb N^k$.

- The definition is extensional: different constructions may yield the same
  primitive recursive function.
