---
id: def-characteristic-cell-overlap-remapping
kind: definition
title: "Characteristic-cell overlap remapping for a conservative density"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-semilagrangian-periodic-grid-and-interpolant
  - thm-periodic-c1-velocity-has-global-characteristic-flow
  - lem-periodic-characteristic-map-is-orientation-preserving
  - lem-periodic-flow-departure-cells-have-positive-finite-volume
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-intersection-volume-conservative-remapping
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]) for this Lebesgue-measurable-volume branch. Work on the periodic box $\mathbb T^d_\ell$ of [[def-semilagrangian-periodic-grid-and-interpolant]]. For measure calculations use the bounded open fundamental domain $\Omega:=\prod_{j=1}^d(0,\ell_j)$; the period faces omitted from the half-open grid-indexing copy $Q=\prod_{j=1}^d[0,\ell_j)$ are Lebesgue-null by [[thm-lebesgue-measure-of-a-box-of-every-kind]]. For a periodic measurable set $E$, define $|E|:=\lambda_d(E\cap\Omega)$, where $\lambda_d$ is the $d$-dimensional Lebesgue measure of [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]. Let $\{C_j\}_{j=1}^J$ be a finite measurable source-cell partition and $\{A_i\}_{i=1}^J$ a finite measurable arrival-cell partition of $\Omega$ up to null sets, with every cell of positive volume; their grid labels use the half-open convention in $Q$. Let $\Phi=\Phi_{t_{n+1},t_n}$ be the exact characteristic map from time $t_n$ to $t_{n+1}$. Its inverse images $D_i:=\Phi^{-1}(A_i)$ are the **departure cells**; [[lem-periodic-flow-departure-cells-have-positive-finite-volume]] gives their measurability and positive finite volume, while [[lem-periodic-characteristic-map-is-orientation-preserving]] gives the diffeomorphism and positive-Jacobian convention.

Given a source cell-average density $\rho_j^n$ on $C_j$, set
$$\overline\rho_i:=\frac{1}{|D_i|}\sum_{j=1}^J|D_i\cap C_j|\rho_j^n,\qquad \rho_i^{n+1}:=\frac{|D_i|}{|A_i|}\overline\rho_i.$$
The first formula is the exact intersection-volume remap of [[def-intersection-volume-conservative-remapping]] from the source partition to the departure partition. The second is the characteristic volume factor that converts the average on a departure cell into the transported mass per arrival-cell volume. All intersections and volumes are exact in this mathematical definition; a geometric approximation or quadrature rule would require a separate error term.

## Remarks

The batch-63 PE17 definition is a draft carrier and its current body has been inspected. It defines the exact overlap weights $|T_j\cap S_i|$ and target-cell average for finite measurable partitions of a bounded finite-positive-measure domain; here take the open box $\Omega$, source cells $S_j=C_j\cap\Omega$, and target cells $T_i=D_i\cap\Omega$. Countable Choice is the axiom used locally for Borel-to-Lebesgue measurability and the finite-volume branch. The separate batch-63 theorem that proves conservation and positivity also assumes Countable Choice, as recorded in the dependent theorem.
