# Step 4 batch reviewer — batch **13**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **13**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["13"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 13 | `parametric-bernstein-von-mises-and-misspecification` | A | misspecified-posterior-consistency, local-asymptotic-normality-contiguity-and-efficiency, mixed-effects-and-longitudinal-models |
| 13 | `parametric-bernstein-von-mises-and-misspecification-examples` | B | parametric-bernstein-von-mises-and-misspecification |

## Your content, in full

### `parametric-bernstein-von-mises-and-misspecification` — Parametric Bernstein–von Mises limits and misspecification

- `lem-local-lipschitz-class-empirical-process-bound` · lemma — A square-integrable Lipschitz envelope controls a local empirical process
- `thm-lan-implies-total-variation-bvm` · theorem — Compact-uniform LAN and rate contraction imply a total-variation BvM limit
- `cor-qmd-ac-component-lan-to-bvm` · corollary — The QMD route uses normalized absolutely continuous likelihoods and a separate uniform LAN premise
- `thm-misspecified-iid-lan-under-kv-smoothness` · theorem — A local KL expansion and square-integrable log-Lipschitz envelope give misspecified iid LAN
- `cor-misspecified-iid-bvm-under-kv-regularity` · corollary — Misspecified iid LAN gives a BvM limit when the posterior has the required parameter rate
- `thm-misspecified-mle-sandwich-expansion` · theorem — A consistent approximate MLE has the misspecified sandwich limit under local LAN conditions

### `parametric-bernstein-von-mises-and-misspecification-examples` — Parametric Bernstein–von Mises limits and misspecification — Examples

- `ex-regular-normal-model-bvm` · example — A correctly specified regular normal mean model
- `ex-normal-working-model-misspecified-coverage` · example — A unit-variance normal working model can miscalibrate credible intervals
- `ex-boundary-normal-mean-truncated-posterior` · example — At a boundary, the normal posterior limit is truncated

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `parametric-bernstein-von-mises-and-misspecification` requires `misspecified-posterior-consistency`
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
