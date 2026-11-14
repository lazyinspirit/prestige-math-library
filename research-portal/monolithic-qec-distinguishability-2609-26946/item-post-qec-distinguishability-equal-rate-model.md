---
title: Equal-rate rigid-rotor benchmark parameters
status: published
research_item: post-qec-distinguishability-equal-rate-model
dependency_level: 14
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 3, paragraph following Eq. (10); p. 4, discussion following Fig. 2
      statement: The article chooses f(J) = sqrt((2J+1)/(2J-1)) so that each state in
        a decaying manifold has total rate gamma, and uses eta_J = J(J+1) in its
        simulations. It notes that real-species rates can depend strongly on J
        and may reorder code comparisons.
      hypotheses: The article's angular-momentum jump model and its benchmark
        comparison of codes in different J manifolds.
      reading_limits: The supplied extracted article text at these passages was read.
        This reference attributes the benchmark and qualitative species
        comparison; no experimental data or species-specific rate calculation
        was independently examined.
---

PDF p. 3: ` Paragraph following Eq. (10) `; PDF p. 4: ` Discussion following Fig. 2 `

## Prerequisites

- [def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis)
- [post-qec-distinguishability-atomic-system](item-post-qec-distinguishability-atomic-system)
- [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)
- [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)


## Postulate

For the finite integer-spin emitter with blocks $J=0,1,\ldots,N$, $N\geq1$, adopt the canonical downward-jump model and all its physical, spectral and choice hypotheses. For code comparisons choose $f(J)=\sqrt{(2J+1)/(2J-1)}$ for every $1\leq J\leq N$, and choose the rigid-rotor level factors $\eta_J=J(J+1)$. The parameter $\gamma>0$ is the jump-rate scale. This is a benchmark choice of the effective coefficients, including their phases and magnitudes; the general emitter model does not require every physical species to realize it.

A magnetic basis state $|J,m\rangle$ has $m=-J,\ldots,J$. Define its total instantaneous downward jump rate to be $\sum_{\delta=-1}^{1}\|L_\delta|J,m\rangle\|^2$ for the three modeled jump operators. Use this common parameter specification when comparing codes hosted in different manifolds. The article notes that rates in real species may depend strongly on $J$, potentially changing the ordering of the compared codes; that statement is qualitative and is not an observation established by this item.

## Postulate references

[def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis)

[post-qec-distinguishability-atomic-system](item-post-qec-distinguishability-atomic-system)

[pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)

[def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

## Facts & Assumptions

[F1] The finite model has orthonormal magnetic basis vectors $|J,m\rangle$ and energy $E_J=\omega_0\eta_J$, with $\omega_0>0$. The emitter postulate includes the rigid-rotor choice among its level models. [def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis) [post-qec-distinguishability-atomic-system](item-post-qec-distinguishability-atomic-system)

[F2] Under the finite-block emitter, bath, rank-one tensor, weak-Markov, regularity and pointwise spectral hypotheses of the downward-jumps result, its three jumps are $L_\delta=\sqrt\gamma\sum_{J=1}^{N}\sum_{m=-J}^{J}f(J)C^{J-1,m+\delta}_{1,\delta;J,m}|J-1,m+\delta\rangle\langle J,m|$. Out-of-range terms vanish. The coefficients $C$ are product-basis coefficients in the specified normalized coupled basis. [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps) [def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis)

[F4] For finite matrices and a Hermitian Hamiltonian, the GKSL generator has dissipative terms $L_\delta\rho L_\delta^\dagger-\{L_\delta^\dagger L_\delta,\rho\}/2$ and generates a channel for nonnegative time. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice, as well as all physical and spectral hypotheses of the finite downward-jumps result. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice) [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)

## Justification

The benchmark specifies the effective factors $f(J)$ and level factors $\eta_J$ as modeling choices, rather than deriving their values from an arbitrary emitter. The emitter and downward-jump suppliers specify the finite physical setting and the hypotheses under which the chosen coefficients are used. The article reference attributes the parameter choices and qualitative species comparison; it does not establish physical applicability or an observation.

The instantaneous rate convention uses the jump contribution in the finite GKSL convention. It refers to the specified input state, without asserting that the system remains in its host manifold or retains one rate throughout subsequent evolution. The applicability of the emitter and bath assumptions remains physical and conditional.
