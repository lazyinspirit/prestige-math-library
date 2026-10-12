---
id: pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum
aliases: [nrqm-central-two-body-reduced-threshold-and-total-momentum]
kind: physics-theorem
domain: physics
title: "The declared two-body Coulomb model: reduced-mass decomposition, relative levels as thresholds and the absence of stationary total states"
status: draft
origin: session
dependency_level: 16
deps: [def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-coulomb-energy-observable-and-flow, pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy, pthm-nrqm-central-coulomb-bound-state-radial-distributions, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation, def-nrqm-state-geometry-framework-state-space, thm-nrqm-coulomb-two-body-reduced-mass, lem-nrqm-composites-euclidean-l2-product-unitary, lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-energy-observable-and-flow: physical-result
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  pthm-nrqm-central-coulomb-bound-state-radial-distributions: physical-result
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation: physical-result
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  thm-nrqm-coulomb-two-body-reduced-mass: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional consequence of the declared two-body Coulomb model with masses m1, m2, charge parameter q and coupling kappa: the centre-of-mass/relative decomposition U_Phi H_2 U_Phi^(-1) = T_R (x) I + I (x) C_mu, the identification of the relative problem with the one-centre Coulomb model of mass mu, the relative gross-structure levels E_n^mu = -mu kappa^2/(2 hbar^2 n^2) with degeneracy n^2 within the relative problem, the fact that the total two-body Hamiltonian has no eigenvalues and continuous negative spectrum with the relative levels as thresholds, and the absence of normalisable states of definite total momentum. The item asserts no measured level, no transition, no photon, no external-field or many-body effect and no empirical result; it does not model binding or formation dynamics and does not identify the parameters with measured masses or charges."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1, printed pages 182-185 (equations (8.3)-(8.10): the centre-of-mass and relative coordinates, the reduced mass mu = m_e m_n/(m_e+m_n), the separated Hamiltonians and the product eigenfunctions)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.1-10.2, printed pages 221-225 (the one-particle reduction of the two-body Coulomb problem and the parameters of the relative equation)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.3, printed pages 111-112 (the hydrogen atom as a two-body Coulomb problem with the electron mass in the relative equation)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework postulates P1, P2, P4 and P5 and the readings of the
declared two-body Coulomb model
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (a), (b),
(d) and (e) with declared masses $m_{1},m_{2}>0$, charge parameter $q>0$,
coupling $\kappa=q^{2}/(4\pi\varepsilon_{0})$, reduced mass
$\mu=m_{1}m_{2}/(m_{1}+m_{2})$, the centre-of-mass/relative coordinate map
$\Phi$, its unitary $U_{\Phi}$, the total operator $H_{2}$ on
$H^{2}(\mathbb R^{6};\mathbb C)$, the centre-of-mass kinetic operator $T_{R}$
and the relative operator $C_{\mu}$, together with the one-centre results
[[pthm-nrqm-central-coulomb-energy-observable-and-flow]] and
[[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] applied with mass
parameter $\mu$
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[def-nrqm-observables-framework-observable-and-outcome-law]],
[[def-nrqm-autonomous-dynamics-framework-evolution]]). Assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Then:

(a) the identity $U_{\Phi}H_{2}U_{\Phi}^{-1}=T_{R}\otimes I+I\otimes C_{\mu}$
holds on the tensor product, and $C_{\mu}$ is exactly the one-centre Coulomb
operator of
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (b) with mass
parameter $\mu$; the model's relative problem is therefore the declared
one-centre Coulomb model with parameters $(\hbar,\mu,\kappa)$;

(b) the relative bound energies are
$$\mathcal E_{n}:=-\frac{\mu\kappa^{2}}{2\hbar^{2}n^{2}}=-\frac{\hbar^{2}}{2\mu a_{\mu}^{2}n^{2}},\qquad a_{\mu}:=\frac{\hbar^{2}}{\mu\kappa}\qquad(n\ge1),$$
with model degeneracy $n^{2}$ within the relative problem and the same radial
and position readings as in
[[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] and
[[pthm-nrqm-central-coulomb-bound-state-radial-distributions]] with $m$
replaced by $\mu$;

(c) the total operator $H_{2}$ has no eigenvalues at all:
$\sigma(H_{2})=[-\frac{\mu\kappa^{2}}{2\hbar^{2}},+\infty)$, the whole negative
part $[-\frac{\mu\kappa^{2}}{2\hbar^{2}},0)$ of the spectrum is continuous,
and each relative bound energy $\mathcal E_{n}$ is a threshold of the
continuous spectrum of $H_{2}$ rather than an eigenvalue;

(d) if $\varphi\in L^{2}(\mathbb R^{3}_{R};\mathbb C)$ and $u$ is a relative
bound vector with $C_{\mu}u=\mathcal E_{n}u$, then the product vector
$\varphi\otimes u$ is an eigenvector of $H_{2}$ only if $\varphi=0$; the total
momentum operators $P_{R,j}$ are self-adjoint with no nonzero eigenvectors in
$L^{2}(\mathbb R^{3}_{R};\mathbb C)$, so the model possesses no normalisable
state of definite total momentum, and by the stationary-state criterion no
product of a centre-of-mass state with a relative bound state is a stationary
state of the two-body system;

(e) *Reading.* The reduced mass obeys $\mu=\frac{m_{1}}{1+m_{1}/m_{2}}$ and
satisfies $\mu\le\min\{m_{1},m_{2}\}$ with $\mu\to m_{1}$ as $m_{2}\to\infty$
at fixed $m_{1}$; the model reads the one-centre model of
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (b) with mass
$m_{1}$ as the fixed-nucleus limiting description, and the relative energies
$\mathcal E_{n}$ are strictly weaker in magnitude than the fixed-nucleus
energies $-\frac{m_{1}\kappa^{2}}{2\hbar^{2}n^{2}}$;

(f) *Scope.* The statement is conditional on P1, P2, P4, P5, the declared
two-body model and the cited mathematics; it asserts no measured mass, charge
or level, no transition, photon or radiation statement, no binding or
formation dynamics, and no identification of the model with a laboratory
atom beyond the tested identification of clause (e) of the model definition.

## Facts & Assumptions

**Given:** The declared two-body Coulomb model with $m_{1},m_{2},\hbar>0$, coupling $\kappa>0$, reduced mass $\mu=m_{1}m_{2}/(m_{1}+m_{2})$, the coordinate map $\Phi$, the unitary $U_{\Phi}$, the operators $T_{R}$, $C_{\mu}$ and $H_{2}$; the one-centre results with mass parameter $\mu$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Model data.** $C_{\mu}=-\frac{\hbar^{2}}{2\mu}\Delta_{r}-\frac{\kappa}{|r|}$ on $H^{2}(\mathbb R^{3}_{r};\mathbb C)=D(C_{\mu})$ is exactly the one-centre Coulomb operator of [[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (b) with mass parameter $\mu$; $H_{2}$ with $D(H_{2})=H^{2}(\mathbb R^{6};\mathbb C)$ is self-adjoint, and $\Phi(x_{1},x_{2})=(R,r)$ is the centre-of-mass/relative coordinate map of clause (d) of the same definition ([[thm-nrqm-coulomb-two-body-reduced-mass]]).

[F2] **Two-body decomposition and its spectrum.** $\Phi$ is a linear isomorphism with $|\det\Phi|=1$, $U_{\Phi}$ is unitary, $U_{\Phi}H_{2}U_{\Phi}^{-1}=T_{R}\otimes I+I\otimes C_{\mu}$ under the identification $L^{2}(\mathbb R^{6})\cong L^{2}(\mathbb R^{3}_{R})\widehat\otimes L^{2}(\mathbb R^{3}_{r})$, and $\sigma(H_{2})=[-\frac{\mu\kappa^{2}}{2\hbar^{2}},\infty)$ with no eigenvalues at all: the negative part $[-\frac{\mu\kappa^{2}}{2\hbar^{2}},0)$ consists entirely of continuous spectrum, each relative bound energy $-\frac{\mu\kappa^{2}}{2\hbar^{2}n^{2}}$ is a threshold of the continuous spectrum rather than an eigenvalue, and in particular a relative bound state tensored with any centre-of-mass state is not an eigenvector of $H_{2}$ ([[thm-nrqm-coulomb-two-body-reduced-mass]] clauses (a), (c), (d), [[lem-nrqm-composites-euclidean-l2-product-unitary]]).

[F3] **Total momentum.** The operators $P_{R,j}=\frac{\hbar}{i}\partial_{R_{j}}$ on their maximal domains are self-adjoint and have no nonzero eigenvectors in $L^{2}(\mathbb R^{3}_{R};\mathbb C)$; consequently every eigenvector equation for $H_{2}$ is incompatible with a normalisable state of definite total momentum ([[thm-nrqm-coulomb-two-body-reduced-mass]] clause (e)).

[F4] **One-centre results with mass $\mu$.** The one-centre Coulomb model with parameters $(\hbar,\mu,\kappa)$ has bound energies $\mathcal E_{n}=-\frac{\mu\kappa^{2}}{2\hbar^{2}n^{2}}$, $n\ge1$, the eigenspace at $\mathcal E_{n}$ having dimension $n^{2}$ and consisting of the transported Laguerre solutions, with the radial and position readings of the one-centre items ([[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] clauses (a), (b), [[pthm-nrqm-central-coulomb-bound-state-radial-distributions]] clauses (a), (c)).

[F5] **Stationary states.** For an assigned energy observable, a nonzero vector is an eigenvector if and only if its pure preparation is stationary ([[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clause (c), [[def-nrqm-autonomous-dynamics-framework-evolution]]).

## Proof

**Proof technique:** direct; read the centre-of-mass/relative decomposition and the spectral theorem's two-body clauses in the model, identify the relative operator with the one-centre Coulomb operator of mass $\mu$, and compute the reduced-mass factor.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Decomposition and relative problem] By [F1] and [F2], $U_{\Phi}H_{2}U_{\Phi}^{-1}=T_{R}\otimes I+I\otimes C_{\mu}$ and $C_{\mu}$ is the one-centre Coulomb operator with mass parameter $\mu$; with the one-centre model definition this is (a). Applying [F4] with mass parameter $\mu$ gives the relative bound energies $\mathcal E_{n}=-\frac{\mu\kappa^{2}}{2\hbar^{2}n^{2}}=-\frac{\hbar^{2}}{2\mu a_{\mu}^{2}n^{2}}$ with $a_{\mu}=\hbar^{2}/(\mu\kappa)$, degeneracy $n^{2}$ and the stated radial and position readings; this is (b). [given, F1, F2, F4, algebra]

2.1 [Total spectrum and product vectors] By [F2] the total operator $H_{2}$ has no eigenvalues, $\sigma(H_{2})=[-\frac{\mu\kappa^{2}}{2\hbar^{2}},\infty)$ and the negative part of the spectrum is continuous, each $\mathcal E_{n}$ being a threshold and not an eigenvalue; this is (c). If $\varphi\in L^{2}(\mathbb R^{3}_{R})$ and $C_{\mu}u=\mathcal E_{n}u$ with $u\ne0$, then by the decomposition of step 1.1, $\bigl(T_{R}\otimes I+I\otimes C_{\mu}\bigr)(\varphi\otimes u)=(T_{R}\varphi)\otimes u+\mathcal E_{n}(\varphi\otimes u)$; this equals $\lambda(\varphi\otimes u)$ for some $\lambda$ if and only if $T_{R}\varphi=(\lambda-\mathcal E_{n})\varphi$, and by [F3] the operator $T_{R}$ has no nonzero eigenvectors in $L^{2}(\mathbb R^{3}_{R})$, so $\varphi=0$; moreover by [F3] no nonzero vector in $L^{2}(\mathbb R^{3}_{R})$ is an eigenvector of any $P_{R,j}$, so the model has no normalisable state of definite total momentum. By [F5], an eigenvector equation for $H_{2}$ is necessary and sufficient for a stationary pure preparation, so no product of a centre-of-mass state with a relative bound state is stationary. This is (d). [step 1.1, F2, F3, F5, algebra]

2.2 [Reduced-mass factor] By algebra, $\mu=\frac{m_{1}m_{2}}{m_{1}+m_{2}}=\frac{m_{1}}{1+m_{1}/m_{2}}$, hence $\mu<m_{1}$ and $\mu<m_{2}$, so $\mu\le\min\{m_{1},m_{2}\}$; for fixed $m_{1}$ the expression $\frac{m_{1}}{1+m_{1}/m_{2}}$ tends to $m_{1}$ as $m_{2}\to\infty$. Comparing the relative energies $\mathcal E_{n}=-\frac{\mu\kappa^{2}}{2\hbar^{2}n^{2}}$ with the fixed-nucleus energies $-\frac{m_{1}\kappa^{2}}{2\hbar^{2}n^{2}}$ of the one-centre model with mass $m_{1}$, the relative binding magnitudes are smaller by the factor $\mu/m_{1}=1/(1+m_{1}/m_{2})<1$, which is the reduced-mass correction of the model; this is (e). [step 1.1, F1, algebra]

3.1 [Assembly and scope] Step 1.1 gives (a) and (b), step 2.1 gives (c) and (d) and step 2.2 gives (e); only the declared two-body model, P1, P2, P4, P5 and the cited mathematics were used, so the statement is conditional as recorded in (f) and asserts no empirical identification, measured parameter, transition, photon or formation dynamics. [step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **Why the relative levels are not total energies.** The centre-of-mass
  motion of an isolated two-body system is free in this model, so its operator
  has purely continuous spectrum; a relative bound state is an internal state
  and cannot be a stationary state of the total system. Any statement that a
  hydrogen atom "is" an eigenstate of a two-body Hamiltonian conflicts with
  this decomposition and is not made.
- **Threshold reading.** The bottom of the continuous spectrum,
  $\mathcal E_{1}=-\frac{\mu\kappa^{2}}{2\hbar^{2}}$, coincides with the
  relative ground energy; the model reads it as the continuum threshold of the
  relative problem, and no ionisation or scattering process is described here.
