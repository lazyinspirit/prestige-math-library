# Step 4 batch reviewer — batch **37**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **37**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["37"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 37 | `spin-geometry-dirac-and-index-theory` | A | pin-spin-and-clifford-module-representations, stiefel-whitney-and-euler-classes-by-universal-constructions, compact-laplace-type-operators-and-hodge-representatives, chern-weil-theory-and-characteristic-forms, thom-spectra-and-unoriented-bordism-detection |
| 37 | `spin-geometry-dirac-and-index-theory-examples` | B | spin-geometry-dirac-and-index-theory, characteristic-numbers-and-cobordism-obstructions, pontryagin-duality-for-locally-compact-abelian-groups |

## Your content, in full

### `spin-geometry-dirac-and-index-theory` — Clifford Bundles, Dirac Operators, and Index Interfaces

- `def-ahat-and-relative-chern-character-forms` · definition — The A-hat form and relative Chern character
- `lem-good-cover-nerve-computes-singular-cohomology` · lemma — A geodesically convex cover has the homotopy type of its nerve
- `def-graded-hermitian-clifford-module-and-geometric-dirac` · definition — Graded Hermitian Clifford modules and geometric Dirac operators
- `lem-geometric-dirac-operator-is-well-defined` · lemma — The geometric Dirac operator is globally well defined and formally symmetric
- `lem-lichnerowicz-formula-for-geometric-dirac-operators` · lemma — Lichnerowicz formula for a geometric Dirac operator
- `lem-dirac-maximal-domain-is-h1` · lemma — The maximal distributional domain of a geometric Dirac operator is H1
- `lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel` · lemma — A chiral geometric Dirac operator is Fredholm
- `lem-dirac-heat-trace-and-mckeen-singer-index` · lemma — The Dirac heat trace is smooth and its supertrace equals the index
- `lem-dirac-heat-parametrix-has-graph-norm-remainder` · lemma — The geometric Dirac heat parametrix has a graph-norm remainder
- `def-spin-lift-of-oriented-orthonormal-frame-bundle` · definition — Spin lifts of oriented orthonormal frame bundles
- `def-even-dimensional-spinor-bundle-chirality-and-spin-connection` · definition — Even-dimensional spinor bundles, chirality, and the spin connection
- `lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor` · lemma — Spin structures exist exactly when w2 vanishes and then form an H1 torsor
- `lem-spinor-and-clifford-associated-bundles-are-well-defined` · lemma — Spinor and geometric Clifford bundles and connections are well defined
- `lem-getzler-radial-gauge-oscillator-leading-term` · lemma — Radial gauge yields the Getzler oscillator as the leading operator
- `prop-positive-scalar-curvature-forces-untwisted-spinor-kernel-zero` · proposition — Positive scalar curvature annihilates untwisted spinor harmonic sections
- `lem-mehler-supertrace-normalization-is-ahat-times-relative-chern-character` · lemma — The Mehler coefficient has A-hat times the relative Chern character
- `thm-geometric-clifford-module-dirac-index-formula` · theorem — Atiyah–Singer index formula for a closed even-dimensional geometric Clifford module
- `cor-spin-dirac-index-formula-with-arbitrary-twist` · corollary — The twisted Spin Dirac index is the integral of A-hat times ch(E)

### `spin-geometry-dirac-and-index-theory-examples` — Clifford Bundles, Dirac Operators, and Index Interfaces: Examples and Counterexamples

- `cex-dirac-on-euclidean-space-is-not-fredholm` · counterexample — The Euclidean Dirac operator has nonclosed range at zero
- `ex-complex-projective-plane-has-nonspin-tangent-bundle` · example — The complex projective plane has nonzero w2 and no Spin structure
- `ex-flat-even-torus-spin-dirac-has-index-zero` · example — Fourier modes give index zero for the periodic flat even torus
- `ex-positive-scalar-curvature-sphere-has-zero-spin-dirac-kernel` · example — The round two-sphere has zero untwisted Spin Dirac kernel
- `ex-twisted-sphere-dirac-index-and-curvature-term` · example — A line twist on the two-sphere has nonzero index and curvature term

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `spin-geometry-dirac-and-index-theory` requires `pin-spin-and-clifford-module-representations`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
