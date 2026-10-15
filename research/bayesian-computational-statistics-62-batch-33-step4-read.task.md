# Step 4 batch reviewer — batch **33**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **33**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["33"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 33 | `metropolis-hastings-algorithm-and-invariance` | A | general-state-mcmc-kernels-and-reversibility, dominated-experiments-likelihood-and-sufficiency, conformal-prediction-and-exchangeable-ranks |
| 33 | `metropolis-hastings-algorithm-and-invariance-examples` | B | metropolis-hastings-algorithm-and-invariance |

## Your content, in full

### `metropolis-hastings-algorithm-and-invariance` — Metropolis–Hastings kernels

- `lem-common-submeasure-density-is-pointwise-minimum` · lemma — The common submeasure of two finite densities
- `lem-common-submeasure-and-bounded-radon-nikodym-density` · lemma — The common submeasure and its bounded density
- `alg-metropolis-hastings-kernel` · algorithm — Metropolis–Hastings kernel
- `lem-metropolis-hastings-density-ratio` · lemma — The common-density Metropolis–Hastings ratio
- `thm-metropolis-hastings-kernel-is-reversible-and-invariant` · theorem — Metropolis–Hastings flow is reversible and invariant

### `metropolis-hastings-algorithm-and-invariance-examples` — Metropolis–Hastings kernels — Examples

- `ex-random-walk-metropolis-hastings` · example — A three-state random-walk Metropolis kernel
- `ex-independence-metropolis-hastings` · example — A two-state independence sampler
- `ex-metropolis-hastings-proposal-support-failure` · example — A proposal with disconnected support
- `ex-metropolis-hastings-rejected-self-transition` · example — Rejection creates a self-transition

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `metropolis-hastings-algorithm-and-invariance` requires `general-state-mcmc-kernels-and-reversibility`
- `gibbs-sampling-and-scan-schemes` requires `metropolis-hastings-algorithm-and-invariance`
- `hamiltonian-monte-carlo-and-leapfrog` requires `metropolis-hastings-algorithm-and-invariance`
- `langevin-monte-carlo-mala-and-ula` requires `metropolis-hastings-algorithm-and-invariance`
- `particle-mcmc-pmmh-and-particle-gibbs` requires `metropolis-hastings-algorithm-and-invariance`
- `abc-mcmc-and-sequential-abc` requires `metropolis-hastings-algorithm-and-invariance`
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
