---
id: def-cm14-hamilton-jacobi-equation
kind: definition
title: "The Hamilton-Jacobi equation of a declared potential presentation: the class of action-dimension functions $S$ with $S_t+H(t,q,S_q)=0$ in one momentum chart"
status: draft
origin: pipeline
domain: physics
dependency_level: 19
deps: [def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, def-cm12-hyperregularity, def-cm12-cotangent-momentum, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm13-two-form, def-cm13-canonical-form, def-cm01-configuration, def-cm01-units, def-cm-hamilton-jacobi-equation-and-complete-integral, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-metric-topology, def-interval]
dependency_roles:
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm12-hyperregularity: formulation-prerequisite
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm13-two-form: formulation-prerequisite
  def-cm13-canonical-form: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-hamilton-jacobi-equation-and-complete-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-metric-topology: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The Hamilton-Jacobi equation of a declared hyperregular potential presentation of the framework's force branch, read in one of the presentation's momentum charts: the class of $C^3$ functions $S$ of the chart variables $(t,q,\\alpha)$ that satisfy $S_t+H(t,q,S_q)=0$ for the branch Hamiltonian $H$ of that chart, together with the action dimension of $S$ and the dependence of the equation on the declared chart, inverse Legendre branch and potential representative. The item defines a function class relative to that datum; it asserts no existence of solutions, no equation of motion for the model, no completeness of any flow and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.7 'The Hamilton-Jacobi Equation', printed pages 121-126 (PDF pages 127-132): the equation $W_t=-H(q,\\partial W/\\partial q,t)$, its construction from the endpoint action and the recovery of Hamilton's equations with $p=\\partial W/\\partial q$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.4 (Hamilton-Jacobi theory and Jacobi's complete integral)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.4, Eqs. (10.67)-(10.72), chapter pages 13-14 (PDF pages 249-250): the endpoint-momentum construction of the classical action and the Hamilton-Jacobi equation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 4, Sections 4.1-4.6, printed pages 60-91 (PDF pages 63-94): canonical variables, Hamilton-Jacobi separation and action conventions"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---
## Definition

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the
data and conventions of [[def-cm12-cotangent-momentum]]: masses
$m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$
([[def-cm01-configuration]]), $C^{2}$ potential $U$ and residual forces $d$
of the standing regularity ([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]]). Assume the presentation is hyperregular
on its charts, with the Hamiltonians $H$ and $\widetilde H$ and inverse
Legendre branches of [[def-cm12-hamiltonian]],
[[def-cm12-hyperregularity]],
[[pthm-cm12-mechanical-hyperregularity]]. The momentum charts, their forms
and their canonical coordinates are those of [[def-cm13-two-form]] and
[[def-cm13-canonical-form]]; dimensions are read by [[def-cm01-units]] and
differentiability classes are those of
[[def-ck-euclidean-maps-and-diffeomorphisms]].

**(a) The chart datum.** Fix one momentum chart of the presentation: either
the Cartesian chart with the coordinates $(t,x,p)$ on
$I_{0}\times Q\times\mathbb R^{3N}$ and the Hamiltonian $H$ of
[[def-cm12-hamiltonian]] clause (a), or the chart of a
generalized-coordinate map $X:\Omega\to Q$ with $r$ coordinates, the
coordinates $(t,q,p)$ on $I_{0}\times\Omega\times\mathbb R^{r}$ and the
Hamiltonian $\widetilde H$ of clause (b). Write $m\in\{3N,r\}$ for the
number of momentum pairs, let $V\subseteq\mathbb R^{m}$ denote the
configuration-coordinate domain of the chart ($Q$ in the Cartesian case,
$\Omega$ in the other), and write $H$ for the corresponding Hamiltonian,

$$H:I_{0}\times V\times\mathbb R^{m}\longrightarrow\mathbb R,\qquad (t,q,p)\longmapsto H(t,q,p),$$

a function of class $C^{2}$ and dimension $\mu\ell^{2}\tau^{-2}$ (energy) by
[[pthm-cm12-mechanical-hyperregularity]]. Let $J'\subseteq I_{0}$,
$U'\subseteq V$ and $A'\subseteq\mathbb R^{m}$ be nonempty open sets
([[def-metric-topology]], [[def-interval]]).

**(b) Solutions of the equation.** A map

$$S:J'\times U'\times A'\longrightarrow\mathbb R,\qquad (t,q,\alpha)\longmapsto S(t,q,\alpha),$$

of class $C^{3}$ **solves the Hamilton-Jacobi equation associated with $H$
on $J'\times U'\times A'$** when

$$S_{t}(t,q,\alpha)+H\bigl(t,\,q,\,S_{q}(t,q,\alpha)\bigr)=0\qquad\bigl((t,q,\alpha)\in J'\times U'\times A'\bigr),$$
where $S_{t}$ is the partial derivative in $t$ and
$S_{q}=(S_{q^{1}},\dots,S_{q^{m}})$ is the gradient in $q$
([[def-directional-and-partial-derivatives]],
[[def-jacobian-matrix-and-gradient]]); the momentum slot of $H$ is
substituted by $p=S_{q}(t,q,\alpha)$. This is exactly the mathematical
Hamilton-Jacobi equation of
[[def-cm-hamilton-jacobi-equation-and-complete-integral]] associated with
the function $H$ on the open set $J'\times U'\times\mathbb R^{m}$, read in
the chart coordinates $(t,q,p)$; the two definitions determine the same
class of functions.

**(c) Dimensions and chart consistency.** The equation forces
$[S]=\mu\ell^{2}\tau^{-1}$ (action): $S_{t}$ has dimension $[S]\tau^{-1}$
and $H$ has dimension $\mu\ell^{2}\tau^{-2}$, while each $S_{q^{a}}$ has
dimension $[S]/\gamma_{a}$ with $\gamma_{a}$ the declared dimension of the
coordinate $q^{a}$ in this chart; the substitution is dimensionally
consistent in every chart because the chart momenta of
[[def-cm12-cotangent-momentum]] have dimension
$\mu\ell^{2}\tau^{-1}\gamma_{a}^{-1}$. In the Cartesian chart all
$\gamma_{a}=\ell$ and $[S]/\ell=\mu\ell\tau^{-1}$, the momentum dimension.

**(d) Status.** The equation is attached to the declared datum: replacing
the chart, the inverse Legendre branch or the potential representative
changes $H$ by the rules recorded in clause (d) of
[[def-cm12-hamiltonian]] and hence changes the equation, and a solution
family $S$ is a solution for that datum only. The item defines a class of
functions; whether a given datum admits solutions, and how solutions
produce curves of the model, is not asserted here. In particular no
existence theorem, no global solution, no equation of motion for the model,
no conservation law and no measured value is claimed.

## Remarks

- **Why the parameters are left free.** The third variable $\alpha$ ranges
  over an open subset of the chart-coordinate space and is not constrained
  by this definition. A *complete integral* additionally requires the
  nondegeneracy of the mixed derivative $S_{q\alpha}$; that requirement and
  the physical reading of the parameters are the subject of
  [[def-cm14-complete-integral]].

- **Time-dependent Hamiltonians are included.** The equation as written
  allows $\partial_{t}U\not\equiv0$ and $d\not\equiv0$ in the branch
  Hamiltonian only through the declared potential presentation: the
  residual forces of $d$ are not part of $H$ unless they are presented by a
  potential ([[pthm-cm12-mechanical-hyperregularity]]; the exact criterion
  is clause 4 of the companion page's Hamiltonian-field item
  `pthm-cm13-hamiltonian-field-integrates-the-model-equations`).
