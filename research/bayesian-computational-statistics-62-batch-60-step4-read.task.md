# Step 4 batch reviewer — batch **60**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **60**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["60"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 60 | `randomized-quasi-monte-carlo-and-replicates` | A | quasi-monte-carlo-discrepancy-and-rules |
| 60 | `randomized-quasi-monte-carlo-and-replicates-examples` | B | randomized-quasi-monte-carlo-and-replicates |

## Your content, in full

### `randomized-quasi-monte-carlo-and-replicates` — Randomized quasi-Monte Carlo and replicate error

- `def-b-adic-anova-components` · definition — Base-$b$ Haar contrasts and multiresolution ANOVA components
- `lem-countable-iid-baseb-digits-from-one-uniform` · lemma — A single uniform variable supplies countably many independent base-$b$ digits
- `def-lambda-t-net` · definition — $(\lambda,t,m,d)$-nets in base $b$
- `def-rqmc-point-set-and-estimator` · definition — Randomized quasi-Monte Carlo point sets and estimators
- `lem-b-adic-step-functions-dense-in-l2-cube` · lemma — Base-$b$ box step functions are dense in $L^2$ of the cube
- `lem-rqmc-smooth-anova-component-bound` · lemma — Smoothness bounds the high-frequency ANOVA components
- `def-nested-uniform-scramble` · definition — Nested uniform scrambling of a finite point set
- `lem-b-adic-anova-parseval` · lemma — Orthogonal base-$b$ multiresolution and variance decomposition
- `thm-rqmc-single-rule-unbiasedness` · theorem — Marginal uniformity makes an RQMC rule unbiased
- `def-digital-shift-randomization` · definition — Digital shift randomization in base $b$
- `cor-rqmc-replicate-variance-estimator` · corollary — Independent RQMC replicates estimate randomization variance
- `lem-nested-scramble-marginals-and-net-preservation` · lemma — Nested uniform scrambles preserve net counts and uniform marginals
- `lem-digital-shift-marginals-and-net-preservation` · lemma — Digital shifts preserve net counts and uniform marginals
- `cor-rqmc-studentized-replicate-clt` · corollary — Studentized RQMC replicate means are asymptotically normal as $R\to\infty$
- `lem-rqmc-scrambled-net-variance-identity` · lemma — ANOVA variance identity for nestedly scrambled point sets
- `lem-rqmc-scrambled-net-gain-formula` · lemma — Pair-count formula for scrambled-net gain coefficients
- `lem-rqmc-general-net-gain-bound` · lemma — Fixed-quality net gain coefficients are uniformly bounded
- `lem-rqmc-zero-net-sharp-gain-bound` · lemma — Sharp gain bound for scrambled $(0,m,d)$-nets
- `thm-rqmc-nested-scramble-smooth-net-variance-rate` · theorem — Smooth-integrand variance rate for nestedly scrambled $(\lambda,t,m,d)$-nets
- `thm-rqmc-nested-scramble-zero-net-variance-bound` · theorem — Variance bound for a nested scramble of a $(0,m,d)$-net

### `randomized-quasi-monte-carlo-and-replicates-examples` — Randomized quasi-Monte Carlo and replicate error — Examples

- `ex-one-rqmc-scramble-vs-independent-replicates` · example — One scrambled rule versus independent full-set replicates
- `ex-skewed-finite-replicate-student-coverage` · example — A skewed finite-replicate law defeats a nominal Student interval
- `ex-digital-shift-vs-nested-scramble` · example — A digital shift and a nested scramble give different error laws
- `ex-rqmc-smooth-vs-singular-integrands` · example — A smooth integrand satisfies the bound while an integrable singularity does not

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `randomized-quasi-monte-carlo-and-replicates` requires `quasi-monte-carlo-discrepancy-and-rules`
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
