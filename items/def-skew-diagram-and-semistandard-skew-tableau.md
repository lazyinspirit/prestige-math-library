---
id: def-skew-diagram-and-semistandard-skew-tableau
kind: definition
title: Skew diagrams and semistandard skew tableaux
status: draft
origin: pipeline
deps:
  - def-partition-young-diagram-and-conjugate-partition
  - def-semistandard-tableau-and-kostka-number
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §1, printed pp. 4–5
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
---

## Definition

Use the English row and column coordinates of
[[def-partition-young-diagram-and-conjugate-partition]]. For partitions
$\mu,\lambda$ with $[\mu]\subseteq[\lambda]$, the **skew diagram**
$[\lambda/\mu]$ is the set difference $[\lambda]\setminus[\mu]$.

A **semistandard skew tableau** of shape $\lambda/\mu$ is a filling of these
boxes by positive integers, weakly increasing from left to right in each row
and strictly increasing from top to bottom in each column, using the same
inequalities as [[def-semistandard-tableau-and-kostka-number]] on the boxes
that remain. Its weight is the finite sequence
$\operatorname{wt}(T)=(a_1,a_2,\ldots)$, where $a_r$ is the number of entries
equal to $r$; its monomial is $x^{\operatorname{wt}(T)}=\prod_{r\ge1}x_r^{a_r}$.

A **horizontal strip** is a skew diagram with at most one box in each column.
Two boxes are side-adjacent when their coordinates differ by one in exactly
one coordinate. The **edge-connected components** of a skew diagram are the
connected components of its boxes under side-adjacency. If $\mu=\lambda$,
the skew diagram is empty and has exactly one filling, the empty tableau, of
weight zero and monomial $1$.
