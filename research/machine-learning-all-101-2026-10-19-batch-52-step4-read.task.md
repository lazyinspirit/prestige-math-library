# Step 4 batch reviewer — batch **52**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **52**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["52"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 52 | `mean-field-training-and-feature-learning` | A | banach-valued-integration-and-the-radon-nikodym-property, feedforward-networks-and-universal-approximation, hilbert-space-geometry-and-riesz-representation, homology-axioms-degree-and-classical-applications, prediction-problems-risks-and-empirical-minimization, probability-spaces-random-variables-and-expectation, wasserstein-gradient-flow-existence-and-stability, measures-and-their-basic-properties, signed-and-complex-measures-hahn-and-jordan, the-lebesgue-integral-and-the-convergence-theorems, ascoli-arzela |
| 52 | `mean-field-training-and-feature-learning-examples` | B | mean-field-training-and-feature-learning |

## Your content, in full

### `mean-field-training-and-feature-learning` — Mean-field training and feature learning

- `lem-bounded-domain-degree-properties` · lemma — Properties of bounded-domain degree
- `lem-partial-negative-weight-crossing-time` · lemma — Correct finite-time bound for partial-homogeneity zero crossing
- `lem-pushforward-support-is-closure-of-image` · lemma — Support of a continuous pushforward is the image closure
- `def-bounded-domain-degree-from-relative-homology` · definition — Bounded-domain degree from relative homology
- `def-partial-one-homogeneous-measure-projection` · definition — Partially one-homogeneous signed measure projection
- `def-two-homogeneous-measure-projection` · definition — Two-homogeneous measure projection
- `lem-feature-energy-continuous-under-w2-on-a-common-cutoff` · lemma — Feature energy is W2-continuous on a common cutoff
- `lem-mean-field-first-variation-and-measure-optimality` · lemma — First variation and optimality over nonnegative measures
- `lem-partial-energy-continuous-under-w2` · lemma — Partial one-homogeneous energy is continuous under W2 convergence
- `def-partial-homogeneous-relaxed-objective` · definition — Relaxed objective for a partially one-homogeneous projection
- `def-signed-square-relu-feature-map` · definition — Signed-square ReLU feature parameterization
- `lem-mean-field-projection-identities` · lemma — Feature and energy identities for homogeneous projections
- `lem-w2-convergence-implies-homogeneous-projection-convergence` · lemma — W2 convergence implies weak convergence of homogeneous projections
- `lem-partial-relaxed-objective-signwise-optimality` · lemma — Signwise first-variation conditions minimize the relaxed objective
- `def-one-hidden-layer-particle-measure-model` · definition — One-hidden-layer particle-measure model
- `lem-flow-preserves-box-separation` · lemma — Partial-homogeneity flows preserve box separation
- `lem-flow-preserves-spherical-separation` · lemma — A homogeneous flow preserves spherical support separation
- `lem-partial-homogeneous-escape-from-nonoptimal-projection` · lemma — Nonoptimal partial projections have an escaping sign branch
- `lem-partial-homogeneous-projection-limit-is-stationary` · lemma — Stationarity of a partially homogeneous signed projection limit
- `lem-two-homogeneous-projection-limit-is-stationary` · lemma — A weak two-homogeneous projection limit is stationary on its support
- `lem-two-homogeneous-escape-from-nonoptimal-projection` · lemma — Negative regular sublevels force two-homogeneous projection escape
- `thm-mean-field-particle-time-limits-interchange` · theorem — Particle number and training time limits interchange qualitatively
- `thm-partial-homogeneous-projected-limit-is-global-minimizer` · theorem — A partially homogeneous signed projection limit is a minimizer
- `cor-partial-homogeneous-wasserstein-limit-is-global-minimizer` · corollary — A W2 limit in the partial one-homogeneous case is globally minimizing
- `thm-two-homogeneous-projected-limit-is-global-minimizer` · theorem — A separating two-homogeneous flow has globally minimizing projection limits
- `cor-two-homogeneous-wasserstein-limit-is-global-minimizer` · corollary — A W2 limit in the two-homogeneous case is globally minimizing
- `lem-partial-feature-flow-moment-and-energy-identities` · lemma — Partial feature flows have exact energy and weight-moment identities
- `lem-partial-homogeneous-negative-level-trapping` · lemma — Negative partial-homogeneity levels trap all sufficiently close forcings
- `lem-partial-homogeneous-penalty-is-constant-under-global-hypotheses` · lemma — The full global partial-model hypotheses force a constant penalty coefficient
- `lem-signed-narrow-convergence-controls-bochner-moments` · lemma — Signed narrow convergence controls variation tails and Bochner moments
- `lem-partial-homogeneous-projection-limit-has-convergent-penalty` · lemma — A partial signed projection limit has convergent penalty and energy

### `mean-field-training-and-feature-learning-examples` — Mean-field training and feature learning — Examples

- `ex-single-particle-initialization-does-not-separate` · example — A single particle does not separate two spheres
- `ex-moving-features-versus-fixed-features` · example — Moving features can represent a target missed by a fixed feature
- `cex-signed-square-relu-differential-is-not-locally-lipschitz` · counterexample — The signed-square ReLU differential need not be locally Lipschitz

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `mean-field-training-and-feature-learning` requires `feedforward-networks-and-universal-approximation`
- `mean-field-training-and-feature-learning` requires `prediction-problems-risks-and-empirical-minimization`
- `mean-field-training-and-feature-learning` requires `wasserstein-gradient-flow-existence-and-stability`
---

# Step 4 Alpha batch reviewer — read-only digest, `machine-learning-all-101-2026-10-19`

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
