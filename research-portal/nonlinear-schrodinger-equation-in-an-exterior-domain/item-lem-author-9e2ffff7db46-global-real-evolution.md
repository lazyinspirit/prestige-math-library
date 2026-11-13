---
title: Global real evolution, cocycle and inverse
status: draft
research_item: lem-author-9e2ffff7db46-global-real-evolution
dependency_level: 2
---

## Prerequisites

- [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution)
- [lem-author-9e2ffff7db46-local-volterra-contraction](item-lem-author-9e2ffff7db46-local-volterra-contraction)
- [math:thm-gronwall-integral-inequality](https://alphabetamath.cc/item/thm-gronwall-integral-inequality)


## Statement

Under the group and perturbation hypotheses of [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution) and [lem-author-9e2ffff7db46-local-volterra-contraction](item-lem-author-9e2ffff7db46-local-volterra-contraction), the local solutions extend uniquely to $[0,T]$ for every base time $r$, initial vector $x$ and forcing $f\in L^1(0,T;E)$. Set $S(t,r)x=u(t)$ for zero forcing. Then $S(t,r)$ is bounded real-linear, $S(r,r)=I$, $S(t,q)S(q,r)=S(t,r)$ for all $t,q,r\in[0,T]$, and $S(t,r)^{-1}=S(r,t)$. For each $x$, $(t,r)\mapsto S(t,r)x$ is jointly continuous. With $M\ge1$, $K$ as before, $\|S(t,r)\|\le M\exp(MK|t-r|)$ by [math:thm-gronwall-integral-inequality](https://alphabetamath.cc/item/thm-gronwall-integral-inequality). The forced Volterra solution satisfies $\|u\|_{C([0,T];E)}\le C_0(\|x\|+\|f\|_{L^1})$ where $C_0=M\exp(MKT)$.

## Facts & Assumptions

**Given:** $0<T<\infty$, the real Banach group with bound $M$, norm-continuous bounded real-linear $P$, and data at an arbitrary base time $r$.

**Goal:** Obtain the global two-parameter evolution and its quantitative and algebraic properties in both time directions.

[F1] Continuous oriented free convolutions, real linearity, and commuting bounded real operators with the integrals are provided by [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution).

[F2] [lem-author-9e2ffff7db46-local-volterra-contraction](item-lem-author-9e2ffff7db46-local-volterra-contraction) constructs unique local solutions on any interval containing its base point whose length satisfies $MKh<1$, and proves real linear dependence.

[F3] Continuous scalar Gronwall, including its time-reflected form, is [math:thm-gronwall-integral-inequality](https://alphabetamath.cc/item/thm-gronwall-integral-inequality).

## Proof

**Given:** $0<T<\infty$, the real Banach group with bound $M$, norm-continuous bounded real-linear $P$, and data at an arbitrary base time $r$.

**Goal:** Obtain the global two-parameter evolution and its quantitative and algebraic properties in both time directions.

1.1 Choose a positive mesh length $h$ with $MKh<1$; if $K=0$ any positive $h$ suffices. Starting at $r$, apply [F2] on successive intervals of length at most $h$ toward $T$, and separately toward $0$, using each endpoint value as the next initial datum and restricting $f$ to the interval. There are finitely many intervals. Their continuous solutions agree at endpoints and give a continuous global function. To check the original formula, multiply the formula at an endpoint $q$ by $W(t-q)$ and add the integral from $q$ to $t$. The group law gives $W(t-q)W(q-r)=W(t-r)$ and turns the old integrand into $W(t-s)(P(s)u(s)+f(s))$. Additivity of oriented integrals then gives the integral from $r$ to $t$. Induction over the intervals proves the global equation. [F1, F2, given]

2.1 The difference of two global solutions with the same data solves the homogeneous equation with zero data. Uniqueness on each successive interval from [F2], in both directions, proves that difference zero everywhere. For arbitrary $q$, splitting the global integral at $q$ gives the same reset formula $u(t)=W(t-q)u(q)+\int_q^tW(t-s)(P(s)u(s)+f(s))\,ds$, for all time orderings. This follows from the same group and oriented-additivity calculation as in step 1.1. [F1, F2, step 1.1]

2.2 For zero forcing the norm satisfies $\|u(t)\|\le M\|x\|+MK\int_r^t\|u(s)\|\,ds$ when $t\ge r$, and the analogous bound with integral from $t$ to $r$ when $t\le r$. Gronwall in the two orientations yields $\|u(t)\|\le M\exp(MK|t-r|)\|x\|$. For nonzero forcing use the continuous nondecreasing accumulated norm in the forward orientation, and its time reflection in the backward orientation; the coarse constant choice $M(\|x\|+\|f\|_1)$ for $a$ in [F3] gives the asserted uniform bound $C_0$. [F1, F3, step 1.1]

3.1 Real linearity follows from local real linearity and global uniqueness. By the reset formula, $t\mapsto S(t,r)x$ is the unique zero-forcing solution based at $q$ with initial vector $S(q,r)x$, hence equals $S(t,q)S(q,r)x$. At $t=r$ and then with the two base times interchanged this proves the two-sided inverse formula. [F2, step 2.1, step 2.2]

4.1 Fix $r_0$ and $x$. The cocycle and the uniform norm bound give $\|S(t,r)x-S(t,r_0)x\|\le C_0\|x-S(r,r_0)x\|$, uniformly in $t$. The right side tends to zero as $r\to r_0$ because the trajectory based at $r_0$ is continuous and has value $x$ there. Combining this uniform estimate with continuity of $t\mapsto S(t,r_0)x$ proves joint strong continuity. All conclusions hold on the realification; no commutation with multiplication by $i$ was used. ∎ [step 1.1, step 2.2, step 3.1]
