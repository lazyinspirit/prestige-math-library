---
id: def-cm10-angular-velocity
kind: definition
title: "Body and spatial angular velocity of a rigid-material motion, and the material velocity field"
status: published
origin: session
domain: physics
dependency_level: 8
deps: [post-cm10-rigid-material, def-cm10-rigid-body-configuration, def-cm-rigid-placement-and-body-angular-velocity, lem-cm-skew-matrix-cross-product-correspondence, lem-cm-matrix-curve-derivative-rules, def-cm-special-orthogonal-group, def-cm01-units, def-euclidean-inner-product, def-derivative, def-interval]
dependency_roles:
  post-cm10-rigid-material: formulation-prerequisite
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm-rigid-placement-and-body-angular-velocity: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  lem-cm-matrix-curve-derivative-rules: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The angular velocity of the rigid-material model branch of [[post-cm10-rigid-material]] along a $C^{2}$ motion in one inertial frame: the body angular velocity $\\omega$ characterised by $R^{\\mathsf T}R'=[\\omega]_\\times$, the spatial angular velocity $\\omega_{\\mathrm{s}}=R\\omega$, the spatial form of the material velocity field and its uniqueness, and the instantaneous rotation axis when $\\omega_{\\mathrm{s}}\\neq0$, with the dimension $\\tau^{-1}$ read in radians per second under the radian convention. The item is kinematic: it asserts no torque, no equation of motion for $\\omega$ and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.1.1, Eqs. (3.5)-(3.10), printed pages 47-49 (PDF pages 53-55): the antisymmetric body-frame rate matrix, the angular-velocity vector acting by cross product, and the relation between body-frame and space-frame rate vectors"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.1, Eqs. (4.1)-(4.10), chapter pages 1-4 (PDF pages 55-58): the moving orthonormal basis, the skew angular-velocity matrix and the transport theorem for a vector of constant body components"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Section 2.2, Eqs. (2.14)-(2.30): the orientation path, the body and space angular-velocity vectors extracted from the skew rate matrix, and the warning about conventions"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 2 Sections 2.1-2.2, printed pages 29-33 (PDF pages 32-36): the rotating-frame relation between the time derivative in the space frame and the body frame, with the angular-velocity vector"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Definition

Adopt the model, inertial frame and notation of
[[post-cm10-rigid-material]] and [[def-cm10-rigid-body-configuration]], and
let a motion $x(t,\rho)=c(t)+R(t)\rho$ have configuration path $(c,R)$ of
class $C^2$ on the time window $I_0$ ([[def-interval]]).

**(a) Body angular velocity.** By
[[def-cm-rigid-placement-and-body-angular-velocity]], the matrix
$R(t)^{\mathsf T}R'(t)$ is skew-symmetric at every $t\in I_0$
([[lem-cm-matrix-curve-derivative-rules]] clause 3), and by
[[lem-cm-skew-matrix-cross-product-correspondence]] clause 2 there is exactly
one vector $\omega(t)\in\mathbb R^3$ with
$$R(t)^{\mathsf T}R'(t)=[\omega(t)]_\times .$$
The map $\omega:I_0\to\mathbb R^3$ is the **body angular velocity** of the
motion. Since $R$ is of class $C^2$, the entries of $R^{\mathsf T}R'$ are
differentiable and hence $\omega$ is of class $C^1$; its derivative is the
**body angular acceleration**. The dimension is $[\omega]=\tau^{-1}$
([[def-cm01-units]]), read in radians per second under the radian convention,
in which angles are dimensionless.

**(b) Spatial angular velocity.** The **spatial angular velocity** of the
motion is
$$\omega_{\mathrm s}(t):=R(t)\omega(t)\in\mathbb R^3,$$
of the same dimension $\tau^{-1}$. By the conjugation clause of
[[lem-cm-skew-matrix-cross-product-correspondence]],
$R'(t)R(t)^{\mathsf T}=[\omega_{\mathrm s}(t)]_\times$; this is the
space-frame rate matrix of the motion.

**(c) Material velocity field.** For every material label $\rho$,
$$\partial_tx(t,\rho)=c'(t)+R(t)\bigl(\omega(t)\times\rho\bigr),$$
because $R'(t)=R(t)[\omega(t)]_\times$ and
$[\omega]_\times\rho=\omega\times\rho$
([[def-cm-rigid-placement-and-body-angular-velocity]],
[[lem-cm-skew-matrix-cross-product-correspondence]] clause 1). Writing
$p=x(t,\rho)$ for the spatial position of the label and using
$R(\omega\times\rho)=(R\omega)\times(R\rho)$, the same identity reads
$$\partial_tx(t,\rho)=c'(t)+\omega_{\mathrm s}(t)\times\bigl(p-c(t)\bigr):$$
the material velocity field is that of a translation $c'(t)$ composed with a
rotation of angular velocity $\omega_{\mathrm s}(t)$ about the centre of mass
$c(t)$. The motion is a **pure translation** at time $t$ exactly when
$\omega(t)=0$, equivalently $R'(t)=0$; then every material velocity equals
$c'(t)$.

**(d) Uniqueness of the velocity data.** The velocity field determines
$c'(t)$ and $\omega_{\mathrm s}(t)$ uniquely: if a motion has material
velocity field $p\mapsto v(t,p)=c'(t)+\omega_{\mathrm s}(t)\times(p-c(t))$,
then evaluating at $p=c(t)$ gives $c'(t)=v(t,c(t))$, and for $u\in\mathbb R^3$
the difference $v(t,c(t)+u)-v(t,c(t))=\omega_{\mathrm s}(t)\times u$ is a
linear map of $u$; testing it on two linearly independent vectors determines
$\omega_{\mathrm s}(t)$ by the injectivity clause of
[[lem-cm-skew-matrix-cross-product-correspondence]], and then
$\omega(t)=R(t)^{\mathsf T}\omega_{\mathrm s}(t)$. The pair
$\bigl(c'(t),\omega_{\mathrm s}(t)\bigr)$ is therefore an intrinsic
description of the velocity field; the body angular velocity is its
description in the body-fixed frame, and the choice of reference coordinates
is part of the model data fixed in [[post-cm10-rigid-material]].

**(e) Instantaneous rotation axis.** If $\omega_{\mathrm s}(t)\neq0$, the line
$$\bigl\{c(t)+s\,\omega_{\mathrm s}(t):s\in\mathbb R\bigr\}$$
is the **instantaneous rotation axis** of the motion at time $t$: it is the
set of spatial points whose material velocity equals $c'(t)$, as follows from
$\omega_{\mathrm s}\times(\omega_{\mathrm s}s)=0$. Conversely, write
$w=\omega_{\mathrm s}(t)$ and $z=p-c(t)$. If $w\times z=0$, choose a
coordinate $i$ with $w_i\neq0$; the cross-product coordinate equations
([[lem-cm-skew-matrix-cross-product-correspondence]] clause 1) give
$w_i z_j=w_j z_i$ for every $j$, hence $z=(z_i/w_i)w$.
This proves that the zero relative-velocity set is exactly the displayed
line. The velocity field is
constant on lines parallel to $\omega_{\mathrm s}(t)$ and rotates about this
axis; if also $c'(t)=0$ at that instant, every point of the axis is
instantaneously at rest and the motion is an instantaneous rotation about it.
No claim is made that the axis is fixed in time or in space.

**(f) Conventions and scope.** The convention fixed here is the body-fixed
one of the cited mathematical definition: $\Omega=R^{\mathsf T}R'=[\omega]_\times$
and $R'=R\Omega$. A consumer using the space-fixed convention must state the
change, which is the rotation by $R$ recorded in (b); the two vectors agree
only when $R(t)$ fixes $\omega(t)$. Both vectors are kinematic quantities of
the motion: no torque, no angular momentum and no equation of motion for
$\omega$ is asserted, and no measured angular velocity is recorded. The
behaviour of $\omega$ under a change of inertial frame is proved in the
frame-covariance theorem of this page.

## Remarks

- **The angular velocity is a vector of the spatial space in (b) and of the
  body in (a).** The body vector is the coordinate description of the spatial
  vector in the body-fixed frame; the identity
  $\omega_{\mathrm s}=R\omega$ is the translation between the two
  descriptions. The distinction matters when a consumer compares the model
  with data attached to the body, such as principal axes.

- **What is used and what is not.** Only differentiability of $R$ is needed
  for existence and uniqueness of $\omega$; the twice differentiability in
  clause (a) is used for the angular acceleration and, on the dynamics pages
  of the track, for rate balances. No smoothness beyond $C^2$ across the
  time window is asserted.

- **Degenerate shapes.** Clauses (c)-(e) concern the motion of the body as a
  placement and do not use the mass distribution. The mass distribution
  enters through the inertia data of [[def-cm10-inertia-tensor]] and through
  the angular-momentum identity of [[pthm-cm10-kinetic-splitting]], where a
  mass distribution supported on a line produces a non-invertible inertia
  matrix.
