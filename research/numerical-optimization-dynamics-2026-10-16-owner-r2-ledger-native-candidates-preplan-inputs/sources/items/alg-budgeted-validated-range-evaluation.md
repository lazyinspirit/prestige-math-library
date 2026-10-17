---
id: alg-budgeted-validated-range-evaluation
kind: algorithm
title: Finite-budget validated range evaluation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 10
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [alg-certified-elementary-range-evaluation, def-intervals-rectangles-and-complex-balls, thm-outward-rounded-operations-are-isotone-and-dag-sound]
justified_by: [thm-budgeted-range-evaluation-terminates-and-is-sound]
verification:
  precheck: pending
sources:
  references:
    - title: "Kearfott, Interval Computations: Introduction, Uses, and Resources, §§1–2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §8.3"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Definition

Input: a finite expression DAG, a closed interval/rectangle domain box $X$, a
dyadic requested width $\varepsilon>0$, finite-format parameters, series
truncation index $N\ge1$, and integer total box-split budget $B\ge0$. Set a shared counter
$R:=B$ and a queue containing $X$. Process boxes in a fixed order. For each
box $Q$, evaluate the DAG by
[[alg-certified-elementary-range-evaluation]] with the same format and $N$.

- If evaluation returns a non-finite status, return that status and the exact
  unresolved box $Q$; it is not a tolerance certificate.
- If it returns a finite enclosure $I$ with width at most $\varepsilon$, save
  $I$ as a completed leaf enclosure.
- If it returns a finite enclosure wider than $\varepsilon$ and $R=0$, return
  `inconclusive` with the completed-leaf hull, $Q$, and the unmet width test.
- If it returns a finite enclosure wider than $\varepsilon$ and $R>0$, select
  a widest nondegenerate input coordinate (breaking ties by the first
  coordinate in the input order), split it at its dyadic midpoint
  into two closed halves, decrement the shared counter $R$ by one, and append
  both halves to the queue. If no coordinate can be split, return
  `inconclusive` with the unmet width test.

When the queue is empty, take the hull $J$ of all completed leaf enclosures.
Return `certified(J,X)` only if $\operatorname{width}(J)\le\varepsilon$;
otherwise return `inconclusive(J,X)` and state that the global width test
failed. Each split covers its parent because the two closed halves overlap at
the midpoint and their union is the parent coordinate interval. The shared
counter makes $B$ a total split limit across the full computation.
