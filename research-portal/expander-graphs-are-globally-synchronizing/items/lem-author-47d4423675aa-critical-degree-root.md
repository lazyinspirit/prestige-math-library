---
id: lem-author-47d4423675aa-critical-degree-root
title: The deterministic critical degree root stays above nine quarters
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-47d4423675aa-entropy-rational-gap
  - prop-expander-prereq-entropy-root-geometry
  - def-expander-prereq-asymptotic-quantifiers
  - math:thm-natural-logarithm-laws
  - math:thm-logarithm-derivative-and-integral
  - math:thm-monotonicity-from-the-derivative
  - math:thm-intermediate-value
  - lem-author-2bcd11f9e275-logarithmic-tangent-bound
  - math:def-divergence-to-infinity
  - math:def-limits-at-infinity
  - math:thm-algebra-of-continuous-functions
  - math:thm-composition-of-continuous-functions
  - math:lem-nonnegative-square-root-exists-and-unique
dependency_roles:
  lem-author-47d4423675aa-entropy-rational-gap: mathematical-premise
  prop-expander-prereq-entropy-root-geometry: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:thm-logarithm-derivative-and-integral: mathematical-premise
  math:thm-monotonicity-from-the-derivative: mathematical-premise
  math:thm-intermediate-value: mathematical-premise
  lem-author-2bcd11f9e275-logarithmic-tangent-bound: mathematical-premise
  math:def-divergence-to-infinity: mathematical-premise
  math:def-limits-at-infinity: mathematical-premise
  math:thm-algebra-of-continuous-functions: mathematical-premise
  math:thm-composition-of-continuous-functions: mathematical-premise
  math:lem-nonnegative-square-root-exists-and-unique: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
---

## Statement

Fix a positive real constant $K$. For all sufficiently large integers $n$, put $d_n=(3/2)\log n$. There is a unique $\beta_n>1$ solving $d_n I(\beta_n)+(1/2)\log(K\beta_n d_n)=\log n$, and $\beta_n>9/4$. Here $I(t)=t\log t-t+1$. Moreover $d_n\to\infty$ and $p_n=d_n/n\to0$, so eventually $0<p_n<1/2$.

## Statement references

[[lem-author-47d4423675aa-entropy-rational-gap]]

[[prop-expander-prereq-entropy-root-geometry]]

[[def-expander-prereq-asymptotic-quantifiers]]

[[math:def-divergence-to-infinity]]

[[math:def-limits-at-infinity]]

[[math:thm-natural-logarithm-laws]]

[[math:thm-logarithm-derivative-and-integral]]

[[math:thm-monotonicity-from-the-derivative]]

[[math:thm-intermediate-value]]

[[lem-author-2bcd11f9e275-logarithmic-tangent-bound]]

[[math:thm-algebra-of-continuous-functions]]

[[math:thm-composition-of-continuous-functions]]

[[math:lem-nonnegative-square-root-exists-and-unique]]

## Facts & Assumptions

[F1] The entropy function is continuous, strictly increasing and unbounded on $(1,\infty)$, and $I(1)=0$. [[prop-expander-prereq-entropy-root-geometry]]

[F2] The logarithm is continuous, strictly increasing and unbounded, has derivative $1/t$, and satisfies its product law; intermediate values are attained on closed intervals. [[math:thm-natural-logarithm-laws]] [[math:thm-logarithm-derivative-and-integral]] [[math:thm-monotonicity-from-the-derivative]] [[math:thm-intermediate-value]]

[F3] For every $y>0$, $\log y\le y-1$. The usual asymptotic limit conventions apply, including divergence of sequences to infinity and limits of functions at infinity. [[lem-author-2bcd11f9e275-logarithmic-tangent-bound]] [[def-expander-prereq-asymptotic-quantifiers]] [[math:def-divergence-to-infinity]] [[math:def-limits-at-infinity]]

[F4] The explicit rational test is $I(9/4)\le5/8<2/3$. [[lem-author-47d4423675aa-entropy-rational-gap]]

[F5] Constant and identity functions are continuous; sums, scalar multiples and products of continuous real functions are continuous on their common domain. If a continuous inner map has its range in the domain of a continuous outer map, their composite is continuous. [[math:thm-algebra-of-continuous-functions]] [[math:thm-composition-of-continuous-functions]]

[F6] Every nonnegative real number $z$ has a unique nonnegative square root $r$ with $r^2=z$. For $z>0$ this root is positive, since $r=0$ would give $z=0$. [[math:lem-nonnegative-square-root-exists-and-unique]]

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the stated conclusions.

1.1 For $z\ge1$, let $r=\sqrt z$ be the nonnegative root from [F6]. Then $r\ge1$, since $0\le r<1$ would imply $r^2<1$. For every $M\ge1$, $z\ge M^2$ implies $r\ge M$: otherwise $M^2-r^2=(M-r)(M+r)>0$ contradicts $r^2=z\ge M^2$. Thus $r\to\infty$ as $z\to\infty$. By [F2], $\log z=2\log r$, so [F3] gives $0\le\log z/z\le2(r-1)/r^2\le2/r$. Given $\varepsilon>0$, choosing $M>\max(1,2/\varepsilon)$ makes the last bound less than $\varepsilon$ for $z\ge M^2$; hence $\log z/z\to0$. This yields $\log n/n\to0$ and $\log\log n/\log n\to0$. By [F2], $d_n\to\infty$ and $\log(Ktd_n)/\log n\to0$ for each fixed $t>0$. Therefore $p_n\to0$. [F2, F3, F6, algebra]

2.1 For fixed $n>1$, $d_n>0$ and $Ktd_n>0$ for $t\ge1$. By [F5], the identity map and its scalar multiple $t\mapsto Kd_nt$ are continuous on $[1,\infty)$; [F2] and composition give continuity of $t\mapsto\log(Ktd_n)$. The same continuity algebra applied to $I(t)=t\log t-t+1$, and then to its scalar multiple and sum with the logarithmic term, shows that $F_n(t)=d_n I(t)+(1/2)\log(Ktd_n)$ is continuous on that interval, including at $1$. It is strictly increasing and tends to infinity as $t\to\infty$ by [F1] and [F2]. Step 1.1 gives $F_n(1)/\log n\to0$ and $F_n(9/4)/\log n\to(3/2)I(9/4)\le15/16<1$. Hence for large $n$ these two values are below $\log n$. The intermediate value theorem gives a unique root above $9/4$. The probability-parameter bounds follow from step 1.1. [F1, F2, F3, F4, F5, step 1.1, algebra] ∎
