---
id: def-positive-definite-binary-quadratic-form
kind: definition
title: "Positive-definite binary quadratic forms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-binary-quadratic-form-over-integers]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Section 9.2.4"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
pipeline_run: null
---

## Definition

An integral binary quadratic form $f(x,y)=ax^2+bxy+cy^2$
([[def-binary-quadratic-form-over-integers]]) is **positive definite** when

$$f(x,y)>0$$

for every real pair $(x,y)\ne(0,0)$.

## Remarks

- The condition is about positivity on $\mathbb{R}^2$, not only on
  $\mathbb{Z}^2$.
- The next proposition turns this intrinsic condition into the coefficient test
  $a>0$ and $\Delta<0$.
