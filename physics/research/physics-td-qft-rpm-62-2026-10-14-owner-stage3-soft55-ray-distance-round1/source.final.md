---
id: pthm-qft-example-soft-coherent-counts
kind: physics-theorem
title: Regulated soft coherent photon-count prediction
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
dependency_level: 8
deps:
  - def-countable-choice
  - def-qft-example-data
  - def-qft-framework-units
  - def-qft-fock-and-test-spaces
  - def-qft-photon-transverse-space
  - def-qft-x03-photon-count-pvm
  - lem-qft-segal-weyl-domain
  - post-qft-constructed-model-and-measurement
  - post-qft-free-photon-model
  - thm-qft-example-soft-current-angular-coherent
  - thm-qft-x03-photon-count-pvm
  - thm-logarithm-derivative-and-integral
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  def-qft-framework-units: formulation-prerequisite
  def-qft-fock-and-test-spaces: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
  def-qft-x03-photon-count-pvm: mathematical-premise
  lem-qft-segal-weyl-domain: mathematical-premise
  post-qft-constructed-model-and-measurement: physical-assumption
  post-qft-free-photon-model: physical-assumption
  thm-qft-example-soft-current-angular-coherent: mathematical-premise
  thm-qft-x03-photon-count-pvm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Fixed finite massive prescribed charge-flow current, measurable transverse
  polarizations, and finite photon-energy cutoffs 0 < lambda < Lambda. The
  result is the exact count distribution and mean energy of the constructed
  normalized positive-free-photon coherent state under the adopted finite
  projective Born interpretation. For positive angular coefficient the
  zero-cutoff family has no Fock-vector or projective-ray limit despite
  bounded mean energy. No interacting-QED scattering event, detector response,
  or empirical observation is asserted.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, author-hosted complete lecture notes, Chapter 6, §§6.2.1–6.2.2
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 complete prepublication book draft, §§54–56
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
    - title: Roy J. Glauber, “Coherent and Incoherent States of the Radiation Field,” Physical Review 131 (1963), 2766–2788, §§II–III and IX
      url: https://www.ifi.unicamp.br/~cabrera/teaching/aula%2016%202011s1.pdf
---

## Statement

Assume $\mathrm{AC}_\omega$ [[def-countable-choice]]. Use the SI/natural
normalizations of [[def-qft-framework-units]] and
[[def-qft-example-data]], in particular the spacetime metric
$\eta=\operatorname{diag}(-1,1,1,1)$, the algebraic energy-momentum metric
$h=-\eta=\operatorname{diag}(1,-1,-1,-1)$, and the dimensionless coupling
$g_{\mathrm{em}}$ with $g_{\mathrm{em}}^2=4\pi\alpha$. For a finite nonempty
index set $i=1,\ldots,m$, take rest energies $M_i>0$ in joules and energy-momentum
vectors $p_i=(E_i,\mathbf p_i)\in\mathbb R^4$ with components in joules,
$E_i>0$, and $E_i^2-|\mathbf p_i|^2=M_i^2$. The sign $E_i>0$ selects the
future mass shell in the adopted $(-,+,+,+)$ spacetime convention. Put
$\mathbf v_i=\mathbf p_i/E_i$, so $|\mathbf v_i|<1$. Choose signs
$s_i\in\{-1,+1\}$ and real dimensionless charges
$Q_i$ satisfying $\sum_i s_iQ_i=0$. These are prescribed current data, not
dynamical charged-particle trajectories.

For $\mathbf n\in S^2$, let $q=(\omega,\omega\mathbf n)$ with photon energy
$\omega>0$ in joules and define
$$p_i\cdot q:=E_i\omega-\mathbf p_i\cdot(\omega\mathbf n),\qquad J^\mu(q):=\sum_{i=1}^m s_iQ_i\frac{p_i^\mu}{p_i\cdot q},\qquad K^\mu(\mathbf n):=\omega J^\mu(\omega,\omega\mathbf n).$$
The dot in this current formula is $h$-contraction; in particular
$p_i\cdot q=\omega E_i(1-\mathbf v_i\cdot\mathbf n)>0$. Choose measurable
real orthonormal spatial polarizations $\epsilon_1(\mathbf n),\epsilon_2(\mathbf n)$
with $\mathbf n\cdot\epsilon_r(\mathbf n)=0$ almost everywhere. Put
$\epsilon_r^\mu=(0,\epsilon_r)$ and
$K\cdot\epsilon_r:=-\mathbf K\cdot\epsilon_r$. Define the finite nonnegative
angular coefficient
$$C:=\frac{g_{\mathrm{em}}^2}{2(2\pi)^3} \int_{S^2}\sum_{r=1}^{2}|K(\mathbf n)\cdot\epsilon_r(\mathbf n)|^2\,d\Omega.$$

For fixed energy cutoffs $0<\lambda<\Lambda<\infty$ in joules, define
$\mathfrak h_E=L^2(\mathbb R^3,d^3\mathbf q/[(2\pi)^3 2\omega];\mathbb C^2)$,
where $\omega=|\mathbf q|$, and
$$h_{\lambda,\Lambda,r}(\mathbf q) =g_{\mathrm{em}}J(q)\cdot\epsilon_r(\mathbf q/|\mathbf q|) \,\mathbf1_{\{\lambda<|\mathbf q|<\Lambda\}}.$$
The current draft mathematical supplier
[[thm-qft-example-soft-current-angular-coherent]] supplies the $\mathbb C^3$
transverse energy-space norm and unitary conversion. The measurable
orthonormal polarization frame gives the pointwise unitary identification
$h\mapsto\sum_{r=1}^2h_r\epsilon_r$ proved in step 3.1; composing it with
that conversion identifies $\mathfrak h_E$ with the positive transverse
one-particle space $\mathfrak h_T$ of [[def-qft-photon-transverse-space]]
by the unitary map below, where for $\mathbf k\ne0$ the notation
$\epsilon_r(\mathbf k)$ denotes the homogeneous extension
$\epsilon_r(\mathbf k/|\mathbf k|)$ of the supplied sphere frame:
$$(U_Eh)(\mathbf k)= \sqrt{\frac{(\hbar c)^2}{(2\pi)^3\,2|\mathbf k|}} \sum_{r=1}^{2}h_r(\hbar c\,\mathbf k)\epsilon_r(\mathbf k), \qquad \mathbf k\in\mathbb R^3\setminus\{0\}.$$
Here $\mathbf k$ is a wave vector in $\mathrm m^{-1}$ and
$\hbar c\,\mathbf k$ is the corresponding energy-momentum vector in joules.
Set $N_\gamma:=C\log(\Lambda/\lambda)$ and prepare the normalized coherent
vector in the free photon Fock space
$$\Psi_{\lambda,\Lambda} =e^{-N_\gamma/2}\bigoplus_{n=0}^{\infty} \frac{(U_Eh_{\lambda,\Lambda})^{\otimes_s n}}{\sqrt{n!}} \in\mathcal F_s(\mathfrak h_T),$$
where the $n=0$ term is the vacuum sector. Let $P_n$ be the number-sector
projection from [[def-qft-x03-photon-count-pvm]] and define
$p_n$ as the model probability assigned to outcome $n$ by the finite
two-outcome projective partition $\{\{n\},\mathbb R\setminus\{n\}\}$.
Then
$$p_n=e^{-N_\gamma}\frac{N_\gamma^n}{n!},\qquad n\in\mathbb N_0,$$
with $0^0:=1$; these probabilities sum to one, the mean photon count is
$N_\gamma$, and the vacuum probability is $e^{-N_\gamma}$. The expected
photon energy is
$$\langle\Psi_{\lambda,\Lambda},H_\gamma\Psi_{\lambda,\Lambda}\rangle =C(\Lambda-\lambda)\ \mathrm J,$$
for $H_\gamma=\hbar c\,d\Gamma(|\mathbf k|)$ of
[[post-qft-free-photon-model]]. If $C>0$, the family has no Fock-norm or
projective-ray limit as $\lambda\downarrow0$ (projective-ray convergence means
norm convergence after allowing a unit-modulus phase for each cutoff), although
its mean energy tends to the finite value $C\Lambda$.

For the prescribed one-charge rest-to-velocity current with final velocity
$v\hat{\mathbf z}$, $0<v<1$, take
$s_{\rm in}=-1$, $Q_{\rm in}=1$, $p_{\rm in}=(M,\mathbf0)$ and
$s_{\rm out}=+1$, $Q_{\rm out}=1$,
$p_{\rm out}=(M\gamma_v,M\gamma_v v\hat{\mathbf z})$, where $M>0$ is the
rest energy and $\gamma_v=(1-v^2)^{-1/2}$. The same coefficient is
$$C(v)=\frac{\alpha}{\pi} \left(\frac1v\log\frac{1+v}{1-v}-2\right)>0.$$
If $C>0$, the cutoff family has no Fock-norm or projective-ray limit as
$\lambda\downarrow0$; the proof below derives this from adjacent-shell
overlaps and does not use the supplier's separate conditional infrared-limit
clause. Its required norm and coherent-state inputs remain conditional on
the inspected draft supplier until its upstream inputs are current. This
prediction concerns only the constructed positive free coherent state and
its count PVM under the adopted physical assumptions. It does not infer that
a full interacting-QED scattering event emits that state or that a detector
realizes this PVM.

## Facts & Assumptions

**Given:** The current and energy-coordinate conventions in the Statement, the adopted positive free photon model and finite Born interpretation, and the current QFT-MX03 draft at the exact inspected interface stated below.

[A1] Assume $\mathrm{AC}_\omega$ [[def-countable-choice]], the countable-choice strength used by the Fock and finite-instrument suppliers.

[A2] [[post-qft-free-photon-model]]: the current draft postulate adopts $\mathcal F_s(\mathfrak h_T)$ and $H_\gamma=\hbar c\,d\Gamma(|\mathbf k|)$ for the source-free positive transverse photon model. Its current item and qft-g01 page are present at dependency level $7$. Its current Step 1 record is escalated because its adopted local-observable dependency chain remains conditional. The adopted Hamiltonian interface matches this use, but the model remains conditional on that chain.

[A3] [[post-qft-constructed-model-and-measurement]]: the current draft Born postulate takes a density operator $\rho_t$ and a supplied normalized finite bounded Kraus instrument, and assigns $p_a(t)=\operatorname{tr}(\rho_tE_a)$. The mathematical normalization result declared among this postulate's prerequisites, `lem-qft-finite-instrument-normalization`, supplies the unit-vector case: for a unit vector $\psi$, the rank-one operator $T_{\psi,\psi}x:=\psi\langle\psi,x\rangle_2$ is a density operator under the second-variable-linear pairing, and the outcome probability is $\sum_r\|M_{a,r}\psi\|^2$. A spectral PVM may be used only after its declared finite Borel partition is constructed and verified as a finite projective instrument.

[F1] [[def-qft-framework-units]]: spacetime uses $\eta=(-,+,+,+)$, $x^0=ct$, $\mathbf k$ has unit $\mathrm m^{-1}$, and photon energy is $E_\gamma=\hbar c|\mathbf k|$ in joules.

[F2] [[def-qft-example-data]]: the energy-momentum contraction is $h=-\eta=(+---)$ and the positive dimensionless coupling is $g=\sqrt{4\pi\alpha}>0$; the local coupling satisfies $g_{\mathrm{em}}^2=g^2$.

[F3] [[def-qft-photon-transverse-space]]: the positive one-particle space is $\mathfrak h_T=\{u\in L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3): \mathbf k\cdot u(\mathbf k)=0\text{ a.e.}\}$; no global continuous polarization frame is chosen. Its current QFT-MG01 item carrier and ready Step 1 record were inspected.

[F4] [[def-qft-fock-and-test-spaces]]: bosonic Fock space is the square-summable direct sum of symmetric sectors, with vacuum sector $H_s^{(0)}=\mathbb C$ and the second-variable-linear pairing.

[F5] [[def-qft-x03-photon-count-pvm]]: $P_n=E_N(\{n\})$ is the projection onto the $n$th symmetric sector.

[F6] [[thm-qft-x03-photon-count-pvm]]: $N$ is self-adjoint and its sector projections form a strongly countably additive PVM; every finite Borel partition gives an orthogonal finite resolution of the identity.

[F7] [[lem-qft-segal-weyl-domain]]: for a separable complex Hilbert space $K$ with the second-variable-linear pairing, $W(h)$ are unitary Weyl operators satisfying $W(h)W(k)=e^{-i\operatorname{Im}\langle h,k\rangle_2/2}W(h+k)$ and $\langle\Omega,W(h)\Omega\rangle_2=e^{-\|h\|^2/4}$. It also gives $W(-i\sqrt2u)\Omega=e^{-\|u\|^2/2}\bigoplus_{n\ge0}u^{\otimes_s n}/\sqrt{n!}$ for every $u\in K$. Separability of $K$ is an explicit hypothesis of this supplier.

[L1] [[thm-qft-example-soft-current-angular-coherent]]: the draft mathematical Statement supplies the energy-coordinate cutoff norm, transverse unitary conversion, normalized coherent-sector weights and free-energy expectation for the prescribed balanced massive current. The norm, map, weights and energy arguments are its proof steps 2.1, 3.1, 4.1 and 5.1; step 7.1 proves projective-ray nonconvergence from coherent overlaps. This proof uses the first four interfaces and proves the projective-ray claim independently below. The completed QFT-MX03 A/B carriers are in the mathematics library; the earlier native report of an absent physical page path, an unregistered QFT-MF01 page edge and Q8 polar-input obligations is retained as historical owner evidence. The local supplier repairs do not confer independent acceptance or replace current native readiness reconciliation.

[F8] The application of [F7] below is on $K=\mathfrak h_T$. The rational-box density and bounded transverse projection argument in [L1]'s step 1.2 proves that $\mathfrak h_T$ is separable: it constructs a countable dense set in the ambient complex $L^2(\mathbb R^3;\mathbb C^3)$ and maps it by the bounded projection $M_{P_T}$ onto a countable dense subset of its range. This is the current draft supplier's explicit separability argument, under the countable choice and transverse-space hypotheses already recorded above.

[F9] For $x>0$, $\log x=\int_1^xdu/u$ and $\log'(x)=1/x$. [[thm-logarithm-derivative-and-integral]]

## Proof

**Given:** [A1]–[A3], [F1]–[F9], and the exact current and cutoff data in the Statement.

1.1 For each $i$ and $\mathbf n\in S^2$, $p_i\cdot q=\omega E_i(1-\mathbf v_i\cdot\mathbf n) \ge\omega E_i(1-|\mathbf v_i|)>0$. Since there are finitely many massive terms, $K^\mu(\mathbf n)=\sum_i s_iQ_i(1,\mathbf v_i)/(1-\mathbf v_i\cdot\mathbf n)$; each denominator is bounded below by $1-|\mathbf v_i|>0$, so $K$ and its transverse components are bounded. For the measurable orthonormal frame $(\epsilon_1,\epsilon_2,\mathbf n)$, $\sum_r|\mathbf K\cdot\epsilon_r|^2 =|\mathbf K-(\mathbf K\cdot\mathbf n)\mathbf n|^2=|K_\perp|^2$. Thus the integrand is nonnegative and measurable, and compactness of $S^2$ gives $0\le C<\infty$. [F2, given, algebra]

2.1 For the one-charge rest-to-velocity current, put $\mu=\mathbf n\cdot\hat{\mathbf z}$. Its spatial current is $\mathbf K=v\hat{\mathbf z}/(1-v\mu)$, hence $|K_\perp|^2=v^2(1-\mu^2)/(1-v\mu)^2$. Integrating over azimuth and then setting $x=1-v\mu$ gives $$I(v):=\int_{-1}^{1}\frac{v^2(1-\mu^2)}{(1-v\mu)^2}\,d\mu =\frac1v\int_{1-v}^{1+v} \left(\frac{v^2-1}{x^2}+\frac2x-1\right)dx =\frac1v\left[\frac{1-v^2}{x}+2\log x-x\right]_{1-v}^{1+v} =\frac2v\log\frac{1+v}{1-v}-4.$$ Therefore $$C(v)=\frac{g_{\mathrm{em}}^2}{2(2\pi)^3}(2\pi I(v)) =\frac{\alpha}{\pi} \left(\frac1v\log\frac{1+v}{1-v}-2\right).$$ For $f(v)=\log((1+v)/(1-v))-2v$, $f(0)=0$ and $f'(v)=2v^2/(1-v^2)>0$ on $(0,1)$, so $C(v)>0$. [F2, F9, step 1.1, algebra]

2.2 The fixed-current, charge-balance, transverse-polarization, and cutoff hypotheses match [L1]. The current formula simplifies to $J(q)=K(\mathbf n)/\omega$, and step 1.1 identifies the polarization sum with $|K_\perp|^2$, exactly the angular convention of [L1]. This is a conditional use of the inspected draft carrier at its actual interface. [F2, L1, step 1.1, algebra]

3.1 For each spatial direction $n$ where the prescribed real polarization frame is orthonormal, define $R_n:\mathbb C^2\to n^\perp\subset\mathbb C^3$ by $R_na=\sum_ra_r\epsilon_r(n)$. Direct expansion gives $\overline{R_na}\cdot R_nb=\sum_r\overline a_rb_r$. For every complex transverse vector $v$, its real and imaginary parts are in the real plane spanned by the two frame vectors, so $v=\sum_r(\epsilon_r\cdot v)\epsilon_r$; these coefficients give the inverse. The frame is measurable, hence $Rh(\mathbf q)=R_{\mathbf q/|\mathbf q|}h(\mathbf q)$ is a measurable unitary from $\mathfrak h_E$ onto [L1]'s $\mathbb C^3$ transverse energy space, preserving the weighted integral pairing; its inverse has components $\epsilon_r\cdot v$ and is also measurable. Composing $R$ with the unitary $U$ of [L1] gives precisely the displayed $U_E$ with its unchanged factor $\hbar c/\sqrt{(2\pi)^3 2|\mathbf k|}$. Because $J\cdot\epsilon_r=-\mathbf K\cdot\epsilon_r/\omega$, the prescribed amplitude satisfies $Rh_{\lambda,\Lambda}=-g_{\mathrm{em}}K_\perp/\omega$ on the cutoff shell. With $g>0$ from [F2], put $\sigma=-g_{\mathrm{em}}/g\in\{-1,+1\}$. Thus $U_Eh_{\lambda,\Lambda}=\sigma f_\lambda$ in [L1]'s notation, and its exact squared norm is $N_\gamma$. This sign does not change any sector norm or energy: on sector $n$ it multiplies the coherent tensor by $\sigma^n$, and this direct-sum unitary preserves the energy domain and commutes with the sector energy multipliers. Consequently [L1]'s coherent-sector and energy formulas apply to the normalized vector in this Statement. These uses require only its displayed mathematical interfaces, not its separate infrared clause. [A1, F1, F3, F4, L1, step 2.2, given, algebra]

4.1 By [F5]–[F6], $P_n$ is an orthogonal projection and $I-P_n$ is its orthogonal complement. The two Kraus operators $P_n$ and $I-P_n$ are bounded and satisfy $P_n^*P_n+(I-P_n)^*(I-P_n)=P_n+(I-P_n)=I$, so they form a normalized finite projective instrument. The state from step 3.1 is a unit vector. Put $\rho_{\lambda,\Lambda}:=T_{\Psi_{\lambda,\Lambda},\Psi_{\lambda,\Lambda}}$, with $T_{\Psi,\Psi}x=\Psi\langle\Psi,x\rangle_2$; by the unit-vector case in [A3], this is the density-operator input to the Born postulate. Applying its outcome formula to the first Kraus operator $P_n$ gives $p_n=\operatorname{tr}(\rho_{\lambda,\Lambda}P_n)=\|P_n\Psi_{\lambda,\Lambda}\|^2$. This uses the finite two-outcome partition for each singleton event and assumes no countably infinite Kraus instrument. [A1, A3, F5, F6, step 3.1, algebra]

4.2 The expected photon energy is the energy-coordinate expectation from [L1], transferred to the adopted free Hamiltonian $H_\gamma$ by its unitary map and [A2]. The cutoffs are energies in joules, so $C(\Lambda-\lambda)$ has unit joule. [F1, A2, L1, step 3.1]

4.3 Assume $C>0$ for the nonconvergence claim. The Segal–Weyl supplier [F7] requires a separable complex Hilbert space; [F8] verifies this for $\mathfrak h_T$, and $u_j\in\mathfrak h_T$ by [L1]. Let $\lambda_j=\Lambda2^{-j}$ for $j\ge1$, and set $u_j=U_Eh_{\lambda_j,\Lambda}$ and $V_j=W(-i\sqrt2u_j)$. The difference $u_{j+1}-u_j$ is the same current amplitude restricted to the shell $\lambda_{j+1}<\omega<\lambda_j$. Applying [L1]'s cutoff norm formula to that shell gives $\|u_{j+1}-u_j\|^2=C\log(\lambda_j/\lambda_{j+1})=C\log2$. The explicit exponential-vector formula in [F7] gives $\Psi_{\lambda_j,\Lambda}=V_j\Omega$ for either sign of the amplitude. Unitarity and the Weyl product law in [F7] give $V_j^*V_{j+1}=e^{i\theta_j}W(-i\sqrt2(u_{j+1}-u_j))$ for some real phase $\theta_j$. Applying the vacuum expectation formula in [F7] yields $$|\langle\Psi_{\lambda_j,\Lambda},\Psi_{\lambda_{j+1},\Lambda}\rangle_2| =e^{-\|u_{j+1}-u_j\|^2/2}=e^{-C\log2/2}<1.$$ [F7, F8, F9, L1, step 1.1, step 3.1, algebra]

5.1 The projection $P_n$ retains exactly sector $n$ by [F5]. The sector formula from [L1] gives $P_n\Psi_{\lambda,\Lambda} =e^{-N_\gamma/2}(U_Eh_{\lambda,\Lambda})^{\otimes_s n}/\sqrt{n!}$. The symmetric tensor norm is multiplicative and $U_E$ preserves the one-particle norm, so $p_n=e^{-N_\gamma}N_\gamma^n/n!$. [F4, F5, L1, step 4.1, algebra]

6.1 The exponential series gives $\sum_{n\ge0}p_n=e^{-N_\gamma}e^{N_\gamma}=1$ and, by reindexing its nonnegative terms, $\sum_{n\ge0}n p_n=e^{-N_\gamma}N_\gamma e^{N_\gamma}=N_\gamma$. The zero-sector term is $e^{-N_\gamma}$, including $N_\gamma=0$ under $0^0=1$. [step 5.1, algebra]

7.1 For unit vectors $x,y$, expansion of $\|x-\zeta y\|^2$ and choice of $\zeta$ to align their inner product give $\inf_{|\zeta|=1}\|x-\zeta y\|^2=2-2|\langle x,y\rangle_2|$. Step 4.3 therefore gives the fixed positive squared adjacent-ray distance $2(1-e^{-C\log2/2})$ along $\lambda_j$. A projective-ray limit would make these adjacent distances tend to zero, a contradiction. Ordinary Fock-norm convergence is the special case without phase adjustment and is also impossible. The energy from step 4.2 tends to the finite value $C\Lambda$; nonconvergence is not caused by divergent mean energy. [step 4.3, step 4.2, algebra] ∎
