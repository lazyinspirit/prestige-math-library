---
id: def-incidence-vector-of-a-subset
kind: definition
title: "The incidence vector $v_A\\in F^{n}$ of a subset $A\\subseteq[n]$ over a stated field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field, def-vector-space, def-finite-cardinality, lem-standard-basis-of-f-n]
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
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §1.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 3"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
pipeline_run: null
---

## Definition

Fix a field $F$, a natural number $n$, and the standard basis
$e_0,\dots,e_{n-1}$ of $F^n$ ([[lem-standard-basis-of-f-n]]).

For a subset $A\subseteq[n]=\{0,\dots,n-1\}$, its **incidence vector over $F$**
is

$$v_A\in F^n,\qquad (v_A)_i=\begin{cases}1_F,&i\in A,\\[2pt]0_F,&i\notin A.\end{cases}$$

Thus

$$v_A=\sum_{i\in A}e_i.$$

The field is part of the datum and is written whenever two fields are being used
at once. The same subset may therefore produce different vectors on this page:
the coordinates are the same zero-one pattern, but the arithmetic happens in the
chosen field.

The assignment $A\mapsto v_A$ is injective: if $A\ne B$, then some coordinate
$i$ lies in exactly one of them, so $(v_A)_i\ne(v_B)_i$. In particular
$v_\varnothing=0$ and $v_A\ne0$ whenever $A\ne\varnothing$.

## Remarks

- Everything below turns set-system questions into vector-space questions
  through this definition. Distinctness of sets becomes distinctness of vectors,
  parity questions become equalities in $\mathbb{F}_2$, and intersection sizes
  become bilinear-form values.
