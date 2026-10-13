---
id: ex-nrqm-angular-momentum-spin-half-directional-probabilities
aliases: [nrqm-angular-momentum-spin-half-directional-probabilities]
kind: example
domain: physics
title: "Spin-half outcome probabilities along an arbitrary direction: the Bloch parametrization and worked cases"
status: published
origin: session
dependency_level: 11
deps: [def-axiom-of-choice, def-countable-choice, def-inner-product-space, def-nrqm-angular-momentum-framework-angular-momentum-observables, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-observable-and-probability, post-nrqm-framework-state-and-composition, prop-nrqm-orbital-and-spin-finite-spin-matrices, pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws: physical-result
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "An exact computation inside the massive spin-half model of the framework: the Bloch parametrization of a unit internal spinor, the Born probabilities of the directional spin component n·S, and worked cases including the coordinate directions and the state e_{1/2}. The example uses the model's own outcome law; it involves no dynamics, no magnetic coupling, no apparatus model, no measurement record and no empirical value."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin One-Half, Bras, Kets, and Operators', Section 4, printed pages 16-19: the directional spin operator n·sigma, its eigenstates and the spin probability formula"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 7.4.2, printed pages 161-164 (PDF pages 169-172): spin-half states, the expectation vector of the Pauli matrices and directional probabilities"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---
## Example

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the kinematics and massive-particle model postulate P5 and the
internal-factor assignment of the spin postulate P6, read for the massive
spin-$\tfrac12$ model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] with mass parameter
$m>0$, and the angular momentum readings of
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]). Fix a unit vector
$f\in L^{2}(\mathbb R^{3};\mathbb C)$ and a unit internal spinor
$v=(v_{1},v_{2})\in\mathbb C^{2}$, and put
$$\langle\boldsymbol\sigma\rangle_{v}:=\bigl(2\operatorname{Re}(v_{1}\overline{v_{2}}),\ -2\operatorname{Im}(v_{1}\overline{v_{2}}),\ |v_{1}|^{2}-|v_{2}|^{2}\bigr)\in\mathbb R^{3}.$$
Let $\psi:=f\otimes v\in H_{1/2}$ and let $S_{n}=\sum_{i}n_{i}S_{i}$ be the
directional spin of
[[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]]. Then:

(i) $\psi$ is a unit vector, $|\langle\boldsymbol\sigma\rangle_{v}|=1$, and
for every unit $n\in\mathbb R^{3}$
$$\mu^{S_{n}}_{\psi}\Bigl(\Bigl\{\tfrac{\hbar}{2}\Bigr\}\Bigr)=\frac{1+n\cdot\langle\boldsymbol\sigma\rangle_{v}}{2},\qquad \mu^{S_{n}}_{\psi}\Bigl(\Bigl\{-\tfrac{\hbar}{2}\Bigr\}\Bigr)=\frac{1-n\cdot\langle\boldsymbol\sigma\rangle_{v}}{2};$$

(ii) for the parametrization
$v=\bigl(e^{i\varphi}\cos(\theta/2),\ \sin(\theta/2)\bigr)$ with
$\theta\in[0,\pi]$ and $\varphi\in\mathbb R$ one has
$\langle\boldsymbol\sigma\rangle_{v}=(\sin\theta\cos\varphi,\ -\sin\theta\sin\varphi,\ \cos\theta)$,
and for the coordinate directions
$$\mu^{S_{3}}_{\psi}\Bigl(\Bigl\{\pm\tfrac{\hbar}{2}\Bigr\}\Bigr)=\cos^{2}\frac{\theta}{2},\ \sin^{2}\frac{\theta}{2},\qquad \mu^{S_{1}}_{\psi}\Bigl(\Bigl\{\pm\tfrac{\hbar}{2}\Bigr\}\Bigr)=\frac{1\pm\sin\theta\cos\varphi}{2};$$

(iii) for the basis state $v=e_{1/2}$ (the case $\theta=0$) the component
$S_{3}$ has the laws $\mu^{S_{3}}_{\psi}(\{\hbar/2\})=1$ and
$\mu^{S_{3}}_{\psi}(\{-\hbar/2\})=0$, while
$\mu^{S_{1}}_{\psi}(\{\pm\hbar/2\})=\tfrac12$ for both signs; and for
$v=(e_{1/2}+e_{-1/2})/\sqrt2$ the component $S_{1}$ has
$\mu^{S_{1}}_{\psi}(\{\hbar/2\})=1$ and
$\mu^{S_{1}}_{\psi}(\{-\hbar/2\})=0$.

All quantities are model probabilities for the pure preparation $[\psi]$; no
measurement procedure, apparatus, calibration or empirical frequency is
asserted, and the example makes no claim that a laboratory device realizes
the observable $S_{n}$.

## Facts & Assumptions

**Given:** The postulates P1, P2, P5 and P6 in the stated readings; the
spin-half model with mass parameter $m>0$; the unit spatial factor $f$; the
unit internal spinor $v$; the vector $\psi=f\otimes v$; a unit direction
$n$; angles $\theta,\varphi$.

[F1] **Spin matrices of the model.** In the internal basis
$(e_{1/2},e_{-1/2})$ one has $S_{i}=\tfrac{\hbar}{2}\sigma_{i}$ with the Pauli
matrices $\sigma_{1}=\sigma_{x}$, $\sigma_{2}=\sigma_{y}$,
$\sigma_{3}=\sigma_{z}$, and $S_{1}=S_{x}$, $S_{2}=S_{y}$, $S_{3}=S_{z}$
([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e),
[[def-nrqm-kinematics-framework-massive-spin-s-model]] clause (c),
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]]
clause (c)).

[F2] **Directional spectrum and law.** For every unit $n$ the operator
$S_{n}$ has the simple internal eigenvalues $\pm\tfrac{\hbar}{2}$ with
eigenline projections $P_{\pm}=\tfrac12(I\pm n\cdot\sigma)$ read fibrewise,
and for every unit vector $\psi\in H_{1/2}$
$\mu^{S_{n}}_{\psi}(\{\pm\tfrac{\hbar}{2}\})=\langle P_{\pm}\psi,\psi\rangle$
([[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]] clauses (a),(c),
[[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clauses (a),(b),
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)).

[F3] **Preparations and the product form.** $\psi=f\otimes v$ is the
componentwise spinor $\psi(x)=f(x)v$ with $\|\psi\|=\|f\|\,\|v\|=1$, a unit
vector of the model's state space, hence a pure preparation
([[def-nrqm-kinematics-framework-massive-spin-s-model]] clause (a),
[[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]],
[[def-inner-product-space]]).

## Verification

**Proof technique:** direct; evaluate the Pauli matrices on the spinor in the
product preparation and read the two projection weights.

**Given:** The data of the example and [F1]-[F3].

1.1 [Bloch vector] Writing $v=(v_{1},v_{2})$ with $|v_{1}|^{2}+|v_{2}|^{2}=1$ and $z:=v_{1}\overline{v_{2}}$, the Pauli actions in [F1] and the inner product linear in the first argument give $\langle\sigma_{1}v,v\rangle=z+\overline z=2\operatorname{Re}z$, while $\langle\sigma_{2}v,v\rangle=-i\overline z+iz=i(z-\overline z)=-2\operatorname{Im}z$; also $\langle\sigma_{3}v,v\rangle=|v_{1}|^{2}-|v_{2}|^{2}$. Thus $\langle\boldsymbol\sigma\rangle_v$ is the vector of Pauli expectations, and $|\langle\boldsymbol\sigma\rangle_v|^{2}=4|v_{1}v_{2}|^{2}+(|v_{1}|^{2}-|v_{2}|^{2})^{2}=(|v_{1}|^{2}+|v_{2}|^{2})^{2}=1$. [F1, given, algebra]

2.1 [Directional law] For the product vector $\psi=f\otimes v$ and a unit $n$, the fibrewise projection acts as $P_{\pm}\psi=f\otimes\tfrac12(I\pm n\cdot\sigma)v$, so by [F2], $\mu^{S_{n}}_{\psi}(\{\pm\hbar/2\})=\tfrac12(1\pm\langle(n\cdot\sigma)v,v\rangle)=\tfrac12(1\pm n\cdot\langle\boldsymbol\sigma\rangle_{v})$ using step 1.1; this is (i). [step 1.1, F2, F3, algebra]

3.1 [Parametrized spinor] For $v=(e^{i\varphi}\cos(\theta/2),\sin(\theta/2))$ one has $v_{1}\overline{v_{2}}=e^{i\varphi}\cos(\theta/2)\sin(\theta/2)$, so $2\operatorname{Re}(v_{1}\overline{v_{2}})=\sin\theta\cos\varphi$, $-2\operatorname{Im}(v_{1}\overline{v_{2}})=-\sin\theta\sin\varphi$ and $|v_{1}|^{2}-|v_{2}|^{2}=\cos^{2}(\theta/2)-\sin^{2}(\theta/2)=\cos\theta$; substituting $n=e_{3}$ and $n=e_{1}$ into step 2.1 gives the coordinate probabilities of (ii). [step 2.1, algebra]

4.1 [Worked states] For $v=e_{1/2}$ the parametrization has $\theta=0$, so $\langle\boldsymbol\sigma\rangle_{v}=(0,0,1)$ and step 2.1 gives $\mu^{S_{3}}_{\psi}(\{\hbar/2\})=1$, $\mu^{S_{3}}_{\psi}(\{-\hbar/2\})=0$ and $\mu^{S_{1}}_{\psi}(\{\pm\hbar/2\})=\tfrac12$; for $v=(e_{1/2}+e_{-1/2})/\sqrt2$ one has $\langle\boldsymbol\sigma\rangle_{v}=(1,0,0)$ by step 1.1, and step 2.1 with $n=e_{1}$ gives $\mu^{S_{1}}_{\psi}(\{\hbar/2\})=1$ and $\mu^{S_{1}}_{\psi}(\{-\hbar/2\})=0$, which is (iii). [step 1.1, step 2.1, F1, algebra] ∎

## Remarks

- **One preparation, all directions.** The Bloch vector determines the whole
  family of directional laws of this preparation. These marginal laws alone
  do not specify joint probabilities for measurements in two directions.
  Such probabilities require a declared joint or sequential measurement
  model, including any state change between measurements; none is supplied
  here. No impossibility of all joint probability laws is asserted.
- **No apparatus.** The probabilities are Born weights of the model; whether
  a given Stern-Gerlach or optical apparatus realizes $S_{n}$ is a tested
  identification under the preparation and apparatus postulate P7 and is not
  established here.
