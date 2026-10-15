---
id: def-finite-population-average-treatment-effect-and-weak-null
kind: definition
title: "Finite-population average treatment effect and weak null"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-finite-randomized-treatment-assignment-model
  - def-fisher-sharp-null-and-predeclared-test-orderings
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Siva Balakrishnan, CMU 36-705 Intermediate Statistics, Lecture 28, §§28.2–28.3"
      url: "https://www.stat.cmu.edu/~siva/teaching/705/lec28.pdf"
---

## Definition

Consider the no-interference binary-treatment submodel of
[[def-finite-randomized-treatment-assignment-model]] in which the allowed
assignment set is $\{0,1\}^{\mathcal I}$ and unit $i$'s response under
assignment vector $z$ is $Y_i(z)=Y_i(z_i)$ for fixed real potential responses
$Y_i(0)$ and $Y_i(1)$. For the fixed units, define the
**finite-population average treatment effect** by
$$\tau_F:=\frac1N\sum_{i\in\mathcal I}\bigl(Y_i(1)-Y_i(0)\bigr).$$
The **weak zero-average-effect null** is the hypothesis $\tau_F=0$; it
constrains the average of the unit-level effects, not each effect separately.
The Fisher sharp null in this submodel, defined in
[[def-fisher-sharp-null-and-predeclared-test-orderings]], requires
$Y_i(1)=Y_i(0)$ for every unit. No probability distribution on the fixed
potential responses is part of either definition.
