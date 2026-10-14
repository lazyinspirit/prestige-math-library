---
id: def-statistical-functional-and-influence-function
kind: definition
title: Statistical functionals and gross-error influence functions
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 9
deps:
  - def-asymptotically-linear-estimator-and-influence-function
  - def-gross-error-path
  - def-pathwise-differentiable-functional
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §1.3, PDF pp. 13–18"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
    - title: "Elvezio Ronchetti, Introduction to Robust Statistics, slides 15–21"
      url: "https://orfe.princeton.edu/sites/g/files/toruqf1286/files/documents/ronchetti-lecture1.pdf"
    - title: "A. W. van der Vaart, Semiparametric Statistics, Lecture 1, Definition 1.14, printed pp. 13–14"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
    - title: "Edward H. Kennedy, Semiparametric theory, §§3–4, PDF pp. 4–6"
      url: "https://arxiv.org/pdf/1709.06418"
---

## Definition

Let $(\mathcal X,\mathcal A)$ be a measurable space, let $\mathcal P$ be a collection of probability measures on it, and let $T:\mathcal P\to\mathbb R^k$ be a single-valued map with finite $k\ge1$. Such a map is a **statistical functional**. For $F\in\mathcal P$ and $x\in\mathcal X$, suppose the point-contamination path $F_{\epsilon,x}=(1-\epsilon)F+\epsilon\delta_x$ belongs to $\mathcal P$ for all sufficiently small $\epsilon\ge0$ ([[def-gross-error-path]]). The **gross-error influence function** at $(x;T,F)$ is

$$\operatorname{IF}(x;T,F):=\lim_{\epsilon\downarrow0}\frac{T(F_{\epsilon,x})-T(F)}{\epsilon}\in\mathbb R^k,$$

when this finite right limit exists. Its domain may be a proper subset of $\mathcal X$.

## Remarks

This is a pointwise derivative along one point-contamination direction. Its definition supplies no remainder bound uniform in $x$ or in a general contaminating law $H$.

There are two other notions also called influence functions in semiparametric work. [[def-pathwise-differentiable-functional]] defines pathwise differentiability through allowed differentiable-in-quadratic-mean paths and a continuous linear derivative on the score tangent space; this definition neither assumes nor asserts that the gross-error path is one of those paths. [[def-asymptotically-linear-estimator-and-influence-function]] defines an estimator influence function through an empirical-average expansion with an $o_P(n^{-1/2})$ remainder. Neither notion is identified with the pointwise gross-error derivative here. The pathwise supplier's Riesz-representation and choice-dependent conclusions are cited only as terminology context; no such conclusion or axiom is used in this definition.

