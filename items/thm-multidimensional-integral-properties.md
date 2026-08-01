---
id: thm-multidimensional-integral-properties
kind: theorem
title: "Linearity, monotonicity, the absolute-value estimate and coordinate-slice additivity for the Riemann integral in $\\mathbb{R}^m$"
status: published
origin: session
deps: [def-multidimensional-darboux-integral, thm-multidimensional-riemann-criterion, thm-multidimensional-darboux-equals-riemann, lem-multidimensional-refinement-inequalities, def-multidimensional-darboux-sums, def-multidimensional-grid-partition, lem-finite-sum-laws, def-abs-value, lem-of-abs-value, cor-of-reverse-triangle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

Let $Q=\prod_{j<m}[a_j,b_j]$ be nondegenerate. For integrable
$f,g:Q\to\mathbb R$ and scalars $\alpha,\beta$, the function
$\alpha f+\beta g$ is integrable and its integral is
$\alpha\int_Qf+\beta\int_Qg$. If $f\le g$, then
$\int_Qf\le\int_Qg$. Also $|f|$ is integrable and
$|\int_Qf|\le\int_Q|f|$. If $a_r<c<b_r$, cutting $Q$ at the coordinate
hyperplane $x_r=c$ gives two nondegenerate subrectangles; integrability on
$Q$ is equivalent to integrability on both restrictions, and their integral
values add to the integral over $Q$.

## Facts & Assumptions

**Given:** The stated integrable functions on the nondegenerate rectangle, and, for coordinate-slice additivity, a strictly interior cut $a_r<c<b_r$.

[L1] Small Darboux gaps characterize integrability; a common refinement improves both lower and upper sums; and the common integral is the tagged-mesh limit ([[thm-multidimensional-riemann-criterion]], [[lem-multidimensional-refinement-inequalities]], [[thm-multidimensional-darboux-equals-riemann]]).

[L2] Grid sums split coordinatewise ([[def-multidimensional-grid-partition]], [[lem-finite-sum-laws]]).

[L3] $\bigl||u|-|v|\bigr|\le|u-v|$, the reverse triangle inequality on the real line ([[cor-of-reverse-triangle]], [[def-abs-value]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Refine grids good for $f$ and $g$. Cellwise supremum and infimum estimates make the gap of $\alpha f+\beta g$ at most $|\alpha|$ times the gap of $f$ plus $|\beta|$ times that of $g$; tagged-sum linearity identifies the value.  [L1, L2]

1.2 Termwise $f\le g$ gives monotonicity of every tagged sum and hence of integrals. By [L3], the oscillation of $|f|$ on a cell is no larger than that of $f$, so $|f|$ is integrable; $-|f|\le f\le|f|$ then gives the absolute-value estimate.   [L1, L3, given]

1.3 Insert the cut coordinate into the grid. [L2] splits every Darboux or tagged sum into the two subrectangle sums. Good grids splice conversely, proving integrability on $Q$ exactly when both restrictions are integrable, and proving additivity.  [L1, L2]

2.1 These arguments establish all clauses with positively oriented rectangles.  [step 1.1, step 1.2, step 1.3] ∎
