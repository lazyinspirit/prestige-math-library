---
id: def-countable-dmc-zero-cost-information-capacity
kind: definition
title: Zero-cost information capacity of a countable-input finite-output DMC
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-natural-logarithm, def-qa-35-finite-probability-entropy-and-stochastic-matrices, lem-finite-simplex-entropy-continuity-and-concavity]
justified_by: []
aliases: []
axiom_use: No choice axiom is used; all input laws are supplied countable probability sequences.
verification:
  precheck: n/a
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §22.2"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
---

## Definition

A **countable-input finite-output DMC** has input alphabet $\mathbb N=\{1,2,\ldots\}$, a finite nonempty output alphabet $\mathcal Y$, and row probabilities $W(y\mid x)\ge0$ with $\sum_{y\in\mathcal Y}W(y\mid x)=1$ for each $x$. At blocklength $n$, its channel law is $W^n(y^n\mid x^n)=\prod_{t=1}^nW(y_t\mid x_t)$. An input law is a sequence $(p_x)_{x\ge1}$ with $p_x\ge0$ and $\sum_xp_x=1$. Give every input symbol cost $c(x)=0$ and budget $\Gamma=0$. Its output law is $q(y)=\sum_xp_xW(y\mid x)$, and define
$$H(q)=-\sum_{y\in\mathcal Y}q(y)\ln q(y),\qquad H(Y\mid X)=\sum_{x\ge1}p_x\left[-\sum_{y\in\mathcal Y}W(y\mid x)\ln W(y\mid x)\right],$$
where finite entropy is as in [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]], $0\ln0=0$, and logarithms are natural [[def-natural-logarithm]]. The conditional-entropy series converges because each summand entropy lies between $0$ and $\ln|\mathcal Y|$ by [[lem-finite-simplex-entropy-continuity-and-concavity]]. Define $I(p;W):=H(q)-H(Y\mid X)$ and the zero-cost information capacity $C_I(0):=\sup_p I(p;W)$ over all countable input laws. This definition alone makes no assertion that the supremum is attained or equals an operational coding capacity.
