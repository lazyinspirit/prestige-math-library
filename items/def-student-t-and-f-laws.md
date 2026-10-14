---
id: def-student-t-and-f-laws
kind: definition
title: "Student t and Fisher F laws"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - cor-continuous-functions-are-borel-measurable
  - def-axiom-of-choice
  - def-chi-square-law
  - def-law-or-distribution-of-a-random-element
  - def-standard-normal-and-normal-laws
  - lem-positive-df-chi-square-has-density-and-regular-cdf
  - thm-independent-random-elements-have-product-joint-law
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2003, Lecture 16"
      url: "https://mitocw.ups.edu.ec/courses/mathematics/18-443-statistics-for-applications-fall-2003/lecture-notes/18443.pdf"
    - title: "Yen-Chi Chen, UW STAT 512 Lecture 8: Linear Models and Multivariate Normal Distributions"
      url: "https://faculty.washington.edu/yenchic/20A_stat512/Lec8_Linear.pdf"
---

## Definition

Assume the Axiom of Choice. For a positive integer $k$, take the product probability law of an independent standard normal $G$ and an independent $Q_k\sim\chi_k^2$. The **Student t law with $k$ degrees of freedom**, denoted $t_k$, is the law of
$$T_k=\begin{cases} \displaystyle\frac{G}{\sqrt{Q_k/k}},&Q_k>0,\\ 0,&Q_k\le0. \end{cases}$$
For positive integers $r,s$, take independent $Q_r\sim\chi_r^2$ and $Q_s\sim\chi_s^2$. The **Fisher F law with degrees $(r,s)$**, denoted $F_{r,s}$, is the law of
$$F_{r,s}=\begin{cases} \displaystyle\frac{Q_r/r}{Q_s/s},&Q_s>0,\\ 0,&Q_s\le0. \end{cases}$$
The displayed piecewise maps are defined on all of $\mathbb R^2$ and are Borel measurable: each quotient is continuous on its Borel positive-denominator region, and the value on the complementary Borel nonpositive-denominator region is constant. The positive-degree chi-square lemma proves that the denominators are positive almost surely, so these versions agree almost surely with the usual quotients. Zero degrees are excluded from both definitions.
