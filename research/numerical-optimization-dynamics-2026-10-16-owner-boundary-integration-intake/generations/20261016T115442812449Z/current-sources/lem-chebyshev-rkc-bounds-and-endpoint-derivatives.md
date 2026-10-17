---
id: lem-chebyshev-rkc-bounds-and-endpoint-derivatives
kind: lemma
title: "Chebyshev bounds and endpoint derivatives used by stabilized Runge–Kutta methods"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-canonical-natural
  - def-chebyshev-polynomials-first-and-second-kind
  - def-higher-derivatives-and-smoothness
  - def-integer-power
  - def-polynomial-evaluation-and-root
  - lem-chebyshev-degree-leading-coefficients-and-extreme-values
  - lem-derivative-of-a-power
  - lem-of-triangle-inequality
  - thm-algebra-of-derivatives
  - thm-chebyshev-multiple-angle-identities
  - thm-induction-principle
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-sine-cosine-zero-sets-and-fundamental-period
justified_by: []
aliases: []
forward_refs: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "B.P. Sommeijer, L.F. Shampine, and J.G. Verwer, RKC: An explicit solver for parabolic PDEs, Section 2"
      url: "https://ir.cwi.nl/pub/109/0109D.pdf"
    - title: "Ibrahim Almuslimani and Gilles Vilmart, Explicit Stabilized Integrators for Stiff Optimal Control Problems, Section 2.2"
      url: "https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf"
---

## Statement

Let $T_n$ and $U_n$ be the real evaluation functions of the Chebyshev polynomials defined by [[def-chebyshev-polynomials-first-and-second-kind]]. For every natural $n$,

$$|T_n(x)|\le 1,\qquad |U_n(x)|\le n+1\quad(-1\le x\le1),$$

and for $n\ge1$, $|T_n(x)|>1$ whenever $|x|>1$. Also,

$$T_n(1)=1,\quad T_n(-1)=(-1)^n,\quad U_n(1)=n+1,\quad U_n(-1)=(-1)^n(n+1).$$

For every natural $n\ge1$, $T_n$ has degree $n$ and leading coefficient $2^{n-1}$, while $U_n$ has degree $n$ and leading coefficient $2^n$. This degree and leading-coefficient assertion is exactly the content of [[lem-chebyshev-degree-leading-coefficients-and-extreme-values]]; that item does not assert an extremum bound.

The evaluation functions are twice differentiable at $1$, with

$$T_n'(1)=n^2,\qquad T_n''(1)=\frac{n^2(n^2-1)}{3}.$$

Here each natural number in a real formula denotes its canonical real image ([[def-canonical-natural]]), and powers use [[def-integer-power]].

## Facts & Assumptions

**Given:** A natural number $n$, the Chebyshev polynomial recurrences, and a real $x\in[-1,1]$ when an interval bound is used.

[F1] [[def-chebyshev-polynomials-first-and-second-kind]]: $T_0=1$, $T_1=X$, $T_{n+2}=2XT_{n+1}-T_n$; $U_0=1$, $U_1=2X$, and $U_{n+2}=2XU_{n+1}-U_n$.

[F2] [[thm-chebyshev-multiple-angle-identities]]: for real $\theta$, $T_n(\cos\theta)=\cos(n\theta)$ and $U_n(\cos\theta)\sin\theta=\sin((n+1)\theta)$.

[F3] [[thm-sine-cosine-signs-monotonicity-and-ranges]] and [[cor-trigonometric-parity-and-pythagorean-identity]]: every $x\in[-1,1]$ is $\cos\theta$ for some real $\theta$, and $|\sin\theta|,|\cos\theta|\le1$ for every real $\theta$.

[F4] [[thm-sine-cosine-zero-sets-and-fundamental-period]] and [[thm-quarter-turn-values-and-shift-formulas]]: if $\sin\theta=0$, then $\theta=m\pi$ for an integer $m$, and the cosine shift identities give $\cos\theta\in\{-1,1\}$.

[F5] [[thm-sine-and-cosine-addition-formulas]] and [[lem-of-triangle-inequality]]: $\sin((m+1)\theta)=\sin(m\theta)\cos\theta+\cos(m\theta)\sin\theta$, and $|a+b|\le|a|+|b|$.

[F6] [[lem-chebyshev-degree-leading-coefficients-and-extreme-values]]: for $n\ge1$, $T_n$ has degree $n$ and leading coefficient $2^{n-1}$, and $U_n$ has degree $n$ and leading coefficient $2^n$. This fact supplies degree only, not an extremum estimate.

[F7] [[def-higher-derivatives-and-smoothness]], [[def-polynomial-evaluation-and-root]], [[lem-derivative-of-a-power]], and [[thm-algebra-of-derivatives]]: iterated real derivatives are defined recursively; polynomial evaluation gives the functions $T_n(x)$; $X'=1$, $1'=0$, and sums and products of differentiable functions obey their derivative rules.

[F8] [[thm-induction-principle]]: a property true at $0$ and inherited by successors holds for every natural number.

## Proof

1.1 The recurrences [F1] give $T_n(1)=1$ and $T_n(-1)=(-1)^n$ by induction from $T_0,T_1$: the successor substitution is $2(-1)(-1)^{n+1}-(-1)^n=(-1)^{n+2}$. They give $U_n(1)=n+1$ and $U_n(-1)=(-1)^n(n+1)$, since the bases hold at $n=0,1$ and the successor substitutions are $2(n+2)-(n+1)=n+3$ and $-2(-1)^{n+1}(n+2)-(-1)^n(n+1)=(-1)^{n+2}(n+3)$. [F1, F8, induction, algebra]

1.2 Fix $\theta\in\mathbb R$. For $m=0$, $|\sin((m+1)\theta)|\le(m+1)|\sin\theta|$ is equality. If it holds at $m$, then [F5] and [F3] give $|\sin((m+2)\theta)|\le|\sin((m+1)\theta)|\,|\cos\theta|+|\cos((m+1)\theta)|\,|\sin\theta|\le(m+2)|\sin\theta|$. Induction [F8] proves this inequality for every natural $m$. [F3, F5, F8, base, ih, induction, algebra]

1.3 For $x>1$, induction in the recurrence [F1] gives $T_1(x)>T_0(x)=1$ and, whenever $T_{n+1}(x)>T_n(x)\ge1$, $T_{n+2}(x)-T_{n+1}(x)=(2x-1)T_{n+1}(x)-T_n(x)\ge2(x-1)T_{n+1}(x)>0.$ Thus $T_n(x)>1$ for every $n\ge1$. The recurrence also gives $T_n(-x)=(-1)^nT_n(x)$: the identity holds at $n=0,1$, and if it holds at $n,n+1$, then $T_{n+2}(-x)=2(-x)(-1)^{n+1}T_{n+1}(x)-(-1)^nT_n(x)=(-1)^{n+2}(2xT_{n+1}(x)-T_n(x))=(-1)^{n+2}T_{n+2}(x)$. Applying the positive case to $-x>1$ proves $|T_n(x)|>1$ when $x<-1$. [F1, F8, induction, algebra]

1.4 Each $T_n$ is twice differentiable as a real polynomial evaluation function: $T_0,T_1$ are, and if $T_n,T_{n+1}$ are twice differentiable, [F1] and [F7] make $T_{n+2}=2XT_{n+1}-T_n$ twice differentiable. Thus the derivative recurrences below are defined for every $n$. [F1, F7, F8, base, ih, induction]

2.1 Let $x\in[-1,1]$ and choose $\theta$ with $x=\cos\theta$ by [F3]. If $\sin\theta\ne0$, [F2] and step 1.2 give $|U_n(x)|=|\sin((n+1)\theta)|/|\sin\theta|\le n+1$. If $\sin\theta=0$, [F4] gives $x=\cos\theta\in\{-1,1\}$, so step 1.1 gives the same bound. Also [F2] and [F3] give $|T_n(x)|=|\cos(n\theta)|\le1$. [F2, F3, F4, step 1.1, step 1.2, choose, algebra]

2.2 Put $p_n:=T_n'(1)$. Differentiating [F1] once by [F7] and using $T_n(1)=1$ gives $p_0=0$, $p_1=1$, and $p_{n+2}=2+2p_{n+1}-p_n$. The values $p_n=n^2$ satisfy the bases and recurrence because $2+2(n+1)^2-n^2=(n+2)^2$; induction gives $T_n'(1)=n^2$. [F1, F7, F8, step 1.1, step 1.4, induction, algebra]

3.1 To supply the consecutive base indices needed by the recurrence, [F1] gives $T_0=U_0=1$, each of degree $0$ and leading coefficient $1$, and $T_1=X$, $U_1=2X$, of degree $1$ and leading coefficients $1$ and $2$. The recurrence at index $0$ gives $T_2=2X^2-1$ and $U_2=4X^2-1$, of degree $2$ and leading coefficients $2$ and $4$. Thus the formulas in [F6] hold at indices $1$ and $2$. Now suppose they hold at indices $n$ and $n+1$ for some $n\ge1$. In $T_{n+2}=2XT_{n+1}-T_n$, the first term has degree $n+2$ and leading coefficient $2\cdot2^n=2^{n+1}$, while the subtracted term has degree $n$; hence no leading-term cancellation occurs. In $U_{n+2}=2XU_{n+1}-U_n$, the first term has degree $n+2$ and leading coefficient $2\cdot2^{n+1}=2^{n+2}$, while the subtracted term has degree $n$. Induction starting with indices $1$ and $2$ gives the formulas for every index $n\ge1$, agreeing with [F6]. No extremum claim is taken from that source item; the interval inequalities in the Statement were proved in step 2.1. [F1, F6, base, induction, algebra, step 2.1]

4.1 Put $q_n:=T_n''(1)$. Differentiating [F1] twice by [F7] gives $q_0=q_1=0$ and $q_{n+2}=4p_{n+1}+2q_{n+1}-q_n$. The values $q_n=n^2(n^2-1)/3$ satisfy the bases and, using step 2.2, the recurrence since $4(n+1)^2+\frac{2(n+1)^2((n+1)^2-1)-n^2(n^2-1)}{3}=\frac{(n+2)^2((n+2)^2-1)}{3}.$ Induction proves the stated second-derivative formula. [F1, F7, F8, step 1.4, step 2.2, induction, discharge-induction, algebra] ∎
