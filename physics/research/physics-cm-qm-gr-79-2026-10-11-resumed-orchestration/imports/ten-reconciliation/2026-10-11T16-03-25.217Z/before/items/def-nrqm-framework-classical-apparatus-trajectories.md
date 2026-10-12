---
id: def-nrqm-framework-classical-apparatus-trajectories
kind: definition
title: "Classical apparatus and preparation trajectories of the framework"
status: draft
origin: session
domain: physics
dependency_level: 5
deps: [def-nrqm-framework-newtonian-spacetime, def-nrqm-framework-inertial-frames, def-vector-valued-derivative-and-integral, thm-chain-rule-for-total-derivatives]
dependency_roles:
  def-nrqm-framework-newtonian-spacetime: formulation-prerequisite
  def-nrqm-framework-inertial-frames: formulation-prerequisite
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The classical trajectories used for apparatus constituents and preparation devices of the framework: twice continuously differentiable curves in the Newtonian arena whose parameter is the frame time. The definition records that these objects describe macroscopic apparatus, that a quantum particle is not assigned a definite worldline between measurements, and that no force law for the apparatus is adopted here; it makes no empirical claim."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.2, printed pages 4-5 (PDF pages 10-11): the trajectory of a particle as a curve of positions as a function of time, and inertial frames"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture notes), Section 1.1, printed pages 3-5 (PDF pages 6-8): the wave-function description and the definite tracks of detected particles"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Definition

**Classical trajectories.** Fix the arena of [[def-nrqm-framework-newtonian-spacetime]] and an inertial frame $F$ of [[def-nrqm-framework-inertial-frames]] with coordinates $(t,x)$. A **classical trajectory** (also called a **worldline** of the model) is a pair $(I,\gamma)$ consisting of a nondegenerate open interval $I\subseteq\mathbb R$ and a map $\gamma:I\to A$ such that:

1. **Parameter condition.** The parameter of the curve is the frame time: $t(\gamma(s))=s$ for every $s\in I$. In the coordinates of the frame this reads $\gamma(s)=(s,x(s))$ with $x:I\to\mathbb R^{3}$.
2. **Regularity.** The coordinate map $x:I\to\mathbb R^{3}$ is of class $C^{2}$, so that the coordinate velocity $w(s):=x'(s)$ and the coordinate acceleration $a(s):=x''(s)$ exist as continuous curves; derivatives are those of [[def-vector-valued-derivative-and-integral]] and the chain rule used to differentiate compositions is [[thm-chain-rule-for-total-derivatives]].

**Apparatus and preparation constituents.** The macroscopic parts of a laboratory arrangement - sources, slits and collimators, shutters, field-generating coils and magnets, screens and detector housings - are described in the model by classical trajectories: to each such constituent and each inertial frame there is assigned a trajectory in the above sense, with the same event of the arena carrying its position at the frame time. A **preparation device** is such a constituent together with the classical trajectory assigned to it.

**Quantum particles.** A trajectory in the above sense is not assigned to a quantum particle of the model: the state of a particle between preparations and detections is given by a state in the sense of the state postulate of this page, and the model asserts no definite trajectory of a particle between measurements. A detected particle event is a localized detection record; its distribution is computed with the model's measurement assumptions, not by reading off a worldline.

**Status.** This definition fixes the mathematical object used for apparatus descriptions and its regularity, and records the two restrictions above: apparatus motion is described classically, and no worldline is assigned to an unmeasured quantum particle. It adopts no force law determining the apparatus trajectories, no interaction between apparatus and particle other than those specified on the pages that state a measurement model, and no empirical claim. The identification of a particular laboratory device with a trajectory of the model is a physical assumption with uncertainty, in the sense of the preparation and apparatus postulate of this page.

## Remarks

- The parameter condition is a genuine restriction: an affine reparametrization $s\mapsto\alpha s+\beta$ of a trajectory again satisfies it only for $\alpha=1$, and free reparametrizations are not part of the model.
- No causal or velocity restriction is imposed on classical trajectories by this definition; the framework is non-relativistic and sets no speed bound. Constraints imposed by a particular apparatus model are stated where that model is introduced.
