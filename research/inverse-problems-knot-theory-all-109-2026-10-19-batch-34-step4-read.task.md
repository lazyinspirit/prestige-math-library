# Step 4 batch reviewer — batch **34**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **34**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["34"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 34 | `compressed-sensing-with-noise-and-model-selection` | A | sparse-recovery-and-nullspace-certificates, operator-splitting-admm-and-primal-dual-methods |
| 34 | `compressed-sensing-with-noise-and-model-selection-examples` | B | compressed-sensing-with-noise-and-model-selection |

## Your content, in full

### `compressed-sensing-with-noise-and-model-selection` — Stable compressed sensing with noise

- `lem-ip-bpdn-dual-certificates` · lemma — Primal and infeasibility certificates for basis pursuit denoising
- `lem-ip-bpdn-objectives-proper-closed-convex` · lemma — The basis-pursuit denoising objective and residual indicator are proper closed convex
- `def-ip-best-s-term-l1-error` · definition — Best s-term ℓ1 approximation error
- `def-ip-robust-nullspace-property` · definition — The ℓ2 robust nullspace property
- `lem-ip-bpdn-minimizer-exists` · lemma — A feasible finite-dimensional BPDN problem attains its minimum
- `lem-ip-robust-nsp-block-tail-estimate` · lemma — A block-tail estimate for the largest coordinates
- `alg-ip-basis-pursuit-denoising` · algorithm — Certified basis-pursuit denoising by primal-dual hybrid gradient
- `lem-ip-best-s-term-l1-sparse-vector-formulation` · lemma — The coordinate-tail and sparse-vector formulations of best s-term error agree
- `lem-ip-largest-s-coordinates-attain-best-s-term-l1-error` · lemma — The largest coordinates attain the best s-term ℓ1 error
- `thm-ip-robust-nsp-noisy-recovery-bound` · theorem — Robust nullspace property gives stable noisy recovery

### `compressed-sensing-with-noise-and-model-selection-examples` — Stable compressed sensing with noise — Examples and Counterexamples

- `ex-ip-34-scope-and-boundary-cases` · example — Bounded noise, compressible truth, and a large nullspace component

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `compressed-sensing-with-noise-and-model-selection` requires `sparse-recovery-and-nullspace-certificates`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

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
