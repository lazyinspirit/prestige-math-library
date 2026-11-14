---
id: pthm-qec-distinguishability-atomic-jumps
kind: physics-theorem
domain: physics
title: Canonical angular-momentum downward jumps
status: published
origin: session
deps:
  - post-qec-distinguishability-atomic-system
  - pthm-qec-distinguishability-vacuum-density
  - thm-qec-distinguishability-wigner-eckart
  - def-qec-prereq-spin-tensor-cg-conventions
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - pthm-qec-distinguishability-ule-static
  - def-qec-distinguishability-spherical-components
  - def-qec-prereq-finite-gksl-channel-interface
dependency_roles:
  post-qec-distinguishability-atomic-system: physical-assumption
  pthm-qec-distinguishability-vacuum-density: physical-result
  thm-qec-distinguishability-wigner-eckart: mathematical-premise
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  pthm-qec-distinguishability-ule-static: physical-result
  def-qec-distinguishability-spherical-components: mathematical-premise
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 3, Eq. (10); PDF page 13, Eqs. (S3.17)–(S3.20) and intervening
        text
      statement: The article gives three spherical jump operators and specializes them
        in the zero-temperature model to the J-to-J-minus-one branch, absorbing
        reduced matrix elements and spectral factors into f(J).
      hypotheses: The article's angular-momentum emitter, spherical coupling and
        zero-temperature model.
      reading_limits: For this repair, read the supplied extracted text on PDF p. 13,
        Eqs. (S3.17)–(S3.20) and intervening text. This reference attributes the
        article formulation only; the static ULE supplier and the local
        unitary-rotation argument supply the conditional deduction. No PDF image
        inspection or microscopic vacuum-bath construction is claimed in this
        repair.
physical_scope: Conditional finite-block calculation for the specified idealized
  emitter and a vacuum bath satisfying the static ULE and pointwise spectral
  hypotheses; no experimental observation or convergence of thermal ULE
  generators is asserted.
formulation_deps:
  - post-qec-distinguishability-atomic-system
  - pthm-qec-distinguishability-vacuum-density
  - thm-qec-distinguishability-wigner-eckart
  - def-qec-prereq-spin-tensor-cg-conventions
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - pthm-qec-distinguishability-ule-static
  - def-qec-distinguishability-spherical-components
argument_deps:
  - post-qec-distinguishability-atomic-system
  - pthm-qec-distinguishability-vacuum-density
  - thm-qec-distinguishability-wigner-eckart
  - def-qec-prereq-spin-tensor-cg-conventions
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - pthm-qec-distinguishability-ule-static
  - def-qec-distinguishability-spherical-components
  - def-qec-prereq-finite-gksl-channel-interface
dependency_level: 13
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice. Take the finite-block angular-momentum emitter model with one copy of each integer-spin block $J=0,1,\ldots,N$, $N\geq1$, and strictly increasing real level factors $\eta_J$. Its energy is $E_J=\omega_0\eta_J$, with $\omega_0>0$, and $|J,m\rangle$, $m=-J,\ldots,J$, is its orthonormal magnetic basis. Adopt all system, bath, self-adjoint realization, trace-class closure, remote-past preparation, weak-Markov, kernel regularity, pointwise Fourier and principal-value hypotheses of the static ULE result, for three Hermitian Cartesian couplings $X_x,X_y,X_z$ of norm at most one and a centered stationary Gaussian bath prepared in vacuum. Assume the fixed-coupling thermal-family and integrable-envelope hypotheses of the vacuum-density result, and identify this bath's ordinary ULE spectral matrix with $\mathcal J(x)I_3$ for every real $x$, where $\mathcal J$ is a nonnegative representative of that family's limiting vacuum density. This identification and all ULE applicability conditions at the vacuum are additional physical hypotheses; total-variation convergence alone does not establish them. Define $X_{+1}=-(X_x+iX_y)/\sqrt2$, $X_{-1}=(X_x-iX_y)/\sqrt2$, $X_0=X_z$, and assume that these components form a rank-one spherical tensor family between the retained blocks.

Use a nonnegative spectral representative $\mathcal J$ that agrees with the vacuum density almost everywhere and satisfies $\mathcal J(\omega)=0$ at every required nonpositive transition frequency, including zero. This pointwise condition is an additional model assumption: an almost-everywhere density alone does not prescribe its values at transition frequencies. Let $\gamma>0$ be the coupling scale in the static ULE convention, and put $\Omega_J=\omega_0(\eta_J-\eta_{J-1})$. For each $J\geq1$, let $R_J$ be the reduced matrix-element scalar in the displayed Clebsch–Gordan convention and define $f(J)=\sqrt{2\pi\mathcal J(\Omega_J)}R_J$. Then a valid unitary choice of the three ULE jumps is

$$L_\delta=\sqrt\gamma\sum_{J=1}^{N}\sum_{m=-J}^{J}f(J)C^{J-1,m+\delta}_{1,\delta;J,m}|J-1,m+\delta\rangle\langle J,m|,\qquad \delta\in\{-1,0,1\}.$$

A term with $|m+\delta|>J-1$ is zero. The coefficient $C^{J-1,m+\delta}_{1,\delta;J,m}$ is the product-basis coefficient in the chosen normalized coupled spin-$(J-1)$ basis for $V_1\otimes V_J$. The complex scalar $f(J)$ is independent of $m$ and $\delta$ and incorporates the reduced matrix element and the selected spectral and coupling normalization; any radial and species-specific factors included in $X$ are included in $R_J$. The finite sum preserves coherent contributions between different $J$ blocks in each channel. The corresponding infinite expression is formal on finite-support vectors unless separate convergence and domain hypotheses are supplied.

## Statement references

[[post-qec-distinguishability-atomic-system]]

[[pthm-qec-distinguishability-ule-static]]

[[def-qec-distinguishability-spherical-components]]

[[def-qec-prereq-finite-gksl-channel-interface]]

[[pthm-qec-distinguishability-vacuum-density]]

[[thm-qec-distinguishability-wigner-eckart]]

[[def-qec-prereq-spin-tensor-cg-conventions]]

## Facts & Assumptions

[F1] The emitter postulate gives the magnetic basis and energies $E_J=\omega_0\eta_J$, independent of $m$, in the finite-block model. [[post-qec-distinguishability-atomic-system]]

[F2] Under its static-system, bath, preparation, regularity and pointwise Fourier hypotheses, the static ULE result gives Cartesian jumps $L_i=2\pi\sqrt\gamma\sum_{a,b,j}g_{ij}(E_b-E_a)\langle a|X_j|b\rangle|a\rangle\langle b|$, with $g(x)=[J(x)/(2\pi)]^{1/2}$. [[pthm-qec-distinguishability-ule-static]]

[F3] Under the vacuum-density hypotheses, the limiting continuum spectral measure is supported on nonnegative frequencies and has the stated density almost everywhere; that statement alone does not fix a representative at individual frequencies. [[pthm-qec-distinguishability-vacuum-density]]

[F4] For fixed input and output spin blocks, the rank-one Wigner–Eckart result gives a scalar independent of magnetic labels and tensor component multiplying the ordered $V_1\otimes V_J$ Clebsch–Gordan coefficient. Matrix elements vanish unless $m'=m+\delta$ and $J'$ occurs in the rank-one coupling list. [[thm-qec-distinguishability-wigner-eckart]] [[def-qec-prereq-spin-tensor-cg-conventions]]

[F5] The displayed Cartesian-to-spherical component matrix $U$ is unitary on the three channel labels, and transition frequency is source energy minus destination energy. [[def-qec-distinguishability-spherical-components]]

[F6] For finite matrices in units $\hbar=1$, the dissipative part of the GKSL generator is $\mathcal D_L(\rho)=\sum_i(L_i\rho L_i^\dagger-\tfrac12\{L_i^\dagger L_i,\rho\})$. The same Hamiltonian and dissipator define the same generator. [[def-qec-prereq-finite-gksl-channel-interface]]

[A1] Assume the three choice principles and the physical, regularity, tensor and pointwise spectral hypotheses stated above. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Given:** The finite integer-spin blocks, strictly increasing energies, rank-one tensor family and compatible ULE and vacuum hypotheses in the Statement.

**Goal:** Derive the displayed three downward jump operators and identify the scope of their coefficients.

1.1 The spectral-identification hypothesis gives $J(x)=\mathcal J(x)I_3$ at every real frequency, so its positive square root is $g(x)=\sqrt{\mathcal J(x)/(2\pi)}I_3$. Apply [F2] under the explicitly assumed static ULE hypotheses at the vacuum. Substitution gives $L_i=\sqrt{2\pi\gamma}\sum_{a,b}\sqrt{\mathcal J(E_b-E_a)}\langle a|X_i|b\rangle|a\rangle\langle b|$. This application uses the ordinary ULE spectral matrix supplied in the hypotheses, independently of any convergence claim for finite-temperature generators. [given, F2, A1, algebra]

2.1 Let $U$ be the unitary component matrix in [F5] and set $L_\delta=\sum_iU_{\delta i}L_i$. Since $\sum_\delta U_{\delta i}\overline{U_{\delta j}}=\delta_{ij}$, expansion gives $\sum_\delta L_\delta\rho L_\delta^\dagger=\sum_iL_i\rho L_i^\dagger$ and $\sum_\delta L_\delta^\dagger L_\delta=\sum_iL_i^\dagger L_i$. Thus [F6] gives the same dissipator, with unchanged Hamiltonian part. Linearity of matrix elements in step 1.1 yields $L_\delta=\sqrt{2\pi\gamma}\sum_{a,b}\sqrt{\mathcal J(E_b-E_a)}\langle a|X_\delta|b\rangle|a\rangle\langle b|$. This proves the spherical formula locally for the assumed vacuum bath. [F5, F6, step 1.1, algebra]

3.1 Insert the basis $|J,m\rangle$ from [F1] into the formula in step 2.1. By [F4], a nonzero matrix element can only have $m'=m+\delta$ and $J'$ in the rank-one coupling list. For integer $J\geq1$ this list is $J-1,J,J+1$; for $J=0$ the only possible output spin is $1$. Output blocks outside the finite emitter are absent. [F1, F4, A1, step 2.1]

4.1 For $J'=J$, the transition frequency $E_J-E_{J'}$ is zero. For $J'=J+1$, strict increase of $\eta_J$ makes it negative. The pointwise assumption in [A1] makes their spectral factors zero. Thus only $J'=J-1$, with $J\geq1$, remains. The vacuum measure in [F3] motivates this convention but does not by itself determine those point values. [F1, F3, A1, step 3.1]

5.1 For each remaining pair of blocks, [F4] gives $\langle J-1,m+\delta|X_\delta|J,m\rangle=R_J C^{J-1,m+\delta}_{1,\delta;J,m}$, with a single $R_J$ for all $m$ and $\delta$. Its frequency is $\Omega_J$, independent of $m$. Substitution into the formula in step 2.1 and the definition of $f(J)$ give the displayed formula, including zero out-of-range terms. The spherical formula in step 2.1 is a sum over all transitions in each channel, so this substitution retains the cross-block coherent sum. Since the emitter contains finitely many blocks, the displayed operators are finite matrices. The infinite notation has only the stated formal meaning without further analytic hypotheses. [F4, step 2.1, step 4.1, algebra] ∎

## Source notes

The article writes the sum without a finite cutoff. The finite-block statement follows from the completed finite-dimensional ULE supplier; no convergence of the unbounded infinite model is inferred. The article's $f(J)$ can absorb convention-dependent phases and physical factors, as made explicit by the definition above.

The vacuum coefficient formula is a direct local application of the static ULE contract. Its bath realization, Gaussian preparation, scalar spectral identification and analytic regularity at the vacuum are assumed separately; the vacuum-density limit supplies the limiting measure, rather than those dynamical applicability hypotheses.
