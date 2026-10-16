# Step 4 batch reviewer — batch **47**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **47**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["47"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 47 | `quantum-signal-processing` | A | uniform-circuit-families-promise-problems-and-complexity, hilbert-space-geometry-and-riesz-representation, controlled-gates-phase-and-entanglement, circuit-syntax-denotational-semantics-and-measurement, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, polynomial-rings-and-roots, the-complex-exponential-and-eulers-formula, symmetric-polynomials, sine-cosine-and-the-definition-of-pi, further-trigonometric-identities-and-inverses, the-riemann-integral |
| 47 | `quantum-signal-processing-examples` | B | quantum-signal-processing |

## Your content, in full

### `quantum-signal-processing` — Quantum Signal Processing

- `lem-qa-23-polynomial-interval-sign-certificate` · lemma — Real-root intervals certify the sign of a real polynomial
- `lem-qa-23-sturm-root-counting` · lemma — Sturm signed remainders count distinct real polynomial roots
- `lem-qa-23-exact-interval-boundedness-decision` · lemma — Exact interval boundedness by multiplicity strata and Sturm counts
- `alg-qa-23-polynomial-root-isolation` · algorithm — Certified complex-polynomial root isolation in exact algebraic arithmetic
- `thm-qa-23-polynomial-root-isolation-correctness` · theorem — Correctness and termination of certified complex-polynomial root isolation
- `alg-qa-23-bounded-height-numerical-roots` · algorithm — Bounded-grid rational root isolation and rounded numerical QSP input
- `thm-qa-23-bounded-height-root-arithmetic-cost` · theorem — Polynomial arithmetic cost for rounded-input bounded-grid root isolation
- `def-qa-23-qsp-signal-sequence` · definition — QSP signal matrix and ordered phase sequence
- `alg-qa-23-certified-phase-approximation` · algorithm — Buffered certified rational phase approximation
- `def-qa-23-qsp-admissible-polynomial-pair` · definition — Admissible polynomial pair for Hermitian-reflection QSP
- `lem-qa-23-hermitian-signal-convention-conversion` · lemma — Hermitian-reflection and SU(2) QSP convention conversion
- `lem-qa-23-phase-sequence-unitarity` · lemma — Unitarity, determinant, and polynomial form of a QSP sequence
- `lem-qa-23-positive-polynomial-complement-factorization` · lemma — A nonnegative even polynomial has a bounded parity complement
- `thm-qa-23-certified-phase-approximation-correctness` · theorem — Correctness and arithmetic resource bound for buffered phase approximation
- `thm-qa-23-qsp-phase-factorization` · theorem — Constructive factorization of an admissible QSP polynomial pair
- `thm-qa-23-real-polynomial-completion` · theorem — Completion of a bounded real parity polynomial
- `lem-qa-23-qsp-completion-peel-arithmetic-cost` · lemma — Arithmetic cost of exact tower completion and QSP phase peeling
- `alg-qa-23-qsp-phase-synthesis` · algorithm — Real bounded-polynomial QSP phase synthesis
- `thm-qa-23-qsp-phase-implementation-error` · theorem — Hybrid bound for imperfect QSP phase rotations
- `thm-qa-23-qsp-query-cost` · theorem — QSP signal-query and phase-rotation count
- `thm-qa-23-qsp-synthesis-correctness` · theorem — Correctness of QSP phase synthesis

### `quantum-signal-processing-examples` — Quantum Signal Processing — Examples

- `ex-qa-23-degree-one-qsp` · example — Degree-one QSP phase identity

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `quantum-signal-processing` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-signal-processing` requires `controlled-gates-phase-and-entanglement`
- `quantum-signal-processing` requires `circuit-syntax-denotational-semantics-and-measurement`
- `quantum-signal-processing` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-singular-value-transformation` requires `quantum-signal-processing`
- `qubitization-and-optimal-hamiltonian-simulation` requires `quantum-signal-processing`
---

# Step 4 Alpha batch reviewer — read-only digest, `quantum-computing-algorithms-60-2026-10-15`

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
