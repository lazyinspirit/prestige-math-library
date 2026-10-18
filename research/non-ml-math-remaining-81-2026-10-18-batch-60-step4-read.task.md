# Step 4 batch reviewer — batch **60**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **60**. Step-5 owning group: **y**.
Return `group: "y"` and `batches: ["60"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 60 | `brauer-bmw-and-partition-diagram-algebras` | A | algebraic-representation-and-tensor-symmetry-map, abelian-varieties-base-change-and-arithmetic-models |
| 60 | `brauer-bmw-and-partition-diagram-algebras-examples` | B | brauer-bmw-and-partition-diagram-algebras |

## Your content, in full

### `brauer-bmw-and-partition-diagram-algebras` — Brauer, BMW, and Partition Diagram Algebras

- `def-brauer-and-partition-diagram-categories` · definition — Typed Brauer and partition diagram categories
- `def-polynomial-invariants-for-a-rational-linear-action` · definition — Polynomial invariants of a rational algebraic-group action
- `lem-gram-map-fibers-and-rank-strata` · lemma — Gram-map image, full-rank fibers, and rank-stratum dimensions
- `lem-multilinear-minor-pfaffian-ideal-components` · lemma — Multilinear components of symmetric-minor and Pfaffian ideals
- `lem-even-row-tableau-generating-identity` · lemma — Generating identity for tableaux with even row lengths
- `lem-generic-symmetric-minor-straightening` · lemma — Straightening basis for generic symmetric determinantal rings
- `lem-generic-pfaffian-straightening` · lemma — Straightening basis for generic Pfaffian rank rings
- `lem-brauer-and-partition-composition-is-associative` · lemma — Associativity of Brauer and partition diagram composition
- `lem-brauer-and-partition-diagram-basis-ranks` · lemma — Ranks of the Brauer and partition diagram bases
- `def-bmw-algebra-with-fixed-kauffman-skein-convention` · definition — BMW algebra in a fixed Kauffman skein convention
- `lem-generic-symmetric-determinantal-ring-normal` · lemma — Normality of the symmetric determinantal ring
- `lem-generic-pfaffian-ring-normal` · lemma — Normality of the Pfaffian rank ring
- `thm-brauer-generator-presentation` · theorem — Generators and defining relations for the Brauer diagram category
- `lem-bmw-cubic-relation-and-hecke-quotient` · lemma — The BMW braid generators satisfy a cubic, with a Hecke quotient
- `lem-symmetric-and-alternating-rank-coordinate-rings` · lemma — Exact symmetric-minor and alternating-Pfaffian rank ideals
- `thm-partition-diagram-orbit-basis-centralizer` · theorem — Partition-diagram orbit basis and symmetric-group centralizer
- `lem-framed-kauffman-link-evaluation` · lemma — Scalar evaluation of framed Kauffman link diagrams
- `thm-bmw-kauffman-tangle-basis` · theorem — BMW basis by descending Kauffman tangles
- `lem-gram-map-torsor-descent-and-codimension-extension` · lemma — Full-rank Gram torsor descent and extension across lower-rank strata
- `lem-brauer-contraction-functor-and-bending` · lemma — Signed Brauer contraction functor and bending isomorphism
- `thm-orthogonal-and-symplectic-polynomial-contraction-invariants` · theorem — Polynomial invariants of the full orthogonal and symplectic groups
- `thm-orthogonal-and-symplectic-multilinear-fft-sft` · theorem — Multilinear orthogonal and symplectic FFT/SFT
- `thm-brauer-orthogonal-symplectic-tensor-centralizers` · theorem — Brauer diagram centralizers for full orthogonal and symplectic groups

### `brauer-bmw-and-partition-diagram-algebras-examples` — Brauer, BMW, and Partition Diagram Algebras: Examples and Counterexamples

- `ex-brauer-and-partition-loop-composition` · example — Brauer and partition loops contribute their parameters
- `ex-orthogonal-brauer-centralizer-not-faithful-in-rank-one` · example — The orthogonal Brauer action has a kernel at dimension one and rank two
- `ex-symplectic-brauer-relation-in-dimension-two` · example — The first symplectic Brauer relation in dimension two
- `ex-partition-diagram-kernel-below-stable-range` · example — A partition orbit-basis element vanishes below the stable range
- `ex-bmw-cubic-and-hecke-quotient-separate` · example — One BMW generator takes three scalar values across representations

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `brauer-bmw-and-partition-diagram-algebras` requires `algebraic-representation-and-tensor-symmetry-map`
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
