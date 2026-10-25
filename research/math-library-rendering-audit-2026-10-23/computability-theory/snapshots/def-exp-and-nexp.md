---
id: def-exp-and-nexp
kind: definition
title: "The classes EXP and NEXP"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-dtime-ntime-dspace-and-nspace
verification:
  audited: 2026-09-02
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

The exponential-time classes are
$$ EXP:=\bigcup_{k\ge 1}\operatorname{DTIME}(2^{n^k}),\qquad NEXP:=\bigcup_{k\ge 1}\operatorname{NTIME}(2^{n^k}). $$

## Remarks

- The exponent $k$ is fixed per language, just as in the definition of $P$ and
  $NP$.

- The point is asymptotic growth: exponential time allows bounds of the form
  $2^{n^k}$ up to the usual multiplicative constants hidden in the class
  notation.
