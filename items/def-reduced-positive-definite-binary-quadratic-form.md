---
id: def-reduced-positive-definite-binary-quadratic-form
kind: definition
title: "Reduced positive-definite binary quadratic forms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-positive-definite-binary-quadratic-form]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Definition 9.3.1"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Definition

A positive-definite binary quadratic form $(a,b,c)$
([[def-positive-definite-binary-quadratic-form]]) is **reduced** when

$$|b|\le a\le c,$$

and, in the two boundary cases, the middle coefficient is required to be
nonnegative:

$$b\ge0\qquad\text{whenever}\qquad |b|=a\ \text{ or }\ a=c.$$

## Remarks

- The inequalities alone are not enough for uniqueness: the sign convention at
  the boundary removes the duplicate reduced representatives.
- The definition applies only to positive-definite forms; the companion page
  records that the indefinite theory uses a different convention and does not
  have uniqueness.
