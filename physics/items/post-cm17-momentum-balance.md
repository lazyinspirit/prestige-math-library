---
id: post-cm17-momentum-balance
kind: postulate
title: "Adopted balance principles of the continuum model: force and couple-free
  torque balance on every admissible region"
status: draft
origin: session
domain: physics
dependency_level: 12
deps:
  - post-cm17-contact-force-model
  - post-cm17-continuum-kinematic-model
  - def-cm17-density-and-mass
  - def-cm17-traction-and-stress
  - def-cm17-continuum-body-and-units
  - def-bounded-piecewise-c-one-euclidean-domain
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - def-cm-euclidean-spatial-calculus
  - def-cm-continuum-motion
  - def-cm01-units
  - def-cross-product-in-r3
  - def-countable-choice
dependency_roles:
  post-cm17-contact-force-model: formulation-prerequisite
  post-cm17-continuum-kinematic-model: formulation-prerequisite
  def-cm17-density-and-mass: formulation-prerequisite
  def-cm17-traction-and-stress: formulation-prerequisite
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-bounded-piecewise-c-one-euclidean-domain: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-cm-continuum-motion: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the balance principles of the continuum branch in
  force form: on every admissible bounded piecewise C-one region inside the
  current region, the surface traction resultant balances minus the volume
  integral of the body force minus the inertial term rho a, and the
  corresponding torque about any fixed origin balances likewise with no body or
  surface couples. The postulate excludes couple stresses, electromagnetic
  momentum exchange, mass sources and non-inertial frames; it asserts no
  constitutive law, no existence of a stress matrix and no measured value."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the
        Mechanics of Solids (MIT, 1988, revised 2020), Sections 4.4-4.6 (balance
        of linear and angular momentum and the field equations)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September
        1, 2026 complete volume), Section 7.2 (Eq. (7.25) and the
        bulk-plus-surface force balance of a continuum element)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Postulate

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the Lebesgue volume and surface integration used in these general balances. The pointwise field and open-region predicates are unaffected.

Adopt for every model of the continuum branch, together with the force
description of [[post-cm17-contact-force-model]] and the fields of
[[def-cm17-density-and-mass]] and [[def-cm17-traction-and-stress]], the
following balance principles.

**(i) Setting.** Let $U\subseteq\mathbb R\times\mathbb R^3$ be an open set
containing the swept region of the motion over its time window. The density
$\rho$, the spatial velocity $u$ and the material acceleration $a=D_tu$ are
continuous on $U$ ([[def-cm-euclidean-spatial-calculus]],
[[def-cm-continuum-motion]]), and $b$ and $t$ are the body-force and traction
fields of [[post-cm17-contact-force-model]]. For $s$ in the time window the
current region is $\Omega_s=\chi_s(B)$.

**(ii) Admissible regions.** An **admissible region at time $s$** is a
bounded piecewise $C^1$ Euclidean domain with a specified finite presentation
with $D\subseteq\Omega_s$, whose closure lies in the open domain of the fields at time $s$
([[def-bounded-piecewise-c-one-euclidean-domain]]), with outward unit normal
$\nu_D$ off its edge set and boundary term the sum of the surface integrals
over its faces ([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

**(iii) Balance of forces.** For every time $s$ and every admissible region
$D$ at time $s$,

$$\int_{\partial D}t\bigl(s,y,\nu_D(y)\bigr)\,dS(y)+\int_D\bigl(\rho b-\rho a\bigr)(s,y)\,dy=0 . \tag{F}$$

Read as a momentum balance, (F) says that the resultant contact force on $D$
equals $\int_D\rho a\,dy-\int_D\rho b\,dy$; equivalently contact plus body force equals $\int_D\rho a\,dy$, i.e. the total applied force
equals the mass times acceleration of the region, with the inertial term
written as a volume force.

**(iv) Balance of torques, with no couples.** For every time $s$, every
admissible region $D$ at time $s$, and every fixed origin $x_0\in\mathbb R^3$,

$$\int_{\partial D}(y-x_0)\times t\bigl(s,y,\nu_D(y)\bigr)\,dS(y)+\int_D(y-x_0)\times\bigl(\rho b-\rho a\bigr)(s,y)\,dy=0 , \tag{T}$$

the cross product being that of $\mathbb R^3$ ([[def-cross-product-in-r3]]).
The balance is imposed with the **same** volume force density $\rho b-\rho a$
as in (F); there are no body couples and no surface couples. Since the
identity holds for every origin, the choice of $x_0$ is immaterial given (F).

**(v) Exclusions and status.** These principles are **not** adopted for: bodies
with couple stresses or surface couples; systems exchanging momentum with
electromagnetic or thermal fields (the momentum of those fields would have to
be accounted for separately); bodies with mass sources; and descriptions in
non-inertial frames (where additional inertial terms appear and are excluded
by the choice of the fixed inertial frame of
[[def-cm17-continuum-body-and-units]]). The principles are adopted model
assumptions, not derived here; comparisons of predicted motions with
observations can support them under stated apparatus assumptions, and no
measurement is asserted or used by this postulate. In particular, the
existence of a representing stress matrix, its continuity and its symmetry
are **not** assumed here; they are conditional conclusions of the theorem
items of this page, whose arguments apply the balance principles exactly as
stated.
