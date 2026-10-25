---
id: def-pair-correlation-and-ripleys-k-function
kind: definition
title: "Pair-correlation density and Ripley K-function"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-stationary-point-process-and-intensity
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-stationary-point-process-intensity-measure-is-rho-lebesgue
  - def-full-palm-distribution
  - thm-refined-campbell-formula-and-palm-law-existence
  - def-second-factorial-and-reduced-moment-measures
  - thm-reduced-second-factorial-moment-palm-identity
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - def-axiom-of-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 8, Definition 8.9 and Examples 8.10; Chapter 9, refined Campbell formula, PDF pp.85 and 94–97."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, §§2.4–2.5, PDF pp.35–39: reduced second moment measure, pair correlation, and Ripley's K-function."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Assume AC and Countable Choice as carried by the point-process and Palm suppliers. Let $\eta$ be stationary and locally square integrable as in [[def-stationary-point-process-and-intensity]] and [[def-second-factorial-and-reduced-moment-measures]], with finite positive intensity $\rho$ and reduced second factorial moment measure $\alpha^{(2)}_{\rm red}$.

A **pair-correlation density** exists exactly when $\alpha^{(2)}_{\rm red}$ is absolutely continuous with respect to Borel Lebesgue measure [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]. Local finiteness makes $\alpha^{(2)}_{\rm red}$ sigma-finite, so [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]] gives a density; positivity of the measure makes that density nonnegative almost everywhere, and replacing its values on the null exceptional set by zero gives a nonnegative Borel version. The density is unique up to Lebesgue-null sets. Normalize it by $\rho^2$ and call the resulting nonnegative Borel function $g$:

$$\alpha^{(2)}_{\rm red}(D)=\rho^2\int_D g(u)\,du$$

for every Borel $D\subseteq\mathbb R^d$. The definition does not assume pair densities for all stationary processes.

For $r\ge0$, let $B[0,r]=\{u\in\mathbb R^d:\|u\|_2\le r\}$ be the **closed** Euclidean ball. **Ripley's K-function** is

$$K(r):=\rho^{-1}\int(\mu-\delta_0)(B[0,r])\,P^0(d\mu),$$

where $P^0$ is the full Palm distribution from [[def-full-palm-distribution]] and $\delta_0$ removes one distinguished occurrence at the origin. The Palm law has an origin occurrence almost surely by [[thm-refined-campbell-formula-and-palm-law-existence]], and the reduced-measure identity [[thm-reduced-second-factorial-moment-palm-identity]] gives the equivalent expression $K(r)=\rho^{-2}\alpha^{(2)}_{\rm red}(B[0,r])$. For a simple process as defined in [[def-random-measure-and-locally-finite-point-process]], deleting $\delta_0$ is the same as excluding the origin location; for a multiplicity-bearing process other co-located occurrences remain.

**Axiom convention.** AC and Countable Choice are inherited through the point-process and Palm dependency closure; no further choice is used by these definitions.
