---
title: Entropy endpoint limits and the two monotone branches
status: published
research_item: lem-author-2bcd11f9e275-entropy-branch-geometry
dependency_level: 1
---

## Prerequisites

- [lem-author-2bcd11f9e275-logarithmic-tangent-bound](item-lem-author-2bcd11f9e275-logarithmic-tangent-bound)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)
- [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative)
- [math:thm-intermediate-value](https://alphabetamath.cc/item/thm-intermediate-value)
- [math:thm-algebra-of-derivatives](https://alphabetamath.cc/item/thm-algebra-of-derivatives)
- [math:lem-derivative-of-a-power](https://alphabetamath.cc/item/lem-derivative-of-a-power)
- [math:cor-differentiable-implies-continuous](https://alphabetamath.cc/item/cor-differentiable-implies-continuous)
- [math:thm-of-square-roots](https://alphabetamath.cc/item/thm-of-square-roots)
- [math:def-one-sided-limits](https://alphabetamath.cc/item/def-one-sided-limits)
- [math:def-limits-at-infinity](https://alphabetamath.cc/item/def-limits-at-infinity)
- [math:def-derivative](https://alphabetamath.cc/item/def-derivative)
- [math:def-monotone-function](https://alphabetamath.cc/item/def-monotone-function)
- [math:def-continuity-real](https://alphabetamath.cc/item/def-continuity-real)


## Statement

For $a>0$, let $I(a)=a\log a-a+1$. Then $I\prime(a)=\log a$, $I\prime\prime(a)=1/a>0$, $I(1)=0$, $\lim_{a\downarrow0}I(a)=1$, and $I(a)\to+\infty$ as $a\to+\infty$. The function strictly decreases on $(0,1)$ with range $(0,1)$ and strictly increases on $(1,\infty)$ with range $(0,\infty)$. Consequently $I(a)=t$ has exactly two positive solutions for $0<t<1$, one in each branch.

## Facts & Assumptions

**Given:** The variables and hypotheses of the Statement.

[F1] [lem-author-2bcd11f9e275-logarithmic-tangent-bound](item-lem-author-2bcd11f9e275-logarithmic-tangent-bound) gives $\log y\le y-1$ for $y>0$.

[F2] [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws) gives continuity, range, strict monotonicity, the product and reciprocal laws, and $\log 1=0$.

[F3] [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral) gives $(\log a)\prime=1/a$ for $a>0$.

[F4] [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative) gives strict monotonicity on an interval for a continuous function whose derivative has the corresponding strict sign at every interior point.

[F5] [math:thm-intermediate-value](https://alphabetamath.cc/item/thm-intermediate-value) attains every value between the endpoint values of a continuous function on a closed real interval.

[F6] [math:thm-algebra-of-derivatives](https://alphabetamath.cc/item/thm-algebra-of-derivatives) gives the sum, scalar-multiple and product rules for functions differentiable on a common domain at a limit point of that domain.

[F7] [math:lem-derivative-of-a-power](https://alphabetamath.cc/item/lem-derivative-of-a-power), with exponents $0$ and $1$, gives the derivatives $0$ and $1$ of the constant function $1$ and the identity function, respectively.

[F8] [math:cor-differentiable-implies-continuous](https://alphabetamath.cc/item/cor-differentiable-implies-continuous) gives continuity at every limit point of the domain where the function is differentiable.

[F9] [math:thm-of-square-roots](https://alphabetamath.cc/item/thm-of-square-roots) gives, for each $a>0$ in $\mathbb R$, the unique nonnegative $s=\sqrt a$ with $s^2=a$; necessarily $s>0$.

[F10] [math:def-one-sided-limits](https://alphabetamath.cc/item/def-one-sided-limits) defines the right limit at $0$ by the condition that for every $\varepsilon>0$ there is $\delta>0$ such that $0<a<\delta$ implies $|I(a)-1|<\varepsilon$. The point $0$ is a limit point of $(0,\infty)$.

[F11] [math:def-limits-at-infinity](https://alphabetamath.cc/item/def-limits-at-infinity) defines divergence to $+\infty$ at $+\infty$ by requiring, for every real $B$, a real $M$ such that $a>M$ implies $I(a)>B$. The domain $(0,\infty)$ is unbounded above.

[F12] [math:def-derivative](https://alphabetamath.cc/item/def-derivative) defines the derivative at a domain limit point by the limit of the difference quotient, and differentiability on a set pointwise. Here $I\prime\prime$ denotes the derivative of $I\prime$.

[F13] [math:def-monotone-function](https://alphabetamath.cc/item/def-monotone-function) defines strict increase on a domain by $x<y\Rightarrow f(x)<f(y)$ and strict decrease by $x<y\Rightarrow f(x)>f(y)$; either condition makes the function injective.

[F14] [math:def-continuity-real](https://alphabetamath.cc/item/def-continuity-real) defines continuity at $c$ by requiring, for every $\varepsilon>0$, a $\delta>0$ such that domain points $x$ with $|x-c|<\delta$ satisfy $|f(x)-f(c)|<\varepsilon$. Continuity on a domain is pointwise continuity, and passes to restrictions of that domain.

## Proof

**Goal:** Establish the full Statement.

1.1 Every point of $(0,\infty)$ is a limit point of that domain. The logarithm, the identity and the constant function $1$ are differentiable there by F3 and F7. Applying F6 gives $I\prime(a)=\log a+a(1/a)-1+0=\log a$, and F3 then gives $I\prime\prime(a)=1/a>0$. By F8, $I$ is continuous on $(0,\infty)$. Since $\log a<0$ for $0<a<1$ and $\log a>0$ for $a>1$, F4 applies on $(0,1]$ and $[1,\infty)$, giving strict decrease and strict increase, respectively. Substitution gives $I(1)=0$. [F2, F3, F4, F6, F7, F8, F12, F13, F14, algebra]

1.2 For $0<a<1$, let $s=\sqrt a>0$ by F9 and put $y=1/s$. Since $s^2=a<1$, one has $s<1$ and $y>1$. The logarithm laws give $\log a=2\log s=-2\log y$. Hence F1 and F2 give $0\le-a\log a=2a\log y\le2a(y-1)\le2s$. Given $\varepsilon>0$, take $\delta=\min\{1,\varepsilon/2,\varepsilon^2/16\}>0$. If $0<a<\delta$, then $s^2<\varepsilon^2/16$, and the factorization $s^2-(\varepsilon/4)^2=(s-\varepsilon/4)(s+\varepsilon/4)$ gives $s<\varepsilon/4$. Therefore $|I(a)-1|=-a\log a+a\le2s+a<\varepsilon$. This proves the right limit $1$ at $0$ directly by F10. [F1, F2, F9, F10, algebra, choose]

1.3 By the range of $\log$, choose $A>0$ with $\log A=2$. For every real $B$, put $M=\max\{A,B,1\}$. If $a>M$, monotonicity of $\log$ gives $\log a\ge2$, so $I(a)\ge a+1>B$. This is divergence to $+\infty$ at $+\infty$ by F11. [F2, F11, algebra, choose]

2.1 By step 1.1, $I(a)>0$ on both branches. If $0<a<1$, then $\log a<0$ gives $I(a)=1+a\log a-a<1$. For $0<t<1$, the right limit in step 1.2 supplies $u\in(0,1)$ with $I(u)>t$, while continuity at $1$ supplies $v\in(u,1)$ with $I(v)<t$. The restriction of $I$ to $[u,v]$ is continuous, so F5 supplies a solution in $(u,v)$. For $t>0$, continuity at $1$ supplies $u>1$ with $I(u)<t$, and step 1.3 supplies $v>u$ with $I(v)>t$; F5 on $[u,v]$ again supplies a solution. The strict monotonicity in step 1.1 makes the solution unique on each branch. Thus the branch ranges are exactly $(0,1)$ and $(0,\infty)$, and for $0<t<1$ there are exactly two positive solutions, since $I(1)=0$. [F2, F5, F13, F14, step 1.1, step 1.2, step 1.3, choose] ∎
