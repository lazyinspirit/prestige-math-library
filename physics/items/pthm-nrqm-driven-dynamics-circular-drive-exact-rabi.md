---
id: pthm-nrqm-driven-dynamics-circular-drive-exact-rabi
aliases: [ nrqm-driven-dynamics-circular-drive-exact-rabi ]
kind: physics-theorem
domain: physics
title: "The circularly driven two-level model: exact rotating-frame reduction,
  Rabi populations, resonance and inversion times"
status: draft
origin: session
dependency_level: 11
deps:
  [
    def-nrqm-driven-dynamics-framework-driven-model,
    pthm-nrqm-driven-dynamics-bounded-norm-propagator,
    lem-nrqm-driven-dynamics-two-level-rotating-frame,
    thm-nrqm-controlled-dynamics-two-level-rabi-model,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-nrqm-framework-quantities-and-units,
    def-hilbert-space,
    def-bounded-linear-operator,
    def-operator-norm,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  pthm-nrqm-driven-dynamics-bounded-norm-propagator: physical-result
  lem-nrqm-driven-dynamics-two-level-rotating-frame: mathematical-premise
  thm-nrqm-controlled-dynamics-two-level-rabi-model: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared circular two-level drive model with splitting
  frequency omega0, transverse coupling Omega1 and drive frequency omega: the
  exact rotating-frame reduction to the constant matrix (hbar/2)(Delta sigma_z +
  Omega1 sigma_x), the exact level populations of the evolved up-state as Rabi
  probabilities, the resonance case and the pi-pulse and return times. The
  statement is exact for the declared finite model; it asserts no damping or
  relaxation, no measurement record, no laboratory identification of the
  parameters and no empirical result."
empirical_premises: []
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two
        State Systems', Sections 4-6 chapter pages 7-19 (PDF pages 7-19): the
        ammonia two-state oscillation, its probabilities, and the rotating-frame
        reduction of a circularly polarized magnetic drive to a time-independent
        Hamiltonian"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b2\
        7e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework data and the **declared circular two-level drive model** of clause (f) of [[def-nrqm-driven-dynamics-framework-driven-model]]: $\mathfrak H=\mathbb C^{2}$ with the orthonormal basis $(e_{\uparrow},e_{\downarrow})$ and the Pauli matrices $(\sigma_x,\sigma_y,\sigma_z)$ of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e), real parameters $\omega_{0},\Omega_{1},\omega$ and
$$H_{\mathrm c}(t):=\frac{\hbar}{2}\Bigl(\omega_{0}\sigma_{z}+\Omega_{1}\bigl(\cos(\omega t)\sigma_{x}+\sin(\omega t)\sigma_{y}\bigr)\Bigr),\qquad t\in I=[t_{0},t_{1}],$$
read as the model's energy family in the bounded norm-continuous class, with $U_{\mathrm c}(t,s)$ its unique unitary propagator ([[pthm-nrqm-driven-dynamics-bounded-norm-propagator]] clause (a)). Put $\Delta:=\omega_{0}-\omega$, $b:=\sqrt{\Delta^{2}+\Omega_{1}^{2}}$, let $R(t):=\cos(\omega t/2)I+i\sin(\omega t/2)\sigma_{z}$ be the rotating frame of [[lem-nrqm-driven-dynamics-two-level-rotating-frame]] and let $P_{\uparrow},P_{\downarrow}$ be the projections onto $\mathbb Ce_{\uparrow},\mathbb Ce_{\downarrow}$, with populations $p_{\bullet}(t):=\langle P_{\bullet}\psi(t),\psi(t)\rangle$ of the evolved vector. Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Then:

(a) *Exact rotating-frame reduction.* For every solution $\psi$ of $i\hbar\psi'(t)=H_{\mathrm c}(t)\psi(t)$ the rotating-frame vector $\psi_{R}(t):=R(t)\psi(t)$ satisfies exactly
$$i\hbar\psi_{R}'(t)=\frac{\hbar}{2}\bigl(\Delta\sigma_{z}+\Omega_{1}\sigma_{x}\bigr)\psi_{R}(t),$$
with the constant matrix $\frac{\hbar}{2}(\Delta\sigma_{z}+\Omega_{1}\sigma_{x})$; equivalently
$$U_{\mathrm c}(t,s)=R(t)^{*}\,e^{-i(t-s)(\Delta\sigma_{z}+\Omega_{1}\sigma_{x})/2}\,R(s)\qquad(s,t\in I).$$

(b) *Rabi populations.* Let $\psi(s)=e_{\uparrow}$ at time $s$. Then for $\tau:=t-s$
$$p_{\downarrow}(t)=p_{\downarrow}^{R}(\tau)=\Bigl|\bigl\langle e_{\downarrow},e^{-i\tau(\Delta\sigma_{z}+\Omega_{1}\sigma_{x})/2}e_{\uparrow}\bigr\rangle\Bigr|^{2}=\frac{\Omega_{1}^{2}}{b^{2}}\sin^{2}\!\Bigl(\frac{b\tau}{2}\Bigr)\qquad(b>0),$$
and $p_{\uparrow}(t)=1-p_{\downarrow}(t)$; the populations of the rotating-frame vector $\psi_{R}(t)$ are the same numbers.

(c) *Resonance and inversion times.* At resonance $\Delta=0$ one has $p_{\downarrow}(t)=\sin^{2}(\Omega_{1}\tau/2)$; when $\Omega_1\ne0$, the drive inverts the population fully at the **pi-pulse** time $\tau=\pi/|\Omega_{1}|$ and returns it to the initial level at $\tau=2\pi/|\Omega_{1}|$; for $b>0$ the population is exactly periodic in $\tau$ with period $2\pi/b$. For $\Omega_{1}=0$ the populations are constant, $p_{\downarrow}\equiv0$ and $p_{\uparrow}\equiv1$.

(d) *Scope.* The statements are exact for the declared finite model and its declared parameters; the rotating frame is a change of description of the same model and does not change the populations. The theorem asserts no damping or relaxation, no decoherence, no measurement record, no identification of $\omega_{0},\Omega_{1}$ with laboratory fields or of the two levels with a species, and no empirical value.

## Facts & Assumptions


**Given:** the declared circular two-level drive model with parameters $\omega_{0},\Omega_{1},\omega$ and interval $I$; the propagator $U_{\mathrm c}$; the frame $R$; $\Delta,b$; a solution $\psi$ of the model's equation and the initial condition $\psi(s)=e_{\uparrow}$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Rotating-frame lemma.** For the frame $R(t)=\cos(\omega t/2)I+i\sin(\omega t/2)\sigma_{z}$: $R$ is $C^{\infty}$ and unitary with $R'(t)=\frac{i\omega}{2}\sigma_{z}R(t)$, and $R(t)P_{\uparrow}R(t)^{*}=P_{\uparrow}$, $R(t)P_{\downarrow}R(t)^{*}=P_{\downarrow}$; and for the circular family $R(t)H_{\mathrm c}(t)R(t)^{*}+i\hbar R'(t)R(t)^{*}=\frac{\hbar}{2}(\Delta\sigma_{z}+\Omega_{1}\sigma_{x})$ for every $t$; every solution $\psi$ transforms to $\psi_{R}=R\psi$ satisfying the equation with the transformed family, and the transformed propagator $U_{\mathrm c}^{R}(t,s)=R(t)U_{\mathrm c}(t,s)R(s)^{*}$ is the propagator of that family; moreover $\langle P_{\bullet}\psi(t),\psi(t)\rangle=\langle P_{\bullet}\psi_{R}(t),\psi_{R}(t)\rangle$ for both signs ([[lem-nrqm-driven-dynamics-two-level-rotating-frame]] clauses (a), (c), (e)).

[F2] **Two-level Rabi supplier.** For $H=\frac{\hbar}{2}(\delta\sigma_{z}+\Omega\sigma_{x})$ on $\mathbb C^{2}$ with $b=\sqrt{\delta^{2}+\Omega^{2}}$ one has $H^{2}=\frac{\hbar^{2}b^{2}}{4}I$, the unitary group generated by $-iH/\hbar$ is $U(t)=\cos(bt/2)I-\frac{i}{b}\sin(bt/2)(\delta\sigma_{z}+\Omega\sigma_{x})$ with $U(t)=I$ when $b=0$, the down-probability of the initial up-state is $p_{\downarrow}(t)=\Omega^{2}\sin^{2}(bt/2)/b^{2}$ for $b>0$, and $U(t+2\pi/b)=-U(t)$ for $b>0$, so every transition probability is exactly $2\pi/b$-periodic in $t$ ([[thm-nrqm-controlled-dynamics-two-level-rabi-model]] clauses (a), (b), (c)).

[F3] **Model and population readings.** The circular family is the declared energy of clause (f) of [[def-nrqm-driven-dynamics-framework-driven-model]], the populations are the diagonal entries of clause (f), and the model's clause (c)(i) identifies its propagator with the unique unitary propagator of [[pthm-nrqm-driven-dynamics-bounded-norm-propagator]] clause (a); the outcome reading of the populations is that of P2 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[def-nrqm-observables-framework-observable-and-outcome-law]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]; [[def-nrqm-framework-quantities-and-units]]).

[F4] **Inner product and matrices.** The pairing on $\mathbb C^{2}$ is linear in the first argument and conjugate-linear in the second, the vectors $e_{\uparrow},e_{\downarrow}$ are orthonormal, and the matrices $\sigma_{x},\sigma_{y},\sigma_{z},I$ are as displayed in clause (e) of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] with $\sigma_{z}=\operatorname{diag}(1,-1)$; $b^{2}=\Delta^{2}+\Omega_{1}^{2}$ by definition of $b$ ([[def-hilbert-space]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

## Proof

**Proof technique:** direct; instantiate the rotating-frame lemma at the declared circular family, then read the populations from the supplied two-level Rabi theorem.

**Given:** the data of the Statement and [F1]-[F4].

1.1 [Exact reduction and propagator identity] The circular family is a continuous bounded self-adjoint family, so its unique unitary propagator $U_{\mathrm c}$ exists by [F3] and the model's clause (c)(i) is well posed. By clause (c) of [F1] applied with $H=H_{\mathrm c}$, the frame transforms the family into the constant matrix $H_{R}:=\frac{\hbar}{2}(\Delta\sigma_{z}+\Omega_{1}\sigma_{x})$, so every solution $\psi$ gives $\psi_{R}=R\psi$ satisfying $i\hbar\psi_{R}'=H_{R}\psi_{R}$; by clause (e) of [F1] the transformed propagator $U_{\mathrm c}^{R}(t,s)=R(t)U_{\mathrm c}(t,s)R(s)^{*}$ is the propagator of the constant family, and since that family is autonomous with $H_{R}^{2}=\frac{\hbar^{2}b^{2}}{4}I$ by [F2], its propagator is $e^{-i(t-s)H_{R}/\hbar}=e^{-i(t-s)(\Delta\sigma_{z}+\Omega_{1}\sigma_{x})/2}$ by [F2] clause (a). Taking $R(t)^{*}(\cdot)R(s)$ gives the displayed identity for $U_{\mathrm c}$. This is clause (a). [F1, F2, F3, given]

2.1 [Populations] Let $\psi(s)=e_{\uparrow}$. By clause (e) of [F1] the populations of $\psi(t)$ equal those of $\psi_{R}(t)$, and by step 1.1 $\psi_R(t)=e^{i\omega s/2}e^{-i\tau H_R/\hbar}e_{\uparrow}$, since $R(s)e_{\uparrow}=e^{i\omega s/2}e_{\uparrow}$. This initial phase has modulus one and leaves populations unchanged; by clause (b) of [F2] with $\delta=\Delta$, $\Omega=\Omega_{1}$ the down-population is $\Omega_{1}^{2}\sin^{2}(b\tau/2)/b^{2}$ for $b>0$ and the up-population is its complement, because $\|e_{\uparrow}\|=1$ and the evolution is unitary. At $\Omega_{1}=0$ the family is constant and diagonal, so the populations are constant with $p_{\downarrow}\equiv0$; the formula at $\Delta\ne0$, $\Omega_{1}=0$ would read $0/b^{2}\sin^{2}(b\tau/2)$ with $b=|\Delta|$, which is also $0$. This is clause (b). [F1, F2, step 1.1, F4, algebra]

3.1 [Resonance and periodicity] At $\Delta=0$ one has $b=|\Omega_{1}|$ and the formula of clause (b) reads $p_{\downarrow}=\sin^{2}(\Omega_{1}\tau/2)$; for $\Omega_1\ne0$ the first full inversion occurs at $\tau=\pi/|\Omega_{1}|$ and the next full period at $\tau=2\pi/|\Omega_{1}|$. For general $b>0$ the probability is $2\pi/b$-periodic in $\tau$ by clause (c) of [F2] together with clause (e) of [F1], since $b\tau$ enters only through $\sin^{2}(b\tau/2)$. This is clause (c). [F2, step 2.1, algebra]

4.1 [Scope] The computation used the declared two-level model, the exact frame identity and the exact Rabi theorem; it identified no laboratory system or field, asserted no damping, decoherence or measurement, and made no empirical claim, which is clause (d). [step 1.1, step 2.1, step 3.1, given] ∎

## Remarks

- **Why this is exact.** The circular drive is special: the drive vector rotates in the same sense as the frame, so the transformed family is exactly time-independent and no rotating-wave approximation is needed. The linearly polarized drive of the companion theorem contains a counter-rotating term; the two theorems therefore have genuinely different hypotheses.
- **Populations are not records.** The numbers $p_{\uparrow},p_{\downarrow}$ are model outcome probabilities of the two-level projections in the evolved preparation, in the reading of P2; no apparatus, pulse protocol or record is asserted.
