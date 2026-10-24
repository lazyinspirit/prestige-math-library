---
id: def-pell-equation
kind: definition
title: "Pell's equation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
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
pipeline_run: null
---

## Definition

Fix a positive integer $D$ that is not a square. The Diophantine equation
$$x^2-Dy^2=1,\qquad x,y\in\mathbb Z,$$
is **Pell's equation** for $D$.

An **integral solution** of Pell's equation is a pair $(x,y)\in\mathbb Z^2$
satisfying the displayed equation. A **positive nontrivial solution** is an
integral solution with
$$x>0,\qquad y>0.$$
The adjective "nontrivial" excludes the obvious solutions $(\pm1,0)$.
