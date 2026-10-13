---
id: post-cm06-ideal-reaction-law
kind: postulate
title: "Adopted ideal-reaction law for holonomic constraints: the d'Alembert condition, its scope and its limits"
status: draft
origin: session
domain: physics
dependency_level: 10
deps: [def-cm06-holonomic-constraint-model, post-cm02-force-superposition, def-cm01-units, def-cm-holonomic-constraint-and-ideal-reactions, lem-cm-constraint-multipliers-and-accelerations, def-euclidean-inner-product]
dependency_roles:
  def-cm06-holonomic-constraint-model: formulation-prerequisite
  post-cm02-force-superposition: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-holonomic-constraint-and-ideal-reactions: formulation-prerequisite
  lem-cm-constraint-multipliers-and-accelerations: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the ideal-reaction law for the holonomic-constraint models of the force branch: along every constrained motion the reaction annihilates every virtual displacement at fixed time, equivalently it is a transpose multiple of the constraint Jacobian. The item records the modelled mechanisms and the exclusions (sliding friction along admissible directions, unilateral and contact-change mechanisms, rank loss, direct active forces on the labels, mechanical capability of the reaction) and separates the virtual-work condition from statements about actual work and energy. No measured value and no conservation claim is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.3.1, Eqs. (2.27)-(2.28) and the constraint-force discussion, printed pages 17-19 (PDF pages 23-25): the pendulum tension and normal reaction as the constraint force, and the multiplier proportional to the tension"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Sections 1.4-1.5, printed pages 19-25 (PDF pages 22-28): an ideal constraint reaction annihilates all admissible virtual displacements at fixed time (d'Alembert's virtual-work hypothesis); time-dependent constraints can do actual work despite zero virtual work; sliding and static friction are separate models"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 2.1-2.2, chapter pages 1-4: the ideal constraint reaction as an adopted frictionless restriction, not an automatic consequence of imposing a constraint"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 1.10.3: d'Alembert's ideal constraint forces and the explicit distinction from stationary augmented-action (vakonomic) formulations"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: n/a
---

## Postulate

Adopt as a physical assumption of the framework, in the setting of
[[def-cm06-holonomic-constraint-model]]:

**(i) The ideal-reaction law.** Along every constrained motion $x:J\to
\mathbb R^{3N}$ of a holonomic-constraint model, with reaction field
$R:J\to\mathbb R^{3N}$, the reaction annihilates every virtual displacement:

$$R(t)\cdot\delta=0\qquad\text{for every }t\in J\text{ and every }\delta\in V\bigl(t,x(t)\bigr)=\ker D_{x}G\bigl(t,x(t)\bigr),$$

the pairing being the Euclidean inner product of $\mathbb R^{3N}$
([[def-euclidean-inner-product]]). This is the **d'Alembert condition** (the
condition of zero virtual work of the reaction) in the sense of
[[def-cm-holonomic-constraint-and-ideal-reactions]]. By the multiplier lemma
[[lem-cm-constraint-multipliers-and-accelerations]], applied at each time with
the surjective Jacobian $D_{x}G(t,x(t))$, the condition holds at time $t$ if
and only if there is a unique $\lambda(t)\in\mathbb R^{k}$ with
$$R(t)=D_{x}G\bigl(t,x(t)\bigr)^{\mathsf T}\lambda(t);$$
this representation is a mathematical consequence of the condition and the
rank hypothesis, not a separate assumption, and the multiplier has dimension
$\mu\ell^{2}\tau^{-2}/\gamma_{\alpha}$ in component $\alpha$
([[def-cm01-units]]). The condition is imposed only along the motions of the
model, and it does not by itself determine $R$: it constrains $R$ at each time
to the $k$-dimensional conormal space, and which element occurs is fixed by
the twice-differentiated constraint through the balance theorem of this page.

**(ii) What is adopted.** Clause (i) is an adopted restriction on the
mechanism that realizes the constraint, not a theorem about bodies, tracks or
contacts. It is the idealization of a mechanism that exerts only the reaction
needed to maintain the constraint, distributed normally to the admissible
directions at each instant; the force branch of
[[post-cm02-force-superposition]] excludes constraint reactions from its force
maps, and this postulate is the additional law that closes the constrained
branch.

**(iii) Intended model identifications.** The framework intends clause (i) to
model, subject to the qualifications of clause (iv): frictionless hinges and
joints; smooth bilateral contacts and tracks; a taut light rod, and a taut
string while it stays taut; and no-slip rolling in the planar holonomic case,
provided the contact can supply the required tangential reaction. Each of
these identifications is an application-level statement made and recorded with
the apparatus; the framework asserts no measurement, no material parameter and
no numerical value here.

**(iv) Limits of the idealization.** The law is **not** asserted for:

1. constraints with dry sliding friction along an admissible direction, whose
   force has a component doing virtual work on admissible displacements — such
   friction must be declared as a separate force contribution with its own
   model;
2. unilateral contacts and mechanisms that can release the constraint (a bead
   on the outside of a surface, a string that can go slack, a block that can
   separate), which are maintained only while the required reaction satisfies
   a one-sided capability condition; where the condition fails, the constraint
   is released and a contact-change model is required, and none is supplied
   here;
3. points where the Jacobian $D_{x}G$ drops rank, which lie outside the
   regularity hypothesis of the datum and outside the representation above;
4. direct active forces on the modelled labels with a component along an
   admissible virtual displacement: these must be declared as additional
   force contributions. Prescribed motion of a support is instead encoded
   in the time-dependent constraint $G$ and is compatible with clause (i);
   its ideal reaction may do actual work as in clause (v). The dynamics and
   energy budget of equipment driving that support are not modelled here;
5. any claim that the mechanism can mechanically supply the computed
   reaction: the law computes the reaction the ideal constraint exerts; whether
   a physical contact, rod or string can supply it (friction cone, sign of a
   tensile force, strength limits, no-slip conditions) is an additional
   premise of an application.

**(v) The law is not a work statement.** Clause (i) concerns virtual
displacements at fixed time; it does not assert that the reaction performs no
work along the motion. For a scleronomic constraint the reaction power
vanishes identically, but for a rheonomic constraint the reaction can do work,
with $R\cdot x'=-\lambda\cdot G_{t}$; the precise statement, its static case
and worked models are the content of the rheonomic-power theorem and the
companion examples of this page.

**(vi) Status and empirical content.** The clause is adopted, not deduced; the
sources record the ideal-reaction condition as an additional physical
hypothesis attached to a constraint, not as a consequence of writing the
constraint down. The passage from clause (i) to the constrained equation of
motion is a theorem with explicit regularity hypotheses, proved on this page.
Whether the idealization is adequate for a given apparatus is decided by
comparing the model's conditional predictions with reported observations under
the stated regime, with the qualifications of clause (iv) carried along;
agreement of such a comparison is evidence about the combined model and
apparatus, not a proof of the idealization.

## Status and scope

- **Adopted, not derived.** The Lagrange-multiplier representation of the
  reaction is mathematical; the identification of the mechanism's reaction
  with the conormal subspace is the adopted part. Without clause (i), the
  constraint and balance equation assign the residual reaction
  $R(t)=\mathsf Mx''(t)-F(t,x(t),x'(t))$ to each chosen constrained curve,
  but do not select which curves are admissible motions. Clause (i) supplies
  the additional conormal condition, and the balance theorem derives the
  resulting ideal dynamics.

- **No conservation claimed.** The ideality says nothing about energy; energy
  statements require the potential presentation of the ambient force map and
  the rheonomic analysis of this page.

- **Empirical qualifications are downstream.** Any application names the
  apparatus, the regime, the constraint datum and the evidence used to assess
  the idealization; the postulate itself carries no observed value.
