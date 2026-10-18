---
id: def-periodic-cell-correctors-and-effective-tensor
kind: definition
title: Periodic correctors and effective tensor
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-periodic-cell-problem, def-periodic-scalar-diffusion-data, lem-periodic-cell-corrector-wellposedness, lem-standard-basis-of-f-n, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.2.2, equations (1.9)–(1.13), PDF pp. 7–8: cell correctors and effective matrix from averaged flux."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §§1.2–1.3, printed pp. 9–23: correctors and homogenized coefficient."
verification:
  precheck: n/a
---
## Definition

The library represents $\mathbb R^d$ as functions on $d=\{0,\ldots,d-1\}$, with standard basis $\widetilde e_j$ for $j<d$ ([[lem-standard-basis-of-f-n]]). For the usual PDE coordinate labels $i=1,\ldots,d$, write $x_i:=x(i-1)$, set $e_i:=\widetilde e_{i-1}$, write $p_i:=p(i-1)$, and set $\partial_i:=\partial_{i-1}$ in the multi-index convention of [[def-ck-and-multi-index-notation-in-several-variables]]. The same shift applies to vector and tensor components, so component label $i$ means library index $i-1$. By [[lem-periodic-cell-corrector-wellposedness]], let $\chi_i:=\chi_{e_i}$ be the unique mean-zero solution of the periodic cell equation. Define $\chi_p=\sum_{i=1}^d p_i\chi_i$ and define the constant matrix $A^*$ by its columns:
$$A^*e_i:=\int_Ya(y)(e_i+\nabla\chi_i(y))\,dy\qquad(1\le i\le d).$$
Equivalently, $A^*p=\int_Ya(y)(p+\nabla\chi_p(y))dy$. All integrals are finite because $a\in L^\infty(Y)$ and $\nabla\chi_i\in L^2(Y)$. This definition does not itself assert symmetry or ellipticity.

## Remarks

[[thm-periodic-effective-tensor-symmetric-elliptic]] proves symmetry and uniform ellipticity of the tensor.
