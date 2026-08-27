---
id: ex-large-fundamental-pell-solution-for-sixty-one
kind: example
title: "The large fundamental solution for $D=61$"
status: published
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
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "MIT 18.781, Lecture 21: Brahmagupta-Pell Equation"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/13cf7a5b5cc750bac32299824469a8d2_MIT18_781S12_lec21.pdf"
pipeline_run: null
---

## Example

A direct continued-fraction calculation gives
$$
\sqrt{61}=[7;\overline{1,4,3,1,2,2,1,3,4,1,14}],
$$
so the period length is $11$. The least positive solution of
$$x^2-61y^2=-1$$
is
$$29718+3805\sqrt{61},$$
and the least positive solution of
$$x^2-61y^2=1$$
is its square
$$1766319049+226153980\sqrt{61}.$$

## Facts & Assumptions

**Given:** The positive nonsquare integer $D=61$.

[F1] Negative Pell is soluble exactly for odd period length, and when the period length is odd the least positive negative-Pell solution is $p_{\ell-1}/q_{\ell-1}$ while the least positive norm-one solution is $p_{2\ell-1}/q_{2\ell-1}$ ([[thm-negative-pell-period-parity-criterion]]).

## Verification

**Proof technique:** direct.

1.1 The displayed continued fraction has odd period length $\ell=11$. Running the convergent recurrence through one full period gives $$p_{10}/q_{10}=29718/3805.$$ Fact [F1] therefore gives $$29718^2-61\cdot3805^2=-1,$$ so $29718+3805\sqrt{61}$ is the least positive negative-Pell solution. [F1, given, algebra]

2.1 Squaring that element gives $$(29718+3805\sqrt{61})^2=1766319049+226153980\sqrt{61},$$ and therefore $$1766319049^2-61\cdot226153980^2=1.$$ By [F1], this is the least positive solution of Pell's equation for $D=61$. The example shows that a finite continued-fraction algorithm can still produce a very large fundamental solution. [F1, step 1.1, algebra] ∎
