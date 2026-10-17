---
id: def-weighted-total-variation-space-for-population-measures
kind: definition
title: Weighted total-variation space for population measures
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§1 and 3
      url: https://arxiv.org/pdf/1801.08312
---

## Definition

Fix $a>0$, put $E=[a,\infty)$, and define the weight $w(x)=1+x^2$. Let $\mathcal M_w(E)$ be the real vector space of finite signed Borel measures $\sigma$ on $E$ for which

$$\|\sigma\|_w:=\int_E w(x)\,|\sigma|(dx)<\infty,$$

where $|\sigma|$ is the total-variation measure. The norm is $\|\cdot\|_w$. A positive population measure is a nonnegative member $\mu\in\mathcal M_w(E)$. Its number, mass, and second moment are $M_0(\mu)=\int_E1\,d\mu$, $M_1(\mu)=\int_Ex\,d\mu$, and $M_2(\mu)=\int_Ex^2\,d\mu$. The space and its completeness are established in [[lem-weighted-total-variation-space-is-complete]].
