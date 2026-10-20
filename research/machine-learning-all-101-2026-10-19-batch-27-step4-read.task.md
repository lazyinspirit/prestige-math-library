# Step 4 batch reviewer — batch **27**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **27**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["27"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 27 | `ml02-causal-anm` | A | independence-borel-cantelli-and-zero-one-laws, measurable-functions-and-simple-approximation, probability-spaces-random-variables-and-expectation, structural-causal-models-dags-and-adjustment, outward-rounded-interval-and-ball-arithmetic |
| 27 | `ml02-causal-anm-examples` | B | ml02-causal-anm |

## Your content, in full

### `ml02-causal-anm` — Additive-noise causal discovery and identifiability

- `def-additive-noise-model` · definition — Continuous additive-noise models on finite DAGs
- `lem-probability-measure-has-no-nonzero-period` · lemma — A probability measure on the line has no nonzero translation period
- `lem-smooth-residual-independence-has-pointwise-density-factorization` · lemma — A smooth independent residual gives a pointwise density factorization
- `alg-resit` · algorithm — RESIT: regression with subsequent independence testing
- `lem-anm-joint-density` · lemma — Positive joint density of a finite additive-noise model
- `lem-anm-noise-independent-of-nondescendants` · lemma — An ANM noise is independent of every set of nondescendants
- `def-restricted-additive-noise-model` · definition — Condition 19 and restricted additive-noise models
- `lem-anm-density-factorization-implies-dsep-conditional-independence` · lemma — An ANM density factorization implies conditional independence under d-separation
- `lem-anm-parent-dependence-persists-under-conditioning` · lemma — Parent dependence persists under nondescendant conditioning
- `lem-youngest-child-descendants-conditionally-independent` · lemma — Descendants of a youngest child are conditionally independent of its parent
- `lem-positive-minimal-dags-have-a-conditioned-reversal` · lemma — Distinct positive minimal ANM DAGs contain a conditionally reversible edge
- `thm-bivariate-additive-noise-identifiability` · theorem — Bivariate additive-noise direction identifiability under Condition 19
- `thm-restricted-anm-population-identification` · theorem — Population identifiability and RESIT correctness for restricted ANMs

### `ml02-causal-anm-examples` — Additive-noise causal discovery and identifiability — Examples

- `ex-latent-confounding-mimics-anm-direction` · example — Latent confounding can mimic an observed ANM direction
- `ex-linear-gaussian-reversible-additive-noise-model` · example — A reversible linear-Gaussian additive-noise model
- `ex-identifiable-nonlinear-additive-noise-model` · example — An identifiable nonlinear ANM with a cubic cause-to-effect function

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
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
