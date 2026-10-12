---
id: def-nrqm-scattering-framework-short-range-model
aliases: [nrqm-scattering-framework-short-range-model]
kind: definition
domain: physics
title: "The declared short-range scattering model: state space, potential classes, assigned energy observables, asymptotic vocabulary and units"
status: draft
origin: session
dependency_level: 9
deps: [post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-preparation-and-apparatus, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-state-geometry-framework-state-space, pthm-nrqm-kinematics-spin-s-outcome-laws, lem-nrqm-central-free-operator-differential-identification, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators, def-l-p-space-as-a-quotient-by-null-functions, def-weak-derivative-of-a-locally-integrable-function, def-sobolev-space-wkp-and-its-norm, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  lem-nrqm-central-free-operator-differential-identification: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared short-range scattering model of the pair: the spin-zero massive one-particle state space, an assigned external real potential in one of two declared short-range classes (bounded compact support, or a square-integrable plus bounded decomposition whose shifted free resolvent tail is integrable), the free and interacting assigned energy observables with the Coulomb tail explicitly excluded from the short-range classes, the Born position law, and the wave-operator and asymptotic-completeness vocabulary of the pair. The model is an additional assumption of the pair with a prescribed, not derived, potential; the long-range Coulomb case is a separate declared model. No preparation, no apparatus, no detector and no measured quantity appears."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 12 printed pages 257-284 (PDF pages 265-292): the scattering operator, the S-matrix, cross sections, partial waves and resonant scattering"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 printed pages 247-256 (PDF pages 259-268): abstract scattering theory, incoming and outgoing states, short-range Schroedinger operators and asymptotic completeness"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Chapter 15 printed pages 209-222: scattering theory, partial waves, hard-sphere and low-energy scattering and the Born approximation"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt the state and composition postulate P1, the
observable and probability postulate P2, the autonomous-dynamics postulate P4,
the kinematics and massive-particle model postulate P5, the identical-particle
and spin postulate P6, and the preparation and apparatus discipline P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]],
[[post-nrqm-framework-preparation-and-apparatus]]). Fix a mass parameter
$m>0$ and a spin label $s=0$, so that the framework's one-particle model
[[def-nrqm-kinematics-framework-massive-spin-s-model]] reads its state space as
$H_{0}=L^{2}(\mathbb R^{3};\mathbb C)$ with the pairing linear in the first
argument, its componentwise position family $Q_{1},Q_{2},Q_{3}$, its
componentwise momentum family $P_{1},P_{2},P_{3}$ and the action constant
$\hbar>0$; the spin-zero internal factor carries the trivial representation of
P6. Units are those of [[def-nrqm-framework-quantities-and-units]]: position
is read in metres, momentum in $\mathrm{kg\,m\,s^{-1}}$, energy and potential
energy in joules, and $\hbar$ in $\mathrm{J\,s}$. Assume the Axiom of
Countable Choice and the Axiom of Choice as the choice hypotheses of the cited
mathematical suppliers ([[def-countable-choice]], [[def-axiom-of-choice]]).

**(b) The declared scattering model and its potential classes.** As an
additional model assumption of the pair, adopt the **short-range scattering
model**. Its declared state space is $H_{0}=L^{2}(\mathbb R^{3};\mathbb C)$ of
clause (a), with the position and momentum families of that clause. A
**declared short-range potential** of the model is a real-valued measurable
function $V:\mathbb R^{3}\to\mathbb R$ satisfying either

1. *(compact-support class)* $V$ is bounded, $\|V\|_{\infty}<\infty$, and
   $V=0$ almost everywhere outside some ball
   $B_{\mathrm{supp}}:=\{x:|x|\le R_{\mathrm{supp}}\}$ with
   $R_{\mathrm{supp}}<\infty$; or
2. *(resolvent-tail class)* $V=V_{2}+V_{\mathrm b}$ with real
   $V_{2}\in L^{2}(\mathbb R^{3})$ and real bounded $V_{\mathrm b}$, and, with
   the reduced potential $W:=2mV/\hbar^{2}:=W_{2}+W_{\mathrm b}$ and the
   nondimensional free operator $A_{0}:=-\Delta_{w}$ of clause (c) (so that
   $H^{\mathrm{free}}=(\hbar^{2}/2m)A_{0}$), the function
$$h(r):=\bigl\|M_{W}(A_{0}-i)^{-1}\mathbf 1_{\{|x|\ge r\}}\bigr\|, \qquad r\ge0,$$
   is finite for every $r$ and belongs to $L^{1}([0,\infty))$.

The function $V$ is read as a potential energy in joules; the model asserts no
derivation of $V$ from P5 or from any force law, and an assignment of a
concrete target to $V$ is a tested identification in the sense of clause (iii)
of P7 carrying the corresponding uncertainty. The pure Coulomb potential
$V(x)=-\kappa/|x|$, $\kappa>0$, is **not** in either class: it is a declared
long-range model with its own definition and comparison construction
on this page.

**(c) Assigned energy observables.** Let $\mathcal F_{2}$ be the unitary
Plancherel transform of
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (b), $c:=2\pi^{2}\hbar^{2}/m$, and let
$$H^{\mathrm{free}}:=\mathcal F_{2}^{*}M_{c|\xi|^{2}}\mathcal F_{2},\qquad D(H^{\mathrm{free}}):=\bigl\{f\in H_{0}:|\xi|^{2}\mathcal F_{2}f\in H_{0}\bigr\}$$
be the free operator of that clause with $d=3$ and $b=0$; by
[[lem-nrqm-central-free-operator-differential-identification]] its domain is
the Sobolev space $W^{2,2}(\mathbb R^{3};\mathbb C)$
([[def-sobolev-space-wkp-and-its-norm]]) and
$H^{\mathrm{free}}f=-\frac{\hbar^{2}}{2m}\Delta_{w}f$ with $\Delta_{w}$ the
weak Laplacian ([[def-weak-derivative-of-a-locally-integrable-function]]).
Write $A_{0}:=-\Delta_{w}$ for this **nondimensional free operator**, so that
$H^{\mathrm{free}}=(\hbar^{2}/2m)A_{0}$ on the common domain, and
$W:=2mV/\hbar^{2}$ for the **reduced potential** of a declared potential $V$.
With $M_{V}$ the bounded multiplication operator of clause (a) of the cited
theorem, the **assigned energy observables** of the model with declared
potential $V$ are the free operator $H^{\mathrm{free}}$ and the interacting
operator
$$H:=H^{\mathrm{free}}+M_{V},\qquad D(H):=D(H^{\mathrm{free}}).$$
The declared energy unit is the joule. For the compact-support class,
clause (c) of the cited theorem makes $H$ self-adjoint on $D(H)$ and bounded
below by $-\|V\|_{\infty}$; for the resolvent-tail class, self-adjointness of
$H$ on the same domain is proved on this page and is not presupposed here. The
model adopts $(H^{\mathrm{free}},\mathrm J)$ and $(H,\mathrm J)$ as assigned
sharp observables in the sense of
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a), and
reads their flows by [[def-nrqm-autonomous-dynamics-framework-evolution]]
with $U_{\mathrm{free}}(t)=e^{-itH^{\mathrm{free}}/\hbar}$ and
$U(t)=e^{-itH/\hbar}$.

**(d) Short-range scattering vocabulary.** For a declared short-range
potential $V$ the model declares the **free asymptotic comparison** to be the
pair of strong limits
$$\Omega_{\pm}:=\operatorname*{s-lim}_{t\to\pm\infty}e^{itH/\hbar}e^{-itH^{\mathrm{free}}/\hbar},$$
which are declared **wave operators** of the model when both limits exist, and
declares the **scattering operator** $S:=\Omega_{+}^{*}\Omega_{-}$ when both
exist and $\Omega_{\pm}$ are isometries. The model says that the pair is
**asymptotically complete** for this $V$ when the two ranges agree with the
subspace
$$H_{\mathrm{ac}}(H):=\{\psi\in H_{0}:\mu^{H}_{\psi}\ll\lambda\},$$
where $\mu^{H}_{\psi}(B):=\langle E_{H}(B)\psi,\psi\rangle$ is the scalar
spectral measure of the projection valued measure $E_{H}$ of the self-adjoint
operator $H$, and with
$$H_{\mathrm c}(H):=H_{\mathrm{pp}}(H)^{\perp},\qquad H_{\mathrm{pp}}(H):=\overline{\operatorname{span}}\{\psi\ne0:H\psi=\lambda\psi\ \text{for some }\lambda\in\mathbb R\};$$
here $H_{\mathrm{pp}}(H)$ is the closed linear span of the eigenvectors of $H$.
An **asymptotic free state** of a vector $\psi\in H_{0}$ is a vector
$\psi_{\mathrm{in}}$ such that
$\bigl\|e^{-itH/\hbar}\psi-e^{-itH^{\mathrm{free}}/\hbar}\psi_{\mathrm{in}}\bigr\|\to0$
as $t\to-\infty$; the model reads this limit relation through the
wave-operator identity $\psi=\Omega_{-}\psi_{\mathrm{in}}$ only when the wave
operator exists. These
are declarations of the model under P4; they construct no preparation,
detector or measured count, and no definition of a cross section appears here.

**(e) Status and scope.** Clauses (a)-(d) fix the data of the pair: a declared
state space, two declared potential classes, two assigned energy observables
with their units, and the wave-operator, scattering-operator and
asymptotic-completeness vocabulary. They introduce no assumption beyond P1,
P2, P4, P5, P6, P7 and the cited mathematics; in particular the potential
classes are declarations, not consequences of the framework, and no
identification of $m$, $\hbar$ or $V$ with measured data is asserted. The
existence of the limits, the completeness of the ranges and every cross
section are separate theorems of the pair.

## Remarks

- **Why two classes.** The compact-support class is the minimal physically
  transparent case in which the pair's completeness theorem is proved; the
  resolvent-tail class is the wider class in which the same conclusion is
  proved from an integrable decay hypothesis on the shifted free resolvent
  tail. The Coulomb potential fails both classes and is treated separately
  by the long-range definition of this page.
- **Names.** The symbols $\Omega_{\pm}$, $S$, $H_{\mathrm{ac}}$, $H_{\mathrm{pp}}$
  and $H_{\mathrm c}$ are declared here once and used with exactly this
  meaning on this page and its companion.
