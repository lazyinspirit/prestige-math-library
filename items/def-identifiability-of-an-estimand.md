---
id: def-identifiability-of-an-estimand
kind: definition
title: "Identifiability of an estimand"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps: [def-parametric-statistical-model, def-observational-equivalence,
       def-estimand-on-a-statistical-model]
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
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §§1.3.5–1.3.6, PDF pp. 19–21"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families, §6, PDF pp. 6–7"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
---

## Definition

An estimand $\psi:\Theta\to\mathcal T_0$ is **identifiable** in a parametric
model $\mathsf P$ when
$$
P_\theta=P_\eta\quad\Longrightarrow\quad\psi(\theta)=\psi(\eta)\qquad(\theta,\eta\in\Theta),
$$
or equivalently when $\psi$ is constant on each set of parameter values with
the same sampling law ([[def-parametric-statistical-model]],
[[def-observational-equivalence]], [[def-estimand-on-a-statistical-model]]).
The model is **identifiable** when its identity target
$\operatorname{id}_\Theta:\Theta\to\Theta$ is identifiable, equivalently
when $\mathsf P$ is injective.
