---
id: def-absolute-polar-in-a-normed-dual-pair
kind: definition
title: Absolute polar in a normed dual pair
status: draft
origin: pipeline
deps: ["def-dual-space-of-a-normed-space"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Problem 5.3, p. 141"
---

## Definition

Let $X$ be a real or complex normed space and let $U\subseteq X$.  The
**absolute polar** of $U$ in the continuous dual [[def-dual-space-of-a-normed-space]]
is

$$U^\circ=\{f\in X^*: |f(u)|\leq1\text{ for every }u\in U\}.$$

This convention uses the absolute value over both scalar fields.  In
particular, it is not the one-sided real polar defined by inequalities
$f(u)\leq1$.  If $U=\varnothing$, then $U^\circ=X^*$; if $U=\{0\}$, the same
conclusion holds because every linear functional vanishes at zero.
