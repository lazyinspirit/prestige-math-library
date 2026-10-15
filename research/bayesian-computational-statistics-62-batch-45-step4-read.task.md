# Step 4 batch reviewer — batch **45**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **45**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["45"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 45 | `smc-clts-error-and-degeneracy` | A | feynman-kac-particle-filters |
| 45 | `smc-clts-error-and-degeneracy-examples` | B | smc-clts-error-and-degeneracy |

## Your content, in full

### `smc-clts-error-and-degeneracy` — Finite-horizon SMC error, CLTs, and degeneracy

- `def-dobrushin-coefficient-for-probability-kernels` · definition — Dobrushin contraction coefficient for a probability kernel
- `lem-dobrushin-contraction-from-density-ratios` · lemma — Uniform density ratios bound the Dobrushin coefficient
- `def-smc-clt-function-classes-and-variance-recursions` · definition — Finite-horizon SMC CLT classes and variance recursions
- `lem-smc-backward-operator-oscillation-bound` · lemma — Uniform SMC backward-operator contraction controls oscillation
- `lem-smc-finite-horizon-empirical-law` · lemma — Finite-horizon SMC empirical laws converge for integrable tests
- `lem-smc-multinomial-variance-unrolls` · lemma — Multinomial SMC variance unrolls into local contributions
- `lem-smc-centered-filtering-feynman-kac-contraction` · lemma — Centered filtering Feynman–Kac operators contract terminal tests
- `lem-smc-multinomial-resampling-clt` · lemma — Conditional multinomial resampling central limit theorem
- `lem-smc-mutation-and-weighted-correction-clt` · lemma — Conditional mutation and weighted correction CLT
- `lem-smc-residual-resampling-clt-away-from-integer-weights` · lemma — Conditional residual resampling central limit theorem away from integer weights
- `thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights` · theorem — Time-uniform SMC asymptotic variance under uniform weight and operator bounds
- `thm-smc-multinomial-fixed-horizon-clt` · theorem — Fixed-horizon SMC central limit theorem with multinomial resampling
- `thm-smc-residual-fixed-horizon-clt-away-from-integer-weights` · theorem — Fixed-horizon SMC central limit theorem with residual resampling away from integer weights

### `smc-clts-error-and-degeneracy-examples` — Finite-horizon SMC error, CLTs, and degeneracy — Examples

- `ex-smc-multinomial-ancestry-collapse` · example — Ancestry collapse under repeated multinomial resampling
- `cex-smc-clt-class-does-not-ensure-target-moment` · counterexample — The source function class need not give finite SMC CLT variances
- `cex-smc-residual-clt-fails-at-integer-weight-boundary` · counterexample — Residual resampling is discontinuous at positive integer weights
- `cex-smc-zero-residual-fraction-can-have-random-offspring` · counterexample — Zero limiting remainder does not make finite residual offspring deterministic
- `ex-smc-dominant-weight-and-ess` · example — A dominant particle weight and the effective sample size
- `cex-smc-time-bound-fails-with-varying-proposals` · counterexample — Proposal mixing ratios alone do not bound SMC asymptotic variance over time
- `ex-smc-bounded-weights-with-mixing` · example — A bounded-weight mixing filter has bounded asymptotic variance
- `ex-smc-fixed-horizon-clt-does-not-give-time-uniform-accuracy` · example — Fixed-horizon asymptotic variance can grow without mixing

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `smc-clts-error-and-degeneracy` requires `feynman-kac-particle-filters`
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
