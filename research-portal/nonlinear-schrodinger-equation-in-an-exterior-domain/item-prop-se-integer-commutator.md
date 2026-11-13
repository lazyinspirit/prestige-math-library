---
title: Integer resolvent commutator and localized first-order bounds
status: draft
research_item: prop-se-integer-commutator
dependency_level: 8
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 10: ` commutator identity and bounds in Lemma 3.3 `

## Prerequisites

- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)
- [lem-author-03489e9088b7-spectral-cutoff-scale-identifications](item-lem-author-03489e9088b7-spectral-cutoff-scale-identifications)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-distributional-derivative](https://alphabetamath.cc/item/def-distributional-derivative)
- [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor)
- [math:def-locally-integrable-function-as-a-regular-distribution](https://alphabetamath.cc/item/def-locally-integrable-function-as-a-regular-distribution)
- [math:def-multiplication-of-a-distribution-by-a-smooth-function](https://alphabetamath.cc/item/def-multiplication-of-a-distribution-by-a-smooth-function)
- [math:thm-leibniz-rule-for-distributions](https://alphabetamath.cc/item/thm-leibniz-rule-for-distributions)


## Statement

Assume the Axiom of Choice. Let $\Omega=\mathbb R^n\setminus\Theta$, $n\ge2$, be the smooth connected exterior of a nonempty compact obstacle, and let $\varphi,\psi$ be the real cutoffs of [def-se-control-cutoffs](item-def-se-control-cutoffs). Let $\Delta_D$ be the Dirichlet Laplacian, $A=I-\Delta_D$, $\mathcal R=A^{-1}$, and $H_D^s(\Omega)$ the spectral scale of [def-se-dirichlet-scale](item-def-se-dirichlet-scale). Write $C=[\Delta,\varphi]$ for the distributional first-order operator
$$Cu=(\Delta\varphi)u+2\nabla\varphi\cdot\nabla u=2\operatorname{div}(u\nabla\varphi)-(\Delta\varphi)u.$$
It extends boundedly from $L^2(\Omega)$ to $H_D^{-1}(\Omega)$ and from $H_D^1(\Omega)$ to $L^2(\Omega)$, and, for $0\le\alpha\le1$, from $H_D^\alpha(\Omega)$ to $H_D^{\alpha-1}(\Omega)$. These extensions are consistent, and $Cu=C(\psi u)$ for $u\in L^2(\Omega)$ and hence for $u\in H_D^\alpha(\Omega)$, $0\le\alpha\le1$.

For $-2\le\sigma<0$, $\tau=\sigma+2$, and $v\in H_D^\sigma(\Omega)$, put $y=\mathcal Rv$ and set $\rho(\sigma)=\sigma+1$ when $-1<\sigma<0$, and $\rho(\sigma)=0$ otherwise. Then, as an identity in $H_D^\tau(\Omega)$,
$$\varphi\mathcal Rv-\mathcal R(\varphi v)=-\mathcal R C\mathcal Rv,$$
where $Cy$ is regarded as an element of $H_D^\sigma$. Consequently there is a constant $C_\varphi$ independent of $v$ such that
$$\|\varphi\mathcal Rv\|_{H_D^\tau}\le\|\varphi v\|_{H_D^\sigma}+C_\varphi\|\psi\mathcal Rv\|_{H_D^{\rho(\sigma)}}.$$

## Facts & Assumptions

[F1] The cutoffs are real and smooth, $\varphi$ is constant outside a compact annulus, and $\psi=1$ on a neighborhood of $\operatorname{supp}\nabla\varphi$. Thus the derivatives of $\varphi$ occurring below are bounded and compactly supported, and $\varphi$ vanishes near the obstacle boundary. [def-se-control-cutoffs](item-def-se-control-cutoffs)

[F2] The Dirichlet realization has domain $H^2(\Omega)\cap H^1_0(\Omega)$. The scale has $H_D^0=L^2$, $H_D^1=H^1_0$, and $H_D^2=D(A)$; $H_D^{-1}$ is the pivot antidual of $H_D^1$. The $H_D^1$ norm controls the $L^2$ norms of a function and its first weak derivatives. [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) [def-se-dirichlet-scale](item-def-se-dirichlet-scale) [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[F3] Under Choice, $\mathcal R:H_D^s\to H_D^{s+2}$ is an onto isometry. The spectral scale embeds contractively from a higher index to a lower one, has the stated dense common core, and admits the endpoint operator interpolation bound. [prop-se-scale-flow](item-prop-se-scale-flow) [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) [lem-author-03489e9088b7-spectral-cutoff-scale-identifications](item-lem-author-03489e9088b7-spectral-cutoff-scale-identifications) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] Multiplication by $\varphi$ and $\psi$ is bounded on each $H_D^s$ for $-2\le s\le2$, consistently with ordinary multiplication on $L^2$. [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)

[F5] Distributional derivatives are signed transposes of test-function derivatives on complex-linear distributions, with bilinear test pairing and no conjugation. In the pivot pairing below the distribution is evaluated at the conjugated test function. [math:def-distributional-derivative](https://alphabetamath.cc/item/def-distributional-derivative)

[F6] The weak Leibniz rule applies on an arbitrary open set to a complex $H^k=W^{k,2}$ function and a smooth multiplier whose classical derivatives through order $k$ are bounded, for $k=1,2$. Its Countable Choice assumption follows here by applying the assumed Axiom of Choice to the family of values of a sequence of nonempty sets and composing the resulting choice function with that sequence. [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F7] Under Countable Choice, a locally integrable complex function determines its regular distribution by $T_u(\eta)=\int_\Omega u\eta$, depending only on its almost-everywhere class. The Countable Choice needed here follows from the existing Choice assumption as explained in [F6]. [math:def-locally-integrable-function-as-a-regular-distribution](https://alphabetamath.cc/item/def-locally-integrable-function-as-a-regular-distribution) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F8] For a smooth complex multiplier $a$ and any complex distribution $T$, multiplication is defined by $(aT)(\eta)=T(a\eta)$, with no conjugation. The distributional Leibniz rule holds for every multi-index on any open set, without a choice assumption. [math:def-multiplication-of-a-distribution-by-a-smooth-function](https://alphabetamath.cc/item/def-multiplication-of-a-distribution-by-a-smooth-function) [math:thm-leibniz-rule-for-distributions](https://alphabetamath.cc/item/thm-leibniz-rule-for-distributions)

## Proof

[F1] The cutoffs are real and smooth, $\varphi$ is constant outside a compact annulus, and $\psi=1$ on a neighborhood of $\operatorname{supp}\nabla\varphi$. Thus the derivatives of $\varphi$ occurring below are bounded and compactly supported, and $\varphi$ vanishes near the obstacle boundary. [def-se-control-cutoffs](item-def-se-control-cutoffs)

[F2] The Dirichlet realization has domain $H^2(\Omega)\cap H^1_0(\Omega)$. The scale has $H_D^0=L^2$, $H_D^1=H^1_0$, and $H_D^2=D(A)$; $H_D^{-1}$ is the pivot antidual of $H_D^1$. The $H_D^1$ norm controls the $L^2$ norms of a function and its first weak derivatives. [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) [def-se-dirichlet-scale](item-def-se-dirichlet-scale) [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[F3] Under Choice, $\mathcal R:H_D^s\to H_D^{s+2}$ is an onto isometry. The spectral scale embeds contractively from a higher index to a lower one, has the stated dense common core, and admits the endpoint operator interpolation bound. [prop-se-scale-flow](item-prop-se-scale-flow) [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) [lem-author-03489e9088b7-spectral-cutoff-scale-identifications](item-lem-author-03489e9088b7-spectral-cutoff-scale-identifications) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] Multiplication by $\varphi$ and $\psi$ is bounded on each $H_D^s$ for $-2\le s\le2$, consistently with ordinary multiplication on $L^2$. [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)

[F5] Distributional derivatives are signed transposes of test-function derivatives on complex-linear distributions, with bilinear test pairing and no conjugation. In the pivot pairing below the distribution is evaluated at the conjugated test function. [math:def-distributional-derivative](https://alphabetamath.cc/item/def-distributional-derivative)

[F6] The weak Leibniz rule applies on an arbitrary open set to a complex $H^k=W^{k,2}$ function and a smooth multiplier whose classical derivatives through order $k$ are bounded, for $k=1,2$. Its Countable Choice assumption follows here by applying the assumed Axiom of Choice to the family of values of a sequence of nonempty sets and composing the resulting choice function with that sequence. [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F7] Under Countable Choice, a locally integrable complex function determines its regular distribution by $T_u(\eta)=\int_\Omega u\eta$, depending only on its almost-everywhere class. The Countable Choice needed here follows from the existing Choice assumption as explained in [F6]. [math:def-locally-integrable-function-as-a-regular-distribution](https://alphabetamath.cc/item/def-locally-integrable-function-as-a-regular-distribution) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F8] For a smooth complex multiplier $a$ and any complex distribution $T$, multiplication is defined by $(aT)(\eta)=T(a\eta)$, with no conjugation. The distributional Leibniz rule holds for every multi-index on any open set, without a choice assumption. [math:def-multiplication-of-a-distribution-by-a-smooth-function](https://alphabetamath.cc/item/def-multiplication-of-a-distribution-by-a-smooth-function) [math:thm-leibniz-rule-for-distributions](https://alphabetamath.cc/item/thm-leibniz-rule-for-distributions)



**Given:** The geometry, cutoffs, Choice assumption, scale, and indices in the Statement.

**Goal:** Establish the commutator extensions, localization, resolvent identity, and estimate.

1.1 For $u\in L^2$, Cauchy–Schwarz gives $\int_K|u|\le |K|^{1/2}\|u\|_2$ for every compact $K\subset\Omega$, so $u\in L^1_{\mathrm{loc}}$ and [F7] identifies it with a regular distribution. Smooth multiplication in [F8] agrees with pointwise multiplication on such distributions, since $(aT_u)(\eta)=\int_\Omega ua\eta=T_{au}(\eta)$. Apply the distributional Leibniz rule in [F8] with $a=\varphi$ and $\alpha=2e_j$ in each coordinate: $\partial_j^2(\varphi u)-\varphi\partial_j^2u=(\partial_j^2\varphi)u+2(\partial_j\varphi)\partial_j u$. Apply its first-order case also to $(\partial_j\varphi)u$ and sum over $j$. These finite identities give $\Delta(\varphi u)-\varphi\Delta u=(\Delta\varphi)u+2\nabla\varphi\cdot\nabla u=2\operatorname{div}(u\nabla\varphi)-(\Delta\varphi)u$ in distributions. Thus defining $Cu$ by this divergence expression using [F5] gives exactly $[\Delta,\varphi]u$, even when $u$ has no $L^2$ derivatives. For $\zeta\in C_c^\infty(\Omega)$ its pivot pairing is $-2\int_\Omega u\nabla\varphi\cdot\nabla\overline\zeta-\int_\Omega(\Delta\varphi)u\overline\zeta$. Cauchy–Schwarz and boundedness of the coefficients bound its absolute value by a constant times $\|u\|_2\|\zeta\|_{H_D^1}$. Density of test functions in $H^1_0$ therefore defines a bounded antidual element $Cu\in H_D^{-1}$. For $u\in H_D^1=H^1_0$, apply [F6] with $k=1$ and the smooth multipliers $\partial_j\varphi$, whose derivatives through order one are bounded by [F1]. Summing the resulting identities gives the first displayed expression and its $L^2$ norm is bounded by a constant times $\|u\|_{H_D^1}$. The two definitions agree as distributions, hence as pivot-antidual elements. [F1, F2, F5, F6, F7, F8]

2.1 Apply the scale operator interpolation bound to these consistent endpoint maps. The intermediate indices are $\alpha$ and $\alpha-1$, yielding the asserted bounds for $0<\alpha<1$; the endpoints are step 1.1. Since $\psi=1$ on a neighborhood of the support of $\nabla\varphi$, the functions $(1-\psi)\nabla\varphi$ and $(1-\psi)\Delta\varphi$ vanish, and also $\nabla\psi$ vanishes on the support of $\nabla\varphi$. The divergence formula then gives $Cu=C(\psi u)$ for $u\in L^2$ in distributions. It follows at every stated nonnegative scale level by consistency of the embeddings and extensions. [F1, F3, F4, F5, step 1.1]

2.2 For $v\in L^2$, let $y=\mathcal Rv\in D(A)$. Apply [F6] with $k=2$, $u=y\in H^2$ and $\eta=\varphi$; [F1] supplies every required bounded classical derivative, including $\varphi$ itself. This gives $\varphi y\in H^2$ and its weak Laplacian formula; approximation in $H^1_0$ by compactly supported smooth functions shows $\varphi y\in H^1_0$. Thus $\varphi y\in D(A)$ and $A(\varphi y)=\varphi Ay-Cy$ in $L^2$. Applying $\mathcal R$ gives $\varphi\mathcal Rv-\mathcal R(\varphi v)=-\mathcal R C\mathcal Rv$. Here $Cy\in L^2$ by step 1.1. [F1, F2, F3, F6, step 1.1]

3.1 Let $-2\le\sigma<0$. If $\tau\le1$, then $y\in H_D^\tau\subset L^2$, and steps 1.1 and 2.1 give $\|Cy\|_{H_D^\sigma}\le\|Cy\|_{H_D^{-1}}\le C\|\psi y\|_2$, because $\sigma\le-1$. If $1<\tau<2$, put $\alpha=\tau-1=\rho(\sigma)$. Then $y\in H_D^\alpha$ and interpolation and localization give $\|Cy\|_{H_D^\sigma}\le C\|\psi y\|_{H_D^\alpha}$ because $\alpha-1=\sigma$. These estimates also show that $C\mathcal R:H_D^\sigma\to H_D^\sigma$ is bounded. The common spectral core lies in $L^2$ and is dense in $H_D^\sigma$; the multiplier and resolvent maps on both sides of step 2.2 are bounded on the required levels. Passing to the limit proves the identity in $H_D^\tau$. Finally, use the triangle inequality, the isometry $\mathcal R:H_D^\sigma\to H_D^\tau$, and the preceding bounds for $Cy$. This proves the displayed estimate. [F3, F4, step 1.1, step 2.1, step 2.2] ∎

## Source notes

The article is cited for attribution of the commutator identity and its application in the proof of Lemma 3.3, PDF page 10. The argument above uses the stated mathematical suppliers and does not use the article as proof of itself.
