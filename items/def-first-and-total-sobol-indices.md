---
id: def-first-and-total-sobol-indices
kind: definition
title: First-order and total Sobol indices
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [thm-product-hoeffding-anova-decomposition, def-moments-variance-and-covariance]
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
    - title: "Thierry Klein, Introduction to Sensitivity Analysis: The Statistical Study of Sobol Indices, complete lecture notes, Definition 2.1"
      url: https://perso.math.univ-toulouse.fr/klein/files/2014/07/cours_AS.pdf
---

## Definition

Let $f\in L^2(\mu)$ on a finite product probability law and let $V_u$ denote
$\mathbb E[f_u^2]$ for the components of
[[thm-product-hoeffding-anova-decomposition]]. Write
$V=\operatorname{Var}(f)=\sum_{u\ne\varnothing}V_u$. Only when $V>0$ define
the **first-order Sobol index** and **total Sobol index** of coordinate $i$ by
$$S_i:=\frac{V_{\{i\}}}{V},\qquad S_{T_i}:=\frac{\sum_{u\ni i}V_u}{V}.$$
For $V=0$, these normalized indices are undefined. The unnormalized numerators
remain well-defined and equal zero for a constant output.
