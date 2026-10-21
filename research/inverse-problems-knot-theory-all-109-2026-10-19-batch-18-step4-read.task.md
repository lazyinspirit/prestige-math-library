# Step 4 batch reviewer — batch **18**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **18**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["18"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 18 | `linear-gaussian-inverse-posteriors-and-tikhonov` | A | bayesian-inverse-likelihoods-and-posterior-propriety, gaussian-process-priors-and-posterior-laws, the-moore-penrose-pseudoinverse-and-regularised-least-squares |
| 18 | `linear-gaussian-inverse-posteriors-and-tikhonov-examples` | B | linear-gaussian-inverse-posteriors-and-tikhonov |

## Your content, in full

### `linear-gaussian-inverse-posteriors-and-tikhonov` — Linear Gaussian inverse posteriors and Tikhonov

- `lem-ip-singular-gaussian-support-and-pseudoinverse` · lemma — Support and pseudoinverse coordinates of a finite singular Gaussian
- `thm-ip-finite-linear-gaussian-posterior` · theorem — Finite linear Gaussian inverse posterior with singular prior covariance
- `cor-ip-gaussian-map-equals-tikhonov-minimizer` · corollary — Finite Gaussian MAP, posterior mean, and support-restricted Tikhonov minimizer coincide

### `linear-gaussian-inverse-posteriors-and-tikhonov-examples` — Linear Gaussian inverse posteriors and Tikhonov — Examples and Counterexamples

- `ex-ip-singular-state-gaussian-posterior` · example — A rank-one prior gives a singular Gaussian inverse posterior
- `ex-ip-prior-whitened-tikhonov-posterior` · example — Prior whitening turns an anisotropic Gaussian posterior into Tikhonov form
- `cex-ip-nongaussian-map-differs-from-posterior-mean` · counterexample — A non-Gaussian posterior can have different MAP and mean

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `linear-gaussian-inverse-posteriors-and-tikhonov` requires `bayesian-inverse-likelihoods-and-posterior-propriety`
- `posterior-contraction-in-gaussian-sequence-inversion` requires `linear-gaussian-inverse-posteriors-and-tikhonov`
- `bayesian-inverse-experimental-design-and-information-gain` requires `linear-gaussian-inverse-posteriors-and-tikhonov`
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
