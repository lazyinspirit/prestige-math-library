---
title: Regularized transverse photon dipole bath model
status: published
research_item: post-qec-prereq-regularized-photon-dipole-model
dependency_level: 0
sources:
  references:
    - title: Quantum and Atom Optics
      url: https://atomoptics-nas.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf
      locator: Section 5.1, discussion of the long-wavelength approximation and
        equation (5.5)
      statement: In the dipole approximation the field is evaluated at the atom and
        the interaction is written as minus the atomic dipole operator dotted
        with the electric field.
      hypotheses: The field wavelength is much longer than the spatial extent of the
        atom; the cited passage discusses an atomic model and its field.
      reading_limits: Read the cited discussion and equation through the searchable
        PDF. This passage motivates the dipole coupling; it does not establish
        the particular cutoff, a continuum thermal state, or the validity of a
        weak-coupling limit used below.
    - title: Quantum Optics
      url: https://api.pageplace.de/preview/DT0400.9781139786218_A23868599/preview-9781139786218_A23868599.pdf
      locator: Table 1.2, entry (3), thermal state, PDF page 39
      statement: A single oscillator mode with positive frequency has the normalized
        thermal density operator proportional to the exponential of minus beta
        times its number-operator energy.
      hypotheses: A single positive-frequency mode and positive inverse temperature.
      reading_limits: Read the cited table entry in the publisher preview. It supplies
        the single-mode thermal convention, not an infinite-volume Gibbs density
        operator or a regulator-removal result.
---

## Prerequisites

- [physics:def-nrqm-photons-framework-radiation-sector-and-quantum-assignments](https://alphabetamath.cc/physics/item/def-nrqm-photons-framework-radiation-sector-and-quantum-assignments)
- [physics:thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound](https://alphabetamath.cc/physics/item/thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [physics:thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace](https://alphabetamath.cc/physics/item/thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace)
- [physics:lem-nrqm-composites-hilbert-tensor-construction](https://alphabetamath.cc/physics/item/lem-nrqm-composites-hilbert-tensor-construction)
- [physics:lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma](https://alphabetamath.cc/physics/item/lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma)
- [physics:lem-nrqm-composites-density-and-scalar-spectral-probability](https://alphabetamath.cc/physics/item/lem-nrqm-composites-density-and-scalar-spectral-probability)
- [math:thm-kato-rellich](https://alphabetamath.cc/item/thm-kato-rellich)
- [physics:thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian](https://alphabetamath.cc/physics/item/thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian)
- [` Quantum and Atom Optics · Section 5.1, discussion of the long-wavelength approximation and equation (5.5) `](https://atomoptics-nas.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf)
- [` Quantum Optics · Table 1.2, entry (3), thermal state, PDF page 39 `](https://api.pageplace.de/preview/DT0400.9781139786218_A23868599/preview-9781139786218_A23868599.pdf)


## Postulate

Adopt the transverse radiation sector and frequency assignment $\omega(k)=c|k|$ of [physics:def-nrqm-photons-framework-radiation-sector-and-quantum-assignments](https://alphabetamath.cc/physics/item/def-nrqm-photons-framework-radiation-sector-and-quantum-assignments), with $c>0$ and $\hbar>0$. Thus its one-photon space is $\mathfrak h=\{f\in L^2(\mathbb R^3;\mathbb C^3):k\cdot f(k)=0\text{ a.e.}\}$, its radiation space is the symmetric Fock space $\mathcal F(\mathfrak h)$, and its free energy is $H_f=d\Gamma(\varepsilon)$ with $\varepsilon(k)=\hbar c|k|$.

For the continuum regulator take a finite matter space $\mathbb C^d$, a Hermitian matter Hamiltonian $H_a$, Hermitian dipole components $D_1,\ldots,D_J$, a real coupling $\eta$, and transverse form factors $g_j\in\mathfrak h$ supported where $0<\varepsilon\leq\Lambda$ for a finite $\Lambda>0$, with $g_j/\sqrt\varepsilon\in\mathfrak h$. Write $A_-(g)$ and $A_+(g)$ for annihilation and creation operators and $\phi(g)=A_-(g)+A_+(g)$. Postulate the total Hamiltonian $H=H_a\otimes I+I\otimes H_f+\eta\sum_{j=1}^J D_j\otimes\phi(g_j)$ on $\mathbb C^d\otimes D(H_f)$. The form factors include the chosen field normalization, fixed emitter position and ultraviolet regularization. This is a regulated dipole coupling: it models the interaction of the matter dipole with the electric field evaluated at the emitter, rather than an unregularized point field.

Alternatively, a finite positive-frequency mode regulator uses $m\geq1$ independent bosonic oscillator modes with $\omega_r>0$ and $\varepsilon_r=\hbar\omega_r$. Its bath space is the iterated completed Hilbert tensor product $\mathcal H_B=\widehat\bigotimes_{r=1}^m F(\mathbb C)$, with inner product linear in the first argument and complete occupation basis $e_{\mathbf n}=e_{n_1}\otimes\cdots\otimes e_{n_m}$, $\mathbf n\in\mathbb N_0^m$. Write $x=\sum_{\mathbf n}x_{\mathbf n}e_{\mathbf n}$. The mode operators are the maximal weighted shifts $a_re_{\mathbf n}=\sqrt{n_r}e_{\mathbf n-\mathbf e_r}$ and $a_r^\dagger e_{\mathbf n}=\sqrt{n_r+1}e_{\mathbf n+\mathbf e_r}$, with the lowering expression zero when $n_r=0$; here $\mathbf e_r$ is the $r$th coordinate unit vector. Their domains are respectively $\{x:\sum_{\mathbf n}n_r|x_{\mathbf n}|^2<\infty\}$ and $\{x:\sum_{\mathbf n}(n_r+1)|x_{\mathbf n}|^2<\infty\}$. The number operator $N_r=a_r^\dagger a_r$ is multiplication by $n_r$ on $D(N_r)=\{x:\sum_{\mathbf n}n_r^2|x_{\mathbf n}|^2<\infty\}$. The free energy is the self-adjoint diagonal sum $H_f=\sum_r\varepsilon_rN_r$, with $E_{\mathbf n}=\sum_r\varepsilon_r n_r$, $H_fx=\sum_{\mathbf n}E_{\mathbf n}x_{\mathbf n}e_{\mathbf n}$ and $D(H_f)=\{x:\sum_{\mathbf n}E_{\mathbf n}^2|x_{\mathbf n}|^2<\infty\}$.

The finite-mode interaction is any finite sum $V=\sum_{\ell=1}^L M_\ell\otimes L_\ell$, where the $M_\ell$ are Hermitian matter matrices and $L_\ell=\sum_{r=1}^m(z_{\ell r}a_r+\overline{z_{\ell r}}a_r^\dagger)$ for specified complex coefficients. These field combinations are symmetric on the common dense domain $D(H_f)$; the total Hamiltonian $H=H_a\otimes I+I\otimes H_f+V$ is self-adjoint and bounded below on $\mathbb C^d\otimes D(H_f)$, as justified below. Real overall coupling constants may be included in the matrices or coefficients. The mode frequencies and coupling coefficients are part of that regulator and need not reproduce a continuum spectrum exactly. The empty-mode case uses $\mathcal H_B=\mathbb C$, $H_f=V=0$ and its unique normalized bath state.

A bath preparation is an additional choice, stationary under the chosen free bath dynamics. The vacuum is one such choice. For finitely many positive-frequency modes, a thermal choice at inverse temperature $\beta>0$ is the normalized Gibbs state $\rho_B=Z^{-1}e^{-\beta H_f}$, where $Z=\operatorname{Tr}(e^{-\beta H_f})$. A continuum thermal preparation, if used, must instead be specified with its state and correlation functions; no trace-class infinite-volume Gibbs operator is asserted. A weak-coupling approximation is also an additional modeling choice: retaining leading interaction contributions or taking a limit requires separately stated scaling and error or convergence hypotheses. Neither that approximation nor removal of either regulator follows from this postulate. A regulator-free correlation or spectrum requires its own convergent or distributional contract and normalization.

## Facts & Assumptions

[F1] The radiation-sector supplier specifies the transverse one-photon space, bosonic Fock space, free energy and frequency assignment, under the Axioms of Choice, Countable Choice and Dependent Choice. [physics:def-nrqm-photons-framework-radiation-sector-and-quantum-assignments](https://alphabetamath.cc/physics/item/def-nrqm-photons-framework-radiation-sector-and-quantum-assignments)

[F2] For the stated continuum cutoff, weighted integrability and finite Hermitian matter matrices, the cutoff dipole relative-bound theorem gives a self-adjoint, bounded-below total Hamiltonian on $\mathbb C^d\otimes D(H_f)$. [physics:thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound](https://alphabetamath.cc/physics/item/thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound)

[F3] For a one-mode Fock space with complete occupation basis, positive energy spacing $\varepsilon$ and $\beta>0$, the diagonal Gibbs operator is trace class and $\sum_{n\geq0}e^{-\beta\varepsilon n}=(1-e^{-\beta\varepsilon})^{-1}$. The result assumes Countable Choice and Choice; its frequency parameter is here applied to the energy spacing $\varepsilon=\hbar\omega$. [physics:thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace](https://alphabetamath.cc/physics/item/thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace)

[F4] Under Countable Choice, completed Hilbert tensor products exist and products of complete orthonormal families form a complete orthonormal family. The pairing is linear in the first argument. [physics:lem-nrqm-composites-hilbert-tensor-construction](https://alphabetamath.cc/physics/item/lem-nrqm-composites-hilbert-tensor-construction)

[F5] Under Countable Choice, any real sequence on a specified countable complete orthonormal family defines a self-adjoint diagonal operator on its squared-weight domain; the finite span is a graph core, and nonnegative entries give a nonnegative operator. [physics:lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma](https://alphabetamath.cc/physics/item/lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma)

[F6] Under Countable Choice, a finite or countable orthonormal family with nonnegative weights summing to one defines a density operator by a trace-norm convergent sum of rank-one projections. [physics:lem-nrqm-composites-density-and-scalar-spectral-probability](https://alphabetamath.cc/physics/item/lem-nrqm-composites-density-and-scalar-spectral-probability)

[F7] Under Choice, a symmetric perturbation with relative bound less than one of a self-adjoint operator gives a self-adjoint sum on the same domain; if the unperturbed operator is bounded below, so is the sum. [math:thm-kato-rellich](https://alphabetamath.cc/item/thm-kato-rellich)

[F8] Under the choice assumptions A1, the continuum free energy for $\varepsilon(k)=\alpha|k|$, $\alpha>0$, is the self-adjoint direct sum $H_f=\bigoplus_{n\geq0}T_n$, with $T_0=0$ on $\mathbb C$ and $D(H_f)=\{\psi:\psi_n\in D(T_n)\text{ for every }n,\ \sum_n\|T_n\psi_n\|^2<\infty\}$. Its sectorwise spectral representation has zero-sector PVM $E_0(B)=\mathbf1_B(0)I_{\mathbb C}$ (Statement and Proof, step 5.1 of the supplier). [physics:thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian](https://alphabetamath.cc/physics/item/thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian)

[A1] Assume the Axioms of Choice, Countable Choice and Dependent Choice for the cited constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

## Justification

**Given:** The stated continuum cutoff or finite list of positive mode energies, the finite Hermitian matter matrices and coefficients, $\beta>0$ when a Gibbs state is chosen, and the choice assumptions A1. The following argument establishes mathematical well-definedness and stationarity, not the physical adoption of a bath or dipole approximation.

1.1 The transverse space, Fock space and $H_f$ have the meanings fixed by F1. The symbols $d\Gamma(\varepsilon)$, $A_\pm(g)$ and $D(H_f)$ denote, respectively, the free energy obtained by summing the one-particle energy over boson sectors, the creation and annihilation operators, and the free Hamiltonian's domain. The finite matrices are bounded, and F2 applies because $\varepsilon=\hbar c|k|$ has positive coefficient and the stated support and weighted-integrability conditions match its hypotheses. This justifies the continuum Hamiltonian as an operator; the physical identification of its interaction remains the postulate. [F1, F2, A1]

1.2 F3 supplies each one-mode Hilbert space with its complete occupation basis. Iterating F4 a finite number of times supplies $\mathcal H_B$ and the complete product basis in the Postulate. Enumerate $\mathbb N_0^m$ by increasing $\sum_r n_r$ and lexicographic order within each finite level. Apply F5 to this enumeration, first with entries $n_r$ and then with entries $E_{\mathbf n}$. This gives self-adjoint $N_r$ and nonnegative self-adjoint $H_f$ on exactly the displayed domains, with the stated eigenvalues and common finite-support core. Since $\varepsilon_rn_r\leq E_{\mathbf n}$ and $E_{\mathbf n}^2\leq m\sum_r\varepsilon_r^2n_r^2$, $D(H_f)=\bigcap_rD(N_r)$ and the finite sum of the $\varepsilon_rN_r$ there equals $H_f$. Countable Choice is used through F4 and F5; Choice is inherited from F3, and the continuum convention retains the additional Dependent Choice assumption in F1. [F1, F3, F4, F5, A1, algebra]

2.1 The maximal lowering shift has coordinates $(a_rx)_{\mathbf n}=\sqrt{n_r+1}x_{\mathbf n+\mathbf e_r}$ and squared norm $\sum_{\mathbf n}n_r|x_{\mathbf n}|^2$; the maximal raising shift has the corresponding shifted coordinates and squared norm $\sum_{\mathbf n}(n_r+1)|x_{\mathbf n}|^2$. Thus the displayed domains are exact, and both contain the finite span. Testing the adjoint identity on every basis vector forces the coordinates of the adjoint of lowering to be those of raising; the forced vector is square summable exactly on the displayed raising domain. Conversely, on that domain the identity holds first on finite sums and then on the whole lowering domain by coordinate truncation and the two norm identities. Interchanging raising and lowering gives mutual adjointness. Applying the shifts successively shows that $a_r^\dagger a_r$ has domain $D(N_r)$ and value $N_r$ (the extra requirement is $\sum_{\mathbf n}n_r^2|x_{\mathbf n}|^2<\infty$). On the invariant finite span, shifts of different coordinates commute, while $a_ra_r^\dagger-a_r^\dagger a_r=I$; these are the independent bosonic oscillator relations. [F4, F5, step 1.2, algebra]

2.2 For the finite-mode thermal construction set $q_r=e^{-\beta\varepsilon_r}\in(0,1)$. For the increasing finite boxes $C_N=\{0,\ldots,N\}^m$, finite distributivity gives $\sum_{\mathbf n\in C_N}e^{-\beta E_{\mathbf n}}=\prod_r\sum_{n_r=0}^Nq_r^{n_r}$. Every finite subset of $\mathbb N_0^m$ lies in a box, so the supremum of the nonnegative finite subsums is the limit of these box sums. F3 and finiteness of $m$ give $Z=\sum_{\mathbf n}e^{-\beta E_{\mathbf n}}=\prod_r(1-e^{-\beta\varepsilon_r})^{-1}<\infty$, with $Z\geq1$. Hence $p_{\mathbf n}=Z^{-1}e^{-\beta E_{\mathbf n}}$ are nonnegative and sum to one. F6, applied to the enumerated product basis, supplies the density operator $\rho_B=\sum_{\mathbf n}p_{\mathbf n}P_{\mathbf n}$ in trace norm, where $P_{\mathbf n}x=x_{\mathbf n}e_{\mathbf n}$. The diagonal bounded operator denoted $e^{-\beta H_f}$ multiplies this basis by $e^{-\beta E_{\mathbf n}}$, so it equals $Z\rho_B$ and is trace class with trace $Z$. This proves the stated Gibbs formula without presupposing a trace identity for an infinite tensor product. The cited single-mode thermal convention is extended here to finitely many independent modes; no continuum limit is inferred. [F3, F4, F5, F6, A1, step 1.2, algebra]

3.1 Put $T=I\otimes H_f$ on $\mathbb C^d\otimes D(H_f)$. In the finite matter basis it is the direct sum of $d$ copies of $H_f$; its adjoint acts componentwise, so it is self-adjoint and nonnegative. For $x\in D(H_f)$, step 2.1 and $\varepsilon_rn_r\leq E_{\mathbf n}$ give $\|a_rx\|^2\leq\varepsilon_r^{-1}\langle H_fx,x\rangle$ and $\|a_r^\dagger x\|^2=\|a_rx\|^2+\|x\|^2$. The same estimates hold componentwise with $T$. Consequently, for a finite $C\geq0$, $\|V\Psi\|\leq C(\langle T\Psi,\Psi\rangle^{1/2}+\|\Psi\|)\leq C(\|T\Psi\|^{1/2}\|\Psi\|^{1/2}+\|\Psi\|)$. The scalar inequality $\sqrt{uv}\leq\delta u+(4\delta)^{-1}v$, $\delta>0$, shows that $V$ has $T$-bound zero. Mutual adjointness in step 2.1, conjugate coefficient pairs and Hermitian matrices make $V$ symmetric on this domain (verify on finite occupation sums, then pass in the $T$ graph norm using the estimate). The bounded Hermitian operator $H_a\otimes I$ also has $T$-bound zero. Apply F7 to $T$ and $H_a\otimes I+V$ to obtain the asserted self-adjoint, bounded-below finite-mode Hamiltonian on the specified domain. [F4, F7, A1, step 1.2, step 2.1, algebra]

3.2 Define the free dynamics by $U(t)e_{\mathbf n}=e^{-itE_{\mathbf n}/\hbar}e_{\mathbf n}$ and bounded extension. Modulus-one coefficients give unitarity and $U(s+t)=U(s)U(t)$. For a fixed vector the tail of its squared coefficients is arbitrarily small; the finitely many remaining phases are continuous, while $|e^{-itE/\hbar}-1|\leq2$ bounds the tail, proving strong continuity. On $D(H_f)$, the same finite-part and tail argument, now using $|(e^{-itE/\hbar}-1)/t|\leq E/\hbar$, gives the norm derivative at zero $-iH_f/\hbar$; conversely existence of that derivative forces square summability of $E_{\mathbf n}x_{\mathbf n}$ by its coordinates, hence this is exactly its generator domain. Thus $U(t)=e^{-itH_f/\hbar}$ is the free evolution for the stated Hamiltonian. Each $P_{\mathbf n}$ is fixed by conjugation with $U(t)$; the trace-norm series in step 2.2 has the same diagonal coefficients after conjugation, so $U(t)\rho_BU(t)^*=\rho_B$. Also $E_{\mathbf0}=0$ gives $U(t)e_{\mathbf0}=e_{\mathbf0}$, so the vacuum projector is stationary. For no modes the same conclusions hold on $\mathbb C$ with $Z=1$. These arguments concern free bath dynamics; stationary preparation, dipole interpretation and any weak-coupling approximation remain separate modeling choices. [F4, F5, F6, step 1.2, step 2.2, algebra]

4.1 For the continuum regulator, F1 identifies the unit vacuum as $\Omega=\iota_0(1)=(1,0,0,\ldots)$ in the Fock direct sum. Apply F8 with $\alpha=\hbar c>0$. Every component of $\Omega$ lies in its sector domain, and $\sum_n\|T_n\Omega_n\|^2=0$ because $T_0=0$ and all other components vanish. Thus $\Omega\in D(H_f)$ and $H_f\Omega=0$. For the adopted free bath evolution $U(t)=e^{-itH_f/\hbar}$, the zero-sector spectral representation in F8 gives $U(t)\Omega=e^{-it0/\hbar}\Omega=\Omega$. Write $P_\Omega x=\langle x,\Omega\rangle\Omega$, using the inner product linear in the first argument. Unitarity then gives $U(t)P_\Omega U(t)^*x=\langle U(t)^*x,\Omega\rangle U(t)\Omega=\langle x,U(t)\Omega\rangle\Omega=P_\Omega x$ for every $x$. This proves continuum vacuum stationarity under the chosen free bath dynamics; it asserts neither stationarity under the coupled Hamiltonian nor a continuum Gibbs density. [F1, F8, A1, algebra] ∎

## External input

The dipole approximation evaluates the field at the emitter and uses an interaction of the form $-\mathbf d\cdot\mathbf E$; the cutoff form factors and finite-dimensional truncation above are additional model choices. The cited thermal convention is the positive-frequency single-mode Gibbs state, used here in the finite-mode construction.
