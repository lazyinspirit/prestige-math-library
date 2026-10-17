# Step 4 batch reviewer — batch **11**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **11**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["11"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 11 | `finite-bit-random-streams-and-variate-generation` | A | conditional-and-finite-group-exact-inference, probability-spaces-random-variables-and-expectation, outward-rounded-interval-and-ball-arithmetic, computed-fast-transforms-and-convolution, stationary-markov-chains-and-ergodic-limits |
| 11 | `finite-bit-random-streams-and-variate-generation-examples` | B | finite-bit-random-streams-and-variate-generation |

## Your content, in full

### `finite-bit-random-streams-and-variate-generation` — Finite bit random streams and variate generation

- `alg-linear-congruential-generator-mod-power-of-two` · algorithm — Linear congruential generator modulo a power of two
- `alg-counter-based-keyed-permutation-stream` · algorithm — Counter stream from a keyed finite permutation
- `thm-finite-state-streams-eventually-periodic` · theorem — Every deterministic finite-state stream is eventually periodic
- `thm-independent-fair-bit-streams-produce-uniforms` · theorem — Disjoint streams of independent fair bits produce independent uniform variables
- `lem-generalized-inverse-sublevel-identity` · lemma — Generalized inverse sublevel identity for a CDF
- `lem-box-muller-product-density-and-radius-moment` · lemma — Box–Muller has a product Gaussian density and Rayleigh second moment
- `thm-midpoint-bit-stream-coupling-and-error` · theorem — Midpoint bit discretization has bounded coupling and CDF error
- `thm-lcg-full-period-and-adjacent-dependence` · theorem — The power-of-two mixed LCG has full period but dependent adjacent states
- `lem-counter-based-keyed-stream-no-reuse` · lemma — A keyed permutation stream does not reuse outputs before its counter interval ends
- `alg-rational-bernoulli-rejection-from-fair-bits` · algorithm — Unbiased rational Bernoulli sampling by bit rejection
- `alg-finite-categorical-inverse-cdf` · algorithm — Finite categorical sampling by inverse CDF and binary search
- `alg-certified-bracketed-cdf-inversion` · algorithm — Certified bracketed bisection for a continuous CDF
- `cor-box-muller-from-independent-bits-gives-standard-normals` · corollary — Disjoint ideal fair-bit streams yield independent standard normals by Box–Muller
- `thm-rational-bernoulli-rejection-law-and-cost` · theorem — Rational Bernoulli rejection has exact law, geometric failure, and bounded expected bit cost
- `thm-finite-categorical-midpoint-count-bound` · theorem — Midpoint categorical frequencies have at most one-grid-cell error
- `thm-certified-bracketed-inverse-error` · theorem — Certified bisection controls CDF residual, spatial error, and distribution error
- `alg-box-muller-finite-bit-transform` · algorithm — Finite-bit Box–Muller with certified elementary-function evaluators
- `thm-box-muller-finite-bit-coupling-error` · theorem — Certified finite-bit Box–Muller has explicit BL and W1 error

### `finite-bit-random-streams-and-variate-generation-examples` — Finite bit random streams and variate generation — Examples

- `ex-lcg-low-bit-alternation` · example — A full-period LCG can alternate its low bit
- `ex-box-muller-finite-midpoint-tail` · example — Eight-bit Box–Muller has a finite radial cutoff
- `ex-box-muller-zero-endpoint` · example — A raw zero uniform breaks Box–Muller but the midpoint avoids it
- `ex-inverse-cdf-near-zero-density` · example — A vanishing density prevents a uniform spatial inverse bound

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `finite-bit-random-streams-and-variate-generation` requires `outward-rounded-interval-and-ball-arithmetic`
- `finite-bit-random-streams-and-variate-generation` requires `computed-fast-transforms-and-convolution`
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
