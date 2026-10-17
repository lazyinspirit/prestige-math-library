---
id: def-product-hoeffding-anova-components
kind: definition
title: Product-law Hoeffding ANOVA components
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-product-coordinate-projections, lem-product-coordinate-projections-commute-and-contract]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Thierry Klein, Introduction to Sensitivity Analysis: The Statistical Study of Sobol Indices, complete lecture notes, §2.2.2"
      url: https://perso.math.univ-toulouse.fr/klein/files/2014/07/cours_AS.pdf
---

## Definition

Let $f\in L^2(\mu)$ on the finite product probability space of
[[def-product-coordinate-projections]]. For $u\subseteq[d]$, its
**Hoeffding ANOVA component** indexed by $u$ is the $L^2$ class
$$f_u:=\sum_{v\subseteq u}(-1)^{|u|-|v|}P_vf.$$
In particular $f_\varnothing=P_\varnothing f=\mathbb E f$. This convention
includes all interaction orders up to $d$; $f_u$ depends only on coordinates in
$u$ once the coordinate averages are identified with their lifts to the full
product.
