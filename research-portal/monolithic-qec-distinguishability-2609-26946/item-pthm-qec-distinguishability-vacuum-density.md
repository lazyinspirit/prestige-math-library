---
title: Vacuum limit and cubic free-space spectral density
status: published
research_item: pthm-qec-distinguishability-vacuum-density
dependency_level: 12
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 13, Eq. (S3.18) and surrounding paragraphs
      statement: The article gives a positive-frequency vacuum spectrum proportional
        to omega squared times the squared coupling, identifies the cubic
        free-space law, and absorbs the box mode-density factor into the
        coupling convention.
      hypotheses: The photon-bath model and normalization conventions of the article's
        section S3.
      reading_limits: Attribution of the original article formulation. The frozen
        article extraction and the completed supplier statements were consulted;
        this reference is not used as a proof of the result.
---

PDF p. 13: ` Eq. (S3.18) and surrounding paragraphs `

## Prerequisites

- [pthm-qec-distinguishability-thermal-spectral-density](item-pthm-qec-distinguishability-thermal-spectral-density)
- [pthm-qec-distinguishability-thermal-time-correlator](item-pthm-qec-distinguishability-thermal-time-correlator)
- [post-qec-distinguishability-photon-field](item-post-qec-distinguishability-photon-field)
- [post-qec-prereq-regularized-photon-dipole-model](item-post-qec-prereq-regularized-photon-dipole-model)
- [lem-qec-prereq-bosonic-thermal-moment-contract](item-lem-qec-prereq-bosonic-thermal-moment-contract)
- [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)
- [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [physics:def-trace-class-operator](https://alphabetamath.cc/physics/item/def-trace-class-operator)
- [physics:lem-diagonal-trace-class-operator-on-ell-two](https://alphabetamath.cc/physics/item/lem-diagonal-trace-class-operator-on-ell-two)
- [physics:def-absolute-value-and-singular-values-of-a-compact-operator](https://alphabetamath.cc/physics/item/def-absolute-value-and-singular-values-of-a-compact-operator)
- [math:def-total-variation-of-a-signed-or-complex-measure](https://alphabetamath.cc/item/def-total-variation-of-a-signed-or-complex-measure)
- [physics:lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums](https://alphabetamath.cc/physics/item/lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums)
- [math:thm-indefinite-integral-of-a-nonnegative-function-is-a-measure](https://alphabetamath.cc/item/thm-indefinite-integral-of-a-nonnegative-function-is-a-measure)


## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice and the hypotheses and conventions of the isotropic thermal time-correlator result, with a fixed Borel coupling $\kappa$, $c,\gamma>0$, and an inverse temperature $\beta_0>0$ for which $\int_0^\infty |\kappa(\omega)|^2\omega^2[2(e^{\beta_0\omega}-1)^{-1}+1]d\omega<\infty$. In that supplier $\kappa=d_0\mathcal E$, $B_\alpha=-d_0E_\alpha/\sqrt\gamma$, and the continuum coupling measure includes the chosen mode-density normalization.

For each finite positive-frequency mode regulator, its normalized Gibbs density tends in trace norm to the vacuum projector as $\beta\to\infty$; the normal moment $\langle a_i^\dagger a_j\rangle_\beta$ tends to zero. For the continuum spectral measures of the thermal spectral-density result, the same limit exists in total variation and has Lebesgue density, almost everywhere,

$$J_0(x)=\frac{8\pi}{3\gamma c^3}x^2|\kappa(x)|^2\Theta(x).$$

Here $\Theta(x)=1$ for $x>0$ and $\Theta(x)=0$ for $x<0$; its value at zero is immaterial. Thus the limiting measure is supported on nonnegative frequencies and has no atom at zero. For the article's normalization $\gamma J_0$, or numerically $\gamma=1$, the prefactor is $8\pi/(3c^3)$. If $d_0$ is frequency independent and the box field normalization $|\mathcal E_\omega|^2=\omega/(2\varepsilon_0V)$ applies, then $|\kappa(\omega)|^2$ is proportional to $\omega$ and the unmodified positive-frequency law is proportional to $\omega^3$ on the range where that coupling applies. A fixed ultraviolet form factor may alter this law outside that range.

Here trace norm means $\|T\|_1=\sum_{n\geq1}s_n(T)$ for a compact operator with summable singular values, on the full oscillator Fock space. For finite Borel measures $\mu,\nu$ on $\mathbb R$, total-variation convergence means $|\mu-\nu|(\mathbb R)\to0$, where $|\sigma|(E)$ is the supremum of $\sum_{n\geq0}|\sigma(E_n)|$ over countable measurable partitions of $E$.

## Statement references

[pthm-qec-distinguishability-thermal-time-correlator](item-pthm-qec-distinguishability-thermal-time-correlator)

[pthm-qec-distinguishability-thermal-spectral-density](item-pthm-qec-distinguishability-thermal-spectral-density)

[physics:def-trace-class-operator](https://alphabetamath.cc/physics/item/def-trace-class-operator)

[math:def-total-variation-of-a-signed-or-complex-measure](https://alphabetamath.cc/item/def-total-variation-of-a-signed-or-complex-measure)

## Facts & Assumptions

**Given:** The model, normalization, choice assumptions and integrable envelope in the Statement.

[F1] For the finite-mode symmetric Fock realization, the bosonic moment contract supplies a complete occupation basis $|\mathbf n\rangle$, vacuum $|\mathbf0\rangle$, and diagonal Gibbs weights $p_{\mathbf n}=\prod_j(1-q_j)q_j^{n_j}$, $q_j=e^{-\beta\omega_j}$, with $\sum_{\mathbf n}p_{\mathbf n}=1$. It also supplies $\langle a_i^\dagger a_j\rangle_\beta=\delta_{ij}(e^{\beta\omega_j}-1)^{-1}$ and the other stated moments. [lem-qec-prereq-bosonic-thermal-moment-contract](item-lem-qec-prereq-bosonic-thermal-moment-contract)

[F2] The thermal continuum spectrum is the sum of masses at $-\omega$ and $+\omega$ weighted respectively by $N_\beta(\omega)$ and $N_\beta(\omega)+1$, with common radial factor $8\pi|\kappa(\omega)|^2\omega^2/(3\gamma c^3)$, where $N_\beta(\omega)=(e^{\beta\omega}-1)^{-1}$. The supplier specifies the positive-exponential Fourier convention and a distributional spectrum. [pthm-qec-distinguishability-thermal-spectral-density](item-pthm-qec-distinguishability-thermal-spectral-density) [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F3] The continuum construction and its normalization use $\kappa=d_0\mathcal E$ and include the mode-density convention in the coupling measure. [pthm-qec-distinguishability-thermal-time-correlator](item-pthm-qec-distinguishability-thermal-time-correlator)

[F4] The photon-field postulate gives $|\mathcal E_\omega|^2=\omega/(2\varepsilon_0V)$, while the regulated bath postulate distinguishes finite-mode preparations from a continuum state. [post-qec-distinguishability-photon-field](item-post-qec-distinguishability-photon-field) [post-qec-prereq-regularized-photon-dipole-model](item-post-qec-prereq-regularized-photon-dipole-model)

[F5] Dominated convergence applies to pointwise convergent measurable functions bounded by an integrable majorant. [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)

[F6] Trace norm is the sum of the zero-padded singular values of a compact operator. Singular values are the positive eigenvalues, with multiplicity, of its unique positive compact square root $|T|=(T^*T)^{1/2}$. For an absolutely summable complex sequence $d=(d_n)$ on $\ell^2(\mathbb N,\mathbb C)$, its diagonal operator $D_d$ is trace class and $\|D_d\|_1=\sum_n|d_n|$, under Choice. [physics:def-trace-class-operator](https://alphabetamath.cc/physics/item/def-trace-class-operator) [physics:def-absolute-value-and-singular-values-of-a-compact-operator](https://alphabetamath.cc/physics/item/def-absolute-value-and-singular-values-of-a-compact-operator) [physics:lem-diagonal-trace-class-operator-on-ell-two](https://alphabetamath.cc/physics/item/lem-diagonal-trace-class-operator-on-ell-two)

[F7] Total variation is the supremum of absolute masses summed over countable measurable partitions, for a signed or complex measure. [math:def-total-variation-of-a-signed-or-complex-measure](https://alphabetamath.cc/item/def-total-variation-of-a-signed-or-complex-measure)

[F8] Under Countable Choice, an orthonormal family and square-summable coefficients have a norm-convergent vector sum whose squared norm is the sum of the squared coefficient moduli. For the mathematical Hilbert-space suppliers use the first-variable-linear pairing $(u,v)_1=\langle v,u\rangle_2$ on Fock space; this preserves norms and adjoints. [physics:lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums](https://alphabetamath.cc/physics/item/lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums)

[F9] A nonnegative measurable density on a measure space defines a measure by integration over measurable sets. [math:thm-indefinite-integral-of-a-nonnegative-function-is-a-measure](https://alphabetamath.cc/item/thm-indefinite-integral-of-a-nonnegative-function-is-a-measure)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice as required by the named constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

## Proof

**Given:** The model, normalization, choice assumptions and integrable envelope in the Statement.

**Goal:** Establish the finite-mode vacuum limit, the continuum spectral limit, and the stated normalization and frequency dependence.

1.1 For a finite nonempty mode list, enumerate $\mathbb N^m$ by increasing total occupation and lexicographic order within each finite level, starting at $\mathbf0$. By [F1] the corresponding vectors $b_n$ form a complete orthonormal basis. By [F8], $U:\ell^2(\mathbb N,\mathbb C)\to\mathcal H_B$, $Uz=\sum_n z_nb_n$, is a linear isometry. Its range is closed because $\ell^2$ is complete by [F6], and contains the dense span of all $b_n$, so it is onto and $U^*=U^{-1}$. For $T=\rho_\beta-|\mathbf0\rangle\langle\mathbf0|$, the coordinate operator $U^*TU=D_d$ has entries $d_0=p_{\mathbf0}-1$ and $d_n=p_{\mathbf n(n)}$ at nonvacuum indices, where $\mathbf n(n)$ is the enumeration. Since the weights are nonnegative and sum to one, $\sum_n|d_n|=(1-p_{\mathbf0})+\sum_{\mathbf n\ne\mathbf0}p_{\mathbf n}=2(1-p_{\mathbf0})<\infty$. Hence [F6] gives $\|D_d\|_1=2(1-p_{\mathbf0})$. To transport this to Fock space, unitary conjugation preserves compactness because it maps the unit ball onto the unit ball and preserves convergent subsequences. Also $U|D_d|U^*$ is positive and compact with square $T^*T$, so uniqueness of the positive compact square root in [F6] gives $|T|=U|D_d|U^*$. The eigenspaces are carried bijectively by $U$, preserving their multiplicities; thus the singular-value lists and their sums agree, giving $\|T\|_1=2(1-p_{\mathbf0})$. Now $q_j=e^{-\beta\omega_j}\to0$ for every $j$, so $p_{\mathbf0}=\prod_j(1-q_j)\to1$. The normal moment in [F1] also tends to zero. For the empty mode list the bath is one-dimensional by [F4], its Gibbs state already equals the vacuum projector, and there are no normal moments to check. [F1, F4, F6, F8, A1, construct, algebra]

1.2 Put $A=8\pi/(3\gamma c^3)$ and $w(\omega)=|\kappa(\omega)|^2\omega^2$. For $\beta\geq\beta_0$, $0\leq N_\beta(\omega)\leq N_{\beta_0}(\omega)$ and $N_\beta(\omega)\to0$ for every $\omega>0$. The given envelope makes $wN_{\beta_0}$ integrable, and all these functions are Borel. Apply [F5] along $\beta_n=\beta_0+n$ to obtain $I_{\beta_n}=\int_0^\infty w(\omega)N_{\beta_n}(\omega)d\omega\to0$. Since $I_\beta$ decreases in $\beta$, this also proves $I_\beta\to0$ for the full real parameter. By [F9], define $\mu_0$ to be the positive-frequency measure with density $Aw(x)$ on $x>0$ and zero elsewhere; it is finite since $w$ is bounded in integral by the given envelope. The density formula in [F2] gives a finite positive difference $\nu_\beta=\mu_\beta-\mu_0$, with density $Aw(-x)N_\beta(-x)$ on $x<0$ and $Aw(x)N_\beta(x)$ on $x>0$, and total mass $2AI_\beta$ by the point-mass representation in [F2]. Its nonnegative Borel density also defines a measure by [F9]. For every countable Borel partition $(E_n)$ of $\mathbb R$, positivity and countable additivity give $\sum_n|\nu_\beta(E_n)|=\sum_n\nu_\beta(E_n)=\nu_\beta(\mathbb R)$. Taking the supremum in [F7] yields $|\mu_\beta-\mu_0|(\mathbb R)=2AI_\beta\to0$. The positive-frequency density from [F2] is exactly the displayed $J_0$ almost everywhere. Its extension by zero to the negative half-line and the Lebesgue-null singleton zero proves the stated support and absence of an atom at zero. [given, F2, F5, F7, F9, algebra]

2.1 By [F3], the factor $\gamma^{-1}$ comes from the stated bath-operator normalization; multiplication by $\gamma$, or setting $\gamma=1$, yields the article-prefactor convention. By [F4], frequency-independent $d_0$ gives $|\kappa(\omega)|^2=|d_0|^2\omega/(2\varepsilon_0V)$ before the selected mode-density normalization, so the product of $\omega^2$ and the squared coupling is cubic in frequency wherever that unmodified normalization applies. A frequency-dependent regulator changes this conclusion where it changes the coupling. [F3, F4, step 1.2, algebra] ∎

## Source notes

The article citation attributes Eq. (S3.18). Its box-to-continuum convention absorbs $V/(2\pi)^3$ into the coupling; the continuum supplier states the corresponding coupling-measure convention explicitly. The globally unmodified cubic weight does not satisfy the integrable envelope above, so this result does not assert removal of the ultraviolet regularization or the separate jump-kernel moment conditions.
