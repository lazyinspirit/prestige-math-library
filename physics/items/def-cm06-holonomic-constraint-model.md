---
id: def-cm06-holonomic-constraint-model
kind: definition
title: "Holonomic-constraint models of the force branch: constraint data, the constrained equation, virtual displacements and the scleronomic/rheonomic distinction"
status: draft
origin: session
domain: physics
dependency_level: 9
deps: [post-cm02-force-superposition, post-cm01-frames, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-cm-holonomic-constraint-and-ideal-reactions, thm-parametrized-implicit-function-theorem-with-higher-regularity, thm-a-regular-level-set-is-an-embedded-submanifold, def-regular-and-critical-points-and-values, def-embedded-submanifold-and-slice-chart, cor-matrix-rank-nullity, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-vector-valued-derivative-and-integral, thm-chain-rule-for-total-derivatives, def-interval]
dependency_roles:
  post-cm02-force-superposition: physical-assumption
  post-cm01-frames: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-holonomic-constraint-and-ideal-reactions: mathematical-premise
  thm-parametrized-implicit-function-theorem-with-higher-regularity: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  def-regular-and-critical-points-and-values: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  cor-matrix-rank-nullity: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Definition of the holonomic-constraint branch of the force model: the declared regular constraint map on an ambient set, the constraint locus and its instantaneous configuration manifolds, constrained curve families and permitted velocities, the virtual displacements, the reaction field and the constrained equation of motion, the consistent initial data, and the scleronomic/rheonomic classification of the constraint locus. The item declares a model class; it adopts no ideal-reaction law, no force law beyond the force branch and no measured value, and it does not assert that any real mechanism is described by the class."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.3.1 'Holonomic Constraints', Eqs. (2.29)-(2.33), printed pages 17-19 (PDF pages 23-25): holonomic constraints f_alpha(x_A,t)=0, the time-dependent form, the multipliers and the constraint-force term lambda_alpha d f_alpha/d x_A"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 2.1-2.2, chapter pages 1-3 and Fig. 2.1: generalized coordinates defining a configuration together with constraints, and the bead on a rotating ring as a system with one degree of freedom"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Sections 1.4-1.5, printed pages 19-25 (PDF pages 22-28): configurations constrained by maps f:U x I -> R^k of full spatial rank, admissible virtual displacements as the kernel of the spatial derivative at fixed time, and ideal constraint reactions as covectors annihilating them"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Definition

Adopt the force branch of [[post-cm02-force-superposition]]: $N\ge1$ particle
labels with fixed masses $m_{1},\dots,m_{N}>0$, a nondegenerate open time window
$I_{0}\subseteq\mathbb R$, an open configuration domain $Q\subseteq\mathbb R^{3N}$
([[def-cm01-configuration]] clause (a)), and a force map
$$F:I_{0}\times Q\times(\mathbb R^{3})^{N}\longrightarrow(\mathbb R^{3})^{N}$$
with the standing continuity and state-local-Lipschitz hypotheses of clause
(iii) of that postulate. Fix one inertial frame of the model with adapted
coordinates $(t,x)$ ([[post-cm01-frames]]), identify
$x=(x_{1},\dots,x_{N})\in(\mathbb R^{3})^{N}=\mathbb R^{3N}$ with the position
tuple of the labels ([[def-cm01-configuration]]), and let $\mathsf M$ be the
mass operator of clause (d) of that definition, $\mathsf M(x_{1},\dots,x_{N})
=(m_{1}x_{1},\dots,m_{N}x_{N})$, a symmetric positive definite linear map with
block-diagonal matrix and blocks $m_{i}I_{3}$. All components below are read in
this frame, and dimensions are read by [[def-cm01-units]].

**(a) Constraint datum.** A **holonomic-constraint datum** on this data is a
triple $(O,k,G)$ with:

1. an **ambient set** $O\subseteq\mathbb R\times\mathbb R^{3N}$, open and
   nonempty;
2. an integer $k$ with $1\le k\le 3N-1$;
3. a map $G=(G_{1},\dots,G_{k}):O\to\mathbb R^{k}$ of class $C^{2}$
   ([[def-ck-euclidean-maps-and-diffeomorphisms]]), each component carrying a
   declared dimension $[G_{\alpha}]=\gamma_{\alpha}$ fixed by the model (the
   model may rescale a component by a nonzero constant, which changes
   $\gamma_{\alpha}$ and the component but not its zero set);

subject to the two hypotheses

4. **nonempty admissible locus:** the **constraint locus**
   $$\Sigma:=\bigl\{(t,x)\in O:\ G(t,x)=0\bigr\}$$
   is nonempty and contained in $I_{0}\times Q$: every constrained
   configuration is an admissible configuration of the force-branch model and
   every constrained time lies in its time window;
5. **regularity:** for every $(t,x)\in\Sigma$ the Jacobian $D_{x}G(t,x)$
   ([[def-jacobian-matrix-and-gradient]]) is surjective, equivalently has rank
   $k$.

For $t\in\mathbb R$ write $\Sigma_{t}:=\{x\in\mathbb R^{3N}:(t,x)\in\Sigma\}$
for the **instantaneous constraint locus**. Here a **$C^{2}$ embedded
submanifold of dimension $d$** in $\mathbb R^{n}$ means a subset $S$, with
its inherited topology, such that each $p\in S$ has an open neighbourhood
$U\subseteq\mathbb R^{n}$ and a $C^{2}$ diffeomorphism
$h:U\to W$ onto an open $W\subseteq\mathbb R^{n}$ satisfying
$h(S\cap U)=W\cap(\mathbb R^{d}\times\{0\})$; both $h$ and its inverse
are $C^{2}$ in the sense of [[def-ck-euclidean-maps-and-diffeomorphisms]].
This is the finite-regularity slice convention used for these loci;
[[def-embedded-submanifold-and-slice-chart]] instead requires smooth charts.

Each nonempty $\Sigma_t$ is a $C^{2}$ embedded submanifold of dimension
$3N-k$. Indeed, at any $p\in\Sigma_t$ choose $k$ spatial columns of
$D_xG(t,p)$ giving an invertible minor, and permute coordinates as
$x=(u,v)\in\mathbb R^{3N-k}\times\mathbb R^k$. The fixed-time map
$H(u,v):=G(t,(u,v))$ is $C^2$ on the open slice of $O$, vanishes at $p$,
and has invertible $D_vH(p)$. Apply
[[thm-parametrized-implicit-function-theorem-with-higher-regularity]] with
regularity order $2$ and no parameter block: on open neighbourhoods
$P\times Q$ of $p$, its zero set is exactly $v=\varphi(u)$ for a
$C^2$ map $\varphi:P\to Q$. The map
$h(u,v)=(u,v-\varphi(u))$ is a $C^2$ diffeomorphism onto the open set
$W=\{(u,w):u\in P,\ w+\varphi(u)\in Q\}$, with inverse
$(u,w)\mapsto(u,w+\varphi(u))$, and sends that graph to
$W\cap(\mathbb R^{3N-k}\times\{0\})$. This proves the claimed local
slice property. If $G$ is smooth, the smooth regular-value terminology of
[[def-regular-and-critical-points-and-values]] and the smooth conclusion of
[[thm-a-regular-level-set-is-an-embedded-submanifold]] also apply.
When $k=3N-1$ the instantaneous locus is locally a $C^2$ curve, and the number
$$\dim\Sigma_{t}=3N-k$$
is the **instantaneous degrees of freedom** of the constrained branch. The
set $V(t,x):=\ker D_{x}G(t,x)\subseteq\mathbb R^{3N}$ has dimension $3N-k$ by
the rank-nullity theorem for matrices ([[cor-matrix-rank-nullity]]) and is called the space of **virtual displacements** of the datum
at $(t,x)$; its elements are the first-order differences of constrained
configurations at fixed time, in the sense of the mathematical definition
[[def-cm-holonomic-constraint-and-ideal-reactions]]. A vector
$v\in\mathbb R^{3N}$ is a **permitted velocity** at $(t,x)\in O$ when
$$G_{t}(t,x)+D_{x}G(t,x)\,v=0 .$$

**(b) Constrained curve families.** Let $J\subseteq I_{0}$ be an interval with
nonempty interior ([[def-interval]]). A **constrained curve family** of the
datum is a map $x:J\to\mathbb R^{3N}$ of class $C^{2}$ with
$(t,x(t))\in O$ and $G(t,x(t))=0$ for every $t\in J$; writing
$x=(x_{1},\dots,x_{N})$ with coordinate curves $x_{i}:J\to\mathbb R^{3}$ and
$w_{i}:=x_{i}'$, the componentwise derivatives of
[[def-vector-valued-derivative-and-integral]] ([[def-cm01-velocity-acceleration]];
$w_{i}$ is the coordinate velocity of label $i$), the chain rule
([[thm-chain-rule-for-total-derivatives]]) applied to $t\mapsto G(t,x(t))$
gives
$$G_{t}\bigl(t,x(t)\bigr)+D_{x}G\bigl(t,x(t)\bigr)\,w(t)=0\qquad(t\in J),$$
so the velocity of a $C^{1}$ constrained curve family is permitted at every
time. A tuple $(t_{0},x_{0},v_{0})\in O\times\mathbb R^{3N}$ is **consistent
data** of the datum when $G(t_{0},x_{0})=0$ and
$G_{t}(t_{0},x_{0})+D_{x}G(t_{0},x_{0})v_{0}=0$; these are the initial data at
which constrained motions are posed below.

**(c) Reaction field and the constrained equation.** A **reaction field along
a curve family** $x:J\to\mathbb R^{3N}$ is a continuous map
$R:J\to\mathbb R^{3N}$, of force dimension $\mu\ell\tau^{-2}$ in each
component. The **equation of the constrained datum along $x$** is
$$\mathsf M\,x''(t)=F\bigl(t,x(t),w(t)\bigr)+R(t)\qquad(t\in J),$$
componentwise $m_{i}x_{i}''(t)=F_{i}(t,x(t),w(t))+R_{i}(t)$. A
**holonomic-constraint model** consists of the force-branch data, a
holonomic-constraint datum $(O,k,G)$, and the declaration that the position
tuple of the labels satisfies $G(t,x(t))=0$ for all times while a reaction
field acts: a **constrained motion** of the model (with reaction $R$) is a
constrained curve family $x:J\to\mathbb R^{3N}$ together with a reaction field
$R$ satisfying the displayed equation. The force map $F$ is the model's
declared interaction force of the force branch, and $R$ is the additional
force contribution exerted by the mechanism that realizes the constraint; the
total force along a constrained motion is the pointwise sum $F+R$ in the sense
of clause (v) of [[post-cm02-force-superposition]], read along the curve. The
reaction is **not** part of the force map: the constrained branch is the branch
excluded by clause (i) of that postulate, and the equation above is the
adopted equation of the constrained model. For any specified constrained curve
family $x$, this equation fixes the reaction uniquely as the residual field
$$R(t)=\mathsf Mx''(t)-F\bigl(t,x(t),x'(t)\bigr).$$
Without an additional reaction law, the constraint and this equation do not
select which constrained curve families are dynamically admissible: every
$C^{2}$ constrained curve can be paired with its continuous residual field to
satisfy the equation. The ideal-reaction law of the postulate of this page is
the additional model assumption that selects among these candidates by
requiring the reaction to annihilate the virtual displacements.

**(d) Scleronomic and rheonomic constraints.** The datum is **scleronomic**
when the constraint locus is time-independent, in the precise sense that there
is a set $N\subseteq\mathbb R^{3N}$ with
$$\Sigma=\bigl\{(t,x)\in O:\ x\in N\bigr\};$$
equivalently, membership in the locus is a condition on $x$ alone within $O$:
if $(t,x)\in\Sigma$ and $(t',x)\in O$, then $(t',x)\in\Sigma$ (the two
formulations are exchanged by passing between $N$ and the projection of
$\Sigma$ to $\mathbb R^{3N}$). For the standard product ambient set
$O=I_{0}\times Q$ the condition reads $\Sigma=I_{0}\times(N\cap Q)$. The datum
is **rheonomic** otherwise.

If the datum is scleronomic, then the declared presentation $G$, and every
$C^{2}$ presentation of the same locus with the rank hypothesis, satisfy
$$G_{t}(t,x)=0\qquad\text{for every }(t,x)\in\Sigma,$$
because for $x\in N$ every $(t,x)\in O$ lies in $\Sigma$, so $t\mapsto G(t,x)$
vanishes identically on the open set of times $\{t:(t,x)\in O\}$; this is the
form in which the classification is used by the balance theorems of this page.

The identity is a consequence of time-independence and **not** a criterion for
it. Write $s(x):=(x_{1})_{1}\in\mathbb R$ for the first Cartesian
component of particle $1$, of length dimension $\ell$, and fix a nonzero
speed $u$ of dimension $\ell\tau^{-1}$. The scalar presentation
$G(t,x):=(s(x)-ut)^{2}$, of dimension $\ell^{2}$, on
$O=\mathbb R\times\mathbb R^{3N}$ has the moving zero set $\{s(x)=ut\}$ while
$G_{t}(t,x)=-2u(s(x)-ut)$ vanishes at every point of that set; this presentation
violates the rank hypothesis, but the identity can also hold for a
rank-regular presentation: on
$O=\bigl((0,T_{*})\cup(2T_{*},3T_{*})\bigr)\times\mathbb R^{3N}$,
with $T_{*}>0$ of time dimension, the scalar $C^{2}$ map equal to
$s(x)$ on $(0,T_{*})\times\mathbb R^{3N}$ and to a fixed
$L_{*}>0$ of length dimension on $(2T_{*},3T_{*})\times\mathbb R^{3N}$
has dimension $\ell$ and the rank-$1$ zero set
$\Sigma=(0,T_{*})\times\{x\in\mathbb R^{3N}:s(x)=0\}$ with $G_{t}=0$ on $\Sigma$,
yet $\Sigma$ is not of the form $\{(t,x)\in O:x\in N\}$ for any $N$: the point
$(T_{*}/2,0)\in\Sigma$ would force $0\in N$, and then $(5T_{*}/2,0)\in O$ would lie in
$\Sigma$. Hence the classification is a property of the locus, and the
identity is used only in the direction proved above.

Under a nowhere-vanishing $C^{2}$ rescaling $G'=\rho G$ one has
$D_{x}G'=\rho\,D_{x}G$ and $G'_{t}=\rho_{t}G+\rho G_{t}=\rho G_{t}$ at the
points of $\Sigma$, so the virtual displacements and permitted velocities are
unchanged, the multiplier of a motion transforms as
$\lambda'=\rho^{-1}\lambda$, and the reaction $D_{x}G'^{\mathsf T}\lambda'$
and the product $-\lambda'\cdot G'_{t}=-\lambda\cdot G_{t}$ of the rheonomic
power theorem are unchanged at the locus.

**(e) Status.** This item defines a model class: it fixes the constraint
datum, the constrained curves, the virtual displacements, the reaction field
and the equation of the constrained branch. It adopts no ideal-reaction law
(that is the content of the ideal-reaction postulate of this page), no particular force
law, and no measured value. Whether a concrete apparatus — a frictionless
joint, a smooth track, a taut rod or string, a no-slip contact — is described
by a holonomic-constraint model is an application-level judgement recorded with
the apparatus, together with the regime in which the rigidity, frictionlessness
or contact assumptions are adequate; the framework itself attaches no empirical
claim to the class.

## Remarks

- **The constrained branch is a separate branch.** The equation of the force
  branch, $m_{i}x_{i}''=F_{i}$, is not the equation of a constrained motion
  unless $R=0$; conversely, a solution of the force-branch equation is a
  constrained motion with $R=0$ only if it also satisfies $G(t,x(t))=0$ and
  the permitted-velocity condition. Nothing in this definition asserts that
  $R$ is small, ideal or absent.

- **Presentation of the constraint.** The components $G_{\alpha}$ are
  redundant descriptions of the locus and are fixed only up to multiplication
  by an invertible matrix-valued function; the dimension count $3N-k$ and the
  virtual displacements at the locus are unchanged under such a
  re-presentation, whereas the multiplier of a later motion is tied to the
  declared components. This is why the multiplier is never a measured
  quantity in this framework; only the reaction enters the equation.

- **Time-dependent loci need not be graphs.** Nothing here asserts that the
  instantaneous loci $\Sigma_{t}$ are nonempty for every $t$ of $I_{0}$, nor
  that they vary continuously in a parameterization; the model is stated on
  the locus it declares, and questions of continuation in time belong to the
  solutions of the constrained equation, not to the definition.
