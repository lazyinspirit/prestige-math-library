---
title: Logarithmic tangent bound and a quadratic entropy envelope
status: published
research_item: lem-author-2bcd11f9e275-logarithmic-tangent-bound
dependency_level: 0
---

## Prerequisites

- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)
- [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative)
- [math:thm-algebra-of-derivatives](https://alphabetamath.cc/item/thm-algebra-of-derivatives)
- [math:lem-derivative-of-a-power](https://alphabetamath.cc/item/lem-derivative-of-a-power)
- [math:cor-differentiable-implies-continuous](https://alphabetamath.cc/item/cor-differentiable-implies-continuous)


## Statement

For $a>0$, $\log a\le a-1$, with equality only at $a=1$. Put $I(a)=a\log a-a+1$. For $0<a<1$, $0<I(a)<(1-a)^2$ and $I(a)<1-a<-\log a$. For $1<a<e$, $I(a)<\log a$, where $e$ denotes the unique positive number with $\log e=1$.

## Facts & Assumptions

**Given:** The variables and hypotheses of the Statement.

[F1] [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws) gives the order, range and continuity of $\log$, including $\log 1=0$.

[F2] [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral) gives $(\log a)\prime=1/a$.

[F3] [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative) converts a derivative sign on an interval into monotonicity.

[F4] [math:thm-algebra-of-derivatives](https://alphabetamath.cc/item/thm-algebra-of-derivatives) gives differentiability and the sum, scalar-multiple and product rules for differentiable functions on a common domain at a limit point of that domain.

[F5] [math:lem-derivative-of-a-power](https://alphabetamath.cc/item/lem-derivative-of-a-power), with exponents $0$ and $1$, gives the derivatives $0$ and $1$ of the constant function $1$ and the identity function, respectively.

[F6] [math:cor-differentiable-implies-continuous](https://alphabetamath.cc/item/cor-differentiable-implies-continuous) gives continuity at every point where a function is differentiable and that point is a limit point of its domain.

## Proof

**Goal:** Establish the full Statement.

1.1 On $(0,\infty)$ every point is a limit point of the domain. By F2, F4 and F5, the function $q(a)=a-1-\log a$ is differentiable with $q\prime(a)=1-0-1/a=1-1/a$, and F6 makes it continuous there. Its derivative is negative for $0<a<1$ and positive for $a>1$, and $q(1)=0$. Applying F3 on $(0,1]$ and $[1,\infty)$ therefore gives $q(a)>q(1)=0$ for $a\ne1$. Thus $\log a\le a-1$, with equality exactly at $a=1$. The number $e$ exists uniquely by the range and strict increase of $\log$, and $e>1$ since $\log 1=0<1$. [F1, F2, F3, F4, F5, F6, algebra]

2.1 By F2, F4 and F5, the function $I(a)=a\log a-a+1$ is differentiable on $(0,\infty)$, with $I\prime(a)=\log a+a(1/a)-1+0=\log a$, and F6 makes it continuous there. Since $\log a<0$ on $(0,1)$, F3 on $(0,1]$ gives strict decrease and hence $I(a)>I(1)=0$ for $0<a<1$. In this range, $(1-a)^2-I(a)=a(a-1-\log a)>0$ by step 1.1, while $I(a)=a\log a+1-a<1-a$ and step 1.1 gives $1-a<-\log a$. For $1<a<e$, strict increase of $\log$ gives $0<\log a<1$, so $\log a-I(a)=(a-1)(1-\log a)>0$. These are all asserted bounds. [F1, F2, F3, F4, F5, F6, step 1.1, algebra] ∎
