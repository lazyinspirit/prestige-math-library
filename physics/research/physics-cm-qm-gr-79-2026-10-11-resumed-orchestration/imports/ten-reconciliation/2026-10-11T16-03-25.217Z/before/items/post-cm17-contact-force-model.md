---
id: post-cm17-contact-force-model
kind: postulate
title: "Adopted force model of the continuum branch: continuous body forces and Cauchy contact tractions"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [def-cm17-traction-and-stress, def-cm17-continuum-body-and-units, post-cm17-continuum-kinematic-model, def-cm01-units, def-cm-continuum-motion, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm17-traction-and-stress: formulation-prerequisite
  def-cm17-continuum-body-and-units: formulation-prerequisite
  post-cm17-continuum-kinematic-model: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-continuum-motion: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the force description of the continuum branch: a continuous body-force field per unit mass on the swept region and a continuous traction field, force per unit area, depending on a contact surface only through its unit normal at the point (Cauchy's hypothesis). The postulate excludes couple stresses, nonlocal contact interactions, curvature-dependent contact forces, and electromagnetic, thermal or chemical forces; it asserts no balance law, no constitutive relation and no measured value."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 4.3 (body forces, contact forces and Cauchy's hypothesis), Section 4.4 (the traction on a surface)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.2 (bulk and surface forces and the stress tensor)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt for every model of the continuum kinematic branch
([[post-cm17-continuum-kinematic-model]]) the following description of the
forces acting on the body, read in the fixed inertial frame and with the
dimensions of [[def-cm17-continuum-body-and-units]].

**(i) Body forces.** There is a continuous field
$b:U\to\mathbb R^3$ on an open set $U$ containing the swept region of the
motion over its time window, the **body force per unit mass**, of dimension
$[b]=\ell\tau^{-2}$ ([[def-cm01-units]]). The body force exerted on an
admissible region $D$ is $\int_D\rho b\,dx$, of dimension $\mu\ell\tau^{-2}$
(force).

**(ii) Contact forces and Cauchy's hypothesis.** There is a traction field
$t:U\times S^2\to\mathbb R^3$ of class $C^1$, hence continuous, in the sense of
[[def-cm17-traction-and-stress]], force per unit area, with dimension
$[t]=\mu\ell^{-1}\tau^{-2}$. The definition of a traction field already
encodes **Cauchy's hypothesis**: the contact force exerted across a surface at
a point depends on the surface only through the value of its unit normal at
that point, so two surfaces through the same point with the same unit normal
experience the same traction. The contact force exerted across the boundary of
an admissible region $D$ is $\int_{\partial D}t(y,\nu_D(y))\,dS(y)$, with the
outward unit normal $\nu_D$ and the surface integral of the current-region
class. No dependence of $t$ on the curvature of the surface, on higher
derivatives of the surface, or on the distant shape of the body is introduced;
no surface couples, no traction singularities and no contact forces on curves
are introduced.

**(iii) Exclusions.** This force description is **not** adopted, and no
statement of this page covers: couple stresses or distributions of surface
couples; contact interactions that depend on the geometry of the surface
beyond its tangent plane at the point (thin boundary layers, capillarity at
contact lines, adhesion laws with curvature dependence); nonlocal contact
interactions; electromagnetic, thermal, chemical and radiative forces; and
body couples. A model with such features requires an extended force
description and its own balance laws.

**(iv) Status.** These are adopted assumptions about how forces are
represented in the model. No balance of forces is asserted by this postulate;
the balance principles are the subject of the next postulate, and the
existence of a representing stress matrix is a conditional conclusion of the
theorem that applies Cauchy's tetrahedron argument to those balances. The
fields $b$ and $t$ are model quantities; no measured force is asserted, and
the frame-covariance requirement of the kinematic branch applies to them.
