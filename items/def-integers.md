---
id: def-integers
kind: definition
title: "The integers as equivalence classes of pairs of naturals"
status: published
origin: session
deps: []
aliases: []
landmark: true
short: "ℤ"
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
pipeline_run: null
---

## Definition

On the set $\mathbb{N} \times \mathbb{N}$ of pairs of natural numbers, define

$$(a,b) \sim (c,d) \iff a + d = b + c.$$

This is an equivalence relation ([[lem-int-equivalence]]). The **integers** are
the quotient

$$\mathbb{Z} := (\mathbb{N} \times \mathbb{N}) / \sim,$$

and we write $[(a,b)]$ for the equivalence class of $(a,b)$.

## Remarks

- The pair $(a,b)$ encodes the formal difference $a - b$; the defining relation
  $a + d = b + c$ is the equation "$a - b = c - d$" restated using only
  addition, which is all $\mathbb{N}$ has.
- $\mathbb{N}$ and its arithmetic (commutativity, associativity,
  distributivity, cancellation of addition, the order) are taken as given
  background throughout this construction.
