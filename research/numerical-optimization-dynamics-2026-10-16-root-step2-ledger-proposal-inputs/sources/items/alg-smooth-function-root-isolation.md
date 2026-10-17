---
id: alg-smooth-function-root-isolation
kind: algorithm
title: Finite-budget interval isolation for smooth scalar roots
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 6
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-real-boxes-and-interval-jacobian-enclosures
  - def-intervals-rectangles-and-complex-balls
  - def-outward-rounded-interval-and-ball-operations
  - lem-real-interval-arithmetic-preserves-enclosure
  - def-continuity-and-derivative-on-real-interval
  - alg-scalar-interval-newton-certification
justified_by:
  - thm-smooth-function-root-isolation-soundness
verification:
  precheck: n/a
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§6.2 and 13.1"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, §2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Definition

Input a $C^1$ function $f:U\to\mathbb R$ on an open interval $U$, a nonempty finite dyadic interval $X_0\subset U$, valid interval range and derivative enclosures on every queried subinterval, a minimum width $\eta>0$, and a nonnegative integer box budget $B\ge0$. The two enclosure evaluators must contain $f(I)$ and $f'(I)$, respectively; non-finite results cannot certify a root or its absence.

Initialize a queue with $X_0$. While the queue is nonempty and fewer than $B$ boxes have been processed, remove its first interval $I$ and call [[alg-scalar-interval-newton-certification]] on $I$ with update budget $1$ and the supplied evaluators. If it returns "root-free", record $I$ as excluded. If it returns "unique-root", record $I$ as a certified box. Otherwise, if the width of $I$ exceeds $\eta$, bisect at its midpoint and append the two closed halves to the queue. If the width is at most $\eta$, record $I$ as unresolved. When the box budget is exhausted, append every remaining queued interval to the unresolved list.

Return the excluded boxes, certified boxes, unresolved boxes, and processed-box count. The status is "complete" exactly when the unresolved list is empty; otherwise it is "inconclusive". Certified boxes may share a bisection endpoint. A strict interval-Newton inclusion places its root in the interior of the scalar call's box. The scalar procedure can also certify after contracting to an exact singleton; in that case the smooth isolator records the original processed interval, whose root may be at an endpoint. Unresolved boxes prevent any all-roots conclusion.

