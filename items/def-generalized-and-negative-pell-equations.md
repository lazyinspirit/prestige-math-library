---
id: def-generalized-and-negative-pell-equations
kind: definition
title: "Generalized and negative Pell equations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-pell-equation]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "Keith Conrad, Pell's Equation, I"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn1.pdf"
    - title: "Keith Conrad, Pell's Equation, II"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf"
pipeline_run: null
---

## Definition

Keep the same positive nonsquare integer $D$ as in [[def-pell-equation]], and
let $N\in\mathbb Z$ with $N\ne0$. The equation
$$x^2-Dy^2=N,\qquad x,y\in\mathbb Z,$$
is the **generalized Pell equation** for $(D,N)$.

The special case
$$x^2-Dy^2=-1$$
is the **negative Pell equation** for $D$.

The restriction $N\ne0$ is part of the present convention: the page studies the
nonzero norm classes whose solutions move by multiplication with norm-one Pell
solutions.
