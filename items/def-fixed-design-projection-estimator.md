---
id: def-fixed-design-projection-estimator
kind: definition
title: "Fixed-design least squares as orthogonal projection"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-natural-numbers
  - def-euclidean-spheres-and-closed-balls
  - def-orthogonal-projection
  - thm-orthogonal-projection-is-the-unique-nearest-point
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
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, §§7–8"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sylvain Arlot, Model/estimator selection, Lecture on model selection, §§1–2"
      url: "https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf"
---

## Definition

Let $n,d\in\mathbb N$ with $n,d\ge1$, and let $X\in\mathbb R^{n\times d}$ be a fixed design
matrix, and write $V_X:=\{X\theta:\theta\in\mathbb R^d\}\subseteq\mathbb R^n$
for its column space. For an observed vector $y\in\mathbb R^n$, the **fixed-design
least-squares fitted vector** is

$$\widehat\mu_X(y):=P_{V_X}y,$$

where $P_{V_X}$ is the orthogonal projection onto $V_X$, as defined in
[[def-orthogonal-projection]]. It is uniquely defined even when $X$ is rank
deficient. The nearest-point characterization in
[[thm-orthogonal-projection-is-the-unique-nearest-point]] says that
$\widehat\mu_X(y)$ minimizes $\|y-v\|_2$ over $v\in V_X$. This item defines the
fitted vector; it does not select a coefficient representation $\widehat\theta$.
