---
title: Angular order and elementary inverse-trigonometric bounds
status: draft
research_item: prop-expander-prereq-ordered-angle-inequalities
dependency_level: 0
---

## Prerequisites

- [math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges)
- [math:thm-sine-cosine-zero-sets-and-fundamental-period](https://alphabetamath.cc/item/thm-sine-cosine-zero-sets-and-fundamental-period)
- [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)
- [math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine)
- [math:thm-principal-inverse-sine-and-cosine-derivatives](https://alphabetamath.cc/item/thm-principal-inverse-sine-and-cosine-derivatives)
- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)
- [math:cor-mean-value-theorem](https://alphabetamath.cc/item/cor-mean-value-theorem)
- [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)
- [math:thm-of-square-roots](https://alphabetamath.cc/item/thm-of-square-roots)


## Statement

Cosine is strictly decreasing on $[0,\pi]$, and sine is nonnegative there. The principal inverse sine $\arcsin:[-1,1]\to[-\pi/2,\pi/2]$ maps $[0,1]$ into $[0,\pi/2]$. For $0\le x\le1$, $\arcsin x\le\pi x/2$, with equality precisely at $x=0$ and $x=1$. For $0\le x\le1/4$, $\arcsin x\le1.05x$, with equality precisely at $x=0$. Here $\log$ denotes the natural logarithm. For $x\ge0$, $\log(1+x)\ge2x/(2+x)$, with equality precisely at $x=0$.

## Facts & Assumptions

[F1] Sine is strictly increasing on $[-\pi/2,\pi/2]$ and strictly decreasing on $[\pi/2,3\pi/2]$; cosine is strictly decreasing on $[0,\pi]$. Also $\sin0=\sin\pi=0$ and $\sin(\pi/2)=1$ ([math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges), [math:thm-sine-cosine-zero-sets-and-fundamental-period](https://alphabetamath.cc/item/thm-sine-cosine-zero-sets-and-fundamental-period), [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)).

[F2] The principal inverse sine is the continuous inverse of sine restricted to $[-\pi/2,\pi/2]$, and its derivative at $-1<y<1$ is $1/\sqrt{1-y^2}$ ([math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine), [math:thm-principal-inverse-sine-and-cosine-derivatives](https://alphabetamath.cc/item/thm-principal-inverse-sine-and-cosine-derivatives)).

[F3] The natural logarithm is the inverse of the real exponential on positive arguments; it is continuous there, has value $0$ at $1$, and has derivative $1/t$ at $t>0$ ([math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm), [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)).

[F4] The mean value theorem applies to a function continuous on a closed interval and differentiable in its interior. The usual sum, quotient and chain rules apply where their denominators are nonzero; every nonnegative real has a unique nonnegative square root ([math:cor-mean-value-theorem](https://alphabetamath.cc/item/cor-mean-value-theorem), [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules), [math:thm-of-square-roots](https://alphabetamath.cc/item/thm-of-square-roots)).

## Proof

**Given:** The real variables in the intervals stated above.

**Goal:** Establish the stated order, bounds and equality cases.

1.1 The cosine assertion is immediate from [F1]. On $[0,\pi/2]$ sine increases from $0$ to $1$, and on $[\pi/2,\pi]$ it decreases from $1$ to $0$, so it is nonnegative on the whole interval. By the inverse definition and these endpoint values, $\arcsin0=0$, $\arcsin1=\pi/2$, and $\arcsin$ maps $[0,1]$ into $[0,\pi/2]$. [F1, F2]

2.1 Put $f(t)=\arcsin t$. Its derivative $f'(t)=1/\sqrt{1-t^2}$ is strictly increasing on $[0,1)$: for $0\le s<t<1$, the positive square roots satisfy $\sqrt{1-s^2}>\sqrt{1-t^2}$. For $0<x<1$, apply the mean value theorem on $[0,x]$ and $[x,1]$. The resulting interior points $a<x<b$ give $f(x)/x=f'(a)<f'(b)=(f(1)-f(x))/(1-x)$, and hence $f(x)<x f(1)=\pi x/2$. Equality holds at both endpoints by step 1.1. [F2, F4, step 1.1, algebra]

2.2 If $0<x\le1/4$, the mean value theorem on $[0,x]$ gives $f(x)=x/\sqrt{1-c^2}$ for some $0<c<x$. Thus $f(x)\le4x/\sqrt{15}<21x/20=1.05x$: the strict numerical comparison follows by squaring the positive sides, since $1600<1653$. At $x=0$ equality holds. [F2, F4, step 1.1, algebra]

3.1 Let $g(x)=\log(1+x)-2x/(2+x)$ for $x\ge0$. It is continuous on every closed interval $[0,x]$, differentiable inside, and $g(0)=0$. The derivative rules give $g'(t)=1/(1+t)-4/(2+t)^2=t^2/((1+t)(2+t)^2)$ for $t>0$. This derivative is positive, so the mean value theorem gives $g(x)>0$ for $x>0$; at $x=0$ it is zero. These results establish all the claims. [F3, F4, step 1.1, step 2.1, step 2.2, algebra] ∎
