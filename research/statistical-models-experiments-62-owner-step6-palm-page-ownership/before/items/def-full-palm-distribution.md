---
id: def-full-palm-distribution
kind: definition
title: "The full Palm distribution defined by the refined Campbell identity"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-stationary-point-process-and-intensity
  - def-spatial-recentering-action
  - lem-joint-measurability-of-spatial-recentering
  - def-axiom-of-choice
  - def-countable-choice
justified_by:
  - thm-refined-campbell-formula-and-palm-law-existence
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 9, §9.1, Theorem 9.1 and Definition 9.3, PDF pp.94–97 (printed pp.82–85): full Palm law via the refined Campbell identity."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 3, §3.2, PDF pp.44–47: Palm distribution and Campbell measure; heuristic conditioning is not imported."
verification:
  precheck: n/a
---

## Definition

Assume AC and Countable Choice as carried by the point-process supplier. Let $\eta$ be a stationary process in the sense of [[def-stationary-point-process-and-intensity]], with finite positive intensity $\rho$. Its **full Palm distribution** $P^0$ is the unique probability measure on the configuration space such that

$$\mathbb E\int h(x,\theta_x\eta)\,\eta(dx)=\rho\int_{\mathbb R^d}\int h(x,\mu)\,P^0(d\mu)\,dx$$

for every nonnegative function $h$ measurable for the product of the Borel and configuration evaluation sigma-algebras. This definition uses the full point-centered configuration, not conditioning on the probability-zero event that an atom occurs at the origin. Existence, uniqueness, and retention of the distinguished origin occurrence are proved in [[thm-refined-campbell-formula-and-palm-law-existence]].
