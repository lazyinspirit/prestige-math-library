# Step 4 batch reviewer — batch **20**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **20**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["20"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 20 | `functional-bayesian-limits-and-credible-set-calibration` | A | weak-nonparametric-bernstein-von-mises, iid-posterior-contraction, posterior-prediction-and-bayesian-decision |
| 20 | `functional-bayesian-limits-and-credible-set-calibration-examples` | B | functional-bayesian-limits-and-credible-set-calibration |

## Your content, in full

### `functional-bayesian-limits-and-credible-set-calibration` — Functional BvM limits and credible-set calibration

- `def-multiscale-coefficient-space-m0w` · definition — Little-o multiscale coefficient space M0(w)
- `def-sobolev-linear-functional-for-white-noise` · definition — Smooth linear functionals on the white-noise topology
- `def-type-s-and-h-multiscale-density-priors` · definition — Type-S log-density and type-H histogram prior families
- `lem-m0w-separable-and-projection-tails` · lemma — The multiscale coefficient space is separable and has vanishing projection tails
- `lem-multiscale-primitive-map-to-continuous-cdfs` · lemma — The multiscale primitive map is continuous into C[0,1]
- `lem-random-posterior-quantiles-stabilize-under-bvm` · lemma — Posterior quantiles stabilize under scalar weak convergence
- `lem-smooth-functional-extends-to-negative-sobolev-space` · lemma — Smooth functionals extend continuously to the white-noise topology
- `lem-type-s-h-prior-draws-are-l2-densities` · lemma — Finite type-S and type-H prior draws are L2 probability densities
- `lem-m0w-finite-projection-and-tail-bvm-criterion` · lemma — Finite-projection convergence and posterior tail control imply weak BvM
- `thm-linear-functional-bvm-and-credible-coverage` · theorem — Linear-functional BvM limit and credible-interval calibration
- `thm-nonlinear-functional-bvm-and-credible-coverage` · theorem — Nonlinear-functional BvM limit under fast L2 contraction
- `thm-projected-empirical-process-clt-in-m0w` · theorem — Projected empirical bridge CLT in the little-o multiscale space
- `lem-density-gaussian-bridge-is-borel-on-m0w` · lemma — A bounded-density Gaussian bridge has a Borel multiscale law
- `lem-density-bridge-norm-cdfs-are-continuous-and-strict` · lemma — Continuous and strictly increasing norm distributions for density bridges
- `lem-finite-dirichlet-gamma-representation-and-bernstein-bound` · lemma — Finite Dirichlet gamma representation and weighted Bernstein bound
- `thm-type-h-histogram-posterior-weak-bvm-in-m0w` · theorem — Type-H histogram posterior weak Bernstein–von Mises theorem
- `lem-compact-wavelet-projection-kernel-and-commutator` · lemma — Compact wavelet projections approximate smooth functions and commute asymptotically with multiplication
- `lem-type-s-posterior-preliminary-contraction` · lemma — Type-S posterior contracts in quotient log-density coordinates without a tail restriction on a log-Lipschitz prior
- `thm-type-s-density-weak-bvm-on-m0w` · theorem — Type-S density posteriors satisfy the weak multiscale Bernstein–von Mises theorem
- `thm-cdf-and-multiscale-credible-band-calibration-from-bvm` · theorem — CDF and multiscale credible-band calibration from weak BvM limits
- `thm-multiscale-credible-band-holder-diameter` · theorem — Diameter of undersmoothed multiscale credible bands
- `cor-type-s-h-density-credible-band-calibration` · corollary — Type-S and Type-H density credible bands have asymptotically exact coverage

### `functional-bayesian-limits-and-credible-set-calibration-examples` — Functional BvM limits and credible-set calibration — Examples

- `cex-credible-posterior-set-with-zero-frequency-coverage` · counterexample — A boundary truth can give an equal-tailed credible interval zero coverage
- `ex-type-s-and-h-density-prior-contracts` · example — Uniform truth under type-S and type-H density priors
- `ex-nonlinear-functional-remainder-at-parametric-scale` · example — A quadratic remainder at the parametric L2 scale
- `ex-smooth-linear-functional-in-white-noise` · example — The integral functional under a product-prior white-noise BvM

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `functional-bayesian-limits-and-credible-set-calibration` requires `weak-nonparametric-bernstein-von-mises`
- `functional-bayesian-limits-and-credible-set-calibration` requires `iid-posterior-contraction`
- `functional-bayesian-limits-and-credible-set-calibration` requires `posterior-prediction-and-bayesian-decision`
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
