---
id: texp-nrqm-many-body-two-site-no-thermalization
aliases: [ nrqm-many-body-two-site-no-thermalization ]
kind: thought-experiment
domain: physics
title: "A site-localised preparation of the two-site bond model never becomes
  canonical, and its readouts need not take their thermal means"
status: draft
origin: pipeline
dependency_level: 14
deps:
  [
    ex-nrqm-many-body-two-site-bond-thermal-ensemble,
    pthm-nrqm-many-body-unitary-evolution-preserves-entropy,
    lem-nrqm-many-body-two-level-thermal-formulas,
    post-nrqm-many-body-canonical-equilibrium-ensemble,
    def-nrqm-many-body-framework-declared-fixed-n-model,
    def-nrqm-many-body-framework-entropy-and-free-energy,
    def-nrqm-observables-framework-observable-and-outcome-law,
    pthm-nrqm-observables-preparation-moments,
    def-nrqm-autonomous-dynamics-framework-evolution,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators,
    def-projection-valued-measure,
    cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
    cor-trigonometric-parity-and-pythagorean-identity,
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    def-hilbert-space,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  ex-nrqm-many-body-two-site-bond-thermal-ensemble: formulation-prerequisite
  pthm-nrqm-many-body-unitary-evolution-preserves-entropy: physical-result
  lem-nrqm-many-body-two-level-thermal-formulas: mathematical-premise
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  def-nrqm-many-body-framework-declared-fixed-n-model: formulation-prerequisite
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  pthm-nrqm-observables-preparation-moments: physical-result
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A hypothetical exactly solved scenario in the declared two-site
  bond model: the site-localised pure preparation at a site, its unitary
  evolution, the stationary canonical preparation of the adopted ensemble, and
  two readouts - the site occupation and the energy - whose means either do or
  do not coincide with their canonical values at specified times. The scenario
  is a model deduction from the declared preparation and P4; it asserts no
  observed equilibration, no measured occupation or energy, and no statement
  about any laboratory system."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        5.1.2 printed pages 79-81 (PDF pages 87-89) and Section 6.4 printed
        pages 129-131 (PDF pages 137-139): the two-state bond oscillation of a
        double well and the Gibbs distribution of a two-level system"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics
        (HSE, January 10, 2023), Section 1.1.1 printed page 12: the Liouville
        equation, stationary density matrices commuting with H, and the remark
        that the von Neumann entropy is conserved rather than increased"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
verification:
  precheck: pass
---

## Statement

Adopt P1, P2, P4 and P7 in the readings of
[[def-nrqm-autonomous-dynamics-framework-evolution]],
[[def-nrqm-observables-framework-observable-and-outcome-law]] and
[[def-nrqm-many-body-framework-entropy-and-free-energy]], work in the
**two-site bond model** of
[[ex-nrqm-many-body-two-site-bond-thermal-ensemble]] with coupling $t>0$,
sites $|1\rangle,|2\rangle$, bond Hamiltonian
$h=-t(T_{|1\rangle,|2\rangle}+T_{|2\rangle,|1\rangle})$ and eigenbasis
$u_-=(|1\rangle+|2\rangle)/\sqrt2$, $u_+=(|1\rangle-|2\rangle)/\sqrt2$ with $hu_\mp=\mp tu_\mp$, and adopt
the canonical equilibrium postulate
[[post-nrqm-many-body-canonical-equilibrium-ensemble]] at assigned
temperature $T>0$, $\beta=1/(k_BT)$. Consider the hypothetical declared
preparation $\rho(0):=T_{|1\rangle,|1\rangle}$ (the particle localised at
site $1$) evolving by $\rho(\tau)=U(\tau)\rho(0)U(\tau)^*$ with
$U(\tau)=\exp(-i\tau h/\hbar)$. Then:

(a) $\rho(0)\ne\rho_\beta$, and for every $\tau\in\mathbb R$ one has
$\rho(\tau)\ne\rho_\beta$: the unitary evolution of the model never produces
the canonical preparation from this preparation;

(b) the site-$1$ occupation readout $(P_1,1)$ with $P_1:=T_{|1\rangle,|1\rangle}$, assigned in the dimensionless particle-count unit, has the
exact mean
$$\langle P_1\rangle(\tau)=\cos^2\!\Bigl(\frac{t\tau}{\hbar}\Bigr),$$
and $\operatorname{tr}(\rho_\beta P_1)=1/2$; in particular
$\langle P_1\rangle(0)=1\ne1/2$, so at the initial time the readout does not
take its canonical mean;

(c) the energy readout $h$ has the constant mean
$\operatorname{tr}(\rho(\tau)h)=0$ for every $\tau$, while its canonical mean
is $\operatorname{tr}(\rho_\beta h)=-t\tanh(\beta t)<0$; hence the energy
readout never takes its canonical thermal value;

(d) *scope and interpretation*: the scenario is a hypothetical,
exactly-solved model deduction in one declared preparation; it shows that
agreement or disagreement of individual readout means with their canonical
values is not convergence of the preparation to the canonical one, and that
the model's P4 dynamics does not produce the canonical ensemble. It asserts
no observed equilibration or non-equilibration of a sample, no measured
occupation or energy, and no claim about environments or open systems.

## Facts & Assumptions

**Given:** the declared bond model with $t>0$, the canonical preparation $\rho_\beta$, the site-localised preparation $\rho(0)=T_{|1\rangle,|1\rangle}$, the flow $U(\tau)$, and the times $\tau\in\mathbb R$.

[F1] **Spectral flow of the bond Hamiltonian.** For the assigned energy observable $h$ with distinct eigenvalues $\mp t$ and orthonormal eigenvectors $u_\mp$, the spectral projection-valued measure has the atoms $E(\{-t\})=T_{u_-,u_-}$ and $E(\{t\})=T_{u_+,u_+}$, so the flow of [[def-nrqm-autonomous-dynamics-framework-evolution]] clause (b) is $U(\tau)=e^{it\tau/\hbar}T_{u_-,u_-}+e^{-it\tau/\hbar}T_{u_+,u_+}$ and maps $\psi_0=c_-u_-+c_+u_+$ to $c_-e^{it\tau/\hbar}u_-+c_+e^{-it\tau/\hbar}u_+$; the mean of a bounded observable in a pure preparation is $\langle A\psi,\psi\rangle$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]], [[def-nrqm-autonomous-dynamics-framework-evolution]], [[pthm-nrqm-observables-preparation-moments]] clause (a)).

[F2] **Euler formula and parity.** For real $\theta$, $e^{i\theta}=\cos\theta+i\sin\theta$, $\cos(-\theta)=\cos\theta$, $\sin(-\theta)=-\sin\theta$, and $\cos^2\theta+\sin^2\theta=1$, so $(e^{i\theta}+e^{-i\theta})/2=\cos\theta$ and $(e^{i\theta}-e^{-i\theta})/2=i\sin\theta$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[F3] **Canonical data.** The canonical preparation of the bond model is $\rho_\beta=Z^{-1}(T_{u_-,u_-}+e^{-2\beta t}T_{u_+,u_+})$ with $Z=1+e^{-2\beta t}$, its mean energy is $-t\tanh(\beta t)\in(-t,0)$ for every $\beta>0$, and $\operatorname{tr}(\rho_\beta T_{u_-,u_-})\ne\operatorname{tr}(\rho_\beta T_{u_+,u_+})$ ([[ex-nrqm-many-body-two-site-bond-thermal-ensemble]] clauses (b), (c), [[lem-nrqm-many-body-two-level-thermal-formulas]]).

[F4] **Invariance statement.** In the finite-sector class, if $\rho(0)\ne\rho_\beta$ then $\rho(\tau)\ne\rho_\beta$ for every $\tau$ ([[pthm-nrqm-many-body-unitary-evolution-preserves-entropy]] clause (c)).

## Proof

**Proof technique:** direct; express the initial site vector in the energy eigenbasis, insert the supplied two-level flow, and compare the readout means with the canonical data.

**Given:** the data of the statement and [F1]-[F3].

1.1 [The evolved preparation and the site readout] With $\psi_0=|1\rangle=(u_-+u_+)/\sqrt2$, [F1] gives $\psi(\tau)=U(\tau)\psi_0=(e^{i\theta}u_-+e^{-i\theta}u_+)/\sqrt2$, where $\theta:=t\tau/\hbar$; by [F2] and $u_-=(|1\rangle+|2\rangle)/\sqrt2$, $u_+=(|1\rangle-|2\rangle)/\sqrt2$ this equals $\cos\theta\,|1\rangle+i\sin\theta\,|2\rangle$, a unit vector. Since $T_{|1\rangle,|1\rangle}=\tfrac12(I+\sigma_z)$ with $\sigma_z=T_{|1\rangle,|1\rangle}-T_{|2\rangle,|2\rangle}$, and $\sigma_z\psi(\tau)=\cos\theta\,|1\rangle-i\sin\theta\,|2\rangle$, the site-occupation mean is $\langle P_1\rangle(\tau)=|\cos\theta|^2=\cos^2\theta=\cos^2(t\tau/\hbar)$, in particular $\langle P_1\rangle(0)=1$. [F1, F2, algebra]

1.2 [Canonical means and the initial comparison] By [F3], $\operatorname{tr}(\rho_\beta h)=-t\tanh(\beta t)<0$; moreover $\rho_\beta$ is diagonal in the basis $(u_-,u_+)$ with strictly positive diagonal weights, so $\operatorname{tr}(\rho_\beta\sigma_z)=0$ because $\sigma_z$ exchanges the two basis vectors, and $\operatorname{tr}(\rho_\beta P_1)=\tfrac12$; and $\operatorname{tr}(\rho(0)P_1)=1\ne\tfrac12$, so $\rho(0)\ne\rho_\beta$. [F3, algebra]

2.1 [The preparation is never canonical] Step 1.2 shows $\rho(0)\ne\rho_\beta$; applying [F4] to the declared finite-sector model gives $\rho(\tau)\ne\rho_\beta$ for every $\tau\in\mathbb R$, which is (a). [F4, step 1.2, algebra]

2.2 [The energy readout never takes its thermal value] Since $h$ commutes with $U(\tau)$, $\operatorname{tr}(\rho(\tau)h)=\operatorname{tr}(\rho(0)h)=\langle h\Psi,\Psi\rangle$ for $\Psi:=|1\rangle$, and this vanishes because $h\Psi=-t|2\rangle$ is orthogonal to $\Psi$; by step 1.2 the canonical mean is $-t\tanh(\beta t)<0$, so the two values never agree. This proves (c), and step 1.1 proves (b) together with the comparison of step 1.2. [F3, step 1.1, step 1.2, algebra]

3.1 [Conclusion and scope] Steps 2.1-2.2 prove (a)-(c) for the declared hypothetical preparation. The scenario is an exact model deduction from the declared preparation, the bond Hamiltonian and the canonical data; no observed equilibration, measured readout or laboratory system entered, which is (d). [step 2.1, step 2.2] ∎

## Remarks

- **What the scenario shows.** The preparation never equals the canonical
  one, yet the site-occupation readout has the same mean $1/2$ as the
  canonical preparation at the times when $\cos^2(t\tau/\hbar)=1/2$; the
  energy readout meanwhile never takes its canonical mean. Readout
  coincidence is therefore not state convergence, and different readouts
  behave differently under the same unitary flow.
- **Hypothetical status.** No apparatus, sampling or detection model is
  specified; the scenario is a conditional statement about the declared
  model, and any comparison with an experiment would require the declared
  preparation, isolation, detection and sampling models of P7.
