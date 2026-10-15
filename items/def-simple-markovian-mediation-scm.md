---
id: def-simple-markovian-mediation-scm
kind: definition
title: "A simple Markovian mediation model"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-controlled-and-natural-mediation-effects
  - def-potential-outcomes-and-consistency
  - def-recursive-structural-causal-model-and-dag
  - def-standard-borel-space
  - def-countable
  - def-measurable-function-between-measurable-spaces
  - def-random-element-and-real-random-variable
  - def-independent-random-elements
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
    - title: "Judea Pearl, Causal inference in statistics: An overview, §3.1 and §5.1 (Statistics Surveys 3, 2009)"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Technical Point 23.1 (2020; author revision 19 August 2026)"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
---

## Definition

Let $L$ be an observed baseline random element in a standard-Borel space [[def-standard-borel-space]],
$A$ a treatment random element [[def-random-element-and-real-random-variable]] taking values in a nonempty countable set [[def-countable]] equipped with the discrete sigma-algebra (the full power set), following the treatment-version convention of [[def-potential-outcomes-and-consistency]]. Let $M$ be an observed mediator random element in a standard-Borel space [[def-standard-borel-space]], and let $Y$ be an observed real random variable [[def-random-element-and-real-random-variable]]. A **simple Markovian mediation SCM** is a
recursive structural causal model in the sense of
[[def-recursive-structural-causal-model-and-dag]] whose endogenous variables
are exactly $(L,A,M,Y)$ and whose equations have the form
$$L=f_L(U_L),\qquad A=f_A(L,U_A),\qquad M=f_M(A,L,U_M),\qquad Y=f_Y(A,M,L,U_Y).$$
The functions are jointly measurable in the sense of [[def-measurable-function-between-measurable-spaces]], and the exogenous random elements
$U_L,U_A,U_M,U_Y$ are mutually independent [[def-independent-random-elements]], as required by the Markovian
condition in that SCM definition. The graph therefore has no latent common
cause outside $L$ and no additional post-treatment variable that causes both
$M$ and $Y$. This model is a special case of an NPSEM-IE (a nonparametric
structural equation model with independent errors); it is a substantive model
restriction, not a consequence of the observed distribution. It is a
single-unit model; if units interfere, the treatment version must include the
relevant joint assignment or exposure, as required by
[[def-potential-outcomes-and-consistency]].

The mediator and outcome responses are the recursive responses under the
interventions from [[def-controlled-and-natural-mediation-effects]]:
$$M(a)=f_M(a,L,U_M),\qquad Y(a,m)=f_Y(a,m,L,U_Y).$$
In particular, recursion gives $Y^a=Y(a,M(a))$. The model's absence of an
additional post-treatment common cause is part of the hypothesis; if such a
variable is present, this definition does not cover that causal system.

