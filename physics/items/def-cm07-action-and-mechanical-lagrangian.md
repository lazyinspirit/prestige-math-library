---
id: def-cm07-action-and-mechanical-lagrangian
kind: definition
title: "The action functional of a force model with a potential presentation: the mechanical Lagrangian, its chart instance and its dimensions"
status: draft
origin: session
domain: physics
dependency_level: 12
deps: [post-cm02-force-superposition, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-cm03-potential-and-mechanical-energy, def-cm-time-dependent-lagrangian-and-action, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "For a nonempty configuration domain, the action functional of the framework's force branch with a declared potential presentation: the kinetic energy of the labels in an inertial frame, the mechanical Lagrangian K - U of the presentation, the open chart and the action integral over C^2 curves with fixed endpoints, the first variation and stationarity, and the dimensions of these objects. If the force postulate is instantiated on an empty configuration domain, there are no curves and this item has no action or stationarity instances. It defines model-derived objects only: it asserts no equation of motion, no conservation law, no minimisation property and no empirical value, and it does not claim that any apparatus is described by a Lagrangian or by the potential branch."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.1 'The Principle of Least Action', printed pages 10-13 (PDF pages 16-19): the action as the time integral of the Lagrangian, its variation and the stationarity condition"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 5.1-5.2 and 6.1-6.2: the action functional, its first variation and the standard mechanical Lagrangian T - U"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.1, chapter pages 1-2: generalized coordinates and the Lagrangian as kinetic minus potential energy"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Definition

Adopt one force model of [[post-cm02-force-superposition]]: $N\ge1$ particle labels
with fixed masses $m_{1},\dots,m_{N}>0$ (clause (i)), an open nondegenerate time
window $I_{0}\subseteq\mathbb R$, an open configuration domain $Q\subseteq\mathbb R^{3N}$
and a force map $F$ with the standing continuity and state-local-Lipschitz
hypotheses of clause (iii) of that postulate. Fix one inertial frame with adapted
coordinates $(t,x)$ and identify position tuples with points of
$\mathbb R^{3N}=(\mathbb R^{3})^{N}$ ([[def-cm01-configuration]]); dimensions are
read by [[def-cm01-units]], inner products and norms are Euclidean
([[def-euclidean-inner-product]]), and differentiability classes are those of
[[def-ck-euclidean-maps-and-diffeomorphisms]]. Let $\mathsf M$ be the mass
operator of clause (d) of [[def-cm01-configuration]],
$\mathsf M(x_{1},\dots,x_{N})=(m_{1}x_{1},\dots,m_{N}x_{N})$, a symmetric
positive definite linear map of $\mathbb R^{3N}$.

**(a) Kinetic energy.** The **kinetic energy** of the labels at coordinate
velocity $v\in(\mathbb R^{3})^{N}=\mathbb R^{3N}$ is

$$K(v):=\frac12\sum_{i=1}^{N}m_{i}\,\lvert v_{i}\rvert_{2}^{2}=\frac12\,v\cdot\mathsf M v .$$

$K$ is the restriction of a $C^{\infty}$ function of $(\mathbb R^{3})^{N}$ and has
dimension $\mu\ell^{2}\tau^{-2}$ (energy). Its Euclidean gradient is
$K'(v)=\mathsf M v$, because $\partial K/\partial v_{i}=m_{i}v_{i}$
([[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]]).

**(b) Mechanical Lagrangian of a potential presentation.** Let $(U,d)$ be a
potential presentation of the model's force map in the sense of clause (a) of
[[def-cm03-potential-and-mechanical-energy]]: a function
$U:I_{0}\times Q\to\mathbb R$ of class $C^{2}$ with dimension
$\mu\ell^{2}\tau^{-2}$ and residual forces $d=(d_{1},\dots,d_{N})$ such that
$$F_{i}(t,x,v)=-\nabla_{x_{i}}U(t,x)+d_{i}(t,x,v)$$
on the state domain. The **mechanical Lagrangian of the presentation** is

$$L:I_{0}\times Q\times\mathbb R^{3N}\longrightarrow\mathbb R,\qquad L(t,x,v):=K(v)-U(t,x).$$

$L$ is of class $C^{2}$ on its open domain and has dimension $\mu\ell^{2}\tau^{-2}$.
When $d\equiv0$ the presentation is a global potential model and $L$ is a
Lagrangian of the model itself; when $d\not\equiv0$, $L$ carries the potential
part only, and the residual force contribution $d$ is not included in $L$.
The
potential representative is part of the declared data: replacing $U$ by
$U+c(t)$ for differentiable $c:I_{0}\to\mathbb R$ replaces $L$ by $L-c(t)$
([[def-cm03-potential-and-mechanical-energy]] clause (c)).

**(c) Action, variations, stationarity.** Let $a<b$ be reals with
$[a,b]\subseteq I_{0}$. If $Q=\varnothing$, there is no map
$x:[a,b]\to Q$, so this clause has no action, variation or stationarity
instance. Assume $Q\ne\varnothing$ for the chart construction below, and put
$O:=I_{0}\times Q\times\mathbb R^{3N}$. The set $O$ is open and contains
$[a,b]\times Q\times\mathbb R^{3N}$, so with $n:=3N$ the pair $(O,L)$ is a
time-dependent Lagrangian chart over $[a,b]\times Q$ in the sense of
[[def-cm-time-dependent-lagrangian-and-action]]. **Admissible
curves** (the $C^{2}$ curves $x:[a,b]\to Q$ with the extension convention of
that definition), **variations** $\eta$ with $\eta(a)=\eta(b)=0$, the
**action**

$$S(x):=\int_{a}^{b}L\bigl(t,x(t),x'(t)\bigr)\,dt,$$

the **first variation** $\delta S(x)[\eta]$ and **stationarity** of $x$ are the
notions of [[def-cm-time-dependent-lagrangian-and-action]] instantiated at this
chart; the derivative $x'$ is the coordinate velocity ([[def-cm01-velocity-acceleration]]).
The action has dimension $\mu\ell^{2}\tau^{-1}$ (energy multiplied by time).
Write $E_{L}(x):[a,b]\to\mathbb R^{3N}$ for the Euler-Lagrange expression of
the instantiated chart.

**(d) Status.** This item defines the action functional and the Lagrangian of a
presentation from data already adopted in the model: no new force law, no
equation of motion and no measured value are introduced. The first variation
of $S$ exists for every admissible curve and variation and its formula, the
equivalence of stationarity with the vanishing of $E_{L}(x)$, and the relation
of both to the model's equation of motion are theorems of this page, not part
of the definition.

## Remarks

- **The Lagrangian is not unique.** The value of $L$ depends on the declared
  potential representative and on the split of the force map into potential
  and residual parts. Two presentations of the same force map with different
  splits produce the same model motions but different Lagrangians; the effect
  of changing the potential representative is a total time derivative, and the
  equations of motion are insensitive to it (the boundary-gauge theorem of this
  page).

- **Velocity and configuration slots.** The three arguments of $L$ are
  $(t,x,v)$ with $x\in Q$ the configuration and $v$ the coordinate velocity in
  the fixed inertial frame; the kinetic energy uses the fixed masses and the
  coordinate velocity, not any generalized velocity. Generalized coordinates
  enter only through the substitution construction of this page.

- **Fixed endpoints.** Stationarity is defined with variations vanishing at
  both endpoints, exactly as in [[def-cm-time-dependent-lagrangian-and-action]].
  The endpoint-action differential and free-endpoint problems belong to the
  Hamiltonian development and are not asserted here.
