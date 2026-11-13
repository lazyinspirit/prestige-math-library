---
title: Linearized propagator bounds in the nonlinear control spaces
status: published
research_item: prop-se-perturbed-strichartz
dependency_level: 15
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 20: ` Duhamel formula for S and properties (i)–(ii) `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-trajectory](item-def-se-trajectory)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-energy-space](item-def-se-energy-space)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [prop-se-potential-multipliers](item-prop-se-potential-multipliers)
- [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution)
- [prop-se-energy-duhamel](item-prop-se-energy-duhamel)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [lem-se-bounded-perturbation-dispersive-transfer](item-lem-se-bounded-perturbation-dispersive-transfer)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice and hypothesis (H): $n\in\{2,3\}$, $\Omega=\mathbb R^n\setminus\Theta$ is connected, $\Theta$ is a nonempty compact obstacle with smooth boundary, and its generalized reflected and glancing rays leave every compact set in finite forward time. Let $T>0$, $\lambda\in\mathbb R\setminus\{0\}$, and let $w$ satisfy (W): $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ and $i\partial_t w+\Delta w+\lambda|w|^2w=0$ distributionally. Here $H_D^s=D((I-\Delta_D)^{s/2})$ for $s\ge0$, where $\Delta_D$ is the Dirichlet Laplacian, and $W^{2,\infty}$ consists of classes whose weak derivatives through order two are essentially bounded.

Put $V_1=2\lambda|w|^2$, $V_2=\lambda w^2$ and $W(t)=e^{it\Delta_D}$. Let $S(t,r)$ be the real-linear propagator for $iz_t+\Delta_Dz+V_1z+V_2\overline z=0$. For $I=[r,b]\subseteq[0,T]$, let $X_I$ consist of continuous $H^1_0(\Omega)$-valued paths admitting a compatible jointly measurable representative with finite scalar $L^4(I;L^\infty(\Omega))$ mixed norm. Equip it with the sum of that norm and the supremum inherited $H^1_0$ norm; $H^1_0$ is the $H^1$-closure of compactly supported smooth functions.

There is a constant $C$, depending on the fixed domain, $T$, $\lambda$ and $w$, such that for $s=1,2$, every $h\in H_D^s$ and every strongly measurable $f\in L^1(I;H_D^s)$,
$$\|S(\cdot,r)h\|_{X_I^s}+\left\|\int_r^{\cdot}S(\cdot,\rho)f(\rho)\,d\rho\right\|_{X_I^s}\le C\left(\|h\|_{H_D^s}+\|f\|_{L^1(I;H_D^s)}\right),$$
where $X_I^1=X_I$ and $X_I^2=C(I;H_D^2)$ with its supremum spectral norm. The integrals are Bochner integrals in the corresponding $H_D^s$ space. The mixed norm is sectionwise and does not assert strong measurability into $L^\infty(\Omega)$.

The homogeneous propagator also satisfies
$$S(t,r)h=W(t-r)h+i\int_r^t W(t-\rho)\bigl(V_1(\rho)S(\rho,r)h+V_2(\rho)\overline{S(\rho,r)h}\bigr)\,d\rho.$$
In a forced equation, a factor $i$ belonging to the forcing remains inside $S(t,\rho)$, since $S$ is only real-linear.

## Facts & Assumptions

[F1] The geometry and non-trapping convention are those of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping). The scale and trajectory, including the distributional equation in (W), are specified by [def-se-dirichlet-scale](item-def-se-dirichlet-scale) and [def-se-trajectory](item-def-se-trajectory). We assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] The closure definition of $H^1_0$, norm-continuous paths, Bochner $L^1$ forcing and scalar mixed norms are specified by [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation) and [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces). The compatible-representative convention and norm for $X_I$ are the corresponding interval version of [def-se-energy-space](item-def-se-energy-space).

[F3] [prop-se-potential-multipliers](item-prop-se-potential-multipliers) gives norm-continuous bounded multiplication by $V_1,V_2$ and bounded conjugation on $H_D^1$ and $H_D^2$, with consistent actions. [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution) supplies the unique real-linear evolution and its free-flow Duhamel equation. [prop-se-scale-flow](item-prop-se-scale-flow) supplies the strongly continuous unitary free group.

[F4] Under the stated geometry, [prop-se-energy-duhamel](item-prop-se-energy-duhamel) gives the free homogeneous $L^4_tL^\infty_x$ estimate on $[0,T]$. [lem-se-bounded-perturbation-dispersive-transfer](item-lem-se-bounded-perturbation-dispersive-transfer) transfers that estimate to a norm-continuous bounded real-linear perturbation, gives the corresponding retarded forcing estimate on every forward subinterval, and gives the $H_D^2$ energy estimate for consistent perturbations.

## Proof

[F1] The geometry and non-trapping convention are those of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping). The scale and trajectory, including the distributional equation in (W), are specified by [def-se-dirichlet-scale](item-def-se-dirichlet-scale) and [def-se-trajectory](item-def-se-trajectory). We assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] The closure definition of $H^1_0$, norm-continuous paths, Bochner $L^1$ forcing and scalar mixed norms are specified by [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation) and [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces). The compatible-representative convention and norm for $X_I$ are the corresponding interval version of [def-se-energy-space](item-def-se-energy-space).

[F3] [prop-se-potential-multipliers](item-prop-se-potential-multipliers) gives norm-continuous bounded multiplication by $V_1,V_2$ and bounded conjugation on $H_D^1$ and $H_D^2$, with consistent actions. [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution) supplies the unique real-linear evolution and its free-flow Duhamel equation. [prop-se-scale-flow](item-prop-se-scale-flow) supplies the strongly continuous unitary free group.

[F4] Under the stated geometry, [prop-se-energy-duhamel](item-prop-se-energy-duhamel) gives the free homogeneous $L^4_tL^\infty_x$ estimate on $[0,T]$. [lem-se-bounded-perturbation-dispersive-transfer](item-lem-se-bounded-perturbation-dispersive-transfer) transfers that estimate to a norm-continuous bounded real-linear perturbation, gives the corresponding retarded forcing estimate on every forward subinterval, and gives the $H_D^2$ energy estimate for consistent perturbations.



**Given:** The domain, time interval, trajectory, initial datum and forcing in the Statement.

**Goal:** Prove the two homogeneous and retarded bounds and the displayed Duhamel identity.

1.1 Define $B(t)z=i(V_1(t)z+V_2(t)\overline z)$. By the multiplier bounds and norm continuity in [F3], $B$ is a norm-continuous bounded family of real-linear operators on each of $H_D^1$ and $H_D^2$; the two actions are consistent. Multiplication by $i$ is bounded on these complex normed spaces. The free group and the unique evolution in [F3] therefore meet the perturbation hypotheses in [F4]. [F3, F4]

2.1 The homogeneous estimate in [F4], together with the equivalent $H_D^1$ and inherited $H^1_0$ norms supplied by the transfer lemma, is the required free mixed-norm estimate in spectral norm. Apply that lemma on $I$ to $B$, first with forcing zero and then with initial datum zero. It gives the $X_I$ estimates for $S(\cdot,r)h$ and the retarded integral. Convert the spectral supremum norm to the equivalent inherited $H^1_0$ norm. The lemma supplies a compatible scalar mixed-norm representative, rather than a Bochner $L^\infty$ assertion. [F2, F4, step 1.1]

3.1 Apply the order-two conclusion of the same transfer lemma to the consistent $H_D^2$ action of $B$. It gives the two $C(I;H_D^2)$ bounds, first with forcing zero and then with initial datum zero. Its constants are uniform for subintervals of $[0,T]$ because the free estimate and the operator bounds are fixed on that interval. Taking a common larger constant proves the displayed inequality for both values of $s$. [F4, step 1.1, step 2.1]

4.1 The evolution equation in [F3] gives $S(t,r)h=W(t-r)h+\int_r^tW(t-\rho)B(\rho)S(\rho,r)h\,d\rho$. Substitution of $B$ and complex linearity of the free group yield the displayed formula, with $i$ outside the free-flow integral. The retarded estimate in [F4] instead integrates $S(t,\rho)f(\rho)$ as written; real-linearity alone does not permit moving $i$ through $S$. This proves all assertions. [F3, F4, step 1.1, step 3.1] ∎

## Source notes

The frozen article is cited for attribution of the transfer in the proof of Theorem 1.5, PDF page 20. The deduction above uses the named mathematical suppliers and does not use that passage as a premise proving itself.
