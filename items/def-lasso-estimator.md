---
id: def-lasso-estimator
kind: definition
title: "Lasso estimator for fixed design"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-euclidean-spheres-and-closed-balls
  - def-p-norms-on-rn
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
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Definition 2.12"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Peter J. Bickel, Ya'acov Ritov and Alexandre B. Tsybakov, Simultaneous Analysis of Lasso and Dantzig Selector, Section 7"
      url: "https://www.stat.berkeley.edu/~bickel/BickelRitovTsybakov2009aos.pdf"
---

## Definition

For $n,d\ge1$, a deterministic design $X\in\mathbb R^{n\times d}$, response $y\in\mathbb R^n$, and penalty $\tau>0$, define the Lasso objective
$$Q_y(\theta)=\frac1n\|y-X\theta\|_2^2+2\tau\|\theta\|_1.$$
Its minimizer set is $\mathcal M(y)=\operatorname{argmin}_{\theta\in\mathbb R^d}Q_y(\theta)$. The penalty is strictly positive; no full-rank condition on $X$ is imposed. The nonemptiness, compactness, and convexity of this set are proved separately; this page defines the objective and minimizer set but does not select one minimizer.
