---
id: ex-pell-equation-for-fourteen
kind: example
title: "The Pell equation for $D=14$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-square-root-convergent-norm-identity, thm-square-root-continued-fraction-period-structure]
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

The complete quotients of $\sqrt{14}$ are
$$
\frac{\sqrt{14}+3}{5},\qquad \frac{\sqrt{14}+2}{2},\qquad \frac{\sqrt{14}+2}{5},\qquad \sqrt{14}+3,
$$
so
$$\sqrt{14}=[3;\overline{1,2,1,6}].$$
The convergent $15/4$ is the first one with norm $1$, so the fundamental Pell
solution is
$$15+4\sqrt{14}.$$

## Facts & Assumptions

**Given:** The positive nonsquare integer $D=14$.

[F1] The continued fraction of $\sqrt D$ has symmetric period ending in $2a_0$, and the returned state satisfies $Q_\ell=1$ ([[thm-square-root-continued-fraction-period-structure]]).

[F2] The convergents of $\sqrt D$ satisfy
$$p_n^2-Dq_n^2=(-1)^{n+1}Q_{n+1}.$$
([[lem-square-root-convergent-norm-identity]]).

## Verification

**Proof technique:** direct.

1.1 Starting from $\sqrt{14}$, rationalizing reciprocals gives the state cycle $$\alpha_1=\frac{\sqrt{14}+3}{5},\qquad \alpha_2=\frac{\sqrt{14}+2}{2},\qquad \alpha_3=\frac{\sqrt{14}+2}{5},\qquad \alpha_4=\sqrt{14}+3,$$ so the digits are $1,2,1,6$ and $$\sqrt{14}=[3;\overline{1,2,1,6}].$$ The convergents are therefore $$3,\qquad 4,\qquad \frac{11}{3},\qquad \frac{15}{4}.$$ [given, algebra]

2.1 Here $\ell=4$ and $Q_4=1$, in agreement with [F1]. Applying [F2] at $n=3$ gives $$15^2-14\cdot4^2=(-1)^4Q_4=1,$$ so $15+4\sqrt{14}$ is the least positive norm-one solution. [F1, F2, step 1.1, algebra] ∎
