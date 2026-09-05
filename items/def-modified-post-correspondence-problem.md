---
id: def-modified-post-correspondence-problem
kind: definition
title: "The modified Post correspondence problem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-post-correspondence-problem]
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

An instance of the **modified Post correspondence problem** is a PCP instance
$$ (u_1,v_1),\dots,(u_n,v_n) $$
with the extra requirement that a permitted match must start with the first
domino.

Thus a **modified-PCP match** is a nonempty sequence
$$ 1=i_1,i_2,\dots,i_k $$
such that
$$ u_{i_1}\cdots u_{i_k}=v_{i_1}\cdots v_{i_k}. $$

## Remarks

- Modified PCP differs from ordinary PCP only by fixing the first chosen tile.

- Every modified-PCP match is a PCP match, but not conversely.
