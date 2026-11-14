---
id: pthm-qec-distinguishability-thermal-time-correlator
kind: physics-theorem
domain: physics
title: Isotropic thermal bath time correlator
status: draft
origin: session
deps:
  - pthm-qec-distinguishability-thermal-normal-moments
  - pthm-qec-distinguishability-thermal-antinormal-moments
  - pthm-qec-distinguishability-thermal-correlator-expansion
  - post-qec-prereq-regularized-photon-dipole-model
  - def-qec-distinguishability-bath-correlator
  - def-qec-prereq-stationary-spectrum-kernel-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - lem-author-ef1b96c593db-correlation-scalar-normalization
  - lem-author-ef1b96c593db-thermal-integrable-envelope
  - lem-author-ef1b96c593db-shell-cell-quadrature
  - lem-author-ef1b96c593db-radial-transverse-integral
  - lem-author-ef1b96c593db-thermal-cutoff-removal
  - lem-qec-prereq-bosonic-thermal-moment-contract
  - math:thm-trace-class-is-a-two-sided-banach-operator-ideal
  - math:thm-trace-is-absolutely-convergent-and-basis-independent
dependency_roles:
  pthm-qec-distinguishability-thermal-normal-moments: physical-result
  pthm-qec-distinguishability-thermal-antinormal-moments: physical-result
  pthm-qec-distinguishability-thermal-correlator-expansion: physical-result
  post-qec-prereq-regularized-photon-dipole-model: physical-assumption
  def-qec-distinguishability-bath-correlator: formulation-prerequisite
  def-qec-prereq-stationary-spectrum-kernel-contract: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  lem-author-ef1b96c593db-correlation-scalar-normalization: mathematical-premise
  lem-author-ef1b96c593db-thermal-integrable-envelope: mathematical-premise
  lem-author-ef1b96c593db-shell-cell-quadrature: mathematical-premise
  lem-author-ef1b96c593db-radial-transverse-integral: mathematical-premise
  lem-author-ef1b96c593db-thermal-cutoff-removal: mathematical-premise
  lem-qec-prereq-bosonic-thermal-moment-contract: mathematical-premise
  math:thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  math:thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
physical_scope: Conditional two-point calculation for the explicitly normalized
  finite-mode regulators and their convergent continuum limit; no continuum
  Gibbs density, uncut point field, ULE accuracy or laboratory observation is
  asserted.
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 12, Eq. (S3.13)
      statement: The diagonal bath correlation is $\mathcal
        J_{\alpha\alpha}(t)=\frac{8\pi}{3c^3}\int_0^\infty
        d\omega\,|\kappa(\omega)|^2\omega^2[(e^{\beta\omega}-1)^{-1}e^{i\omega
        t}+(1+(e^{\beta\omega}-1)^{-1})e^{-i\omega t}]$. This uses isotropic
        angular integration and $\omega=c|\mathbf k|$.
      hypotheses: As stated in the extracted formulation.
      reading_limits: For this repair, read the frozen extraction at the normalization
        definitions on PDF pages 9–11 and the thermal calculation and
        density-of-states discussion on pages 12–13, and inspected the supplied
        full image of PDF page 12. This reference supplies original-article
        attribution only. The finite regulator and continuum argument use the
        named independent mathematical suppliers and adopted regulator model,
        not the article claim as its own proof. No original author-defect
        verdict or continuum Gibbs trace is asserted.
dependency_level: 10
formulation_deps:
  - pthm-qec-distinguishability-thermal-normal-moments
  - pthm-qec-distinguishability-thermal-antinormal-moments
  - pthm-qec-distinguishability-thermal-correlator-expansion
  - post-qec-prereq-regularized-photon-dipole-model
  - def-qec-distinguishability-bath-correlator
  - def-qec-prereq-stationary-spectrum-kernel-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - lem-author-ef1b96c593db-correlation-scalar-normalization
  - lem-author-ef1b96c593db-thermal-integrable-envelope
  - lem-author-ef1b96c593db-shell-cell-quadrature
  - lem-author-ef1b96c593db-radial-transverse-integral
  - lem-author-ef1b96c593db-thermal-cutoff-removal
  - lem-qec-prereq-bosonic-thermal-moment-contract
argument_deps:
  - pthm-qec-distinguishability-thermal-normal-moments
  - pthm-qec-distinguishability-thermal-antinormal-moments
  - pthm-qec-distinguishability-thermal-correlator-expansion
  - post-qec-prereq-regularized-photon-dipole-model
  - def-qec-distinguishability-bath-correlator
  - def-qec-prereq-stationary-spectrum-kernel-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - lem-author-ef1b96c593db-correlation-scalar-normalization
  - lem-author-ef1b96c593db-thermal-integrable-envelope
  - lem-author-ef1b96c593db-shell-cell-quadrature
  - lem-author-ef1b96c593db-radial-transverse-integral
  - lem-author-ef1b96c593db-thermal-cutoff-removal
  - lem-qec-prereq-bosonic-thermal-moment-contract
  - math:thm-trace-class-is-a-two-sided-banach-operator-ideal
  - math:thm-trace-is-absolutely-convergent-and-basis-independent
---

## Statement

Assume the choice hypotheses of the named suppliers. Work in units $\hbar=1$, with $c,\beta,\gamma>0$, and retain the article's definitions $\kappa=d_0\mathcal E$ and $B_\alpha=-d_0E_\alpha/\sqrt\gamma$. In continuum notation $|\kappa(\omega)|^2d^3k$ denotes the squared field-coupling measure after the chosen mode-density normalization; it contains no newly inserted $1/\gamma$. Require $\kappa$ to be Borel and $M=\int_0^\infty|\kappa(\omega)|^2\omega^2[2(e^{\beta\omega}-1)^{-1}+1]\,d\omega<\infty$.

Define the continuum thermal two-point function by this explicit regulator limit. First fix $0<a<b<\infty$ and the shell $A_{a,b}=\{k\in\mathbb R^3:a\leq c|k|\leq b\}$. For each refinement $n$, partition it up to a Lebesgue null set into finitely many positive-volume Borel cells $C$ of diameter at most $\delta_n\to0$, with tags $k_C\in C$, as in the finite-cell lemma. At every tag choose $\varepsilon_{C1},\varepsilon_{C2}$ to be a real orthonormal basis of $k_C^\perp$. Put $\omega_C=c|k_C|>0$ and choose finite field coefficients $\kappa_C=d_0\mathcal E_C$ with $|\kappa_C|^2=w_C=\int_C|\kappa(c|k|)|^2d^3k$, shared by the two polarization modes of that cell. Coefficients are indexed by cells; equal frequencies in different cells need not have equal coefficients.

Use the independent oscillator regulator with modes $r=(C,\lambda)$, $\lambda\in\{1,2\}$, in the finite-mode symmetric Fock realization of the bosonic moment contract. Its occupation basis is $|\mathbf n\rangle$, its mode operators are $a_r,a_r^\dagger$, and its Hamiltonian is the self-adjoint closure of $H_B=\sum_r\omega_C a_r^\dagger a_r$ on the finite occupation span. Adopt its Gibbs preparation $\rho_B=Z^{-1}e^{-\beta H_B}$, where $Z=\prod_{C,\lambda}(1-e^{-\beta\omega_C})^{-1}$. Specify the coupling-weighted component field $F_i=d_0E_i$, $i\in\{1,2,3\}$, as the following particular Hermitian linear coupling permitted by the regularized photon-dipole model:

$$F_i=\sum_{C,\lambda}\varepsilon_{C\lambda,i}(\kappa_C a_{C\lambda}+\overline{\kappa_C}a_{C\lambda}^\dagger),\qquad B_i=-F_i/\sqrt\gamma.$$

The fields act on the common mode domain $\mathcal D=\bigcap_r(D(a_r)\cap D(a_r^\dagger))$. The free dynamics is $U(t)|\mathbf n\rangle=e^{-itE_{\mathbf n}}|\mathbf n\rangle$, where $E_{\mathbf n}=\sum_{C,\lambda}\omega_C n_{C\lambda}$; put $\widetilde B_i(t)=U(t)^*B_iU(t)$ on its conjugated domain and $\mathcal J_{ij}^{(n;a,b)}(t)=\operatorname{Tr}[\widetilde B_i(t)B_j\rho_B]$. These products are well defined and trace class, as established below. Refine the cells first, then exhaust $(0,\infty)$ by shells $[1/m,m]$, $m\geq2$. This sequential limit exists for every real $t$ and is

$$\mathcal J_{\alpha\beta}(t)=\frac{8\pi}{3\gamma c^3}\delta_{\alpha\beta}\int_0^\infty d\omega\,|\kappa(\omega)|^2\omega^2[(e^{\beta\omega}-1)^{-1}e^{i\omega t}+(1+(e^{\beta\omega}-1)^{-1})e^{-i\omega t}].$$

This is the explicitly normalized, convergent version of the original diagonal expression (S3.13). The original prefactor $8\pi/(3c^3)$ is retained as attribution in Source notes. It coincides with this formula at numerical $\gamma=1$; for general $\gamma$ and the fixed definitions it is the expression for $\gamma\mathcal J$, not for $\mathcal J$. No redefinition of $\kappa$, continuum trace-class Gibbs state, ordinary time Fourier integrability, or removal of a nonintegrable ultraviolet cutoff is asserted. A physically fixed ultraviolet form factor can satisfy $M<\infty$; a bare cubic vacuum spectral weight is outside this absolute-integral statement.

## Facts & Assumptions

**Given:** The finite objects, measure conventions and explicit hypotheses in the Statement.

[F1] For the frequency-dependent coefficients and dipole-coupling hypotheses of its supplier, the normalized finite-mode normal contribution is gamma inverse times the weighted Bose occupation sum. [[pthm-qec-distinguishability-thermal-normal-moments]]

[F2] For the frequency-dependent coefficients and dipole-coupling hypotheses of its supplier, the normalized finite-mode antinormal contribution is gamma inverse times the weighted Bose occupation plus one sum. [[pthm-qec-distinguishability-thermal-antinormal-moments]]

[F3] Under its stated finite-mode thermal and dipole-coupling hypotheses, the Gibbs occupation expansion is absolutely convergent and its sum is the trace-defined bath correlator. [[pthm-qec-distinguishability-thermal-correlator-expansion]]

[F4] The finite photon regulator permits independent positive-frequency oscillator modes, specified conjugate-paired linear field coefficients and a stationary finite-mode Gibbs preparation. Its free dynamics multiplies each occupation vector by its energy phase; continuum states and limits are additional data. [[post-qec-prereq-regularized-photon-dipole-model]]

[F5] The bath correlation is the two-point trace of B operators where defined; it is not gamma times that trace. [[def-qec-distinguishability-bath-correlator]]

[F6] An ordinary Fourier transform and ULE kernel need separate time integrability and kernel hypotheses. [[def-qec-prereq-stationary-spectrum-kernel-contract]]

[F7] Assume the Axiom of Choice for the inherited finite-mode supplier constructions. [[math:def-axiom-of-choice]]

[F8] Assume Countable Choice for the measure and inherited suppliers. [[math:def-countable-choice]]

[F9] Assume Dependent Choice where inherited by the completed finite-mode suppliers. [[math:def-dependent-choice]]

[F10] Scalar normalization of both coupling operators contributes gamma inverse to their correlation. [[lem-author-ef1b96c593db-correlation-scalar-normalization]]

[F11] The radial thermal envelope supplies absolute integrability, bounds and continuity. [[lem-author-ef1b96c593db-thermal-integrable-envelope]]

[F12] Finite-cell quadrature converges for every fixed time on each compact positive-frequency shell with the stated Borel cells, tags and integrable weight. At each tag, two real orthonormal transverse polarizations satisfy $\sum_\lambda\varepsilon_{C\lambda,i}\varepsilon_{C\lambda,j}=Q_{ij}(k_C)$, where $Q_{ij}(k)=\delta_{ij}-k_i k_j/|k|^2$. [[lem-author-ef1b96c593db-shell-cell-quadrature]]

[F13] The full transverse angular contraction and radial frequency substitution supply eight pi over three c cubed. [[lem-author-ef1b96c593db-radial-transverse-integral]]

[F14] Frequency cutoffs can be removed uniformly in time under the integrable envelope. [[lem-author-ef1b96c593db-thermal-cutoff-removal]]

[F15] For the finite-mode symmetric Fock realization with positive frequencies and inverse temperature, the Gibbs density has the stated product partition function. Every product of two mode creation or annihilation operators composed with that density is defined on the entire bath space and trace class. The normal and antinormal contractions are respectively $\delta_{rs}N_\beta(\omega_s)$ and $\delta_{rs}[N_\beta(\omega_s)+1]$, with equal-kind contractions zero, where $N_\beta(\omega)=(e^{\beta\omega}-1)^{-1}$. [[lem-qec-prereq-bosonic-thermal-moment-contract]]

[F16] Under Countable Choice, trace-class operators on a complex Hilbert space form a linear subspace; in particular every finite linear combination of trace-class operators is trace class. [[math:thm-trace-class-is-a-two-sided-banach-operator-ideal]]

[F17] Under Countable Choice, the trace is linear on trace-class operators and equals the absolutely convergent diagonal sum in every supplied complete orthonormal basis. To match its first-variable-linear pairing with the Fock convention use $(u,v)_1=\langle v,u\rangle_2$; then $(Tu,u)_1=\langle u,Tu\rangle_2$. [[math:thm-trace-is-absolutely-convergent-and-basis-independent]]

## Proof

**Goal:** Establish the stated formula, convergence and qualifications.

1.1 On a compact shell, [F4] permits the specific conjugate-paired coefficients in the Statement, and [F15] applies with one independent mode for every pair $r=(C,\lambda)$. The symmetric Fock occupation realization and the tensor occupation realization of [F4] are identified by sending their complete occupation bases to each other: this extends isometrically to a unitary and intertwines their raising, lowering and diagonal energy actions. On the occupation basis, $U(t)^*a_rU(t)=e^{-i\omega_Ct}a_r$ and $U(t)^*a_r^\dagger U(t)=e^{i\omega_Ct}a_r^\dagger$. The occupation-weight domain conditions are unchanged by modulus-one phases, so these identities hold on their maximal mode domains, and $\mathcal D$ is invariant under $U(t)$. Consequently $\widetilde F_i(t)=\sum_{C,\lambda}\varepsilon_{C\lambda,i}(\kappa_C e^{-i\omega_Ct}a_{C\lambda}+\overline{\kappa_C}e^{i\omega_Ct}a_{C\lambda}^\dagger)$. [given, F4, F7, F8, F9, F15, algebra]

2.1 By [F15], every pair product in the finite expansion of $\widetilde F_i(t)F_j\rho_B$ is defined on the whole bath space and trace class. In particular $\rho_B\psi$ belongs to each mode domain, and applying any single mode operator to it leaves a vector in every mode domain: these are precisely the domain assertions in the pair products. Since operator domains are linear and the sums are finite, $F_j\rho_B\psi\in\mathcal D$ for every $\psi$, so this is the actual operator product with the fields defined in the Statement. By [F16] its finite expansion is trace class. Its trace can be evaluated by summing the finitely many absolutely convergent occupation diagonal series, using trace linearity and the diagonal-trace theorem in [F17], the supplied occupation basis, and the moments in [F15]. With $r=(C,\lambda)$ and $s=(D,\mu)$, the normal contraction is $\delta_{CD}\delta_{\lambda\mu}N_\beta(\omega_C)$, the antinormal one is $\delta_{CD}\delta_{\lambda\mu}[N_\beta(\omega_C)+1]$, and the two equal-kind terms vanish. Thus $\overline{\kappa_C}\kappa_D$ or $\kappa_C\overline{\kappa_D}$ reduces to $w_C$ in every surviving term, giving $\mathcal J_{ij}^{(n;a,b)}(t)=\gamma^{-1}\sum_Cw_C\sum_{\lambda=1}^2\varepsilon_{C\lambda,i}\varepsilon_{C\lambda,j}[N_\beta(\omega_C)e^{i\omega_Ct}+(N_\beta(\omega_C)+1)e^{-i\omega_Ct}]$. The two scalar factors in $B_i=-F_i/\sqrt\gamma$ force $\gamma^{-1}$, as in [F10]. No equality of coefficients at distinct modes with equal frequencies is used. [F5, F10, F15, F16, F17, step 1.1, algebra]

3.1 The same finite contraction with fields at times $t$ and $s$ has phases $e^{\pm i\omega_C(t-s)}$; hence it depends only on $t-s$, meeting the stationarity requirement of [F5]. By [F17], the trace-class expansion in step 2.1 has an absolutely convergent occupation diagonal sum. In the special case in which the mode coefficients are a single function of frequency and satisfy the cited dipole-coupling contract, its diagonal normal piece, antinormal piece and occupation expansion agree with [F1], [F2] and [F3], respectively. The derivation in step 2.1 establishes the full component formula for the more general cell-indexed coefficients directly from [F15]. [F1, F2, F3, F5, F15, F17, step 1.1, step 2.1, algebra]

3.2 The envelope [F11] is finite by assumption. For a compact shell the function $|\kappa(\omega)|^2\omega^2$ is bounded above in integral by that envelope, since $2N_\beta+1\geq1$. Applying the nonnegative polar computation in [F13] therefore makes $|\kappa(c|k|)|^2$ integrable on the shell. The polarization projector identity and cell convergence in [F12] apply to step 2.1 and give the shell integral $\gamma^{-1}\int_{A_{a,b}}d^3k\,|\kappa(c|k|)|^2Q_{ij}(k)[N_\beta(c|k|)e^{ic|k|t}+(N_\beta(c|k|)+1)e^{-ic|k|t}]$ for each fixed $t$. [F11, F12, F13, step 2.1, algebra]

4.1 Use [F13] with $u(\omega)=1_{[a,b]}|\kappa(\omega)|^2[N_\beta(\omega)e^{i\omega t}+(N_\beta(\omega)+1)e^{-i\omega t}]$. Its weighted absolute integral is at most $M$ by [F11], so all radial/angular integrations are legitimate. The shell expression becomes $8\pi\delta_{ij}/(3\gamma c^3)$ times the frequency integral over $[a,b]$. Facts [F11] and [F14] then let the shells $[1/m,m]$ exhaust positive frequency, with a bound on the frequency cutoff error independent of $t$. This proves the stated sequential continuum limit and formula. [F11, F13, F14, step 3.2, algebra]

5.1 The original coefficient meaning remains fixed throughout. By [F10] its diagonal unnormalized integral is $\gamma\mathcal J_{\alpha\alpha}$; it equals $\mathcal J_{\alpha\alpha}$ without that factor only at $\gamma=1$ or a vanishing correlation. The limit just proved supplies two-point functions and does not construct an infinite-volume trace-class density. Facts [F5] and [F6] distinguish those assertions and the separate conditions for time Fourier and ULE kernels. The explicit envelope condition, not stationarity alone, justifies regulator removal here. These are the stated conclusion and limits, while the original equation remains preserved in source attribution. [F5, F6, F10, F11, F14, step 4.1, algebra] ∎

## Source notes

Original article attribution, not an independent proof: PDF p. 12, Eq. (S3.13), states $\mathcal J_{\alpha\alpha}(t)=\frac{8\pi}{3c^3}\int_0^\infty d\omega\,|\kappa(\omega)|^2\omega^2[(e^{\beta\omega}-1)^{-1}e^{i\omega t}+(1+(e^{\beta\omega}-1)^{-1})e^{-i\omega t}]$. The original item claim is preserved here in full as attribution; the theorem states the explicit $B$-normalized consequence under the stated convergent regulator contract.

The original source defines $H_{\rm int}=\sqrt\gamma\sum X_\alpha B_\alpha$ on PDF p. 9, Eq. (S2.2); defines the $B$-operator correlation on p. 10, Eq. (S2.5); and gives both $\kappa=d_0\mathcal E$ and $B_\alpha=-d_0E_\alpha/\sqrt\gamma$ on p. 11 around Eq. (S3.3). PDF p. 13 after (S3.18) discusses absorbing density of states into the coupling and later absorbing constants into effective $\gamma,f(J)$. Those passages motivate checking a normalization convention; they do not supply an explicit $\kappa\mapsto\kappa/\sqrt\gamma$ between the fixed definitions and (S3.13). Here the factor follows directly from the fixed definitions. The source-anchored uncertainty, exact finite diagnostic and complete page-image reading record are retained internally in escalation-support/thermal-correlator/hold-evidence.json as an assessment lead, not an article-defect verdict. Step 8 owns original-article assessment.

The cell construction supplies one specified convergent approximation. It does not prove that every box discretization or every physical bath preparation converges to it. For box coefficients, any identification with this continuum notation must separately match the squared coupling times its mode density, including any $(2\pi)^{-3}$ convention. The finite mode field coefficients are $\sqrt{w_C}$ up to phase, and the corresponding $B$ coefficients are $\sqrt{w_C/\gamma}$. Neither mode density nor a change of the time argument cancels the latter scalar factor. An uncut point-field vacuum weight proportional to $\omega^3$ has divergent nonnegative equal-time integral; no oscillatory prescription is invented here.
