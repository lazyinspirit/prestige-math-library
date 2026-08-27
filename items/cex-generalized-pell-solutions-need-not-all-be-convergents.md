---
id: cex-generalized-pell-solutions-need-not-all-be-convergents
kind: counterexample
title: "A generalized Pell solution need not be a convergent"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-legendre-continued-fraction-criterion, thm-square-root-continued-fraction-period-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

## Statement refuted

Every integral solution of a generalized Pell equation $x^2-Dy^2=N$ is a
convergent of $\sqrt D$.

## Witness

The element
$$3+\sqrt6$$
solves
$$x^2-6y^2=3,$$
but the rational number $3/1$ is not a convergent of $\sqrt6$.

## Facts & Assumptions

**Given:** The generalized Pell solution $3+\sqrt6$.

[F1] If a reduced rational number $r/s$ satisfies
$$\left|\sqrt D-\frac rs\right|<\frac1{2s^2},$$
then $r/s$ is a convergent of $\sqrt D$
([[thm-legendre-continued-fraction-criterion]]).

## Counterexample

**Proof technique:** direct.

1.1 One checks directly that $$3^2-6\cdot1^2=3,$$ so $3+\sqrt6$ is a generalized Pell solution. A direct continued-fraction calculation gives $$\sqrt6=[2;\overline{2,4}],$$ whose convergents begin $$2,\qquad \frac52,\qquad \frac{22}{9},\ldots.$$ Thus $3/1$ is not a convergent of $\sqrt6$. [given, algebra]

2.1 The missing hypothesis is exactly the small-error bound in [F1]: here $$\left|\sqrt6-\frac31\right|=3-\sqrt6>\frac12=\frac1{2\cdot1^2},$$ so [F1] does not apply. Therefore generalized Pell solutions need not all be convergents. [F1, step 1.1, algebra] ∎
