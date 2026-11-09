---
title: The selected zero fibers are finite etale schemes
status: draft
research_item: lem-author-fc2380accb47-finite-etale-zero-fibers
dependency_level: 5
---

PDF p. 15: Theorem6.7: rank-three Bertini functional

## Prerequisites

- [lem-author-fc2380accb47-simultaneous-good-parameters](item-lem-author-fc2380accb47-simultaneous-good-parameters)
- [lem-regular-section-parameter-family](item-lem-regular-section-parameter-family)
- [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input)

## Statement
For every point $a\in T^\circ$, the zero scheme $S_a$ of the universal functional after base change to $L=\kappa(a)$ is a finite étale $L$-scheme, possibly empty. The same holds after every extension of $L$, so it is geometrically smooth of dimension zero. In particular for a chosen $a\in T^\circ(k)$ it is a finite disjoint union of copies of $\operatorname{Spec}k$, all in $X_{\mathrm{sm}/k}$. This also identifies the generic fiber over $k(T)$: it is finite étale, not merely a set of expected dimension. No dominance is needed or asserted in this argument.

## Facts & Assumptions
**Given:** The nonempty parameter open and the actual zero scheme, which is closed in the affine finite-type scheme $X_L$.

**Goal:** Prove geometric smoothness and finiteness with the correct scheme structure.

[F1] [lem-author-fc2380accb47-simultaneous-good-parameters](item-lem-author-fc2380accb47-simultaneous-good-parameters) makes the zero scheme lie in $W_L$ with derivative determinant invertible at every point, and retains this after field extension. [lem-regular-section-parameter-family](item-lem-regular-section-parameter-family) supplies the scheme-theoretic fiber description.

[F2] [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input) supplies: a finite-type algebra over a field with zero differential module is étale, and an étale finite-type algebra over a field is a finite product of finite separable field extensions. These statements have no characteristic-zero restriction.

## Proof
1.1 Locally on $W_L$ trivialize the rank-three bundle and write the section coefficients $g_1,g_2,g_3$. On their zero scheme the conormal sequence gives a right-exact map $\mathcal O_{S_a}^{3}\xrightarrow{(dg_1,dg_2,dg_3)}\Omega^1_{W_L/L}|_{S_a}\longrightarrow\Omega^1_{S_a/L}\longrightarrow0.$ The middle bundle has rank three, and the first map has invertible determinant by [F1]. It is an isomorphism, so $\Omega^1_{S_a/L}=0$. The frame-independent determinant condition guarantees that this conclusion glues across charts. [F1]

2.1 As a closed subscheme of affine $X_L$, write $S_a=\operatorname{Spec}B_a$ with $B_a$ a finite-type $L$-algebra. Step1.1 gives $\Omega_{B_a/L}=0$, so [F2] makes $B_a$ a finite product of finite separable extensions of $L$. This is finite étale; the empty case is the zero algebra and empty product. After any extension these remain finite étale. For $L=k$ algebraically closed, every factor is $k$ itself. Apply [F1] to see all these points lie in the original smooth locus. The same argument applies to the generic point of $T^\circ$ and proves the claimed generic-fiber statement. [F1, F2, step 1.1] ∎
