# Step 4 batch reviewer — batch **47**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **47**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["47"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 47 | `particle-mcmc-pmmh-and-particle-gibbs` | A | metropolis-hastings-algorithm-and-invariance, feynman-kac-particle-filters |
| 47 | `particle-mcmc-pmmh-and-particle-gibbs-examples` | B | particle-mcmc-pmmh-and-particle-gibbs |

## Your content, in full

### `particle-mcmc-pmmh-and-particle-gibbs` — Particle MCMC: PMMH and particle Gibbs

- `alg-pmmh` · algorithm — Particle marginal Metropolis–Hastings
- `thm-pmmh-exact-invariance` · theorem — PMMH preserves the exact parameter posterior
- `alg-monte-carlo-within-metropolis` · algorithm — Monte Carlo within Metropolis
- `def-particle-gibbs-extended-target` · definition — Particle Gibbs extended target
- `alg-conditional-particle-gibbs` · algorithm — Conditional particle filter for particle Gibbs
- `thm-particle-gibbs-selected-path-marginal` · theorem — The particle Gibbs extended target has the exact smoothing marginal
- `thm-particle-gibbs-conditional-sweep-is-gibbs` · theorem — The conditional particle Gibbs sweep is a Gibbs update
- `def-particle-gibbs-backward-simulation-extended-target` · definition — Backward-simulation particle Gibbs extended target
- `alg-particle-gibbs-backward-simulation` · algorithm — Particle Gibbs with backward simulation
- `thm-particle-gibbs-backward-simulation-sweep-is-gibbs` · theorem — The backward-simulation sweep is a Gibbs update

### `particle-mcmc-pmmh-and-particle-gibbs-examples` — Particle MCMC: PMMH and particle Gibbs — Examples

- `ex-pseudo-marginal-rejection` · example — Pseudo-marginal rejection retains the current likelihood estimate
- `cex-monte-carlo-within-metropolis-not-exact` · counterexample — Refreshing the current estimate can destroy exactness
- `ex-particle-gibbs-invariant-but-sticky` · example — An invariant particle Gibbs chain can be sticky
- `cex-particle-gibbs-missing-path-support` · counterexample — A particle Gibbs proposal that misses posterior path support

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `particle-mcmc-pmmh-and-particle-gibbs` requires `metropolis-hastings-algorithm-and-invariance`
- `particle-mcmc-pmmh-and-particle-gibbs` requires `feynman-kac-particle-filters`
---

# Step 4 Alpha batch reviewer — read-only digest, `bayesian-computational-statistics-62`

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
