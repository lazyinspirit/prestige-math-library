---
id: rem-cm13-locality-topology
kind: remark
title: "Scope of the symplectic and canonical methods for a potential presentation: locality of generating functions, projections and determinant tests, absent global claims, and empirical status"
status: draft
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
physical_scope: "Scope of the symplectic and canonical machinery for the declared potential presentation: the local character of generating functions and their projection hypotheses, the determinant tests and the failure of canonicity for volume-preserving maps in dimension at least four, the absence of global generating functions in general, the local-in-time character of flow preservation, the choice assumption in the measure-theoretic volume statement, and the purely conditional empirical status of the whole page. The remark asserts no mathematical claim beyond the items it cites."
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

- **Determinant tests.** Canonicity of a $C^{1}$ map of the presentation is
  equivalent to the matrix identity
  $DC^{\mathsf T}J\,DC=J$ in canonical coordinates
  ([[def-cm13-canonical-map]],
  [[prop-cm-canonical-map-tests-and-hamiltonian-transport]]). The determinant
  test $|\det DC|=1$ is necessary but not sufficient in dimension $2\cdot3N
  \ge4$: the companion page records a volume-preserving shear of a four-
  dimensional phase domain that fails the fundamental bracket
  $\{Q^{2},P_{1}\}=0$; for a single degree of freedom the two tests coincide.

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
  globally defined real generating function. The model-free witness is the
  symplectic shift of the cylinder: it preserves $\omega$ and changes the
  canonical one-form by the closed, non-exact form $a\,d\theta$, so its local
  generating functions do not glue to a global one
  ([[prop-cm-cylinder-shift-has-no-global-generating-function]],
  [[rem-cm-scope-of-canonical-methods]]). The presentation's phase domains
  are open subsets of $\mathbb R^{6N}$ and need not be simply connected, so
  no global generating-function existence is claimed here; conversely a
  momentum shift has a global second-kind generating function and a
  degenerate first-kind projection.

- **Choice assumptions.** The form-level statements of this page are
  choice-free; the measure-theoretic volume statement assumes the Axiom of
  Countable Choice exactly where the change-of-variables theorem requires it
  ([[pthm-cm13-liouville]], [[def-countable-choice]]). Consumers that
  re-prove volume preservation for explicit bounded regions by direct
  integration may avoid the assumption.

- **Numerics.** The drift, kick and velocity-Verlet maps of the mechanical
  splitting are canonical in exact arithmetic
  ([[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]]); the scope
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
