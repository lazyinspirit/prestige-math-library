---
id: def-pell-equivalence-of-generalized-solutions
kind: definition
title: "Pell-equivalence for generalized solutions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-generalized-and-negative-pell-equations, def-fundamental-pell-solution, prop-integral-pell-solutions-form-a-group, lem-pell-norm-multiplication]
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
    - title: "Keith Conrad, Pell's Equation, II"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf"
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
pipeline_run: null
---

## Definition

Fix a generalized Pell equation
$$x^2-Dy^2=N,\qquad N\ne0,$$
as in [[def-generalized-and-negative-pell-equations]], and write
$$\varepsilon_D:=x_1+y_1\sqrt D$$
for the fundamental Pell solution from
[[def-fundamental-pell-solution]].

Two integral solutions
$$\alpha,\beta\in\mathbb Z[\sqrt D],\qquad N_D(\alpha)=N_D(\beta)=N,$$
are **Pell-equivalent** if
$$\beta=\alpha\varepsilon_D^k$$
for some integer $k$.

This stays inside the same generalized Pell equation because
[[lem-pell-norm-multiplication]] gives
$$N_D(\alpha\varepsilon_D^k)=N_D(\alpha)N_D(\varepsilon_D)^k=N,$$
and [[prop-integral-pell-solutions-form-a-group]] makes the powers
$\varepsilon_D^k$ a group.
