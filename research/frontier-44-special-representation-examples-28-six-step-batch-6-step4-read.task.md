# Step 4 batch reviewer — batch **6**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **6**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["6"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 6 | `kashiwara-operators-and-crystal-lattices` | A | divided-powers-integral-forms-and-quantum-highest-weights |
| 6 | `kashiwara-operators-and-crystal-lattices-examples` | B | kashiwara-operators-and-crystal-lattices |

## Your content, in full

### `kashiwara-operators-and-crystal-lattices` — Kashiwara Operators and Crystal Lattices

- `def-the-local-ring-at-q-zero` · definition — The local ring $A_0$ of rational functions regular at $q=0$
- `thm-unique-kashiwara-i-string-decomposition` · theorem — Uniqueness of the $i$-string decomposition of an integrable module
- `def-kashiwara-crystal-operators` · definition — The Kashiwara operators $\tilde e_i$ and $\tilde f_i$ of an integrable module
- `thm-the-i-string-decomposition-of-the-negative-half` · theorem — The $i$-string decomposition of the negative half
- `def-crystal-lattice-and-crystal-basis` · definition — Crystal lattices, crystal bases and their crystals
- `lem-rank-one-tensor-strings-have-the-crystal-limit-rule` · lemma — Rank-one tensor strings and their crystal limit rule
- `def-crystal-graph-epsilon-phi-and-weight` · definition — The crystal graph, $\varepsilon_i$, $\varphi_i$ and the weight function
- `def-kashiwara-lattices-lambda-and-infinity` · definition — The Kashiwara lattices $\mathcal L(\lambda)$ and $\mathcal L(\infty)$ and their generating sets
- `lem-highest-weight-tensor-maps-and-their-adjunction` · lemma — Highest weight tensor maps, their adjunction and the retraction $S_{\lambda,\mu}$
- `thm-grand-loop-existence-of-highest-weight-crystal-bases` · theorem — The grand loop: existence of the highest weight crystal bases
- `lem-crystal-lattice-polarizations-are-perfect-at-q-zero` · lemma — Crystal lattice polarizations are perfect at $q=0$
- `lem-crystal-operators-commute-with-highest-weight-projection-modulo-q` · lemma — Projection from $\mathcal L(\infty)$ to $\mathcal L(\lambda)$ and its compatibility with the Kashiwara operators
- `thm-crystal-basis-of-the-negative-half` · theorem — The crystal basis $\mathcal B(\infty)$ of the negative half

### `kashiwara-operators-and-crystal-lattices-examples` — Kashiwara Operators and Crystal Lattices — Examples

- `cex-an-a-zero-lattice-without-a-crystal-basis` · counterexample — A free $A_0$-lattice generating the module that is not a crystal lattice
- `ex-crystal-graph-of-b-two-lambda-one` · example — The crystal graph of the quantum symmetric square of the standard $A_2$-module
- `ex-kashiwara-strings-in-the-three-dimensional-sl-two-module` · example — Kashiwara strings in the three-dimensional $\mathfrak{sl}_2$-module
- `ex-projection-from-b-infinity-to-a-highest-weight-crystal` · example — The projection from $B(\infty)$ to a highest weight crystal for $\mathfrak{sl}_2$

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `kashiwara-operators-and-crystal-lattices` requires `divided-powers-integral-forms-and-quantum-highest-weights`
- `tensor-product-crystals-and-highest-weight-crystal-uniqueness` requires `kashiwara-operators-and-crystal-lattices`
- `balanced-triples-and-global-crystal-bases` requires `kashiwara-operators-and-crystal-lattices`
---

# Step 4 Alpha batch reviewer — read-only digest, `frontier-44-special-representation-examples-28-six-step`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
