---
title: Static ULE formulas and principal-value kernel
status: draft
research_item: pthm-qec-distinguishability-ule-static
dependency_level: 5
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 10, Eqs. (S2.13)–(S2.14) and following text
      statement: The article gives the static jump formula and a Lamb-shift formula
        with first kernel argument E_m-E_l and kernel 2π times the
        principal-value integral, without an explicit factor of gamma.
      hypotheses: The time-independent system Hamiltonian and ULE conventions in
        Supplement S2.
      reading_limits: For this adjudication, read the supplied extracted text and
        inspected PDF page 10, including Eqs. (S2.5)–(S2.14). This reference
        attributes the original formulation and is not used as proof of the
        corrected formula. No independent microscopic derivation or bath-model
        existence is claimed.
---

PDF p. 10: ` Eqs. (S2.13)–(S2.14) `

## Prerequisites

- [pthm-qec-prereq-ule-jump-and-lamb-contract](item-pthm-qec-prereq-ule-jump-and-lamb-contract)
- [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)
- [math:def-trace-class-operator](https://alphabetamath.cc/item/def-trace-class-operator)
- [math:def-trace-of-a-trace-class-operator](https://alphabetamath.cc/item/def-trace-of-a-trace-class-operator)
- [math:thm-trace-is-absolutely-convergent-and-basis-independent](https://alphabetamath.cc/item/thm-trace-is-absolutely-convergent-and-basis-independent)
- [math:def-densely-defined-closed-and-closable-operator](https://alphabetamath.cc/item/def-densely-defined-closed-and-closable-operator)
- [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint)
- [math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group](https://alphabetamath.cc/item/lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group)
- [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)
- [math:def-self-adjoint-and-normal-endomorphism](https://alphabetamath.cc/item/def-self-adjoint-and-normal-endomorphism)
- [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)
- [physics:lem-nrqm-composites-hilbert-tensor-construction](https://alphabetamath.cc/physics/item/lem-nrqm-composites-hilbert-tensor-construction)
- [physics:lem-nrqm-composites-bounded-tensor-maps](https://alphabetamath.cc/physics/item/lem-nrqm-composites-bounded-tensor-maps)


## Statement

Assume the Axiom of Choice and Countable Choice. Work in units $\hbar=1$ with a nonzero finite-dimensional complex system Hilbert space $\mathcal H_S$ and a complex bath Hilbert space $\mathcal H_B$. Let $H_S$ be a static Hermitian system Hamiltonian, $H_B$ a densely defined self-adjoint bath Hamiltonian, and $B_\alpha$ densely defined symmetric bath coupling operators. Take the total Hamiltonian $H_S+H_B+\sqrt\gamma\sum_{\alpha=1}^nX_\alpha B_\alpha$, where $n$ is finite, $\gamma>0$, the $X_\alpha$ are Hermitian system operators and $\|X_\alpha\|\leq1$. Identity tensor factors are understood, and a self-adjoint realization of this total Hamiltonian on the system–bath Hilbert space is part of the model data.

Let $\rho_B$ be a bounded trace-class bath operator, with $\rho_B^*=\rho_B$, $\langle\rho_Bv,v\rangle\geq0$ for every $v\in\mathcal H_B$, and $\operatorname{Tr}_B\rho_B=1$. Put $U_B(t)=e^{-itH_B}$ using self-adjoint functional calculus, and assume strong stationarity $U_B(t)\rho_BU_B(t)^*=\rho_B$ for all real $t$; this is the meaning of the formal notation $[H_B,\rho_B]=0$ here. Define $\widetilde B_\alpha(t)=U_B(t)^*B_\alpha U_B(t)$ on its natural domain $U_B(t)^*D(B_\alpha)$.

For every finite ordered product $W=\widetilde B_{\alpha_1}(t_1)\cdots\widetilde B_{\alpha_k}(t_k)$ used in a bath moment, require that the composition $W\rho_B$ on its natural domain is densely defined and closable and that its closure is a bounded trace-class operator on $\mathcal H_B$. Impose the same requirement on $\rho_BB_\alpha$ for each $\alpha$. All traces of these products mean the basis-independent trace of their trace-class closures. Assume a centered stationary Gaussian bath: $\operatorname{Tr}_B(\rho_BB_\alpha)=0$, its two-point moments depend only on time differences, and its higher moments obey Wick pairings of the two-point functions. Use the factorized preparation $\rho_{SB}(t_0)=\rho_S(t_0)\otimes\rho_B$ with a system density operator $\rho_S(t_0)$, in the remote-past formulation $t_0\to-\infty$, and the weak Markov regime $\Gamma\tau_B\ll1$ of the ULE contract.

Let $C_{\alpha\beta}(t-s)=\operatorname{Tr}_B(\widetilde B_\alpha(t)\widetilde B_\beta(s)\rho_B)$ in this closure convention, and $J(\omega)=(2\pi)^{-1}\int_{\mathbb R}C(t)e^{i\omega t}\,dt$ entrywise. Require integrable entries of $C$, positive semidefinite Hermitian $J(\omega)$, integrable entries of $g(\omega)=[J(\omega)/(2\pi)]^{1/2}$, and finite nonzero zeroth and finite first moments of $\|g(t)\|_{2,1}$, where $g(t)=\int g(\omega)e^{-i\omega t}\,d\omega$, $\|A\|_{2,1}=\sum_b(\sum_a|A_{ab}|^2)^{1/2}$, $\Gamma=4\gamma(\int\|g(t)\|_{2,1}dt)^2$, and $\tau_B=\int|t|\|g(t)\|_{2,1}dt/\int\|g(t)\|_{2,1}dt$. Assume the pointwise Fourier identities at the required Bohr frequencies and the principal values below exist.

Choose an orthonormal eigenbasis $H_S|m\rangle=E_m|m\rangle$ and write $X^{(\alpha)}_{mn}=\langle m|X_\alpha|n\rangle$. The static ULE jump and Lamb-shift coefficients are $L_\lambda=2\pi\sqrt\gamma\sum_{m,n,\alpha}g_{\lambda\alpha}(E_n-E_m)X^{(\alpha)}_{mn}|m\rangle\langle n|$ and $\Lambda=\sum_{l,m,n,\alpha,\beta}f_{\alpha\beta}(E_l-E_m,E_n-E_l)X^{(\alpha)}_{ml}X^{(\beta)}_{ln}|m\rangle\langle n|$, with $f(E_1,E_2)=-2\pi\gamma\operatorname{PV}\int_{-\infty}^{\infty}\omega^{-1}g(\omega-E_1)g(\omega+E_2)\,d\omega$. The product in the integrand is matrix multiplication. Here $\operatorname{PV}$ is the symmetric Cauchy principal value at zero, with convergence at infinity also required.

## Facts & Assumptions

[F1] The independent ULE contract supplies these static coefficients under the stated system, bath, preparation, weak Markov, Fourier and principal-value hypotheses, including the corrected Lamb kernel. [pthm-qec-prereq-ule-jump-and-lamb-contract](item-pthm-qec-prereq-ule-jump-and-lamb-contract)

[F2] The kernel contract defines the positive matrix square root, Fourier convention, mixed norm and symmetric principal value used in the statement. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F3] The bath space is a complex Hilbert space. Trace class and trace have their Hilbert-space meanings, and the trace is absolutely convergent and basis independent for trace-class operators under Countable Choice. Dense domains, closability and closures have their operator-graph meanings. The required product closures are hypotheses, not conclusions from Gaussianity. [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space) [math:def-trace-class-operator](https://alphabetamath.cc/item/def-trace-class-operator) [math:def-trace-of-a-trace-class-operator](https://alphabetamath.cc/item/def-trace-of-a-trace-class-operator) [math:thm-trace-is-absolutely-convergent-and-basis-independent](https://alphabetamath.cc/item/thm-trace-is-absolutely-convergent-and-basis-independent) [math:def-densely-defined-closed-and-closable-operator](https://alphabetamath.cc/item/def-densely-defined-closed-and-closable-operator)

[F4] Symmetry and self-adjointness include their domain requirements. Under the assumed Axiom of Choice a self-adjoint bath Hamiltonian defines the unitary group $U_B(t)=e^{-itH_B}$. Strong stationarity and the coupling-product domain requirements are separately assumed. [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint) [math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group](https://alphabetamath.cc/item/lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group)

[F5] The system preparation uses a non-negative finite-dimensional endomorphism of trace one. [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)

[F6] A finite-dimensional endomorphism is Hermitian (self-adjoint) when $T^*=T$, and is normal when $TT^*=T^*T$. Every normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis. [math:def-self-adjoint-and-normal-endomorphism](https://alphabetamath.cc/item/def-self-adjoint-and-normal-endomorphism) [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[F7] Under Countable Choice, the system–bath Hilbert space is the completed Hilbert tensor product $\mathcal H_S\widehat\otimes\mathcal H_B$, whose elementary tensors have inner product $\langle u\otimes v,u'\otimes v'\rangle=\langle u,u'\rangle\langle v,v'\rangle$. For bounded operators $S,T$, the operator $S\otimes T$ is the unique bounded extension of $u\otimes v\mapsto Su\otimes Tv$ to the completed tensor product. This gives the operator tensor product in the factorized preparation and the bounded identity tensor factors. The self-adjoint realization of the unbounded total Hamiltonian remains an explicit model assumption. [physics:lem-nrqm-composites-hilbert-tensor-construction](https://alphabetamath.cc/physics/item/lem-nrqm-composites-hilbert-tensor-construction) [physics:lem-nrqm-composites-bounded-tensor-maps](https://alphabetamath.cc/physics/item/lem-nrqm-composites-bounded-tensor-maps)

[A1] Assume the Axiom of Choice and Countable Choice for the inherited supplier interfaces. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Proof

**Given:** The system, bath, preparation, regularity, Fourier and choice assumptions in the statement.

**Goal:** Identify the static ULE coefficients with the displayed expressions.

1.1 By [F7], the composite Hilbert space and the bounded operator tensor product in the factorized preparation have the stated mathematical meanings under Countable Choice. Since $H_S^*=H_S$, we have $H_SH_S^*=H_S^2=H_S^*H_S$; thus $H_S$ is normal, and [F6] supplies the orthonormal energy eigenbasis used in the statement. By [F3] and the assumed product closures, every bath trace used here is the trace of a bounded trace-class operator. By [F4], the self-adjoint $H_B$ defines the bath evolution; stationarity, Gaussianity and preparation remain explicit model assumptions. The resulting hypotheses match the static case of [F1]. Its kernel $h$ is the positive square root of $J/(2\pi)$ with the Fourier convention of [F2], hence it is the $g$ specified here. Its transition matrix element $(X_\alpha)_{mn}$ is $X^{(\alpha)}_{mn}$. [given, A1, F1, F2, F3, F4, F6, F7]

2.1 Substitute $h=g$ and the matrix-element notation into the static jump and corrected Lamb-shift formulas of [F1]. Their energy arguments, factor $-2\pi\gamma$, matrix product and principal-value convention give exactly the coefficients in the statement. These are approximation coefficients under the stated hypotheses. [F1, F2, step 1.1] ∎

## Source notes

The article’s Eq. (S2.13) gives the jump formula. Its Eq. (S2.14) instead states the first Lamb-kernel argument as $E_m-E_l$ and defines the kernel with prefactor $2\pi$; this original formulation is preserved here for attribution. The displayed conditional deduction follows the independent ULE supplier’s erratum-corrected formula, not the article as proof.
