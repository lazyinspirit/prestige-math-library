---
id: def-addition-and-multiplication-modulo-n
kind: definition
title: "Addition and multiplication on $\\mathbb Z/n$ by $[a]_n+[b]_n=[a+b]_n$ and $[a]_n[b]_n=[ab]_n$"
status: published
origin: session
deps: [lem-congruence-respects-integer-arithmetic, def-integers-modulo-n, def-binary-operation]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
pipeline_run: null
---

## Definition

Let $n\in\mathbb N$, including $n=0$ and $n=1$. For classes in
$\mathbb Z/n$ ([[def-integers-modulo-n]]) define

$$[a]_n+[b]_n:=[a+b]_n,\qquad [a]_n[b]_n:=[ab]_n.$$

These are binary operations in the sense of [[def-binary-operation]]. Indeed,
if $[a]_n=[a']_n$ and $[b]_n=[b']_n$, then
$a\equiv a'\pmod n$ and $b\equiv b'\pmod n$, so

$$a+b\equiv a'+b'\pmod n,\qquad ab\equiv a'b'\pmod n$$

by [[lem-congruence-respects-integer-arithmetic]]. Thus the two displayed
classes do not depend on the representatives chosen.

For $n=0$, every class is a singleton and these operations reproduce integer
addition and multiplication under the bijection $\mathbb Z\to\mathbb Z/0$. For
$n=1$, the quotient has one element, so $[0]_1=[1]_1$ and both operations are
the unique binary operation on a one-element set.

## Remarks

- The representative-independence argument is part of the definition. Without
  it the displayed formulas would be rules on integers, not operations on
  classes.
- No field assertion is made here. In particular, the coincidence
  $[0]_1=[1]_1$ will exclude $\mathbb Z/1$ from being a field.
