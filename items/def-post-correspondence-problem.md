---
id: def-post-correspondence-problem
kind: definition
title: "The Post correspondence problem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf"
    - title: "MIT OpenCourseWare, Lecture 10: Computation History Method"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/resources/lecture-10-computation-history-method/"
---

## Definition

Fix a finite alphabet $\Sigma$. A **Post correspondence problem instance**
over $\Sigma$ is a finite list of pairs of nonempty words
$$ (u_1,v_1),\dots,(u_n,v_n)\in(\Sigma^+\times\Sigma^+). $$

A **match** for that instance is a nonempty finite index sequence
$$ i_1,\dots,i_k\in\{1,\dots,n\} $$
such that
$$ u_{i_1}\cdots u_{i_k}=v_{i_1}\cdots v_{i_k}. $$

The **Post correspondence problem** asks, given such a finite list of dominoes,
whether a match exists.

## Remarks

- The chosen sequence may repeat dominoes.

- The equality compares the two concatenated words exactly as written. One may
  choose dominoes and their order, but one may not reorder symbols inside a
  domino.
