---
id: def-density-target-and-kernel-density-estimator
kind: definition
title: "Density targets and the kernel density estimator"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistical-experiment
  - def-parametric-statistical-model
  - def-estimand-on-a-statistical-model
  - def-statistic-and-estimator
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - def-measure-with-density
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-countable-choice
justified_by:
  - lem-kde-evaluation-is-a-measurable-statistic
  - lem-nonnegative-kde-integrates-to-one
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
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OpenCourseWare 14.385, Fall 2007, PDF pp. 1–3"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Adrian Bowman and Ludger Evers, Nonparametric Smoothing, APTS 2013–14 course notes, §1.2, PDF pp. 6–7"
      url: "https://warwick.ac.uk/fac/sci/statistics/apts/students/resources-1314/ns_notes.pdf"
---

## Definition

Fix an integer $d\ge1$. A **density version** on $\mathbb R^d$ is a Borel
function $f:\mathbb R^d\to[0,\infty)$ with
$$\int_{\mathbb R^d}f\,d\lambda_d=1.$$
Write $P_f=f\,d\lambda_d$ for its probability law
([[def-measure-with-density]]). Let $\Theta$ be any set of such density
versions. For sample size $n\ge1$, the iid experiment has data space
$$\left((\mathbb R^d)^n,\bigotimes_{i=1}^n\mathcal B(\mathbb R^d)\right)$$
and sampling law $P_f^{\otimes n}$ at parameter $f\in\Theta$
([[def-statistical-experiment]], [[def-parametric-statistical-model]],
[[def-identically-distributed-and-iid-random-variables]],
[[def-independent-random-elements]],
[[def-product-sigma-algebra-and-finite-product-sigma-algebras]],
[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).
The pointwise target at $x\in\mathbb R^d$ is the estimand
$$\psi_x(f)=f(x):\Theta\to\mathbb R$$
([[def-estimand-on-a-statistical-model]]).

A **normalized kernel** is a Borel function $K:\mathbb R^d\to\mathbb R$ with
$K\in L^1(\lambda_d)$ and $\int K\,d\lambda_d=1$. It may be signed. For
bandwidth $h>0$ and observations $X_1,\ldots,X_n$, the kernel density estimate
is the indexed family
$$\widehat f_h(x)=\frac1{nh^d}\sum_{i=1}^n K\!\left(\frac{x-X_i}{h}\right),\qquad x\in\mathbb R^d.$$
For each fixed $x$, this is intended as a real-valued estimator of $\psi_x$;
the next local lemma supplies its measurability
([[def-statistic-and-estimator]]).

Assuming $\mathrm{AC}_\omega$, if $K$ is pointwise nonnegative the estimate
is a probability density for every sample, as proved in
[[lem-nonnegative-kde-integrates-to-one]]. For a signed kernel the estimate
need not be nonnegative. Point evaluation depends on the selected density
version: this definition does not assert that $f\mapsto f(x)$ is
identifiable from the law $P_f$.
