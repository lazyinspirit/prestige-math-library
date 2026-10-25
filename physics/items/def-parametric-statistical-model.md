---
id: def-parametric-statistical-model
kind: definition
title: "Parametric statistical models"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-statistical-experiment]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-parametric-statistical-model.json
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

For an experiment on $(\mathcal X,\mathcal A)$, let
$\mathcal P(\mathcal X,\mathcal A)$ denote the set of all probability measures
on that measurable space. Its **parametric statistical model** is the parameter
map
$$
\mathsf P:\Theta\to\mathcal P(\mathcal X,\mathcal A),\qquad \mathsf P(\theta)=P_\theta,
$$
regarded together with its parameter set and sample space
(Statistical experiments). The map need not be injective. Unless a
measurable structure on $\Theta$ is supplied separately, no measurability of
$\mathsf P$ is asserted.

## Definition references

[[def-statistical-experiment]]

