# Step 4 batch reviewer — batch **36**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **36**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["36"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 36 | `attention-and-transformer-expressivity` | A | feedforward-networks-and-universal-approximation |
| 36 | `attention-and-transformer-expressivity-examples` | B | attention-and-transformer-expressivity |

## Your content, in full

### `attention-and-transformer-expressivity` — Attention, transformer universality, and sequence limits

- `lem-2dyck-pcfg-prefix-mass-positive` · lemma — Exact 2DYCK PCFG prefix laws and positive paired-prefix mass
- `def-scaled-dot-product-attention` · definition — Scaled dot-product attention
- `def-positional-encoding-and-causal-mask` · definition — Positional encodings and causal masks
- `lem-paired-crossentropy-mixture-bound` · lemma — Close paired predictions incur mixture entropy
- `def-multihead-self-attention` · definition — Multi-head attention and self-attention
- `def-hahn-hard-soft-attention-sequence-model` · definition — Hard and soft attention sequence models
- `def-transformer-encoder-decoder-layer` · definition — Transformer encoder, decoder, and fixed-width expressivity blocks
- `lem-hard-attention-depth-reduction` · lemma — Hard-attention depth reduction under input restrictions
- `thm-hard-attention-languages` · theorem — Fixed-depth hard attention cannot recognize PARITY or 2DYCK
- `lem-soft-attention-one-symbol-influence` · lemma — A nonfinal token has inverse-length influence under bounded soft attention
- `thm-soft-attention-parity-chance-limit` · theorem — Fixed soft attention has no parity advantage over the unigram predictor
- `alg-transformer-forward-pass` · algorithm — Transformer encoder-decoder forward pass
- `thm-transformer-permutation-equivariance-without-position` · theorem — Position-free unmasked self-attention is permutation equivariant
- `lem-soft-2dyck-crossentropy-gap-paired-prefixes` · lemma — Paired-prefix lower bound for soft-attention 2DYCK prediction
- `thm-transformer-formal-language-limits` · theorem — Hard and soft attention limits for formal-language prediction
- `lem-yun-transformer-grid-lookup` · lemma — Two-head fixed-width Transformers implement finite-grid lookups
- `lem-dense-attention-cost-and-path-length` · lemma — Dense full-attention interaction cost and path length
- `thm-fixed-width-transformer-lp-universality` · theorem — Fixed-width Transformer approximation on compact domains

### `attention-and-transformer-expressivity-examples` — Attention, transformer universality, and sequence limits — Examples

- `ex-position-free-vs-position-encoded-token-order` · example — Position-free versus position-encoded token order
- `ex-two-token-causal-next-token-mask` · example — A two-token causal next-token mask
- `ex-fixed-length-vs-unbounded-sequence-limits` · example — Fixed-length universality and unbounded sequence limits

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `attention-and-transformer-expressivity` requires `feedforward-networks-and-universal-approximation`
- `foundation-models-transfer-and-scaling-evidence` requires `attention-and-transformer-expressivity`
- `exact-tiled-attention-and-memory-aware-differentiation` requires `attention-and-transformer-expressivity`
- `low-rank-adaptation-and-parameter-update-geometry` requires `attention-and-transformer-expressivity`
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
