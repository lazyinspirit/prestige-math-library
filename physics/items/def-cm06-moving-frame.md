---
id: def-cm06-moving-frame
kind: definition
title: "Moving spatial charts of an inertial frame: rotating and translating coordinates, angular velocity and inertial terms"
status: published
origin: session
domain: physics
dependency_level: 7
deps: [post-cm01-frames, post-cm01-worldlines, def-cm01-velocity-acceleration, def-cm01-units, lem-cm-moving-frame-acceleration-identity, lem-cm-skew-matrix-cross-product-correspondence, def-cm-special-orthogonal-group, def-cross-product-in-r3, def-vector-valued-derivative-and-integral, def-ck-euclidean-maps-and-diffeomorphisms, def-interval]
dependency_roles:
  post-cm01-frames: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  lem-cm-moving-frame-acceleration-identity: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Definition of the moving spatial charts of the Newtonian model: a translating and rotating coordinate description attached to a fixed inertial frame, its reference curve and rotation, the coordinate curves, velocities and accelerations read in it, the angular velocity of the chart in a stated convention, and the four inertial terms. In general the moving chart is not an inertial frame; when its rotation is constant and its reference curve is affine, its restriction is an adapted chart of another inertial frame. A chart is not an observer congruence. The item asserts no force law, no equation of motion and no measured value."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Sections 6.1-6.2, printed pages 93-95 (PDF pages 99-101): rotating frames, the angular velocity of the rotating axes, Eq. (6.4) for the acceleration transfer, and the Coriolis, centrifugal and Euler terms of Eq. (6.5)"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 4.6, chapter pages 21-23 (PDF pages 76-78): the general frame-transfer formulas (4.86)-(4.90), the angular velocity of the moving frame, and the four inertial-force terms of (4.92)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.1.1, printed pages 47-49 (PDF pages 53-55): moving orthonormal bases, the antisymmetric matrix R^T Rdot and the angular velocity vector in the body convention"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 2.2, printed pages 33-35 (PDF pages 36-38), Eqs. (2.19)-(2.24): fixed and rotating spatial bases, angular velocity, and the rotating-coordinate acceleration terms; the affine spacetime chart and translating origin used here are specified by the local definitions and mathematical suppliers"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Definition

Fix one inertial frame $F=\bigl(o,u,(e_{1},e_{2},e_{3})\bigr)$ of the model with
adapted coordinates $(t,x)$ ([[post-cm01-frames]]); lengths and times are read
in metres and seconds ([[def-cm01-units]]). A **moving spatial chart** of this
frame is the following kinematic data:

**(a) Data.** A nondegenerate interval $I\subseteq\mathbb R$
([[def-interval]]) together with maps
$$c:I\longrightarrow\mathbb R^{3},\qquad R:I\longrightarrow SO(3),$$
the matrix $R(t)$ being identified with its nine entries, such that all
components of $c$ and all entries of $R$ have continuous second derivatives on
$I$ ([[def-ck-euclidean-maps-and-diffeomorphisms]],
[[def-vector-valued-derivative-and-integral]]); we then say that $c$ and $R$
are of class $C^{2}$. The components $c_j(t)$ are spatial coordinates, with
$[c_j]=\ell$, and the entries of $R(t)$ are dimensionless, with
$[R_{ij}]=1$; the moving coordinates $y_j$ also have dimension $\ell$
([[def-cm01-units]]). The map
$$\Phi:I\times\mathbb R^{3}\longrightarrow I\times\mathbb R^{3},\qquad \Phi(t,y):=\bigl(t,\,R(t)y+c(t)\bigr),$$
is the **coordinate change of the chart**: for $t\in I$ it identifies the
triple $y\in\mathbb R^{3}$ with the point of the inertial chart whose
coordinates are $x=R(t)y+c(t)$. The curve $t\mapsto c(t)$ is the **reference
curve** of the chart and the family $R(t)$ its **rotation**; the chart is
**attached to** the fixed inertial frame, and its data are kinematic data of
the description, not new physical objects.

**(b) Coordinate curves, velocities and accelerations.** Let $J\subseteq I$
be an interval with nonempty interior and let $x:J\to\mathbb R^{3}$ be a
curve of class $C^{2}$ in the inertial chart (for instance the coordinate
curve of a worldline in the sense of [[def-cm01-velocity-acceleration]]). The
**coordinate curve of $x$ in the moving chart** is
$$y(t):=R(t)^{\mathsf T}\bigl(x(t)-c(t)\bigr)\qquad(t\in J);$$
its **coordinate velocity** and **coordinate acceleration in the moving
chart** are the componentwise derivatives $\dot y:=y'$ and $\ddot y:=y''$
([[def-vector-valued-derivative-and-integral]]), of dimensions
$\ell\tau^{-1}$ and $\ell\tau^{-2}$. These are chart-local notions: because
the chart is generally time-dependent, these need not be the coordinate
velocity and acceleration of an inertial frame. If $R$ is constant and $c$ is
affine on $I$, they agree on $I$ with the corresponding quantities in the
inertial frame whose adapted chart restricts to this chart. Their relation to
the fixed frame $F$ is the kinematic identity of the cited mathematical
supplier, not an identification with the quantities read in $F$.

**(c) Angular velocity of the chart.** Put $\Omega(t):=R(t)^{\mathsf T}R'(t)$.
By [[lem-cm-moving-frame-acceleration-identity]] clause 1, $\Omega(t)$ is
skew-symmetric for every $t$, and by clause 2 there is a unique
$\omega(t)\in\mathbb R^{3}$ with
$$\Omega(t)z=\omega(t)\times z\qquad(z\in\mathbb R^{3}),$$
the cross product being that of [[def-cross-product-in-r3]]. The vector
$\omega(t)$ is the **angular velocity of the chart** in the convention
$\Omega=R^{\mathsf T}R'$ (the **body convention**), of dimension
$\tau^{-1}$ read in radians per second; its components are read off the three
entries of $\Omega$ above the diagonal. With the opposite convention
$\Omega_{s}:=R'R^{\mathsf T}$ one has
$\Omega_{s}=R\,\Omega\,R^{\mathsf T}=[R\omega]_{\times}$ by clause 3 of
[[lem-cm-skew-matrix-cross-product-correspondence]] and
[[def-cm-special-orthogonal-group]], so the representing vector of the
opposite convention is $R(t)\omega(t)$: the two conventions differ by the
rotation, and every statement of this framework names the one it uses. This
definition uses the body convention throughout.

**(d) Inertial terms.** For $(t,y,\dot y)\in I\times\mathbb R^{3}\times\mathbb R^{3}$
define
$$\tau(t,y,\dot y):=-\Bigl(2\,\omega(t)\times\dot y+\omega'(t)\times y+\omega(t)\times\bigl(\omega(t)\times y\bigr)+R(t)^{\mathsf T}c''(t)\Bigr),$$
of dimension $\ell\tau^{-2}$; $\tau$ is the field of **inertial terms** of the
chart, per unit mass in the sense that the moving-chart equation of the next
item carries the factor $m\tau$ for a label of mass $m$. Its four additive
contributions are named, in order: the **Coriolis term** $-2\omega\times\dot y$,
the **Euler term** $-\omega'\times y$, the **centrifugal term**
$-\omega\times(\omega\times y)$, and the **translational term**
$-R^{\mathsf T}c''$. The names are conventions attached to the displayed
terms; the definition attaches no force to them, and clause (f) records their
kinematic status.

**(e) Curves at rest in the chart.** For fixed $y_{0}\in\mathbb R^{3}$ let
$x_{y_{0}}(s):=R(s)y_{0}+c(s)$ be the spatial coordinate curve in the inertial
chart. Its spacetime lift is the curve $\gamma_{y_{0}}:I\to A$ defined by
$$\gamma_{y_{0}}(s):=o+su+\sum_{j=1}^{3}\bigl(x_{y_{0}}(s)\bigr)_{j}e_{j}.$$
It is $C^{2}$ and satisfies $t(\gamma_{y_{0}}(s))=s$, so it has the
parameter condition of [[post-cm01-worldlines]]. This lifted curve is the path
of a point **at rest in the chart**; whether it is assigned as the worldline of
a particle label is a separate declaration of a model and is not made here.

**(f) Status.** A moving chart is a time-dependent coordinate description
attached to one inertial frame. In general it is not an inertial frame of the
model: [[post-cm01-frames]] defines inertial charts using a fixed spatial basis
and an affine reference curve. When $R$ is constant and $c$ is affine on $I$,
the coordinate change has the form of an allowed Galilean frame change and is
the restriction to $I$ of an adapted chart. The inertial-forces theorem of
this page proves that these are exactly the data for which the inertial terms
of clause (d) vanish identically. A moving chart is not an observer
congruence: a congruence is a family of curves of the spacetime data, whereas
a chart is a coordinate map. The identity
relating the inertial-chart acceleration to the moving-chart acceleration of
the same curve is the mathematical lemma cited in clause (c); the equation of
motion of a force model in the moving chart, with the inertial terms entering
as the mass multiples $m\tau$, is the inertial-forces theorem of this page,
with its own hypotheses. Nothing in this definition asserts a force law, an
equation of motion, a transformation law for physical interactions or a
measured value.

## Remarks

- **Convention warning.** The single most common error in reading the
  literature is to mix the two angular-velocity conventions. This framework
  fixes $\Omega=R^{\mathsf T}R'$ and $\omega$ as above; a computation using
  the opposite convention must replace $\omega$ by $R\omega$ or state its
  convention explicitly. The identity of clause (c) is the exact conversion.

- **Time coordinate unchanged.** The chart changes spatial coordinates only:
  the time coordinate of the chart is the inertial frame's time coordinate
  $t$, and no time shift, time dilation or reparametrization is introduced.
  The charts of this item use the same time coordinate as $F$. Constant
  rotation and an affine origin give a Galilean inertial chart; more general
  time dependence of the rotation or origin produces nonzero inertial terms.

- **Accelerated reference curves.** The translational term involves
  $c''$, the inertial-chart acceleration of the chart's reference point; a
  uniformly accelerating chart has vanishing Coriolis, Euler and centrifugal
  terms but a nonzero translational term. The companion example verifies the
  four terms in a chart with all of them nonvanishing.
