# Step 4 batch reviewer — batch **70**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **70**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["70"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 70 | `unequal-parameter-hecke-cells-and-representations` | A | hopf-hecke-and-quantum-symmetry-interfaces, bruhat-subword-order-and-lifting, hecke-markov-traces-and-polynomial-link-invariants |
| 70 | `unequal-parameter-hecke-cells-and-representations-examples` | B | unequal-parameter-hecke-cells-and-representations |

## Your content, in full

### `unequal-parameter-hecke-cells-and-representations` — Unequal-Parameter Hecke Cells and Representations

- `def-arbitrary-rank-coxeter-system-and-bruhat-order` · definition — Arbitrary-rank Coxeter presentations, length, reflections, and Bruhat order
- `def-canonical-basic-set-for-hecke-specialization` · definition — Canonical basic sets for split Hecke specializations
- `def-schur-elements-from-a-symmetrizing-trace` · definition — Schur elements of a split semisimple algebra with a symmetrizing trace
- `rem-general-unequal-parameter-cell-conjectures-are-regime-dependent` · remark — Lusztig P1–P15 are not universally proved cell properties
- `lem-complete-local-hecke-modular-systems-and-idempotent-lifting` · lemma — Complete local modular systems and integral idempotent lifting
- `def-unequal-parameter-weight-function-and-coefficient-order` · definition — Weight functions and ordered group-algebra coefficients
- `thm-arbitrary-rank-finite-parabolics-and-bruhat-subword` · theorem — Finite-generator standard parabolics and the Bruhat subword property at arbitrary rank
- `lem-simple-generator-weights-extend-to-a-weight-function` · lemma — Simple-generator weights extend uniquely to a weight function
- `def-unequal-parameter-coxeter-hecke-algebra` · definition — The unequal-parameter Coxeter Hecke algebra
- `lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity` · lemma — The arbitrary-rank weighted Hecke basis and Bruhat-triangular bar
- `thm-unequal-parameter-kazhdan-lusztig-basis` · theorem — Existence and uniqueness of the ordered-group unequal-parameter Kazhdan–Lusztig basis
- `def-unequal-parameter-cells-and-cell-quotients` · definition — Unequal-parameter left, right, and two-sided cells and cell quotients
- `def-finite-weyl-lusztig-basic-set-data` · definition — Finite-Weyl Lusztig data and the precise basic-set hypotheses
- `thm-unequal-parameter-cell-quotients-are-modules` · theorem — Weighted cell quotients are well-defined modules and bimodules
- `lem-lusztig-asymptotic-algebra-and-specialization-map` · lemma — The asymptotic algebra, filtered layers and the specialization homomorphism
- `thm-a1xa1-unequal-parameter-cells-give-a-canonical-basic-set` · theorem — The four weighted cells of A1×A1 give a canonical basic set at odd residue characteristic
- `lem-schur-leading-coefficients-and-good-asymptotic-specializations` · lemma — Leading Schur coefficients and split good-characteristic asymptotic specializations
- `lem-asymptotic-induction-identifies-leading-modular-simples` · lemma — Asymptotic induction identifies leading modular simples
- `lem-filtered-projectives-prove-canonical-basic-set-reciprocity` · lemma — Filtered projectives prove canonical basic-set reciprocity
- `thm-finite-weyl-canonical-basic-sets-from-lusztig-properties` · theorem — Finite-Weyl canonical basic sets from Lusztig properties
- `cor-weighted-cell-quotients-and-finite-weyl-basic-set-labels` · corollary — Weighted cell quotients and the leading finite-Weyl basic-set labels
- `rem-geck-basic-set-theorem-scope-and-proof-status` · remark — The scope and proof status of the finite-Weyl basic-set theorem

### `unequal-parameter-hecke-cells-and-representations-examples` — Unequal-Parameter Hecke Cells and Representations: Examples and Counterexamples

- `ex-b2-unequal-parameter-kl-basis-and-cell-edges` · example — A B2 unequal-parameter KL basis and four left-cell transitions
- `cex-modular-specialization-collapses-unequal-parameter-cell-labels` · counterexample — A characteristic-two specialization collapses four weighted cell labels
- `ex-a1-nonsemisimple-good-specialization-has-a-basic-set` · example — A nonsemisimple L-good rank-one specialization has a singleton basic set

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `unequal-parameter-hecke-cells-and-representations` requires `hopf-hecke-and-quantum-symmetry-interfaces`
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
