# Step 4 batch reviewer — batch **16**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **16**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["16"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 16 | `gaussian-process-posterior-contraction` | A | iid-posterior-contraction, gaussian-process-support-and-concentration |
| 16 | `gaussian-process-posterior-contraction-examples` | B | gaussian-process-posterior-contraction |

## Your content, in full

### `gaussian-process-posterior-contraction` — Gaussian-process posterior contraction

- `lem-tight-borel-gaussian-law-has-separable-support` · lemma — A tight Gaussian law is carried by a separable closed subspace
- `lem-binary-regression-l2-controls-local-likelihood-distances` · lemma — The L² link norm controls binary-regression likelihood distances
- `lem-fixed-design-gaussian-regression-controls-local-likelihood-distances` · lemma — Empirical mean and scale distance control Gaussian-regression likelihoods
- `lem-gaussian-linear-and-quadratic-statistic-tail` · lemma — Linear and quadratic Gaussian statistics have exponential tails
- `lem-independent-observation-posterior-denominator-lower-bound` · lemma — Local KL and log-square mass bounds a non-IID posterior denominator
- `lem-independent-posterior-splitting-from-tests-and-sieve-tail` · lemma — Tests and a sieve tail imply posterior contraction from a denominator bound
- `lem-nondegenerate-gaussian-small-ball-controls-log-radius` · lemma — A nonzero Gaussian direction forces logarithmic small-ball cost
- `lem-log-gaussian-density-supnorm-controls-local-likelihood-distances` · lemma — Supremum distance controls local log-Gaussian density distances
- `lem-fixed-design-gaussian-regression-exponential-tests` · lemma — Supremum sieves admit tests in fixed-design Gaussian regression
- `thm-gaussian-process-posterior-contraction` · theorem — Gaussian-process posterior contraction in density and regression models

### `gaussian-process-posterior-contraction-examples` — Gaussian-process posterior contraction — Examples

- `ex-degenerate-gp-phi-does-not-bound-unknown-scale-local-mass` · example — A degenerate GP concentration function does not bound unknown-scale prior mass
- `ex-l2-small-log-density-far-in-hellinger` · example — Small L² log-density perturbations can remain far in Hellinger distance
- `cex-degenerate-gaussian-scale-prior-can-break-arbitrary-concentration-rate` · counterexample — A spiky scale prior defeats an arbitrary degenerate-Gaussian concentration rate
- `ex-log-gaussian-uniform-density-posterior` · example — A constant Gaussian log-density prior gives the uniform density exactly
- `ex-binary-regression-logistic-intercept-gp` · example — A one-point logistic GP regression satisfies the L² link branch
- `ex-fixed-design-gaussian-constant-process-and-unknown-scale` · example — A constant GP on a repeated fixed design meets the nondegenerate scale branch

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gaussian-process-posterior-contraction` requires `iid-posterior-contraction`
- `gaussian-process-posterior-contraction` requires `gaussian-process-support-and-concentration`
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
