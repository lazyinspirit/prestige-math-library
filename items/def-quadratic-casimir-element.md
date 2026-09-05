---
id: def-quadratic-casimir-element
kind: definition
title: "The quadratic Casimir element"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-universal-enveloping-algebra-as-a-tensor-quotient, def-killing-form-of-a-semisimple-lie-algebra, prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra]
justified_by: [lem-the-casimir-element-is-independent-of-dual-bases]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Alexander Kleshchev, Lectures on Infinite Dimensional Lie Algebras"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf"
pipeline_run: null
---

## Definition

Let $\mathfrak g$ be a complex semisimple Lie algebra, and let $B$ be the Killing form from [[def-killing-form-of-a-semisimple-lie-algebra]]. Choose dual bases $x_1,\dots,x_n$ and $x^1,\dots,x^n$ with respect to $B$, so $B(x_i,x^j)=\delta_i^j$. The **quadratic Casimir element** is

$$C:=\sum_{i=1}^n x_i x^i \in U(\mathfrak g).$$

By [[lem-the-casimir-element-is-independent-of-dual-bases]], this element is independent of the chosen dual bases.
