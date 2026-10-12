---
id: pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error
aliases: [ nrqm-driven-dynamics-linear-drive-rotating-wave-error ]
kind: physics-theorem
domain: physics
title: "The linearly driven two-level model: rotating-wave approximation with an
  explicit finite-time error contract and the averaged Rabi populations"
status: draft
origin: session
dependency_level: 11
deps:
  [
    def-nrqm-driven-dynamics-framework-driven-model,
    pthm-nrqm-driven-dynamics-bounded-norm-propagator,
    lem-nrqm-driven-dynamics-two-level-rotating-frame,
    thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error,
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
    thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces,
    def-inner-product-space,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  pthm-nrqm-driven-dynamics-bounded-norm-propagator: physical-result
  lem-nrqm-driven-dynamics-two-level-rotating-frame: mathematical-premise
  thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error: mathematical-premise
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
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared linear two-level drive model: the exact
  rotating-frame family with its co- and counter-rotating parts, the
  rotating-wave error contract bounding the rotating-frame propagator against
  the propagator of the averaged detuned Rabi matrix, and the resulting bound on
  the exact level population against the averaged Rabi probability. The
  statement is conditional on the declared finite model and on a nonzero drive
  frequency; the error bound is linear in the elapsed time and the theorem
  asserts no uniform-in-time approximation, no decay, no measurement and no
  empirical result."
empirical_premises: []
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two
        State Systems', Section 5 chapter pages 14-15 (PDF pages 14-15): the
        linearly oscillating ammonia drive, the decomposition E(t) = E0 (exp(i
        omega0 t) + exp(-i omega0 t)) and the dropping of the counter-rotating
        terms"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b2\
        7e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework data and the **declared linear two-level drive model** of clause (f) of [[def-nrqm-driven-dynamics-framework-driven-model]]: $\mathfrak H=\mathbb C^{2}$, the orthonormal basis $(e_{\uparrow},e_{\downarrow})$ and Pauli matrices of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e), real parameters $\omega_{0},\Omega_{1},\omega$ with $\omega\ne0$, and
$$H_{\mathrm l}(t):=\frac{\hbar}{2}\bigl(\omega_{0}\sigma_{z}+\Omega_{1}\cos(\omega t)\sigma_{x}\bigr),\qquad t\in I=[a,b],$$
read as the model's energy family in the bounded norm-continuous class with unique propagator $U_{\mathrm l}(t,s)$ ([[pthm-nrqm-driven-dynamics-bounded-norm-propagator]] clause (a)). Put $\Delta:=\omega_{0}-\omega$, let $R(t):=\cos(\omega t/2)I+i\sin(\omega t/2)\sigma_{z}$ be the rotating frame of [[lem-nrqm-driven-dynamics-two-level-rotating-frame]], let $U_{\mathrm l}^{R}(t,s):=R(t)U_{\mathrm l}(t,s)R(s)^{*}$, and define the **averaged matrix** and the **counter-rotating amplitude**
$$A:=\frac{\hbar}{2}\Bigl(\Delta\sigma_{z}+\frac{\Omega_{1}}{2}\sigma_{x}\Bigr),\qquad B:=\frac{\hbar\Omega_{1}}{8}\bigl(\sigma_{x}+i\sigma_{y}\bigr),\qquad \varepsilon(\tau):=\frac{|\Omega_{1}|}{2|\omega|}\Bigl[1+\tau\Bigl(\frac{|\Delta|}{2}+\frac{3|\Omega_{1}|}{4}\Bigr)\Bigr].$$
Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Then:

(a) *Exact rotating-frame family.* For every $t\in I$,
$$R(t)H_{\mathrm l}(t)R(t)^{*}+i\hbar R'(t)R(t)^{*}=A+e^{2i\omega t}B+e^{-2i\omega t}B^{*},$$
with $A=A^{*}$, $\|A/\hbar\|\le\frac12(|\Delta|+|\Omega_{1}|/2)$ and $\|B/\hbar\|=|\Omega_{1}|/4$; the second and third terms are the **counter-rotating terms** of the drive in the rotating frame.

(b) *Rotating-wave error contract.* For all $s,t\in I$, with $\tau:=|t-s|$,
$$\bigl\|U_{\mathrm l}^{R}(t,s)-e^{-i(t-s)A/\hbar}\bigr\|\le\varepsilon(\tau)=\frac{|\Omega_{1}|}{2|\omega|}\Bigl[1+\tau\Bigl(\frac{|\Delta|}{2}+\frac{3|\Omega_{1}|}{4}\Bigr)\Bigr];$$
the bound is uniform in $s$ for fixed $\tau$ and grows linearly in $\tau$.

(c) *Population comparison.* Let $\psi(s)=e_{\uparrow}$ and let $p_{\downarrow}(t):=\langle P_{\downarrow}\psi(t),\psi(t)\rangle$ be the exact down-population at time $t$, where $\psi(t)=U_{\mathrm l}(t,s)e_{\uparrow}$. Let
$$p_{\downarrow}^{\mathrm{avg}}(\tau):=\frac{(\Omega_{1}/2)^{2}}{\Delta^{2}+(\Omega_{1}/2)^{2}}\,\sin^{2}\!\Bigl(\frac{\tau}{2}\sqrt{\Delta^{2}+\frac{\Omega_{1}^{2}}{4}}\Bigr)\qquad(\Omega_{1}\ne0),\qquad p_{\downarrow}^{\mathrm{avg}}\equiv0\quad(\Omega_{1}=0),$$
be the down-population of the initial up-state under the propagator of the **averaged family** $t\mapsto A$. Then for every $s,t\in I$
$$\bigl|p_{\downarrow}(t)-p_{\downarrow}^{\mathrm{avg}}(t-s)\bigr|\le 2\,\varepsilon(|t-s|).$$
At resonance $\Delta=0$ one has $p_{\downarrow}^{\mathrm{avg}}(\tau)=\sin^{2}(|\Omega_{1}|\tau/4)$.

(d) *Scope.* The averaged family is not asserted to be the model's exact dynamics: clause (b) is an error contract bounding the exact rotating-frame propagator against it, and its linear growth in $\tau$ gives no uniform-in-time approximation. The theorem asserts no resonance width, no decay rate, no long-time limit, no measurement record, no laboratory identification and no empirical result.

## Facts & Assumptions


**Given:** the declared linear two-level drive model with parameters $\omega_{0},\Omega_{1},\omega\ne0$ and interval $I$; the propagator $U_{\mathrm l}$; the frame $R$ and the rotated propagator $U_{\mathrm l}^{R}$; $\Delta$, $A$, $B$ and $\varepsilon$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Rotating-frame lemma.** For $R(t)=\cos(\omega t/2)I+i\sin(\omega t/2)\sigma_{z}$ and the linear family $H_{\mathrm l}$, one has $R(t)H_{\mathrm l}(t)R(t)^{*}+i\hbar R'(t)R(t)^{*}=A+e^{2i\omega t}B+e^{-2i\omega t}B^{*}$ for every $t$, with $\|A\|\le\frac{\hbar}{2}(|\Delta|+|\Omega_{1}|/2)$ and $\|B\|=\hbar|\Omega_{1}|/4$; the transformed propagator $U_{\mathrm l}^{R}(t,s)=R(t)U_{\mathrm l}(t,s)R(s)^{*}$ is the propagator of the transformed family; and the level populations are frame-invariant, $\langle P_{\bullet}\psi(t),\psi(t)\rangle=\langle P_{\bullet}\psi_{R}(t),\psi_{R}(t)\rangle$ ([[lem-nrqm-driven-dynamics-two-level-rotating-frame]] clauses (a), (d), (e)).

[F2] **Rotating-wave supplier.** Let $H$ be a complex Hilbert space, $A=A^{*}\in\mathcal B(H)$, $B\in\mathcal B(H)$ and $\omega\ne0$, and put $H(t)=A+e^{i\omega t}B+e^{-i\omega t}B^{*}$, $H_{\mathrm{avg}}=A$, with $U,U_{\mathrm{avg}}$ the unitary propagators of these norm-continuous bounded families. Then for all $s\le t$, $\|U(t,s)-U_{\mathrm{avg}}(t,s)\|\le\frac{4\|B\|}{|\omega|}[1+(t-s)(\|A\|+2\|B\|)]$ in units $\hbar=1$; with $\hbar$ restored, replace $A,B$ by $A/\hbar,B/\hbar$ ([[thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error]]).

[F3] **Two-level Rabi supplier.** For $H=\frac{\hbar}{2}(\delta\sigma_{z}+\Omega\sigma_{x})$ with $b=\sqrt{\delta^{2}+\Omega^{2}}$, the unitary group generated by $-iH/\hbar$ is $U(\tau)=\cos(b\tau/2)I-\frac{i}{b}\sin(b\tau/2)(\delta\sigma_{z}+\Omega\sigma_{x})$ ($U=I$ if $b=0$), and the down-probability of the initial up-state is $p_{\downarrow}(\tau)=\Omega^{2}\sin^{2}(b\tau/2)/b^{2}$ for $b>0$ ([[thm-nrqm-controlled-dynamics-two-level-rabi-model]] clauses (a), (b)).

[F4] **Model and reading data.** The linear family is the declared energy of clause (f) of [[def-nrqm-driven-dynamics-framework-driven-model]] with populations the diagonal entries of clause (f); the model's clause (c)(i) is identified with the unique unitary propagator of [[pthm-nrqm-driven-dynamics-bounded-norm-propagator]] clause (a); the outcome reading of the populations is that of P2 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[def-nrqm-observables-framework-observable-and-outcome-law]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]; [[def-nrqm-framework-quantities-and-units]]); and the pairing satisfies $|\langle u,v\rangle|\le\|u\|\|v\|$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[def-inner-product-space]]).

## Proof

**Proof technique:** direct; read the transformed family and its norm bounds off the rotating-frame lemma, instantiate the rotating-wave supplier at that family, and compare the populations of two unit vectors under contracting projections.

**Given:** the data of the Statement and [F1]-[F4].

1.1 [Transformed family and bounds] Clause (d) of [F1] applied to the declared linear family is exactly the displayed identity $A+e^{2i\omega t}B+e^{-2i\omega t}B^{*}$, and the same clause gives $\|A\|\le\frac{\hbar}{2}(|\Delta|+|\Omega_{1}|/2)$ and $\|B\|=\hbar|\Omega_{1}|/4$, i.e. $\|A/\hbar\|\le\frac12(|\Delta|+|\Omega_{1}|/2)$ and $\|B/\hbar\|=|\Omega_{1}|/4$. This is clause (a). [F1, F4, given]

2.1 [Rotating-wave error contract] The transformed family is $H^{R}(t)=A+e^{2i\omega t}B+e^{-2i\omega t}B^{*}$ with $A$ self-adjoint bounded and $B$ bounded, and the frequency $2\omega$ is nonzero, so the supplier [F2] applies with its $\omega$ replaced by $2\omega$ and its $A,B$ replaced by $A,B$: for $s\le t$, $$\bigl\|U_{\mathrm l}^{R}(t,s)-e^{-i(t-s)A/\hbar}\bigr\|\le\frac{4\|B/\hbar\|}{2|\omega|}\Bigl[1+(t-s)\bigl(\|A/\hbar\|+2\|B/\hbar\|\bigr)\Bigr].$$ By step 1.1, $4\|B/\hbar\|/(2|\omega|)=|\Omega_{1}|/(2|\omega|)$ and $\|A/\hbar\|+2\|B/\hbar\|\le\frac12(|\Delta|+|\Omega_{1}|/2)+|\Omega_{1}|/2=|\Delta|/2+3|\Omega_{1}|/4$, which gives $\varepsilon(|t-s|)$; the case $t<s$ is the adjoint of the case $s<t$ since both propagators are unitary, and $\tau=|t-s|$ is symmetric. This is clause (b). [step 1.1, F1, F2, algebra]

3.1 [Population comparison] Let $\psi(s)=e_{\uparrow}$ and, for the actual endpoints $s,t\in I$, put $u:=U_{\mathrm l}^{R}(t,s)e_{\uparrow}$ and $v:=e^{-i(t-s)A/\hbar}e_{\uparrow}$. By [F1] clause (e), the exact down-population equals $\|P_{\downarrow}u\|^{2}$: indeed $\psi_R(t)=R(t)\psi(t)=e^{i\omega s/2}u$, and the scalar phase has modulus one. The averaged down-population is $\|P_{\downarrow}v\|^{2}$ because the averaged family is autonomous with generator $A$ and [F3] applies with $\delta=\Delta$, $\Omega=\Omega_{1}/2$; its Rabi formula depends on $t-s$ through a squared sine and therefore equals the displayed function of $\tau=|t-s|$ for either time ordering (and it is $0$ when $\Omega_{1}=0$ since then $A$ is diagonal in the up/down basis). Both vectors are unit vectors because the propagators are unitary. Setting $Q:=P_{\downarrow}$, a projection, and using $Q=Q^{*}=Q^{2}$, $|\|Qu\|^{2}-\|Qv\|^{2}|=|\langle Q(u-v),Qu\rangle+\langle Qv,Q(u-v)\rangle|\le\|u-v\|(\|Qu\|+\|Qv\|)\le2\|u-v\|$ by Cauchy-Schwarz and $\|Q\|\le1$; with $\|u-v\|\le\varepsilon(|t-s|)$ from clause (b), the displayed population bound follows. At $\Delta=0$ the formula reads $\sin^{2}(|\Omega_{1}|\tau/4)$ because $\sqrt{\Omega_{1}^{2}/4}=|\Omega_{1}|/2$. This is clause (c). [step 2.1, F1, F3, F4, algebra]

4.1 [Scope] The contract bounds the exact rotating-frame propagator against the averaged one by a bound linear in $\tau$, so it is a finite-time statement and no uniform-in-time approximation, resonance width or rate was formed; the averaged family is a computational surrogate, not the model's dynamics, and no measurement or empirical comparison entered, which is clause (d). [step 1.1, step 2.1, step 3.1, given] ∎

## Remarks

- **Where the error comes from.** The two counter-rotating terms $e^{\pm2i\omega t}B$ are exactly the pieces dropped by the rotating-wave approximation; the supplier's integration by parts converts their size $\|B\|$ and frequency $2|\omega|$ into the prefactor $|\Omega_{1}|/(2|\omega|)$ and their time-dependence into the linear-in-$\tau$ factor. The approximation is therefore controlled only while $\tau$ stays below the scale $|\omega|/\Omega_{1}^{2}$ (in units of the problem), which is precisely the content of the contract.
- **Circular versus linear.** For the circular family the corresponding counter-rotating term is absent and the reduction of the companion theorem is exact; the linear family retains it, and the difference between the two theorems is a property of the declared drive, not of the frame.
