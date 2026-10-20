# Step 4 batch reviewer — batch **35**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **35**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["35"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 35 | `recurrent-and-state-space-networks` | A | the-spectral-theorem-and-singular-value-decomposition, the-lebesgue-integral-and-the-convergence-theorems |
| 35 | `recurrent-and-state-space-networks-examples` | B | recurrent-and-state-space-networks |

## Your content, in full

### `recurrent-and-state-space-networks` — Recurrent, LSTM, and structured state-space models

- `def-recurrent-neural-network` · definition — Shared-parameter recurrent neural network
- `def-linear-state-space-model` · definition — Continuous-time linear state-space model
- `alg-radix-two-fft` · algorithm — Radix-two discrete Fourier transform
- `lem-woodbury-dplr-bilinear-inverse` · lemma — Woodbury inverse for a diagonal-plus-low-rank update
- `def-lstm-cell` · definition — Standard LSTM cell
- `def-s4-dplr-parameterization` · definition — DPLR structured state-space parameterization
- `lem-roots-of-unity-fft-complexity` · lemma — Roots-of-unity orthogonality and radix-two FFT cost
- `alg-cauchy-matvec-at-roots-of-unity` · algorithm — Exact Cauchy matrix-vector product on a radix-two root grid
- `thm-hippo-leg-matrices-have-low-rank-structure` · theorem — HiPPO LegS, LegT, and LagT generators have normal-plus-low-rank form
- `alg-s4-state-space-recurrence-and-convolution` · algorithm — S4 state-space recurrence and convolution procedure
- `thm-cauchy-matvec-at-roots-of-unity-exact-cost` · theorem — Exact roots-of-unity Cauchy matvec has quasi-linear arithmetic cost
- `thm-dplr-discretized-step-linear-cost` · theorem — A fixed-rank DPLR bilinear recurrent step has linear arithmetic cost
- `lem-s4-convolution-root-of-unity-reduction` · lemma — DPLR SSM filter values reduce to Cauchy products
- `thm-cauchy-root-grid-matvec-numerical-cost` · theorem — Numerical Cauchy products on a root grid with explicit accuracy scale
- `thm-s4-convolution-filter-complexity` · theorem — S4 convolution-filter arithmetic and numerical cost

### `recurrent-and-state-space-networks-examples` — Recurrent, LSTM, and structured state-space models — Examples

- `ex-lstm-scalar-gates` · example — A scalar LSTM cell with constant gates
- `ex-s4-scalar-recurrent-and-convolutional-views` · example — A scalar state-space layer has matching recurrent and convolutional outputs
- `ex-s4-filter-cost-excludes-training` · example — The filter-operation bound is not a training-cost bound

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
