---
id: lem-qec-prereq-first-crossing-asymptotics
kind: lemma
domain: mathematics
title: Local inversion of a fidelity first crossing
status: draft
origin: session
deps:
  - math:def-infimum
  - math:thm-infimum-property
  - math:def-real-power
  - math:thm-real-power-laws
  - math:thm-real-power-continuity-and-derivatives
  - math:thm-monotonicity-from-the-derivative
  - math:def-continuity-real
  - math:def-function-limit
  - math:def-extended-reals
dependency_roles:
  math:def-infimum: mathematical-premise
  math:thm-infimum-property: mathematical-premise
  math:def-real-power: mathematical-premise
  math:thm-real-power-laws: mathematical-premise
  math:thm-real-power-continuity-and-derivatives: mathematical-premise
  math:thm-monotonicity-from-the-derivative: mathematical-premise
  math:def-continuity-real: mathematical-premise
  math:def-function-limit: mathematical-premise
  math:def-extended-reals: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $F:[0,\infty)\to\mathbb R$ be continuous, $F(0)=1$, $a>0$, and $p>0$. Suppose that $1-F(t)=at^p+O(t^{p+1})$ as $t\downarrow0$: explicitly, there are $C,\delta_0>0$ such that $|1-F(t)-at^p|\le Ct^{p+1}$ for $0<t<\delta_0$. Define $\tau(1-\epsilon)=\inf\{t\ge0:F(t)<1-\epsilon\}$, with the infimum of the empty set taken as $+\infty$. Then $\tau(1-\epsilon)\sim(\epsilon/a)^{1/p}$ as $\epsilon\downarrow0$: that is, their ratio tends to $1$. If $a=0$, this inversion gives no conclusion.

## Statement references

[[math:def-continuity-real]]

[[math:def-function-limit]]

[[math:def-extended-reals]]

## Facts & Assumptions

[F1] A nonempty real set bounded below has an infimum; that infimum is a lower bound at least as large as every other lower bound. [[math:thm-infimum-property]] [[math:def-infimum]]

[F2] For positive bases, real powers are defined by $x^r=\exp(r\log x)$ and obey $(xy)^r=x^ry^r$ and $(x^r)^s=x^{rs}$. [[math:def-real-power]] [[math:thm-real-power-laws]]

[F3] For $p>0$, the derivative of $x^p$ on $(0,\infty)$ is $px^{p-1}>0$; hence $x\mapsto x^p$ is strictly increasing there. [[math:thm-real-power-continuity-and-derivatives]] [[math:thm-monotonicity-from-the-derivative]]

## Proof

**Given:** The function and constants satisfy the stated hypotheses.

**Goal:** Prove that $\tau(1-\epsilon)/(\epsilon/a)^{1/p}\to1$ as $\epsilon\downarrow0$.

1.1 Fix $0<\eta<1$ and set $b=\frac12\min\{1-(1-\eta)^p,(1+\eta)^p-1\}>0$. Choose $0<\delta<\delta_0$ with $C\delta\le ab$. The remainder bound then gives $(a-ab)t^p\le1-F(t)\le(a+ab)t^p$ for $0<t<\delta$. [given, F3, algebra]

2.1 Put $x=(\epsilon/a)^{1/p}$. For all sufficiently small $\epsilon>0$, $(1+\eta)x<\delta$: indeed this follows whenever $\epsilon<a(\delta/(1+\eta))^p$, by the power laws and strict increase. At $t_+=(1+\eta)x$, the lower bound in step 1.1 is strictly greater than $\epsilon$, since $(1-b)(1+\eta)^p>1$. Thus $t_+$ belongs to the crossing set. [step 1.1, F2, F3, algebra]

3.1 For $0<t\le t_-=(1-\eta)x$, the upper bound in step 1.1 is strictly less than $\epsilon$, because $(1+b)(1-\eta)^p<1$. At $t=0$, $1-F(0)=0<\epsilon$. Hence every member of the crossing set is greater than $t_-$. The set is nonempty by step 2.1 and bounded below by $0$, so its infimum exists and $t_-\le\tau(1-\epsilon)\le t_+$. [given, step 1.1, step 2.1, F1, F2, F3, algebra]

4.1 Dividing by $x>0$ gives $1-\eta\le\tau(1-\epsilon)/x\le1+\eta$ for all sufficiently small positive $\epsilon$. Since every positive error tolerance contains such an $\eta$, the ratio tends to $1$. The proof used $a>0$; it asserts no inversion when $a=0$. [step 3.1, algebra] ∎
