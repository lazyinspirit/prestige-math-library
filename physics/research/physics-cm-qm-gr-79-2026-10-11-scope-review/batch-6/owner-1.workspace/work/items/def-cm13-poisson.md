---
id: def-cm13-poisson
kind: definition
title: "The Poisson bracket of phase functions of a potential presentation: $\\{f,g\\}=\\omega(X_f,X_g)$ and the coordinate formula in each canonical chart"
status: draft
origin: session
domain: physics
dependency_level: 20
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm13-hamiltonian-field, def-cm07-action-and-mechanical-lagrangian, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-poisson-bracket-on-a-symplectic-manifold, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-smooth-differential-k-form, def-cm01-units]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: formulation-prerequisite
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-poisson-bracket-on-a-symplectic-manifold: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The Poisson bracket datum of a declared potential presentation: phase functions read off the labels' positions and momenta, the bracket $\\{f,g\\}=\\omega(X_f,X_g)$ defined by the presentation's two-form, and its coordinate formula in the model's Cartesian and generalized-coordinate canonical charts. The item defines a model bilinear operation and fixes its dimension; it asserts no algebraic identity, no equation of motion, no conservation law and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.3, printed pages 93-95 (PDF pages 99-101): the Poisson bracket definition, the properties displayed for it, the fundamental brackets $\\{q_i,q_j\\}=0$, $\\{p_i,p_j\\}=0$, $\\{q_i,p_j\\}=\\delta_{ij}$, and the evolution formula $df/dt=\\{f,H\\}+\\partial f/\\partial t$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.2: the Poisson bracket representation of Hamiltonian mechanics"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.2.2 and 5.3: the Poisson bracket in the $\\tilde J$ representation and the fundamental Poisson brackets of the phase-space coordinates"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Definition

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with the
momentum charts and two-form datum of [[def-cm13-two-form]], the canonical
coordinates of [[def-cm13-canonical-form]] and the Hamiltonian fields of
[[def-cm13-hamiltonian-field]]. Dimensions are read by [[def-cm01-units]];
differentiability classes are those of
[[def-ck-euclidean-maps-and-diffeomorphisms]].

**(a) Phase functions.** Let $W_{0}$ be a nonempty open subset of a phase
domain of the presentation. A **phase function of the presentation on
$W_{0}$ of class $C^{k}$** is a map $f:W_{0}\to\mathbb R$ of class $C^{k}$
($k\ge1$); its physical reading is a model quantity computed from the
positions and momenta of the labels, and its dimension is declared as part of
the datum. A **time-dependent phase function** on an interval $J\subseteq
I_{0}$ is a map $f:J\times W_{0}\to\mathbb R$ of the declared class, written
$f_{t}:=f(t,\cdot)$.

**(b) The bracket.** Let $f,g:W_{0}\to\mathbb R$ be of class $C^{2}$. By
[[def-cm13-hamiltonian-field]] the fields $X_{f},X_{g}$ are defined on
$W_{0}$, and the **Poisson bracket of $f$ and $g$ for the presentation** is
the phase function

$$\{f,g\}:=\omega(X_{f},X_{g})=d\!f(X_{g})=X_{g}(f)=-X_{f}(g),$$

the sign convention being that of
[[def-poisson-bracket-on-a-symplectic-manifold]] and
[[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]; the
bracket is $C^{1}$ on $W_{0}$ and its dimension is
$[f]\,[g]\,(\mu\ell^{2}\tau^{-1})^{-1}$, the product of the dimensions of the
entries divided by the action dimension of the two-form.

**(c) Coordinate formula.** In the Cartesian canonical coordinates $(x,p)$
of the presentation, and more generally in any canonical chart
$(\theta^{1},\dots,\theta^{2m})$ of [[def-cm13-canonical-form]],

$$\{f,g\}=\sum_{a=1}^{3N}\Bigl(f_{x^{a}}g_{p_{a}}-f_{p_{a}}g_{x^{a}}\Bigr)=\nabla f^{\mathsf T}J\,\nabla g,\qquad \{f,g\}=\sum_{a=1}^{m}\Bigl(f_{\theta^{a}}g_{\theta^{m+a}}-f_{\theta^{m+a}}g_{\theta^{a}}\Bigr),$$

with derivatives those of [[def-jacobian-matrix-and-gradient]] and
[[def-directional-and-partial-derivatives]]. The coordinate formula is
recorded here and its identities (bilinearity, skew-symmetry, the Leibniz
rule, the Jacobi identity and the fundamental brackets) are proved in the
bracket-identities theorem of this page.

**(d) Status.** The item defines a bilinear operation on the declared phase
domain by the intrinsic formula $\{f,g\}=\omega(X_{f},X_{g})$, hence
independently of the canonical chart used to evaluate the coordinate
formula. It asserts no equation of motion, no conservation law, no algebraic
identity beyond well-definedness and no measured value; in particular the
bracket with the Hamiltonian and the notion of first integral are the subject
of the evolution theorem of this page.
