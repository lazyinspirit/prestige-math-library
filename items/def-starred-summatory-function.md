---
id: def-starred-summatory-function
kind: definition
title: "The starred summatory function"
status: published
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
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

For a sequence $(a_n)_{n\geq1}$ and $x>0$, put
$$ A^*(x)=\sum_{n<x}a_n+\begin{cases}a_x/2,&x\in\mathbb Z_{>0},\\0,&x\notin\mathbb Z_{>0}.\end{cases} $$
The symbol $a_x$ is consequently used only in the integral case.
