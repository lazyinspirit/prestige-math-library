---
id: thm-periodic-effective-tensor-symmetric-elliptic
kind: theorem
title: Symmetry and uniform ellipticity of the effective tensor
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-periodic-cell-correctors-and-effective-tensor
  - lem-periodic-cell-corrector-wellposedness
  - lem-periodic-cell-poincare
  - def-periodic-scalar-diffusion-data
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.2.3, PDF pp. 7–9: symmetric energy formula and ellipticity of the effective matrix."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §1.2, printed pp. 9–13: symmetry and uniform ellipticity of the homogenized matrix."
verification:
  precheck: n/a
---
## Statement

Under the scalar periodic ellipticity hypotheses of [[def-periodic-scalar-diffusion-data]], the matrix $A^*$ of [[def-periodic-cell-correctors-and-effective-tensor]] is symmetric and satisfies
$$\lambda |p|^2\le p\cdot A^*p\le\Lambda|p|^2\qquad(p\in\mathbb R^d).$$

## Facts & Assumptions

**Given:** The measurable periodic scalar coefficient satisfies $\lambda\le a\le\Lambda$, the mean-zero cell corrector exists uniquely, and periodic gradients have zero cell mean.

[F1] [[def-periodic-cell-correctors-and-effective-tensor]]: $A^*p=\int_Ya(p+\nabla\chi_p)$ and $\chi_p$ is the mean-zero corrector.

[F2] [[lem-periodic-cell-corrector-wellposedness]]: the corrector is linear in $p$ and satisfies the cell variational equation.

[F3] [[lem-periodic-cell-poincare]]: $\int_Y\nabla v=0$ for periodic $H^1$ functions; in particular $\int_Y\nabla\chi_p=0$.

[F4] [[def-periodic-scalar-diffusion-data]]: $\lambda\le a\le\Lambda$ almost everywhere and $|Y|=1$.

## Proof




1.1 Test the corrector equation for $\chi_p$ with $\chi_q$. It gives $\int_Ya(p+\nabla\chi_p)\cdot\nabla\chi_q=0$. Interchanging $p,q$ gives $\int_Ya(q+\nabla\chi_q)\cdot\nabla\chi_p=0$. Thus $p\cdot A^*q=\int_Ya(p+\nabla\chi_p)\cdot(q+\nabla\chi_q)=q\cdot A^*p,$ where the first equality follows from [F1] after adding the zero term with $\nabla\chi_q$, and the last integral is symmetric in $p,q$. Hence $A^*$ is symmetric. [F1, F2, algebra]

2.1 Taking $q=p$ in the same identity yields $p\cdot A^*p=\int_Ya|p+\nabla\chi_p|^2$. Since the mean of $p+\nabla\chi_p$ is $p$ by [F3], Cauchy--Schwarz on the unit-measure cell gives $\int_Y|p+\nabla\chi_p|^2\ge|p|^2$. The lower coefficient bound in [F4] proves $p\cdot A^*p\ge\lambda|p|^2$. [F3, F4, step 1.1, algebra]

3.1 The cell equation makes $\chi_p$ the minimizer of $J_p(v)=\int_Ya|p+\nabla v|^2$ over $v\in V_\#$. Indeed, for $v=\chi_p+w$, expansion gives $J_p(v)=J_p(\chi_p)+2\int_Ya(p+\nabla\chi_p)\cdot\nabla w+\int_Ya|\nabla w|^2$, whose middle term is zero and last term is nonnegative. Taking the competitor $v=0$ gives $p\cdot A^*p=J_p(\chi_p)\le J_p(0)=\int_Ya|p|^2\le\Lambda|p|^2$. [F1, F2, F4, step 2.1, algebra] ∎
