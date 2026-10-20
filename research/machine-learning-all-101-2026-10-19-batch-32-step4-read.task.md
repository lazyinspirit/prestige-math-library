# Step 4 batch reviewer — batch **32**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **32**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["32"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 32 | `relu-approximation-rates-and-depth-expressivity` | A | feedforward-networks-and-universal-approximation, chern-and-pontryagin-classes-by-splitting-and-complexification, sobolev-poincare-and-morrey-inequalities, symmetrization-rademacher-complexity-and-covering-entropy |
| 32 | `relu-approximation-rates-and-depth-expressivity-examples` | B | relu-approximation-rates-and-depth-expressivity |

## Your content, in full

### `relu-approximation-rates-and-depth-expressivity` — ReLU approximation rates, depth separation, and linear regions

- `def-relu-network` · definition — ReLU feedforward networks and complexity conventions
- `def-relu-linear-region` · definition — Connected activation-pattern regions
- `lem-univariate-relu-affine-interval-count` · lemma — A depth-H univariate ReLU network has a product bound on affine intervals
- `lem-relu-tent-iterate-depth` · lemma — Tent-map iterates and ReLU implementation
- `lem-relu-square-approximation` · lemma — Logarithmic-size ReLU approximation of the square
- `lem-relu-bounded-product-approximation` · lemma — Correctly scaled bounded product approximation
- `lem-sobolev-taylor-grid-approximation` · lemma — Local Taylor approximation on a Sobolev grid
- `thm-yarotsky-fixed-architecture-sobolev-approximation-rate` · theorem — Target-independent ReLU rate on the unit Sobolev ball
- `thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation` · theorem — Target-dependent depth-six approximation of Lipschitz functions
- `thm-borsuk-ulam-general` · theorem — Borsuk–Ulam theorem in every dimension
- `thm-warren-polynomial-sign-pattern-bound` · theorem — An elementary polynomial sign-pattern bound
- `thm-sobolev-continuous-nonlinear-width-lower-bound` · theorem — Sobolev lower bound for continuous parameter selection
- `lem-relu-network-vc-dimension-bound` · lemma — VC bounds for a fixed ReLU architecture
- `thm-yarotsky-approximation-lower-bounds` · theorem — Approximation lower bounds under distinct selection assumptions
- `lem-hyperplane-arrangement-region-count` · lemma — Hyperplane arrangement upper count and general-position count
- `lem-relu-rank-sensitive-region-recursion` · lemma — Rank-sensitive layer recursion for ReLU regions
- `thm-relu-linear-region-upper-bound` · theorem — Rank-sensitive upper bound for ReLU linear regions
- `lem-relu-folding-block` · lemma — A width-n ReLU block makes n+1 full folds
- `thm-relu-linear-region-lower-bounds` · theorem — One-dimensional and multidimensional ReLU region lower bounds
- `lem-bernstein-polynomial-lipschitz-error` · lemma — Uniform error bound for Bernstein approximation of a Lipschitz function
- `thm-telgarsky-depth-separation-l1` · theorem — Depth separation with explicit semi-algebraic crossing budgets
- `fs-telgarsky-unrestricted-gate-parameter-separation` · false-statement — The unrestricted all-parameter depth separation is false

### `relu-approximation-rates-and-depth-expressivity-examples` — ReLU approximation rates, depth separation, and linear regions — Examples

- `cex-telgarsky-small-k-large-degree-gate` · counterexample — A single high-degree gate defeats the stated small-k separation
- `ex-relu-tent-map-depth-vs-width` · example — Tent-map composition gives exponentially many intervals
- `ex-target-specific-vs-target-independent-approximation` · example — Same target with adaptive and target-independent architectures
- `ex-linear-regions-do-not-guarantee-learning` · example — Many linear regions give no training or generalization guarantee

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `relu-approximation-rates-and-depth-expressivity` requires `feedforward-networks-and-universal-approximation`
---

# Step 4 Alpha batch reviewer — read-only digest, `machine-learning-all-101-2026-10-19`

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
