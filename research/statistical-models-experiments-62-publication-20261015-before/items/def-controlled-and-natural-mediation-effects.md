---
id: def-controlled-and-natural-mediation-effects
kind: definition
title: "Controlled and natural mediation effects"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-potential-outcomes-and-consistency
  - def-causal-average-treatment-effects
  - def-recursive-structural-causal-model-and-dag
  - def-standard-borel-space
  - def-random-element-and-real-random-variable
  - def-integrable-real-and-complex-functions-and-their-integrals
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Chapter 23 (2020; author revision 19 August 2026)"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Judea Pearl, Causal inference in statistics: An overview, §5.1 (Statistics Surveys 3, 2009)"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
---

## Definition

Fix a target population, two treatment versions $a,a'$, a mediator random
element $M$ in a standard-Borel space [[def-standard-borel-space]], and a real random variable $Y$ [[def-random-element-and-real-random-variable]]. Let $M(a)$ be
the mediator response under $do(A=a)$ and let $Y(a,m)$ be the outcome response
under the joint intervention $do(A=a,M=m)$, with the intervention semantics of
[[def-recursive-structural-causal-model-and-dag]]. These are full-data random
variables; consistency alone does not identify their joint law from observed
data.

When the displayed differences are integrable [[def-integrable-real-and-complex-functions-and-their-integrals]], the **controlled direct
effect** at mediator setting $m$ is
$$\operatorname{CDE}_m(a,a')=E[Y(a,m)-Y(a',m)].$$
It requires that setting the mediator to $m$ be a meaningful intervention.
The **natural direct effect** and **natural indirect effect**, with $a'$ the
reference treatment level, are
$$\operatorname{NDE}(a,a')=E[Y(a,M(a'))-Y(a',M(a'))],$$
$$\operatorname{NIE}(a,a')=E[Y(a,M(a))-Y(a,M(a'))].$$
The first argument is the active outcome treatment level and the second is the
reference level that supplies the mediator response. When $a\ne a'$, these
targets involve nested counterfactuals from different intervention regimes.
They are defined on a full-data law whether or not they are identified by the
observed law. The total mean contrast is
$$\tau(a,a')=E[Y^a-Y^{a'}],$$
using the treatment-only potential outcomes of
[[def-potential-outcomes-and-consistency]]. For $a=1,a'=0$, this agrees with
the ATE convention in [[def-causal-average-treatment-effects]].

