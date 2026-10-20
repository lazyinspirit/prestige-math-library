# Step 4 batch reviewer — batch **30**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **30**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["30"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 30 | `ml02-federated-optimization` | A | ml02-differential-privacy, ml02-linear-sparse-models, probability-spaces-random-variables-and-expectation, variance-reduced-finite-sum-and-adaptive-gradient-optimization |
| 30 | `ml02-federated-optimization-examples` | B | ml02-federated-optimization |

## Your content, in full

### `ml02-federated-optimization` — Federated averaging, local SGD, and SCAFFOLD

- `def-federated-objective-and-client-sampling` · definition — Federated objectives and client sampling
- `alg-local-sgd` · algorithm — Local SGD with periodic synchronization
- `lem-relaxed-euclidean-squared-norm` · lemma — Relaxed inequalities for squared Euclidean norms
- `lem-finite-martingale-difference-sum-variance` · lemma — Second moment bound for a finite martingale-difference sum
- `lem-local-sgd-weighted-recursion` · lemma — Quadratic-weighted telescope for a strongly convex recursion
- `lem-federated-recursion-averaging` · lemma — Geometric and sublinear averaging for descent recursions
- `lem-smooth-convex-gradient-difference` · lemma — Smooth convex gradient differences around a minimizer
- `lem-convex-gradient-step-nonexpansive` · lemma — Gradient steps of smooth convex functions are nonexpansive
- `alg-fedavg` · algorithm — Federated averaging (FedAvg)
- `alg-scaffold` · algorithm — SCAFFOLD with client and server control variates
- `lem-uniform-client-sampling-moments` · lemma — Moments of a uniformly sampled fixed-size client set
- `lem-local-sgd-virtual-progress` · lemma — One-step progress of the virtual local-SGD iterate
- `lem-local-sgd-sampling-variance` · lemma — Variance reduction across independent local-SGD workers
- `lem-local-sgd-client-drift` · lemma — Deviation of local-SGD workers from their virtual mean
- `lem-perturbed-strong-convexity` · lemma — Strong-convexity inequality for a perturbed gradient point
- `thm-local-sgd-convex-round-complexity` · theorem — Strongly convex local-SGD round complexity
- `def-bounded-client-gradient-dissimilarity` · definition — Standard and gap forms of bounded client gradient dissimilarity
- `lem-standard-client-dissimilarity-implies-gap-form` · lemma — Standard client dissimilarity implies the gap form with unchanged parameters
- `lem-fedavg-one-round-progress` · lemma — One-round progress of strongly convex FedAvg
- `lem-fedavg-local-drift` · lemma — Client drift under FedAvg gradient dissimilarity
- `def-scaffold-analysis-trajectory-and-errors` · definition — SCAFFOLD trajectories, client drift, control lag and tracking error
- `thm-fedavg-under-gradient-dissimilarity` · theorem — Strongly convex FedAvg under bounded gradient dissimilarity
- `lem-scaffold-control-tracking-identity` · lemma — Option II controls track gradients at stored client anchors
- `lem-scaffold-convex-server-variance` · lemma — Convex SCAFFOLD server-update second moment
- `lem-scaffold-convex-control-lag` · lemma — Convex SCAFFOLD control-lag recursion
- `lem-scaffold-convex-client-drift` · lemma — Convex SCAFFOLD client-drift bound
- `lem-scaffold-convex-round-progress` · lemma — Strongly convex SCAFFOLD progress in one communication round
- `lem-scaffold-nonconvex-server-variance` · lemma — Nonconvex SCAFFOLD server-update moments
- `lem-scaffold-nonconvex-client-drift` · lemma — Nonconvex SCAFFOLD query-point drift bound
- `lem-scaffold-nonconvex-control-lag` · lemma — Nonconvex SCAFFOLD control-anchor tracking recursion
- `lem-scaffold-nonconvex-round-progress` · lemma — Nonconvex SCAFFOLD progress in one communication round
- `thm-scaffold-convex-and-nonconvex-rates` · theorem — SCAFFOLD rates for strongly convex, convex and nonconvex objectives
- `fs-scaffold-general-convex-uniform-output-round-headline` · false-statement — SCAFFOLD general-convex round headline with a uniform server-iterate output

### `ml02-federated-optimization-examples` — Federated averaging, local SGD, and SCAFFOLD — Examples

- `ex-local-versus-periodic-synchronization` · example — Local updates and periodic synchronization give different averages
- `ex-client-data-locality-does-not-imply-dp` · example — Keeping records on clients does not imply differential privacy
- `ex-two-client-shifted-optima` · example — Two clients with shifted least-squares optima
- `ex-scaffold-control-correction` · example — SCAFFOLD controls cancel shifted local gradients at the server model

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `ml02-federated-optimization` requires `ml02-differential-privacy`
- `ml02-federated-optimization` requires `ml02-linear-sparse-models`
- `algorithmic-stability-of-stochastic-training` requires `ml02-federated-optimization`
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
