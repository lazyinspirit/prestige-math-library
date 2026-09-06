---
id: ex-incidence-point-hyperplane
kind: example
title: The incidence variety of a point and a hyperplane
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-incidence-locus-is-closed, def-plucker-coordinates]
sources:
  scraped: []
  references:
    - title: MIT 18.725 Algebraic Geometry, Lecture 7, Lemma 16
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

In $\mathbf P^n\times(\mathbf P^n)^\vee$, write a point as $[x_0:\cdots:x_n]$ and a hyperplane as $[a_0:\cdots:a_n]$. Incidence is the closed bilinear equation
$$\sum_{i=0}^n a_ix_i=0.$$
For fixed $[a]$ its fibre is that hyperplane $\mathbf P^{n-1}$; for fixed
$[x]$ its fibre is the projective space of hyperplanes through $[x]$, also
$\mathbf P^{n-1}$ when $n\ge1$. When $n=0$, the unique point of
$\mathbf P^0$ lies on no hyperplane: the incidence locus and both fibres are
empty.
