---
id: ex-pell-equation-for-two
kind: example
title: "The Pell and negative Pell equations for $D=2$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-negative-pell-period-parity-criterion, thm-all-positive-pell-solutions-are-fundamental-powers]
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

For $D=2$ one has
$$\sqrt2=[1;\overline2].$$
Hence
$$1^2-2\cdot1^2=-1,\qquad 3^2-2\cdot2^2=1,$$
so the negative Pell equation has least positive solution $1+\sqrt2$, while the
fundamental Pell solution is
$$\varepsilon_2=3+2\sqrt2=(1+\sqrt2)^2.$$

The first positive Pell solutions are therefore
$$3+2\sqrt2,\qquad 17+12\sqrt2,\qquad 99+70\sqrt2,\ldots.$$

## Facts & Assumptions

**Given:** The positive nonsquare integer $D=2$.

[F1] Negative Pell is soluble exactly for odd period length, and when the period length is odd the least positive negative-Pell solution is $p_{\ell-1}/q_{\ell-1}$ while the least positive norm-one solution is $p_{2\ell-1}/q_{2\ell-1}$ ([[thm-negative-pell-period-parity-criterion]]).

[F2] Every positive Pell solution is a unique positive power of the fundamental unit $\varepsilon_D$ ([[thm-all-positive-pell-solutions-are-fundamental-powers]]).

## Verification

**Proof technique:** direct.

1.1 A direct continued-fraction calculation gives $\sqrt2=[1;\overline2]$, so the period length is $\ell=1$. Fact [F1] therefore gives the least positive negative-Pell solution $$p_0/q_0=1/1,$$ hence $1+\sqrt2$, and the least positive norm-one solution $$p_1/q_1=3/2,$$ hence $\varepsilon_2=3+2\sqrt2=(1+\sqrt2)^2$. [F1, given, algebra]

2.1 By [F2], every positive Pell solution for $D=2$ is a power of $\varepsilon_2$. Multiplying out the first powers gives $$\varepsilon_2^2=(3+2\sqrt2)^2=17+12\sqrt2,\qquad \varepsilon_2^3=(17+12\sqrt2)(3+2\sqrt2)=99+70\sqrt2.$$ [F2, step 1.1, algebra] ∎
