---
id: def-simple-function-and-canonical-representation
kind: definition
title: "A simple function and its canonical representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measurable-function-between-measurable-spaces]
verification:
  audited: 2026-08-27
  precheck: n/a
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Definition 2.88"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Definition

Let $(X,\mathcal{A})$ be a measurable space. A function
$s : X \to \mathbb{R}$ is **simple** when it is measurable and its range is
finite.

If the distinct values taken by $s$ are $c_1,\dots,c_m$, define

$$E_j := s^{-1}(\{c_j\}) \qquad (1 \le j \le m).$$

Then the measurable sets $E_1,\dots,E_m$ are pairwise disjoint, their union is
$X$, and

$$s = \sum_{j=1}^m c_j \mathbf{1}_{E_j}.$$

This expression is the **canonical representation** of $s$: the coefficients are
the distinct values of $s$, and the sets are its level sets.
