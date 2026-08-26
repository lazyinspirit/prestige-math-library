---
id: def-proper-equivalence-of-binary-quadratic-forms
kind: definition
title: "Proper equivalence of binary quadratic forms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-binary-quadratic-form-over-integers]
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
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Definition 9.2.2"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Definition

Let $f$ and $g$ be integral binary quadratic forms. We say that $f$ and $g$ are
**properly equivalent** when there exists a matrix

$$M=\begin{pmatrix}p&q\\ r&s\end{pmatrix}\in \mathrm{SL}_2(\mathbb{Z})$$

such that

$$g(x,y)=f(px+qy,rx+sy)$$

for all integers $x,y$.

When this holds we also write

$$g=f\mid M.$$

## Remarks

- The determinant condition is $ps-qr=1$, so proper equivalence uses only
  orientation-preserving unimodular substitutions.
- On the companion page, an example shows that allowing determinant $-1$ can
  merge two distinct proper-equivalence classes.
