---
id: pthm-qec-distinguishability-isotropic-lamb-shift
kind: physics-theorem
domain: physics
title: Isotropic Lamb shift preserves magnetic degeneracy
status: published
origin: session
deps:
  - pthm-qec-distinguishability-ule-static
  - post-qec-distinguishability-atomic-system
  - pthm-qec-distinguishability-isotropic-bath
  - lem-qec-prereq-isotropic-scalar-block-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_roles:
  pthm-qec-distinguishability-ule-static: physical-result
  post-qec-distinguishability-atomic-system: physical-assumption
  pthm-qec-distinguishability-isotropic-bath: physical-result
  lem-qec-prereq-isotropic-scalar-block-contract: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 11, opening continuation of Supplement S2
      statement: For the isotropic photon bath of the atomic model, the article states
        that the Lamb shift is rotationally scalar and proportional to the
        identity within each J manifold, renormalizing eta_J without lifting
        magnetic degeneracy; it absorbs the shift into the system Hamiltonian.
      hypotheses: The article's isotropic photon bath and atomic model.
      reading_limits: Read the supplied extracted text at the cited passage. This
        reference attributes the article's claim and is not used as its proof.
physical_scope: Conditional ULE coefficients for a finite angular-momentum
  emitter coupled to the specified isotropic regulated photon bath; no
  experimental observation or regulator-removal result is asserted.
dependency_level: 13
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice. Use the finite-emitter angular-momentum and regulated photon model of [[post-qec-distinguishability-atomic-system]], with the isotropic thermal bath and continuum-limit hypotheses of [[pthm-qec-distinguishability-isotropic-bath]]. Also impose all system, bath, preparation, weak-Markov, Fourier-integrability and principal-value hypotheses of [[pthm-qec-distinguishability-ule-static]], with three Cartesian channels and a common coupling normalization. In particular, use a pointwise nonnegative scalar spectral-density representative at every frequency required by that ULE formula.

Let the emitter space be a finite direct sum of complete spin blocks, and let $U_k(t)=\exp(-itJ_k)$ be its axis rotations, as in [[lem-qec-prereq-isotropic-scalar-block-contract]]. Suppose $H_S$ commutes with these rotations and the three Hermitian system coupling operators $X_i$ transform as a Cartesian vector: for each axis rotation $U$ there is a real orthogonal matrix $R$ such that $UX_iU^{-1}=\sum_j R_{ji}X_j$. Assume the resulting ULE Lamb-shift operator $\Lambda$ is Hermitian.

Then $\Lambda$ commutes with every axis rotation. On the sum of copies of spin $J$, it has the form $A^{(J)}\otimes I_{2J+1}$, where $A^{(J)}$ acts on the copy labels. In the article's multiplicity-one model this reduces to $\Lambda|_{V_J}=\lambda_J I$, with real $\lambda_J$, so it does not split the magnetic labels $m$. Adding it to $H_S$ replaces $\eta_J$ by $\eta_J+\lambda_J/\omega_0$; the shifted level factors need not remain monotone.

## Facts & Assumptions

[F1] Under its stated hypotheses, the static ULE supplier gives $\Lambda=\sum_{l,m,n,i,j}f_{ij}(E_l-E_m,E_n-E_l)X^{(i)}_{ml}X^{(j)}_{ln}|m\rangle\langle n|$, with $f(E_1,E_2)=-2\pi\gamma\operatorname{PV}\int_{-\infty}^{\infty}\omega^{-1}g(\omega-E_1)g(\omega+E_2)\,d\omega$ and $g=[J/(2\pi)]^{1/2}$. [[pthm-qec-distinguishability-ule-static]]

[F2] The atomic model has complete angular-momentum blocks and $H_S=\sum_{J,m}\omega_0\eta_J|J,m\rangle\langle J,m|$, with one specified block for each $J$ and $\omega_0>0$. The dipole interaction is a model assumption. [[post-qec-distinguishability-atomic-system]]

[F3] Under the regulated isotropic thermal-bath hypotheses, the Cartesian spectral matrix has an almost-everywhere scalar representative; for a chosen nonnegative representative its positive jump kernel is $g(x)=s(x)I_3$, where $s(x)=\sqrt{J(x)/(2\pi)}$. The additional ULE regularity and pointwise conditions are separately assumed. [[pthm-qec-distinguishability-isotropic-bath]]

[F4] A contraction $\sum_i D_iFD_i$ commutes with all axis rotations when the $D_i$ transform as a Cartesian vector and $F$ commutes with those rotations. An operator commuting with the rotations has a unique matrix on each spin-copy space tensored with the identity on the magnetic space. [[lem-qec-prereq-isotropic-scalar-block-contract]]

[A1] Adopt the Axiom of Choice, Countable Choice and Dependent Choice required by the stated supplier interfaces. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Given:** The model, covariance, Hermiticity, choice and ULE regularity hypotheses in the Statement.

**Goal:** Prove rotational invariance of the Lamb shift and its stated action on magnetic labels.

1.1 By [F3], $g(x)=s(x)I_3$ at the frequencies used in [F1]. Matrix multiplication in the kernel therefore gives $f_{ij}(a,b)=\delta_{ij}h(a,b)$, where $h(a,b)=-2\pi\gamma\operatorname{PV}\int\omega^{-1}s(\omega-a)s(\omega+b)\,d\omega$. The assumed principal values make these expressions meaningful. [given, F1, F3]

2.1 Let $P_E$ denote the orthogonal projection onto the eigenspace of $H_S$ with eigenvalue $E$. Grouping the finite sums in [F1] by the three energy eigenvalues and applying step 1.1 yields $\Lambda=\sum_{E,E',F}h(F-E,E'-F)P_E(\sum_iX_iP_FX_i)P_{E'}$. Because $H_S$ commutes with each rotation, the rotation maps every eigenspace of $H_S$ to itself; its inverse does so as well. Hence each $P_E$ commutes with each rotation. [given, F1, step 1.1, algebra]

3.1 The assumed vector transformation of $X_i$, the commutation of $P_F$, and [F4] show that each $\sum_iX_iP_FX_i$ commutes with every axis rotation. The projections on its left and right commute with those rotations too, so the finite sum in step 2.1 commutes with them. [given, F4, step 2.1]

4.1 Apply the block conclusion of [F4] to $\Lambda$. It has the form $A^{(J)}\otimes I_{2J+1}$ on each spin sector, with no coupling between different spins. In the multiplicity-one model of [F2], $A^{(J)}$ is a scalar $\lambda_J$; its reality follows from the assumed Hermiticity of $\Lambda$. Adding $\lambda_J$ to the common unperturbed energy $\omega_0\eta_J$ gives the displayed shifted level factor and leaves all magnetic states in that block degenerate. No ordering of shifted energies follows. [given, F2, F4, step 3.1, algebra] ∎

## Source notes

The article attributes the scalar-block conclusion to Wigner–Eckart. The local argument instead uses the completed rotational-scalar block supplier and the static ULE formula. Isotropy of the bath alone does not establish the separately stated covariance of the matter coupling or rotational invariance of $H_S$.
