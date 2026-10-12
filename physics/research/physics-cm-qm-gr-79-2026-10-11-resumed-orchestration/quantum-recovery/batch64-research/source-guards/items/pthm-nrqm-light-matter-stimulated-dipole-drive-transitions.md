---
id: pthm-nrqm-light-matter-stimulated-dipole-drive-transitions
aliases: [nrqm-light-matter-stimulated-dipole-drive-transitions]
kind: physics-theorem
domain: physics
title: "Stimulated dipole-drive transitions of the finite-level model: first-order amplitudes, equal emission and absorption coefficients, and the exact two-level identification"
status: draft
origin: pipeline
dependency_level: 16
deps: [def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength, def-nrqm-light-matter-framework-finite-level-coupled-model, pthm-nrqm-driven-dynamics-first-order-transition-amplitude, pthm-nrqm-driven-dynamics-circular-drive-exact-rabi, pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error, def-nrqm-driven-dynamics-framework-driven-model, prop-nrqm-orbital-and-spin-finite-spin-matrices, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-preparation-and-apparatus, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-framework-quantities-and-units, def-hilbert-space, def-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-bounded-linear-operator, def-operator-norm, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength: formulation-prerequisite
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  pthm-nrqm-driven-dynamics-first-order-transition-amplitude: physical-result
  pthm-nrqm-driven-dynamics-circular-drive-exact-rabi: physical-result
  pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error: physical-result
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
empirical_premises: []
physical_scope: "Stimulated transitions of the declared dipole-drive model: the first-order transition amplitude between two declared levels of the compressed matter energy under a continuous prescribed field with the explicit Dyson remainder, the co-rotating and counter-rotating terms of a monochromatic drive with the linear resonant growth, the equality of the first-order stimulated emission and absorption coefficients at opposite detunings, and the identification of declared two-level Pauli matter data with the exact circular and linear two-level drive models. The theorem is conditional on the prescribed classical field and the declared finite-level model; it asserts no quantized field, no photon, no spontaneous emission, no decay, no measurement record and no empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.2 printed pages 216-218 (PDF pages 224-226): the first-order transition probability of a classically described wave, the equality of the stimulated-emission and absorption coefficients, and the explicit statement that the classical treatment omits spontaneous emission"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two State Systems', Sections 4-6 chapter pages 7-19 (PDF pages 7-19): the two-state model in an oscillating field, resonance and the rotating-frame reduction"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
---

## Statement

Adopt the prescribed dipole-drive model of
[[def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength]] with its
matter data $W\simeq\mathbb C^{d}$, $H_{a}$, $D^{W}_{1},D^{W}_{2},D^{W}_{3}$ and
its compact interval $I=[t_{0},t_{1}]$, the driven model of
[[def-nrqm-driven-dynamics-framework-driven-model]] clause (b)(i) and the
framework readings of P1, P2 and P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-preparation-and-apparatus]]). Assume the Axioms of
Countable Choice and of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Let $v_{i},v_{k}$ be orthonormal eigenvectors of
$H_{a}$ with $H_{a}v_{i}=E_{i}v_{i}$, $H_{a}v_{k}=E_{k}v_{k}$, put
$\Delta:=E_{k}-E_{i}$, $\tau:=t-s$ and let
$A_{ki}(t,s)=e^{i\Delta\tau/\hbar}\langle U(t,s)v_{i},v_{k}\rangle$ be the
model's transition amplitude of clause (e) of the driven model with
$U(t,s)$ the propagator of the drive family
$H_{\mathrm d}(r)=H_{a}-\sum_{j}E_{\mathrm{ext},j}(r)D^{W}_{j}$. Then:

(a) (first-order amplitude and remainder) with
$$A^{(1)}_{ki}(t,s)=\frac{i}{\hbar}\sum_{j=1}^{3}\int_{s}^{t} e^{i\Delta(r-s)/\hbar}\,E_{\mathrm{ext},j}(r)\, \bigl\langle D^{W}_{j}v_{i},v_{k}\bigr\rangle\,dr,$$
one has $A_{ki}(t,s)=\delta_{ik}+A^{(1)}_{ki}(t,s)+R_{ki}(t,s)$ with
$|R_{ki}(t,s)|\le e^{K\tau}(K\tau)^{2}/2$, where
$K:=\sup_{r\in I}\|H_{\mathrm d}(r)\|/\hbar$; in particular the first-order
amplitude is the model's exact amplitude up to the displayed Dyson remainder;

(b) (monochromatic co- and counter-rotating terms) if
$\mathbf E_{\mathrm{ext}}(r)=\mathbf E_{0}\cos(\omega r+\vartheta)$ with
$\mathbf E_{0}\in\mathbb R^{3}$, $\omega,\vartheta\in\mathbb R$ and
$W:=-\sum_{j}E_{0,j}D^{W}_{j}$ (a bounded self-adjoint operator on $W$), then
$V(r)=W\cos(\omega r+\vartheta)$ and
$$A^{(1)}_{ki}=a_{+}+a_{-},\qquad a_{\pm}=-\frac{i}{2\hbar}\bigl\langle Wv_{i},v_{k}\bigr\rangle e^{\mp i\vartheta_{0}}\frac{e^{i(\Delta\mp\hbar\omega)\tau/\hbar}-1} {i(\Delta\mp\hbar\omega)/\hbar},\qquad \vartheta_{0}:=\omega s+\vartheta,$$
with the value $\tau$ for the quotient when $\Delta\mp\hbar\omega=0$;
consequently the co-rotating term satisfies
$$|a_{+}|=\bigl|\bigl\langle Wv_{i},v_{k}\bigr\rangle\bigr|\, \frac{\bigl|\sin\bigl((\Delta-\hbar\omega)\tau/(2\hbar)\bigr)\bigr|} {|\Delta-\hbar\omega|} \quad(\Delta\ne\hbar\omega),\qquad |a_{+}|=\bigl|\bigl\langle Wv_{i},v_{k}\bigr\rangle\bigr|\frac{\tau}{2\hbar} \quad(\Delta=\hbar\omega),$$
and the counter-rotating term satisfies
$|a_{-}|\le|\langle Wv_{i},v_{k}\rangle|/|\Delta+\hbar\omega|$ whenever
$\Delta+\hbar\omega\ne0$;

(c) (equal stimulated coefficients) for the two-level case $d=2$ with
orthonormal eigenvectors $v_{\uparrow},v_{\downarrow}$, $H_{a}v_{\uparrow}
=E_{\uparrow}v_{\uparrow}$, $H_{a}v_{\downarrow}=E_{\downarrow}v_{\downarrow}$
and $\Delta=E_{\uparrow}-E_{\downarrow}>0$, the first-order amplitudes for the
upward transition $\downarrow\to\uparrow$ and the downward transition
$\uparrow\to\downarrow$ under the same drive satisfy
$$A^{(1)}_{\uparrow\downarrow}\bigl(\Delta\mapsto-\Delta\bigr) =\overline{A^{(1)}_{\downarrow\uparrow}}\,;$$
in particular the model's first-order **stimulated emission** coefficient at
detuning $\Delta-\hbar\omega$ equals the model's first-order **stimulated
absorption** coefficient at the opposite detuning
$\hbar\omega-\Delta$, for the same drive data and the same level pair, because
$\langle Wv_{\downarrow},v_{\uparrow}\rangle
=\overline{\langle Wv_{\uparrow},v_{\downarrow}\rangle}$ by the Hermiticity of
$W$;

(d) (exact two-level identifications) if $d=2$ with the orthonormal basis
$(e_{\uparrow},e_{\downarrow})$ and the Pauli matrices of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e), if
$$H_{a}=\frac{\hbar\omega_{0}}{2}\sigma_{z},\qquad D^{W}_{1}=d\,\sigma_{x},\qquad D^{W}_{2}=d\,\sigma_{y},\qquad D^{W}_{3}=0$$
for some real $d$ of unit $\mathrm{C\,m}$, and if the prescribed field is
$\mathbf E_{\mathrm{ext}}(r)=E_{0}(\cos(\omega r),\sin(\omega r),0)$ with
$E_{0}\in\mathbb R$, then $H_{\mathrm d}(r)$ is exactly the declared circular
two-level drive model of clause (f) of [[def-nrqm-driven-dynamics-framework-driven-model]]
with transverse coupling $\Omega_{1}:=-2dE_{0}/\hbar$, so the exact Rabi
populations of [[pthm-nrqm-driven-dynamics-circular-drive-exact-rabi]] clause
(b) are the model's level populations; if instead
$\mathbf E_{\mathrm{ext}}(r)=E_{0}(\cos(\omega r),0,0)$ and $D^{W}_{1}=d\sigma_{x}$,
$D^{W}_{2}=D^{W}_{3}=0$, then $H_{\mathrm d}(r)$ is the declared **linear**
two-level drive model with the same $\Omega_{1}$ and the rotating-wave error
contract of [[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]]
clauses (b),(c) applies to it;

(e) (scope) clauses (a)-(d) concern the prescribed classical drive model. The
field is unaffected by the matter's transitions; the model contains no
quantized field, no photon number and no vacuum, so no spontaneous emission,
no emission rate and no photon count is supplied by it. The identifications of
$H_{a},D^{W}_{j},d,\mathbf E_{\mathrm{ext}}$ with a laboratory atom and field
and of the initial preparation with an eigenvector of $H_{a}$ are tested
identifications with uncertainty under P7, and no value of $\omega_{0}$, $d$,
$E_{0}$, $\omega$ or $\Omega_{1}$ is asserted.

**Given:** the matter data and drive family of the model, the eigenvectors $v_{i},v_{k}$ and their energies, the elapsed time $\tau$, the propagator $U(t,s)$ and the amplitude $A_{ki}$; where clauses (b)-(d) apply, the monochromatic data $\mathbf E_{0},\omega,\vartheta,W$, the two-level Pauli data, and the assertion of the choice axioms.

[F1] **Driven model and its mathematics.** The family $H_{\mathrm d}(r)=H_{a}+V(r)$ with $V(r)=-\sum_{j}E_{\mathrm{ext},j}(r)D^{W}_{j}$ is the bounded norm-continuous class of the driven model, $U$ is its unique unitary propagator, and the amplitude of clause (e) of [[def-nrqm-driven-dynamics-framework-driven-model]] satisfies the supplier's expansion $A_{ki}=\delta_{ik}+A^{(1)}_{ki}+R_{ki}$ with $|R_{ki}|\le e^{K\tau}(K\tau)^{2}/2$ and the stated sinusoidal decomposition, co-rotating value and counter-rotating bound ([[pthm-nrqm-driven-dynamics-first-order-transition-amplitude]] clauses (a),(b); [[def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength]] clauses (b),(c); [[def-nrqm-driven-dynamics-framework-driven-model]] clauses (b)(i),(c)).

[F2] **Pairing and Hermiticity.** $\langle D^{W}_{j}v_{i},v_{k}\rangle$ is the matrix element of the Hermitian matrix $D^{W}_{j}$, so $\overline{\langle D^{W}_{j}v_{i},v_{k}\rangle}=\langle D^{W}_{j}v_{k},v_{i}\rangle$; the pairing is linear in the first argument and conjugate-linear in the second, and $|\langle u,v\rangle|\le\|u\|\|v\|$ ([[def-inner-product-space]], [[def-nrqm-light-matter-framework-finite-level-coupled-model]] clause (b), [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F3] **Exact two-level families.** The circular family $H_{\mathrm c}(t)=\frac{\hbar}{2}(\omega_{0}\sigma_{z}+\Omega_{1}(\cos(\omega t)\sigma_{x}+\sin(\omega t)\sigma_{y}))$ has the exact rotating-frame reduction and Rabi populations of [[pthm-nrqm-driven-dynamics-circular-drive-exact-rabi]] clauses (a)-(c); the linear family $H_{\mathrm l}(t)=\frac{\hbar}{2}(\omega_{0}\sigma_{z}+\Omega_{1}\cos(\omega t)\sigma_{x})$ has the rotating-wave error contract of [[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]] clauses (b),(c), whose hypotheses include $\omega\ne0$; the Pauli matrices and their products are those of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e); both families are declared models of [[def-nrqm-driven-dynamics-framework-driven-model]] clause (f).

[F4] **Framework readings.** The model's state, outcome and preparation readings are those of P1, P2 and P7 with [[def-nrqm-observables-framework-observable-and-outcome-law]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]] and [[def-nrqm-framework-quantities-and-units]]; the drive family and its parameters are read as energies in joules and angular frequencies in $\mathrm{s^{-1}}$ ([[def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength]] clauses (b)-(d)).



## Facts & Assumptions

**Given:** the matter data and drive family of the model, the eigenvectors $v_{i},v_{k}$ and their energies, the elapsed time $\tau$, the propagator $U(t,s)$ and the amplitude $A_{ki}$; where clauses (b)-(d) apply, the monochromatic data $\mathbf E_{0},\omega,\vartheta,W$, the two-level Pauli data, and the assertion of the choice axioms.

[F1] **Driven model and its mathematics.** The family $H_{\mathrm d}(r)=H_{a}+V(r)$ with $V(r)=-\sum_{j}E_{\mathrm{ext},j}(r)D^{W}_{j}$ is the bounded norm-continuous class of the driven model, $U$ is its unique unitary propagator, and the amplitude of clause (e) of [[def-nrqm-driven-dynamics-framework-driven-model]] satisfies the supplier's expansion $A_{ki}=\delta_{ik}+A^{(1)}_{ki}+R_{ki}$ with $|R_{ki}|\le e^{K\tau}(K\tau)^{2}/2$ and the stated sinusoidal decomposition, co-rotating value and counter-rotating bound ([[pthm-nrqm-driven-dynamics-first-order-transition-amplitude]] clauses (a),(b); [[def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength]] clauses (b),(c); [[def-nrqm-driven-dynamics-framework-driven-model]] clauses (b)(i),(c)).

[F2] **Pairing and Hermiticity.** $\langle D^{W}_{j}v_{i},v_{k}\rangle$ is the matrix element of the Hermitian matrix $D^{W}_{j}$, so $\overline{\langle D^{W}_{j}v_{i},v_{k}\rangle}=\langle D^{W}_{j}v_{k},v_{i}\rangle$; the pairing is linear in the first argument and conjugate-linear in the second, and $|\langle u,v\rangle|\le\|u\|\|v\|$ ([[def-inner-product-space]], [[def-nrqm-light-matter-framework-finite-level-coupled-model]] clause (b), [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F3] **Exact two-level families.** The circular family $H_{\mathrm c}(t)=\frac{\hbar}{2}(\omega_{0}\sigma_{z}+\Omega_{1}(\cos(\omega t)\sigma_{x}+\sin(\omega t)\sigma_{y}))$ has the exact rotating-frame reduction and Rabi populations of [[pthm-nrqm-driven-dynamics-circular-drive-exact-rabi]] clauses (a)-(c); the linear family $H_{\mathrm l}(t)=\frac{\hbar}{2}(\omega_{0}\sigma_{z}+\Omega_{1}\cos(\omega t)\sigma_{x})$ has the rotating-wave error contract of [[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]] clauses (b),(c), whose hypotheses include $\omega\ne0$; the Pauli matrices and their products are those of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e); both families are declared models of [[def-nrqm-driven-dynamics-framework-driven-model]] clause (f).

[F4] **Framework readings.** The model's state, outcome and preparation readings are those of P1, P2 and P7 with [[def-nrqm-observables-framework-observable-and-outcome-law]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]] and [[def-nrqm-framework-quantities-and-units]]; the drive family and its parameters are read as energies in joules and angular frequencies in $\mathrm{s^{-1}}$ ([[def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength]] clauses (b)-(d)).

## Proof

**Proof technique:** direct; instantiate the supplier's first-order amplitude and sinusoidal evaluation for the drive family, obtain the equal-coefficient statement from Hermiticity of the drive operator, and verify the two-level identifications by comparing the declared families term by term.

**Given:** The data of the statement and [F1]-[F4].

1.1 [First-order amplitude] Clause (a) is the supplier's expansion [[pthm-nrqm-driven-dynamics-first-order-transition-amplitude]] clause (a) with $V(r)=-\sum_{j}E_{\mathrm{ext},j}(r)D^{W}_{j}$ and $\langle V(r)v_{i},v_{k}\rangle=-\sum_{j}E_{\mathrm{ext},j}(r)\langle D^{W}_{j}v_{i},v_{k}\rangle$, so $A^{(1)}_{ki}=-\frac{i}{\hbar}\int_{s}^{t}e^{i\Delta(r-s)/\hbar}\langle V(r)v_{i},v_{k}\rangle dr$ is exactly the displayed expression; the remainder bound is the supplier's. [F1, F2, algebra]

1.2 [Sinusoidal terms] With $\mathbf E_{\mathrm{ext}}(r)=\mathbf E_{0}\cos(\omega r+\vartheta)$ the perturbation is $V(r)=W\cos(\omega r+\vartheta)$ with $W=-\sum_{j}E_{0,j}D^{W}_{j}$, which is self-adjoint and bounded; the supplier's clause (b) with this $W$ gives the decomposition, the co-rotating modulus with its resonant value $|\langle Wv_{i},v_{k}\rangle|\tau/(2\hbar)$, and the counter-rotating bound. This proves (b). [F1, F2, algebra]

1.3 [Two-level identifications] Under the hypotheses of (d) one has $-\sum_{j}E_{\mathrm{ext},j}(r)D^{W}_{j}=-E_{0}d(\cos(\omega r)\sigma_{x}+\sin(\omega r)\sigma_{y})$ in the circular case, so $H_{\mathrm d}(r)=\frac{\hbar}{2}(\omega_{0}\sigma_{z}+\Omega_{1}(\cos(\omega r)\sigma_{x}+\sin(\omega r)\sigma_{y}))$ with $\Omega_{1}=-2dE_{0}/\hbar$, which is the circular family of [F3]; in the linear case the same computation with $\mathbf E_{\mathrm{ext}}=E_{0}(\cos(\omega r),0,0)$ gives the linear family with the same $\Omega_{1}$. The exact Rabi populations and the rotating-wave contract are therefore the supplier's clauses quoted in [F3]. This proves (d). [F3, algebra]

2.1 [Equal stimulated coefficients] For $d=2$ and the level pair, applying step 1.2 with the pair $(v_{\uparrow},v_{\downarrow})$ and with the pair $(v_{\downarrow},v_{\uparrow})$ gives two first-order amplitudes whose only asymmetric ingredients are $\Delta\mapsto-\Delta$ and the matrix element $\langle Wv_{\downarrow},v_{\uparrow}\rangle$ versus $\langle Wv_{\uparrow},v_{\downarrow}\rangle$; by [F2] the second is the complex conjugate of the first, so $A^{(1)}_{\uparrow\downarrow}(\Delta\mapsto-\Delta)=\overline{A^{(1)}_{\downarrow\uparrow}}$, and the coefficients at opposite detunings are equal. This proves (c). [F2, step 1.2, algebra]

3.1 [Scope and assembly] Steps 1.1 and 1.2 prove (a) and (b), step 2.1 proves (c) and step 1.3 proves (d). Every clause is a statement about the prescribed classical drive model: the field is an external datum, no quantized field, photon number, vacuum, decay or detector entered, and the laboratory identifications are P7-tested as recorded in [F4]; this is (e). [F4, step 1.1, step 1.2, step 1.3, step 2.1] ∎



## Remarks

- **Stimulated, not spontaneous.** The equal-coefficient statement of clause (c) is the model's first-order version of the equality of stimulated emission and absorption coefficients; the model has no vacuum field and therefore contains no spontaneous emission. The quantized model and its vacuum-initiated emission are separate items of this page, and the relation between the two model classes is an identification, not a derivation.
- **What the exact Rabi result adds.** Clause (d) shows that for the declared two-level data the model's evolution is exactly the circular or linear two-level family of the driven-dynamics page, so the first-order amplitude of clause (a) is the short-time expansion of an exactly solvable population oscillation rather than a claimed all-time rate law.
