---
id: def-binary-quadratic-form-over-integers
kind: definition
title: "Integral binary quadratic forms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
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
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Chapter 9"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Definition

An **integral binary quadratic form** is a homogeneous polynomial

$$f(x,y)=ax^2+bxy+cy^2$$

with coefficients $a,b,c\in\mathbb{Z}$. We also denote this form by the triple

$$f=(a,b,c).$$

The coefficient of $xy$ is written as $b$, not $2b$.

## Remarks

- The variables are two independent integer variables, so "binary" refers to
  the number of variables and "quadratic" to the total degree.
- Later items pass freely between the polynomial notation $ax^2+bxy+cy^2$ and
  the coefficient notation $(a,b,c)$.
