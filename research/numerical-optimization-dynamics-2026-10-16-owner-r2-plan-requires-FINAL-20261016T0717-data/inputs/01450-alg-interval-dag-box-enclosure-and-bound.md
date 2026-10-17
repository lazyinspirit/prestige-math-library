---
id: alg-interval-dag-box-enclosure-and-bound
kind: algorithm
title: Outward-rounded interval enclosures for factorable expression DAGs on boxes
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 4
deps: [def-spatial-global-optimization-problem, def-dyadic-floating-point-format-and-directed-rounding, def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, lem-directed-dyadic-rounding-enclosure-and-error]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§11 and 20"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
---

## Definition

Input a box $B\subseteq D_0$, a finite real expression DAG from [[def-intervals-rectangles-and-complex-balls]] using addition, subtraction, multiplication, and division, a precision schedule $p\ge2$, and a dyadic format with fixed exponent bounds. The DAG must define a real-valued function at every point of $B$; for each division node its denominator range on $B$ must exclude zero. Traverse the finite DAG in topological order. Enclose each input by its interval in $B$, each exact constant by a certified interval, and apply the corresponding outward-rounded operation from [[def-outward-rounded-interval-and-ball-operations]] at precision $p$. Return the root enclosure $I_p(B)=[a_-,a_+]$, its lower and upper endpoints, and the exact midpoint of $B$ as a candidate point. If any operation returns overflow, split-domain, domain-error, entire, or inconclusive, return that status with no finite bound claim.

For a continuous objective on an unconstrained box, the midpoint is feasible and $a_+$ is a verified upper bound for its objective value. On a constrained box, the midpoint is only a candidate: a separate feasibility witness is required. To refine arithmetic error, callers increase $p$ along any sequence of shrinking boxes. Fixed exponent bounds must be chosen so no exact intermediate on the certified domain overflows; otherwise the procedure returns an explicit failure status.

