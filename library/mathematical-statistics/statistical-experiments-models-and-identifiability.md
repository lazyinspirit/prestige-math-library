---
page: statistical-experiments-models-and-identifiability
title: "Statistical Experiments, Models and Identifiability"
status: draft
items:
  - def-statistical-experiment
  - def-parametric-statistical-model
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - def-observational-equivalence
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
  - thm-identifiability-iff-constant-on-equivalence-classes
examples: []
---

An experiment specifies a measurable observation space and a probability law
for each parameter value. The parameter labels need not carry a measurable
structure, and a model need not be injective: distinct labels may produce the
same sampling law. A separate kernel definition records the additional
eventwise measurability required when the parameter space is measurable.

Observational equivalence groups parameter values that induce the same law.
An estimand is identifiable exactly when it is constant on each such group;
equivalently, it is a unique function of the sampling law. This is a
set-theoretic statement and assumes no topology or parameter measurability.
