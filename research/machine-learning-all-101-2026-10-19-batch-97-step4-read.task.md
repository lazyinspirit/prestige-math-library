# Step 4 batch reviewer — batch **97**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **97**. Step-5 owning group: **af**.
Return `group: "af"` and `batches: ["97"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 97 | `discrete-masked-diffusion-and-reverse-generation` | A | markov-kernels-and-markov-chains, prediction-problems-risks-and-empirical-minimization, variational-inference-and-evidence-lower-bound, mcmc-ergodicity-and-mixing, f-divergences-renyi-and-hypothesis-testing |
| 97 | `discrete-masked-diffusion-and-reverse-generation-examples` | B | discrete-masked-diffusion-and-reverse-generation |

## Your content, in full

### `discrete-masked-diffusion-and-reverse-generation` — Discrete masked diffusion and finite-state reverse generation

- `def-finite-masking-diffusion-chain` · definition — Finite masking diffusion chain
- `lem-finite-state-kernel-error-controls-mixtures` · lemma — Uniform row error bounds mixture-kernel error
- `lem-finite-product-kl-additivity` · lemma — Finite product KL is the sum of coordinate KLs
- `thm-finite-chain-reverse-kernel-error-telescope` · theorem — Finite-chain reverse-kernel error telescope
- `lem-finite-masking-chain-is-well-defined` · lemma — Finite masking-chain transitions define a probability law
- `alg-finite-grid-masked-diffusion-sampler` · algorithm — Finite-grid masked reverse sampler
- `lem-finite-grid-masked-sampler-is-well-defined` · lemma — Finite-grid masked sampler defines a normalized law
- `thm-masking-chain-posterior` · theorem — Posterior of a finite masking chain
- `lem-finite-masking-path-reversal-factorization` · lemma — Finite masking path law factors backward by its posterior rows
- `thm-masked-diffusion-kl-reduces-to-cross-entropy` · theorem — Masked-diffusion KL reduces to weighted cross-entropy
- `def-finite-masked-diffusion-generative-model` · definition — Finite masked-diffusion generative model
- `lem-finite-masked-generative-joint-law-is-normalized` · lemma — Finite masked-diffusion joint model is normalized
- `lem-forward-path-is-admissible-for-finite-masked-model` · lemma — Forward path law is admissible for the finite masked model
- `cor-masked-diffusion-finite-elbo-cross-entropy` · corollary — Finite masked-diffusion ELBO is weighted cross-entropy
- `rem-discrete-diffusion-factorization-and-endpoint-limits` · remark — Factorization and finite-endpoint warnings

### `discrete-masked-diffusion-and-reverse-generation-examples` — Discrete masked diffusion and finite-state reverse generation — Examples

- `ex-finite-chain-model-error-accumulates-with-zero-mesh-error` · example — Finite model error accumulates in a fixed chain
- `cex-factorized-reverse-kernel-fails-for-correlated-tokens` · counterexample — A factorized reverse kernel fails for correlated tokens
- `ex-masked-diffusion-single-token-posterior` · example — One-token posterior on a finite mask schedule

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `discrete-masked-diffusion-and-reverse-generation` requires `prediction-problems-risks-and-empirical-minimization`
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
