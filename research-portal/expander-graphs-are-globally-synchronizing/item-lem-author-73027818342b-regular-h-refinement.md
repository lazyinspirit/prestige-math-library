---
title: Refined H mass bound in a regular graph
status: published
research_item: lem-author-73027818342b-regular-h-refinement
dependency_level: 9
---

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-daido](item-def-expander-sync-daido)
- [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)
- [def-expander-sync-h](item-def-expander-sync-h)
- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [lem-author-73027818342b-regular-phasor-projection](item-lem-author-73027818342b-regular-phasor-projection)
- [lem-expander-sync-centered-pointwise-phase](item-lem-expander-sync-centered-pointwise-phase)
- [math:def-complex-conjugate-real-imaginary-part-and-modulus](https://alphabetamath.cc/item/def-complex-conjugate-real-imaginary-part-and-modulus)
- [prop-expander-sync-h-properties](item-prop-expander-sync-h-properties)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph, with $n=|V|>0$, symmetric binary adjacency matrix $A$, and self-loops allowed and counted once in each row sum. Suppose every row sum is $d\ge0$, let $\alpha\ge0$, and assume $\|\Delta\|\le\alpha d$, where $\Delta=A-(d/n)J$ and $J$ is the all-ones matrix; the norm is the Euclidean operator norm. Let $\theta$ be a stable state, meaning a local minimum on the phase torus of $\mathcal E_G(\theta)=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$. Choose representatives in $(-\pi,\pi]$ after common rotation so that $\rho_1\ge0$ is real, where $\rho_k=n^{-1}\sum_xe^{ik\theta_x}$. Put $X=\rho_1^2$, $r=|\rho_2|$, and $M=n^{-1}\sum_x H(\theta_x)$, where $H(t)=\sin^2|t|$ for $|t|\le\pi/2$ and $H(t)=1$ for $\pi/2\le|t|\le\pi$.

If $d>0$, then $XM\le\alpha^2(1-X)$. If $X>0$, this gives $M\le\alpha^2(1-X)/X$ and $r\ge1-2\alpha^2(1-X)/X$. For $d=0$ one has $X=r=1$ and $M=0$.

## Facts & Assumptions

[F1] Put $f\in\mathbb C^V$ with $f_x=e^{i\theta_x}$ for every $x\in V$. The regular phase projection gives $\|\Delta f\|_2^2\le\alpha^2d^2n(1-X)$ ([lem-author-73027818342b-regular-phasor-projection](item-lem-author-73027818342b-regular-phasor-projection)).

[F2] For $d>0$, apply the normalized stable-state pointwise inequality with $d^*=d$ and $S_y=\sum_x\Delta_{x,y}e^{i(\theta_x-\theta_y)}$ to obtain $|S_y|^2\ge d^2XH(\theta_y)$ for every $y\in V$ ([lem-expander-sync-centered-pointwise-phase](item-lem-expander-sync-centered-pointwise-phase)).

[F3] For $z=a+ib$ with real $a,b$, $\operatorname{Re}z=a$ and $|z|=\sqrt{a^2+b^2}\ge0$ ([math:def-complex-conjugate-real-imaginary-part-and-modulus](https://alphabetamath.cc/item/def-complex-conjugate-real-imaginary-part-and-modulus)).

[F4] The truncated sine-square function satisfies $H(t)\ge\sin^2t$ on $(-\pi,\pi]$ ([prop-expander-sync-h-properties](item-prop-expander-sync-h-properties)).

[F5] Apply connectedness to the loop-free support graph obtained by deleting self-loops: its vertices are joined by finite edge paths ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)). Deleting a self-loop changes no reachability between distinct vertices, since a step from a vertex to itself may be removed from a walk.

[F10] Definition or convention used in the Statement: [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation).

[F11] Definition or convention used in the Statement: [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander).

[F12] Definition or convention used in the Statement: [def-expander-sync-states](item-def-expander-sync-states).

[F13] Definition or convention used in the Statement: [def-expander-sync-daido](item-def-expander-sync-daido).

[F14] Definition or convention used in the Statement: [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties).

[F15] Definition or convention used in the Statement: [def-expander-sync-h](item-def-expander-sync-h).

[F16] Definition or convention used in the Statement: [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices).

[F17] Definition or convention used in the Statement: [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order).

[F18] Definition or convention used in the Statement: [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus).

[F19] Definition or convention used in the Statement: [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice).

## Proof

**Given:** The graph, stable normalized state, parameters and notation in the Statement, and the phasor vector $f$ defined in [F1].

**Goal:** Establish all the asserted estimates.

1.1 Suppose $d>0$. Since $\Delta$ is symmetric, the definitions in [F1] and [F2] give $S_y=e^{-i\theta_y}\sum_x\Delta_{y,x}f_x=e^{-i\theta_y}(\Delta f)_y$. The modulus of the unit factor $e^{-i\theta_y}$ is one. Sum [F2] over $y$ and apply [F1] to obtain $d^2nXM\le\|\Delta f\|_2^2\le\alpha^2d^2n(1-X)$. Divide by $d^2n>0$ to obtain $XM\le\alpha^2(1-X)$; if $X>0$, divide again by $X$ to obtain the stated bound on $M$. [F1, F2, F10, F13, F15, F16, F18, given, algebra]

2.1 For $z=a+ib$, write $m=|z|$. By [F3], $m\ge0$ and $m^2=a^2+b^2$. If $m<a$, then $a>0$ and $0<(a-m)(a+m)=-b^2\le0$, a contradiction. Thus $|z|\ge\operatorname{Re}z$. By [F18], squaring $e^{it}=\cos t+i\sin t$ and using the exponential addition identity and unit modulus gives $\cos(2t)=1-2\sin^2t$. Hence $r\ge\operatorname{Re}\rho_2=1-2n^{-1}\sum_y\sin^2\theta_y\ge1-2M$ by [F4]. For $X>0$, substitute the bound on $M$ from step 1.1 to obtain $r\ge1-2\alpha^2(1-X)/X$. [F3, F4, F13, F18, step 1.1, algebra]

3.1 If $d=0$, nonnegative adjacency entries and zero row sums force $A=0$. By [F5], connectedness then forces $n=1$: if two distinct vertices existed, the loop-free support would have no path joining them. The normalized single unit phasor is one, so its chosen phase representative is zero. Consequently $X=r=1$ and $M=H(0)=0$. This proves the remaining case. [F5, F10, F13, F14, F15, F18, given, algebra] ∎
