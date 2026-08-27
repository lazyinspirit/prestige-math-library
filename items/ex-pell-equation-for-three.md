---
id: ex-pell-equation-for-three
kind: example
title: "The Pell equation for $D=3$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-negative-pell-period-parity-criterion]
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

## Example

For $D=3$ one finds
$$\sqrt3=[1;\overline{1,2}],$$
so the period length is even. The least positive solution of
$$x^2-3y^2=1$$
is
$$2+\sqrt3,$$
and the negative Pell equation
$$x^2-3y^2=-1$$
has no integral solution.

## Facts & Assumptions

**Given:** The positive nonsquare integer $D=3$.

[F1] Negative Pell is soluble exactly for odd period length, and when the period length is even the convergent $p_{\ell-1}/q_{\ell-1}$ is the least positive norm-one solution ([[thm-negative-pell-period-parity-criterion]]).

## Verification

**Proof technique:** direct.

1.1 A direct continued-fraction calculation gives $\sqrt3=[1;\overline{1,2}]$, so the period length is $\ell=2$. Then [F1] gives the least positive norm-one solution at $$p_1/q_1=2/1,$$ hence $2+\sqrt3$, with $$2^2-3\cdot1^2=1.$$ [F1, given, algebra]

2.1 Because the period length is even, [F1] also says that $x^2-3y^2=-1$ has no integral solution. [F1, step 1.1] ∎
