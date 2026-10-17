# Step 4 batch reviewer — batch **27**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **27**. Step-5 owning group: **w**.
Return `group: "w"` and `batches: ["27"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 27 | `proximal-gradient-and-accelerated-composite-optimization` | A | constrained-variational-problems-and-variational-inequalities, convex-and-semicontinuous-functions-on-rn, inequality-kkt-duality-and-optimality-certificates, sparse-high-dimensional-estimation-and-covariance |
| 27 | `proximal-gradient-and-accelerated-composite-optimization-examples` | B | proximal-gradient-and-accelerated-composite-optimization |

## Your content, in full

### `proximal-gradient-and-accelerated-composite-optimization` — Proximal gradient and accelerated composite optimization

- `def-indicator-function-of-closed-convex-set` · definition — Extended-real indicator of a set
- `def-proper-closed-convex-function-on-rn` · definition — Proper closed convex extended-real functions on $\mathbb R^n$
- `lem-l-smoothness-descent-inequality` · lemma — Descent inequality for a Lipschitz gradient
- `def-extended-real-epsilon-subdifferential` · definition — Subdifferentials of proper extended-real convex functions
- `def-proximal-mapping` · definition — Proximal mapping
- `def-strong-convex-composite-objective` · definition — Strong convexity for an extended-real objective
- `lem-proper-closed-convex-function-affine-minorant` · lemma — A proper closed convex function has an affine minorant
- `lem-smooth-composite-sum-preserves-proper-closed-convexity` · lemma — A finite continuous convex summand preserves proper closed convexity
- `lem-prox-indicator-is-euclidean-projection` · lemma — The proximal map of an indicator is Euclidean projection
- `thm-proximal-operator-existence-resolvent-firm-nonexpansive` · theorem — Existence, resolvent characterization, and firm nonexpansiveness of the proximal map
- `def-proximal-gradient-mapping` · definition — Proximal-gradient mapping and projected-gradient mapping
- `lem-prox-l1-is-soft-thresholding` · lemma — The proximal map of the l1 norm is soft thresholding
- `lem-proximal-three-point-inequality` · lemma — Three-point inequality for the proximal-gradient model
- `alg-proximal-gradient-and-fista` · algorithm — Proximal-gradient, FISTA, and fixed-period restarted FISTA
- `lem-proximal-gradient-one-step-estimate` · lemma — One-step proximal-gradient estimate
- `thm-projected-gradient-fixed-point-kkt-certificate` · theorem — Projected-gradient fixed points are normal-cone certificates
- `alg-certified-inexact-proximal-gradient-and-fista` · algorithm — Certified inexact proximal-gradient and FISTA updates
- `lem-fista-energy-estimate-sequence` · lemma — FISTA energy estimate-sequence recurrence
- `thm-proximal-gradient-o1k-objective-bound` · theorem — The proximal-gradient method has an O(1/k) objective bound
- `lem-inexact-proximal-gradient-one-step-estimate` · lemma — One-step estimate for a certified inexact proximal call
- `thm-fista-o1k2-objective-bound` · theorem — FISTA has an O(1/k^2) objective bound
- `lem-inexact-fista-energy-estimate` · lemma — FISTA energy recurrence with certified proximal errors
- `thm-inexact-proximal-gradient-summable-error-bound` · theorem — Summable certified prox errors preserve an O(1/k) best-iterate bound
- `thm-strong-convex-proximal-gradient-and-restarted-fista-rates` · theorem — Strong convexity gives linear proximal-gradient and restarted-FISTA rates
- `thm-inexact-fista-weighted-error-bound` · theorem — Weighted prox-error summability preserves an O(1/k^2) FISTA bound

### `proximal-gradient-and-accelerated-composite-optimization-examples` — Proximal gradient and accelerated composite optimization — Examples

- `ex-two-pixel-total-variation-proximal-map` · example — The two-pixel total-variation proximal map
- `ex-fista-objective-increases-on-a-quadratic` · example — FISTA can increase the objective between consecutive iterates
- `ex-nonorthogonal-lasso-proximal-gradient-step` · example — One proximal-gradient step for a nonorthogonal Lasso design
- `ex-projected-gradient-on-nonnegative-orthant` · example — Projected gradient on the nonnegative orthant

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `proximal-gradient-and-accelerated-composite-optimization` requires `inequality-kkt-duality-and-optimality-certificates`
- `nonsmooth-contact-time-stepping-and-projections` requires `proximal-gradient-and-accelerated-composite-optimization`
- `subgradient-bundle-and-derivative-free-optimization` requires `proximal-gradient-and-accelerated-composite-optimization`
- `coordinate-and-block-descent-methods` requires `proximal-gradient-and-accelerated-composite-optimization`
- `operator-splitting-admm-and-primal-dual-methods` requires `proximal-gradient-and-accelerated-composite-optimization`
- `stochastic-approximation-and-stochastic-gradient-methods` requires `proximal-gradient-and-accelerated-composite-optimization`
- `variance-reduced-finite-sum-and-adaptive-gradient-optimization` requires `proximal-gradient-and-accelerated-composite-optimization`
- `finite-element-pde-constrained-optimization` requires `proximal-gradient-and-accelerated-composite-optimization`
- `numerical-identifiability-and-optimal-experiment-design` requires `proximal-gradient-and-accelerated-composite-optimization`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

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
