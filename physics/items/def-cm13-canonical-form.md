---
id: def-cm13-canonical-form
kind: definition
title: "Canonical coordinates and the canonical form of the two-form for a potential presentation: the coordinate expression $\\omega=\\sum_{a=1}^{m} d\\theta^a\\wedge d\\theta^{m+a}$ with $m$ the chart's half-dimension, and the model's own momentum charts"
status: published
origin: session
domain: physics
dependency_level: 18
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm12-cotangent-momentum, def-cm01-configuration, def-cm-phase-domain-and-standard-symplectic-two-form, prop-cm-canonical-map-tests-and-hamiltonian-transport, def-ck-euclidean-maps-and-diffeomorphisms, def-smooth-differential-k-form, def-pullback-of-a-differential-form, def-metric-topology, def-cm-finite-regularity-canonical-calculus]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  def-metric-topology: mathematical-premise
  def-cm-finite-regularity-canonical-calculus: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The vocabulary of canonical coordinates for the two-form of a declared potential presentation: coordinates on a phase domain in which the presentation's two-form takes the canonical coordinate expression, and the record that the presentation's Cartesian momentum chart and each of its generalized-coordinate momentum charts are canonical charts. The item defines a coordinate condition and fixes the vocabulary used by the bracket, field, flow and generating-function items; it asserts no dynamics, no existence of canonical coordinates beyond the model's own charts and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.4, printed pages 100-101 (PDF pages 106-107): Hamilton's equations in the form $\\dot x=J\\,\\partial H/\\partial x$ and the symplectic-matrix condition that characterizes the allowed changes of canonical variables"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.7: the symplectic representation and the invariance of the symplectic structure under canonical coordinate changes"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.2-5.2.2: the canonical condition for a phase-space coordinate transformation and the fundamental Poisson bracket formulation of that condition"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Definition

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the
momentum charts, the phase domains and the two-form datum of
[[def-cm13-two-form]]: the Cartesian phase domain $W=Q\times\mathbb R^{3N}$
with $n=3N$, its two-form $\omega$, and for each generalized-coordinate map
$X:\Omega\to Q$ with $r$ coordinates the chart map $\Phi_{X}$ and the form
$\omega_{X}$ ([[def-cm07-generalized-coordinates-and-forces]],
[[def-cm12-cotangent-momentum]], [[def-cm01-configuration]]). All
differentiability classes are those of
[[def-ck-euclidean-maps-and-diffeomorphisms]].

**(a) Canonical coordinates.** Let $W_{0}\subseteq W$ (or
$W_{0}\subseteq\Omega\times\mathbb R^{r}$) be nonempty open, and let

$$\theta=(\theta^{1},\dots,\theta^{2m}):W_{0}\longrightarrow V\subseteq\mathbb R^{2m}$$

be a $C^{1}$ chart of $W_{0}$ onto an open set $V$ ([[def-metric-topology]]),
with $m$ the half-dimension of $W_{0}$. Write $\sigma=\omega|_{W_0}$ and $\alpha=\lambda|_{W_0}$ in the Cartesian case, and $\sigma=\omega_X|_{W_0}$ and $\alpha=\lambda_X|_{W_0}$ in the generalized-coordinate case. Each coordinate $\theta^a$ has a declared dimension $\eta_a$ and unit; its paired coordinate $\theta^{m+a}$ has dimension $\mu\ell^2\tau^{-1}\eta_a^{-1}$ and a declared compatible unit, so every summand below has action dimension. Coordinate formulas use the numerical representatives in these fixed units. The coordinates $\theta$ are
**canonical coordinates for the presentation's two-form** on $W_{0}$ when the
two-form takes the **canonical form**

$$\sigma=\sum_{a=1}^{m}d\theta^{a}\wedge d\theta^{m+a}$$

pointwise on $W_{0}$, using the finite-coordinate form and pullback conventions of [[def-cm-finite-regularity-canonical-calculus]]; equivalently, when the
pullback identity $\theta^{*}\omega_{V}^{\mathrm{st}}=\sigma$ holds
for the standard two-form $\omega_{V}^{\mathrm{st}}$ of $V$
([[def-cm-phase-domain-and-standard-symplectic-two-form]],
[[def-cm-finite-regularity-canonical-calculus]]), equivalently when
$D\theta(z)^{\mathsf T}J\,D\theta(z)=J$ for the standard symplectic matrix
$J$ at every $z\in W_{0}$
([[prop-cm-canonical-map-tests-and-hamiltonian-transport]]). A **canonical
chart of the presentation** is a chart whose coordinates are canonical in
this sense; the equivalence with the canonical maps defined later on this
page is recorded with those definitions.

**(b) The model's own charts are canonical.** The Cartesian coordinates
$(x,p)$ on $W$ are canonical coordinates: by clause 1 of
[[pthm-cm13-two-form-is-symplectic]] the two-form is
$\omega=\sum_{a}dx^{a}\wedge dp_{a}$. For a generalized-coordinate map, the
coordinates $(q,P)$ on $\Omega\times\mathbb R^{r}$ are canonical coordinates
for the pulled-back form $\omega_{X}$: by clause 2 of
[[pthm-cm13-two-form-is-symplectic]] one has
$\omega_{X}=\sum_{a}dq^{a}\wedge dP_{a}$, and when the map is a genuine chart
($r=3N$) the chart transition is a change of canonical coordinates on
overlaps.

**(c) Canonical one-form up to gauge at classical differentiability.** For a $C^2$ canonical chart $\theta$, the source canonical one-form $\alpha$ specified in clause (a) from
[[def-cm13-two-form]] is said to be **in canonical form up to gauge** in the
canonical coordinates $\theta$ when the difference
$\alpha-\sum_{a}\theta^{m+a}d\theta^{a}$ is a closed one-form on $W_{0}$;
exactness of that difference is not required. For the presentation's own
charts the difference of the two canonical one-forms is closed by clause 3 of
[[pthm-cm13-two-form-is-symplectic]]. These charts are $C^2$ or smoother. For a merely $C^1$ chart clause (a) retains its full pointwise meaning, but the coefficients of the pulled-back one-form may be only continuous, so this clause does not apply the classical exterior derivative to them.

**(d) Status and warnings.** The item defines a coordinate condition on a
declared chart and records the one fact that the presentation's own momentum
charts satisfy it. It asserts no existence of canonical coordinates beyond
the model's charts, no global statement on multiply connected phase domains,
no dynamics and no measured value. A chart that is merely a diffeomorphism
need not be canonical; the determinant test
$|\det D\theta|=1$ is necessary but, in dimension $2m\ge4$, not sufficient
for canonicity (the scope remark of this page records the witness).
