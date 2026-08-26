---
id: def-primitive-binary-quadratic-form
kind: definition
title: "Primitive binary quadratic forms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-binary-quadratic-form-over-integers, def-common-divisor-and-gcd]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Definition 9.4.2"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Definition

An integral binary quadratic form $f=(a,b,c)$
([[def-binary-quadratic-form-over-integers]]) is **primitive** when the only
integers dividing all three coefficients $a$, $b$, and $c$ are $1$ and $-1$.

Equivalently, $f$ is primitive when there is no positive integer greater than
$1$ dividing all three coefficients simultaneously.

## Remarks

- Primitive forms and primitive representations are different notions:
  [[def-integer-represented-by-binary-quadratic-form]] concerns the pair
  $(r,s)$, whereas this definition concerns the coefficient triple $(a,b,c)$.
- The word "primitive" here is invariant under changing all three coefficients
  by a common sign.
