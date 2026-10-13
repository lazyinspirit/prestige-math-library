---
id: def-cm13-hamiltonian-field
kind: definition
title: "The Hamiltonian field of a phase function for a potential presentation: the unique field $X_f$ with $\\iota_{X_f}\\omega=df$, and $X_H=(H_p,-H_x)$ for the branch Hamiltonian"
status: published
origin: session
domain: physics
dependency_level: 19
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm07-action-and-mechanical-lagrangian, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, def-cm07-generalized-coordinates-and-forces, def-hamiltonian-vector-field-and-hamiltonian-function, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-smooth-vector-field-as-a-tangent-bundle-section, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-smooth-differential-k-form]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: formulation-prerequisite
  def-cm13-canonical-form: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-hamiltonian-vector-field-and-hamiltonian-function: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The Hamiltonian field datum of a declared potential presentation: for a $C^{2}$ phase function the unique $C^{1}$ field contracted against the presentation's two-form to the differential, together with its coordinate expression in the model's Cartesian and generalized-coordinate charts and its specialization to the branch Hamiltonian, including the residual-force source that is generally not a Hamiltonian field. The item defines model fields and their chart expressions; it asserts no existence of integral curves, no equation of motion and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.1.2 and 4.4, printed pages 83-84 and 100 (PDF pages 89-90 and 106): Hamilton's equations $\\dot q=\\partial H/\\partial p$, $\\dot p=-\\partial H/\\partial q$ read as the flow of the field $J\\nabla H$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 15.1-15.2: Hamilton's equations in phase space and the association of a dynamical vector field with the Hamiltonian"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.1, chapter pages 2-3 (PDF pages 238-239): the differential of $H$ compared term by term yielding $\\dot q_j=\\partial H/\\partial p_j$ and $\\dot p_j=-\\partial H/\\partial q_j$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Definition

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with the
momentum charts and two-form datum of [[def-cm13-two-form]] and the canonical
coordinates of [[def-cm13-canonical-form]]: the Cartesian phase domain
$W=Q\times\mathbb R^{3N}$, its two-form $\omega$, a generalized-coordinate
chart map $\Phi_{X}$ and the form $\omega_{X}$
([[def-cm07-generalized-coordinates-and-forces]]); the presentation is
hyperregular on every chart with the Hamiltonian $H$ of
[[def-cm12-hamiltonian]] and [[pthm-cm12-mechanical-hyperregularity]],

$$H(t,x,p)=\tfrac12\,p\cdot\mathsf M^{-1}p+U(t,x),\qquad \widetilde H(t,q,P)=\tfrac12\,P\cdot G(q)^{-1}P+\widetilde U(t,q).$$

Differentiability classes are those of
[[def-ck-euclidean-maps-and-diffeomorphisms]], and gradients those of
[[def-jacobian-matrix-and-gradient]].

**(a) The field of a phase function.** Let $W_{0}\subseteq W$ be nonempty
open and let $f:W_{0}\to\mathbb R$ be of class $C^{2}$. By clause 1 of
[[pthm-cm13-two-form-is-symplectic]] the form $\omega$ is nondegenerate on
$W_{0}$, so there is exactly one $C^{1}$ vector field $X_{f}$ on $W_{0}$ with

$$\iota_{X_{f}}\omega=df$$

(the sign convention of [[def-hamiltonian-vector-field-and-hamiltonian-function]]
and [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]); it
is the **Hamiltonian field of $f$ for the presentation**. In the Cartesian
coordinates $(x,p)$, writing $\nabla f=(f_{x^{1}},\dots,f_{x^{3N}},f_{p_{1}},\dots,f_{p_{3N}})$,

$$X_{f}=\bigl(f_{p},\,-f_{x}\bigr)=J\nabla f,\qquad J=\begin{pmatrix}0_{3N}&I_{3N}\\-I_{3N}&0_{3N}\end{pmatrix};$$

in any canonical chart $(\theta^{1},\dots,\theta^{2m})$ of the presentation
the same field reads $X_{f}=\bigl(f_{\theta^{m+1}},\dots,f_{\theta^{2m}},-f_{\theta^{1}},\dots,-f_{\theta^{m}}\bigr)$.
A vector field on $W_{0}$ is called **Hamiltonian for the presentation** when
it is $X_{f}$ for some $C^{2}$ function $f$; in particular
$X_{f}=0$ exactly when $f$ is locally constant on $W_{0}$. Vector fields are
read as tangent-bundle sections of
[[def-smooth-vector-field-as-a-tangent-bundle-section]].

**(b) The field of the branch Hamiltonian.** For each $t\in I_{0}$ the
function $H_{t}:=H(t,\cdot)$ is $C^{2}$ on $W$, and the **Hamiltonian field
of the presentation** at time $t$ is $X_{H_{t}}$:

$$X_{H_{t}}(x,p)=\bigl(\mathsf M^{-1}p,\ -\nabla_{x}U(t,x)\bigr),$$

whose components are a velocity and a force. In the coordinates $X$ the
corresponding field is
$X_{\widetilde H_{t}}(q,P)=\bigl(G(q)^{-1}P,\ -\partial_{q}\widetilde H(t,q,P)\bigr)$,
where the second slot retains the kinetic contribution
$-\tfrac12P\cdot\partial_{q}(G(q)^{-1})P$ when the metric varies. If
$d\not\equiv0$ the model's forced evolution carries the additional momentum
source $d$; the corresponding vector field
$(x,p)\mapsto\bigl(\mathsf M^{-1}p,-\nabla_{x}U(t,x)+d(t,x,\mathsf M^{-1}p)\bigr)$
is generally not a Hamiltonian field for the presentation, and it is one
exactly when the residual force has a potential independent of the velocity
slot (the criterion is proved in clause 4 of the corresponding theorem of this
page).

**(c) Time dependence and status.** For a time-dependent $H$ the assignment
$t\mapsto X_{H_{t}}$ is a time-dependent field on the phase domain; each
$X_{H_{t}}$ is $C^{1}$, hence locally Lipschitz in the state variable, and no
completeness of its integral curves is asserted here. The item defines the
field datum and its chart expressions; the identification of the model's
motions with the integral curves, and all conservation or invariance
properties, are the subject of the other items of this page. The field is
defined by the intrinsic equation $\iota_{X}\omega=dH$ and therefore does not
depend on the canonical chart used to compute it.
