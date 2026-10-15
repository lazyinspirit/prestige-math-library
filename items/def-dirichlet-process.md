---
id: def-dirichlet-process
kind: definition
title: "Dirichlet process"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-standard-borel-space
  - def-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-probability-measure
  - def-dirichlet-distribution
  - def-countable-choice
justified_by: []
proof_strategy: definition
axiom_use: "The finite-dimensional Dirichlet law inherits Countable Choice for density normalization from [[def-dirichlet-distribution]]."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Thomas S. Ferguson, A Bayesian Analysis of Some Nonparametric Problems, 1973, Sections 2 and 3"
      url: "https://users.wpi.edu/~balnan/Ferguson1973.pdf"
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, 2017, Chapters 1 and 3"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
---

## Definition

Let $(\mathsf X,\mathcal A)$ be a standard Borel space and let $\alpha$ be a
finite nonzero measure on it. Write $\mathcal P(\mathsf X)$ for the set of
probability measures on $(\mathsf X,\mathcal A)$, equipped with the
**evaluation sigma-algebra**
$$\sigma\bigl(\{G\mapsto G(A):A\in\mathcal A\}\bigr).$$
For a probability law $P$ on this space, let $G$ be the coordinate random
probability measure $G(\omega)=\omega$. Call $P$ a **Dirichlet-process law
with base measure** $\alpha$ if, for every finite measurable partition
$(A_1,\ldots,A_k)$ of $\mathsf X$, the vector
$(G(A_1),\ldots,G(A_k))$ has the Dirichlet distribution with parameters
$(\alpha(A_1),\ldots,\alpha(A_k))$ after zero-parameter cells are omitted;
each omitted zero-base cell has mass zero. If the partition has one
positive-parameter cell, its mass is one. The finite-partition specification
determines at most one law on the evaluation sigma-algebra. When such a law
exists, denote it by $DP(\alpha)$; the construction theorem on this page
proves existence.

The Dirichlet distribution here has the positive-parameter density and
one-category convention of [[def-dirichlet-distribution]]. The definition
asserts no weak topology, support statement, or density-contraction result.
