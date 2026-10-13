---
id: rem-cm13-locality-topology
kind: remark
title: "Scope of the symplectic and canonical methods for a potential presentation: locality of generating functions, projections and determinant tests, absent global claims, and empirical status"
status: published
origin: session
domain: physics
dependency_level: 24
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm13-hamiltonian-field, def-cm13-poisson, pthm-cm13-bracket-identities, pthm-cm13-observable-evolution, def-cm13-canonical-map, pthm-cm13-flow-preservation, pthm-cm13-dynamics-transport-under-canonical-maps, pthm-cm13-liouville, pthm-cm13-generating-functions, lem-cm13-poincare-cartan-annihilation-characterization, prop-cm-canonical-map-tests-and-hamiltonian-transport, prop-cm-generating-functions-yield-canonical-maps, prop-cm-canonical-map-locally-has-a-generating-function, prop-cm-time-dependent-generating-function, prop-cm-cylinder-shift-has-no-global-generating-function, def-cm-generating-function-of-the-first-and-second-kind, rem-cm-scope-of-canonical-methods, prop-cm-drift-kick-and-verlet-preserve-the-canonical-form, rem-cm-scope-of-the-certified-verlet-estimates, def-countable-choice, def-cm12-hamiltonian, pthm-cm12-hamilton-equivalence, def-cm01-units, def-cm07-generalized-coordinates-and-forces]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm13-poisson: formulation-prerequisite
  pthm-cm13-bracket-identities: physical-result
  pthm-cm13-observable-evolution: physical-result
  def-cm13-canonical-map: formulation-prerequisite
  pthm-cm13-flow-preservation: physical-result
  pthm-cm13-dynamics-transport-under-canonical-maps: physical-result
  pthm-cm13-liouville: physical-result
  pthm-cm13-generating-functions: physical-result
  lem-cm13-poincare-cartan-annihilation-characterization: mathematical-premise
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  prop-cm-generating-functions-yield-canonical-maps: mathematical-premise
  prop-cm-canonical-map-locally-has-a-generating-function: mathematical-premise
  prop-cm-time-dependent-generating-function: mathematical-premise
  prop-cm-cylinder-shift-has-no-global-generating-function: mathematical-premise
  def-cm-generating-function-of-the-first-and-second-kind: mathematical-premise
  rem-cm-scope-of-canonical-methods: mathematical-premise
  prop-cm-drift-kick-and-verlet-preserve-the-canonical-form: mathematical-premise
  rem-cm-scope-of-the-certified-verlet-estimates: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-hamilton-equivalence: physical-result
  def-cm01-units: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope of the symplectic and canonical machinery for the declared potential presentation, with Cartesian phase domains open in $\\mathbb R^{6N}$ and generalized-coordinate phase domains open in $\\mathbb R^{2r}$: the local character of generating functions and their projection hypotheses, the determinant tests and the failure of canonicity for volume-preserving maps in dimension at least four, the absence of global generating functions in general, the local-in-time character of flow preservation, the choice assumptions in the measure-theoretic volume statement and the cited cylinder construction, and the purely conditional empirical status of the whole page. The split numerical maps are local canonical transformations on nonempty admissible domains; surjectivity onto an entire declared target phase domain is not asserted. The remark asserts no mathematical claim beyond the items it cites."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.2, 4.4.1 and 4.4.3, printed pages 88-92 and 102-105 (PDF pages 94-98 and 108-111): the local character of canonical transformations and generating functions, and the absence of any completeness claim for the Hamiltonian flow"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.3-5.4: canonical transformations preserve phase volume and the bracket, while generating functions describe the transformation only on regions where the required coordinate projection is nondegenerate"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Scope of the page

- **Locality in time.** Flow preservation, bracket preservation and volume
  preservation are asserted on the actual time-slice domains supplied by the
  dependence theorem, not on the whole phase domain
  ([[pthm-cm13-flow-preservation]], [[pthm-cm13-liouville]]). No completeness
  of the model's Hamiltonian flow is claimed, and the maximal existence of
  the model's motions remains the business of the model's own initial-value
  theory ([[pthm-cm12-hamilton-equivalence]]).

- **Determinant tests.** For a $C^{1}$ map between equal-dimensional phase
  domains, canonicity is equivalent to the square matrix identity
  $DC^{\mathsf T}J\,DC=J$ in canonical coordinates, and then
  $|\det DC|=1$ ([[def-cm13-canonical-map]],
  [[prop-cm-canonical-map-tests-and-hamiltonian-transport]]). In dimension
  $2m\ge4$ with $m$ the chart half-dimension, that determinant condition is necessary but not sufficient:
  the companion page records a volume-preserving shear of a four-dimensional
  phase domain that fails the fundamental bracket $\{Q^{2},P_{1}\}=0$; for a
  single degree of freedom the symplectic test is exactly $\det DC=1$;
  absolute determinant $1$ also permits orientation-reversing, antisymplectic
  maps. Between different dimensions the determinant is not defined; use the
  rectangular condition $DC^{\mathsf T}J_{m_2}DC=J_{m_1}$ of
  [[def-cm13-canonical-map]].

- **Projections and caustics.** A first-kind generating function exists
  locally only when the $(q,Q)$-projection of the canonical map is
  invertible, and the second kind requires the corresponding $(q,P)$
  projection ([[def-cm-generating-function-of-the-first-and-second-kind]],
  [[prop-cm-canonical-map-locally-has-a-generating-function]]). At points
  where the required projection degenerates, the whole
  $J\times O_{q}\times O_{Q}$ representation of
  [[pthm-cm13-generating-functions]] breaks down even though the map remains
  canonical; the companion page carries a point transformation whose
  $(q,Q)$-projection is degenerate identically.

- **Symplectic map versus globally exact generating function.** Canonicity is
  a local condition on $\omega$; it does not imply the existence of a
  globally defined real generating function. Under the Axiom of Countable
  Choice ($\mathrm{AC}_\omega$) retained by the cited torus construction, the
  model-free witness is the cylinder $C=(\mathbb R/\mathbb Z)\times\mathbb R$
  and its shift $\Phi([\theta],I)=([\theta],I+a)$ for a fixed real $a\ne0$.
  With the descended forms $\lambda_C=I\,d\theta_C$ and
  $\omega_C=d\theta_C\wedge dI$ defined in lift charts, it preserves
  $\omega_C$ and changes $\lambda_C$ by the closed, non-exact form
  $a\,d\theta_C$, so its local generating functions do not glue to a global one
  ([[prop-cm-cylinder-shift-has-no-global-generating-function]],
  [[rem-cm-scope-of-canonical-methods]]). The presentation's Cartesian phase domains are open subsets of
  $\mathbb R^{6N}$; a generalized-coordinate phase domain
  $\Omega\times\mathbb R^r$ is open in $\mathbb R^{2r}$, including
  $r<3N$. These domains need not be simply connected, so
  no global generating-function existence is claimed here; conversely a
  momentum shift in Euclidean coordinates has a global second-kind
  generating function and a degenerate first-kind projection.

- **Choice assumptions.** The explicit phase-chart form calculations,
  canonical matrix tests and local generating-function calculations use no
  choice principle. The cylinder obstruction above retains
  $\mathrm{AC}_\omega$ from
  [[prop-cm-cylinder-shift-has-no-global-generating-function]]'s torus supplier;
  no choice-free version of that supplier is asserted here. The
  measure-theoretic volume statement also assumes Countable Choice where
  the change-of-variables theorem requires it
  ([[pthm-cm13-liouville]], [[def-countable-choice]]). A separate direct
  integration argument for an explicit bounded region can avoid that
  change-of-variables use only when its own mathematical suppliers require
  no choice assumption.

- **Numerics.** The drift, kick and velocity-Verlet maps of the mechanical
  splitting are local canonical transformations in exact arithmetic on nonempty admissible domains
  ([[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]]). Restricting
  the target to each map's open image gives a canonical transformation onto
  that image; no surjectivity onto the entire declared target phase domain
  is asserted. The scope
  of the certified numerical estimates, including roundoff and the absence of
  all-time energy claims, is recorded in
  [[rem-cm-scope-of-the-certified-verlet-estimates]] and is not extended by
  this page.

- **Empirical status.** Every item of this page is a conditional consequence
  of the adopted force branch, the declared potential presentation, the
  declared chart and the cited mathematics. No experimental result, measured
  constant or statistical claim is used, and none is implied; in particular
  no statement here identifies the model's phase volume with an observable
  quantity. Units are those of [[def-cm01-units]] throughout, and the
  generalized-coordinate charts remain those of
  [[def-cm07-generalized-coordinates-and-forces]].
