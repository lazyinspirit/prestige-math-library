---
id: lem-square-root-convergent-norm-identity
kind: lemma
title: "Convergents to $\\sqrt{D}$ satisfy the norm identity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convergents-of-regular-continued-fraction, lem-continued-fraction-complete-quotient-formula, lem-continued-fraction-determinant-identity, lem-square-root-continued-fraction-state-recurrence]
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

## Statement

Let $D$ be a positive nonsquare integer, let $p_n/q_n$ be the convergents of
$\sqrt D$, and let $P_n,Q_n$ be the complete-quotient state variables from
[[lem-square-root-continued-fraction-state-recurrence]]. Then for every $n\ge0$,
$$p_n^2-Dq_n^2=(-1)^{n+1}Q_{n+1}.$$

## Facts & Assumptions

**Given:** A positive nonsquare integer $D$, the convergents $p_n/q_n$ of $\sqrt D$, and the state variables $P_n,Q_n$.

[F1] The complete-quotient tail formula gives
$$\sqrt D=\frac{\alpha_{n+1}p_n+p_{n-1}}{\alpha_{n+1}q_n+q_{n-1}}$$
for every $n\ge0$ ([[lem-continued-fraction-complete-quotient-formula]]).

[F2] Consecutive convergents satisfy
$$p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}.$$
([[lem-continued-fraction-determinant-identity]]).

[F3] The next complete quotient has the form
$$\alpha_{n+1}=\frac{\sqrt D+P_{n+1}}{Q_{n+1}}$$
with $Q_{n+1}>0$ ([[lem-square-root-continued-fraction-state-recurrence]]).

## Proof

**Proof technique:** direct.

1.1 Substitute the expression from [F3] into [F1] and clear denominators. One gets $$\sqrt D\bigl((\sqrt D+P_{n+1})q_n+Q_{n+1}q_{n-1}\bigr)=(\sqrt D+P_{n+1})p_n+Q_{n+1}p_{n-1}.$$ Comparing the rational and irrational coefficients of $1$ and $\sqrt D$ yields $$Dq_n=P_{n+1}p_n+Q_{n+1}p_{n-1},\qquad p_n=P_{n+1}q_n+Q_{n+1}q_{n-1}.$$ [F1, F3, algebra]

2.1 Multiply the second identity of step 1.1 by $p_n$, the first by $q_n$, and subtract. Then $$p_n^2-Dq_n^2=Q_{n+1}(p_nq_{n-1}-p_{n-1}q_n)=(-1)^{n+1}Q_{n+1}$$ by [F2]. [F2, step 1.1, algebra] ∎
