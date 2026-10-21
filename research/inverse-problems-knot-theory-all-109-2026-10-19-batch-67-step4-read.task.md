# Step 4 batch reviewer — batch **67**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **67**. Step-5 owning group: **w**.
Return `group: "w"` and `batches: ["67"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 67 | `levine-tristram-signatures-and-arf-invariant` | A | seifert-matrices-and-the-alexander-module, alexander-polynomial-from-seifert-matrices, finite-basis-projector-energies-and-variational-electronic-structure, relative-smooth-triangulation-and-bundle-fitting, isotopy-extension-and-embedding-theory-beyond-whitney |
| 67 | `levine-tristram-signatures-and-arf-invariant-examples` | B | levine-tristram-signatures-and-arf-invariant, alexander-polynomial-from-seifert-matrices |

## Your content, in full

### `levine-tristram-signatures-and-arf-invariant` — Levine–Tristram signatures and the Arf invariant

- `def-seifert-surface-arc-surgery` · definition — Embedded arc surgery on a spanning surface
- `lem-total-linking-equals-intersection-with-link-seifert-surface` · lemma — Total linking is intersection with a spanning surface for a link
- `lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries` · lemma — Seifert surfaces of the same link are connected by arc surgeries
- `lem-link-seifert-pairing-well-defined` · lemma — The positive-push Seifert pairing is well-defined for a link surface
- `def-link-seifert-pairing-and-matrix` · definition — Seifert pairing and matrix of an oriented link
- `lem-link-seifert-matrix-enlargement-under-arc-surgery` · lemma — An arc surgery enlarges a link Seifert matrix by two rows and columns
- `def-knot-arf-invariant-from-seifert-form` · definition — Knot Arf invariant from the Seifert form
- `lem-seifert-matrices-of-a-knot-are-s-equivalent` · lemma — Seifert matrices of a knot are S-equivalent
- `lem-arf-quadratic-enhancement-from-seifert-form` · lemma — The Seifert form gives a quadratic enhancement and basis-independent Arf value
- `lem-levine-tristram-hermitian-form-singular-set` · lemma — The singular parameters of the Levine–Tristram form
- `def-levine-tristram-hermitian-form-and-signature` · definition — Levine–Tristram Hermitian form and signature
- `def-seifert-s-equivalence-and-conway-normalization` · definition — S-equivalence and Conway normalization
- `lem-conway-polynomial-from-seifert-determinant` · lemma — Seifert determinant constructs the normalized Conway polynomial
- `lem-levine-tristram-one-sided-averages-exist` · lemma — One-sided Levine–Tristram signature limits exist
- `lem-arf-seifert-determinant-congruence-near-minus-one` · lemma — The Seifert determinant detects Arf parity near minus one
- `lem-seifert-stabilization-preserves-levine-tristram-signature` · lemma — Seifert stabilization preserves the Levine–Tristram signature
- `thm-seifert-s-equivalence-and-conway-arf-bridge` · theorem — Seifert S-equivalence and the Conway–Arf bridge
- `thm-arf-equals-second-conway-coefficient-mod-two` · theorem — The Arf invariant is the second Conway coefficient modulo two

### `levine-tristram-signatures-and-arf-invariant-examples` — Levine–Tristram signatures and the Arf invariant — Examples and Counterexamples

- `cex-knot-kt-12-boundary-case` · counterexample — A primitive sixth root makes the trefoil Hermitian form singular
- `ex-knot-kt-12-worked-cases` · example — Trefoil and figure-eight Levine–Tristram and Arf calculations

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `levine-tristram-signatures-and-arf-invariant` requires `seifert-matrices-and-the-alexander-module`
- `levine-tristram-signatures-and-arf-invariant` requires `alexander-polynomial-from-seifert-matrices`
- `levine-tristram-signatures-and-arf-invariant-examples` requires `alexander-polynomial-from-seifert-matrices`
- `algebraic-knot-concordance-and-metabolic-forms` requires `levine-tristram-signatures-and-arf-invariant`
- `fox-milnor-factorization-and-slice-obstructions` requires `levine-tristram-signatures-and-arf-invariant`
- `casson-gordon-invariants-and-sliceness-obstructions` requires `levine-tristram-signatures-and-arf-invariant`
- `bridge-presentations-and-unknotting-number` requires `levine-tristram-signatures-and-arf-invariant`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

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
