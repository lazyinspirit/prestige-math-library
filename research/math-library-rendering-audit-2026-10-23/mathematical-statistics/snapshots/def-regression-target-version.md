---
id: def-regression-target-version
kind: definition
title: Regression target and chosen version
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable
  - def-axiom-of-choice
  - def-random-element-and-real-random-variable
justified_by: []
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
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Definition

Assume the Axiom of Choice. Let $X,Y$ be real random variables on a probability
space, with $\mathbb E|Y|<\infty$, and choose a regular conditional law
$Q(x,dy)$ of $Y$ given $X=x$. On
$D=\{x:\int |y|\,Q(x,dy)<\infty\}$ define
$m(x)=\int y\,Q(x,dy)$, and put $m(x)=0$ off $D$. By
[[cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable]],
$m$ is Borel measurable and $m(X)$ is a version of
$\mathbb E[Y\mid\sigma(X)]$. A **regression target** is the resulting
$P_X$-almost-sure equivalence class; a **chosen regression-function version**
is the particular Borel function selected by the specified conditional law.

Pointwise smoothness is an additional hypothesis on the chosen version. It is
not implied by existence of conditional expectation, and statements about
$m(x)$ at a specified point use that selected version.

## Source notes

Newey, “Nonparametric Regression,” PDF p. 8; Tibshirani, §1.1, PDF p. 1.
