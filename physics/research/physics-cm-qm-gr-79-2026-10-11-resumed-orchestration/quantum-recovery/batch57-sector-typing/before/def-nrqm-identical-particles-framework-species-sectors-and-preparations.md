---
id: def-nrqm-identical-particles-framework-species-sectors-and-preparations
aliases: [nrqm-identical-particles-framework-species-sectors-and-preparations]
kind: definition
domain: physics
title: "Declared species sectors and their preparations: the framework's reading of P6"
status: draft
origin: pipeline
dependency_level: 8
deps: [post-nrqm-framework-state-and-composition, post-nrqm-framework-identical-particles-and-spin, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-framework-quantities-and-units, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, def-hilbert-space, def-countable-choice]
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The framework's vocabulary for identical-particle sectors: a declared species with its one-particle space, spin label and empirical parameters, the adopted symmetric or antisymmetric n-particle sector, its declared sector preparations, and the rule that a bounded quantity of the labelled tensor product is read on the sector only when it preserves the sector. The sector assignment is an adopted model assumption of P6; the definition derives nothing about nature, asserts no spin-statistics theorem, no dynamics, no measurement law beyond P2 and no empirical fact."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1 printed pages 226-230 (PDF pages 234-238): identical particles, the symmetric or antisymmetric state space of a species, and Pauli's exclusion rule as a consequence of the antisymmetric sector"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Chapter 1 Sections 1.1-1.2 pp. 3-6: indistinguishability, symmetric and antisymmetric sectors and the occupation-number representation"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Adopted readings.** Adopt the state and composition postulate
[[post-nrqm-framework-state-and-composition]] (P1) and the
identical-particle and spin postulate
[[post-nrqm-framework-identical-particles-and-spin]] (P6), read with the state
space vocabulary of [[def-nrqm-state-geometry-framework-state-space]] and the
quantities and units of [[def-nrqm-framework-quantities-and-units]]. Assume
the Axiom of Countable Choice ([[def-countable-choice]]), the choice
hypothesis of the cited tensor construction.

**(b) Declared species and sector.** A **declared species sector** of the model
consists of: a nonzero separable complex Hilbert space $H$, the
**one-particle space** of the species, as assigned in P1; a mass parameter
$m>0$ in kg; a spin label $s\in\{0,\tfrac12,1,\tfrac32,\dots\}$ and the
internal factor $V_{s}=\mathbb C^{2s+1}$ of P6 clause (ii), with the
**orbital factor** $H_{\mathrm{sp}}$ the factor carrying no internal degree of
freedom when the one-particle space is given as a completed product
$H_{\mathrm{sp}}\widehat\otimes V_{s}$; for the massive spin-$s$ model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] the one-particle space
is $L^{2}(\mathbb R^{3};\mathbb C^{2s+1})$, whose spin components are the
internal factor of P6 clause (ii) in the reading of that definition; a
**statistics choice**
$\sigma\in\{+,-\}$, where $+$ declares the species **bosonic** and $-$
declares it **fermionic**; and, for a charged species, a charge parameter
$q\in\mathbb R$ in coulombs. The parameters and the statistics choice are
empirical model assignments with their uncertainties, in the sense of P6
clause (iii); no value and no statistics choice is derived by this definition.

**(c) The $n$-particle sector.** Fix $n\ge1$. The **labelled $n$-particle
space** of the species is the $n$-fold completed tensor power
$H^{\otimes n}$ ([[lem-nrqm-composites-hilbert-tensor-construction]]), whose
tensor factors are mathematical labels and not observable particle
identities, equipped with the permutation unitaries $(U_\pi)_{\pi\in S_n}$
and the sector projections $P_\sigma^{(n)}$
([[lem-nrqm-composites-permutation-sector-projections]]), where
$P_+^{(n)}$ is the symmetrizing projection and $P_-^{(n)}$ the alternating
projection. The **$n$-particle sector space** of the declared species is
$$\mathfrak H_n^\sigma:=\operatorname{ran}P_\sigma^{(n)}\ \subseteq\ H^{\otimes n},$$
a closed linear subspace carrying the inner product of $H^{\otimes n}$; on it
every permutation acts by the scalar
$$U_\pi|_{\mathfrak H_n^\sigma}=\operatorname{sgn}_\sigma(\pi)\, \mathrm{id}_{\mathfrak H_n^\sigma},\qquad \operatorname{sgn}_+(\pi)=1,\quad \operatorname{sgn}_-(\pi)=\operatorname{sgn}(\pi),$$
by clause (c) of the cited permutation lemma. For $n=1$ one has
$\mathfrak H_1^+=\mathfrak H_1^-=H$.

**(d) Declared sector preparations.** A **declared sector preparation** of $n$
particles of the species is a state of the framework on the sector space,
that is a density operator
$$\rho\in D(\mathfrak H_n^\sigma)$$
in the sense of [[def-nrqm-state-geometry-pure-mixed-states-and-purity]] and
clause (a) of [[def-nrqm-state-geometry-framework-state-space]], read as the
state assigned to the preparation by P1 clause (iii). A **pure sector
preparation** is a pure state, i.e. the rank-one operator of a unit ray of
$\mathfrak H_n^\sigma$; a statistical mixture of sector preparations is a
convex combination. The sector is part of the declaration of the species: a
model that declares one statistics choice does not switch it within the same
declaration.

**(e) Sector quantities.** Let $A$ be a linear operator on the labelled space
$H^{\otimes n}$ with domain $D(A)$. The model reads $A$ as a **quantity of the
declared sector** only when $A$ **preserves the sector**,
$$P_\sigma^{(n)}D(A)\subseteq D(A),\qquad A\,\mathfrak H_n^\sigma\subseteq \mathfrak H_n^\sigma,$$
in which case the **sector restriction** $A_\sigma:=A|_{\mathfrak H_n^\sigma}$
with domain $D(A)\cap\mathfrak H_n^\sigma$ is part of the declaration and is
the quantity actually read on sector preparations; a bounded quantity
preserves the sector exactly when it commutes with $P_\sigma^{(n)}$. An
operator that does not preserve the sector is not read on the sector; in
particular no quantity of a single labelled factor is assumed to define a
quantity of the sector unless it preserves it. If $A_\sigma$ is self-adjoint,
its outcome law in a sector preparation is the law of
[[def-nrqm-observables-framework-observable-and-outcome-law]] read on
$\mathfrak H_n^\sigma$.

**(f) Status and scope.** Clauses (a)-(e) fix the vocabulary with which the
framework reads the adopted P6 assumptions: they add no assumption to P1 and
P6, and the permutation invariance of sector preparations and of sector
readouts is a conditional consequence proved on this page
([[pthm-nrqm-identical-particles-permutation-invariance]]), not a content of
this definition. The definition asserts no spin-statistics theorem, no
dynamics, no measurement instrument and no empirical fact; whether a
laboratory ensemble is described by a declared sector preparation is a tested
identification with uncertainty under the preparation and apparatus postulate
P7, not a consequence of the declaration.

## Remarks

- **Labels versus particles.** The tensor factors of $H^{\otimes n}$ are
  bookkeeping slots, not particle identities: by clause (c) the model assigns
  the same sector state to every relabelling, and clause (f) of P6 records
  that the labels carry no physical content.
- **Why the sector restriction is stated for operators.** The rule of clause
  (e) is the one recorded in the owner direction for permutation sectors: a
  bounded quantity restricts to a sector only when it preserves the sector.
  Position and momentum operators of a single labelled factor do not preserve
  either sector, which is why they are not read as sector quantities.
