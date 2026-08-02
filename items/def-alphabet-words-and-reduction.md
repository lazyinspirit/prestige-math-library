---
id: def-alphabet-words-and-reduction
kind: definition
title: "Words in an alphabet with formal inverses, elementary cancellation, and reduced words"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers]
justified_by: [thm-reduced-words-form-the-free-group]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "McKernan, Presentations and Groups of Small Order, Lecture 12"
      url: "https://math.mit.edu/~mckernan/Teaching/12-13/Spring/18.703/l_12.pdf"
pipeline_run: null
---

## Definition

For a set $X$, form a disjoint copy $X^{-1}=\{x^{-1}:x\in X\}$ of formal
inverses. A **word on $X$** is a finite string of letters from
$X\sqcup X^{-1}$; the string of length zero is the **empty word**.

An **elementary cancellation** deletes two adjacent letters $xx^{-1}$ or
$x^{-1}x$. A word is **reduced** if no elementary cancellation applies. Words
are **freely equivalent** if one can be transformed into the other by finitely
many elementary cancellations and their reverse insertions. The reduction and
uniqueness facts needed for the free-group construction are proved in
[[thm-reduced-words-form-the-free-group]].
