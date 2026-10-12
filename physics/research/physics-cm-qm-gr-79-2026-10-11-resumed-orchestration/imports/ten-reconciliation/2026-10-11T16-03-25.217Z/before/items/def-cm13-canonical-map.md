---
id: def-cm13-canonical-map
kind: definition
title: "Canonical maps of a potential presentation: maps preserving the two-form, their determinant tests, the transport of Hamiltonian fields, and the model's listed canonical maps"
status: draft
origin: session
domain: physics
dependency_level: 20
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm13-hamiltonian-field, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm12-cotangent-momentum, prop-cm-canonical-map-tests-and-hamiltonian-transport, prop-cm-drift-kick-and-verlet-preserve-the-canonical-form, def-canonical-transformation, def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding, def-pullback-of-a-differential-form, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-invertible-matrix-and-general-linear-group, def-determinant-of-a-square-matrix, cor-square-matrix-invertible-iff-determinant-is-a-unit]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: formulation-prerequisite
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm12-cotangent-momentum: formulation-prerequisite
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  prop-cm-drift-kick-and-verlet-preserve-the-canonical-form: mathematical-premise
  def-canonical-transformation: mathematical-premise
  def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The canonical-map datum of a declared potential presentation: $C^{1}$ maps between open subsets of the presentation's phase domains which pull the two-form back to itself, the determinant test on their Jacobians, the transport identity for Hamiltonian fields, and the record that the model's chart transitions, flow maps and generating-function maps are canonical. The item defines the model's canonical transformations and fixes the tests used throughout this page and by its consumers; it asserts no existence of canonical maps beyond the listed suppliers and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.4, printed pages 100-101 (PDF pages 106-107): the symplectic Jacobian condition $\\mathcal J^{\\mathsf T}\\mathcal J\\mathcal J=\\mathcal J$ defining a canonical transformation, and the equivalence with the preservation of the Poisson bracket structure"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.2-5.3: the canonical condition and the invariance of the Poisson bracket and of the phase-space volume under canonical transformations"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.3: canonical transformations as coordinate changes preserving the form of Hamilton's equations"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Definition

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with the
momentum charts and two-form datum of [[def-cm13-two-form]], the canonical
coordinates of [[def-cm13-canonical-form]] and the Hamiltonian fields of
[[def-cm13-hamiltonian-field]]
([[def-cm07-generalized-coordinates-and-forces]],
[[def-cm12-cotangent-momentum]]). Let $W_{1},W_{2}$ be nonempty open subsets
of phase domains of the presentation, carrying the two-forms
$\omega_{1},\omega_{2}$ of [[def-cm13-two-form]] (for a generalized-coordinate
chart this is the pulled-back form $\omega_{X}$ in the coordinates $(q,P)$).

**(a) Canonical maps.** A $C^{1}$ map $C:W_{1}\to W_{2}$ is a **canonical map
of the presentation** when

$$C^{*}\omega_{2}=\omega_{1}$$

on $W_{1}$ ([[def-pullback-of-a-differential-form]]); it is a **canonical
transformation** when in addition $C$ is a $C^{1}$ diffeomorphism onto
$W_{2}$. This is the presentation's instance of the canonical
transformations of [[def-canonical-transformation]] and
[[def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding]].

**(b) Tests.** By
[[prop-cm-canonical-map-tests-and-hamiltonian-transport]] clause 1, applied
in canonical coordinates on $W_{1}$ and $W_{2}$, a $C^{1}$ map
$C:W_{1}\to W_{2}$ is canonical if and only if

$$DC(z)^{\mathsf T}J\,DC(z)=J\qquad\text{for every }z\in W_{1},$$

so in particular a canonical map is a local diffeomorphism, its derivative
being invertible at every point
([[def-invertible-matrix-and-general-linear-group]],
[[cor-square-matrix-invertible-iff-determinant-is-a-unit]]); and a canonical
$C^{1}$ diffeomorphism satisfies $|\det DC(z)|=1$ for every $z$
([[def-determinant-of-a-square-matrix]]). In dimension $2m\ge4$ the condition
$|\det DC|=1$ alone is strictly weaker than canonicity (the companion page
carries an explicit volume-preserving, non-canonical shear), while for $m=1$
the two conditions coincide.

**(c) Elementary closure and transport.** By functoriality of the pullback
([[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]}), the
identity map, composites of canonical maps and inverses of canonical
transformations are canonical; and for a $C^{2}$ canonical map
$C:W_{1}\to W_{2}$ and a $C^{2}$ function $f$ on $W_{2}$ the Hamiltonian
fields satisfy

$$DC(z)\,X_{f\circ C}(z)=X_{f}\bigl(C(z)\bigr)\qquad(z\in W_{1}),$$

so that $C$ conjugates the Hamiltonian system of $f$ to that of $f\circ C$
([[prop-cm-canonical-map-tests-and-hamiltonian-transport]] clause 3). The
consequences — preservation of brackets, transport of solutions, preservation
of volume — are proved in the transport and volume items of this page.

**(d) The model's canonical maps.** The following maps of the presentation
are canonical: the chart transition $\Phi_{X}$ between the Cartesian and a
generalized-coordinate momentum chart, and the transition between two such
charts (clause 3 of [[pthm-cm13-two-form-is-symplectic]]); the time-slice
maps of the Hamiltonian evolution of any $C^{2}$ branch Hamiltonian, proved
in the flow-preservation theorem of this page; the local maps generated by
first- and second-kind generating functions, proved in the
generating-function theorem of this page; and
the drift, kick and velocity-Verlet maps of the mechanical splitting in exact
arithmetic ([[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]]).

**(e) Status.** The item defines the canonical maps of the presentation and
fixes the two equivalent tests of clause (b). It asserts no existence of a
canonical map beyond the listed suppliers, no global statement on multiply
connected phase domains and no empirical content; in particular, canonicity
is a local condition on the two-form, and a canonical map need not admit a
globally defined real generating function, as the scope remark of this page
records.
