---
title: A bounded endpoint selector yields small nonlinear exact steering
status: draft
research_item: lem-se-endpoint-feedback-contraction
dependency_level: 2
---

## Prerequisites

- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [def-se-foundation-control-language](item-def-se-foundation-control-language)
- [lem-se-endpoint-control-factorization](item-lem-se-endpoint-control-factorization)
- [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)
- [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)
- [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)
- [math:def-real-power](https://alphabetamath.cc/item/def-real-power)
- [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)
- [math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm)
- [math:lem-composition-operator-norm-inequality](https://alphabetamath.cc/item/lem-composition-operator-norm-inequality)


## Statement

Assume the Axiom of Choice and fix $T>0$. Let $E$, $U$ and $X$ be real Banach spaces, meaning complete real normed vector spaces. Write $C_T(E)=C([0,T];E)$ for norm-continuous paths with the supremum norm, and similarly for $U$. Suppose $X$ is continuously embedded in $C_T(E)$, with $\sup_{0\le t\le T}\|v(t)\|_E\le e\|v\|_X$ for some $e\ge0$. Let $A:E\to X$ and $D_c:C_T(U)\to X$ be bounded real-linear maps. The associated controlled linear solution is $Ax+D_ch$; the same maps are used throughout this statement. Suppose a bounded real-linear selector $G:E\times E\to C_T(U)$ satisfies $\|G(x,y)\|_{C_T(U)}\le g(\|x\|_E+\|y\|_E)$ and that $Ax+D_cG(x,y)$ has initial value $x$ and terminal value $y$ for every $x,y\in E$.

Let $m\in\mathbb R$ satisfy $m>1$, and let $C\ge0$. Powers of nonnegative norms use $0^\alpha=0$ for real $\alpha>0$. Suppose $N:X\to X$ satisfies $N(0)=0$, $N(v)(0)=0$ for every $v\in X$, $\|N(v)\|_X\le C(\|v\|_X^2+\|v\|_X^m)$, and $\|N(v)-N(u)\|_X\le C(\|u\|_X+\|v\|_X+\|u\|_X^{m-1}+\|v\|_X^{m-1})\|v-u\|_X$ for all $u,v\in X$. For endpoints $x_0,x_T\in E$, define $h_v=G(x_0,x_T-N(v)(T))$ and $\mathcal T(v)=Ax_0+N(v)+D_ch_v$.

There are $r>0$ and $\delta>0$, depending only on the displayed constants and maps for the fixed time interval, such that whenever $\|x_0\|_E+\|x_T\|_E\le\delta$, the map $\mathcal T$ takes the closed radius-$r$ ball of $X$ into itself and is a contraction there with constant at most $1/2$. Its unique fixed point in that ball has initial value $x_0$ and terminal value $x_T$. Its selected control is $h_v\in C_T(U)$. No uniqueness outside that ball is asserted.

## Statement references

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[def-se-foundation-control-language](item-def-se-foundation-control-language)

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[lem-se-endpoint-control-factorization](item-lem-se-endpoint-control-factorization)

[math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)

[math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)

[math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)

[math:def-real-power](https://alphabetamath.cc/item/def-real-power)

## Facts & Assumptions

[F1] A Banach space is complete in its norm metric. The continuous-path notation and supremum norm are as in [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces); that definition assumes countable choice, available under [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[F2] A bounded endpoint-to-control selector is a bounded linear map for the sum norm on endpoint pairs and is required separately to steer the specified linear evolution. The continuous-control construction of [lem-se-endpoint-control-factorization](item-lem-se-endpoint-control-factorization) supplies such a selector when its own real-Hilbert, evolution, observation and continuous-lift hypotheses hold and the present solution maps satisfy $(Ax)(0)=x$, $(D_ch)(0)=0$, $(Ax)(T)=W(T,0)x$ and $(D_ch)(T)=Lh$ for every $x\in E$ and $h\in C_T(U)$. Here $W$ and $L$ are that supplier's evolution and endpoint operator, with $L$ acting on continuous controls through their $L^2$ classes. Its identity $W(T,0)x+LG(x,y)=y$ then gives the required terminal trace, while the first two trace identities give the initial trace. [def-se-foundation-control-language](item-def-se-foundation-control-language)

[F3] A contraction of a nonempty complete metric space into itself has a unique fixed point in that space. [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)

[F4] Bounded linear operators and their least bounds have the meanings in [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator) and [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm). In particular $\|Av\|\le\|A\|\|v\|$ and $\|D_ch\|\le\|D_c\|\|h\|$ in the appropriate norms.

[F5] Real powers use the positive-base exponential definition and the zero-base positive-exponent convention of [math:def-real-power](https://alphabetamath.cc/item/def-real-power). The exponent and iterated-power identities are supplied by [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws). The logarithm is strictly increasing with $\log1=0$ by [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), and the exponential is strictly increasing by [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing). Thus positive powers preserve order on nonnegative bases, including zero by the convention.

## Proof

[F1] A Banach space is complete in its norm metric. The continuous-path notation and supremum norm are as in [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces); that definition assumes countable choice, available under [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[F2] A bounded endpoint-to-control selector is a bounded linear map for the sum norm on endpoint pairs and is required separately to steer the specified linear evolution. The continuous-control construction of [lem-se-endpoint-control-factorization](item-lem-se-endpoint-control-factorization) supplies such a selector when its own real-Hilbert, evolution, observation and continuous-lift hypotheses hold and the present solution maps satisfy $(Ax)(0)=x$, $(D_ch)(0)=0$, $(Ax)(T)=W(T,0)x$ and $(D_ch)(T)=Lh$ for every $x\in E$ and $h\in C_T(U)$. Here $W$ and $L$ are that supplier's evolution and endpoint operator, with $L$ acting on continuous controls through their $L^2$ classes. Its identity $W(T,0)x+LG(x,y)=y$ then gives the required terminal trace, while the first two trace identities give the initial trace. [def-se-foundation-control-language](item-def-se-foundation-control-language)

[F3] A contraction of a nonempty complete metric space into itself has a unique fixed point in that space. [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)

[F4] Bounded linear operators and their least bounds have the meanings in [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator) and [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm). In particular $\|Av\|\le\|A\|\|v\|$ and $\|D_ch\|\le\|D_c\|\|h\|$ in the appropriate norms.

[F5] Real powers use the positive-base exponential definition and the zero-base positive-exponent convention of [math:def-real-power](https://alphabetamath.cc/item/def-real-power). The exponent and iterated-power identities are supplied by [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws). The logarithm is strictly increasing with $\log1=0$ by [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), and the exponential is strictly increasing by [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing). Thus positive powers preserve order on nonnegative bases, including zero by the convention.



**Given:** The spaces, maps, selector, endpoint identities and nonlinear estimates in the statement, under Choice.

**Goal:** Construct a closed invariant ball on which the feedback is a strict contraction, and verify the fixed point's endpoints.

1.1 Replace the displayed selector bound $g$ by $\max\{g,0\}$; this is still a valid bound because $\|x\|_E+\|y\|_E\ge0$. Henceforth $g\ge0$ denotes this bound. Set $d=\|D_c\|$, $P=1+\|A\|+dg$, and $K=1+dge$, so $P\ge1$ and $K\ge1$. For $a=\|x_0\|_E+\|x_T\|_E$, the selector bound, the terminal evaluation bound and the nonlinear size estimate give $\|\mathcal T(v)\|_X\le Pa+KC(\|v\|_X^2+\|v\|_X^m)$. Indeed, the control term is bounded by $dg(a+e\|N(v)\|_X)$, and the remaining terms are bounded by $\|A\|\|x_0\|_E+\|N(v)\|_X$. [given, F1, F2, F4]

1.2 Real-linearity of $G$ and $D_c$ gives $h_v-h_u=-G(0,N(v)(T)-N(u)(T))$. Therefore $\|\mathcal T(v)-\mathcal T(u)\|_X\le K\|N(v)-N(u)\|_X$. This uses the same selector and controlled solution map as in the endpoint hypothesis. [given, F1, F2, F4]

2.1 Put $\eta=(8K(C+1))^{-1}$ and choose $r=\min\{1,\eta,\eta^{1/(m-1)}\}>0$. By [F5], $r\le\eta$ and $r^{m-1}\le\eta$, hence $2KC(r+r^{m-1})\le4KC\eta\le1/2$. Let $\delta=r/(2P)>0$. If $a\le\delta$ and $\|v\|_X\le r$, then $Pa\le r/2$ and $KC(r^2+r^m)\le r/4$, so step 1.1 gives $\|\mathcal T(v)\|_X\le3r/4\le r$. If $u$ and $v$ both lie in the radius-$r$ ball, step 1.2 and the difference estimate give $\|\mathcal T(v)-\mathcal T(u)\|_X\le2KC(r+r^{m-1})\|v-u\|_X\le\frac12\|v-u\|_X$. [given, F5, step 1.1, step 1.2, choose]

3.1 The radius-$r$ ball is nonempty because it contains zero. It is complete: a Cauchy sequence in the ball converges in $X$ by completeness, and the norm inequality $\|v\|_X\le\|v-v_n\|_X+\|v_n\|_X$ keeps its limit in the ball. By step 2.1 and the fixed-point theorem, $\mathcal T$ has exactly one fixed point $v$ in this ball. [F1, F3, step 2.1]

4.1 Put $y=x_T-N(v)(T)$. By the selector hypothesis, $Ax_0+D_cG(x_0,y)$ starts at $x_0$ and ends at $y$. Since $v=Ax_0+D_cG(x_0,y)+N(v)$ and $N(v)(0)=0$, evaluation gives $v(0)=x_0$ and $v(T)=y+N(v)(T)=x_T$. The control $h_v=G(x_0,y)$ belongs to $C_T(U)$ by the stated codomain. Thus the fixed point and its control have the asserted properties, with uniqueness only in the chosen ball. [given, F2, step 3.1] ∎

## Remarks

The argument also applies to complex Banach spaces regarded as real spaces, provided all maps satisfy the stated real-linear hypotheses. By [math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm), realification preserves the norm and its metric; consequently the Cauchy sequences and their limits are unchanged, so completeness is preserved. In an evolution with a bounded real-linear forcing map $D:L^1(0,T;E)\to X$ and a bounded real-linear control-to-forcing map $B:C_T(U)\to L^1(0,T;E)$, one may take $D_c=DB$ after verifying the endpoint identity for that same composition. The composition is bounded and real-linear, with $\|DB\|\le\|D\|\|B\|$, by [math:lem-composition-operator-norm-inequality](https://alphabetamath.cc/item/lem-composition-operator-norm-inequality). For a real-linear Schrödinger evolution, any factor $-i$ belongs in $B$; no commutation with the evolution is used.
