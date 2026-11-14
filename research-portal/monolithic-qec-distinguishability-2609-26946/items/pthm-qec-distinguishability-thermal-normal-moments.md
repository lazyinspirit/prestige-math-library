---
id: pthm-qec-distinguishability-thermal-normal-moments
kind: physics-theorem
domain: physics
title: Thermal contractions and absorption contribution
status: draft
origin: session
deps:
  - pthm-qec-distinguishability-thermal-correlator-expansion
  - def-qec-distinguishability-bath-correlator
  - post-qec-distinguishability-thermal-bath
  - post-qec-distinguishability-dipole-coupling
  - post-qec-prereq-regularized-photon-dipole-model
  - lem-qec-prereq-bosonic-thermal-moment-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_roles:
  pthm-qec-distinguishability-thermal-correlator-expansion: physical-result
  def-qec-distinguishability-bath-correlator: formulation-prerequisite
  post-qec-distinguishability-thermal-bath: physical-assumption
  post-qec-distinguishability-dipole-coupling: physical-assumption
  post-qec-prereq-regularized-photon-dipole-model: physical-assumption
  lem-qec-prereq-bosonic-thermal-moment-contract: mathematical-premise
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
      locator: PDF page 12, text before equation (S3.6), equations (S3.6)–(S3.8)
      statement: The article evaluates the number-state contractions and writes the
        normal contribution as a continuum mode integral with a Bose occupation
        factor.
      hypotheses: The article's thermal photon-bath and dipole-coupling conventions in
        section S3.
      reading_limits: The supplied extracted text at the cited passage and the frozen
        article extraction were read. This citation attributes the article's
        expression; it does not establish a continuum limit or independently
        prove the prerequisite moments.
physical_scope: Conditional calculation in the finite positive-frequency
  photon-mode regulator with a thermal preparation and dipole coupling; no
  laboratory observation or continuum Gibbs trace is asserted.
formulation_deps:
  - pthm-qec-distinguishability-thermal-correlator-expansion
  - def-qec-distinguishability-bath-correlator
  - post-qec-distinguishability-thermal-bath
  - post-qec-distinguishability-dipole-coupling
  - post-qec-prereq-regularized-photon-dipole-model
  - lem-qec-prereq-bosonic-thermal-moment-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
argument_deps:
  - pthm-qec-distinguishability-thermal-correlator-expansion
  - def-qec-distinguishability-bath-correlator
  - post-qec-distinguishability-thermal-bath
  - post-qec-distinguishability-dipole-coupling
  - post-qec-prereq-regularized-photon-dipole-model
  - lem-qec-prereq-bosonic-thermal-moment-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_level: 8
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice, and adopt the finite-mode thermal-bath, regularized photon-mode and real-polarization dipole-coupling postulates. For modes $j=1,\ldots,m$, $m\geq1$, let $\omega_j>0$, $\beta>0$, and $\gamma>0$. Let $a_j$ and $a_j^\dagger$ be the annihilation and creation operators, $|\mathbf n\rangle$ the occupation basis, and $\rho_B=Z^{-1}e^{-\beta H_B}$ the thermal state, where $H_B=\sum_j\omega_j a_j^\dagger a_j$ and $Z=\prod_j(1-e^{-\beta\omega_j})^{-1}$. Write $N_j=(e^{\beta\omega_j}-1)^{-1}$ and $\langle X\rangle_\beta=\operatorname{Tr}(X\rho_B)$.

Use the maximal occupation-basis mode operators, identified with their finite-mode symmetric Fock realization as in the thermal-correlator expansion. For this correlator, the field operators are the extensions to $\mathcal D=\bigcap_{j=1}^m(D(a_j)\cap D(a_j^\dagger))$, with $B_\alpha=-\gamma^{-1/2}\sum_jP_{\alpha j}[\kappa(\omega_j)a_j+\kappa(\omega_j)^*a_j^\dagger]$ on $\mathcal D$. Its free conjugate has the same domain. The Gibbs-weighted two-field products are defined on the whole bath space and trace class by that expansion result.

For every occupation vector, the diagonal matrix elements of $a_j a_k$ and $a_j^\dagger a_k^\dagger$ vanish. The normal thermal contraction is $\langle a_j^\dagger a_k\rangle_\beta=\delta_{jk}N_j$; its occupation sum factors into the selected mode's weighted number sum and the other modes' partition functions.

Let $P_{\alpha j}=\hat e_\alpha\cdot\epsilon_j$ for real transverse polarization vectors $\epsilon_j$, and let $\kappa(\omega_j)$ be the finite-mode coupling coefficient. For $B_\alpha=-d_0E_\alpha/\sqrt\gamma$, the bath correlator is $\mathcal J_{\alpha\alpha}(t)=\operatorname{Tr}[\widetilde B_\alpha(t)B_\alpha\rho_B]$. Its normal, or absorption, contribution for real $t$ is

$$\mathcal J_{\alpha\alpha}(t)\{a^\dagger a\}=\frac1\gamma\sum_{j=1}^m P_{\alpha j}^2|\kappa(\omega_j)|^2N_j e^{i\omega_jt}.$$

The article writes the corresponding continuum expression as $\int d^3k\sum_\varepsilon[\hat e_\alpha\cdot\varepsilon(\mathbf k)]^2|\kappa(\omega)|^2e^{i\omega t}/(e^{\beta\omega}-1)$. This is recorded as its formal expression, not as a proved regulator-removal limit. With the bath-operator normalization above, the finite calculation retains $1/\gamma$; absorbing it requires a consistent redefinition of the coupling or correlator.

## Facts & Assumptions

**Given:** The choice assumptions, positive finite-mode data and physical postulates in the Statement.

[F1] The regulated photon bath has finitely many independent positive-frequency modes, and its thermal preparation has the Gibbs Hamiltonian and partition function stated above. [[post-qec-prereq-regularized-photon-dipole-model]] [[post-qec-distinguishability-thermal-bath]]

[F2] The bath correlator and real-polarization dipole coupling use the definitions and normalization in the Statement. [[def-qec-distinguishability-bath-correlator]] [[post-qec-distinguishability-dipole-coupling]]

[F3] For these finite positive-frequency modes, the thermal products of two ladder operators are trace class after composition with the Gibbs state. Their normal contractions are $\delta_{jk}N_j$, while both equal-kind contractions vanish. [[lem-qec-prereq-bosonic-thermal-moment-contract]]

[F4] The regulated correlator admits an absolutely convergent occupation-basis expansion and its coupling coefficients are $\kappa(\omega_j)^*e^{i\omega_jt}$ for creation and $\kappa(\omega_j)e^{-i\omega_jt}$ for annihilation. [[pthm-qec-distinguishability-thermal-correlator-expansion]]

[F8] The thermal-correlator expansion identifies the occupation and symmetric Fock realizations, defines these field extensions on $\mathcal D$, proves invariance of that domain under free evolution, and proves that the Gibbs-weighted two-field product is defined on the whole space and trace class. [[pthm-qec-distinguishability-thermal-correlator-expansion]]

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice for the cited constructions. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Goal:** Establish the occupation-basis contractions, factorization and stated finite-mode absorption contribution.

1.1 In the occupation basis, each annihilation lowers its mode occupation by one and each creation raises it by one. Thus two annihilations or two creations either kill the vector or change its total occupation by two, so their diagonal matrix elements vanish. For $j\ne k$, $a_j^\dagger a_k$ changes two mode occupations and also has zero diagonal element; for $j=k$ its diagonal element is $n_j$. The normal contraction and trace-class assertions then follow from [F3]. [F1, F3, A1, algebra]

2.1 Put $q_j=e^{-\beta\omega_j}$. The Gibbs weight of $|\mathbf n\rangle$ is $Z^{-1}\prod_l q_l^{n_l}$. In the diagonal normal term the sum is therefore $Z^{-1}(\sum_{n_j\geq0}n_jq_j^{n_j})\prod_{l\ne j}(\sum_{n_l\geq0}q_l^{n_l})$. The product structure and convergence are those in [F1] and [F3]; the other-mode factors cancel against their factors in $Z$, leaving $N_j$ by [F3]. [F1, F3, step 1.1, algebra]

3.1 Use the common-domain field realization in [F8]; its trace-class product is the correlator being expanded. In the absolutely convergent expansion [F4], select the term with creation at time $t$ and annihilation at time zero. Its coefficient before the contraction is $\gamma^{-1}P_{\alpha j}P_{\alpha k}\kappa(\omega_j)^*\kappa(\omega_k)e^{i\omega_jt}$. By step 1.1 only $j=k$ survives, giving the displayed finite sum. The real polarization convention makes the surviving polarization factor $P_{\alpha j}^2$; the coupling factors give $|\kappa(\omega_j)|^2$. This proves the conditional result without taking a continuum limit. [F2, F3, F4, F8, step 1.1, step 2.1, algebra] ∎
