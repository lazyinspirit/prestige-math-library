---
id: def-discriminant-of-binary-quadratic-form
kind: definition
title: "The discriminant of a binary quadratic form"
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
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Definition 9.2.6"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Definition

The **discriminant** of the integral binary quadratic form

$$f=(a,b,c)=ax^2+bxy+cy^2$$

is the integer

$$\Delta(f):=b^2-4ac.$$

When the form is clear from context, we also write its discriminant as
$\Delta=b^2-4ac$.
