# Step 3a reader report — batch 39

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `39`

## Inventory reviewed

Assigned pages opened:

- `qsm-finite-range-spin-dynamics` — `library/quantum-statistical-mechanics/qsm-finite-range-spin-dynamics.md`
- `qsm-finite-range-spin-dynamics-examples` — `library/quantum-statistical-mechanics/qsm-finite-range-spin-dynamics-examples.md`

Assigned items opened:

- `def-qsm-bounded-finite-range-interaction`
- `lem-qsm-finite-range-commutator-path-bound`
- `lem-qsm-boundary-dynamics-cauchy`
- `thm-qsm-finite-range-spin-dynamics`
- `lem-qsm-local-generator-domain`
- `ex-qsm-finite-range-nearest-neighbor-ising`

Dependency context opened for the claims under review:

- Current QSM draft suppliers: `lem-qsm-integer-lattice-countable`, `lem-qsm-matrix-state-calculus`, `lem-qsm-finite-matrix-cstar-and-state-duality`, `def-qsm-local-spin-algebras`, `lem-qsm-local-spin-inclusions-isometric`, `def-qsm-quasilocal-spin-algebra`, and `lem-qsm-quasilocal-completion`.
- Relevant published mathematics suppliers: `def-countable`, `lem-countable-iff-surjection-from-n`, `lem-finite-powers-of-countable-sets-are-countable`, `def-countable-choice`, `def-completion-of-a-normed-space`, `thm-metric-completion-carries-a-unique-banach-space-structure`, `lem-completion-operations-are-well-defined`, `def-c-star-algebra`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, `cor-finite-dimensional-normed-spaces-are-banach`, `def-state-on-a-c-star-algebra`, `def-qc-density-operator`, `cor-bolzano-weierstrass-in-rn`, `def-real-and-complex-inner-product-space`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `lem-rat-embeds-dense`, `thm-rationals-countable`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, and `def-matrix-units`.
- Context pages opened: `qsm-quasilocal-states` and `qsm-states-ensembles`.
- Batch context consulted: `physics-remaining-80-2026-10-17-batch-39.pages.json`, `batch-39.notes.md`, `batch-39.cross-batch-dependencies.json`, `batch-39.proof-contracts.json`, and `batch-39-sources/source-reading.md`. These records were treated as navigation and evidence, not as acceptance verdicts.

## Source evidence

I inspected the relevant sections in the retrieved extracted source texts identified by the batch source record:

- Pieter Naaijkens, *Quantum Spin Systems on Infinite Lattices*: §§3.3.7–3.3.8 and Example 3.3.9 (printed pp. 66–68); Theorem 3.3.12 and its proof (pp. 69–71); Theorem 4.1.2 and proof (pp. 96–101); and Theorem 4.2.1 and proof (pp. 101–102). The local text is `research/physics-remaining-80-2026-10-17-batch-39-sources/raw/naajk-quantum-spin-systems.txt`.
- Bruno Nachtergaele and Robert Sims, *Lieb-Robinson Bounds in Quantum Many-Body Physics*: Example 2.1 and Theorem 2.3 with its variation-of-constants/path proof (PDF pp. 3–7), and Theorem 3.1 with its Duhamel comparison proof (PDF pp. 18–20). The local text is `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/workers/infinite-equilibrium/raw/nachtergaele-sims.txt`.

The authored proofs specialize the cited methods to the stated finite-dimensional, finite-range lattice model and derive their own constants. I did not treat either source as a substitute for the displayed local arguments. I did not independently recompute the source-file hashes recorded in the source-reading note.

## Item review

- `def-qsm-bounded-finite-range-interaction` — **pass**. It specifies the lattice, max metric, finite supports, self-adjoint terms, size/range bounds, per-site norm sum, support multiplicity convention, free-boundary truncation, finite-volume dynamics, and the stated units. The finite-volume sum is finite and self-adjoint under its hypotheses.
- `lem-qsm-finite-range-commutator-path-bound` — **pass**. The variation-of-constants equation has the stated sign and the unitary homogeneous propagator gives a norm-preserving bound for both signs of time. The path weights, factorial remainder, finite-range distance estimate, and exponential sum yield the displayed constant. The estimate is correctly scoped to the finite spin model and is not called a relativistic light cone.
- `lem-qsm-boundary-dynamics-cauchy` — **pass**. The finite-volume Duhamel identity and crossing-support estimate give the stated exterior tail with factor (e^{mu R}); the polynomial max-metric shell count makes the tail summable and vanishing along every exhaustion. The compact-time conclusion follows from the uniform time factor.
- `thm-qsm-finite-range-spin-dynamics` — **pass conditionally**. The exhaustion limit, independence argument, extension by isometry, group law, inverse, and strong continuity follow from the local Cauchy estimate and the explicitly stated Countable Choice and finite-matrix C*-identity conditions. The proof does not assert an infinite-volume Hamiltonian operator.
- `lem-qsm-local-generator-domain` — **pass conditionally**. The finite commutator sum is supported in the finite (R)-neighborhood and independent of localization. The local integral identity passes to the norm limit, and the two-sided Riemann-sum argument establishes closedness of the generator.
- `ex-qsm-finite-range-nearest-neighbor-ising` — **pass**. The Pauli tensor is a self-adjoint unitary of norm one; each site belongs to two edges, giving (M=2), (R=1), and (kappa=2|J|), including (J=0). The cited Heisenberg examples contain this diagonal specialization; the item verifies its own assertions.

The current QSM draft dependencies used above were read directly. Their C*-completion argument explicitly uses the finite-matrix identity as a supplier; the assigned theorem and generator preserve that condition. The supplied records show that the C*-identity carrier is still a draft workflow input without current Step-1 readiness. I make no acceptance or readiness determination here; I found no mathematical defect in its current statement or proof that invalidates the conditional assigned claims.

## Page verdicts and uneditable findings

- `qsm-finite-range-spin-dynamics` — **mathematical summary passes**. The body distinguishes the conditional theorem from the unresolved supplier and does not claim empirical confirmation. Its frontmatter also lists `qsm-states-ensembles` directly under `requires`, while the assigned batch pages manifest lists only `qsm-quasilocal-states`. This additional edge is transitively redundant because `qsm-quasilocal-states` itself requires `qsm-states-ensembles`, but the source page and manifest differ. The page-frontmatter discrepancy is recorded for owner reconciliation; it is not a defect in the mathematical proof.
- `qsm-finite-range-spin-dynamics-examples` — **summary needs qualification**. Its first summary sentence calls the example nonzero, but the item allows (J=0) and explicitly verifies that case. Since this is B-page prose, I did not edit it. The exact findings are in the JSON output.

## Edits, checks, and blocker

No item or page prose was edited. Accordingly, I did not run item reflow, precheck, or proof-layout; there are no changed proof carriers to validate. The report and findings JSON are the only files written for this assignment.

No blocker prevented review of the assigned items. Coverage is limited in that I did not recursively re-audit every published mathematical proof in the full transitive prerequisite closure; I inspected the current draft suppliers in that closure and the published supplier statements needed for the specific arguments above.
