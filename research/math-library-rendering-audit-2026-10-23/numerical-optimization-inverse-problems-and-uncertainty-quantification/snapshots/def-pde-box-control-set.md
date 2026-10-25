---
id: def-pde-box-control-set
kind: definition
title: Closed pointwise box of L2 controls
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-countable-choice
  - def-l-p-space-as-a-quotient-by-null-functions
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Eduardo Casas and Fredi Tröltzsch, Error estimates for linear-quadratic elliptic control problems
      url: "https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download"
      locator: "§1.1, printed pp. 3–5: L2 distributed controls, constant box bounds, and cell-average admissibility."
---

## Definition

Let $E\subset\mathbb R^d$ be a bounded Lebesgue-measurable set. Let $U=L^2(E;\mathbb R)$ with inner product
$$
(q,r)_U=\int_E q(x)r(x)\,dx
$$
and the corresponding norm. This is a real Hilbert space by [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]] under Countable Choice [[def-countable-choice]].

For bounds $q_a,q_b\in U$ with $q_a\le q_b$ almost everywhere, define the **admissible box**
$$
Q_{ad}(q_a,q_b)=\{q\in U:q_a(x)\le q(x)\le q_b(x)\text{ for almost every }x\in E\}.
$$
Equalities and inequalities between controls are understood as almost-everywhere statements about their $L^2$ classes. The box is nonempty because it contains $q_a$. When a finite-element control space is used, its cellwise-constant admissible set is the intersection of this box with the stated piecewise-constant subspace; cellwise averaging preserves the box when both bounds are constant on each control cell.
