---
id: def-second-factorial-and-reduced-moment-measures
kind: definition
title: "Second factorial and reduced second factorial moment measures"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-stationary-point-process-and-intensity
  - def-random-measure-and-locally-finite-point-process
  - def-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - def-axiom-of-choice
  - def-countable-choice
justified_by:
  - thm-second-factorial-and-reduced-measures-are-locally-finite
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 4, §4.2, PDF pp.40–42 (printed pp.28–30), and Chapter 8, §§8.2–8.3, PDF pp.83–85 (printed pp.71–73): factorial moment measures, local square integrability, and reduced second factorial measure."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, §§2.3–2.4, PDF pp.33–37: factorial moment and reduced second moment measures."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Assume $\eta$ is a stationary point process as in [[def-stationary-point-process-and-intensity]]. It is **locally square integrable** if $\mathbb E[\eta(K)^2]<\infty$ for every compact $K\subseteq\mathbb R^d$. For a realized counting measure $\mu=\sum_{i\in J}\delta_{X_i}$, with occurrences indexed separately even when locations coincide, as allowed by [[def-random-measure-and-locally-finite-point-process]], define its second factorial measure on Borel $C\subseteq\mathbb R^d\times\mathbb R^d$ by

$$\mu^{(2)}(C):=\sum_{i,j\in J,\ i\ne j}\mathbf1_C(X_i,X_j).$$

The **second factorial moment measure** is $\alpha^{(2)}(C):=\mathbb E[\eta^{(2)}(C)]$. With $Q=[0,1)^d$, the **reduced second factorial moment measure** is

$$\alpha^{(2)}_{\rm red}(D):=\mathbb E\sum_{i,j\in J,\ i\ne j}\mathbf1_Q(X_i)\mathbf1_D(X_j-X_i),\qquad D\subseteq\mathbb R^d\text{ Borel}.$$

The local theorem [[thm-second-factorial-and-reduced-measures-are-locally-finite]] proves measurability and local finiteness under local square integrability. Occurrence indices, rather than distinct locations, are essential when multiplicities are present.

**Axiom convention.** AC and Countable Choice are carried by the transitive point-process supplier dependencies; the occurrence-indexed formulas themselves make no selections.
