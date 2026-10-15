---
id: def-rpm-charge-spin-model
kind: definition
title: "Charged and spinning test-body quantities"
status: published
origin: pipeline
domain: physics
physical_scope: "Definitions of one classical massive charged and spinning test body on a prescribed smooth time-oriented Lorentzian background: constant positive mass and fixed charge/gyromagnetic parameter, proper-time worldline, kinetic momentum, orthogonal polarization and magnetic-moment convention, and prescribed external two-form with local potential. These are ideal model quantities and SI conventions, not a field equation, motion law, measured gyromagnetic value or quantum-spin construction. Self-gravity, self-field evaluation, radiation reaction, collisions, electric dipole forces, field-gradient translational forces and higher multipoles are excluded as stated in the Definition."
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-rpm-spacetime-observer-and-worldline
  - def-gr-smooth-lorentzian-objects
  - def-sr-affine-minkowski-model
  - thm-sr-proper-time-and-observer-decomposition
  - def-em-electromagnetic-tensor
  - def-em-si-conventions
  - lem-rpm-charge-gauge-boundary
dependency_roles:
  def-rpm-spacetime-observer-and-worldline: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  lem-rpm-charge-gauge-boundary: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 lecture-note excerpt"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
      locator: "Author-hosted Chapter 1 excerpt; §1.1 fixed-endpoint Euler–Lagrange variation and §1.2.3, equation (1.20), printed pp. 8–28. Equation (1.20) uses the interaction sign -q A_mu dx^mu; this library adopts +q A(U) with its own electromagnetic tensor convention, so the source is contextual and does not supply the library sign or curved-background assumption. The cited section gives action context only; this definition adopts its charged-body quantities separately and treats the curved field as prescribed model data."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II lecture notes, Chapter 5 “Electromagnetism and Relativity”"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf"
      locator: "Complete 39-page chapter; §§5.3.1–5.3.2 on potentials and the electromagnetic tensor and §5.4.1 on Lorentz force and power, printed pp. 105–116 (chapter PDF pp. 10–22). Source conventions are compared explicitly with the RPM convention."
    - title: "V. Bargmann, L. Michel and V. L. Telegdi, Precession of the Polarization of Particles Moving in a Homogeneous Electromagnetic Field, Physical Review Letters 2 (1959), 435–437"
      url: "https://www.ihes.fr/~vergne/LouisMichel/publications/PhysRevLett.2.435.pdf"
      locator: "Complete author-hosted copy, both PDF pages; the paper introduces the polarization four-vector and rest-frame magnetic-moment parameter. It treats homogeneous flat fields only and does not supply the curved RPM extension."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

Use the smooth, time-oriented Lorentzian background $(M,g,N)$, signature $(-,+,+,+)$, and the distinct chart, observer, congruence, tetrad and worldline meanings of [[def-rpm-spacetime-observer-and-worldline]]. The metric and time orientation are prescribed data, not dynamical variables. A **charged spinning test body** in this definition consists of the following model quantities along a massive worldline $z:I\to M$:

- $I\subseteq\mathbb R$ is an open interval whose parameter is proper time $\tau$ in seconds; $z$ is $C^2$, future-directed and timelike, and $U:=dz/d\tau$ obeys $g(U,U)=-c^2$. The SI conversion constant is $c>0$ metres per second; in a flat specialization use the affine Minkowski model and the proper-time decomposition of [[def-sr-affine-minkowski-model]] and [[thm-sr-proper-time-and-observer-decomposition]].
- The constant rest-mass parameter $m>0$ has unit kilogram, and the constant charge parameter $q\in\mathbb R$ has unit coulomb. They are primitive model parameters; this definition does not derive them from the background field or from another framework.
- The **kinetic four-momentum** is the derived vector $P:=mU$ along $z$, with unit kilogram metre per second. It is distinct from the potential-dependent covector defined in [[lem-rpm-charge-gauge-boundary]].
- The **spin or polarization vector** is a $C^1$ tangent vector field $s(\tau)\in T_{z(\tau)}M$ constrained by $g(s,U)=0$, so it lies in the positive-definite instantaneous rest space $U^\perp$. Its unit is angular momentum, kilogram metre squared per second. This is a classical model vector; no quantization or quantum spin state is defined here.
- The gyromagnetic ratio $g_s\in\mathbb R$ is a dimensionless primitive species parameter. In the instantaneous rest space the model defines the magnetic-moment vector by $\mu=(g_s q/2m)s$, with unit ampere metre squared. No value $g_s=2$ is assumed, and this constitutive relation is not deduced from Lorentz covariance or classical electromagnetism.
- The prescribed external electromagnetic field is a $C^1$ alternating covariant two-tensor $F$ on an open region of $M$, independent of the unknown curve. Define $F^\sharp:T M\to T M$ by $g(F^\sharp(v),w)=F(w,v)$. In the flat specialization, a named inertial chart with $x^0=ct$ and $x^i$ in metres uses $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$, matching [[def-em-electromagnetic-tensor]]. On the curved background, $F$ is only a two-form; at an event its components in a chosen orthonormal tetrad use the same algebraic convention. Such a tetrad is a basis field, not a coordinate chart or an observer congruence, as distinguished in [[def-rpm-spacetime-observer-and-worldline]]. The components in an orthonormal tetrad have tesla units. This is an explicit curved-background model input. The cited EM supplier is a flat Minkowski definition and does not derive a curved field or curved Maxwell system.
- On any open potential domain where a $C^2$ covector field $A$ exists, $F=dA$ with components $F_{ab}=\partial_aA_b-\partial_bA_a$ and $A$ has tesla metre components in the stated coordinates. No global potential is assumed, and no Maxwell equation or constitutive law is imposed here.

This is a test-body model on a fixed background: self-gravity, gravitational backreaction, self-field evaluation, radiation reaction, collisions, electric dipole moments, field-gradient translational forces and higher multipoles are outside this definition. Units follow the framework-local SI conventions of [[def-em-si-conventions]] and do not identify quantities across frameworks.
