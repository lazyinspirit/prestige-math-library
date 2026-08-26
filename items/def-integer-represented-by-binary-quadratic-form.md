---
id: def-integer-represented-by-binary-quadratic-form
kind: definition
title: "Integers represented, and primitively represented, by a binary quadratic form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-binary-quadratic-form-over-integers, def-common-divisor-and-gcd]
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
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Chapter 9"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Definition

Let $f(x,y)=ax^2+bxy+cy^2$ be an integral binary quadratic form
([[def-binary-quadratic-form-over-integers]]) and let $n\in\mathbb{Z}$.

We say that $f$ **represents** $n$ when there exist integers $r,s$ such that

$$n=f(r,s)=ar^2+brs+cs^2.$$

We say that $f$ **primitively represents** $n$ when there exist integers
$r,s$ with

$$n=f(r,s)\qquad\text{and}\qquad \gcd(r,s)=1$$

([[def-common-divisor-and-gcd]]).

## Remarks

- Primitive representation is a condition on the representing pair $(r,s)$, not
  on the coefficients of the form.
- A form can represent an integer without primitively representing it.
