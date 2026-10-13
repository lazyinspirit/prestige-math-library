---
id: rem-cm10-orientation-charts
kind: remark
title: "The global orientation and its charts: Euler angles, the quaternion double cover and singularities of parametrizations"
status: draft
origin: session
domain: physics
dependency_level: 9
deps: [post-cm10-rigid-material, def-cm10-rigid-body-configuration, def-cm10-angular-velocity, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold, def-cm-euler-angle-parametrization-and-heavy-top-system, lem-cm-coordinate-rotation-matrices, lem-cm-euler-angle-angular-velocity, def-cm-quaternion-rotation-map-and-cover, lem-cm-body-angular-velocity-of-a-rotation-path, thm-cm-quaternion-lift-exists-and-is-unique, def-countable-choice, def-cm01-units, thm-smooth-inverse-function-theorem-on-manifolds]
dependency_roles:
  post-cm10-rigid-material: physical-assumption
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold: mathematical-premise
  def-cm-euler-angle-parametrization-and-heavy-top-system: mathematical-premise
  lem-cm-coordinate-rotation-matrices: mathematical-premise
  lem-cm-euler-angle-angular-velocity: mathematical-premise
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  lem-cm-body-angular-velocity-of-a-rotation-path: mathematical-premise
  thm-cm-quaternion-lift-exists-and-is-unique: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cm01-units: formulation-prerequisite
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope and interpretation of the orientation data of the rigid-material model branch of [[post-cm10-rigid-material]]: the physical orientation is the global element $R\\in SO(3)$ of the configuration, while Euler angles are local coordinates with poles and quaternion lifts are global two-valued representations whose sign is an initial choice. The item records the singularities and the bookkeeping conventions of these descriptions and their physical reading; it asserts no dynamics, no measured orientation and no preferred chart."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.5, printed pages 62-65 (PDF pages 68-71): the three ordered rotations defining the Euler angles, the caution about the order and frame conventions, and the local character of the parametrization"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.5, Eqs. (4.70)-(4.82), chapter pages 15-19 (PDF pages 69-73): Euler angles as local coordinates of the rigid-body configuration, with the general warning that the angular-velocity components are not coordinate derivatives"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Section 2.7 and Section 2.12: Euler-angle charts, their singular character at the poles, and quaternions as an alternative global description of orientation"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: n/a
---

## The physical orientation and its charts

For the model of [[post-cm10-rigid-material]], the orientation of the body at
time $t$ is the element $R(t)\in SO(3)$ of the configuration
([[def-cm10-rigid-body-configuration]]): a global object attached to the
placement, unique for a nondegenerate labeling. As a subset of
$M_3(\mathbb R)\cong\mathbb R^9$, the group $SO(3)$ is a compact
three-dimensional embedded submanifold and a matrix group
([[lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold]] clauses
1 and 3, [[lem-cm-so3-is-a-matrix-group]]). Three descriptions of it are used
in the literature and on the pages that follow, and they must not be
conflated.

**Euler angles are local coordinates.** The Euler-angle parametrization of
[[def-cm-euler-angle-parametrization-and-heavy-top-system]] is
$$\Theta:\mathbb R\times(0,\pi)\times\mathbb R\longrightarrow SO(3),\qquad \Theta(\varphi,\theta,\psi)=R_z(\varphi)R_y(\theta)R_z(\psi),$$
with the coordinate rotation matrices of
[[lem-cm-coordinate-rotation-matrices]], and its domain is deliberately
restricted to $\theta\in(0,\pi)$ so that $\sin\theta>0$. On that domain it is
a local parametrisation with smooth local inverse. Indeed the angular-velocity formula in [[lem-cm-euler-angle-angular-velocity]] identifies $\Theta^{\mathsf T}d\Theta$ with the skew matrix of $M(\varphi,\theta,\psi)(d\varphi,d\theta,d\psi)^{\mathsf T}$, where $$M=\begin{pmatrix}-\sin\theta\cos\psi&\sin\psi&0\\\sin\theta\sin\psi&\cos\psi&0\\\cos\theta&0&1\end{pmatrix},\qquad\det M=-\sin\theta\ne0.$$ Thus $d\Theta$ has zero kernel. Its domain and $SO(3)$ both have dimension three, so it is a tangent-space isomorphism. The map is smooth because its matrix entries are finite products of smooth sines and cosines, and [[thm-smooth-inverse-function-theorem-on-manifolds]] gives a smooth local inverse; strictly speaking that inverse is the coordinate chart. The boundary values $\theta=0$ and $\theta=\pi$ (the **poles**)
are excluded because there the dependence on the angles collapses: by the
composition law $R_z(a)R_z(b)=R_z(a+b)$ the value at $\theta=0$ depends on
$\varphi+\psi$ alone. A smooth orientation path of the model can pass through
a pole orientation, including $I_3$. The restricted chart has no coordinate
value there, and the extended formula has no local inverse at a pole:
at $\theta=0$, the distinct triples $(\varphi+s,0,\psi-s)$ give the same
rotation for arbitrarily small nonzero $s$. This does not exclude a
continuous pathwise choice of unrestricted parameters; for example,
$(\varphi,\theta,\psi)=(0,t,0)$ represents the smooth path $R_y(t)$ through
$t=0$. The companion example computes the deficient differential at a pole.
Euler angles are auxiliary local coordinates for the global orientation.
The angular-velocity components are
not the coordinate derivatives of these angles
([[lem-cm-euler-angle-angular-velocity]] is the separate relation, and the
model's angular velocity is defined intrinsically in
[[def-cm10-angular-velocity]]).

**Quaternion lifts are two-valued, not a single-valued chart.** Under the
countable choice hypothesis recorded in
[[def-cm-quaternion-rotation-map-and-cover]], the unit quaternions $S^3$
double-cover $SO(3)$ through the rotation map $\rho$: every orientation has
exactly two preimages $q$ and $-q$. Given a $C^1$ rotation path $R$ and an
initial unit quaternion $q_0$ with $\rho(q_0)=R(t_0)$, there is exactly one
$C^1$ lift $q$ with $q(t_0)=q_0$, and every $C^1$ lift is either $q$ or $-q$
([[thm-cm-quaternion-lift-exists-and-is-unique]]). The sign of a lift is thus
an initial choice that the orientation path itself does not determine, and no
construction on these pages chooses a preferred sign. A quaternion path is a
global description of a rotation path in the sense that it avoids the Euler
pole, but it represents each orientation twice; it is not a chart of $SO(3)$
and does not select a canonical sign.

## Consequences and conventions for consumers

- **Charts are auxiliary.** A consumer that differentiates with respect to
  Euler angles must restrict to $\theta\in(0,\pi)$, state the convention of
  the three ordered rotations, and not divide by quantities that vanish at the
  poles without an explicit limiting argument. The model's orientation
  $R(t)$ and its angular velocity $\omega(t)$ are defined without any chart
  ([[def-cm10-angular-velocity]]), and chart-based formulas are read as
  expressions of these objects on the chart domain.

- **The double cover is a mathematical statement, not spin.** The two-to-one
  correspondence between unit quaternions and orientations, and the sign
  ambiguity of a lift, are mathematical facts about $SO(3)$ and its covering
  ([[def-cm-quaternion-rotation-map-and-cover]],
  [[thm-cm-quaternion-lift-exists-and-is-unique]]). They carry no physical
  claim about quantum spin, identical particles, relativistic observers or
  any measurement; such statements belong to other frameworks and are not
  imported here.

- **Degenerate labelings.** For a labeling supported on a line the placement
  does not determine $R$ ([[def-cm10-rigid-body-configuration]] clause (c)),
  so the orientation is not observable from the placed material points alone.
  A consumer treating such a body must state which additional data fix the
  orientation, or restrict to the nondegenerate case.

- **Empirical status.** The orientation of any concrete body is estimated by
  instruments with their own calibration and uncertainty; this item records
  no measured orientation and no measurement procedure. The model quantities
  are conditional data of the model, exactly as in
  [[post-cm10-rigid-material]].
