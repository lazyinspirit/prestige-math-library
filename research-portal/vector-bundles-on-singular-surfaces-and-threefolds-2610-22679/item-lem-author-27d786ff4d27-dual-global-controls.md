---
title: Coherent dual extension supplies global Swan controlling sections
status: draft
research_item: lem-author-27d786ff4d27-dual-global-controls
dependency_level: 13
---

PDF p. 15: Theorem6.7 second Bertini application

## Prerequisites

- [prop-swan-bertini-point-section](item-prop-swan-bertini-point-section)
- [lem-affine-coherent-global-generation](item-lem-affine-coherent-global-generation)
- [lem-surjection-kernel-bundle](item-lem-surjection-kernel-bundle)
- [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC. Let $X=\operatorname{Spec}A$ be an integral normal affine threefold over an algebraically closed field, let $S$ be the finite smooth zero set of the preceding point functional, let $U=X\setminus S$, and let $Q$ be its coherent kernel on $X$. Put $E=(Q|_U)^\vee$. For any nonempty open $W\subset U$ there is a finite indexed family of global sections of $E$ which generates $E$ on $U$, spans first jets at every smooth closed point of $U$, and contains Swan's controlling family on each member of a finite smooth principal cover of $W$ when $W$ is smooth. The parameters are an affine space $T=\mathbb A^N_k$; repetitions or linear relations in the indexed family are allowed.

## Facts & Assumptions
**Given:** The stated $X,S,U,Q,W$. A controlling family in a free rank-two chart consists of a frame and all its products by affine embedding coordinates, as used in Swan Theorem1.4's proof.

**Goal:** Supply global functionals on the actual quasi-affine $U$, including sufficient local families without extending a vector bundle across $S$.

[F1] [prop-swan-bertini-point-section](item-prop-swan-bertini-point-section) gives coherent $Q$ on $X$ and rank-two $Q|_U$. [lem-affine-coherent-global-generation](item-lem-affine-coherent-global-generation) gives finite generators of every coherent sheaf on $X$ and their restrictions. [lem-surjection-kernel-bundle](item-lem-surjection-kernel-bundle) gives local splitting where needed.

[F2] Noetherianity, finite principal covers and rational closed points are used with [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

## Proof
1.1 The sheaf $F=\mathcal Hom_X(Q,\mathcal O_X)$ is coherent: on an affine chart it is a submodule of a finite free module over the Noetherian ring, from a finite presentation of $Q$. Localization of that presentation identifies $F|_U$ with $E$. By [F1] choose finite sections $\psi_j$ of $F$ generating it; they generate $E$ on $U$. No local freeness of $F$ at $S$ is asserted. Choose algebra generators $f_l$ of $A$. Include all $\psi_j$ and $f_l\psi_j$ in the indexed family. [F1, F2, algebra]

2.1 At a smooth closed point $x$, the $f_l-f_l(x)$ span $\mathfrak m_x/\mathfrak m_x^2$, and the $\psi_j(x)$ span $E(x)$. Values can first be prescribed with linear combinations of $\psi_j$; the combinations $(f_l-f_l(x))\psi_j$ then change arbitrary derivatives without changing the value. Thus the family spans the eight-dimensional first-jet space $E_x/\mathfrak m_x^2E_x$. [step 1.1, F2, algebra]

3.1 If $W$ is smooth, choose finitely many principal opens $D(g_i)\subset W$ on each of which two of the $\psi_j$ form a frame. Such opens cover because these values generate, and $W$ is quasi-compact. On $D(g_i)$ use the frame $g_i\psi_a,g_i\psi_b$ and the algebra generators $f_l,1/g_i$ of $A_{g_i}$. Its controlling family consists of $g_i\psi_a,g_i\psi_b$, their $f_l$-multiples, and $\psi_a,\psi_b$. All are restrictions of global sections on $U$. Add these finitely many sections for every chart to the family in step 1.1. This proves all assertions, including that the controlling sections genuinely come from global functionals on $Q|_U$. [F1, F2, step 1.1, construct] ∎
