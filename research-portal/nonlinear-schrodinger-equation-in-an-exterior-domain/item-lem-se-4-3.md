---
title: "Lemma 4.3: perturbed observability modulo a remainder"
status: published
research_item: lem-se-4-3
dependency_level: 16
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 18, Lemma 4.3 and equation (4.4)
---

PDF p. 18: ` Lemma 4.3; (4.4) `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-trajectory](item-def-se-trajectory)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [def-se-regularized-adjoint](item-def-se-regularized-adjoint)
- [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution)
- [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)
- [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)
- [lem-se-4-2](item-lem-se-4-2)
- [prop-se-integer-commutator](item-prop-se-integer-commutator)
- [prop-se-fractional-interpolation](item-prop-se-fractional-interpolation)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice and hypotheses (H) and (W): $n\ge2$, $\Omega=\mathbb R^n\setminus\Theta$ is the connected exterior of a nonempty compact smooth nontrapping obstacle, $T>0$, and $w$ is the reference trajectory specified in [def-se-trajectory](item-def-se-trajectory). Let $H_D^s(\Omega)$ be the Dirichlet spectral scale, $R=(I-\Delta_D)^{-1}$, and $U(t)$ the adjoint evolution in [def-se-regularized-adjoint](item-def-se-regularized-adjoint). Let $\varphi,\chi,\psi$ be the cutoffs of [def-se-control-cutoffs](item-def-se-control-cutoffs), so $\chi=1-\varphi$ and $0\le\chi\le\psi$. For each $\sigma\in\{-1,-2\}$ there is $C>0$, depending on the fixed data but not on $v_0$, such that every $v_0\in H_D^\sigma(\Omega)$, with $v(t)=U(t)v_0$ and $y(t)=Rv(t)$, satisfies

$$\|v_0\|_{H_D^\sigma}^2\le C\left(\int_0^T\|\varphi v(t)\|_{H_D^\sigma}^2\,dt+\int_0^T\|\psi y(t)\|_{L^2}^2\,dt\right).$$

## Facts & Assumptions

[F1] The exterior geometry and nontrapping condition are those of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping), and (W) is [def-se-trajectory](item-def-se-trajectory). The scale and resolvent satisfy $R:H_D^s\to H_D^{s+2}$ isometrically [def-se-dirichlet-scale](item-def-se-dirichlet-scale). Choice is assumed as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] The cutoffs satisfy $\chi=1-\varphi$, $0\le\chi\le\psi$, and $\chi\in C_c^\infty(\mathbb R^n)$ [def-se-control-cutoffs](item-def-se-control-cutoffs). Multiplication by these cutoffs is bounded on the relevant scale levels [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers). Time integrals below are squared Bochner norms as specified in [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

[F3] The regularized adjoint is $y=RU(t)v_0$ with $y_0=Rv_0$, and compatible constructions agree across scale orders [def-se-regularized-adjoint](item-def-se-regularized-adjoint). The adjoint evolution and its inverse are uniformly bounded on each level between $-2$ and $2$ [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution). Higher scale levels embed continuously into lower ones [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract).

[F4] For $0\le\theta\le1$, localized smoothing gives $\int_0^T\|\chi y(t)\|_{H_D^{\theta+1/2}}^2dt\le C\|y_0\|_{H_D^\theta}^2$ whenever $v_0\in H_D^{\theta-2}$ [lem-se-4-2](item-lem-se-4-2). Spectral interpolation gives $\|y_0\|_{H_D^{1/2}}^2\le\varepsilon\|y_0\|_{H_D^1}^2+C_\varepsilon\|y_0\|_2^2$ [prop-se-fractional-interpolation](item-prop-se-fractional-interpolation).

[F5] At either $\sigma=-1$ or $\sigma=-2$, the localized resolvent commutator gives $\|\varphi Rv\|_{H_D^{\sigma+2}}\le\|\varphi v\|_{H_D^\sigma}+C\|\psi Rv\|_2$ [prop-se-integer-commutator](item-prop-se-integer-commutator).

## Proof

[F1] The exterior geometry and nontrapping condition are those of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping), and (W) is [def-se-trajectory](item-def-se-trajectory). The scale and resolvent satisfy $R:H_D^s\to H_D^{s+2}$ isometrically [def-se-dirichlet-scale](item-def-se-dirichlet-scale). Choice is assumed as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] The cutoffs satisfy $\chi=1-\varphi$, $0\le\chi\le\psi$, and $\chi\in C_c^\infty(\mathbb R^n)$ [def-se-control-cutoffs](item-def-se-control-cutoffs). Multiplication by these cutoffs is bounded on the relevant scale levels [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers). Time integrals below are squared Bochner norms as specified in [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

[F3] The regularized adjoint is $y=RU(t)v_0$ with $y_0=Rv_0$, and compatible constructions agree across scale orders [def-se-regularized-adjoint](item-def-se-regularized-adjoint). The adjoint evolution and its inverse are uniformly bounded on each level between $-2$ and $2$ [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution). Higher scale levels embed continuously into lower ones [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract).

[F4] For $0\le\theta\le1$, localized smoothing gives $\int_0^T\|\chi y(t)\|_{H_D^{\theta+1/2}}^2dt\le C\|y_0\|_{H_D^\theta}^2$ whenever $v_0\in H_D^{\theta-2}$ [lem-se-4-2](item-lem-se-4-2). Spectral interpolation gives $\|y_0\|_{H_D^{1/2}}^2\le\varepsilon\|y_0\|_{H_D^1}^2+C_\varepsilon\|y_0\|_2^2$ [prop-se-fractional-interpolation](item-prop-se-fractional-interpolation).

[F5] At either $\sigma=-1$ or $\sigma=-2$, the localized resolvent commutator gives $\|\varphi Rv\|_{H_D^{\sigma+2}}\le\|\varphi v\|_{H_D^\sigma}+C\|\psi Rv\|_2$ [prop-se-integer-commutator](item-prop-se-integer-commutator).



**Given:** The hypotheses, cutoffs, index and datum in the statement. Put $\tau=\sigma+2\in\{0,1\}$ and $y_0=Rv_0$.

**Goal:** Establish the displayed estimate, uniformly in the datum.

1.1 By the inverse evolution bound at order $\tau-2$ and the resolvent isometry, $\|y_0\|_{H_D^\tau}\le C\|y(t)\|_{H_D^\tau}$ for every $t\in[0,T]$. The same argument at order $-2$ gives $\|y_0\|_2\le C\|y(t)\|_2$. These statements apply simultaneously by scale embedding and compatibility. Since $y=\varphi y+\chi y$, integration and the triangle inequality yield $\|y_0\|_{H_D^\tau}^2\le C\int_0^T(\|\varphi y\|_{H_D^\tau}^2+\|\chi y\|_{H_D^\tau}^2)dt$ and $\|y_0\|_2^2\le C\int_0^T(\|\varphi y\|_2^2+\|\psi y\|_2^2)dt$. In the second inequality use $0\le\chi\le\psi$. [F1, F2, F3, given]

2.1 If $\tau=0$, the pointwise cutoff inequality in step 1.1 directly controls the $\chi y$ term by $\psi y$. If $\tau=1$, the datum belongs to $H_D^{-3/2}$ by the scale embedding. Apply smoothing with $\theta=1/2$, then interpolation, to get $\int_0^T\|\chi y\|_{H_D^1}^2dt\le C\|y_0\|_{H_D^{1/2}}^2\le C\varepsilon\|y_0\|_{H_D^1}^2+C_\varepsilon\|y_0\|_2^2$. Insert the second estimate of step 1.1, use $\|\varphi y\|_2\le\|\varphi y\|_{H_D^1}$, and choose $\varepsilon$ small enough to absorb the first term into the left side. Thus in both cases $\|y_0\|_{H_D^\tau}^2\le C\int_0^T(\|\varphi y\|_{H_D^\tau}^2+\|\psi y\|_2^2)dt$. [F2, F3, F4, step 1.1]

3.1 Apply the commutator estimate to $v(t)$ at the chosen endpoint, square it and integrate. The resulting bound for the $\varphi y$ term in step 2.1 is a constant times the sum of the two integrals in the goal. Finally $\|y_0\|_{H_D^\tau}=\|v_0\|_{H_D^\sigma}$ by the resolvent isometry. This proves the estimate. [F1, F5, step 2.1] ∎

## Source notes

The article is cited for attribution of Lemma 4.3 and its proof strategy. The deduction above uses the stated suppliers and does not use the article's lemma as a premise.
