---
id: def-cm03-centre-of-mass-and-momenta
kind: definition
title: "Total mass, total momentum, centre of mass, angular momentum, torque, kinetic energy, power and work of a particle model in an inertial frame"
status: published
origin: session
domain: physics
dependency_level: 10
deps: [post-cm02-force-superposition, post-cm02-interactions, def-cm02-newtonian-flow, post-cm01-frames, post-cm01-worldlines, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-cross-product-in-r3, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval, lem-finite-sum-laws, thm-continuous-implies-integrable]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Vocabulary and dimension conventions for the mechanical quantities of a force model in one inertial frame: the total mass, total momentum, centre of mass, relative positions and centre-of-mass velocity; the angular momentum, total torque, external torque and internal torque sum about a reference curve; the kinetic energy, the power of the total force and the work over a time interval. The item defines these symbols from the model's particles and force map and fixes their frames; it asserts no balance, no conservation law and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3, printed pages 5-9 (PDF pages 11-15): the total mass M and centre of mass R = sum_i m_i r_i / M, the total momentum P = sum_i p_i, the total angular momentum L = sum_i L_i, the total kinetic energy T = (1/2) sum_i m_i rdot_i^2, and the definitions F^ext and tau^ext = sum_i r_i x F_i^ext"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.3, chapter pages 6-10 (PDF pages 10-14): the definitions T = m v^2 / 2 (Eq. 1.19), the angular momentum L = r x p of a particle (Eq. 1.31), the total angular momentum of a system (Eq. 1.36), and the torque tau = r x F (Eq. 1.34)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Definition

Fix a model of the force branch [[post-cm02-force-superposition]]: $N\ge1$
particle labels with fixed masses $m_{1},\dots,m_{N}>0$
([[post-cm01-worldlines]] clause (v)), a time window $I_{0}\subseteq\mathbb
R$, an open configuration domain $Q\subseteq\mathbb R^{3N}$ with its collision
set removed when the model's force law is singular there
([[def-cm01-configuration]]), and a force map
$$F:I_{0}\times Q\times(\mathbb R^{3})^{N}\longrightarrow(\mathbb R^{3})^{N}$$
with the standing continuity and state-local-Lipschitz hypotheses of clause
(iii) of that postulate. Fix one inertial frame of the model with adapted
coordinates $(t,x)$ ([[post-cm01-frames]]), and let $J\subseteq I_{0}$ be an
interval with nonempty interior ([[def-interval]]). All sums below range over
$i=1,\dots,N$ ([[lem-finite-sum-laws]]), and $u\times v$, $\langle u,v\rangle$
and $\lVert u\rVert_{2}$ are the cross product, the Euclidean inner product and
the Euclidean norm on $\mathbb R^{3}$ ([[def-cross-product-in-r3]],
[[def-euclidean-inner-product]]).

**(a) Curve families and motions.** A **curve family** of the model is a map
$x:J\to Q$, $x=(x_{1},\dots,x_{N})$, of class $C^{2}$ on $J$
([[def-cm01-velocity-acceleration]]); its **coordinate velocities** are
$w_{i}:=x_{i}'$ on $J$, written $w=(w_{1},\dots,w_{N}):J\to(\mathbb R^{3})^{N}$.
A curve family is a **motion** of the model when
$$m_{i}\ddot x_{i}(t)=F_{i}\bigl(t,x(t),w(t)\bigr)\qquad(i=1,\dots,N,\ t\in J),$$
the notion of clause (c) of [[def-cm02-newtonian-flow]]. Every quantity of
this definition is defined for an arbitrary curve family; the balance theorems
of this page state which of their properties use the equations of motion.
Along a curve family the force map is evaluated at $(t,x(t),w(t))\in
I_{0}\times Q\times(\mathbb R^{3})^{N}$; when the model invokes the
external-plus-pair presentation of clause (i) of [[post-cm02-interactions]],
the maps $F_{i}^{\mathrm{ext}}$ and $F_{ij}$ are evaluated at their declared
arguments on the motion's state graph, where the presentation is an identity
for $F_{i}$.

**(b) Total mass, total momentum, centre of mass, relative positions.** Define
$$M:=\sum_{i}m_{i}>0,\qquad p_{i}:=m_{i}w_{i},\qquad P(t):=\sum_{i}p_{i}(t),\qquad X(t):=M^{-1}\sum_{i}m_{i}x_{i}(t),\qquad \rho_{i}:=x_{i}-X.$$
Here $p_{i}$ is the **momentum** of label $i$, $P$ the **total momentum**, $X$
the **centre of mass** and $\rho_{i}$ the **relative position** of label $i$.
The dimensions are $[M]=\mu$, $[p_{i}]=[P]=\mu\ell\tau^{-1}$ (read in
$\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$) and $[X]=[\rho_{i}]=\ell$
([[def-cm01-units]]). Since $x_{i}$ is $C^{2}$, each $p_{i}$ is $C^{1}$ and
each of $P$, $X$, $\rho_{i}$ is differentiable, as a finite sum of
differentiable curves ([[def-vector-valued-derivative-and-integral]]); write
$$V:=X'$$
for the **centre-of-mass velocity**. The algebraic identities
$\sum_{i}m_{i}\rho_{i}=0$, $P=MV$ and the splitting of the kinetic sum
$\sum_{i}m_{i}\lVert w_{i}\rVert_{2}^{2}$ are proved in the kinetic-splitting
theorem of this page; they are not part of this definition.

**(c) Angular momentum, torque, internal torque sum.** Let a **reference
curve** $o:J\to\mathbb R^{3}$ of class $C^{1}$ be given: a point about which
moments are taken, allowed to move (a constant map $o\equiv o_{0}$ is the
fixed-origin case). Define the **angular momentum about $o$** and the **total
torque about $o$** by
$$J_{o}(t):=\sum_{i}\bigl(x_{i}(t)-o(t)\bigr)\times p_{i}(t),\qquad T_{o}(t):=\sum_{i}\bigl(x_{i}(t)-o(t)\bigr)\times F_{i}\bigl(t,x(t),w(t)\bigr),$$
with dimensions $[J_{o}]=\mu\ell^{2}\tau^{-1}$ (read in
$\mathrm{kg}\,\mathrm m^{2}\,\mathrm s^{-1}$) and
$[T_{o}]=\mu\ell^{2}\tau^{-2}$ (read in $\mathrm N\,\mathrm m$). When the
model invokes the external-plus-pair presentation of clause (i) of
[[post-cm02-interactions]], define in addition the **external torque** and the
**internal torque sum**
$$T_{o}^{\mathrm{ext}}(t):=\sum_{i}\bigl(x_{i}(t)-o(t)\bigr)\times F_{i}^{\mathrm{ext}}\bigl(t,x_{i}(t),w_{i}(t)\bigr),\qquad I(t):=\sum_{i<j}\bigl(x_{i}(t)-x_{j}(t)\bigr)\times F_{ij}\bigl(t,x_{i}(t),x_{j}(t),w_{i}(t),w_{j}(t)\bigr).$$
The sum $I$ does not involve $o$; it is defined whenever the pair
presentation is declared. The identity $T_{o}=T_{o}^{\mathrm{ext}}+I$ uses the
antisymmetry $F_{ji}=-F_{ij}$ of clause (ii)1 of that postulate to reindex the
ordered pairs and is proved as step 1.1 of the angular-momentum balance of
this page.

**(d) Kinetic energy, power, work.** Define the **kinetic energy** and the
**power of the total force** along the curve family by
$$K(t):=\frac12\sum_{i}m_{i}\lVert w_{i}(t)\rVert_{2}^{2},\qquad \mathcal P(t):=\sum_{i}\bigl\langle F_{i}\bigl(t,x(t),w(t)\bigr),\,w_{i}(t)\bigr\rangle,$$
of dimensions $[K]=\mu\ell^{2}\tau^{-2}$ (read in joules) and
$[\mathcal P]=\mu\ell^{2}\tau^{-3}$ (read in watts), and for
$t_{0}<t_{1}$ in $J$ the **work of the total force** over $[t_{0},t_{1}]$ by
$$W([t_{0},t_{1}]):=\int_{t_{0}}^{t_{1}}\mathcal P(t)\,dt,$$
of dimension $\mu\ell^{2}\tau^{-2}$ (read in joules); $\mathcal P$ is
continuous on $J$ because $F$, $x$ and $w$ are continuous, so the Riemann
integral exists ([[thm-continuous-implies-integrable]], see the page
`the-riemann-integral`). The **potential energy** is not defined by this item:
it belongs to the potential branch of the model and is defined in the
potential-and-mechanical-energy item of this page.

**(e) Frame and reference-point dependence.** The quantities $p_{i}$, $P$,
$X$, $\rho_{i}$, $V$, $K$, $\mathcal P$ and $W$ are read in the one inertial
frame fixed above, and $J_{o}$, $T_{o}$, $T_{o}^{\mathrm{ext}}$, $I$ are read
about the reference curve $o$ in that frame. They are not invariant under a
change of frame or reference point: their transformation laws under a change
of inertial frame are stated and proved in the frame-transformation item of
this page, and every conservation statement involving them names the frame
and the reference point in which it is made.

**(f) Status.** This item is a definition: it introduces symbols, their
domains, regularity, dimensions and frame dependence from the model's data.
It adopts no force law beyond the force branch already fixed, asserts no
balance of any of these quantities and records no measured value.

## Remarks

- **Curve families versus motions.** The quantities are defined on any $C^{2}$
  curve family in $Q$, so the algebraic identities among them (the splitting
  of [[pthm-cm03-centre-of-mass-and-kinetic-splitting]]) hold without the
  equations of motion; the balance theorems
  [[pthm-cm03-momentum-balance]], [[pthm-cm03-angular-momentum-balance]],
  [[pthm-cm03-work-energy]] and [[pthm-cm03-energy-balance]] use the equations
  of motion explicitly, and each states its hypotheses on the model's
  interaction structure.

- **The reference curve and the fixed origin.** For a constant reference curve
  $o\equiv o_{0}$ the quantity $J_{o}$ is the angular momentum about the fixed
  point $o_{0}$; for the zero reference curve it is $\sum_{i}x_{i}\times p_{i}$,
  the expression of the mathematical supplier
  [[thm-cm-momentum-and-angular-momentum-balance]]. The point $o(t)$ is a
  coordinate triple in the fixed frame, not a worldline of the model; a moving
  reference curve is used only to state the moving-origin correction.

- **The internal torque sum is not a smallness statement.** $I$ collects one
  term per unordered pair of labels; its vanishing is a hypothesis on the
  evaluated pair forces (for instance the centrality clause (ii)2 of
  [[post-cm02-interactions]] implies it), not a consequence of the equations
  of motion.
