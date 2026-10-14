---
id: def-pointwise-regression-risk
kind: definition
title: Pointwise squared-error risk for regression
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-loss-function-and-risk
  - def-regression-target-version
  - def-statistic-and-estimator
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.1"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §§4.1–4.2"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Definition

Assume AC as used to select the regression version. Fix a statistical experiment indexed by $\theta$, a point $x$, a real
regression target $m_\theta(x)$, and a real-valued estimator
$T_x$ of that target, meaning a measurable statistic with target space
$\mathbb R$ as in [[def-statistic-and-estimator]]. At this point, use the
squared-error loss
$$L_x(\theta,a)=(a-m_\theta(x))^2,\qquad a\in\mathbb R.$$
Its **pointwise squared-error risk** is the possibly infinite quantity
$$R_x(\theta,T_x)=\int (T_x(z)-m_\theta(x))^2\,P_\theta(dz)\in[0,\infty].$$
This is the deterministic-rule specialization of the risk in
[[def-loss-function-and-risk]]: the action space is $\mathbb R$ with its
Borel sigma-algebra, the action is $T_x(z)$, and the loss section is
measurable because it is continuous in $a$. The integral is nonnegative, so
it is defined without a finite-moment assumption.

## Source notes

Martin, §5.1, PDF pp. 100–102; Hoff, §§4.1–4.2, PDF pp. 7–8.
