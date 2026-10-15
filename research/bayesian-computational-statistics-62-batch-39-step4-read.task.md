# Step 4 batch reviewer — batch **39**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **39**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["39"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 39 | `adaptive-mcmc-convergence-and-limitations` | A | mcmc-ergodicity-and-mixing |
| 39 | `adaptive-mcmc-convergence-and-limitations-examples` | B | adaptive-mcmc-convergence-and-limitations |

## Your content, in full

### `adaptive-mcmc-convergence-and-limitations` — Adaptive MCMC convergence limits

- `def-diminishing-adaptation` · definition — Diminishing adaptation
- `def-adaptive-mcmc-containment` · definition — Containment for adaptive MCMC
- `lem-adaptive-mcmc-block-perturbation-bound` · lemma — Finite-block perturbation bound for adaptive MCMC
- `lem-adaptive-mcmc-uniform-drift-minorization-bound` · lemma — Common drift and strongly aperiodic minorization give a uniform geometric bound
- `thm-adaptive-mcmc-converges-under-uniform-ergodicity-or-containment` · theorem — Adaptive MCMC marginal convergence under diminishing adaptation with uniform ergodicity or containment
- `cor-adaptive-mcmc-containment-from-uniform-drift-minorization` · corollary — Common drift and minorization give containment under diminishing adaptation, strong aperiodicity, and a finite initial V-moment

### `adaptive-mcmc-convergence-and-limitations-examples` — Adaptive MCMC convergence limits — Examples

- `cex-diminishing-adaptation-alone-does-not-imply-strong-law` · counterexample — Diminishing adaptation and uniform ergodicity need not give a strong law
- `ex-adaptive-mcmc-loss-of-containment` · example — Diminishing adaptation with loss of containment
- `ex-uniformly-ergodic-adaptive-mcmc-family` · example — A uniformly ergodic adaptive refresh family

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `adaptive-mcmc-convergence-and-limitations` requires `mcmc-ergodicity-and-mixing`
- `mcmc-diagnostics-and-finite-run-limitations` requires `adaptive-mcmc-convergence-and-limitations`
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
