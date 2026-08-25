---
id: def-standard-bilinear-form-on-a-coordinate-space
kind: definition
title: "The standard bilinear form $\\langle x,y\\rangle=\\sum_{i<n}x_iy_i$ on $F^{n}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field, def-bilinear-symmetric-skew-and-alternating-forms, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, def-vector-space, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §2.3.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Definition

Fix a field $F$ and a natural number $n$. The **standard bilinear form** on
$F^n$ is

$$\langle x,y\rangle:=\sum_{i<n}x_iy_i.$$

The symbol denotes the finite sum in the additive commutative group of the
field $F$: it is $0_F$ at $n=0$ and is obtained by successively adding the
terms $x_iy_i$ for $i<n$.

This is a symmetric bilinear form in the sense of
[[def-bilinear-symmetric-skew-and-alternating-forms]], and its matrix in the
standard basis of $F^n$ is the identity matrix. Hence it is nondegenerate in the
sense of [[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]].

When $F=\mathbb{F}_2$, the squaring law $t^2=t$ gives

$$\langle x,x\rangle=\sum_{i<n}x_i.$$

So over $\mathbb{F}_2$ the form detects parity and not positivity. It is not an
inner product there, and the page never treats it as one.

## Remarks

- The formula is the same over every field, but the consequences are not. The
  Oddtown and Eventown arguments use only bilinearity over $\mathbb{F}_2$; the
  Fisher argument later uses the order and positivity of $\mathbb{R}$ as well.
