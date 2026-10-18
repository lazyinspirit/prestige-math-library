---
id: def-periodic-cell-correctors-and-effective-tensor
kind: definition
title: Periodic correctors and effective tensor
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-periodic-cell-problem, def-periodic-scalar-diffusion-data, lem-periodic-cell-corrector-wellposedness]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.2.3, PDF pp. 7–8: effective matrix defined by averaged corrector flux."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §§1.2–1.3, printed pp. 9–23: correctors and homogenized coefficient."
verification:
  precheck: n/a
---
## Definition

Let $e_1,\ldots,e_d$ be the standard basis of $\mathbb R^d$. By [[lem-periodic-cell-corrector-wellposedness]], let $\chi_j:=\chi_{e_j}$ be the unique mean-zero solution of the periodic cell equation. For $p=(p_1,\ldots,p_d)$ define $\chi_p=\sum_jp_j\chi_j$ and define the constant matrix $A^*$ by its columns:
$$A^*e_j:=\int_Ya(y)(e_j+\nabla\chi_j(y))\,dy.$$
Equivalently, $A^*p=\int_Ya(y)(p+\nabla\chi_p(y))dy$. All integrals are finite because $a\in L^\infty(Y)$ and $\nabla\chi_j\in L^2(Y)$. This definition does not itself assert symmetry or ellipticity.

## Remarks

[[thm-periodic-effective-tensor-symmetric-elliptic]] proves symmetry and uniform ellipticity of the tensor.
