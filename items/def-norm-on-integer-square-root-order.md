---
id: def-norm-on-integer-square-root-order
kind: definition
title: "The norm on the explicit order $\\mathbb{Z}[\\sqrt{D}]$"
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

Fix a positive integer $D$ that is not a square. Write
$$\mathbb Z[\sqrt D]:=\{x+y\sqrt D:x,y\in\mathbb Z\},$$
viewed only as the explicit rank-two order of such expressions. Its coordinate
operations are
$$
(x+y\sqrt D)+(u+v\sqrt D)=(x+u)+(y+v)\sqrt D
$$
and
$$
(x+y\sqrt D)(u+v\sqrt D)=(xu+D yv)+(xv+yu)\sqrt D.
$$

The **conjugate** of
$$\alpha=x+y\sqrt D\in\mathbb Z[\sqrt D]$$
is
$$\overline\alpha:=x-y\sqrt D.$$
The **Pell norm** of $\alpha$ is
$$N_D(\alpha):=\alpha\overline\alpha=x^2-Dy^2.$$

Because $D$ is not a square, $\sqrt D$ is irrational, so equal expressions
$x+y\sqrt D=u+v\sqrt D$ have equal coefficients $x=u$ and $y=v$.
