---
id: def-cm04-one-dimensional-models-and-equilibria
kind: definition
title: "The one-dimensional force models: data, motions, phase system, potential presentation, energy and equilibria"
status: published
origin: session
domain: physics
dependency_level: 12
deps: [post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm03-potential-and-mechanical-energy, def-cm01-units, post-cm01-worldlines, def-cm-equilibrium-and-lyapunov-stability, def-cm-oscillator-model-and-phase-system, def-locally-lipschitz-in-the-state-variable, def-first-order-ode-initial-value-problem-and-solution, def-vector-valued-derivative-and-integral, def-derivative, def-interval, thm-picard-lindelof-local-existence-and-uniqueness]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared one-dimensional model class of the framework: a single scalar coordinate with an open configuration interval, a fixed positive mass, and a scalar force law with the standing continuity and state-Lipschitz regularity; the motions, the phase system, the potential presentation with a scalar potential and residual forces, the mechanical energy, the equilibria of a time- and velocity-independent force law, and the oscillator-type data (m,c,k,f). The item fixes vocabulary, domains, regularity and dimensions for the conservative and dissipative models of this page; it adopts no force law of nature, asserts no existence, uniqueness, conservation or stability statement, and records no measured value."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 3.1, Eqs. (3.1)-(3.4), chapter pages 1-2 (PDF pages 33-34): the one-dimensional particle with Lagrangian L = m xdot^2/2 - U(x,t), its equation m xddot = -dU/dx, and the effectively one-dimensional class m_ef qddot = -dU_ef/dq with effective mass and effective potential, which need not coincide with the genuine kinetic and potential energies"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 3, introduction and Sections 3.1-3.2, printed pages 52-55 (PDF pages 55-58): expansion about a minimum of the potential, the quadratic Lagrangian (T_ij eta-dot_i eta-dot_j - V_ij eta_i eta_j)/2 and the linear equations of motion about the minimum"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Data of a one-dimensional model.** A **one-dimensional model** is
declared by the following data: a fixed positive **mass** $m>0$, of dimension
$\mu$ read in kilograms ([[def-cm01-units]], [[post-cm01-worldlines]] clause
(v)); a **time window** $I_{0}\subseteq\mathbb R$, a nondegenerate open
interval read in seconds ([[def-interval]]); an open **configuration
domain** $Q\subseteq\mathbb R$, a nonempty open interval of the real line
read in metres; and a **force law**
$$F:I_{0}\times Q\times\mathbb R\longrightarrow\mathbb R,\qquad (t,x,v)\longmapsto F(t,x,v),$$
of dimension $\mu\ell\tau^{-2}$, read in newtons, subject to the **standing
regularity** of the framework: $F$ is continuous on $I_{0}\times Q\times
\mathbb R$ and locally Lipschitz in the state variable $(x,v)$ locally
uniformly in time ([[def-locally-lipschitz-in-the-state-variable]]). The
framework's three-dimensional force branch is
[[post-cm02-force-superposition]]; the class declared here is a **restricted
model class** adopted at the same primitive level, in which the physical
position of a single label along one coordinate is the whole state. A model
whose force law fails the standing regularity is not a one-dimensional model
of this class. When a statement differentiates the force law or the potential,
the additional smoothness it needs is stated in that statement.

**(b) Motions.** Let $J\subseteq I_{0}$ be an interval with nonempty interior
(endpoints read with one-sided derivatives, as in
[[def-first-order-ode-initial-value-problem-and-solution]]). A **motion** of
the model on $J$ is a curve $x:J\to Q$ of class $C^{2}$
([[def-vector-valued-derivative-and-integral]]) with
$$m\,x''(t)=F\bigl(t,x(t),x'(t)\bigr)\qquad(t\in J).$$
In the notation of the three-dimensional branch this is the scalar
restriction of its equation of motion clause (iv) to a single coordinate; the
motions of the present class are declared to be these curves. A **datum** at
time $t_{0}\in I_{0}$ is a triple $(t_{0},x_{0},v_{0})$ with $x_{0}\in Q$ and
$v_{0}\in\mathbb R$; a motion $x$ **takes** the datum when $x(t_{0})=x_{0}$
and $x'(t_{0})=v_{0}$.

**(c) Phase system.** The **phase system** of the model is the first-order
system on the open set $I_{0}\times Q\times\mathbb R\subseteq\mathbb R^{3}$
with right-hand side
$$G_{F}(t,x,v):=\Bigl(v,\ \frac{F(t,x,v)}{m}\Bigr),$$
read as a system of [[def-first-order-ode-initial-value-problem-and-solution]];
its state variable is $z=(x,v)$. For an interval $J\subseteq I_0$ with
nonempty interior, a **phase solution** on $J$ means a differentiable curve
$z:J\to Q\times\mathbb R$ satisfying $z'(t)=G_F(t,z(t))$ for every $t\in J$,
with domain-relative derivatives at included endpoints. Equivalently, for
any $t_0\in J$ it is a solution in the cited IVP sense with datum
$(t_0,z(t_0))$. For a $C^2$ curve $x:J\to Q$, being a motion is equivalent
to $t\mapsto(x(t),x'(t))$ being a phase solution: the first component is
$x'=v$ and the second is $x''=F(t,x,x')/m$. Conversely a phase solution
$(x,v)$ has $x'=v$ and $v'=F(t,x,v)/m$; continuity of $F$ makes $v'$ continuous,
so $x$ is $C^2$ and is a motion. This is the argument of clause (c) of
[[def-cm02-newtonian-flow]] read in one
coordinate. Here $x$ is the **position** or **displacement** coordinate and
$v$ the **velocity** coordinate; both are read in the fixed inertial frame in
which the model is declared. The phase system inherits the standing
regularity: $G_{F}$ is continuous and locally Lipschitz in the state variable
locally uniformly in time, so the Picard–Lindelöf hypotheses of
[[thm-picard-lindelof-local-existence-and-uniqueness]] hold at every point of
its domain.

**(d) Potential presentation, residual forces and energy.** The model
**presents its force law through a potential** when it declares a function
$U:Q\to\mathbb R$ of class $C^{2}$ in the sense of clause (a) of
[[def-cm03-potential-and-mechanical-energy]] of dimension
$\mu\ell^{2}\tau^{-2}$, read in joules, and a **residual force**
$d:I_{0}\times Q\times\mathbb R\to\mathbb R$ of the standing regularity of
(a), with
$$F(t,x,v)=-U'(x)+d(t,x,v)\qquad\bigl((t,x,v)\in I_{0}\times Q\times\mathbb R\bigr);$$
here $U'$ is the ordinary derivative. This is the one-coordinate case of the
potential presentation of [[def-cm03-potential-and-mechanical-energy]] clause
(a) for a time- and velocity-independent potential, and the scalar
$U$ is a **potential energy** of the model's potential part. The model is a
**global potential model** (equivalently, in the framework's usage, a
**conservative model**) when $d\equiv0$; the term "conservative" is used only
in this sense, as recorded in that definition. For a conservative model the
**mechanical energy** is the function
$$E:Q\times\mathbb R\longrightarrow\mathbb R,\qquad E(x,v):=\tfrac12 m v^{2}+U(x),$$
of dimension $\mu\ell^{2}\tau^{-2}$. For a model with declared residual
forces, the **mechanical energy along a motion** $x:J\to Q$ is
$E(t):=\tfrac12m\,x'(t)^{2}+U(x(t))$; it is defined along curve families even
though the force law is not presented through $U$ alone.

**(e) Equilibria.** A **time- and velocity-independent force law** on $Q$ is
one of the form $F(t,x,v)=f(x)$ for a function $f:Q\to\mathbb R$; the model
is then **autonomous**. For such a law, a point $x_{*}\in Q$ is an
**equilibrium** (or **rest position**) when $f(x_{*})=0$, and the phase-plane
point $(x_{*},0)$ is the corresponding **rest point** of the phase system;
the constant curve $x\equiv x_{*}$ is then a motion. When the force law is
presented as $f=-U'$ with $U$ of class $C^{2}$, the equilibria are exactly
the critical points of $U$:
$f(x_{*})=0\iff U'(x_{*})=0$. A point $x_{0}\in Q$ is a **strict local
minimum** of $U$ when $U(x)>U(x_{0})$ for every $x\in Q$ with $0<\lvert
x-x_{0}\rvert<r_{0}$ for some $r_{0}>0$. The **Lyapunov stability** and
**asymptotic stability** of a rest point of the autonomous phase system are
the notions of [[def-cm-equilibrium-and-lyapunov-stability]] applied to the
field $G_{F}$; they are not defined here anew.

**(f) Oscillator-type data.** Let $m>0$, $c\ge0$, $k\in\mathbb R$ and let
$f:I_{0}\to\mathbb R$ be continuous. A model **is of oscillator type with
data $(m,c,k,f)$** when its force law has the form
$$F(t,x,v)=f(t)-c\,v-k\,x\qquad\bigl((t,x,v)\in I_{0}\times Q\times\mathbb R\bigr)$$
with $Q$ a nonempty open interval containing $0$ when the equation is read
about the origin, and the parameters are read with dimensions $[c]=\mu\tau^{-1}$
(kilograms per second), $[k]=\mu\tau^{-2}$ (kilograms per second squared) and
$[f]=\mu\ell\tau^{-2}$ (newtons). For such a model the equation of motion is
the second-order equation $m\,x''+c\,x'+k\,x=f(t)$, and the motions are
exactly the restrictions of the solutions of the mathematical model of
[[def-cm-oscillator-model-and-phase-system]] with the same data, by the
identification of that definition's phase system with the phase system (c).
The parameters $c$ and $k$ are model data: they enter the model's declaration
and are not derived by this item.

**(g) Status.** This item introduces vocabulary, objects, regularity and
dimensions; it contains no existence, uniqueness, conservation, stability or
boundedness assertion, no force law of nature and no measured value. In
particular, clause (a) **declares** the one-dimensional class rather than
deriving it from the three-dimensional branch, and clauses (d)-(f) only fix
which data a model of the class carries. Every later statement of this page
names the model data, the potential representative and the initial datum it
uses.

## Remarks

- **Why a separate restricted class.** The three-dimensional branch
  [[post-cm02-force-superposition]] is formulated for $N$ labels in
  $\mathbb R^{3N}$; the models of this page are declared in one scalar
  coordinate, as the framework's one-dimensional class, because every claim
  below is a statement about that scalar equation. Reading a model of this
  class as the straight-line motion of a three-dimensional label, or as the
  effective reduction of a constrained system (for example the angle
  coordinate of the pendulum), is a modelling identification that is stated
  and used only where a consumer item declares it, together with the extra
  assumptions it needs; it is not a premise of this definition.

- **The declared representative of the potential.** As in
  [[def-cm03-potential-and-mechanical-energy]] clause (c), adding a constant
  to $U$ changes no force; for the scalar class no time-dependent
  normalization is admitted in clause (d), because the potential is declared
  time-independent, and every energy statement of this page names the
  representative it uses.

- **Dimensions are read from the framework conventions.** The length
  coordinate is read in metres, time in seconds and mass in kilograms, and
  the dimension map for products, quotients and derivatives is the one fixed
  by [[def-cm01-units]]; the entries $[c]$, $[k]$ and $[f]$ of clause (f)
  follow from it. No numerical value of any parameter is asserted.

