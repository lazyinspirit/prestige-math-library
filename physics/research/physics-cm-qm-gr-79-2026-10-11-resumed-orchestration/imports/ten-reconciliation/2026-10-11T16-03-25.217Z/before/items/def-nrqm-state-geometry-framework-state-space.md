---
id: def-nrqm-state-geometry-framework-state-space
kind: definition
domain: physics
title: "The state space of the framework: preparations, pure rays and density operators"
status: draft
origin: pipeline
dependency_level: 5
deps: [post-nrqm-framework-state-and-composition, def-nrqm-state-geometry-state-vectors-and-rays, lem-nrqm-state-geometry-ray-to-rank-one-projection, def-nrqm-state-geometry-pure-mixed-states-and-purity, lem-nrqm-state-geometry-purity-criterion, def-countable-choice]
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-state-geometry-purity-criterion: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The state-space vocabulary of the non-relativistic quantum framework in the declared massive-matter sector: given the state postulate's assignment of a nonzero separable complex Hilbert space and its identification of pure preparations with unit rays and general preparations with density operators, this item fixes the readings 'state space', 'state', 'pure state', 'mixed state', 'state assigned to a state vector' and 'purity', and the correspondence between pure preparations and pure states. It adds no physical assumption beyond the state postulate, asserts no dynamics, probability law, measurement model or empirical result, and excludes superselection restrictions, identical-particle sectors and all field or radiation content."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Sections 2.1 and 2.3, printed pages 3-4 and 16-18: states as rays, the density operator of an ensemble, and the convex structure of the set of states"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 1.3.4 and 6.3, printed pages 12 and 121-126: normalized states, pure states and the density operator of an impure state"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Definition

**(a) State space.** Adopt the state postulate [[post-nrqm-framework-state-and-composition]] for a declared system of the declared massive-matter sector, with its assigned nonzero separable complex Hilbert space $H$. The **state space of the system in the model** is the set
$$D(H)=\{\rho:\rho\ \text{is a density operator on}\ H\}$$
of [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]: the self-adjoint positive trace-class operators on $H$ of trace one. A **state** of the system is an element of $D(H)$; this is the geometry vocabulary for the general preparations of clause (iii) of the state postulate. The model's adopted assignment of a state to each preparation is not produced by this definition; it is the content of that postulate.

**(b) Pure and mixed states.** A state is **pure** when it is one of the operators $T_{u,u}$ with $u\in S(H)$, and **mixed** when it is not pure, as in [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]. By [[lem-nrqm-state-geometry-ray-to-rank-one-projection]] the map
$$j:R(H)\to D(H),\qquad j([\psi])=T_{\nu(\psi),\nu(\psi)},$$
is a bijection of the ray space onto the set of pure states; and by clause (ii) of the state postulate the pure preparations are the unit rays of $H$, so the model's pure preparations are exactly its pure states.

**(c) State assigned to a state vector.** For a nonzero vector $\psi\in H^{\times}$ the **state assigned to $\psi$** is the normalized rank-one operator
$$\widehat\rho(\psi)=\frac{T_{\psi,\psi}}{\|\psi\|^{2}}=T_{\nu(\psi),\nu(\psi)}\in D(H),$$
which by [[lem-nrqm-state-geometry-ray-to-rank-one-projection]] depends only on the ray $[\psi]$; clause (ii) of the state postulate assigns the same operator to the pure preparation $[\psi]$. The zero vector is excluded here because $\|\psi\|^{-1}$ is defined only for $\psi\ne0$; no state is assigned to it, in agreement with the state postulate.

**(d) Mixtures and purity.** A **statistical mixture** of preparations with weights is the trace-norm convergent sum of clause (iii) of the state postulate; its value is the corresponding convex combination of states. The **purity** of a state $\rho$ is $\operatorname{tr}(\rho^{2})$, and by [[lem-nrqm-state-geometry-purity-criterion]] a state is pure exactly when its purity equals $1$.

**(e) Status.** Clauses (a)-(d) record the readings of the state postulate in the geometry vocabulary of this page and fix the terminology used by the later pages of the category. The cited mathematical suppliers of the ray-to-state correspondence and of the purity criterion assume the Axiom of Countable Choice ([[def-countable-choice]]), which is carried as a hypothesis of these readings. They adopt no assumption beyond the state postulate and that hypothesis, assert no dynamics, no probability law and no measurement model, and make no empirical claim: in particular, whether a given laboratory preparation is pure or mixed, and whether a given apparatus realizes a prescribed mixture, are physical identifications with uncertainty, governed by the preparation and apparatus assumptions of the framework, not consequences of this definition. Superselection restrictions and identical-particle symmetry sectors, where imposed, are separate assumptions by clause (v) of the state postulate and are not part of the state space fixed here.
