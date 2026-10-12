---
id: pthm-cm06-inertial-forces
kind: physics-theorem
title: "The equation of motion in a moving chart: inertial terms, the inertial forces, and the exact criterion for a chart to be inertial"
status: draft
origin: session
domain: physics
dependency_level: 10
deps: [def-cm06-moving-frame, post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm01-velocity-acceleration, def-cm01-units, post-cm01-frames, pthm-cm01-galilean-kinematics, lem-cm-moving-frame-acceleration-identity, lem-cm-skew-matrix-cross-product-correspondence, lem-cm-adapted-charts-and-galilean-transformations, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, def-cross-product-in-r3, def-euclidean-inner-product, cor-zero-derivative-implies-constant, thm-newton-leibniz-with-interior-derivative, thm-algebra-of-derivatives, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm06-moving-frame: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  pthm-cm01-galilean-kinematics: physical-result
  lem-cm-moving-frame-acceleration-identity: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  lem-cm-adapted-charts-and-galilean-transformations: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The conditional description of the motions of a force-branch model in a rigidly moving and rotating spatial chart: the exact identity for the coordinate acceleration with the four inertial terms, the reading of those terms as mass-proportional inertial forces, and the characterization of exactly inertial charts as the charts whose inertial terms vanish, in which case the framework's force-covariance law is recovered. The inertial terms are properties of the chart's motion, not forces of the model's force map; the item asserts no equivalence between a moving chart and a gravitational field, and no measured value."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Sections 6.1-6.2, Eqs. (6.3)-(6.5), printed pages 94-95 (PDF pages 100-101): the velocity and acceleration transfer to a rotating frame, and Newton's equation with the Coriolis, centrifugal and Euler terms"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 4.6, Eqs. (4.88)-(4.92), chapter pages 21-23 (PDF pages 76-78): the velocity and acceleration transfer formulas and the four inertial-force terms, recorded as mathematical terms rather than physical forces"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 2.2, printed pages 33-36 (PDF pages 36-39): frames as adapted coordinate maps, and the distinction between frame changes and forces"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the force branch of [[post-cm02-force-superposition]]: $N\ge1$ labels
with masses $m_{1},\dots,m_{N}>0$, time window $I_{0}$, open configuration
domain $Q\subseteq\mathbb R^{3N}$ and force map $F$ with the standing
regularity; fix one inertial frame $F$ with adapted coordinates $(t,x)$
([[post-cm01-frames]], [[def-cm01-velocity-acceleration]],
[[def-cm01-units]]). Let a moving spatial chart of $F$ be given by data
$(I,c,R)$ with $I\subseteq I_{0}$ ([[def-cm06-moving-frame]]), with angular
velocity $\omega$ and inertial-terms field
$$\tau(t,y,\dot y):=-\Bigl(2\,\omega(t)\times\dot y+\omega'(t)\times y+\omega(t)\times\bigl(\omega(t)\times y\bigr)+R(t)^{\mathsf T}c''(t)\Bigr).$$

Let $x:J\to Q$ be a **motion** of the model on an interval $J\subseteq I$ with
nonempty interior ([[def-cm02-newtonian-flow]] clause (c)):
$$m_{i}x_{i}''(t)=F_{i}\bigl(t,x(t),w(t)\bigr)\qquad(t\in J),$$
with $w=x'$ the coordinate velocity of the labels, and for each label define
the moving-chart coordinate curve and its derivatives
$$y_{i}(t):=R(t)^{\mathsf T}\bigl(x_{i}(t)-c(t)\bigr),\qquad \dot y_{i}=y_{i}',\qquad \ddot y_{i}=y_{i}''.$$
Then:

1. **moving-chart equation.** For every $i$ and every $t\in J$,
   $$m_{i}\,\ddot y_{i}(t)=R(t)^{\mathsf T}F_{i}\bigl(t,x(t),w(t)\bigr)+m_{i}\,\tau\bigl(t,y_{i}(t),\dot y_{i}(t)\bigr).$$

2. **inertial forces.** Define the **inertial force** on label $i$ along the
   motion by $F_{i}^{\mathrm{in}}(t):=m_{i}\tau(t,y_{i}(t),\dot y_{i}(t))$,
   with the four additive components $-2m_{i}\omega\times\dot y_{i}$,
   $-m_{i}\omega'\times y_{i}$, $-m_{i}\omega\times(\omega\times y_{i})$ and
   $-m_{i}R^{\mathsf T}c''$ (Coriolis, Euler, centrifugal and translational).
   Then clause 1 reads $m_{i}\ddot y_{i}=R^{\mathsf T}F_{i}+F_{i}^{\mathrm{in}}$.
   The inertial forces are determined by the chart's motion and the label's
   mass; they are **not** contributions of the model's force map $F$, and
   the moving chart is not an inertial frame of the model.

3. **criterion for an inertial chart.** The inertial terms vanish
   identically, $\tau(t,y,\dot y)=0$ for every $(t,y,\dot y)\in I\times\mathbb R^{3}\times\mathbb R^{3}$,
   if and only if $R$ is constant on $I$ and $c$ is affine on $I$. In that
   case the moving chart $(t,y)$ is the adapted coordinate chart of an
   inertial frame $F_{*}$ of the model related to $F$ by a Galilean
   transformation with vanishing time shift, and clause 1 reduces for each
   label to $m_{i}\ddot y_{i}=R^{\mathsf T}F_{i}(t,x(t),w(t))$, which is the
   transformed equation of motion of clause (vi) of
   [[post-cm02-force-superposition]] read in $F_{*}$. Conversely, if the
   moving chart is the adapted chart of an inertial frame related to $F$ by a
   Galilean transformation with vanishing time shift, then $R$ is constant
   and $c$ is affine and $\tau\equiv0$.

The identity of clause 1 is a conditional consequence of the adopted force
branch and of the chart's kinematics; clause 3 is its consistency check
against the frame class of [[post-cm01-frames]]. No claim is made that a
moving chart is physically equivalent to an inertial frame with an additional
force field, and no measured value is asserted.

## Facts & Assumptions

**Given:** The force-branch model, one inertial frame $F$, a moving chart $(I,c,R)$ with $I\subseteq I_{0}$, a motion $x:J\to Q$ of the model with velocity $w=x'$, and the curves $y_{i}(t)=R(t)^{\mathsf T}(x_{i}(t)-c(t))$.

[L1] The moving chart ([[def-cm06-moving-frame]]): $c$ and $R$ are $C^{2}$ with $R(t)\in SO(3)$; $\Omega=R^{\mathsf T}R'$ is skew with unique representing vector $\omega$, $\Omega z=\omega\times z$; $\tau$ is the inertial-terms field of clause (d); $y_{i}$ is the moving-chart coordinate curve of $x_{i}$ with velocity $\dot y_{i}$ and acceleration $\ddot y_{i}$.

[L2] The rotating-frame acceleration identity ([[lem-cm-moving-frame-acceleration-identity]] clause 3): for $C^{2}$ maps $R:I\to SO(3)$, $c:I\to\mathbb R^{3}$ and $y:I\to\mathbb R^{3}$ with $x=Ry+c$, $$R^{\mathsf T}x''=y''+2\omega\times y'+\omega'\times y+\omega\times(\omega\times y)+R^{\mathsf T}c'' .$$

[L3] The motion and the force branch ([[def-cm02-newtonian-flow]] clause (c), [[post-cm02-force-superposition]] clauses (iii),(iv)): $m_{i}x_{i}''(t)=F_{i}(t,x(t),w(t))$ on $J$, with $F$ of the standing regularity and $Q$ open; the coordinate curves $x_{i}$ are $C^{2}$.

[L4] Frame changes ([[pthm-cm01-galilean-kinematics]] clause 1, [[lem-cm-adapted-charts-and-galilean-transformations]], [[post-cm01-frames]]): two inertial frames are related by $t'=t+b$, $x'=Qx+vt+a_{0}$ with $b\in\mathbb R$, $a_{0},v\in\mathbb R^{3}$, $Q\in SO(3)$; and the transformation class is realized by pairs of inertial frames of the model.

[L5] The force-covariance law ([[post-cm02-force-superposition]] clause (vi)): if $\eta(t')=Rx(t'-b)+v(t'-b)+a_{0}$ describes the same worldlines in a second inertial frame, then $m_{i}\eta_{i}''(t')=\bigl(RF(t'-b,x(t'-b),w(t'-b))\bigr)_{i}$ along the motion, and the transferred force map is $F_{*}(t',y,u)=RF(t'-b,R^{\mathsf T}(y-v(t'-b)-a_{0}),R^{\mathsf T}(u-v))$.

[L6] Calculus of constant and affine maps: a differentiable map on an interval with identically vanishing derivative is constant; a twice differentiable map with identically vanishing second derivative is affine ([[cor-zero-derivative-implies-constant]], [[thm-newton-leibniz-with-interior-derivative]], [[def-vector-valued-derivative-and-integral]], [[def-interval]], [[thm-algebra-of-derivatives]]).

[L7] Matrix and cross-product algebra: $R^{\mathsf T}R=I_{3}$ and $R$ is invertible for $R\in SO(3)$; $\Omega=0$ if and only if $\omega=0$; and $[R\omega]_{\times}=R[\omega]_{\times}R^{\mathsf T}$ ([[def-cm-special-orthogonal-group]], [[lem-cm-so3-is-a-matrix-group]], [[lem-cm-skew-matrix-cross-product-correspondence]], [[def-cross-product-in-r3]], [[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct; apply the rotating-frame acceleration identity to each label of the motion and read off the inertial terms, then characterize the vanishing of those terms.

1.1 Clauses 1 and 2: fix $i$ and apply [L2] to the $C^{2}$ curves $R$, $c$ and $y_{i}$ with $x_{i}=Ry_{i}+c$: $$R^{\mathsf T}x_{i}''=\ddot y_{i}+2\omega\times\dot y_{i}+\omega'\times y_{i}+\omega\times(\omega\times y_{i})+R^{\mathsf T}c'' .$$ Multiplying by $m_{i}$ and substituting $m_{i}x_{i}''=F_{i}$ from [L3], $$m_{i}\ddot y_{i}=R^{\mathsf T}F_{i}-m_{i}\bigl(2\omega\times\dot y_{i}+\omega'\times y_{i}+\omega\times(\omega\times y_{i})+R^{\mathsf T}c''\bigr)=R^{\mathsf T}F_{i}+m_{i}\tau(t,y_{i},\dot y_{i}),$$ the last equality being the definition of $\tau$ in [L1]; this is clause 1. Writing $F_{i}^{\mathrm{in}}:=m_{i}\tau$ and multiplying the four components of $\tau$ by $m_{i}$ gives the Coriolis, Euler, centrifugal and translational terms of clause 2, and by [L1] and [L2] the vector $\tau$ is built from the chart data and the label mass, while the force map enters only through $R^{\mathsf T}F_{i}$; this is clause 2. [L1, L2, L3, given, algebra]

1.2 Clause 3, forward: assume $\tau(t,y,\dot y)=0$ for all $(t,y,\dot y)$. Fix $t\in I$. First set $y=0$ and $\dot y=0$; then $\tau(t,0,0)=-R(t)^{\mathsf T}c''(t)=0$, so $c''(t)=0$ because $R(t)$ is invertible by [L7]. Now set $y=0$ and $\dot y=e_j$ for each standard basis vector $e_j$; since $c''(t)=0$, the identity $\tau(t,0,e_j)=0$ reduces to $-2\omega(t)\times e_j=0$. Thus $\omega(t)\times e_j=0$ for $j=1,2,3$, which by the coordinate formula of the cross product implies $\omega(t)=0$. As $t$ was arbitrary, $\omega\equiv0$ and $c''\equiv0$ on $I$. [L1, L7, algebra]

2.1 With $\omega\equiv0$ one has $\Omega=[\omega]_{\times}=0$ by [L7], so $R'=R\Omega=0$ and $R$ is constant on $I$ by [L6]; and $c''\equiv0$ with the interval $I$ nondegenerate gives $c$ affine on $I$ by [L6], $c(t)=c(t_{0})+c'(t_{0})(t-t_{0})$ for a fixed $t_{0}\in I$. [step 1.2, L6, L7]

2.2 Clause 3, inertial-frame identification: assume $R$ is constant and $c(t)=a_{0}+vt$ is affine. Then $y(t)=R^{\mathsf T}(x(t)-a_{0}-vt)=Qx(t)+v_{*}t+a_{0*}$ with $Q:=R^{\mathsf T}\in SO(3)$, $v_{*}:=-R^{\mathsf T}v$ and $a_{0*}:=-R^{\mathsf T}a_{0}$ constants, so by [L4] there is an inertial frame $F_{*}$ of the model whose adapted coordinates are $(t,y)$. Along the motion, $\eta:=y_{i}$ is the coordinate curve of label $i$ in $F_{*}$, and [L5] gives $m_{i}\eta_{i}''=R^{\mathsf T}F_{i}(t,x(t),w(t))$ read at the transferred data; since $R$ is constant, $\omega\equiv0$ by [L7] and $c''\equiv0$, so $\tau\equiv0$ and clause 1 reduces to exactly this identity. [L4, L5, L6, L7, step 1.1]

3.1 Clause 3, converse: if $(t,y)$ are the adapted coordinates of an inertial frame related to $F$ by a Galilean transformation with vanishing time shift, then $y=Qx+vt+a_{0}$ with constant $Q\in SO(3)$, $v,a_{0}$ ([[pthm-cm01-galilean-kinematics]] clause 1), so $x=Q^{\mathsf T}y-Q^{\mathsf T}vt-Q^{\mathsf T}a_{0}$, that is, the chart has $R=Q^{\mathsf T}$ constant and $c(t)=-Q^{\mathsf T}vt-Q^{\mathsf T}a_{0}$ affine; by steps 1.2, 2.1 and 2.2 the inertial terms vanish. [L4, step 1.2, step 2.1, step 2.2, algebra]

4.1 Clauses 1-3: clauses 1 and 2 are step 1.1, and clause 3 is the equivalence assembled from steps 1.2, 2.1, 2.2 and 3.1. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **A chart, not a frame.** The moving chart is attached to the inertial frame $F$; its coordinate triple $y$ is not the coordinate of a physical rotation of matter. The inertial forces depend on the chart's reference acceleration $c''$ and rotation data $(\omega,\omega')$ and are unaffected by the interactions of the model; two charts with different data produce different inertial terms for the same motion.

- **No equivalence principle.** Clause 2 permits the inertial terms to be carried along in computations in a moving chart, which is what makes the description of terrestrial and rotating-apparatus experiments convenient; it does **not** assert that a chart's inertial terms are a gravitational field or that a true force law of the model has been transformed into a fictitious one. Whether a term in a concrete computation is an interaction force of the model or an inertial term of the chart is decided by the model's declaration of $F$ and of the chart data.

- **Where the criterion is used.** Clause 3 identifies exactly the charts for which the framework's force covariance applies unchanged; the remaining charts have nonzero inertial terms, and the companion example exhibits all four of them on explicit data.
