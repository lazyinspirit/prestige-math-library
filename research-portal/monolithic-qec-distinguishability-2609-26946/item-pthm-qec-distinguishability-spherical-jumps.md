---
title: Three spherical emission channels
status: published
research_item: pthm-qec-distinguishability-spherical-jumps
dependency_level: 13
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 13, Eq. (S3.17) and following paragraph
      statement: The article gives three spherical jump operators with coefficients
        sqrt(2 pi gamma J(omega_mn)), calls gamma an effective overall decay
        scale, and says that the emitted photon carries angular momentum minus
        q; the main text uses delta for the channel label.
      hypotheses: The isotropic photon-bath and spherical-component conventions in
        Supplement S3.
      reading_limits: Read the supplied extracted passage and inspected original PDF
        page 13, including Eq. (S3.17) and its following paragraph. This
        citation attributes the article formulation only. The dissipator and
        projection arguments below are local conditional deductions, not source
        proofs.
---

PDF p. 13: ` Eq. (S3.17) and following paragraph `

## Prerequisites

- [pthm-qec-distinguishability-ule-static](item-pthm-qec-distinguishability-ule-static)
- [pthm-qec-distinguishability-isotropic-bath](item-pthm-qec-distinguishability-isotropic-bath)
- [def-qec-distinguishability-spherical-components](item-def-qec-distinguishability-spherical-components)
- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [thm-qec-prereq-wigner-eckart-contract](item-thm-qec-prereq-wigner-eckart-contract)
- [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [physics:def-qsm-dt-gksl-definition](https://alphabetamath.cc/physics/item/def-qsm-dt-gksl-definition)


## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice. Take the finite-dimensional static system, three Hermitian Cartesian coupling operators $X_x,X_y,X_z$, stationary Gaussian bath, preparation, weak-Markov regime, Fourier identities and kernel regularity required by the static ULE result. Also take the regulated isotropic thermal photon model and its limit under the hypotheses of the isotropic-bath result. Require that its nonnegative scalar spectral representative $\mathcal J$ agrees pointwise at every required transition frequency with the ordinary spectral density in the static ULE result, and that the latter's remaining hypotheses hold. In particular $\gamma>0$ is the coupling scale in that ULE convention, and all square roots below are nonnegative.

Work in the inherited units $\hbar=1$, so the energies in $H_S$ are angular frequencies. For a finite family $L=(L_a)$ on the system space define its dissipator on every system matrix $\rho$ by $\mathcal D_L(\rho)=\sum_a(L_a\rho L_a^\dagger-\tfrac12L_a^\dagger L_a\rho-\tfrac12\rho L_a^\dagger L_a)$, where $\dagger$ denotes conjugate transpose. This is the dissipative part of the finite GKSL generator. To compare units with its supplier, fix a time unit $T>0$ seconds and an action unit $A>0$ joule-seconds: the numerical matrices here correspond to $L_a/\sqrt T$, physical Planck constant $A$, and physical Hamiltonian $(A/T)H_S$ there. Multiplication of that physical generator by $T$ gives the convention used here. The channel rotation below leaves the Hamiltonian part fixed.

Choose an orthonormal energy eigenbasis $H_S|n\rangle=E_n|n\rangle$ and put $\omega_{mn}=E_n-E_m$. Define $X_{+1}=-(X_x+iX_y)/\sqrt2$, $X_{-1}=(X_x-iX_y)/\sqrt2$ and $X_0=X_z$. A valid unitary choice of the three ULE jump operators is

$$L_q=\sqrt{2\pi\gamma}\sum_{m,n}\sqrt{\mathcal J(\omega_{mn})}\langle m|X_q|n\rangle|m\rangle\langle n|,\qquad q\in\{-1,0,+1\}.$$

The article denotes this channel label by $\delta$ in its main text. For the angular-momentum interpretation, additionally suppose the system basis consists of magnetic eigenvectors and the $X_q$ form a rank-one spherical tensor. Specify the emission process by the following local physical assumptions. Let $R$ be a set of remainder-field records and $P$ a set of single-photon records, with real-valued maps $r:R\to\mathbb R$ and $s:P\to\mathbb R$ assigning angular-momentum projections on the chosen axis in units of $\hbar$. The initial field record is $a\in R$, with projection $r(a)=0$; the final field record is $(b,p)\in R\times P$, consisting of the remainder $b$ and exactly one emitted photon $p$, with projection $r(b)+s(p)$. Assume the remainder projection is unchanged, $r(b)=r(a)$, and the transition conserves the sum of system and field projections. These record types and additive assignments are assumptions for this interpretation; they assert no general factorization of a thermal field. If the system matrix element for that transition is nonzero, the emitted photon's projection is $s(p)=-q$. This assertion concerns the projection and the stated emission process; the formula alone does not exclude absorption at nonzero temperature.

## Statement references

[pthm-qec-distinguishability-ule-static](item-pthm-qec-distinguishability-ule-static)

[pthm-qec-distinguishability-isotropic-bath](item-pthm-qec-distinguishability-isotropic-bath)

[def-qec-distinguishability-spherical-components](item-def-qec-distinguishability-spherical-components)

[def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[thm-qec-prereq-wigner-eckart-contract](item-thm-qec-prereq-wigner-eckart-contract)

[def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

[physics:def-qsm-dt-gksl-definition](https://alphabetamath.cc/physics/item/def-qsm-dt-gksl-definition)

## Facts & Assumptions

[F1] Under its stated system, bath, preparation, weak-Markov and regularity hypotheses, the static ULE result gives $L_i=2\pi\sqrt\gamma\sum_{m,n,j}g_{ij}(\omega_{mn})\langle m|X_j|n\rangle|m\rangle\langle n|$, with $g=[J/(2\pi)]^{1/2}$. [pthm-qec-distinguishability-ule-static](item-pthm-qec-distinguishability-ule-static) [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F2] Under the stated isotropic photon-model hypotheses, the spectral matrix has a scalar nonnegative representative and its positive jump correlator is the corresponding scalar square root times the identity. The isotropic result requires the three stated choice assumptions. [pthm-qec-distinguishability-isotropic-bath](item-pthm-qec-distinguishability-isotropic-bath) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

[F3] The displayed spherical components are obtained from the Cartesian components by a unitary coefficient matrix $U$; $\omega_{mn}$ is source energy minus destination energy. [def-qec-distinguishability-spherical-components](item-def-qec-distinguishability-spherical-components)

[F4] A rank-one spherical tensor satisfies $[J_z,X_q]=qX_q$. Equivalently, its matrix elements between magnetic eigenvectors vanish unless the final system magnetic label equals the initial label plus $q$. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions) [thm-qec-prereq-wigner-eckart-contract](item-thm-qec-prereq-wigner-eckart-contract)

[F5] The finite GKSL definition supplies the dissipator $\mathcal D_L$ displayed in the Statement; its supplier has domain mathematics. The finite system dimension and the three finite jump matrices meet its algebraic hypotheses, and the positive units $T,A$ specified above convert its physical units to the inherited $\hbar=1$ convention. No microscopic approximation is inferred from that definition. [physics:def-qsm-dt-gksl-definition](https://alphabetamath.cc/physics/item/def-qsm-dt-gksl-definition)

[A1] Assume the choice, matching, regularity and physical hypotheses in the Statement, including the locally specified field-record, additivity, unchanged-remainder and conservation hypotheses only for the final interpretation.

## Proof

**Given:** The system, bath, spectral matching and choice hypotheses in the Statement; for the final assertion, also the stated tensor and local field-record assumptions, including additivity, unchanged remainder projection and conservation.

**Goal:** Derive the three displayed jump operators and the conditional photon-projection label.

1.1 At each required transition frequency, [F2] and the pointwise matching assumption give $g_{ij}(\omega_{mn})=\delta_{ij}\sqrt{\mathcal J(\omega_{mn})/(2\pi)}$. Substitution into [F1] gives $L_i=\sqrt{2\pi\gamma}\sum_{m,n}\sqrt{\mathcal J(\omega_{mn})}\langle m|X_i|n\rangle|m\rangle\langle n|$ for the Cartesian labels. The coefficient is real and nonnegative by the specified representative. [given, A1, F1, F2, algebra]

2.1 Let $L_q=\sum_i U_{qi}L_i$, with $i=x,y,z$. By [F3], $\sum_qU_{qi}\overline{U_{qj}}=\delta_{ij}$, so expansion of the finite sums gives $\sum_qL_q\rho L_q^\dagger=\sum_iL_i\rho L_i^\dagger$ and $\sum_qL_q^\dagger L_q=\sum_iL_i^\dagger L_i$. Substituting these identities into the definition in [F5] gives $\mathcal D_{(L_q)}(\rho)=\mathcal D_{(L_i)}(\rho)$ for every system matrix $\rho$; the unchanged Hamiltonian part therefore gives the same ULE generator. Linearity of matrix elements and [F3] turn the Cartesian expression from step 1.1 into the displayed formula with $X_q=\sum_iU_{qi}X_i$. Thus it is a valid choice of the three jump operators. [F3, F5, step 1.1, algebra]

3.1 Write $\mu_{\rm in}$ and $\mu_{\rm out}$ for the initial and final system magnetic labels. For a nonzero matrix element, [F4] gives $\mu_{\rm out}-\mu_{\rm in}=q$. Under the local assumptions in [A1], conservation is $\mu_{\rm in}+r(a)=\mu_{\rm out}+r(b)+s(p)$. Since $r(b)=r(a)$, subtraction yields $s(p)=\mu_{\rm in}-\mu_{\rm out}=-q$. The additive field assignment identifies this scalar as the emitted photon's projection. The remainder may contain other excitations, but its projection must be unchanged; conservation alone would only give $s(p)=-q+r(a)-r(b)$. This proves the stated conditional interpretation. [given, A1, F4, algebra] ∎

## Source notes

The article uses the same symbol for the scalar bath spectrum in its spherical formula and describes $\gamma$ as an effective decay scale. Here the normalization is fixed by the completed ULE and isotropic-bath interfaces, with pointwise matching explicitly required. The article's $-q$ description is retained as a projection balance under the stated tensor, conservation, additive field-record and unchanged-remainder assumptions. The field-record model is a local physical assumption, not an imported fact from the article. The source passage is attribution, not a premise for that balance.
