---
id: def-complex-simple-function
kind: definition
title: "Complex simple functions as finite sums of measurable indicators"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sigma-algebra, thm-complex-numbers-form-a-field]
verification:
  audited: 2026-08-30
  precheck: n/a
sources:
  references:
    - title: "John K. Hunter, Measure Theory, §4.6"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, §3A and §6B"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Definition

Let $(X,\mathcal A)$ be a measurable space. A function $s:X\to\mathbb C$ is a
**complex simple function** when there are pairwise disjoint measurable sets
$E_1,\dots,E_m\in\mathcal A$ and coefficients $c_1,\dots,c_m\in\mathbb C$ such
that
$$s=\sum_{j=1}^m c_j\mathbf 1_{E_j}.$$

Equivalently, $s$ is measurable and has finite range. The disjoint
representation above can always be taken to be the canonical one given by the
nonempty level sets of $s$.
