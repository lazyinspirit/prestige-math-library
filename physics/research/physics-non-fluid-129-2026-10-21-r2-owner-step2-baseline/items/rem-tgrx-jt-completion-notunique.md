---
id: rem-tgrx-jt-completion-notunique
kind: remark
title: A disk spectral density does not determine a unique quantum gravity
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 6
deps:
  - post-tgrx-jt-disk-spectral-model
dependency_roles:
  post-tgrx-jt-disk-spectral-model: formulation-prerequisite
justified_by: []
aliases: []
forward_refs: []
physical_scope: >
  A source-based limitation on interpreting the selected JT genus-zero disk
  density. It records that cited exact models extend beyond the single disk
  term and may average over theories; it makes no claim about every microscopic
  realization or nature.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Phil Saad, Stephen H. Shenker, and Douglas Stanford, JT gravity as a matrix integral, §§1 and 6"
      url: "https://arxiv.org/html/1903.11115"
      locator: "Full-text article; the Introduction identifies the matrix-integral completion as non-unique; §6 discusses the ensemble interpretation and its distinction from a fixed theory."
    - title: "Thomas G. Mertens and Gustavo J. Turiaci, Solvable models of quantum black holes: a review on Jackiw–Teitelboim gravity, §§4.3.1–4.4 and 5.2"
      url: "https://arxiv.org/html/2210.10846"
      locator: "Full-text review; §§4.3.1–4.4 discuss the SSS matrix-integral duality, density corrections, and nonperturbative limitations; §5.2 addresses factorization, discreteness, and ensemble averaging."
---

## Statement

An **ensemble** here is a probability distribution over Hermitian matrices $H$ acting on finite-dimensional complex inner-product spaces and representing energy operators; its averaged partition function is the average of $\\operatorname{tr}(e^{-\\beta H})$ over that distribution. A **nonperturbative completion** is additional exact model data that select an exact theory beyond the terms fixed by a formal genus expansion. In the selected JT disk model, the continuous genus-zero density is only the one-disk input. The matrix-integral completion treated in the cited literature is an ensemble model and is described as non-unique; therefore the disk density alone specifies neither a unique nonperturbative completion nor the exact energy spectrum of one fixed boundary quantum system. No statement is made about every possible microscopic realization.

## Statement references

[[post-tgrx-jt-disk-spectral-model]]

[Phil Saad, Stephen H. Shenker, and Douglas Stanford, *JT gravity as a matrix integral*](https://arxiv.org/html/1903.11115)

[Thomas G. Mertens and Gustavo J. Turiaci, *Solvable models of quantum black holes: a review on Jackiw–Teitelboim gravity*](https://arxiv.org/html/2210.10846)
