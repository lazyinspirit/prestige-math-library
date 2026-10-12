---
id: def-cm01-velocity-acceleration
kind: definition
title: "Coordinate velocity and acceleration of a worldline in an inertial frame, and the spatial velocity and acceleration vectors"
status: draft
origin: session
domain: physics
dependency_level: 6
deps: [post-cm01-worldlines, post-cm01-frames, def-cm01-units, def-cm-affine-time-space, lem-cm-adapted-charts-and-galilean-transformations, lem-cm-adapted-coordinates-exist-and-are-unique]
dependency_roles:
  post-cm01-worldlines: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-affine-time-space: mathematical-premise
  lem-cm-adapted-charts-and-galilean-transformations: mathematical-premise
  lem-cm-adapted-coordinates-exist-and-are-unique: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Notation and definitions for the kinematic quantities of a worldline of the framework in a chosen inertial frame: the coordinate curve, its componentwise velocity and acceleration triples with their dimensions and units, and the associated spatial velocity and acceleration vectors in the frame's spatial displacement space. The item fixes notation only; it asserts no force law, no equation of motion and no measurement, and it records (without reproving) the transformation law proved in its mathematical supplier."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Sections 1.1-1.2.1, printed pages 2-5 (PDF pages 8-11): componentwise differentiation of x(t), with v = dx/dt, a = d^2x/dt^2, and the Galilean transformations between frames with d^2x'/dt^2 = 0 preserved"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.1 points (iv)-(v), chapter pages 2-3 (PDF pages 6-7): v = dr/dt and a = dv/dt, with the transfer of r, v and a between frames and the warning that rotations make the velocity and acceleration transfers more complicated"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): position r(t), momentum p = m rdot and the inertial-frame caveat"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: n/a
---

## Definition

Let an inertial frame $(o,u,(e_{1},e_{2},e_{3}))$ of the model with adapted
coordinates $(t,x)$ be fixed, and let $\gamma:I\to A$ be the worldline of a
particle label described in this frame as in [[post-cm01-worldlines]]; thus
$\gamma$ is of class $C^{2}$, parametrized so that $t(\gamma(s))=s$ for all
$s\in I$, and

$$\gamma(s)=o+su+\sum_{j=1}^{3}\xi_{j}(s)\,e_{j}$$

for the unique coordinate functions $\xi_{j}:I\to\mathbb R$ of the point
$\gamma(s)$ in the adapted chart ([[def-cm-affine-time-space]],
[[lem-cm-adapted-coordinates-exist-and-are-unique]]).

**(a) The coordinate curve.** The **coordinate curve** of $\gamma$ in the
frame is

$$x_{\gamma}:=\bigl(\xi_{1},\xi_{2},\xi_{3}\bigr):I\longrightarrow\mathbb R^{3}.$$

It is of class $C^{2}$ by the regularity clause of [[post-cm01-worldlines]],
and it determines $\gamma$ by the display above, since the parameter condition
fixes the time coordinate. It has dimension $[\,\xi_{j}\,]=\ell$
([[def-cm01-units]]).

**(b) Coordinate velocity and acceleration.** The **derivative** of a
vector-valued map is taken componentwise: for the map $x_{\gamma}$ above, its
derivative at $s$ is

$$x_{\gamma}'(s):=\bigl(\xi_{1}'(s),\xi_{2}'(s),\xi_{3}'(s)\bigr),$$

where each $\xi_{j}'(s)=\lim_{h\to0}\bigl(\xi_{j}(s+h)-\xi_{j}(s)\bigr)/h$ is
the ordinary derivative of a real function. The **coordinate velocity** of the
label in the frame is

$$w(s):=x_{\gamma}'(s)\in\mathbb R^{3},$$

with components $w_{j}=\xi_{j}'$, and the **coordinate acceleration** is the
coordinate velocity of the velocity,

$$a(s):=w'(s)=x_{\gamma}''(s)\in\mathbb R^{3}.$$

Their dimensions are $[w_{j}]=\ell\tau^{-1}$ and $[a_{j}]=\ell\tau^{-2}$, read
in metres per second and metres per second squared. The triple $w(s)$ is the
triple of numbers read in the frame's axes: it is a coordinate description,
not an element of spacetime.

**(c) Spatial velocity and acceleration vectors.** For the affine curve
$\gamma:I\to A$, subtraction of events uses the affine displacement in $V$.
Define its derivative by the limit in the finite-dimensional vector space
$V$,
$$\gamma'(s):=\lim_{h\to0}\frac{\gamma(s+h)-\gamma(s)}{h}=u+\sum_j\xi_j'(s)e_j,$$
and define $\gamma''(s)$ as the derivative of the $V$-valued map
$\gamma'$. This is the canonical identification of each affine tangent
space with $V$; the $C^2$ coordinate regularity guarantees both limits.
The frame's time direction
$u$ and spatial basis identify two elements of the spatial displacement space
$K$ attached to the motion:

$$\underline{v}(s):=\gamma'(s)-u=\sum_{j=1}^{3}w_{j}(s)\,e_{j}\in K,\qquad \underline{a}(s):=\gamma''(s)=\sum_{j=1}^{3}a_{j}(s)\,e_{j}\in K.$$

Here $\gamma'(s)-u$ indeed lies in $K=\ker\tau$, because $\tau(\gamma'(s))=\frac{d}{ds}\tau(\gamma(s)-o)=1$ by linearity of $\tau$ and the parameter condition. The vectors $\underline{v}(s)$ and $\underline{a}(s)$ are the **spatial velocity vector** and **spatial acceleration vector** of the label in the frame; the velocity depends on the frame time direction $u$, whereas the acceleration is an intrinsic element of $K$ unchanged by an inertial frame change (time shifts have derivative $1$). Their coordinates in the frame's basis $(e_{1},e_{2},e_{3})$ are the triples $w(s)$ and $a(s)$.

**(d) Speed.** The **speed** of the label in the frame at time $s$ is the
Euclidean norm $\|w(s)\|_{2}=\sqrt{\sum_{j}w_{j}(s)^{2}}$, of dimension
$\ell\tau^{-1}$; equivalently $\|\underline{v}(s)\|_{2}=\sqrt{g(\underline{v}(s),\underline{v}(s))}$,
the norm induced by the spatial metric, since the basis is $g$-orthonormal.

**(e) Transformation under a change of inertial frame (recorded).** Let a
second inertial frame be given, with coordinates $(t',x')$ and transformation
parameters $(b,a,v,R)$ as in [[post-cm01-frames]], and let
$\eta(t'):=x'(\gamma(t'-b))\in\mathbb R^{3}$ be the description of the motion
in the second frame. Then

$$\eta'(t')=R\,w(t'-b)+v,\qquad \eta''(t')=R\,a(t'-b),$$

that is, in the differentiated variables and abbreviated notation
$w'=Rw+v$ and $a'=Ra$. This law is clause 2 of the mathematical transformation
law of [[lem-cm-adapted-charts-and-galilean-transformations]], recorded here
in the model's notation; the definition itself asserts neither law. The
model-level statement of the law, including the frame-independence of the
property $a\equiv0$, is proved as a theorem later on this page.

## Remarks

- **Velocity is frame-dependent; acceleration rotates.** By clause (e) the
  coordinate velocity changes under a boost, $w'=Rw+v$, while the coordinate
  acceleration transforms by the rotation alone, $a'=Ra$; the speed is
  invariant under the rotation part of a frame change and changes under
  boosts. These are kinematic properties of the model's frames and hold before
  any dynamics is introduced.

- **Spatial vectors and their coordinates.** $\underline{v}=\gamma'-u$
  changes when the frame time direction changes. By contrast
  $\underline{a}=\gamma''$ has the same value in $K$ in every inertial frame
  at the corresponding event; its coordinate triple rotates by clause (e).
  A change of basis changes coordinates without changing this affine vector.

- **No dynamical content.** Nothing in this item says how $a(s)$ is
  determined: the force law and the equation of motion are adopted on the
  later pages of the framework. In particular the identification of
  $m\,a$ with a force is not made here.
