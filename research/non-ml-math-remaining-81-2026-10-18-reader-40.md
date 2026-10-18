# Step 3a reader report — batch 40

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader (`reader-40`)  
Review date: 2026-10-18

## Opened inventory

Assigned pages:

- `library/differential-geometry/poisson-algebras-and-hamiltonian-representations.md`
- `library/differential-geometry/poisson-algebras-and-hamiltonian-representations-examples.md`

Assigned items, read in supplier order:

- `items/def-symplectic-comoment-map-and-hamiltonian-observable-action.md`
- `items/prop-comoment-maps-act-on-observables-by-poisson-derivations.md`
- `items/ex-quadratic-sl2-comoment-action-on-the-symplectic-plane.md`

Batch and contract evidence opened:

- `research/non-ml-math-remaining-81-2026-10-18-batch-40.pages.json`
- `research/non-ml-math-remaining-81-2026-10-18-batch-40.proof-contracts.json`
- `research/non-ml-math-remaining-81-2026-10-18-batch-40.cross-batch-dependencies.json`

Claim-relevant item suppliers and linked page-summary carriers opened:

- Poisson algebra and bracket: `thm-smooth-functions-form-a-poisson-algebra`, `def-poisson-bracket-on-a-symplectic-manifold`, `thm-poisson-bracket-satisfies-the-jacobi-identity`, `prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry`, `thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions`, `def-hamiltonian-vector-field-and-hamiltonian-function`, `thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism`.
- Linear and Lie algebra conventions: `def-representation-of-a-lie-algebra`, `def-lie-algebra-over-a-field`, `def-homomorphism-of-possibly-infinite-dimensional-lie-algebras`, `def-vector-space-of-linear-maps`, `def-linear-map`, `def-vector-space`.
- Symplectic and moment-map conventions: `thm-alternating-forms-have-a-symplectic-normal-form`, `def-symplectic-vector-space`, `def-symplectic-form-and-symplectic-manifold`, `def-smooth-left-action-of-a-lie-group`, `def-connected-space`, `def-algebraic-dual-and-linear-functional`, `def-coadjoint-representation-of-a-lie-group`, `def-symplectic-and-hamiltonian-lie-group-action`, `def-fundamental-vector-field-of-a-left-action`, `def-moment-map-and-component-hamiltonian`, `prop-moment-map-components-generate-the-negative-infinitesimal-action`, `lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle`, `def-countable-choice`.
- Equivariance and connectedness suppliers: `prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity`, `prop-adjoint-intertwines-the-exponential-map`, `prop-adjoint-is-a-smooth-lie-group-representation`, `thm-the-differential-of-adjoint-is-ad`, `cor-the-exponential-map-is-a-local-diffeomorphism-at-zero`, `cor-lipschitz-ode-uniqueness-and-stability-estimate`, `thm-connectedness-characterisations`.
- Coordinate and companion-page examples: `prop-coordinate-formula-for-the-poisson-bracket`, `thm-hamilton-equations-in-canonical-cotangent-coordinates`, `thm-the-canonical-cotangent-two-form-is-symplectic`, `ex-poisson-brackets-in-canonical-coordinates`, `ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map`, `ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle`, `fs-an-infinitesimal-moment-map-is-automatically-equivariant`, `fs-every-symplectic-action-is-hamiltonian`.

For the A-page reading routes, I also opened `library/abstract-algebra/algebraic-representation-and-tensor-symmetry-map.md`, `library/differential-geometry/moment-maps-and-symplectic-reduction.md`, and the current-run batch-32 manifest. The former page is draft with the two named draft carriers; the latter is published and lists the moment-map definition and equivariance proposition used here. The batch-40 item dependency lists do not contain either batch-32 carrier. I did not independently audit those other-batch proofs because they are only a page-reading route, not a logical supplier to batch 40.

## Item review

### `def-symplectic-comoment-map-and-hamiltonian-observable-action`

No confirmed defect. The definition specifies a real Lie algebra, a symplectic manifold, the real Poisson algebra of real-valued smooth functions, a real-linear Lie homomorphism condition, and the observable operator with the library bracket convention. It defines both parts of “Poisson derivation” and expressly avoids asserting a group action or integration. The cited Poisson-algebra and bracket suppliers support the stated hypotheses, including Jacobi and both Leibniz rules. The contract’s boundary notes match the definition.

### `prop-comoment-maps-act-on-observables-by-poisson-derivations`

No confirmed defect. Step 1.1 establishes linearity of the operator-valued map and of each operator. Step 1.2 uses the biderivation rule for pointwise multiplication. Step 1.3 applies Jacobi and skew-symmetry to obtain the bracket derivation rule. Step 2.1 gives the operator commutator identity with the sign required by the stated Lie representation convention. Step 1.4 uses the all-group forward implication for an equivariant moment map; its `AC_ω` assumption is explicit, and it does not import the connectedness hypothesis needed only for the converse. Step 3.1 has the correct sign: `{J(ξ),F}=-X_{J(ξ)}(F)`, and `X_{μ^ξ}=-ξ_M` gives `ρ_J(ξ)F=ξ_M(F)`.

The proof contract’s quoted sources, uses, and derivations match the proof. The published supplier `prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity` has a direct forward calculation, which is the only direction this item uses.

### `ex-quadratic-sl2-comoment-action-on-the-symplectic-plane`

No confirmed defect. The contraction calculation proves that `dq∧dp` is nondegenerate and closed. The three matrix brackets are `[H,E]=2E`, `[H,F]=-2F`, and `[E,F]=H`; the coordinate Poisson computations agree with the three assigned quadratic components. Bilinearity and alternation extend the basis checks to every pair. The displayed observable operators have the claimed signs. Direct composition on an arbitrary smooth function gives the three stated commutators, with mixed partial derivatives cancelling. The product and Poisson-bracket examples evaluate correctly. The example contract matches these calculations and keeps `AC_ω` attached to the coordinate-formula supplier.

## Page verdicts

- `poisson-algebras-and-hamiltonian-representations`: no confirmed defect. Its Poisson-bracket conventions, moment-map signs, connected/disconnected-group qualification, lack of an integrated-action claim, and definition/proposition summaries match the opened carriers. Its `requires` routes are represented accurately; the associative-algebra page is reading context only, not a logical supplier.
- `poisson-algebras-and-hamiltonian-representations-examples`: no confirmed defect. The quadratic `sl₂` summary matches the assigned example. The canonical-coordinate, circle-rotation, angular-momentum, and two failure-case summaries match the opened carriers, including their sign and non-equivariance qualifications.

The source locators were independently checked against the cited texts:

- [Ana Cannas da Silva, *Lectures on Symplectic Geometry*](https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf), Lecture 18, Definition 18.5, Theorem 18.6, Definition 18.7 and following exercise (printed pp. 108–109); Lecture 22, §22.1, Definition 22.1 and comoment-map discussion (printed pp. 133–135). The source states the bracket and Poisson-algebra axioms; its Jacobi and Leibniz checks are exercises, as the A-page notes.
- [Eckhard Meinrenken, *Symplectic Geometry*](https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf), §4.2, Definitions 4.3 and Proposition 4.4 (printed pp. 46–47), and §7.3, Definition 7.12 and Lemma 7.14 with its proof (printed pp. 83–84). The lemma gives the equivariant-moment-map forward implication and the connected-group converse. The source uses the same `exp(-tξ)` fundamental-field convention and moment equation. Its §4.2 Hamiltonian-vector-field sign is opposite the library sign, but both conventions give the same bracket `ω(X_F,X_G)`; I accounted for that translation when comparing the citations.
- [Nima Moshayedi, *Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory*](https://arxiv.org/pdf/2012.14662), §§2.7.3–2.7.15 (PDF pp. 57–59), §2.8.4 (PDF pp. 63–64), and §3.1.1 (PDF pp. 75–76). The Poisson-algebra checks are exercises; the moment-map section uses the positive-exponential generator and `dμ^X=ι_{X#}ω`, which translates to the library equation because `X#=-ξ_M`.

## Edits and validation

No item or page was edited. No defect requiring an uneditable finding was confirmed. No proof contract or judge record was changed. Because no item repair or formatting edit occurred, reflow, precheck, and the final `proof-layout` command were not run.

## Uneditable defects

None found in the assigned items, pages, or claim-relevant published suppliers.

## Coverage note

The initial dependency scan missed some inline `deps`, so some transitive supplier items were read after their consumers. Examples are the Poisson-algebra theorem before its Jacobi/biderivation suppliers, and `def-symplectic-vector-space` before `thm-alternating-forms-have-a-symplectic-normal-form`. I later opened and checked those sources; no mathematical issue remains, but strict supplier-first sequencing was not achieved on those edges. Other unrelated transitive supplier closures and the proof bodies of the separate batch-32 reading-route carriers were not recursively audited.

## Blocker

No batch-40 review blocker. At the time checked, the live run had no worker running and `3a-read` was in progress. The autopilot status reported an unrelated `3a-collect` blocker: batch 13 had failed three times. No run control was changed.
