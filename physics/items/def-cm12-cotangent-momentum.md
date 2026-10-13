---
id: def-cm12-cotangent-momentum
kind: definition
title: "The momentum of a potential presentation: the fibre derivative of the mechanical Lagrangian, the Cartesian momentum Mv and generalized momenta"
status: published
origin: session
domain: physics
dependency_level: 14
deps: [def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm-legendre-map-in-a-time-dependent-chart, def-cm-time-dependent-lagrangian-and-action, def-cm01-configuration, def-cm01-units, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The momentum datum of the framework's force branch with a declared potential presentation: the Cartesian momentum Mv of the labelled particles in an inertial frame, its identification with the fibre derivative of the mechanical Lagrangian, the generalized momenta G(q)v of a declared generalized-coordinate map, their dimensions and their pairings with velocities. The item defines model-derived objects only: it asserts no equation of motion, no conservation law, no inverse-Legendre branch and no measured value, and it does not claim that any apparatus is described by the potential branch."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.1, printed pages 80-84 (PDF pages 86-90): the generalized momenta p_i = dL/dqdot_i, the warning that they coincide with the usual momentum only in Cartesian coordinates, and the phase space of coordinates and momenta"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.1, chapter pages 1-2: the generalized momentum p_j = dL/dqdot_j and the Hamiltonian defined from it"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed pages 8-9 (PDF pages 11-12): canonical momenta promoted to coordinates, p_i = dL/dqdot_i, and the phase space of coordinates and momenta"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 3.1.1: the momentum state function as the partial derivative of the Lagrangian and the Legendre transformation replacing velocity dependence by momentum dependence"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Definition

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], in the
fixed inertial frame with adapted coordinates $(t,x)$ used there: $N\ge1$
labels with masses $m_{1},\dots,m_{N}>0$, open configuration domain
$Q\subseteq\mathbb R^{3N}$, time window $I_{0}$, mass operator $\mathsf M$
([[def-cm01-configuration]]), $C^{2}$ potential $U:I_{0}\times Q\to\mathbb R$
of dimension $\mu\ell^{2}\tau^{-2}$ and residual forces $d$ of the standing
regularity ([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]]). Dimensions are read by [[def-cm01-units]],
the Euclidean inner product of $\mathbb R^{3N}$ is [[def-euclidean-inner-product]],
and gradients and Jacobians are those of [[def-jacobian-matrix-and-gradient]]
and [[def-directional-and-partial-derivatives]].

**(a) Cartesian momentum.** For a state $(t,x,v)\in I_{0}\times Q\times\mathbb R^{3N}$
define the **momentum of the labels** by

$$p(t,x,v):=\mathsf M v\;=\;(m_{1}v_{1},\dots,m_{N}v_{N}),$$

whose label components are $p_{i}=m_{i}v_{i}$ ([[def-cm01-configuration]]
clause (d)); its dimension is $\mu\ell\tau^{-1}$ (read in
$\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$). The space $\mathbb R^{3N}$ is
identified with its dual by the Euclidean inner product, so that $p$ is a
**covector** acting on a velocity $w$ by the dot product $p\cdot w$. The pair
$(x,p)$ is the **cotangent datum** of the state, and $I_{0}\times Q\times\mathbb R^{3N}$
with coordinates $(t,x,p)$ is the **momentum phase chart** of the
presentation.

**(b) Fibre derivative.** The **fibre derivative** of the presentation is
the velocity-slot gradient $p:=L_{v}(t,x,v)$ at each state. When
$Q\ne\varnothing$, this is the momentum coordinate of the Legendre
map of the fibre-full chart $(O,L)$ of clause (c) of
[[def-cm07-action-and-mechanical-lagrangian]], in the sense of
[[def-cm-legendre-map-in-a-time-dependent-chart]] (the chart data are those of
[[def-cm-time-dependent-lagrangian-and-action]]). Because $L=K-U$ with
$K'(v)=\mathsf Mv$ and $U$ independent of the velocity slot (clause (a) of
[[def-cm07-action-and-mechanical-lagrangian]]), one has
$L_{v}(t,x,v)=\mathsf Mv$: the fibre derivative and the momentum of
clause (a) are the same covector, and for $Q\ne\varnothing$ the Legendre map
of the presentation is $(t,x,v)\mapsto(t,x,\mathsf Mv)$. If
$Q=\varnothing$, the state and momentum domains are empty and the momentum
and fibre-derivative assignments are the unique empty maps; there is no
fibre-full chart instance of the cited mathematical definition.

**(c) Generalized momenta.** Let $X:\Omega\to Q$ be a generalized-coordinate
map of the model, with substituted Lagrangian $\widetilde L$, substituted
potential $\widetilde U$ and kinetic metric $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$
([[def-cm07-generalized-coordinates-and-forces]] clauses (a)-(b),
[[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]]).
The **generalized momentum** of the presentation in the coordinates $X$ is
the covector

$$p(t,q,v):=\widetilde L_{v}(t,q,v)=G(q)v,$$

whose components $p_{a}=\partial\widetilde L/\partial v_{a}$ have dimension
$\mu\ell^{2}\tau^{-1}\gamma_{a}^{-1}$ (action divided by the dimension
$\gamma_{a}$ of the coordinate $q_{a}$), while the **pairing**
$p\cdot v=\sum_{a}p_{a}v^{a}$ has dimension $\mu\ell^{2}\tau^{-2}$. For the
Cartesian chart when $Q\ne\varnothing$, $X=\mathrm{id}$, $\Omega=Q$,
$G=\mathsf M$, and clause (c) reduces to clause (a). If $Q=\varnothing$,
no generalized-coordinate map exists, since its domain $\Omega$ is nonempty.

**(d) Status and warnings.** The item defines the momentum datum of a declared
presentation as a model object. It introduces no force law, no equation of
motion and no measured value; it depends on the declared chart and on the
declared coordinate dimensions $\gamma_{a}$, and it is independent of the
residual forces $d$ and of the normalization $U\mapsto U+c(t)$ of the
potential representative ([[def-cm03-potential-and-mechanical-energy]]
clause (c)). The momentum is not in general mass times coordinate velocity: in
the coordinates $X$ it is $G(q)v$, and the identity $p_{i}=m_{i}v_{i}$ is
specific to Cartesian data. The evaluation of the velocity Hessian, the
invertibility of the fiberwise momentum map, the Hamiltonian of an inverse
branch and the evolution equations are the subject of the other items of this
page, not of this definition. All differentiability classes are those of
[[def-ck-euclidean-maps-and-diffeomorphisms]].

## Remarks

- **Why a covector.** The physical content of the definition is the choice of
  the **momentum** as the fibre derivative $\mathcal L_{v}$ rather than the
  kinematic velocity: in an inertial Cartesian chart the two differ only by
  the positive definite mass operator, $p=\mathsf Mv$, whereas in generalized
  coordinates the difference is the configuration-dependent kinetic metric
  $G(q)$, and $p_{a}$ has the dimension of action per unit of $q_{a}$. The
  covector $p$ pairs with velocities by the Euclidean product in coordinates;
  no metric on momentum space is introduced here.

- **Comparison with the sources.** The identification of the generalized
  momentum with the velocity gradient of the Lagrangian, together with the
  warning that it equals the familiar momentum only in Cartesian coordinates,
  is the momentum (4.2) of Tong's Section 4.1; Likharev's Section 10.1 and
  Stewart's Section 1.2 use the same definition, and SICM's Section 3.1.1
  defines the momentum state function as the partial derivative of the
  Lagrangian. None of these treatments is used here as a proof: the item
  only fixes the model objects and the notation, and the mathematical
  computations are those of the cited items of this page.

- **Not a phase-space claim.** Nothing here asserts that the momentum
  coordinates cover the states of a mechanical model globally in a
  coordinate-free sense, that the Legendre map is invertible, or that the
  model's evolution is Hamiltonian; those are conditional statements proved
  on this page under their own hypotheses.
