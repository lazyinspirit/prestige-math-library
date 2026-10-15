# Step 4 batch reviewer — batch **19**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **19**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["19"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 19 | `weak-nonparametric-bernstein-von-mises` | A | orthonormal-bases-parseval-and-fourier-series, weak-convergence-tightness-and-representation |
| 19 | `weak-nonparametric-bernstein-von-mises-examples` | B | weak-nonparametric-bernstein-von-mises |

## Your content, in full

### `weak-nonparametric-bernstein-von-mises` — Weak nonparametric Bernstein–von Mises limits

- `def-negative-sobolev-space-for-white-noise` · definition — Logarithmic negative Sobolev spaces for white noise
- `lem-wavelet-product-prior-is-l2-valued` · lemma — The wavelet product prior is L2-valued
- `lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces` · lemma — The bounded-Lipschitz metric characterizes weak convergence on Polish spaces
- `lem-product-prior-coordinate-posterior-law` · lemma — The product-prior posterior factors by coordinates
- `lem-product-prior-posterior-second-moment-in-negative-sobolev-space` · lemma — A negative-Sobolev posterior second-moment bound
- `lem-finite-coordinate-posterior-total-variation-limit` · lemma — Finite-coordinate posterior total-variation limit
- `lem-density-normal-laws-and-square-summable-gaussian-series` · lemma — Density normal laws and square-summable Gaussian series under countable choice
- `lem-white-noise-is-borel-gaussian-on-negative-sobolev-space` · lemma — White noise is a Borel Gaussian law on the negative Sobolev space
- `cor-canonical-white-noise-law-is-tight-under-choice` · corollary — The canonical white-noise law is tight under the Axiom of Choice
- `thm-weak-nonparametric-bernstein-von-mises-for-product-priors` · theorem — Weak nonparametric Bernstein–von Mises theorem for product priors
- `cor-weak-posterior-convergence-in-negative-sobolev-space` · corollary — The scaled posterior converges weakly on the negative Sobolev space
- `cor-continuous-functionals-of-the-scaled-posterior-converge` · corollary — Continuous images of the scaled posterior converge weakly
- `lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent` · lemma — Prior-predictive and fixed-truth data laws are equivalent

### `weak-nonparametric-bernstein-von-mises-examples` — Weak nonparametric Bernstein–von Mises limits — Examples

- `ex-white-noise-is-not-l2-valued` · example — White noise has a negative-Sobolev law but no L2-valued law
- `ex-gaussian-product-prior-satisfies-weak-bvm` · example — A Gaussian wavelet product prior covered by the weak BvM theorem

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `functional-bayesian-limits-and-credible-set-calibration` requires `weak-nonparametric-bernstein-von-mises`
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
