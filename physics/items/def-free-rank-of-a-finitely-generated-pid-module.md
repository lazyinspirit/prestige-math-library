---
id: def-free-rank-of-a-finitely-generated-pid-module
kind: definition
title: "The free rank of a finitely generated module over a PID"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid, def-invariant-basis-number-and-rank-of-a-free-module]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modules over a PID, Sections 4-5"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, Sections 3-5"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Definition

Let $M$ be a finitely generated module over a principal ideal domain $R$. Its
**free rank**, denoted $\operatorname{rank}_R M$, is the unique integer $r\ge0$
for which its invariant-factor decomposition has free summand $R^r$.

Uniqueness follows from
[[thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid]] and
agrees with the rank convention for finite free modules in
[[def-invariant-basis-number-and-rank-of-a-free-module]]. In particular a
torsion module has free rank $0$.
