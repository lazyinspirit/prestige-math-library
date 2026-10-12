---
id: def-nrqm-composites-framework-reduced-preparations
aliases: [nrqm-composites-framework-reduced-preparations]
kind: definition
domain: physics
title: "Reduced preparations of a declared composite: the subsystem states of the framework"
status: draft
origin: session
dependency_level: 10
deps: [def-countable-choice, def-nrqm-composites-separable-and-entangled-states, def-nrqm-state-geometry-framework-state-space, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-rank-one-operator-calculus, lem-nrqm-composites-separable-partial-trace, post-nrqm-framework-state-and-composition, thm-trace-class-is-a-two-sided-banach-operator-ideal, def-nrqm-composites-framework-composite-systems-and-local-readouts]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-nrqm-composites-separable-and-entangled-states: mathematical-premise
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The subsystem preparations of a declared composite model of two distinguishable subsystems: the reduced states obtained from the composite preparation by the partial trace, their affineness and continuity, and the product case. The reduction is a mathematical operation on the model description; this definition asserts no discarding process, no measurement, no interaction, no dynamics, and no empirical fact, and it makes no claim that a laboratory procedure realizes the reduction."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3 and Section 6.3.1, printed pages 121-127 (PDF pages 129-135): the density operator of a composite and the reduced density operator obtained by the partial trace"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', Sections 2-3, chapter pages 8-12: measuring one particle of an entangled pair and the resulting state of the other factor"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
verification:
  precheck: n/a
---
## Definition

Adopt the declared composite model of
[[def-nrqm-composites-framework-composite-systems-and-local-readouts]] with
subsystems $A,B$, assigned spaces $H,K$ and composite space
$H\widehat\otimes K$, the state postulate P1
([[post-nrqm-framework-state-and-composition]]) and the state space
$D(H\widehat\otimes K)$ of the framework
([[def-nrqm-state-geometry-framework-state-space]]). Assume the Axiom of
Countable Choice ([[def-countable-choice]]), the hypothesis of the cited
partial-trace and tensor construction results. The following vocabulary is
used by this page.

**(a) Reduced preparations.** For a preparation $\rho\in
D(H\widehat\otimes K)$ of the declared composite, the **reduced preparation
of subsystem $A$** is
$$\rho_{A}:=\operatorname{Tr}_{K}\rho\in D(H),$$
the image of $\rho$ under the partial trace $\operatorname{Tr}_{K}$ of
[[lem-nrqm-composites-separable-partial-trace]] clause (a), characterized by
$$\operatorname{tr}(\rho_{A}X)=\operatorname{tr}\bigl(\rho\,(X\otimes I_{K})\bigr) \qquad\text{for every bounded }X\in\mathcal B(H);$$
the **reduced preparation of subsystem $B$** is
$\rho_{B}:=\operatorname{Tr}_{H}\rho\in D(K)$, characterized by
$\operatorname{tr}(\rho_{B}Y)=\operatorname{tr}(\rho\,(I_{H}\otimes Y))$ for
every bounded $Y\in\mathcal B(K)$. By clause (b) of
[[lem-nrqm-composites-separable-partial-trace]] the partial trace maps density
operators to density operators and is trace preserving, so $\rho_{A}$ and
$\rho_{B}$ are states of the respective subsystems in the sense of the state
space of the framework.

**(b) Affineness and continuity.** The maps $\rho\mapsto\rho_{A}$ and
$\rho\mapsto\rho_{B}$ are affine and continuous in the trace norm:
$\operatorname{Tr}_{K}$ is linear and $\|\operatorname{Tr}_{K}T\|_{1}\le\|T\|_{1}$
by clause (a) of [[lem-nrqm-composites-separable-partial-trace]], with the
trace norm of [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]. In
particular the reduction of a statistical mixture
$\sum_{n}w_{n}\rho_{n}\in D(H\widehat\otimes K)$ of composite preparations is
the corresponding mixture $\sum_{n}w_{n}\rho_{A,n}$ of the reduced
preparations.

**(c) Product preparations reduce to their factors.** If
$\Psi=\kappa(u\otimes v)$ with $\|u\|=\|v\|=1$ and $\rho=T_{\Psi,\Psi}$ is a
product preparation ([[def-nrqm-composites-framework-composite-systems-and-local-readouts]]
clause (b), [[lem-nrqm-composites-hilbert-tensor-construction]]), then
$$T_{u\otimes v,\,u\otimes v}=T_{u,u}\otimes T_{v,v}$$
as bounded operators on $H\widehat\otimes K$, because both sides agree on
every elementary tensor $\kappa(x\otimes y)$ in the sense of
[[lem-nrqm-composites-bounded-tensor-maps]] clause (a) and $\kappa[H\odot K]$
is dense ([[lem-nrqm-composites-hilbert-tensor-construction]] clause (c));
consequently
$$\rho_{A}=T_{u,u},\qquad \rho_{B}=T_{v,v}$$
by clause (c) of [[lem-nrqm-composites-separable-partial-trace]]. Thus a
product preparation is exactly a preparation whose reductions reconstruct it,
$\rho=\rho_{A}\otimes\rho_{B}$, and whose reductions are pure.

**(d) Correlated and uncorrelated preparations.** A composite preparation
$\rho$ is called **uncorrelated** when $\rho=\rho_{A}\otimes\rho_{B}$ and
**correlated** otherwise; a pure preparation
$T_{\Psi,\Psi}$ is called a product preparation when $\Psi$ is a product
vector and **non-product** otherwise
([[def-nrqm-composites-separable-and-entangled-states]] clauses (a), (b)).
These are descriptive names for the displayed algebraic conditions; the
statistical reading of the distinction, including the failure of
factorization of local outcome laws for non-product pure preparations, is a
theorem of this page and is not assumed here.

**(e) Status.** Clauses (a)-(d) fix vocabulary: the subsystem states attached
to a composite preparation by the partial trace. The reduction is a
mathematical operation on the model description. It is not a dynamics, not an
interaction, not a measurement and not a physical discarding of subsystem $B$;
no disturbance of either subsystem and no empirical fact is asserted, and the
question whether a laboratory procedure prepares a state whose reduction is a
prescribed state is a tested identification with uncertainty under P7. The
physical reading of clause (a) — that the reduced preparation reproduces every
local outcome law of subsystem $A$ — is a theorem of this page and is not
assumed here.
