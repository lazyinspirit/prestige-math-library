---
id: lem-periodic-flow-departure-cells-have-positive-finite-volume
kind: lemma
title: "Characteristic departure cells are measurable and have positive finite volume"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - lem-periodic-characteristic-map-is-orientation-preserving
  - thm-periodic-c1-velocity-has-global-characteristic-flow
  - def-countable-choice
  - lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets
  - lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-finite-and-countable-subadditivity-of-measures
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

Assume the Axiom of Countable Choice. Let $\Omega=\prod_{j=1}^d(0,\ell_j)$ be the bounded open fundamental box used for Lebesgue measure, and let $Q=\prod_{j=1}^d[0,\ell_j)$ be its half-open grid-indexing copy. Let $\Phi$ be the periodic $C^1$ characteristic diffeomorphism of [[lem-periodic-characteristic-map-is-orientation-preserving]], and let $A_i\subseteq Q$ be a Lebesgue-measurable arrival cell with $|A_i|:=\lambda_d(A_i\cap\Omega)>0$. Then $D_i:=\Phi^{-1}(A_i)$, interpreted on the torus and represented in $\Omega$, is Lebesgue measurable and satisfies
$$0<|D_i|<\infty.$$
This includes every finite tensor-grid cell with nonempty interior. The departure cells form a partition up to null sets whenever a finite family of arrival cells does; an exact torus partition pulls back to an exact torus partition.

## Facts & Assumptions

**Given:** Countable Choice, a periodic $C^1$ characteristic diffeomorphism, the fundamental boxes $\Omega,Q$, and measurable positive-volume arrival cells.

[A1] [[def-countable-choice]] is assumed for the Lebesgue-measure suppliers below; no additional choice is used.

[F1] [[lem-periodic-characteristic-map-is-orientation-preserving]] gives the lifted flow and its inverse as $C^1$ diffeomorphisms; [[thm-periodic-c1-velocity-has-global-characteristic-flow]] gives their equivariance under the period lattice.

[F2] [[lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets]]: under Countable Choice a $C^1$ diffeomorphism between open Euclidean sets maps measurable sets to measurable sets. Apply this also to translations and to $\Phi^{-1}$.

[F3] [[lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets]]: under Countable Choice the same maps preserve null sets.

[F4] [[thm-lebesgue-measure-is-a-complete-measure]] and [[thm-finite-and-countable-subadditivity-of-measures]]: measurable sets form a sigma-algebra, Lebesgue measure is complete, and a countable union of null sets is null.

[F5] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: $|\Omega|=\prod_j\ell_j<\infty$; bounded boxes with a degenerate side are null. Thus the union $H:=\bigcup_{j=1}^d\bigcup_{k\in\mathbb Z}\{x:x_j=k\ell_j\}$ of tile faces is null, by covering each face with countably many bounded degenerate boxes and applying [F4].

[F6] [[prop-measure-monotonicity]]: measurable inclusions preserve measure order.

## Proof

1.1 Put $\Lambda=\prod_j\ell_j\mathbb Z$ and $\widehat A_i=\bigcup_{k\in\Lambda}(A_i+k)$. By [F2] and [F4] this countable periodic lift is measurable, and $E_i:=\Phi^{-1}(\widehat A_i)$ is measurable by [F1] and [F2]. Hence $D_i=E_i\cap\Omega$ is measurable. Equivariance makes $E_i$ periodic and makes the torus preimage independent of representatives. [given, A1, F1, F2, F4, construct]

2.1 If $|D_i|=0$, [F3] and [F4] make $\bigcup_{k\in\Lambda}(D_i+k)$ null. Every point of $E_i$ outside $H$ lies in one open tile, so periodicity gives $E_i\subseteq H\cup\bigcup_{k\in\Lambda}(D_i+k)$. By [F4] and [F5], $E_i$ is null; [F3] then makes $\Phi(E_i)=\widehat A_i$ null. This contradicts $A_i\cap\Omega\subseteq\widehat A_i$ and $|A_i|>0$ by [F6]. Thus $|D_i|>0$. Also $D_i\subseteq\Omega$, so [F5] and [F6] give $|D_i|\le\prod_j\ell_j<\infty$. [given, A1, F1, F3, F4, F5, F6, step 1.1, algebra]

3.1 Bijectivity on the torus preserves exact unions and disjointness. For a partition only up to null sets, lift its omitted set and pairwise overlaps periodically; these are null by [F3]–[F5]. Their inverse images are null by [F1] and [F3], so restricting to $\Omega$ gives a departure partition up to null sets. Finally, a half-open tensor cell with nonempty interior is measurable with positive volume by [F5], so it is included in the result. [given, A1, F1, F3, F4, F5, F6, step 1.1, step 2.1, algebra] ∎
