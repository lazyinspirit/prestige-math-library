---
id: def-multidimensional-darboux-integral
kind: definition
title: "The lower and upper Darboux integrals over a nondegenerate rectangle in $\\mathbb{R}^m$"
status: published
origin: session
deps: [def-multidimensional-darboux-sums, lem-multidimensional-refinement-inequalities, def-multidimensional-grid-partition, def-complete-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, def-bounded-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
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

## Definition

For a bounded function $f:Q\to\mathbb R$ on a nondegenerate rectangle
$Q\subseteq\mathbb R^m$, define
$$\underline{\int_Q}f:=\sup_P L(f,P),\qquad \overline{\int_Q}f:=\inf_P U(f,P),$$
over all grid partitions $P$ of $Q$. The grid family is nonempty, since the endpoints in each coordinate give a one-cell grid. Every lower sum is at most every upper sum by a common refinement and [[lem-multidimensional-refinement-inequalities]], so the two sets of sums are nonempty and bounded and the extrema exist ([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]).

The function is **Riemann integrable over $Q$** when the two values agree.
Their unique common real is $\int_Q f$. No integral is defined here for a
degenerate rectangle, because the grid definition requires every coordinate
interval to have distinct endpoints. This is the multidimensional Darboux
definition; its agreement with the published one-dimensional definition is
proved separately.
