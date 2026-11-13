---
title: Cubic and quintic time bounds from L4 Linfinity control
status: published
research_item: lem-se-power-time-integrability
dependency_level: 1
---

## Prerequisites

- [lem-se-complex-polynomial-energy-rule](item-lem-se-complex-polynomial-energy-rule)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)
- [math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces)
- [math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach)
- [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)
- [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)
- [math:thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions](https://alphabetamath.cc/item/thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions)
- [math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences](https://alphabetamath.cc/item/cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences)
- [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)
- [math:lem-schwartz-cutoffs-from-the-standard-smooth-step](https://alphabetamath.cc/item/lem-schwartz-cutoffs-from-the-standard-smooth-step)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, and $T>0$. Let $H^1(\Omega)=W^{1,2}(\Omega;\mathbb C)$ have its usual norm including the function and all first weak derivatives, and let $H^1_0(\Omega)$ be the closure of $C_c^\infty(\Omega;\mathbb C)$ in that norm. Put $X_T=C([0,T];H^1_0(\Omega))\cap L^4_tL^\infty_x$, with norm $\|v\|_{X_T}=\sup_{0\le t\le T}\|v(t)\|_{H^1}+\|v\|_{L^4_tL^\infty_x}$. Here the mixed space uses measurable spatial sections and the $L^4$ norm of their essential suprema; it does not require strong measurability into $L^\infty(\Omega)$. The continuous path and the mixed representative are required to agree as spatial almost-everywhere classes for almost every time.

For $m\in\{3,5\}$ and $\lambda\in\mathbb R$, define $g(z)=\lambda|z|^{m-1}z$. Then $t\mapsto g(v(t))$ is an element of $L^1(0,T;H^1_0(\Omega))$ for each $v\in X_T$, and there is a constant $C_m$ depending only on $m$ such that

$$\|g(v)\|_{L^1_tH^1_0}\le C_m|\lambda|T^{(5-m)/4}\|v\|_{X_T}^m.$$

For every $u,v\in X_T$,

$$\|g(v)-g(u)\|_{L^1_tH^1_0}\le C_m|\lambda|T^{(5-m)/4}(\|u\|_{X_T}^{m-1}+\|v\|_{X_T}^{m-1})\|v-u\|_{X_T}.$$

The exponent of $T$ is zero when $m=5$; no positive small-time power is asserted in that case.

## Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)

[math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

## Facts & Assumptions

**Given:** The Choice assumption, domain, time interval, exponents, functions and norms in the statement.

**Goal:** Prove strong measurability and time integrability of the nonlinear terms and both estimates.

[F1] For bounded $H^1$ functions, the polynomial rule gives $g(w)\in H^1$, preserves $H^1_0$, and supplies the pointwise-in-time growth and difference estimates displayed in [lem-se-complex-polynomial-energy-rule](item-lem-se-complex-polynomial-energy-rule).

[F2] A strongly measurable Banach-valued map is an almost-everywhere norm limit of measurable finite-range simple maps. Such a map is Bochner integrable exactly when its norm is integrable. Mixed time-space norms use measurable section norms and need not be Bochner norms into $L^\infty$ ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function), [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)).

[F3] Hölder's integral inequality holds for conjugate exponents, including the $1,\infty$ endpoints ([math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)).

[F4] A real globally Lipschitz map fixing zero acts on real $H^1$ functions by the weak chain rule. An $L^2$-convergent sequence has an almost-everywhere convergent subsequence, and dominated convergence applies to integrable scalar majorants ([math:thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions](https://alphabetamath.cc/item/thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions), [math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences](https://alphabetamath.cc/item/cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences), [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)).

[F5] A smooth compactly supported real cutoff exists that is one on $[-1,1]$. The $H^1$ norm and $H^1_0$ closure are as stated ([math:lem-schwartz-cutoffs-from-the-standard-smooth-step](https://alphabetamath.cc/item/lem-schwartz-cutoffs-from-the-standard-smooth-step), [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm), [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)). Full Choice supplies the choice hypotheses of these inputs ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F6] Under the stated Axiom of Choice, $W^{1,2}(\Omega;\mathbb C)$ with the stated Sobolev norm is Banach ([math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces), applied with $k=1$, $p=2$ and $\mathbb K=\mathbb C$). Every closed linear subspace of a Banach space, equipped with the restricted norm, is Banach ([math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach)).

## Proof

**Given:** The Choice assumption, domain, time interval, exponents, functions and norms in the statement.

**Goal:** Prove strong measurability and time integrability of the nonlinear terms and both estimates.

[F1] For bounded $H^1$ functions, the polynomial rule gives $g(w)\in H^1$, preserves $H^1_0$, and supplies the pointwise-in-time growth and difference estimates displayed in [lem-se-complex-polynomial-energy-rule](item-lem-se-complex-polynomial-energy-rule).

[F2] A strongly measurable Banach-valued map is an almost-everywhere norm limit of measurable finite-range simple maps. Such a map is Bochner integrable exactly when its norm is integrable. Mixed time-space norms use measurable section norms and need not be Bochner norms into $L^\infty$ ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function), [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)).

[F3] Hölder's integral inequality holds for conjugate exponents, including the $1,\infty$ endpoints ([math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)).

[F4] A real globally Lipschitz map fixing zero acts on real $H^1$ functions by the weak chain rule. An $L^2$-convergent sequence has an almost-everywhere convergent subsequence, and dominated convergence applies to integrable scalar majorants ([math:thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions](https://alphabetamath.cc/item/thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions), [math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences](https://alphabetamath.cc/item/cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences), [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)).

[F5] A smooth compactly supported real cutoff exists that is one on $[-1,1]$. The $H^1$ norm and $H^1_0$ closure are as stated ([math:lem-schwartz-cutoffs-from-the-standard-smooth-step](https://alphabetamath.cc/item/lem-schwartz-cutoffs-from-the-standard-smooth-step), [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm), [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)). Full Choice supplies the choice hypotheses of these inputs ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F6] Under the stated Axiom of Choice, $W^{1,2}(\Omega;\mathbb C)$ with the stated Sobolev norm is Banach ([math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces), applied with $k=1$, $p=2$ and $\mathbb K=\mathbb C$). Every closed linear subspace of a Banach space, equipped with the restricted norm, is Banach ([math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach)).



**Proof technique:** direct.

1.1 By [F6], $H^1(\Omega)=W^{1,2}(\Omega;\mathbb C)$ is Banach under the already assumed Axiom of Choice. The test functions form a complex linear subspace. Their norm closure $H^1_0(\Omega)$ is also linear: for $u,v$ in that closure and $a,b\in\mathbb C$, approximate $u,v$ by test functions with errors less than $\varepsilon/(1+|a|+|b|)$ and use the norm triangle inequality to approximate $au+bv$. The closure is closed: if $w$ is in its ambient closure, choose an element $u\in H^1_0$ within $\varepsilon/2$ of $w$, then a test function within $\varepsilon/2$ of $u$; hence $w$ itself belongs to the test-function closure. Its norm is the restriction of the $H^1$ norm, so the closed-subspace result in [F6] makes $H^1_0(\Omega)$ Banach. This verifies the target-space hypothesis of the time spaces and the Banach-valued inputs in [F2]. [F2, F5, F6, given, algebra]

1.2 Choose the cutoff $\chi$ in [F5] and set $T_R(s)=s\chi(s/R)$ for positive integers $R$. It is smooth, globally Lipschitz, fixes zero and agrees with $s$ on $[-R,R]$. Apply it to the real and imaginary parts of $w\in H^1_0$ and call the resulting complex function $w_R$. By [F4], $w_R\in H^1$. It lies in $H^1_0$: apply the same smooth zero-fixing operation to compactly supported smooth approximants of $w$. Their images are compactly supported and smooth. For convergence in $H^1$, use the Lipschitz bound for the functions and the chain rule for derivatives; after taking an almost-everywhere convergent subsequence, subtract the derivatives as $T_R'(q_k)(Dq_k-Dq)+(T_R'(q_k)-T_R'(q))Dq$ and use boundedness and continuity of $T_R'$ and dominated convergence. The same argument, applied to any convergent sequence, proves that $w\mapsto w_R$ is continuous in $H^1$. Here the subsequence argument gives convergence of the whole sequence because every subsequence admits a further convergent subsequence. [F4, F5, given, construct]

2.1 The functions $w_R$ have a spatial essential bound depending only on $R$. On any uniformly bounded sequence converging in $H^1$, the polynomial map $g$ is continuous into $H^1$: take an almost-everywhere convergent subsequence, use the polynomial value and weak-derivative formulas in [F1], subtract the derivative terms by adding the coefficient at the approximating function times the limiting derivative, and apply dominated convergence to the bounded coefficient differences times that limiting derivative. The other derivative terms tend to zero in $L^2$ by their uniform coefficient bounds. The subsequence criterion again gives full sequential convergence. Consequently $t\mapsto g(v_R(t))$ is a continuous $H^1_0$-valued path, where $v_R(t)$ is the componentwise truncation of $v(t)$; [F1] supplies zero-boundary preservation. [F1, F4, step 1.2, given]

3.1 Each continuous path on the compact interval is a uniform limit of finite-range measurable time-step functions, obtained from sufficiently fine finite partitions. Thus each path $g(v_R)$ is strongly measurable. For almost every $t$, the mixed-norm hypothesis gives $\|v(t)\|_\infty<\infty$ and the continuous and mixed representatives agree as spatial classes; for all sufficiently large integers $R$, $v_R(t)=v(t)$ in $H^1$, so $g(v_R(t))=g(v(t))$. Diagonal approximation of the countably many strongly measurable paths, or equivalently choosing simple approximants with errors at most $1/R$ outside null sets, shows that their pointwise limit is strongly measurable. This uses only the measurable mixed section norm, not strong measurability into $L^\infty$. The same reasoning applies to $u$, and differences of the resulting strongly measurable maps are strongly measurable by subtracting simple approximants. [F1, F2, step 1.1, step 2.1, given, construct]

4.1 Write $A_v(t)=\|v(t)\|_\infty$, $B_v=\sup_t\|v(t)\|_{H^1}$ and $a_v=\|A_v\|_{L^4(0,T)}$. By [F1], $\|g(v(t))\|_{H^1}\le C_m|\lambda|A_v(t)^{m-1}B_v$ for almost every $t$. Apply [F3] to $A_v^{m-1}$ and $1$ with reciprocal exponents $(m-1)/4$ and $(5-m)/4$, interpreting reciprocal exponent zero as $L^\infty$. This gives $\int_0^T A_v^{m-1}\,dt\le T^{(5-m)/4}a_v^{m-1}$, including the $m=5$ endpoint. Thus the nonlinear norm is integrable; [F2] gives Bochner integrability and the first displayed bound since $a_v,B_v\le\|v\|_{X_T}$. [F1, F2, F3, step 1.1, step 3.1, given, algebra]

5.1 Put $h=v-u$ and use the difference estimate in [F1]. Its first part is bounded in time by $C_m|\lambda|B_h(A_u^{m-1}+A_v^{m-1})$, whose integral is controlled as in step 4.1. For the second part use $C_m|\lambda|(B_u+B_v)(A_u^{m-2}+A_v^{m-2})A_h$. Repeated Hölder gives $\int_0^T A_w^{m-2}A_h\,dt\le T^{(5-m)/4}a_w^{m-2}a_h$: the reciprocal exponents are $(m-2)/4$, $1/4$, and $(5-m)/4$, with the last factor interpreted as $L^\infty$ for $m=5$. Since every $a$ and $B$ is bounded by the corresponding $X_T$ norm, and $x^{m-2}y+xy^{m-2}\le x^{m-1}+y^{m-1}$ for nonnegative $x,y$, the second displayed bound follows after enlarging $C_m$. The integrable bound and step 3.1 also give the asserted $L^1$ membership of the difference. [F1, F2, F3, step 3.1, step 4.1, given, algebra] ∎
