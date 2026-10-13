---
id: def-cm14-complete-integral
kind: definition
title: "A complete integral of the model's Hamilton-Jacobi equation: nondegenerate mixed derivative, momentum map and Jacobi constants"
status: published
origin: pipeline
domain: physics
dependency_level: 20
deps: [def-cm14-hamilton-jacobi-equation, def-cm12-hamiltonian, def-cm12-cotangent-momentum, pthm-cm12-mechanical-hyperregularity, def-cm01-units, def-cm-hamilton-jacobi-equation-and-complete-integral, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, def-determinant-of-a-square-matrix, def-matrix-product-and-identity-matrix, def-invertible-euclidean-linear-map, def-metric-topology, def-interval]
dependency_roles:
  def-cm14-hamilton-jacobi-equation: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  def-cm12-cotangent-momentum: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm01-units: formulation-prerequisite
  def-cm-hamilton-jacobi-equation-and-complete-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-metric-topology: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The complete-integral datum of a declared hyperregular potential presentation of the framework's force branch: a $C^3$ solution $S$ of the presentation's Hamilton-Jacobi equation in a fixed momentum chart whose mixed derivative $S_{q\\alpha}$ is invertible at the base point, together with its momentum map $p=S_q$ and its Jacobi constants $\\beta=S_\\alpha$, their dimensions and their reading as a family of model data labelled by the parameters $\\alpha$. The item defines the datum only; the constancy of the Jacobi constants along the characteristic motions, the local solvability of the constants equation and the canonicity of $(\\beta,\\alpha)$ are theorems of this page, not part of the definition, and no existence or measured value is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.7, printed pages 121-126 (PDF pages 127-132): the solution $W(q,t)$ of the Hamilton-Jacobi equation, the integration constants it carries and the recovery of the classical path"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.4: Jacobi's complete integral and the constants obtained by differentiating it with respect to the parameters"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Chapter 6, Sections 6.1 and 6.1.1-6.1.4: the Hamilton-Jacobi strategy of solving for a canonical transformation that trivializes the transformed Hamiltonian, the oscillator branch and the action as the generating function of time evolution; the treatment is local in character and states no caustic condition"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 4, Sections 4.1-4.6, printed pages 60-91 (PDF pages 63-94): Hamilton-Jacobi separation and the role of the integration constants, in a local treatment"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---
## Definition

Adopt the datum of [[def-cm14-hamilton-jacobi-equation]]: one momentum chart
of a hyperregular potential presentation, its $C^{2}$ Hamiltonian $H$ of
dimension $\mu\ell^{2}\tau^{-2}$ on $I_{0}\times V\times\mathbb R^{m}$, open
sets $J'\subseteq I_{0}$, $U'\subseteq V$ and $A'\subseteq\mathbb R^{m}$,
and a $C^{3}$ map $S:J'\times U'\times A'\to\mathbb R$ that solves the
Hamilton-Jacobi equation associated with $H$ on $J'\times U'\times A'$.
Dimensions are read by [[def-cm01-units]] and differentiability classes are
those of [[def-ck-euclidean-maps-and-diffeomorphisms]].

**(a) Complete integral.** Let $(t_{0},q_{0},\alpha_{0})\in
J'\times U'\times A'$. The solution $S$ is a **complete integral of the
model's Hamilton-Jacobi equation at $(t_{0},q_{0},\alpha_{0})$** when the
mixed derivative

$$S_{q\alpha}(t,q,\alpha):=\Bigl(\frac{\partial^{2}S}{\partial q^{a}\partial\alpha_{j}}(t,q,\alpha)\Bigr)_{a,j=1}^{m}\in\mathbb R^{m\times m}$$
is invertible at the base point, $\det S_{q\alpha}(t_{0},q_{0},\alpha_{0})
\ne0$ ([[def-determinant-of-a-square-matrix]],
[[def-invertible-euclidean-linear-map]], mixed partials being those of
[[def-total-derivative-in-euclidean-space]]). This is exactly the
mathematical notion of a complete integral of
[[def-cm-hamilton-jacobi-equation-and-complete-integral]] applied to the
function $H$ on the chart domain $J'\times U'\times\mathbb R^{m}$.

**(b) Parameters and their dimensions.** The third variable
$\alpha=(\alpha_{1},\dots,\alpha_{m})$ is read with the declared coordinate
dimensions $\gamma_{a}$ of $q$ in the fixed chart,
$[\alpha_{j}]=\gamma_{j}$. With this reading the entries of
$S_{q\alpha}$ have dimensions $\mu\ell^{2}\tau^{-1}/(\gamma_a\gamma_j)$.
In Cartesian length coordinates these are mass/time dimensions.
Changing units rescales rows and columns by nonzero factors, so
invertibility is unit-independent; the momentum map below carries the
momentum dimension.

**(c) Momentum map and Jacobi constants.** For a complete integral $S$ the
**momentum map** and the **Jacobi constants** of $S$ are the maps

$$p(t,q,\alpha):=S_{q}(t,q,\alpha),\qquad\beta(t,q,\alpha):=S_{\alpha}(t,q,\alpha),$$
so that $p$ has the chart-momentum dimensions of
[[def-cm12-cotangent-momentum]], $[p_{a}]=\mu\ell^{2}\tau^{-1}
\gamma_{a}^{-1}$, and $\beta$ has the same dimensions as $p$,
$[\beta_{j}]=\mu\ell^{2}\tau^{-1}\gamma_{j}^{-1}$: the product
$\beta_{j}\,\alpha_{j}$ has the action dimension $\mu\ell^{2}\tau^{-1}$ of
$S$. The pair $(\beta,\alpha)$ is the **Jacobi data** of the complete
integral at the base point.

**(d) Status.** The item defines data attached to the presentation and to
the chosen solution. It asserts neither that a complete integral exists
for a given presentation, nor that its characteristic curves are motions
of the model, nor that $\beta$ is constant along such curves; those are
the claims of the page's characteristics theorem. It also
asserts no global statement: $\det S_{q\alpha}\ne0$ is required at the
base point only, and the theorem below records its local consequences.

## Remarks

- **The mixed derivative is the local-coordinate hypothesis.** The condition
  $\det S_{q\alpha}(t_{0},q_{0},\alpha_{0})\ne0$ gives the local inverse
  function theorem conclusions used by the characteristics theorem: the
  momentum equation $p=S_q$ can be solved locally for $\alpha$, and the
  constants equation $\beta=S_\alpha$ can be solved locally for $q$. If the
  determinant vanishes, those local-coordinate conclusions are not supplied
  by that theorem; a characteristic projection may develop a caustic. The
  companion page verifies this degeneration for the harmonic model at its
  conjugate times, where the displayed $S_{x\alpha}$ is unbounded and the
  label-to-position derivative vanishes. Its Kepler example separately
  treats simple turning points of a radial action integral.

- **Finite-dimensional reading.** No topology of the parameter set beyond
  the open subset $A'\subseteq\mathbb R^{m}$ is used, and no choice
  principle is invoked by this definition: $m$ is a finite number fixed by
  the chart.
