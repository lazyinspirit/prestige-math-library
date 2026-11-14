---
title: Weak rotational symmetry and decoupled operator sectors
status: published
research_item: pthm-qec-distinguishability-rotation-symmetry
dependency_level: 15
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 17, Numerical method, first three sentences; p. 3, Eqs.
        (10)–(11) and following paragraph
      statement: The article states the jump rotation phase, Lindbladian covariance
        and decoupled magnetic-difference sectors, and retains the unperturbed
        jumps when adding the diagonal lift.
      hypotheses: The article's angular-momentum model with its diagonal Hamiltonians
        and retained jump operators.
      reading_limits: The supplied extracted text at these passages was read. This
        reference attributes the article's formulation; it is not used as proof
        of the deduction. The present proof is finite-dimensional and does not
        establish an infinite-dimensional extension.
---

PDF p. 17: ` Numerical method, first three sentences `

## Prerequisites

- [post-qec-distinguishability-equal-rate-model](item-post-qec-distinguishability-equal-rate-model)
- [post-qec-distinguishability-atomic-lift](item-post-qec-distinguishability-atomic-lift)
- [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)
- [lem-qec-prereq-rotation-covariance-sectors](item-lem-qec-prereq-rotation-covariance-sectors)
- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)


## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice, and the finite-block emitter, bath, tensor, regularity and pointwise spectral hypotheses of [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps). Adopt the equal-rate rigid-rotor benchmark of [post-qec-distinguishability-equal-rate-model](item-post-qec-distinguishability-equal-rate-model), the diagonal lift of [post-qec-distinguishability-atomic-lift](item-post-qec-distinguishability-atomic-lift), and the model choice that the lift does not change the three unperturbed jumps. The Hilbert space is the direct sum of the integer-spin blocks $J=0,\ldots,N$, with orthonormal magnetic basis $|J,m\rangle$ and $m=-J,\ldots,J$. Let $J_z|J,m\rangle=m|J,m\rangle$, $R_\theta=e^{-i\theta J_z}$, and $H=\sum_{J,m}[\omega_0J(J+1)+\Delta Jm]|J,m\rangle\langle J,m|$, where $\Delta$ is real. Let $L_\delta$, for $\delta=-1,0,1$, be the downward jumps of the cited result, with the benchmark coefficients.

For the finite generator $\mathcal L(X)=-i[H,X]+\sum_{\delta=-1}^{1}(L_\delta X L_\delta^\dagger-\{L_\delta^\dagger L_\delta,X\}/2)$, one has $R_\theta L_\delta R_\theta^\dagger=e^{-i\theta\delta}L_\delta$ and $\mathcal L(R_\theta X R_\theta^\dagger)=R_\theta\mathcal L(X)R_\theta^\dagger$ for every real $\theta$. For each integer $r$, the operator sector $\mathcal H_r=\operatorname{span}\{|J,m\rangle\langle J',m'|:m-m'=r\}$ is invariant under $\mathcal L$. The matrix algebra is the direct sum of the nonzero sectors, and $e^{t\mathcal L}$ preserves each sector for $t\geq0$; consequently their evolutions can be computed separately and in parallel. This is the finite-block form of the article's stated weak rotational symmetry and sector decomposition.

## Statement references

[post-qec-distinguishability-equal-rate-model](item-post-qec-distinguishability-equal-rate-model)

[post-qec-distinguishability-atomic-lift](item-post-qec-distinguishability-atomic-lift)

[pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)

[def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[lem-qec-prereq-rotation-covariance-sectors](item-lem-qec-prereq-rotation-covariance-sectors)

## Facts & Assumptions

[F1] Under its finite-block physical and pointwise spectral hypotheses, the downward-jumps result gives $L_\delta=\sqrt\gamma\sum_{J=1}^{N}\sum_{m=-J}^{J}f(J)C^{J-1,m+\delta}_{1,\delta;J,m}|J-1,m+\delta\rangle\langle J,m|$, with out-of-range terms zero. [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)

[F2] The benchmark chooses $f(J)=\sqrt{(2J+1)/(2J-1)}$ and $\eta_J=J(J+1)$, while the lift adds the real diagonal energy $\Delta Jm$ to each basis state. [post-qec-distinguishability-equal-rate-model](item-post-qec-distinguishability-equal-rate-model) [post-qec-distinguishability-atomic-lift](item-post-qec-distinguishability-atomic-lift)

[F3] The finite-spin convention has $J_z|J,m\rangle=m|J,m\rangle$ and magnetic labels in unit steps. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F4] The finite GKSL interface supplies the displayed generator for a Hermitian matrix $H$ and a finite family of jump matrices. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F5] For a common diagonal basis of $J_z$ and Hermitian $H$, if $[J_z,L_a]=q_aL_a$ with real weights, the rotation-covariance lemma gives the corresponding jump phases, covariance and invariance of each matrix-unit weight sector. [lem-qec-prereq-rotation-covariance-sectors](item-lem-qec-prereq-rotation-covariance-sectors)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice, and all finite-emitter, bath, rank-one tensor, regularity and pointwise spectral hypotheses of [F1]. The retained-jump choice after adding the lift is a physical model assumption. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice) [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)

## Proof

**Given:** The finite benchmark, diagonal lift, retained jumps and assumptions in the Statement.

**Goal:** Establish the rotation phase, generator covariance and independent sector evolution.

1.1 By [F3], each nonzero matrix unit in [F1] satisfies $[J_z,|J-1,m+\delta\rangle\langle J,m|]=\delta|J-1,m+\delta\rangle\langle J,m|$. Linearity therefore gives $[J_z,L_\delta]=\delta L_\delta$. The sign follows from the output magnetic label $m+\delta$. [F1, F3, A1, algebra]

2.1 By [F2], $H$ is Hermitian and diagonal in the same finite basis as $J_z$. Applying [F5] to the generator in [F4] and the weights obtained in step 1.1 gives $R_\theta L_\delta R_\theta^\dagger=e^{-i\theta\delta}L_\delta$ and covariance of $\mathcal L$. The scalar jump phases cancel in the dissipative terms. [F2, F4, F5, step 1.1]

3.1 The matrix units $|J,m\rangle\langle J',m'|$ form a basis of the finite matrix algebra, and each has weight $m-m'$. Thus the nonzero $\mathcal H_r$ form a direct-sum decomposition. By [F5], each is invariant under $\mathcal L$. Every power of $\mathcal L$ consequently preserves it, as does the convergent finite-dimensional exponential series for $e^{t\mathcal L}$. Applying that exponential independently to the components of an initial operator and adding the results gives the full evolution, so the sector computations may run in parallel. [F5, step 2.1, algebra] ∎

## Source notes

The article states the sector decomposition using unrestricted $J$ notation. The deduction above uses completed finite-block suppliers and makes no assertion about domains or convergence for infinitely many blocks. The article's retained-jump approximation is an assumption here, not a consequence of adding the lift.
