---
id: rem-cm-scope-of-canonical-methods
kind: remark
title: "Scope of the canonical-methods items: locality and topology of generating functions, caustics, and the E7 claims delivered by published root items"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 7
deps: [prop-cm-canonical-map-tests-and-hamiltonian-transport, def-cm-generating-function-of-the-first-and-second-kind, prop-cm-generating-functions-yield-canonical-maps, prop-cm-canonical-map-locally-has-a-generating-function, prop-cm-time-dependent-generating-function, prop-cm-cylinder-shift-has-no-global-generating-function, def-cm-hamilton-jacobi-equation-and-complete-integral, thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral, prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity, cor-cm-hamiltonian-flow-preserves-phase-volume, def-tautological-one-form-on-a-cotangent-bundle, thm-the-canonical-cotangent-two-form-is-symplectic, def-hamiltonian-vector-field-and-hamiltonian-function, thm-hamilton-equations-in-canonical-cotangent-coordinates, def-poisson-bracket-on-a-symplectic-manifold, prop-coordinate-formula-for-the-poisson-bracket, prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry, thm-poisson-bracket-satisfies-the-jacobi-identity, thm-hamiltonian-flows-preserve-the-symplectic-form, thm-liouville-volume-preservation, def-canonical-transformation, def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding, def-cm-finite-regularity-canonical-calculus, thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]
dependency_roles:
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  def-cm-generating-function-of-the-first-and-second-kind: mathematical-premise
  prop-cm-generating-functions-yield-canonical-maps: mathematical-premise
  prop-cm-canonical-map-locally-has-a-generating-function: mathematical-premise
  prop-cm-time-dependent-generating-function: mathematical-premise
  prop-cm-cylinder-shift-has-no-global-generating-function: mathematical-premise
  def-cm-hamilton-jacobi-equation-and-complete-integral: mathematical-premise
  thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral: mathematical-premise
  prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity: mathematical-premise
  cor-cm-hamiltonian-flow-preserves-phase-volume: mathematical-premise
  def-tautological-one-form-on-a-cotangent-bundle: mathematical-premise
  thm-the-canonical-cotangent-two-form-is-symplectic: mathematical-premise
  def-hamiltonian-vector-field-and-hamiltonian-function: mathematical-premise
  thm-hamilton-equations-in-canonical-cotangent-coordinates: mathematical-premise
  def-poisson-bracket-on-a-symplectic-manifold: mathematical-premise
  prop-coordinate-formula-for-the-poisson-bracket: mathematical-premise
  prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry: mathematical-premise
  thm-poisson-bracket-satisfies-the-jacobi-identity: mathematical-premise
  thm-hamiltonian-flows-preserve-the-symplectic-form: mathematical-premise
  thm-liouville-volume-preservation: mathematical-premise
  def-canonical-transformation: mathematical-premise
  def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding: mathematical-premise
  def-cm-finite-regularity-canonical-calculus: mathematical-premise
  thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Sections 4.4.3 (generating functions) and 4.7 (Hamilton-Jacobi theory), printed pages 104-105 and 121-126"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 15.3-15.4 (canonical transformations and Hamilton-Jacobi theory)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: n/a
---

## Remarks

- **Locality and topology.** Generating functions exist locally under the mixed-invertibility
  hypotheses of [[def-cm-generating-function-of-the-first-and-second-kind]] and
  [[prop-cm-canonical-map-locally-has-a-generating-function]]. Globally they may fail:
  [[prop-cm-cylinder-shift-has-no-global-generating-function]] exhibits a symplectic shift whose
  $\Phi^*\lambda-\lambda=a\,d\theta$ is closed but not exact, so no single-valued global generating
  function exists, although one exists on every chart. The distinction between the canonical map
  itself (defined at finite regularity in [[def-cm-finite-regularity-canonical-calculus]], with the smooth intrinsic case in [[def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding]] and [[def-canonical-transformation]]) and the maps admitting global generating functions is a genuine
  topological one, not a technicality.
- **Caustics.** The hypotheses $\det S_{qQ}\ne0$ and $\det S_{q\alpha}\ne0$ are local no-caustic
  conditions: [[prop-cm-canonical-map-locally-has-a-generating-function]] states the converse
  direction, and [[thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral]] shows that the
  Jacobi constants form local canonical coordinates exactly where the mixed derivative is
  invertible. A complete integral is a family of solutions with $n$ essential parameters, defined in
  [[def-cm-hamilton-jacobi-equation-and-complete-integral]]; it is not a general solution, and no
  global Hamilton-Jacobi existence across a caustic is claimed.
- **Locality of the flow statements.**
  [[prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity]] and
  [[cor-cm-hamiltonian-flow-preserves-phase-volume]] are stated on the actual flow domain of a
  $C^2$ autonomous or time-dependent Hamiltonian and assume no completeness;
  the nonautonomous evolution uses an initial time and a final time, with
  inverse given by reversing those endpoints. The published
  [[thm-hamiltonian-flows-preserve-the-symplectic-form]] and [[thm-liouville-volume-preservation]]
  give the corresponding manifold-level statements.
- **Claims of this section delivered by published root items (used by reference, not
  re-authored).** The tautological one-form and the canonical cotangent two-form, with the latter
  closed and nondegenerate: [[def-tautological-one-form-on-a-cotangent-bundle]],
  [[thm-the-canonical-cotangent-two-form-is-symplectic]]. Hamiltonian vector fields, the Hamilton
  equations in canonical cotangent coordinates and the Poisson bracket with its coordinate formula,
  bilinearity, skew symmetry, derivation property and Jacobi identity:
  [[def-hamiltonian-vector-field-and-hamiltonian-function]],
  [[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]],
  [[thm-hamilton-equations-in-canonical-cotangent-coordinates]],
  [[def-poisson-bracket-on-a-symplectic-manifold]],
  [[prop-coordinate-formula-for-the-poisson-bracket]],
  [[prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry]],
  [[thm-poisson-bracket-satisfies-the-jacobi-identity]]. The smooth definitions of canonical maps and the
  manifold-level conservation statements are
  [[def-canonical-transformation]],
  [[def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding]],
  [[thm-hamiltonian-flows-preserve-the-symplectic-form]] and
  [[thm-liouville-volume-preservation]]. This item records that division of labour for the reviewing
  steps; it asserts no new mathematics.
