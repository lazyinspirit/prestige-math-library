---
title: Quadratic-cubic estimates near a reference trajectory
status: published
research_item: prop-se-trajectory-nonlinear-estimates
dependency_level: 12
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 20, proof of Theorem 1.5
---

PDF p. 20: ` estimates for F(w,z) and its difference `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-trajectory](item-def-se-trajectory)
- [def-se-trajectory-remainder](item-def-se-trajectory-remainder)
- [def-se-energy-space](item-def-se-energy-space)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [prop-se-scale-identifications](item-prop-se-scale-identifications)
- [lem-se-trajectory-polynomial-tame-bound](item-lem-se-trajectory-polynomial-tame-bound)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)


## Statement

Assume the Axiom of Choice. Let $n\in\{2,3\}$, and let $\Omega=\mathbb R^n\setminus\Theta$ be the connected exterior of a nonempty compact obstacle with smooth boundary. Let $T>0$, $\lambda\in\mathbb R\setminus\{0\}$, and let the reference trajectory $w$ satisfy (W): $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ and $i\partial_t w+\Delta w+\lambda|w|^2w=0$ in space-time distributions. The intersection has the sum norm. Define $F(w,z)=\lambda(2w|z|^2+\overline w z^2+|z|^2z)$.

Here $H_D^s=D((I-\Delta_D)^{s/2})$ has its spectral norm, with $H_D^1=H^1_0$ and $H_D^2=H^2\cap H^1_0$ as spaces with equivalent norms. The space $H^1_0$ is the $H^1$ closure of compactly supported smooth complex functions. For $s=1$ put $X_T=C([0,T];H^1_0(\Omega))\cap L^4_tL^\infty_x$, with norm $\sup_t\|z(t)\|_{H^1}+\|z\|_{L^4_tL^\infty_x}$; its mixed-norm representative is jointly measurable and agrees almost everywhere in time with the continuous path. For $s=2$ put $X_T=C([0,T];H_D^2(\Omega))$ with its supremum spectral norm. The mixed norm is the $L^4(0,T)$ norm of the spatial essential supremum, and does not require strong measurability into $L^\infty(\Omega)$.

For each $s\in\{1,2\}$ and $z,\widetilde z\in X_T$, the functions $F(w,z)$ and $F(w,\widetilde z)$ belong to the Bochner space $L^1(0,T;H_D^s(\Omega))$. There is a constant $C$ depending on the fixed domain, dimension, $T$, $\lambda$ and the displayed norms of $w$, such that

$$\|F(w,z)\|_{L^1_tH_D^s}\le C(\|z\|_{X_T}^2+\|z\|_{X_T}^3),$$

$$\|F(w,z)-F(w,\widetilde z)\|_{L^1_tH_D^s}\le C(\|z\|_{X_T}+\|\widetilde z\|_{X_T}+\|z\|_{X_T}^2+\|\widetilde z\|_{X_T}^2)\|z-\widetilde z\|_{X_T}.$$

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-trajectory](item-def-se-trajectory)

[def-se-trajectory-remainder](item-def-se-trajectory-remainder)

[def-se-energy-space](item-def-se-energy-space)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[prop-se-scale-identifications](item-prop-se-scale-identifications)

[def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)

[math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] The reference trajectory and polynomial remainder are as defined in [def-se-trajectory](item-def-se-trajectory) and [def-se-trajectory-remainder](item-def-se-trajectory-remainder). The geometry is that of [def-se-geometry](item-def-se-geometry), and the full Choice assumption required by the suppliers is recorded in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] The operator $\Delta_D$ and its positive self-adjoint shift $I-\Delta_D$ are specified by [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian). Under these geometry and Choice hypotheses, [prop-se-scale-identifications](item-prop-se-scale-identifications) identifies $H_D^1$ with $H^1_0$ and $H_D^2$ with $H^2\cap H^1_0$, with equivalent norms. The energy control space and compatible mixed representatives are specified by [def-se-energy-space](item-def-se-energy-space) and [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

[F3] [lem-se-trajectory-polynomial-tame-bound](item-lem-se-trajectory-polynomial-tame-bound) gives strong measurability, Bochner integrability and the quadratic-cubic growth and difference bounds in the energy space when $w\in C_tW^{1,\infty}$. On the stated exterior in dimensions two and three it gives the corresponding bounds in $C_t(H^2\cap H^1_0)$ when $w\in C_tH^2$, using the ordinary $H^2$ norm. Its constants depend on the fixed interval, coefficient bounds, coupling and, in the order-two case, the domain.

[F4] The complex weak Sobolev spaces and norms are defined in [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm). For $p=\infty$ the norm is the maximum of the essential-supremum norms of the weak derivatives of order at most $k$, including the function itself. The Choice assumption in [F1] includes the countable choice required there.

## Proof

[F1] The reference trajectory and polynomial remainder are as defined in [def-se-trajectory](item-def-se-trajectory) and [def-se-trajectory-remainder](item-def-se-trajectory-remainder). The geometry is that of [def-se-geometry](item-def-se-geometry), and the full Choice assumption required by the suppliers is recorded in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] The operator $\Delta_D$ and its positive self-adjoint shift $I-\Delta_D$ are specified by [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian). Under these geometry and Choice hypotheses, [prop-se-scale-identifications](item-prop-se-scale-identifications) identifies $H_D^1$ with $H^1_0$ and $H_D^2$ with $H^2\cap H^1_0$, with equivalent norms. The energy control space and compatible mixed representatives are specified by [def-se-energy-space](item-def-se-energy-space) and [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

[F3] [lem-se-trajectory-polynomial-tame-bound](item-lem-se-trajectory-polynomial-tame-bound) gives strong measurability, Bochner integrability and the quadratic-cubic growth and difference bounds in the energy space when $w\in C_tW^{1,\infty}$. On the stated exterior in dimensions two and three it gives the corresponding bounds in $C_t(H^2\cap H^1_0)$ when $w\in C_tH^2$, using the ordinary $H^2$ norm. Its constants depend on the fixed interval, coefficient bounds, coupling and, in the order-two case, the domain.



**Given:** The domain, trajectory, time interval and functions in the Statement.

**Goal:** Prove the stated membership and both estimates in each control space.

1.1 The (W) intersection continuity implies $w\in C([0,T];W^{1,\infty})$: the order-zero and order-one weak derivatives are among those of order at most two, so the maximum norms of [F4] satisfy $\|u\|_{W^{1,\infty}}\le\|u\|_{W^{2,\infty}}$. The value-plus-first-derivative sum norm used in [F3] is at most $(n+1)\|u\|_{W^{2,\infty}}$, which also gives continuity in that norm. It also implies $w\in C([0,T];H^2)$ by the order-two norm equivalence. The corresponding coefficient suprema are finite on the compact time interval. The polynomial in the Statement is exactly the remainder in [F1]. [given, F1, F2, F3, F4]

2.1 For $s=1$, apply the energy case of [F3] using the compatible representatives in [F2]. It yields the asserted Bochner membership and both inequalities with the $H^1_0$ norm. The equivalence in [F2] transfers the output norm to $H_D^1$, changing only the constant. [F2, F3, step 1.1]

3.1 For $s=2$, [F2] identifies the given paths with continuous paths in $H^2\cap H^1_0$, with equivalent supremum norms. Apply the order-two case of [F3] to $w$, $z$ and $\widetilde z$; it gives the asserted integrability and inequalities with ordinary $H^2$ norms. Use the same equivalence on the input and output norms and enlarge the constant to absorb the finitely many equivalence factors. This proves both estimates for either value of $s$. [F2, F3, step 1.1, step 2.1] ∎

## Source notes

The original article is cited for attribution of the two estimates in the proof of Theorem 1.5. The argument above applies the separately authored tame-bound and scale-identification suppliers; the article is not used as proof of those inputs.
