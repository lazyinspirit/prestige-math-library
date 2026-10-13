---
id: ex-nrqm-angular-momentum-zeeman-toy-model
aliases: [nrqm-angular-momentum-zeeman-toy-model]
kind: example
domain: physics
title: "The two-level Zeeman toy model: sector energies, level splitting and spin precession"
status: draft
origin: session
dependency_level: 12
deps: [def-axiom-of-choice, def-countable-choice, def-inner-product-space, def-nrqm-angular-momentum-framework-angular-momentum-observables, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-operator-norm, lem-exponential-series-of-a-bounded-operator, post-nrqm-angular-momentum-magnetic-moment-coupling, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-observable-and-probability, post-nrqm-framework-preparation-and-apparatus, post-nrqm-framework-state-and-composition, prop-nrqm-orbital-and-spin-finite-spin-matrices, pthm-nrqm-angular-momentum-zeeman-precession]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-operator-norm: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  post-nrqm-angular-momentum-magnetic-moment-coupling: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  pthm-nrqm-angular-momentum-zeeman-precession: physical-result
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked example inside the massive spin-half model with the adopted effective magnetic-moment coupling in a uniform static field: the exact sector identities for the Zeeman operator on product states, the energy offsets, and an explicitly labeled two-level truncation in which the internal levels differ by gamma hbar B_z and the spin precesses with angular frequency gamma B_z. The truncation is a toy model assumption, not derived from the full operator; no spectroscopy, no radiation, no measured gyromagnetic parameter and no apparatus is asserted."
empirical_premises: []
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two State Systems', Sections 1-3, chapter pages 1-6 (PDF pages 1-6 of 22): the two-level spin system in a uniform field, its energy levels and its precession"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 7.4, printed pages 164-169 (PDF pages 172-177): the two-level spin model, magnetic energies and precession"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---
## Example

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the autonomous-dynamics postulate P4, the kinematics and
massive-particle model postulate P5 and the internal-factor assignment of the
spin postulate P6, read for the massive spin-$\tfrac12$ model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] with mass parameter
$m>0$, together with the effective magnetic-moment coupling of
[[post-nrqm-angular-momentum-magnetic-moment-coupling]] with parameter
$\gamma:=\gamma_{1/2}\in\mathbb R$, and assume the Axiom of Countable Choice
and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Fix $B_{z}\in\mathbb R$ and the uniform field
$\mathbf B=(0,0,B_{z})$, let
$H_{Z}=H_{0}-\gamma B_{z}S_{3}$ on $D(H_{Z})=W^{2,2}(\mathbb R^{3};\mathbb C^{2})$
be the model's Zeeman operator with flow $U_{Z}(t)=e^{-itH_{Z}/\hbar}$ and put
$\omega:=\gamma B_{z}$. Then:

(i) for every unit $f\in L^{2}(\mathbb R^{3};\mathbb C)$ and each sign, the
product flow satisfies
$$U_{Z}(t)\bigl(f\otimes e_{\pm}\bigr)=e^{\pm i\gamma B_{z}t/2}\bigl(e^{-itH_{0}/\hbar}f\bigr)\otimes e_{\pm}\qquad(t\in\mathbb R),$$
and the transverse spin means of such a product state precess as in
[[pthm-nrqm-angular-momentum-zeeman-precession]]. If in addition
$f\in D(H_{0})=W^{2,2}(\mathbb R^{3};\mathbb C)$, then
$$H_{Z}\bigl(f\otimes e_{\pm}\bigr)=\bigl(H_{0}f\bigr)\otimes e_{\pm}\mp\frac{\gamma\hbar B_{z}}{2}\,f\otimes e_{\pm},\qquad \langle H_{Z}\rangle_{f\otimes e_{\pm}}:=\langle H_{Z}(f\otimes e_{\pm}),f\otimes e_{\pm}\rangle=\langle H_{0}f,f\rangle\mp\frac{\gamma\hbar B_{z}}{2};$$
the displayed expectation is defined only for these domain vectors.

(ii) **toy truncation.** Fix a real energy parameter $E_0\in\mathbb R$
in joules. Suppose in addition that, on a declared
two-dimensional internal subspace, the free part is replaced by the scalar
$E_{0}I$ (a truncation assumption of the toy model, not a theorem of the full
model): then the truncated operator is
$H_{Z}^{(2)}=E_{0}I-\gamma B_{z}S_{3}=\bigl(E_{0}-\tfrac{\gamma\hbar B_{z}}{2}\bigr)e_{+}e_{+}^{*}+\bigl(E_{0}+\tfrac{\gamma\hbar B_{z}}{2}\bigr)e_{-}e_{-}^{*}$
in the basis $(e_{+},e_{-})$, with energy levels
$E_{0}\mp\tfrac{\gamma\hbar B_{z}}{2}$ and signed level difference
$\Delta E:=\gamma\hbar B_{z}=\hbar\omega$; its evolution is
$$e^{-itH_{Z}^{(2)}/\hbar}=e^{-itE_{0}/\hbar}\begin{pmatrix}e^{i\omega t/2}&0\\0&e^{-i\omega t/2}\end{pmatrix},$$
so the relative phase of the two amplitudes accumulates at the angular
frequency $\omega$ (equivalently at the ordinary frequency
$|\omega|/(2\pi)$);

(iii) in the truncation the conjugation identities of the precession theorem
reduce to explicit matrix identities,
$$V(t)^{*}\sigma_{1}V(t)=\cos(\omega t)\sigma_{1}+\sin(\omega t)\sigma_{2},\qquad V(t)^{*}\sigma_{2}V(t)=\cos(\omega t)\sigma_{2}-\sin(\omega t)\sigma_{1},$$
with $V(t)=e^{-itH_{Z}^{(2)}/\hbar}e^{itE_{0}/\hbar}$;

(iv) the toy model contains no driving field: its diagonal evolution preserves
the two sector weights, hence there is no spin flip between $e_{+}$ and $e_{-}$ under
$H_{Z}^{(2)}$ alone. Statements about spin-flip transitions, resonance or
spectroscopy require a separately adopted drive or coupling, belong to the
driven-dynamics and light-matter pages, and are not derived here. No
apparatus, calibration, measured frequency or measured value of $\gamma$ is
asserted.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5 and P6 and the magnetic-moment
postulate in the stated readings; the two choice principles; the parameters
$m>0$, $s=\tfrac12$, $\gamma\in\mathbb R$, $B_{z}\in\mathbb R$ and
$\omega=\gamma B_{z}$; the operator $H_{Z}$ and its flow; a unit
$f\in L^{2}(\mathbb R^{3};\mathbb C)$; the basis $(e_{+},e_{-})$; the scalar
$E_{0}$.

[F1] **Uniform-field Zeeman operator.** $H_{0}$ has domain
$D(H_{0})=W^{2,2}(\mathbb R^{3};\mathbb C)$, and
$H_{Z}=H_{0}-\gamma B_{z}S_{3}$ is self-adjoint on
$D(H_{Z})=W^{2,2}(\mathbb R^{3};\mathbb C^{2})$ with flow
$U_{Z}(t)=e^{-itH_{0}/\hbar}e^{it\gamma B_{z}S_{3}/\hbar}$, $S_{3}$ commutes
with the flow, and for every unit vector the transverse means satisfy the
precession identities of
[[pthm-nrqm-angular-momentum-zeeman-precession]] clauses (a),(b),(c)
([[post-nrqm-angular-momentum-magnetic-moment-coupling]] clauses (i),(ii),
[[def-nrqm-autonomous-dynamics-framework-evolution]],
[[def-nrqm-state-geometry-framework-state-space]]).

[F2] **Spin-half matrices.** $S_{3}=\tfrac{\hbar}{2}\sigma_{3}$ with
$\sigma_{3}e_{\pm}=\pm e_{\pm}$, $S_{1}=\tfrac{\hbar}{2}\sigma_{1}$,
$S_{2}=\tfrac{\hbar}{2}\sigma_{2}$, and the Pauli matrices satisfy
$\sigma_{1}^{2}=\sigma_{2}^{2}=I$, $\sigma_{1}\sigma_{2}=i\sigma_{3}$,
$\sigma_{2}\sigma_{1}=-i\sigma_{3}$
([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e),
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]]
clause (c)).

[F3] **Bounded exponentials.** For a bounded self-adjoint matrix $A$ the
map $t\mapsto e^{-itA/\hbar}=\sum_{n}(-itA/\hbar)^{n}/n!$ is a norm-continuous
unitary group with $(e^{-itA/\hbar})^{*}=e^{itA/\hbar}$
([[lem-exponential-series-of-a-bounded-operator]],
[[def-operator-norm]],
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]]).

## Verification

**Proof technique:** direct; evaluate the Zeeman operator on the product basis of sectors, read the eigenvalues of the truncated internal matrix, and compute the conjugated Pauli matrices explicitly.

**Given:** The data of the example and [F1]-[F3].

1.1 [Sector identities] By [F2] one has $S_{3}(f\otimes e_{\pm})=\pm\frac{\hbar}{2}f\otimes e_{\pm}$ and $H_{0}$ acts on the spatial factor only; hence, for $f\in D(H_{0})$, $H_{Z}(f\otimes e_{\pm})=(H_{0}f)\otimes e_{\pm}\mp\frac{\gamma\hbar B_{z}}{2}f\otimes e_{\pm}$, and taking the inner product with the unit vector $f\otimes e_{\pm}$ gives the displayed expectation. For every $f\in L^{2}$, not necessarily in $D(H_{0})$, [F1] gives the product-flow identity, with $e^{it\gamma B_zS_3/\hbar}e_\pm=e^{\pm i\gamma B_zt/2}e_\pm$ by [F2]; the transverse means then precess as in the cited theorem, proving (i). [F1, F2, algebra]

2.1 [Toy levels and evolution] In the two-dimensional internal model with free part $E_{0}I$, the operator $H_{Z}^{(2)}=E_{0}I-\gamma B_{z}S_{3}$ is diagonal in $(e_{+},e_{-})$ with entries $E_{0}\mp\frac{\gamma\hbar B_{z}}{2}$ by [F2], so its eigenvalues are those entries and the signed difference is $\gamma\hbar B_{z}=\hbar\omega$; by [F3] the exponential is the displayed diagonal unitary, and the relative phase accumulates at the angular frequency $\omega$, which is (ii). [step 1.1, F2, F3, algebra]

3.1 [Conjugation identities] With $V(t)=e^{-itH_{Z}^{(2)}/\hbar}e^{itE_{0}/\hbar}=\operatorname{diag}(e^{i\omega t/2},e^{-i\omega t/2})$ from step 2.1, direct matrix multiplication using [F2] gives $V(t)^{*}\sigma_{1}V(t)=\begin{pmatrix}0&e^{-i\omega t}\\ e^{i\omega t}&0\end{pmatrix}=\cos(\omega t)\sigma_{1}+\sin(\omega t)\sigma_{2}$ and $V(t)^{*}\sigma_{2}V(t)=\begin{pmatrix}0&-ie^{-i\omega t}\\ ie^{i\omega t}&0\end{pmatrix}=\cos(\omega t)\sigma_{2}-\sin(\omega t)\sigma_{1}$, which is (iii) and agrees with the general conjugation of [[pthm-nrqm-angular-momentum-zeeman-precession]] clause (c). [step 2.1, F2, algebra]

4.1 [Scope] Since $H_{Z}^{(2)}$ is diagonal in $(e_{+},e_{-})$, its evolution multiplies the two amplitudes by phases and preserves the sector weights $|c_{\pm}|^{2}$: no spin flip occurs without a driving term, and the truncation was an explicit toy assumption, which is (iv). [step 2.1, step 3.1, F2, algebra] ∎

## Remarks

- **What the truncation discards.** Replacing $H_{0}$ by $E_{0}I$ discards the
  kinetic and any potential structure of the spatial factor; the truncated
  model is a toy description of the internal degree of freedom, and no
  spatial dynamics or position-space measurement model follows from it.
- **Frequency conventions.** $\omega=\gamma B_{z}$ is an angular frequency in
  $\mathrm{s^{-1}}$; the ordinary frequency is $|\omega|/(2\pi)$ in hertz,
  with the radian dimensionless, in the conventions of
  [[def-nrqm-framework-quantities-and-units]].
