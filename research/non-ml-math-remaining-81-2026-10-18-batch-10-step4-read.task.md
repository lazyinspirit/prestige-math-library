# Step 4 batch reviewer — batch **10**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **10**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["10"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 10 | `stationary-ergodic-sources-and-universal-coding` | A | iid-lossless-source-coding-and-the-aep, stationary-markov-chains-and-ergodic-limits, measure-theoretic-information-and-conditioning, prefix-codes-and-finite-lossless-coding |
| 10 | `stationary-ergodic-sources-and-universal-coding-examples` | B | stationary-ergodic-sources-and-universal-coding |

## Your content, in full

### `stationary-ergodic-sources-and-universal-coding` — Stationary Ergodic Sources and Universal Coding

- `def-finite-alphabet-stationary-source` · definition — Finite-alphabet stationary source
- `def-finite-block-information-and-entropy` · definition — Finite-block information and entropy in bits
- `def-finite-support-binary-prefix-code` · definition — Binary prefix codes on finite supports
- `lem-triangular-information-averages` · lemma — Triangular averages of finite-past information converge to the infinite-past average
- `lem-finite-kl-nonnegative-choice-free` · lemma — Finite KL nonnegativity for subprobability references
- `alg-lz78-incremental-prefix-code` · algorithm — Finite-block LZ78 incremental prefix code
- `def-ams-source-and-stationary-mean` · definition — Asymptotically mean stationary sources
- `def-finite-block-source-code` · definition — Fixed-length lossless block codes and error probability
- `def-finite-state-compressibility` · definition — Finite-state compressibility of an individual sequence
- `def-general-process-information-rate` · definition — Information rate of a general finite-alphabet process
- `def-lz77-previous-match-phrase-length` · definition — LZ77 previous-match length and recurrence time
- `def-past-information-density-finite-alphabet` · definition — Finite-past information densities
- `lem-prefix-code-entropy-bounds` · lemma — Entropy lower and Shannon upper bounds for finite prefix codes
- `lem-finite-block-entropy-chain-rule` · lemma — Finite entropy chain rule and monotonicity under conditioning
- `lem-aep-implies-fixed-rate-lossless-coding` · lemma — AEP criterion for fixed-rate lossless coding
- `lem-lz78-distinct-parse-ziv-inequality` · lemma — Distinct-phrase count and Ziv inequality
- `thm-ams-stationary-mean-asymptotic-dominance` · theorem — The stationary mean asymptotically dominates an AMS law
- `thm-lz78-prefix-code-lossless` · theorem — Losslessness and prefix property of the explicit LZ78 code
- `thm-stationary-entropy-rate-limit` · theorem — Entropy-rate limit for a stationary finite-alphabet source
- `lem-ams-stationary-mean-dominates-tail-events` · lemma — A null future-tail event under the stationary mean is null under the AMS law
- `thm-lz78-individual-sequence-finite-state-optimality` · theorem — LZ78 finite-state optimality for individual sequences
- `lem-finite-alphabet-past-information-convergence` · lemma — Convergence and integrable envelope for finite-past information
- `thm-stationary-expected-prefix-code-rate` · theorem — Expected lossless prefix-code rate for stationary sources
- `thm-componentwise-shannon-mcmillan-breiman` · theorem — Componentwise Shannon–McMillan–Breiman theorem
- `thm-lz78-stationary-expected-rate` · theorem — LZ78 expected-rate universality for stationary sources
- `lem-infinite-past-conditional-block-information-rate` · lemma — Conditional block information rate given the infinite past
- `cor-ergodic-shannon-mcmillan-breiman` · corollary — Ergodic Shannon–McMillan–Breiman theorem
- `cor-smb-limit-is-conditional-entropy-under-ac` · corollary — Invariant conditional-entropy description of the SMB limit
- `cor-fixed-rate-lossless-coding-stationary-ergodic` · corollary — Fixed-rate source coding theorem for stationary ergodic sources
- `thm-ams-ergodic-information-aep` · theorem — Shannon–McMillan limit for finite-alphabet AMS ergodic sources
- `thm-lz77-phrase-length-entropy-rate` · theorem — Stationary-ergodic LZ77 phrase-length theorem
- `cor-fixed-rate-lossless-coding-ams-ergodic` · corollary — Fixed-rate lossless coding for AMS ergodic sources

### `stationary-ergodic-sources-and-universal-coding-examples` — Stationary Ergodic Sources and Universal Coding — Examples

- `ex-nonstationary-block-entropy-rate-oscillation` · example — A nonstationary independent source with no entropy-rate limit
- `ex-lz78-parse-with-explicit-terminator` · example — LZ78 parsing of a finite binary word
- `ex-iid-and-markov-source-entropy-rates` · example — IID and two-state Markov entropy rates

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `stationary-ergodic-sources-and-universal-coding` requires `iid-lossless-source-coding-and-the-aep`
- `stationary-ergodic-sources-and-universal-coding` requires `measure-theoretic-information-and-conditioning`
- `stationary-ergodic-sources-and-universal-coding` requires `prefix-codes-and-finite-lossless-coding`
- `rate-distortion-and-lossy-source-coding` requires `stationary-ergodic-sources-and-universal-coding`
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
