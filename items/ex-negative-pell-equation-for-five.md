---
id: ex-negative-pell-equation-for-five
kind: example
title: "The negative Pell equation for $D=5$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-negative-pell-period-parity-criterion]
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

## Example

For $D=5$ one has
$$\sqrt5=[2;\overline4].$$
So the negative Pell equation has least positive solution
$$2+\sqrt5,$$
and squaring it gives the fundamental positive solution
$$9+4\sqrt5.$$

## Facts & Assumptions

**Given:** The positive nonsquare integer $D=5$.

[F1] Negative Pell is soluble exactly for odd period length, and in that case the least positive negative-Pell solution is $p_{\ell-1}/q_{\ell-1}$ while the least positive norm-one solution is $p_{2\ell-1}/q_{2\ell-1}$ ([[thm-negative-pell-period-parity-criterion]]).

## Verification

**Proof technique:** direct.

1.1 A direct continued-fraction calculation gives $\sqrt5=[2;\overline4]$, so $\ell=1$. Fact [F1] therefore gives the least positive negative-Pell solution $$p_0/q_0=2/1,$$ that is, $2+\sqrt5$, and indeed $$2^2-5\cdot1^2=-1.$$ [F1, given, algebra]

2.1 Squaring the negative-Pell solution yields $$(2+\sqrt5)^2=9+4\sqrt5,$$ and $$9^2-5\cdot4^2=1.$$ By [F1], this is the least positive norm-one solution. [F1, step 1.1, algebra] ∎
