---
id: def-half-weighted-chebyshev-psi
kind: definition
title: "The half-weighted Chebyshev function"
status: draft
origin: pipeline
deps: [def-von-mangoldt-function, def-chebyshev-psi-function]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.1"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Definition

For $x>0$, define
$$\psi_0(x)=\sum_{n<x}\Lambda(n)+\begin{cases}\Lambda(x)/2,&x\in\mathbb Z_{>0},\\0,&x\notin\mathbb Z_{>0}.\end{cases}$$
This differs at prime powers from the right-continuous $\psi(x)=\sum_{n\le x}\Lambda(n)$ of [[def-chebyshev-psi-function]].
