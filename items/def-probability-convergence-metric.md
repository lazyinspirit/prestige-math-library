---
id: def-probability-convergence-metric
kind: definition
title: "A metric for convergence in probability"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, def-measure-null-set-and-almost-everywhere, def-probability-measure, def-random-element-and-real-random-variable]
justified_by: [thm-probability-convergence-is-metrized-by-d-zero]
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Exercise 3.2.8 (comparison metric)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

For almost-sure equivalence classes $[X],[Y]$ of real random variables on a
probability space, set
$$d_0([X],[Y]):=\mathbb E\bigl[\min(1,|X-Y|)\bigr].$$
The expectation is that of
[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]. The
following theorem proves this is independent of representatives and is a
metric; until then the display is a proposed formula on classes. Durrett's
exercise uses the comparable bounded transform $t/(1+t)$ rather than
$\min(1,t)$; the next theorem proves the displayed variant directly.
