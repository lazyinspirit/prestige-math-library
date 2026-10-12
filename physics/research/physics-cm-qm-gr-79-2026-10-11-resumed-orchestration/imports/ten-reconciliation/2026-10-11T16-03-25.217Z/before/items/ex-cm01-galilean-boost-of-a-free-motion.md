---
id: ex-cm01-galilean-boost-of-a-free-motion
kind: example
title: "A worked Galilean boost: the same uniform motion in two inertial frames"
status: draft
origin: session
domain: physics
dependency_level: 8
deps: [post-cm01-spacetime, post-cm01-frames, post-cm01-worldlines, def-cm01-velocity-acceleration, def-cm01-units, pthm-cm01-galilean-kinematics, def-cm-affine-time-space]
dependency_roles:
  post-cm01-spacetime: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  pthm-cm01-galilean-kinematics: physical-result
  def-cm-affine-time-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A finite worked verification, on explicit numerical data, of the transformation law between two inertial frames of the model and of the velocity and acceleration laws for one uniform motion: checking adaptedness of a constructed frame, the coordinate relation, the parameter condition, and the transformation of coordinate and spatial velocity. It is a computation inside an explicitly specified model and asserts no force law, no empirical claim and no physical law beyond the cited items."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.2.1, printed page 5 (PDF page 11): the boost x' = x + v t with constant v, and the preservation of d^2x/dt^2 = 0"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): the inertial-frame definition r = r_0 + v t and the boost among the transformations relating inertial frames"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.1 point (v), chapter page 3 (PDF page 7): the transfer of radius vector, velocity and acceleration between frames moving by translation without rotation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

Take the concrete model data

$$V=\mathbb R^{4},\qquad \tau(x^{0},x^{1},x^{2},x^{3})=x^{0},\qquad K=\{0\}\times\mathbb R^{3},$$

with $g$ the standard Euclidean inner product $g\bigl((0,u),(0,w)\bigr)=u\cdot w$ on $K$, the standard orientation of $K$, and $A=\mathbb R^{4}$ with its standard affine structure over $V$; the coordinates are read with $t$ in seconds and $(x^{1},x^{2},x^{3})$ in metres. Adopt the spacetime, frame and worldline postulates
([[post-cm01-spacetime]], [[post-cm01-frames]], [[post-cm01-worldlines]]).

**First frame.** $F=(o,u,(e_{1},e_{2},e_{3}))$ with $o=0$,
$u=(1,0,0,0)$, $e_{1}=(0,1,0,0)$, $e_{2}=(0,0,1,0)$, $e_{3}=(0,0,0,1)$.
The adapted coordinates are the standard ones, written
$(t,x)=(t,x^{1},x^{2},x^{3})$.

**Transformation data.** Choose

$$b=2\,\mathrm s,\qquad a=(0,\,3\,\mathrm m,\,0),\qquad v=\Bigl(\frac12,\,0,\,0\Bigr)\ \mathrm m\,\mathrm s^{-1},\qquad R=I_{3}.$$

**Second frame constructed from the data.** Put
$e_{j}'=e_{j}$ for $j=1,2,3$ (the rotation is trivial),
$u'=u-\sum_{j}v_{j}e_{j}'=(1,-\frac12,0,0)$ and
$o'=o-bu-\sum_{j}\bigl(R^{\mathsf T}(a-vb)\bigr)_{j}e_{j}=(-2,\,1,\,-3,\,0)$;
write $(t',x')$ for the adapted coordinates of
$F'=(o',u',(e_{1}',e_{2}',e_{3}'))$.

**The motion.** Let $\gamma:\mathbb R\to A$ be the worldline whose
$F$-coordinates are

$$\gamma(s)=\bigl(s,\ 1+\tfrac14 s,\ 2,\ 0\bigr),$$

that is, the coordinate curve $x(s)=\bigl(1+\tfrac14 s,\ 2,\ 0\bigr)$ with
constant coordinate velocity
$w=(\tfrac14,0,0)\ \mathrm m\,\mathrm s^{-1}$ and zero coordinate
acceleration.

## Facts & Assumptions

**Given:** The data $(V,\tau,g,K,\text{orientation},A)$ of the Example, the frames $F$ and $F'$, the worldline $\gamma$ with its $F$-coordinate curve $x$, and the primed coordinate curve $\eta(t')=x'(\gamma(t'-b))$ of [[def-cm01-velocity-acceleration]].

[L1] The Newtonian spacetime postulate: $V$ a four-dimensional real vector space, $\tau$ surjective linear with kernel $K$ of dimension three, $g$ a positive-definite bilinear form on $K$, a fixed orientation of $K$ and an affine space $A$ modelled on $V$ ([[post-cm01-spacetime]], [[def-cm-affine-time-space]]).

[L2] Inertial frames are the adapted charts $(o,u,(e_{j}))$ with $\tau(u)=1$ and $(e_{j})$ an oriented $g$-orthonormal basis of $K$ ([[post-cm01-frames]]).

[L3] The Galilean kinematics theorem: the transformation law between inertial frames, the velocity law $\eta'=Rw+v$, the acceleration law $\eta''=Ra$, and the frame-independence of vanishing coordinate acceleration ([[pthm-cm01-galilean-kinematics]]).

[L4] Coordinate velocity, acceleration, spatial velocity vector and dimensions ([[def-cm01-velocity-acceleration]], [[def-cm01-units]]).

## Verification

**Proof technique:** direct; expand both adapted charts in the standard basis
and check the displayed relations on the explicit data.

1.1 The data of the Example satisfy [L1]: $\tau$ is linear and surjective (its value is the first coordinate), $K=\{0\}\times\mathbb R^{3}$ has dimension three, the standard inner product on $K$ is symmetric and positive definite, the standard orientation of $\mathbb R^{3}$ orients $K$, and $A=\mathbb R^{4}$ is an affine space over itself. [L1, algebra]

1.2 The constructed frame $F'$ is inertial in the sense of [L2]: $\tau(u')=1$ because $u'=(1,-\frac12,0,0)$, and the basis $(e_{1}',e_{2}',e_{3}')=(e_{1},e_{2},e_{3})$ is $g$-orthonormal and positively oriented; hence $F'$ is an adapted chart with adapted coordinates $(t',x')$. [L2, algebra]

1.3 The primed coordinates of the event $p=tu+\sum_{j}x^{j}e_{j}$ are obtained by expanding $p=o'+t'u'+\sum_{j}x'^{j}e_{j}'$: comparing components gives $t'=t+2$ and $x'=\bigl(x^{1}+\frac12t,\ x^{2}+3,\ x^{3}\bigr)=Rx+vt+a$, so the two frames differ by the transformation of [L3] with the displayed parameters $(b,a,v,R)$. [L3, algebra]

1.4 The curve $\gamma$ is a worldline: it is of class $C^{\infty}$ and its $F$-time coordinate is $\tau(\gamma(s)-o)=s$, so the parameter condition holds; its coordinate curve is $x(s)$ with coordinate velocity $w=(\frac14,0,0)$ and coordinate acceleration $a=0$. [L1, L4, algebra]

2.1 The primed description of the motion is $\eta(t')=x(t'-2)+v(t'-2)+a=\bigl(\frac34t'-\frac12,\ 5,\ 0\bigr)$; hence $\eta'=(\frac34,0,0)=Rw+v$ and $\eta''=(0,0,0)=Ra$, so the velocity and acceleration laws of [L3] hold on this motion, and the vanishing of the coordinate acceleration is frame-independent for it. [step 1.3, step 1.4, L3, L4, algebra]

3.1 As a cross-check, at $t=2$ the $F$-coordinates are $(\frac32,2,0)$ and the $F'$-coordinates of the same event are $\eta(4)=(\frac52,5,0)$, which equals $x(2)+2v+a$ by the transformation of step 1.3. [step 1.3, step 2.1, algebra]

4.1 Finally, the spatial velocity vectors confirm the same laws: in $F$ one has $\underline{v}=\gamma'(s)-u=\frac14e_{1}$, and in $F'$ one has $\underline{v}'=\gamma'(s)-u'=\frac14e_{1}+\frac12e_{1}=\frac34e_{1}$, whose primed-basis coordinates $(\frac34,0,0)$ equal the coordinate velocity $\eta'$ of step 2.1; the example thus verifies the transformation law and the velocity and acceleration laws on explicit data. It does not identify the displayed uniform motion with the motion of an unforced particle in any dynamical sense, which requires the force postulates of a later page. [step 2.1, L4, algebra] ∎
