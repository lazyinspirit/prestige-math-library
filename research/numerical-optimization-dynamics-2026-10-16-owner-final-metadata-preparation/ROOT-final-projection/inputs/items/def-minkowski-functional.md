---
id: def-minkowski-functional
kind: definition
title: Minkowski functional of an absorbing set
status: published
origin: pipeline
deps: [def-absorbing-balanced-and-absolutely-convex-set]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, §5.1
      url: https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html
---

## Definition

For an absorbing subset $C$ of a normed space $X$, its **Minkowski functional**
or **gauge** is

$$p_C(x):=\inf\{t>0:x\in tC\}\qquad(x\in X).$$

The defining set is nonempty by absorption, so $p_C(x)$ is finite and
nonnegative.  It is not asserted to be a norm or a seminorm: those conclusions
need additional hypotheses on $C$.
