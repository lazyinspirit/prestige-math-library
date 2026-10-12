---
id: ex-nrqm-autonomous-dynamics-two-level-precession
aliases: [ nrqm-autonomous-dynamics-two-level-precession ]
kind: example
domain: physics
title: "Precession of a two-level preparation: exact phases, probabilities and a
  Bloch-vector rotation"
status: draft
origin: pipeline
dependency_level: 11
deps:
  [
    cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
    cor-inner-product-induces-a-norm,
    def-axiom-of-choice,
    def-countable-choice,
    def-hilbert-space,
    def-inner-product-space,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-nrqm-state-geometry-state-vectors-and-rays,
    lem-complex-conjugation-and-modulus-laws,
    lem-nrqm-composites-rank-one-operator-calculus,
    lem-nrqm-state-geometry-ray-to-rank-one-projection,
    pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow,
    pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation,
    thm-bessel-inequality-and-finite-parseval-identity,
    thm-complex-exponential-addition-and-real-extension,
    thm-complex-spectral-theorem-for-normal-endomorphisms,
    thm-eulers-formula,
    thm-kernel-and-fibres-of-complex-exponential,
    thm-pvm-integral-is-a-star-homomorphism,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators
  ]
dependency_roles:
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow: physical-result
  pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation: physical-result
  thm-bessel-inequality-and-finite-parseval-identity: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  thm-eulers-formula: mathematical-premise
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
  thm-pvm-integral-is-a-star-homomorphism: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A finite, exact model computation in the two-level state space
  of the framework: the assigned energy observable with two distinct energies in
  joules, its unitary flow, the exact evolution of a pure preparation, the
  outcome laws and expectations of three bounded self-adjoint observables, the
  resulting rotation of the expectation-value triple, and the explicit period of
  the laws. The energies are model parameters; the item asserts no apparatus
  realization, no detection model and no empirical value, and it identifies the
  two-level system with no specific physical species."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two
        State Systems', Sections 2-3, chapter pages 2-6 (spin precession and the
        general time-independent two-state Hamiltonian with its precession
        frequency)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b2\
        7e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 2.2,
        printed pages 21-23 (energy eigenstates acquire phases e^{-iEt/hbar};
        general states evolve as finite superpositions with time-dependent
        relative phases)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Let $H=\mathbb C^{2}$ carry the standard inner product $\langle z,w\rangle=z_{1}\overline{w_{1}}+z_{2}\overline{w_{2}}$ ([[def-inner-product-space]], [[def-hilbert-space]], [[cor-inner-product-induces-a-norm]]), with orthonormal basis $u_{1}=(1,0)$, $u_{2}=(0,1)$ and rank-one calculus $T_{u,v}x=\langle x,v\rangle u$ ([[lem-nrqm-composites-rank-one-operator-calculus]]). Fix two distinct energies $E_{1}\ne E_{2}$ in joules (model parameters, not measured values), and consider the assigned energy observable of [[def-nrqm-autonomous-dynamics-framework-evolution]] clause (a),
$$H_{\mathrm{op}}:=E_{1}T_{u_{1},u_{1}}+E_{2}T_{u_{2},u_{2}},\qquad u_{H}=\mathrm J,$$
of an isolated system whose state space is the two-level state space of [[def-nrqm-state-geometry-framework-state-space]]. Define the bounded self-adjoint observables
$$X:=T_{u_{1},u_{2}}+T_{u_{2},u_{1}},\qquad Y:=iT_{u_{2},u_{1}}-iT_{u_{1},u_{2}},\qquad Z:=T_{u_{1},u_{1}}-T_{u_{2},u_{2}},$$
with the same dimensionless unit, and let $\psi_{0}=\alpha u_{1}+\beta u_{2}$ be a unit vector. Writing
$$\omega:=\frac{E_{2}-E_{1}}{\hbar}\quad(\text{units }\mathrm s^{-1}),$$
the example establishes the following exact model statements.

(i) The spectral projection-valued measure of $H_{\mathrm{op}}$ is $E_{H}(B)=\mathbf 1_{E_{1}\in B}T_{u_{1},u_{1}}+\mathbf 1_{E_{2}\in B}T_{u_{2},u_{2}}$, and the flow is $U(t)=e^{-iE_{1}t/\hbar}T_{u_{1},u_{1}}+e^{-iE_{2}t/\hbar}T_{u_{2},u_{2}}$.

(ii) $X,Y,Z$ are bounded self-adjoint with $X^{2}=Y^{2}=Z^{2}=I$ and $XY=iZ$; their spectra are $\{\pm1\}$, with $Y$ and $Z$ obtained from $X$ by the same pattern.

(iii) The evolved preparation is $\psi(t)=U(t)\psi_{0}=\alpha e^{-iE_{1}t/\hbar}u_{1}+\beta e^{-iE_{2}t/\hbar}u_{2}$, of unit norm, and the expectations are
$$\langle X\rangle(t)=2\operatorname{Re}\bigl(\alpha\overline{\beta}\,e^{i\omega t}\bigr),\qquad \langle Y\rangle(t)=-2\operatorname{Im}\bigl(\alpha\overline{\beta}\,e^{i\omega t}\bigr),\qquad \langle Z\rangle(t)=|\alpha|^{2}-|\beta|^{2}.$$

(iv) The triple $v(t):=\bigl(\langle X\rangle(t),\langle Y\rangle(t),\langle Z\rangle(t)\bigr)\in\mathbb R^{3}$ has constant norm one and is the rotation of $v(0)$ about the third axis by the angle $-\omega t$: $v(t)=R_{3}(-\omega t)v(0)$, where $R_{3}(\theta)(x,y,z)=(x\cos\theta-y\sin\theta,\ x\sin\theta+y\cos\theta,\ z)$. Thus the expectation-value triple precesses with angular frequency $\omega$.

(v) The outcome law of $X$ in the preparation $[\psi(t)]$ is the two-point law $\mu^{X}_{\psi(t)}(\{+1\})=(1+\langle X\rangle(t))/2$, $\mu^{X}_{\psi(t)}(\{-1\})=(1-\langle X\rangle(t))/2$; in particular for $\alpha=\beta=1/\sqrt{2}$ one has $\mu^{X}_{\psi(t)}(\{+1\})=(1+\cos\omega t)/2$.

(vi) The energy law is time-independent, $\mu^{H_{\mathrm{op}}}_{\psi(t)}(\{E_{1}\})=|\alpha|^{2}$ and $\mu^{H_{\mathrm{op}}}_{\psi(t)}(\{E_{2}\})=|\beta|^{2}$ for every $t$, and every one of the displayed expectations is periodic in $t$ with period $2\pi/|\omega|$ (when $\omega\ne0$, which holds because $E_{1}\ne E_{2}$).

The computation is a model-internal one: the energies are parameters of the assigned observable, the probabilities are those of the framework's outcome law, and no laboratory measurement, apparatus or empirical value is asserted.

## Facts & Assumptions

**Given:** The Hilbert space $H=\mathbb C^{2}$ with the standard inner product and orthonormal basis $(u_{1},u_{2})$; distinct real energies $E_{1}\ne E_{2}$ in joules, and the reduced Planck constant $\hbar$ with its value and unit, in the framework's quantity conventions ([[def-nrqm-framework-quantities-and-units]]); the assigned energy observable $H_{\mathrm{op}}=E_{1}T_{u_{1},u_{1}}+E_{2}T_{u_{2},u_{2}}$ with unit $\mathrm J$; the observables $X,Y,Z$; a unit vector $\psi_{0}=\alpha u_{1}+\beta u_{2}$; the number $\omega=(E_{2}-E_{1})/\hbar$; the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), the choice hypotheses of the cited spectral suppliers.

[F1] **Rank-one calculus and one-dimensional projections.** $T_{u,v}x=\langle x,v\rangle u$ is bounded with $T_{u,v}^{*}=T_{v,u}$, and the assignment is linear in $u$ and conjugate-linear in $v$; for every nonzero $\psi$ the operator $T_{\psi,\psi}$ is self-adjoint positive trace class, and for every unit $u$ the operator $T_{u,u}$ is the Hilbert orthogonal projection onto the one-dimensional subspace $\mathbb Cu$, so that $T_{u,u}$ is idempotent and $T_{u,u}\psi=\langle\psi,u\rangle u$ ([[lem-nrqm-composites-rank-one-operator-calculus]], [[lem-nrqm-state-geometry-ray-to-rank-one-projection]] clause (b)).

[F2] **Finite spectral structure.** For the bounded self-adjoint $H_{\mathrm{op}}$ with orthonormal eigenvectors $u_{1},u_{2}$ at the distinct eigenvalues $E_{1},E_{2}$, the assignment $E'(B):=\mathbf 1_{E_{1}\in B}T_{u_{1},u_{1}}+\mathbf 1_{E_{2}\in B}T_{u_{2},u_{2}}$ takes orthogonal-projection values by [F1], satisfies $E'(\mathbb R)=I$ by [F7], and is additive and multiplicative over the two-point eigenvalue set, so it is a projection-valued measure; and $\int\lambda\,dE'(\lambda)=E_{1}T_{u_{1},u_{1}}+E_{2}T_{u_{2},u_{2}}=H_{\mathrm{op}}$; by the uniqueness of the spectral measure it is $E_{H}$ ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-nrqm-autonomous-dynamics-framework-evolution]] clause (a)).

[F7] **Resolution of the identity.** Since $(u_{1},u_{2})$ is an orthonormal basis of the two-dimensional space $H$, every $v\in H$ satisfies $v=\langle v,u_{1}\rangle u_{1}+\langle v,u_{2}\rangle u_{2}$, and therefore $T_{u_{1},u_{1}}+T_{u_{2},u_{2}}=I$ ([[thm-bessel-inequality-and-finite-parseval-identity]]).

[F3] **Bounded calculus for the two-point measure.** For bounded Borel $f$, $\Phi_{E_H}(f)=f(E_{1})T_{u_{1},u_{1}}+f(E_{2})T_{u_{2},u_{2}}$: the identity holds on the simple functions constant on the Borel partition $\{E_{1}\},\{E_{2}\},\mathbb R\setminus\{E_{1},E_{2}\}$ and passes to bounded Borel $f$ by uniform approximation ([[thm-pvm-integral-is-a-star-homomorphism]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F4] **Flow and state evolution.** The flow is $U(t)=\exp(-itH_{\mathrm{op}}/\hbar)=\Phi_{E_H}(e^{-it\lambda/\hbar})$ and the preparation evolves as $\psi(t)=U(t)\psi_{0}$, with $\|\psi(t)\|=\|\psi_{0}\|=1$; the energy law is time-independent ([[pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow]] clauses (a) and (d), [[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clause (a), [[def-nrqm-autonomous-dynamics-framework-evolution]] clauses (b) and (c)).

[F5] **Outcome law.** For an assigned sharp observable $(A_{0},u_{A_{0}})$ the law of the pure preparation of a unit vector $\psi$ is $\mu^{A_{0}}_{\psi}(B)=\|E_{A_{0}}(B)\psi\|^{2}$, and the mean for a unit vector in $D(A_{0})$ is $\langle A_{0}\psi,\psi\rangle$; the law depends only on the ray ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (b) and (e), [[def-nrqm-state-geometry-state-vectors-and-rays]]).

[F6] **Complex exponential algebra.** For real $\theta,\phi$: $e^{i\theta}=\cos\theta+i\sin\theta$, $e^{i(\theta+\phi)}=e^{i\theta}e^{i\phi}$, $|e^{i\theta}|=1$ and $\overline{e^{i\theta}}=e^{-i\theta}$; for complex $z$, $2\operatorname{Re}z=z+\overline z$ and $2i\operatorname{Im}z=z-\overline z$ ([[thm-eulers-formula]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[lem-complex-conjugation-and-modulus-laws]]). Moreover $\ker(\exp)=2\pi i\mathbb Z$, so for real $\theta$ one has $e^{i\theta}=1$ exactly for $\theta\in2\pi\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

## Verification

**Proof technique:** direct; compute the spectral measure, the flow, the algebra and the laws of the explicit two-dimensional model.

1.1 [Spectral measure and flow] $H_{\mathrm{op}}$ is bounded and self-adjoint because $T_{u_{1},u_{1}},T_{u_{2},u_{2}}$ are self-adjoint projections by [F1] and $E_{1},E_{2}\in\mathbb R$, and $H_{\mathrm{op}}u_{k}=E_{k}u_{k}$; on the two-point spectrum the assignment $E'$ of [F2] has orthogonal-projection values with $E'(\mathbb R)=I$ by [F7] and is additive and multiplicative, so [F2] identifies $E_{H}$, and [F3] with $f(\lambda)=e^{-it\lambda/\hbar}$ gives $U(t)=\sum_{k}e^{-iE_{k}t/\hbar}T_{u_{k},u_{k}}$. This is (i). [given, F1, F2, F3, F7, algebra]

1.2 [The three observables] By [F1] each of $X=T_{u_{1},u_{2}}+T_{u_{2},u_{1}}$, $Y=iT_{u_{2},u_{1}}-iT_{u_{1},u_{2}}$, $Z=T_{u_{1},u_{1}}-T_{u_{2},u_{2}}$ is bounded and self-adjoint. Composing rank-one operators from their definition, $T_{u,v}T_{w,z}x=\langle\langle x,z\rangle w,v\rangle u=\langle w,v\rangle\langle x,z\rangle u$, so with orthonormality $T_{u_{1},u_{2}}T_{u_{2},u_{1}}=T_{u_{1},u_{1}}$, $T_{u_{2},u_{1}}T_{u_{1},u_{2}}=T_{u_{2},u_{2}}$ and all products of two distinct rank-one terms $T_{u_{j},u_{k}}T_{u_{l},u_{m}}$ with $k\ne l$ vanish; hence $X^{2}=T_{u_{1},u_{1}}+T_{u_{2},u_{2}}=I$ by [F1], $Y^{2}=I$, $Z^{2}=I$ and $XY=i(T_{u_{1},u_{1}}-T_{u_{2},u_{2}})=iZ$. The eigenvalues of $X$ are $\pm1$ with eigenvectors $e_{\pm}=(u_{1}\pm u_{2})/\sqrt2$. For $Y$, the vectors $f_{\pm}=(u_{1}\pm i u_{2})/\sqrt2$ satisfy $Yf_{\pm}=\pm f_{\pm}$; for $Z$, one has $Zu_{1}=u_{1}$ and $Zu_{2}=-u_{2}$. Since each of $X,Y,Z$ is self-adjoint and squares to $I$, its spectrum is contained in $\{-1,+1\}$, and these explicit eigenvectors show that both values occur for each operator. This proves (ii). [given, F1, algebra]

2.1 [Evolved preparation] By [F4] and step 1.1, $\psi(t)=\sum_{k}c_{k}e^{-iE_{k}t/\hbar}u_{k}$ with $c_{1}=\alpha$, $c_{2}=\beta$; all coefficients have modulus $|c_{k}|$ because $|e^{-iE_{k}t/\hbar}|=1$ by [F6], so $\|\psi(t)\|^{2}=|\alpha|^{2}+|\beta|^{2}=1$. This is the first assertion of (iii). [given, step 1.1, F4, F6, algebra]

3.1 [Expectations] With $\theta_{k}:=E_{k}t/\hbar$ and $\psi(t)=\alpha e^{-i\theta_{1}}u_{1}+\beta e^{-i\theta_{2}}u_{2}$, the actions $Xu_{1}=u_{2}$, $Xu_{2}=u_{1}$, $Yu_{1}=iu_{2}$, $Yu_{2}=-iu_{1}$, $Zu_{k}=\pm u_{k}$ from step 1.2 give $\langle X\psi(t),\psi(t)\rangle=\alpha\overline{\beta}e^{i(\theta_{2}-\theta_{1})}+\overline{\alpha\overline{\beta}e^{i(\theta_{2}-\theta_{1})}}=2\operatorname{Re}(\alpha\overline{\beta}e^{i\omega t})$ and $\langle Y\psi(t),\psi(t)\rangle=i\alpha\overline{\beta}e^{i(\theta_{2}-\theta_{1})}-i\overline{\alpha\overline{\beta}e^{i(\theta_{2}-\theta_{1})}}=-2\operatorname{Im}(\alpha\overline{\beta}e^{i\omega t})$ and $\langle Z\psi(t),\psi(t)\rangle=|\alpha|^{2}-|\beta|^{2}$, using $i(w-\overline w)=-2\operatorname{Im}w$ for $w=\alpha\overline{\beta}e^{i\omega t}$ and [F6]; by [F5] these are the means of $X,Y,Z$ in $[\psi(t)]$, which is (iii). [given, step 1.2, step 2.1, F5, F6, algebra]

4.1 [Precession of the triple] Write $c:=\alpha\overline{\beta}=re^{i\varphi}$ with $r\ge0$; then $v(t)=(2r\cos(\varphi+\omega t),\ -2r\sin(\varphi+\omega t),\ |\alpha|^{2}-|\beta|^{2})$ and $v(0)=(2r\cos\varphi,\ -2r\sin\varphi,\ |\alpha|^{2}-|\beta|^{2})$. The rotation formula $R_{3}(-\omega t)$ of the statement gives first coordinate $2r\cos\varphi\cos\omega t-2r\sin\varphi\sin\omega t=2r\cos(\varphi+\omega t)$ and second coordinate $-2r\cos\varphi\sin\omega t-2r\sin\varphi\cos\omega t=-2r\sin(\varphi+\omega t)$, matching the computed triple; its norm is $4r^{2}+(|\alpha|^{2}-|\beta|^{2})^{2}=4|\alpha|^{2}|\beta|^{2}+(|\alpha|^{2}+|\beta|^{2})^{2}-4|\alpha|^{2}|\beta|^{2}=1$ by [F6] and $|\alpha|^{2}+|\beta|^{2}=1$; this is (iv). [given, step 3.1, F6, algebra]

4.2 [Law of the flip observable] By step 1.2, $X=Q_{+}-Q_{-}$ with the orthogonal projections $Q_{\pm}=T_{e_{\pm},e_{\pm}}$ onto the eigenspaces of the eigenvalues $\pm1$, so $E_{X}(\{+1\})=Q_{+}$ and, by [F1], $Q_{+}\psi=\langle\psi,e_{+}\rangle e_{+}=\frac{1}{\sqrt2}\bigl(\langle\psi,u_{1}\rangle+\langle\psi,u_{2}\rangle\bigr)e_{+}$. For $\psi=\psi(t)$ this gives $\|Q_{+}\psi(t)\|^{2}=\frac12\bigl|\alpha e^{-i\theta_{1}}+\beta e^{-i\theta_{2}}\bigr|^{2}=\frac12\bigl(1+\langle X\rangle(t)\bigr)$ by [F6] and step 3.1, and by [F5] this is $\mu^{X}_{\psi(t)}(\{+1\})$; the minus case is the complement, and for $\alpha=\beta=1/\sqrt2$ the value is $(1+\cos\omega t)/2$. This is (v). [given, step 1.2, step 3.1, F1, F5, F6, algebra]

4.3 [Energy law and periodicity] By [F4], $\mu^{H_{\mathrm{op}}}_{\psi(t)}(\{E_{k}\})=\|E_{H}(\{E_{k}\})\psi(t)\|^{2}=\|c_{k}e^{-iE_{k}t/\hbar}u_{k}\|^{2}=|c_{k}|^{2}$ using step 1.1 and [F6], so the two-point energy law is time-independent; all displayed functions are functions of $e^{i\omega t}$, and $e^{i\omega(t+2\pi/|\omega|)}=e^{i\omega t}$ because $\pm2\pi i\in\ker(\exp)$ by [F6], so they are periodic with period $2\pi/|\omega|$; here $\omega\ne0$ because $E_{1}\ne E_{2}$. This is (vi). [given, step 1.1, step 3.1, F4, F6, algebra]

5.1 Steps 1.1, 1.2, 2.1, 3.1, 4.1, 4.2 and 4.3 establish (i)-(vi) for the explicit model data. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 4.2, step 4.3] ∎

## Remarks

- **"Precession" is a bookkeeping device.** The rotation of $v(t)$ is a statement about three expectation values of three bounded observables of a two-level system; no rotating rigid body, magnetic moment or specific species is asserted. The frequency $\omega=(E_{2}-E_{1})/\hbar$ is fixed by the two energy parameters.
- **Relative versus global phase.** The evolution multiplies the two components by different phases; the relative phase $e^{i\omega t}$ is what moves the observables $X$ and $Y$, while a common phase of the whole vector would change no outcome law. For $\alpha=0$ or $\beta=0$ the preparation is an eigenray and the triple is constant, in agreement with the stationary-state theorem.
- **No detector is modeled.** The probabilities displayed are model outcome laws for the declared observables; no measurement interaction, resolution, efficiency or record is introduced.
