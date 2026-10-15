---
id: def-interventionist-mediation-effect
kind: definition
title: "Separable interventionist mediation effects"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-controlled-and-natural-mediation-effects
  - def-simple-markovian-mediation-scm
  - def-recursive-structural-causal-model-and-dag
  - def-integrable-real-and-complex-functions-and-their-integrals
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Chapter 23 §§23.2–23.4 and Technical Point 23.2 (2020; author revision 19 August 2026)"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Judea Pearl, Causal inference in statistics: An overview, §5.1.3 (Statistics Surveys 3, 2009)"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
---

## Definition

Suppose an expanded structural causal model decomposes a treatment into two
substantively meaningful components $N$ and $O$ that can in principle be set
separately. Write $M(n,o)$ and $Y(n,o)$ for the mediator and outcome under
$do(N=n,O=o)$, and $Y(n,o,m)$ for the outcome under the additional
intervention $do(M=m)$, using the intervention semantics of
[[def-recursive-structural-causal-model-and-dag]]. Here $Y(n,o)$ leaves the
mediator equation active. Mixed component values must correspond to meaningful
intervention protocols; an arbitrary mathematical relabeling of $A$ is not a
component decomposition. For reference component levels $n,n',o,o'$, the
**separable component contrasts** are
$$\operatorname{SE}_N(n,n';o)=E[Y(n,o)-Y(n',o)],$$
$$\operatorname{SE}_O(o,o';n)=E[Y(n,o)-Y(n,o')],$$
whenever the contrasts are integrable [[def-integrable-real-and-complex-functions-and-their-integrals]]. They refer to feasible component
interventions, not to the nested individual mediator value $M(a')$ in a natural
effect.

For the simple single-mediator structural system, the relevant
**dismissible-component restrictions** are the structural exclusions
$$M(n,o)=M(n),\qquad Y(n,o,m)=Y(n',o,m)\quad\text{for all }n,n',o,m.$$
The first says that the outcome-only component $O$ has no effect on the
mediator. The second says that the mediator-only component $N$ has no direct
effect on the outcome when the mediator is fixed. In other causal systems the
formal dismissible-component conditions are model-specific. Meaningful
component interventions, consistency, positivity, and appropriate
exchangeability conditions are required before these contrasts can be
identified. No identification theorem for separable effects is asserted here;
they define a different target from the natural direct and indirect effects in
[[def-controlled-and-natural-mediation-effects]].

