---
title: Four-level high-fidelity checking time
status: published
research_item: pthm-qec-distinguishability-four-check-scaling
dependency_level: 7
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 3, Eq. (8) and surrounding discussion
      statement: In the high-fidelity short-time regime the article gives the
        cube-root checking-time approximation and discusses its dependence on
        decay rate and degeneracy lifting, including formally infinite checking
        time when either vanishes.
      hypotheses: The article's ideal four-level model and transpose-recovery
        fidelity, with nonzero decay rate and splitting for the displayed
        approximation.
      reading_limits: The supplied extracted article text and frozen formulation were
        consulted for attribution. This citation is not used as proof; the
        argument uses the declared model and completed suppliers.
---

PDF p. 3: ` Eq. (8) `

## Prerequisites

- [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)
- [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)
- [def-qec-distinguishability-checking-time](item-def-qec-distinguishability-checking-time)
- [pthm-qec-distinguishability-four-transpose-cubic](item-pthm-qec-distinguishability-four-transpose-cubic)
- [pthm-qec-distinguishability-four-transpose-exact](item-pthm-qec-distinguishability-four-transpose-exact)
- [lem-qec-prereq-first-crossing-asymptotics](item-lem-qec-prereq-first-crossing-asymptotics)
- [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)
- [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws)
- [math:thm-real-power-continuity-and-derivatives](https://alphabetamath.cc/item/thm-real-power-continuity-and-derivatives)
- [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative)


## Statement

Assume the postulated four-level model with decay rate $\gamma\geq0$, real degeneracy-lifting parameter $\Delta$, code $\operatorname{span}\{|0\rangle,|1\rangle\}$, and its support-completed transpose recovery at each elapsed time. Let $F_{\rm tr}(t)$ be the recovered entanglement fidelity at the maximally mixed logical input, and define the checking time $\tau(F_0)=\inf\{t\geq0:F_{\rm tr}(t)<F_0\}$, with $\inf\varnothing=+\infty$.

For fixed parameters with $\gamma\Delta^2>0$, as $F_0\uparrow1$ through values below $1$,

$$\tau(F_0)\sim\left[\frac{24(1-F_0)}{\gamma\Delta^2}\right]^{1/3}.$$

The symbol $\sim$ means that the ratio of the two sides tends to $1$. For fixed $F_0<1$, the displayed leading approximation decreases as $\gamma$ or $|\Delta|$ increases while the other is positive. This comparison is of leading approximations at fixed parameters; it does not assert global monotonicity of the exact checking time. If $\gamma=0$ or $\Delta=0$, then $F_{\rm tr}(t)=1$ for every $t\geq0$, and $\tau(F_0)=+\infty$ for every $F_0\in(0,1]$.

## Statement references

[post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)

[def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)

[def-qec-distinguishability-checking-time](item-def-qec-distinguishability-checking-time)

[pthm-qec-distinguishability-four-transpose-cubic](item-pthm-qec-distinguishability-four-transpose-cubic)

[pthm-qec-distinguishability-four-transpose-exact](item-pthm-qec-distinguishability-four-transpose-exact)

[math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws)

[math:thm-real-power-continuity-and-derivatives](https://alphabetamath.cc/item/thm-real-power-continuity-and-derivatives)

[math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative)

## Facts & Assumptions

[F1] The model specifies a finite four-level channel with $\gamma\geq0$, real $\Delta$, the stated code, and the transpose recovery is applied to that channel and code. [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model) [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)

[F2] The checking time is the infimum of the strict fidelity-crossing set, with value $+\infty$ when that set is empty. [def-qec-distinguishability-checking-time](item-def-qec-distinguishability-checking-time)

[F3] At fixed model parameters, $F_{\rm tr}(t)=1-\gamma\Delta^2t^3/24+O(t^4)$ as $t\downarrow0$, where the remainder is bounded in absolute value by a parameter-dependent constant times $t^4$ near zero. [pthm-qec-distinguishability-four-transpose-cubic](item-pthm-qec-distinguishability-four-transpose-cubic)

[F4] If $\gamma t>0$, put $p=1-e^{-\gamma t}$ and $\chi=\gamma(e^{i\Delta t}-e^{-\gamma t})/[(\gamma+i\Delta)p]$. Then $F_{\rm tr}=1-p(1-|\chi|^2)/2$. If $\gamma t=0$, the fidelity is $1$, and the formula has limit $1$ as $\gamma t\to0$. [pthm-qec-distinguishability-four-transpose-exact](item-pthm-qec-distinguishability-four-transpose-exact)

[F5] If a continuous $F:[0,\infty)\to\mathbb R$ satisfies $F(0)=1$ and $1-F(t)=at^p+O(t^{p+1})$ for fixed $a,p>0$, its strict first-crossing time at $1-\epsilon$ is asymptotic to $(\epsilon/a)^{1/p}$ as $\epsilon\downarrow0$. [lem-qec-prereq-first-crossing-asymptotics](item-lem-qec-prereq-first-crossing-asymptotics)

[F6] For a bounded complex operator $A$, the exponential $e^{tA}$ is continuous in $t$ in operator norm. In particular this applies to scalar complex exponentials. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F7] For positive bases and real exponents, the product, quotient and iterated-power laws hold: $(ab)^r=a^rb^r$, $(a/b)^r=a^r/b^r$ and $(a^r)^s=a^{rs}$. [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws)

[F8] For every real $\alpha$, the function $x\mapsto x^\alpha$ is continuous and differentiable on $(0,\infty)$, with derivative $\alpha x^{\alpha-1}$. [math:thm-real-power-continuity-and-derivatives](https://alphabetamath.cc/item/thm-real-power-continuity-and-derivatives)

[F9] A real function continuous on an interval and differentiable at every interior point is strictly decreasing there if its derivative is strictly negative throughout the interior. [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative)

## Proof

**Given:** The fixed model parameters, code, recovery and target described in the statement.

**Goal:** Establish the first-crossing asymptotic, its leading parameter dependence, and the zero-parameter cases.

1.1 If $\gamma>0$, the exponentials in [F4] are continuous by [F6]. For $t>0$, $p>0$ and $\gamma+i\Delta\ne0$, so the displayed algebraic expression is continuous there. Its value at zero is $1$ and its right limit is $1$ by [F4]. If $\gamma=0$, [F4] gives the constant function $1$. Thus $F_{\rm tr}$ is continuous on $[0,\infty)$ and $F_{\rm tr}(0)=1$. [given, F4, F6, algebra]

2.1 Suppose $\gamma\Delta^2>0$ and put $a=\gamma\Delta^2/24$ and $\epsilon=1-F_0$. By [F3], $1-F_{\rm tr}(t)=at^3+O(t^4)$ with $a>0$. Applying [F5] to the continuous function from step 1.1 and the crossing convention in [F2] yields $\tau(1-\epsilon)\sim(\epsilon/a)^{1/3}$ as $\epsilon\downarrow0$, which is the displayed formula. [given, F2, F3, F5, step 1.1, algebra]

3.1 For fixed $\epsilon>0$, put $d=|\Delta|>0$. By [F7], the leading approximation from step 2.1 is $(24\epsilon/(\gamma d^2))^{1/3}=(24\epsilon)^{1/3}\gamma^{-1/3}d^{-2/3}$ for $\gamma,d>0$. By [F8], $x\mapsto x^{-1/3}$ and $x\mapsto x^{-2/3}$ are continuous and differentiable on $(0,\infty)$ with derivatives $-x^{-4/3}/3<0$ and $-2x^{-5/3}/3<0$, respectively. By [F9] both functions are strictly decreasing on that interval. Holding either parameter fixed leaves a positive constant times the corresponding strictly decreasing function, so the leading approximation strictly decreases as either positive $\gamma$ or positive $d$ increases. The asymptotic in step 2.1 is pointwise in the parameters, so this calculation makes no global monotonicity assertion about the exact crossing time. [given, F7, F8, F9, step 2.1, algebra]

4.1 If $\gamma=0$, [F4] gives $F_{\rm tr}=1$ at every time. If $\Delta=0$ and $\gamma>0$, then for $t>0$ the numerator of $\chi$ in [F4] is $\gamma(1-e^{-\gamma t})=\gamma p$, so $\chi=1$ and the same fidelity equals $1$; the value at $t=0$ is also $1$. For any $F_0\in(0,1]$ the strict crossing set is therefore empty, and [F2] gives $\tau(F_0)=+\infty$. [given, F2, F4, algebra] ∎
