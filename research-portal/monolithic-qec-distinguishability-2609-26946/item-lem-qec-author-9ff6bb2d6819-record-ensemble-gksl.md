---
title: Finite jump-record ensemble equals the GKSL channel
status: draft
research_item: lem-qec-author-9ff6bb2d6819-record-ensemble-gksl
dependency_level: 4
sources:
  references:
    - title: M. B. Plenio and P. L. Knight, The quantum-jump approach to dissipative
        dynamics in quantum optics
      url: https://arxiv.org/abs/quant-ph/9702007
      locator: Section IV.C, PDF pp. 46–49, Eqs. (120)–(133), especially (122),
        (124)–(128)
      reading_limits: Retained contextual bibliography from the existing draft; this
        adjudication did not reread Plenio–Knight. The existing source note
        concerns a cavity example and a first-order simulation. No statement
        from this reference is imported as a premise here. The record-average
        identity, continuity argument and finite-matrix application below are
        local proofs using the named mathematical suppliers; no general
        stochastic existence theorem or source reconstruction is claimed.
---

## Prerequisites

- [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)
- [lem-qec-author-9ff6bb2d6819-no-jump-survival](item-lem-qec-author-9ff6bb2d6819-no-jump-survival)
- [lem-qec-author-9ff6bb2d6819-finite-horizon-record-law](item-lem-qec-author-9ff6bb2d6819-finite-horizon-record-law)
- [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)
- [math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves](https://alphabetamath.cc/item/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves)
- [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-qc-hermitian-trace-norm-positive-negative-parts](https://alphabetamath.cc/item/thm-qc-hermitian-trace-norm-positive-negative-parts)
- [math:thm-qc-trace-norm-unitary-invariance-and-positive-formula](https://alphabetamath.cc/item/thm-qc-trace-norm-unitary-invariance-and-positive-formula)
- [math:thm-qc-trace-norm-duality-and-norm-properties](https://alphabetamath.cc/item/thm-qc-trace-norm-duality-and-norm-properties)
- [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)
- [math:thm-coordinate-map-for-a-finite-dimensional-normed-space](https://alphabetamath.cc/item/thm-coordinate-map-for-a-finite-dimensional-normed-space)
- [math:thm-uniform-limit-theorem](https://alphabetamath.cc/item/thm-uniform-limit-theorem)
- [math:thm-integral-triangle-inequality](https://alphabetamath.cc/item/thm-integral-triangle-inequality)


## Statement

Assume AC. For the finite-record matrices $K_t$ above, averaging the unnormalized conditional matrices gives $e^{t\mathcal L}(\rho)$, for every density matrix $\rho$ and $t\ge0$. More precisely, let $\Phi_n(t)(X)$ be the integral of $K_tXK_t^\dagger$ over exactly $n$ marked records, and set $M_t=\sum_{n\ge0}\Phi_n(t)$. The series converges on every matrix uniformly for $t$ in compact intervals, and $M_t=e^{t\mathcal L}$. Thus the exact record law supplies an unraveling, meaning a distribution of conditional density matrices whose mean is the specified GKSL evolution.

## Facts & Assumptions

[F1] The specified finite generator is $\mathcal L(X)=-i[H,X]+\sum_a(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F2] Use $Q=\sum_aL_a^\dagger L_a$, $B=-iH-Q/2$, $V_t=e^{tB}$ and the no-jump maps $S_t(X)=V_tXV_t^\dagger$. Define $D(X)=BX+XB^\dagger$. [lem-qec-author-9ff6bb2d6819-no-jump-survival](item-lem-qec-author-9ff6bb2d6819-no-jump-survival)

[F3] The finite-record matrices $K_t$ and their Lebesgue-time/counting-mark measure are specified by the record law. This law is normalized, and for a density matrix the mass of exactly $n$ records is at most $(rt)^n/n!$, with $r=\|Q\|$; the $n=0$ bound is $1$. [lem-qec-author-9ff6bb2d6819-finite-horizon-record-law](item-lem-qec-author-9ff6bb2d6819-finite-horizon-record-law)

[F4] Bounded operator exponentials on a Banach space are differentiable groups, have their specified generator, and satisfy $\|e^{tA}\|\le e^{|t|\|A\|}$. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F5] Under Countable Choice, the fundamental theorem applies to continuous Banach-valued integrands and to curves with continuous derivatives, including their compact-interval endpoint extensions. [math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves](https://alphabetamath.cc/item/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves)

[F6] Fubini reorders absolutely integrable complex entries on sigma-finite product spaces. [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)

[F7] Assume AC, including Countable Choice for the integration interfaces. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F8] Each finite Hermitian matrix $Y$ has positive parts $Y_+,Y_-$ with $Y=Y_+-Y_-$ and $\|Y\|_1=\operatorname{Tr}Y_++\operatorname{Tr}Y_-$. [math:thm-qc-hermitian-trace-norm-positive-negative-parts](https://alphabetamath.cc/item/thm-qc-hermitian-trace-norm-positive-negative-parts)

[F9] For a finite positive matrix $P$, $\|P\|_1=\operatorname{Tr}P$. [math:thm-qc-trace-norm-unitary-invariance-and-positive-formula](https://alphabetamath.cc/item/thm-qc-trace-norm-unitary-invariance-and-positive-formula)

[F10] The finite trace norm is a norm; its dual formula bounds $|\operatorname{Tr}(C^\dagger A)|$ by $\|A\|_1$ whenever $\|C\|\le1$. [math:thm-qc-trace-norm-duality-and-norm-properties](https://alphabetamath.cc/item/thm-qc-trace-norm-duality-and-norm-properties)

[F11] A real or complex normed space with a finite ordered basis is complete. [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)

[F12] In a finite-dimensional normed space, an ordered basis gives a bounded coordinate isomorphism with coordinate $\ell^1$ space and a bounded inverse. [math:thm-coordinate-map-for-a-finite-dimensional-normed-space](https://alphabetamath.cc/item/thm-coordinate-map-for-a-finite-dimensional-normed-space)

[F13] A uniform limit of continuous maps from a nonempty topological space to a metric space is continuous. [math:thm-uniform-limit-theorem](https://alphabetamath.cc/item/thm-uniform-limit-theorem)

[F14] For an integrable complex function $f$, $|\int f|\le\int|f|$. [math:thm-integral-triangle-inequality](https://alphabetamath.cc/item/thm-integral-triangle-inequality)

## Proof

**Given:** The finite GKSL matrices, their finite-record matrices and a density matrix, with $r=\|Q\|$. The trace norm $\|\cdot\|_1$ is the sum of singular values, and the induced norm on linear maps on $M_d(\mathbb C)$ will be used below.

**Goal:** Prove compact-uniform convergence, establish continuity before differentiation, and identify the exact record average with $e^{t\mathcal L}$.

1.1 For a positive input $P$ of trace one, each integrand $K_tPK_t^\dagger$ is positive: its quadratic form at $v$ is $(K_t^\dagger v)^\dagger P(K_t^\dagger v)\ge0$. Its integral is therefore positive, and its trace is the exactly-$n$ mass in [F3]. Hence [F9] gives $\|\Phi_n(t)(P)\|_1\le(rt)^n/n!$. Scaling gives the bound $\operatorname{Tr}(P)(rt)^n/n!$ for any positive $P$; a positive matrix of trace zero vanishes by [F9]–[F10]. For arbitrary $X$, put $Y=(X+X^\dagger)/2$ and $Z=(X-X^\dagger)/(2i)$. Both are Hermitian, so [F8] writes $X=Y_+-Y_-+iZ_+-iZ_-$ with all four parts positive. Linearity and [F10] give $\|\Phi_n(t)(X)\|_1\le c_X(rt)^n/n!$, where $c_X=\operatorname{Tr}(Y_++Y_-+Z_++Z_-)$ is finite and independent of $t,n$. The integrals exist entrywise: for fixed $n$ and marks, the finite exponential products have continuous entries and finite bounds on $0\le t_j\le t\le T$ by [F4] and [F12]; extending by zero off the ordered simplex gives bounded measurable entries on a finite-measure cube. Positivity and finite linear decomposition justify all stated integral identities. [given, F2, F3, F4, F8, F9, F10, F12, algebra]

2.1 Let $E_{ij}$ be the usual ordered matrix-unit basis. By [F12] there is a finite constant $b$ with $\sum_{ij}|X_{ij}|\le b\|X\|_1$. Set $C=b\max_{ij}c_{E_{ij}}$. Expanding $X=\sum_{ij}X_{ij}E_{ij}$ in step 1.1 gives $\|\Phi_n(t)\|\le C(rt)^n/n!$. On every $[0,T]$ these norms are dominated by $C(rT)^n/n!$, a summable scalar exponential series. By [F11], both the trace-norm matrix space and its finite-dimensional space of linear maps are complete; thus the uniform Cauchy estimate for the tails proves absolute, compact-uniform convergence of $M_t=\sum_{n\ge0}\Phi_n(t)$ in the induced operator norm. Every linear map used here is bounded: its values on the finite basis, together with the coordinate bound in [F12], give a finite norm bound. [F4, F10, F11, F12, step 1.1, algebra]

3.1 Put $J(X)=\sum_aL_aXL_a^\dagger$. Entrywise differentiation of $S_t(X)=V_tXV_t^\dagger$ gives $S_t'=DS_t$ and $S_0=I$. By [F4], $e^{-tD}$ is differentiable and commutes with $D$; the product $e^{-tD}S_t$ has derivative zero. The fundamental theorem [F5] on each compact interval gives $S_t=e^{tD}$. This identity follows from the no-jump formula and does not use continuity of $M$. [F2, F4, F5, F7, step 2.1, algebra]

4.1 For each fixed $n$, classifying a nonempty record by its last time $s$ and last mark gives $\Phi_{n+1}(t)=\int_0^t S_{t-s}J\Phi_n(s)\,ds$, with $\Phi_0(t)=S_t$. Indeed the terminal factor is $V_{t-s}$, the last jump contributes $L_a$, and the preceding record ends at $s$, so the matrix products in [F3] give precisely this composition after summing the last mark. For fixed $n$, the bounded measurable entries described in step 1.1 are absolutely integrable on the finite cube, with finite counting measure for marks. Fubini therefore identifies this iterated integral with the record integral. Faces with coincident or endpoint times have Lebesgue measure zero. At $t=0$ every positive-event integral is zero. [F2, F3, F6, F7, step 1.1, step 3.1, algebra]

5.1 Each $\Phi_n$ is continuous, as follows by induction before taking any infinite sum. The base $\Phi_0(t)=e^{tD}$ is continuous by [F4]. If $\Phi_n$ is continuous, the group identity in step 3.1 rewrites step 4.1 as $\Phi_{n+1}(t)=e^{tD}\int_0^t e^{-sD}J\Phi_n(s)\,ds$. Its integrand is continuous: the entries of products are finite sums of products of continuous entries, and [F12] identifies their coordinate and norm topologies. The fundamental theorem [F5] makes its primitive continuously differentiable, so $\Phi_{n+1}$ is continuous, including at zero. On every nonempty $[0,T]$ the finite partial sums are consequently continuous maps into the finite-dimensional normed space of linear maps. Their uniform convergence from step 2.1 and [F13] show that $M$ is continuous. [F4, F5, F7, F11, F12, F13, step 2.1, step 3.1, step 4.1, algebra]

6.1 Sum the recurrence from step 4.1 over $n$. The sum passes through the integral: on $0\le s\le t\le T$, $S_{t-s}J$ is uniformly bounded by $e^{T\|D\|}\|J\|$. The norm of the tail of $\sum_n\Phi_n(s)$ tends uniformly to zero by step 2.1. In each coordinate the error in integrating a partial sum is at most a fixed coordinate-bound constant times $T e^{T\|D\|}\|J\|$ times that uniform tail norm, by [F12] and [F14]. Thus the error tends to zero. We obtain $M_t=S_t+\int_0^t S_{t-s}JM_s\,ds$. This passage uses convergence of the finite-record sums and not the desired GKSL identity. [F4, F12, F14, step 2.1, step 3.1, step 4.1, step 5.1, algebra]

7.1 Multiply step 6.1 by $e^{-tD}$ to get $e^{-tD}M_t=I+\int_0^t e^{-sD}JM_s\,ds$. Its integrand is continuous by step 5.1, so [F5] makes the right side differentiable. Multiplication by $e^{tD}$ then gives $M_t'=DM_t+JM_t=\mathcal L M_t$, since [F1]–[F2] imply $D+J=\mathcal L$, and $M_0=I$. By [F4] the derivative of $e^{-t\mathcal L}M_t$ is zero; [F5] makes this product identically $I$. Therefore $M_t=e^{t\mathcal L}$ for every $t\ge0$. [F1, F2, F4, F5, F7, step 3.1, step 5.1, step 6.1, algebra]

8.1 On a record of positive weight $w=\operatorname{Tr}(K_t\rho K_t^\dagger)$ the conditional state is $K_t\rho K_t^\dagger/w$, a positive matrix of trace one. If $w=0$, [F9]–[F10] imply $K_t\rho K_t^\dagger=0$; assign any fixed density matrix there, for example $\rho$, to define the state everywhere. This assignment is measurable on each record component, and the zero-weight set has record-law measure zero. Averaging with the normalized record law [F3] cancels $w$ on its positive set and gives $M_t(\rho)=e^{t\mathcal L}(\rho)$ by step 7.1. The entrywise averages exist by the absolute-convergence bounds from step 2.1. At $t=0$ the sole record gives $\rho$; an empty jump family leaves only the no-jump term. This proves the stated unraveling identity. [F3, F9, F10, step 2.1, step 7.1, algebra] ∎

## Source notes

The retained Plenio–Knight reference is contextual bibliography for the no-jump/jump split in a cavity example. No general existence theorem is imported from it. The matrix decomposition and norm facts above use the explicit mathematical suppliers; continuity is proved locally from the finite-record recurrence before applying the uniform-limit theorem and differentiating.
