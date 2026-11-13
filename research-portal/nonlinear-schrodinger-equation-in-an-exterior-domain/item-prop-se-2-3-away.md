---
title: Strichartz estimate away from the obstacle
status: published
research_item: prop-se-2-3-away
dependency_level: 8
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: Proposition 2.3, equation (2.4), PDF page 7
---

PDF p. 7: ` Proposition 2.3; (2.4) `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [prop-se-import-bgt-strichartz](item-prop-se-import-bgt-strichartz)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [lem-se-interpolation-sobolev-model](item-lem-se-interpolation-sobolev-model)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)


## Statement

Assume the Axiom of Choice. Let $\Omega=\mathbb R^n\setminus\Theta$, $n\ge2$, be the connected smooth exterior of a nonempty compact non-trapping obstacle, in the sense of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping). Let $\Delta_D$ be the Dirichlet Laplacian, $H_D^s(\Omega)$ its spectral scale, and $W(t)=e^{it\Delta_D}$ as in [def-se-dirichlet-scale](item-def-se-dirichlet-scale) and [prop-se-scale-flow](item-prop-se-scale-flow).

Let $T>0$, $0\le s\le1$, and let $2<p\le\infty$ and $2\le q<\infty$ satisfy $2/p+n/q=n/2$, with $1/\infty=0$. Let $\chi\in C_c^\infty(\mathbb R^n)$ equal one near $\Theta$. For this statement use $W^{0,q}(\Omega)=L^q(\Omega)$, the usual first-order weak Sobolev space $W^{1,q}(\Omega)$, and, for $0<s<1$, the complex interpolation space $W^{s,q}(\Omega)=[L^q(\Omega),W^{1,q}(\Omega)]_s$ in the convention of [lem-se-interpolation-sobolev-model](item-lem-se-interpolation-sobolev-model). Then there is a constant $C$ depending on the fixed data such that, for every $u_0\in H_D^s(\Omega)$,
$$\|(1-\chi)W(t)u_0\|_{L^p(0,T;W^{s,q}(\Omega))}\le C\|u_0\|_{H_D^s(\Omega)}.$$
The time-space norm is the Bochner norm, with essential supremum when $p=\infty$, as in [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

## Facts & Assumptions

[F1] [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping) provide the smooth exterior and non-trapping hypotheses. [def-se-dirichlet-scale](item-def-se-dirichlet-scale) and [prop-se-scale-flow](item-prop-se-scale-flow) provide the Dirichlet scale and the evolution $W(t)$ under Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] [lem-se-interpolation-sobolev-model](item-lem-se-interpolation-sobolev-model) specifies the complex interpolation convention for the fractional target, and [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces) specifies the Bochner mixed norm.

[F3] Under these geometric, exponent, cutoff and Choice hypotheses, [prop-se-import-bgt-strichartz](item-prop-se-import-bgt-strichartz) bounds $(1-\chi)e^{it\Delta_D}u_0$ in $L^p(0,T;\mathcal W^{s,q})$ by a constant times $\|u_0\|_{H_D^s}$, where $\mathcal W^{0,q}=L^q$, $\mathcal W^{1,q}=W^{1,q}$, and $\mathcal W^{s,q}=[L^q,W^{1,q}]_s$ for $0<s<1$.

[F4] [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) supplies the complex weak-derivative spaces $W^{k,q}(\Omega)$ at $k=0,1$; its Countable Choice hypothesis is covered by the assumed AC. [Complex $L^p$ classes and Euclidean test-function conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions) supplies the complex $L^q$ classes and the componentwise smooth compactly supported class $C_c^\infty(\mathbb R^n)$ used for the cutoff.

## Proof

[F1] [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping) provide the smooth exterior and non-trapping hypotheses. [def-se-dirichlet-scale](item-def-se-dirichlet-scale) and [prop-se-scale-flow](item-prop-se-scale-flow) provide the Dirichlet scale and the evolution $W(t)$ under Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] [lem-se-interpolation-sobolev-model](item-lem-se-interpolation-sobolev-model) specifies the complex interpolation convention for the fractional target, and [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces) specifies the Bochner mixed norm.

[F3] Under these geometric, exponent, cutoff and Choice hypotheses, [prop-se-import-bgt-strichartz](item-prop-se-import-bgt-strichartz) bounds $(1-\chi)e^{it\Delta_D}u_0$ in $L^p(0,T;\mathcal W^{s,q})$ by a constant times $\|u_0\|_{H_D^s}$, where $\mathcal W^{0,q}=L^q$, $\mathcal W^{1,q}=W^{1,q}$, and $\mathcal W^{s,q}=[L^q,W^{1,q}]_s$ for $0<s<1$.



**Given:** The domain, exponents, cutoff and initial datum in the Statement.

**Goal:** Establish the displayed away-from-obstacle estimate.

1.1 The domain and non-trapping hypotheses, $T$, cutoff, exponents and Choice assumption meet the hypotheses of [F3], using the cutoff convention in [F4]. The evolution there is $e^{it\Delta_D}=W(t)$ by [F1]. Apply [F3] to the given $u_0\in H_D^s$ to obtain its away-from-obstacle bound. [F1, F3, F4]

2.1 At $s=0,1$ the target spaces in [F3] agree with those in the Statement by the weak-derivative endpoint convention in [F4]; for $0<s<1$ they agree by the stated complex interpolation convention. The time norms also agree by [F2]. Substituting these identifications into the bound from step 1.1 gives the displayed estimate. [F2, F3, F4, step 1.1] ∎

## Source notes

The article is cited for attribution of Proposition 2.3 and (2.4), not as proof of its own estimate. The independent supplier records the imported endpoint estimates and its local interpolation argument. The fractional target convention is made explicit here; this does not assert that the article uniquely specified that convention.
