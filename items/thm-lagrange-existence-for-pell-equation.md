---
id: thm-lagrange-existence-for-pell-equation
kind: theorem
title: "Every Pell equation has a positive nontrivial integral solution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pell-equation, lem-pell-norm-multiplication, lem-square-root-convergent-norm-identity, thm-square-root-continued-fraction-period-structure]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "Keith Conrad, Pell's Equation, II"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf"
    - title: "MIT 18.781, Lecture 21: Brahmagupta-Pell Equation"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/13cf7a5b5cc750bac32299824469a8d2_MIT18_781S12_lec21.pdf"
pipeline_run: null
---

## Statement

For every positive nonsquare integer $D$, Pell's equation
$$x^2-Dy^2=1$$
has a positive nontrivial integral solution.

## Facts & Assumptions

**Given:** A positive nonsquare integer $D$.

[F1] If $a_0=\lfloor\sqrt D\rfloor$, then
$$\sqrt D=[a_0;\overline{a_1,\ldots,a_{\ell-1},2a_0}]$$
for some $\ell\ge1$, and the returned state satisfies $Q_\ell=1$
([[thm-square-root-continued-fraction-period-structure]]).

[F2] The convergents of $\sqrt D$ satisfy
$$p_n^2-Dq_n^2=(-1)^{n+1}Q_{n+1}.$$
([[lem-square-root-convergent-norm-identity]]).

[F3] The Pell norm is multiplicative on $\mathbb Z[\sqrt D]$
([[lem-pell-norm-multiplication]]).

## Proof

**Proof technique:** direct.

1.1 Let $\ell$ be the period length from [F1]. Applying [F2] at $n=\ell-1$ and using $Q_\ell=1$ gives $$p_{\ell-1}^2-Dq_{\ell-1}^2=(-1)^\ell.$$ [F1, F2, given, algebra]

2.1 If $\ell$ is even, step 1.1 already gives a norm-one solution. Since $q_{\ell-1}>0$ for every convergent denominator and $p_{\ell-1}^2=Dq_{\ell-1}^2+1$, one has $p_{\ell-1}>0$ and $q_{\ell-1}>0$, so $(p_{\ell-1},q_{\ell-1})$ is a positive nontrivial solution. [step 1.1, algebra]

3.1 If $\ell$ is odd, step 1.1 gives $$p_{\ell-1}^2-Dq_{\ell-1}^2=-1.$$ Put $$\alpha:=p_{\ell-1}+q_{\ell-1}\sqrt D.$$ Then $p_{\ell-1}>0$ and $q_{\ell-1}>0$ as in step 2.1, and [F3] gives $$N_D(\alpha^2)=N_D(\alpha)^2=(-1)^2=1.$$ Explicitly, $$\alpha^2=(p_{\ell-1}^2+Dq_{\ell-1}^2)+2p_{\ell-1}q_{\ell-1}\sqrt D,$$ so $\alpha^2$ gives a positive nontrivial integral solution of Pell's equation. [F3, step 1.1, algebra]

4.1 Either step 2.1 or step 3.1 supplies the required positive nontrivial solution. [step 2.1, step 3.1] ∎
