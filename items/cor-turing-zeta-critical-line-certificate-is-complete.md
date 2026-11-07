---
id: cor-turing-zeta-critical-line-certificate-is-complete
kind: corollary
title: "A matching Turing count certifies the Riemann hypothesis on a bounded interval"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - alg-turing-method-for-rigorous-zero-counts
  - alg-interval-arithmetic-for-l-function-zero-counts
  - thm-turing-zero-count-certificate-is-sound
  - def-countable-choice
  - def-riemann-xi-function
  - thm-completed-riemann-zeta-functional-equation
  - def-euler-gamma-function
  - thm-euler-gamma-function-is-holomorphic
  - cor-gamma-function-has-no-zeros
  - lem-index-of-graph-bounded-region-boundary
  - thm-intermediate-value
  - thm-riemann-zeta-meromorphic-continuation
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-taylor-expansion-holomorphic-function
  - def-complex-analytic-function
  - thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition
  - thm-complex-analytic-functions-are-holomorphic
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - prop-algebra-of-holomorphic-functions-in-several-variables
  - lem-nonvanishing-holomorphic-factor-preserves-zero-order
  - def-order-of-zero-holomorphic-function
proof_strategy: direct
sources:
  references:
    - title: "David J. Platt, Isolating some non-trivial zeros of zeta, §4.1"
      url: "https://community.ams.org/journals/mcom/2017-86-307/S0025-5718-2017-03198-7/S0025-5718-2017-03198-7.pdf"
    - title: "Nickolas Andersen, Analytic Number Theory, §11.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

Assume Countable Choice. Let $0\le T_0<T_1$ be rational, let $R=\{s\in\mathbb C:0\le\operatorname{Re}s\le1,\ T_0\le\operatorname{Im}s\le T_1\}$, and orient its boundary positively. Suppose an accepted interval certificate counts $n$ zeros of the Riemann xi function in $R$, counted with multiplicity. Suppose also that there are $n$ pairwise-disjoint rational intervals $(a_j,b_j)\subset(T_0,T_1)$ such that interval enclosures certify that the real-valued function $t\mapsto\xi(\tfrac12+it)$ has opposite nonzero signs at $a_j$ and $b_j$ for every $j$. Then every zero $\rho$ of the Riemann zeta function with $0<\operatorname{Re}\rho<1$ and $T_0<\operatorname{Im}\rho<T_1$ satisfies $\operatorname{Re}\rho=\tfrac12$, and each such zero has order one (is simple).

## Statement references

[David J. Platt, *Isolating some non-trivial zeros of zeta*, §4.1](https://community.ams.org/journals/mcom/2017-86-307/S0025-5718-2017-03198-7/S0025-5718-2017-03198-7.pdf)

[Nickolas Andersen, *Analytic Number Theory*, §11.2](https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the stated rational rectangle, an accepted argument-principle certificate for $\xi$ with output $n$, and $n$ pairwise-disjoint endpoint-sign intervals inside $(T_0,T_1)$.

[A1] Countable Choice is the axiom that every sequence of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[alg-interval-arithmetic-for-l-function-zero-counts]]: a valid Taylor certificate returns rational rectangles containing the holomorphic function and its derivative on every target rectangle.

[F2] [[thm-turing-zero-count-certificate-is-sound]]: a valid accepted certificate returns the weighted zero count about its admissible boundary cycle.

[F3] [[def-riemann-xi-function]]: under Countable Choice, $\xi(s)=\tfrac12s(s-1)\Lambda(s)=\tfrac12s(s-1)\pi^{-s/2}\Gamma(s/2)\zeta(s)$ is entire.

[F4] [[thm-completed-riemann-zeta-functional-equation]]: $\Lambda(s)=\Lambda(1-s)$, and the global integral formula for $\Lambda$ has real kernel $\theta(t)-1$ for $t\ge1$, where $\theta(t)=\sum_{m\in\mathbb Z}e^{-\pi m^2t}$.

[F5] [[thm-euler-gamma-function-is-holomorphic]]: $\Gamma(z)$ is holomorphic for $\operatorname{Re}z>0$.

[F6] [[cor-gamma-function-has-no-zeros]]: $\Gamma(z)\ne0$ for every $z\in\mathbb C$.

[F7] [[lem-index-of-graph-bounded-region-boundary]]: the positively oriented boundary of a graph-bounded region has index $1$ at every interior point and $0$ at every exterior point.

[F8] [[thm-intermediate-value]]: a continuous real-valued function on a closed real interval takes every value between its endpoint values.

[F9] [[thm-riemann-zeta-meromorphic-continuation]]: under Countable Choice, the Riemann zeta function is meromorphic on $\mathbb C$ and holomorphic away from its only pole at $1$.

[F10] [[def-complex-logarithms-principal-logarithm-and-complex-powers]]: for the positive real base $\pi$, the principal-power convention is $\pi^{-s/2}=\exp(-s\log\pi/2)$.

[F11] [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-taylor-expansion-holomorphic-function]], [[def-complex-analytic-function]], [[thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition]], [[thm-complex-analytic-functions-are-holomorphic]]: the exponential is analytic, an affine function is analytic by its degree-one Taylor polynomial, analytic composition preserves analyticity, and analytic functions are holomorphic. In particular $s\mapsto\pi^{-s/2}$ is holomorphic.

[F12] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $|\exp(x+iy)|=e^x>0$ for real $x,y$, so the exponential never vanishes.

[F13] [[prop-algebra-of-holomorphic-functions-in-several-variables]]: a finite product of holomorphic functions on an open set is holomorphic.

[F14] [[lem-nonvanishing-holomorphic-factor-preserves-zero-order]]: if $g$ is holomorphic and $g(a)\ne0$, then $\operatorname{ord}_a(fg)=\operatorname{ord}_a(f)$.

[F15] [[def-order-of-zero-holomorphic-function]]: the order is the least nonzero Taylor-coefficient index; order one means a simple zero.

## Proof

1.1 By [A1] and [F3], $\xi$ is entire and hence continuous. The real theta kernel in [F4] gives $\overline{\Lambda(s)}=\Lambda(\overline s)$, while [F4] also gives $\Lambda(s)=\Lambda(1-s)$. If $s=\tfrac12+it$, then $\overline{s}=1-s$, and the factor $s(s-1)$ is unchanged by replacing $s$ with $1-s$. Thus $\overline{\xi(s)}=\xi(s)$, so $t\mapsto\xi(\tfrac12+it)$ is real-valued. [A1, F3, F4]

1.2 On the open critical strip, $s$ and $s-1$ are nonzero. By [F10]–[F12], $s\mapsto\pi^{-s/2}$ is holomorphic and nowhere zero; [F5]–[F6] give the same properties for $s\mapsto\Gamma(s/2)$. Thus $g(s):=\tfrac12s(s-1)\pi^{-s/2}\Gamma(s/2)$ is holomorphic and nowhere zero there by [F13]. [F5, F6, F10, F11, F12, F13, algebra]

2.1 The endpoint enclosures in [F1] contain the actual real values and certify opposite nonzero signs. Apply [F8] to the continuous real-valued function from step 1.1 on each closed interval $[a_j,b_j]$ with target value $0$. It gives $c_j\in[a_j,b_j]$ with $\xi(\tfrac12+ic_j)=0$; the nonzero endpoint values force $a_j<c_j<b_j$. Pairwise disjointness makes these $n$ distinct zeros in the interior of $R$. [given, F1, F8, step 1.1, choose]

2.2 By [F9], $\zeta$ is holomorphic throughout the open critical strip. The defining product in [F3] is $\xi=g\zeta$ there, so [F14] gives $\operatorname{ord}_s(\xi)=\operatorname{ord}_s(\zeta)$ for every $s$ in the strip; in particular their zeros coincide with the same multiplicities. [F3, F9, F14, step 1.2]

3.1 By [F2], the total weighted zero count of $\xi$ in $R$ is $n$; [F7] identifies it with the ordinary total multiplicity in the rectangle. The $n$ distinct line zeros from step 2.1 already contribute at least $n$. Hence they are all the zeros in $R$, each has order one, and there are no off-line zeros there. Step 2.2 transfers this conclusion, with multiplicity, to every zeta zero in the stated open critical strip and height interval. [F2, F7, F15, step 2.1, step 2.2] ∎
