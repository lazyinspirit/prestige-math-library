---
id: def-fundamental-pell-solution
kind: definition
title: "The fundamental Pell solution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-lagrange-existence-for-pell-equation]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Pell's Equation, I"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn1.pdf"
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
pipeline_run: null
---

## Definition

By [[thm-lagrange-existence-for-pell-equation]], the set of positive nontrivial
solutions of Pell's equation is nonempty. The **fundamental Pell solution** is
the positive solution
$$ (x_1,y_1)\in\mathbb Z_{>0}^2,\qquad x_1^2-Dy_1^2=1, $$
whose first coordinate $x_1$ is least among all positive solutions.

Write
$$\varepsilon_D:=x_1+y_1\sqrt D\in\mathbb Z[\sqrt D].$$
Since $x_1>0$ and $y_1>0$, one has $\varepsilon_D>1$.
