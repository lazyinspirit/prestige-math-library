---
id: def-set-limsup-and-liminf
kind: definition
title: "Limit superior and limit inferior of a sequence of sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Exercise 2.9"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Definition

For a sequence $(A_n)_{n\in\mathbb N}$ of subsets of a set $X$, define

$$\liminf_{n\to\infty}A_n:=\bigcup_{n\in\mathbb N}\bigcap_{k\ge n}A_k,\qquad \limsup_{n\to\infty}A_n:=\bigcap_{n\in\mathbb N}\bigcup_{k\ge n}A_k.$$

The sequence begins at index $0$. If the two sets are equal, their common value
is called the **limit** of the sequence of sets.
