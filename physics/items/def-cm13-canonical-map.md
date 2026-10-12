---
id: def-cm13-canonical-map
kind: definition
title: "Canonical maps of a potential presentation: pullback-preserving immersions and the equal-dimensional determinant and field-transport tests"
status: draft
origin: session
domain: physics
dependency_level: 20
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm13-hamiltonian-field, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm12-cotangent-momentum, prop-cm-canonical-map-tests-and-hamiltonian-transport, prop-cm-drift-kick-and-verlet-preserve-the-canonical-form, def-canonical-transformation, def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding, def-pullback-of-a-differential-form, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-invertible-matrix-and-general-linear-group, def-determinant-of-a-square-matrix, cor-square-matrix-invertible-iff-determinant-is-a-unit, def-cm-finite-regularity-canonical-calculus, thm-euclidean-inverse-function-theorem]
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
  def-cm-finite-regularity-canonical-calculus: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The dimension-aware canonical-map datum of a declared potential presentation: $C^{1}$ maps, possibly between phase domains of different dimensions, that pull the target two-form back to the source two-form; their symplectic-immersion property; and, for equal-dimensional local canonical transformations, the square matrix, determinant and Hamiltonian-field transport consequences. The item records which model chart maps are canonical immersions and which are genuine full-dimensional transformations; it asserts no existence beyond its listed suppliers and no measured value."
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
[[def-cm12-cotangent-momentum]]). Let $W_j\subseteq\mathbb R^{2m_j}$ be
nonempty open subsets of phase domains of the presentation, carrying their
respective two-forms $\omega_j$ from [[def-cm13-two-form]] (for a
generalized-coordinate domain this is the pulled-back form $\omega_X$ in its
own $(q,P)$ coordinates). The dimensions $2m_1$ and $2m_2$ need not agree.

**(a) Pullback-preserving maps and transformations.** A $C^{1}$ map
$C:W_{1}\to W_{2}$ is a **canonical map of the presentation** when

$$C^{*}\omega_{2}=\omega_{1}\qquad\text{on }W_{1}$$

with pointwise pullback as in [[def-pullback-of-a-differential-form]]. In
standard phase coordinates this is the dimension-aware matrix identity

$$DC(z)^{\mathsf T}J_{m_2}DC(z)=J_{m_1},$$

where $DC(z)$ is a $2m_2\times2m_1$ matrix and
$J_m=\begin{pmatrix}0&I_m\\-I_m&0\end{pmatrix}$. It forces $DC(z)$ to be
injective: if $DC(z)v=0$, then $v^{\mathsf T}J_{m_1}w=0$ for every $w$, so
$v=0$ by nondegeneracy of $J_{m_1}$, so $m_1\le m_2$. Thus it is a $C^1$
immersion preserving the symplectic forms (a symplectic immersion). If it is
also a $C^1$ embedding of the underlying
manifolds (injective and a homeomorphism onto its image), call it a
**canonical embedding**; pullback preservation alone asserts no global
injectivity or topological embedding.

When $m_1=m_2$, a canonical map is automatically a local diffeomorphism by
the inverse function theorem; call it a **local canonical transformation**.
A **canonical transformation** is a canonical map that is a $C^1$
diffeomorphism onto $W_2$. The same-dimensional definitions agree with the
finite-regularity convention of
[[def-cm-finite-regularity-canonical-calculus]]; the $C^\infty$ case agrees
with [[def-canonical-transformation]] and
[[def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding]].
The different-dimensional definition here extends those finite-coordinate
notions only by the displayed pullback equality.

**(b) Equal-dimensional matrix and determinant tests.** If $m_1=m_2=m$,
then by [[prop-cm-canonical-map-tests-and-hamiltonian-transport]] clause 1
the pullback condition is equivalent to

$$DC(z)^{\mathsf T}J_m\,DC(z)=J_m\qquad\text{for every }z\in W_{1}.$$

The derivative is invertible at every point, so the map is a local
diffeomorphism by [[thm-euclidean-inverse-function-theorem]]. Taking
determinants of the matrix identity gives $(\det DC(z))^2=1$, hence
$|\det DC(z)|=1$ for every $z$
([[def-invertible-matrix-and-general-linear-group]],
[[cor-square-matrix-invertible-iff-determinant-is-a-unit]],
[[def-determinant-of-a-square-matrix]]). In dimension $2m\ge4$ the condition
$|\det DC|=1$ alone is strictly weaker than canonicity (the companion page
carries an explicit volume-preserving, non-canonical shear), while for $m=1$ the symplectic condition is exactly $\det DC=1$; absolute determinant $1$ alone also admits orientation-reversing, antisymplectic maps.
If $m_1\ne m_2$, $DC$ is rectangular, so no square determinant test is
defined; the dimension-aware pullback identity of clause (a) is the criterion.

**(c) Elementary closure and equal-dimensional field transport.** By
pointwise functoriality of pullback, the identity map, composites of
composable canonical maps and inverses of canonical transformations are
canonical. For a $C^{2}$ equal-dimensional canonical map
$C:W_{1}\to W_{2}$ and a $C^{2}$ function $f$ on $W_{2}$, the Hamiltonian
fields satisfy

$$DC(z)\,X_{f\circ C}(z)=X_{f}\bigl(C(z)\bigr)\qquad(z\in W_{1}),$$

so that $C$ conjugates the Hamiltonian system of $f\circ C$ to that of $f$
by the chain rule and the equal-dimensional matrix identity: taking the
inverse of $DC^{\mathsf T}J_mDC=J_m$ gives $DCJ_mDC^{\mathsf T}=J_m$, which
substituted into $DCJ_m\nabla(f\circ C)$ yields the displayed identity. No
such ambient field-transport identity is asserted for a lower-dimensional
symplectic immersion: the ambient field need not be tangent to its image.
Bracket, solution and phase-volume consequences are likewise limited to
their stated equal-dimensional local transformations.

**(d) The model's canonical maps.** For every generalized-coordinate
immersion $X$, the momentum map $\Phi_X$ in [[def-cm13-two-form]] is a
dimension-aware canonical map by clause 2 of
[[pthm-cm13-two-form-is-symplectic]]; it is a symplectic immersion and is not
asserted to be a global embedding. When $r=3N$, its local branches and the
genuine transitions between such charts are equal-dimensional local
canonical transformations by clauses 2-3 of that theorem. The time-slice
maps of the Hamiltonian evolution of any $C^2$ branch Hamiltonian, the local
maps generated by first- and second-kind generating functions, and the
drift, kick and velocity-Verlet maps of the mechanical splitting in exact
arithmetic are also equal-dimensional local canonical transformations on
their domains ([[pthm-cm13-flow-preservation]],
[[pthm-cm13-generating-functions]],
[[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]]).

**(e) Status.** The item defines the canonical maps of the presentation and
fixes the dimension-aware pullback test of clause (a) and the equal-dimensional
matrix test of clause (b). It asserts no existence of a canonical map beyond
the listed suppliers, no global statement on multiply connected phase domains
and no empirical content; in particular, canonicity is a local condition on
the two-form, and an equal-dimensional canonical transformation need not admit
a globally defined real generating function, as the scope remark of this page
records.
