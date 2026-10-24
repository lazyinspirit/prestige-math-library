---
id: def-recursive-structural-causal-model-and-dag
kind: definition
title: "Recursive structural causal models on finite DAGs"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-d-separation-in-a-dag
  - def-measurable-space
  - def-measurable-function-between-measurable-spaces
  - def-independent-random-elements
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §2-2, pp. 672–674"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Technical Points 6.1–6.3, pp. 72–74"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Fix a finite DAG $G=(V,E)$ and a specified topological ordering
$v_1,\ldots,v_n$ (every arrow points from an earlier to a later vertex).
Partition $V=O\sqcup H$ into **observed** vertices $O$ and **latent** vertices
$H$. For each $v\in V$, specify a measurable state space $(S_v,\mathcal
S_v)$, a measurable exogenous space $(E_v,\mathcal E_v)$, a jointly
measurable structural function
$$f_v:\prod_{u\in\operatorname{pa}(v)}S_u\times E_v\to S_v,$$
and an exogenous random element $U_v$ with values in $E_v$. Here
$\operatorname{pa}(v)=\{u:(u,v)\in E\}$; the empty product is a singleton.
The model is **Markovian** when the finite family $(U_v)_{v\in V}$ is mutually
independent. No parametric form or distributional truth is asserted. Correlated
disturbances may be represented by adding their common causes as latent
vertices, after which the exogenous family in the expanded model is required
to be mutually independent.

Recursion in the topological order defines the endogenous random elements
uniquely by $X_v=f_v(X_{\operatorname{pa}(v)},U_v)$. The full-joint law is the
law of $(X_v)_{v\in V}$; the observed law is its marginal law on $O$. An
observed-only DAG factorization is asserted only when $H=\varnothing$ or when
an additional stated latent-variable condition proves it.

For $I\subseteq V$ and a value $a=(a_v)_{v\in I}\in\prod_{v\in I}S_v$,
**$do(X_I=a)$** means replace only the equations indexed by $I$ by the
constants $X_v=a_v$, leaving every other structural function and every
exogenous law unchanged. Recursion then defines counterfactual values
$X_w^a$ for every vertex $w$; the interventional law is their joint law. The
response map $(a,\omega)\mapsto X_w^a(\omega)$ is jointly measurable, by
induction through the finite topological order and joint measurability of each
$f_v$. This permits evaluation at a random treatment value, such as
$X_w^{M^a}$. When $I=\{A\}$, write $X_w^a$ for the response under
$do(A=a)$. If the factual treatment is $A$, then on $\{A=a\}$ recursion
gives $X_w=X_w^a$ for every vertex $w$.
