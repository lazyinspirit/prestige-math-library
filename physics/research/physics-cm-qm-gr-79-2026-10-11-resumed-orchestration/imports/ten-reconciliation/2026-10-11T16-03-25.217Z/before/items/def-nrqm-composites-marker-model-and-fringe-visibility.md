---
id: def-nrqm-composites-marker-model-and-fringe-visibility
aliases:
- nrqm-composites-marker-model-and-fringe-visibility
kind: definition
domain: physics
title: 'Declared marked two-component model: path components, marker states, phase
  family, detection weights and fringe visibility'
status: draft
origin: session
dependency_level: 11
deps:
- def-countable-choice
- def-nrqm-composites-framework-composite-systems-and-local-readouts
- def-nrqm-composites-framework-reduced-preparations
- def-nrqm-framework-quantities-and-units
- def-nrqm-kinematics-framework-massive-spin-s-model
- def-nrqm-observables-framework-observable-and-outcome-law
- def-nrqm-state-geometry-framework-state-space
- lem-nrqm-composites-bounded-tensor-maps
- lem-nrqm-composites-hilbert-tensor-construction
- post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle
- post-nrqm-framework-preparation-and-apparatus
- pthm-nrqm-kinematics-spin-s-outcome-laws
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
dependency_roles:
  def-countable-choice: mathematical-premise
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
  def-nrqm-composites-framework-reduced-preparations: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
physical_scope: 'A declared model of a two-component interferometer arrangement in
  which a marker subsystem of the model is assigned states correlated with the two
  alternatives: the path components of the particle model, the marker states, the
  phase family of marked preparations, the declared detection bin and its local position-bin
  weight, and the fringe visibility of the declared phase family. The model data are
  declared apparatus inputs in the sense of P7; the definition asserts no interference
  pattern, no measured counts, no decoherence mechanism, no which-path ontology, no
  dynamics and no empirical fact, and it makes no claim that a concrete interferometer
  is described by the model.'
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: 'J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3.1,
      printed pages 125-127 (PDF pages 133-135): a system entangled with an environment
      and the loss of coherence in the reduced density operator'
    url: https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf
  - title: 'B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 ''Multiparticle
      States and Tensor Products'', Sections 1-3, chapter pages 1-12: two-factor states,
      product measurements and the effect of one factor''s state on the statistics
      of the other'
    url: https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf
verification:
  precheck: n/a
---
## Definition

Adopt the framework's composition and state readings for a declared composite
of two distinguishable subsystems
([[def-nrqm-composites-framework-composite-systems-and-local-readouts]],
[[def-nrqm-composites-framework-reduced-preparations]]), the kinematics and
massive-particle model of P5 for a particle subsystem of spin label
$s\in\{0,\tfrac12,1,\tfrac32,\dots\}$ with mass parameter $m>0$ and space
$H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{r})$, $r=2s+1$
([[def-nrqm-kinematics-framework-massive-spin-s-model]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]), and
the preparation and apparatus discipline P7
([[post-nrqm-framework-preparation-and-apparatus]]). Assume the Axiom of
Countable Choice ([[def-countable-choice]]). In the model below the particle
subsystem is $A$ and the marker subsystem is $B$. The following vocabulary is
used by this page.
 
**(a) Position readout of the particle factor.** The model's componentwise
position family has joint spectral projection valued measure $G$ on the Borel
sets of $\mathbb R^{3}$, with
$$G(B)=M_{\mathbf 1_{B}},\qquad \mu^{G}_{\psi}(B)=\|G(B)\psi\|^{2}=\int_{B}\|\psi(x)\|_{\mathbb C^{r}}^{2}\,dx$$
for $\psi\in H_{s}$ of unit norm and Borel $B\subseteq\mathbb R^{3}$, read in
the metre unit of [[def-nrqm-framework-quantities-and-units]]
([[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (b),
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)). A
**declared detection bin** is a Borel set $B\subseteq\mathbb R^{3}$; the
**local position-bin effect** of the declared composite is the bounded effect
$G(B)\otimes I_{K}$ of [[def-nrqm-composites-framework-composite-systems-and-local-readouts]]
clause (d), and the **detection weight** of a preparation $\rho'$ of the
composite is
$$p_{\rho'}(B):=\operatorname{tr}\bigl(\rho'\,(G(B)\otimes I_{K})\bigr)\in[0,1],$$
the reading of clause (iv) of P2 for that local effect.
 
**(b) Declared marked two-component model.** A **declared marked
two-component model** of the arrangement consists of: two unit vectors
$\psi_{1},\psi_{2}\in H_{s}$, the **path components** relative to the declared
pair of alternative path conditions; and two unit vectors $e_{1},e_{2}\in K$,
the **marker states** correlated with the alternatives. The assignment of
$\psi_{1},\psi_{2},e_{1},e_{2}$ and of the alternatives is declared apparatus
data in the sense of P7; it is not computed from the framework, and no element
of this definition asserts that a particle described by the model "took" one
of the two alternatives. A declared marked model is **overlap-normalized**
when $\langle\psi_{1},\psi_{2}\rangle=0$, and **trivially marked** when
$|\langle e_{1},e_{2}\rangle|=1$.
 
**(c) Phase family and marked preparations.** For $\varphi\in\mathbb R$ put
$$\Psi(\varphi):=\frac{1}{\sqrt2}\Bigl(\kappa(\psi_{1}\otimes e_{1})+e^{i\varphi}\kappa(\psi_{2}\otimes e_{2})\Bigr)\in H_{s}\widehat\otimes K,$$
where $\kappa$ is the embedding of [[lem-nrqm-composites-hilbert-tensor-construction]].
Define the **admissible phase set** $I:=\{\varphi\in\mathbb R:\Psi(\varphi)\ne0\}$. It is nonempty: $\Psi(0)+\Psi(\pi)=\sqrt2\,\kappa(\psi_1\otimes e_1)\ne0$, so those two vectors cannot both vanish, using $e^{i\pi}=-1$ from [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]. The **marked preparation at an admissible phase $\varphi\in I$** is the state assigned to the nonzero vector $\Psi(\varphi)$,
$$\rho(\varphi):=\widehat\rho\bigl(\Psi(\varphi)\bigr)=\frac{T_{\Psi(\varphi),\Psi(\varphi)}}{\|\Psi(\varphi)\|^{2}}\in D(H_{s}\widehat\otimes K)$$
([[def-nrqm-state-geometry-framework-state-space]] clause (c)); the phase
$\varphi$ is read in radians (dimensionless). The **marker-carried which-path
preparation** is the statistical mixture
$$\rho_{\mathrm{mix}}:=\tfrac12\,T_{\psi_{1}\otimes e_{1},\,\psi_{1}\otimes e_{1}}+\tfrac12\,T_{\psi_{2}\otimes e_{2},\,\psi_{2}\otimes e_{2}},$$
a preparation of the declared composite by clause (iii) of P1.
 
**(d) Detection weights of the family.** For a declared detection bin $B$ and admissible phase $\varphi\in I$ put
$$p(\varphi)(B):=p_{\rho(\varphi)}(B)=\operatorname{tr}\bigl(\rho(\varphi)(G(B)\otimes I_{K})\bigr),\qquad p_{\mathrm{mix}}(B):=p_{\rho_{\mathrm{mix}}}(B)=\tfrac12\bigl(\langle G(B)\psi_{1},\psi_{1}\rangle+\langle G(B)\psi_{2},\psi_{2}\rangle\bigr).$$
The numbers $p(\varphi)(B)$ and $p_{\mathrm{mix}}(B)$ lie in $[0,1]$; they are
probabilities of the declared model, not measured frequencies.
 
**(e) Fringe visibility.** The **fringe visibility of the declared phase
family at the bin $B$** is
$$V(B):=\frac{\sup_{\varphi\in I}p(\varphi)(B)-\inf_{\varphi\in I}p(\varphi)(B)}{\sup_{\varphi\in I}p(\varphi)(B)+\inf_{\varphi\in I}p(\varphi)(B)}\qquad\text{whenever }\sup_{\varphi\in I}p(\varphi)(B)+\inf_{\varphi\in I}p(\varphi)(B)>0,$$
and is left undefined otherwise; all extrema, including the denominator, are taken over the nonempty admissible phase set $I$ of clause (c). The number $V(B)$ is a property of the declared model
and the declared bin, read as the modulation contrast of the family of
probabilities; it is not a measured visibility and carries no statement about
an apparatus.
 
**(f) Status.** Clauses (a)-(e) fix the model vocabulary. The path components,
marker states and the identification of a concrete apparatus with the declared
model are declared and tested inputs in the sense of clauses (i)-(iii) of P7;
no dynamics, no interaction, no environment, no detector response, no counts
and no empirical result is asserted. In particular the model does not claim
that the marker is measured or read out, that the alternatives are physically
realized, or that the loss of contrast described by $V$ is caused by any
particular process; the quantitative statement about $V$ is the content of a
separate theorem of this page.
