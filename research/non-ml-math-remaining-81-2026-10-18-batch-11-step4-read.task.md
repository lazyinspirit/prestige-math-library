# Step 4 batch reviewer — batch **11**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **11**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["11"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 11 | `rate-distortion-and-lossy-source-coding` | A | gaussian-orthogonal-decomposition-and-quadratic-forms, stationary-ergodic-sources-and-universal-coding |
| 11 | `rate-distortion-and-lossy-source-coding-examples` | B | rate-distortion-and-lossy-source-coding |

## Your content, in full

### `rate-distortion-and-lossy-source-coding` — Rate Distortion and Lossy Source Coding

- `def-it-general-mutual-information` · definition — Mutual information for standard-Borel random elements
- `def-it-single-letter-distortion-and-block-distortion` · definition — Single-letter and block distortion
- `lem-it-finite-vector-gaussian-water-level-allocation` · lemma — Finite Gaussian water-level allocation
- `def-it-general-rate-distortion-function` · definition — General single-letter information rate-distortion function
- `def-it-operational-rate-distortion-function` · definition — Fixed-length operational rate-distortion functions
- `lem-it-finite-rate-distortion-minimum-attained` · lemma — Attainment of finite-alphabet rate-distortion minima
- `def-it-information-rate-distortion-function` · definition — Finite-alphabet information rate-distortion function
- `def-it-stationary-finite-block-information-rdf` · definition — Stationary finite-block information rate-distortion function
- `lem-it-gaussian-reference-kernel-information-lower-bound` · lemma — Gaussian reference-kernel mutual-information lower bound
- `lem-it-rate-distortion-convexity-and-monotonicity` · lemma — Convexity, monotonicity, and continuity of finite rate-distortion
- `thm-it-binary-hamming-rate-distortion` · theorem — Binary Hamming rate-distortion function
- `alg-it-finite-alphabet-blahut-arimoto` · algorithm — Finite-alphabet Blahut–Arimoto rate-distortion algorithm
- `lem-it-stationary-block-rdf-limit-and-endpoint-continuity` · lemma — Stationary block rate-distortion limit and endpoint continuity
- `thm-it-finite-alphabet-rate-distortion-coding-theorem` · theorem — Finite-alphabet memoryless rate-distortion coding theorem
- `thm-it-gaussian-squared-error-rate-distortion` · theorem — Gaussian squared-error rate-distortion function
- `thm-it-gaussian-vector-squared-error-rate-distortion` · theorem — Finite-dimensional Gaussian vector squared-error rate-distortion function
- `lem-it-random-cut-ergodic-block-channel-approximation` · lemma — Random-cut stationary ergodic block-channel approximation
- `thm-it-blahut-arimoto-certified-gap-termination` · theorem — Blahut–Arimoto certified gap and termination
- `thm-it-stationary-ergodic-rate-distortion-bounded-distortion` · theorem — Stationary-ergodic bounded-distortion rate-distortion theorem

### `rate-distortion-and-lossy-source-coding-examples` — Rate Distortion and Lossy Source Coding — Examples

- `ex-it-binary-hamming-rate-distortion-curve` · example — Binary Hamming rate-distortion curve at p equals one quarter
- `cex-it-continuous-optimal-reconstruction-need-not-have-a-density` · counterexample — A Gaussian rate-distortion optimizer need not have a density
- `ex-it-gaussian-distortion-waterline` · example — Finite Gaussian-vector distortion waterline

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `rate-distortion-and-lossy-source-coding` requires `stationary-ergodic-sources-and-universal-coding`
- `point-to-point-source-channel-separation` requires `rate-distortion-and-lossy-source-coding`
- `lossy-source-coding-with-side-information` requires `rate-distortion-and-lossy-source-coding`
- `finite-quantization-lloyd-and-compact-companders` requires `rate-distortion-and-lossy-source-coding`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

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
