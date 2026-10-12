---
id: ex-cm01-rotating-basis-of-a-free-motion
kind: example
title: "A rotating spatial basis is not an inertial frame: nonzero coordinate acceleration of a uniform motion"
status: draft
origin: session
domain: physics
dependency_level: 8
deps: [post-cm01-frames, post-cm01-worldlines, def-cm01-velocity-acceleration, def-cm01-units, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, pthm-cm01-galilean-kinematics, lem-cm-moving-frame-acceleration-identity, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives]
dependency_roles:
  post-cm01-frames: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  pthm-cm01-galilean-kinematics: physical-result
  lem-cm-moving-frame-acceleration-identity: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked kinematic example of the framework: a uniformly rotating spatial basis field in a fixed inertial frame, and the coordinate acceleration of a worldline that is at rest in the inertial frame. The example verifies the rotating-frame acceleration identity of its mathematical supplier and shows that the rotating basis is not an inertial frame of the model. It asserts no force law, makes no claim about fictitious forces or measured effects, and contains no relativity content."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 6.1.1 'Velocity and Acceleration in a Rotating Frame', printed pages 94-95 (PDF pages 100-101): Eq. (6.4), (d^2r/dt^2)_S = (d^2r/dt^2)_S' + 2 omega x (dr/dt)_S' + omega-dot x r + omega x (omega x r), and the observation that a free particle does not travel in a straight line in the rotating frame"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.1.1, printed pages 47-49 (PDF pages 53-55): moving orthonormal bases, the angular velocity vector and the general acceleration identity"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Take the concrete model data of [[post-cm01-spacetime]]:
$V=\mathbb R^{4}$ with coordinates $(x^{0},x^{1},x^{2},x^{3})$,
$\tau=x^{0}$, $K=\{0\}\times\mathbb R^{3}$ with the standard inner product
$g$, $A=\mathbb R^{4}$ with its standard affine structure, the standard
orientation; the first inertial frame $F$ is the standard one,
$o=0$, $u=(1,0,0,0)$, $e_{j}$ the standard basis, with coordinates
$(t,x)=(t,x^{1},x^{2},x^{3})$, times in seconds and lengths in metres.

Let $\omega>0$ and define a **time-dependent orthonormal basis field** of $K$
by

$$\tilde e_{1}(s)=\cos(\omega s)\,e_{1}+\sin(\omega s)\,e_{2},\qquad \tilde e_{2}(s)=-\sin(\omega s)\,e_{1}+\cos(\omega s)\,e_{2},\qquad \tilde e_{3}(s)=e_{3},$$

and the associated rotation matrix

$$R(s)=\begin{pmatrix}\cos(\omega s)&-\sin(\omega s)&0\\ \sin(\omega s)&\cos(\omega s)&0\\ 0&0&1\end{pmatrix},\qquad\text{so that}\qquad (e_{1},e_{2},e_{3})\,R(s)=(\tilde e_{1}(s),\tilde e_{2}(s),\tilde e_{3}(s)).$$

For a worldline that is at rest in $F$ at the position $(1\,\mathrm m,0,0)$,
with $F$-coordinate curve $x(s)=(1,0,0)$, define the
**rotating-basis coordinate curve** $y(s)$ by the expansion
$x(s)=R(s)\,y(s)$, that is, $y(s):=R(s)^{\mathsf T}x(s)$; the time coordinate
is unchanged because the basis field rotates in $K$ only.

## Facts & Assumptions

**Given:** The model data and the frames and curves of the Example, with $R:I\to SO(3)$ the rotation matrix displayed above and $\omega>0$; write $x$ for the $F$-coordinate curve and $y$ for the rotating-basis coordinate curve.

[L1] The functions $\sin$ and $\cos$ are defined by their power series, are differentiable on $\mathbb R$, with $(\sin)'=\cos$, $(\cos)'=-\sin$, and $\sin0=0$, $\cos0=1$ ([[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]]).

[L2] The Pythagorean identity $\sin^{2}+\cos^{2}=1$ holds identically, and $|\sin|\le1$, $|\cos|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] Rotations: $SO(3)$ is the set of $R$ with $R^{\mathsf T}R=I_{3}$ and $\det R=1$; products and transposes of elements of $SO(3)$ lie in $SO(3)$ ([[def-cm-special-orthogonal-group]], [[lem-cm-so3-is-a-matrix-group]]).

[L4] Moving-frame acceleration identity: for twice continuously differentiable $R:I\to SO(3)$, $c:I\to\mathbb R^{3}$ and $y:I\to\mathbb R^{3}$, the curve $x=Ry+c$ satisfies $R^{\mathsf T}x''=y''+2\,\omega\times y'+\omega'\times y+\omega\times(\omega\times y)+R^{\mathsf T}c''$, where $\Omega=R^{\mathsf T}R'$ and $\omega$ is the unique vector with $\Omega z=\omega\times z$ for all $z$ ([[lem-cm-moving-frame-acceleration-identity]]).

[L5] Galilean kinematics: the coordinate acceleration of a worldline vanishes identically in one inertial frame exactly when it does in every inertial frame ([[pthm-cm01-galilean-kinematics]], clause 3). Inertial frames are the adapted charts of the model, whose spatial basis is constant ([[post-cm01-frames]]).

[L6] Coordinate velocity and acceleration of a worldline in a frame, and the spatial velocity vector $\underline v=\gamma'-u$ ([[def-cm01-velocity-acceleration]]).

[L7] Chain rule for total derivatives: if $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$; applied to the compositions $s\mapsto\sin(\omega s)$ and $s\mapsto\cos(\omega s)$, whose inner map is linear with derivative $\omega$, it gives the derivatives $\omega\cos(\omega s)$ and $-\omega\sin(\omega s)$ used in step 3.1 ([[thm-chain-rule-for-total-derivatives]]).

## Verification

**Proof technique:** direct; verify orthonormality with the Pythagorean identity, then differentiate the coordinate curves explicitly and compare with the cited identity and theorem.

1.1 The basis field is $g$-orthonormal for every $s$: by the expansion and [L2], $g(\tilde e_{1},\tilde e_{1})=\cos^{2}(\omega s)+\sin^{2}(\omega s)=1$, $g(\tilde e_{2},\tilde e_{2})=\sin^{2}(\omega s)+\cos^{2}(\omega s)=1$, $g(\tilde e_{3},\tilde e_{3})=1$ and $g(\tilde e_{1},\tilde e_{2})=-\cos(\omega s)\sin(\omega s)+\sin(\omega s)\cos(\omega s)=0$, with the other mixed pairings vanishing; the orientation is unchanged because the determinant of the two-dimensional block is $\cos^{2}+\sin^{2}=1$ and the third axis is unchanged. [L2, algebra]

1.2 The worldline $\gamma$ with $F$-coordinate curve $x(s)=(1,0,0)$ is a worldline of the model: it is of class $C^{\infty}$ and satisfies the parameter condition, and its coordinate velocity and acceleration in $F$ are $w=0$ and $a=0$; its spatial velocity vector in $F$ is $\underline v=\gamma'(s)-u=0$. [L6, algebra]

2.1 Hence $R(s)\in SO(3)$ for every $s$: the columns of $R(s)$ are the coordinates of $(\tilde e_{1}(s),\tilde e_{2}(s),\tilde e_{3}(s))$ and form a positively oriented orthonormal basis, so $R(s)^{\mathsf T}R(s)=I_{3}$ and $\det R(s)=1$ by [L3]; moreover $s\mapsto R(s)$ is of class $C^{\infty}$ because $\sin$ and $\cos$ are differentiable with the derivatives of [L1], and likewise $R^{\mathsf T}$. [step 1.1, L1, L3, algebra]

3.1 The rotating-basis coordinate curve is $y(s)=R(s)^{\mathsf T}x(s)=\bigl(\cos(\omega s),\,-\sin(\omega s),\,0\bigr)$, because $R(s)^{\mathsf T}$ has first column $(\cos(\omega s),-\sin(\omega s),0)$; differentiating with the chain rule [L7] and step 2.1 gives $y'(s)=\omega\bigl(-\sin(\omega s),\,-\cos(\omega s),\,0\bigr)$ and $y''(s)=-\omega^{2}\bigl(\cos(\omega s),\,-\sin(\omega s),\,0\bigr)=-\omega^{2}y(s)$, so $y''\not\equiv0$ because $y$ is never the zero vector (its norm is $1$ by [L2]). [step 1.2, step 2.1, L1, L2, L7, algebra]

4.1 The identity of [L4] applies with $c=0$, $x''=0$ and, from $\Omega=R^{\mathsf T}R'$ computed from the displayed $R$, with $\omega$ the constant vector $(0,0,\omega)$; by steps 2.1 and 3.1 the two sides read $R^{\mathsf T}x''=0$ and $y''+2\omega\times y'+\omega'\times y+\omega\times(\omega\times y)=0$, since $2\omega\times y'=2\omega^{2}y$, $\omega'\times y=0$ and $\omega\times(\omega\times y)=-\omega^{2}y$, so the displayed identity is satisfied on this example. [step 2.1, step 3.1, L4, algebra]

5.1 The result $y''\not\equiv0$ of step 3.1, together with $x''\equiv0$ in the inertial frame $F$, shows that the rotating basis is **not** an inertial frame of the model: were it inertial, its coordinate acceleration of the same worldline would have to vanish identically by clause 3 of [L5], contradicting step 3.1; equivalently, an inertial frame of the model has a constant spatial basis by [L5], and the basis field $\tilde e_{j}(s)$ is not constant. The example therefore delimits the frame assumptions: a time-dependent change of basis preserves simultaneity and the time coordinate but does not preserve the uniform-motion property, and the two extra terms displayed in step 4.1 are kinematic coordinate effects in this basis, not a force law. [step 3.1, step 4.1, L5, algebra] ∎

## Remarks

- The displayed identity of [L4] shows that in a uniformly rotating basis the second derivative of the coordinate curve has two contributions, the terms proportional to $y'$ and to $y$ that are familiar from the treatment of rotating frames. The framework at this stage contains no force law, so these terms are kinematic features of the coordinate description; the identification of corresponding terms with fictitious forces belongs to the dynamics of the model, where an equation of motion and a force law are adopted. The example itself makes no such identification.

- The rotating basis field is not an adapted chart of the affine data, and it is not claimed to be a physical rotation of matter in any sense. The static congruence of observers of the inertial frame $F$ and the rotating basis field are different objects: the observer congruence of [[post-cm01-frames]] is derived from the frame's constant vector fields, while the basis field used here varies with the time coordinate.
