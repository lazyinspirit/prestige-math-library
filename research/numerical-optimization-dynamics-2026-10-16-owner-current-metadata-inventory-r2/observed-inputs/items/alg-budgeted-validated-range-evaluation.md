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
deps: [alg-certified-elementary-range-evaluation, def-intervals-rectangles-and-complex-balls, thm-outward-rounded-operations-are-isotone-and-dag-sound, def-dyadic-floating-point-format-and-directed-rounding]
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

Input: a finite, well-formed, typed expression DAG with exactly one designated
output node, an interval/rectangle assignment box $X$ for its input nodes, a
dyadic requested width $\varepsilon>0$, finite-format parameters
$(p,e_{\min},e_{\max})$ with $p\ge2$ and $e_{\min}\le e_{\max}$, series
truncation index $N\ge1$, and integer total box-split budget $B\ge0$.
The supported node types, input assignments, exact dyadic constants and
supplied certified constant enclosures satisfy the admissibility conditions
of [[alg-certified-elementary-range-evaluation]]. In particular, every input
endpoint and every endpoint of a supplied constant enclosure belongs to the
selected finite representable set $\mathbb F$. Truth of a supplied constant's
certified inclusion is a mathematical input promise, not something inferred
from its endpoints. Exact dyadic constants need not themselves be
representable; their conversion and any overflow remain the evaluator's task.

Use the following exact membership procedure for each supplied finite
endpoint and for every proposed split midpoint. Put
$\eta=2^{e_{\min}-p+1}$. Compare the value with zero, then enumerate both
signs of $k\eta$ for $k=1,\ldots,2^{p-1}-1$, and both signs of
$k2^{e-p+1}$ for $e=e_{\min},\ldots,e_{\max}$ and
$k=2^{p-1},\ldots,2^p-1$, stopping at a match. If the finite enumeration
ends without a match, report `not-in-format`. Every comparison is an exact
dyadic equality test. This is the representable set of
[[def-dyadic-floating-point-format-and-directed-rounding]], including zero
and subnormals. Before initializing the queue, check the integer/format
conditions and the finite input and supplied-constant endpoint memberships;
malformed data or a failed membership returns `inconclusive` with the
identifying input status, without an evaluator call. An empty input returns
`empty` as in the elementary evaluator.

Keep the DAG, designated output, constant enclosures, format and $N$ fixed.
Set a shared counter $R:=B$ and a queue containing $X$. Process the queue in
first-in, first-out order. For each box $Q$, evaluate the DAG by
[[alg-certified-elementary-range-evaluation]] with the same format and $N$,
requesting only the designated output node's enclosure. The hull of no
completed leaves is recorded as `empty`.

- If evaluation returns a non-finite status, return that status and the exact
  unresolved box $Q$; it is not a tolerance certificate.
- If it returns a finite enclosure $I$ with width at most $\varepsilon$, save
  $I$ as a completed leaf enclosure.
- If it returns a finite enclosure wider than $\varepsilon$ and $R=0$, return
  `inconclusive` with the completed-leaf hull, $Q$, and the unmet width test.
- If it returns a finite enclosure wider than $\varepsilon$ and $R>0$, select
  a widest nondegenerate input coordinate (breaking ties by the first
  coordinate in the input order). If there is no such coordinate, return
  `inconclusive` with the completed-leaf hull, the unresolved parent $Q$,
  the remaining queue, and status `no-splittable-coordinate` with the unmet
  width test. Otherwise compute its midpoint $m$ by exact dyadic arithmetic
  and apply the membership procedure above in the actual selected format.
  If it reports `not-in-format`, return `inconclusive` with the completed-leaf
  hull, the unresolved parent $Q$, the remaining queue, and status
  `midpoint-not-in-format`, identifying the coordinate and exact midpoint.
  Do not enqueue either child or call the evaluator on it in this case.
  If $m\in\mathbb F$, split that coordinate into the two closed halves at
  $m$, decrement $R$ by one, and append both children to the queue.

When the queue is empty, take the hull $J$ of all completed leaf enclosures.
Return `certified(J,X)` only if $\operatorname{width}(J)\le\varepsilon$;
otherwise return `inconclusive(J,X)` and state that the global width test
failed.
