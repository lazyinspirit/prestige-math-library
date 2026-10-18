---
id: lem-periodic-flow-departure-cells-have-positive-finite-volume
kind: lemma
title: "Characteristic departure cells are measurable and have positive finite volume"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - lem-periodic-characteristic-map-is-orientation-preserving
  - def-countable-choice
  - thm-borel-sets-are-lebesgue-measurable
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - prop-measure-monotonicity
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Statement

Assume the Axiom of Countable Choice. Let $\Omega=\prod_{j=1}^d(0,\ell_j)$ be the bounded open fundamental box used for Lebesgue measure, and let $Q=\prod_{j=1}^d[0,\ell_j)$ be its half-open grid-indexing copy. Let $\Phi$ be the periodic $C^1$ characteristic diffeomorphism of [[lem-periodic-characteristic-map-is-orientation-preserving]], and let $A_i$ be a finite tensor-grid cell in $Q$ with nonempty interior. Then $D_i:=\Phi^{-1}(A_i)$, interpreted on the torus and represented in $\Omega$, is Lebesgue measurable and satisfies
$$0<|D_i|<\infty.$$
The finite family of departure cells is a partition whenever the arrival cells form a partition.

## Facts & Assumptions

**Given:** Countable Choice, a periodic $C^1$ characteristic diffeomorphism, the open fundamental box $\Omega$ and half-open grid-indexing copy $Q$, and finite arrival cells with nonempty interiors.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function. It is used only through the cited Lebesgue measurability and measure suppliers below.

[F1] [[lem-periodic-characteristic-map-is-orientation-preserving]]: the lifted flow is a $C^1$ diffeomorphism with continuous inverse and is equivariant under the period lattice.

[F2] [[thm-borel-sets-are-lebesgue-measurable]]: under Countable Choice every Borel subset of $\mathbb R^d$ is Lebesgue measurable.

[F3] [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]: under Countable Choice every nondegenerate Euclidean ball is measurable and has positive finite Lebesgue measure.

[F4] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: under Countable Choice the bounded open box $\Omega$ is measurable with finite volume $\prod_j\ell_j$.

[F5] [[prop-measure-monotonicity]]: measurable inclusions preserve measure order.

## Proof

1.1 Write the grid cell as $A_i=\prod_j[a_j,b_j)$ in $Q$, and let $\Lambda=\prod_j\ell_j\mathbb Z$ be the period lattice. Its torus lift is the countable union $\widehat A_i=\bigcup_{k\in\mathbb Z^d}\prod_j[a_j+k_j\ell_j,b_j+k_j\ell_j)$. Each half-open box is Borel, so $\widehat A_i$ is Borel; continuity of $\Phi$ makes $\Phi^{-1}(\widehat A_i)$ Borel, and its intersection with the open box $\Omega$ is Borel. By [A1] and [F2], this representative of $D_i$ is Lebesgue measurable. Equivariance under $\Lambda$ makes the torus preimage independent of the chosen lift. Since [F1] makes $\Phi$ a bijection on the torus, inverse images preserve disjointness and unions, so departure cells form a partition whenever the arrival cells do. [given, A1, F1, F2, algebra]

2.1 The interior of $A_i$ is nonempty, so its lift-preimage is a nonempty open periodic set. It contains an open product box. In each of its finitely many coordinate intervals, take a point away from the discrete period lattice; the resulting point is in the interior of one lattice tile. A sufficiently small ball around it lies both in that tile and in the lift-preimage. Translate the ball by a period vector into $\Omega$. By [F3] it has positive measure; [F5] then gives $|D_i|>0$. Also $D_i\subseteq\Omega$, and [F4] and [F5] give $|D_i|\le|\Omega|=\prod_j\ell_j<\infty$. [given, A1, F3, F4, F5, step 1.1, choose, algebra] ∎
