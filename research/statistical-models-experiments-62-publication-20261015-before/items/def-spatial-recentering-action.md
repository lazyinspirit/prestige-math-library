---
id: def-spatial-recentering-action
kind: definition
title: "Recentering a point configuration at a spatial location"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-random-measure-and-locally-finite-point-process
  - def-axiom-of-choice
  - def-countable-choice
justified_by:
  - lem-joint-measurability-of-spatial-recentering
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
verification:
  precheck: n/a
---

## Definition

Let $d\ge1$ be an integer and let $\mu$ be a locally finite counting measure on $\mathbb R^d$ as in [[def-random-measure-and-locally-finite-point-process]], with $S=\mathbb R^d$. For $x\in\mathbb R^d$, its **recentering at $x$** is the counting measure $\theta_x\mu$ defined on Borel $B\subseteq\mathbb R^d$ by

$$(\theta_x\mu)(B):=\mu(B+x).$$

Thus an occurrence at $x$ is moved to $0$, and in an occurrence representation $\mu=\sum_i\delta_{X_i}$ one has $\theta_x\mu=\sum_i\delta_{X_i-x}$. The action obeys $\theta_{x+y}=\theta_x\circ\theta_y$ and $\theta_0$ is the identity. Joint measurability in $(x,\mu)$ is proved in [[lem-joint-measurability-of-spatial-recentering]].

**Axiom convention.** The point-process supplier used for this definition has transitive dependencies on AC and Countable Choice; the recentering formula itself makes no selections.
