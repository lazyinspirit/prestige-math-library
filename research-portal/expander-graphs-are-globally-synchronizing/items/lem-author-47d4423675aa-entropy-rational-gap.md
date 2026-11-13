---
id: lem-author-47d4423675aa-entropy-rational-gap
title: A rational entropy test above the critical degree ratio two
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - prop-expander-prereq-entropy-root-geometry
  - math:thm-natural-logarithm-laws
  - math:thm-logarithm-derivative-and-integral
  - math:thm-monotonicity-from-the-derivative
  - math:lem-nonnegative-square-root-exists-and-unique
  - math:lem-derivative-of-a-power
  - math:thm-algebra-of-derivatives
  - math:cor-differentiable-implies-continuous
dependency_roles:
  prop-expander-prereq-entropy-root-geometry: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:thm-logarithm-derivative-and-integral: mathematical-premise
  math:thm-monotonicity-from-the-derivative: mathematical-premise
  math:lem-nonnegative-square-root-exists-and-unique: mathematical-premise
  math:lem-derivative-of-a-power: mathematical-premise
  math:thm-algebra-of-derivatives: mathematical-premise
  math:cor-differentiable-implies-continuous: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement

For $t>0$ write $I(t)=t\log t-t+1$. Then $I(9/4)\le5/8<2/3$. Define $\Lambda(t)=t/\sqrt{t-1}$ for $t\ge2$, using the positive square root. This function is nondecreasing and $\Lambda(t)\ge9/(2\sqrt5)=2+g$ for $t\ge9/4$, where $g=9/(2\sqrt5)-2>0$.

## Statement references

[[prop-expander-prereq-entropy-root-geometry]]

[[math:thm-natural-logarithm-laws]]

[[math:thm-logarithm-derivative-and-integral]]

[[math:thm-monotonicity-from-the-derivative]]

[[math:lem-nonnegative-square-root-exists-and-unique]]

[[math:lem-derivative-of-a-power]]

[[math:thm-algebra-of-derivatives]]

[[math:cor-differentiable-implies-continuous]]

## Facts & Assumptions

[F1] The entropy function is continuous and strictly increasing on $(1,\infty)$. [[prop-expander-prereq-entropy-root-geometry]]

[F2] The natural logarithm obeys the product law, has $\log 1=0$ and has derivative $1/t$ for $t>0$; a continuous function on an interval with nonnegative derivative at every interior point is nondecreasing. [[math:thm-natural-logarithm-laws]] [[math:thm-logarithm-derivative-and-integral]] [[math:thm-monotonicity-from-the-derivative]]

[F3] The power rule gives derivatives $1$ and $-t^{-2}$ for $t$ and $t^{-1}$ at $t>0$. Sums and scalar multiples of differentiable functions are differentiable, with the corresponding derivative formulas. Differentiability implies continuity. [[math:lem-derivative-of-a-power]] [[math:thm-algebra-of-derivatives]] [[math:cor-differentiable-implies-continuous]]

[F4] Every nonnegative real number has a unique nonnegative square root. If the number is positive its root is positive, since a zero root would have square zero. [[math:lem-nonnegative-square-root-exists-and-unique]]

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the stated conclusions.

1.1 Set $h(t)=(t-t^{-1})/2-\log t$ on $(0,\infty)$. By F2 and F3, all three terms are differentiable there, since $t>0$ makes the reciprocal and logarithm admissible. Thus $h$ is differentiable, hence continuous, on $(0,\infty)$, and $h\prime(t)=(1+t^{-2})/2-t^{-1}=(t-1)^2/(2t^2)\ge0$. Its restriction to the interval $[1,\infty)$ is continuous, including at $1$, and differentiable at every interior point, so F2 makes it nondecreasing there. Since $h(1)=0$, evaluating at $3/2$ gives $\log(3/2)\le5/12$. By the product law, $\log(9/4)=2\log(3/2)\le5/6$. Hence $I(9/4)\le(9/4)(5/6)-9/4+1=5/8<2/3$. [F1, F2, F3, algebra]

2.1 For $t\ge s\ge2$, F4 gives positive roots of $t-1$ and $s-1$, so $\Lambda(t)$ and $\Lambda(s)$ are well-defined and positive. Their squares satisfy $\Lambda(t)^2-\Lambda(s)^2=(t-s)(1-((t-1)(s-1))^{-1})\ge0$, because $(t-1)(s-1)\ge1$. Factoring the difference of squares and dividing by $\Lambda(t)+\Lambda(s)>0$ gives $\Lambda(t)\ge\Lambda(s)$. At $s=9/4$, uniqueness in F4 gives $\sqrt{5/4}=\sqrt5/2$, since the positive right-hand side has square $5/4$. Thus $\Lambda(9/4)=9/(2\sqrt5)$; its square is $81/20>4$, and positivity gives $\Lambda(9/4)>2$. The bound for every $t\ge9/4$ and the fixed positive gap follow. [F4, algebra] ∎
