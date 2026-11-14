---
id: pthm-qec-distinguishability-thermal-correlator-expansion
kind: physics-theorem
domain: physics
title: Photon-number expansion of the diagonal bath correlator
status: draft
origin: session
deps:
  - def-qec-distinguishability-bath-correlator
  - post-qec-distinguishability-thermal-bath
  - post-qec-distinguishability-dipole-coupling
  - post-qec-prereq-regularized-photon-dipole-model
  - lem-qec-prereq-bosonic-thermal-moment-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - math:thm-trace-is-absolutely-convergent-and-basis-independent
dependency_roles:
  def-qec-distinguishability-bath-correlator: formulation-prerequisite
  post-qec-distinguishability-thermal-bath: physical-assumption
  post-qec-distinguishability-dipole-coupling: physical-assumption
  post-qec-prereq-regularized-photon-dipole-model: physical-assumption
  lem-qec-prereq-bosonic-thermal-moment-contract: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  math:thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 11, equation (S3.3) and the subsequent bath-operator
        identification; page 12, equations (S3.4)–(S3.5)
      statement: The article identifies the bath coupling operator as minus d_0 times
        the field component divided by the square root of gamma, and writes a
        photon-number expansion of the diagonal bath correlator in continuum
        mode notation, replacing the Gibbs exponential by its number-state
        eigenvalue in equation (S3.5).
      hypotheses: The article's idealized photon bath, dipole coupling and
        thermal-state conventions in section S3.
      reading_limits: The supplied extracted article text at the cited passages was
        read. This reference attributes the article's expressions; it is not
        used as proof of the regulated result or of a continuum limit.
physical_scope: Conditional calculation in an idealized finite
  positive-frequency photon-mode regulator with a thermal preparation and dipole
  coupling. No laboratory observation, continuum Gibbs trace, or
  regulator-removal limit is asserted.
dependency_level: 7
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice, and adopt the finite-mode thermal-bath and real-polarization dipole-coupling postulates. Let the finite set of modes be indexed by $j=1,\ldots,m$, with $m\geq1$, frequencies $\omega_j>0$, real transverse polarization vectors $\epsilon_j$, and $\beta>0$. Write $P_{\alpha j}=\hat e_\alpha\cdot\epsilon_j$ and $Q_j(t)=\kappa(\omega_j)^*a_j^\dagger e^{i\omega_jt}+\kappa(\omega_j)a_j e^{-i\omega_jt}$. Here $a_j$ and $a_j^\dagger$ are the mode annihilation and creation operators, $\hat e_\alpha$ is a Cartesian unit vector, and $\kappa$ contains the selected finite-mode field normalization. For the bath operator $B_\alpha=-d_0E_\alpha/\sqrt\gamma$, with $\gamma>0$, put $\mathcal J_{\alpha\alpha}(t)=\operatorname{Tr}_B[\widetilde B_\alpha(t)B_\alpha\rho_B]$.

Use the maximal mode operators in the complete occupation-basis realization, identified with the finite-mode symmetric Fock realization by matching occupation vectors. Set $\mathcal D=\bigcap_{j=1}^m(D(a_j)\cap D(a_j^\dagger))$. In this calculation, $E_\alpha$ and $B_\alpha$ mean the extensions of the initial finite-particle field sums to $\mathcal D$, with $B_\alpha=-\gamma^{-1/2}\sum_jP_{\alpha j}Q_j(0)$ there. The free evolution is $U(t)|\mathbf n\rangle=e^{-itE_{\mathbf n}}|\mathbf n\rangle$, and $\widetilde B_\alpha(t)=U(t)^*B_\alpha U(t)$ has domain $U(t)^*\mathcal D=\mathcal D$. The Gibbs-weighted products in the correlator are defined on the whole bath space and are trace class, as proved below.

Let $\mathbf n=(n_1,\ldots,n_m)\in\mathbb N_0^m$, $E_{\mathbf n}=\sum_jn_j\omega_j$, and $Z=\prod_j(1-e^{-\beta\omega_j})^{-1}$. Then, for every real $t$,

$$\mathcal J_{\alpha\alpha}(t)=\frac{1}{\gamma Z}\sum_{\mathbf n}\langle\mathbf n|\sum_{j,k=1}^mP_{\alpha j}P_{\alpha k}Q_j(t)Q_k(0)e^{-\beta H_B}|\mathbf n\rangle=\frac{1}{\gamma Z}\sum_{\mathbf n}e^{-\beta E_{\mathbf n}}\langle\mathbf n|\sum_{j,k=1}^mP_{\alpha j}P_{\alpha k}Q_j(t)Q_k(0)|\mathbf n\rangle.$$

Both series converge absolutely. In particular, with $N_j=(e^{\beta\omega_j}-1)^{-1}$,

$$\mathcal J_{\alpha\alpha}(t)=\frac1\gamma\sum_{j=1}^mP_{\alpha j}^2|\kappa(\omega_j)|^2\bigl[N_je^{i\omega_jt}+(N_j+1)e^{-i\omega_jt}\bigr].$$

The article writes the corresponding number-state expansion with continuum mode integrals in equations (S3.4)–(S3.5). Those integrals are formal here: no interchange with an infinite-volume thermal trace or limit of finite-mode expressions is claimed. The explicit factor $1/\gamma$ above follows from the stated bath-operator normalization; it may be absorbed only by redefining the coupling coefficients or correlator consistently.

## Facts & Assumptions

**Given:** The mode data, choice assumptions, thermal preparation and coupling postulates in the Statement.

[F1] For a stationary bath density operator, the bath correlation matrix is defined when every two-time product $\widetilde B_\alpha(t)\widetilde B_\eta(s)\rho_B$ has a well-defined trace and all resulting entries are invariant under a common time translation. Then $\mathcal J_{\alpha\eta}(t-s)=\operatorname{Tr}_B[\widetilde B_\alpha(t)\widetilde B_\eta(s)\rho_B]$; its diagonal at $s=0$ is the correlator used here. The channel labels $\alpha,\eta$ range independently over $\{x,y,z\}$. [[def-qec-distinguishability-bath-correlator]]

[F2] The finite regulator supplies independent positive-frequency oscillator modes, the complete occupation basis, the maximal shifts $a_j|\mathbf n\rangle=\sqrt{n_j}|\mathbf n-\mathbf e_j\rangle$ (zero for $n_j=0$) and $a_j^\dagger|\mathbf n\rangle=\sqrt{n_j+1}|\mathbf n+\mathbf e_j\rangle$, their occupation-weight domains, and diagonal free evolution. Here $\mathbf e_j$ is the unit occupation vector. A continuum thermal preparation and regulator-removal limit require separate specifications. [[post-qec-prereq-regularized-photon-dipole-model]]

[F3] For the finite thermal bath, $H_B=\sum_j\omega_ja_j^\dagger a_j$ and $\rho_B=Z^{-1}e^{-\beta H_B}$, with the stated number basis and partition function. [[post-qec-distinguishability-thermal-bath]]

[F4] In the real-polarization convention, $B_\alpha=-d_0E_\alpha/\sqrt\gamma$ and the field coefficients are $P_{\alpha j}\kappa(\omega_j)$ for annihilation and their conjugates for creation. [[post-qec-distinguishability-dipole-coupling]]

[F5] In the finite-mode symmetric Fock realization, the occupation vectors form a complete orthonormal basis with the stated diagonal energies and Gibbs weights. For finitely many positive-frequency modes and positive $\beta$, every ordered product of two creation or annihilation operators composed with the Gibbs density is defined on the entire bath space and is trace class. Their thermal moments are $\langle a_j^\dagger a_k\rangle=\delta_{jk}N_j$, $\langle a_ja_k^\dagger\rangle=\delta_{jk}(N_j+1)$, and the moments of two creations or two annihilations vanish. [[lem-qec-prereq-bosonic-thermal-moment-contract]]

[F6] Under Countable Choice, the trace of a trace-class operator equals its absolutely convergent diagonal sum in every supplied Hilbert basis; finite linear combinations remain trace class and their trace is linear. Apply this with the complete occupation basis. To use the trace supplier's first-variable-linear pairing with the Fock second-variable-linear pairing, put $(u,v)_1=\langle v,u\rangle_2$; then $(Tu,u)_1=\langle u,Tu\rangle_2$, with unchanged norms and operator domains. [[math:thm-trace-is-absolutely-convergent-and-basis-independent]]

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice for the cited constructions. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Goal:** Prove the two number-state expressions, their absolute convergence, and the evaluated finite-mode correlator with the stated field domains.

1.1 Match the complete occupation bases in [F2] and [F5]. On finite linear combinations this map preserves the norm and has dense range, so it extends to a unitary identification. The ladder actions agree: the symmetric Fock occupation vectors in [F5] have the raising and lowering actions obtained from their normalized symmetric tensors, and [F2] gives the same coordinate shifts. The maximal domains are exactly the square-summability domains of these weighted coordinates; thus the identification intertwines the maximal mode operators and the diagonal Hamiltonians. Conjugating the first-variable-linear pairing of the tensor realization gives the second-variable-linear Fock convention without changing norms or domains. With $\hbar=1$, [F2] and [F3] give $U(t)|\mathbf n\rangle=e^{-itE_{\mathbf n}}|\mathbf n\rangle$. Its modulus-one phases preserve every mode domain. The coordinate shifts therefore give $U(t)^*a_jU(t)=e^{-i\omega_jt}a_j$ and $U(t)^*a_j^\dagger U(t)=e^{i\omega_jt}a_j^\dagger$ on their full maximal domains, including the zero lowering coordinate at $n_j=0$. [F2, F3, F5, A1, algebra]

2.1 The finite field sum from [F4] extends to the common linear domain $\mathcal D$ specified in the Statement and agrees with the initial field on finite-particle vectors. By step 1.1, $U(t)^*\mathcal D=\mathcal D$, and conjugation gives $\widetilde B_\alpha(t)=-\gamma^{-1/2}\sum_jP_{\alpha j}Q_j(t)$ on precisely this domain. [F2, F4, step 1.1, algebra]

3.1 Write $L$ for any one of the finitely many $a_j,a_j^\dagger$. By [F5], $L'L\rho_B$ is defined on the whole space for every ordered pair $L',L$. In particular, $\rho_B\psi$ is in every mode domain and $L\rho_B\psi$ is in every mode domain for every bath vector $\psi$. For every Cartesian channel $\eta$ and real $s$, step 2.1 expresses $\widetilde B_\eta(s)$ as a finite linear combination of these mode operators on $\mathcal D$. Hence $\widetilde B_\eta(s)\rho_B\psi\in\mathcal D$, and $\widetilde B_\alpha(t)\widetilde B_\eta(s)\rho_B$ is an actual whole-space operator product for every $\alpha,\eta\in\{x,y,z\}$ and $t,s\in\mathbb R$. Its finite expansion consists of the trace-class products in [F5], so [F6] makes it trace class. Define its trace to be $C_{\alpha\eta}(t,s)$. Substituting [F3] and step 2.1 gives $C_{\alpha\eta}(t,s)=(\gamma Z)^{-1}\operatorname{Tr}_B[\sum_{j,k}P_{\alpha j}P_{\eta k}Q_j(t)Q_k(s)e^{-\beta H_B}]$. [F3, F5, F6, step 2.1, algebra]

4.1 Expand each $Q_j(t)Q_k(s)$ in step 3.1 into its four ladder-operator products. By [F5], the two equal-kind products have zero thermal trace, while the mixed products vanish unless $j=k$. For $j=k$, their respective coefficients and moments are $|\kappa(\omega_j)|^2e^{i\omega_j(t-s)}N_j$ and $|\kappa(\omega_j)|^2e^{-i\omega_j(t-s)}(N_j+1)$. Trace linearity therefore gives $C_{\alpha\eta}(t,s)=\gamma^{-1}\sum_{j=1}^mP_{\alpha j}P_{\eta j}|\kappa(\omega_j)|^2[N_je^{i\omega_j(t-s)}+(N_j+1)e^{-i\omega_j(t-s)}]$ for every channel pair. This depends only on $t-s$, so $C_{\alpha\eta}(t+u,s+u)=C_{\alpha\eta}(t,s)$ for every real $u$. The Gibbs preparation is stationary by [F3], and step 3.1 supplies all nine trace-class products; thus all conditions of [F1] hold for the three-channel matrix. Consequently $\mathcal J_{\alpha\eta}(t-s)=C_{\alpha\eta}(t,s)$, including the diagonal at $s=0$. [F1, F3, F5, F6, step 3.1, algebra]

5.1 Each summand in the finite double sum of step 3.1, with $\eta=\alpha$ and $s=0$, is trace class by [F5] and $e^{-\beta H_B}=Z\rho_B$, with $0<Z<\infty$ from [F3]. Applying [F6] to the supplied occupation basis gives its absolutely convergent diagonal sum; trace linearity permits summing these finitely many series. Also $e^{-\beta H_B}|\mathbf n\rangle=e^{-\beta E_{\mathbf n}}|\mathbf n\rangle$ by [F3] and [F5]. These are exactly the two number-state expressions in the Statement. The finite sum of the absolute diagonal sums bounds the absolute sum of the combined series, proving absolute convergence of both expressions without any continuum interchange. [F3, F5, F6, step 3.1, step 4.1, algebra]

6.1 Set $\eta=\alpha$ and $s=0$ in step 4.1. The polarization factors become $P_{\alpha j}^2$, and the surviving terms are $|\kappa(\omega_j)|^2e^{i\omega_jt}N_j$ and $|\kappa(\omega_j)|^2e^{-i\omega_jt}(N_j+1)$, with the normalization $1/\gamma$ from step 3.1. This is the final displayed formula, and step 5.1 supplies both absolutely convergent number-state representations. No continuum limit is used. [step 3.1, step 4.1, step 5.1, algebra] ∎

## Source notes

Equations (S3.4)–(S3.5) of the article use continuum integrations and display the Gibbs operator before replacing it by its occupation-basis eigenvalue. The finite sums above are the regulated counterpart, not a proof that those continuum expressions exist. The article's preceding identification uses $B_\alpha=-d_0E_\alpha/\sqrt\gamma$; with the separately stated $\kappa=d_0\mathcal E$, that identification yields the displayed $1/\gamma$ in the correlator. The conditional calculation makes this normalization explicit without assuming a value of $\gamma$.
