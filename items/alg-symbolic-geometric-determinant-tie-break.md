---
id: alg-symbolic-geometric-determinant-tie-break
kind: algorithm
title: Shared formal perturbation for declared determinant tie-breaking
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 1
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-certified-geometric-predicate-determinants, def-complete-ordered-real-field]
justified_by: [thm-symbolic-geometric-determinant-tie-break-consistent]
sources:
  references:
    - title: "Herbert Edelsbrunner and Ernst Peter Mücke, Simulation of Simplicity, §§2–3.2"
      url: "https://arxiv.org/pdf/math/9410209"
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 2nd ed., §1.2"
      url: "https://cimec.org.ar/twiki/pub/Cimec/GeometriaComputacional/DeBerg_-_Computational_Geometry_-_Algorithms_and_Applications_2e.pdf"
---

## Definition

Input: a finite set of exact dyadic points in dimension $d=2$ or $d=3$, with
unique stable integer IDs, an ordered tuple with pairwise distinct IDs of the
required size, the coefficient order of
[[def-complete-ordered-real-field]], and an explicit caller declaration that this algorithm uses
symbolic tie-breaking. If an ID is repeated, return the ordinary exact zero
for the repeated-row determinant. Otherwise order all coordinate slots by
point ID and then coordinate index; let $k$ be the zero-based rank of a slot.
Form the requested orientation or lifted
determinant polynomial after replacing that coordinate $x$ formally by
$x+\varepsilon^{3^k}$. Expand with exact dyadic coefficients, combine equal
powers of the formal positive infinitesimal $\varepsilon$, discard zero
coefficients, and return the sign of the coefficient with the least remaining
exponent.

This is a symbolic procedure: no numeric $\varepsilon$ is chosen or
evaluated. It supplies a tie sign only to algorithms that declare this same
shared point-index perturbation. The ordinary exact predicate continues to
return zero on an exact zero determinant.

