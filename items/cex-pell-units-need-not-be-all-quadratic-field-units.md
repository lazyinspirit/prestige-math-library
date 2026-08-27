---
id: cex-pell-units-need-not-be-all-quadratic-field-units
kind: counterexample
title: "The elementary Pell order can miss units from the larger quadratic order"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-norm-on-integer-square-root-order]
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

Every unit of a quadratic order containing $\mathbb Z[\sqrt D]$ already lies in
the explicit Pell order $\mathbb Z[\sqrt D]$.

## Witness

Take $D=5$. The larger explicit order
$$\mathbb Z\!\left[\frac{1+\sqrt5}{2}\right]$$
contains the unit
$$u:=\frac{1+\sqrt5}{2},$$
but $u\notin\mathbb Z[\sqrt5]$.

## Facts & Assumptions

**Given:** The explicit Pell order $\mathbb Z[\sqrt5]$ from [[def-norm-on-integer-square-root-order]].

[F1] The explicit Pell order $\mathbb Z[\sqrt D]$ consists exactly of the elements $x+y\sqrt D$ with $x,y\in\mathbb Z$ ([[def-norm-on-integer-square-root-order]]).

## Counterexample

**Proof technique:** direct.

1.1 The element $$u=\frac{1+\sqrt5}{2}$$ is a unit in $\mathbb Z\!\left[\frac{1+\sqrt5}{2}\right]$ because $$u(u-1)=\frac{1+\sqrt5}{2}\cdot\frac{\sqrt5-1}{2}=1.$$ [given, algebra]

2.1 If $u$ lay in $\mathbb Z[\sqrt5]$, then [F1] would give integers $x,y$ with $$\frac{1+\sqrt5}{2}=x+y\sqrt5.$$ Comparing coefficients of $1$ and $\sqrt5$ yields $x=\tfrac12$ and $y=\tfrac12$, impossible in $\mathbb Z$. So $u$ is a unit of the larger quadratic order that is not in $\mathbb Z[\sqrt5]$. [F1, step 1.1, algebra] ∎
