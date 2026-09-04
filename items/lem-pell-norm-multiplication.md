---
id: lem-pell-norm-multiplication
kind: lemma
title: "The Pell norm is multiplicative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-norm-on-integer-square-root-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Pell's Equation, I"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn1.pdf"
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
pipeline_run: null
---

## Statement

Let
$$\alpha=x+y\sqrt D,\qquad \beta=u+v\sqrt D\in\mathbb Z[\sqrt D].$$
Then
$$\alpha\beta=(xu+D yv)+(xv+yu)\sqrt D,$$
and the Pell norm is multiplicative:
$$N_D(\alpha\beta)=N_D(\alpha)N_D(\beta).$$

## Facts & Assumptions

**Given:** Two elements $\alpha=x+y\sqrt D$ and $\beta=u+v\sqrt D$ of $\mathbb Z[\sqrt D]$.

[F1] In $\mathbb Z[\sqrt D]$, one has
$$ (x+y\sqrt D)(u+v\sqrt D)=(xu+D yv)+(xv+yu)\sqrt D $$
and
$$N_D(x+y\sqrt D)=x^2-Dy^2.$$
([[def-norm-on-integer-square-root-order]]).

## Proof

**Proof technique:** direct.

1.1 Fact [F1] gives the coordinate product formula immediately: $$\alpha\beta=(xu+D yv)+(xv+yu)\sqrt D.$$ [F1]

2.1 Applying the norm formula from [F1] to step 1.1 and expanding gives $$N_D(\alpha\beta)=(xu+D yv)^2-D(xv+yu)^2=(x^2-Dy^2)(u^2-Dv^2)=N_D(\alpha)N_D(\beta).$$ [F1, step 1.1, algebra] ∎
