---
id: rem-regularity-estimates-do-not-create-boundary-compatibility
kind: remark
title: "Regularity estimates do not create boundary compatibility"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [thm-global-h-two-dirichlet-regularity, thm-higher-order-boundary-regularity-for-dirichlet-problems, def-weak-dirichlet-solution-for-a-divergence-form-operator, cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting, def-bounded-c-k-domain-and-boundary-charts, def-countable-choice, def-axiom-of-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.12, hypotheses of Theorems 4.30-4.31, printed pp. 114-116 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, Example 10.1 and the boundary-regularity hypotheses, printed pp. 242-243 (read in full)"
---

## Statement

Under the choice assumptions of the cited Sobolev trace interfaces
(the Axiom of Choice), the global $H^2$ and higher-order boundary theorems of this page
([[thm-global-h-two-dirichlet-regularity]],
[[thm-higher-order-boundary-regularity-for-dirichlet-problems]]) take the
solution in $H^1_0(\Omega)$, equivalently with zero trace, or apply after subtracting a lifting of the same Sobolev order as the
regularity sought, with the resulting forcing in the required data space.
An $H^1$ lifting alone does not supply an $H^2$ or higher-order estimate. They are a priori estimates, not existence
or compatibility statements: they cannot manufacture boundary regularity for
a datum that is not the trace of an $H^s$ function. On a nonsmooth domain
with a corner, smooth coefficients and boundary data on each open boundary
piece do not remove the corner obstruction. In the
inhomogeneous weak Dirichlet problem the datum must lie in the trace range
and be lifted before the estimates apply
([[def-weak-dirichlet-solution-for-a-divergence-form-operator]],
[[cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting]]); the
companion examples of this pair's examples page show two smooth boundary
pieces with no solution continuous on the closure, and show that the $C^2$
boundary hypothesis itself cannot be dropped. No proof is supplied here; the
remark records the scope boundary of the estimates.

## Source notes

The hypotheses of Hunter's Theorems 4.30-4.31 (printed pp. 114-116) include
zero Dirichlet data, or data handled by a lifting; Teschl's Example 10.1
(printed p. 242) exhibits the reentrant-corner obstruction to the $C^2$
boundary hypothesis. The two companion examples are referenced here in
prose rather than by dependency, because the estimates are the A-page
content and the examples record failure modes only.
