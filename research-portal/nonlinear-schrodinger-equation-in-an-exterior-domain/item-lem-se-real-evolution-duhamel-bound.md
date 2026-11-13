---
title: Bounded real-linear perturbations preserve solution estimates
status: published
research_item: lem-se-real-evolution-duhamel-bound
dependency_level: 5
---

## Prerequisites

- [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution)
- [lem-author-9e2ffff7db46-local-volterra-contraction](item-lem-author-9e2ffff7db46-local-volterra-contraction)
- [lem-author-9e2ffff7db46-global-real-evolution](item-lem-author-9e2ffff7db46-global-real-evolution)
- [lem-author-9e2ffff7db46-bochner-variation-of-constants](item-lem-author-9e2ffff7db46-bochner-variation-of-constants)
- [lem-author-9e2ffff7db46-spacetime-map-transfer](item-lem-author-9e2ffff7db46-spacetime-map-transfer)
- [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)
- [math:thm-gronwall-integral-inequality](https://alphabetamath.cc/item/thm-gronwall-integral-inequality)
- [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)
- [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral)


## Statement

Assume Countable Choice, with the real Banach and Bochner conventions of [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution). Let $E$ be a complex Banach space regarded as real, $0<T<\infty$, $W(t)$ a strongly continuous bounded group, and $P:[0,T]\to\mathcal B_{\mathbb R}(E)$ a norm-continuous family of bounded real-linear operators. Write $M=\sup_{|t|\le T}\|W(t)\|\ge1$, $K=\sup_{t\in[0,T]}\|P(t)\|$ and $C_0=M e^{MKT}$. The Volterra equation $S(t,r)x=W(t-r)x+\int_r^tW(t-\rho)P(\rho)S(\rho,r)x\,d\rho$ has a unique evolution on $[0,T]^2$. It is constructed by [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point) through [lem-author-9e2ffff7db46-local-volterra-contraction](item-lem-author-9e2ffff7db46-local-volterra-contraction), is jointly strongly continuous and real-linear, satisfies $S(r,r)=I$, $S(t,q)S(q,r)=S(t,r)$ and $S(t,r)^{-1}=S(r,t)$, and obeys $\|S(t,r)\|\le M e^{MK|t-r|}$ by [lem-author-9e2ffff7db46-global-real-evolution](item-lem-author-9e2ffff7db46-global-real-evolution) and [math:thm-gronwall-integral-inequality](https://alphabetamath.cc/item/thm-gronwall-integral-inequality).

For every strongly measurable $f\in L^1(0,T;E)$ the forced formula is $u(t)=S(t,r)x+\int_r^tS(t,\rho)f(\rho)\,d\rho$, with $\|u\|_{C([0,T];E)}\le C_0(\|x\|+\|f\|_{L^1})$, as proved in [lem-author-9e2ffff7db46-bochner-variation-of-constants](item-lem-author-9e2ffff7db46-bochner-variation-of-constants). It uniquely solves $u(t)=W(t-r)x+\int_r^tW(t-\rho)(P(\rho)u(\rho)+f(\rho))\,d\rho$. All integrals are Bochner integrals in $E$, oriented by $\int_r^t=-\int_t^r$ for $t<r$; their norm and real-linearity rules are [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) and [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral).

If the actual free orbit map $H_a y(t)=W(t-a)y$ and retarded $L^1(I;E)$ forcing map $D_a g(t)=\int_a^tW(t-\rho)g(\rho)\,d\rho$ are bounded into an additional compatible spacetime Banach norm $Y_I$ on a forward interval $I=[a,b]\subset[0,T]$, in exactly the common-ambient and map sense of [lem-author-9e2ffff7db46-spacetime-map-transfer](item-lem-author-9e2ffff7db46-spacetime-map-transfer), with bounds $A_I$ and $B_I$, then $v=u|_I$ has that norm. Put $f_I=f|_I$ and $C_I=M e^{MK(b-a)}$. The estimate in interval data is $\|v\|_{Y_I}\le A_I\|u(a)\|+B_I((b-a)K C_I(\|u(a)\|+\|f_I\|_{L^1(I;E)})+\|f_I\|_{L^1(I;E)})$. When $r=a$, one has $u(a)=x$, so this gives the estimate with initial datum $x$ and forcing restricted to $I$. For arbitrary $r$, one may use the global bound $\|u(a)\|\le C_0(\|x\|+\|f\|_{L^1(0,T;E)})$ on its right-hand side. For fixed free-map bounds the constant in interval data depends only on the interval, $M$ and $K$; uniform interval estimates require uniform free-map bounds. The corresponding backward assertion uses endpoint datum $u(b)$, forcing restricted to $I$, and the reflected free maps specified by the same supplier. One may not move multiplication by $i$ through a merely real-linear $S(t,r)$: a forcing $-if$ enters as $\int_r^tS(t,\rho)(-if(\rho))\,d\rho$.

## Facts & Assumptions

**Given:** The complex Banach space regarded as real, the strongly continuous bounded group, norm-continuous bounded real-linear $P$, finite time horizon, and, for the additional assertion, the two specified bounded free maps on the named interval.

**Goal:** Establish the entire evolution and forced estimate, including the cocycle, inverse and compatible spacetime conclusion, without any Hilbert-space restriction.

[F1] [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution) proves continuity, real linearity and the state-space norm bound for the free convolution using [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) and [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral).

[F2] [lem-author-9e2ffff7db46-local-volterra-contraction](item-lem-author-9e2ffff7db46-local-volterra-contraction) applies [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point) on both time orientations; [lem-author-9e2ffff7db46-global-real-evolution](item-lem-author-9e2ffff7db46-global-real-evolution) patches these solutions, proves the cocycle and inverse, and applies [math:thm-gronwall-integral-inequality](https://alphabetamath.cc/item/thm-gronwall-integral-inequality) to obtain the stated bound and joint strong continuity.

[F3] [lem-author-9e2ffff7db46-bochner-variation-of-constants](item-lem-author-9e2ffff7db46-bochner-variation-of-constants) proves the strongly measurable Bochner variation-of-constants formula and its triangular integral exchange, including backward-time signs.

[F4] [lem-author-9e2ffff7db46-spacetime-map-transfer](item-lem-author-9e2ffff7db46-spacetime-map-transfer) transfers the norm on $I=[a,b]$ for a solution based at $a$, using its datum at $a$, forcing restricted to $I$, and the same bounded free orbit and forcing maps in the common ambient function or distribution space. It makes no claim of a Bochner integral into a nonseparable spacetime factor.

## Proof

**Given:** The complex Banach space regarded as real, the strongly continuous bounded group, norm-continuous bounded real-linear $P$, finite time horizon, and, for the additional assertion, the two specified bounded free maps on the named interval.

**Goal:** Establish the entire evolution and forced estimate, including the cocycle, inverse and compatible spacetime conclusion, without any Hilbert-space restriction.

1.1 Use [F1] on an interval of length $h$ with $MKh<1$. Its forcing estimate shows that the Volterra map has contraction constant at most $MKh$; [F2] supplies its unique fixed point. Apply the global extension and reset argument of [F2] to obtain the evolution for every base time and the identities $S(t,q)S(q,r)=S(t,r)$ and $S(t,r)^{-1}=S(r,t)$. The same result supplies joint strong continuity and the norm $M e^{MK|t-r|}$. [F1, F2, given]

2.1 For arbitrary $L^1(E)$ forcing, [F3] gives a continuous function by the displayed integral against $S(t,\rho)$, verifies the forced Volterra equation, and uses [F2] to prove uniqueness. Its norm bound together with the homogeneous estimate in step 1.1 gives $C_0(\|x\|+\|f\|_1)$. Both the initial time and the integral are allowed in either orientation, exactly as asserted. [F1, F2, F3, step 1.1]

3.1 On $I=[a,b]$, put $v=u|_I$ and $f_I=f|_I$. The reset identity of [F2], obtained by splitting the oriented Volterra equation at $a$, is $v=H_a u(a)+D_a(Pv+f_I)$. Thus the interval solution has datum $u(a)$ and forcing $f_I$, regardless of the original base time $r$. The interval version of steps 1.1 and 2.1 gives $\|v\|_{C(I;E)}\le C_I(\|u(a)\|+\|f_I\|_{L^1(I;E)})$, with $C_I=M e^{MK(b-a)}$. Applying [F4] to these exact interval data and using $\|Pv+f_I\|_{L^1(I;E)}\le(b-a)K\|v\|_{C(I;E)}+\|f_I\|_{L^1(I;E)}$ proves the stated $Y_I$ estimate. If $r=a$, then $u(a)=x$; otherwise step 2.1 gives the stated global bound for $\|u(a)\|$. The constants are precisely those of the supplied interval maps, so uniformity requires their uniform bounds. For a backward interval ending at $b$, the change of variables $\tau=b-t$ gives datum $u(b)$, group $\widetilde W(\tau)=W(-\tau)$, coefficient $\widetilde P(\sigma)=-P(b-\sigma)$, and forcing $\widetilde f(\sigma)=-f(b-\sigma)$. Applying [F4] under the corresponding reflected free-map hypotheses gives the backward assertion. Finally all operator linearity used here is real, so the factor $-i$ stays inside $S(t,\rho)$ when it is part of the forcing. This proves all conclusions. [F1, F2, F3, F4, step 1.1, step 2.1] ∎
