---
title: Adjacent relative chambers force a finite crossing component
status: draft
research_item: lem-author-4ac39e6f1702-finite-crossing-roots
dependency_level: 12
---

## Prerequisites

- [lem-author-4ac39e6f1702-common-facet](item-lem-author-4ac39e6f1702-common-facet)
- [prop-root-inversion-interface-artin-tits-prerequisites](item-prop-root-inversion-interface-artin-tits-prerequisites)
- [math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization)
- [lem-finite-root-difference-artin-tits-normalisers](item-lem-finite-root-difference-artin-tits-normalisers)
- [prop-relative-stratification-artin-tits-normalisers](item-prop-relative-stratification-artin-tits-normalisers)
- [def-connected-support-artin-tits-normalisers](item-def-connected-support-artin-tits-normalisers)


## Statement

In the finite-rank canonical Coxeter representation, fix $J$ and let $(x,I),(y,K)$ label adjacent relative chambers $xC_I,yC_K\subseteq\Theta_J$. Let $a\notin I$ be the index of their common wall, and put $L=I+a=I\cup\{a\}$ and $u=y^{-1}x$. Then
$$\Phi_L^+\setminus\Phi_I^+\subseteq N(u),\qquad |\Phi_L\setminus\Phi_I|\leq 2\ell(u).$$
In particular $W_D$ is finite, where $D=[I,a]$ is the vertex set of the connected component containing $a$ in the Coxeter diagram induced on $I+a$.

## Facts & Assumptions

[F1] The common wall is the facet at $a$ and the two chambers are on opposite sides of its supporting hyperplane, by [lem-author-4ac39e6f1702-common-facet](item-lem-author-4ac39e6f1702-common-facet).

[F2] Roots have one sign, dual evaluation obeys $(xf)(\beta)=f(x^{-1}\beta)$, and $|N(u)|=\ell(u)$, by [prop-root-inversion-interface-artin-tits-prerequisites](item-prop-root-inversion-interface-artin-tits-prerequisites).

[F3] The roots of a standard parabolic are exactly the ambient roots supported on its vertex subset, by [math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization), part (2).

[F4] Finiteness of $\Phi_{I+a}\setminus\Phi_I$ implies finiteness of $W_{[I,a]}$ by [lem-finite-root-difference-artin-tits-normalisers](item-lem-finite-root-difference-artin-tits-normalisers).

[F5] For $M\subseteq S$, $\Theta_M$ is the subspace annihilating the simple roots indexed by $M$, and $C_M$ consists of its points strictly positive on all remaining simple roots. A relative chamber $xC_I\subseteq\Theta_J$ has $|I|=|J|$, and its wall at $a$ has supporting relative hyperplane $H_{x\alpha_a}\cap\Theta_J$, where $H_\gamma=\{q:q(\gamma)=0\}$. These coordinate-face and wall descriptions are supplied by [prop-relative-stratification-artin-tits-normalisers](item-prop-relative-stratification-artin-tits-normalisers).

[F6] The notation $[I,a]$ denotes the vertices of the connected component containing $a$ in the Coxeter diagram induced on $I+a$, by [def-connected-support-artin-tits-normalisers](item-def-connected-support-artin-tits-normalisers).

## Proof

**Given:** The finite-rank canonical Coxeter representation, root basis and dual action, with the notation and hypotheses in the Statement. **Goal:** prove the stated assertions.

**Proof technique:** direct.

1.1 Let $\beta\in\Phi_L^+\setminus\Phi_I^+$. By [F2, F3], its simple-root coefficients are nonnegative, supported on $I+a$, and its coefficient $c_a$ at $a$ is strictly positive. Thus $f(\beta)=c_a f(\alpha_a)$ for every $f\in\Theta_I$. By [F5], the positive coordinate orthant $C_I$ spans $\Theta_I$, so $xC_I\subseteq\Theta_J$ implies $x\Theta_I\subseteq\Theta_J$. Since $|I|=|J|$, the subspaces have the same finite dimension and $x\Theta_I=\Theta_J$. Dual evaluation now gives $q(x\beta)=c_a q(x\alpha_a)$ for every $q\in\Theta_J$. [F2, F3, F5, given]

2.1 For $q=xf$ with $f\in C_I$, [F5] gives $q(x\alpha_a)=f(\alpha_a)>0$. The common wall's supporting hyperplane is exactly $H_{x\alpha_a}\cap\Theta_J$ by [F5]. Consequently [F1] puts all of $yC_K$ in the half-space where $q(x\alpha_a)<0$. Since $c_a>0$, step 1.1 shows that evaluation on $x\beta$ is positive on $xC_I$ and negative on $yC_K$. [F1, F2, F5, step 1.1]

3.1 Choose $g\in C_K$, which is nonempty since one may prescribe value zero on the basis roots indexed by $K$ and value one on the others, by [F5]. Then $(yg)(x\beta)=g(y^{-1}x\beta)<0$ by step 2.1 and [F2]. The root $u\beta$ cannot be positive: a positive root has nonnegative simple-root coefficients, whereas $g$ has nonnegative values on every simple root by [F5], so its evaluation would be nonnegative. Thus $u\beta$ is negative by [F2], and $\beta\in N(u)$. [F2, F5, step 2.1, choose]

4.1 The positive part $\Phi_L^+\setminus\Phi_I^+$ of the root difference has at most $\ell(u)$ members by [F2] and step 3.1. By [F2, F3], negation is a bijection from its positive part to its negative part, and the two parts are disjoint. Hence $|\Phi_L\setminus\Phi_I|\leq2\ell(u)$. Apply [F4] with the component $D$ of [F6] to obtain finiteness of $W_D$. This uses a finite inversion set, regardless of the size or type of $W_I$ or $W_L$. [F2, F3, F4, F6, step 3.1] ∎
