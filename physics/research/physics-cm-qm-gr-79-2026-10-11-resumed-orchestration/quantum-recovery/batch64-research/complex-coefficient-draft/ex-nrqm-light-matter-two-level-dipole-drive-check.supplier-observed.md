---
id: ex-nrqm-light-matter-two-level-dipole-drive-check
aliases: [nrqm-light-matter-two-level-dipole-drive-check]
kind: example
domain: physics
title: "A two-level dipole-drive model: identification, resonant first-order coefficient and its comparison with the exact Rabi probability"
status: draft
origin: pipeline
dependency_level: 17
deps: [pthm-nrqm-light-matter-stimulated-dipole-drive-transitions, def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength, def-nrqm-light-matter-framework-finite-level-coupled-model, pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error, pthm-nrqm-driven-dynamics-circular-drive-exact-rabi, def-nrqm-driven-dynamics-framework-driven-model, prop-nrqm-orbital-and-spin-finite-spin-matrices, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-framework-quantities-and-units, def-hilbert-space, def-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-countable-choice, def-axiom-of-choice, post-nrqm-framework-preparation-and-apparatus]
dependency_roles:
  pthm-nrqm-light-matter-stimulated-dipole-drive-transitions: physical-result
  def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength: formulation-prerequisite
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error: physical-result
  pthm-nrqm-driven-dynamics-circular-drive-exact-rabi: physical-result
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional two-level instance of the declared dipole-drive model: declared Pauli matter data with a real dipole entry, a monochromatic prescribed field along one axis, the identification with the declared linear two-level drive model, the resonant co-rotating first-order amplitude and its agreement at small times with the exact averaged Rabi probability of the driven-dynamics page. The example asserts no laboratory atom or field, no damping, no spontaneous emission, no measurement record and no empirical value."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two State Systems', Sections 4-6 chapter pages 7-19 (PDF pages 7-19): the oscillating-field two-state model, its resonance and its rotating-frame treatment"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.2 printed pages 216-217 (PDF pages 224-225): the first-order transition probability of a classically described wave and the resonant growth of the transition amplitude"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Adopt the prescribed dipole-drive model
[[def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength]] with the
following **declared two-level matter data**, in a declared orthonormal basis
$(e_{\uparrow},e_{\downarrow})$ of $W=\mathbb C^{2}$ with the Pauli matrices
$(\sigma_{x},\sigma_{y},\sigma_{z})$ of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e):
$$H_{a}:=\frac{\hbar\omega_{0}}{2}\sigma_{z},\qquad D^{W}_{1}:=d\,\sigma_{x},\qquad D^{W}_{2}:=D^{W}_{3}:=0,$$
where $\omega_{0}>0$ is read in $\mathrm{s^{-1}}$ and $d>0$ in
$\mathrm{C\,m}$ are declared model parameters. Declare the field
$$\mathbf E_{\mathrm{ext}}(r):=E_{0}\cos(\omega r)\,e_{1},\qquad r\in I=[0,\tau],$$
with $E_{0}>0$ in $\mathrm{V\,m^{-1}}$ and $\omega>0$ in $\mathrm{s^{-1}}$, and
let $v_{\uparrow}:=e_{\uparrow}$, $v_{\downarrow}:=e_{\downarrow}$, so that
$E_{\uparrow}=\hbar\omega_{0}/2$, $E_{\downarrow}=-\hbar\omega_{0}/2$ and
$\Delta=E_{\uparrow}-E_{\downarrow}=\hbar\omega_{0}$. Then:

(a) (identification) $H_{\mathrm d}(r)=\frac{\hbar}{2}(\omega_{0}\sigma_{z}
+\Omega_{1}\cos(\omega r)\sigma_{x})$ with
$$\Omega_{1}=-\frac{2dE_{0}}{\hbar},$$
so the model is exactly the declared **linear two-level drive model** of
clause (f) of [[def-nrqm-driven-dynamics-framework-driven-model]] with
splitting frequency $\omega_{0}$ and transverse coupling $\Omega_{1}$;

(b) (resonance and first-order coefficient) at resonance $\omega=\omega_{0}$
the co-rotating first-order amplitude of
[[pthm-nrqm-light-matter-stimulated-dipole-drive-transitions]] clause (b) for
the transition $e_{\downarrow}\to e_{\uparrow}$ from time $0$ to time $\tau$
has modulus
$$|a_{+}|=\Bigl|\bigl\langle W e_{\downarrow},e_{\uparrow}\bigr\rangle\Bigr| \frac{\tau}{2\hbar}=\frac{dE_{0}\tau}{2\hbar},\qquad W=-dE_{0}\sigma_{x},$$
and the first-order transition probability is
$|a_{+}|^{2}=(dE_{0}\tau/(2\hbar))^{2}$; the counter-rotating term is bounded
by $|\langle We_{\downarrow},e_{\uparrow}\rangle|/(\Delta+\hbar\omega)
=dE_{0}/(2\hbar\omega)$ at resonance;

(c) (comparison with the exact averaged Rabi probability) by
[[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]] clause (c) the
averaged down-population of the initial up-state at resonance is
$p^{\mathrm{avg}}_{\downarrow}(\tau)=\sin^{2}(|\Omega_{1}|\tau/4)
=\sin^{2}(dE_{0}\tau/(2\hbar))$, whose small-$\tau$ expansion begins with
$(dE_{0}\tau/(2\hbar))^{2}$; the first-order probability of clause (b) is
therefore the leading term of the exact averaged Rabi probability, and the
rotating-wave error contract of the cited item bounds the difference between
the exact linear-model population and this averaged probability by
$2\varepsilon(\tau)$ with $\varepsilon(\tau)=\frac{|\Omega_{1}|}{2\omega}
[1+\tau(\frac{|\Delta|}{2}+\frac{3|\Omega_{1}|}{4})]$;

(d) (scope) the example is a conditional computation in the declared
two-level drive model. The identification of a laboratory two-level atom,
molecule or field with the declared data is a tested identification with
uncertainty under P7; the model has no quantized field, no vacuum, no
spontaneous emission, no damping, no measurement record and no empirical
value, and the exact circular and linear families of the driven-dynamics page
are models with their own scope.

## Facts & Assumptions

**Given:** the declared two-level matter data $H_{a},D^{W}_{j}$, the field $\mathbf E_{\mathrm{ext}}$, the parameters $\omega_{0},d,E_{0},\omega$, the pair $(e_{\uparrow},e_{\downarrow})$ and the cited suppliers.

[F1] **Identification supplier.** The declared linear two-level drive model of clause (f) of [[def-nrqm-driven-dynamics-framework-driven-model]] has the family $H_{\mathrm l}(t)=\frac{\hbar}{2}(\omega_{0}\sigma_{z}+\Omega_{1}\cos(\omega t)\sigma_{x})$ with splitting frequency $\omega_{0}$, transverse coupling $\Omega_{1}$ and drive frequency $\omega$, read as the model's energy in the bounded norm-continuous class ([[def-nrqm-driven-dynamics-framework-driven-model]] clauses (b)(i),(f), [[prop-nrqm-orbital-and-spin-finite-spin-matrices]]).

[F2] **First-order supplier.** For a monochromatic field $\mathbf E_{\mathrm{ext}}(r)=\mathbf E_{0}\cos(\omega r+\vartheta)$ and $W=-\sum_{j}E_{0,j}D^{W}_{j}$, the first-order amplitude decomposes into co- and counter-rotating parts with $|a_{+}|=|\langle Wv_{i},v_{k}\rangle|\,|\sin((\Delta-\hbar\omega)\tau/(2\hbar))|/|\Delta-\hbar\omega|$ for $\Delta\ne\hbar\omega$ and $|a_{+}|=|\langle Wv_{i},v_{k}\rangle|\tau/(2\hbar)$ at $\Delta=\hbar\omega$, while the counter-rotating part is bounded by $|\langle Wv_{i},v_{k}\rangle|/|\Delta+\hbar\omega|$ when $\Delta+\hbar\omega\ne0$ ([[pthm-nrqm-light-matter-stimulated-dipole-drive-transitions]] clause (b)).

[F3] **Averaged Rabi supplier.** Under the stated hypotheses the linear model's exact down-population obeys $|p_{\downarrow}(\tau)-p^{\mathrm{avg}}_{\downarrow}(\tau)|\le2\varepsilon(\tau)$ with $\varepsilon(\tau)=\frac{|\Omega_{1}|}{2|\omega|}[1+\tau(\frac{|\Delta|}{2}+\frac{3|\Omega_{1}|}{4})]$, and at resonance $\Delta=0$ the averaged probability is $p^{\mathrm{avg}}_{\downarrow}(\tau)=\sin^{2}(|\Omega_{1}|\tau/4)$ ([[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]] clauses (b),(c)).

[F4] **Pauli data and pairing.** The Pauli matrices of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e) act on the declared orthonormal basis with $\sigma_{x}e_{\downarrow}=e_{\uparrow}$, so $We_{\downarrow}=-E_{0}d\sigma_{x}e_{\downarrow}=-dE_{0}e_{\uparrow}$ and $\langle -dE_{0}e_{\uparrow},e_{\uparrow}\rangle=-dE_{0}$ with modulus $dE_{0}$; the pairing is linear in the first argument ([[def-inner-product-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F5] **Framework readings.** Times, energies and field values are read in $\mathrm s$, $\mathrm J$ and $\mathrm{V\,m^{-1}}$ as in [[def-nrqm-framework-quantities-and-units]], and the laboratory identification of a preparation or field with the declared data is a tested identification with uncertainty under P7 ([[post-nrqm-framework-preparation-and-apparatus]], [[def-nrqm-observables-framework-observable-and-outcome-law]]).

## Verification

**Proof technique:** direct; compute the matrix elements and the drive family in the declared basis, apply the supplier's first-order formula, and expand the supplier's exact averaged probability.

**Given:** the declared two-level matter data $H_{a},D^{W}_{j}$, the field $\mathbf E_{\mathrm{ext}}$, the parameters $\omega_{0},d,E_{0},\omega$ and the cited suppliers.

1.1 [Identification] Since $D^{W}_{2}=D^{W}_{3}=0$ and $\mathbf E_{\mathrm{ext}}(r)=E_{0}\cos(\omega r)e_{1}$, the interaction term is $-\sum_{j}E_{\mathrm{ext},j}(r)D^{W}_{j}=-E_{0}\cos(\omega r)d\sigma_{x}$, so $H_{\mathrm d}(r)=\frac{\hbar\omega_{0}}{2}\sigma_{z}-dE_{0}\cos(\omega r)\sigma_{x}=\frac{\hbar}{2}(\omega_{0}\sigma_{z}+\Omega_{1}\cos(\omega r)\sigma_{x})$ with $\Omega_{1}=-2dE_{0}/\hbar$; this is the linear family of [F1]. [F1, algebra]

1.2 [Resonant first-order amplitude] At resonance $\omega=\omega_{0}$ one has $\Delta=\hbar\omega$, so the co-rotating quotient is $\tau$ and $|a_{+}|=|\langle We_{\downarrow},e_{\uparrow}\rangle|\tau/(2\hbar)$; by [F4] this is $dE_{0}\tau/(2\hbar)$, so the first-order probability is $(dE_{0}\tau/(2\hbar))^{2}$; the counter-rotating bound of [F2] at $\Delta+\hbar\omega=2\hbar\omega$ is $dE_{0}/(2\hbar\omega)$. [F2, F4, algebra]

2.1 [Exact averaged comparison] By [F3] at $\Delta=\omega_{0}-\omega=0$ the averaged down-population is $\sin^{2}(|\Omega_{1}|\tau/4)=\sin^{2}(dE_{0}\tau/(2\hbar))$, whose power series begins with $(dE_{0}\tau/(2\hbar))^{2}$, the first-order probability of step 1.2; the difference between the exact linear-model population and this averaged probability is at most $2\varepsilon(\tau)$ with the displayed $\varepsilon$. [F3, step 1.2, algebra]

3.1 [Scope] The computation used only the declared two-level data, the prescribed field and the cited driven-dynamics results; no quantized field, vacuum, spontaneous emission, damping or record entered, and the laboratory identifications are P7-tested by [F5]. This is clause (d). [F5, step 1.1, step 1.2, step 2.1] ∎

## Remarks

- **First order versus exact.** The first-order probability of clause (b) is the leading term of the exact averaged Rabi oscillation of clause (c) only at small $\tau$; the exact linear model differs from the averaged model by the rotating-wave error, and the exact circular model of the driven-dynamics page is a different declared family, not an approximation proved here.
- **No spontaneous emission.** The example is stimulated: the field is prescribed and unaffected by the transition, and the model contains no vacuum. Spontaneous emission is treated only in the quantized cutoff dipole model of this pair, under the additional vacuum-preparation assumption of the postulate item.
