---
title: Annular extension and cutoff gluing construction
status: published
research_item: def-se-extension-construction
dependency_level: 14
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 16: ` Lemma 3.11 proof, annulus and formula for E `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-boundary-state-space](item-def-se-boundary-state-space)
- [lem-se-sobolev-extension-retraction](item-lem-se-sobolev-extension-retraction)
- [lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing](item-lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing)
- [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)


## Definition

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset B_{R_0}(0)$ be a compact smooth obstacle, and put $\Omega=\mathbb R^n\setminus\Theta$ and $\Omega_0=B_{R_0}(0)\setminus\Theta$, with the connected exterior geometry specified in the exterior-domain definition. Let $1\le s\le2$ and let $X^s(\Omega_0)$ be the space of $H^s(\Omega_0)$ functions whose value trace on $\partial\Theta$ is zero, with the inherited $H^s$ norm. Here the domain Sobolev spaces use the whole-space Bessel-potential restriction and quotient norm convention of the boundary-state definition.

Choose $\varepsilon>0$ small enough that $R_0-3\varepsilon>0$ and $\Theta\subset B_{R_0-3\varepsilon}(0)$. Fix smooth functions $\zeta,\widetilde\zeta:\mathbb R^n\to[0,1]$ such that $\zeta=0$ on $B_{R_0-2\varepsilon}(0)$, $\zeta=1$ for $|x|\ge R_0-\varepsilon$, $\widetilde\zeta=0$ on $B_{R_0-3\varepsilon}(0)$, and $\widetilde\zeta=1$ on $\operatorname{supp}\zeta$. Set $\mathcal A=\{x:R_0-3\varepsilon<|x|<R_0\}$. Fix a single linear annular extension operator $E_{\mathcal A}$ which restricts to the identity on $\mathcal A$ and is bounded $H^s(\mathcal A)\to H^s(\mathbb R^n)$ for every $0\le s\le2$.

For $u\in X^s(\Omega_0)$ define $E u=\widehat{(1-\zeta)u}+\left.\widetilde\zeta E_{\mathcal A}((\zeta u)|_{\mathcal A})\right|_\Omega$. The hat means extension by zero from $\Omega_0$ to $\Omega$ across the artificial outer sphere only. The operator depends on the fixed choices of cutoffs and $E_{\mathcal A}$.

## Definition references

[def-se-geometry](item-def-se-geometry)

[def-se-boundary-state-space](item-def-se-boundary-state-space)

[lem-se-sobolev-extension-retraction](item-lem-se-sobolev-extension-retraction)

[lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing](item-lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing)

[math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Justification

Compactness and the strict inclusion of $\Theta$ in the outer ball allow the stated positive gap. The Euclidean cutoff lemma supplies nested smooth cutoffs with the stated support and value conditions. The annulus is a bounded smooth domain, so the simultaneous Sobolev extension result supplies one right inverse $E_{\mathcal A}$ bounded at every order from zero through two. The Axiom of Choice is retained as an assumption of the extension and gluing suppliers.

Here $H^1_0(\Omega)=W^{1,2}_0(\Omega;\mathbb C)$ denotes the closure of $C_c^\infty(\Omega;\mathbb C)$ in $W^{1,2}(\Omega;\mathbb C)$, as in [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure). The integer-order identification in [lem-se-sobolev-extension-retraction](item-lem-se-sobolev-extension-retraction) makes this equivalently the closure in the restriction-space $H^1(\Omega)$ norm. The standing Axiom of Choice includes the Countable Choice assumption of the closure definition.

The partial-extension and gluing result applies with $L=R_0$ and these fixed choices. It shows that the displayed expression is a well-defined bounded linear map $H^s(\Omega_0)\to H^s(\Omega)$, restricts to the original function on $\Omega_0$, and preserves its obstacle-boundary value trace. Because $u\in X^s(\Omega_0)$ has zero obstacle trace, the same result also places $Eu$ in $H^1_0(\Omega)$. In particular $Eu\in H^s(\Omega)\cap H^1_0(\Omega)$. No extension by zero across the obstacle or additional normal-derivative condition is asserted.

## Source notes

The original article is cited for attribution of the construction in the proof of Lemma 3.11. The independent suppliers above establish that the choices and formula are well defined and have the stated properties.
