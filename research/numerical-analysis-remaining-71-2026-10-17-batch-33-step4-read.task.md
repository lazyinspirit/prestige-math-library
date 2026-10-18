# Step 4 batch reviewer — batch **33**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **33**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["33"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 33 | `invariant-domain-and-entropy-stable-conservative-schemes` | A | high-resolution-tvd-eno-and-weno-methods |
| 33 | `invariant-domain-and-entropy-stable-conservative-schemes-examples` | B | invariant-domain-and-entropy-stable-conservative-schemes |

## Your content, in full

### `invariant-domain-and-entropy-stable-conservative-schemes` — Positivity, invariant domains and entropy-stable systems fluxes

- `def-pe03-convex-invariant-domain` · definition — Convex invariant domains for a one-step update
- `def-pe03-system-entropy-pair-and-potential` · definition — Convex entropy pairs, entropy variables, and entropy potentials for systems
- `alg-pe03-convex-scaling-positivity-limiter` · algorithm — Maximal convex scaling toward an admissible cell mean
- `def-pe03-first-order-hll-finite-volume-update` · definition — First-order finite-volume update using supplied HLL speeds
- `def-pe03-euler-positive-margin-domain` · definition — Positive-margin admissible states for ideal-gas Euler
- `lem-pe03-euler-llf-split-state-positive` · lemma — Ideal-gas Euler states remain positive under Lax–Friedrichs flux splitting
- `def-pe03-tadmor-entropy-conservative-flux` · definition — Tadmor entropy-conservative two-point flux
- `prop-pe03-euler-state-and-margin-domains-are-convex-and-closed` · proposition — Euler positive states are convex and positive-margin sets are closed convex
- `def-pe03-entropy-stable-dissipative-flux` · definition — Entropy-stable flux from positive-semidefinite entropy-variable dissipation
- `lem-pe03-hll-half-cell-riemann-averages` · lemma — First-order HLL updates are averages of adjacent half-cell fan averages
- `thm-pe03-hll-update-preserves-convex-invariant-domain` · theorem — First-order HLL update preserves a convex invariant domain under admissible fan averages
- `thm-pe03-semidiscrete-entropy-inequality-for-dissipative-flux` · theorem — Semidiscrete cell entropy inequality for Tadmor-dissipative fluxes
- `thm-pe03-convex-scaling-limiter-preserves-mean-and-node-positivity` · theorem — Convex scaling preserves the cell mean and positive-margin node states
- `thm-pe03-ideal-gas-llf-branch-preserves-positivity` · theorem — Symmetric HLL speeds preserve ideal-gas density and internal-energy positivity

### `invariant-domain-and-entropy-stable-conservative-schemes-examples` — Positivity, invariant domains and entropy-stable systems fluxes — Examples

- `ex-pe03-burgers-entropy-residual` · example — Exact Tadmor entropy residual for a dissipative Burgers flux
- `ex-pe03-conservative-positivity-rescaling` · example — Two Euler quadrature nodes rescaled to a positive margin
- `ex-pe03-entropy-stable-underresolved-shock` · example — An entropy-stable Burgers flux still smears an under-resolved shock
- `ex-pe03-near-vacuum-euler-hll-update` · example — A near-vacuum Euler state remains positive under symmetric HLL speeds

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `invariant-domain-and-entropy-stable-conservative-schemes` requires `high-resolution-tvd-eno-and-weno-methods`
- `hyperbolic-dg-and-summation-by-parts-discretizations` requires `invariant-domain-and-entropy-stable-conservative-schemes`
- `well-balanced-balance-laws-and-wet-dry-fronts` requires `invariant-domain-and-entropy-stable-conservative-schemes`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
