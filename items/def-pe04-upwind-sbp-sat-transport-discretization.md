---
id: def-pe04-upwind-sbp-sat-transport-discretization
kind: definition
title: Upwind SBP-SAT discretization of constant transport
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-pe04-diagonal-norm-sbp-element-data
  - def-pe04-upwind-dg-transport-discretization
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Travis C. Fisher and Mark H. Carpenter, High-Order Entropy Stable Finite Difference Schemes for Nonlinear Conservation Laws: Finite Domains, NASA/TM-2013-217971"
      url: "https://ntrs.nasa.gov/api/citations/20130011028/downloads/20130011028.pdf"
      locator: "§2.3.2, printed p. 8: SBP derivative and norm matrices; §2.3.5, printed pp. 11–12: weak-form boundary treatment."
    - title: "Bernardo Cockburn, An Introduction to the Discontinuous Galerkin Method for Convection-Dominated Problems, CIME lecture notes"
      url: "https://www-users.cse.umn.edu/~bcockbur/lecture_notes/DG-1.pdf"
      locator: "§4.2, printed pp. 201–203: multidimensional DG face flux and quadrature conventions."
---

## Definition

Fix constant transport velocity $\beta\in\mathbb R^d$ and SBP data from [[def-pe04-diagonal-norm-sbp-element-data]]. For each cell $K$, let $U_K(t)$ be the vector of nodal values, $Q_{K,\ell}=H_KD_{K,\ell}$, and $U_{K,F}=R_{K,F}U_K$. Set $b_{K,F}=\beta\cdot n_{K,F}$. At each interior face, use the trace from the cell with positive outward speed when $b_{K,F}>0$, and the neighboring trace when $b_{K,F}<0$; at boundary faces use the inflow data on $b_{K,F}<0$ and the interior trace on $b_{K,F}\ge0$. Denote this upwind scalar trace by $\widehat U_{K,F}$.

The **upwind SBP-SAT semidiscretization** is
$$H_K\dot U_K+\sum_{\ell=1}^d\beta_\ell Q_{K,\ell}U_K+\sum_{F\subset\partial K}R_{K,F}^{T}M_{K,F}\,b_{K,F}(\widehat U_{K,F}-U_{K,F})=0.$$
The sign of the SAT correction is fixed by this equation. The definition is spatial only and makes no fully discrete claim.
