---
title: Commutator and spontaneous-plus-stimulated emission contribution
status: published
research_item: pthm-qec-distinguishability-thermal-antinormal-moments
dependency_level: 9
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 12, equations (S3.9)–(S3.11)
      statement: The article writes the antinormal contribution as a two-mode
        occupation-state sum, inserts the bosonic commutator, and gives a
        continuum expression with the factor 1 plus the Bose occupation number.
      hypotheses: The article's thermal photon-bath and dipole-coupling conventions in
        section S3.
      reading_limits: The supplied extracted text at the cited passage was read. This
        reference attributes the article's expression; it is not used as proof
        of the finite-mode result or of a continuum limit.
---

PDF p. 12: ` Eqs. (S3.9)–(S3.11) `

## Prerequisites

- [pthm-qec-distinguishability-thermal-correlator-expansion](item-pthm-qec-distinguishability-thermal-correlator-expansion)
- [pthm-qec-distinguishability-thermal-normal-moments](item-pthm-qec-distinguishability-thermal-normal-moments)
- [def-qec-distinguishability-bath-correlator](item-def-qec-distinguishability-bath-correlator)
- [post-qec-distinguishability-thermal-bath](item-post-qec-distinguishability-thermal-bath)
- [post-qec-distinguishability-dipole-coupling](item-post-qec-distinguishability-dipole-coupling)
- [post-qec-prereq-regularized-photon-dipole-model](item-post-qec-prereq-regularized-photon-dipole-model)
- [lem-qec-prereq-bosonic-thermal-moment-contract](item-lem-qec-prereq-bosonic-thermal-moment-contract)
- [physics:lem-qft-fock-ccr-car](https://alphabetamath.cc/physics/item/lem-qft-fock-ccr-car)
- [math:thm-trace-is-absolutely-convergent-and-basis-independent](https://alphabetamath.cc/item/thm-trace-is-absolutely-convergent-and-basis-independent)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)


## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice, and adopt the finite-mode thermal-bath, regularized photon-mode and real-polarization dipole-coupling postulates. Let $j=1,\ldots,m$, $m\geq1$, index independent bosonic modes of frequencies $\omega_j>0$, and let $\beta>0$ and $\gamma>0$. Write $a_j,a_j^\dagger$ for the annihilation and creation operators, $|\mathbf n\rangle$ for the occupation basis, $H_B=\sum_j\omega_j a_j^\dagger a_j$, $Z=\prod_j(1-e^{-\beta\omega_j})^{-1}$, and $\rho_B=Z^{-1}e^{-\beta H_B}$. Put $N_j=(e^{\beta\omega_j}-1)^{-1}$ and $P_{\alpha j}=\hat e_\alpha\cdot\epsilon_j$, where $\hat e_\alpha$ is a Cartesian unit vector and $\epsilon_j$ is a real transverse polarization vector. Let $\kappa(\omega_j)$ be the finite-mode coupling coefficient, and let $\mathcal J_{\alpha\alpha}(t)=\operatorname{Tr}[\widetilde B_\alpha(t)B_\alpha\rho_B]$ for $B_\alpha=-d_0E_\alpha/\sqrt\gamma$.

Use the maximal occupation-basis mode operators, identified with their finite-mode symmetric Fock realization as in the thermal-correlator expansion. For this correlator, the field operators are the extensions to $\mathcal D=\bigcap_{j=1}^m(D(a_j)\cap D(a_j^\dagger))$, with $B_\alpha=-\gamma^{-1/2}\sum_jP_{\alpha j}[\kappa(\omega_j)a_j+\kappa(\omega_j)^*a_j^\dagger]$ on $\mathcal D$. Its free conjugate has the same domain. The Gibbs-weighted two-field products are defined on the whole bath space and trace class by that expansion result.

The antinormal contraction is $\operatorname{Tr}(a_j a_k^\dagger\rho_B)=\delta_{jk}(1+N_j)$. Its contribution to the correlator, meaning the part containing annihilation at time $t$ and creation at time zero, is, for real $t$,

$$\mathcal J_{\alpha\alpha}(t)\{aa^\dagger\}=\frac1\gamma\sum_{j=1}^m P_{\alpha j}^2|\kappa(\omega_j)|^2e^{-i\omega_jt}(1+N_j).$$

The factor $1$ is conventionally called the spontaneous contribution and $N_j$ the stimulated contribution. In the article's continuum notation the corresponding formal expression is $\int d^3k\sum_\varepsilon[\hat e_\alpha\cdot\varepsilon(\mathbf k)]^2|\kappa(\omega)|^2e^{-i\omega t}[1+(e^{\beta\omega}-1)^{-1}]$. The article's equations (S3.9)–(S3.10) display the occupation sum and insert $a_1a_2^\dagger=\delta_{12}+a_2^\dagger a_1$ before its cancellation of partition factors. No continuum limit is established here; absorbing the finite expression's $1/\gamma$ requires a consistent redefinition of the coupling or correlator.

## Statement references

[pthm-qec-distinguishability-thermal-correlator-expansion](item-pthm-qec-distinguishability-thermal-correlator-expansion)

[pthm-qec-distinguishability-thermal-normal-moments](item-pthm-qec-distinguishability-thermal-normal-moments)

[def-qec-distinguishability-bath-correlator](item-def-qec-distinguishability-bath-correlator)

[post-qec-distinguishability-thermal-bath](item-post-qec-distinguishability-thermal-bath)

[post-qec-distinguishability-dipole-coupling](item-post-qec-distinguishability-dipole-coupling)

[post-qec-prereq-regularized-photon-dipole-model](item-post-qec-prereq-regularized-photon-dipole-model)

[lem-qec-prereq-bosonic-thermal-moment-contract](item-lem-qec-prereq-bosonic-thermal-moment-contract)

## Facts & Assumptions

**Given:** The choice assumptions, positive finite-mode data and physical postulates in the Statement.

[F1] The regulated bath has finitely many independent positive-frequency modes, and its thermal preparation has the occupation basis, Hamiltonian and partition function stated above. [post-qec-prereq-regularized-photon-dipole-model](item-post-qec-prereq-regularized-photon-dipole-model) [post-qec-distinguishability-thermal-bath](item-post-qec-distinguishability-thermal-bath)

[F2] The correlator and dipole coupling use the definition and normalization stated above. [def-qec-distinguishability-bath-correlator](item-def-qec-distinguishability-bath-correlator) [post-qec-distinguishability-dipole-coupling](item-post-qec-distinguishability-dipole-coupling)

[F3] The finite-mode Gibbs products of two ladder operators are trace class; the normal contraction is $\operatorname{Tr}(a_k^\dagger a_j\rho_B)=\delta_{jk}N_j$, and the antinormal contraction is $\delta_{jk}(1+N_j)$. [lem-qec-prereq-bosonic-thermal-moment-contract](item-lem-qec-prereq-bosonic-thermal-moment-contract)

[F4] In the regulated correlator's absolutely convergent occupation expansion, the coefficient of $a_j$ at time $t$ is $P_{\alpha j}\kappa(\omega_j)e^{-i\omega_jt}/\sqrt\gamma$, up to the common minus sign of the bath operator, and the coefficient of $a_k^\dagger$ at time zero is its corresponding conjugate. [pthm-qec-distinguishability-thermal-correlator-expansion](item-pthm-qec-distinguishability-thermal-correlator-expansion)

[F5] The normal occupation sum factors into the selected mode's weighted number sum and the other modes' partition functions, giving $N_j$ after normalization. [pthm-qec-distinguishability-thermal-normal-moments](item-pthm-qec-distinguishability-thermal-normal-moments)

[F6] In the finite-mode Fock realization, write $e_j$ for the standard orthonormal mode vectors, so $a_j=a(e_j)$ and $a_j^\dagger=a^\dagger(e_j)$. The common invariant finite-particle core $\mathcal D_{\rm fin}$ contains every occupation vector. On this core the bosonic identity is $a_j a_k^\dagger=\delta_{jk}I+a_k^\dagger a_j$, since $\langle e_j,e_k\rangle=\delta_{jk}$. [post-qec-distinguishability-dipole-coupling](item-post-qec-distinguishability-dipole-coupling) [physics:lem-qft-fock-ccr-car](https://alphabetamath.cc/physics/item/lem-qft-fock-ccr-car)

[F7] Under Countable Choice, a trace-class operator has an absolutely convergent diagonal sum in any supplied Hilbert basis, equal to its trace. Apply the trace theorem to the occupation basis and to each product in [F3]. To match its first-variable-linear convention with the Fock convention, use $(u,v)_1=\langle v,u\rangle_2$; then $(Tu,u)_1=\langle u,Tu\rangle_2$. [math:thm-trace-is-absolutely-convergent-and-basis-independent](https://alphabetamath.cc/item/thm-trace-is-absolutely-convergent-and-basis-independent)

[F8] The thermal-correlator expansion identifies the occupation and symmetric Fock realizations, defines these field extensions on $\mathcal D$, proves invariance of that domain under free evolution, and proves that the Gibbs-weighted two-field product is defined on the whole space and trace class. [pthm-qec-distinguishability-thermal-correlator-expansion](item-pthm-qec-distinguishability-thermal-correlator-expansion)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice for the cited constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

## Proof

**Given:** The choice assumptions, positive finite-mode data and physical postulates in the Statement.

**Goal:** Establish the antinormal contraction, its partition-factor cancellation, and the finite-mode correlator contribution.

1.1 Each occupation vector lies in $\mathcal D_{\rm fin}$, where [F6] gives $a_j a_k^\dagger=\delta_{jk}I+a_k^\dagger a_j$. Thus $\langle\mathbf n|a_j a_k^\dagger|\mathbf n\rangle=\delta_{jk}+\langle\mathbf n|a_k^\dagger a_j|\mathbf n\rangle$ for every $\mathbf n$. This uses only the common-core identity, without asserting equality on unrestricted product domains. [F6, A1, algebra]

2.1 By [F1], $\rho_B|\mathbf n\rangle=p_{\mathbf n}|\mathbf n\rangle$, where $p_{\mathbf n}=Z^{-1}e^{-\beta\sum_l n_l\omega_l}$, and $\sum_{\mathbf n}p_{\mathbf n}=1$. Multiply the diagonal identity in step 1.1 by $p_{\mathbf n}$ and sum. The two ladder products composed with $\rho_B$ are trace class by [F3], so [F7] identifies the absolutely convergent diagonal sums with their traces. Consequently $\operatorname{Tr}(a_j a_k^\dagger\rho_B)=\delta_{jk}+\operatorname{Tr}(a_k^\dagger a_j\rho_B)=\delta_{jk}(1+N_j)$, using the normal contraction in [F3]. [F1, F3, F7, A1, step 1.1, algebra]

3.1 Explicitly, put $q_l=e^{-\beta\omega_l}$. For $j=k$, the identity part of the occupation sum is $Z^{-1}\prod_l\sum_{n_l\geq0}q_l^{n_l}=1$ by [F1]. The remaining normal part factors and equals $N_j$ by [F5]. For $j\ne k$ the Kronecker factor and normal contraction both vanish. This is the finite-mode partition-factor cancellation corresponding to the article's two displayed occupation sums. [F1, F5, step 2.1, algebra]

4.1 Use the common-domain field realization in [F8]; its trace-class product is the correlator being expanded. Select annihilation at time $t$ and creation at time zero in the finite expansion [F4]. The two common minus signs cancel, and the coefficient multiplying $\operatorname{Tr}(a_j a_k^\dagger\rho_B)$ is $\gamma^{-1}P_{\alpha j}P_{\alpha k}\kappa(\omega_j)\kappa(\omega_k)^*e^{-i\omega_jt}$. Step 2.1 leaves only $j=k$, yielding the displayed finite sum. The real polarization factors give $P_{\alpha j}^2$, while the coupling product gives $|\kappa(\omega_j)|^2$. The calculation uses no continuum interchange or regulator-removal limit. [F2, F4, F8, step 2.1, step 3.1, algebra] ∎

## Source notes

The article's continuum expression and its labels for the two contributions are recorded for attribution. The finite-mode result follows from the stated suppliers and retains the normalization specified by the bath operator; the article citation is not used as its proof.
