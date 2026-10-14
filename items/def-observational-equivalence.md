---
id: def-observational-equivalence
kind: definition
title: "Observational equivalence"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-parametric-statistical-model]
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
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §§1.3.6 and 1.4.1, PDF pp. 20–23"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families, §6, PDF pp. 6–7"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
---

## Definition

In a parametric model $\mathsf P:\Theta\to\mathcal P(\mathcal X,\mathcal A)$,
two parameter values $\theta,\eta\in\Theta$ are **observationally
equivalent**, written $\theta\sim\eta$, if and only if
$$
P_\theta=P_\eta,
$$
that is, $P_\theta(A)=P_\eta(A)$ for every $A\in\mathcal A$
([[def-parametric-statistical-model]]). Equivalent parameter values therefore
give exactly the same sampling law. No distinctness of $\theta$ and $\eta$ is
required.
