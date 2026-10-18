# Step 4 batch reviewer — batch **63**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **63**. Step-5 owning group: **z**.
Return `group: "z"` and `batches: ["63"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 63 | `temperley-lieb-towers-and-physics-models` | A | temperley-lieb-jones-wenzl-traces-and-quotients, direct-integral-decomposition-and-type-i-groups |
| 63 | `temperley-lieb-towers-and-physics-models-examples` | B | temperley-lieb-towers-and-physics-models |

## Your content, in full

### `temperley-lieb-towers-and-physics-models` — Temperley–Lieb Towers, Spin Chains, and Scaling Interfaces

- `def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower` · definition — Type-A path spaces and their matrix-unit tower
- `thm-temperley-lieb-type-a-path-space-tower-branching` · theorem — The A_(ell-1) path-space tower branches by adjacent vertices
- `def-xxz-open-chain-temperley-lieb-representation` · definition — Open XXZ spin-half generators and Hamiltonian convention
- `def-potts-open-chain-clock-shift-representation` · definition — Open Potts clock-shift Temperley–Lieb generators
- `def-temperley-lieb-diagram-tower-and-right-closure` · definition — Finite diagram tower inclusion and normalized right closure
- `lem-xxz-open-chain-local-matrix-satisfies-temperley-lieb` · lemma — The open XXZ local 4-by-4 matrix satisfies the Temperley–Lieb relations
- `thm-xxz-open-chain-hamiltonian-and-boundary-field` · theorem — The XXZ generator Hamiltonian has the declared Pauli expansion and endpoint field
- `lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb` · lemma — The Q = 2, 3, 4 open Potts matrices satisfy Temperley–Lieb
- `lem-temperley-lieb-diagram-tower-conditional-expectation-identities` · lemma — Right closure is a trace-preserving diagram-tower expectation
- `lem-temperley-lieb-right-closure-preserves-trace-radical` · lemma — Normalized right closure preserves the diagram trace radical
- `thm-temperley-lieb-root-quotient-tower-interface` · theorem — The positive-root Jones quotient is the type-A path tower with positive right closure
- `lem-tracial-standard-form-and-normal-functional-vectors` · lemma — Tracial standard form, normal functional vectors, and expectation
- `lem-finite-factor-projection-comparison-and-normalized-trace` · lemma — Projection comparison and unique normalized traces in finite factors
- `lem-tracial-hilbert-module-dimension-and-finite-corners` · lemma — Ordinary Hilbert-module dimension and finite projection models
- `def-extremal-finite-index-ii1-subfactor-data` · definition — Finite-index extremal II1 subfactor data
- `lem-finite-index-bounded-vector-pull-down` · lemma — Finite Jones index gives bounded vector pull-down
- `lem-finite-right-n-module-frame-from-projection-model` · lemma — Ordinary finite Jones index supplies a bounded finite Parseval frame
- `thm-finite-index-ii1-basic-construction-jones-tower` · theorem — Ordinary finite-index II1 inclusions give the full Jones tower and Temperley–Lieb relations

### `temperley-lieb-towers-and-physics-models-examples` — Temperley–Lieb Towers, Spin Chains, and Scaling Interfaces: Examples and Counterexamples

- `cex-xxz-unit-circle-generator-not-self-adjoint` · counterexample — The XXZ local generator is not always self-adjoint in the standard spin basis
- `rem-temperley-lieb-scaling-limit-and-boundary-status` · remark — Scaling limits and non-open boundary models remain source-qualified
- `ex-matrix-amplification-basic-construction` · example — A matrix amplification gives an explicit finite-index II1 inclusion
- `ex-xxz-q-one-three-site-open-chain` · example — The q = 1 three-site open XXZ chain has loop value 2
- `ex-potts-q-two-three-four-open-chain` · example — The Q = 2, 3, 4 Potts chains use three distinct q normalizations
- `ex-temperley-lieb-rank-three-right-closure` · example — Right closure on the five rank-three diagrams

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `temperley-lieb-towers-and-physics-models` requires `temperley-lieb-jones-wenzl-traces-and-quotients`
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
