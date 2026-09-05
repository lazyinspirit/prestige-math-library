---
id: def-sublinear-functional
kind: definition
title: "A sublinear functional on a real vector space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-space]
justified_by: []
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis, Theorem 26.1"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Section 4.2"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Definition

Let $X$ be a real vector space ([[def-vector-space]]). A function
$p:X \to \mathbb{R}$ is a **sublinear functional** if

$$p(x+y) \le p(x)+p(y) \qquad \text{for all } x,y \in X,$$

and

$$p(tx)=tp(x) \qquad \text{for all } x \in X \text{ and all } t \ge 0.$$

## Remarks

- Taking $t=0$ shows $p(0)=0$.
- No condition is imposed for negative scalars beyond what follows from the two
  displayed axioms.
- A norm on a real vector space is sublinear, but a sublinear functional need
  not be symmetric: in general one can have $p(-x) \ne p(x)$.
