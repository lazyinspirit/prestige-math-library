---
id: def-na-zero-tangential-hcurl
kind: definition
title: Zero tangential trace H(curl) space
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-na-hcurl-space]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ralf Hiptmair and Clemens Pechstein, Regular Decompositions of Vector Fields—Continuous, Discrete, and Structure-Preserving
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf
verification:
  precheck: n/a
---

## Definition

Let $\Omega\subset\mathbb R^3$ be open and set
$$H_0(\operatorname{curl};\Omega):=\overline{C_c^\infty(\Omega;\mathbb R^3)}^{\,H(\operatorname{curl};\Omega)},$$
where the norm is that of [[def-na-hcurl-space]]. This is the closure-defined zero-tangential subspace used on this page. Identifying this closure with the full kernel of a particular boundary trace map is not part of the definition.

## Remarks

On a bounded Lipschitz polyhedron admitting a finite matching affine tetrahedral mesh, every member has zero weak tangential trace in the trace-quotient sense of [[lem-na-weak-hcurl-tangential-trace]].
