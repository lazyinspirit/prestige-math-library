# Step 4 batch reviewer — batch **38**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **38**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["38"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 38 | `langevin-monte-carlo-mala-and-ula` | A | numerical-optimization-for-statistical-computation, metropolis-hastings-algorithm-and-invariance, forward-ito-sde-well-posedness, conjugate-families-and-posterior-prediction, structural-causal-models-dags-and-adjustment, linear-prediction-for-dependent-data |
| 38 | `langevin-monte-carlo-mala-and-ula-examples` | B | langevin-monte-carlo-mala-and-ula |

## Your content, in full

### `langevin-monte-carlo-mala-and-ula` — Langevin algorithms: ULA bias and MALA exactness

- `def-v-weighted-total-variation-distance` · definition — Weighted total variation for probability measures
- `lem-ula-potential-coercivity-from-radial-drift` · lemma — Radial gradient drift forces potential coercivity
- `lem-langevin-potential-exponential-generator-drift` · lemma — Exponential Lyapunov drift for the formal Langevin generator
- `alg-unadjusted-langevin-algorithm` · algorithm — Unadjusted Langevin algorithm (ULA)
- `lem-weighted-pinsker-inequality-for-probability-laws` · lemma — A weighted total-variation bound from relative entropy
- `lem-weighted-drift-minorization-gives-contraction-and-invariant-law` · lemma — Global drift and one-step minorization give weighted contraction and a unique invariant law
- `lem-langevin-gaussian-proposal-kernel` · lemma — The ULA Gaussian proposal is a probability kernel with a positive density
- `thm-ula-gaussian-target-invariant-law-and-stationary-variance` · theorem — The Gaussian ULA invariant law has variance $2/(2-\gamma)$
- `lem-ula-fixed-step-gaussian-kernel-exponential-drift` · lemma — ULA's Gaussian kernel satisfies an exponential drift bound
- `alg-metropolis-adjusted-langevin-algorithm` · algorithm — Metropolis-adjusted Langevin algorithm (MALA)
- `lem-finite-horizon-girsanov-and-relative-entropy-for-lipschitz-drifts` · lemma — Finite-horizon Brownian change of drift and relative entropy
- `thm-metropolis-adjusted-langevin-target-invariant` · theorem — MALA preserves its target probability exactly
- `lem-ula-pathwise-kl-error-bound` · lemma — Pathwise relative-entropy error of the Langevin Euler interpolation
- `lem-langevin-diffusion-density-reversibility-and-compact-minorization` · lemma — Langevin diffusion has a reversible density and compact minorization
- `lem-ula-uniform-exponential-moments-and-invariant-laws` · lemma — ULA invariant laws have uniform exponential moments on the needed step ranges
- `thm-langevin-diffusion-weighted-geometric-ergodicity-under-radial-drift` · theorem — Radial drift gives weighted geometric contraction of Langevin diffusion
- `thm-ula-quantitative-invariant-law-weighted-tv-bias` · theorem — ULA's invariant-law bias under smoothness and radial drift

### `langevin-monte-carlo-mala-and-ula-examples` — Langevin algorithms: ULA bias and MALA exactness — Examples

- `ex-ula-critical-step-has-no-invariant-law` · example — At the critical quadratic ULA step size, no invariant law exists
- `ex-ula-gaussian-target-stationary-bias` · example — ULA has a biased invariant variance for a standard Gaussian target
- `ex-mala-gaussian-target-acceptance-correction` · example — MALA corrects the Gaussian ULA proposal with a Hastings ratio

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `langevin-monte-carlo-mala-and-ula` requires `numerical-optimization-for-statistical-computation`
- `langevin-monte-carlo-mala-and-ula` requires `metropolis-hastings-algorithm-and-invariance`
- `langevin-monte-carlo-mala-and-ula` requires `forward-ito-sde-well-posedness`
- `langevin-monte-carlo-mala-and-ula` requires `conjugate-families-and-posterior-prediction`
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
