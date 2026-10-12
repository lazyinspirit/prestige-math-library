---
id: def-nrqm-interference-two-path-preparation-and-detection-model
aliases: [nrqm-interference-two-path-preparation-and-detection-model]
kind: definition
domain: physics
title: "The declared two-path preparation model and its ideal detection bins"
status: draft
origin: session
dependency_level: 9
deps: [post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-preparation-and-apparatus, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-state-geometry-state-vectors-and-rays, lem-nrqm-state-geometry-density-set-convex-and-complete, pthm-nrqm-kinematics-spin-s-outcome-laws, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  lem-nrqm-state-geometry-density-set-convex-and-complete: mathematical-premise
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A declared preparation and detection model for a two-path interference arrangement in the massive spin-s model of the framework: two declared nonzero path-component classes of the model state space, the coherent preparations of a declared relative phase, the declared incoherent (which-path) preparations with declared weights, and the ideal detection-bin reading of the model's joint position observable. The model is a declaration of the apparatus and preparation assignment in the sense of the preparation and apparatus postulate P7; it asserts no derivation of the path decomposition from the framework, no claim that any particle took a definite path, no detector response or sampling model, no experiment and no empirical result. Spatial bins are regions of R^3; a lower-dimensional material screen and any marginal or flux reduction of a state to it are separate models, not claimed here."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.2 printed pages 5-6 and Section 1.4 printed page 15 (PDF page 23): amplitudes for alternative paths, the superposition of path amplitudes and ideal measurements"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 1.1-1.3, printed pages 3-18 (PDF pages 6-21): the wave function, the Born probability law and the two-slit interference probability density"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt the state and composition postulate P1, the
observable and probability postulate P2, the kinematics and one-particle model
postulate P5, the identical-particle and spin postulate P6, and the preparation
and apparatus discipline P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]],
[[post-nrqm-framework-preparation-and-apparatus]]). Fix a spin label
$s\in\{0,\tfrac12,1,\tfrac32,\dots\}$, put $r:=2s+1$, and fix a mass parameter
$m>0$. The state space is $H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{r})$ of
almost-everywhere classes with the pairing linear in the first argument
([[def-nrqm-kinematics-framework-massive-spin-s-model]],
[[def-l-p-space-as-a-quotient-by-null-functions]]). The position assignment is
the model's componentwise position family $Q_{1},Q_{2},Q_{3}$, whose joint
spectral projection-valued measure is $G(B)=M_{\mathbf 1_{B}}$ on the Borel
sets of $\mathbb R^{3}$ and whose outcome law in a pure preparation of the unit
vector $\psi$ is
$$\mu^{G}_{\psi}(B)=\|G(B)\psi\|^{2}=\int_{B}\|\psi(x)\|_{\mathbb C^{r}}^{2}\,dx$$
([[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (b),
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b));
the unit read from $G$ is the position unit of the model's quantity
conventions, the metre, and the outcome sets $B$ are read as subsets of
$\mathbb R^{3}$ ([[def-nrqm-framework-quantities-and-units]]). Assume the Axiom
of Countable Choice and the Axiom of Choice as the choice hypotheses of the
cited suppliers ([[def-countable-choice]], [[def-axiom-of-choice]]).

**(b) Declared two-path assignment.** A **declared two-path preparation model**
of the apparatus is the assignment of two nonzero classes
$\psi_{1},\psi_{2}\in H_{s}$, called the **path components** of the model with
respect to the declared pair of alternative path conditions of the apparatus,
together with a declared **relative phase** $\varphi\in\mathbb R$ and a declared
**weight** $w\in[0,1]$. The assignment of $\psi_{1},\psi_{2}$, $\varphi$ and
$w$ is part of the preparation model in the sense of clause (i) of P7
([[post-nrqm-framework-preparation-and-apparatus]]): it is declared, not
computed from the framework, and no item of this page asserts that a particle
described by the model "took" one of the two paths.

**(c) Coherent preparation.** The declared two-path model is **admissible at
phase $\varphi$** when $\psi_{1}+e^{i\varphi}\psi_{2}\ne0$ in $H_{s}$. When it
is admissible, the **coherent preparation** of relative phase $\varphi$ is the
pure preparation
$$\rho_{\mathrm{coh}}(\varphi):=\widehat\rho\bigl(\psi_{1}+e^{i\varphi}\psi_{2}\bigr),$$
the normalized rank-one operator of the nonzero vector
$\psi_{1}+e^{i\varphi}\psi_{2}$
([[def-nrqm-state-geometry-pure-mixed-states-and-purity]]). It is a state of
the model, and the relative phase $\varphi$ is read in radians (dimensionless);
a common phase of $\psi_{1}$ and $\psi_{2}$ is immaterial because it acts on
the vector $\psi_{1}+e^{i\varphi}\psi_{2}$ as a global phase
([[def-nrqm-state-geometry-state-vectors-and-rays]]).

**(d) Incoherent preparation.** For a declared weight $w\in[0,1]$ the
**incoherent preparation**, or **which-path preparation**, of the model is
$$\rho_{\mathrm{mix}}(w):=w\,\widehat\rho(\psi_{1})+(1-w)\,\widehat\rho(\psi_{2}).$$
It is a state of the model: the normalized rank-one operators are states, and
$D(H_{s})$ is closed under finite real convex combinations
([[lem-nrqm-state-geometry-density-set-convex-and-complete]] clause (a),
[[def-nrqm-state-geometry-framework-state-space]]). The weight $w$ is a
declared preparation weight, not an outcome probability.

**(e) Ideal detection bins.** A **declared ideal detector** of the model is a
finite family $\mathcal B=(B_{a})_{a=1}^{m}$ of pairwise disjoint Borel subsets
of $\mathbb R^{3}$ with $\bigcup_{a}B_{a}=\mathbb R^{3}$; the **ideal bin
probabilities** of a preparation $\rho\in D(H_{s})$ are the numbers
$$p_{a}(\rho):=\mu^{G}_{\rho}(B_{a})=\operatorname{tr}\bigl(\rho\,G(B_{a})\bigr)\qquad(a=1,\dots,m),$$
the reading of clause (ii) of P2 for the joint position assignment
([[post-nrqm-framework-observable-and-probability]],
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)). By
clause (b) of P2 these numbers are nonnegative, are at most one, and satisfy
$\sum_{a}p_{a}(\rho)=1$. A single **declared bin** $B$ is the two-element ideal
detector $(B,\mathbb R^{3}\setminus B)$; its probability is $\mu^{G}_{\rho}(B)$.
The positive Borel set $\{x:\|\psi(x)\|_{\mathbb C^{r}}^{2}>0\}$ of a pure
preparation with unit vector $\psi$ is its **ideal support**, read only almost
everywhere.

**(f) Status and scope.** Clauses (a)-(e) fix the model data of the pair:
the framework reading, the declared path components and preparations, and the
ideal bin reading of the position observable. They adopt no assumption beyond
P1, P2, P5, P6, P7 and the cited mathematics; the declaration of
$\psi_{1},\psi_{2},\varphi,w$ and of the bins is an apparatus-model input, and
the claim that a concrete two-slit apparatus realizes a particular such
declaration is a tested identification with uncertainty under P7(iii). The
declared bins are subsets of $\mathbb R^{3}$; the model does not claim that a
physical screen of lower dimension is literally a spatial region, and a
marginal, coarse-graining or flux reduction of a state to a screen coordinate
or surface is a separate detection model, not supplied here. No dynamics, no
recorded-event response, no sampling model and no empirical result is
asserted; the recorded-event and sampling models are declared separately on
this page.

## Remarks

- **Classes, not functions.** The path components are almost-everywhere
  classes; pointwise values such as $\psi_{j}(x)$ are read only through the
  densities and pairings of the cited items, and the interference identities of
  the page hold up to null sets.
- **"Path" is a declared decomposition.** The phrase "path component" names an
  element of the declared decomposition of the preparation model. The pair
  proves laws of the declared coherent and incoherent preparations; it does not
  assert which-path ontology, does not assign a trajectory to the particle, and
  does not assume that the two components are orthogonal or have disjoint ideal
  supports. Whether a preparation model with an orthogonal or disjoint-support
  decomposition describes a given apparatus is a physical identification under
  P7.
- **Units.** The outcome sets are sets of position with unit metre, the
  probability numbers are dimensionless, and the phase is read in radians
  ([[def-nrqm-framework-quantities-and-units]]).
